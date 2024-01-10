<template>
    <!-- 模板内容 -->
  </template>
  
  <script>
  import { mediutablestypes,mediutables,steammedius,createflowmeter,createinstrument_type,createconnection_types,connection_standard,clamp_structuretable,flan_structuretable,clamp_sizeimage,bore_informations,lflowtables,steamstable,type_of_output,function_type,body_materials,checkbody_materials,createflowmeterimage,protections} from '@/api/create/createDB';
  import { nomial_diameter,nominal_pressures,body_materialtable,generating_bodytable,probe_material,explosion_proof_designs,power_supplys,communications,communications_interfaces,instruments,FLmaterials,accurategrades,slipcables,eleinfterfaces,gflowtables} from '@/api/create/createDB';
  import { add_Mediuclass,add_Medius,add_Steammedium,add_flowmeter,add_instrument,add_Connectionmeans,add_Connection_standards,add_Clamp_structuretables,add_Flan_structuretables,add_Clamp_sizeimages,addBore_Informations,add_Lflowtables,add_Steamstables,add_gflowtables,add_Flowmeterimage} from '@/api/insert/addflowmeter';
  import { addType_of_outputs,addFunction_types,addBody_Materials,add_Checkbody_materials,addNomial_diameters,add_Nominal_pressures,addBody_materialtables,addGenerating_bodytables,addProbe_materials,add_Explosion_proof_designs,add_Power_supplys,add_Communications,add_Communications_interfaces,add_Instruments,add_Protections,add_Accurategrades,addFLmaterials,add_Slipcables,add_Eleinfterfaces } from '@/api/insert/addpublic_information';
  export default {
    name: 'Db',
    data() {
      return {
        dbConnection: null, // 数据库连接对象
      };
    },
    created() {
    this.dbConnection = window.openDatabase('flowmeters', '1.0', '流量计选型数据库', 5 * 1024 * 1024);
    this.checkTableExists('mediutablestypes').then(tableExists => {
      if (tableExists) {
        // console.log('表1存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        mediutablestypes().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Mediuclass();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('mediutables').then(tableExists => {
      if (tableExists) {
        // console.log('表2存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        mediutables().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Medius();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('steammedius').then(tableExists => {
      if (tableExists) {
        // console.log('表3存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        steammedius().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Steammedium();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('flowmeter_type').then(tableExists => {
      if (tableExists) {
        // console.log('表4存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        createflowmeter().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_flowmeter();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('instrument_type').then(tableExists => {
      if (tableExists) {
        // console.log('表5存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        createinstrument_type().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_instrument();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('connection_types').then(tableExists => {
      if (tableExists) {
        // console.log('表6存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        createconnection_types().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Connectionmeans();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('connection_standard').then(tableExists => {
      if (tableExists) {
        // console.log('表7存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        connection_standard().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Connection_standards();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('clamp_structuretable').then(tableExists => {
      if (tableExists) {
        // console.log('表8存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        clamp_structuretable().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Clamp_structuretables();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('flan_structuretable').then(tableExists => {
      if (tableExists) {
        // console.log('表9存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        flan_structuretable().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Flan_structuretables();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('clamp_sizeimage').then(tableExists => {
      if (tableExists) {
        // console.log('表10存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        clamp_sizeimage().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Clamp_sizeimages();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('bore_informations').then(tableExists => {
      if (tableExists) {
        // console.log('表11存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        bore_informations().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addBore_Informations();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('lflowtables').then(tableExists => {
      if (tableExists) {
        // console.log('表12存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        lflowtables().then((tx, res) => {
          console.log('表创建成功', tx, res);
         add_Lflowtables()
          
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('steamstable').then(tableExists => {
      if (tableExists) {
        // console.log('表13存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        steamstable().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Steamstables();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('type_of_output').then(tableExists => {
      if (tableExists) {
        // console.log('表14存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        type_of_output().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addType_of_outputs();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('function_type').then(tableExists => {
      if (tableExists) {
        // console.log('表15存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        function_type().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addFunction_types();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('body_materials').then(tableExists => {
      if (tableExists) {
        // console.log('表16存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        body_materials().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addBody_Materials();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('checkbody_materials').then(tableExists => {
      if (tableExists) {
        // console.log('表17存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        checkbody_materials().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Checkbody_materials();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('nomial_diameter').then(tableExists => {
      if (tableExists) {
        // console.log('表18存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        nomial_diameter().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addNomial_diameters();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('nominal_pressures').then(tableExists => {
      if (tableExists) {
        // console.log('表19存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        nominal_pressures().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Nominal_pressures();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('body_materialtable').then(tableExists => {
      if (tableExists) {
        // console.log('表20存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        body_materialtable().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addBody_materialtables();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('generating_bodytable').then(tableExists => {
      if (tableExists) {
        // console.log('表21存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        generating_bodytable().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addGenerating_bodytables();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('probe_material').then(tableExists => {
      if (tableExists) {
        // console.log('表22存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        probe_material().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addProbe_materials();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('explosion_proof_designs').then(tableExists => {
      if (tableExists) {
        // console.log('表23存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        explosion_proof_designs().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Explosion_proof_designs();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('power_supplys').then(tableExists => {
      if (tableExists) {
        // console.log('表24存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        power_supplys().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Power_supplys();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('communications').then(tableExists => {
      if (tableExists) {
        // console.log('表25存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        communications().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Communications();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('communications_interfaces').then(tableExists => {
      if (tableExists) {
        // console.log('表26存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        communications_interfaces().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Communications_interfaces();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('instruments').then(tableExists => {
      if (tableExists) {
        // console.log('表27存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        instruments().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Instruments();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('protections').then(tableExists => {
      if (tableExists) {
        // console.log('表28存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        protections().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Protections();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('FLmaterials').then(tableExists => {
      if (tableExists) {
        // console.log('表29存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        FLmaterials().then((tx, res) => {
          console.log('表创建成功', tx, res);
          addFLmaterials();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('accurategrades').then(tableExists => {
      if (tableExists) {
        // console.log('表30存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        accurategrades().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Accurategrades();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('slipcables').then(tableExists => {
      if (tableExists) {
        // console.log('表31存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        slipcables().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Slipcables();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('eleinfterfaces').then(tableExists => {
      if (tableExists) {
        // console.log('表32存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        eleinfterfaces().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Eleinfterfaces();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });  
    this.checkTableExists('gflowtables').then(tableExists => {
      if (tableExists) {
        // console.log('表33存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        gflowtables().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_gflowtables();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
    this.checkTableExists('flowmeter_image').then(tableExists => {
      if (tableExists) {
        // console.log('表34存在');
        // 其他逻辑
      } else {
        console.log('表不存在');
        createflowmeterimage().then((tx, res) => {
          console.log('表创建成功', tx, res);
          add_Flowmeterimage();
        console.log("插入成功")
          // 其他逻辑
        }).catch(error => {
          console.error('表创建失败', error);
        });
      }
    }).catch(error => {
      console.error(error);
    });
},
    methods: {
        //检查表是否存在
      checkTableExists(tableName) {
        return new Promise((resolve, reject) => {
          this.dbConnection.transaction(tx => {
            tx.executeSql(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`, [tableName], function(tx, res) {
              const tableExists = res.rows.length > 0;
              resolve(tableExists);
            }, function(tx, err) {
              reject(err.message);
            });
          });
        });
      },
      // 其他方法
    },
  };
  </script>