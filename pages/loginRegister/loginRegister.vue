<template>
  <!-- 注册页面 ming -->
  <view class="login">
    <!-- 第三方登录 -->
    <view class="login-third">
      <!-- <view class="third-text">第三方账号登录</view> -->
      <button class="third-img" open-type="getUserInfo" @click="login">
        <image src="/static/images/wechart.png"></image>
      </button>
      <view class="third-weixin">微信登录</view>
      <view class="third-footer">登录注册即表示你同意《<text>蛙农场用户协议</text>》和《<text>蛙农场隐私协议</text>》</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      openid: '',
      session_key: '',
      avatarUrl: '',
      gender: '',
      nickName: '',
      birthday:'',
      shareOpenid:'',
      encryptedData: '',
      errMsg: '',
      iv: ''
    };
  },
  methods: {
    // 微信登录
    login() {
      uni.login({
        provider: 'weixin',
        success: res => {
          // console.log(res)
          if (res.code) {
            uni.request({
              url: 'https://www.tailongshoudian.com/WNC/wxlogin/code2Session',
              method: "GET",
              header: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=utf-8"
              },
              data: {
                code: res.code
              },
              success: res => {
                // console.log(res)
                if (res.data.success == true) {
                  this.openid = res.data.data.openid
                  this.session_key = res.data.data.session_key
                  uni.setStorageSync('openid',res.data.data.openid)
                  uni.setStorageSync('session_key', res.data.data.session_key)
                  this.getUser()
                }
              }
            })
          }
        }
      })
    },
    getUser() {
      uni.getUserInfo({
        success: res => {
          console.log(res)
          this.encryptedData = res.encryptedData
          this.errMsg = res.errMsg
          this.iv = res.iv
          uni.setStorageSync('avatarUrl',res.userInfo.avatarUrl)
          uni.setStorageSync('gender',res.userInfo.gender)
          uni.setStorageSync('nickName',res.userInfo.nickName)
          this.avatarUrl = res.userInfo.avatarUrl
          this.gender = res.userInfo.gender
          this.nickName = res.userInfo.nickName
          uni.request({
            url: 'https://www.tailongshoudian.com/WNC/wxlogin/saveUser',
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
              },
            data: {
              gender: this.gender,
              nickName: this.nickName,
              openid: this.openid,
              imageUrl: this.avatarUrl,
              // encryptedData: this.encryptedData,
              // errMsg: this.errMsg,
              // iv: this.iv
            },
            success: res => {
              console.log(res)
              uni.navigateTo({
                url: "/pages/loginPhone/loginPhone"
              });
            }
          })
        }
      })
    }
  },
  computed: {
    isActive() {
      if (this.phone === '' || this.verificationVal === '') {
        return false
      }
      return true
    }
  },
};
</script>

<style>
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
.login-time {
  color: #279524 !important;
}
image {
  width: 100%;
  height: 100%;
}
.active {
  background-color: #279524 !important;
  opacity: 1 !important;
}
.login {
  padding: 0 56rpx;
  // 登录
  .login-title {
    font-size: 48rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(38, 38, 38, 1);
    margin-bottom: 24rpx;
  }
  // 注册
  .login-register {
    font-size: 30rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(151, 151, 151, 1);
  }
  // 手机号 验证码区域
  .login-content {
    > view {
      height: 80rpx;
      border-bottom: 1rpx solid #ECECEC;
    }
    .login-tel {
			margin-top: 123rpx;
			display: flex;
			justify-content: space-between;
			// font-size: 30rpx;
			> input {
				width: 69%;
			}
			> view {
				color:rgba(201,200,207,1);
				text {
					display: inline-block;
					width: 160rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					background:rgba(255,255,255,1);
					border: 1rpx solid rgba(201, 200, 207, 1);
					border-radius:25rpx;
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color:rgba(168,168,168,1);
					margin-left: 20rpx;
				}
			}
    }
    .login-password {
      margin: 94rpx 0;
    }
    // 请输入手机号码和验证码的 placeholder 样式
    .tel-password-class {
      font-size: 30rpx !important;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(201, 200, 207, 1);
    }
  }
  // 登录按钮
  .login-btn {
    width: 630rpx;
    height: 90rpx;
    margin-bottom: 33rpx;
    border-radius: 42rpx;
    .btn {
      width: 100%;
      background: rgba(39, 149, 36, 1);
      opacity: 0.5;
      border-radius: 42rpx;
      font-size: 36rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(255,255,255,1);
    }
  }
  // 密码登录
  .login-text {
		float: right;
    font-size: 24rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color:rgba(165,165,165,1);
  }
  // 第三方登录区域
  .login-third {
    position: absolute;
    // bottom: 60rpx;
    top: 160rpx;
    text-align: center;
    .third-text {
      font-size: 30rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(165,165,165,1);
    }
    .third-img {
      margin: 20rpx auto 20rpx;
      width: 88rpx;
      height: 88rpx;
      border-radius: 50%;
      padding: 0;
      image {
        width: 88rpx;
        height: 88rpx;
        border-radius: 50%;
      }
    }
    .third-weixin {
      font-size: 22rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(104,104,104,1);
      margin-bottom: 38rpx;
    }
    .third-footer {
      font-family: Source Han Sans CN;
      font-size: 22rpx;
      font-weight: 400;
      color: #A8A8A8;
      text {
        color: #4BAA58;
      }
    }
  }
}
</style>