<template>
  <div id="app">
    <my-header />
    <my-main />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/Layout/MyHeader.vue'
import MyMain from '@/Layout/MyMain.vue'
import MyFooter from '@/Layout/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyMain,
    MyFooter
  }
}
</script>

<style>


* {
  margin: 0;
  padding: 0;
}

#app {
  /* font-family:PingFang SC,Source Sans Pro,Helvetica Neue,Arial,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFFFFF;
}
</style>
