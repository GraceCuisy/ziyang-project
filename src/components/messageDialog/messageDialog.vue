<template>
  <!-- 自定义消息弹窗 -->
  <div class="dialogWrap">
    <div class="messageBox">
      <div class="titWrap">
        <slot></slot>
      </div>
      <div class="buttonWrap">
        <div class="confirmBtn" @click="handleConfirm">好的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageDialog',
  props:['isPhoneErr','isShowDialog'],
  methods: {
    // 点击确定的回调函数
    handleConfirm(){
      console.log(this.isPhoneErr);
      if(!this.isPhoneErr){
        // 要去兑换并关闭弹窗
        console.log("要去兑换并关闭弹窗");
        this.$emit('update:isShowDialog',false)
      }else{
        // 只关闭弹窗
        console.log("只关闭弹窗");
        this.$emit('update:isShowDialog',false)
      }
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
      width 446px
      height 330px
      background-color #ffffff
      border 10px solid #ffdfd7
      border-radius 30px
      .titWrap
        width 446px
        height 207px
        display flex
        justify-content center
        align-items center
      .buttonWrap
        width 446px
        height 123px
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
          margin-bottom 37px
          margin-left 18px
</style>
