<template>
<!--pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo.wxml-->
	<view class="container">
		<!-- 商品图片开始 -->
      <view class="shop-img">
        <image :src="images"></image>
      </view>
    <!-- 商品图片结束 -->

			<!-- 图片详情开始 -->
			<view class="swiper-info">
				<view class="swiper-info-title">{{vipname}}</view>
				<view class="swiper-info-introduce flex-row">
					<view>{{remark}}</view>
					<!-- <view class="share">分享有礼</view> -->
          <button v-if="isShare"  open-type="share"  class="share">分享有礼</button>
          <!-- <button v-if="isShare"  open-type="share" @click="shareClick" class="share">分享有礼</button> -->
				</view>
        <!-- 普通价格区域 -->
        <view class="ordinary-price">¥{{primary_price}}</view>
				<view class="mon">
					<view class="price">{{real_price}}<text>元</text></view>
          <!-- 会员价格区域 -->
          <!-- <view class="member">
            <image src="../../static/images/6.png"></image>
            <view>会员价</view>
          </view> -->
				</view>
			</view>
			<!-- 图片详情结束 -->

			<!-- 套餐 -->
			<view class="introduce">
				<view class="server">
					<view class="title">套餐说明</view>
					<view class="sub-title">
						<text class="sub-title-left">配送时间:</text>
						<!-- <text class="sub-title-right">{{month_time}}</text> -->
						<text class="sub-title-right"></text>
					</view>
					<view class="sub-title">
						<text class="sub-title-left">配送次数:</text>
						<!-- <text class="sub-title-right">{{num}}</text> -->
						<text class="sub-title-right"></text>
					</view>
					<view class="sub-title w h">
						<text class="sub-title-left">套餐简介:</text>
						<!-- <text class="sub-title-right w y">{{remarks}}</text> -->
						<text class="sub-title-right w y"></text>
					</view>
				</view>
			<!-- 套餐 -->

			<!-- 商品详情图富文本预留开始 -->
			<view class="detail">
				<view class="img-title">商品详情</view>
				<image :src="content" class="detail-img"  mode="scallToFill"></image>
			</view>
			<!-- 商品详情图富文本预留结束 -->
			</view>

			<!-- 回到顶部按钮测试开始 -->
			<view v-if="goTopStatus" @click='goToTop' class="upTop">
				<image src="../../static/images/upTop.png" style='' mode='widthFix'></image>
			</view>
			<!-- 回到顶部按钮测试结束 -->

			<!-- 底部操作栏开始 -->
      <view class="user-defined">
        <!-- <view id="cart">
          <image src="../../static/images/detail-cart.png" class="cart"></image>
          <view class="tag">3</view>
        </view>
        <view class="addCart">加入购物车</view> -->
        <view class="toClear" @click="goConfirmOrder">立即购买</view>
      </view>
      <!-- 底部操作栏结束 -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
        goTopStatus: false,
        // 存储用户登录的凭证
        userLogin: '',
        // 套餐类型
        vipname: '',
        // 介绍
        remark: '',
        // 原价
        primary_price: '',
        // 会员价
        real_price: '',
        // 详情图片
        content: '',
        // 套餐照片
        images: '',
        // 配送时间
        month_time: '',
        // 配送次数
        num: '',
        // 备注信息
        create_time: '',
        // 套餐id
        package_id: '',
        // 控制分享有礼的显示与隐藏
        isShare: false,
        // 微信登录的 openid
        openid: '',
        // 套餐简介
        remarks: '',
        user_id: ''
			}
    },
    onLoad(options) {
      this.user_id = uni.getStorageSync('user_id')
      this.package_id = Number(options.id)
      console.log(options.id)
      this.userLogin = uni.getStorageSync('userLogin')
      this.openid = uni.getStorageSync('openid')
      uni.setStorageSync("package_id", options.id);
      // 查询 套餐说明和商品详情(图片)接口
      this.getExplanationAndInfo()
      // 判断用户是否是会员接口
      this.isMember()
    },
    onShareAppMessage(res) {
      if (res.from === 'button') {}
      return {
        title: '转发',
        path:'/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo?id=' + this.openid,
        success: res => {
          console.log(res)
        }
      }
    },
		methods: {
			//监听页面高度(上滑或者下滑)
			onPageScroll(obj) {
				if (obj.scrollTop > 363) {
					return this.goTopStatus = true
				}
				this.goTopStatus = false
			},
			//点击回到顶部
			goToTop() {
				uni.pageScrollTo({
					scrollTop: 0
				})
      },
      // 判断用户是否是会员接口
      isMember() {
        this.$http.get('/user/isMember', { params: { user_id: this.user_id } }).then(res => {
          console.log(res)
          // 非会员
          if (res.data == 0) {
            this.isShare = false
          } else {
            this.isShare = true
          }
        })
      },
      // 去确定订单页面
      goConfirmOrder() {
        if (this.userLogin == '' || this.openid == '') {
          uni.navigateTo({
            url: '/pages/loginRegister/loginRegister'
          })
        } else {
          // // 临时跳转 后期删除
          // uni.navigateTo({
          //   url: '/pages/confirmOrder/confirmOrder'
          // })
          uni.navigateTo({
            url: '/pages/confirmOrder/confirmOrder?package_id=' + this.package_id
          })
        }
      },
      // 转发
      // shareClick() {
      //   uni.share({
      //     provider: "weixin",
      //     scene: "WXSceneSession",
      //     type: 0,
      //     // path: '/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo?id=' + this.openid,
      //     href: '/pages/index/index?id=' + this.openid,
      //     success: res => {
      //       console.log(res)
      //     }
      //   })
      // },
      // 查询 套餐说明和商品详情(图片)接口
      getExplanationAndInfo() {
        this.$http.get('/memberPackage/getExplanationAndInfo', { params: { member_id: this.package_id } }).then( res => {
          console.log(res)
          this.remarks = res.data.remarks
          this.vipname = res.data.vipname
          this.remark = res.data.remark
          this.primary_price = res.data.primary_price
          this.real_price= res.data.real_price
          this.content = res.data.content
          this.images = res.data.images
          this.month_time = res.data.param_key
          this.num = res.data.param_value
          this.create_time = res.data.create_time
          // 设置导航条标题
          uni.setNavigationBarTitle({
            title: this.vipname
          })
        })
      }
		}
	}
