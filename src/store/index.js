import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



// const state = {
//   sum:0
// }

// const actions = {
//   // add({state},data){
//   //   setTimeout(() => {
//   //     state.sum += data      
//   //   }, 800);
//   // }
// }

// const mutations = {
//   // ADD(state,data){
//   //   state.sum += data
//   // }
// }
// const getters = {
//   // caclSum(state) {
//   //   return state.sum * 20
//   // }
// }

// //创建并暴露store
// export default new vuex.Store({
//   actions,
//   mutations,
//   state,
//   getters,
// })
const store = new Vuex.Store({
  state: {
    chartData: null
  },
  mutations: {
    setChartData(state, chartData) {
      state.chartData = chartData
    }
  }
})

export default store