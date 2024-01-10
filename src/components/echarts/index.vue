<template>
  <div class="canvas-container">
    <canvas ref="canvans" :width="width" :height="height"></canvas>
  </div>
</template>
  
  <script>
// import echarts from "echarts/dist/echarts";
import * as echarts from "echarts";
export default {
  name: "CanvasIndex",

  props: {
    option: {
      type: Object,
      required: true,
    },
    width: {
      type: String,
      default: "600",
    },
    height: {
      type: String,
      default: "300",
    },
  },

  data() {
    return {
      chart: null,
      canvans: null,
      ctx: null,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.canvans = this.$refs.canvans;
      this.ctx = this.canvans.getContext("2d");
      let chart = echarts.init(this.canvans);
      chart.setOption(this.option);
      this.chart = chart;
    });
  },

  methods: {
    /**
     * 下载canvas中画的echarts图标，返回base64格式图片
     */
    download() {
      const _this = this;
      let imageDate = this.chart.getDataURL();
      let image = new Image();
      image.src = imageDate;
      return (image.onload = function () {
        _this.ctx.drawImage(image, 0, 0);
        let base64Data = _this.canvans.toDataURL("image/png");
        return base64Data;
      });
    },
    /**
     * 下载canvas中画的echarts图标，返回图片下载
     */
    downloadImg() {
      let imageDate = this.chart.getDataURL();
      let image = new Image();
      image.src = imageDate;
      image.onload = function () {
        _this.ctx.drawImage(image, 0, 0);
        let base64Data = _this.canvans.toDataURL("image/png");
        let link = document.createElement("a");
        link.href = base64Data;
        link.download = "chart.png";
        link.click();
      };
    },
  },
};
</script>
  
  <style  scoped>
.canvas-container {
  display: none;
}
</style>