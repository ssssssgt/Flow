<template>
    <div id="Size">
        <div class="biaotilan">
            <div class="container">多口径比对 Compare sizes</div>
            <div class="sanjiao"></div>
        </div>
        <div class="request">
            <span class="textOne">小一尺寸</span>&nbsp;&nbsp;
            <span class="textTwo">当前尺寸</span>&nbsp;
            <span>大一尺寸</span>
        </div>
        <div class="request">
            <span>仪表尺寸
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputOne" class="input"></el-input>
            <common-select v-model="name" :options="inputTwo" class="select2"></common-select>
            <el-input v-model="inputThree" class="input"></el-input>
        </div>
        <div class="request">
            <span>最小可测量流量 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputFour" class="input"></el-input>
            <el-input v-model="inputFive" class="input"></el-input>
            <el-input v-model="inputSix" class="input"></el-input>
        </div>
        <div class="request">
            <span>最大可测量流量 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputSeven" class="input"></el-input>
            <el-input v-model="inputEight" class="input"></el-input>
            <el-input v-model="inputNine" class="input"></el-input>
        </div>
        <div class="request">
            <span>最小可测量流量的流速</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputTen" class="input"></el-input>
            <el-input v-model="inputOnes" class="input"></el-input>
            <el-input v-model="inputTwos" class="input"></el-input>
        </div>
        <div class="request">
            <span>最大可测量流量的流速</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputThrees" class="input"></el-input>
            <el-input v-model="inputFours" class="input"></el-input>
            <el-input v-model="inputFives" class="input"></el-input>
        </div>
        <div class="request">
            <span>最小设计流量的压损 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputSixs" class="input"></el-input>
            <el-input v-model="inputSevens" class="input"></el-input>
            <el-input v-model="inputEights" class="input"></el-input>
        </div>
        <div class="request">
            <span>最大设计流量的压损 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputNines" class="input"></el-input>
            <el-input v-model="inputTens" class="input"></el-input>
            <el-input v-model="inputEleven" class="input"></el-input>
        </div>
        <div class="request">
            <span>最小设计流量的精度 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputTwelve" class="input"></el-input>
            <el-input v-model="inputThirteen" class="input"></el-input>
            <el-input v-model="inputFourteen" class="input"></el-input>
        </div>
        <div class="request">
            <span>最大设计流量的精度 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputFifteen" class="input"></el-input>
            <el-input v-model="inputSixteen" class="input"></el-input>
            <el-input v-model="inputSeventeen" class="input"></el-input>
        </div>
        <div class="request">
            <span>正常流量的雷诺数 </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputEighteen" class="input"></el-input>
            <el-input v-model="inputNineteen" class="input"></el-input>
            <el-input v-model="inputTwenty" class="input"></el-input>
        </div>
        <div class="recommend-button">
            <el-button type="primary" @click="recommend">推荐</el-button>
        </div>
    </div>
