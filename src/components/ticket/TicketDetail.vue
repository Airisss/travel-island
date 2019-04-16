<template>
  <transition name="fade">
    <div class="detail">
      <div class="scroll-bg" ref="bg"></div>
      <div class="back" @click="back" ref="back">
        <i class="iconfont">&#xe8b5;</i>
      </div>
      <div class="slider">
        <img class="slider-img" src="https://travel-island.cdn.bcebos.com/ticket%2Fbg.jpg" />
      </div>
      <div class="detail-title">{{ticket.from}} >&nbsp;&nbsp;{{ticket.to}}</div>
      <div class="table"
           v-for="(item, index) in tables"
           :key="index"
           :class="{'top': item.id >= 2}"
      >
        <table>
          <tr v-for="(row, index) in item.rows" :key="index">
            <th v-for="(col, index) in row.cols"
                :key="index"
                :colspan="colShow(row.id, item.id)"
                :class="{'table-title': row.id === 1}"
            >
                {{col.content}}
            </th>
          </tr>
        </table>
      </div>
      <div class="part-item" v-for="item in content" :key="item.id">
        <div class="other-title">
          <h3>{{item.title}}</h3>
        </div>
        <div class="content" v-for="(line, index) in item.lines" :key="index">
          {{line}}
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
  name: 'TicketDetail',
  data () {
    return {
      ticket: {},
      tables: [],
      content: []
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
    this.$emit('handleNavShow', false)
    // 获取数据
    const detailId = parseInt(this.$route.params.id)
    this.getDetailData(detailId)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
    // 清空数据
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
      axios.get('/api/tickets').then((res) => {
        const { code, data } = res.data
        if (code === ERR_OK) {
          const _that = this
          data.forEach(function (item, index) {
            if (item.id === id) {
              _that.ticket = item
              _that.tables = _that.ticket.detail.tables
              _that.content = _that.ticket.detail.content
              console.log(_that.tables)
              console.log(_that.content)
            }
          })
        }
      })
    },
    colShow (rowId, tableId) {
      if (this.ticket.id === 1) {
        if (tableId === 1) {
          return rowId === 1 ? '6' : rowId === 2 ? '2' : '1'
        } else {
          return rowId === 1 ? '6' : rowId === 2 ? '1' : '1'
        }
      } else if (this.ticket.id === 2) {
        if (tableId === 1) {
          return rowId === 1 ? '6' : rowId === 2 ? '2' : '1'
        } else if (tableId === 2) {
          return rowId === 1 ? '6' : rowId === 2 ? '1' : '1'
        } else if (tableId === 3) {
          return rowId === 1 ? '1' : rowId === 2 ? '1' : '1'
        }
      } else if (this.ticket.id === 3) {
        if (tableId === 1) {
          return rowId === 1 ? '6' : rowId === 2 ? '3' : '3'
        } else {
          return rowId === 1 ? '4' : rowId === 2 ? '1' : '1'
        }
      } else if (this.ticket.id === 4) {
        if (tableId === 1) {
          return rowId === 1 ? '6' : rowId === 2 ? '2' : '1'
        } else {
          return rowId === 1 ? '5' : rowId === 2 ? '1' : '1'
        }
      } else if (this.ticket.id === 5) {
        if (tableId === 1) {
          return rowId === 1 ? '6' : rowId === 2 ? '2' : '1'
        } else if (tableId === 2) {
          return rowId === 1 ? '6' : rowId === 2 ? '6' : '1'
        } else if (tableId === 3) {
          return rowId === 1 ? '6' : rowId === 2 ? '3' : '1'
        }
      }
    },
    emptyData () {
      this.ticket = {}
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
    &.fade-enter-active, &.fade-leave-active
      transition: opacity 0.2s linear
    &.fade-enter, &.fade-leave-to
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
      padding-bottom: 52%
      overflow: hidden
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
      margin-bottom: 54px
      .other-title
        padding: 26px 12px 16px
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
        line-height: 24px
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
