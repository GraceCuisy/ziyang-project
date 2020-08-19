<template>
  <div class="indexContainer">
    <!-- 弹窗 -->
    <!-- <messageDialog></messageDialog> -->
    <div class="header">
      <img class="topImg" src="../../common/images/bg_02.jpg" alt="">
      <div class="recordBtn" @click="toRecordPage">
        <img src="../../common/images/ji_03.png" alt="">
      </div>
    </div>
    <div class="contentWrap" ref="contentWrap">
      <div class="content">
        <!-- 中间买菜立减金部分 -->
        <div class="middlePay">
          <img class="weixinStamp" src="../../common/images/quan_03.png" alt="">
          <img class="collectBtn" src="../../common/images/an_03.png" alt="">
          <div class="eGuideBtn" @click="toEGuide">
            <span>如何开通工银e支付</span>
            <i class="wenBtn"></i>
          </div>
        </div>
        <!-- 活动细则 -->
        <div class="activityRule">
          <div class="ruleTit">活动细则</div>
          <p class="ruleText">
            （1）本活动仅限特定地区手机号用户参加。<br/>
            （2）在活动期间内，符合条件的目标用户，绑定手机号即可参加领取微信支付立减金活动，使用“工银e支付”支付1分钱，获得1次立减金领取机会，可选择领取“工行借记卡立减金”或“工行信用卡立减金”，随机获得1-99元不等的微信支付立减金。<br/>
            （3）用户通过分享活动，还可邀请好友一起来参加活动。每成功邀请1位好友使用“工银e支付”支付1分钱，分享人还可获赠1次领取机会，领取“工行借记卡立减金”或“工行信用卡立减金”，多邀多得。多张立减金可叠加使用。<br/>
          </p>
          <!-- 二维码区域 -->
          <div class="qrCodeWrap">
            <img class="erImg" src="../../common/images/er_03.png" alt="">
            <div class="RightWrap">
              <img class="scanImg" src="../../common/images/saoma_03.png" alt="">
              <div class="scanText">微信扫描查看活动指定商户</div>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <div class="footer">
          <span class="left">技术支持:</span>
          <span class="middle">@微易拍</span>
          <span class="right">400-018-5568</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import messageDialog from "../../components/messageDialog/messageDialog"
export default {
  name: 'index',
  data() {
    return {
      isShowDialog:false, //是否显示消息弹窗
      isOutofRange:false, //是否超出活动地域范围
      isStockEmpty:false, //是否库存为空
      isWrongDate:false, //是否日期错误
      isDuplicateApply:false, //是否重复领取
      isActivityOver:false, //是否活动结束
      isMeetRequirements:false, //是否满足条件
      issuccessMessage:false, //是否是支付成功的提醒消息
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.scroll=new BScroll(this.$refs.contentWrap,{
        scrollY:true,
        click:true,
      })
    })
  },
  components:{
    messageDialog
  },
  methods: {
    toEGuide(){
      this.$router.push({path:'/eGuide'})
    },
    toRecordPage(){
      this.$router.push({path:'/collectRecord'})
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .indexContainer
    width 100%
    height 100%
    background-color #FFE7B0
    overflow hidden
    .header
      position relative
      z-index 9
      width 100%
      overflow hidden
      .recordBtn
        position absolute
        right 24px
        top 18px
        width 164px
        height 58px
        img 
          width 100%
          height 100%
      .topImg
        width 100%
    .contentWrap
      width 100%
      height calc(100vh - 480px)
      .content
        width 100%
        // padding-bottom 100px
        .middlePay
          display flex
          width 100%
          flex-direction column
          align-items center
          .weixinStamp
            width 494px
            height 206px
          .collectBtn
            width 614px
            height 88px
            margin-top 18px
          .eGuideBtn
            display flex
            align-items center
            justify-content center
            width 309px
            height 47px
            background-color #fff
            border-radius 20px
            margin-top 22px
            font-size 26px
            font-weight 700
            color #5f3630
            .wenBtn
              width 32px
              height 32px
              background-image url('../../common/images/wen_03.png')
              background-size cover
              background-repeat no-repeat
              margin-left 4px
        .activityRule
          width 686px
          height 727px
          background-color #fff
          border-radius 20px
          margin 17px auto 0
          padding 0 40px
          .ruleTit
            width 100%
            font-size 30px
            font-weight bold
            color #5f3630
            padding 20px 0
            text-align center
          .ruleText
            font-size 22px
            color #5f3630
            line-height 38px
          .qrCodeWrap
            display flex
            align-items center
            width 604px
            height 222px
            background-color #ffebcb
            margin-top 22px
            .erImg
              width 196px
              height 196px
              margin 0 36px 0 16px
            .RightWrap
              display flex
              align-items center
              flex-direction column
              .scanImg
                width 60px
                height 60px
              .scanText
                font-size 26px
                color #333
                margin-top 22px
        .footer
          display flex
          align-items center
          justify-content center
          width 100%
          height 76px
          text-align center
          font-size 24px
          color #5f3630
          .middle
            margin 0 8px
.test
  font-size 0
</style>
