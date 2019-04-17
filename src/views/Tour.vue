<template>
  <div class="dinner">
    <div class="dinner-title" ref="title">跟团游</div>
    <div class="product-title">
      <div class="left-content">
        跟团游 <span>可预订<b>{{tours.length}}</b>余款组团旅行服务</span>
      </div>
      <div class="right-content">
        <span>* 承诺您最优惠的价格</span>
      </div>
    </div>
    <div class="tour-category">
      <div class="category-item">
        <h5>Hong Kong</h5>
        <span>香港</span>
        <p>Go</p>
        <i class="iconfont">&#xe88f;</i>
      </div>
      <div class="category-item">
        <h5>Zhuhai</h5>
        <span>珠海</span>
        <p>Go</p>
        <i class="iconfont">&#xe8ce;</i>
      </div>
      <div class="category-item">
        <h5>Bangkok</h5>
        <span>曼谷</span>
        <p>Go</p>
        <i class="iconfont">&#xe902;</i>
      </div>
    </div>
    <div class="tour-name">
      <div class="name-item" v-for="(item, index) in cities" :key="index">{{item}}</div>
    </div>
    <div class="product-wrapper">
      <div class="product-item"
           v-for="(item, index) in tours"
           :key="index"
           @click="goDetail(item.id)"
           :class="{'border-bottom': item.id < tours.length}">
        <img :src="item.image" />
        <div class="desc">
          <h3>{{item.title}}</h3>
          <p>{{item.brief}}</p>
          <h5 class="type">类型： {{item.type}}</h5>
          <div class="price">
            <span>{{item.price}} <b>起/份</b></span>
          </div>
          <div class="btn">查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const ERR_OK = 0

export default {
  name: 'Tour',
  data () {
    return {
      tours: [],
      cities: ['澳门', '台湾', '三亚', '泰国']
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleTitleShow)
    this.$emit('handleNavShow', true)
    // 获取数据
    this.getToursData()
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
      this.$router.push(`/tour/${id}`)
    },
    getToursData () {
      axios.get('https://www.easy-mock.com/mock/5cb6d7687d203015af9dc323/api/tours').then((res) => {
        const { code, data } = res.data
        if (code === ERR_OK) {
          this.tours = data.tours
          console.log(data)
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
    .tour-category
      display: flex
      width: 100%
      height: 90px
      .category-item
        &:nth-child(1)
          background: linear-gradient(to right, #6add7b, #58d077)
        &:nth-child(2)
          margin: 0 10px
          background: linear-gradient(to right, #51c4ff, #31a4ff)
        &:nth-child(3)
          background: linear-gradient(to right, #b98eff, #9d6dff)
        position: relative
        flex: 1
        padding: 10px
        border-radius: 5px
        font-size: 16px
        color: #fff
        box-shadow: 0px 6px 10px #eee
        overflow: hidden
        h5
          font-size: 14px
        span
          display: block
          margin: 6px 0 18px
        p
          font-size: 14px
        i
          position: absolute
          right: -2px
          bottom: -8px
          font-size: 60px
          color: rgba(255, 255, 255, .36)
    .tour-name
      display: flex
      padding: 10px 0
      height: 36px
      .name-item
        &:first-child
          margin-left: 0
          background-color: $color-theme
        &:nth-child(2)
          background-color: $color-blue
        &:nth-child(3)
          background-color: $color-theme
        &:nth-child(4)
          background-color: $color-yellow
        flex: 1
        margin-left: 10px
        background-color: #fff
        border-radius: 5px
        box-shadow: 0px 6px 10px #eee
        line-height: 36px
        text-align: center
        color: #fff
    .product-wrapper
      &:last-child
        margin-bottom: 70px
      .product-item
        position: relative
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
            height: 34px
            line-height: 18px
            font-size: 12px
            color: $color-text
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
          .type
            font-size: 12px
            font-weight: 400
            color: $color-text-second
            margin-top: 10px
          .price
            margin-top: 12px
            span
              color: $color-theme
              b
                font-size: 10px
                color: $color-text-second
          .btn
            position: absolute
            right: 0
            bottom: 15px
            padding: 6px 10px
            background-color: $color-theme
            border-radius: 10px
            font-size: 12px
            color: #fff
</style>
