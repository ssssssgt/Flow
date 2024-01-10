<template>
    <div id="app">
        <el-row>
            <el-button type="primary" @click="exportWord()">点击导出</el-button>
        </el-row>
        <CanvasEcharts ref="canvas" :option="option"></CanvasEcharts>
    </div>
</template>

<script>
    import { ExportBriefDataDocx } from "@/utils/export";
    import CanvasEcharts from "@/components/echarts";
    import { bus } from "@/main.js";
    export default {
        name: "exportWord",
        data () {
            return {
                cData: [], // 接收Chart页面接收到的数据
                tData: [], // 接收项目信息页面数据
                lData: [], // 接收压损页面数据
                dsData: [], // 接收结构尺寸图
                dmData: [], // 接收流量计安装尺寸
                mData: [], // 接收流量计材质
                sfData: [], // 流量计规格 
                asData: [], // 流量计附件
                crData: [], // 计算结果
                csData: [], // 多口径比对 
                ppData: [], // 工艺参数 
                fData: [], // 介质参数
                option: {}, //echart图的配置存储，后续补上
                tableData: [
                    {
                        username: "",
                        number: "",
                        project: "",
                        connect_phone: "",
                        flowtype: "",
                    },
                ],
                ChartData: [
                    {
                        meflow_min: "",
                        meflow_max: "",
                        mef_unity: "",
                        lineflow_min: "",
                        lineflow_max: "",
                        linef_unity: "",
                    },
                ],
                LossData: [
                    {
                        flow_0: "",
                        flow_1: "",
                        flow_2: "",
                        flow_3: "",
                        flow_4: "",
                        flow_5: "",
                        flow_6: "",
                        flow_7: "",
                        flow_8: "",
                        flow_9: "",
                        flow_10: "",
                        fv_0: "",
                        fv_1: "",
                        fv_2: "",
                        fv_3: "",
                        fv_4: "",
                        fv_5: "",
                        fv_6: "",
                        fv_7: "",
                        fv_8: "",
                        fv_9: "",
                        fv_10: "",
                        meerro_0: "",
                        meerro_1: "",
                        meerro_2: "",
                        meerro_3: "",
                        meerro_4: "",
                        meerro_5: "",
                        meerro_6: "",
                        meerro_7: "",
                        meerro_8: "",
                        meerro_9: "",
                        meerro_10: "",
                        preloss_0: "",
                        preloss_1: "",
                        preloss_2: "",
                        preloss_3: "",
                        preloss_4: "",
                        preloss_5: "",
                        preloss_6: "",
                        preloss_7: "",
                        preloss_8: "",
                        preloss_9: "",
                        preloss_10: "",
                    },
                ],
                TD: [ // 31
                    {
                        v1: "",
                        v2: "",
                        v3: "",
                        v4: "",
                        v5: "",
                        v6: "",
                        v7: "",
                        v8: "",
                        v9: "",
                        v10: "",
                        v11: "",
                        v12: "",
                        v13: "",
                        v14: "",
                        v15: "",
                        e1: "",
                        e2: "",
                        e3: "",
                        e4: "",
                        e5: "",
                        e6: "",
                        e7: "",
                        e8: "",
                        e9: "",
                        e10: "",
                        e11: "",
                        e12: "",
                        e13: "",
                        e14: "",
                        e15: "",
                        resultString: "",
                    },
                ],
                SpecData: [ // 24
                    {
                        size: "",
                        maxtemperatue: "",
                        enoughflow: "",
                        outmethod: "",
                        explosionproof: "",
                        bodymaterial: "",
                        checkbody: "",
                        changebody: "",
                        connection: "",
                        instrument: "",
                        compensation: "",
                        protectiongrad: "",
                        accurategrade: "",
                        maxpressure: "",
                        maxloss: "",
                        currentout: "",
                        explosionsingle: "",
                        generating: "",
                        flan: "",
                        electriaclinterface: "",
                        connectionstandard: "",
                        slipcable: "",
                        insertmethod: "",
                        electrictable: "",
                    },
                ],
                AcceData: [
                    {
                        flangebolts: "",
                        sealinggaskets: "",
                        pipsupports: "",
                        materialbolts: "",
                        gaskets: "",
                        specification: "",
                    },
                ],
                SD: [  // 30
                    {
                        ms: "",
                        ms1: "",
                        ms2: "",
                        ms3: "",
                        ms4: "",
                        ms5: "",
                        ms6: "",
                        ms7: "",
                        ms8: "",
                        ms9: "",
                        cs: "",
                        cs1: "",
                        cs2: "",
                        cs3: "",
                        cs4: "",
                        cs5: "",
                        cs6: "",
                        cs7: "",
                        cs8: "",
                        cs9: "",
                        as: "",
                        as1: "",
                        as2: "",
                        as3: "",
                        as4: "",
                        as5: "",
                        as6: "",
                        as7: "",
                        as8: "",
                        as9: "",
                    },
                ],
                FD: [ // 18
                    {
                        ms1: "",
                        ms2: "",
                        ms3: "",
                        ms4: "",
                        ms5: "",
                        ms6: "",
                        ns1: "",
                        ns2: "",
                        ns3: "",
                        ns4: "",
                        ns5: "",
                        ns6: "",
                        as1: "",
                        as2: "",
                        as3: "",
                        as4: "",
                        as5: "",
                        as6: "",
                    },
                ],
                Ot: [ // 20
                    {
                        if: "",
                        nf: "",
                        af: "",
                        mu: "",
                        il: "",
                        nl: "",
                        al: "",
                        lu: "",
                        ic: "",
                        nc: "",
                        ac: "",
                        cu: "",
                        in: "",
                        nn: "",
                        an: "",
                        nu: "",
                        iv: "",
                        nv: "",
                        av: "",
                        vu: "",
                    },
                ],
                dimensionData: [
                    {
                        installation: "",
                        diameter: "",
                        tyoe: "",
                        structure: "",
                        method: "",
                        rating: "",
                    },
                ],
                dimenData: [
                    {
                        nomina: "",
                        inner: "",
                        standard: "",
                        outdiameter: "",
                        pitchcircle: "",
                        flangethickness: "",
                        bolthole: "",
                        numberbolts: "",
                        totalheight: "",
                    },
                ],
                materialData: [
                    {
                        flowmeterbody: "",
                        flange: "",
                        primaryhead: "",
                        transmitter: "",
                    },
                ],
                ProcessData: [
                    {
                        mediuname: "",
                        pip: "",
                        compress: "",
                        diameter: "",
                    },
                ],
                imglist1: [
                    {
                        //  imgUrl:'/image1.png',
                    },
                ],
            };
        },
        created () {
            bus.$on("chart-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.cData = data;
                console.log("导出接受到了数据", this.cData);
                // console.log(this.cData.optionsOne);
                // console.log(this.cData.value);
                this.mergeChartData(this.cData);
            });
            bus.$on("table-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.tData = data;
                console.log("table导出接受到了数据", this.tData);
                this.mergetableData(this.tData);
            });
            bus.$on("loss-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.lData = data;
                console.log("LossData导出接受到了数据", this.lData);
                this.mergeLossData(this.lData);
            });
            bus.$on("dimensions-data-updated", (data) => {
                // 在这里处理接收到的数据
                // this.dimensionData = data;
                this.dsData = data;
                console.log("dimensionsData导出接受到了数据", this.dsData);
                this.mergeDimensionsData(this.dsData);
            });
            bus.$on("dimen-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.dmData = data;
                console.log("dimenData导出接受到了数据", this.dmData);
                this.mergedimenData(this.dmData);
            });
            bus.$on("material-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.mData = data;
                console.log("material导出接受到了数据", this.mData);
                this.mergeMaterialData(this.mData);
            });
            bus.$on("specifications-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.sfData = data;
                console.log("specifications导出接受到了数据", this.sfData);
                this.mergeSpecificationsData(this.sfData);
            });
            bus.$on("accessories-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.asData = data;
                console.log("accessories导出接受到了数据", this.asData);
                this.mergeAccessoriesData(this.asData);
            });
            bus.$on("calculatedResult-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.crData = data;
                console.log("accessories导出接受到了数据", this.crData);
                this.mergeCalculatedResultsData(this.crData);
            });
            bus.$on("compareSizes-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.csData = data;
                console.log("compareSizes导出接受到了数据", this.csData);
                this.mergeCompareSizesData(this.csData);
            });
            bus.$on("proccessParameter-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.ppData = data;
                console.log("proccessParameter导出接受到了数据", this.ppData);
                this.mergeproccessParameterData(this.ppData);
            });
            bus.$on("proccessParameter-data-updated", (data) => {
                // 在这里处理接收到的数据
                this.ppData = data;
                console.log("proccessParameter导出接受到了数据", this.ppData);
                this.mergeproccessParameterData(this.ppData);
            });
            bus.$on("fluid-data-updated", (data) => {
                this.fData = data;
                console.log("fluid导出接受到了数据", this.fData);
                this.mergefluidData(this.fData);
            });
        },
        components: {
            CanvasEcharts,
        },
        methods: {
            //更新输入框的方法
            assignValue (data, key, value) {
                // console.log(data, key, value);
                if (data && data[0]) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (data[0].hasOwnProperty(key)) {
                        data[0][key] = value;
                    } else {
                        console.error("未找到匹配的属性");
                    }
                } else {
                    console.error("未找到匹配的属性");
                }
            },
            // 更新下拉框的方法
            updataSelect (options, value, assignFn) {
                const selectedOption = options.find((item) => item.value == value);
                if (selectedOption) {
                    assignFn(selectedOption.label);
                } else {
                    // console.error('未找到匹配选项');
                }
            },
            //连接Chart页面数据
            mergeChartData (receivedData) {
                // 将接收到的数据填充到ChartData对象中
                this.assignValue(this.ChartData, "meflow_min", receivedData.inputOne);
                this.assignValue(this.ChartData, "meflow_max", receivedData.inputTwo);
                this.updataSelect(
                    receivedData.optionsOne,
                    receivedData.value,
                    (label) => {
                        this.ChartData[0].mef_unity = label;
                    }
                );
                this.updataSelect(
                    receivedData.optionsOne,
                    receivedData.value,
                    (label) => {
                        this.ChartData[0].linef_unity = label;
                    }
                );
                this.assignValue(this.ChartData, "lineflow_min", receivedData.inputThree);
                this.assignValue(this.ChartData, "lineflow_max", receivedData.inputFour);
                console.log("合并后的ChartData:", this.ChartData);
            },
            //连接压损页面
            mergeLossData (receivedData) {
                for (let key in receivedData) {
                    const keyPreArr = ['flow_', 'fv_', 'meerro_', 'preloss_']
                    const keyPre = keyPreArr[Number(key.split(',')[0])]
                    if (receivedData[key]) {
                        this.assignValue(this.LossData, keyPre + key.split(',')[1].toString(), receivedData[key]);
                    }
                }
            },
            //连接项目信息页面
            mergetableData (receivedData) {
                // 将接收到的数据填充到ChartData对象中
                this.assignValue(this.tableData, "username", receivedData.inputOne);
                this.assignValue(this.tableData, "project", receivedData.inputTwo);
                this.updataSelect(
                    receivedData.optionsOne,
                    receivedData.selectedValue,
                    (label) => {
                        this.tableData[0].flowtype = label;
                    }
                );
                this.assignValue(this.tableData, "number", receivedData.inputThree);
                this.assignValue(this.tableData, "connect_phone", receivedData.inputFour);
                console.log("合并后的tableData:", this.tableData);
            },
            // 结构尺寸图
            mergeDimensionsData (receivedData) {
                // 将接收到的数据填充到结构尺寸图中
                this.assignValue(this.dimensionData, "installation", receivedData.inputOne);
                this.assignValue(this.dimensionData, "diameter", receivedData.inputTwo);
                this.assignValue(this.dimensionData, "tyoe", receivedData.inputThree);
                this.assignValue(this.dimensionData, "structure", receivedData.inputFour);
                this.assignValue(this.dimensionData, "method", receivedData.inputFive);
                this.assignValue(this.dimensionData, "rating", receivedData.inputSix);

                console.log("合并后的dimensionData:", this.dimensionData);
            },
            // 流量计安装尺寸
            mergedimenData (receivedData) {
                this.assignValue(this.dimenData, "nomina", receivedData.inputSeven);
                this.assignValue(this.dimenData, "inner", receivedData.inputEight);
                this.assignValue(this.dimenData, "standard", receivedData.inputNine);
                this.assignValue(this.dimenData, "outdiameter", receivedData.inputTen);
                this.assignValue(this.dimenData, "pitchcircle", receivedData.inputOnes);
                this.assignValue(this.dimenData, "flangethickness", receivedData.inputTwos);
                this.assignValue(this.dimenData, "bolthole", receivedData.inputThrees);
                this.assignValue(this.dimenData, "numberbolts", receivedData.inputFours);
                this.assignValue(this.dimenData, "totalheight", receivedData.inputFives);
                this.assignValue(this.dimenData, "flowmeterbody", receivedData.inputSixs);
                console.log("合并后的dimenData", this.dimenData);
            },
            // 流量计材质
            mergeMaterialData (receivedData) {
                this.assignValue(this.materialData, "flowmeterbody", receivedData.inputSevens);
                this.assignValue(this.materialData, "flange", receivedData.inputEights);
                this.assignValue(this.materialData, "primaryhead", receivedData.inputNines);
                this.assignValue(this.materialData, "transmitter", receivedData.inputFive);
                console.log("合并后的materialData:", this.materialData);
            },
            // 流量计规格
            mergeSpecificationsData (receivedData) {
                console.log(receivedData);
                this.assignValue(this.SpecData, "size", receivedData.size);
                this.updataSelect(
                    receivedData.options1,
                    receivedData.maxtemperatue,
                    (label) => {
                        this.SpecData[0].maxtemperatue = label;
                    }
                );
                this.assignValue(this.SpecData, "enoughflow", receivedData.enoughflow);
                this.assignValue(this.SpecData, "outmethod", receivedData.outmethod);
                this.assignValue(this.SpecData, "explosionproof", receivedData.explosionproof);
                this.updataSelect(
                    receivedData.inputSix,
                    receivedData.bodymaterial,
                    (label) => {
                        this.SpecData[0].bodymaterial = label;
                    }
                );
                this.updataSelect(
                    receivedData.inputSeven,
                    receivedData.checkbody,
                    (label) => {
                        this.SpecData[0].checkbody = label;
                    }
                );
                this.assignValue(this.SpecData, "changebody", receivedData.changebody);
                this.assignValue(this.SpecData, "connection", receivedData.connection);
                this.updataSelect(
                    receivedData.options2,
                    receivedData.instrument,
                    (label) => {
                        this.SpecData[0].instrument = label;
                    }
                );
                this.updataSelect(
                    receivedData.options3,
                    receivedData.compensation,
                    (label) => {
                        this.SpecData[0].compensation = label;
                    }
                );
                this.updataSelect(
                    receivedData.options4,
                    receivedData.protectiongrad,
                    (label) => {
                        this.SpecData[0].protectiongrad = label;
                    }
                );
                this.updataSelect(
                    receivedData.options5,
                    receivedData.accurategrade,
                    (label) => {
                        this.SpecData[0].accurategrade = label;
                    }
                );
                this.updataSelect(
                    receivedData.options6,
                    receivedData.maxpressure,
                    (label) => {
                        this.SpecData[0].maxpressure = label;
                    }
                );
                this.assignValue(this.SpecData, "maxloss", receivedData.maxloss);
                this.assignValue(this.SpecData, "currentout", receivedData.currentout);
                this.assignValue(this.SpecData, "explosionsingle", receivedData.explosionsingle);
                this.updataSelect(
                    receivedData.options7,
                    receivedData.generating,
                    (label) => {
                        this.SpecData[0].generating = label;
                    }
                );
                this.updataSelect(
                    receivedData.options8,
                    receivedData.flan,
                    (label) => {
                        this.SpecData[0].flan = label;
                    }
                );
                this.updataSelect(
                    receivedData.options9,
                    receivedData.electriaclinterface,
                    (label) => {
                        this.SpecData[0].electriaclinterface = label;
                    }
                );
                this.updataSelect(
                    receivedData.options10,
                    receivedData.connectionstandard,
                    (label) => {
                        this.SpecData[0].connectionstandard = label;
                    }
                );
                this.updataSelect(
                    receivedData.options11,
                    receivedData.slipcable,
                    (label) => {
                        this.SpecData[0].slipcable = label;
                    }
                );
                this.updataSelect(
                    receivedData.options12,
                    receivedData.insertmethod,
                    (label) => {
                        this.SpecData[0].insertmethod = label;
                    }
                );
                this.assignValue(this.SpecData, "electrictable", receivedData.electrictable);
                console.log("合并后的materialData:", this.SpecData);

            },
            // 流量计规格
            mergeAccessoriesData (receivedData) {
                this.updataSelect(
                    receivedData.options13,
                    receivedData.flangebolts,
                    (label) => {
                        this.AcceData[0].flangebolts = label;
                    }
                );
                this.updataSelect(
                    receivedData.options14,
                    receivedData.sealinggaskets,
                    (label) => {
                        this.AcceData[0].sealinggaskets = label;
                    }
                );
                this.updataSelect(
                    receivedData.options15,
                    receivedData.pipsupports,
                    (label) => {
                        this.AcceData[0].pipsupports = label;
                    }
                );
                this.updataSelect(
                    receivedData.options16,
                    receivedData.materialbolts,
                    (label) => {
                        this.AcceData[0].materialbolts = label;
                    }
                );
                this.updataSelect(
                    receivedData.options17,
                    receivedData.gaskets,
                    (label) => {
                        this.AcceData[0].gaskets = label;
                    }
                );
                this.updataSelect(
                    receivedData.options18,
                    receivedData.specification,
                    (label) => {
                        this.AcceData[0].specification = label;
                    }
                );
                console.log("合并后的accessories:", this.AcceData);

            },
            // 计算结果
            mergeCalculatedResultsData (receivedData) {
                this.assignValue(this.Ot, "if", receivedData.if);
                this.assignValue(this.Ot, "nf", receivedData.nf);
                this.assignValue(this.Ot, "af", receivedData.af);
                this.updataSelect(
                    receivedData.optionsOne,
                    receivedData.mu,
                    (label) => {
                        this.Ot[0].mu = label;
                    }
                );

                this.assignValue(this.Ot, "il", receivedData.il);
                this.assignValue(this.Ot, "nl", receivedData.nl);
                this.assignValue(this.Ot, "al", receivedData.al);
                this.assignValue(this.Ot, "lu", receivedData.lu);
                this.updataSelect(
                    receivedData.optionsOne1,
                    receivedData.lu,
                    (label) => {
                        this.Ot[0].lu = label;
                    }
                );

                this.assignValue(this.Ot, "ic", receivedData.ic);
                this.assignValue(this.Ot, "nc", receivedData.nc);
                this.assignValue(this.Ot, "ac", receivedData.ac);
                this.updataSelect(
                    receivedData.optionsOne2,
                    receivedData.cu,
                    (label) => {
                        this.Ot[0].cu = label;
                    }
                );

                this.assignValue(this.Ot, "in", receivedData.in);
                this.assignValue(this.Ot, "nn", receivedData.nn);
                this.assignValue(this.Ot, "an", receivedData.an);
                this.updataSelect(
                    receivedData.optionsOne3,
                    receivedData.nu,
                    (label) => {
                        this.Ot[0].nu = label;
                    }
                );

                this.assignValue(this.Ot, "iv", receivedData.iv);
                this.assignValue(this.Ot, "nv", receivedData.nv);
                this.assignValue(this.Ot, "av", receivedData.av);
                this.updataSelect(
                    receivedData.optionsOne4,
                    receivedData.vu,
                    (label) => {
                        this.Ot[0].vu = label;
                    }
                );
                console.log("合并后的materialData:", this.materialData);
            },
            // 多口径比对 
            mergeCompareSizesData (receivedData) {
                console.log(receivedData);
                this.assignValue(this.SD, "ms", receivedData.ms);
                this.assignValue(this.SD, "ms1", receivedData.ms1);
                this.assignValue(this.SD, "ms2", receivedData.ms2);
                this.assignValue(this.SD, "ms3", receivedData.ms3);
                this.assignValue(this.SD, "ms4", receivedData.ms4);
                this.assignValue(this.SD, "ms5", receivedData.ms5);
                this.assignValue(this.SD, "ms6", receivedData.ms6);
                this.assignValue(this.SD, "ms7", receivedData.ms7);
                this.assignValue(this.SD, "ms8", receivedData.ms8);
                this.assignValue(this.SD, "ms9", receivedData.ms9);

                this.assignValue(this.SD, "cs", receivedData.cs);
                this.updataSelect(
                    receivedData.inputTwo,
                    receivedData.cs,
                    (label) => {
                        this.SD[0].cs = label;
                    }
                );
                this.assignValue(this.SD, "cs1", receivedData.cs1);
                this.assignValue(this.SD, "cs2", receivedData.cs2);
                this.assignValue(this.SD, "cs3", receivedData.cs3);
                this.assignValue(this.SD, "cs4", receivedData.cs4);
                this.assignValue(this.SD, "cs5", receivedData.cs5);
                this.assignValue(this.SD, "cs6", receivedData.cs6);
                this.assignValue(this.SD, "cs7", receivedData.cs7);
                this.assignValue(this.SD, "cs8", receivedData.cs8);
                this.assignValue(this.SD, "cs9", receivedData.cs9);

                this.assignValue(this.SD, "as", receivedData.as);
                this.assignValue(this.SD, "as1", receivedData.as1);
                this.assignValue(this.SD, "as2", receivedData.as2);
                this.assignValue(this.SD, "as3", receivedData.as3);
                this.assignValue(this.SD, "as4", receivedData.as4);
                this.assignValue(this.SD, "as5", receivedData.as5);
                this.assignValue(this.SD, "as6", receivedData.as6);
                this.assignValue(this.SD, "as7", receivedData.as7);
                this.assignValue(this.SD, "as8", receivedData.as8);
                this.assignValue(this.SD, "as9", receivedData.as9);

                console.log("合并后的CompareSizes:", this.SD);
            },
            // 工艺参数 
            mergeproccessParameterData (receivedData) {
                // const { selectedOption, value } = receivedData
                // let mediuname
                // if (selectedOption === '气体') {
                //     mediuname = receivedData.optionsOne1[value[0]]
                // } else if (selectedOption === '液体') {
                //     mediuname = receivedData.optionsOne2[value[0]]
                // } else if (selectedOption === '蒸汽') {
                //     mediuname = receivedData.optionsOne3[value[0]]
                // }
                // console.log(receivedData, receivedData.optionsTwo, receivedData.value);
                // this.assignValue(this.ProcessData, "mediuname", mediuname);
                // this.updataSelect(
                //     receivedData.optionsTwo,
                //     receivedData.value,
                //     (label) => {
                //         this.ProcessData[0].value = label;
                //     }
                // );
                this.assignValue(this.ProcessData, "compress", receivedData.compressConvenientData);
                this.assignValue(this.ProcessData, "diameter", receivedData.inputTwo);
                console.log("合并后的proccessParameter:", this.ProcessData);
            },
            // 介质参数 
            mergefluidData (receivedData) {
                console.log(receivedData);
                this.assignValue(this.FD, "ms1", receivedData.inputOne);
                this.assignValue(this.FD, "ms2", receivedData.inputTwo);
                this.assignValue(this.FD, "ms3", receivedData.inputThree);
                this.assignValue(this.FD, "ms4", receivedData.inputFour);
                this.assignValue(this.FD, "ms5", receivedData.inputFive);
                this.assignValue(this.FD, "ms6", receivedData.inputSix);
                this.assignValue(this.FD, "ns1", receivedData.inputSeven);
                this.assignValue(this.FD, "ns2", receivedData.inputEight);
                this.assignValue(this.FD, "ns3", receivedData.inputNine);
                this.assignValue(this.FD, "ns4", receivedData.inputTen);
                this.assignValue(this.FD, "ns5", receivedData.inputOnes);
                this.assignValue(this.FD, "ns6", receivedData.inputTwos);
                this.assignValue(this.FD, "as1", receivedData.inputFours);
                this.assignValue(this.FD, "as2", receivedData.inputFives);
                this.assignValue(this.FD, "as3", receivedData.inputSixs);
                this.assignValue(this.FD, "as4", receivedData.inputSevens);
                this.assignValue(this.FD, "as5", receivedData.inputEights);
                this.assignValue(this.FD, "as6", receivedData.inputNines);
                console.log("合并后的CompareSizes:", this.FD);
            },

            async exportWord () {
                this.imglist1[0].imgUrl = this.$refs.canvas.download();
                let data = {
                    tableData: this.tableData,
                    imglist1: this.imglist1,
                    ChartData: this.ChartData,
                    dimensionData: this.dimensionData,
                    dimenData: this.dimenData,
                    materialData: this.materialData,
                    LossData: this.LossData,
                    SpecData: this.SpecData,
                    AcceData: this.AcceData,
                    Ot: this.Ot,
                    SD: this.SD,
                    ProcessData: this.ProcessData,
                    FD: this.FD,
                };
                let imgSize = {
                    //控制导出word的图片大小
                    imgurl: [2000, 2000],
                };
                ExportBriefDataDocx("/word.docx", data, "words", imgSize);
            },
        },
    };
</script>
<style scoped>
    .box {
        display: inline-block;
        width: 680px;
        height: 1123px;
        margin: 50px auto;
    }
</style>
