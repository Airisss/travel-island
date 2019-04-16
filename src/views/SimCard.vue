<template>
  <div class="dinner">
    <div class="dinner-title" ref="title">
      Sim Card
      <i class="iconfont" @click="back">&#xe8b5;</i>
    </div>
    <div class="dinner-wrapper">
      <div class="function">
        <div class="function-item">
          <h3>SIM卡大小</h3>
          <span>三合一免剪卡</span>
        </div>
        <div class="function-item">
          <h3>支持热</h3>
          <span>点部分支持</span>
        </div>
        <div class="function-item">
          <h3>电话卡类型</h3>
          <span>原生卡</span>
        </div>
      </div>
      <div class="part-item">
        <div class="other-title">
          <h3>亚洲通用SIM卡</h3>
        </div>
        <div class="content">
          <div class="content-line">香港、澳门、台湾、日本、韩国</div>
          <div class="content-line">泰国、印尼、菲律宾、柬埔寨、马来西亚、老挝</div>
        </div>
      </div>
      <div class="part-item">
        <div class="other-title">
          <h3>欧洲多国通用SIM卡</h3>
        </div>
        <div class="content">
            <div class="content-line">A. 奥地利、爱尔兰、爱沙尼亚</div>
            <div class="content-line">B. 保加利亚、冰岛、波兰、比利时</div>
            <div class="content-line">D. 丹麦、德国</div>
            <div class="content-line">F. 法国、芬兰、梵蒂冈、法属圭亚啦</div>
            <div class="content-line">G. 瓜德罗普</div>
            <div class="content-line">H. 荷兰</div>
            <div class="content-line">J. 加那利群岛、捷克</div>
            <div class="content-line">K. 克罗埃西亚</div>
            <div class="content-line">L. 拉脱维亚、卢森堡、留尼旺岛、列支敦士登、立陶宛、罗马尼亚</div>
            <div class="content-line">M. 马提尼亚、马尔他、马德拉群岛、马约特</div>
            <div class="content-line">N. 南赛普勒斯、挪威</div>
            <div class="content-line">P. 葡萄牙</div>
            <div class="content-line">R. 瑞典</div>
            <div class="content-line">S. 圣马丁岛、斯洛维尼亚、圣马利诺共和国</div>
            <div class="content-line">X. 希腊、西班牙、匈牙利</div>
            <div class="content-line">Y. 英国、亚速尔群岛、义大利</div>
            <div class="content-line">Z. 直布罗陀</div>

        </div>
      </div>
    </div>
    <div class="order" @click="showContact">立即预定</div>
  </div>
</template>

<script>
export default {
  name: 'Dinner',
  data () {
    return {}
  },
  activated () {
    window.addEventListener('scroll', this.handleTitleShow)
    this.$emit('handleNavShow', false)
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
    back () {
      this.$router.back()
    },
    showContact () {
      this.$emit('toggleContact', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../assets/stylus/varible.styl"

  .dinner
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
      i
        position: absolute
        left: 15px
        top: 0
        font-size: 18px
        font-weight: 700
        color: #fff
    .dinner-wrapper
      margin: 20px 12px
      box-shadow: 0px 6px 10px #eee
      border-radius: 8px
      .function
        display: flex
        padding: 20px 12px
        .function-item
          flex: 1
          padding: 0 10px 16px
          height: 50px
          border-radius: 6px
          background: $color-theme
          color: #fff
          &:nth-child(1)
            background: linear-gradient(to right, #6add7b, #58d077)
          &:nth-child(2)
            margin: 0 5px
            background: linear-gradient(to right, #51c4ff, #31a4ff)
          &:nth-child(3)
            background: linear-gradient(to right, #b98eff, #9d6dff)
          h3
            line-height: 32px
            font-size: 12px
            font-weight: 400
          span
            font-size: 14px
            font-weight: 700
      .part-item
        &:last-child
          margin-bottom: 60px
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
          padding: 5px 15px 12px
          line-height: 24px
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
