<template>
  <!-- 修改昵称页面 ming -->
  <view class="nickname">
    <!-- 输入昵称区域 -->
    <view class="nickname-content">
      <input
        placeholder="最大支持10个字符"
        @input="inputVal"
        @blur="inputBlur"
        v-model="nicknameVal"
        placeholder-class="tel-nickname-class"
        focus
      />
      <icon v-show="isIcon" @click="clearVal" size="19" color="#ccc" type="clear" />
    </view>
    <!-- 提交按钮 -->
    <view class="nickname-btn" :class="{ active: isActive }" @click="submit">
      <button class="btn" :class="{ active: isActive }">提交</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 昵称输入的内容
      nicknameVal: "",
      // 控制按钮的颜色
      isActive: false,
      // 控制清楚小图标的显示与隐藏
      isIcon: false
    };
  },
  methods: {
    // 当昵称框有输入内容的时候
    inputVal() {
      this.isActive = true;
      this.isIcon = true;
    },
    // 当密码框失去焦点的时候
    inputBlur() {
      if (this.nicknameVal !== "") {
        return (this.isActive = true);
      }
      return (this.isActive = false), (this.isIcon = false);
    },
    // 点击小图标清楚 input 里面的内容
    clearVal() {
      this.nicknameVal = "";
      this.isIcon = false;
    },
    submit() {
      this.$http
        .get("/user/updatenickName", { userId: 1, nickName: this.nicknameVal })
        .then(res => {
          console.log(res);
        });
      // uni.request({
      //   url: "http://192.168.1.143:8086/WNC/user/updatenickName",
      //   data: {
      //     userId: 1,
      //     nickName: this.nicknameVal
      //   },
      //   header: {
      //     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      //   },
      //   success: res => {
      //     console.log(res);
      //   }
      // });
    }
  }
};
</script>

<style lang="less" scoped>
image {
  width: 100%;
  height: 100%;
}
.active {
  background-color: #279524 !important;
  opacity: 1 !important;
}
.nickname {
  // 输入昵称区域
  .nickname-content {
    padding: 0 30rpx;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    margin-top: 20rpx;
    input {
      height: 100%;
      width: 90%;
    }
    // 请输入昵称的 placeholder 样式
    .tel-nickname-class {
      font-size: 30rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(201, 200, 207, 1);
    }
    .clear {
      width: 38rpx;
      height: 38rpx;
      i {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 提交按钮
  .nickname-btn {
    width: 630rpx;
    height: 90rpx;
    border-radius: 42rpx;
    margin: 150rpx auto;
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