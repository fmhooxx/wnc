<template>
  <!-- 个人中心 常见问题页面 ming -->
  <view class="common-problem">
    <view class="common-problem-title">常见问题</view>
		<view class="list">
			<view class="list-item" v-for="(item, index) in list" :key="index">
				<!-- 左边 -->
				<view class="item-left">{{item.text}}</view>
				<!-- 右边 -->
				<view class="item-right">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
		</view>
		<!-- 底部操作 -->
		<view class="footer">
			<view class="footer-box">
				<!-- 左边 -->
				<view class="footer-left">
					<view class="left-img">
						<image src="/static/images/common-problem-customer-service.png"></image>
						<view class="left-text">推荐</view>
					</view>
					</view>
					<!-- 右边 -->
					<view class="footer-right">
						<view class="right-title">在线客服</view>
						<view class="right-text">08:00-22:00</view>
					</view>
				</view>
			</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
			list: [
				{
					text: '取货问题（超时未取货）'
				},
				{
					text: '快递问题'
				},
				{
					text: '订单问题（取消订单、订单信息有误）'
				},
				{
					text: '商品问题（不新鲜、少送漏送、退换货）'
				},
				{
					text: '邀请好友'
				},
				{
					text: '支付问题（支付方式、支付失败、重新支付）'
				},
				{
					text: '退款（到账时间、退款金额不符）'
				},
				{
					text: '退换货原则'
				},
				{
					text: '会员卡'
				}
			]
		};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
	vertical-align: center;
}
.common-problem {
  .common-problem-title {
    font-size: 26rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin: 23rpx 0 22rpx 32rpx;
	}
	.list {
		.list-item {
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			height: 88rpx;
			line-height: 88rpx;
			padding-left: 31rpx;
			padding-right: 34rpx;
			box-sizing: border-box;
			border-bottom: 1rpx solid rgba(236,236,236,1);
			// 左边
			.item-left {
				font-size: 32rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color:rgba(51,51,51,1);
			}
			// 右边
			.item-right {
				width: 16rpx;
				height: 28rpx;
			}
		}
	}
	// 底部操作
	.footer {
		position: fixed;
		bottom: 0;
		height: 130rpx;
		width: 100%;
		background:rgba(255,255,255,1);
		.footer-box {
			margin-top: 24rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			// 左边
			.footer-left {
				.left-img {
					position: relative;
					width: 90rpx;
					height: 90rpx;
					margin-right: 50rpx;
					.left-text {
						position: absolute;
						top: -4rpx;
						right: -20rpx;
						width: 50rpx;
						height: 26rpx;
						line-height: 26rpx;
						text-align: center;
						background:rgba(252,88,84,1);
						border-radius: 13rpx;
						font-size: 18rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color:rgba(255,255,255,1);
					}
				}
			}
			// 右边
			.footer-right {
				font-family: Source Han Sans CN;
				font-weight: 400;
				.right-title {
					font-size: 26rpx;
					color:rgba(51,51,51,1);
					margin-bottom: 14rpx;
					margin-left: 7rpx;
				}
				.right-text {
					font-size: 22rpx;
					color:rgba(102,102,102,1);
				}
			}
		}
	}
}
</style>