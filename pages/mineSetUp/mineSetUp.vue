<template>
  <!-- 我的 设置页面 ming -->
  <view class="account-management">
    <view>
      <view class="management-box w" @click="goMineAccountManagement">
        <!-- 左边 -->
        <view class="box-left">我的账户</view>
        <!-- 右边 -->
        <view class="box-right">
          <view class="right-tel">1234567890</view>
          <view class="tel-img">
            <image src="/static/images/arrow-right.png"></image>
          </view>
        </view>
      </view>
      <view class="management-box">
        <!-- 左边 -->
        <view class="box-left">版本信息</view>
        <!-- 右边 -->
        <view class="box-right">V 2.1</view>
      </view>
      <view class="management-box">
        <!-- 左边 -->
        <view class="box-left">软件缓存</view>
        <!-- 右边 -->
        <view class="box-right">49.10M</view>
      </view>
    </view>
    <view class="signOut" @click="openBasePopup">退出当前账号</view>
    <!-- 弹框内容 -->
    <BasePopup ref="popup" type="center">
      <view class="box">
        <view class="box-title">退出当前账号</view>
        <view class="box-content">
          <text @click="closeBasePopup">取消</text>
          <text @click="closeBasePopup">确定</text>
        </view>
      </view>
    </BasePopup>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 去我的账户管理
    goMineAccountManagement() {
      uni.navigateTo({
        url: '/pages/mineAccountManagement/mineAccountManagement'
      });
    },
    // 点击退出账号 打开弹框
    openBasePopup() {
      this.$refs.popup.open()
    },
    // 关闭弹框
    closeBasePopup() {
      uni.clearStorageSync()
      this.$refs.popup.close()
    }
  }
};
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
}
.account-management {
  margin-top: 20rpx;
  > view {
    background-color: #fff;
  }
  .management-box {
    margin-left: 30rpx;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding-right: 30rpx;
    font-size: 26rpx;
    font-family: PingFang;
    font-weight: 500;
		color: rgba(51, 51, 51, 1);
    // margin: 38rpx 0;
    height: 100rpx;
    line-height: 100rpx;
    border-bottom: 1rpx solid #f1f1f1;
    // 左边
    .box-left {
			font-weight: 400;
    }
    // 右边
    .box-right {
			display: flex;
      font-weight: 400;
			color: rgba(102, 102, 102, 1);
      .tel-img {
        width: 12rpx;
        height: 22rpx;
        margin-left: 15rpx;
      }
    }
  }
  .signOut {
    margin-top: 58rpx;
    text-align: center;
    height: 100rpx;
    line-height: 100rpx;
    background:rgba(255,255,255,1);
    font-size: 26rpx;
    font-family: PingFang;
    font-weight: 500;
    color:rgba(51,51,51,1);
  }
}
// 弹框样式
.box {
  width: 540rpx;
  height: 240rpx;
  background-color: #fff;
  border-radius: 10rpx;
  box-sizing: border-box;
  padding: 0 40rpx;
  .box-title {
    font-size: 34rpx;
    font-family: PingFang;
    font-weight: 400;
    color:rgba(149,149,149,1);
    text-align: center;
    margin: 70rpx auto;
  }
  .box-content {
    display: flex;
    justify-content: space-between;
    > text {
      width: 160rpx;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      background:rgba(229,229,229,1);
      border-radius: 10rpx;
      font-size: 34rpx;
      font-family: PingFang;
      font-weight: 400;
      color:rgba(102,102,102,1);
    }
  }
}
</style>