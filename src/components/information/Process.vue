<template>
    <div id="Process">
        <div class="biaotilan">
            <div class="container">工艺参数 Proccess parameter</div>
            <div class="sanjiao"></div>
        </div>
        <div class="request">
            <span class="span2">介质名称 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="option-group">
                <label>
                    <input type="radio" v-model="ProcessData.selectedOption" value="气体"
                        @change="resetSelectedValues('气体')" />
                    气体
                </label>
                <common-select v-model="ProcessData.selected1" :options="ProcessData.optionsOne1"
                    :is-disabled="ProcessData.selectedOption !== '气体'" class="select"
                    @input="handleChange1"></common-select>
            </div>
            <div class="option-group">
                <label>
                    <input type="radio" v-model="ProcessData.selectedOption" value="液体"
                        @change="resetSelectedValues('液体')" />
                    液体
                </label>
                <common-select v-model="ProcessData.selected2" :options="ProcessData.optionsOne2"
                    :is-disabled="ProcessData.selectedOption !== '液体'" class="select"
                    @input="handleChange2"></common-select>
            </div>
            <div class="option-group">
                <label>
                    <input type="radio" v-model="ProcessData.selectedOption" value="蒸汽"
                        @change="resetSelectedValues('蒸汽')" />
                    蒸汽
                </label>
                <common-select v-model="ProcessData.selected3" :options="ProcessData.optionsOne3"
                    :is-disabled="ProcessData.selectedOption !== '蒸汽'" class="select"
                    @input="handleChange3"></common-select>
            </div>
            <!-- <common-select v-model="selected1" :options="optionsOne" class="select" @input="handleChange"></common-select> -->
            <!-- :value="selected"会将所选介质名称的值更新到selected属性中 -->
        </div>
        <div class="request">
            <span>管道材质 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <common-select v-model="ProcessData.value" :options="ProcessData.optionsTwo" class="select"></common-select>
        </div>
        <div class="request">
            <span>压缩系数 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="ProcessData.compressConvenientData" placeholder="请输入压缩系数" class="inputOne"></el-input>
            <!-- v-model自动处理双向绑定和数据更新 :compressConvenient="CompressConvenient" -->
        </div>
        <div class="request1">
            <span class="span1">管道外/内径(mm)</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="ProcessData.inputTwo" placeholder="请输入管道外/内径" class="input"
                @input="handleInputChange"></el-input>
        </div>
    </div>
</template>

