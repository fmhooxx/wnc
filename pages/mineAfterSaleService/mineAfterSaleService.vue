<template>
  <!-- 个人中心 售后服务 ming -->
  <view class="order">
    <!-- tab栏数据 -->
    <view class="tabs">
      <view
        class="tabs-item"
        v-for="(item, index) in tabs"
        :key="index"
        :class="current == index ? 'active' : ''"
        @click="tabsChange(index)"
      >{{item.uname}}</view>
    </view>
    <!-- tab 栏下面的数据 -->
    <view class="list">
			<!-- 超市便利区域 -->
			<view class="list-item">
				<!-- 头部区域 -->
				<view class="item-head">
					<!-- 左边 -->
					<view class="head-left">
						<!-- 左边的图片 -->
						<view class="left-img">
							<image src="/static/images/index2.png"></image>
						</view>
						<!-- 左边的文字 -->
						<view class="left-text">大商超市(步行街店)</view>
					</view>
					<!-- 右边 -->
					<view class="head-right">已退款</view>
				</view>
				<!-- 底部区域 -->
				<view class="item-footer">
					<!-- 底部的左边 -->
					<view class="footer-left">
						<!-- 底部区域的图片 -->
						<view class="footer-img">
							<image src="/static/images/ds.png"></image>
						</view>
						<!-- 底部区域的文字 -->
						<view class="footer-text">
							<view class="text-title">下单时间：2019-05-05 17:25</view>
							<view class="text-end">总价：￥20.33</view>
						</view>
					</view>
					<!-- 底部区域的右边 -->
					<view class="footer-right">
						<view class="right-text">再次购买</view>
					</view>
				</view>
			</view>
			<!-- 绿色健康 和 电商助农区域 -->
			<view class="list-item">
				<!-- 头部区域 -->
				<view class="item-head">
					<!-- 左边 -->
					<view class="head-left">
						<!-- 左边的文字 -->
						<view class="green-left-text">2019-10-16 16:12:17</view>
					</view>
					<!-- 右边 -->
					<view class="head-right">已退款</view>
				</view>
				<!-- 底部区域 -->
				<view class="item-footer green-item-footer">
					<!-- 底部的左边 -->
					<view class="footer-left">
						<!-- 底部区域的图片 -->
						<view class="greem-footer-img">
							<image src="/static/images/order-img.png"></image>
						</view>
					</view>
					<!-- 底部区域的右边 -->
					<view class="footer-right">
						<view class="right-box">共 2 件商品 实付<text class="price">￥</text><text class="num">9.</text><text class="zero">00</text></view>
						<view class="right-text">再次购买</view>
					</view>
				</view>
			</view>
			<!-- 乐享周末区域 -->
			<view class="list-item">
				<!-- 头部区域 -->
				<view class="item-head">
					<!-- 左边 -->
					<view class="head-left">
						<!-- 左边的文字 -->
						<view class="green-left-text">订单号 10500002313161589</view>
					</view>
					<!-- 右边 -->
					<view class="head-right">已退款</view>
				</view>
				<!-- 底部区域 -->
				<view class="item-footer">
					<!-- 底部的左边 -->
					<view class="footer-left">
						<!-- 底部区域的图片 -->
						<view class="footer-week-img">
							<image src="/static/images/ds.png"></image>
						</view>
						<!-- 底部区域的文字 -->
						<view class="footer-text">
							<view class="week-title">金岭缘华雄农庄</view>
							<view class="week-time">下单时间：2019-10-17 13:02</view>
							<view class="week-price">￥480.00</view>
						</view>
					</view>
					<!-- 底部区域的右边 -->
					<view class="footer-right">
						<view class="right-text">删除订单</view>
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
          uname: "超市便利"
        },
        {
          uname: "绿色健康"
        },
        {
          uname: "电商助农"
        },
        {
          uname: "乐享周末"
        }
      ],
      // 默认选中的那一项
			current: 0,
			img: [
				{
					url: '../../static/images/1.png'
				},
				{
					url: '../../static/images/1.png'
				},
				{
					url: '../../static/images/1.png'
				}
			]
    };
  },
  methods: {
    // 点击 tab 栏数据
    tabsChange(index) {
      this.current = index;
    },
    // 去绿色健康订单的后续其(退款、取消、已完成、待收货、待发货、)他页面
    goGreenOrderDetails() {
      uni.navigateTo({
        url: "/pages/greenOrderDetails/greenOrderDetails"
      });
    },
    goGreenStayPayment() {
      uni.navigateTo({
        url: "/pages/greenStayPayment/greenStayPayment"
      });
    }
  }
};
</script>

