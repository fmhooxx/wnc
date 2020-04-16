<template>
<!-- 商圈页面 -->
<view>
  <view v-if="false" class="goods">
    <!-- tab 栏内容 -->
    <view class="tabs">
      <view
        class="tabs-item"
        :class="current == index ? 'line' : ''"
        v-for="(item, index) in tabs"
        :key="index"
        @click="tabsChange(index)"
      >{{item.uname}}</view>
    </view>
    <!-- tab 下面内容 -->
    <view class="list">
      <view class="list-bgc"></view>
      <view class="content">
        <view class="content-box" v-for="(item, index) in contentList" :key="index">
          <image v-if="isTag" class="tag" src="/static/images/addr-del.png" @click="delContent(index)"></image>
          <view class="left">
            <image src="/static/images/user.png"></image>
          </view>
          <view class="right">
            <view class="title">{{item.title}}</view>
            <view class="timer">{{item.timer}}</view>
            <view class="words">
              <view>{{item.words_title}}</view>
              <view>{{item.words_text}}</view>
            </view>
            <view class="img-box">
              <view class="right-img" v-for="(x, i) in item.img" :key="i">
                <image :src="x.url"></image>
              </view>
            </view>
            <view class="footer">
              <view class="left-img">
                <image src="/static/images/liked.png"></image>
                <text>1.2万</text>
              </view>
              <view class="right-img">
                <image src="/static/images/send.png"></image>
                <text>转发</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 悬浮的发布按钮 -->
    <view class="release" @click="goRelease">
      <image src="/static/images/vip-add@2x.png"></image>
    </view>
  </view>
  <view v-else class="expect-bgi">
    <image src="../../static/images/expect-bgi.png" ></image>
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
          uname: "推荐"
        },
        {
          id: 1,
          uname: "官方"
        },
        {
          id: 2,
          uname: "我的"
        }
      ],
      // 发布的信息内容数据
      contentList: [
        {
          id: 0,
          title: '蛙蛙团长',
          timer: '1小时前',
          words_title: '蛙农场生鲜超市上新啦！',
          words_text: '#圣女果#甜度很高，丰富多汁，一口一个停不下来，含丰富 维生素C，汁水丰富，小心爆浆哦',
          img: [
            {
              mid: 0,
              url: '/static/images/img.jpg'
            },
            {
              mid: 1,
              url: '/static/images/img.jpg'
            },
            {
              mid: 2,
              url: '/static/images/img.jpg'
            },
            {
              mid: 3,
              url: '/static/images/img.jpg'
            },
            {
              mid: 4,
              url: '/static/images/img.jpg'
            },
            {
              mid: 5,
              url: '/static/images/img.jpg'
            },
            {
              mid: 6,
              url: '/static/images/img.jpg'
            },
            {
              mid: 7,
              url: '/static/images/img.jpg'
            },
            {
              mid: 8,
              url: '/static/images/img.jpg'
            }
          ]
        },
        {
          id: 1,
          title: '官方服务号',
          timer: '1小时前',
          words_title: '蛙农场生鲜超市上新啦！',
          words_text: '#圣女果#甜度很高，丰富多汁，一口一个停不下来，含丰富 维生素C，汁水丰富，小心爆浆哦',
          img: [
            {
              mid: 0,
              url: '/static/images/img.jpg'
            },
            {
              mid: 1,
              url: '/static/images/img.jpg'
            },
            {
              mid: 2,
              url: '/static/images/img.jpg'
            },
            {
              mid: 3,
              url: '/static/images/img.jpg'
            },
            {
              mid: 4,
              url: '/static/images/img.jpg'
            },
            {
              mid: 5,
              url: '/static/images/img.jpg'
            },
            {
              mid: 6,
              url: '/static/images/img.jpg'
            },
            {
              mid: 7,
              url: '/static/images/img.jpg'
            },
            {
              mid: 8,
              url: '/static/images/img.jpg'
            }
          ]
        },
        {
          id: 2,
          title: '健康生活',
          timer: '1小时前',
          words_text: '#圣女果#甜度很高，丰富多汁，一口一个停不下来，含丰富 维生素C，汁水丰富，小心爆浆哦',
          img: [
            {
              mid: 0,
              url: '/static/images/img.jpg'
            },
            {
              mid: 1,
              url: '/static/images/img.jpg'
            },
            {
              mid: 2,
              url: '/static/images/img.jpg'
            },
            {
              mid: 3,
              url: '/static/images/img.jpg'
            },
            {
              mid: 4,
              url: '/static/images/img.jpg'
            }
          ]
        },
        {
          id: 3,
          title: '一位不愿透露姓名的大侠',
          timer: '1小时前',
          words_text: '#圣女果#甜度很高，丰富多汁，一口一个停不下来，含丰富 维生素C，汁水丰富，小心爆浆哦',
          img: [
            {
              mid: 0,
              url: '/static/images/img.jpg'
            }
          ]
        }
      ],
      // 选中的哪一项
      current: 0,
    };
  },
  methods: {
    // 点击 tab 改变内容
    tabsChange(index) {
      this.current = index;
    },
    // 跳转到发布页面
    goRelease() {
      uni.navigateTo({
        url: '/pages/goodsRelease/goodsRelease'
      })
    },
    delContent(index) {
      uni.showModal({
        title: '提示',
        content: '是否删除该条信息?',
        success: res => {
          if (res.confirm) {
            this.contentList.splice(index, 1)
          } else if (res.cancel) {
              console.log('用户点击取消');
          }
        }
    });
    },
    getList() {
      this.$http.get('/bus/getBcs', {}).then(res => {
        console.log(res)
      })
    }
  },
  computed: {
    isTag() {
      if (this.current === 2) {
        return true
      }
      return false
    }
  },
  created() {
    // 获取列表数据
    this.getList()
  },
};
</script>

