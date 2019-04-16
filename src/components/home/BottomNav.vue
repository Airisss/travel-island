<template>
  <div class="bottom-nav">
    <router-link tag="div" to="/dinner" class="nav-item">
      <i class="iconfont">&#xe8a4;</i>
      <span>自助餐</span>
    </router-link>
    <router-link tag="div" to="/ticket" class="nav-item">
      <i class="iconfont">&#xe8b7;</i>
      <span>车船票</span>
    </router-link>
    <router-link tag="div" to="/" class="nav-center">
      <div class="img">
        <img src="https://travel-island.cdn.bcebos.com/dinner%2Ftravel.jpg">
      </div>
    </router-link>
    <router-link tag="div" to="/tour" class="nav-item">
      <i class="iconfont">&#xe890;</i>
      <span>去旅行</span>
    </router-link>
    <router-link tag="div" to="/dollar" class="nav-item">
      <i class="iconfont">&#xe89c;</i>
      <span>外币兑换</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .bottom-nav
    display: flex
    position: fixed
    left: 0
    bottom: -1px
    width: 100%
    height: 54px
    background-color: #fff
    box-shadow: 0px -12px 16px rgba(0, 0, 0, .05)
    .nav-item
      flex: 1
      text-align: center
      &.router-link-active
        i
          color: $color-theme
        span
          color: $color-theme
        .nav-center
          .img
            img
      i
        margin: 6px 0 2px
        display: block
        font-size: 24px
        color: $color-text-second
      span
        font-size: 12px
        color: $color-text-second
    .nav-center
      position: relative
      width: 100px
      .img
        position: absolute
        left: 50%
        bottom: 3px
        transform: translate(-50%, 0)
        border: 10px solid #fff
        border-radius: 50%
        img
          width: 56px
          height: 56px
          border-radius: 50%
          box-shadow: 0px 6px 10px #eee
</style>
