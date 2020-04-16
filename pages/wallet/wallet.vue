<template>
<!-- 钱包页面 ming -->
  <view class="wallet">
		<view class="header">
			<view class="heade-img">
				<image src="/static/images/wallet-bgi.png"></image>
			</view>
			<view class="header-text">
				<view>钱包余额</view>
				<view class="price">{{balance}}</view>
				<view class="tixian" @click="getWalletWithdrawal">提现</view>
			</view>
		</view>
		<!-- 列表数据 -->
		<view class="footer">
			<view class="footer-box" @click="getRecom">
				<view class="text">推荐明细</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="getWallet">
				<view class="text">推荐规则</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="getTeam">
				<view class="text">我的团队</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="getgoWalletWithdrawalRules">
				<view class="text">提现规则</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="getRecom">
				<view class="text">提现明细</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
			<view class="footer-box" @click="getAcc">
				<view class="text">提现账户</view>
				<view class="box-img">
					<image src="/static/images/arrow-right.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
			user_id: '',
			balance: ''
		};
	},
	onLoad() {
		this.user_id = uni.getStorageSync('user_id')
		// 获取用户钱包余额
		this.getWalletBalance(),
		// 获取时间戳 转换成日期
		this.timer()
	},
  methods: {
		timer() {
		var timestamp = Date.parse(new Date())
		timestamp = timestamp / 1000;
		console.log("当前时间戳为：" + timestamp);
		// 获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    // var Y = date.getFullYear(); // 年
    // var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1); // 月
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); // 日
    // var h = date.getHours(); // 秒
    // var m = date.getMinutes(); // 分
		// var s = date.getSeconds(); // 秒
		// console.log("当前时间：" + Y + M + D + h + ":" + m + ":" + s)
		this.datas = D
		},
		// 获取用户钱包余额
		getWalletBalance() {
			this.$http.get('/wallet/getWallet', { params: { user_id: this.user_id } }).then(res => {
				console.log(res)
				this.balance = res.data.balance
				this.wallet_id = res.data.wallet_id
				uni.setStorageSync('wallet_id',res.data.wallet_id)
			})
		},
		// 去提现页面
		getWalletWithdrawal() {
			if (this.datas !== 15) {
				uni.navigateTo({
					url: '/pages/walletCashWithdrawal/walletCashWithdrawal'
				})	
			} else {
				uni.showToast({
						title: '未到提现时间',
						duration: 3000,
						icon: 'none'
				});
			}
		},
		// 去推荐明细接口
		getRecom() {
			uni.navigateTo({
        url: '/pages/walletRecommendationDetails/walletRecommendationDetails'
      })
		},
		// 去推荐规则页面
		getWallet() {
			uni.navigateTo({
        url: '/pages/walletRecommendationRules/walletRecommendationRules'
      })
		},
		// 去我的团队页面
		getTeam() {
			uni.navigateTo({
        url: '/pages/walletMyTeam/walletMyTeam'
      })
		},
		// 去提现规则页面
		getgoWalletWithdrawalRules() {
			uni.navigateTo({
        url: '/pages/walletWithdrawalRules/walletWithdrawalRules'
      })
		},
		// 去提现账户页面
		getAcc() {
			uni.navigateTo({
				url: '/pages/walletMyBankCard/walletMyBankCard'
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
.wallet {
	.header {
		margin-top: 35rpx;
		position: relative;
		.heade-img {
			width: 690rpx;
			height: 320rpx;
			margin: 0 auto;
		}
		.header-text {
			position: absolute;
			top: 80rpx;
			left: 292rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			text-align: center;
			color:rgba(255,255,255,1);
			font-size: 32rpx;
			.price {
				font-size: 56rpx;
				font-weight: 500;
				margin: 24rpx 0;
			}
			.tixian {
				width: 190rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				font-size: 21rpx;
				border: 2rpx solid rgba(255,255,255,1);
				border-radius: 20rpx;
				font-family: Microsoft YaHei;
				font-weight: bold;
			}
		}
	}
	.footer {
		margin-top: 50rpx;
		.footer-box {
			margin: 1rpx 0;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			height: 90rpx;
			line-height: 90rpx;
			margin-bottom: 2rpx;
			padding: 0 30rpx;
			.text {
				font-size: 30rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color:rgba(51,51,51,1);
			}
			.box-img {
				width: 13rpx;
				height: 23rpx;
			}
		}
	}
}
</style>