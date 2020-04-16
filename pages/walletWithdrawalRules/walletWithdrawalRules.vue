<template>
  <!-- 提现规则页面 ming -->
  <view class="withdrawal-rules">
    <rich-text :nodes="trules"></rich-text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      trules: ""
    };
  },
  onLoad() {
    // 提现规则接口
    this.getRules();
  },
  methods: {
    // 提现规则接口
    getRules() {
      this.$http.get("/wallet/getRules", {}).then(res => {
        this.trules = res.data.trules;
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
.withdrawal-rules {
  // width: 690rpx;
  // height: 100%;
  // padding: 28rpx 0rpx 0rpx 32rpx;
  // box-sizing: border-box;
  // font-size: 30rpx;
  // font-family: Source Han Sans CN;
  // font-weight: 400;
  // color: rgba(102, 102, 102, 1);
  font-size: 30rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #666666;
  margin-top: 28rpx;
  padding: 0 29rpx 0 32rpx;

  // view {
  //   overflow-x: hidden;
  //   overflow-y: auto;
  //   width: 690rpx;
  //   height: 100%;
  // }
}
</style>
