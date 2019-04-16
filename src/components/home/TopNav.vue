<template>
  <div class="nav">
    <div class="nav-item">
      <div class="nav-icon iconfont" @click.stop="goSimCard">&#xea98;</div>
      <span class="nav-title">Sim卡</span>
    </div>
    <div class="nav-item" @click="showContact">
      <div class="nav-icon iconfont" style="font-size: 28px">&#xe628;</div>
      <span class="nav-title">折扣最优</span>
    </div>
    <div class="nav-item" @click="showContact">
      <div class="nav-icon iconfont" style="font-size: 32px">&#xe902;</div>
      <span class="nav-title">出行预定</span>
    </div>
    <div class="nav-item" @click="showContact">
      <div class="nav-icon iconfont">&#xe8a5;</div>
      <span class="nav-title">当季推荐</span>
    </div>
    <div class="nav-item" @click="showContact">
      <div class="nav-icon iconfont">&#xe8ac;</div>
      <span class="nav-title">旅游资讯</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  methods: {
    goSimCard () {
      this.$router.push('/sim')
    },
    showContact () {
      this.$emit('toggleContact', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .nav
    width: 100%
    display: flex
    touch-action: none
    .nav-item
      padding: 15px 0
      flex: 1
      text-align: center
      &:nth-of-type(1)
        .nav-icon
          background: linear-gradient(to right bottom, #5fda6e, #4bc972)
      &:nth-of-type(2)
        .nav-icon
          background: linear-gradient(to right bottom, #55cbff, #2498ff)
      &:nth-of-type(3)
        .nav-icon
          background: linear-gradient(to right bottom, #fd718e, #f1545e)
      &:nth-of-type(4)
        .nav-icon
          background: linear-gradient(to right bottom, #5fda6e, #4bc972)
      &:nth-of-type(5)
        .nav-icon
          background: linear-gradient(to right bottom, #c297ff, #9a69ff)
      .nav-icon
        margin: 0 auto 5px
        width: 50px
        height: 50px
        border-radius: 50%
        color: #fff
        font-size: 30px
        text-align: center
        line-height: 50px
      .nav-title
        font-size: 12px
        color: $color-title
</style>
