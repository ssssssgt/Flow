import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import JSZip from 'jszip'
import mammoth from 'mammoth'
// import { Cheerio } from 'cheerio'
//创建事件总线
export const bus = new Vue();
//bus被导出为一个Vue实例，成为事件总线。它将在应用程序中的各个组件之间进行事件通信。



Vue.use(ElementUI)
Vue.use(JSZip)
Vue.use(mammoth)
// Vue.use(Cheerio)
Vue.config.productionTip = false //关闭生产提提示


new Vue({
  store, 
  router,
  render: h => h(App),
}).$mount('#app')
