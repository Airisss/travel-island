<template>
  <div class="dollar">
    <div class="dollar-title">目前可兑换币种</div>
    <div class="dollar-wrapper">
      <ul>
        <li class="dollar-rows">
          <div class="dollar-item border">
            <h3>GBP</h3>
            <p>英镑</p>
          </div>
          <div class="dollar-item">
            <h3>USD</h3>
            <p>美元</p>
          </div>
          <div class="dollar-item">
            <h3>HKD</h3>
            <p>港币</p>
          </div>
          <div class="dollar-item">
            <h3>TWD</h3>
            <p>新台币</p>
          </div>
          <div class="dollar-item">
            <h3>CHF</h3>
            <p>瑞士法郎</p>
          </div>
        </li>
        <li class="dollar-rows">
          <div class="dollar-item">
            <h3>SGD</h3>
            <p>新加坡元</p>
          </div>
          <div class="dollar-item">
            <h3>SEK</h3>
            <p>瑞典克朗</p>
          </div>
          <div class="dollar-item">
            <h3>NOK</h3>
            <p>挪威克朗</p>
          </div>
          <div class="dollar-item">
            <h3>JPY</h3>
            <p>日元</p>
          </div>
          <div class="dollar-item">
            <h3>MOP</h3>
            <p>澳门元</p>
          </div>
        </li>
        <li class="dollar-rows">
          <div class="dollar-item">
            <h3>DKK</h3>
            <p>丹麦克朗</p>
          </div>
          <div class="dollar-item">
            <h3>CAD</h3>
            <p>加拿大元</p>
          </div>
          <div class="dollar-item">
            <h3>EUR</h3>
            <p>欧元</p>
          </div>
          <div class="dollar-item">
            <h3>AUD</h3>
            <p>澳大利亚元</p>
          </div>
          <div class="dollar-item">
            <h3>THP</h3>
            <p>泰国铢</p>
          </div>
        </li>
        <li class="dollar-rows">
          <div class="dollar-item">
            <h3>PHP</h3>
            <p>菲律宾比索</p>
          </div>
          <div class="dollar-item">
            <h3>KRW</h3>
            <p>韩国元</p>
          </div>
          <div class="dollar-item">
          </div>
          <div class="dollar-item">
          </div>
          <div class="dollar-item">
          </div>
        </li>
      </ul>
    </div>
    <button class="order-now" @click="showContact">即时获得</button>
    <h5 class="tips">*温馨提示：汇率即时变动，请您在有效时间内做出兑换决定， 一旦交易，不能撤销</h5>
  </div>
</template>

<script>
export default {
  name: 'Dollar',
  methods: {
    showContact () {
      this.$emit('toggleContact', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../assets/stylus/varible.styl"

  .dollar
    text-align: center
    .dollar-title
      width: 100%
      height: 40px
      line-height: 40px
      text-align: center
      font-size: 16px
      color: #fff
      background-color: $color-theme
    .dollar-wrapper
      padding: 12px 12px
      .dollar-rows
        display: flex
        .dollar-item
          flex: 1
          text-align: center
          margin: 16px 0 0
          h3
            margin: 0 auto 8px
            width: 50px
            height: 50px
            line-height: 50px
            text-align: center
            border: 1px solid $color-theme
            border-radius: 6px
            font-size: 16px
            color: $color-theme
          p
            font-size: 12px
            color: $color-text-second
    .order-now
      height: 40px
      width: 80%
      border-radius: 20px
      margin: 24px auto 12px
      background-color: $color-blue
      font-size: 14px
      font-weight: 400
      color: #fff
      box-shadow: 0px 6px 10px #eee
    .tips
      padding: 0 40px
      font-size: 12px
      font-weight: 400
      line-height: 16px
      color: $color-text-second
</style>
