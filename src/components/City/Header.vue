<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
.header {
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  background: $bgColor;
  position: relative;
  .back-icon {
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
  }
}
</style>
