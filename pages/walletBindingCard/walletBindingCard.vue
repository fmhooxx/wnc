<template>
  <!-- 绑定银行卡页面 form ming -->
  <view class="binding-card">
    <view class="binding">
      <view>
        <view class="w">真实姓名</view>
        <input placeholder="请输入您的真实姓名" v-model="uname" placeholder-class="text" />
      </view>
      <view>
        <view class="w">银行卡号</view>
        <input
          placeholder="请输入您的银行卡号"
          @blur="cardNumBlur"
          v-model="cardNum"
          placeholder-class="text"
        />
      </view>
      <view>
        <view class="w">开户行名</view>
        <input placeholder="请输入您的开户银行名称" v-model="cardName" placeholder-class="text" />
      </view>
    </view>
    <view class="btn" :class="{ active: isActive }" @click="getBank">确认</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 真实姓名输入框内容
      uname: "",
      // 银行卡号输入框内容
      cardNum: "",
      // 开户行名称
      cardName: "",
      user_id: "",
      wallet_id: ""
    };
  },
  onLoad() {
    this.wallet_id = uni.getStorageSync("wallet_id");
    this.user_id = uni.getStorageSync("user_id");
  },
  methods: {
    cardNumBlur() {
      var regExp = /^([1-9]{1})(\d{15}|\d{18})$/;
      if (regExp.test(this.cardNum)) {
      } else {
        uni.showToast({
          title: "请输入16位或者19位的银行卡号",
          duration: 3000,
          icon: "none"
        });
      }
    },
    // 绑定银行卡
    getBank() {
      // 正则表达式 验证银行卡号位数 16 19 验证正确
      var regExp = /^([1-9]{1})(\d{15}|\d{18})$/;
      if (
        this.uname !== "" &&
        regExp.test(this.cardNum) &&
        this.cardName !== ""
      ) {
        this.$http
          .get("/wallet/getBank", {
            params: {
              wallet_id: this.wallet_id,
              user_id: this.user_id,
              real_name: this.uname,
              account: this.cardNum,
              acc_type: this.cardName
            }
          })
          .then(res => {
            if (res.data == 1) {
              uni.navigateTo({
                url: "/pages/walletChoiceBankCard/walletChoiceBankCard"
              });
            } else {
              uni.showToast({
                title: "添加失败",
                duration: 2000,
                icon: "none"
              });
            }
          });
      } else {
        uni.showToast({
          title: "请您将信息填写完整",
          duration: 2000,
          icon: "none"
        });
      }
    }
  },
  computed: {
    isActive() {
      if (this.uname === "" || this.cardNum === "" || this.cardName === "") {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="less" scoped>
.binding-card {
  // 选中的背景颜色
  .active {
    background: rgba(72, 188, 91, 1) !important;
  }
  input {
    width: 74%;
  }
  .binding {
    margin-top: 20rpx;
    > view {
      display: flex;
      align-items: center;
      height: 90rpx;
      line-height: 90rpx;
      font-size: 30rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      background: rgba(255, 255, 255, 1);
      padding-left: 25rpx;
      box-sizing: border-box;
      margin-bottom: 2rpx;
      .w {
        margin-right: 65rpx;
      }
      .text {
        font-size: 30rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .btn {
    margin: 50rpx auto;
    width: 620rpx;
    height: 90rpx;
    line-height: 90rpx;
    background: rgba(207, 208, 212, 1);
    border-radius: 10rpx;
    font-size: 32rpx;
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>