<template>
	<!-- 悬浮操作页面 -->
	<view class="suspension">
		<view class="cart w" @click="goGreenCart">
			<image src="/static/images/green-index-cart.png"></image>
			<text class="tag">1</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goGreenCart() {
				uni.switchTab({
					url: '/pages/greenCart/greenCart'
				});
			},
		}
	}
</script>

<style lang="less" scoped>
// 悬浮窗样式
.suspension {
	position: fixed;
	bottom: 144rpx;
	left: 30rpx;
	z-index: 9;
	image {
		width: 100%;
		height: 100%;
	}
	.share {
		margin-bottom: 30rpx;
	}
	.cart {
		position: relative;
		.tag {
			width: 34rpx;
			height: 34rpx;
			line-height: 34rpx;
			text-align: center;
			color: #fff;
			border-radius:50%;
			background-color: #FC5854;
			position: absolute;
			right: 0;
			top: 0;
		}
	}
	.w {
		width: 90rpx;
		height: 90rpx;
	}
}
</style>