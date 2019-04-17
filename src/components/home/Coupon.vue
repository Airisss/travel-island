<template>
  <div class="coupon">
    <div class="coupon-item" @click="showAccess(1)" ref="couponA">
      购买任意产品+$130<br>
      即可获得<b>船票抵用券</b>
      <div class="access" v-html="contentA"></div>
    </div>
    <div class="coupon-item" @click="showAccess(2)" ref="couponB">
      购买任意产品<br>
      即可预定<b>超低价酒店</b>
      <div class="access" v-html="contentB"></div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'

export default {
  name: 'Coupon',
  data () {
    return {
      content: ['领<br>取', '已<br>领'],
      contentA: '领<br>取',
      contentB: '领<br>取'
    }
  },
  methods: {
    showAccess (index) {
      if (index === 1) {
        if (this.contentA === this.content[1]) {
          return
        }
        this.$emit('accessCoupon', index)
        setTimeout(() => {
          this.$refs.couponA.classList.add('accessed')
          this.contentA = this.content[1]
        }, 400)
      } else {
        if (this.contentB === this.content[1]) {
          return
        }
        this.$emit('accessCoupon', index)
        setTimeout(() => {
          this.$refs.couponB.classList.add('accessed')
          this.contentB = this.content[1]
        }, 400)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .coupon
    padding: 0 12px 10px
    display: flex
    color: #fff
    .coupon-item
      position: relative
      flex: 1
      height: 75px
      line-height: 22px
      box-sizing: border-box
      padding: 16px 14px
      background-color: #ff6e75
      border-radius: 6px
      font-size: 12px
      box-shadow: 0px 6px 10px #eee
      overflow: hidden
      &.accessed
        background-color: $color-text-second
        color: rgba(255, 255, 255, 0.8)
      &:nth-of-type(1)
        margin-right: 9px
      &:before
        content: ''
        position: absolute
        right: 38px
        top: 0
        width: 0px
        height: 75px
        border-right: 1px dashed #fff
      &:after
        content: ''
        position: absolute
        top: -5px
        right: 33px
        width: 12px
        height: 12px
        border-radius: 50%
        background-color: #fff
      b
        font-weight: 700
      .access
        position: absolute
        top: 16px
        right: 12px
        &:after
          content: ''
          position: absolute
          bottom: -20px
          right: 22px
          width: 12px
          height: 12px
          border-radius: 50%
          background-color: #fff
</style>
