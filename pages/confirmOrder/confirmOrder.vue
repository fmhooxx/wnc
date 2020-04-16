<template>
<!--pages/confirmOrder/confirmOrder.wxml-->
<!-- 确认订单页面 -->
	<view class="container">
		<!-- 添加地址信息开始 -->
		<!-- 没有地址区域 -->
		<view v-if="isAddress" class="address flex-row" @click="toGreenAddrManage">
			<view class="addAddr">新建收货地址</view>
			<image src="/static/images/arrow-right.png"></image>
		</view>
		<!-- 有地址区域 -->
		<view v-else class="address flex-row" @click="toGreenAddrManage">
			<!-- 左边 -->
			<view class="info-left">
				<!-- 个人信息 -->
				<view class="user">
					<!-- 用户名 -->
					<text>{{name}}{{gender}}</text>
					<!-- 手机号码 -->
					<text class="tel">{{phone}}</text>
				</view>
				<!-- 地址 -->
				<view class="info-address">{{address}}{{n_plate}}</view>
			</view>
			<!-- 右边 -->
			<view class="info-right">
				<!-- 切换城市 -->
				<view class="right-switch">选择发货地址</view>
				<!-- 右箭头 -->
				<image src="/static/images/arrow-right.png"></image>
			</view>
		</view>
		<!-- 添加地址信息结束 -->
		<!-- 商品列表信息开始 -->
		<!-- <view class="goods-list">
			<view class="order-list-info flex-row" v-for="(item, index) in goods" :key="index">
				<view class="list-left">
					<image src="/static/images/order-img.png"></image>
				</view>
				<view class="list-right flex-column">
					<view class="flex-row">
						<view class="info-two-title">
							折扣
							<view class="discount">折</view>
							<view>{{item.name}}{{item.weight}}</view>
						</view>
						<view>
							<text class="info-three-titledel">￥{{item.all_price}}</text>
							<text class="info-small-titlebol">￥{{item.vip_all_price}}</text>
						</view>
					</view>
					<view class="info-three-title">X{{item.num}}</view>
				</view>
			</view>
			绿色健康
			<view class="green-healthy">
				背景图片
				<image src="/static/images/green-healthy.png"></image>
				文字
				<view>绿色健康</view>
			</view>
		</view> -->
		<!-- 商品列表信息结束 -->
		<!-- <view class="info-title bei-title" @click="toGreenOrderDetailBeizhu">
			<view>订单备注</view>
			<text>{{val}}</text>
			<image src="../../static/images/arrow-right.png"></image>
		</view> -->
		<!-- 订单备注开始 -->
		<view class="con-info">
			<view class="flex-row info-title con-list">
				<view>商品金额</view>
				<view>¥{{currentPrice}}</view>
			</view>
			<!-- <view class="flex-row info-title con-list">
				<view>会员折扣</view>
				<view>7折</view>
			</view>
			<view class="flex-row info-title con-list">
				<view>配送费</view>
				<view>+6.00</view>
			</view> -->
			<view class="flex-row info-title con-list">
				<view>现价优惠</view>
				<view>{{discount}}</view>
			</view>
			<view class="total">
				<view class="total-title">合计:</view>
				<view class="price"><text>￥</text>{{originalPrice}}</view>
			</view>
		</view>
		<!-- 订单备注结束 -->

		<!-- 底部操作栏开始 -->
		<view class="user-defined flex-row">
			<view class="vertical-center">
				<text class="info-subtitle">合计:</text>
				<text class="jiage">￥{{originalPrice}}</text>
			</view>
			<view class="toClear" @click="goOrderPay">去支付</view>
		</view>
		<!-- 底部操作栏结束 -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 订单备注内容 暂时不用
				// val: ''
				// 商品的信息列表
				goods: [],
				// 地址
				address: '',
				// 门牌号
				n_plate: '',
				// 手机号码
				phone: '',
				// 收货人姓名
				name: '',
				// 原价
				currentPrice: '',
				// 促销价
				originalPrice: '',
				// 优惠金额
				discount: '',
				// 控制有地址和无地址之前的切换显示
				isAddress: false,
				// 套餐id
				package_id: '',
				// 性别
				gender: '',
				// 地址 id
				id: '',
				// 用户 id
				user_id: ''
			};
		},
		onLoad(options) {
			this.user_id = uni.getStorageSync('user_id')
			this.id = Number(options.id)
			this.package_id = uni.getStorageSync('package_id')
			console.log(this.package_id)
			// this.package_id = Number(options.package_id)
			// console.log(options.id)
			if (options.id != undefined) {
				// 根据 id 查询收货地址接口
				this.findAddressById()
			} else {
				// 查询默认地址接口
				this.findDefaultAddress()
			}
			// 查询套餐订单信息(包含收货地址)接口
			this.getOrderInfo()
		},
		methods: {
			// 查询默认地址接口
			findDefaultAddress() {
				this.$http.get('/user/findDefaultAddress', { params: { userId: this.user_id } }).then(res => {
					console.log(res)
					// 地址
					this.address = res.data.address
					// 门牌号
					this.n_plate = res.data.n_plate
					// 手机号码
					this.phone = res.data.phone
					// 下单人姓名
					this.name = res.data.name
					// console.log(res.data.gender)
					// 性别
					if (res.data.gender == 1) {
						this.gender = '先生'
					} else if (res.data.gender == 2) {
						this.gender = '女士'
					}
				})
			},
			// 查询套餐订单信息(包含收货地址)接口
			getOrderInfo() {
				this.$http.get('/memberPackage/getOrderInfo', { params: { package_id: this.package_id } }).then(res => {
					console.log(res)
					// this.goods = res.data.goods
					// // 地址
					// this.address = res.data.address.address
					// // 门牌号
					// this.n_plate = res.data.address.n_plate
					// // 手机号码
					// this.phone = res.data.address.phone
					// // 下单人姓名
					// this.name = res.data.address.name
					// // 性别
					// if (res.data.address.gender == '男') {
					// 	this.gender = '先生'
					// } else {
					// 	this.gender = '女'
					// }
					// 原价
					this.currentPrice = res.data.primaryPrice
					// 促销价
					this.originalPrice = res.data.realPrice
					// 优惠金额
					this.discount = res.data.money
					console.log(this.currentPrice)
					console.log(this.originalPrice)
					console.log(this.discount)
					// 判断是否有地址 显示不同的页面
					// if (this.address == '') {
					// 	this.isAddress = true
					// } else {
					// 	this.isAddress = false
					// }
				})
			},
			// 根据 id 查询收货地址接口
			findAddressById() {
				this.$http.get('/user/findAddressById', { params: { id: this.id } }).then(res => {
					// console.log(res)
					this.address = res.data.data.address
					this.n_plate = res.data.data.n_plate
					this.phone = res.data.data.phone
					this.name = res.data.data.name
					// console.log(this.address)
					// console.log(res.data.data.address)
					// console.log(res.data.data.gender)
				})
			},
			//点击跳转地址管理
			toGreenAddrManage(package_id) {
				uni.navigateTo({
					url: '/pages/greenAddrManage/greenAddrManage?package_id=' + package_id
				})
			},
			//点击填写备注
			// toGreenOrderDetailBeizhu() {
			// 	uni.navigateTo({
			// 		url: '/pages/greenOrderDetailBeizhu/greenOrderDetailBeizhu'
			// 	})
			// },
			// 购买下单
			goOrderPay() {
				// console.log(this.user_id)
				// console.log(this.name)
				// console.log(this.package_id)
				// console.log(this.originalPrice)
				// console.log(this.n_plate)
				// console.log(this.phone)
				this.$http.get('/memberPackage/addOrder', { params: { user_id: this.user_id, name: this.name, mealid: this.package_id, num: this.originalPrice, address: this.n_plate, phone: this.phone } }).then(res => {
					console.log(res)
					var orderNum = res.data.orderNum
						uni.navigateTo({
							url: '/pages/orderPay/orderPay?money=' + this.originalPrice + '&orderNum=' + orderNum
						})
				})
				// 临时跳转 后期删除
				// uni.navigateTo({
				// 	url: '/pages/orderPay/orderPay'
				// })
				// this.$http.get('/memberPackage/addOrder', {params: { user_id:1, package_id: this.package_id }}).then(res => {
					// console.log(res.data)
					// if (res.orderNum != '') {
						// uni.navigateTo({
						// 	url: '/pages/orderPay/orderPay?package_id=' + this.package_id
						// })
					// }
				// })
			}
		}
	}
