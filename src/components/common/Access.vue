<template>
  <div class="access" v-show="accessed">
    <i class="iconfont">&#xe885;</i>
    <span class="content">领取优惠券成功!</span>
  </div>
</template>

<script>
export default {
  name: 'Access',
  props: {
    accessed: Boolean
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .access
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 160px
    height: 50px
    line-height: 50px
    text-align: center
    color: rgba(255, 255, 255, .8)
    border-radius: 4px
    background-color: rgba(0, 0, 0, .76)
    i
      vertical-align: top
      font-size: 28px
      color: $color-theme
    .content
      margin-top: 4px
      margin-left: 5px
</style>
