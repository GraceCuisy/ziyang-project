import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);
import routes from './routes.js'

// 创建路由器对象
const router=new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:"active"
})

router.beforeEach((to,from,next)=>{
  /* 路由发生变化修改页面title */
  if(to.meta.title){
    document.title=to.meta.title
  }else{
    document.title="积分大派兑"
  }
  next()
})

export default router
