<template>
  <transition name="alert">
    <div class="contact">
      <div class="contact-bg" @click="closeContact"></div>
        <div class="wrapper">
          <div class="close iconfont" @click="closeContact">&#xe624;</div>
          <div class="top">
            <i class="iconfont">&#xe609;</i>
            微信预定
          </div>
          <div class="bottom">
            <i class="iconfont">&#xe600;</i>
            WhatsApp预定
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    closeContact () {
      this.$emit('toggleContact', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .contact
    &.alert-enter-active
      animation: scaleIn .3s
    z-index: 10000
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    .contact-bg
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      background-color: rgba(0, 0, 0, 0.3)
    .wrapper
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      margin: auto
      width: 290px
      height: 180px
      background-color: #fff
      border-radius: 10px
      .top, .bottom
        margin: 0 auto
        width: 180px
        height: 40px
        line-height: 40px
        text-align: center
        color: #fff
        background-color: $color-blue
        border-radius: 20px
        i
          display: inline-block
          font-size: 18px
      .top
        margin: 42px auto 16px
        background-color: $color-theme
      .close
        position: absolute
        top: 8px
        right: 10px
        font-size: 28px
        color: $color-red

  @keyframes scaleIn
    0%
      transform: scale(1)
    60%
      transform: scale(1.1)
    100%
      transform: scale(1)
</style>
