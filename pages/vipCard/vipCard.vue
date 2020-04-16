<template>
<!--pages/vipCard/vipCard.wxml-->
	<view class="container">
		<!-- 订单详情头部开始 -->
    <!-- 未开通会员的卡片 -->
		<view v-if="isBox">
      <view class="order-header"></view>
      <view class="vip-card">
        <image src="/static/images/vip-manage.png"></image>
        <view class="header-text">
          <view class="title">购买年卡预计可省1200</view>
          <view class="flex-row bottom">
            <view class="cart-left">绿色饮食 健康旅行</view>
            <view class="cart-right">开通年卡</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 已开通会员的卡片 -->
		<view v-else>
      <view class="order-header"></view>
      <view class="vip-card">
        <image src="/static/images/vip-manage.png"></image>
        <view class="header-box">
          <view class="box-left">
            <view class="header-left">
              <image :src="image_url"></image>
            </view>
            <view class="header-center">
              <view class="center-uname">{{name}}</view>
              <view class="center-member">会员</view>
              <view class="center-timer">到期时间：<text>{{etime}}</text></view>
            </view>
          </view>
          <view class="box-right" @click="goVipManage">管理</view>
        </view>
      </view>
    </view>
		<!-- 订单详情头部结束 -->

		<!-- 会员充值列表开始 -->
		<view class="vip-list">
			<view class="list-info flex-row" v-for="(item, index) in vipList" :key="index">
				<view class="left">
					<view class="price">{{item.realPrice}}元</view>
					<view class="type">{{item.vipname}}</view>
				</view>
				<view class="right" @click="goVipGoodsDetailsInfo(item.id)">购买</view>
			</view>
		</view>
		<!-- 会员充值列表结束 -->

		<!-- 服务协议开始 -->
		<view class="pro">
      <checkbox-group @change="checkboxChange">
        <checkbox value="1" checked='true'></checkbox>
      </checkbox-group>
			<text class="left">已阅读并同意</text>
			<text class="right" @click="goVipMemberAgreement">《会员服务协议》</text>
		</view>
		<!-- 服务协议结束 -->

		<!-- 推荐开始 -->
		<view class="flex-row tuijian">
			<view class="flex-row item" @click="goMineRecommendCourtesy">
				<view><image src="../../static/images/vip-cardA.png"></image></view>
				<view>
					<view class="info-title">推荐有礼</view>
					<view class="info-three-title">邀请好友开通会员VIP</view>
				</view>
			</view>

			<view class="flex-row item" @click="goVipGive">
				<view><image src="../../static/images/vip-cardB.png"></image></view>
				<view>
					<view class="info-title">会员赠送</view>
					<view class="info-three-title">帮好友开通会员VIP</view>
				</view>
			</view>
		</view>
		<!-- 推荐结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
        // 判断是否是会员 1 是会员 0 不是会员
        isBox: true,
        name: '',
        etime: '',
        image_url: '',
        vipList: [],
        user_id: ''
			}
    },
    onLoad() {
      this.user_id = uni.getStorageSync('user_id')
      // 查询会员信息接口
      this.getVip()
      // 查询所有的套餐信息接口
      this.getFindList()
      // 查询是否是会员接口
      this.isMember()
    },
		methods: {
      // 查询会员信息接口
      getVip() {
        this.$http
          .get("/memberPackage/getVip", { params: { user_id: this.user_id } })
          .then(res => {
            console.log(res)
            this.name = res.data.name
            this.etime = res.data.etime
            this.image_url = res.data.image_url
          });
      },
      // 查询所有的套餐信息接口
        getFindList() {
          this.$http
            .get("/memberPackage/findList", {})
            .then(res => {
              this.vipList = res.data
            });
        },
        // 查询是否是会员接口
        isMember() {
          this.$http.get('/user/isMember', { params: { user_id: this.user_id } }).then(res => {
            console.log(res)
            if (res.data == 0) {
              this.isBox = false
            } else {
              this.isBox = true
            }
          })
        },
      // 去会员赠送页面
			goVipGive() {
        if (this.member == 0) {
          uni.navigateTo({
            url: '/pages/vipGive/vipGive'
          })
        } else {
          uni.showToast({
              title: '敬请期待',
              duration: 2000,
              icon: 'none'
          });
          // uni.showToast({
          //     title: '您还不是会员 无法参与',
          //     duration: 2000,
          //     icon: 'none'
          // });
        }
      },
      // 去会员管理页面
      goVipManage() {
        uni.navigateTo({
					url: '/pages/vipManage/vipManage'
				});
      },
      // 去推荐有礼页面
      goMineRecommendCourtesy() {
        uni.showToast({
            title: '敬请期待',
            duration: 2000,
            icon: 'none'
        });
        // if (this.member == 1) {
        //   uni.navigateTo({
        //     url: '/pages/mineRecommendCourtesy/mineRecommendCourtesy'
        //   })
        // } else {
        //   uni.showToast({
        //       title: '您还不是会员 无法参与',
        //       duration: 2000,
        //       icon: 'none'
        //   });
        // }
      },
      // 去会员套餐详情页面
      goVipGoodsDetailsInfo(id) {
        uni.navigateTo({
					url: '/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo?id=' + id
				});
      },
      // 去会员协议页面
      goVipMemberAgreement() {
        uni.navigateTo({
					url: '/pages/vipMemberAgreement/vipMemberAgreement'
				});
      },
      checkboxChange(e) {
        console.log(e.detail.value)
      }
		}
	}
