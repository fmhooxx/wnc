<template>
<!-- 商圈发布页面 ming -->
  <view class="release">
    <view class="release-box">
      <view class="text">
        <textarea placeholder="分享你的健康生活" focus auto-height></textarea>
      </view>
      <view class="picture">
        <view v-for="(item, index) in pictureList" :key="index" >
          <icon class="tag" type="clear" @click="handle(index)" />
          <image :src="item" @click="preview(index)"></image>
        </view>
        <view v-for="(item, index) in videoList" :key="index">
          <video :src="item"></video>
        </view>
        <view @click="upload">
          <image src="/static/images/release.png"></image>
        </view>
      </view>
    </view>
    <view class="btn">发布</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 上传图片存储的路径
      pictureList: [],
      // 视频列表
      videoList: []
    };
  },
  methods: {
    // 点击上传图片
    upload() {
      if (this.pictureList.length < 9) {
        uni.chooseImage({
          count: 9,
          success: res => {
            // this.pictureList.push(res.tempFilePaths[0])
            console.log(res.tempFilePaths.length)
            for (let i = 0; i < res.tempFilePaths.length; i++) {
            this.pictureList.push(res.tempFilePaths[i])
            }
          }
        })
      }
    },
    // 点击预览图片
    preview(index) {
      uni.previewImage({
        urls: [this.pictureList[index]]
      })
    },
    // 长按删除
    handle(index) {
      uni.showModal({
        title: '提示',
        content: '是否确认删除该张照片',
        success: res => {
          if (res.confirm) {
              this.pictureList.splice(index, 1)
          } else if (res.cancel) {
              console.log('用户点击取消');
          }
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
image {
  width: 100%;
  height: 100%;
}
.release-box {
  background-color: #fff;
  padding: 0 32rpx 60rpx 30rpx;
}
.release {
  .text {
    font-size: 26rpx;
    font-family: PingFang;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    padding-top: 20rpx;
    textarea {
      height: 142rpx !important;
    }
  }
  .picture {
    display: flex;
    flex-wrap: wrap;
    > view {
      position: relative;
      margin: 10rpx;
      width: 208rpx;
      height: 208rpx;
      border: 1rpx solid #ccc;
      box-sizing: border-box;
      // 清楚符号
      .tag {
        position: absolute;
        top: -24rpx;
        right: -22rpx;
        z-index: 9;
        background-color: #666;
        border-radius: 50%;
      }
    }
  }
  .btn {
    margin: 70rpx auto;
    width: 660rpx;
    height: 84rpx;
    background:rgba(39,149,36,1);
    border-radius: 41rpx;
    line-height: 84rpx;
    text-align: center;
    font-size: 40rpx;
    font-family:Source Han Sans CN;;
    font-weight: 400;
    color:rgba(255,255,255,1);
  }
}
</style>