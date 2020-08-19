import index from 'pages/index/index'
import eGuide from 'pages/eGuide/eGuide'
import collectRecord from 'pages/collectRecord/collectRecord'

export default [
  {
    path: '/index',
    component:index,
    meta:{
      title:"积分大派兑"
    }
  },
  {
    path: '/eGuide',
    component:eGuide,
    meta:{
      title:"积分大派兑"
    }
  },
  {
    path: '/collectRecord',
    component:collectRecord,
    meta:{
      title:"积分大派兑"
    }
  },
  {
    path:'',
    redirect:'/index'
  },
]