<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Home/Header'
import HomeSwiper from '@/components/Home/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