</script>

<style>
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
// 会员卡片样式

// 非会员卡片样式
.vip-card{
  position: relative;
  width:690rpx;
  height:249rpx;
  background:rgba(57,172,54,1);
  box-shadow:0px 0px 40rpx 0px rgba(101,205,98,0.2);
  border-radius:20rpx;
  // padding: 70rpx 38rpx;
  box-sizing: border-box;
  position: absolute;
  top: 10rpx;
  left: 50%;
  margin-left: -345rpx;
  image {
    width: 100%;
    height: 100%;
  }
  .header-text {
    position: absolute;
    width: 600rpx;
    top: 80rpx;
    left: 40rpx;
  }
}
.header-box {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 52rpx 0 40rpx;
  position: absolute;
  top: 58rpx;
  width: 100%;
  image {
    width: 100%;
    height: 100%;
  }
  .box-left {
    display: flex;
    .header-left {
      width: 102rpx;
      height: 102rpx;
      margin-right: 26rpx;
    }
    .header-center {
      .center-uname {
        font-size: 34rpx;
        font-family: PingFang;
        // font-weight:bold;
        color:rgba(255,255,255,1);
      }
      .center-member {
        width: 128rpx;
        height: 34rpx;
        line-height: 34rpx;
        text-align: center;
        font-size: 26rpx;
        font-family: PingFang;
        border: 1rpx solid rgba(221,178,48,1);
        border-radius: 17rpx;
        // font-weight: bold;
        color:rgba(245,194,74,1);
        margin: 10rpx 0 20rpx 0;
      }
      .center-timer {
        // font-weight: bold;
        color:rgba(255,255,255,1);
        font-family: Source Han Sans CN;
        font-size: 24rpx;
        margin-right: 6rpx;
      }
    }
  }
  .box-right {
    width: 126rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    background:rgba(221,178,48,1);
    box-shadow: 0rpx 3rpx 7rpx 0rpx rgba(247, 111, 108, 0.35);
    border-radius: 30rpx;
    font-size: 30rpx;
    // font-weight: bold;
    color:rgba(255,255,255,1);
    font-family: PingFang;
    margin-top: 60rpx;
  }
}
.title{
  width:442rpx;
  height:36rpx;
  font-size:34rpx;
  font-family:Source Han Sans CN;
  // font-weight:bold;
  color:rgba(255,255,255,1);
}

.cart-left{
  font-size:24rpx;
  font-family:Source Han Sans CN;
  // font-weight:bold;
  color:rgba(255,255,255,1);
  }
.cart-right{
  width:159rpx;
  height:60rpx;
  background:rgba(221,178,48,1);
  box-shadow:0px 3rpx 7rpx 0px rgba(247, 111, 108, 0.35);
  border-radius:30rpx;
  font-size:30rpx;
  font-family:PingFang;
  // font-weight:bold;
  color:rgba(255,255,255,1);
  text-align: center;
  line-height: 60rpx
}
.bottom{
  margin-top: 38rpx
}


/* 会员充值列表样式开始 */
.vip-list{
  margin-top: 270rpx;
}
.list-info{
  padding: 20rpx 30rpx;
  box-sizing: border-box;
  margin-bottom: 20rpx;
  border-bottom: 1rpx solid rgba(235,235,235,1);

}
.list-info .left{
  align-self: center
}
.list-info .right{
  align-self: center;
  width:126rpx;
  height:60rpx;
  border:2rpx solid rgba(254,59,14,1);
  box-shadow:0px 3rpx 7rpx 0px rgba(247, 111, 108, 0.35);
  border-radius:30rpx;
  text-align: center;
  line-height: 60rpx;
  font-size:32rpx;
  font-family:Source Han Sans CN;
  // font-weight:bold;
  color:rgba(254,59,14,1);
}
.price{
  font-size:38rpx;
  font-family:PingFang;
  // font-weight:bold;
  color:rgba(51,51,51,1);
  line-height: 60rpx
}
.type{
  font-size:26rpx;
  font-family:PingFang;
  // font-weight:bold;
  color:rgba(57,172,54,1);
  line-height:24rpx;
}

.pro{
  display: flex;
  font-size:24rpx;
  font-family:PingFang;
  justify-content: center;
  align-items: center;
  // font-weight:500;
  color:rgba(153,153,153,1);
  line-height:23rpx;
  text-align: center;
  margin-top: 40rpx;
  .right {
    color: #3FAF3C;
  }
  }
/* 推荐样式开始 */
.tuijian{
  margin-top: 50rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
  margin-bottom: 134rpx
}
.tuijian image{
  width:70rpx;
  height:70rpx;
}
.tuijian .item{
  width:337rpx;
  height:126rpx;
  background:rgba(255,255,255,1);
  border:1rpx solid rgba(204,204,204,1);
  box-shadow:0px 3rpx 5rpx 0px rgba(153,153,153,0.3);
  border-radius:20rpx;
  padding: 0 14rpx;
  box-sizing: border-box
}
.tuijian .item>view{
  align-self: center
}
</style>
