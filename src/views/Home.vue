<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Home/Header'
import HomeSwiper from '@/components/Home/Swiper'
import HomeIcons from '@/components/Home/Icons'
import HomeRecommend from '@/components/Home/Recommend'
import HomeWeekend from '@/components/Home/Weekend'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      prevCity: '',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted() {
    this.prevCity = this.city
    this.getHomeData()
  },
  activated() {
    if (this.prevCity !== this.city) {
      this.prevCity = this.city
      this.getHomeData()
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeData: function() {
      axios
        .get(`/api/index.json?city=${this.city}`)
        .then(this.getHomeDataSuccess)
    },
    getHomeDataSuccess: function(res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>
