<template>
  <!-- 我的银行卡页面 ming -->
  <view class="my-bank-card">
		<!-- 头部文字 -->
    <view v-if="false" class="card-title">
      我的卡
      <text>共两张</text>
    </view>
		<view class="list" v-if="false">
			<view class="list-item">
				<view class="item-left">农业银行</view>
				<view class="item-right">*****1321</view>
			</view>
		</view>
		<!-- 添加银行卡区域 -->
		<view class="footer">
			<view class="withdrawals-account">
				<view class="account-box" @click="goWalletBindingCard">
					<view class="box">
						<view class="box-img">
							<image src="/static/images/jiahao.png"></image>
						</view>
						<view>添加银行卡</view>
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
		// 提现账户接口
		this.getAcc()
	},
  methods: {
		// 提现账户接口
		getAcc() {
			this.$http.get('/wallet/getAcc', { params: {user_id:this.user_id} }).then(res => {
				console.log(res)
			})
		},
		// 去绑定银行卡页面
		goWalletBindingCard() {
			uni.navigateTo({
        url: '/pages/walletBindingCard/walletBindingCard'
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
.my-bank-card {
	padding: 30rpx 0;
	// 头部文字
  .card-title {
    font-size: 36rpx;
    font-family: Microsoft YaHei;
		font-weight: bold;
		margin-left: 30rpx;
		color: rgba(51, 51, 51, 1);
		margin-bottom: 20rpx;
    > text {
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-left: 16rpx;
    }
	}
	.withdrawals-account {
		position: relative;
		margin: 20rpx auto;
		width: 690rpx;
		height: 310rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10rpx;
		.account-box {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			width: 348rpx;
			height: 93rpx;
			background: rgba(72, 188, 91, 1);
			border-radius: 4rpx;
			.box {
				display: flex;
				align-items: center;
				margin: 26rpx 0 0 62rpx;
				font-size: 34rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color:rgba(255,255,255,1);
				.box-img {
					width: 41rpx;
					height: 41rpx;
					background-color: #fff;
					border-radius: 50%;
					margin-right: 11rpx;
					vertical-align: middle;
				}
			}
		}
	}
}
.list {
	.list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		background-color: #fff;
		padding: 0 30rpx;
	}
}
</style>