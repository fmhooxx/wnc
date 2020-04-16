<template>
  <!-- 登录页面 ming -->
  <view class="login">
    <!-- 登录 -->
    <view class="login-title">登录/注册</view>
    <!-- 注册 -->
    <view class="login-register">新号码请使用验证码注册</view>
    <!-- 输入手机号码和密码区域 -->
    <view class="login-content">
      <view class="login-tel">
        <input placeholder="请输入手机号" type="number" v-model="telVal" focus placeholder-class="tel-password-class" />
      </view>
      <view class="login-password">
        <input placeholder="请输入您的密码" v-model="passVal" placeholder-class="tel-password-class" />
      </view>
    </view>
    <!-- 登录按钮 -->
    <view class="login-btn" :class="{ active: isActive }">
      <button class="btn" :class="{ active: isActive }" @click="login">登录</button>
    </view>
    <!-- 注册 忘记密码 -->
    <view class="login-text">
      <view @click="goLoginRegister">注册</view>
      <view @click="goLoginInvitationCode">忘记密码</view>
    </view>
    <!-- 第三方登录 -->
    <view class="login-third">
      <view class="third-text">第三方账号登录</view>
      <view class="third-img">
        <image src="/static/images/wechart.png"></image>
      </view>
      <view class="third-weixin">微信登录</view>
      <view class="third-footer">登录注册即表示你同意《<text>蛙农场用户协议</text>》和《<text>蛙农场隐私协议</text>》</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 手机号码输入的内容
      telVal: '',
      // 密码输入的内容
      passVal: ''
    };
  },
  methods: {
    // 去注册页面
    goLoginRegister() {
      uni.navigateTo({
        url: "/pages/loginRegister/loginRegister"
      })
    },
    goLoginInvitationCode() {
      uni.navigateTo({
        url: "/pages/loginChangepasswordCode/loginChangepasswordCode"
      })
    },
    // 点击登录按钮
    login() {
      if (this.telVal !== '' && this.passVal !== '') {
        return uni.navigateTo({
          url: "/pages/loginInvitationCode/loginInvitationCode"
        });
      }
      return uni.showToast({
          title: '请输入手机号码或密码',
          duration: 2000,
          icon: 'none'
      })
    }
  },
  computed: {
    isActive() {
      if (this.telVal === '' || this.passVal === '') {
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
image {
  width: 100%;
  height: 100%;
}
// 选中的时候的按钮的颜色以及文字
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
    font-size: 24rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(151, 151, 151, 1);
  }
  // 手机号 密码区域
  .login-content {
    font-size: 32rpx;
    > view {
      height: 80rpx;
      border-bottom: 1rpx solid #ECECEC;
    }
    .login-tel {
      margin-top: 123rpx;
    }
    .login-password {
      margin: 94rpx 0;
    }
    // 请输入手机号码和密码的 placeholder 样式
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
  // 注册 忘记密码
  .login-text {
    display: flex;
    justify-content: space-between;
    font-size: 24rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color:rgba(165,165,165,1);
  }
  // 第三方登录区域
  .login-third {
    position: absolute;
    bottom: 60rpx;
    text-align: center;
    .third-text {
      font-size: 20rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color:rgba(165,165,165,1);
    }
    .third-img {
      image {
        width: 88rpx;
        height: 88rpx;
        margin: 46rpx 0 21rpx 0
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