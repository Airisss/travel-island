<template>
  <transition name="product">
    <div class="detail">
      <div class="scroll-bg" ref="bg"></div>
      <div class="back" @click="back" ref="back">
        <i class="iconfont">&#xe8b5;</i>
      </div>
      <div class="slider">
        <swiper :options="swiperOption" v-if="sliders.length>0">
          <swiper-slide v-for="slider in sliders" :key="slider.id">
            <img class="slider-img" :src="slider.url" />
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <div class="detail-title">{{currentDinner.title}}</div>
      <div class="table"
           v-for="(item,index) in tables"
           :key="index"
           :class="{'top':index===tables.length-1}"
      >
        <table>
          <tr
            v-for="row in item.rows"
            :key="row.id"
          >
            <th
                v-for="(col,index) in row.cols"
                :key="index"
                :colspan="colShow(row)"
                :class="{'table-title':row.id===1}"
            >
              {{col.content}}
            </th>
          </tr>
        </table>
      </div>
      <div class="part-item"
           v-for="(item,index) in content"
           :key="item.id"
           :class="{'bottom':index===content.length-1}"
      >
        <div class="other-title">
          <h3>{{item.title}}</h3>
        </div>
        <div class="content">
          <div class="content-line" v-for="(line,index) in item.lines" :key="index">
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
      swiperOption1: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperOption2: {
        loop: false,
        autoplay: false
      },
      currentDinner: {},
      sliders: [],
      tables: [],
      content: []
    }
  },
  computed: {
    colsLength () {
      return this.tables[0].rows[1].cols.length
    },
    swiperOption () {
      const slidersLength = this.sliders.length
      if (slidersLength > 1) {
        return this.swiperOption1
      } else {
        return this.swiperOption2
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
    this.$emit('handleNavShow', false)
    // 获取数据
    const dinnerId = parseInt(this.$route.params.id)
    this.getDetailData(dinnerId)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
    this.$emit('handleNavShow', true)
    this.emptyData()
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
    getDetailData (id) {
      axios.get('https://www.easy-mock.com/mock/5cb6d7687d203015af9dc323/api/dinner').then((res) => {
        const { code, data } = res.data
        if (code === ERR_OK) {
          const _that = this
          const realData = data.dinner
          realData.forEach(function (item, index) {
            if (item.id === id) {
              _that.currentDinner = item
              const detailData = _that.currentDinner.detail
              _that.sliders = detailData.sliders
              _that.tables = detailData.tables
              _that.content = detailData.content
            }
          })
        }
      })
    },
    colShow (col) {
      if (col.id === 1) {
        return this.colsLength.toString()
      }
    },
    emptyData () {
      this.currentDinner = {}
      this.sliders = []
      this.tables = []
      this.content = []
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
      padding-bottom: 45%
      overflow: hidden
    .slider >>> .swiper-pagination-bullet-active
        background-color: $color-theme
    .slider >>> .swiper-pagination-bullets
        top: 140px
      .slider-img
        width: 100%
        overflow: hidden
    .detail-title
      padding: 28px 12px 18px
      font-size: 14px
      color: $color-title
    .table
      padding: 0 12px
      &.top
        margin-top: 18px
      table
        width: 100%
        font-weight: 400
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
        padding: 18px 12px 5px
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
          line-height: 20px
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
