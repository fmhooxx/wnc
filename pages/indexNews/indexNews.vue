<template>
	<!-- 首页消息页面 ming -->
	<view class="index-news-box">
		<!-- 有消息区域 -->
		<view v-if="isBox" class="index-news">
			<view class="news-box" @click="goIndexNewsDetails">
				<!-- 左边 -->
				<view class="news-left">
					<image src="/static/images/index-news.png"></image>
					<!-- 小圆点 -->
					<view class="dot"></view>
				</view>
				<!-- 右边 -->
				<view class="new-right">
					<!-- 右边的头部 -->
					<view class="right-head">
						<!-- 消息类型 -->
						<view class="type">系统消息</view>
						<!-- 消息时间 -->
						<view class="timer">2019/10/22</view>
					</view>
					<!-- 右边的底部 -->
					<view class="right-footer">【APP上线】蛙农场APP今日上线啦，主要功能板块11</view>
				</view>
			</view>
			<view class="news-box" @click="goIndexNewsDetails">
				<!-- 左边 -->
				<view class="news-left">
					<image src="/static/images/index-news.png"></image>
					<!-- 小圆点 -->
					<view class="dot"></view>
				</view>
				<!-- 右边 -->
				<view class="new-right">
					<!-- 右边的头部 -->
					<view class="right-head">
						<!-- 消息类型 -->
						<view class="type">系统消息</view>
						<!-- 消息时间 -->
						<view class="timer">2019/10/22</view>
					</view>
					<!-- 右边的底部 -->
					<view class="right-footer">【APP上线】蛙农场APP今日上线啦，主要功能板块11</view>
				</view>
			</view>
		</view>
		<!-- 没有消息区域 -->
		<view v-else class="no-index-news">
			<image src="/static/images/index-news-bgi.png"></image>
			<view class="info">这里最近一条消息都没有</view>
			<view @click="refresh">刷新</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 控制有消息和无消息内容的切换
				isBox: false
			};
		},
		methods: {
			// 去消息详情页
			goIndexNewsDetails() {
				uni.navigateTo({
					url: '/pages/indexNewsDetails/indexNewsDetails'
				})
			},
			// 刷新
			refresh() {
				this.isBox = true
			}
		}
	};
</script>

<style lang="less" scoped>
.index-news-box {
	position: relative;
	// 有消息区域
	.index-news {
		.news-box {
			display: flex;
			height: 120rpx;
			border-top: 2rpx solid #f1f1f1;
			background-color: #fff;
			// 左边
			.news-left {
				position: relative;
				width: 75rpx;
				height: 75rpx;
				background:rgba(241,255,241,1);
				border-radius:50%;
				margin: 21rpx 21rpx 24rpx 31rpx;
				box-sizing: border-box;
				image {
					width: 41rpx;
					height: 46rpx;
					border-radius: 50%;
					margin: 15rpx 17rpx 14rpx 17rpx;
					vertical-align: middle;
				}
				// 小圆点
				.dot {
					position: absolute;
					top: 9rpx;
					right: 0;
					width: 12rpx;
					height: 12rpx;
					background:rgba(255,0,0,1);
					border-radius: 50%;
				}
			}
			// 右边
			.new-right {
				// 右边的头部
				.right-head {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 14rpx 0 8rpx 12rpx;
					// 消息类型
					.type {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
					}
					// 消息时间
					.timer {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color:rgba(153,153,153,1);
					}
				}
				// 右边的底部
				.right-footer {
					width: 612rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color:rgba(153,153,153,1);
				}
			}
		}
	}
	// 没有消息区域
	.no-index-news {
		width: 335rpx;
		height: 412rpx;
		position: absolute;
		top: 264rpx;
		left: 208rpx;
		text-align: center;
		> image {
			width: 355rpx;
			height: 290rpx;
		}
		> view {
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #279524;
			font-size: 28rpx;
		}
		.info {
			margin: 44rpx 0 28rpx 0;
			font-size: 30rpx;
			color: #666;
		}
	}
}
</style>
