<template>
  <view class="cart">
    <!-- tab 栏 -->
    <view class="cart-tab">
      <view v-for="(item, index) in tabs" :key="index">
        <view :class="current == index ? 'healthy'  : ''" @click="textActive(index)">{{item.uname}}</view>
        <view :class="current == index ? 'line'  : ''"></view>
      </view>
    </view>
    <!-- 购物车商品数据 -->
    <view class="goods">
      <view class="goods-box">
        <view class="del">
          <image src="/static/images/addr-del.png"></image>
        </view>
        <view class="goods-info">
          <view class="info-left">
          <!-- 选框 -->
            <view class="choice">
              <radio-group @change="radioChange">
                <radio color="#39AC36"></radio>
              </radio-group>
            </view>
            <!-- 信息 -->
            <view class="info-center">
              <view class="center-img">
                <image src="/static/images/green-cart.png"></image>
              </view>
              <view class="info-content">
                <view class="titile">玲珑小番茄500g</view>
                <view class="text">
                  <text class="one">¥</text>
                  <text class="two">9.9</text>
                  <text class="three">/份</text>
                  <text class="four">¥19.9</text>
                </view>
              </view>
            </view>
          </view>
          <!-- 计算 -->
          <view class="flex-row info-right">
            <text class="num-red">-</text>
            <input type="number"  disabled='true' v-model="money" />
            <text class="num-add">+</text>
          </view>
        </view>
      </view>
    </view>
    <view class="goods">
      <view class="goods-box">
        <view class="del">
          <image src="/static/images/addr-del.png"></image>
        </view>
        <view class="goods-info">
          <view class="info-left">
          <!-- 选框 -->
            <view class="choice">
              <radio-group @change="radioChange">
                <radio color="#39AC36"></radio>
              </radio-group>
            </view>
            <!-- 信息 -->
            <view class="info-center">
              <view class="center-img">
                <image src="/static/images/green-cart.png"></image>
              </view>
              <view class="info-content">
                <view class="titile">玲珑小番茄500g</view>
                <view class="text">
                  <text class="one">¥</text>
                  <text class="two">9.9</text>
                  <text class="three">/份</text>
                  <text class="four">¥19.9</text>
                </view>
              </view>
            </view>
          </view>
          <!-- 计算 -->
          <view class="flex-row info-right">
            <text class="num-red">-</text>
            <input type="number"  disabled='true' v-model="money" />
            <text class="num-add">+</text>
          </view>
        </view>
      </view>
    </view>
    <view class="goods">
      <view class="goods-box">
        <view class="del">
          <image src="/static/images/addr-del.png"></image>
        </view>
        <view class="goods-info">
          <view class="info-left">
          <!-- 选框 -->
            <view class="choice">
              <radio-group @change="radioChange">
                <radio color="#39AC36"></radio>
              </radio-group>
            </view>
            <!-- 信息 -->
            <view class="info-center">
              <view class="center-img">
                <image src="/static/images/green-cart.png"></image>
              </view>
              <view class="info-content">
                <view class="titile">玲珑小番茄500g</view>
                <view class="text">
                  <text class="one">¥</text>
                  <text class="two">9.9</text>
                  <text class="three">/份</text>
                  <text class="four">¥19.9</text>
                </view>
              </view>
            </view>
          </view>
          <!-- 计算 -->
          <view class="flex-row info-right">
            <text class="num-red">-</text>
            <input type="number"  disabled='true' v-model="money" />
            <text class="num-add">+</text>
          </view>
        </view>
      </view>
    </view>
    <view class="goods">
      <view class="goods-box">
        <view class="del">
          <image src="/static/images/addr-del.png"></image>
        </view>
        <view class="goods-info">
          <view class="info-left">
          <!-- 选框 -->
            <view class="choice">
              <radio-group @change="radioChange">
                <radio color="#39AC36"></radio>
              </radio-group>
            </view>
            <!-- 信息 -->
            <view class="info-center">
              <view class="center-img">
                <image src="/static/images/green-cart.png"></image>
              </view>
              <view class="info-content">
                <view class="titile">玲珑小番茄500g</view>
                <view class="text">
                  <text class="one">¥</text>
                  <text class="two">9.9</text>
                  <text class="three">/份</text>
                  <text class="four">¥19.9</text>
                </view>
              </view>
            </view>
          </view>
          <!-- 计算 -->
          <view class="flex-row info-right">
            <text class="num-red">-</text>
            <input type="number"  disabled='true' v-model="money" />
            <text class="num-add">+</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // tab 栏数据
      tabs: [
        {
          id: 0,
          uname: "绿色健康"
        },
        {
          id: 0,
          uname: "电商助农"
        }
      ],
      // 默认选中项
      current: 0,
      // input 的内容
      money: 0
    };
  },
  methods: {
    // 改变选中项
    textActive(index) {
      this.current = index;
    },
    radioChange(e) {
      console.log(e.detail);
    }
  }
};
</script>