</script>

<style lang="less" scoped>
swiper {
  height: 580rpx;
}

swiper-item > image {
  width: 100%;
  height: 452rpx;
}
// 商品图片区域
.shop-img {
  background-color: #fff;
  > image {
    width: 750rpx;
    height: 580rpx;
    vertical-align: middle;
    // margin: 30rpx  0 122rpx 55rpx
  }
}

/* 轮播图详情结束 */
.swiper-info {
  background: white;
  padding-left: 20rpx;
  box-sizing: border-box;
}

.swiper-info-title {
  font-size: 40rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

.swiper-info-introduce {
  margin: 20rpx 0;
  font-size: 26rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.share {
  font-size:28rpx;
  font-family:Source Han Sans CN;
  font-weight:500;
  color: #fff;
  position: absolute;
  right: 0;
  min-width: 210rpx;
  height: 70rpx;
  background: rgba(253, 72, 77, 1);
  border-radius: 36rpx 0px 0px 36rpx;
  line-height: 70rpx;
  text-align: center;
  color: white;
}
// 普通价格区域
.ordinary-price {
  text-decoration: line-through;
  font-size: 30rpx;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #279524;
  margin-bottom: 20rpx;
}
.mon {
  display: flex;
  align-items: flex-end;
  .price {
    font-size: 64rpx;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(253, 72, 77, 1);
    > text {
      font-size: 32rpx;
      margin-left: 12rpx;
    }
  }
  // 会员价格区域
  .member {
    position: relative;
    margin-left: 30rpx;
    > image {
      width: 90rpx;
      height: 33rpx;
    }
    > view {
      position: absolute;
      top: 0;
      left: 10rpx;
      font-size: 25rpx;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: red;
      color: #fff;
    }
  }
}

/* 服务样式 */
.introduce {
  background-color: white;
}

.server {
  background: white;
  margin-top: 20rpx;
  padding: 20rpx;
  box-sizing: border-box;
}

.server view {
  padding: 28rpx 0;
  box-sizing: border-box;
}

.title {
  font-size: 34rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  border-bottom: 1rpx solid #d9d9d9;
}

.sub-title {
  font-size: 24rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  border-bottom: 1rpx solid rgba(217, 217, 217, 1);
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.sub-title-left {
  font-size: 28rpx;
  min-width: 130rpx;
  display: inline-block;
  margin-right: 10rpx;
}

.sub-title-right {
  width: 520rpx;
  font-size: 28rpx;
  display: inline-block;
  overflow: hidden;
  white-space:nowrap;
}
.w {
  white-space: normal !important;
  overflow:hidden;
  text-overflow:ellipsis;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2 //以此类推，3行4行直接该数字就好啦
}
.y {
  display: -webkit-box;
}
.h {
  height: 170rpx;
}
/* 详情图样式 */
.detail {
  text-align: center;
  background: white;
  margin-top: 20rpx;
}

.img-title {
  font-size: 34rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  padding: 32rpx 20rpx;
  box-sizing: border-box;
  float: left;
}

.detail-img {
  width: 100%;
  display: block;
  // height: 2487rpx;
  height: 16930rpx;
}



/* 回到顶部样式 */
.upTop {
  position: fixed;
  right: 22rpx;
  bottom: 130rpx;
  width: 70rpx;
  height: 70rpx;
  z-index: 994;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #cacaca;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
}
.upTop > image {
  // width: 50rpx;
  // height: auto;
  // margin-top: 10rpx;
  width: 100%;
  height: 100%;
}


  /* 底部功能栏开始 */
.user-defined {
  width: 750rpx;
  height: 98rpx;
  padding-left: 24rpx;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  left: 0;
}

// .cart {
//   width: 42rpx;
//   height: 42rpx;
//   line-height: 98rpx;
// }

// #cart {
//   align-self: center;
//   position: relative;
// }
// .addCart{
//   width:220rpx;
//   height:70rpx;
//   font-size:28rpx;
//   font-family:Source Han Sans CN;
//   font-weight:500;
//   color:rgba(39,149,36,1);
//   background:rgba(255,255,255,1);
//   border:2rpx solid rgba(39,149,36,1);
//   border-radius:36rpx;
//   text-align: center;
//   line-height: 70rpx;
//   align-self: center;
//   margin-left: 180rpx
// }
.toClear {
  margin-top: 16rpx;
  float: right;
  font-size: 28rpx;
  width: 220rpx;
  height: 70rpx;
  background: rgba(39, 149, 36, 1);
  border-radius: 34rpx;
  text-align: center;
  line-height: 70rpx;
  align-self: center;
  margin-right: 30rpx;
  color: white
}
// 数字小标识
// .tag {
//   position: absolute;
//   top: -10rpx;
//   right: -20rpx;
//   width: 30rpx;
//   height: 30rpx;
//   line-height: 30rpx;
//   text-align: center;
//   background-color: #FC5854;
//   border-radius: 50%;
//   font-size: 24rpx;
//   font-family: Source Han Sans CN;
//   font-weight: 500;
//   color: #fff;
// }
</style>
