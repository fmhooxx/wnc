<template>
<!-- 提现页面 form ming -->
  <view class="cash">
		<!-- 未绑定银行卡 -->
    <view v-if="iscard" class="bank-card" @click="goWalletBindingCard">
			<image src="/static/images/jiahao.png"></image>
			<view class="card-text">绑定银行卡</view>
		</view>
		<!-- 绑定银行卡 -->
		<view v-else class="card" @click="goWalletChoiceBankCard" v-for="(item, index) in cardList" :key="index">
			<View class="card-left">
				<!-- <view class="card-img">
					<image src="/static/images/bank-card.png"></image>
				</view> -->
				<view class="card-text">
					<view class="card-title">{{item.acc_type}}</view>
					<view class="num">{{item.account}}</view>
				</view>
			</View>
			<View class="card-right">
				<image src="/static/images/arrow-right.png"></image>
			</View>
		</view>
		<view class="footer">
			<View class="tixian">提现金额</View>
			<View class="money">
				<view>¥</view>
				<input placeholder="输入提现金额" v-model="money" focus placeholder-class="title" type="number" />
			</View>
			<!-- <View v-if="isPrice" class="text">可提现金额<text class="price">0.00</text>元</View>
			<View v-else class="text">可提现金额<text class="price">{{price}}.00</text>元</View>
		</view> -->
		<View class="btn" :class="{ active: isActive }" @click="cash">申请提现</View>
		</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
			// 输入的金额内容
			money: '',
			// 提现返回的状态
			status: '',
			// 判断用户是否可以提现的标准
			flag: '',
			// 银行卡id
			acc_id: '',
			// 用户可提现的金额
			price: '',
			// 0元与其他金额之间的切换显示
			isPrice: true,
			// 绑定银行卡与有银行卡页面之间的切换显示
			iscard: false,
			// 显示的银行卡信息
			cardList: [],
			// 所有的银行卡信息
			result: [],
			// 用来判断是一开始就有的银行卡还是后来选择的银行卡
			id: '',
			user_id: '',
			wallet_id: ''
		};
	},
	onLoad(options) {
		this.wallet_id = uni.getStorageSync('wallet_id')
		this.user_id = uni.getStorageSync('user_id')
		this.acc_id = options.id
		// console.log(this.acc_id)
		// 获取银行卡信息
		this.getAcc()
		// 获取可提现的金额的接口
		// this.getMoney()
		// if (this.cardList.length == 1) {
		// 	this.iscard = true
		// } else {
		// 	this.iscard = false
		// }	
	},
  methods: {
		// 获取银行卡信息
		getAcc() {
			this.$http.get('/wallet/getAcc', { params: { user_id: this.user_id } }).then( res => {
				this.result = res.data
				if (this.result.length == 0) {
					this.iscard = true
				} else {
					this.iscard = false
					if (this.id == '') {
						this.cardList = []
						this.cardList.push(res.data[0])
						this.id = res.data[0].acc_id
					}
					if (this.acc_id !== undefined) {
						var i = this.result.findIndex(item => {
							return item.acc_id == this.acc_id
						})
						this.cardList = []
						this.cardList.unshift(this.result[i])
					}
				}
			})
		},
		// 获取可提现的金额的接口
		// getMoney() {
		// 	this.$http.get('/wallet/getMoney',{ params: { user_id: 1 } }).then(res => {
		// 		console.log(res)
		// 		if (res.data == 0) {
		// 			this.isPrice = true
		// 		} else {
		// 			this.isPrice = false
		// 			this.price = res.data
		// 		}
		// 	})
		// },
		// 去绑定银行卡页面
		goWalletBindingCard() {
			uni.navigateTo({
        url: '/pages/walletBindingCard/walletBindingCard'
      })
		},
		// 去选择银行卡页面
		goWalletChoiceBankCard() {
			uni.navigateTo({
        url: '/pages/walletChoiceBankCard/walletChoiceBankCard'
      })
		},
		// 发送请求 判断用户金额是否达到提现标准
		// getTrue() {
			// this.cash()
			// this.$http.get('/wallet/getTrue', { params: { money: this.money } }).then(res => { 
			// 	console.log(res)
			// 	this.flag = res.data
			// 	if (this.flag !== false ) {
			// 		this.cash()
			// 	} else {
			// 		uni.showToast({
			// 				title: '不满足提现条件',
			// 				duration: 2000,
			// 				icon: 'none'
			// 		});
			// 	}
			//  })
		// },
		// 提现接口
		cash() {
			// 当有输入金额的时候 金额大于 0 的时候 当可以提现的时候 当有银行卡的时候 可以发起提现 现在缺少一个有银行卡的时候
			if (this.money !== '' && this.money > 0 && this.acc_id !== '') {
				this.$http.get('/wallet/getAccount', { params: { wallet_id: this.wallet_id,acc_id: this.acc_id,money: this.money, user_id: this.user_id } }).then(res => {
					console.log(res)
					if (res.data == 200) {
						uni.showToast({
								title: '提现成功',
								duration: 2000,
								icon: 'none'
						})	
					} else if (res.data == 501) {
						uni.showToast({
								title: '未达到提现条件',
								duration: 2000,
								icon: 'none'
						})	
					} else {
					uni.showToast({
							title: '银行卡号或余额不能为空',
							duration: 2000,
							icon: 'none'
						})
					}
				})
			} else {
				// uni.showToast({
				// 		title: '您提现的金额未达到可提现的金额',
				// 		duration: 2000,
				// 		icon: 'none'
				// });
			}
		}
	},
	computed: {
		isActive() {
			if (this.money === '') {
				return false
			}
			return true
		}
	},
};
</script>

