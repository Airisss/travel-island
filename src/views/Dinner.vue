<template>
  <div class="dinner">
    <div class="dinner-title" ref="title">美食</div>
    <div class="product-title">
      <div class="left-content">
        自助餐 <span>可预订<b>{{dinners.length}}</b>余家餐饮</span>
      </div>
      <div class="right-content">
        <span>* 承诺您最优惠的价格</span>
      </div>
    </div>
    <div class="product-wrapper">
      <div class="product-item"
           :class="{'border-bottom':item.id<=dinners.length-1}"
           v-for="item in dinners"
           :key="item.id"
           @click="goDetail(item.id)">
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
import axios from 'axios'

const ERR_OK = 0

export default {
  name: 'Dinner',
  data () {
    return {
      dinners: {}
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleTitleShow)
    this.$emit('handleNavShow', true)
    // 获取数据
    this.getDinnerData()
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleTitleShow)
  },
  methods: {
    handleTitleShow () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 20) {
        let opacity = scrollTop / 45
        opacity = opacity > 1 ? 1 : opacity
        this.$refs.title.style.opacity = opacity
      } else {
        this.$refs.title.style.opacity = 0
      }
    },
    goDetail (id) {
      this.$router.push(`/dinner/${id}`)
    },
    getDinnerData () {
      axios.get('https://www.easy-mock.com/mock/5cb6d7687d203015af9dc323/api/dinner').then((res) => {
        const { code, data } = res.data
        if (code === ERR_OK) {
          this.dinners = data.dinner
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../assets/stylus/varible.styl"

  .dinner
    padding: 0 12px
    .dinner-title
      z-index: 2
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 45px
      line-height: 45px
      text-align: center
      font-size: 16px
      color: #fff
      background-color: $color-theme
      opacity: 0
      transition: opacity 0.1s
    .product-title
      margin-top: 10px
      height: 40px
      line-height: 40px
      color: $color-title
      overflow: hidden
      .left-content
        float: left
        font-size: 16px
        span
          color: $color-text-second
          b
            font-weight: 700
            color: #ff5c64
        span
          font-size: 12px
      .right-content
        float: right
        font-size: 14px
        color: $color-theme
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
            height: 35px
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
