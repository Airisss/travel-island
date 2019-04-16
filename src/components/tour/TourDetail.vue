<template>
  <transition name="product">
    <div class="detail">
      <div class="scroll-bg" ref="bg"></div>
      <div class="back" @click="back" ref="back">
        <i class="iconfont">&#xe8b5;</i>
      </div>
      <div class="slider">
        <img class="slider-img" :src="detailData.detailImage" />
      </div>
      <div class="detail-title">{{detailData.introduction}}</div>
      <div class="table">
        <table>
          <tr v-for="row in tables.rows" :key="row.id">
            <th :colspan="colShow(row.id)"
                v-for="(col, index) in row.cols"
                :key="index"
                :class="{'table-title': row.id === 1}">{{col.content}}</th>
          </tr>
        </table>
      </div>
      <div class="part-item"
           v-for="(item, index) in content"
           :key="index"
           :class="{'bottom': index === content.length - 1}"
      >
        <div class="other-title">
          <h3>{{item.title}}</h3>
        </div>
        <div class="content">
          <div class="content-line"
               v-for="(line, lineIndex) in item.lines"
               :key="lineIndex"
          >
            {{line}}
          </div>
        </div>
      </div>
      <div class="order" @click="showContact">立即预定</div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

const ERR_OK = 0

export default {
  name: 'Dinner',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      id: 0,
      detailData: {},
      tables: [],
      content: []
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
    this.$emit('handleNavShow', false)
    const detailId = parseInt(this.$route.params.id)
    this.getTourDetailData(detailId)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    back () {
      this.$router.back()
    },
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 3) {
        let opacity = scrollTop / 50
        let bgOpacity = opacity > 0.6 ? 0.6 : opacity
        let backOpacity = opacity > 1 ? 1 : opacity
        this.$refs.bg.style.opacity = bgOpacity
        this.$refs.back.style.opacity = backOpacity
      } else {
        this.$refs.bg.style.opacity = 0
        this.$refs.back.style.opacity = 0
      }
    },
    showContact () {
      this.$emit('toggleContact', true)
    },
    getTourDetailData (id) {
      axios.get('/api/tours').then((res) => {
        const { code, data } = res.data
        if (code === ERR_OK) {
          const _that = this
          data.forEach(function (item, index) {
            if (item.id === id) {
              _that.id = item.id
              _that.detailData = item.detail
              _that.tables = _that.detailData.tables[0]
              _that.content = _that.detailData.content
            }
          })
        }
      })
    },
    colShow (id) {
      if (this.id === 1 || this.id === 2 || this.id === 5) {
        return id === 1 ? '3' : '1'
      } else if (this.id === 3) {
        return id === 1 ? '5' : '1'
      } else if (this.id === 4) {
        return id === 1 ? '4' : '1'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .detail
    background-color: #fff
    &.product-enter-active, &.product-leave-active
      transition: opacity 0.2s linear
    &.product-enter, &.product-leave-to
      opacity: 0
    .scroll-bg
      z-index: 10
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 50px
      background-color: #000
      opacity: 0
    .back
      z-index: 99
      position: fixed
      left: -10px
      top: 10px
      width: 30px
      height: 30px
      line-height: 30px
      margin-left: 20px
      border-radius: 50%
      background-color: $color-theme
      opacity: 0
      i
        display: block
        margin-left: 10px
        font-size: 18px
        color: #fff
    .slider
      position: relative
      width: 100%
      height: 0
      padding-bottom: 50%
      overflow: hidden
      .slider-img
        width: 100%
        overflow: hidden
    .detail-title
      padding: 28px 12px 18px
      line-height: 26px
      font-size: 14px
      color: $color-title
    .table
      padding: 0 12px
      table
        width: 100%
        color: #4e4e4e
        tr
          width: 100%
          height: 40px
          text-align: center
        th
          border: 1px solid #eee
          text-align: center
          &.table-title
            background-color: #4dc975
            color: #fff
            border: 0
            border-radius: 6px 6px 0 0
    .part-item
      &.bottom
        margin-bottom: 60px
      .other-title
        padding: 26px 12px 10px
        overflow: hidden
        h3
          float: left
          padding: 5px 10px
          font-size: 14px
          font-weight: 400
          color: #fff
          border-radius: 16px
          background-color: $color-theme
      .content
        padding: 0 12px
        .content-line
          margin: 8px 0
          line-height: 22px
    .order
      z-index: 66
      position: fixed
      left: 0
      bottom: 0
      width: 100%
      height: 45px
      line-height: 45px
      text-align: center
      font-size: 16px
      color: #fff
      background-color: $color-red
</style>
