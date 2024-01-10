<template>
  <div id="selectType">
    <div class="all">
      <div class="biaotilan">
        <div class="container">项目信息 Project</div>
        <div class="sanjiao"></div>
      </div>
      <div class="request">
        <span>用户名称 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-input
          v-model="tableData.inputOne"
          placeholder="请输入用户名"
          class="input"
        ></el-input>
      </div>
      <div class="request">
        <span>项目名称 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-input
          v-model="tableData.inputTwo"
          placeholder="请输入项目名称"
          class="input"
        ></el-input>
      </div>
      <div class="request1">
        <span>流量计类型</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <common-select
          v-model="tableData.selectedValue"
          :options="tableData.optionsOne"
          class="select"
        ></common-select>
      </div>
      <div class="request">
        <span>安装位号 </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-input
          v-model="tableData.inputThree"
          placeholder="请输入位号"
          class="input"
        ></el-input>
      </div>
      <div class="request">
        <span>联系人/电话</span> &nbsp;
        <el-input
          v-model="tableData.inputFour"
          placeholder="请输入电话"
          class="input"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import CommonSelect from "@/components/el-select/CommonSelect.vue";
import { getFlowmeter } from "@/api/select/flowmeter_medius";
import { bus } from "@/main.js";

export default {
  name: "selectType",
  components: {
    CommonSelect,
  },
  props: {
    projectData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tableData: {
        inputOne: "",
        inputTwo: "",
        inputThree: "",
        inputFour: "",
        selectedValue: [],
        optionsOne: [],
      },
      flowmeter_type: "", //区分流量计类型
      flowmeter_type_encode: "", //获得流量计类型的编码
      flow_encoed: "", //具体的编码
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    "tableData.inputOne"() {
      this.updateTableData();
    },
    "tableData.inputTwo"() {
      this.updateTableData();
    },
    "tableData.inputThree"() {
      this.updateTableData();
    },
    "tableData.inputFour"() {
      this.updateTableData();
    },
    "tableData.selectedValue": {
      handler(newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          this.updateTableData();
        }
      },
      deep: true,
    },
    "tableData.optionsOne": {
      handler(newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          this.updateTableData();
        }
      },
      deep: true,
    },
    "tableData.selectedValue": function (newVal) {
      if (newVal.length > 0) {
        // console.log('用户选择的流量计类型是：', newVal[0]);
        this.flowmeter_type = newVal[0];
        console.log("用户选择的流量计类型是：", this.flowmeter_type);
      }
    },
    projectData: {
      handler(newVal) {
        console.log("接收到的projectData数据：", newVal);
        if (Object.keys(newVal).length > 0) {
          const data = newVal; // 获取projectData对象
          this.tableData.inputOne = data.用户名称 || "";
          this.tableData.inputTwo = data.项目名称 || "";
          this.tableData.inputThree = data.安装位号 || "";
          this.tableData.inputFour = data["联系人/电话"] || ""; // 使用正确的属性名
          // this.selectedValue = data.流量计类型 || [];
          // 获取流量计类型的值
          const flowMeterType = data.流量计类型[0];
          console.log(flowMeterType);
          // 在选项中查找匹配项的value属性
          const match = this.tableData.optionsOne.find(
            (option) => option.label == flowMeterType
          );
          console.log("新的id为：", match);
          // 如果找到了匹配项，则将其value属性赋值给selectedValue
          if (match) {
            this.tableData.selectedValue = [match.value];
          }
        }
      },
    },
    immediate: true,
  },
  methods: {
    //更新页面数据
    updateTableData() {
      this.tableData = {
        inputOne: this.tableData.inputOne,
        inputTwo: this.tableData.inputTwo,
        inputThree: this.tableData.inputThree,
        inputFour: this.tableData.inputFour,
        selectedValue: this.tableData.selectedValue,
        optionsOne: this.tableData.optionsOne,
      };
      // 触发自定义事件，并传递 this.tableData 作为参数
      bus.$emit("table-data-updated", this.tableData);
      console.log("table更新的数据", this.tableData);
    },
    // 请求数据
    getData() {
      this.tableData.optionsOne = [];
      getFlowmeter().then((res) => {
        // console.log(res);
        let dataList = Array.from(res.rows); // 使用Array.from()方法
        // console.log(dataList);
        this.tableData.optionsOne = dataList.map(function (item) {
          return { value: item.id, label: item.type_name };
        });
        this.flowmeter_type_encode = dataList.map(function (items) {
          return { id: items.id, encode: items.encode };
        });
        // console.log(this.flowmeter_type_encode)
      });
    },
  },
  created() {
    // 监听 flowmeter_type 变化，并将其传递给其他组件
    this.$watch("flowmeter_type", function (newVal) {
      console.log(newVal);
      bus.$emit("flowmeterTypeChanged", newVal);
      console.log(this.flowmeter_type_encode);
      var selectedObject = this.flowmeter_type_encode.find(
        (item) => item.id === parseInt(newVal)
      );
      if (selectedObject) {
        this.flow_encoed = selectedObject.encode;
        console.log("encode 的值为", this.flow_encoed);
      } else {
        console.error("未找到与 id 对应的 encode 值");
      }
      bus.$emit("flowmeterEncodeTypeChanged", this.flow_encoed);
    });
  },
  computed: {
    optionsOne() {
      return this.tableData.optionsOne;
    },
  },
};
</script>

<style scoped>
#selectType {
  position: relative;
  width: auto;
  height: 500px;
  background: url("../assets/8.webp");
}

.all {
  position: absolute;
  margin-top: 45px;
  background-color: #ffff;
  width: 1208px;
  height: 400px;
  margin-left: 110px;
  font-family: PingFang SC, Source Sans Pro, Helvetica Neue, Arial,
    Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  border-left: 1px solid rgb(217, 210, 210);
  border-right: 1px solid rgb(217, 210, 210);
  border-bottom: 1px solid rgb(217, 210, 210);
  border: 1px solid rgb(217, 210, 210);
}
.biaotilan {
  width: auto;
  height: 45px;
  /* background-color: #02a7f0; */
  overflow: hidden;
}
/* .sanjiao{
  position: absolute;
        top: 0;
        right: 0;
        height: 45px;
        width: 50px;
        background-color: rgb(24, 102, 170);
        clip-path: polygon(0 0, 100% 100%,100% 0);
  } */
.container {
  background-color: rgba(227, 227, 227, 0.667);
  font-weight: bold;
  text-align: center;
  line-height: 45px;
  border-bottom: 1px solid rgb(217, 210, 210);
}

.request {
  margin-top: 15px;
  margin-left: -65px;
  /* margin-right: 590px; */
  font-size: 13px;
  text-align: center;

  /* .span {
    font-family: pingfang SC, helvetica neue, arial, hiragino sans gb,
      microsoft yahei ui, microsoft yahei, simsun, sans-serif !important;
  } */
}
.request1 {
  margin-top: 18px;
  margin-right: 1096px;
  font-size: 13px;
  text-align: center;
}

.input {
  position: relative;
  width: 930px;
  height: 40px;
  margin-left: 10px;
  margin-top: 5px;
}
.select {
  position: relative;
  margin-right: -1030px;
  width: 930px;
  margin-left: -10px;
  /* margin-left: 10px; */
}
/* .image{
  position: absolute;
  margin-left: 135px;
} */
</style>