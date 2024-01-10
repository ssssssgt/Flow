<template>
    <div id="Fluid">
        <div class="biaotilan">
            <div class="container">介质参数 Fluid properties</div>
            <div class="sanjiao"></div>
        </div>
        <div class="request1">
            <span>最小</span>
            <span class="textOne">正常</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="textTwo">最大</span>
        </div>
        <div class="request">
            <span>流量 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="FluidData.inputOne" placeholder="最小流量" class="input" @input="minFluidsion()"></el-input>
            <el-input v-model="FluidData.inputTwo" placeholder="正常流量" class="input" @input="mediumFluidsion()"></el-input>
            <el-input v-model="FluidData.inputThree" placeholder="最大流量" class="input" @input="maxFluidsion()"></el-input>
            <common-select v-model="FluidData.value1" :options="FluidData.optionsOne" class="select"></common-select>
        </div>
        <div class="request">
            <span>温度 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="FluidData.inputFour" placeholder="最小温度" class="input"></el-input>
            <el-input v-model="FluidData.inputFive" placeholder="正常温度" class="input"
                @input="compressionCoefficient"></el-input>
            <el-input v-model="FluidData.inputSix" placeholder="最大温度" class="input"></el-input>
            <common-select :value="FluidData.value3" :options="FluidData.optionsOnes" class="select"></common-select>
        </div>
        <div class="request">
            <span>压力 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="FluidData.inputSeven" placeholder="最小压力" class="input"></el-input>
            <el-input v-model="FluidData.inputEight" placeholder="正常压力" class="input"
                @input="compressionCoefficient"></el-input>
            <el-input v-model="FluidData.inputNine" placeholder="最大压力" class="input"></el-input>
            <common-select v-model="FluidData.value2" :options="FluidData.optionsTwo" class="select"></common-select>
        </div>
        <div class="request">
            <span>密度 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="FluidData.inputTen" placeholder="最小密度" class="input"></el-input>
            <el-input v-model="FluidData.inputOnes" placeholder="正常密度" class="input"></el-input>
            <el-input v-model="FluidData.inputTwos" placeholder="最大密度" class="input"></el-input>
            <common-select :value="FluidData.value5" :options="FluidData.optionsThress" class="select"></common-select>
        </div>
        <div class="request">
            <span>粘度 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="FluidData.inputFours" placeholder="最小粘度" class="input"></el-input>
            <el-input v-model="FluidData.inputFives" id="viscosityInput" placeholder="正常粘度" class="input"></el-input>
            <el-input v-model="FluidData.inputSixs" placeholder="最大粘度" class="input"></el-input>
            <common-select v-model="FluidData.value4" :options="FluidData.optionsFour" class="select"></common-select>
        </div>
        <div class="request">
            <span>量程范围 </span>&nbsp;
            <el-input v-model="FluidData.inputSevens" placeholder="最小量程" class="input"></el-input>
            <el-input v-model="FluidData.inputEights" placeholder="正常量程" class="input"></el-input>
            <el-input v-model="FluidData.inputNines" placeholder="最大量程" class="input"></el-input>
            <common-select v-model="FluidData.value7" :options="FluidData.optionsFive" class="select"></common-select>
        </div>
        <div class="request">
            <span>标况密度
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputTens" placeholder="标况密度" class="input"></el-input>
            <!-- <common-select :value="value6" :options="optionsSix" class="select"></common-select> -->
            <el-input v-model="inputTens1" placeholder="单位" class="input"></el-input>
        </div>
        <div class="child1">
            <Process :processData1="processData1" :compressConvenient="compressConvenient" />
        </div>
        <div class="child2">
            <Outcome :outcmomeData1="outcmomeData1" :maxFluid="maxFluid" :mediumFluid="mediumFluid" :minFluid="minFluid" />
        </div>
    </div>
</template>
<script>
import CommonSelect from "@/components/el-select/CommonSelect.vue";
import Process from "./Process.vue";
import Outcome from "./Outcome.vue";
import { bus } from "@/main.js";