</script>

<style lang="less" scoped>
/* 地址栏样式开始 */
.address{
  width:710rpx;
  height:150rpx;
  background:rgba(255,255,255,1);
  border-radius:8rpx;
  margin: 0 auto;
  margin-top: 20rpx;
  padding: 0 20rpx;
	box-sizing: border-box;
	align-items: center;
}
.address image{
  width:14rpx;
  height:24rpx;
  align-self: center
}
.addAddr{
	font-weight: 500;
	font-size: 36rpx;
	color: #333;
	font-family: Source Han Sans CN;
  align-self: center;
}
// 有地址样式区域
// 左边
.info-left {
	// 个人信息
	.user {
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: #333;
		// 手机号码
		.tel {
			margin-left: 20rpx;
		}
	}
	// 地址
	.info-address {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #333;
		margin-top: 10rpx;
	}
}
// 右边
.info-right {
	display: flex;
	align-items: center;
	// 切换城市
	.right-switch {
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #333;
		margin-right: 24rpx;
	}
}

/* 订单列表展示 */
.goods-list{
	position: relative;
  width:710rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  margin-top: 20rpx
}
.list-right{
  width: 580rpx;
  padding: 0 20rpx
}
.list-left image{
  width:96rpx;
  height:99rpx;
  border:1rpx solid rgba(229,229,229,1);
}
.order-list-info{
  padding: 20rpx 36rpx;
}
.info-two-title {
	display: flex;
	align-items: center;
	// 折扣
	.discount {
		width: 24rpx;
		height: 24rpx;
		line-height: 24rpx;
		text-align: center;
		background:rgba(252,79,75,1);
		border-radius: 2rpx;
		font-size: 20rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color:rgba(255,255,255,1);
		margin-right: 14rpx;
	}
}
// 绿色健康
.green-healthy {
	position: absolute;
	top: -22rpx;
	left: -1rpx;
	width: 150rpx;
	height: 34rpx;
	// 背景图片
	> image {
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
	// 文字
	> view {
		position: absolute;
		top: 10rpx;
		left: 18rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #f7f7f7;
	}
}
/* 列表备注开始 */
.bei-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
  width:710rpx;
  height:88rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  line-height: 88rpx;
  margin-top: 20rpx;
  padding: 0 30rpx;
	box-sizing: border-box;
	> image {
		width: 13rpx;
		height: 23rpx;
		vertical-align: middle;
	}
}
.con-info{
  width:710rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
	margin: 20rpx auto 0;
	padding: 0 30rpx;
  box-sizing: border-box;
}
.con-list{
	height: 88rpx;
	line-height: 88rpx;
	border-bottom: 1rpx solid #F3F3F3;
}
.total {
	height: 88rpx;
	line-height: 88rpx;
	text-align: right;
	font-family: Microsoft YaHei;
	font-weight: bold;
	> view {
		display: inline-block;
		font-size: 26rpx;
		color: #333;
	}
	.total-title {
		margin-right: 10rpx;
	}
	.price {
		font-size: 36rpx;
		color: #FF4543;
		> text {
			font-size: 26rpx;
		}
	}
}

/* 底部操作栏样式 */
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
  background:rgba(253,72,77,1);
  text-align: center;
  line-height: 98rpx;
  font-size:32rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(255,255,255,1);
}
.jiage{
  font-size:30rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(239,58,55,1)
}
</style>
