<template>
  <div class="eGuideWrap">
    <!-- 返回按钮 -->
    <backBtn></backBtn>
    <img src="../../common/images/liucheng_03.jpg" alt="">
  </div>
</template>

<script>
import backBtn from '../../components/backBtn/backBtn'
export default {
  name: 'eGuide',
  components:{
    backBtn
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .eGuideWrap
    position relative
    width 100%
    height 100%
    background-color #fefde2
    overflow hidden
    img 
      display block
      width 618px
      height 1256px
      margin 70px auto 0
        
</style>
