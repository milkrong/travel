<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-image">
            <img class="icon-image-content" :src="icon.imageUrl" />
          </div>
          <p class="icon-title">{{ icon.title }}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <div class="icon-image">
            <img
              class="icon-image-content"
              src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
            />
          </div>
          <p class="icon-title">景点门票</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      swiperOptions: {
        autoplay: false
      },
      iconsList: [
        {
          id: '1',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          title: '度假'
        },
        {
          id: '2',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '景点门票'
        },
        {
          id: '3',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '度假'
        },
        {
          id: '4',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '度假'
        },
        {
          id: '5',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '景点门票'
        },
        {
          id: '6',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '度假'
        },
        {
          id: '7',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '度假'
        },
        {
          id: '8',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '度假'
        },
        {
          id: '9',
          imageUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          title: '度假'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.icons {
  margin-top: 0.2rem;
  /deep/ .swiper-container {
    height: 0;
    padding-bottom: 50%;
    background: #eee;
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    background: #fff;

    &-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      &-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    &-title {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkText;
      text-align: center;
      @include ellipsis;
    }
  }
}
</style>
