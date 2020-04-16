<template>
  <!--pages/vipDefaultTaoCan/vipDefaultTaoCan.wxml-->
  <view class="container">
    <view class="list">
      <view class="big-title title">默认套餐</view>

      <!-- 列表内容开始 -->
      <view class="manage">
        <view class="flex-row">
          <view class="info-small-title">西红柿 500g</view>
          <view>×1</view>
        </view>
        <view class="flex-row">
          <view class="info-small-title">黄瓜 500g</view>
          <view>×1</view>
        </view>
        <view class="flex-row">
          <view class="info-small-title">青菜 500g</view>
          <view>×1</view>
        </view>
        <view class="flex-row">
          <view class="info-small-title">牛肉 1000g</view>
          <view>×1</view>
        </view>
        <view class="flex-row">
          <view class="info-small-title">西红柿 500g</view>
          <view>×1</view>
        </view>
        <view class="flex-row">
          <view class="info-small-title">青菜 500g 拷贝</view>
          <view>×1</view>
        </view>
      </view>
      <!-- 列表内容结束 -->
    </view>
    <view class="btn-default-long btn">确认</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    // 获取默认套餐数据接口
    this.getMeal();
  },
  methods: {
    // 获取默认套餐数据接口
    getMeal() {
      uni.request({
        url: "http://192.168.1.143:8086/WNC/memberPackage/getMeal",
        data: {
          // 套餐 id
          id: 1
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        succeee(res) {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-top: 10rpx;
}

.list {
  width: 724rpx;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin: 0 auto;
}
.title {
  padding: 34rpx 20rpx;
  box-sizing: border-box;
}

/* 列表样式开始 */
.manage {
  background: white;
  padding: 0 48rpx;
  box-sizing: border-box;
  font-size: 28rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 42rpx;
}
.manage image {
  width: 13rpx;
  height: 22rpx;
}

.manage > view {
  height: 100rpx;
  border-bottom: 2rpx solid rgba(231, 231, 231, 1);
}
.manage > view view {
  align-self: center;
}
.default {
  font-size: 30rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin-left: 400rpx;
}
.btn {
  margin-top: 50rpx;
  height: 84rpx;
  line-height: 84rpx;
  text-align: center;
  font-size: 30rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>