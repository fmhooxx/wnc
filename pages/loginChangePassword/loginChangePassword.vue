<template>
  <!-- 更改密码 完成页面 ming -->
  <view class="login">
    <!-- 登录 -->
    <view class="login-title">更改密码</view>
    <!-- 注册 -->
    <view class="login-register">设置您的新密码</view>
    <!-- 输入手机号码和验证码区域 -->
    <view class="login-content">
      <view class="login-tel">
        <input type="number" v-model="telVal" focus placeholder-class="tel-password-class" />
        <view>
          |
          <text @click="passChange" v-show="passShow">显示</text>
          <text @click="passChange" v-show="passHide">隐藏</text>
        </view>
      </view>
      <view class="login-password">
        <input
          placeholder="请输入手机号码"
          type="number"
          v-model="verificationVal"
          placeholder-class="tel-password-class"
        />
        <view>
          |
          <text @click="telChange" v-show="telShow">显示</text>
          <text @click="telChange" v-show="telHide">隐藏</text>
        </view>
      </view>
    </view>
    <!-- 登录按钮 -->
    <view class="login-btn" :class="{ active: isActive }">
      <button class="btn" :class="{ active: isActive }" @click="goLogin">完成</button>
    </view>
    <!-- 第三方登录 -->
    <view class="login-third">
      <view class="third-footer">
        登录注册即表示你同意《
        <text>蛙农场用户协议</text>》和《
        <text>蛙农场隐私协议</text>》
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 手机号码输入的内容
      telVal: "",
      // 验证码输入的内容
      verificationVal: "",
      // 控制密码的显示与隐藏
      passShow: true,
      passHide: false,
      // 控制手机号码的显示与隐藏
      telShow: true,
      telHide: false
    };
  },
  methods: {
    // 点击手机号码旁边的字 控制显示不同的字样
    passChange() {
      this.passShow = !this.passShow;
      this.passHide = !this.passHide;
    },
    // 点击手机号码旁边的字 控制显示不同的字样
    telChange() {
      this.telShow = !this.telShow;
      this.telHide = !this.telHide;
    },
    // 点击完成去登录页面
    goLogin() {
      uni.navigateTo({
        url: "/pages/login/login"
      });
    }
  },
  computed: {
    isActive() {
      if (this.telVal === "" || this.verificationVal === "") {
        return false;
      }
      return true;
    }
  }
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
  // 手机号 验证码区域
  .login-content {
    > view {
      height: 80rpx;
      border-bottom: 1rpx solid #ececec;
    }
    .login-tel {
      margin-top: 60rpx;
      display: flex;
      justify-content: space-between;
      font-size: 24rpx;
      > input {
        width: 69%;
      }
      > view {
        color: rgba(201, 200, 207, 1);
        text {
          margin-left: 32rpx;
          font-size: 22rpx;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(168, 168, 168, 1);
        }
      }
    }
    .login-password {
      margin: 94rpx 0;
      display: flex;
      justify-content: space-between;
      font-size: 24rpx;
      > input {
        width: 69%;
      }
      > view {
        color: rgba(201, 200, 207, 1);
        text {
          margin-left: 32rpx;
          font-size: 22rpx;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(168, 168, 168, 1);
        }
      }
    }
    // 请输入手机号码和验证码的 placeholder 样式
    .tel-password-class {
      font-size: 30rpx;
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
      color: rgba(255, 255, 255, 1);
    }
  }
  // 第三方登录区域
  .login-third {
    position: absolute;
    bottom: 60rpx;
    text-align: center;
    .third-footer {
      font-family: Source Han Sans CN;
      font-size: 22rpx;
      font-weight: 400;
      color: #a8a8a8;
      text {
        color: #4baa58;
      }
    }
  }
}
</style>