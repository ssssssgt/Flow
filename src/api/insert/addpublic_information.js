//连接已创建的数据库
var db = openDatabase('flowmeters','1.0','流量计选型数据库',5*1024*1024);

// 添加涡街流量计专属输出类型信息（完成）
export function addType_of_output(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into type_of_output (type_name,encode) values(?,?)', [obj.ty_name, obj.encode], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//添加显示类型信息（功能）--完成
export function addFunction_type(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into function_type (type_name,encode,flowmeter_type_id) values(?,?,?)', [obj.type_name,obj.encode,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//添加表体材料信息--完成
export function addBody_materials(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into body_materials (type_name,encode,flowmeter_type_id) values(?,?,?)', [obj.ty_name,obj.encode,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
}

//添加检测体材料信息--视频里面没有--跟公司讲
export function addCheckbody_materials(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into checkbody_materials (type_name,flowmeter_type_id) values(?,?)', [obj.ty_name,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//添加变送器壳体材质表信息--视频是个输入框--写死 写铝合金
export function addChangebody_materials(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into changebody_materials (type_name,flowmeter_type_id) values(?,?)', [obj.ty_name,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//添加公称口径信息--完成
export function addNomial_diameter(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into nomial_diameter (type_name,encode,flowmeter_type_id) values(?,?,?)', [obj.ty_name,obj.encode,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
}

//添加公称压力信息（完成）
export function addNominal_pressures(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into nominal_pressures (type_name,encode) values(?,?)', [obj.ty_name, obj.encode], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//添加本体材料信息(本体材质)--视频没有本体材质--跟公司讲
export function addBody_materialtable(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into body_materialtable (type_name) values(?)', [obj.ty_name], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }

//添加发生体材质信息--完成
export function addGenerating_bodytable(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into generating_bodytable (type_name,flowmeter_type_id) values(?,?)', [obj.ty_name,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
}

//添加探头材质信息--完成
export function addProbe_material(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into probe_material (type_name,encode,flowmeter_type_id) values(?,?,?)', [obj.ty_name,obj.encode,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
}

//添加防爆设计信息--完成
export function addExplosion_proof_designs(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into explosion_proof_designs (type_name,encode,flowmeter_type_id) values(?,?,?)', [obj.ty_name,obj.encode,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
}
//添加供电电源
export function addPower_supplys(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into power_supplys (electric_name,electric_encode,flowmeter_type_id) values(?,?,?)', 
      [obj.electric_name,obj.electric_encode,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//添加通讯协议信息
export function addCommunications(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into communications (communication_name,communication_encode,flowmeter_type_id) values(?,?,?)', 
      [obj.communication_name,obj.communication_encode,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//添加通讯接口信息
export function addCommunications_interfaces(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into communications_interfaces (interface_name,interface_encode,flowmeter_type_id) values(?,?,?)', 
        [obj.interface_name,obj.interface_encode,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
}
//添加仪表结构信息
export function addInstruments(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into instruments (instrument_name,instrument_encode,instrument_type_id,flowmeter_type_id) values(?,?,?,?)', 
      [obj.instrument_name,obj.instrument_encode,obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//流量计防护等级信息
export function addProtections(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into protections (protection_name,instrument_type_id,flowmeter_type_id) values(?,?,?)', 
      [obj.protection_name,obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//添加准确度等级信息
export function addAccurategrades(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into accurategrades (accurategrade_name,instrument_type_id,flowmeter_type_id) values(?,?,?)', 
        [obj.accurategrade_name,obj.instrument_type_id,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
}
//添加流量计法兰材质
export function add_FLmaterials(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into FLmaterials (FLmaterial_name,flowmeter_type_id) values(?,?)', 
      [obj.FLmaterial_name,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//添加分体电缆长度
export function addSlipcables(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into slipcables (slipcable_name,flowmeter_type_id) values(?,?)', 
      [obj.slipcable_name,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//添加电器类型接口信息
export function addEleinfterfaces(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into eleinfterfaces (eleinfterface_name,flowmeter_type_id) values(?,?)', 
        [obj.eleinfterface_name,obj.flowmeter_type_id], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
}
  
//-----------------------------------------------------添加信息函数部分-------------------------------------------------------------------
//注最高温度、最高压力、插入连接形式数据直接写死在下拉框列表中，视频里面有数据


export function addType_of_outputs(){
 //添加涡街流量计专属输出类型信息
 addType_of_output({ty_name:'脉冲信号',encode:'ME'});
 addType_of_output({ty_name:'4-20MA(两线)',encode:'TE'});
 addType_of_output({ty_name:'4-20MA(三线)',encode:'TS'});
 addType_of_output({ty_name:'温压一体电流输出',encode:'TW'});
}

export function addFunction_types(){
  //添加显示类型信息（功能）
  addFunction_type({type_name:'无现场显示',encode:'A',flowmeter_type_id:1});
  addFunction_type({type_name:'现场显示电池供电',encode:'B',flowmeter_type_id:1});
  addFunction_type({type_name:'现场显示，系统供电',encode:'D',flowmeter_type_id:1});
}

export function addBody_Materials(){
  //添加表体材料信息
  addBody_materials({ty_name:'304不锈钢',encode:'A',flowmeter_type_id:1});
  addBody_materials({ty_name:'316L',encode:'B',flowmeter_type_id:1});
  addBody_materials({ty_name:'碳钢',encode:'C',flowmeter_type_id:1});
}
export function add_Checkbody_materials(){
  //添加检测体材料信息
  addCheckbody_materials({ty_name:'304不锈钢',flowmeter_type_id:1,});
  addCheckbody_materials({ty_name:'316L',flowmeter_type_id:1,});
}
export function addNomial_diameters(){
  //添加公称口径信息
  addNomial_diameter({ty_name:'DN15',encode:'01',flowmeter_type_id:1});
  addNomial_diameter({ty_name:'DN20',encode:'02',flowmeter_type_id:1});
  addNomial_diameter({ty_name:'DN25',encode:'02',flowmeter_type_id:1});
}
export function add_Nominal_pressures(){
  //添加公称压力信息
  addNominal_pressures({ty_name:'PN16',encode:'A',flowmeter_type_id:1});
  addNominal_pressures({ty_name:'PN20 Class150',encode:'B',flowmeter_type_id:1});
  addNominal_pressures({ty_name:'PN25',encode:'C',flowmeter_type_id:1});
  addNominal_pressures({ty_name:'PN40',encode:'D',flowmeter_type_id:1});
}
export function addBody_materialtables(){
  //添加本体材料信息
  addBody_materialtable({ty_name:'316L不锈钢'});
}
export function addGenerating_bodytables(){
  //添加发生体材质信息
  addGenerating_bodytable({ty_name:'316L不锈钢',flowmeter_type_id:1});
  addGenerating_bodytable({ty_name:'304不锈钢',flowmeter_type_id:1});
  addGenerating_bodytable({ty_name:'铝合金',flowmeter_type_id:1});
}
export function addProbe_materials(){
  //添加探头材质信息
  addProbe_material({ty_name:'304不锈钢',encode:'1',flowmeter_type_id:1});
  addProbe_material({ty_name:'哈C',encode:'2',flowmeter_type_id:1});
  addProbe_material({ty_name:'316L不锈钢',encode:'9',flowmeter_type_id:1});
}
export function add_Explosion_proof_designs(){
  //添加防爆设计信息
  addExplosion_proof_designs({ty_name:'非防爆型',encode:'A',flowmeter_type_id:1});
  addExplosion_proof_designs({ty_name:'本案防爆型',encode:'B',flowmeter_type_id:1});
  addExplosion_proof_designs({ty_name:'隔爆型',encode:'G',flowmeter_type_id:1});
}
export function add_Power_supplys(){
  //添加供电电源
  addPower_supplys({electric_name:'DC12V',electric_encode:'1',flowmeter_type_id:1});
  addPower_supplys({electric_name:'DV24V',electric_encode:'2',flowmeter_type_id:1});
  addPower_supplys({electric_name:'12V DC',electric_encode:'1',flowmeter_type_id:2});
}
export function add_Communications(){
  //添加通讯协议
  addCommunications({communication_name:'无通讯协议',communication_encode:'A',flowmeter_type_id:1});
  addCommunications({communication_name:'HART协议',communication_encode:'H',flowmeter_type_id:1});
  addCommunications({communication_name:'MODBUS RTU',communication_encode:'B',flowmeter_type_id:1});
}
export function add_Communications_interfaces(){
  //添加通讯接口
  addCommunications_interfaces({interface_name:'无通讯接口',interface_encode:'0',flowmeter_type_id:1});
  addCommunications_interfaces({interface_name:'无线',interface_encode:'1',flowmeter_type_id:1});
  addCommunications_interfaces({interface_name:'RS 485',interface_encode:'2',flowmeter_type_id:1});
}
export function add_Instruments(){
  //添加仪表结构
  addInstruments({instrument_name:'一体型',instrument_encode:'A',instrument_type_id:1,flowmeter_type_id:1});
  addInstruments({instrument_name:'分体型',instrument_encode:'R',instrument_type_id:1,flowmeter_type_id:1});
  addInstruments({instrument_name:'潜水型(IP68)',instrument_encode:'Q',instrument_type_id:1,flowmeter_type_id:1});
}
export function add_Protections(){
  //添加流量计防护等级
  addProtections({protection_name:'IP65',instrument_type_id:1,flowmeter_type_id:1});
  addProtections({protection_name:'IP66',instrument_type_id:1,flowmeter_type_id:1});
  addProtections({protection_name:'IP67',instrument_type_id:1,flowmeter_type_id:1});
}
export function add_Accurategrades(){
  //添加准确度等级
  addAccurategrades({accurategrade_name:'0.5级',instrument_type_id:1,flowmeter_type_id:1});
  addAccurategrades({accurategrade_name:'1级',instrument_type_id:1,flowmeter_type_id:1});
  addAccurategrades({accurategrade_name:'1.5级',instrument_type_id:1,flowmeter_type_id:1});
}
export function addFLmaterials(){
  //添加法兰材质
  add_FLmaterials({FLmaterial_name:'无',flowmeter_type_id:1});
  add_FLmaterials({FLmaterial_name:'碳钢',flowmeter_type_id:1});
  add_FLmaterials({FLmaterial_name:'304不锈钢',flowmeter_type_id:1});
}
export function add_Slipcables(){
  //添加分体电缆长度
  addSlipcables({slipcable_name:'无',flowmeter_type_id:1});
  addSlipcables({slipcable_name:'5米',flowmeter_type_id:1});
  addSlipcables({slipcable_name:'15米',flowmeter_type_id:1});
}
export function add_Eleinfterfaces(){
  //添加电器类型接口
  addEleinfterfaces({eleinfterface_name:'无',flowmeter_type_id:1});
  addEleinfterfaces({eleinfterface_name:'M20X1.5',flowmeter_type_id:1});
  addEleinfterfaces({eleinfterface_name:'1/2NPT',flowmeter_type_id:1});
}


//obj.eleinfterface_name,obj.flowmeter_type_id