export default {
    name: "Fluid",
    props: {
        fluidData: {
            type: Array,
            default: () => [],
        },
        processData: {
            type: Array,
            default: () => [],
        },
        outcmomeData: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        CommonSelect,
        Process,
        Outcome,
    },
    data() {
        return {
            value: [],
            medium: "", //接收到的介质名称，根据这个判断压缩系数是否计算
            inputTens: "",
            inputTens1: "",
            FluidData: {
                optionsOnes: [
                    {
                        value: "1",
                        label: "°C",
                    },
                ],
                // value6: [],
                value5: [],
                value3: [],
                value2: [],
                value1: [],
                value4: [],
                value7: [],
                inputOne: "",
                inputTwo: "",
                inputThree: "",
                inputFour: "",
                inputFive: "",
                inputSix: "",
                inputSeven: "",
                inputEight: "",
                inputNine: "",
                inputTen: "",
                inputOnes: "",
                inputTwos: "",
                inputFours: "",
                inputFives: "",
                inputSixs: "",
                inputSevens: "",
                inputEights: "",
                inputNines: "",
                optionsOne: [
                    {
                        value: "1",
                        label: "m3/h",
                    },
                    {
                        value: "2",
                        label: "m3/min",
                    },
                    {
                        value: "3",
                        label: "m3/s",
                    },
                    {
                        value: "4",
                        label: "L/h",
                    },
                    {
                        value: "5",
                        label: "l/min",
                    },
                    {
                        value: "6",
                        label: "l/s",
                    },
                    {
                        value: "7",
                        label: "Nm3/h",
                    },
                    {
                        value: "8",
                        label: "Nm3/min",
                    },
                    {
                        value: "9",
                        label: "Nm3/s",
                    },
                    {
                        value: "10",
                        label: "kg/h",
                    },
                    {
                        value: "11",
                        label: "kg/min",
                    },
                    {
                        value: "12",
                        label: "kg/s",
                    },
                    {
                        value: "13",
                        label: "t/h",
                    },
                ],
                optionsTwo: [
                    {
                        value: "1",
                        label: "kPa(绝）",
                    },
                    {
                        value: "2",
                        label: "kPa(表）",
                    },
                    {
                        value: "3",
                        label: "MPa(绝）",
                    },
                    {
                        value: "4",
                        label: "MPa(表）",
                    },
                    {
                        value: "5",
                        label: "bar(绝）",
                    },
                    {
                        value: "6",
                        label: "bar(表）",
                    },
                ],
                optionsThress: [
                    {
                        value: "1",
                        label: "kg/m3",
                    },
                ],
                optionsFour: [
                    {
                        value: "1",
                        label: "cP",
                    },
                    {
                        value: "2",
                        label: "mPa·s",
                    },
                    {
                        value: "3",
                        label: "kg/m·s",
                    },
                ],
                optionsFive: [
                    {
                        value: "1",
                        label: "t/h",
                    },
                ],
            },
            compressConvenient: "", //定义压缩系数的计算结果（字符串）
            maxFluid: "", //定义最大流量的计算结果
            mediumFluid: "", //定义正常流量的计算结果
            minFluid: "", //定义最小流量的计算结果
            outcmomeData1: [],
            processData1: [],
            diameterValue: "", //声明管道内径变量
            viscosity: "", //声明单位为kg/m·s动力粘度
            dyviscosity: "", //声明运动粘度的值
        };
    },
    methods: {
        updateFluidData() {
            // 根据页面数据更新chartData属性
            this.FluidData = {
                optionsOnes: this.FluidData.optionsOnes,
                // value6: this.FluidData.value6,
                value5: this.FluidData.value5,
                value3: this.FluidData.value3,
                value2: this.FluidData.value2,
                value1: this.FluidData.value1,
                value4: this.FluidData.value4,
                value7: this.FluidData.value7,
                inputOne: this.FluidData.inputOne,
                inputTwo: this.FluidData.inputTwo,
                inputThree: this.FluidData.inputThree,
                inputFour: this.FluidData.inputFour,
                inputFive: this.FluidData.inputFive,
                inputSix: this.FluidData.inputSix,
                inputSeven: this.FluidData.inputSeven,
                inputEight: this.FluidData.inputEight,
                inputNine: this.FluidData.inputNine,
                inputTen: this.FluidData.inputTen,
                inputOnes: this.FluidData.inputOnes,
                inputTwos: this.FluidData.inputTwos,
                inputFours: this.FluidData.inputFours,
                inputFives: this.FluidData.inputFives,
                inputSixs: this.FluidData.inputSixs,
                inputSevens: this.FluidData.inputSevens,
                inputEights: this.FluidData.inputEights,
                inputNines: this.FluidData.inputNines,
                optionsOne: this.FluidData.optionsOne,
                optionsTwo: this.FluidData.optionsTwo,
                optionsThress: this.FluidData.optionsThress,
                optionsFour: this.FluidData.optionsFour,
                optionsFive: this.FluidData.optionsFive,
            };
            console.log("Fluid更新的数据", this.FluidData);
            // 触发自定义事件并传递chartData
            bus.$emit("fluid-data-updated", this.FluidData);
        },
        handleSelectChange2() {
            // 触发事件并传递选中值
            // bus.$emit('select-value-changed2', this.value4);
            //   console.log('选中的值:', this.value4);
        },
        handleDefaultSelection2() {
            // 默认选中数组的第一个值
            this.FluidData.value4 = [this.FluidData.optionsFour[0].value];
            // 触发事件并传递默认选中值
            // bus.$emit('select-value-changed1', this.value2);
            //   console.log('默认选中的值:', this.value1);
        },
        handleSelectChange1() {
            // 触发事件并传递选中值
            bus.$emit("select-value-changed1", this.FluidData.value2);
            //   console.log('选中的值:', this.value2);
        },
        handleDefaultSelection1() {
            // 默认选中数组的第一个值
            this.FluidData.value2 = [this.FluidData.optionsTwo[0].value];
            // 触发事件并传递默认选中值
            bus.$emit("select-value-changed1", this.FluidData.value2);
            //   console.log('默认选中的值:', this.value1);
        },
        handleSelectChange() {
            // 触发事件并传递选中值
            bus.$emit("select-value-changed", this.FluidData.value1);
            //   console.log('选中的值:', this.value1);
        },
        handleDefaultSelection() {
            // 默认选中数组的第一个值
            this.FluidData.value1 = [this.FluidData.optionsOne[0].value];
            // 触发事件并传递默认选中值
            bus.$emit("select-value-changed", this.FluidData.value1);
            //   console.log('默认选中的值:', this.value1);
        },
        maxFluidsion() {
            const density1 = parseFloat(this.inputTens); //标准密度
            const density = parseFloat(this.FluidData.inputOnes); //工况密度
            if (!isNaN(density) && !isNaN(density1)) {
                let maxFluid = parseFloat(this.FluidData.inputThree);
                console.log("输入的最大流量是", this.FluidData.inputThree);
                // 单位换算逻辑
                const unit = this.FluidData.value1[0]; // 假设选择的单位存储在 selectedUnit 中
                let output; // 定义输出变量
                if (!isNaN(unit)) {
                    if (
                        unit == "1" ||
                        unit == "2" ||
                        unit == "3" ||
                        unit == "4" ||
                        unit == "5" ||
                        unit === "6" ||
                        unit == "7" ||
                        unit == "8" ||
                        unit == "9"
                    ) {
                        if (unit == "1") {
                            output = maxFluid;
                            const fluidFlow = output;
                            this.maxFluid = fluidFlow.toFixed(2);
                        } else if (unit == "2") {
                            output = maxFluid;
                            const fluidFlow = output;
                            this.maxFluid = (fluidFlow * 60).toString();
                            console.log("unit == '2'时", this.minFluid);
                        } else if (unit == "3") {
                            output = maxFluid;
                            const fluidFlow = output;
                            this.maxFluid = (fluidFlow * 3600).toString();
                        } else if (unit == "4") {
                            output = maxFluid;
                            const fluidFlow = output;
                            this.maxFluid = (fluidFlow * 0.001).toString();
                        } else if (unit == "5") {
                            output = maxFluid;
                            const fluidFlow = output;
                            this.maxFluid = (fluidFlow * 0.06).toString();
                        } else if (unit == "6") {
                            output = maxFluid;
                            const fluidFlow = output;
                            this.maxFluid = (fluidFlow * 3.6).toString();
                        } else if (unit == "7") {
                            const conversionFactor = density1 / density;
                            output = maxFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.maxFluid = fluidFlows.toString();
                        } else if (unit == "8") {
                            const conversionFactor = (density1 / density) * 60;
                            output = maxFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.maxFluid = fluidFlows.toString();
                        } else if (unit == "9") {
                            const conversionFactor = (density1 / density) * 3600;
                            output = maxFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.maxFluid = fluidFlows.toString();
                        } else {
                            output = "无法识别的单位";
                        }
                    } else if (
                        unit == "10" ||
                        unit == "11" ||
                        unit == "12" ||
                        unit == "13"
                    ) {
                        if (unit == "10") {
                            output = maxFluid;
                            const fluidFlow = output / density;
                            const fluidFlows = fluidFlow;
                            this.maxFluid = fluidFlows.toString();
                        } else if (unit == "11") {
                            output = maxFluid;
                            const fluidFlow = (output / density) * 60;
                            const fluidFlows = fluidFlow;
                            this.maxFluid = fluidFlows.toString();
                        } else if (unit == "12") {
                            output = maxFluid;
                            const fluidFlow = (output / density) * 3600;
                            const fluidFlows = fluidFlow;
                            this.maxFluid = fluidFlows.toString();
                        } else if (unit == "13") {
                            output = maxFluid;
                            const fluidFlow = (1000 * output) / density;
                            const fluidFlows = fluidFlow;
                            this.maxFluid = fluidFlows.toString();
                        }
                    } else {
                        output = "无法识别的单位";
                    }
                    console.log(this.maxFluid); // 输出结果
                    bus.$emit("maxFluidChanged", this.maxFluid);
                }
            }
            this.$watch("FluidData.value1", () => {
                if (!isNaN(density) && !isNaN(density1)) {
                    let maxFluid = parseFloat(this.FluidData.inputThree);
                    console.log("输入的最大流量是", this.FluidData.inputThree);
                    // 单位换算逻辑
                    const unit = this.FluidData.value1[0]; // 假设选择的单位存储在 selectedUnit 中
                    let output; // 定义输出变量
                    if (!isNaN(unit)) {
                        if (
                            unit == "1" ||
                            unit == "2" ||
                            unit == "3" ||
                            unit == "4" ||
                            unit == "5" ||
                            unit === "6" ||
                            unit == "7" ||
                            unit == "8" ||
                            unit == "9"
                        ) {
                            if (unit == "1") {
                                output = maxFluid;
                                const fluidFlow = output;
                                this.maxFluid = fluidFlow.toFixed(2);
                            } else if (unit == "2") {
                                output = maxFluid;
                                const fluidFlow = output;
                                this.maxFluid = (fluidFlow * 60).toString();
                                console.log("unit == '2'时", this.minFluid);
                            } else if (unit == "3") {
                                output = maxFluid;
                                const fluidFlow = output;
                                this.maxFluid = (fluidFlow * 3600).toString();
                            } else if (unit == "4") {
                                output = maxFluid;
                                const fluidFlow = output;
                                this.maxFluid = (fluidFlow * 0.001).toString();
                            } else if (unit == "5") {
                                output = maxFluid;
                                const fluidFlow = output;
                                this.maxFluid = (fluidFlow * 0.06).toString();
                            } else if (unit == "6") {
                                output = maxFluid;
                                const fluidFlow = output;
                                this.maxFluid = (fluidFlow * 3.6).toString();
                            } else if (unit == "7") {
                                const conversionFactor = density1 / density;
                                output = maxFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.maxFluid = fluidFlows.toString();
                            } else if (unit == "8") {
                                const conversionFactor = (density1 / density) * 60;
                                output = maxFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.maxFluid = fluidFlows.toString();
                            } else if (unit == "9") {
                                const conversionFactor = (density1 / density) * 3600;
                                output = maxFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.maxFluid = fluidFlows.toString();
                            } else {
                                output = "无法识别的单位";
                            }
                        } else if (
                            unit == "10" ||
                            unit == "11" ||
                            unit == "12" ||
                            unit == "13"
                        ) {
                            if (unit == "10") {
                                output = maxFluid;
                                const fluidFlow = output / density;
                                const fluidFlows = fluidFlow;
                                this.maxFluid = fluidFlows.toString();
                            } else if (unit == "11") {
                                output = maxFluid;
                                const fluidFlow = (output / density) * 60;
                                const fluidFlows = fluidFlow;
                                this.maxFluid = fluidFlows.toString();
                            } else if (unit == "12") {
                                output = maxFluid;
                                const fluidFlow = (output / density) * 3600;
                                const fluidFlows = fluidFlow;
                                this.maxFluid = fluidFlows.toString();
                            } else if (unit == "13") {
                                output = maxFluid;
                                const fluidFlow = (1000 * output) / density;
                                const fluidFlows = fluidFlow;
                                this.maxFluid = fluidFlows.toString();
                            }
                        } else {
                            output = "无法识别的单位";
                        }
                        console.log(this.maxFluid); // 输出结果
                        bus.$emit("maxFluidChanged", this.maxFluid);
                    }
                }
            });
        },
        minFluidsion() {
            const density1 = parseFloat(this.inputTens); //标准密度
            const density = parseFloat(this.FluidData.inputOnes); //工况密度
            if (!isNaN(density) && !isNaN(density1)) {
                let minFluid = parseFloat(this.FluidData.inputOne);
                console.log("输入的最小流量是", this.FluidData.inputOne);
                // 单位换算逻辑
                const unit = this.FluidData.value1[0]; // 假设选择的单位存储在 selectedUnit 中
                let output; // 定义输出变量
                if (!isNaN(unit)) {
                    if (
                        unit == "1" ||
                        unit == "2" ||
                        unit == "3" ||
                        unit == "4" ||
                        unit == "5" ||
                        unit === "6" ||
                        unit == "7" ||
                        unit == "8" ||
                        unit == "9"
                    ) {
                        if (unit == "1") {
                            output = minFluid;
                            const fluidFlow = output;
                            this.minFluid = fluidFlow.toFixed(2);
                        } else if (unit == "2") {
                            output = minFluid;
                            const fluidFlow = output;
                            this.minFluid = (fluidFlow * 60).toString();
                            console.log("unit == '2'时", this.minFluid);
                        } else if (unit == "3") {
                            output = minFluid;
                            const fluidFlow = output;
                            this.minFluid = (fluidFlow * 3600).toString();
                        } else if (unit == "4") {
                            output = minFluid;
                            const fluidFlow = output;
                            this.minFluid = (fluidFlow * 0.001).toString();
                        } else if (unit == "5") {
                            output = minFluid;
                            const fluidFlow = output;
                            this.minFluid = (fluidFlow * 0.06).toString();
                        } else if (unit == "6") {
                            output = minFluid;
                            const fluidFlow = output;
                            this.minFluid = (fluidFlow * 3.6).toString();
                        } else if (unit == "7") {
                            const conversionFactor = density1 / density;
                            output = minFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.minFluid = fluidFlows.toString();
                        } else if (unit == "8") {
                            const conversionFactor = (density1 / density) * 60;
                            output = minFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.minFluid = fluidFlows.toString();
                        } else if (unit == "9") {
                            const conversionFactor = (density1 / density) * 3600;
                            output = minFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.minFluid = fluidFlows.toString();
                        } else {
                            output = "无法识别的单位";
                        }
                    } else if (
                        unit == "10" ||
                        unit == "11" ||
                        unit == "12" ||
                        unit == "13"
                    ) {
                        if (unit == "10") {
                            output = minFluid;
                            const fluidFlow = output / density;
                            const fluidFlows = fluidFlow;
                            this.minFluid = fluidFlows.toString();
                        } else if (unit == "11") {
                            output = minFluid;
                            const fluidFlow = (output / density) * 60;
                            const fluidFlows = fluidFlow;
                            this.minFluid = fluidFlows.toString();
                        } else if (unit == "12") {
                            output = minFluid;
                            const fluidFlow = (output / density) * 3600;
                            const fluidFlows = fluidFlow;
                            this.minFluid = fluidFlows.toString();
                        } else if (unit == "13") {
                            output = minFluid;
                            const fluidFlow = (1000 * output) / density;
                            const fluidFlows = fluidFlow;
                            this.minFluid = fluidFlows.toString();
                        }
                    } else {
                        output = "无法识别的单位";
                    }
                    console.log(this.minFluid); // 输出结果
                    bus.$emit("minFluidChanged", this.minFluid);
                }
            }
            this.$watch("FluidData.value1", () => {
                if (!isNaN(density) && !isNaN(density1)) {
                    let minFluid = parseFloat(this.FluidData.inputOne);
                    console.log("输入的最小流量是", this.FluidData.inputOne);
                    // 单位换算逻辑
                    const unit = this.FluidData.value1[0]; // 假设选择的单位存储在 selectedUnit 中
                    console.log("流量单位变化为：", unit);
                    console.log("工况密度是", density);
                    console.log("标准密度是", density1);
                    let output; // 定义输出变量
                    if (!isNaN(unit)) {
                        if (
                            unit == "1" ||
                            unit == "2" ||
                            unit == "3" ||
                            unit == "4" ||
                            unit == "5" ||
                            unit === "6" ||
                            unit == "7" ||
                            unit == "8" ||
                            unit == "9"
                        ) {
                            if (unit == "1") {
                                output = minFluid;
                                const fluidFlow = output;
                                this.minFluid = fluidFlow.toFixed(2);
                            } else if (unit == "2") {
                                output = minFluid;
                                const fluidFlow = output;
                                this.minFluid = (fluidFlow * 60).toString();
                                console.log("unit == '2'时", this.minFluid);
                            } else if (unit == "3") {
                                output = minFluid;
                                const fluidFlow = output;
                                this.minFluid = (fluidFlow * 3600).toString();
                            } else if (unit == "4") {
                                output = minFluid;
                                const fluidFlow = output;
                                this.minFluid = (fluidFlow * 0.001).toString();
                            } else if (unit == "5") {
                                output = minFluid;
                                const fluidFlow = output;
                                this.minFluid = (fluidFlow * 0.06).toString();
                            } else if (unit == "6") {
                                output = minFluid;
                                const fluidFlow = output;
                                this.minFluid = (fluidFlow * 3.6).toString();
                            } else if (unit == "7") {
                                const conversionFactor = density1 / density;
                                output = minFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.minFluid = fluidFlows.toString();
                            } else if (unit == "8") {
                                const conversionFactor = (density1 / density) * 60;
                                output = minFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.minFluid = fluidFlows.toString();
                            } else if (unit == "9") {
                                const conversionFactor = (density1 / density) * 3600;
                                output = minFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.minFluid = fluidFlows.toString();
                            } else {
                                output = "无法识别的单位";
                            }
                        } else if (
                            unit == "10" ||
                            unit == "11" ||
                            unit == "12" ||
                            unit == "13"
                        ) {
                            if (unit == "10") {
                                output = minFluid;
                                const fluidFlow = output / density;
                                const fluidFlows = fluidFlow;
                                this.minFluid = fluidFlows.toString();
                            } else if (unit == "11") {
                                output = minFluid;
                                const fluidFlow = (output / density) * 60;
                                const fluidFlows = fluidFlow;
                                this.minFluid = fluidFlows.toString();
                            } else if (unit == "12") {
                                output = minFluid;
                                const fluidFlow = (output / density) * 3600;
                                const fluidFlows = fluidFlow;
                                this.minFluid = fluidFlows.toString();
                            } else if (unit == "13") {
                                output = minFluid;
                                const fluidFlow = (1000 * output) / density;
                                const fluidFlows = fluidFlow;
                                this.minFluid = fluidFlows.toString();
                            }
                        } else {
                            output = "无法识别的单位";
                        }
                        console.log(this.minFluid); // 输出结果
                        bus.$emit("minFluidChanged", this.minFluid);
                    }
                }
            });
        },
        mediumFluidsion() {
            const density1 = parseFloat(this.inputTens); //标准密度
            const density = parseFloat(this.FluidData.inputOnes); //工况密度
            if (!isNaN(density) && !isNaN(density1)) {
                let mediumFluid = parseFloat(this.FluidData.inputTwo);
                console.log("输入的正常流量是", this.FluidData.inputTwo);
                // 单位换算逻辑
                const unit = this.FluidData.value1[0]; // 假设选择的单位存储在 selectedUnit 中
                let output; // 定义输出变量
                if (!isNaN(unit)) {
                    if (
                        unit == "1" ||
                        unit == "2" ||
                        unit == "3" ||
                        unit == "4" ||
                        unit == "5" ||
                        unit === "6" ||
                        unit == "7" ||
                        unit == "8" ||
                        unit == "9"
                    ) {
                        if (unit == "1") {
                            output = mediumFluid;
                            const fluidFlow = output;
                            this.mediumFluid = fluidFlow.toFixed(2);
                        } else if (unit == "2") {
                            output = mediumFluid;
                            const fluidFlow = output;
                            this.mediumFluid = (fluidFlow * 60).toString();
                            console.log("unit == '2'时", this.mediumFluid);
                        } else if (unit == "3") {
                            output = mediumFluid;
                            const fluidFlow = output;
                            this.mediumFluid = (fluidFlow * 3600).toString();
                        } else if (unit == "4") {
                            output = mediumFluid;
                            const fluidFlow = output;
                            this.mediumFluid = (fluidFlow * 0.001).toString();
                        } else if (unit == "5") {
                            output = mediumFluid;
                            const fluidFlow = output;
                            this.mediumFluid = (fluidFlow * 0.06).toString();
                        } else if (unit == "6") {
                            output = mediumFluid;
                            const fluidFlow = output;
                            this.mediumFluid = (fluidFlow * 3.6).toString();
                        } else if (unit == "7") {
                            const conversionFactor = density1 / density;
                            output = mediumFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.mediumFluid = fluidFlows.toString();
                        } else if (unit == "8") {
                            const conversionFactor = (density1 / density) * 60;
                            output = mediumFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.mediumFluid = fluidFlows.toString();
                        } else if (unit == "9") {
                            const conversionFactor = (density1 / density) * 3600;
                            output = mediumFluid * conversionFactor;
                            const fluidFlow = output;
                            const fluidFlows = fluidFlow;
                            this.mediumFluid = fluidFlows.toString();
                        } else {
                            output = "无法识别的单位";
                        }
                    } else if (
                        unit == "10" ||
                        unit == "11" ||
                        unit == "12" ||
                        unit == "13"
                    ) {
                        if (unit == "10") {
                            output = mediumFluid;
                            const fluidFlow = output / density;
                            const fluidFlows = fluidFlow;
                            this.mediumFluid = fluidFlows.toString();
                        } else if (unit == "11") {
                            output = mediumFluid;
                            const fluidFlow = (output / density) * 60;
                            const fluidFlows = fluidFlow;
                            this.mediumFluid = fluidFlows.toString();
                        } else if (unit == "12") {
                            output = mediumFluid;
                            const fluidFlow = (output / density) * 3600;
                            const fluidFlows = fluidFlow;
                            this.mediumFluid = fluidFlows.toString();
                        } else if (unit == "13") {
                            output = mediumFluid;
                            const fluidFlow = (1000 * output) / density;
                            const fluidFlows = fluidFlow;
                            this.mediumFluid = fluidFlows.toString();
                        }
                    } else {
                        output = "无法识别的单位";
                    }
                    console.log(this.maxFluid); // 输出结果
                    bus.$emit("mediumFluidChanged", this.mediumFluid);
                }
            }
            this.$watch("value1", () => {
                if (!isNaN(density) && !isNaN(density1)) {
                    let mediumFluid = parseFloat(this.FluidData.inputTwo);
                    console.log("输入的正常流量是", this.FluidData.inputTwo);
                    // 单位换算逻辑
                    const unit = this.FluidData.value1[0]; // 假设选择的单位存储在 selectedUnit 中
                    let output; // 定义输出变量
                    if (!isNaN(unit)) {
                        if (
                            unit == "1" ||
                            unit == "2" ||
                            unit == "3" ||
                            unit == "4" ||
                            unit == "5" ||
                            unit === "6" ||
                            unit == "7" ||
                            unit == "8" ||
                            unit == "9"
                        ) {
                            if (unit == "1") {
                                output = mediumFluid;
                                const fluidFlow = output;
                                this.mediumFluid = fluidFlow.toFixed(2);
                            } else if (unit == "2") {
                                output = mediumFluid;
                                const fluidFlow = output;
                                this.mediumFluid = (fluidFlow * 60).toString();
                                console.log("unit == '2'时", this.mediumFluid);
                            } else if (unit == "3") {
                                output = mediumFluid;
                                const fluidFlow = output;
                                this.mediumFluid = (fluidFlow * 3600).toString();
                            } else if (unit == "4") {
                                output = mediumFluid;
                                const fluidFlow = output;
                                this.mediumFluid = (fluidFlow * 0.001).toString();
                            } else if (unit == "5") {
                                output = mediumFluid;
                                const fluidFlow = output;
                                this.mediumFluid = (fluidFlow * 0.06).toString();
                            } else if (unit == "6") {
                                output = mediumFluid;
                                const fluidFlow = output;
                                this.mediumFluid = (fluidFlow * 3.6).toString();
                            } else if (unit == "7") {
                                const conversionFactor = density1 / density;
                                output = mediumFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.mediumFluid = fluidFlows.toString();
                            } else if (unit == "8") {
                                const conversionFactor = (density1 / density) * 60;
                                output = mediumFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.mediumFluid = fluidFlows.toString();
                            } else if (unit == "9") {
                                const conversionFactor = (density1 / density) * 3600;
                                output = mediumFluid * conversionFactor;
                                const fluidFlow = output;
                                const fluidFlows = fluidFlow;
                                this.mediumFluid = fluidFlows.toString();
                            } else {
                                output = "无法识别的单位";
                            }
                        } else if (
                            unit == "10" ||
                            unit == "11" ||
                            unit == "12" ||
                            unit == "13"
                        ) {
                            if (unit == "10") {
                                output = mediumFluid;
                                const fluidFlow = output / density;
                                const fluidFlows = fluidFlow;
                                this.mediumFluid = fluidFlows.toString();
                            } else if (unit == "11") {
                                output = mediumFluid;
                                const fluidFlow = (output / density) * 60;
                                const fluidFlows = fluidFlow;
                                this.mediumFluid = fluidFlows.toString();
                            } else if (unit == "12") {
                                output = mediumFluid;
                                const fluidFlow = (output / density) * 3600;
                                const fluidFlows = fluidFlow;
                                this.mediumFluid = fluidFlows.toString();
                            } else if (unit == "13") {
                                output = mediumFluid;
                                const fluidFlow = (1000 * output) / density;
                                const fluidFlows = fluidFlow;
                                this.mediumFluid = fluidFlows.toString();
                            }
                        } else {
                            output = "无法识别的单位";
                        }
                        console.log(this.mediumFluid); // 输出结果
                        bus.$emit("mediumFluidChanged", this.mediumFluid);
                    }
                }
            });
        },
        compressionCoefficient() {
            if (this.medium == "气体") {
                const temperature = parseFloat(this.FluidData.inputFive);
                if (isNaN(temperature)) {
                    return; // 温度输入不合法，不进行任何操作
                }

                let pressure = parseFloat(this.FluidData.inputEight);
                if (isNaN(pressure)) {
                    return; // 压力输入不合法，不进行任何操作
                }

                let selectedOption = parseInt(this.FluidData.value2); // 将字符串类型的选项值转换为数字类型

                const recalculateCompressCoefficient = () => {
                    let pressureInKpaAbs = pressure; // 初始化压力值为输入的值
                    switch (selectedOption) {
                        case 2:
                            pressureInKpaAbs += 101.325; // 将压力值从kPa(表）转换为kPa(绝）
                            break;
                        case 3:
                            pressureInKpaAbs *= 1000; // 将压力值从MPa(绝）转换为kPa(绝）
                            break;
                        case 4:
                            pressureInKpaAbs = pressure * 1000 + 101.325; // 将压力值从MPa(表）转换为kPa(绝）
                            break;
                        case 5:
                            pressureInKpaAbs *= 101.325; // 将压力值从bar(绝）转换为kPa(绝）
                            break;
                        case 6:
                            pressureInKpaAbs = pressure * 101.325 + 101.325; // 将压力值从bar(表）转换为kPa(绝）
                            break;
                        default: // 默认情况下，假设压力值已经是kPa(绝）单位
                            break;
                    }
                    const compressCoefficient =
                        ((pressureInKpaAbs / 101.325) * 273) / (273 + temperature);
                    this.compressConvenient = compressCoefficient.toString();
                };

                // 初始计算压缩系数
                recalculateCompressCoefficient();
                // 监听选项值的变化，并重新计算压力值和压缩系数
                this.$watch("FluidData.value2", (newValue, oldValue) => {
                    if (newValue == oldValue) {
                        return; // 单位值未改变，不进行任何操作
                    }
                    console.log(`压力选项值从 ${oldValue} 变为 ${newValue}`);
                    // 更新选项值并重新计算压力值和压缩系数
                    selectedOption = parseInt(newValue);
                    pressure = parseFloat(this.FluidData.inputEight);
                    recalculateCompressCoefficient();
                });
            }
        },
        calculateViscosity() {
            //计算运动粘度
            this.dyviscosity =
                Number(this.viscosity) / Number(this.FluidData.inputOnes);
            console.log("运动粘度为：", this.dyviscosity);
        },
        // 更新粘度值
        updateViscosity(value, unit) {
            if (value && unit) {
                if (unit == "kg/m·s") {
                    this.viscosity = parseFloat(value);
                } else if (unit == "mPa·s") {
                    this.viscosity = 0.001 * parseFloat(value);
                } else if (unit == "cP") {
                    this.viscosity = 0.001 * parseFloat(value);
                } else {
                    console.log("不支持的单位");
                    return;
                }
                console.log("统一化为单位是kg/m·s后的粘度值为：", this.viscosity);
                this.calculateViscosity();
                console.log("运动粘度为；", this.dyviscosity);
            }
        },
    },
    mounted() {
        this.$watch("FluidData.value4", (newValue) => {
            console.log("下拉框数值变化：", newValue);
            if (newValue && newValue.length > 0) {
                const unit = this.FluidData.optionsFour.find(
                    (option) => option.value === newValue[0]
                ).label;
                this.updateViscosity(this.FluidData.inputFives, unit);
            }
        });
        this.$watch("FluidData.inputOnes", (newValue) => {
            this.calculateViscosity(); // 调用计算运动粘度函数
            bus.$emit("FluidData.inputOnes", newValue);
        });
        // 监听输入框数值变化
        this.$watch("FluidData.inputFives", (newValue) => {
            if (newValue || newValue === 0) {
                this.updateViscosity(
                    newValue,
                    this.FluidData.value4[0]
                        ? this.FluidData.optionsFour.find(
                            (option) => option.value === this.FluidData.value4[0]
                        ).label
                        : ""
                );
            }
        });
        this.FluidData.value5 = [this.FluidData.optionsThress[0].value];
        this.FluidData.value3 = [this.FluidData.optionsOnes[0].value];
        this.FluidData.value7 = [this.FluidData.optionsFive[0].value];
        this.handleDefaultSelection2();
        this.handleDefaultSelection1();
        // 初始化默认选中值为选项数组的第一个值
        this.handleDefaultSelection();
        // this.calculatemaxFlowSpeed()
        bus.$on("density-change", (density) => {
            console.log("收到的密度值:", density);
            console.log(typeof density); //number
            console.log(typeof this.compressConvenient); //String
            console.log("density:", density);
            console.log("compressConvenient:", this.compressConvenient);
            if (this.medium == "气体") {
                this.FluidData.inputOnes =
                    Number(density) * Number(this.compressConvenient);
                this.$watch("compressConvenient", (newVal) => {
                    this.FluidData.inputOnes = Number(density) * Number(newVal);
                });
            } else if (this.medium == "液体") {
                this.FluidData.inputOnes = density;
            }
            this.inputTens = density;
            console.log(typeof this.FluidData.inputOnes);
            console.log(this.FluidData.inputOnes);
            // this.pressureLossion()
        });
        bus.$on("viscosity-change", (viscosity) => {
            console.log("收到的粘度值:", viscosity);
            if (viscosity == 0 && (this.medium == "气体" || this.medium == "液体")) {
                //用户自己输入
            } else {
                this.FluidData.inputFives = viscosity * 0.001; // 将单位kg/m·s转换为cP呈现在页面上
                this.viscosity = viscosity;
                console.log(
                    "已设置this.inputFives为计算结果：",
                    this.FluidData.inputFives
                );
            }
            console.log("最终的标准动力粘度值是：", this.viscosity); // 添加打印语句，打印最终的this.inputFives
            this.calculateViscosity();
        });
        bus.$on("medium-change", (medium) => {
            this.medium = medium;
            console.log("接收到选择的具体介质名称后判断是否计算压缩系数", medium);
            if (medium === "气体") {
                this.inputTens1 = "kg/m3";
                // console.log("1234", this.inputTens1)
            } else if (medium === "液体") {
                this.compressConvenient = "无";
                this.inputTens1 = "kg/m3";
            } else if (medium === "蒸汽") {
                this.compressConvenient = "无";
            }
        });
    },
    watch: {
        "FluidData.optionsOnes": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        // 监听 value6 数据
        //   'FluidData.value6': {
        //       handler: function (newVal, oldVal) {
        //         if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        //             this.updateFluidData();
        //         }
        //       },
        //       deep: true
        //     },
        // 监听 value5 数据
        "FluidData.value5": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        // 监听 value3 数据
        "FluidData.value3": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        // 监听 value2 数据
        "FluidData.value2": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
                this.handleSelectChange1();
            },
            deep: true,
        },
        // 监听 value1 数据
        "FluidData.value1": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
                this.handleSelectChange();
            },
            deep: true,
        },
        // 监听 value4 数据
        "FluidData.value4": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
                this.handleSelectChange2();
            },
            deep: true,
        },
        // 监听 value7 数据
        "FluidData.value7": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        // 监听 inputOne 数据
        "FluidData.inputOne": function () {
            this.updateFluidData();
        },
        // 监听 inputTwo 数据
        "FluidData.inputTwo": function () {
            this.updateFluidData();
        },
        // 监听 inputThree 数据
        "FluidData.inputThree": function () {
            this.updateFluidData();
        },
        // 监听 inputFour 数据
        "FluidData.inputFour": function () {
            this.updateFluidData();
        },
        // 监听 inputFive 数据
        "FluidData.inputFive": function () {
            this.updateFluidData();
        },
        // 监听 inputSix 数据
        "FluidData.inputSix": function () {
            this.updateFluidData();
        },
        // 监听 inputSeven 数据
        "FluidData.inputSeven": function () {
            this.updateFluidData();
        },
        // 监听 inputEight 数据
        "FluidData.inputEight": function () {
            this.updateFluidData();
        },
        // 监听 inputNine 数据
        "FluidData.inputNine": function () {
            this.updateFluidData();
        },
        // 监听 inputTen 数据
        "FluidData.inputTen": function () {
            this.updateFluidData();
        },
        // 监听 inputOnes 数据
        "FluidData.inputOnes": function () {
            this.updateFluidData();
        },
        // 监听 inputTwos 数据
        "FluidData.inputTwos": function () {
            this.updateFluidData();
        },
        // 监听 inputFours 数据
        "FluidData.inputFours": function () {
            this.updateFluidData();
        },
        // 监听 inputFives 数据
        "FluidData.inputFives": function () {
            this.updateFluidData();
        },
        // 监听 inputSixs 数据
        "FluidData.inputSixs": function () {
            this.updateFluidData();
        },
        // 监听 inputSevens 数据
        "FluidData.inputSevens": function () {
            this.updateFluidData();
        },
        // 监听 inputEights 数据
        "FluidData.inputEights": function () {
            this.updateFluidData();
        },
        // 监听 inputNines 数据
        "FluidData.inputNines": function () {
            this.updateFluidData();
        },
        // 监听 optionsOne 数据
        "FluidData.optionsOne": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        // 监听 optionsTwo 数据
        "FluidData.optionsTwo": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        // 监听 optionsThress 数据
        "FluidData.optionsThress": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        // 监听 optionsFour 数据
        "FluidData.optionsFour": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        // 监听 optionsFive 数据
        FluidData: {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateFluidData();
                }
            },
            deep: true,
        },
        dyviscosity(newVal) {
            bus.$emit("dyviscosityChanged", newVal);
            console.log("监听到的运动粘度值为：", newVal);
        },
        //         'FluidData.value4': function (newValue, oldValue) {
        //     this.handleSelectChange2();
        //   },
        //   'FluidData.value1': function (newValue, oldValue) {
        //     this.handleSelectChange();
        //   },
        //   'FluidData.value2': function (newValue, oldValue) {
        //     this.handleSelectChange1();
        //   },
        processData: {
            handler(newVal) {
                this.processData1 = newVal;
                console.log("接受到了项目信息:", this.processData1);
            },
        },
        outcmomeData: {
            handler(newVal) {
                this.outcmomeData1 = newVal;
                console.log("接受到了输出结果信息:", this.outcmomeData1);
            },
        },
        fluidData: {
            handler(newVal) {
                console.log("肯定接受到了Fluid数据", newVal);
                const firstItem = newVal["流量"];
                const secondItem = newVal["温度"];
                const thirdItem = newVal["压力"];
                const fourItem = newVal["密度"];
                const fiveItem = newVal["粘度"];
                const sixItem = newVal["量程范围"];
                const sevenItem = newVal["流量"][""];
                const eightItem = newVal["温度"][""];
                const nineItem = newVal["压力"][""];
                console.log("肯定接受到了压力单位", nineItem)
                const tenItem = newVal["密度"][""];
                const elevenItem = newVal["粘度"][""];
                const twelveItem = newVal["量程范围"][""];
                // 在选项中查找匹配项的value属性
                const match = this.FluidData.optionsOne.find(
                    (option) => option.label == sevenItem
                );
                console.log("新的id为：", match);
                // 如果找到了匹配项，则将其value属性赋值给selectedValue
                if (match) {
                    this.FluidData.value1 = [match.value];
                }
                const match1 = this.FluidData.optionsOnes.find(
                    (option) => option.label == eightItem
                );

               
                if (match1) {
                    this.FluidData.value3 = [match1.value];
                }
                const match2 = this.FluidData.optionsTwo.find(
                    (option) => option.label == nineItem
                );
                if (match2) {
                    this.FluidData.value2 = [match2.value];
                    console.log("肯定找到匹配项:", match2);
                } else {
                    console.log("肯定未找到匹配项",nineItem);
                }
                const match3 = this.FluidData.optionsThress.find(
                    (option) => option.label == tenItem
                );
               
                if (match3) {
                    this.FluidData.value5 = [match3.value];
                }
                const match4 = this.FluidData.optionsFour.find(
                    (option) => option.label == elevenItem
                );
               
                if (match4) {
                    this.FluidData.value4 = [match4.value];
                }
                const match5 = this.FluidData.optionsFive.find(
                    (option) => option.label == twelveItem
                );
                
                if (match5) {
                    this.FluidData.value7 = [match5.value];
                }
                this.FluidData.inputOne = firstItem["最小"];
                this.FluidData.inputTwo = firstItem["正常"];
                this.FluidData.inputThree = firstItem["最大"];
                this.FluidData.inputFour = secondItem["最小"];
                this.FluidData.inputFive = secondItem["正常"];
                this.FluidData.inputSix = secondItem["最大"];
                this.FluidData.inputSeven = thirdItem["最小"];
                this.FluidData.inputEight = thirdItem["正常"];
                this.FluidData.inputNine = thirdItem["最大"];
                this.FluidData.inputTen = fourItem["最小"];
                this.FluidData.inputOnes = fourItem["正常"];
                this.FluidData.inputTwos = fourItem["最大"];
                this.FluidData.inputFours = fiveItem["最小"];
                this.FluidData.inputFives = fiveItem["正常"];
                this.FluidData.inputSixs = fiveItem["最大"];
                this.FluidData.inputSevens = sixItem["最小"];
                this.FluidData.inputEights = sixItem["正常"];
                this.FluidData.inputNines = sixItem["最大"];
            },
        },
    },
    computed: {},
};
</script>
<style scoped>
#Fluid {
    position: absolute;
    left: 29px;
    /* left: 128px; */
    margin-top: 590px;
    left: 110px;
    background-color: #ffff;
    border-left: 1px solid rgb(217, 210, 210);
    border-right: 1px solid rgb(217, 210, 210);
    border-bottom: 1px solid rgb(217, 210, 210);
    height: 430px;
    /* 400px */
    border-radius: 10px;
    border: 1px solid rgb(217, 210, 210);
}

.biaotilan {
    width: auto;
    height: 45px;
    /* background-color: #02a7f0; */
    overflow: hidden;
}

.sanjiao {
    position: absolute;
    top: 0;
    right: 0;
    height: 45px;
    width: 50px;
    background-color: rgb(24, 102, 170);
    clip-path: polygon(0 0, 100% 100%, 100% 0);
}

.container {
    width: 505px;
    height: 45px;
    line-height: 45px;
    background-color: rgba(227, 227, 227, 0.667);
}

.textOne {
    margin-left: 75px;
}

.textTwo {
    margin-left: 75px;
    margin-right: 125px;
}

.request1 {
    margin-top: 10px;
    margin-left: 110px;
    font-size: 13px;
}

.request {
    margin-top: 10px;
    font-size: 13px;
}

.input {
    width: 90px;
    margin-left: 10px;
}

.select {
    margin-left: 10px;
    width: 90px;
}

.child {
    margin-top: -798px;
    left: 668px;
}
</style>
