// 包含所有接口的请求函数

import ajax from "./ajax"

// 请求下单
export const reqPlaceOrder=()=> ajax.post("/order/prepare",{
  "access-token":456789,
  pid:"7vrk368",
})

// 查询
export const reqQuery=()=> ajax.post("/order/view",{
  "access-token":456789,
  id:19,
})

// 获奖记录
export const reqCollectRecord=()=> ajax.post("/prize-user",{
  "access-token":456789,
  pid:"7vrk368",
})

// 请求创建
export const reqCreate=()=> ajax.post("/prize-user/create",{
  "access-token":456789,
  pid:"7vrk368",
})

// 获取活动信息
export const reqProjectView=()=> ajax.post("/project/view",{
  "access-token":456789,
  pid:"7vrk368",
})