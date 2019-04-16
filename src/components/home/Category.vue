<template>
  <div class="category">
    <div class="category-item" @click="showContact">
      <i class="iconfont">&#xe628;</i>
      <div class="item-title">疯狂低价票</div>
      <div class="item-desc">心动不如行动</div>
    </div>
    <div class="category-item" @click="showContact">
      <i class="iconfont pink">&#xe619;</i>
      <div class="item-title">主题攻略</div>
      <div class="item-desc">召唤你的小宇宙</div>
    </div>
    <div class="category-item" @click="showContact">
      <i class="iconfont yellow">&#xe60c;</i>
      <div class="item-title">自驾推荐</div>
      <div class="item-desc">旅行就这么简单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  methods: {
    showContact () {
      this.$emit('toggleContact', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .category
    display: flex
    padding: 12px
    height: 110px
    &:nth-child(2)
      margin: 0 9px
    .category-item
      padding: 24px 0
      box-sizing: border-box
      flex: 1
      background-color: #fff
      border-radius: 6px
      text-align: center
      box-shadow: 0px 6px 10px #eee
      &:nth-child(2)
        margin: 0 9px
      i
        margin-top: 20px
        font-size: 30px
        color: #2495ff
        &.pink
          color: #ff5c64
        &.yellow
          color: #f9cf56
      .item-title
        margin-top: 5px
        line-height: 24px
        font-size: 14px
        color: $color-title
      .item-desc
        font-size: 12px
        color: $color-text-second
</style>
