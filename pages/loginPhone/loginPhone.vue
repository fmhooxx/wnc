<template>
  <!-- 注册页面 ming -->
  <view class="login">
    <!-- 登录 -->
    <!-- <view class="login-title">登录/注册</view> -->
    <!-- 注册 -->
    <view class="login-register">新号码自动注册</view>
    <!-- 输入手机号码和验证码区域 -->
    <view class="login-content">
      <view class="login-tel">
        <input
          placeholder="请输入手机号"
          type="number"
          v-model="phone"
          focus
          placeholder-class="tel-password-class"
        />
        <view>
          |
          <text v-if="isLogin" @click="getCode">获取验证码</text>
          <text class="login-time" v-else>剩余{{num}}秒</text>
        </view>
      </view>
      <view class="login-password">
        <input
          placeholder="请输入收到的验证码"
          type="number"
          v-model="verificationVal"
          placeholder-class="tel-password-class"
        />
      </view>
    </view>
    <!-- 登录按钮 -->
    <view class="login-btn" :class="{ active: isActive }">
      <button class="btn" :class="{ active: isActive }" @click="goLoginSetLoginPassword">登录</button>
    </view>
    <!-- 密码登录区域 -->
    <!-- <view class="login-text">
      <view>密码登录</view>
    </view>-->
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 手机号码输入的内容
      phone: "",
      // 验证码输入的内容
      verificationVal: "",
      // 收到的验证码
      code: "",
      // 控制发送以及剩余时间的切换显示
      isLogin: true,
      // 定时器命名
      timer: "",
      // 倒计时内容
      num: 60,
      gender: "",
      avatarUrl: "",
      nickName: "",
      openid: ""
    };
  },
  methods: {
    // (去设置登录密码页面 暂时废弃 直接使用验证码登录 然后跳转到输入邀请码页面)
    goLoginSetLoginPassword() {
      // 手机号码正则表达式
      var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
      if (reg.test(this.phone) && this.verificationVal == this.code) {
        this.$http
          .get("/user/loginForPhoneCode", {
            params: { phone: this.phone, number: this.code }
          })
          .then(res => {
            console.log(res);
            uni.setStorageSync("userLogin", this.phone);
            uni.setStorageSync("user_id", res.data);
            uni.switchTab({
              url: "/pages/index/index"
            });
            // uni.getUserInfo({
            //   withCredentials: true,
            //   success: res => {
            //     console.log(res);
            //     this.gender = res.userInfo.gender;
            //     this.avatarUrl = res.userInfo.avatarUrl;
            //     uni.setStorageSync("imageUrl", res.userInfo.avatarUrl);
            //     uni.setStorageSync("gender", res.userInfo.gender);
            //     uni.setStorageSync("avatarUrl", res.userInfo.avatarUrl);
            //     uni.setStorageSync("nickName", res.userInfo.nickName);
            //     // uni.navigateTo({
            //     //   url: '/pages/loginPhone/loginPhone'
            //     // })
            //     uni.request({
            //       url: "http://192.168.1.155:8086/WNC/wxlogin/saveUser",
            //       data: {
            //         gender: this.gender,
            //         nickName: this.nickName,
            //         openid: this.openid,
            //         imageUrl: this.imageUrl
            //         // encryptedData: res.encryptedData,
            //         // iv: res.iv,
            //         // rawData: res.rawData,
            //         // signature: res.signature,
            //         // appId: that.data.appId,
            //         // sessionKey: res.data.data.sessionKey
            //       },
            //       success: res => {
            //         console.log(res);
            //         var isLogin = true;
            //         // uni.setStorage({
            //         //   key: "isLogin",
            //         //   data: isLogin
            //         // });
            //       }
            //     });
            //   },
            //   fail() {
            //     //获取用户信息失败
            //     uni.showModal({
            //       title: "警告",
            //       content: "尚未进行授权，请点击授权获取更多信息。",
            //       success: function(res) {}
            //     });
            //   }
            // });
          });
      } else {
        uni.showToast({
          title: "请输入手机号码或验证码",
          duration: 2000,
          icon: "none"
        });
      }
    },
    // 获取验证码
    getCode() {
      // 手机号码正则表达式
      var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
      if (reg.test(this.phone)) {
        this.isLogin = false;
        // 调用倒计时函数
        this.countDown();
        this.$http
          .get("/user/generatePhoneCode", { params: { phone: this.phone } })
          .then(res => {
            // console.log(res.data)
            this.code = res.data;
            console.log(res);
          });
        // uni.request({
        //   url: 'http://192.168.1.166:8086/WNC/wxlogin/register',
        //   data: {
        //     phone: this.phone
        //   },
        //   header: {
        //   'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
        //   },
        //   success: res => {
        //     console.log(res)
        //     this.code = res.data.code
        //     uni.setStorageSync('phone', this.phone)
        //   }
        // })
      } else {
        uni.showToast({
          title: "请输入正确的手机号码",
          duration: 2000,
          icon: "none"
        });
      }
    },
    // 倒计时效果
    countDown() {
      // 获取倒计时初始值
      var time = this.num;
      // 未定时器命名
      this.timer = setInterval(() => {
        // 每隔一秒 num 就减一，实现同步
        time--;
        // 然后把 num 存进 data，好让用户知道时间在倒计着
        this.num = time;
        // 在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (time == 0) {
          // 这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          // 因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(this.timer);
          // 当时间为 0 的时候 隐藏定时的内容 显示发送的内容 并且为定时器重新赋值
          (this.isLogin = true), (this.num = 60);
        }
      }, 1000);
    }
  },
  computed: {
    isActive() {
      if (this.phone === "" || this.verificationVal === "") {
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
      border-bottom: 1rpx solid #ececec;
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
        color: rgba(201, 200, 207, 1);
        text {
          display: inline-block;
          width: 160rpx;
          height: 50rpx;
          line-height: 50rpx;
          text-align: center;
          background: rgba(255, 255, 255, 1);
          border: 1rpx solid rgba(201, 200, 207, 1);
          border-radius: 25rpx;
          font-size: 26rpx;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(168, 168, 168, 1);
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
      color: rgba(255, 255, 255, 1);
    }
  }
  // 密码登录
  .login-text {
    float: right;
    font-size: 24rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(165, 165, 165, 1);
  }
}
</style>