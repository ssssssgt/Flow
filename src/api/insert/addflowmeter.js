
//连接已创建的数据库
var db = openDatabase('flowmeters','1.0','流量计选型数据库',5*1024*1024);

// 添加介质类型信息（三大类）
export function addMedius(obj) {
    return new Promise((reslove,reject) =>{
      db.transaction(function (tx) {
        tx.executeSql('insert into mediutablestypes (type_name,encode) values(?,?)', [obj.ty_name, obj.encode], 
        function (tx,res) {
          reslove(res)
        }, function (tx, err) {
          reject(err.message)
        })
      })
    })
  }
//添加液体、气体等具体介质信息
export function addMediutables(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into mediutables (media_name,standar_density,viscosity,dynamic_viscosity,mediutablestypes_id) values(?,?,?,?,?)', 
      [obj.media_name, obj.standar_density,obj.viscosity,obj.dynamic_viscosity,obj.mediutablestypes_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//添加蒸汽介质具体信息
//测量介质不用下拉框，根据选择的介质名称变化
export function addSteammediu(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into steammedius (media_name,standar_density,viscosity,dynamic_viscosity,encode,mediutablestypes_id) values(?,?,?,?,?,?)', 
      [obj.media_name,obj.standar_density,obj.viscosity,obj.dynamic_viscosity,obj.encode,obj.mediutablestypes_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

// 添加流量计类型信息（完成）
export function addFlowmeter(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into flowmeter_type (type_name,encode) values(?,?)',[obj.ty_name, obj.encode], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加对应的流量计类型图片
export function add_flowmeterimage(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into flowmeter_image (image,instrument_type_id,flowmeter_type_id) values(?,?,?)',[obj.image,obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//删除所有数据
export function delAll() {
  return new Promise((reslove,reject)=>{
    db.transaction(function (tx) {
      tx.executeSql('delete from nominal_pressures', [], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })    
  })

}

//添加仪表类型信息（完成）
export function addInstrument_type(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into instrument_type (type_name,encode,flowmeter_type_id) values(?,?,?)', [obj.ty_name, obj.encode,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加连接方式信息--根据流量计类型和仪表类型的id变化
export function addConnection_types(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into connection_types (connection_name,encode,instrument_type_id,flowmeter_type_id) values(?,?,?,?)', [obj.connection_name, obj.encode,obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加连接标准信息
export function addConnection_standard(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into connection_standard (cstandard_name) values(?)', [obj.cstandard_name], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加夹持型结构尺寸表信息
export function addClamp_structuretable(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into clamp_structuretable (D,D1,D400,BL,BL400,H,H400,bore_id,instrument_type_id,flowmeter_type_id) values(?,?,?,?,?,?,?,?,?,?)', 
      [obj.D,obj.D1,obj.D400,obj.BL,obj.BL400,obj.H,obj.H400,obj.bore_id,obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加法兰型的结构尺寸表信息
export function addFlan_structuretable(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into flan_structuretable (BD,stL,wideL,tpL,senL,L400,FD1,CK,FC,d,n,H,H400,bore_id,nominal_pressures_id) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [obj.BD, obj.stL,obj.wideL,obj.tpL,obj.senL,obj.L400,obj.FD1,obj.CK,obj.FC,obj.d,obj.n,obj.H,obj.H400,obj.bore_id,obj.nominal_pressures_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加结构尺寸图信息
export function addClamp_sizeimage(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into clamp_sizeimage (name,image,connection_types_id,instrument_type_id,flowmeter_type_id) values(?,?,?,?,?)', 
      [obj.name, obj.image,obj.connection_types_id,obj.instrument_type_id,obj.flowmeter_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加口径信息
export function addBore_informations(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(function (tx) {
      tx.executeSql('insert into bore_informations (size,instrument_type_id) values(?,?)', [obj.size, obj.instrument_type_id], 
      function (tx,res) {
        reslove(res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加气体流量参考信息范围
export function addGflowtables(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('insert into gflowtables (size,gmin_standardflow,gmax_standardflow,gmin_select,gmax_select,bore_informations_id,mediutables_id,instrument_type_id) values(?,?,?,?,?,?,?,?)',
      [obj.size,obj.gmin_standardflow,obj.gmax_standardflow,obj.gmin_select,obj.gmax_select,obj.bore_informations_id,obj.mediutables_id,obj.instrument_type_id],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加液体流量参考信息
export function addLflowtables(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('insert into lflowtables (size,lmin_standardflow,lmax_standardflow,lmin_select,lmax_select,bore_informations_id,mediutables_id,instrument_type_id) values(?,?,?,?,?,?,?,?)',
      [obj.size,obj.lmin_standardflow,obj.lmax_standardflow,obj.lmin_select,obj.lmax_select,obj.bore_informations_id,obj.mediutables_id,obj.instrument_type_id],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//添加蒸汽流量范围参考信息
export function addSteamstable(obj) {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('insert into steamstable (size,pressure,temperatue,density,stflow_upperlimit,stflow_lowlimit,expandflow_upperlimit,bore_informations_id,mediutables_id,instrument_type_id) values(?,?,?,?,?,?,?,?,?,?)',
      [obj.size,obj.pressure,obj.temperatue,obj.density,obj.stflow_upperlimit,obj.stflow_lowlimit,obj.expandflow_upperlimit,obj.bore_informations_id,obj.mediutables_id,obj.instrument_type_id],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}


//------------------------------------------------------添加数据部分----------------------------------------------------------------------

export function add_Mediuclass(){
   //插入三大类介质
   addMedius({ty_name: '气体', encode: '1'});
   addMedius({ty_name: '液体', encode: '2'});
   addMedius({ty_name: '蒸汽', encode: ''});
}
export function add_Medius(){
   //插入具体介质
   addMediutables({media_name:'空气',standar_density: 1.293,viscosity:0,dynamic_viscosity:14000000,mediutablestypes_id:1});
   addMediutables({media_name:'氧气',standar_density:1.4286,viscosity:0,dynamic_viscosity:14210000,mediutablestypes_id:1});
   addMediutables({media_name:'氯气',standar_density:3.2143,viscosity:0,dynamic_viscosity:4110000,mediutablestypes_id:1});
   addMediutables({media_name:'水',standar_density:1000,viscosity:1000,dynamic_viscosity:null,mediutablestypes_id:2});
   addMediutables({media_name:'汽油',standar_density:0,viscosity:0,dynamic_viscosity:null,mediutablestypes_id:2});
   addMediutables({media_name:'机油',standar_density:800,viscosity:10000,dynamic_viscosity:null,mediutablestypes_id:2});
}
export function add_Steammedium(){
  addSteammediu({media_name:'过饱和水蒸气',standar_density:0,viscosity:null,dynamic_viscosity:null,encode:'3',mediutablestypes_id:3});
  addSteammediu({media_name:'过热水蒸气',standar_density:0,viscosity:null,dynamic_viscosity:null,encode:'9',mediutablestypes_id:3});
  addSteammediu({media_name:'其他蒸汽',standar_density:0,viscosity:null,dynamic_viscosity:null,encode:'9',mediutablestypes_id:3});
}
export function add_flowmeter(){
     // 插入流量计类型
     addFlowmeter({ty_name:'涡街流量计',encode:'10V'});
     addFlowmeter({ty_name:'旋进流量计',encode:'20VST'});
     addFlowmeter({ty_name:'电磁流量计',encode:'FBDC-'});
}
export function add_instrument(){
     //插入具体仪表类型
     addInstrument_type({ty_name:'压电标准型',encode:'A',flowmeter_type_id:1});
     addInstrument_type({ty_name:'压电双检测体型',encode:'B',flowmeter_type_id:1});
     addInstrument_type({ty_name:'压电宽量程型',encode:'K',flowmeter_type_id:1});
     addInstrument_type({ty_name:'标准型',encode:'A',flowmeter_type_id:2});
     addInstrument_type({ty_name:'温压补偿型',encode:'W',flowmeter_type_id:2});
}
export function add_Connectionmeans(){
    //插入连接方式
   addConnection_types({connection_name:'夹持型',encode:'1',instrument_type_id:1,flowmeter_type_id:1});
   addConnection_types({connection_name:'法兰连接型',encode:'1',instrument_type_id:1,flowmeter_type_id:1});
   addConnection_types({connection_name:'卫生连接型',encode:'2',instrument_type_id:1,flowmeter_type_id:1});
   addConnection_types({connection_name:'国际法兰连接',encode:'1',instrument_type_id:4,flowmeter_type_id:2});
   addConnection_types({connection_name:'DIN法兰连接',encode:'2',instrument_type_id:4,flowmeter_type_id:2});
   addConnection_types({connection_name:'ANSI法兰连接',encode:'3',instrument_type_id:4,flowmeter_type_id:2});
   addConnection_types({connection_name:'法兰连接型',encode:'0',instrument_type_id:null,flowmeter_type_id:3});
   addConnection_types({connection_name:'插入型',encode:'C',instrument_type_id:null,flowmeter_type_id:3});
}
export function add_Connection_standards(){
   //插入连接标准
   addConnection_standard({cstandard_name:'HG/T20592 PN16RF'});
   addConnection_standard({cstandard_name:'HG/T20592 PN16MF'});
   addConnection_standard({cstandard_name:'HG/T20592 PN20'});
   addConnection_standard({cstandard_name:'HG/T20592 PN25'});
   addConnection_standard({cstandard_name:'HG/T20592 PN40'});
   addConnection_standard({cstandard_name:'HG/T20592 PN50'});
   addConnection_standard({cstandard_name:'HG/T20592 PN150'});
}
export function add_Clamp_structuretables(){
  //添加夹持型结构尺寸表信息
  addClamp_structuretable({D:15,D1:85,D400:95,BL:65,BL400:50,H:330,H400:0,instrument_type_id:1,bore_id:1,flowmeter_type_id:1});
  addClamp_structuretable({D:20,D1:85,D400:100,BL:65,BL400:50,H:330,H400:0,instrument_type_id:1,bore_id:2,flowmeter_type_id:1});
  addClamp_structuretable({D:25,D1:85,D400:100,BL:65,BL400:50,H:330,H400:0,instrument_type_id:1,bore_id:3,flowmeter_type_id:1});
}
export function add_Flan_structuretables(){
   //添加法兰型结构尺寸表信息
   addFlan_structuretable({BD:15,stL:200,wideL:null,tpL:null,senL:null,L400:200,FD1:95,CK:65,FC:14,d:4,n:4,H:320,H400:null,bore_id:1,nominal_pressures_id:1});
   addFlan_structuretable({BD:20,stL:200,wideL:null,tpL:null,senL:null,L400:200,FD1:105,CK:75,FC:14,d:14,n:4,H:320,H400:null,bore_id:2,nominal_pressures_id:1});
   addFlan_structuretable({BD:25,stL:200,wideL:200,tpL:200,senL:null,L400:200,FD1:115,CK:85,FC:16,d:14,n:4,H:320,H400:null,bore_id:3,nominal_pressures_id:1});
}
export function add_Clamp_sizeimages(){
    //添加结构尺寸图信息
    addClamp_sizeimage({name:'夹持型尺寸图',image:'123445566',connection_types_id:0,instrument_type_id:1,flowmeter_type_id:1});
    addClamp_sizeimage({name:'法兰型尺寸图',image:'123445566',connection_types_id:1,instrument_type_id:1,flowmeter_type_id:1});
}
export function addBore_Informations(){
   //添加口径信息
   addBore_informations({size:15,instrument_type_id:1});
   addBore_informations({size:20,instrument_type_id:1});
   addBore_informations({size:25,instrument_type_id:1});
   addBore_informations({size:32,instrument_type_id:1});
}
  
export function add_gflowtables(){
  //添加气体流量参考信息 
  addGflowtables({size:15,gmin_standardflow:2,gmax_standardflow:40,gmin_select:2,gmax_select:100,bore_informations_id:1,mediutables_id:1,instrument_type_id:1});
  addGflowtables({size:20,gmin_standardflow:8,gmax_standardflow:60,gmin_select:8,gmax_select:120,bore_informations_id:2,mediutables_id:1,instrument_type_id:1});
  addGflowtables({size:25,gmin_standardflow:6,gmax_standardflow:50,gmin_select:6,gmax_select:60,bore_informations_id:3,mediutables_id:1,instrument_type_id:1});
  addGflowtables({size:32,gmin_standardflow:14,gmax_standardflow:100,gmin_select:14,gmax_select:150,bore_informations_id:4,mediutables_id:1,instrument_type_id:1});
  }
export function add_Lflowtables(){
  //添加液体流量参考信息 
  addLflowtables({size:15,lmin_standardflow:1,lmax_standardflow:6,lmin_select:0.8,lmax_select:8,bore_informations_id:1,mediutables_id:4,instrument_type_id:1});
  addLflowtables({size:20,lmin_standardflow:1.2,lmax_standardflow:8,lmin_select:1,lmax_select:15,bore_informations_id:2,mediutables_id:4,instrument_type_id:1});
  addLflowtables({size:25,lmin_standardflow:2,lmax_standardflow:16,lmin_select:1.6,lmax_select:18,bore_informations_id:3,mediutables_id:4,instrument_type_id:1});
  addLflowtables({size:32,lmin_standardflow:2.2,lmax_standardflow:20,lmin_select:1.8,lmax_select:30,bore_informations_id:4,mediutables_id:4,instrument_type_id:1});
}
export function add_Steamstables(){
  //添加饱和蒸汽流量范围参考信息
  addSteamstable({size:15,pressure:300,temperatue:133.54,density:1.651,stflow_upperlimit:30,stflow_lowlimit:10,expandflow_upperlimit:112,bore_informations_id:1,mediutables_id:7,instrument_type_id:1});
  addSteamstable({size:20,pressure:300,temperatue:133.54,density:1.651,stflow_upperlimit:102,stflow_lowlimit:13,expandflow_upperlimit:112,bore_informations_id:2,mediutables_id:7,instrument_type_id:1});
  addSteamstable({size:25,pressure:300,temperatue:133.54,density:1.651,stflow_upperlimit:133,stflow_lowlimit:17,expandflow_upperlimit:175,bore_informations_id:3,mediutables_id:7,instrument_type_id:1});
  addSteamstable({size:32,pressure:300,temperatue:133.54,density:1.651,stflow_upperlimit:236,stflow_lowlimit:30,expandflow_upperlimit:287,bore_informations_id:4,mediutables_id:7,instrument_type_id:1});
}

export function add_Flowmeterimage(){
  add_flowmeterimage({image:'12334',instrument_type_id:1,flowmeter_type_id:1});
  add_flowmeterimage({image:'12334',instrument_type_id:2,flowmeter_type_id:1});
  add_flowmeterimage({image:'12334',instrument_type_id:3,flowmeter_type_id:1});
}