<style lang="less" scoped>
image {
  width: 100%;
  height: 100%;
}
.cart {
  .cart-tab {
    display: flex;
    justify-content: space-around;
    height: 90rpx;
    line-height: 90rpx;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    font-size: 30rpx;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 30rpx;
    > view {
      width: 120rpx;
      height: 30rpx;
    }
    .healthy {
      color: rgba(51, 51, 51, 1);
    }
    .line {
      width: 100rpx;
      height: 4rpx;
      background: rgba(51, 51, 51, 1);
      border-radius: 2rpx;
      margin: 0 auto;
    }
  }
  .goods {
    .goods-box {
      box-sizing: border-box;
      width: 690rpx;
      height: 176rpx;
      margin: auto;
      padding: 0 30rpx;
      background: rgba(255, 255, 255, 1);
      border-radius: 20rpx 20rpx 0rpx 0rpx;
      .del {
        width: 26rpx;
        height: 24rpx;
        float: right;
      }
      .goods-info {
        display: flex;
        line-height: 176rpx;
        position: relative;
        .info-left {
          display: flex;
          .choice {
            width: 28rpx;
            height: 28rpx;
          }
          .info-center {
            display: flex;
            height: 110rpx;
            line-height: 0rpx;
            margin: 34rpx 0 34rpx 40rpx;
            .center-img {
              width: 110rpx;
              height: 110rpx;
              margin-right: 20rpx;
              image {
                vertical-align: middle;
              }
            }
            .info-content {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              font-size: 28rpx;
              padding: 10rpx 0;
              .titile {
                font-family:Source Han Sans CN;
                font-weight:400;
                color:rgba(51,51,51,1);
              }
              .text {
                font-family:Source Han Sans CN;
                color: #FD484D;
                .one {
                  font-size: 20rpx;
                }
                .two {
                  font-size: 28rpx;
                  font-weight: 500;
                }
                .three {
                  font-size: 18rpx;
                  color: #666;
                }
                .four {
                  margin-left: 18rpx;
                  font-size: 22rpx;
                  text-decoration:line-through;
                  color:rgba(153,153,153,1)
                }
              }
            }
          }
        }
        .info-right {
          position: absolute;
          right: 0;
          bottom: 30rpx;
          width:103rpx;
          height:36rpx;
          background:rgba(255,255,255,1);
          border:1rpx solid rgba(153,153,153,1);
          border-radius:18rpx;
          padding: 0 10rpx;
          box-sizing: border-box;
          line-height: 36rpx;
          text-align: center;
          color:rgba(102,102,102,1);
          .num-red {
            color:rgba(153,153,153,1);
          }
          input {
            width:34rpx;
            height:32rpx;
            line-height: 32rpx;
            font-size: 24rpx;
            font-weight:400;
            color:rgba(0,0,0,1);
            background:rgba(204,204,204,1);
            min-height:0
          }
        }
      }
    }
  }
}
</style>