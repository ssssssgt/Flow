<template>
    <div id="Draw">
        <!-- 放流量计图 -->
        <img :src="imageData[0]" alt="" class="image" id="image" />
        <img :src="imageData[1]" alt="" class="images" id="images" />
        <div class="divery1">
            <div class="biantilan">
                <div class="container">结构尺寸图 Dimensional drawing</div>
                <div class="sanjiao1"></div>
            </div>
            <div class="request">
                <span>安装位号
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputOne" class="input"></el-input>
            </div>
            <div class="request">
                <span>流量计口径（mm） </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputTwo" class="input"></el-input>
            </div>
            <div class="request">
                <span>仪表类型 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputThree" class="input"></el-input>
            </div>
            <div class="request">
                <span>仪表结构 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputFour" class="input"></el-input>
            </div>
            <div class="request">
                <span>连接方式 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputFive" class="input"></el-input>
            </div>
            <div class="request">
                <span>压力等级 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputSix" class="input"></el-input>
            </div>
        </div>
        <div class="divery2">
            <div class="biaotilan">
                <div class="containerOne">流量计安装尺寸 Dimensions</div>
                <div class="sanjiao2"></div>
            </div>
            <div class="request">
                <span>公称口径
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputSeven" class="input"></el-input>
            </div>
            <div class="request">
                <span>表体内径 D </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputEight" class="input"></el-input>
            </div>
            <div class="request">
                <span>标准型长度 L1 </span>&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputNine" class="input"></el-input>
            </div>
            <div class="request">
                <span>法兰外径 D1 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputTen" class="input"></el-input>
            </div>
            <div class="request">
                <span>中心螺距 K </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputOnes" class="input"></el-input>
            </div>
            <div class="request">
                <span>法兰厚度 C </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputTwos" class="input"></el-input>
            </div>
            <div class="request">
                <span>螺栓孔径 d </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputThrees" class="input"></el-input>
            </div>
            <div class="request">
                <span>螺栓数量 n </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputFours" class="input"></el-input>
            </div>
            <div class="request">
                <span>总高 H </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputFives" class="input"></el-input>
            </div>
        </div>
        <div class="divery3">
            <div class="biaotilan">
                <div class="containerOne">流量计材质 Material</div>
                <div class="sanjiao3"></div>
            </div>
            <div class="request">
                <span>表体
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputSixs" class="input"></el-input>
            </div>
            <div class="request">
                <span>法兰 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputSevens" class="input"></el-input>
            </div>
            <div class="request">
                <span>发生体 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputEights" class="input"></el-input>
            </div>
            <div class="request">
                <span>检测体
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputNines" class="input"></el-input>
            </div>
        </div>
    </div>
</template>