<script>
import CommonSelect from "@/components/el-select/CommonSelect.vue";
import { bus } from "@/main.js";
import { getMedius, getSteammedius } from "@/api/select/flowmeter_medius";
// 在 Process 组件中导入事件总线
export default {
    props: {
        compressConvenient: {
            type: String,
        },
        processData1: {
            type: Array,
            default: () => [],
        },
    }, //子组件定义prop接受父组件的传值
    name: "Process",
    components: {
        CommonSelect,
    },
    data() {
        return {
            mediutables_id: "", //具体介质名称的id
            process_viscosity: [], //从表中查到的所有粘度
            processrealviscosity: "", //具体的粘度
            process_density: [], //从表中查到的所有密度
            processrealdensity: "", //具体的密度
            selectreal: "", //存储具体选择的介质--气体，液体，蒸汽
            sselectreal: "", //页面Specs传递过来的测量介质，用来导入word判断
            outputType: "",
            // value1:'请选择',
            ProcessData: {
                compressConvenientData: "",
                selectedOption: [],
                inputOne: "",
                inputTwo: "", //管道内径参数
                value: [],
                selected1: [],
                selected2: [],
                selected3: [],
                optionsOne1: [],
                optionsOne2: [],
                optionsOne3: [],
                optionsTwo: [
                    {
                        value: "1",
                        label: "法兰西",
                    },
                    {
                        value: "2",
                        label: "夹持",
                    },
                ],
            },
        };
    },
    mounted() { },
    created() {
        bus.$on("inputTwentyChanged", (newVal) => {
            console.log("Process接收到的介质值为:", newVal);
            this.sselectreal = newVal;
            console.log("Process接收到的介质值为:", this.sselectreal);
        });
    },
    methods: {
        getMediusData() {
            getMedius({ type_name: this.selectreal })
                .then((res) => {
                    // 处理获取到的数据
                    let dataList = Array.from(res.rows);
                    console.log("接收到的介质信息是：", dataList);
                    for (let item of dataList) {
                        if (this.selectreal == "气体") {
                            // 对应处理逻辑
                            this.ProcessData.optionsOne1 = dataList.map(function (item) {
                                return { value: item.id, label: item.media_name };
                            });
                            this.process_density = dataList.map(function (item) {
                                return { value: item.id, label: item.standar_density };
                            });
                            this.process_viscosity = dataList.map(function (item) {
                                return { value: item.id, label: item.viscosity };
                            });
                        } else if (this.selectreal == "液体") {
                            // 对应处理逻辑
                            this.ProcessData.optionsOne2 = dataList.map(function (item) {
                                return { value: item.id, label: item.media_name };
                            });
                            this.process_density = dataList.map(function (item) {
                                return { value: item.id, label: item.standar_density };
                            });
                            this.process_viscosity = dataList.map(function (item) {
                                return { value: item.id, label: item.viscosity };
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err); // 输出错误信息到控制台
                });
        },
        getSteammediusData() {
            getSteammedius({ type_name: this.selectreal })
                .then((res) => {
                    // 处理获取到的数据
                    console.log("选择的真正介质是；", this.selectreal);
                    bus.$emit("medium-change", this.selectreal); //将选择的是气体还是液体传给其他组件，进行标况密度单位的变化
                    let dataList = Array.from(res.rows);
                    this.ProcessData.optionsOne3 = dataList.map(function (item) {
                        return { value: item.id, label: item.media_name };
                    });
                })
                .catch((err) => {
                    console.error(err); // 输出错误信息到控制台
                });
        },
        resetSelectedValues(option) {
            if (option !== "气体") {
                this.ProcessData.selected1 = [];
            }
            if (option !== "液体") {
                this.ProcessData.selected2 = [];
            }
            if (option !== "蒸汽") {
                this.ProcessData.selected3 = [];
            }
        },
        sendDiameterToFluid() {
            bus.$emit("update-diameter", this.ProcessData.inputTwo);
        },
        handleInputChange() {
            console.log(this.ProcessData.inputTwo);
            // 当输入框内容改变时调用该方法，从而触发管道内径参数的传递
            this.sendDiameterToFluid();
        },
        handleChange1() {
            const medium = this.ProcessData.selected1; //更新子组件的介质名称
            // const medium =selectedOption.label
            console.log("当前选中的介质名称：", medium);
            const selectedOption = this.ProcessData.optionsOne1.find(
                (option) => option.value === this.ProcessData.selected1[0]
            );
            console.log(this.ProcessData.selected1[0]);
            bus.$emit("selected1-changed", this.ProcessData.selected1[0]);
            console.log("当前选中的介质名称：", selectedOption.label);
            const targetDensity = this.process_density.find(
                (item) => item.value === this.ProcessData.selected1[0]
            );
            if (targetDensity) {
                // 如果找到了对应的密度项
                this.processrealdensity = targetDensity.label;
                console.log("获得的密度:", this.processrealdensity);
            } else {
                // 如果未找到对应的密度项
                console.log("未找到与选中的介质名称匹配的密度");
                this.processrealdensity = ""; // 将 processrealdensity 置为空字符串
            }
            bus.$emit("density-change", this.processrealdensity); //触发自定义事件，将介质名称给父
            const targetDensity1 = this.process_viscosity.find(
                (item) => item.value === this.ProcessData.selected1[0]
            );
            if (targetDensity1) {
                // 如果找到了对应的粘度
                this.processrealviscosity = targetDensity1.label;
                console.log("获得的粘度:", this.processrealviscosity);
            } else {
                // 如果未找到对应的密度项
                console.log("未找到与选中的介质名称匹配的粘度");
                this.processrealdensity = ""; // 将 processrealdensity 置为空字符串
            }
            bus.$emit("viscosity-change", this.processrealviscosity); //触发自定义事件，将介质名称给父
        },
        handleChange2() {
            const medium = this.ProcessData.selected2; //更新子组件的介质名称
            console.log("当前选中的介质名称：", medium);
            bus.$emit("selected2-changed", this.ProcessData.selected2[0]);
            const selectedOption = this.ProcessData.optionsOne2.find(
                (option) => option.value === this.ProcessData.selected2[0]
            );
            console.log("当前选中的介质名称：", selectedOption.label);
            const targetDensity = this.process_density.find(
                (item) => item.value === this.ProcessData.selected2[0]
            );
            if (targetDensity) {
                // 如果找到了对应的密度项
                this.processrealdensity = targetDensity.label;
                console.log("获得的密度:", this.processrealdensity);
            } else {
                // 如果未找到对应的密度项
                console.log("未找到与选中的介质名称匹配的密度");
                this.processrealdensity = ""; // 将 processrealdensity 置为空字符串
            }
            bus.$emit("density-change", this.processrealdensity);
            const targetDensity1 = this.process_viscosity.find(
                (item) => item.value === this.ProcessData.selected2[0]
            );
            if (targetDensity1) {
                // 如果找到了对应的粘度
                this.processrealviscosity = targetDensity1.label;
                console.log("获得的粘度:", this.processrealviscosity);
            } else {
                // 如果未找到对应的密度项
                console.log("未找到与选中的介质名称匹配的粘度");
                this.processrealdensity = ""; // 将 processrealdensity 置为空字符串
            }
            bus.$emit("viscosity-change", this.processrealviscosity);
        },
        handleChange3() {
            const medium = this.ProcessData.selected3; //更新子组件的介质名称
            // const medium =selectedOption.label
            console.log("当前选中的介质名称：", medium);
            bus.$emit("selected3-changed", this.ProcessData.selected3[0]);
            const selectedOption = this.ProcessData.optionsOne3.find(
                (option) => option.value === this.ProcessData.selected3[0]
            );
            console.log("当前选中的介质名称：", selectedOption.label);
        },
        // 工艺参数 Proccess parameter
        updateProcessData() {
            this.$nextTick(() => {
                bus.$emit("proccessParameter-data-updated", this.ProcessData);
            });
        },
    },
    watch: {
        "ProcessData.selectedOption"(newValue) {
            this.selectreal = newValue;
            bus.$emit("selectnameChanged", this.selectreal);
            if (newValue !== "") {
                this.resetSelectedValues(newValue);
                this.getMediusData(); // 在选项改变后调用getMediusData()方法
                this.getSteammediusData();
            }
            this.updateProcessData();
        },
        "ProcessData.compressConvenientData": function () {
            this.updateProcessData();
        },
        "ProcessData.inputOne": function () {
            this.updateProcessData();
        },
        "ProcessData.inputTwo": function () {
            this.updateProcessData();
        },
        "ProcessData.value": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateProcessData();
                }
            },
            deep: true,
        },
        "ProcessData.selected1": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateProcessData();
                }
            },
            deep: true,
        },
        "ProcessData.selected2": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateProcessData();
                }
            },
            deep: true,
        },
        "ProcessData.selected3": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateProcessData();
                }
            },
            deep: true,
        },
        "ProcessData.optionsOne1": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateProcessData();
                }
            },
            deep: true,
        },
        "ProcessData.optionsOne2": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateProcessData();
                }
            },
            deep: true,
        },
        "ProcessData.optionsOne3": {
            handler: function (newVal, oldVal) {
                if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                    this.updateProcessData();
                }
            },
            deep: true,
        },
        processData1: {
            handler(newVal) {
                console.log("接受到了新的项目信息:", newVal);
                console.log("此时specs到测量介质是:", this.sselectreal);
                if (Object.keys(newVal).length > 0) {
                    this.getMediusData();
                    const data = newVal; // 获取projectData对象
                    this.ProcessData.compressConvenientData = data.压缩系数;
                    this.ProcessData.inputTwo = data["管道外/内径(mm)"];
                    // 获取流量计类型的值
                    const Type = data.管道材质[0];
                    console.log(Type);
                    // 在选项中查找匹配项的value属性
                    const match = this.ProcessData.optionsTwo.find(
                        (option) => option.label == Type
                    );
                    console.log("管道材质是", match);
                    // 如果找到了匹配项，则将其value属性赋值给selectedValue
                    if (match) {
                        this.ProcessData.value = [match.value];
                    }
                    //this.optionsOne1, this.optionsOne2, this.optionsOne3要写在页面上
                    const combinedArray = [
                        this.ProcessData.optionsOne1,
                        this.ProcessData.optionsOne2,
                        this.ProcessData.optionsOne3,
                    ];
                    //   console.log(combinedArray)
                    const Type1 = data.介质名称[0];
                    console.log(Type1);
                    const mach1 = combinedArray[0].find(
                        (option) => option.label == Type1
                    );
                    console.log("process的介质名称是", mach1);
                    const mach2 = combinedArray[1].find(
                        (option) => option.label == Type1
                    );
                    const mach3 = combinedArray[2].find(
                        (option) => option.label == Type1
                    );
                    if (mach1) {
                        this.ProcessData.selected1 = [mach1.value];
                    } else if (mach2) {
                        this.ProcessData.selected2 = [mach2.value];
                    } else if (mach3) {
                        this.ProcessData.selected3 = [mach3.value];
                    }
                }
            },
        },
        compressConvenient: {
            handler(newVal) {
                console.log("接受到了压缩系数:", newVal);
                this.ProcessData.compressConvenientData = this.compressConvenient;
                console.log("页面赋值为：", this.ProcessData.compressConvenientData);
            },
        },
    },
};
</script>

