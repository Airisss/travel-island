<template>
  <div class="coupon">
    <div class="coupon-item" @click="showContact">
      购买任意产品+$130<br>
      即可获得<b>船票抵用券</b>
      <div class="access">
        领<br>取
      </div>
    </div>
    <div class="coupon-item" @click="showContact">
      购买任意产品<br>
      即可预定<b>超低价酒店</b>
      <div class="access">
        领<br>取
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coupon',
  methods: {
    showContact () {
      this.$emit('toggleContact', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
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
