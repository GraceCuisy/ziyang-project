<template>
  <!-- 使用btn按钮时，给页面包裹元素加相对定位 -->
  <div class="backBtn" @click="backBefore">
    <img src="../../common/images/jian_03.png" alt="">
    <span>返回</span>
  </div>
</template>

<script>
export default {
  name: 'backBtn',
  methods: {
    backBefore(){
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .backBtn
    position absolute
    z-index 10
    display flex
    align-items center
    left 23px
    top 25px
    width 88px
    height 32px
    img
      width 21px
      height 32px
    span 
      font-size 30px
      font-weight bold
      color #333
      margin-left 5px
</style>
