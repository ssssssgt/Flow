<template>
    <div id="Outcome">
        <div class="biaotilan">
            <div class="container">计算结果 Calculated results</div>
            <div class="sanjiao"></div>
        </div>
        <div class="request">
            <span>最小</span>&nbsp;&nbsp;
            <span class="textOne">正常</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="textTwo">最大</span>
        </div>
        <div class="request">
            <span>流量 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="minFluidData" placeholder="最小流量" class="input"></el-input>
            <el-input v-model="mediumFluidData" placeholder="正常流量" class="input"></el-input>
            <el-input v-model="maxFluidData" placeholder="最大流量" class="input"></el-input>
            <common-select v-model="value1" :options="optionsOne" class="select"></common-select>
        </div>
        <div class="request">
            <span>压力损失 </span>&nbsp;
            <el-input v-model="inputFour" placeholder="最小损失" class="input"></el-input>
            <el-input v-model="inputFive" placeholder="正常损失" class="input"></el-input>
            <el-input v-model="inputSix" placeholder="最大损失" class="input"></el-input>
            <common-select v-model="value2" :options="optionsOne1" class="select"></common-select>
        </div>
        <div class="request">
            <span>测量精度 </span>&nbsp;
            <el-input v-model="inputSeven" placeholder="最小精度" class="input"></el-input>
            <el-input v-model="inputEight" placeholder="正常精度" class="input"></el-input>
            <el-input v-model="inputNine" placeholder="最大精度" class="input"></el-input>
            <common-select v-model="value4" :options="optionsOne2" class="select"></common-select>
        </div>
        <div class="request">
            <span>雷诺数 </span> &nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputTen" placeholder="最小雷诺" class="input"></el-input>
            <el-input v-model="inputOnes" placeholder="正常雷诺" class="input"></el-input>
            <el-input v-model="inputTwos" placeholder="最大雷诺" class="input"></el-input>
            <common-select v-model="value" :options="optionsOne3" class="select"></common-select>
        </div>
        <div class="request">
            <span>流速 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputThrees" placeholder="最小流速" class="input"></el-input>
            <el-input v-model="inputFours" placeholder="正常流速" class="input"></el-input>
            <el-input v-model="inputFives" placeholder="最大流速" class="input"></el-input>
            <common-select v-model="value3" :options="optionsOne4" class="select"></common-select>
        </div>
    </div>
