<template>
<!--pages/vipGoodsManage/vipGoodsManage.wxml-->
	<view class="container">
		<!-- 会员管理开始 -->
		<view class="manage">
			<view class="flex-row" @click="toVipDefaultTaoCan">
				<view class="info-small-title">默认套餐</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
			<view class="flex-row">
				<view class="info-small-title">购买记录A</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
			<view class="flex-row">
				<view class="info-small-title">购买记录B</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
			<view class="flex-row">
				<view class="info-small-title">购买记录c</view>
				<view><image src="../../static/images/arrow-right.png"></image></view>
			</view>
		</view>
		<!-- 会员管理结束 -->
		<view class="btn-default-long btn" @click="toGreenNewGoods">新建</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//点击跳转到默认套餐
			toVipDefaultTaoCan() {
				uni.navigateTo({
					url: '/pages/vipDefaultTaoCan/vipDefaultTaoCan'
				})
			},
			//点击跳转到新建页面
			toGreenNewGoods() {
				uni.navigateTo({
					url: '/pages/greenNewGoods/greenNewGoods'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.manage{
  background: white;
  padding: 0 30rpx;
  box-sizing: border-box;
}
.manage image{
  width:13rpx;
  height:22rpx;
}

.manage>view{
  height: 100rpx;
  border-bottom: 2rpx solid rgba(231,231,231,1)
}
.manage>view view{
  align-self: center
}
.default{
  font-size:30rpx;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(153,153,153,1);
  margin-left: 400rpx
}
.btn{
  margin-top: 44rpx
}

</style>