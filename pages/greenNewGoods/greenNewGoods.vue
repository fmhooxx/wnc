<template>
  <!--pages/greenNewGoods/greenNewGoods.wxml-->
  <view>
    <view class="list">
      <view class="list-title">
        <view>名称</view>
        <view>数量</view>
      </view>
      <view class="list-item" v-for="(item, index) in mealList" :key="index">
        <!-- 左边 -->
        <view class="item-left">{{item.name}}</view>
        <!-- 右边 -->
        <view class="item-right">{{item.num}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      mealList: []
    };
  },
  onLoad() {
    // 获取会员套餐信息
    this.getMeal();
  },
  methods: {
    getMeal() {
      this.$http
        .get("/memberPackage/getMeal", { params: { id: 1 } })
        .then(res => {
          this.mealList = res.data;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  view {
    font-size: 30rpx;
    font-family: Microsoft YaHei;
    color: #333;
  }
  margin-top: 20rpx;
  .list-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100rpx;
    background-color: #fff;
    padding: 0 30rpx;
    margin-bottom: 20rpx;
  }
  .list-item {
    height: 100rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    padding: 0 30rpx;
    border-bottom: 1rpx solid #f1f1f1;
  }
}
</style>