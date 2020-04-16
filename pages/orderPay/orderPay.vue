<template>
<!--pages/orderPay/orderPay.wxml-->
	<view class="container">
		<!-- 金额详情开始 -->
		<view class="price">
			<view class="con">
				<view class="top">应付金额</view>
				<view class="bottom">￥{{money}}</view>
			</view>
		</view>
		<!-- 金额详情结束 -->

		<!-- 支付方式开始 -->
		<view class="payWay">
			<view class="title info-three-title">选择支付方式</view>
			<view class="flex-row">
				<view class="flex-row pay-way">
					<view><image src="../../static/images/wx-pay.png"></image></view>
					<view>微信支付</view>
				</view>
				<image src="../../static/images/checked.png"  class="check"></image>
			</view>
			
		</view>
		<!-- 支付方式结束  -->

		<!-- 支付按钮 -->
		<view class="btn-default-longrad btn" @click="payment">微信支付￥{{money}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        // 订单号
        outTradeNo: '',
        // 金额
        money: '',
        openid: '',
        // 用户 id
        user_id: '',
        // 收货人姓名
        name: '',
        // 套餐 id
        package_id: '',
        // 收货人地址
        address: '',
        // 手机号码
        phone: ''
			}
    },
    onLoad(options) {
      console.log(options)
      this.money = options.money
      this.outTradeNo = options.orderNum
      this.package_id = uni.getStorageSync('package_id')
      this.user_id = uni.getStorageSync('user_id')
      this.package_id = Number(options.package_id)
      // 查询订单信息
      // this.addOrder()
      this.openid = uni.getStorageSync('openid')
    },
		methods: {
      findDefaultAddress() {
        console.log(this.user_id)
        this.$http.get('/user/findDefaultAddress', { params: { userId: this.user_id } }).then(res => {
          console.log(res)
          this.name = res.data.name
          this.address = res.data.nplate
          this.phone = res.data.phone
        })
      },
      // addOrder() {
			// 	this.$http.get('/memberPackage/addOrder', {params: { user_id:this.user_id, package_id: this.package_id }}).then(res => {
      //     console.log(res)
      //     console.log(this.user_id)
      //     console.log(this.package_id)
      //     this.money = res.data.Amount
      //     this.outTradeNo = res.data.orderNum
			// 	})
      // },
      // 去支付成功页面
			goOrderPaySuccess() {
        uni.navigateTo({
          url: "/pages/orderPaySuccess/orderPaySuccess"
        });
      },
      payment() {
        var that = this;
        // var pnum = that.data.pnum
        wx.showModal({
          title: '确认购买该商品',
          confirmText: '支付',
          confirmColor: "#39b5de",
          content: "您将以原价购买本商品，确认支付？",
          success: res => {
            console.log(this.outTradeNo)
            if (res.confirm) {// 下单
              wx.showLoading({
                title: '加载中...',
                mask: true
              })
              // 微信支付购买
              wx.request({
                url: 'https://www.tailongshoudian.com/WNC/wxlogin/pay',
                // url: 'http://192.168.1.107:8188/ludanxinxi-web/api/order/toCartBuyGoods',
                method: 'post',
                header: {
                  'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
                },
                data: {
                  // 订单号
                  outTradeNo: this.outTradeNo,
                  // 主题内容
                  body: '商品',
                  // 内容详情
                  details: '会员订单',
                  // 金额
                  money: this.money,
                  openid: this.openid
                },
                dateType: 'json',
                success: res => {
                  // console.log(res)
                  if (res.data.success) {
                      wx.requestPayment({
                        'timeStamp': res.data.data.timeStamp,
                        'nonceStr': res.data.data.nonceStr,
                        'package': res.data.data.package,
                        'signType': 'MD5',
                        'paySign': res.data.data.sign,
                        'success': res => {
                          // console.log(res)
                          if (res.errMsg = 'requestPayment:ok') {
                            uni.showToast({
                                title: '支付成功',
                                duration: 3000,
                                icon: 'none',
                            });
                            this.getOrd()
                            uni.navigateTo({
                              url: '/pages/greenHealth/greenHealth'
                            })
                          }
                        },
                        'fail': function (resf) {
                          console.log(resf)
                          wx.showToast({
                            title: '已取消支付',
                            image: '/pages/imgs/icon/error.png',
                            mask: true,
                            duration: 2000,
                            success: function () {
                              // wx.navigateTo({
                              //   url: '../myPayWait/myPayWait?myOrderId=' + 1,
                              // })
                            }
                          })
                          // setTimeout(function () {
                          // }, 2000)
                        }
                      })
                  } 
                },
                fail: function () {
                  wx.hideLoading()
                }
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        // uni.navigateTo({
        //   url: '/pages/orderPaySuccess/orderPaySuccess'
        // })
      },
      getOrd() {
        console.log(11)
      }
		}
	}
</script>

<style lang="less" scoped>
.price{
  width:750rpx;
  height:240rpx;
  background:rgba(255,255,255,1);
  margin: 20rpx 0;
  position: relative
}
.con{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -85rpx;
  margin-top: -60rpx
}
.top{
  font-size:36rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(2,2,2,1);
}
.bottom{
  font-size:44rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color:rgba(2,2,2,1);
}


/* 支付方式样式开始 */

.payWay{
  height:176rpx;
  background:rgba(255,255,255,1);
  padding-right: 20rpx;
  box-sizing: border-box;
  align-self: center
}
.title{
  padding: 24rpx 34rpx;
  box-sizing: border-box
}
.payWay image{
  width:48rpx;
  height:42rpx;
}
.pay-way{
  width: 280rpx;
  padding: 0 34rpx;
  box-sizing: border-box;
  margin-top: 20rpx
}
.check{
  align-self: center
}
.btn{
  color:white;
  font-size:30rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  margin-top: 60rpx
}
</style>