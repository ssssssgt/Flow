//连接已创建的数据库
var db = openDatabase('flowmeters','1.0','流量计选型数据库',5*1024*1024);

// 查询所选介质详细信息--完成
export function getMedius(obj) {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select id from mediutablestypes where type_name=?', [obj.type_name], 
        function (tx,res) {
          if (res.rows.length>0){
            var id=res.rows.item(0).id;
            tx.executeSql('select * from mediutables where mediutablestypes_id=?',[id],function (tx,res) {
                reslove(res)
              }, function (tx, err) {
                reject(err.message)
              })
          }
        },function (tx,err) {
          reject(err)
        })
      })
    })
  }
  //查询液体或气体的介质编码，不管它是什么介质，若属于气体同一用气体编码，若属于液体则统一用液体编码
//obj.type_name只填液体或气体
export function getGLmeduisecnode(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select encode from mediutablestypes where type_name=?', [obj.type_name], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询蒸汽介质信息--完成
  export function getSteammedius(obj) {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select id from mediutablestypes where type_name=?', [obj.type_name], 
        function (tx,res) {
          if (res.rows.length>0){
            var id=res.rows.item(0).id;
            tx.executeSql('select * from steammedius where mediutablestypes_id=?',[id],function (tx,res) {
                reslove(res)
              }, function (tx, err) {
                reject(err.message)
              })
          }
        },function (tx,err) {
          reject(err)
        })
      })
    })
  }
  
//查询流量计的类型ID和编码（完成）
export function getFlowmeter() {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from flowmeter_type', [], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//新增
//查询对应的流量计类型图片
export function getFlowmeter_image(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select image from flowmeter_image where instrument_type_id=? and flowmeter_type_id=?', [obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询仪表类型的编码和ID（完成）
export function getInstrument_type(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select id,type_name,encode from instrument_type where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询连接方式编码和ID--是否要传参数--完成
export function getConnection_types() {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from connection_types', [], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询连接标准类型和ID---完成
export function getConnection_standard() {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select id,cstandard_name from connection_standard ', [], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
