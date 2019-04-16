<template>
  <div>
    <div class="slider-wrapper" v-if="sliders.length > 1">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in sliders" :key="item.id">
          <img class="slider-img" :src="item.url" @click="goToPage(item.id)" />
        </swiper-slide>
        <!-- <swiper-slide><img class="slider-img" src="./banner-01.jpg" @click="goTourPage" /></swiper-slide>
        <swiper-slide><img class="slider-img" src="./banner-02.jpg" @click="goTicketPage" /></swiper-slide> -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    sliders: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    goToPage (id) {
      if (id === 1) {
        this.goTourPage()
      } else {
        this.goTicketPage()
      }
    },
    goTourPage () {
      this.$router.push('/tour')
    },
    goTicketPage () {
      this.$router.push('/ticket')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../assets/stylus/varible.styl"

  .slider-wrapper >>> .swiper-pagination-bullet-active
    background-color: $color-theme
  .slider-wrapper
    width: 100%
    height: 0
    padding-bottom: 55%
    overflow: hidden
    background-color: #f7f7f7
    .slider-img
      width: 100%
</style>
