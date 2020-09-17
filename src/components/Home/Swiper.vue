<template>
  <div class="wrapper">
    <swiper class="swiper" :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="swiper of list" :key="swiper.id">
        <img class="swiper-image" :src="swiper.imgUrl" alt="post1" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  .swiper-image {
    width: 100%;
  }
}
</style>
