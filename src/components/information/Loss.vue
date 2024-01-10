<template>
    <div id="Loss">
        <div class="container">
            测量误差及压力损失 Measurement error & Pressure loss
        </div>
        <div class="request1">
            <span>流量（%）</span>
            <span>流量（kg/h）</span>
            <span>测量误差（%）</span>
            <span>压力损失（KPa）</span>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][0]" class="input"></el-input>
            <el-input v-model="inputs[1][0]" class="input"></el-input>
            <el-input v-model="inputs[2][0]" class="input"></el-input>
            <el-input v-model="inputs[3][0]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][1]" class="input"></el-input>
            <el-input v-model="inputs[1][1]" class="input"></el-input>
            <el-input v-model="inputs[2][1]" class="input"></el-input>
            <el-input v-model="inputs[3][1]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][2]" class="input"></el-input>
            <el-input v-model="inputs[1][2]" class="input"></el-input>
            <el-input v-model="inputs[2][2]" class="input"></el-input>
            <el-input v-model="inputs[3][2]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][3]" class="input"></el-input>
            <el-input v-model="inputs[1][3]" class="input"></el-input>
            <el-input v-model="inputs[2][3]" class="input"></el-input>
            <el-input v-model="inputs[3][3]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][4]" class="input"></el-input>
            <el-input v-model="inputs[1][4]" class="input"></el-input>
            <el-input v-model="inputs[2][4]" class="input"></el-input>
            <el-input v-model="inputs[3][4]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][5]" class="input"></el-input>
            <el-input v-model="inputs[1][5]" class="input"></el-input>
            <el-input v-model="inputs[2][5]" class="input"></el-input>
            <el-input v-model="inputs[3][5]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][6]" class="input"></el-input>
            <el-input v-model="inputs[1][6]" class="input"></el-input>
            <el-input v-model="inputs[2][6]" class="input"></el-input>
            <el-input v-model="inputs[3][6]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][7]" class="input"></el-input>
            <el-input v-model="inputs[1][7]" class="input"></el-input>
            <el-input v-model="inputs[2][7]" class="input"></el-input>
            <el-input v-model="inputs[3][7]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][8]" class="input"></el-input>
            <el-input v-model="inputs[1][8]" class="input"></el-input>
            <el-input v-model="inputs[2][8]" class="input"></el-input>
            <el-input v-model="inputs[3][8]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][9]" class="input"></el-input>
            <el-input v-model="inputs[1][9]" class="input"></el-input>
            <el-input v-model="inputs[2][9]" class="input"></el-input>
            <el-input v-model="inputs[3][9]" class="input"></el-input>
        </div>
        <div class="request">
            <el-input v-model="inputs[0][10]" class="input"></el-input>
            <el-input v-model="inputs[1][10]" class="input"></el-input>
            <el-input v-model="inputs[2][10]" class="input"></el-input>
            <el-input v-model="inputs[3][10]" class="input"></el-input>
        </div>
        <div>
            <div>
                <!-- 显示图表 -->
                <div class="image-container">
                    <div class="echart" ref="chart">
                        <el-image :src="chartImageUrl[0]" style="max-width: 100%" />
                    </div>
                </div>
                <!-- 绘制按钮 -->
                <div class="update-button">
                    <el-button @click="validateInputs">绘制图表</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as echarts from "echarts";
    import { bus } from "@/main.js";
    export default {
        name: "Loss",
        props: {
            measurementData: {
                type: Array,
                default: () => [],
            },
            lossImage: {
                type: Array,
                default: () => [],
            },
        },
        data () {
            return {
                inputs: [
                    [null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null],
                ],
                chartImageUrl: [""], //图表图片的Base64编码
                LossData: {}, // 定义 LossData 属性
            };
        },
        methods: {
            // 根据页面数据更新 LossData 属性
            updateLossData () {
                const lossData = {};
                for (let i = 0; i < this.inputs.length; i++) {
                    for (let j = 0; j < this.inputs[i].length; j++) {
                        lossData[`${i},${j}`] = this.inputs[i][j];
                    }
                }
                this.LossData = lossData;
                bus.$emit("loss-data-updated", this.LossData);
                console.log("Loss数据更新了", lossData);
            },
            validateInputs () {
                this.drawChart();
            },
            async drawChart () {
                // this.chartLoading = true;
                const chart = echarts.init(this.$refs.chart);
                // 获取用户输入的数据
                // const flowPercentage = this.inputs[0];
                const flowKgPerHour = this.inputs[1];
                const measurementError = this.inputs[2];
                const pressureLoss = this.inputs[3];
                // 构造图表的配置项和数据
                const option = {
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross",
                        },
                        formatter: "{b}: {c}",
                    },
                    xAxis: {
                        type: "category",
                        data: flowKgPerHour,
                        name: "流量(kg/h)",
                        axisLabel: {
                            fontSize: 9, // 设置字体大小为 10px
                        },
                    },
                    yAxis: [
                        {
                            type: "value",
                            name: "测量误差(%)",
                            min: 0,
                            max: 2,
                            interval: 0.2,
                        },
                        {
                            type: "value",
                            name: "压损(KPa)",
                            min: 0,
                            max: 120,
                            interval: 20,
                        },
                    ],
                    legend: {
                        data: ["测量误差", "压损"],
                        bottom: 10,
                        formatter: function (name) {
                            var color = "";
                            if (name == "测量误差") {
                                color = "blue";
                            } else if (name == "压损") {
                                color = "orange";
                            }
                            return name;
                        },
                    },
                    series: [
                        {
                            name: "测量误差",
                            type: "line",
                            data: measurementError,
                            itemStyle: {
                                normal: {
                                    color: "blue",
                                },
                            },
                        },
                        {
                            name: "压损",
                            type: "line",
                            yAxisIndex: 1,
                            data: pressureLoss,
                            itemStyle: {
                                normal: {
                                    color: "orange",
                                },
                            },
                        },
                    ],
                };

                // 渲染图表
                chart.setOption(option);
            },
        },
        watch: {
            inputs: {
                handler () {
                    this.validateInputs();
                    this.updateLossData();
                },
                deep: true,
            },
            measurementData: {
                handler (newVal) {
                    //当我们直接修改数组中某个元素的值时，Vue无法感知到这个修改，因为它只能拦截数组对象本身的方法，但不会对数组中的每个元素进行拦截。
                    //因此，我们需要使用Vue提供的$set方法来更新数组中的元素。
                    for (const key in newVal) {
                        // eslint-disable-next-line no-prototype-builtins
                        if (newVal.hasOwnProperty(key)) {
                            const arr = newVal[key];
                            for (let i = 0; i < arr.length; i++) {
                                const value = arr[i];
                                if (key === "流量（%）") {
                                    this.$set(this.inputs[0], i, value);
                                } else if (key === "流量（kg/h）") {
                                    this.$set(this.inputs[1], i, value);
                                } else if (key === "测量误差（%）") {
                                    this.$set(this.inputs[2], i, value);
                                } else if (key === "压力损失(KPa)") {
                                    this.$set(this.inputs[3], i, value);
                                }
                            }
                        }
                    }
                    console.log("inputs:", this.inputs);
                    this.validateInputs();
                },
                deep: true,
            },
            lossImage: {
                handler (newVal) {
                    console.log("接受到了loss图片", newVal);
                    const imageData = newVal;
                    this.chartImageUrl[0] = imageData[0].src;
                    // console.log("这是第二张图片的src",this.chartImageUrl[0])
                },
            },
        },
    };
