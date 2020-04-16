<template>
  <!-- from ming 赠送记录页面 -->
  <view class="give-record">
    <view class="head">
      <view>赠送人</view>
      <view>赠送期限(月)</view>
      <view>赠送时间</view>
    </view>
    <view class="footer">
      <view class="content" v-for="(item, index) in giveList" :key="index">
        <view>{{item.name}}</view>
        <view>{{item.day}}</view>
        <view>{{item.strTime}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 会员赠送记录列表数据
      giveList: [],
      user_id: ""
    };
  },
  onLoad() {
    this.user_id = uni.getStorageSync("user_id");
    // 会员赠送记录接口
    this.getGive();
  },
  methods: {
    getGive() {
      this.$http
        .get("/memberPackage/getGive", { params: { user_id: this.user_id } })
        .then(res => {
          console.log(res);
          this.giveList = res.data;
          console.log(this.giveList);
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
