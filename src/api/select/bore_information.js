//连接已创建的数据库
var db = openDatabase('flowmeters','1.0','流量计选型数据库',5*1024*1024);

//查询仪表类型对应的口径信息---完成
export function getBore_informations_One(obj) {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select id,size from bore_informations where instrument_type_id=?', [obj.instrument_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//在调用以下接口时前端要写一个判断，判断其选择的介质式哪种类型
//改的
//--------------------------------------------------------------------------------------------------
 //若介质选择气体，则根据选择的仪表类型、口径id和具体介质id来查询仪表口径对应的最大可测流量、最小可测流量等信息
 export function getGflowtables_bore(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select gmin_standardflow,gmax_standardflow,gmin_select,gmax_select from gflowtables where bore_informations_id=? and instrument_type_id=? and mediutables_id=?', [obj.bore_informations_id,obj.instrument_type_id,obj.mediutables_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//若介质选择液体，则根据选择的仪表类型、口径id和具体介质id来查询仪表口径对应的最大可测流量、最小可测流量等信息
export function getLflowtables_bore(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select lmin_standardflow,lmax_standardflow,lmin_select,lmax_select from lflowtables where bore_informations_id=? and instrument_type_id=? and mediutables_id=?', [obj.bore_informations_id,obj.instrument_type_id,obj.mediutables_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//若介质选择蒸汽,同上
export function getSteamstable(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select size,stflow_upperlimit,stflow_lowlimit,expandflow_upperlimit from steamstable where bore_informations_id=? and instrument_type_id=? and mediutables_id=?', [obj.bore_informations_id,obj.instrument_type_id,obj.mediutables_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
  //----------------------------------------------------------------------------------------------------------