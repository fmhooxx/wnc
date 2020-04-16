<template>
  <!-- 我的团队页面 ming -->
  <view class="my-team">
    <!-- 头部背景以及文字区域 -->
    <view class="team-header">
      <view class="header-box">
        <view class="header-title">我的团队</view>
        <view class="header-text">28</view>
      </view>
    </view>
    <!-- list 列表区域 -->
		<view class="team-list">
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
				<!-- 右边区域 -->
				<view class="item-right" @click="getFriend">他的好友</view>
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
				<!-- 右边区域 -->
				<view class="item-right" @click="getFriend">他的好友</view>
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
				<!-- 右边区域 -->
				<view class="item-right" @click="getFriend">他的好友</view>
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
				<!-- 右边区域 -->
				<view class="item-right" @click="getFriend">他的好友</view>
			</view>
		</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
	},
	onLoad() {
		// 我的团队接口
		this.getTeam()
	},
  methods: {
		// 我的团队接口
		getTeam() {
			this.$http.get('/wallet/getTeam', { params: { captain_id:1 } }).then(res => {
				console.log(res)
			})
		},
		// 去他的好友页面
		getFriend() {
			uni.navigateTo({
        url: '/pages/walletHisFriend/walletHisFriend'
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
.my-team {
  // 头部背景以及文字区域
  .team-header {
    height: 302rpx;
		background: rgba(72, 188, 91, 1);
		margin-bottom: 20rpx;
    .header-box {
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin: 0 auto;
      text-align: center;
      padding-top: 100rpx;
      box-sizing: border-box;
      width: 120rpx;
      .header-title {
        height: 29rpx;
        font-size: 30rpx;
        margin-bottom: 34rpx;
      }
      .header-text {
        font-size: 88rpx;
      }
    }
  }
	// list 列表区域
	.team-list {
		.list-item {
			padding: 27rpx 27rpx 27rpx 30rpx;
			height: 150rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			background-color: #fff;
			// border-bottom: 2rpx solid red;
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
			// 右边区域
			.item-right {
				width: 100rpx;
				height: 34rpx;
				line-height: 34rpx;
				text-align: center;
				background:rgba(255,255,255,1);
				border: 1rpx solid rgba(72,188,91,1);
				border-radius: 6rpx;
				font-size: 22rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color:rgba(72,188,91,1);
			}
		}
	}
}
</style>