<template>
	<!--pages/greenCart/greenCart.wxml-->
	<view class="green-cart">
		<view class="container" v-if="false">
			<view class="head-box">
				<!-- 绿色健康 -->
				<view v-for="(item, index) in tabs" :key="index" :class="current == index ? 'activeborder' : ''" @click="changeText(index)">{{item.text}}</view>
				<!-- 电商助农 -->
			</view>
			<!-- 有消息页面 -->
			<view v-if="isBox" class="index-news-box">
				<!-- 购物车列表开始 -->
				<view class="cart-box">
					<view class="cart-list-box">
						<view class="del">
							<image src="../../static/images/green-del.png"></image>
						</view>
						<view class="list flex-row">
							<view class="one">
								<radio color="#39AC36"></radio>
							</view>
							<view class="box">
								<view class="list-left">
									<image src="../../static/images/green-cart.png"></image>
								</view>
								<view class="list-right flex-column">
									<view class="top">
										<view>玲珑小番茄500g</view>
									</view>
									<view class="bottom flex-row">
										<view><text class="price">¥9.9</text><text class="fen">/份</text><text class="original">¥19.9</text></view>
										<!-- 购物车数量区域 -->
										<view class="base-count">
											<view @click="reduce" :class="{ fontColor: isColor }" class="count-sub">-</view>
											<input type="number" v-model="num" @input="input" @blur="blur">
											<view @click="plus" class="count-add">+</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 购物车列表结束 -->
				<!-- 底部操作栏开始 -->
				<view class="user-defined flex-row">
					<radio>全选</radio>
					<view class="vertical-center add">
						<text class="info-subtitle">合计</text>
						<text class="jiage">￥3.15</text>
					</view>
					<view class="toClear">去结算</view>
				</view>
				<!-- 底部操作栏结束 -->
			</view>
			<!-- 没消息页面 -->
			<view v-else class="no-index-news">
				<image src="/static/images/green-cart-bgi.png"></image>
				<view class="info">这里是被我搬空了吗</view>
				<view class="stroll-around" @click="goIndex">去逛逛</view>
			</view>
		</view>
		<view v-else class="expect-bgi" >
			<image src="../../static/images/expect-bgi.png"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// tabs 栏数据
			tabs: [
				{
					id: 0,
					text: '绿色健康'
				},
				{
					id: 1,
					text: '电商助农'
				}
			],
			// 默认选中的那一项
			current: 0,
			// 购物车数量
			num: 1,
			// 控制有消息页面和无消息页面的切换
			isBox: true
		}
	},
	methods: {
		// 点击 tabs 更改数据
		changeText(index) {
			this.current = index
		},
		// 点击加号
		plus() {
			this.num++
		},
		// 点击减号
		reduce() {
			if (this.num > 1) {
				this.num--
			}
		},
		// input 输入的内容
		input(e) {
			let result = e.detail.value
			if (result !== '' || result !== 0) {
				this.num = result
			}
		},
		// 输入框失去焦点
		blur(e) {
			if (e.detail.value === '' || e.detail.value == 0) {
				this.num = 1
			}
		},
		// 去首页
		goIndex() {
			uni.switchTab({
				url: '/pages/index/index'
			})
		}
	},
	// 控制减号的显示以及输入的范围
	computed: {
		isColor() {
			if (this.num <= 1) {
				return true
			}
			return false
		}
	}
}
</script>

<style>
page {
	background-color: #fff;
}
</style>

