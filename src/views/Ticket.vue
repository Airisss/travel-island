<template>
  <div class="ticket">
    <div class="ticket-title" ref="title">车船票</div>
    <div class="product-title">
      <div class="left-content">
        港澳船票 <span>可预订<b>{{tickets.length}}</b>余趟航班</span>
      </div>
      <div class="right-content">
        <span>* 承诺您最优惠的价格</span>
      </div>
    </div>
    <div class="product-wrapper">
      <div class="product-item"
           v-for="(item, index) in tickets"
           :key="index"
           @click="goDetail(item.id)">
        <div class="line">{{item.from}}<i class="iconfont">&#xe8ca;</i> {{item.to}}</div>
        <div class="desc">
          <ul>
            <li>时间:&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</li>
            <li>航线:&nbsp;&nbsp;&nbsp;&nbsp;{{item.line}}</li>
            <li>价格:&nbsp;&nbsp;&nbsp;&nbsp;<b>{{item.price}}</b></li>
          </ul>
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
      tickets: []
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleTitleShow)
    this.$emit('handleNavShow', true)
    // 获取数据
    this.getTicketsData()
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
      this.$router.push(`/ticket/${id}`)
    },
    getTicketsData () {
      axios.get('https://www.easy-mock.com/mock/5cb6d7687d203015af9dc323/api/tickets').then((res) => {
        const { code, data } = res.data
        if (code === ERR_OK) {
          this.tickets = data.tickets
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../assets/stylus/varible.styl"

  .ticket
    padding: 0 12px
    .ticket-title
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
        margin-bottom: 83px
      .product-item
        padding: 10px 0 0
        margin-bottom: 12px
        border-radius: 6px
        box-shadow: 0px 6px 10px #eee
        &.last-of-type
          margin-bottom: 100px
        .line
          padding: 0 20px
          line-height: 40px
          background-color: $color-theme
          color: #fff
          overflow: hidden
          border-radius: 6px 6px 0 0
        .desc
          li
            padding: 15px 20px
            b
              font-weight: 700
              color: $color-red
</style>
