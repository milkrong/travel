<template>
  <div class="recommend">
    <div class="recommend-title">推荐</div>
    <ui>
      <li
        class="recommend-item border-bottom"
        v-for="recommendItem of recommendList"
        :key="recommendItem.id"
      >
        <img class="recommend-item-img" :src="recommendItem.imageUrl" />

        <div class="recommend-item-info">
          <p class="recommend-item-info-title">{{ recommendItem.title }}</p>
          <p class="recommend-item-info-desc">{{ recommendItem.desc }}</p>
          <button class="recommend-item-info-button">查看详情</button>
        </div>
      </li>
    </ui>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
.recommend {
  &-title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }
  &-item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;

    &-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }
    &-info {
      flex: 1;
      padding: 0.1rem;
      min-width: 0;
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
      &-button {
        line-height: 0.44rem;
        margin-top: 0.16rem;
        background: #ff9300;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
      }
    }
  }
}
</style>
