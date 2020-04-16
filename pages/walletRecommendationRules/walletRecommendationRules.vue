<template>
  <!-- 推荐规则页面 ming -->
  <view class="recommendation-rules">
    <view>{{rules}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      rules: ""
    };
  },
  onLoad() {
    // 推荐规则接口
    this.getRules();
  },
  methods: {
    // 推荐规则接口
    getRules() {
      this.$http.get("/wallet/getRules", {}).then(res => {
        console.log(res);
        this.rules = res.data.rules;
      });
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
.recommendation-rules {
  font-size: 30rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 28rpx;
  padding: 0 29rpx 0 32rpx;
}
</style>