<style lang="less" scoped>
image {
	width: 100%;
	height: 100%;
	vertical-align: middle;
}
.order {
  // tab 选中项的样式
  .active {
    color: rgba(39, 149, 36, 1) !important;
    border-bottom: 4rpx solid rgba(39, 149, 36, 1);
  }
  // tab 栏基本样式
  .tabs {
    display: flex;
    height: 86rpx;
    line-height: 86rpx;
    margin-bottom: 20rpx;
    // tab 栏数据样式
    .tabs-item {
      font-size: 30rpx;
      text-align: center;
      margin: auto;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
  // tab 栏下面数据
  .list {
		margin-top: 20rpx;
		.list-item {
			background-color: #fff;
			padding: 0 30rpx;
			width: 750rpx;
			box-sizing: border-box;
			// 头部区域
			.item-head {
				height: 92rpx;
				line-height: 92rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid rgba(220,220,220,1);
				// 左边
				.head-left {
					display: flex;
					// 左边的图片
					.left-img {
						width: 40rpx;
						height: 40rpx;
						margin-right: 16rpx;
					}
					// 超市便利 左边的文字
					.left-text {
						font-size: 30rpx;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color:rgba(51,51,51,1);
					}
					// 绿色健康 左边的文字
					.green-left-text {
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color:rgba(102,102,102,1);
					}
				}
				// 右边
				.head-right {
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color:rgba(102,102,102,1);
				}
			}
			// 底部区域
			.item-footer {
				position: relative;
				height: 224rpx;
				margin-top: 30rpx;
				display: flex;
				justify-content: space-between;
				margin-bottom: 8rpx;
			}
			// 绿色健康的底部区域高度
			.green-item-footer {
				height: 425rpx !important;
			}
				// 底部区域的左边
				.footer-left {
					display: flex;
					// 超市便利 底部区域的图片
					.footer-img {
						width: 100rpx;
						height: 94rpx;
						margin-right: 41rpx;
					}
					// 绿色健康 底部区域的图片
					.greem-footer-img {
						width: 110rpx;
						height: 110rpx;
						border-radius: 10rpx;
						margin: 11rpx;
					}
					// 底部区域的文字
					.footer-text {
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color:rgba(102,102,102,1);
						.text-end {
							margin-top: 16rpx;
						}
					}
					// 乐享周末的图片
					.footer-week-img {
						width: 160rpx;
						height: 110rpx;
						margin-right: 31rpx;
					}
					// 乐享周末中间的文字
					.footer-text {
						font-family: Source Han Sans CN;
						font-weight: 400;
						.week-title {
							color:rgba(51,51,51,1);
							font-weight: bold;
							font-size: 34rpx;
						}
						.week-time {
							font-size: 24rpx;
							color:rgba(102,102,102,1);
							margin: 10rpx 0;
						}
						.week-price {
							font-size: 24rpx;
							color:rgba(255,69,67,1);
						}
					}
				}
			// 底部区域的右边
			.footer-right {
				position: absolute;
				bottom: 20rpx;
				right: 0;
				.right-box {
					font-size: 24rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color:rgba(102,102,102,1);
					margin-bottom: 60rpx;
					.price {
						font-size: 20rpx;
						color: #333;
						font-weight: 500;
					}
					.num {
						font-size: 26rpx;
						color: #333;
						font-weight: 500;
					}
					.zero {
						font-size: 20rpx;
						font-weight: 500;
						color: #333;
					}
				}
				.right-text {
					width: 150rpx;
					height: 56rpx;
					float: right;
					line-height: 56rpx;
					text-align: center;
					background:rgba(255,255,255,1);
					border: 2rpx solid rgba(229, 229, 229, 1);
					border-radius: 28rpx;
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color:rgba(102,102,102,1);
				}
			}
		}
  }
}
</style>