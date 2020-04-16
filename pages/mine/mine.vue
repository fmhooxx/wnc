<template>
  <view class="container">
    <!-- 头部 -->
    <view class="head">
      <!-- 头部的背景图片 -->
      <image src="/static/images/bg.png"></image>
      <!-- 背景图片上面的内容 -->
      <view class="head-content">
        <!-- 左边 -->
        <view class="content-left">
          <!-- 头像 -->
          <image :src="avatarUrl"></image>
          <!-- 左边的文字 -->
          <!-- 未登录区域 -->
          <!-- <button open-type="getUserInfo" @click="getUserInfos" v-if="isLogin" class="login">立即登录</button> -->
          <button @click="login"  v-if="isLogin" class="login">立即登录</button>
          <!-- <button open-type="getUserInfo" @click="login" v-if="isLogin" class="login">立即登录</button> -->
          <!-- 已登录区域 -->
          <view v-else class="left-text">
            <!-- 用户昵称 -->
            <view class="user">{{nickName}}</view>
            <!-- 手机号码区域 -->
            <view class="tel">
              <!-- 手机标识 -->
              <image src="/static/images/phone.png"></image>
              <!-- 手机号码 -->
              <view class="tel-text">{{userLogin}}</view>
            </view>
          </view>
        </view>
        <!-- 右边 -->
        <view class="content-right" @click="goMineUserInformation">
          <view>账户管理</view>
          <image src="/static/images/a.png"></image>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="box">
        <view class="vip w" @click="goVipCard">
          <image src="../../static/images/vip.png" />
          <view>会员卡</view>
        </view>
        <!-- <view class="wallet w" @click="goWallet"> -->
        <view class="wallet w">
          <image src="../../static/images/wallet.png" />
          <view>我的钱包</view>
        </view>
      </view>
      <view class="container-list">
        <view v-for="(item, index) in list" :key="index" @click="goOther(index)">
          <view class="list">
            <view class="left">
              <image :src="item.url" mode="aspectFit"></image>
            </view>
            <view class="right" :class="{ noborder: index === current }">
              <text>{{item.text}}</text>
              <!-- <button type="default" bindtap="calling">拨打电话</button> -->
              <image src="/static/images/arrow-right.png"></image>
            </view>
          </view>
          <view :class="{ bgc: index === current }"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          url: "/static/images/m1.jpg",
          text: "我的订单"
        },
        {
          id: 1,
          url: "/static/images/m2.jpg",
          text: "我的报名"
        },
        // {
        //   id: 2,
        //   url: "/static/images/m3.jpg",
        //   text: "我的推荐码"
        // },
        {
          id: 3,
          url: "/static/images/m5.jpg",
          text: "收货地址"
        },
        {
          id: 4,
          url: "/static/images/m7.jpg",
          text: "关于我们"
        },
        {
          id: 5,
          url: "/static/images/m6.jpg",
          text: "客服电话"
        },
        {
          id: 6,
          url: "/static/images/m10.jpg",
          text: "意见反馈"
        },
        {
          id: 7,
          url: "/static/images/m9.jpg",
          text: "我的设置"
        }
      ],
      current: 2,
      // 控制已登录和未登录的切换显示
      isLogin: true,
      // 默认头像
      defaultHead: '/static/images/head.png',
      // 默认名称
      // defaultUname: '蛙农场用户',
      // 存储用户登录的凭证
      userLogin: '',
      // 存储手机号码
      phone: '',
      // 用户头像
      avatarUrl: '/static/images/head.png',
      // 用户姓名
      nickName: '',
      // 用户的 openid
      openid: ''
    };
  },
  onLoad() {
    if (this.openid == '') {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  onShow() {
    this.openid = uni.getStorageSync('openid')
    if (this.openid != '') {
      this.userLogin = uni.getStorageSync('userLogin')
      // this.phone = uni.getStorageSync('phone')
      this.avatarUrl = uni.getStorageSync('avatarUrl')
      this.nickName = uni.getStorageSync('nickName') 
    }
    // this.phone = uni.getStorageSync('phone')
    if (this.openid == '') {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  methods: {
    // 去会员卡页面
    goVipCard() {
      uni.navigateTo({
        url: "/pages/vipCard/vipCard"
      });
    },
    // 去我的钱包页面
    goWallet() {
      uni.navigateTo({
        url: "/pages/wallet/wallet"
      });
    },
    // 去用户信息页面
    goMineUserInformation() {
      uni.navigateTo({
        url: "/pages/mineUserInformation/mineUserInformation"
      });
    },
    // 判断去不同的页面
    goOther(index) {
      // 去我的订单页面
      if (index === 0) {
        // return uni.navigateTo({
        //   url: "/pages/myOrder/myOrder"
        // });
        return uni.navigateTo({
          url: "/pages/expect/expect"
        });
      } 
      // 去我的邀请码
      // else if (index === 2) {
			// 	uni.request({
			// 		url: "http://192.168.1.143:8086/WNC/user/getCode",
			// 		data: {
			// 			userId: 1,
			// 		},
			// 		header: {
			// 			"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
			// 		},
			// 		success: res => {
			// 			console.log(res)
			// 		}
      //   });
      //   return uni.navigateTo({
      //     url: "/pages/expect/expect"
      //   });
      //   return uni.navigateTo({
      //     url: "/pages/mineRecommendCourtesy/mineRecommendCourtesy"
      //   });
      // }
      // 去设置页面
      else if (index === 6) {
        return uni.navigateTo({
          url: "/pages/mineSetUp/mineSetUp"
        });
        // 去地址管理页面
      } else if (index === 2) {
        return uni.navigateTo({
          url: "/pages/greenAddrManage/greenAddrManage"
        });
      } else if (index === 1) {
        // 去正在开发页面
				uni.navigateTo({
					url: '/pages/expect/expect'
				})
      }
      // 去售后服务页面
      // else if (index === 2) {
      //   return uni.navigateTo({
      //     url: "/pages/mineAfterSaleService/mineAfterSaleService"
      //   });
      // }
      // 去常见问题页面
      // else if (index === 7) {
      //   return uni.navigateTo({
      //     url: "/pages/mineCommonProblem/mineCommonProblem"
      //   });
      // } 
      // 去关于我们页面
      else if (index === 3) {
        return uni.navigateTo({
          url: "/pages/mineAboutUs/mineAboutUs"
        });
      }
      // 去意见反馈页面
      else if (index === 5) {
        return uni.navigateTo({
          url: "/pages/mineFeedback/mineFeedback"
        });
      } else if(index === 4) {
        
      }
    },
    // 获取用户信息
    // getUserInfos() {
    //   uni.getUserInfo({
    //     success: res => {
    //       console.log(res)
    //       this.defaultHead = res.userInfo.avatarUrl
    //       this.defaultUname = res.userInfo.nickName
    //       this.isLogin = false
    //     }
    //   })
    // }
    login() {
      if (this.openid == '') {
        uni.navigateTo({
          url: "/pages/loginRegister/loginRegister"
        });
      } else {
        this.isLogin = true
      }
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
.container {
  position: relative;
  background: #f2f2f2;
}

// 头部
.head {
  font-family: Source Han Sans CN;
  font-weight: 400;
  color:rgba(255,255,255,1);
  // 头部的背景图片
  > image {
    height: 305rpx;
    width: 100%;
  }
  // 背景图片上面的内容
  .head-content {
    width: 100%;
    position: absolute;
    top: 56rpx;
    padding-left: 33rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // 左边
    .content-left {
      display: flex;
      // 头像
      > image {
        width: 106rpx;
        height: 106rpx;
        margin-right: 36rpx;
        border-radius: 50%;
      }
      // 左边的文字 已登录区域
      .left-text {
        // 用户昵称
        .user {
          font-size: 28rpx;
          font-weight: 500;
        }
        // 手机号码区域
        .tel {
          display: flex;
          align-items: center;
          margin-top: 26rpx;
          // 手机标书
          > image {
            width: 17rpx;
            height: 23rpx;
          }
          // 手机号码
          .tel-text {
            font-size: 26rpx;
            margin-left: 10rpx;
          }
        }
      }
      // 未登录区域
      .login {
        height: 50rpx;
        line-height: 50rpx;
        text-align: center;
        width: 200rpx;
        border: 1rpx solid red;
        border: 1rpx solid #f1f1f1;
        border-radius: 50rpx;
        font-size: 28rpx;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color:rgba(255,255,255,1);
        background-color: transparent;
        margin-top: 32rpx;
      }
      button {
        border: 1rpx solid transparent;
      }
    }
    // 右边
    .content-right {
      width: 130rpx;
      height: 50rpx;
      display: flex;
      line-height: 50rpx;
      text-align: center;
      border: 2rpx solid #fff;
      border-right: transparent;
      border-radius: 25rpx 0 0 25rpx;
      > view {
        font-size: 24rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color:rgba(255,255,255,1);
        margin-left: 8rpx;
      }
      > image {
        width: 12rpx;
        height: 22rpx;
        vertical-align: middle;
        margin-top: 14rpx;
        margin-left: 10rpx;
      }
    }
  }
}
.footer {
  position: absolute;
  top: 216rpx;
  // left: 20rpx;
  background: rgba(255, 255, 255, 1);
  // width: 710rpx;
  border-radius: 20rpx;
}
.box {
  width: 710rpx;
  height: 126rpx;
  margin-left: 20rpx;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rpx 1rpx 5rpx 0rpx rgba(204, 204, 204, 0.35);
  border-radius: 20rpx;
  z-index: 9;
  .vip {
    border-right: 1rpx solid #f2f2f2;
  }
  .w {
    width: 50%;
    height: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    > view {
      font-size: 32rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(51,51,51,1);
    }
  }
}
.container-list {
  position: absolute;
  // width: 710rpx;
  width: 750rpx;
  top: 126rpx;
  background-color: #fff;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100rpx;
  line-height: 100rpx;
  padding: 0 30rpx;
  .left {
    image {
      width: 48rpx;
      height: 48rpx;
      vertical-align: middle;
      margin-right: 26rpx;
    }
  }
  .right {
    width: 90%;
    border-bottom: 2rpx solid #f1f1f1;
    text {
      font-size: 32rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    image {
      margin-top: 40rpx;
      float: right;
      width: 12rpx;
      height: 22rpx;
    }
  }
}
.bgc {
  height: 20rpx;
  width: 100%;
  background-color: #f2f2f2;
}
.noborder {
  border-bottom: none !important;
}
.box image {
  width: 35rpx;
  height: 35rpx;
  margin-right: 20rpx;
  vertical-align: middle;
}

.phone {
  display: flex;
  align-items: center;
}

.phone image {
  width: 17rpx;
  height: 23rpx;
  margin: 0 5rpx 0 40rpx;
}
.phone text {
  margin: 0 !important;
}
</style>
