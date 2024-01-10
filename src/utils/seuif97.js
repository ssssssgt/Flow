// const seuif97 = require('../seuif97/build/Release/seuif97.node');
// const propertyIDMap = {
//     0: '压力',
//     1: '温度',
//     2: '密度',
//     3: '比容',
//     4: '焓',
//     5: '熵',
//     6: '用',
//     7: '内能',
//     8: '定压比热容',
//     9: '定容比热容',
//     10: '声速',
//     11: '定熵指数',
//     12: '亥姆霍兹自由能',
//     13: '吉布斯自由能',
//     14: '可压缩性因子',
//     15: '干度',
//     16: '区域',
//     17: '定压热膨胀系数',
//     18: '等温压缩率',
//     19: '偏导数 (dV/dT)p',
//     20: '偏导数 (dV/dP)T',
//     21: '偏导数 (dP/dT)v',
//     22: '等温Joule-Thomson系数',
//     23: 'Joule-Thomson系数',
//     24: '动力粘度',
//     25: '运动粘度',
//     26: '导热系数',
//     27: '热扩散系数',
//     28: '普朗特数',
//     29: '表面张力',
// }
//  //计算蒸汽密度时，默认压力单位为MPa(绝),温度为摄氏度
//  //uint变量表示压力单位
// function density(p,t,uint){
//     if(uint=="KPa(绝)"){
//         p=p/1000;
//     }else if (uint=="KPa(表)"){
//         p=(p+101.325)/1000;
//     }else if(uint=="MPa(表)"){
//         p=p+101.325;
//     }else if(uint=="bar(表)"){
//         p=((p*101.325)+101.325)/1000;
//     }else if (uint=="bar(绝)"){
//         p=(p*101.325)/1000;
//     }
//     const propertyID = 2;
//     let res=seuif97.getSeuif97Result(p,t,propertyID);
//     return Number(res.toFixed(2));
// }

// //计算压力，根据温度t和干度x，得到的压力单位是MPa(绝)
// function pressure(t,x){
//     const propertyID = 0;
//     let res=seuif97.getSeuif97Seutx(t,x,propertyID); 
//     return Number(res.toFixed(2));
// }

// function temperature(p,x,uint){
//     if(uint=="KPa(绝)"){
//         p=p/1000;
//     }else if (uint=="KPa(表)"){
//         p=(p+101.325)/1000;
//     }else if(uint=="MPa(表)"){
//         p=p+101.325;
//     }else if(uint=="bar(表)"){
//         p=((p*101.325)+101.325)/1000;
//     }else if (uint=="bar(绝)"){
//         p=(p*101.325)/1000;
//     }
//     const propertyID = 1;
//     let res=seuif97.getSeuif97Seupx(p,x,propertyID);
//     return Number(res.toFixed(2));
// }

// let r=density(0.45,40,"MPa(绝)");
// console.log(r);

// let r2=pressure(60,0.5);
// console.log(r2)

// let r3=temperature(r2,0.5,"MPa(绝)");
// console.log(r3)

// let p=density(r2,r3,"MPa(绝)");
// console.log(p)
