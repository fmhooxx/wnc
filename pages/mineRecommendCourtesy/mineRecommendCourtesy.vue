<template>
  <!-- 我的邀请码页面 ming -->
  <view class="recommend-courtesy">
    <!-- 头像以及昵称区域 -->
    <view class="info">
      <!-- 头像 -->
      <image src="/static/images/mine-recommend-courtesy-head.png"></image>
      <!-- 昵称 -->
      <view>爱读书的小丸子</view>
    </view>
    <!-- 推荐有礼 分享规则 -->
    <view class="box">
      <view class="one">推荐有礼</view>
      <view class="two" @click="goWalletRecommendationRules">分享规则</view>
    </view>
    <!-- 邀请码 -->
    <view class="invitation-code">
      <image src="/static/images/mine-recommend-courtesy-bgi.png"></image>
      <view>452366</view>
    </view>
    <!-- 复制邀请码 -->
    <view class="footer">点击复制邀请码</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 去钱包页面的推荐规则
    goWalletRecommendationRules() {
      uni.navigateTo({
        url: '/pages/walletRecommendationRules/walletRecommendationRules'
      })
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
.recommend-courtesy {
  margin: auto;
  width: 690rpx;
  height: 820rpx;
  border: 1rpx solid rgba(210, 210, 210, 1);
  border-radius: 10rpx;
  box-sizing: border-box;
  // 头像以及昵称区域
  .info {
    display: flex;
    margin: 73rpx 0 0 40rpx;
    // 头像
    > image {
      width: 122rpx;
      height: 122rpx;
    }
    // 昵称
    > view {
      font-size: 38rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color:rgba(55,60,66,1);
      margin-left: 40rpx;
      line-height: 130rpx;
    }
  }
  // 推荐有礼 分享规则
  .box {
    margin-top: 66rpx;
    display: flex;
    justify-content: space-between;
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: bold;
    padding: 0 30rpx;
    .one {
      color: #333;
    }
    .two {
      color: #279524;
    }
  }
  // 邀请码
  .invitation-code {
    position: relative;
    width: 433rpx;
    height: 106rpx;
    margin: 164rpx 0 0 130rpx;
    > image {
      width: 433rpx;
      height: 106rpx;
    }
    > view {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-family: PingFang SC;
      color: #fff;
      font-weight: 500;
      font-size: 42rpx;
    }
  }
  // 复制邀请码
  .footer {
    width: 260rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    background:rgba(79,167,77,1);
    border-radius: 13rpx;
    font-size: 32rpx;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color:rgba(255,255,255,1);
    margin: 100rpx 0 0 216rpx;
  }
}
</style>