</template>
<script>
    import CommonSelect from "@/components/el-select/CommonSelect.vue";
    import { bus } from "@/main.js";
    export default {
        props: {
            maxFluid: {
                type: String,
            },
            mediumFluid: {
                type: String,
            },
            minFluid: {
                type: String,
            },
            outcmomeData1: {
                type: Array,
            },
        }, //子组件定义prop接受父组件的传值
        name: "Outcome",
        components: {
            CommonSelect,
        },
        data () {
            return {
                minFluidData: "",
                mediumFluidData: "",
                maxFluidData: "",
                value4: [],
                value3: [],
                value2: [],
                value1: [],
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
                inputThrees: "",
                inputFours: "",
                inputFives: "",
                inputSixs: "",
                value: [],
                optionsOne4: [
                    {
                        value: "1",
                        label: "m/s",
                    },
                ],
                optionsOne1: [
                    {
                        value: "1",
                        label: "kPa(绝）",
                    },
                ],
                optionsOne2: [
                    {
                        value: "1",
                        label: "%",
                    },
                ],
                optionsOne3: [],
                optionsOne: [
                    {
                        value: "1",
                        label: "m3/h",
                    },
                ],
                dyviscosity: "", //运动粘度的值
            };
        },
        watch: {
            minFluidData () {
                this.updateCalculatedResultsData()
            },
            mediumFluidData () {
                this.updateCalculatedResultsData()
            },
            maxFluidData () {
                this.updateCalculatedResultsData()
            },
            value1 () {
                this.updateCalculatedResultsData()
            },
            inputFour () {
                this.updateCalculatedResultsData()
            },
            inputFive () {
                this.updateCalculatedResultsData()
            },
            inputSix () {
                this.updateCalculatedResultsData()
            },
            value2 () {
                this.updateCalculatedResultsData()
            },
            inputSeven () {
                this.updateCalculatedResultsData()
            },
            inputEight () {
                this.updateCalculatedResultsData()
            },
            inputNine () {
                this.updateCalculatedResultsData()
            },
            value4 () {
                this.updateCalculatedResultsData()
            },
            inputTen () {
                this.updateCalculatedResultsData()
            },
            inputOnes () {
                this.updateCalculatedResultsData()
            },
            inputTwos () {
                this.updateCalculatedResultsData()
            },
            value () {
                this.updateCalculatedResultsData()
            },
            inputThrees () {
                this.updateCalculatedResultsData()
            },
            inputFours () {
                this.updateCalculatedResultsData()
            },
            inputFives () {
                this.updateCalculatedResultsData()
            },
            value3 () {
                this.updateCalculatedResultsData()
            },
            outcmomeData1: {
                handler (newVal) {
                    console.log("接受到了新的结果输出:", newVal);
                    console.log("dayinl", newVal);
                    const firstItem = newVal["流量"];
                    const secondItem = newVal["压力损失"];
                    const thirdItem = newVal["测量精度"];
                    const fourItem = newVal["雷诺数"];
                    const fiveItem = newVal["流速"];
                    console.log("流量数组为：", firstItem);
                    this.minFluidData = firstItem["最小"];
                    this.mediumFluidData = firstItem["正常"];
                    this.maxFluidData = firstItem["最大"];
                    this.inputFour = secondItem["最小"];
                    this.inputFive = secondItem["正常"];
                    this.inputSix = secondItem["最大"];
                    this.inputSeven = thirdItem["最小"];
                    this.inputEight = thirdItem["正常"];
                    this.inputNine = thirdItem["最大"];
                    this.inputTen = fourItem["最小"];
                    this.inputOnes = fourItem["正常"];
                    this.inputTwos = fourItem["最大"];
                    this.inputThrees = fiveItem["最小"];
                    this.inputFours = fiveItem["正常"];
                    this.inputFives = fiveItem["最大"];
                },
            },
            minFluid: {
                handler (newVal) {
                    console.log("接受到了最小流量:", newVal);
                    this.minFluidData = newVal;
                    console.log("接受到了最小流量:", this.minFluidData);
                },
            },
            maxFluid: {
                handler (newVal) {
                    console.log("接受到了最小流量:", newVal);
                    this.maxFluidData = newVal;
                    console.log("接受到了最大流量:", this.maxFluidData);
                },
            },
            mediumFluid: {
                handler (newVal) {
                    console.log("接受到了最小流量:", newVal);
                    this.mediumFluidData = newVal;
                    console.log("接受到了正常流量:", this.mediumFluidData);
                },
            },
        },
        mounted () {
            this.value2 = [this.optionsOne1[0].value];
            this.value1 = [this.optionsOne[0].value];
            this.value4 = [this.optionsOne2[0].value];
            this.value3 = [this.optionsOne4[0].value];
            // bus.$on('select-value-changed', this.handleSelectValueChanged);
            // bus.$on('select-value-changed1', this.handleSelectValueChanged1);
            bus.$on("dyviscosityChanged", function (newVal) {
                console.log("接收到的运动粘度值为:", newVal);
                // 在这里处理接收到的运动粘度值
                this.dyviscosity = newVal;
            });
            bus.$on("fluid-speeds", (data) => {
                // 处理接收到的数据
                this.inputThrees = data.minFluidSpeed;
                this.inputFours = data.mediumFluidSpeed;
                this.inputFives = data.maxFluidSpeed;
                this.inputFive = data.ys;
                this.inputOnes = data.ln;
                this.inputSeven = data.minjd;
                this.inputNine = data.maxjd;
                this.inputEight = data.mediumjd;
                console.log(this.inputThrees);
                console.log(this.inputFours);
                console.log(this.inputFives);
            });
        },
        methods: {
            updateCalculatedResultsData () {
                this.crData = {
                    if: this.minFluidData,
                    nf: this.mediumFluidData,
                    af: this.maxFluidData,
                    mu: this.value1,
                    optionsOne: this.optionsOne,

                    il: this.inputFour,
                    nl: this.inputFive,
                    al: this.inputSix,
                    lu: this.value2,
                    optionsOne1: this.optionsOne1,

                    ic: this.inputSeven,
                    nc: this.inputEight,
                    ac: this.inputNine,
                    cu: this.value4,
                    optionsOne2: this.optionsOne2,

                    in: this.inputTen,
                    nn: this.inputOnes,
                    an: this.inputTwos,
                    nu: this.value,
                    optionsOne3: this.optionsOne3,

                    iv: this.inputThrees,
                    nv: this.inputFours,
                    av: this.inputFives,
                    vu: this.value3,
                    optionsOne4: this.optionsOne4,
                };
                // 触发自定义事件并传递chartData
                bus.$emit("calculatedResult-data-updated", this.crData);
                console.log("calculatedResult更新的数据", this.crData);
            },
        },
    };
</script>

<style scoped>
    #Outcome {
        position: absolute;
        right: -720px;
        margin-top: -923px;
        background-color: #ffff;
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        height: 340px;
        border-radius: 10px;
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
        width: 640px;
        height: 45px;
        background-color: rgba(227, 227, 227, 0.667);
        line-height: 45px;
    }

    .textOne {
        margin-left: 55px;
    }

    .textTwo {
        margin-left: 45px;
        margin-right: 135px;
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
    }

    /* .ei-divider {
  width: 50%;
} */
</style>