<style lang="less" scoped>
image {
  width: 100%;
  height: 100%;
}
.goods {
  padding-bottom: 99rpx;
  .tabs {
    position: fixed;
    top: 0;
    width: 100%;
    height: 99rpx;
    background: rgba(72, 188, 91, 1);
    display: flex;
    justify-content: space-around;
    z-index: 1;
    .tabs-item {
      padding: 32rpx 0 24rpx 0;
      width: 62rpx;
      height: 30rpx;
      font-size: 30rpx;
      font-weight: bold;
      font-family:Microsoft YaHei;
      color: rgba(255, 255, 255, 1);
    }
    .line {
      border-bottom: 4rpx solid #fff;
      font-weight: bold;
    }
  }
  .list {
    margin-top: 99rpx;
    position: relative;
    .list-bgc {
      width: 100%;
      height: 108rpx;
      background: rgba(72, 188, 91, 1);
    }
    .content {
      // width: 690rpx;
      // border-radius: 20px;
      // background: rgba(255, 255, 255, 1);
      position: absolute;
      top: 0;
      left: 19rpx;
      // padding: 36rpx 24rpx 20rpx;
      box-sizing: border-box;
      .content-box {
        position: relative;
        border-radius: 20px;
        padding: 38rpx 0 23rpx 23rpx;
        width: 690rpx;
        display: flex;
        margin-bottom: 45rpx;
        background-color: #fff;
        .tag {
          position: absolute;
          top: 40rpx;
          right: 30rpx;
          width: 40rpx;
          height: 40rpx;
        }
        .left {
          width: 85rpx;
          height: 85rpx;
        }
        .right {
          width: 588rpx;
          .title {
            font-weight:bold;
            color:rgba(51,51,51,1);
            font-family:PingFang;
          }
          .timer {
            font-size: 16rpx;
            font-weight:400;
            color:rgba(102,102,102,1);
            margin: 10rpx 0 20rpx 0;
            font-family:PingFang;
          }
          .words {
            font-size:26rpx;
            font-weight:400;
            color:rgba(51,51,51,1);
            font-family:Source Han Sans CN;
            margin-bottom: 7rpx;
          }
          .img-box {
            display: flex;
            flex-wrap: wrap;
            .right-img {
              width: 178rpx;
              height: 178rpx;
              margin: 5rpx;
            }
          }
          .footer {
            display: flex;
            float: right;
            font-size: 22rpx;
            font-family: PingFang;
            font-weight: 400;
            color:rgba(102,102,102,1);
            line-height: 32rpx;
            margin-top: 26rpx;
            margin-right: 32rpx;
            image {
              vertical-align: middle;
              margin-right: 6rpx;
            }
            .left-img {
              display: flex;
              margin-right: 18rpx;
              image {
                width: 32rpx;
                height: 32rpx;
              }
            }
            .right-img {
              display: flex;
              image {
                width: 40rpx;
                height: 30rpx;
              }
            }
          }
        }
      }
    }
  }
  .release {
    width: 108rpx;
    height: 108rpx;
    position: fixed;
    top: 900rpx;
    right: 26rpx;
  }
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