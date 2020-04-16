<template>
  <!-- 我的 手机验证码页面 ming -->
  <view class="verification-code">
    <view class="box">
      <!-- 填写手机号码区域 -->
      <view class="code-box">
        <input
          placeholder="请输入新手机号码"
          v-model="telVal"
          type="number"
          placeholder-class="placeholder-tel"
        />
      </view>
      <!-- 验证码区域 -->
      <view class="code-box">
        <input
          placeholder="请输入验证码"
          v-model="codeVal"
          type="number"
          placeholder-class="placeholder-tel"
        />
        <!-- <view class="box-text" v-show="isStart" @click="start">{{sendVal}}</view> -->
        <view class="box-text" v-show="isStart" @click="getUpdatePhone">{{sendVal}}</view>
        <view class="box-text" v-show="isTime">剩余{{num}}秒</view>
      </view>
      <!-- 提交按钮 -->
    </view>
    <view class="code-btn" :class="{ active: isActive }" @click="submitVal">
      <button class="btn" :class="{ active: isActive }">提交</button>
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
      codeVal: "",
      // 点击发送的内容
      sendVal: "点击发送",
      // 倒计时内容
      num: 60,
      // 控制剩余时间的显示与隐藏
      isTime: false,
      // 控制点击发送的显示与隐藏
      isStart: true,
      // 返回的验证码
      ObtainCode: "",
      // 定时器命名
      timer: ""
    };
  },
  methods: {
    // 发送验证码
    getUpdatePhone() {
      // 手机号码的正则表达式
      var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
      // 当手机号码输入框不为 0 的时候
      if (reg.test(this.telVal)) {
        // 显示点击发送 隐藏剩余时间
        this.isTime = !this.isTime;
        this.isStart = !this.isStart;
        // 启动定时器
        this.countDown();
        this.$http
          .get("/user/generatePhoneCode", { params: { phone: this.telVal } })
          .then(res => {
            this.ObtainCode = res.data;
            if (res == "") {
              uni.showToast({
                title: "请输入正确的验证码",
                duration: 2000,
                icon: "none"
              });
            }
          });
        // uni.request({
        //   url: "http://192.168.1.143:8086/WNC/user/generatePhoneCode",
        //   data: {
        //     phone: this.telVal
        //   },
        //   header: {
        //     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        //   },
        //   success: res => {
        //     this.ObtainCode = res.data;
        //     // console.log(res);
        //     // 如果res.data 没有收到 需要需要一个弹出框提醒用户
        //     if (res === "") {
        //       uni.showToast({
        //         title: "请输入正确的验证码",
        //         duration: 2000,
        //         icon: "none"
        //       });
        //     }
        //   }
        // });
      } else {
        uni.showToast({
          title: "请输入正确的手机号码",
          duration: 2000,
          icon: "none"
        });
      }
    },
    // 点击提交按钮
    submitVal() {
      // 手机号码的正则表达式
      var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
      if (
        reg.test(this.phone) &&
        this.codeVal !== "" &&
        this.codeVal !== this.ObtainCode
      ) {
        uni.request({
          url: "http://192.168.1.143:8086/WNC/user/updatePhone",
          data: {
            phone: this.telVal,
            userId: 1,
            code: this.codeVal
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          },
          success: res => {
            // console.log(res);
          }
        });
        uni.showToast({
          title: "更换成功",
          duration: 2000,
          icon: "none",
          success: res => {
            setTimeout(() => {
              uni.navigateBack({
                url: "/pages/mineUserInformation/mineUserInformation"
              });
            }, 2000);
          }
        });
      } else {
        uni.showToast({
          title: "请输入手机号码或验证码",
          duration: 2000,
          icon: "none"
        });
      }
    },
    // start() {
    //   this.isTime = !this.isTime;
    //   this.isStart = !this.isStart;
    // }
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
        if (time === 0) {
          // 这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          // 因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(this.timer);
          // 当时间为 0 的时候 隐藏定时的内容 显示发送的内容 并且为定时器重新赋值
          (this.isStart = !this.isStart),
            (this.isTime = !this.isTime),
            (this.num = 60);
        }
      }, 1000);
    }
  },
  computed: {
    isActive() {
      if (this.telVal === "" || this.codeVal === "") {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="less" scoped>
// 选中的时候的按钮的颜色以及文字
.active {
  background-color: #279524 !important;
  opacity: 1 !important;
}
.box {
  background-color: #fff;
}
.verification-code {
  // 填写手机号码区域
  margin-top: 20rpx;
  .code-box {
    margin-left: 40rpx;
    height: 88rpx;
    line-height: 88rpx;
    background-color: #fff;
    border-bottom: 1rpx solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 100%;
      padding-left: 10rpx;
    }
    // placeholder 样式
    .placeholder-tel {
      font-size: 26rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
    .box-text {
      margin-right: 30rpx;
      width: 180rpx;
      height: 50rpx;
      line-height: 50rpx;
      text-align: center;
      background: rgba(191, 191, 191, 1);
      border-radius: 10rpx;
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
  // 提交按钮
  .code-btn {
    width: 630rpx;
    height: 90rpx;
    border-radius: 42rpx;
    margin: 73rpx auto;
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
}
</style>