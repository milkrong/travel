<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ui>
      <li
        class="weekend-item border-bottom"
        v-for="recommendItem of list"
        :key="recommendItem.id"
      >
        <div class="weekend--item-img-wrapper">
          <img class="weekend-item-img" :src="recommendItem.imgUrl" />
        </div>
        <div class="weekend-item-info">
          <p class="weekend-item-info-title">{{ recommendItem.title }}</p>
          <p class="weekend-item-info-desc">{{ recommendItem.desc }}</p>
        </div>
      </li>
    </ui>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.weekend {
  &-title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }
  &-item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
  }
  &-item {
    &-img {
      width: 100%;
    }
    &-info {
      padding: 0.1rem;

      &-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        @include ellipsis;
      }
      &-desc {
        line-height: 0.4rem;
        color: #ccc;
        @include ellipsis;
      }
    }
  }
}
</style>
