<template>
  <!-- 提现进度页面 ming -->
  <view class="success">
		<image src="/static/images/paySuccess.png"></image>
		<button>完成</button>
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

<style>
page {
	background-color: #fff;
}
</style>

<style lang="less" scoped>
.success {
	image {
		width: 90rpx;
		height: 90rpx;
		margin: 100rpx 330rpx 80rpx;
	}
	button {
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		background:rgba(39,149,36,1);
		border-radius:40rpx;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color:rgba(255,254,254,1);
	}
}
</style>