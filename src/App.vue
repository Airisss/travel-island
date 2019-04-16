<template>
  <div id="app">
    <keep-alive>
      <router-view @handleNavShow="handleNavShow" @toggleContact="toggleContact" />
    </keep-alive>
    <bottom-nav v-if="navShow"></bottom-nav>
    <contact v-show="handleContactShow" @toggleContact="toggleContact"></contact>
  </div>
</template>

<script>
import BottomNav from '@/components/home/BottomNav.vue'
import Contact from '@/components/common/Contact.vue'

export default {
  data () {
    return {
      navShow: true,
      handleContactShow: false
    }
  },
  methods: {
    handleNavShow (show) {
      this.navShow = show
    },
    toggleContact (show) {
      this.handleContactShow = show
    }
  },
  components: {
    BottomNav,
    Contact
  }
}
</script>

<style lang="stylus"></style>
