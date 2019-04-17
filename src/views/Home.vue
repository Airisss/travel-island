<template>
  <div class="home">
    <div class="top-info">
      <img class="logo" src="https://travel-island.cdn.bcebos.com/dinner%2Ftravel.jpg" />
      <div class="info">
        <span class="name">Travel Island</span><br/>
        <span class="desc">自助餐 | 车船票 | Sim卡 | 景点 | 外币兑换</span>
      </div>
      <div class="contact" @click="showContact">立即咨询</div>
    </div>
    <slider :sliders="sliders"></slider>
    <top-nav @toggleContact="showContact"></top-nav>
    <coupon @toggleContact="showContact" @accessCoupon="accessCoupon"></coupon>
    <events @toggleContact="showContact"></events>
    <category @toggleContact="showContact"></category>
    <product :dinner="dinner"></product>
    <access :accessed="accessed"></access>
  </div>
</template>

<script>
import Slider from '@/components/home/Slider.vue'
import TopNav from '@/components/home/TopNav.vue'
import Coupon from '@/components/home/Coupon.vue'
import Events from '@/components/home/Events.vue'
import Category from '@/components/home/Category.vue'
import Product from '@/components/home/Product.vue'
import Access from '@/components/common/Access.vue'
import axios from 'axios'
import { setTimeout } from 'timers'

const ERR_OK = 0

export default {
  name: 'Home',
  data () {
    return {
      sliders: [],
      dinner: [],
      accessed: false
    }
  },
  created () {
    this.getSlidersData()
    this.getDinnerData()
  },
  methods: {
    showContact () {
      this.$emit('toggleContact', true)
    },
    getSlidersData () {
      axios.get('https://www.easy-mock.com/mock/5cb6d7687d203015af9dc323/api/sliders').then((res) => {
        const { code, data } = res.data
        if (code === ERR_OK) {
          this.sliders = data.sliders
        }
      })
    },
    getDinnerData () {
      axios.get('https://www.easy-mock.com/mock/5cb6d7687d203015af9dc323/api/dinner').then((res) => {
        const { code, data } = res.data
        if (code === ERR_OK) {
          this.dinner = data.dinner
        }
      })
    },
    accessCoupon (index) {
      let timer = null
      if (timer) {
        return
      }
      timer = setTimeout(() => {
        this.accessed = true
        setTimeout(() => {
          this.accessed = false
        }, 1200)
      }, 400)
    }
  },
  components: {
    Slider,
    TopNav,
    Coupon,
    Events,
    Category,
    Product,
    Access
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../assets/stylus/varible.styl"

  .top-info
    padding: 2px 12px;
    width: 100%
    height: 54px
    box-sizing: border-box
    background-color: #fff
    .logo
      margin-top: 5px
      float: left
      width 40px
      height: 40px
      border-radius: 50%
    .info
      margin-top: 10px
      margin-left: 5px
      float: left
      .name
        font-size: 16px
        font-weight: 700
        color: $color-title
      .desc
        line-height: 20px
        font-size: 10px
        color: $color-text
    .contact
      margin-top: 10px
      float: right
      padding: 8px 10px
      font-size: 14px
      color: #fff
      border-radius: 4px
      background-color: $color-theme
</style>
