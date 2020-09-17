<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ui>
      <li
        class="weekend-item border-bottom"
        v-for="recommendItem of recommendList"
        :key="recommendItem.id"
      >
        <div class="weekend--item-img-wrapper">
          <img class="weekend-item-img" :src="recommendItem.imageUrl" />
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
  data() {
    return {
      recommendList: [
        {
          id: '1',
          imageUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/a3e76337-0286-4bff-b6bb-55a18b9b289f.jpg_r_480x320x95_42aed1f3.jpg',
          title: '云南大理+丽江',
          desc: '维纳斯皇家酒店'
        },
        {
          id: '2',
          imageUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/a3e76337-0286-4bff-b6bb-55a18b9b289f.jpg_r_480x320x95_42aed1f3.jpg',
          title: '云南大理+丽江',
          desc: '维纳斯皇家酒店'
        },
        {
          id: '3',
          imageUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/a3e76337-0286-4bff-b6bb-55a18b9b289f.jpg_r_480x320x95_42aed1f3.jpg',
          title: '云南大理+丽江',
          desc: '维纳斯皇家酒店'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.weekend {
  &-title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }
  &-item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
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
