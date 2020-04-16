<template>
<!--pages/orderDetails/orderDetails.wxml 待支付页面 ming -->
	<view class="container">
	<!-- 订单详情头部开始 -->
		<view class="order-header">
			<view class="order-title level-center" style="line-height:30rpx">
				<image src="../../static/images/tips.png" class="tips"></image>
				<text>待支付</text>
			</view>
      <view class="count-down">
        <text class="identical">1</text>
        <text class="identical">5</text>
        <text class="special">:</text>
        <text class="identical">0</text>
        <text class="identical">0</text>
      </view>
		</view>
		<view class="addr-info">
      <view class="info-small-title">小米 1234567890</view>
      <view class="info-small-title-sub">合肥市庐阳区银城公寓</view>
		</view>
		<!-- 订单详情头部结束 -->
		
		<!-- 订单列表展示开始 -->
		<view class="order-list">
			<view class="order-list-info flex-row">
				<view class="list-left">
					<image src="../../static/images/order-img.png"></image>
				</view>
				<view class="list-right flex-column">
					<view class="flex-row">
						<view class="info-two-title">红水蜜桃500g</view>
						<view>
							<text class="info-three-titledel">￥39.9</text>
							<text class="info-small-titlebol">￥29.9</text>
						</view>
					</view>
					<view class="info-three-title">X1</view>
				</view>
			</view>

			<view class="order-list-info flex-row">
				<view class="list-left">
					<image src="../../static/images/order-img.png"></image>
				</view>
				<view class="list-right flex-column">
					<view class="flex-row">
						<view class="info-two-title">红水蜜桃500g</view>
						<view>
							<text class="info-three-titledel">￥39.9</text>
							<text class="info-small-titlebol">￥29.9</text>
						</view>
					</view>
					<view class="info-three-title">X1</view>
				</view>
			</view>
		</view>
		<!-- 订单列表展示结束 -->

		<!-- 订单备注开始 -->
		<!-- <view class="info-title bei-title order-remark">
      <view>订单备注</view>
      <image src="../../static/images/arrow-right.png"></image>
    </view> -->
		<!-- 订单备注结束 -->

		<view class="con-info">
			<view class="flex-row info-title con-list">
				<view>商品金额</view>
				<view>¥89.7</view>
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
				<view>促销优惠</view>
				<view>-0.54</view>
			</view>
			<view class="total">
				<view>合计:</view>
				<view class="price"><text>￥</text>62.6</view>
			</view>
		</view>

		<!-- 订单详情开始 -->
			<view class="info">
				<view>订单编号：101111231346</view>
				<view>订单类型：线上订单</view>
				<view>下单时间：2019-10-16 13:14:49</view>
				<view>支付时间：2019-10-16 13:15:00</view>
				<view>支付方式：微信</view>
			</view>
		<!-- 订单详情结束 -->
      <!-- 底部操作栏开始 -->
		<view class="user-defined flex-row">
			<view class="vertical-center add">
				<text class="info-subtitle">预支付</text>
				<text class="jiage">￥3.15</text>
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
				
			}
		},
		methods: {
			goOrderPay() {
        uni.navigateTo({
          url: '/pages/orderPay/orderPay'
        })
      }
		}
	}
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 130rpx;
}
// 订单备注
.order-remark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20rpx auto !important;
  image {
    width: 13rpx;
    height: 23rpx;
    margin-right: 36rpx;
  }
}
// 底部操作栏开始
.user-defined {
  width: 100%;
  height: 98rpx;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  left: 0;
  .add {
    margin-left: 42rpx;
    .jiage{
      font-size: 30rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(239,58,55,1);
      font-weight: bold;
    }
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
}
// 底部操作栏结束
.order-header{
  position: relative;
  width:750rpx;
  height:162rpx;
  display: flex;
  box-sizing: border-box;
  background:rgba(252,106,93,1);
  .count-down {
    position: absolute;
    top: 0;
    right: 20rpx;
    height: 36rpx;
    line-height: 36rpx;
    font-size: 30rpx;
    font-family: Source Han Sans CN;
    font-weight: 500;
    text-align: center;
    .identical {
      display: inline-block;
      width: 36rpx;
      height: 36rpx;
      color:rgba(252,106,93,1);
      background:rgba(255,255,255,1);
      margin-left: 6rpx;
    }
    .special {
      margin: 0 10rpx;
      color:rgba(255,255,255,1);
    }
  }
}
.tips{
  width:36rpx;
  height:36rpx;
}
.level-center {
  line-height: 36rpx !important;
}
.level-center image{
  padding: 0 10rpx;
  vertical-align: middle;
}
.level-center text{
  font-size: 40rpx;
  padding: 0 10rpx;
}

.addr-info{
  width:710rpx;
  height:150rpx;
  background:rgba(255,255,255,1);
  border-radius:8rpx;
  padding: 30rpx 18rpx;
  box-sizing: border-box;
  position: absolute;
  top: 80rpx;
  left: 50%;
  margin-left: -355rpx
}
.addr-info view{
  line-height: 48rpx
}


/* 订单列表展示 */
.order-list{
  width:710rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin:0 auto;
  margin-top: 90rpx;
  margin-bottom: 20rpx;
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

/* 订单备注样式开始 */
.bei-title{
  width:710rpx;
  height:88rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  line-height: 88rpx;
  margin-top: 20rpx;
  padding-left: 30rpx;
  box-sizing: border-box
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
	.price {
		font-size: 36rpx;
		color: #FF4543;
		> text {
			font-size: 26rpx;
		}
	}
}

.info{
  width:710rpx;
  height:340rpx;
  background:rgba(255,255,255,1);
  border-radius:10rpx;
  margin: 0 auto;
  margin-top: 20rpx;
  padding: 34rpx 32rpx;
  box-sizing: border-box;
}

.info view{
  margin-bottom: 20rpx;
  font-size:26rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.buy{
  width:750rpx;
  height:98rpx;
  background:rgba(255,255,255,1);
}
.tobuy{
  width:140rpx;
  height:50rpx;
  background:rgba(255,255,255,1);
  border:2rpx solid rgba(229, 229, 229, 1);
  border-radius:26rpx;
  line-height: 50rpx;
  text-align: center;
  float: right;
  margin-right: 30rpx;
  position: relative;
  top:50%;
  margin-top: -25rpx
}
</style>