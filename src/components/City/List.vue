<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="section">
        <div class="section-title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
        </div>
        <div class="section-title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
        </div>
        <div class="section-title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
.city-list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.section-title {
  line-height: 0.54rem;
  font-size: 0.26rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
}
.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  .button-wrapper {
    width: 33.33%;
    float: left;
    .button {
      text-align: center;
      padding: 0.1rem 0;
      margin: 0.1rem 0.1rem;
      border: 1px solid #ccc;
      border-radius: 0.06rem;
    }
  }
}
.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>
