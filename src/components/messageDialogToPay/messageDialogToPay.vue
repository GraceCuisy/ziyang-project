<template>
  <!-- 自定义消息弹窗 -->
  <div class="dialogWrap">
    <div class="messageBox">
      <div class="tit">提示</div>
      <div class="content">领取立减金需要使用工银e支<br/>付，支付0.01元验证。</div>
      <div class="buttonWrap">
        <div class="confirmBtn">去支付</div>
      </div>
      <div class="eGuideBtn" @click="toEGuide">如何开通e支付>>></div>
      <!-- 关闭按钮 -->
      <div class="closeBtn" @click="$emit('update:isMeetRequirements',false)">
        <img src="../../common/images/x_03.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageDialogToPay',
  props:['isMeetRequirements'],
  methods: {
    toEGuide(){
      this.$router.push({path:"/eGuide"})
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dialogWrap
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 99
    background-color #A8A8A8
    display flex
    justify-content center
    align-items center
    .messageBox
      position relative
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 446px
      height 330px
      background-color #ffffff
      border 10px solid #EBEBEB
      border-radius 30px
      .closeBtn
        position absolute
        right -38px
        top -38px
        width 38px
        height 38px
        border-radius 50%
      .tit
        font-size 30px
        font-weight 700
        color #333
      .content
        font-size 26px
        color #666
        line-height 38px
        letter-spacing 1px
        margin 5px 0
      .buttonWrap
        width 446px
        height 85px
        margin-bottom 5px
        .confirmBtn
          width 392px
          height 85px
          background-image url('../../common/images/t.png')
          background-size contain
          display flex
          justify-content center
          align-items center
          font-size 32px
          font-weight 700
          color #fff
          background-repeat no-repeat
          margin 0 auto 
      .eGuideBtn
        font-size 26px
        color #ff7856
</style>
