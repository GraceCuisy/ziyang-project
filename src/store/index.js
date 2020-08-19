import Vue from 'vue'
import Vuex from 'vuex'
import indexModule from './modules/index'
import userModule from './modules/user'
// 声明使用vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    indexModule,
    userModule
  }
})