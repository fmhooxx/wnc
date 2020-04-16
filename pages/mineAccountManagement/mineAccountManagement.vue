<template>
  <!-- 我的用户管理 ming -->
  <view class="account-management">
    <view class="management-box">
      <!-- 左边 -->
      <view class="box-left">我的账户</view>
      <!-- 右边 -->
      <view class="box-right">1234567890</view>
    </view>
    <view class="management-box">
      <!-- 左边 -->
      <view class="box-left">我的账户</view>
      <!-- 右边 -->
      <view class="box-right">
				<view class="right-text">去绑定</view>
				<view class="right-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.account-management {
  margin-top: 20rpx;
  background: rgba(255, 255, 255, 1);
  .management-box {
    display: flex;
    justify-content: space-between;
    height: 100rpx;
    line-height: 100rpx;
    font-size: 26rpx;
    font-family: PingFang;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    padding: 0 30rpx;
    border-bottom: 2rpx solid #f1f1f1;
    // 左边
    .box-left {
			font-weight: 400;
    }
    // 右边
    .box-right {
			display: flex;
      font-weight: 400;
			color: rgba(102, 102, 102, 1);
			.right-text {
				font-size: 24rpx;
				color:rgba(39,149,36,1);
				margin-right: 14rpx;
			}
			.right-img {
				width: 12rpx;
				height: 22rpx;
			}
    }
  }
}
</style>