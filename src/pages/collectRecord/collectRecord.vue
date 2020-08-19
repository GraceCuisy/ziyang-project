<template>
  <div class="recordWrap" >
    <!-- 权益列表 -->
    <div class="benefitListWrap" ref="benefitListWrap">
      <div class="benefitList">
        <div class="benefitItem">
          <img class="leftImg" src="../../common/images/wei_03.png" alt="">
          <div class="item-r">
            <div class="item-r-t">满40减20微信立减金</div>
            <div class="item-r-m">
              <span>仅限工行储蓄卡使用</span>
            </div>
            <div class="item-r-b">
              <span>领取日期:</span>
              <span class="date">2020-08-15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 返回按钮 -->
    <backBtn></backBtn>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import backBtn from '../../components/backBtn/backBtn'
export default {
  name: 'collectRecord',
  components:{
    backBtn,
  },
  mounted() {
    this.$nextTick(()=>{
      this.scroll=new BScroll(this.$refs.benefitListWrap,{
        scrollY:true,
      })
    })
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recordWrap
    position relative
    width 100%
    height 100%
    overflow hidden
    background-color #f4f4f4
    .benefitListWrap
      width 710px
      height calc(100vh - 190px)
      margin 82px auto 10px
      overflow hidden
      webkit-overflow-scrolling: touch;
      .benefitItem
        display flex
        align-items center
        width 100%
        height 182px
        background-color #fff
        border-radius 20px
        border 1px solid #ddd
        margin-bottom 10px
        .leftImg
          width 120px
          height 120px
          border-radius 50%
          margin-left 18px
          margin-right 11px
        .item-r
          .item-r-t
            font-size 30px
            color #333
            font-weight 700
          .item-r-m,.item-r-b
            font-size 24px
            color #999
            .number,.date,.time
              margin-left 18px


.test
  font-size 0
</style>
