var db = openDatabase('flowmeters','1.0','流量计选型数据库',5*1024*1024);//数据库名 版本 数据库描述 大小
// 删除数据库里面的表
// db.transaction(function(tx) {
// tx.executeSql('DROP TABLE IF EXISTS mediutables', [], function() {
// console.log('flowmeters table dropped successfully');
// }, function(tx, error) {
// console.log('Error dropping flowmeters table: ' + error.message);
// });
// });

// 创建流量计类型表
export function createflowmeter() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists flowmeter_type('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'encode varchar(10) not null unique)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建仪表类型信息表
export function createinstrument_type() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists instrument_type('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'encode varchar(10) not null,'+' flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//新增的
//创建不同流量计不同类型对应图片表
export function createflowmeterimage() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists flowmeter_image('+'id integer primary key  autoincrement not null,'+
      'image varchar(255) not null,'+'instrument_type_id int default null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建连接方式信息表
export function createconnection_types() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists connection_types('+'id integer primary key  autoincrement not null,'+
      'connection_name varchar(50) not null,'+'encode varchar(10) not null,'+'instrument_type_id int default null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建连接标准信息表
export function connection_standard() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists connection_standard('+'id integer primary key  autoincrement not null,'+
      'cstandard_name varchar(50) not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//名字没改只是字段改了

//创建夹持型的结构尺寸表
// D是表体内径
// D1是表体外径
// D400是400摄氏度下的表体外径
// BL是表体长度
// BL400是400摄氏度下的表体长度
// H是高度即总高
// H400是是400摄氏度下的的流量计高度
//bore_id对应的口径id
//instrument_type_id是仪表类型id
//flowmeter_type_id是流量计类型id
export function clamp_structuretable() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists clamp_structuretable('+'id integer primary key  autoincrement not null,'+
      'D int default null,'+'D1 int default null,'+'D400 int default null,'+'BL int default null,'+'BL400 int default null,'+
      'H int default null,'+'H400 int default null,'+'bore_id int not null,'+'instrument_type_id int default null,'+'flowmeter_type_id not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建法兰型的结构尺寸表
// BD是表体内径
// stL是标准型长度
// wideL是宽量程型长度
// tpL是温压型长度
// senL是传感器型长度
// L400是400摄氏度型长度
// FD1是法兰外径
// CK是中心螺距
// FC法兰厚度
// d是螺栓孔径
// n是螺栓数量
// H是高度即总高
// H400是是400摄氏度下的的流量计高度
//bore_id对应的口径id
// nominal_pressures_id公称压力等级id
export function flan_structuretable() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists flan_structuretable('+'id integer primary key  autoincrement not null,'+
      'BD int check(BD>0) default null,'+'stL int  default null,'+'wideL int  default null,'+'tpL int  default null,'+'senL int default null,'+'L400 int default null,'+
      'FD1 int check(FD1>0) default null,'+'CK int check(CK>0) default null,'+'FC int check(FC>0) default null,'+'d int check(d>0) default null,'+
      'n int check(n>0) default null,'+'H int check(H>0) default null,'+'H400 int default null,'+'bore_id int not null,'+'nominal_pressures_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建结构尺寸图信息表
// name是结构尺寸图的名称
// image字段是对应的图片链接
// connection_types_id是连接类型的id
//instrument_type_id是仪表类型id
//flowmeter_type_id是流量计类型id
export function  clamp_sizeimage() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists clamp_sizeimage('+'id integer primary key  autoincrement not null,'+
      'name varchar(50) unique,'+'image varchar(255) default null,'+'connection_types_id not null,'+'instrument_type_id int null,'+'flowmeter_type_id not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

// 创建口径信息表
//口径这边DN等价于mm
// 此表各字段解释：
// size是口径大小,存储的数据单位同一为mm
// instrument_type_id是所属仪表类型的id
export function bore_informations() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists bore_informations('+'id integer primary key  autoincrement not null,'+
      'size int not null,'+'instrument_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建介质类型表
//此表各字段解释:
// 1.ty_name是介质类型名称，如气体、液体
// 2.encode是介质类型的对应编码
export function mediutablestypes() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists mediutablestypes('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(10) not null,'+' encode varchar(3) default null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//名字没改，只是字段改了
//创建介质信息表
//此表各字段解释：
// 1.media_name 是具体介质名称
// 2.standar_density是标况密度
// 3.viscosity是粘度，即动力粘度
// 4.dynamic_viscosity是标况运动粘度，只有气体有
// 4.mediutablestypes_id是具体介质所属大类，如液体、气体、蒸汽的id，可查介质类型表得到
export function mediutables() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists mediutables('+'id integer primary key  autoincrement not null,'+
      'media_name varchar(50) unique not null,'+'standar_density decimal(10,5) default null,'+'viscosity decimal(10,5) default null,'+
      'dynamic_viscosity int default null,'+'mediutablestypes_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//名字没改，只是字段改了
//蒸汽介质具体信息表
// 此表各字段解释同上表
export function steammedius() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists steammedius('+'id integer primary key  autoincrement not null,'+
      'media_name varchar(50) unique not null,'+'standar_density decimal(10,5) default null,'+'viscosity decimal(10,5) default null,'
      +'dynamic_viscosity int default null,'+'encode varchar(3) default null,'+'mediutablestypes_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}


//新增的

//创建气体流量参数表,所有流量单位是m^3/h
//此表各字段解释：
// 1、id是主键，设置成自增，用于后续不同表的查询；
// 2.size 是口径大小
// 3.gmin_standardflow是最小标准流量范围
// 4.gmax_standardflow是最大标准流量范围
// 5.gmin_select是最小可选流量范围;
// 6.gmax_select是最大可选流量范围;
// 7.bore_informations_id是口径的id，可从口径信息表获得
// 8.mediutables_id是所选气体具体介质的id
// 9.instrument_type_id是仪表类型id
export function gflowtables() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists gflowtables ('+'id integer primary key  autoincrement not null,'+
      'size int not null,'+'gmin_standardflow decimal(10,3),'+'gmax_standardflow decimal(10,3),'+'gmin_select decimal(10,3),'+'gmax_select decimal(10,3),'+
      'bore_informations_id int not null,'+'mediutables_id int not null,'+'instrument_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建液体流量范围参数表，所有流量单位是m^3/h
//此表各字段解释：
// 1、id是主键，设置成自增，用于后续不同表的查询；
// 2.size 是口径大小
// 3.lmin_standardflow是最小标准流量范围
// 4.lmax_standardflow是最大标准流量范围
// 5.lmin_select是最小可选流量范围;
// 6.lmax_select是最大可选流量范围;
// 7.bore_informations_id是口径的id，可从口径信息表获得
// 8.mediutables_id是所选液体具体介质的id
// 9.instrument_type_id是仪表类型id

export function lflowtables() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists lflowtables ('+'id integer primary key  autoincrement not null,'+
      'size int not null,'+'lmin_standardflow decimal(10,3),'+'lmax_standardflow decimal(10,5),'+'lmin_select decimal(10,3),'+'lmax_select decimal(10,3),'+
      'bore_informations_id int not null,'+'mediutables_id int not null,'+'instrument_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建饱和蒸汽流量范围参数表
//此表各字段解释：
// 1、id是主键，设置成自增，用于后续不同表的查询；
// 2.size 是口径大小
// 3.pressure是绝压,单位为KPa
// 4.temperatue是温度，单位为摄氏度
// 5.density是密度，蒸汽介质密度
// 6.lmax_select是最大可选流量范围;
// 7.stflow_upperlimit是标准流量下限
// 8.stflow_lowlimit是标准流量上限
//9.expandflow_upperlimit可拓展流量最大上限
// 7.bore_informations_id是口径的id，可从口径信息表获得
// 8.mediutables_id是所选具体介质的id
// 9.instrument_type_id是仪表类型id
export function steamstable() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists steamstable ('+'id integer primary key  autoincrement not null,'+
      'size int not null,'+' pressure decimal(10,3),'+'temperatue decimal(10,3),'+'density decimal(10,3),'+'stflow_upperlimit int,'+'stflow_lowlimit int,'+'expandflow_upperlimit int,'+
      'bore_informations_id int not null,'+'mediutables_id int not null,'+'instrument_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//---------------------------------------------------------------------公共信息表----------------------------------------------------------------------------------
//创建涡街流量计输出类型选项信息表
export function type_of_output() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists type_of_output('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null unique,'+'encode varchar(5) not null unique)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建显示类型表 (通过所属流量计类型编号来查询）
export function function_type() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists function_type('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'encode varchar(5) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建表体材料(通过所属流量计类型编号来查询）
export function body_materials() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists body_materials('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'encode varchar(5) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建检测体材料信息表(通过所属流量计类型编号来查询）
export function checkbody_materials() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists checkbody_materials('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建变送器壳体材质表信息表(通过所属流量计类型编号来查询）
export function changebody_materials() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists changebody_materials('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null unique,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建公称口径信息表
export function nomial_diameter() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists nomial_diameter('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'encode varchar(5) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建公称压力信息表
export function nominal_pressures() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists nominal_pressures('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null unique,'+'encode varchar(3) not null unique)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建本体材料信息表
export function body_materialtable() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists body_materialtable('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null unique)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}
//创建发生体材质
export function generating_bodytable() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists generating_bodytable('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建探头材质信息表
export function probe_material() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists probe_material('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'encode varchar(3) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建防爆设计信息表
export function explosion_proof_designs() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists explosion_proof_designs('+'id integer primary key  autoincrement not null,'+
      'type_name varchar(50) not null,'+'encode varchar(3) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建供电电源信息表
export function power_supplys() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists power_supplys ('+'id integer primary key autoincrement not null,'+
      'electric_name varchar(50) not null,'+'electric_encode varchar(3) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建通讯协议信息表
export function communications() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists communications('+'id integer primary key  autoincrement not null,'+
     'communication_name varchar(50) not null,'+'communication_encode varchar(3) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建通讯接口信息表
export function communications_interfaces() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists communications_interfaces('+'id integer primary key  autoincrement not null,'+
      'interface_name varchar(50) not null,'+'interface_encode varchar(3) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建仪表结构
export function instruments(){
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists instruments('+'id integer primary key  autoincrement not null,'+
      'instrument_name varchar(50) not null,'+'instrument_encode varchar(3) not null,'+'instrument_type_id int not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建流量计防护等级
export function protections(){
  return new Promise((reslove,reject) =>{
db.transaction(tx => {
      tx.executeSql('create table if not exists protections('+'id integer primary key  autoincrement not null,'+'protection_name varchar(10) not null,'+
      'instrument_type_id int not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//准确度等级信息表
export function accurategrades(){
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists accurategrades('+'id integer primary key  autoincrement not null,'+
      'accurategrade_name varchar(10) not null,'+'instrument_type_id int not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建电器接口信息表
export function eleinfterfaces() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists eleinfterfaces('+'id integer primary key  autoincrement not null,'+
      'eleinfterface_name varchar(10) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//创建分割电缆长度信息表
export function slipcables(){
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists slipcables ('+'id integer primary key autoincrement not null,'+
      'slipcable_name varchar(10) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

//法兰材质信息表
export function FLmaterials() {
  return new Promise((reslove,reject) =>{
    db.transaction(tx => {
      tx.executeSql('create table if not exists FLmaterials ('+'id integer primary key autoincrement not null,'+
      'FLmaterial_name varchar(20) not null,'+'flowmeter_type_id int not null)',[],
      function (tx,res) {
        reslove(tx,res)
      }, function (tx, err) {
        reject(err.message)
      })
    })
  })
}

