<style lang="less" scoped>
// 选中的样式
.active {
	color: #fff !important;
	background-color: #48BC5B !important;
}
.cash {
	// 未绑定银行卡样式
  .bank-card {
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120rpx;
		line-height: 120rpx;
		margin: 20rpx 0;
		image {
			width: 30rpx;
			height: 30rpx;
		}
		.card-text {
			font-size: 30rpx;
			font-family: Microsoft YaHei;
			font-weight: bold;
			color:rgba(72,188,91,1);
			margin-left: 10rpx;
		}
	}
	// 绑定银行卡样式
	.card {
		background-color: #fff;
		display: flex;
		height: 120rpx;
		justify-content: space-between;
		align-items: center;
		// margin: 20rpx 0 60rpx 0;
		margin: 20rpx 0;
		padding: 0 30rpx;
		box-sizing: border-box;
		image {
			width: 100%;
			height: 100%;
		}
		.card-left {
			display: flex;
			.card-img {
				width: 80rpx;
				height: 80rpx;
				margin-right: 30rpx;
			}
			.card-text {
				font-size: 32rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				.card-title {
					color:rgba(51,51,51,1);
				}
				.num {
					color:rgba(102,102,102,1);
				}
			}
		}
		.card-right {
			width: 16rpx;
			height: 26rpx;
		}
	}
	.footer {
		padding: 40rpx 42rpx 0;
		// margin-top: 42rpx;
		background-color: #fff;
		.tixian {
			font-size: 30rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color:rgba(51,51,51,1);
			margin-bottom: 42rpx;
		}
		.money {
			font-family: Microsoft YaHei;
			font-weight: 400;
			color:rgba(51,51,51,1);
			display: flex;
			border-bottom: 1rpx solid rgba(232,232,232,1);
			view {
				font-size: 56rpx;
				margin-right: 34rpx;
			}
			input {
				padding-top: 22rpx;
				font-size: 36rpx;
			}
		}
		.text {
			font-size: 26rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color:rgba(153,153,153,1);
			margin: 28rpx 0 74rpx;
			.price {
				font-size: 26rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color:rgba(153,153,153,1);
				margin: 0 20rpx;
			}
		}
	}
}
.btn {
	margin: 40rpx auto;
	width: 620rpx;
	height: 90rpx;
	line-height: 90rpx;
	text-align: center;
	background:rgba(207,208,212,1);
	border-radius: 6rpx;
	font-size: 32rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color:rgba(255,255,255,1);
}
.title {
	font-size: 36rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color:rgba(153,153,153,1);
}
</style>