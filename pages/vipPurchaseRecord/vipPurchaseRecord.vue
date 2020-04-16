<template>
  <!-- from ming 购买记录页面 -->
  <view class="give-record">
    <view class="head">
      <view class="month">购买期限(月)</view>
      <view>金额(元)</view>
      <view>购买时间</view>
    </view>
    <view class="footer">
      <view class="content" v-for="(item, index) in buyList" :key="index">
        <view>{{item.day}}</view>
        <view>{{item.total}}</view>
        <view>{{item.strTime}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 购买记录数据
      buyList: [],
      user_id: ""
    };
  },
  onLoad() {
    this.user_id = uni.getStorageSync("user_id");
    // 购买记录页面接口
    this.getBuy();
  },
  methods: {
    // 购买记录页面接口
    getBuy() {
      this.$http
        .get("/memberPackage/getBuy", { params: { user_id: this.user_id } })
        .then(res => {
          console.log(res);
          this.buyList = res.data;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.give-record {
  .head {
    width: 690rpx;
    height: 62rpx;
    margin: 20rpx auto;
    background-color: #fff;
    border-radius: 10rpx;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    > view {
      font-size: 28rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333;
      width: 33.33%;
    }
  }
  .footer {
    border-radius: 10rpx;
    width: 690rpx;
    height: 100%;
    margin: auto;
    box-sizing: border-box;
    background-color: #fff;
    .content {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      border-bottom: 1rpx solid #f1f1f1;
      > view {
        height: 80rpx;
        line-height: 80rpx;
        font-size: 28rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333;
        width: 33.33%;
      }
    }
  }
}
</style>
