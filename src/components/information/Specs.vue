<template>
    <div id="Specs">
        <!-- 放流量计图 -->
        <img :src="speciImageData[0]" alt="" class="image" />
        <div class="part1">
            <div class="container">流量计规格 Specifications</div>
            <div class="request">
                <span>流量计口径（mm） </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputOne" class="input"></el-input>
            </div>
            <div class="request">
                <span>最高使用温度（℃） </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputTwo" class="input"></el-input> -->
                <common-select v-model="value1" :options="options1" class="select2"></common-select>
            </div>
            <div class="request">
                <span>满刻度流量（4-20mA）</span>
                <el-input v-model="inputThree" class="input"></el-input>
            </div>
            <div class="request">
                <span>输出方式 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputFour" class="input"></el-input>
            </div>
            <div class="request">
                <span>防爆方式 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputFive" class="input"></el-input>
            </div>
            <div class="request">
                <span>本体材质 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputSix" class="input"></el-input> -->
                <common-select v-model="value2" :options="inputSix" class="select2"></common-select>
            </div>
            <div class="request">
                <span>检测体材质 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputSeven" class="input"></el-input> -->
                <common-select v-model="value3" :options="inputSeven" class="select2"></common-select>
            </div>
            <div class="request">
                <span>变送器壳体材质 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputEight" class="input"></el-input>
                <!-- <common-select v-model="value" :options="inputEight" class="select2"></common-select> -->
            </div>
            <div class="request">
                <span>连接方式 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputNine" class="input"></el-input>
            </div>
            <div class="request">
                <span>安装方式 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputOnes" class="input"></el-input> -->
                <common-select v-model="value4" :options="options2" class="select2"></common-select>
            </div>
            <div class="request">
                <span>温压补偿方式 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputTwos" class="input"></el-input> -->
                <common-select v-model="value5" :options="options3" class="select2"></common-select>
            </div>
            <div class="request">
                <span>流量计防护等级 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputThrees" class="input"></el-input> -->
                <common-select v-model="value6" :options="options4" class="select2"></common-select>
            </div>
            <div class="request">
                <span>准确度等级 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputFours" class="input"></el-input> -->
                <common-select v-model="value7" :options="options5" class="select2"></common-select>
            </div>
            <div class="request">
                <span>最高使用压力（Mpa） </span> &nbsp;&nbsp;
                <!-- <el-input v-model="inputFives" class="input"></el-input> -->
                <common-select v-model="value8" :options="options6" class="select2"></common-select>
            </div>
            <div class="request">
                <span>最大压力损失（Kpa） </span> &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputSixs" class="input"></el-input>
            </div>
            <div class="request">
                <span>现场显示 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputSevens" class="input"></el-input>
            </div>
            <div class="request">
                <span>防爆标志 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputEights" class="input"></el-input>
            </div>
            <div class="request">
                <span>发生体（起旋器）材质 </span> &nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputNines" class="input"></el-input> -->
                <common-select v-model="value9" :options="options7" class="select2"></common-select>
            </div>
            <div class="request">
                <span>流量计法兰材质 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputTen" class="input"></el-input> -->
                <common-select v-model="value10" :options="options8" class="select2"></common-select>
            </div>
            <div class="request">
                <span>电器接口形式 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputTens" class="input"></el-input> -->
                <common-select v-model="value11" :options="options9" class="select2"></common-select>
            </div>
            <div class="request">
                <span>流量计连接标准 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputEleven" class="input"></el-input> -->
                <common-select v-model="value12" :options="options10" class="select2"></common-select>
            </div>
            <div class="request">
                <span>分体电缆长度 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputTwelve" class="input"></el-input> -->
                <common-select v-model="value131" :options="options11" class="select2"></common-select>
            </div>
            <div class="request">
                <span>插入式连接形式 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputThirteen" class="input"></el-input> -->
                <common-select v-model="value141" :options="options12" class="select2"></common-select>
            </div>
            <div class="request">
                <span>供电电源 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputFourteen" class="input"></el-input>
            </div>
        </div>
        <div class="partTwo">
            <div class="containerOne">流量计附件 Accessories</div>
            <div class="request">
                <span>流量配套法兰螺栓 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputTwentys" class="input"></el-input> -->
                <common-select v-model="value13" :options="options13" class="select2"></common-select>
            </div>
            <div class="request">
                <span>流量配套密封垫片 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="input1" class="input"></el-input> -->
                <common-select v-model="value14" :options="options14" class="select2"></common-select>
            </div>
            <div class="request">
                <span>分体支架 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="input2" class="input"></el-input> -->
                <common-select v-model="value15" :options="options15" class="select2"></common-select>
            </div>
            <div class="request">
                <span>法兰螺栓材质 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="input3" class="input"></el-input> -->
                <common-select v-model="value16" :options="options16" class="select2"></common-select>
            </div>
            <div class="request">
                <span>垫片材质 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="input4" class="input"></el-input> -->
                <common-select v-model="value17" :options="options17" class="select2"></common-select>
            </div>
            <div class="request">
                <span>分体支架材质与规格 </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="input5" class="input"></el-input> -->
                <common-select v-model="value18" :options="options18" class="select2"></common-select>
            </div>
        </div>
        <div class="access">
            <div class="container1">标准型涡街流量计</div>
            <div class="model">{{ resultString }}</div>
            <div class="request1">
                <span>订货型号：{{ inputFifteen }}
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputFifteen" class="input"></el-input>
            </div>
            <div class="request1">
                <span>输出方式：{{ outputType1 }}
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputSixteen" class="input"></el-input> -->
                <common-select v-model="name1" :options="optionsOne1" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>仪表类型：{{ outputType2 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <common-select v-model="name2" :options="optionsTwo" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>功能类型：{{ outputType3 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputEighteen" class="input"></el-input> -->
                <common-select v-model="name3" :options="optionsThress" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>连接方式：{{ outputType4 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputNineteen" class="input"></el-input> -->
                <common-select v-model="name4" :options="optionsFour" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>测量介质：{{ outputType5 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputTwenty" class="input"></el-input>
                <!-- <common-select v-model="name5"  :options="optionsFive" class="select1"></common-select> -->
            </div>
            <div class="request1">
                <span>表体材质：{{ outputType6 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputElevens" class="input"></el-input> -->
                <common-select v-model="name6" :options="optionsSix" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>公称口径：{{ outputType7 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputTwelves" class="input"></el-input> -->
                <common-select v-model="name7" :options="optionsSeven" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>公称压力：{{ outputType8 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputThirteens" class="input"></el-input> -->
                <common-select v-model="name8" :options="optionsEight" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>探头材质：{{ outputType9 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputFourteens" class="input"></el-input> -->
                <common-select v-model="name9" :options="optionsNine" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>防 爆：{{ outputType10 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputFifteens" class="input"></el-input> -->
                <common-select v-model="name10" :options="optionsTen" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>供电电源：{{ outputType11 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputSixteens" class="input"></el-input> -->
                <common-select v-model="name11" :options="optionsElvent" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>通讯功能：{{ outputType12 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputSeventeens" class="input"></el-input> -->
                <common-select v-model="name12" :options="optionsSecond" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>通讯接口：{{ outputType13 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputEighteens" class="input"></el-input> -->
                <common-select v-model="name13" :options="optionsThirdteen" class="select1"></common-select>
            </div>
            <div class="request1">
                <span>仪表结构：{{ outputType14 }} </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- <el-input v-model="inputNineteens" class="input"></el-input> -->
                <common-select v-model="name14" :options="optionsFourteen" class="select1"></common-select>
            </div>
        </div>
    </div>
</template>

<script>
    import CommonSelect from "@/components/el-select/CommonSelect.vue";
    import { bus } from "@/main.js";
    import {
        getType_of_output,
        getFunction_type,
        getBody_materials,
        getNomial_diamete,
        getNominal_pressures,
        getProbe_material,
        getExplosion_proof_designs,
        getGenerating_bodytable,
        getCheckbody_materials,
        //   getChangebody_materials,
        getBdy_materialtable,
        getPower_supplys,
        getCommunications,
        getCommunications_interfaces,
        getInstrument,
        getProtections,
        getAccurategrades,
        getFLmaterials,
        getSlipcables,
        getEleinfterfaces,
    } from "@/api/select/public_information";
    import {
        getInstrument_type,
        getConnection_types,
        getConnection_standard,
    } from "@/api/select/flowmeter_medius";
    export default {
        name: "Specs",
        props: {
            speciImage: {
                type: Array,
                default: () => [],
            },
            table8Data: {
                type: Array,
                default: () => [],
            },
            speciData: {
                type: Array,
                default: () => [],
            },
            accessData: {
                type: Array,
                default: () => [],
            },
        },
        components: {
            CommonSelect,
        },
        data () {
            return {
                speciImageData: [], //存放图片
                instrument_type: "", //获得仪表类型的id
                flowmeter_type_id: "", //获得的流量计类型的id
                // 流量计规格
                inputOne: "",
                options1: [
                    {
                        value: "1",
                        label: "无",
                    },
                    {
                        value: "2",
                        label: "70",
                    },
                    {
                        value: "3",
                        label: "100",
                    },
                    {
                        value: "4",
                        label: "150",
                    },
                    {
                        value: "5",
                        label: "260",
                    },
                    {
                        value: "6",
                        label: "300",
                    },
                    {
                        value: "7",
                        label: "350",
                    },
                ],
                inputThree: "",
                inputFour: "",
                inputFive: "",
                inputSix: [],
                inputSeven: [],
                inputEight: "铝合金",
                inputNine: "",
                options2: [
                    {
                        value: "1",
                        label: "无",
                    },
                    {
                        value: "2",
                        label: "一体",
                    },
                    {
                        value: "3",
                        label: "分体",
                    },
                ],
                options3: [
                    {
                        value: "1",
                        label: "无",
                    },
                    {
                        value: "2",
                        label: "一体",
                    },
                    {
                        value: "3",
                        label: "分体",
                    },
                ],
                options4: [],
                options5: [],
                options6: [
                    {
                        value: "1",
                        label: "无",
                    },
                    {
                        value: "2",
                        label: "1.0Mpa",
                    },
                    {
                        value: "3",
                        label: "1.6Mpa",
                    },
                    {
                        value: "4",
                        label: "2.0Mpa",
                    },
                    {
                        value: "5",
                        label: "2.5Mpa",
                    },
                    {
                        value: "6",
                        label: "4.0Mpa",
                    },
                ],
                inputSixs: "",
                inputSevens: "",
                inputEights: "",
                options7: [],
                options8: [],
                options9: [],
                options10: [],
                options11: [],
                options12: [
                    {
                        value: "1",
                        label: "无",
                    },
                    {
                        value: "2",
                        label: "断流安装",
                    },
                    {
                        value: "3",
                        label: "不断流安装",
                    },
                ],
                inputFourteen: "",
                inputTen: "",
                inputOnes: "",
                inputTwos: "",
                inputThrees: "",
                inputFours: "",
                inputFives: "",
                inputNines: "",
                inputTens: "",
                inputEleven: "",
                inputTwelve: "",
                inputThirteen: "",
                inputFifteen: "",
                inputSixteen: "",
                inputSeventeen: "",
                inputEighteen: "",
                inputNineteen: "",
                inputTwenty: "",
                inputElevens: "",
                inputTwelves: "",
                inputThirteens: "",
                inputFourteens: "",
                inputFifteens: "",
                inputSixteens: "",
                inputSeventeens: "",
                inputEighteens: "",
                inputNineteens: "",
                inputTwentys: "",
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                optionsOne1: [],
                name1: [],
                outputType1: "", //输出的值
                output1encode: "", //对应的编码
                optionsTwo: [],
                name2: [],
                outputType2: "",
                output2encode: "",
                optionsThress: [],
                name3: [],
                outputType3: "",
                output3encode: "",
                optionsFour: [],
                name4: [],
                outputType4: "",
                output4encode: "",
                optionsFive: [],
                name5: [],
                outputType5: "",
                output5encode: "",
                optionsSix: [],
                name6: [],
                outputType6: "",
                output6encode: "",
                optionsSeven: [],
                name7: [],
                outputType7: "",
                output7encode: "",
                optionsEight: [],
                name8: [],
                outputType8: "",
                output8encode: "",
                optionsNine: [],
                name9: [],
                outputType9: "",
                output9encode: "",
                optionsTen: [],
                name10: [],
                outputType10: "",
                output10encode: "",
                optionsElvent: [],
                name11: [],
                outputType11: "",
                output11encode: "",
                optionsSecond: [],
                name12: [],
                outputType12: "",
                output12encode: "",
                optionsThirdteen: [],
                name13: [],
                outputType13: "",
                output13encode: "",
                optionsFourteen: [],
                name14: [],
                outputType14: "",
                output14encode: "",

                // 流量计附件
                value13: [],
                value14: [],
                value15: [],
                value16: [],
                value17: [],
                value18: [],
                options13: [
                    {
                        value: "1",
                        label: "有",
                    },
                    {
                        value: "2",
                        label: "无",
                    },
                ],
                options14: [
                    {
                        value: "1",
                        label: "有",
                    },
                    {
                        value: "2",
                        label: "无",
                    },
                ],
                options15: [
                    {
                        value: "1",
                        label: "有",
                    },
                    {
                        value: "2",
                        label: "无",
                    },
                ],
                options16: [
                    {
                        value: "1",
                        label: "无",
                    },
                    {
                        value: "2",
                        label: "碳钢",
                    },
                    {
                        value: "3",
                        label: "不锈钢",
                    },
                ],
                options17: [
                    {
                        value: "1",
                        label: "金属缠绕垫",
                    },
                    {
                        value: "2",
                        label: "石棉垫",
                    },
                ],
                options18: [
                    {
                        value: "1",
                        label: "有",
                    },
                    {
                        value: "2",
                        label: "无",
                    },
                ],
                value: [],
                model: "",
                value1: [],
                value2: [],
                value3: [],
                value4: [],
                value5: [],
                value6: [],
                value7: [],
                value8: [],
                value9: [],
                value10: [],
                value11: [],
                value12: [],
                value131: [],
                value141: [],
            };
        },
        watch: {
            // 流量计规格
            inputOne () {
                this.updateSpecificationsData();
            },
            value1 () {
                this.updateSpecificationsData();
            },
            inputThree () {
                this.updateSpecificationsData();
            },
            inputFour () {
                this.updateSpecificationsData();
            },
            inputFive () {
                this.updateSpecificationsData();
            },
            value2 () {
                this.updateSpecificationsData();
            },
            value3 () {
                this.updateSpecificationsData();
            },
            inputEight () {
                this.updateSpecificationsData();
            },
            inputNine () {
                this.updateSpecificationsData();
            },
            value4 () {
                this.updateSpecificationsData();
            },
            value5 () {
                this.updateSpecificationsData();
            },
            value6 () {
                this.updateSpecificationsData();
            },
            value7 () {
                this.updateSpecificationsData();
            },
            value8 () {
                this.updateSpecificationsData();
            },
            inputSixs () {
                this.updateSpecificationsData();
            },
            inputSevens () {
                this.updateSpecificationsData();
            },
            inputEighteens () {
                this.updateSpecificationsData();
            },
            value9 () {
                this.updateSpecificationsData();
            },
            value10 () {
                this.updateSpecificationsData();
            },
            value11 () {
                this.updateSpecificationsData();
            },
            value12 () {
                this.updateSpecificationsData();
            },
            value131 () {
                this.updateSpecificationsData();
            },
            value141 () {
                this.updateSpecificationsData();
            },
            inputFourteen () {
                this.updateSpecificationsData();
            },
            // 流量计附件
            value13 () {
                this.updateAccessoriesData();
            },
            value14 () {
                this.updateAccessoriesData();
            },
            value15 () {
                this.updateAccessoriesData();
            },
            value16 () {
                this.updateAccessoriesData();
            },
            value17 () {
                this.updateAccessoriesData();
            },
            value18 () {
                this.updateAccessoriesData();
            },
            // resultString(newVal, oldVal) {
            //   // 在resultString发生变化时执行的操作
            // },
            inputFifteen (newVal, oldVal) {
                console.log("监听到了变化", newVal, oldVal);
            },
            name1 (newValue) {
                this.outputType1 =
                    this.output1encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name2 (newValue) {
                if (newValue.length > 0) {
                    this.instrument_type = newValue[0];
                    console.log("用户选择的仪表类型是：", this.instrument_type);
                    bus.$emit("instrumentChanged", this.instrument_type);
                    console.log("发送出去的仪表类型",this.instrument_type)
                    this.getInstrumentData();
                    this.getProtectionsData();
                    this.getAccurategradesData();
                }
                this.outputType2 =
                    this.output2encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name3 (newValue) {
                this.outputType3 =
                    this.output3encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name4 (newValue) {
                this.outputType4 =
                    this.output4encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name5 (newValue) {
                this.outputType5 =
                    this.output5encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name6 (newValue) {
                this.outputType6 =
                    this.output6encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name7 (newValue) {
                this.outputType7 =
                    this.output7encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name8 (newValue) {
                this.outputType8 =
                    this.output8encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name9 (newValue) {
                this.outputType9 =
                    this.output9encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name10 (newValue) {
                this.outputType10 =
                    this.output10encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name11 (newValue) {
                this.outputType11 =
                    this.output11encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name12 (newValue) {
                this.outputType12 =
                    this.output12encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name13 (newValue) {
                this.outputType13 =
                    this.output13encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            name14 (newValue) {
                this.outputType14 =
                    this.output14encode.find((item) => item.value.toString() == newValue)
                        ?.label ?? "";
            },
            speciImage: {
                handler (newVal) {
                    console.log("接受到了speci图片", newVal);
                    const imageData = newVal;
                    this.speciImageData[0] = imageData[0].src;
                    // console.log("这是图片的URL",this.speciImageData[0])
                },
            },
            table8Data: {
                handler (newVal) {
                    console.log("接收到了table8Data数据", newVal);
                    //通讯接口
                    getCommunications_interfaces({
                        flowmeter_type_id: this.flowmeter_type_id,
                    })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsThirdteen = dataList.map(function (item) {
                                return { value: item.id, label: item.interface_name };
                            });
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("通讯接口")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsThirdteen); // 访问Vue实例的data属性
                                        const match = this.$data.optionsThirdteen.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name13 = [match.value];
                                        }
                                    } else if (key.includes("测量介质")) {
                                        const Type1 = data[key];
                                        this.inputTwenty = Type1;
                                    } else if (key.includes("输出方式")) {
                                        const type = data[key];
                                        console.log(this.$data.optionsOne1); // 访问Vue实例的data属性
                                        let newStr = type;
                                        if (Array.isArray(type)) {
                                            newStr = type[0];
                                        }
                                        // 后续了解正则表达式
                                        newStr = newStr.replace(/（/g, "(").replace(/）/g, ")");
                                        console.log("匹配之前：", newStr, this.$data.optionsOne1);
                                        console.log(typeof this.$data.optionsOne1[0].label);
                                        console.log(typeof newStr);
                                        const match = this.$data.optionsOne1.find(
                                            (option) => option.label == newStr
                                        );
                                        console.log("匹配结果：", match);
                                        if (match) {
                                            console.log("赋值给 this.name1:", match.value);
                                            this.name1 = [match.value];
                                        }
                                    } else if (key.includes("连接方式")) {
                                        const type = data[key];
                                        console.log(this.$data.optionsFour); // 访问Vue实例的data属性
                                        let newStr = type;
                                        if (Array.isArray(type)) {
                                            newStr = type[0];
                                        }
                                        // 后续了解正则表达式
                                        newStr = newStr.replace(/（/g, "(").replace(/）/g, ")");
                                        console.log("匹配之前：", newStr, this.$data.optionsOne1);
                                        console.log(typeof this.$data.optionsFour[0].label);
                                        console.log(typeof newStr);
                                        const match = this.$data.optionsFour.find(
                                            (option) => option.label == newStr
                                        );
                                        console.log("匹配结果：", match);
                                        if (match) {
                                            console.log("赋值给 this.name1:", match.value);
                                            this.name4 = [match.value];
                                        }
                                    } else if (key.includes("公称压力")) {
                                        const type = data[key];
                                        console.log(this.$data.optionsEight); // 访问Vue实例的data属性
                                        let newStr = type;
                                        if (Array.isArray(type)) {
                                            newStr = type[0];
                                        }
                                        // 后续了解正则表达式
                                        newStr = newStr.replace(/（/g, "(").replace(/）/g, ")");
                                        console.log("匹配之前：", newStr, this.$data.optionsEight);
                                        console.log(typeof this.$data.optionsEight[0].label);
                                        console.log(typeof newStr);
                                        const match = this.$data.optionsEight.find(
                                            (option) => option.label == newStr
                                        );
                                        console.log("匹配结果：", match);
                                        if (match) {
                                            console.log("赋值给 this.name1:", match.value);
                                            this.name8 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //仪表类型
                    getInstrument_type({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsTwo = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.optionsTwo);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("仪表类型")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsTwo); // 访问Vue实例的data属性
                                        const match = this.$data.optionsTwo.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name2 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //功能类型
                    getFunction_type({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsThress = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.optionsThress);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("功能类型")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsThress); // 访问Vue实例的data属性
                                        const match = this.$data.optionsThress.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name3 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //表体材质
                    getBody_materials({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsSix = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("表体材质")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsSix); // 访问Vue实例的data属性
                                        const match = this.$data.optionsSix.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name6 = [match.value];
                                        }
                                    }
                                }
                            }
                            console.log(this.optionsSix);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //公称口径
                    getNomial_diamete({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsSeven = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.optionsSeven);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("公称口径")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsSeven); // 访问Vue实例的data属性
                                        const match = this.$data.optionsSeven.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name7 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //探头材质
                    getProbe_material({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsNine = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("探头材质")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsNine); // 访问Vue实例的data属性
                                        const match = this.$data.optionsNine.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name9 = [match.value];
                                        }
                                    }
                                }
                            }
                            console.log(this.optionsNine);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //防爆
                    getExplosion_proof_designs({
                        flowmeter_type_id: this.flowmeter_type_id,
                    })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsTen = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.optionsTen);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("防")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsTen); // 访问Vue实例的data属性
                                        const match = this.$data.optionsTen.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name10 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //供电电源
                    getPower_supplys({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsElvent = dataList.map(function (item) {
                                return { value: item.id, label: item.electric_name };
                            });
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("供电电源")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsElvent); // 访问Vue实例的data属性
                                        const match = this.$data.optionsElvent.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name11 = [match.value];
                                        }
                                    }
                                }
                            }
                            console.log(this.optionsElvent);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //通讯功能
                    getCommunications({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsSecond = dataList.map(function (item) {
                                return { value: item.id, label: item.communication_name };
                            });
                            console.log(this.optionsSecond);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("通讯功能")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.optionsSecond); // 访问Vue实例的data属性
                                        const match = this.$data.optionsSecond.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.name12 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //仪表结构
                    getInstrument_type({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsTwo = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.optionsTwo);
                            console.log("仪表类型id为", this.instrument_type);
                            console.log("flid为:", this.flowmeter_type_id);
                            getInstrument({
                                flowmeter_type_id: this.flowmeter_type_id,
                                instrument_type_id: this.instrument_type,
                            })
                                .then((res) => {
                                    console.log("这是res", res);
                                    let dataList = Array.from(res.rows); // 使用Array.from()方法
                                    console.log("这是获得到仪表结构", dataList);
                                    // 将查询结果映射到 this.optionsTwo，以便后续使用
                                    this.optionsFourteen = dataList.map(function (item) {
                                        return { value: item.id, label: item.instrument_name };
                                    });
                                    console.log("这是仪表结构数据", this.optionsFourteen);
                                    if (Object.keys(newVal).length > 0) {
                                        const data = newVal; // 获取projectData对象
                                        for (let key in data) {
                                            if (key.includes("仪表结构")) {
                                                console.log(key + ":", data[key]);
                                                const Type = data[key][0];
                                                console.log(Type);
                                                console.log(this.$data.optionsFourteen); // 访问Vue实例的data属性
                                                const match = this.$data.optionsFourteen.find(
                                                    (option) => option.label == Type
                                                );
                                                console.log(match);
                                                // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                                if (match) {
                                                    this.name14 = [match.value];
                                                }
                                            }
                                        }
                                    }
                                })
                                .catch((error) => {
                                    // 处理可能出现的错误
                                    console.error("查询失败:", error);
                                });
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                },
            },
            speciData: {
                handler (newVal) {
                    console.log("接受到了speciData数据", newVal);
                    if (Object.keys(newVal).length > 0) {
                        const data = newVal; // 获取projectData对象
                        this.inputOne = data["流量计口径（mm）"];
                        this.inputThree = data["满刻度流量（4-20mA）"];
                        this.inputFour = data.输出方式;
                        this.inputFive = data.防爆方式;
                        this.inputEight = data.变送器壳体材质;
                        this.inputNine = data.连接方式;
                        this.inputSixs = data["最大压力损失（Kpa）"];
                        this.inputSevens = data.现场显示;
                        this.inputEights = data.防爆标志;
                        this.inputFourteen = data.供电电源;
                        // 获取流量计类型的值
                        const Type = data["最高使用温度（℃）"][0];
                        console.log("最高温度是", Type);
                        // 在选项中查找匹配项的value属性
                        const match = this.options1.find((option) => option.label == Type);
                        console.log("管道材质是", match);
                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                        if (match) {
                            this.value1 = [match.value];
                        }
                        const Type1 = data.本体材质[0];
                        // 在选项中查找匹配项的value属性
                        const match1 = this.inputSix.find((option) => option.label == Type1);
                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                        if (match1) {
                            this.value2 = [match1.value];
                        }
                        const Type3 = data.安装方式[0];
                        // 在选项中查找匹配项的value属性
                        console.log(Type3);
                        const match3 = this.options2.find((option) => option.label == Type3);
                        console.log("检测体材质是", match3);
                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                        if (match3) {
                            this.value4 = [match3.value];
                        }
                        const Type2 = data.温压补偿方式[0];
                        // 在选项中查找匹配项的value属性
                        console.log(Type2);
                        const match2 = this.options3.find((option) => option.label == Type2);
                        console.log("温压补偿方式是", match2);
                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                        if (match2) {
                            this.value5 = [match2.value];
                        }
                        const Type4 = data["最高使用压力（Mpa）"][0];
                        // 在选项中查找匹配项的value属性
                        console.log(Type2);
                        const match4 = this.options6.find((option) => option.label == Type4);
                        console.log("检测体材质是", match4);
                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                        if (match4) {
                            this.value8 = [match4.value];
                        }
                        const Type5 = data.流量计连接标准[0];
                        // 在选项中查找匹配项的value属性
                        console.log(Type2);
                        const match5 = this.options10.find((option) => option.label == Type5);
                        console.log("检测体材质是", match2);
                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                        if (match5) {
                            this.value12 = [match5.value];
                        }
                        const Type6 = data.插入式连接形式[0];
                        // 在选项中查找匹配项的value属性
                        console.log(Type2);
                        const match6 = this.options12.find((option) => option.label == Type6);
                        console.log("检测体材质是", match2);
                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                        if (match6) {
                            this.value141 = [match6.value];
                        }
                    }
                    getInstrument_type({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsTwo = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.optionsTwo);
                            console.log("仪表类型id为", this.instrument_type);
                            console.log("flid为:", this.flowmeter_type_id);
                            //准确度等级 需要两个参数
                            getProtections({
                                flowmeter_type_id: this.flowmeter_type_id,
                                instrument_type_id: this.instrument_type,
                            })
                                .then((res) => {
                                    // console.log(res);
                                    let dataList = Array.from(res.rows); // 使用Array.from()方法
                                    // console.log(dataList);
                                    // 将查询结果映射到 this.optionsTwo，以便后续使用
                                    this.options4 = dataList.map(function (item) {
                                        return { value: item.id, label: item.protection_name };
                                    });
                                    console.log(this.options4);
                                    if (Object.keys(newVal).length > 0) {
                                        const data = newVal; // 获取projectData对象
                                        for (let key in data) {
                                            if (key.includes("准确度等级")) {
                                                console.log(key + ":", data[key]);
                                                const Type = data[key][0];
                                                console.log(Type);
                                                console.log(this.$data.options5); // 访问Vue实例的data属性
                                                const match = this.$data.options5.find(
                                                    (option) => option.label == Type
                                                );
                                                console.log(match);
                                                // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                                if (match) {
                                                    this.value7 = [match.value];
                                                }
                                            }
                                        }
                                    }
                                })
                                .catch((error) => {
                                    // 处理可能出现的错误
                                    console.error("查询失败:", error);
                                });
                            //流量计防护等级 需要两个参数
                            getAccurategrades({
                                flowmeter_type_id: this.flowmeter_type_id,
                                instrument_type_id: this.instrument_type,
                            })
                                .then((res) => {
                                    // console.log(res);
                                    let dataList = Array.from(res.rows); // 使用Array.from()方法
                                    // console.log(dataList);
                                    // 将查询结果映射到 this.optionsTwo，以便后续使用
                                    this.options5 = dataList.map(function (item) {
                                        return { value: item.id, label: item.accurategrade_name };
                                    });
                                    console.log(this.options5);
                                    if (Object.keys(newVal).length > 0) {
                                        const data = newVal; // 获取projectData对象
                                        for (let key in data) {
                                            if (key.includes("流量计防护等级")) {
                                                console.log(key + ":", data[key]);
                                                const Type = data[key][0];
                                                console.log(Type);
                                                console.log(this.$data.options4); // 访问Vue实例的data属性
                                                const match = this.$data.options4.find(
                                                    (option) => option.label == Type
                                                );
                                                console.log(match);
                                                // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                                if (match) {
                                                    this.value6 = [match.value];
                                                }
                                            }
                                        }
                                    }
                                })
                                .catch((error) => {
                                    // 处理可能出现的错误
                                    console.error("查询失败:", error);
                                });
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //检测体材质 1
                    getCheckbody_materials({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.inputSeven = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.inputSeven);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("检测体")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.inputSeven); // 访问Vue实例的data属性
                                        const match = this.$data.inputSeven.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.value3 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //发生体
                    getGenerating_bodytable({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options7 = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.options7);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("发生体")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.options7); // 访问Vue实例的data属性
                                        const match = this.$data.options7.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.value9 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //流量计法兰
                    getFLmaterials({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options8 = dataList.map(function (item) {
                                return { value: item.id, label: item.FLmaterial_name };
                            });
                            console.log(this.options8);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("流量计法兰材质")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.options8); // 访问Vue实例的data属性
                                        const match = this.$data.options8.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.value10 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //电器接口形式
                    getEleinfterfaces({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options9 = dataList.map(function (item) {
                                return { value: item.id, label: item.eleinfterface_name };
                            });
                            console.log(this.options9);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("电器接口形式")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.options9); // 访问Vue实例的data属性
                                        const match = this.$data.options9.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.value11 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                    //分体电缆长度
                    getSlipcables({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options11 = dataList.map(function (item) {
                                return { value: item.id, label: item.slipcable_name };
                            });
                            console.log(this.options11);
                            if (Object.keys(newVal).length > 0) {
                                const data = newVal; // 获取projectData对象
                                for (let key in data) {
                                    if (key.includes("分体电缆长度")) {
                                        console.log(key + ":", data[key]);
                                        const Type = data[key][0];
                                        console.log(Type);
                                        console.log(this.$data.options11); // 访问Vue实例的data属性
                                        const match = this.$data.options11.find(
                                            (option) => option.label == Type
                                        );
                                        console.log(match);
                                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                                        if (match) {
                                            this.value131 = [match.value];
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                },
            },
            accessData: {
                handler (newVal) {
                    console.log("接受到了accessData数据", newVal);
                    if (Object.keys(newVal).length > 0) {
                        const data = newVal; // 获取projectData对象
                        // 获取流量计类型的值
                        const Type = data.流量配套法兰螺栓[0];
                        console.log(Type);
                        // 在选项中查找匹配项的value属性
                        const match = this.options13.find((option) => option.label == Type);
                        console.log("流量配套法兰螺栓是", match);
                        // 如果找到了匹配项，则将其value属性赋值给selectedValue
                        if (match) {
                            this.value13 = [match.value];
                        }
                        const Type1 = data.流量配套密封垫片[0];
                        console.log(Type1);
                        const match1 = this.options14.find((option) => option.label == Type1);
                        console.log("流量配套法兰螺栓是", match1);
                        if (match1) {
                            this.value14 = [match1.value];
                        }
                        const Type2 = data.分体支架[0];
                        console.log(Type2);
                        const match2 = this.options15.find((option) => option.label == Type2);
                        console.log("流量配套法兰螺栓是", match2);
                        if (match2) {
                            this.value15 = [match2.value];
                        }
                        const Type3 = data.法兰螺栓材质[0];
                        console.log(Type3);
                        const match3 = this.options16.find((option) => option.label == Type3);
                        console.log("法兰螺栓材质是", match3);
                        if (match3) {
                            this.value16 = [match3.value];
                        }
                        const Type4 = data.垫片材质[0];
                        console.log(Type4);
                        const match4 = this.options17.find((option) => option.label == Type4);
                        // console.log("流量配套法兰螺栓是",match4)
                        if (match4) {
                            this.value17 = [match4.value];
                        }
                    }
                },
            },
        },
        computed: {
            resultString () {
                return `${this.inputFifteen}${this.outputType1}${this.outputType2}${this.outputType3}${this.outputType4}${this.outputType5}${this.outputType6}${this.outputType7}${this.outputType8}${this.outputType9}${this.outputType10}${this.outputType11}${this.outputType12}${this.outputType13}${this.outputType14}`;
            },
        },
        methods: {
            updateSpecificationsData () {
                // 根据页面数据更新chartData属性
                this.sfData = {
                    size: this.inputOne,
                    maxtemperatue: this.value1,
                    enoughflow: this.inputThree,
                    outmethod: this.inputFour,
                    explosionproof: this.inputFive,
                    bodymaterial: this.value2,
                    checkbody: this.value3,
                    changebody: this.inputEight,
                    connection: this.inputNine,
                    instrument: this.value4,
                    compensation: this.value5,
                    protectiongrad: this.value6,
                    accurategrade: this.value7,
                    maxpressure: this.value8,
                    maxloss: this.inputSixs,
                    currentout: this.inputSevens,
                    explosionsingle: this.inputEights,
                    generating: this.value9,
                    flan: this.value10,
                    electriaclinterface: this.value11,
                    connectionstandard: this.value12,
                    slipcable: this.value131,
                    insertmethod: this.value141,
                    electrictable: this.inputFourteen,
                    options1: this.options1,
                    options2: this.options2,
                    options3: this.options3,
                    options4: this.options4,
                    options5: this.options5,
                    options6: this.options6,
                    options7: this.options7,
                    options8: this.options8,
                    options9: this.options9,
                    options10: this.options10,
                    options11: this.options11,
                    options12: this.options12,
                    inputSix: this.inputSix,
                    inputSeven: this.inputSeven,

                };
                // 触发自定义事件并传递chartData
                bus.$emit("specifications-data-updated", this.sfData);
                console.log("specifications更新的数据", this.sfData);
            },

            updateAccessoriesData () {
                // 根据页面数据更新chartData属性
                this.asData = {
                    flangebolts: this.value13,
                    sealinggaskets: this.value14,
                    pipsupports: this.value15,
                    materialbolts: this.value16,
                    gaskets: this.value17,
                    specification: this.value18,
                    options13: this.options13,
                    options14: this.options14,
                    options15: this.options15,
                    options16: this.options16,
                    options17: this.options17,
                    options18: this.options18,

                };
                // 触发自定义事件并传递chartData
                bus.$emit("accessories-data-updated", this.asData);
                console.log("Accessories更新的数据", this.asData);
            },
            getType_of_outputData () {
                this.optionsOne1 = [];
                getType_of_output().then((res) => {
                    console.log(res);
                    let dataList = Array.from(res.rows); // 使用Array.from()方法
                    // 或者使用扩展运算符
                    // let dataList = [...res.rows];
                    console.log(dataList);
                    this.optionsOne1 = dataList.map(function (item) {
                        return { value: item.id, label: item.type_name };
                    });
                    this.output1encode = dataList.map(function (item) {
                        return { value: item.id, label: item.encode };
                    });
                    console.log("获得到编码为:", this.output1encode);
                });
            },
            getBdy_materialtableData () {
                this.inputSix = [];
                getBdy_materialtable().then((res) => {
                    console.log(res);
                    let dataList = Array.from(res.rows); // 使用Array.from()方法
                    // 或者使用扩展运算符
                    // let dataList = [...res.rows];
                    console.log(dataList);
                    this.inputSix = dataList.map(function (item) {
                        return { value: item.id, label: item.type_name };
                    });
                    console.log(this.inputSix);
                });
            },
            getConnection_typesData () {
                this.optionsFour = [];
                getConnection_types().then((res) => {
                    console.log(res);
                    let dataList = Array.from(res.rows); // 使用Array.from()方法
                    // 或者使用扩展运算符
                    // let dataList = [...res.rows];
                    console.log(dataList);
                    this.optionsFour = dataList.map(function (item) {
                        return { value: item.id, label: item.connection_name };
                    });
                    this.output4encode = dataList.map(function (item) {
                        return { value: item.id, label: item.encode };
                    });
                    console.log(this.optionsFour);
                });
            },
            getInstrument_typeData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsTwo = [];
                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getInstrument_type({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsTwo = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            this.output2encode = dataList.map(function (item) {
                                return { value: item.id, label: item.encode };
                            });
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getCheckbody_materialsData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.inputSeven = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getCheckbody_materials({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.inputSeven = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.inputSeven);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getPower_supplysData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsElvent = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getPower_supplys({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsElvent = dataList.map(function (item) {
                                return { value: item.id, label: item.electric_name };
                            });
                            this.output11encode = dataList.map(function (item) {
                                return { value: item.id, label: item.electric_encode };
                            });
                            console.log("供电电源编码为", this.output11encode);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getCommunicationsData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsSecond = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getCommunications({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsSecond = dataList.map(function (item) {
                                return { value: item.id, label: item.communication_name };
                            });
                            this.output12encode = dataList.map(function (item) {
                                return { value: item.id, label: item.communication_encode };
                            });
                            console.log(this.optionsSecond);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getCommunications_interfacesData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsThirdteen = [];
                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getCommunications_interfaces({
                        flowmeter_type_id: this.flowmeter_type_id,
                    })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsThirdteen = dataList.map(function (item) {
                                return { value: item.id, label: item.interface_name };
                            });
                            this.output13encode = dataList.map(function (item) {
                                return { value: item.id, label: item.interface_encode };
                            });
                            console.log("再次获得下拉框的值", this.optionsThirdteen);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getFunction_typeData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsThress = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getFunction_type({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsThress = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            this.output3encode = dataList.map(function (item) {
                                return { value: item.id, label: item.encode };
                            });
                            console.log(this.optionsThress);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getConnection_standardData () {
                this.options10 = [];
                getConnection_standard().then((res) => {
                    console.log(res);
                    let dataList = Array.from(res.rows); // 使用Array.from()方法
                    // 或者使用扩展运算符
                    // let dataList = [...res.rows];
                    console.log(dataList);
                    this.options10 = dataList.map(function (item) {
                        return { value: item.id, label: item.cstandard_name };
                    });
                    console.log(this.options10);
                });
            },
            getInstrumentData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id && this.instrument_type) {
                    console.log(this.flowmeter_type_id);
                    console.log(this.instrument_type);
                    this.optionsFourteen = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getInstrument({
                        flowmeter_type_id: this.flowmeter_type_id,
                        instrument_type_id: this.instrument_type,
                    })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsFourteen = dataList.map(function (item) {
                                return { value: item.id, label: item.instrument_name };
                            });
                            this.output14encode = dataList.map(function (item) {
                                return { value: item.id, label: item.instrument_encode };
                            });
                            console.log(this.optionsFourteen);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getProtectionsData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id && this.instrument_type) {
                    console.log(this.flowmeter_type_id);
                    console.log(this.instrument_type);
                    this.options4 = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getProtections({
                        flowmeter_type_id: this.flowmeter_type_id,
                        instrument_type_id: this.instrument_type,
                    })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options4 = dataList.map(function (item) {
                                return { value: item.id, label: item.protection_name };
                            });
                            console.log(this.options4);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getAccurategradesData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id && this.instrument_type) {
                    console.log(this.flowmeter_type_id);
                    console.log(this.instrument_type);
                    this.options5 = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getAccurategrades({
                        flowmeter_type_id: this.flowmeter_type_id,
                        instrument_type_id: this.instrument_type,
                    })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options5 = dataList.map(function (item) {
                                return { value: item.id, label: item.accurategrade_name };
                            });
                            console.log(this.options5);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getFLmaterialsData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    console.log(this.instrument_type);
                    this.options8 = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getFLmaterials({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options8 = dataList.map(function (item) {
                                return { value: item.id, label: item.FLmaterial_name };
                            });
                            console.log(this.options8);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getSlipcablesData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    console.log(this.instrument_type);
                    this.options11 = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getSlipcables({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options11 = dataList.map(function (item) {
                                return { value: item.id, label: item.slipcable_name };
                            });
                            console.log(this.options11);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getEleinfterfacesData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    console.log(this.instrument_type);
                    this.options9 = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getEleinfterfaces({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            // console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            // console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options9 = dataList.map(function (item) {
                                return { value: item.id, label: item.eleinfterface_name };
                            });
                            console.log(this.options9);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getBody_materialsData () {
                // 首先检查 this.flowmeter_type_id 是否存在且有效
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsSix = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getBody_materials({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsSix = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            this.output6encode = dataList.map(function (item) {
                                return { value: item.id, label: item.encode };
                            });
                            console.log(this.optionsSix);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getNomial_diameteData () {
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsSeven = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getNomial_diamete({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsSeven = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            this.output7encode = dataList.map(function (item) {
                                return { value: item.id, label: item.encode };
                            });
                            console.log(this.optionsSeven);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getNominal_pressuresData () {
                this.optionsEight = [];
                getNominal_pressures().then((res) => {
                    console.log(res);
                    let dataList = Array.from(res.rows); // 使用Array.from()方法
                    // 或者使用扩展运算符
                    // let dataList = [...res.rows];
                    console.log(dataList);
                    this.optionsEight = dataList.map(function (item) {
                        return { value: item.id, label: item.type_name };
                    });
                    this.output8encode = dataList.map(function (item) {
                        return { value: item.id, label: item.encode };
                    });
                    console.log(this.optionsEight);
                });
            },
            getProbe_materialData () {
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsNine = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getProbe_material({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsNine = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            this.output9encode = dataList.map(function (item) {
                                return { value: item.id, label: item.encode };
                            });
                            console.log(this.optionsNine);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getExplosion_proof_designsData () {
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.optionsTen = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getExplosion_proof_designs({
                        flowmeter_type_id: this.flowmeter_type_id,
                    })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.optionsTen = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            this.output10encode = dataList.map(function (item) {
                                return { value: item.id, label: item.encode };
                            });
                            console.log(this.optionsTen);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
            getGenerating_bodytableData () {
                if (this.flowmeter_type_id) {
                    console.log(this.flowmeter_type_id);
                    this.options7 = [];

                    // 调用 getInstrument_type 并传入包含 flowmeter_type_id 的对象
                    getGenerating_bodytable({ flowmeter_type_id: this.flowmeter_type_id })
                        .then((res) => {
                            console.log(res);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // 将查询结果映射到 this.optionsTwo，以便后续使用
                            this.options7 = dataList.map(function (item) {
                                return { value: item.id, label: item.type_name };
                            });
                            console.log(this.options7);
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                } else {
                    // 如果 this.flowmeter_type_id 无效，则可以在这里处理，例如设置错误消息或者返回
                    console.error("flowmeter_type_id 无效或不存在");
                }
            },
        },
        mounted () {
            this.getType_of_outputData();
            this.getNominal_pressuresData();
            this.getConnection_typesData();
            this.getBdy_materialtableData();
            this.getConnection_standardData();
            bus.$on("selectnameChanged", (newVal) => {
                console.log("接收到的介质为:", newVal);
                // 在这里处理接收到的介质值
                this.inputTwenty = newVal;
                console.log("测量介质值变为：", this.inputTwenty);
                bus.$emit("inputTwentyChanged", this.inputTwenty);
            });
            //后续了解mouted和created的区别·，以及箭头函数
        },
        created () {
            // 监听 flowmeterTypeChanged 事件，并更新 receivedFlowmeterType 数据
            bus.$on("flowmeterTypeChanged", (flowmeterType) => {
                this.flowmeter_type_id = flowmeterType;
                console.log("接收到的 flowmeter_type 数据:", this.flowmeter_type_id);
                this.getInstrument_typeData();
                this.getFunction_typeData();
                this.getBody_materialsData();
                this.getNomial_diameteData();
                this.getProbe_materialData();
                this.getExplosion_proof_designsData();
                this.getGenerating_bodytableData();
                this.getCheckbody_materialsData();
                //   this.getChangebody_materialsData();
                this.getPower_supplysData();
                this.getCommunicationsData();
                this.getCommunications_interfacesData();
                this.getFLmaterialsData();
                this.getSlipcablesData();
                this.getEleinfterfacesData();
            });
            bus.$on("flowmeterEncodeTypeChanged", (flowmeterType) => {
                this.inputFifteen = flowmeterType;
                console.log("接收到的 encode 数据:", this.inputFifteen);
            });
            // bus.$on('selectnameChanged', function (newVal) {
            //     console.log('接收到的介质为:', newVal);
            //     // 在这里处理接收到的介质值
            //     this.inputTwenty=newVal
            //     console.log("测量介质值变为：",this.inputTwenty)
            // });
        },
    };
</script>

<style scoped>
    #Specs {
        position: relative;
        margin-top: 50px;
        left: 60px;
        /* background-color: #ffff; */
        width: 1309.5px;
        height: 1790px;
        /* background-image: url("../assets/截屏2023-10-31\ 16.09.19.png"); */
    }

    .part1 {
        position: relative;
        margin-left: 60px;
        width: 550px;
        height: 1270px;
        top: 60px;
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        /* background: url("../assets/截屏2023-10-31\ 16.10.13.png"); */
    }

    .partTwo {
        margin-top: 100px;
        margin-left: 60px;
        width: 550px;
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        height: 380px;
        /* background: url("../assets/截屏2023-10-31\ 16.10.13.png"); */
    }

    .image {
        position: absolute;
        margin-left: 80px;
        width: 450px;
        margin-top: 55px;
    }

    .container {
        width: 550px;
        height: 45px;
        background-color: rgba(227, 227, 227, 0.667);
        line-height: 45px;
    }

    .select2 {
        width: 355px;
        margin-left: 10px;
    }

    .container1 {
        width: 550px;
        height: 45px;
        background-color: rgba(227, 227, 227, 0.667);
        font-weight: bold;
        height: 60px;
        /* text-align: center; */
        font-size: 30px;
        background-color: rgb(24, 102, 170);
        line-height: 45px;
    }

    .containerOne {
        width: 550px;
        height: 45px;
        background-color: rgba(227, 227, 227, 0.667);
        line-height: 45px;
    }

    .request {
        margin-top: 10px;
        margin-left: 8px;
        font-size: 13px;
    }

    .request1 {
        margin-top: 10px;
        font-size: 13px;
    }

    .input {
        width: 355px;
        margin-left: 10px;
    }

    .access {
        position: absolute;
        margin-left: 706px;
        /* margin-right: 160px; */
        top: 449.8px;
        background-color: #ffff;
        border: 1px solid rgb(217, 210, 210);
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        height: 1008px;
    }

    .model {
        margin-top: 10px;
        font-size: 25px;
    }

    .select1 {
        margin-top: 10px;
        margin-left: 3px;
        font-size: 13px;
        width: 355px;
    }
</style>
