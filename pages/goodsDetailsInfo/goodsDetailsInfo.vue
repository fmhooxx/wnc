<template>
<!--pages/goodsDetailsInfo/goodsDetailsInfo.wxml-->
	<view class="container">
			<!-- 商品图片开始 -->
      <view class="shop-img">
        <image src="/static/images/detail-lunbo.jpg"></image>
      </view>
			<!-- 商品图片结束 -->

			<!-- 图片详情开始 -->
			<view class="swiper-info">
				<view class="swiper-info-title">夏黑葡萄 500g</view>
				<view class="swiper-info-introduce flex-row">
					<view>有机产品，营养丰富，味道鲜美</view>
					<view class="share">分享有礼</view>
				</view>
        <!-- 普通的价格 -->
        <view class="ordinary-price">¥39.9</view>
				<view class="mon">
          <!-- 会员价格区域 -->
					<view class="price">29.9<text>元</text></view>
          <view class="member">
            <image src="/static/images/6.png"></image>
            <view>会员价</view>
          </view>
				</view>
			</view>
			<!-- 图片详情结束 -->

			<!-- 规格开始 -->
      <view class="server">
        <view class="title">规格</view>
        <view class="sub-title">
          <text class="sub-title-left">净含量</text>
          <text class="sub-title-right">约500g</text>
        </view>
        <view class="sub-title">
          <text class="sub-title-left">保存条件</text>
          <text class="sub-title-right">冷藏</text>
        </view>
        <view class="sub-title">
          <text class="sub-title-left">保质期</text>
          <text class="sub-title-right">6天</text>
        </view>
      </view>
			<!-- 规格结束 -->

			<!-- 商品详情图富文本预留开始 -->
			<view class="img-title">商品详情</view>
			<view class="detail">
				<image src="../../static/images/green-orderlistA.png" class="detail-img"  mode="scallToFill"></image>
			</view>
			<!-- 商品详情图富文本预留结束 -->

			<!-- 回到顶部按钮测试开始 -->
			<view v-if="goTopStatus" @click='goToTop' class="upTop">
				<image src="../../static/images/upTop.png" style='' mode='widthFix'></image>
			</view>
			<!-- 回到顶部按钮测试结束 -->

    <!-- 底部操作栏开始 -->
		<view class="user-defined">
			<view class="toClear" @click="goConfirmOrder">立即购买</view>
		</view>
		<!-- 底部操作栏结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
      // 控制回到顶部显示与隐藏
				goTopStatus: false
			}
    },
    onLoad() {
      // 获取单品详情信息接口
      this.getDetails()
    },
		//监听页面高度(上滑或者下滑)
		onPageScroll(obj) {
			if (obj.scrollTop > 363) {
				return this.goTopStatus = true
			}
			this.goTopStatus = false
		},
		methods: {
      // 获取单品详情信息接口
      getDetails() {
        this.$http.get('/com/getDetails', { params: { com_id:1 } }).then(res => {
          console.log(res)
        })
      },
      // 回到顶部
      goToTop() {
        uni.pageScrollTo({
					scrollTop: 0
				})
      },
      // 去确定订单页面
      goConfirmOrder() {
        uni.navigateTo({
          url: '/pages/confirmOrder/confirmOrder'
        });
      }
    }
	}
</script>

<style lang="less" scoped>
swiper{
  height:580rpx;

}
swiper-item image{
  width:100%;
  height: 452rpx
}
// 商品图片区域
.shop-img {
  height: 664rpx;
  background-color: #fff;
  > image {
    width: 718rpx;
    height: 452rpx;
    vertical-align: middle;
    margin-top: 90rpx;
    margin-left: 16rpx;
  }
}
/* 轮播图详情结束 */
.swiper-info{
  background: white;
  padding-left: 20rpx;
  box-sizing: border-box;
  padding-top: 34rpx;
}

.swiper-info-title{
  font-size:40rpx;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
}

.swiper-info-introduce{
  font-size:28rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(102,102,102,1);
}
.share{
  width: 180rpx;
  height:70rpx;
  background:rgba(253,72,77,1);
  border-radius:36rpx 0px 0px 36rpx;
  line-height: 70rpx;
  text-align: center;
  color: white;
  font-size: 28rpx;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #fff;
}
.mon {
  display: flex;
  align-items: flex-end;
  .price {
    font-size:64rpx;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(253,72,77,1);
    > text {
      font-size: 32rpx;
      margin-left: 10rpx;
    }
  }
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
      color: #fff;
    }
  }
}
// 普通的价格
.ordinary-price {
  margin-top: 26rpx;
  font-size: 30rpx;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #279524;
  text-decoration: line-through;
}

/* 规格样式 */

.server{
  background: white;
  margin-top: 20rpx;
  padding: 20rpx;
  box-sizing: border-box
}
.server view{
  padding: 28rpx 0;
  box-sizing: border-box
}
.title{
  font-size:34rpx;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
}
.sub-title{
  font-size:24rpx;
  font-family:Source Han Sans CN;
  font-weight:400;
  color:rgba(51,51,51,1);
  border-top:1rpx solid rgba(217,217,217,1);
  box-sizing: border-box;
}
.sub-title-left{
  min-width: 130rpx;
  display: inline-block
}
.sub-title-right{
  min-width: 130rpx;
  display: inline-block
}

/* 规格样式 */


/* 详情图样式 */
.detail{
  text-align: center;
  margin-top: 20rpx;
  padding-bottom: 118rpx;
  box-sizing: border-box
}
.img-title{
  font-size:34rpx;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  padding: 32rpx 20rpx;
  box-sizing: border-box;
  float: left;
  background: white;
  width: 750rpx;
  margin-top: 20rpx
}
.detail-img{
  width: 100%;
  display: block;
  height: 5266rpx
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
.upTop image {
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