<style scoped>
#Process {
    position: absolute;
    margin-top: -920px;
    left: -65px;
    /* background-color: rgba(239, 241, 242, 0.667); */
    background-color: #ffffff;
    margin-left: 65px;
    border-left: 1px solid rgb(217, 210, 210);
    border-right: 1px solid rgb(217, 210, 210);
    height: 490px;
    border-bottom: 1px solid rgb(217, 210, 210);
    border-radius: 10px;
    border: 1px solid rgb(217, 210, 210);
    /* box-shadow: 10px 10px 20px rgb(24, 102, 170); */
}

.option-group {
    margin-bottom: 20px;
    margin-left: 64px;
    margin-top: 20px;
}

.span2 {
    margin-left: -270px;
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
    background-color: rgba(227, 227, 227, 0.667);
    /* font-weight: bold;  */
    height: 45px;
    line-height: 45px;
}

.request {
    margin-top: 25px;
    margin-left: -80px;
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei, WenQuanYi Micro Hei, sans-serif, SimHei, SimSun;
    font-size: 13px;
}

.request1 {
    position: absolute;
    margin-top: 25px;
    margin-left: 18px;
    font-size: 13px;
}

.input {
    width: 229px;
    height: 30px;
    outline: none;
}

.inputOne {
    width: 234px;
    margin-left: 35px;
}

.select {
    margin-left: 35px;
    width: 234px;
}
</style>
