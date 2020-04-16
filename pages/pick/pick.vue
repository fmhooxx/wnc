<template>
  <view>
    <view v-if="false" class="container">
      <!-- 有消息页面 -->
      <view v-if="isBox">
        <swiper :previous-margin="previousMargin" :next-margin="nextMargin" @click="swiperBindchange">
          <block v-for="(item, index) in qrCode" :key="index">
            <swiper-item>
              <view class="count">{{currentIndex+1}}/{{qrCode.length}}</view>
              <view class="slide-qr" :class=" currentIndex == index ? 'zoom-in' : 'zoom-out' ">
                <text class="order">订单编号：100012323466</text>
                <image src="/static/images/qr.png" mode="widthFix" />
                <view class="mess">
                  <text class="tit">取货时间</text>
                  <text>2019-10-15 07:00-19:00</text>
                  <text class="tit">取货地点</text>
                  <text class="address">合肥市蜀山区合肥市蜀山区合肥市蜀山区合肥市蜀山区合肥市蜀山区合肥市蜀山区合作化路与史河路交...</text>
                </view>
                <view class="share">
                  <view class="save">
                    <image src="/static/images/save.png" mode="widthFix" />
                    <text>保存</text>
                  </view>
                  <view class="shareTo">
                    分享到：
                    <image src="/static/images/wechart.png" mode="widthFix" />
                    <image src="/static/images/qq.png" mode="widthFix" />
                  </view>
                </view>
              </view>
            </swiper-item>
          </block>
        </swiper>
      </view>
      <!-- 无消息页面 -->
      <!-- <view v-else class="no-index-news">
        <image src="/static/images/pick-bgi.png"></image>
        <view class="one">没有货要取 那就休息咯</view>
        <view class="two">购买完成后将会生成取货二维码</view>
        <view class="three" @click="goIndex">去逛逛</view>
      </view> -->
    </view>
    <view v-else class="expect-bgi">
      <image src="../../static/images/expect-bgi.png"></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      qrCode: [{ id: 0 }, { id: 1 }],
      previousMargin: "100rpx", //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
      nextMargin: "100rpx", //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
      currentIndex: 0, //swiper当前索引,
      // 控制有消息页面与无消息页面的切换显示
      isBox: false
    };
  },
  methods: {
    swiperBindchange(e) {
      this.currentIndex = e.detail.current;
    },
    // 去首页
    goIndex() {
      uni.switchTab({
        url: '/pages/index/index'
      })
    }
  }
};
</script>

<style lang="less" scoped>
swiper {
  margin-top: 50rpx;
  height: 1000rpx;
}
.container {
  position: relative;
  // 无消息页面
  .no-index-news {
    position: absolute;
    top: 230rpx;
    left: 174rpx;
    width: 400rpx;
    height: 570rpx;
    text-align: center;
    > image {
      width: 400rpx;
      height: 344rpx;
    }
    > view {
      font-family: Source Han Sans CN;
      font-weight: 400;
    }
    .one {
      margin-top: 32rpx;
      font-size: 30rpx;
      color: #666;
    }
    .two {
      font-size: 20rpx;
      color: #999;
      margin: 24rpx 0;
    }
    .three {
      width: 200rpx;
      height: 50rpx;
      line-height: 50rpx;
      text-align: center;
      border: 2rpx solid rgba(39,149,36,1);
      border-radius: 25rpx;
      font-size: 28rpx;
      color: #279524;
      margin: auto;
    }
  }
}

/* swiper-item {} */

.count {
  width: 102rpx;
  height: 40rpx;
  background: #999;
  border-radius: 20rpx;
  text-align: center;
  color: #fff;
  font-size: 26rpx;
  line-height: 40rpx;
  margin: 35rpx auto;
}

.slide-qr {
  padding: 56rpx 75rpx;
  width: 548rpx;
  height: 812rpx;
  background: #fff;
  box-shadow: 1.5rpx 2.6rpx 7rpx 0rpx rgba(123, 163, 127, 0.15);
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
}

.order {
  font-size: 22rpx;
  line-height: 34rpx;
  color: #666666;
  text-align: center;
}

.slide-qr image {
  width: 318rpx;
  height: 319rpx;
  display: block;
}

.zoom-out {
  transform: scale(0.8);
  transition: all 0.7s ease-out 0s;
}

.zoom-in {
  transform: scale(1);
  transition: all 0.7s ease-in 0s;
}

.mess text {
  font-size: 24rpx;
  color: #000;
  display: block;
  margin-top: 14rpx;
  margin-bottom: 38rpx;
}

.mess .tit {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #666666;
  margin: 0;
}

.share {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  font-size: 30rpx;
  color: #333;
}

.save {
  display: flex;
  align-items: center;
}

.shareTo {
  display: flex;
  align-items: center;
  margin-left: 56rpx;
}

.share image {
  width: 26rpx;
  height: 28rpx;
  margin-right: 20rpx;
}

.shareTo image {
  width: 39rpx;
  height: 39rpx;
}

.address {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  max-height: 100rpx;
  -webkit-box-orient: vertical;
}
.expect-bgi {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:400rpx;
  height:344rpx;
  > image {
    width: 100%;
    height: 100%;
  }
}
</style>
