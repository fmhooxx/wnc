<template>
  <!-- from ming 我的订单页面-->
  <view class="order">
		<!-- 超市便利订单 -->
		<view class="order-list" @click="goExpect">
			<view class="left">
				<image src="/static/images/myOrder-1.png"></image>
			</view>
			<view class="right">
				<view class="right-text">超市便利</view>
					<image src="/static/images/arrow-right.png"></image>
			</view>
		</view>
		<!-- 绿色健康订单 -->
		<view class="order-list" @click="goGreenOrderList">
			<view class="left">
				<image src="/static/images/myOrder-2.png"></image>
			</view>
			<view class="right">
				<view class="right-text">绿色健康</view>
					<image src="/static/images/arrow-right.png"></image>
			</view>
		</view>
		<!-- 电商助农订单 -->
		<view class="order-list" @click="goExpect">
			<view class="left">
				<image src="/static/images/myOrder-3.png"></image>
			</view>
			<view class="right">
				<view class="right-text">电商助农</view>
					<image src="/static/images/arrow-right.png"></image>
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
		// 去绿色健康订单页面
		goGreenOrderList() {
			uni.navigateTo({
        url: "/pages/greenOrderList/greenOrderList"
      });
		},
		// 去敬请期待页面
		goExpect() {
			uni.navigateTo({
        url: "/pages/expect/expect"
      });
		}
	},
};
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.order {
	margin-top: 40rpx;
	// 我的订单样式
	.order-list {
		height: 100rpx;
		padding: 0 30rpx 0 50rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rpx;
		border-bottom: 2rpx solid rgba(241,241,241,1);
		background-color: #fff;
		// 订单左边样式
		.left {
			width: 70rpx;
			height: 70rpx;
		}
		// 订单右边样式
		.right {
			display: flex;
			justify-content: center;
			align-items: center;
			// 右边文字样式
			.right-text {
				font-size: 26rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color:rgba(51,51,51,1);
			}
			// 右箭头样式
			image {
				width: 13rpx;
				height: 23rpx;
				margin-left: 22rpx;
			}
		}
	}
}
</style>