</script>

<style scoped>
    #Loss {
        /* display: flex; */
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        width: 1207.5px;
        margin-top: 280px;
        margin-left: 110px;
        background-color: #ffff;
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        height: 1278.8px;
        border-radius: 10px;
        /* overflow: auto; */
    }

    /* .loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
    .el-image__error {
        display: none;
        justify-content: center;
        align-items: center;
        color: #c0c4cc;
        vertical-align: middle;
    }

    .image-container .el-image__error-icon,
    .image-container .el-image__error-placeholder {
        display: none;
    }

    .echart {
        width: 1207.5px;
        height: 520px;
        margin-top: 30px;
        background-color: #ffff;
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
    }

    .container {
        width: 1207.5px;
        height: 45px;
        background-color: rgba(227, 227, 227, 0.667);
        line-height: 35px;
        line-height: 45px;
    }

    .textOne {
        margin-left: 180px;
        margin-right: -20px;
    }

    .request {
        margin-top: 10px;
        font-size: 13px;
        margin-bottom: 10px;
    }

    .request1 span {
        font-size: 13px;
        margin-left: 170px;
        margin-right: 20px;
        /* 设置右侧间距，根据实际需求调整 */
        justify-content: space-between;
        /* 将子元素平均分配空间 */
    }

    .request1 {
        text-align: justify;
        /* 对齐方式为两端对齐 */
    }

    .request1::after {
        content: "";
        flex-grow: 1;
    }

    .input {
        width: 265px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
</style>
