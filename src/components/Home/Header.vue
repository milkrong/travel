<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点
    </div>
    <div class="header-right">
      {{ this.city }}
      <span class="iconfont arrow-down">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
.header {
  line-height: 0.86rem;
  display: flex;
  background: $bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .header-input {
    flex: 1;
    height: 0.24rem;
    line-height: 0.24rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    .arrow-down {
      font-size: 0.24rem;
    }
  }
}
</style>
