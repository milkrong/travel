<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/components/City/Header'
import CitySearch from '@/components/City/Search'
import CityList from '@/components/City/List'
import CityAlphabet from '@/components/City/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGetCity)
    },
    handleGetCity(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange(letter) {
      this.letter = letter
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped></style>
