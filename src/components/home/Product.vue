<template>
  <div class="product">
    <div class="product-title">热门精品</div>
    <div class="product-wrapper">
      <div class="product-item"
           v-for="item in dinner"
           :key="item.id"
           :class="borderBottomShow(item.id)"
           @click="goDinnerDetail(item.id)"
      >
        <img :src="item.image" />
        <div class="desc">
          <h3>{{item.title}}</h3>
          <p>{{item.brief}}</p>
          <div class="price">
            <i>{{item.prevPrice}}</i>
            <span>{{item.nowPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    dinner: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // 判断 border-bottom 样式是否添加
    borderBottomShow (id) {
      if (id <= this.dinner.length - 1) {
        return 'border-bottom'
      }
    },
    goDinnerDetail (id) {
      this.$router.push('/dinner/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .product
    padding: 0 12px
    overflow: hidden
    .product-title
      font-size: 16px
      color: $color-title
      line-height: 40px
    .product-wrapper
      &:last-child
        margin-bottom: 60px
      .product-item
        display: flex
        padding: 10px 0
        height: 120px
        &.last-of-type
          margin-bottom: 100px
        img
          margin-right: 10px
          width: 100px
          height: 120px
          border-radius: 6px
        .desc
          flex: 1
          overflow: hidden
          h3
            font-size: 14px
            line-height: 36px
            color: $color-title
          p
            height: 32px
            line-height: 18px
            font-size: 12px
            color: $color-text
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
          .price
            margin-top: 26px
            i
              text-decoration: line-through
              color: #ff5c64
            span
              margin-left: 10px
              color: $color-theme
</style>