<style lang="less" scoped>
.container {
	position: relative;
	// 没有消息区域
	.no-index-news {
		width: 335rpx;
		height: 412rpx;
		position: absolute;
		top: 264rpx;
		left: 208rpx;
		text-align: center;
		> image {
			width: 312rpx;
			height: 312rpx;
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
		.stroll-around {
			margin: auto;
			width: 200rpx;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			border: 2rpx solid rgba(39,149,36,1);
			border-radius: 25rpx;
			font-size: 28rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #279524;
		}
	}
}
// 头部
.head-box {
	margin-top: 1rpx;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 90rpx;
	line-height: 90rpx;
	font-size: 30rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #333;
	background-color: #fff;
	> view {
		border-bottom: 4rpx solid transparent;
	}
	.activeborder {
		border-bottom: 4rpx solid #333;
	}
}
.bottom {
	position: relative;
}
.box {
	display: flex;
	height: 100%;
	border-bottom: 1rpx solid #f1f1f1;
	// border-bottom: 1rpx solid red;
}
.one {
	margin-top: 24rpx;
}
.info-right {
		position: absolute;
		right: 0;
		bottom: 0rpx;
		width: 130rpx;
		height: 40rpx;
		line-height: 40rpx;
		background: rgba(255, 255, 255, 1);
		border: 1rpx solid rgba(153, 153, 153, 1);
		border-radius: 18rpx;
		padding: 0 10rpx;
		box-sizing: border-box;
		text-align: center;
		color: rgba(102, 102, 102, 1);

		.num-red {
			color: rgba(153, 153, 153, 1);
		}
		input {
			width: 50rpx;
			height: 100%;
			line-height: 32rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 1);
			background: rgba(204, 204, 204, 1);
		}
	}
// 购物车数量区域
.base-count {
  display: flex;
  width: 170rpx;
	height: 50rpx;
	border-radius: 30rpx;
  view {
    width: 50rpx;
		height: 100%;
    line-height: 50rpx;
    background-color: #f8f8f8;
    text-align: center;
		border: 2rpx solid #eee;
	}
	// 减号
	.count-sub {
		line-height: 48rpx;
		border-radius: 30rpx 0 0 30rpx;
	}
	// 加号
	.count-add {
		border-radius: 0 30rpx 30rpx 0;
	}
  input {
    width: 70rpx;
		height: 100%;
		background:none;  
    outline:none;  
    border:none;
    text-align: center;
    border-top: 2rpx solid #eee;
    border-bottom: 2rpx solid #eee;
  }
  .fontColor {
    color: #ccc;
  }
}
.cart-box {
	width: 690rpx;
	background: white;
	border-radius: 20rpx 20rpx 0px 0px;
	margin: 0 auto;
	margin-top: 30rpx
	}
	.cart-list-box {
		padding-right: 20rpx;
		box-sizing: border-box;
		height: 176rpx;
	}
	.list {
		height: 74%;
		width: 690rpx;
		padding: 0rpx 20rpx;
		box-sizing: border-box
	}
	.del {
		float: right
	}
	.del image {
		width: 26rpx;
		height: 24rpx;
	}
	.list-left image {
		width: 108rpx;
		height: 108rpx;
		margin-right: 18rpx;
	}
	.list-right {
		width: 446rpx;
		height: 108rpx
	}
	.top {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		line-height: 24rpx;
	}
	.bottom {
		padding-right: 20rpx;
		box-sizing: border-box
	}
	.price {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(253, 72, 77, 1);
	}
	.fen {
		font-size: 22rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		line-height: 24rpx;
	}
	.original {
		font-size: 22rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		text-decoration: line-through;
		color: rgba(153, 153, 153, 1);
		padding: 0 18rpx;
		box-sizing: border-box
	}
	/* 底部数量开始 */
	.num {
		width: 103rpx;
		height: 36rpx;
		background: rgba(255, 255, 255, 1);
		border: 1rpx solid rgba(153, 153, 153, 1);
		border-radius: 18rpx;
		padding: 0 10rpx;
		box-sizing: border-box;
		line-height: 26rpx
	}
	input {
		width: 34rpx;
		height: 32rpx;
		background: rgba(204, 204, 204, 1);
		min-height: 0
	}
	/* 
	底部操作栏样式开始 */
	.user-defined {
		width: 750rpx;
		height: 98rpx;
		padding-left: 24rpx;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 1);
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.cart {
		width: 94rpx;
		height: 94rpx;
	}
	.toClear {
		width: 220rpx;
		height: 98rpx;
		background: rgba(253, 72, 77, 1);
		text-align: center;
		line-height: 98rpx;
		font-size: 32rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}
	radio {
		align-self: center;
		transform: scale(0.8)
	}
	.jiage {
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(239, 58, 55, 1)
	}
	.add {
		margin-left: 200rpx
	}
	.flex-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.flex-column {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.expect-bgi {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width:400rpx;
		height:344rpx;
		> image {
			width: 100%;
			height: 100%;
		}
	}
</style>
