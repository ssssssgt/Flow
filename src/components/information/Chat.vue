<template>
    <div id="Chat">
        <div class="container">流量计图表 Chart</div>
        <div class="request">
            <span>最小</span>
            <span class="textOne">最大</span>
        </div>
        <div class="request">
            <span>可测量流量范围</span> &nbsp;&nbsp;&nbsp;
            <el-input v-model="ChartData.inputOne" placeholder="最小流量" class="input"></el-input>
            <el-input v-model="ChartData.inputTwo" placeholder="最大流量" class="input"></el-input>
            <common-select :value="ChartData.value" :options="ChartData.optionsOne" class="select"></common-select>
        </div>
        <div class="request">
            <span>线性流量范围 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="ChartData.inputThree" placeholder="最小温度" class="input"></el-input>
            <el-input v-model="ChartData.inputFour" placeholder="最大温度" class="input"></el-input>
            <common-select :value="ChartData.value" :options="ChartData.optionsOne" class="select"></common-select>
        </div>
    </div>
</template>
<script>
    import CommonSelect from "@/components/el-select/CommonSelect.vue";
    import { bus } from "@/main.js";
    export default {
        name: "Chat",
        props: {
            chartData: {
                type: Array,
                default: () => [],
            },
        },
        components: {
            CommonSelect,
        },
        data () {
            return {
                ChartData: {
                    inputOne: "",
                    inputTwo: "",
                    inputThree: "",
                    inputFour: "",
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
                    value: [],
                },
            };
        },
        methods: {
            updateChartData () {
                // 根据页面数据更新chartData属性
                this.ChartData = {
                    inputOne: this.ChartData.inputOne,
                    inputTwo: this.ChartData.inputTwo,
                    inputThree: this.ChartData.inputThree,
                    inputFour: this.ChartData.inputFour,
                    value: this.ChartData.value,
                    optionsOne: this.ChartData.optionsOne,
                };
                console.log("chart更新的数据", this.ChartData);
                // 触发自定义事件并传递chartData
                bus.$emit("chart-data-updated", this.ChartData);
            },
            handleSelectValueChanged (value) {
                console.log("接收到的流量单位值:", value);
                this.ChartData.value = value;
                console.log("传递过来的流量单位值是：", this.ChartData.value);
                const selectedOption = this.ChartData.optionsOne.find(
                    (option) => option.value == value
                );
                // 判断是否找到匹配的选项对象，如果找到则将其 value 属性赋值给 selectedOptionValue，否则将其设为 null。
                if (selectedOption) {
                    this.ChartData.value = [selectedOption.value];
                } else {
                    this.ChartData.value = [];
                }
            },
        },
        watch: {
            chartData: {
                handler (newVal) {
                    console.log("chart接受到了新的结果输出:", newVal);
                    console.log("dayinl", newVal);
                    const firstItem = newVal["可测量流量范围"];
                    const secondItem = newVal["线性流量范围"];
                    this.ChartData.inputOne = firstItem["最小"];
                    this.ChartData.inputTwo = firstItem["最大"];
                    this.ChartData.inputThree = secondItem["最小"];
                    this.ChartData.inputFour = secondItem["最大"];
                },
            },
            // 监听每个元素的变化
            "ChartData.inputOne" () {
                this.updateChartData();
            },
            "ChartData.inputTwo" () {
                this.updateChartData();
            },
            "ChartData.inputThree" () {
                this.updateChartData();
            },
            "ChartData.inputFour" () {
                this.updateChartData();
            },
            "ChartData.value": {
                handler: function (newVal, oldVal) {
                    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                        this.updateChartData();
                    }
                },
                deep: true,
            },
            "ChartData.optionsOne": {
                handler: function (newVal, oldVal) {
                    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                        this.updateChartData();
                    }
                },
                deep: true,
            },
        },
        mounted () {
            bus.$on("select-value-changed", this.handleSelectValueChanged);
        },
    };
</script>

<style scoped>
    #Chat {
        position: absolute;
        margin-top: 40px;
        margin-left: 110px;
        background-color: #ffff;
        width: 1207.5px;
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        height: 200px;
        border-radius: 10px;
    }

    .container {
        width: 1207.5px;
        height: 45px;
        background-color: rgba(227, 227, 227, 0.667);
        line-height: 45px;
        /* left:128px; */
    }

    .textOne {
        margin-right: 120px;
        margin-left: 380px;
    }

    .request {
        margin-top: 10px;
        font-size: 13px;
    }

    .input {
        width: 383px;
        margin-left: 10px;
    }

    .select {
        margin-left: 10px;
    }
</style>
