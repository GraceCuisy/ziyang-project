import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router/index'
import store from './store'
import { Field,cellGroup } from 'vant';

Vue.use(Field);
Vue.use(cellGroup);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
