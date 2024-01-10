//连接已创建的数据库
var db = openDatabase('flowmeters','1.0','流量计选型数据库',5*1024*1024);
//查询涡街流量计对应的输出类型信息（完成）--要不要传入id 只有涡街流量计才有
export function getType_of_output() {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select * from type_of_output', [], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }
  
//查询显示类型信息（功能）--完成
export function getFunction_type(obj) {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select id,type_name,encode from function_type where flowmeter_type_id=?', [obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//查询表体材料信息--完成
export function getBody_materials(obj) {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select id,type_name,encode from body_materials where flowmeter_type_id=?', [obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//查询检测体材料信息--完成
export function getCheckbody_materials(obj) {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select id,type_name from checkbody_materials where flowmeter_type_id=?', [obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//查询公称口径信息--完成
export function getNomial_diamete(obj) {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select id,type_name,encode from nomial_diameter where flowmeter_type_id=?', [obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

// 查询公称压力信息--完成
export function getNominal_pressures() {
    return new Promise((reslove,reject)=>{
      db.transaction(function(tx) {
        tx.executeSql('select * from nominal_pressures', [], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//查询送器壳体材质表信息--写死--铝合金
export function getChangebody_materials(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select id,type_name from changebody_materials where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询本体材料信息--完成
export function getBdy_materialtable() {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from body_materialtable ', [], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//查询发生体材质--完成
export function getGenerating_bodytable(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from generating_bodytable where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询探头材质信息--完成
export function getProbe_material(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from probe_material where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询防爆设计信息--完成
export function getExplosion_proof_designs(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from explosion_proof_designs where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询供电电源信息--完成
export function getPower_supplys(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from power_supplys where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询通讯协议信息--完成
export function getCommunications(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from communications where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询通讯接口信息--完成
export function getCommunications_interfaces(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from communications_interfaces where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询仪表结构信息--完成
export function getInstrument(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from instruments where instrument_type_id=? and flowmeter_type_id=?', [obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询流量计防护等级信息--完成
export function getProtections(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from  protections where instrument_type_id=? and flowmeter_type_id=?', [obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询仪准确度等级信息--完成
export function getAccurategrades(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from accurategrades where instrument_type_id=? and flowmeter_type_id=?', [obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}


//查询流量计法兰材质信息表---改过--完成
export function getFLmaterials(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from FLmaterials where flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询分体电缆长度信息表--改过--完成
export function getSlipcables(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from slipcables where  flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//查询电器类型接口信息--电器接口形式--改过--完成
export function getEleinfterfaces(obj) {
  return new Promise((reslove,reject)=>{
    db.transaction(function(tx) {
      tx.executeSql('select * from eleinfterfaces where  flowmeter_type_id=?', [obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
