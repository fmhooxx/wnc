<template>
  <!-- 消息详情页面 ming -->
  <view class="news-box">
    <view class="box-title">蛙农场APP上线啦</view>
    <view
      class="box-text"
    >蛙农场APP今日上线啦，主要功能板块电商助农、超市便利、绿色健康、乐享周末四个板块，包含吃喝玩乐四个方面，让你的生活丰富多彩。蛙农场包揽你的健康生活。</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
.news-box {
  .box-title {
    text-align: center;
    margin: 40rpx 0 26rpx 0;
    font-size: 30rpx;
    font-family: PingFang;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
  }
  .box-text {
    font-size: 26rpx;
    line-height: 36rpx;
    font-family: PingFang;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin: 0 30rpx 0;
    text-indent: 2em;
  }
}
</style>