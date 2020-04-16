<template>
  <!-- 某某的好友页面 ming -->
  <view class="friend-list">
		<view class="list-item">
			<!-- 左边区域 -->
			<view class="item-left">
				<!-- 左边的头像区域 -->
				<view class="left-img">
					<image src="/static/images/recommendation-details-head.png"></image>
				</view>
				<!-- 左边的文字区域 -->
				<view class="left-content">
					<view class="content-title">小蛙123</view>
					<view class="content-text">
						推荐绑定时间:<text>2019-10-11 22:00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="list-item">
			<!-- 左边区域 -->
			<view class="item-left">
				<!-- 左边的头像区域 -->
				<view class="left-img">
					<image src="/static/images/recommendation-details-head.png"></image>
				</view>
				<!-- 左边的文字区域 -->
				<view class="left-content">
					<view class="content-title">小蛙123</view>
					<view class="content-text">
						推荐绑定时间:<text>2019-10-11 22:00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="list-item">
			<!-- 左边区域 -->
			<view class="item-left">
				<!-- 左边的头像区域 -->
				<view class="left-img">
					<image src="/static/images/recommendation-details-head.png"></image>
				</view>
				<!-- 左边的文字区域 -->
				<view class="left-content">
					<view class="content-title">小蛙123</view>
					<view class="content-text">
						推荐绑定时间:<text>2019-10-11 22:00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="list-item">
			<!-- 左边区域 -->
			<view class="item-left">
				<!-- 左边的头像区域 -->
				<view class="left-img">
					<image src="/static/images/recommendation-details-head.png"></image>
				</view>
				<!-- 左边的文字区域 -->
				<view class="left-content">
					<view class="content-title">小蛙123</view>
					<view class="content-text">
						推荐绑定时间:<text>2019-10-11 22:00</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
			user_id: ''
		};
	},
	onLoad() {
		this.user_id = uni.getStorageSync("user_id");
		// 他的好友接口
		this.getFriend()
	},
  methods: {
		// 他的好友接口
		getFriend() {
			this.$http.get('/wallet/getFriend', { params: { user_id:this.user_id } }).then(res =>{
				console.log(res)
			})
		}
	}
};
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.friend-list {
	margin-top: 30rpx;
	.list-item {
		background-color: #fff;
		padding: 27rpx 27rpx 27rpx 30rpx;
		height: 150rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		margin-bottom: 4rpx;
		// 左边区域
		.item-left {
			// 左边的头像区域
			display: flex;
			.left-img {
				width: 96rpx;
				height: 96rpx;
				margin-right: 25rpx;
			}
			// 左边的文字区域
			.left-content {
				.content-title {
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color:rgba(51,51,51,1);
					margin: 18rpx 0 10rpx 0;
				}
				.content-text {
					font-size: 22rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color:rgba(153,153,153,1);
					> text {
						margin-left: 6rpx;
					}
				}
			}
		}
	}
}
</style>