<script>
    import { bus } from "@/main.js";
    export default {
        name: "Draw",
        props: {
            dimensionalData: {
                type: Array,
                default: () => [],
            },
            dimenData: {
                type: Array,
                default: () => [],
            },
            materialData: {
                type: Array,
                default: () => [],
            },
            drawImages: {
                type: Array,
                default: () => [],
            },
        },
        data () {
            return {
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
                inputSevens: "",
                inputEights: "",
                inputNines: "",
                imageData: [], //存储每个图片的src
            };
        },
        watch: {
            dimensionalData: {
                handler (newVal) {
                    console.log(newVal);
                    if (Object.keys(newVal).length > 0) {
                        const data = newVal; // 获取projectData对象
                        this.inputOne = data.安装位号 || "";
                        this.inputTwo = data["流量计口径（mm）"] || "";
                        this.inputThree = data.仪表类型 || "";
                        this.inputFour = data.仪表结构 || "";
                        this.inputFive = data.连接方式;
                        this.inputSix = data.压力等级;
                    }
                },
            },
            dimenData: {
                handler (newVal) {
                    console.log(newVal);
                    if (Object.keys(newVal).length > 0) {
                        const data = newVal;
                        this.inputSeven = data.公称口径 || "";
                        this.inputEight = data["表体内径D"] || "";
                        this.inputNine = data["标准型长度L1"] || "";
                        this.inputTen = data["法兰外径D1"] || "";
                        this.inputOnes = data["中心螺距K"];
                        this.inputTwos = data["法兰厚度C"];
                        this.inputThrees = data["螺栓孔径d"];
                        this.inputFours = data["螺栓数量n"];
                        this.inputFives = data["总高H"];
                    }
                },
            },
            materialData: {
                handler (newVal) {
                    console.log(newVal);
                    if (Object.keys(newVal).length > 0) {
                        const data = newVal; // 获取projectData对象
                        this.inputSixs = data.表体 || "";
                        this.inputSevens = data.法兰 || "";
                        this.inputEights = data.发生体 || "";
                        this.inputNines = data.检测体 || "";
                    }
                },
            },
            drawImages: {
                handler (newVal) {
                    console.log("接受到了图片", newVal);
                    const imageData = newVal;
                    // img.src=this.imageData[0]
                    // console.log(img.src)
                    this.imageData[0] = imageData[0].src;
                    this.imageData[1] = imageData[1].src;
                    console.log(this.imageData[0]);
                },
            },
            inputOne () {
                this.updateDimensionData();
            },
            inputTwo () {
                this.updateDimensionData();
            },
            inputThree () {
                this.updateDimensionData();
            },
            inputFour () {
                this.updateDimensionData();
            },
            inputFive () {
                this.updateDimensionData();
            },
            inputSix () {
                this.updateDimensionData();
            },
            inputSeven () {
                this.updateDimenData();
            },
            inputEight () {
                this.updateDimenData();
            },
            inputNine () {
                this.updateDimenData();
            },
            inputTen () {
                this.updateDimenData();
            },
            inputOnes () {
                this.updateDimenData();
            },
            inputTwos () {
                this.updateDimenData();
            },
            inputThrees () {
                this.updateDimenData();
            },
            inputFours () {
                this.updateDimenData();
            },
            inputFives () {
                this.updateDimenData();
            },
            inputSixs () {
                this.updateMaterialData();
            },
            inputSevens () {
                this.updateMaterialData();
            },
            inputEights () {
                this.updateMaterialData();
            },
            inputNines () {
                this.updateMaterialData();
            },
        },
        methods: {
            updateDimensionData () {
                // 根据页面数据更新chartData属性
                this.dsData = {
                    inputOne: this.inputOne,
                    inputTwo: this.inputTwo,
                    inputThree: this.inputThree,
                    inputFour: this.inputFour,
                    inputFive: this.inputFive,
                    inputSix: this.inputSix,
                };
                // 触发自定义事件并传递chartData
                bus.$emit("dimensions-data-updated", this.dsData);
                console.log("dimensions更新的数据", this.dsData);
            },
            updateDimenData () {
                // 根据页面数据更新chartData属性
                this.dmData = {
                    inputSeven: this.inputSeven,
                    inputEight: this.inputEight,
                    inputNine: this.inputNine,
                    inputTen: this.inputTen,
                    inputOnes: this.inputOnes,
                    inputTwos: this.inputTwos,
                    inputThrees: this.inputThrees,
                    inputFours: this.inputFours,
                    inputFives: this.inputFives,
                };
                // 触发自定义事件并传递chartData
                bus.$emit("dimen-data-updated", this.dmData);
                console.log("dimen更新的数据", this.dmData);
            },
            updateMaterialData () {
                // 根据页面数据更新chartData属性
                this.mData = {
                    inputSixs: this.inputSixs,
                    inputSevens: this.inputSevens,
                    inputEights: this.inputEights,
                    inputNines: this.inputNines,
                };
                // 触发自定义事件并传递chartData
                bus.$emit("material-data-updated", this.mData);
                console.log("material更新的数据", this.mData);
            },
        },
    };
</script>

<style scoped>
    #Draw {
        position: absolute;
        margin-top: 50px;
        left: 60px;
        /* background-color: #ffff;  */
        width: 1309.5px;
        height: 1300px;
    }

    .divery1 {
        height: 380px;
        width: 550px;
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        margin-left: 64px;
        margin-top: 40px;
    }

    .divery2 {
        height: 530px;
        width: 550px;
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        margin-left: 64px;
        margin-top: 20px;
    }

    .divery3 {
        height: 260px;
        width: 550px;
        border-left: 1px solid rgb(217, 210, 210);
        border-right: 1px solid rgb(217, 210, 210);
        border-bottom: 1px solid rgb(217, 210, 210);
        border: 1px solid rgb(217, 210, 210);
        margin-left: 64px;
        margin-top: 20px;
    }

    .biaotilan {
        width: 550px;
        height: 45px;
        /* background-color: #02a7f0; */
        overflow: hidden;
    }

    .sanjiao1 {
        position: absolute;
        top: 40px;
        left: 566px;
        height: 45px;
        width: 50px;
        background-color: rgb(24, 102, 170);
        clip-path: polygon(0 0, 100% 100%, 100% 0);
    }

    .sanjiao2 {
        position: absolute;
        top: 442px;
        left: 566px;
        height: 45px;
        width: 50px;
        background-color: rgb(24, 102, 170);
        clip-path: polygon(0 0, 100% 100%, 100% 0);
    }

    .sanjiao3 {
        position: absolute;
        top: 995px;
        left: 566px;
        height: 45px;
        width: 50px;
        background-color: rgb(24, 102, 170);
        clip-path: polygon(0 0, 100% 100%, 100% 0);
    }

    .image {
        position: absolute;
        margin-left: 200px;
        margin-top: 100px;
    }

    .images {
        position: absolute;
        margin-left: 200px;
        margin-top: 300px;
    }

    .container {
        width: 550px;
        height: 45px;
        background-color: rgba(227, 227, 227, 0.667);
        line-height: 45px;
    }

    .containerOne {
        width: 550px;
        height: 45px;
        background-color: rgba(227, 227, 227, 0.667);
        /* margin-top: 10px; */
        line-height: 45px;
    }

    .request {
        margin-top: 10px;
        margin-left: 5px;
        font-size: 13px;
    }

    .input {
        width: 350px;
        margin-left: 10px;
    }
</style>
