<template>
  <div class="wrapper">
    <swiper class="swipper" :options="swiperOption">
      <swiper-slide v-for="swiper of swiperList" :key="swiper.id">
        <img class="swiper-image" :src="swiper.imageUrl" alt="post1" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        {
          id: 1,
          imageUrl:
            'https://via.placeholder.com/640x200?text=Visit+Blogging.com+Now'
        },
        {
          id: 2,
          imageUrl:
            'https://via.placeholder.com/640x200?text=Visit+Blogging.com+Now'
        }
      ]
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
