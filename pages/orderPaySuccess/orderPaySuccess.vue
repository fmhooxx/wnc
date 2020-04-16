<template>
	<view>
		<view class="succ-box">
			<image src="../../static/images//paySuccess.png"></image>
			<view class="succ">支付成功</view>
		</view>

		<!-- 底部操作按钮开始 -->
		<view class="flex-row btn-box">
			<view class="btn-left btn" @click="goGreenHealth">再去逛逛</view>
			<view class="btn-right btn" @click="goVipPurchaseRecord">购买记录</view>
			<view class="btn-right btn" @click="goVipGiveRecord">赠送记录</view>
		</view>
		<!-- 底部操作按钮结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
      // 去绿色健康页面
      goGreenHealth() {
        uni.navigateTo({
          url: '/pages/greenHealth/greenHealth'
        })
      },
      // 去赠送记录页面
      goVipGiveRecord() {
        uni.navigateTo({
          url: '/pages/vipGiveRecord/vipGiveRecord'
        })
      },
      // 去购买记录页面
      goVipPurchaseRecord() {
        uni.navigateTo({
          url: '/pages/vipPurchaseRecord/vipPurchaseRecord'
        })
      },
		}
	}
</script>

<style>
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
.succ-box{
  width: 200rpx;
  height: 200rpx;
  margin: 0 auto;
  margin-top: 100rpx;
  text-align: center
 
}
.succ-box image{
  width:90rpx;
  height:90rpx;
}
.succ{
  font-size:34rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(51,51,51,1);
}

/* 底部按钮样式 */
.btn-box{
  padding: 0 30rpx
}
.btn{
  width:320rpx;
  height:80rpx;
  border:2rpx solid rgba(39, 149, 36, 1);
  border-radius:40rpx;
  text-align: center;
  line-height: 80rpx;
  color: #fff;
  font-size: 30rpx;
}
.btn-left{
  background:rgba(39,149,36,1);
}
.btn-right{
  font-size: 30rpx;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #279524;
  background:rgba(255,255,255,1);
}
</style>