</template>
<script>
import { MessageBox } from "element-ui";
import CommonSelect from "@/components/el-select/CommonSelect.vue";
import { bus } from "@/main.js";
import {
    getGflowtables_bore,
    getLflowtables_bore,
    getSteamstable,
    getBore_informations_One,
} from "@/api/select/bore_information.js";
export default {
    name: "Size",
    components: {
        CommonSelect,
    },
    props: {
        sizeData: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            showMessageBox: true,
            minFluid: "", //存储最小流量
            maxFluid: "", //存储最大流量
            mediumFluid: "", //存储正常流量
            value: "",
            name: [],
            inputOne: "",
            inputTwo: [],
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
            inputSevens: "",
            inputEights: "",
            inputNines: "",
            inputTens: "",
            inputEleven: "",
            inputTwelve: "",
            inputThirteen: "",
            inputFourteen: "",
            inputFifteen: "",
            inputSixteen: "",
            inputSeventeen: "",
            inputEighteen: "",
            inputNineteen: "",
            inputTwenty: "",
            instrument_id: "", //仪表类型id
            bore_id: "", //具体口径id
            selectname: "", //选择的具体介质名称
            bore_size: "", //具体口径大小
            viscosity: "",
            density: "",
            dyviscosity: "", //运动粘度的值，后续计算流量上下限
            fmediutables_id: "", //具体气体介质名称的id
            lmediutables_id: "", //具体液体介质名称的id
            smediutables_id: "", //具体蒸汽介质名称id
            wdensity: "", //工况密度的值
            maxFluidSpeed: "", //最大流速
            minFluidSpeed: "", //最小流速
            mediumFluidSpeed: "", //正常流速
            ys: "", //压力损失
            ln: "", //雷诺数
            minjd: "", //最小精度
            maxjd: "", //最大精度
            mediumjd: "", //正常精度
            rebore_id: "", //推荐按钮的口径id
        };
    },
    watch: {
        inputOne() {
            this.updateCompareSizesData()
        },
        inputFour() {
            this.updateCompareSizesData()
        },
        inputSeven() {
            this.updateCompareSizesData()
        },
        inputTen() {
            this.updateCompareSizesData()
        },
        inputThrees() {
            this.updateCompareSizesData()
        },
        inputSixs() {
            this.updateCompareSizesData()
        },
        inputNines() {
            this.updateCompareSizesData()
        },
        inputTwelve() {
            this.updateCompareSizesData()
        },
        inputFifteen() {
            this.updateCompareSizesData()
        },
        inputEighteen() {
            this.updateCompareSizesData()
        },
        inputFive() {
            this.updateCompareSizesData()
        },
        inputEight() {
            this.updateCompareSizesData()
        },
        inputOnes() {
            this.updateCompareSizesData()
        },
        inputFours() {
            this.updateCompareSizesData()
        },
        inputSevens() {
            this.updateCompareSizesData()
        },
        inputTens() {
            this.updateCompareSizesData()
        },
        inputThirteen() {
            this.updateCompareSizesData()
        },
        inputSixteen() {
            this.updateCompareSizesData()
        },
        inputNineteen() {
            this.updateCompareSizesData()
        },
        inputThree() {
            this.updateCompareSizesData()
        },
        inputSix() {
            this.updateCompareSizesData()
        },
        inputNine() {
            this.updateCompareSizesData()
        },
        inputTwos() {
            this.updateCompareSizesData()
        },
        inputFives() {
            this.updateCompareSizesData()
        },
        inputEights() {
            this.updateCompareSizesData()
        },
        inputEleven() {
            this.updateCompareSizesData()
        },
        inputFourteen() {
            this.updateCompareSizesData()
        },
        inputSeventeen() {
            this.updateCompareSizesData()
        },
        inputTwenty() {
            this.updateCompareSizesData()
        },
        name(newValue) {
            this.updateCompareSizesData()
            if (newValue.length > 0) {
                console.log(newValue);
                this.bore_id = newValue[0];
                this.bore_size = newValue.label;
                console.log("用户选择的口径id是：", this.bore_id);
                // console.log('用户选择的口径id大小是：', this.bore_size);
                // this.getBore_informations_OneData()
                this.getBoreData();
            }
        },
        sizeData: {
            handler(newVal) {
                console.log("接收到的sizeData数据：", newVal);
                const firstItem = newVal["仪表尺寸"];
                const secondItem = newVal["最小可测量流量"];
                const thirdItem = newVal["最大可测量流量"];
                const fourItem = newVal["最小可测量流量的流速"];
                const fiveItem = newVal["最大可测量流量的流速"];
                const sixItem = newVal["最小设计流量的压损"];
                const sevenItem = newVal["最大设计流量的压损"];
                const eightItem = newVal["最小设计流量的精度"];
                const nineItem = newVal["最大设计流量的精度"];
                const tenItem = newVal["正常流量的雷诺数"];
                console.log(secondItem);
                console.log(thirdItem);
                // 将仪表尺寸的具体数据赋值给 inputOne、inputTwo、inputThree
                this.inputOne = firstItem["小一尺寸"];
                const size = firstItem["当前尺寸"][0];
                console.log("当前尺寸：", size)
                //下拉框没数据，获取不到this.instrument_id
                console.log("instrument_id：", this.instrument_id)
                getBore_informations_One({ instrument_type_id: this.instrument_id })
                    .then((res) => {
                        console.log("需要的res", res)
                        let dataList = Array.from(res.rows);
                        this.inputTwo = dataList.map(function (item) {
                            return { value: item.id, label: item.size };
                        });
                        const match = this.inputTwo.find(
                            (option) => option.label == size
                        );
                        if (match) {
                            this.name = [match.value];
                            console.log("找到匹配项:", match);
                        } else {
                            console.log("未找到匹配项:", size);
                        }
                    })
                    .catch((error) => {
                        console.error("查询失败:", error);
                        // 处理错误逻辑
                    });
                this.inputThree = firstItem["大一尺寸"];
                this.inputFour = secondItem["小一尺寸"];
                this.inputFive = secondItem["当前尺寸"];
                this.inputSix = secondItem["大一尺寸"];
                this.inputSeven = thirdItem["小一尺寸"];
                this.inputEight = thirdItem["当前尺寸"];
                this.inputNine = thirdItem["大一尺寸"];
                this.inputTen = fourItem["小一尺寸"];
                this.inputOnes = fourItem["当前尺寸"];
                this.inputTwos = fourItem["大一尺寸"];
                this.inputThrees = fiveItem["小一尺寸"];
                this.inputFours = fiveItem["当前尺寸"];
                this.inputFives = fiveItem["大一尺寸"];
                this.inputSixs = sixItem["小一尺寸"];
                this.inputSevens = sixItem["当前尺寸"];
                this.inputEights = sixItem["大一尺寸"];
                this.inputNines = sevenItem["小一尺寸"];
                this.inputTens = sevenItem["当前尺寸"];
                this.inputEleven = sevenItem["大一尺寸"];
                this.inputTwelve = eightItem["小一尺寸"];
                this.inputThirteen = eightItem["当前尺寸"];
                this.inputFourteen = eightItem["大一尺寸"];

                this.inputFifteen = nineItem["小一尺寸"];
                this.inputSixteen = nineItem["当前尺寸"];
                this.inputSeventeen = nineItem["大一尺寸"];

                this.inputEighteen = tenItem["小一尺寸"];
                this.inputNineteen = tenItem["当前尺寸"];
                this.inputTwenty = tenItem["大一尺寸"];
            },
            deep: true,
        },
    },
    created() {
        bus.$on("mediumFluidChanged", (mediumFluid) => {
            this.mediumFluid = mediumFluid;
            console.log("Size接受到了正常流量", this.mediumFluid);
            this.getBoreData();
            this.getrecommedData();
        });
        bus.$on("minFluidChanged", (minFluid) => {
            this.minFluid = minFluid;
            console.log("Size接受到了最小流量", this.minFluid);
            this.getBoreData();
            this.getrecommedData();
        });
        bus.$on("maxFluidChanged", (maxFluid) => {
            this.maxFluid = maxFluid;
            console.log("Size接受到了最大流量", this.maxFluid);
            this.getBoreData();
            this.getrecommedData();
        });
        bus.$on("instrumentChanged", (instrument) => {
            this.instrument_id = instrument;
            console.log("仪表数据:", this.instrument_id);
            this.getBore_informations_OneData();
            this.getBoreData();
            this.getrecommedData();
        });
        bus.$on("selectnameChanged", (selectname) => {
            this.selectname = selectname;
            console.log("接收到的 介质名称 数据:", this.selectname);
            this.getBoreData();
            this.getrecommedData();
        });
        bus.$on("selected2-changed", (selected2) => {
            console.log("Size收到的具体介质id:", selected2);
            this.lmediutables_id = selected2;
            this.getBoreData();
            this.getrecommedData();
            // 其他操作...
        });
        bus.$on("selected1-changed", (selected1) => {
            console.log("Size收到的具体介质id:", selected1);
            this.fmediutables_id = selected1;
            this.getBoreData();
            this.getrecommedData();
            // 其他操作...
        });
        bus.$on("selected3-changed", (selected3) => {
            console.log("Size收到的具体介质id:", selected3);
            this.smediutables_id = selected3;
            this.getBoreData();
            this.getrecommedData();
            // 其他操作...
        });
        //后续了解箭头函数的作用
        bus.$on("dyviscosityChanged", (newVal) => {
            console.log("Size接收到的运动粘度值为:", newVal);
            this.dyviscosity = newVal;
            this.getBoreData();
            this.getrecommedData();
        });
        bus.$on("FluidData.inputOnes", (newVal) => {
            console.log("Size接收到的工况密度值为:", newVal);
            this.wdensity = newVal;
            // 在这里处理接收到的运动粘度值
            this.getBoreData();
            this.getrecommedData();
        });
    },
    methods: {
        /**
         * 计算最小可测流量范围对应输入框的值
         */
        calculateFlow(minflow, wdensity, dyviscosity) {
            const min1 = Number(minflow) * Math.sqrt(1.205 / Number(wdensity));
            const min2 = Number(minflow) * Math.sqrt(15 / 1000000 / Number(dyviscosity));
            if (min1 > min2) {
                this.inputFive = min1;
            } else {
                this.inputFive = min2;
            }
        },
        /**
         * 当提示框点击确定后，计算出其他输入框的结果
         */
        calculateOtherInputs(bore_size, wdensity, dyviscosity, minFluid, maxFluid, mediumFluid) {
            this.inputOnes =
                Number(this.inputFive) /
                ((3.14 *
                    (bore_size / 1000) *
                    (bore_size / 1000)) /
                    4) /
                3600;
            this.inputFours =
                Number(this.inputEight) /
                ((3.14 *
                    (bore_size / 1000) *
                    (bore_size / 1000)) /
                    4) /
                3600;
            console.log(this.inputOnes);
            this.inputThirteen = "1";
            this.inputSixteen = "1";
            this.minFluidSpeed =
                Number(minFluid) /
                ((3.14 *
                    (bore_size / 1000) *
                    (bore_size / 1000)) /
                    4) /
                3600;
            console.log("最小流速为：", this.minFluidSpeed);
            this.maxFluidSpeed =
                Number(maxFluid) /
                ((3.14 *
                    (bore_size / 1000) *
                    (bore_size / 1000)) /
                    4) /
                3600;
            console.log("最大流速为：", this.maxFluidSpeed);
            this.mediumFluidSpeed =
                Number(mediumFluid) /
                ((3.14 *
                    (bore_size / 1000) *
                    (bore_size / 1000)) /
                    4) /
                3600;
            console.log("流速为：", this.maxFluidSpeed);
            this.ys =
                2.4 *
                0.5 *
                Number(wdensity) *
                Number(this.mediumFluidSpeed) *
                Number(this.mediumFluidSpeed);
            console.log("压损的大小为：", this.ys);
            this.ln =
                (this.mediumFluidSpeed * (bore_size / 1000)) /
                Number(dyviscosity);
            this.inputNineteen = this.ln; //雷诺数的值
            this.inputSevens =
                Number(wdensity) *
                Number(this.minFluidSpeed) *
                Number(this.minFluidSpeed) *
                2.4 *
                0.5;
            this.inputTens =
                Number(wdensity) *
                Number(this.maxFluidSpeed) *
                Number(this.maxFluidSpeed) *
                2.4 *
                0.5;
            this.minjd = "1";
            this.maxjd = "1";
            this.mediumjd = "1";
            bus.$emit("fluid-speeds", {
                minFluidSpeed: this.minFluidSpeed,
                maxFluidSpeed: this.maxFluidSpeed,
                mediumFluidSpeed: this.mediumFluidSpeed,
                ys: this.ys,
                ln: this.ln,
                minjd: this.minjd,
                maxjd: this.maxjd,
                mediumjd: this.mediumjd,
            });
        },
        /**
         * 清空页面数据方法
         */
        clearData() {
            // this.name = []; // 清空选择的口径大小
            // this.inputFive = null; // 清空对应的inputFive输入框的值
            // this.inputEight = null; // 清空对应的inputEight输入框的值
            this.inputOnes = null;
            this.inputFours = null;
            this.inputThirteen = null;
            this.inputSixteen = null;
            this.minFluidSpeed = null;
            this.maxFluidSpeed = null;
            this.mediumFluidSpeed = null;
            this.ys = null;
            this.ln = null;
            this.inputNineteen = null;
            this.inputSevens = null;
            this.inputTens = null;
            this.minjd = null;
            this.maxjd = null;
            this.mediumjd = null;
        },
        updateCompareSizesData() {
            // 根据页面数据更新chartData属性
            this.csData = {
                ms: this.inputOne,
                ms1: this.inputFour,
                ms2: this.inputSeven,
                ms3: this.inputTen,
                ms4: this.inputThrees,
                ms5: this.inputSixs,
                ms6: this.inputNines,
                ms7: this.inputTwelve,
                ms8: this.inputFifteen,
                ms9: this.inputEighteen,
                cs: this.name,
                cs1: this.inputFive,
                inputTwo: this.inputTwo,
                cs2: this.inputEight,
                cs3: this.inputOnes,
                cs4: this.inputFours,
                cs5: this.inputSevens,
                cs6: this.inputTens,
                cs7: this.inputThirteen,
                cs8: this.inputSixteen,
                cs9: this.inputNineteen,
                as: this.inputThree,
                as1: this.inputSix,
                as2: this.inputNine,
                as3: this.inputTwos,
                as4: this.inputFives,
                as5: this.inputEights,
                as6: this.inputEleven,
                as7: this.inputFourteen,
                as8: this.inputSeventeen,
                as9: this.inputTwenty,
            };
            console.log("compareSizes更新的数据", this.csData);
            // 触发自定义事件并传递chartData
            bus.$emit("compareSizes-data-updated", this.csData);
        },
        // showMessageBox = true
        getBoreData() {
            if (this.selectname == "气体") {
                if (
                    this.bore_id &&
                    this.instrument_id &&
                    this.fmediutables_id &&
                    this.wdensity &&
                    this.dyviscosity
                ) {
                    getGflowtables_bore({
                        bore_informations_id: this.bore_id,
                        instrument_type_id: this.instrument_id,
                        mediutables_id: this.fmediutables_id,
                    })
                        .then((res) => {
                            console.log("方法要用到的参数", this.bore_id);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            // this.inputFive
                            const gmin = dataList[0].gmin_standardflow; //查表得到的最小值
                            console.log("1接收到的工况密度为：", this.wdensity);
                            console.log("1接收到的运动粘度是：", this.dyviscosity);
                            this.calculateFlow(gmin, this.wdensity, this.dyviscosity)
                            this.inputEight = dataList[0].gmax_standardflow;
                            console.log(this.maxFluid);
                            console.log(this.minFluid);
                            if (
                                this.minFluid >= this.inputFive &&
                                this.minFluid <= this.inputEight &&
                                this.maxFluid >= this.inputFive &&
                                this.maxFluid <= this.inputEight
                            ) {
                                // 更新页面上的提示信息
                                if (this.showMessageBox) {
                                    MessageBox.alert("流量在可测范围内", "提示", {
                                        confirmButtonText: "确定",
                                        type: "success",
                                    })
                                        .then(() => {
                                            const bore = this.inputTwo.find(
                                                (item) => item.value === this.name[0]
                                            );
                                            if (bore) {
                                                this.bore_size = bore.label;
                                                console.log("获得的口径大小:", this.bore_size);
                                            } else {
                                                console.log("未找到与选中的口径id相匹配的口径大小");
                                                this.bore_size = "";
                                            }
                                            console.log(typeof this.inputFive);
                                            console.log(typeof this.bore_size);
                                            this.calculateOtherInputs(this.bore_size, this.wdensity, this.dyviscosity, this.minFluid, this.maxFluid, this.mediumFluid)
                                        })
                                        .catch(() => {
                                        });
                                }
                            } else {
                                if (this.showMessageBox) {
                                    MessageBox.alert("流量不在范围内", "提示", {
                                        confirmButtonText: "确定",
                                        // cancelButtonText: "取消",
                                        type: "warning",
                                    })
                                        .then(() => {
                                            this.clearData()
                                            // 用户点击了确定按钮，处理重新选择口径大小的逻辑
                                            // 这里可以跳转到重新选择口径大小的页面，或者执行其他相应的操作
                                        })
                                        .catch(() => {

                                        });
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                }
            } else if (this.selectname == "液体") {
                if (
                    this.bore_id &&
                    this.instrument_id &&
                    this.lmediutables_id &&
                    this.wdensity &&
                    this.dyviscosity
                ) {
                    getLflowtables_bore({
                        bore_informations_id: this.bore_id,
                        instrument_type_id: this.instrument_id,
                        mediutables_id: this.lmediutables_id,
                    })
                        .then((res) => {
                            console.log(res);
                            console.log("方法要用到的参数", this.bore_id);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            const lmin = dataList[0].lmin_standardflow; //查表得到的最小值
                            console.log("1接收到的工况密度为：", this.wdensity);
                            console.log("1接收到的运动粘度是：", this.dyviscosity);
                            this.calculateFlow(lmin, this.wdensity, this.dyviscosity)
                            this.inputEight = dataList[0].lmax_standardflow;
                            if (
                                this.minFluid >= this.inputFive &&
                                this.minFluid <= this.inputEight &&
                                this.maxFluid >= this.inputFive &&
                                this.maxFluid <= this.inputEight
                            ) {
                                // 更新页面上的提示信息
                                if (this.showMessageBox) {
                                    MessageBox.alert("流量在可测范围内", "提示", {
                                        confirmButtonText: "确定",
                                        type: "success",
                                    })
                                        .then(() => {
                                            const bore = this.inputTwo.find(
                                                (item) => item.value === this.name[0]
                                            );
                                            if (bore) {
                                                this.bore_size = bore.label;
                                                console.log("获得的口径大小:", this.bore_size);
                                            } else {
                                                console.log("未找到与选中的口径id相匹配的口径大小");
                                                this.bore_size = "";
                                            }
                                            console.log(typeof this.inputFive);
                                            console.log(typeof this.bore_size);
                                            this.calculateOtherInputs(this.bore_size, this.wdensity, this.dyviscosity, this.minFluid, this.maxFluid, this.mediumFluid)
                                        })
                                        .catch(() => {

                                        });
                                }
                            } else {
                                if (this.showMessageBox) {
                                    MessageBox.alert(
                                        "流量不在范围内，请重新选择口径大小",
                                        "提示",
                                        {
                                            confirmButtonText: "确定",
                                            // cancelButtonText: "取消",
                                            type: "warning",
                                        }
                                    )
                                        .then(() => {
                                            // 用户点击了确定按钮，处理重新选择口径大小的逻辑
                                            // 这里可以跳转到重新选择口径大小的页面，或者执行其他相应的操作
                                        })
                                        .catch(() => {

                                        });
                                }
                            }
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                        });
                }
            } else if (this.selectname == "蒸汽") {
                getSteamstable({
                    bore_informations_id: this.bore_id,
                    instrument_type_id: this.instrument_id,
                })
                    .then((res) => {
                        console.log(res);
                        console.log("方法要用到的参数", this.bore_id);
                        let dataList = Array.from(res.rows); // 使用Array.from()方法
                        console.log(dataList);
                    })
                    .catch((error) => {
                        // 处理可能出现的错误
                        console.error("查询失败:", error);
                    });
            }
        },
        // 查询口径信息的方法
        getBore_informations_OneData() {
            return new Promise((resolve, reject) => {
                if (this.instrument_id) {
                    this.inputTwo = [];
                    getBore_informations_One({ instrument_type_id: this.instrument_id })
                        .then((res) => {
                            let dataList = Array.from(res.rows);
                            this.inputTwo = dataList.map(function (item) {
                                return { value: item.id, label: item.size };
                            });
                            resolve(); // 异步操作完成后，手动调用 resolve
                        })
                        .catch((error) => {
                            console.error("查询失败:", error);
                            reject(error); // 捕获错误并调用 reject
                        });
                } else {
                    console.error("flowmeter_type_id 无效或不存在");
                    reject("flowmeter_type_id 无效或不存在"); // 如果条件不满足，调用 reject
                }
            });
        },
        getrecommedData() {
            return new Promise((resolve, reject) => {
                if (this.selectname == "气体") {
                    if (
                        this.rebore_id &&
                        this.instrument_id &&
                        this.fmediutables_id &&
                        this.wdensity &&
                        this.dyviscosity
                    ) {
                        getGflowtables_bore({
                            bore_informations_id: this.rebore_id,
                            instrument_type_id: this.instrument_id,
                            mediutables_id: this.fmediutables_id,
                        })
                            .then((res) => {
                                this.showMessageBox = false
                                console.log("方法要用到的参数", this.rebore_id);
                                let dataList = Array.from(res.rows); // 使用Array.from()方法
                                console.log(dataList);
                                // this.inputFive
                                const gmin = dataList[0].gmin_standardflow; //查表得到的最小值
                                this.calculateFlow(gmin, this.wdensity, this.dyviscosity)
                                this.inputEight = dataList[0].gmax_standardflow;
                                console.log(this.maxFluid);
                                console.log(this.minFluid);
                                resolve();
                            })
                            .catch((error) => {
                                // 处理可能出现的错误
                                console.error("查询失败:", error);
                                reject(error);
                            });
                    }
                } else if (this.selectname == "液体") {
                    if (
                        this.rebore_id &&
                        this.instrument_id &&
                        this.lmediutables_id &&
                        this.wdensity &&
                        this.dyviscosity
                    ) {
                        getLflowtables_bore({
                            bore_informations_id: this.rebore_id,
                            instrument_type_id: this.instrument_id,
                            mediutables_id: this.lmediutables_id,
                        })
                            .then((res) => {
                                console.log(res);
                                this.showMessageBox = false,
                                    console.log("方法要用到的参数", this.rebore_id);
                                let dataList = Array.from(res.rows); // 使用Array.from()方法
                                const lmin = dataList[0].lmin_standardflow; //查表得到的最小值
                                this.calculateFlow(lmin, this.wdensity, this.dyviscosity)
                                this.inputEight = dataList[0].lmax_standardflow;
                                resolve();
                            })
                            .catch((error) => {
                                // 处理可能出现的错误
                                console.error("查询失败:", error);
                                reject(error);
                            });
                    }
                } else if (this.selectname == "蒸汽") {
                    getSteamstable({
                        bore_informations_id: this.rebore_id,
                        instrument_type_id: this.instrument_id,
                    })
                        .then((res) => {
                            console.log(res);
                            console.log("方法要用到的参数", this.rebore_id);
                            let dataList = Array.from(res.rows); // 使用Array.from()方法
                            console.log(dataList);
                            resolve();
                        })
                        .catch((error) => {
                            // 处理可能出现的错误
                            console.error("查询失败:", error);
                            reject(error);
                        });
                } else {
                    resolve(); // 默认返回resolve，避免无返回值导致的错误
                }
            });
        },
        recommend() {
            return new Promise((resolve, reject) => {
                this.getBore_informations_OneData()
                    .then(() => {
                        console.log("打印出口径id数组", this.inputTwo);
                        // 收集所有异步操作的 Promise 对象
                        const promises = [];
                        const inputFiveValues = []; // 存储inputFive的值
                        const inputEightValues = []; // 存储inputEight的值
                        const matchedCalibers = []; // 存储符合条件的口径大小
                        for (let i = 0; i < this.inputTwo.length; i++) {
                            const value = this.inputTwo[i].value;
                            const label = this.inputTwo[i].label;
                            this.rebore_id = value;
                            // 将 getrecommedData() 的 Promise 对象添加到 promises 数组中
                            promises.push(
                                this.getrecommedData().then(() => {
                                    inputFiveValues.push(this.inputFive); // 将inputFive的值添加到数组中
                                    inputEightValues.push(this.inputEight); // 将inputEight的值添加到数组中
                                    console.log(
                                        `rebore_id: ${value}, inputFive: ${this.inputFive}, inputEight: ${this.inputEight}`
                                    );
                                    if (
                                        this.minFluid >= this.inputFive &&
                                        this.minFluid <= this.inputEight &&
                                        this.maxFluid >= this.inputFive &&
                                        this.maxFluid <= this.inputEight
                                    ) {
                                        matchedCalibers.push({
                                            value: value,
                                            label: label,
                                            inputFive: this.inputFive,
                                            inputEight: this.inputEight,
                                        }); // 如果在范围内，则将符合的口径大小添加到数组中
                                    } else {
                                        //不满足流量范围的情况下,满足以下条件也可以
                                        if (
                                            this.mediumFluid >= this.inputFive &&
                                            this.mediumFluid <= this.inputEight &&
                                            this.maxFluid >= this.inputFive &&
                                            this.maxFluid <= this.inputEight
                                        ) {
                                            matchedCalibers.push({
                                                value: value,
                                                label: label,
                                                inputFive: this.inputFive,
                                                inputEight: this.inputEight,
                                            });
                                        }
                                    }
                                })

                            );
                        }
                        // 使用 Promise.all() 处理所有异步操作
                        Promise.all(promises)
                            .then(() => {
                                console.log("符合条件的口径大小：", matchedCalibers); // 打印符合条件的口径大小数组
                                matchedCalibers.sort((a, b) => a.label - b.label); // 对符合条件的口径大小进行从小到大排序
                                let selectedCaliber = {}; // 存储选择的口径大小信息
                                if (matchedCalibers.length === 0) {
                                    this.inputTwo.sort((a, b) => a.value - b.value);
                                    console.log("排序后的口径id数组", this.inputTwo);
                                    const maxCaliber = this.inputTwo[this.inputTwo.length - 1]; // 获取最大口径
                                    console.log("最大口径是:", maxCaliber);
                                    selectedCaliber = {
                                        value: maxCaliber.value,
                                        label: maxCaliber.label,
                                        inputFive: this.inputFive,
                                        inputEight: this.inputEight,
                                    };
                                    MessageBox.alert(
                                        "没有符合流量范围的口径大小，已选择最大口径",
                                        "提示"
                                    ).then(() => {
                                        // 计算其他输入框的结果并显示在页面上
                                        this.calculateOtherInputs(selectedCaliber.label, this.wdensity, this.dyviscosity, this.minFluid, this.maxFluid, this.mediumFluid)
                                        resolve({
                                            inputFive: selectedCaliber.inputFive,
                                            inputEight: selectedCaliber.inputEight,
                                            selectedCaliber: selectedCaliber.label,
                                        });
                                    });
                                } else {
                                    const minCaliber = matchedCalibers[0]; // 找出最小的口径大小
                                    selectedCaliber = {
                                        value: minCaliber.value,
                                        label: minCaliber.label,
                                        inputFive: minCaliber.inputFive,
                                        inputEight: minCaliber.inputEight,
                                    };
                                    console.log("口径选择的是：", selectedCaliber);
                                    // 添加提示信息
                                    MessageBox.alert(
                                        "存在符合流量范围的口径大小，已选择最小口径",
                                        "提示"
                                    ).then(() => {
                                        this.name = [selectedCaliber.value]; // 将选择的口径大小显示在this.inputTwo选择框中
                                        this.inputFive = selectedCaliber.inputFive; // 将对应的inputFive的值显示在页面的this.inputFive的输入框中
                                        this.inputEight = selectedCaliber.inputEight; // 将对应的inputEight的值显示在页面的this.inputEight的输入框中
                                        this.calculateOtherInputs(selectedCaliber.label, this.wdensity, this.dyviscosity, this.minFluid, this.maxFluid, this.mediumFluid)
                                        resolve({
                                            inputFive: selectedCaliber.inputFive,
                                            inputEight: selectedCaliber.inputEight,
                                            selectedCaliber: selectedCaliber.label,
                                        });
                                    });
                                }
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
    mounted() {
        bus.$on("density-change", (density) => {
            console.log("Size收到的密度值:", density);
            this.density = density;
            // 其他操作...
        });
    },
};
</script>

<style scoped>
#Size {
    position: absolute;
    margin-top: 437px;
    right: 105px;
    background-color: #ffff;
    border-left: 1px solid rgb(217, 210, 210);
    border-right: 1px solid rgb(217, 210, 210);
    border-bottom: 1px solid rgb(217, 210, 210);
    height: 590px;
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
    width: 640px;
    height: 45px;
    background-color: rgba(227, 227, 227, 0.667);
    line-height: 35px;
}

.textOne {
    margin-left: 200px;
}

.textTwo {
    margin-left: 80px;
    margin-right: 75px;
}

.request {
    margin-top: 10px;
    font-size: 13px;
}

.input {
    width: 90px;
    margin-left: 50px;
}

.select2 {
    width: 90px;
    margin-left: 50px;
}
</style>
