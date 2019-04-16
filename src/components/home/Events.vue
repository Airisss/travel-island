<template>
  <div class="events">
    <div class="events-title">活动推荐</div>
    <div class="hot">
      <div class="near" @click="showContact">
        <h3>离我最近</h3>
        <span>热门专场</span>
        <i class="iconfont">&#xe63c;</i>
      </div>
      <div class="rank" @click="showContact">
        <h3>排行榜</h3>
        <span>热门专场</span>
        <i class="iconfont">&#xe607;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  methods: {
    showContact () {
      this.$emit('toggleContact', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .events
    padding: 0 12px
    .events-title
      font-size: 16px
      color: $color-title
      line-height: 40px
    .hot
      display: flex
      color: #fff
      .near, .rank
        position: relative
        flex: 1
        padding: 15px 15px
        box-sizing: border-box
        height: 80px
        border-radius: 6px
        box-shadow: 0px 6px 10px #eee
        overflow: hidden
        h3
          font-size: 20px
          font-weight: 400
          margin-bottom: 8px
        span
          font-size: 12px
          padding: 2px 8px
          border: 1px solid rgba(255, 255, 255, .8)
          border-radius: 10px
          box-sizing: border-box
          color: rgba(255, 255, 255, .8)
        i
          position: absolute
          bottom: -12px
          right: -12px
          font-size: 70px
          color: rgba(255, 255, 255, .5)
      .near
        background: linear-gradient(to right bottom, #5fda6e, #4bc972)
        margin-right: 9px
      .rank
        background: linear-gradient(to right bottom, #55cbff, #2498ff)
</style>
