<template>
<!--pages/vipCard/vipCard.wxml-->
	<view class="container">
		<!-- 订单详情头部开始 -->
    <!-- 未开通会员的卡片 -->
		<view v-if="isBox">
      <view class="order-header"></view>
      <view class="vip-card">
        <image src="/static/images/vip-manage.png"></image>
        <view class="header-text">
          <view class="title">购买年卡预计可省１023</view>
          <view class="flex-row bottom">
            <view class="cart-left">自用省钱 分享赚钱</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 已开通会员的卡片 -->
		<view v-else>
      <view class="order-header"></view>
      <view class="vip-card">
        <image src="/static/images/vip-manage.png"></image>
        <view class="header-box">
          <view class="box-left">
            <view class="header-left">
              <image src="../../static/images/vip-header@2x.png"></image>
            </view>
            <view class="header-center">
              <view class="center-uname">小蛙</view>
              <view class="center-member">年卡会员</view>
              <view class="center-timer">到期时间：<text>2019-12-01</text></view>
            </view>
          </view>
          <view class="box-right" @click="goVipManage">管理</view>
        </view>
      </view>
    </view>
		<!-- 订单详情头部结束 -->

		<!-- 会员充值列表开始 -->
		<!-- <view class="vip-list">
			<view class="list-info flex-row">
				<view class="left">
					<view class="price">29999元</view>
					<view class="type">年卡会员</view>
				</view>
				<radio color="#39AC36"></radio>
			</view>
		</view> -->
    <view class="vip-list">
      <radio-group @change="radioChange">
        <label v-for="(item, index) in giveList" :key="index">
          <view class="list-info flex-row">
            <view class="left">
              <view class="price">{{item.realPrice}}元</view>
              <view class="type">{{item.vipname}}</view>
            </view>
            <radio color="#39AC36" :value="item.id" :checked="current == item.id ? true : false "></radio>
          </view>
        </label>
      </radio-group>
    </view>
		<!-- 会员充值列表结束 -->
    <!-- 信息部分 -->
    <view class="info">
      <view class="info-title">
        <view class="info-tel">输入手机号赠送好友</view>
        <!-- <view class="record" @click="goVipGiveRecord">记录</view> -->
      </view>
      <view class="info-input">
        <input placeholder="请输入好友手机号码" v-model="phone" focus type="number" placeholder-class="input-text" />
      </view>
      <view class="notes"><view>注：</view><view class="notes-view"><rich-text :nodes="give"></rich-text></view></view>
    </view>
    <view class="footer">
      <view class="footer-price price">
        ¥99999
        <!-- ¥<text>{{item.money}}</text> -->
      </view>
      <view class="footer-give" @click="goOrderPay">立即赠送</view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        isBox: true,
        // 默认选中项
        current: 1,
        // 会员卡数据
        list: [
          {
            id: 1,
            price: 29999,
            text: '年卡会员套餐'
          },
          {
            id: 2,
            price: 19999,
            text: '半年卡会员套餐'
          },
          {
            id: 3,
            price: 9999,
            text: '季卡会员套餐'
          },
          {
            id: 4,
            price: 49999,
            text: '月卡会员套餐'
          },
          {
            id: 5,
            price: 1999,
            text: '活动卡会员套餐'
          }
        ],
        // 手机号码
        phone: '',
        give: '',
        giveList: [],
        user_id: ''
			}
    },
    onLoad() {
      this.user_id = uni.getStorageSync('user_id')
      // 获取所有会员套餐信息接口
      this.getFindList(),
      // 获取赠送规则接口
      this.getBankRules()
    },
		methods: {
      // 获取赠送规则接口
      getBankRules() {
        this.$http.get('/bank/getBankRules', {}).then(res => {
          console.log(res)
          this.give = res.data.data.give
        })
      },
      // 获取所有会员套餐信息接口
      // getFindList() {
      //   uni.request({
      //     url: "http://192.168.1.155:8086/WNC/memberPackage/findList",
      //     data: {},
      //     header: {
      //       "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      //     },
      //     succeee(res) {
      //       console.log(res);
      //     }
      //   });
      // },
      // 获取所有会员套餐信息接口
      getFindList() {
        this.$http.get('/memberPackage/findList', {}).then(res => {
          console.log(res)
          this.giveList = res.data
        })
      },
      // 去会员管理页面
      goVipManage() {
        uni.navigateTo({
					url: '/pages/vipManage/vipManage'
				});
      },
      // 去赠送记录页面
      // goVipGiveRecord() {
      //   uni.navigateTo({
      //     url: '/pages/vipGiveRecord/vipGiveRecord'
      //   })
      // },
      radioChange(e) {
        this.current = Number(e.detail.value)
        console.log(this.current)
      },
      // 去支付页面
      goOrderPay() {
      // 手机号码正则表达式
       var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
       if (reg.test(this.phone)) {
        //   this.$http.get('/memberPackage/give', { params: { user_id:1, phone: this.phone, package_id: this.current } }).then(res => {
        //     console.log(res)
        // })
        this.$http.get('/memberPackage/give', { params: { user_id: this.user_id,phone: this.phone, package_id: this.current } }).then(res => {
          console.log(res)
          if (res.data.flag == '"success"') {
            uni.navigateTo({
              url: '/pages/orderPay/orderPay'
            })
          } else {
            uni.showToast({
                title: '对方已是会员 不可赠送不同种类会员',
                duration: 2000,
                icon: 'none'
            });           
          }
        })
       } else {
        uni.showToast({
            title: '请您输入正确的手机号码',
            duration: 2000,
            icon: 'none'
        });
       }
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
// 会员卡片样式

// 非会员卡片样式
.container{
  background: white
}
.order-header{
  width:750rpx;
  height:172rpx;
  background:#333;

}
.vip-card{
  position: relative;
  width:690rpx;
  height:249rpx;
  background:rgba(57,172,54,1);
  box-shadow:0px 0px 40rpx 0px rgba(101,205,98,0.2);
  border-radius:20rpx;
  // padding: 70rpx 38rpx;
  box-sizing: border-box;
  position: absolute;
  top: 10rpx;
  left: 50%;
  margin-left: -345rpx;
  image {
    width: 100%;
    height: 100%;
  }
  .header-text {
    position: absolute;
    width: 600rpx;
    top: 80rpx;
    left: 40rpx;
  }
}
.header-box {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 52rpx 0 40rpx;
  position: absolute;
  top: 58rpx;
  width: 100%;
  image {
    width: 100%;
    height: 100%;
  }
  .box-left {
    display: flex;
    .header-left {
      width: 102rpx;
      height: 102rpx;
      margin-right: 26rpx;
    }
    .header-center {
      .center-uname {
        font-size: 34rpx;
        font-family: PingFang;
        // font-weight:bold;
        color:rgba(255,255,255,1);
      }
      .center-member {
        width: 128rpx;
        height: 34rpx;
        line-height: 34rpx;
        text-align: center;
        font-size: 26rpx;
        font-family: PingFang;
        border: 1rpx solid rgba(221,178,48,1);
        border-radius: 17rpx;
        // font-weight: bold;
        color:rgba(245,194,74,1);
        margin: 10rpx 0 20rpx 0;
      }
      .center-timer {
        // font-weight: bold;
        color:rgba(255,255,255,1);
        font-family: Source Han Sans CN;
        font-size: 24rpx;
        margin-right: 6rpx;
      }
    }
  }
  .box-right {
    width: 126rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    background:rgba(221,178,48,1);
    box-shadow: 0rpx 3rpx 7rpx 0rpx rgba(247, 111, 108, 0.35);
    border-radius: 30rpx;
    font-size: 30rpx;
    // font-weight: bold;
    color:rgba(255,255,255,1);
    font-family: PingFang;
    margin-top: 60rpx;
  }
}
.title{
  width:442rpx;
  height:36rpx;
  font-size:34rpx;
  font-family:Source Han Sans CN;
  // font-weight:bold;
  color:rgba(255,255,255,1);
}

.cart-left{
  font-size:24rpx;
  font-family:Source Han Sans CN;
  // font-weight:bold;
  color:rgba(255,255,255,1);
  }
// .cart-right{
//   width:159rpx;
//   height:60rpx;
//   background:rgba(221,178,48,1);
//   box-shadow:0px 3rpx 7rpx 0px rgba(247, 111, 108, 0.35);
//   border-radius:30rpx;
//   font-size:30rpx;
//   font-family:PingFang;
//   // font-weight:bold;
//   color:rgba(255,255,255,1);
//   text-align: center;
//   line-height: 60rpx
// }
.bottom{
  margin-top: 38rpx
}


/* 会员充值列表样式开始 */
.vip-list{
  margin-top: 114rpx;
}
.list-info{
  padding: 0 30rpx;
  height: 130rpx;
  line-height: 130rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid rgba(235,235,235,1);

}
.list-info .left{
  align-self: center
}
.price{
  font-size:38rpx;
  font-family:PingFang;
  // font-weight:bold;
  color:rgba(51,51,51,1);
  line-height: 60rpx
}
.footer {
  height: 96rpx;
  line-height: 96rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32rpx;
  border-top: 1rpx solid #f1f1f1;
}
.footer-give {
  width:162rpx;
  height:60rpx;
  line-height: 60rpx;
  text-align: center;
  background:rgba(253,72,77,1);
  border-radius:30rpx;
  font-size:28rpx;
  font-family:PingFang SC;
  font-weight:bold;
  color:rgba(255,255,255,1);
}
.footer-price {
  color: rgba(57,172,54,1);
}
.type{
  font-size:26rpx;
  font-family:PingFang;
  // font-weight:bold;
  color:rgba(57,172,54,1);
  line-height:24rpx;
}

/* 推荐样式开始 */
.tuijian{
  margin-top: 50rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
  margin-bottom: 134rpx
}
.tuijian image{
  width:70rpx;
  height:70rpx;
}
.tuijian .item{
  width:337rpx;
  height:126rpx;
  background:rgba(255,255,255,1);
  border:1rpx solid rgba(204,204,204,1);
  box-shadow:0px 3rpx 5rpx 0px rgba(153,153,153,0.3);
  border-radius:20rpx;
  padding: 0 14rpx;
  box-sizing: border-box
}
.tuijian .item>view{
  align-self: center
}
// 信息部分
  .info {
    padding: 0 32rpx;
    .info-title {
      display: flex;
      justify-content: space-between;
      margin: 60rpx 0;
      .info-tel {
        font-size: 32rpx;
        font-family: PingFang;
        font-weight: 500;
        color:rgba(51,51,51,1);
      }
      .record {
        font-family: PingFang;
        color:rgba(102,102,102,1);
        font-size: 30rpx;
      }
    }
    .info-input {
      width: 100%;
      height: 88rpx;
      background:rgba(255,255,255,1);
      border: 2rpx solid #CCC;
      border-radius: 5rpx;
      input {
        // margin-top: 20rpx;
        padding-top: 22rpx;
        background: none;  
        outline: none;  
        border: none;
        width: 100%;
        padding-left: 22rpx;
        .input-text {
          font-size: 28rpx;
          font-family: PingFang;
          font-weight: 500;
          color:rgba(153,153,153,1);
        }
      }
    }
    .notes {
      display: flex;
      justify-content: space-between;
      font-size: 26rpx;
      margin-top: 30rpx;
      font-family: PingFang;
      font-weight: 500;
      color:rgba(153,153,153,1);
      >view {
        display: inline-block;
      }
      .notes-text {
        margin-left: 30rpx;
      }
    }
  }
</style>
