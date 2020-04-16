<template>
  <view class="green-health">
    <!-- 操作栏悬浮穿开始 -->
    <!-- <suspension></suspension> -->
    <!-- 操作栏悬浮穿结束 -->
    <!-- vip 区域 -->
    <view class="health-head">
			<!-- vip 的背景图片 -->
			<image src="/static/images/green-health-bgi.png"></image>
			<!-- 背景图片上面的内容 -->
			<!-- vip 区域 -->
			<view v-if="isVip" class="head-content">
				<!-- 左边 -->
				<view class="content-left">
					<!-- 左边的头部照片 -->
					<image src="/static/images/vip-header@2x.png"></image>
				</view>
				<!-- 右边 -->
				<view class="content-right">
					<!-- 右边的 vip 信息 -->
					<view class="vip-info">
						<!-- 用户昵称 -->
						<view class="user">小蛙</view>
						<!-- 会员 -->
						<view class="member">会员</view>
						<!-- 到期时间 -->
						<view class="timer">到期时间: 2019-12-01</view>
					</view>
					<!-- 管理 -->
					<view class="administration" @click="toVipManage">管理</view>
				</view>
			</view>
			<!-- 非 vip 区域 -->
			<view v-else class="head-content no-vip">
				<!-- 左边 -->
				<view class="no-vip-left">
					<view class="one">购买年卡预计可省12000</view>
					<view class="two">绿色饮食 健康旅行</view>
				</view>
				<!-- 右边 -->
				<!-- <view class="no-vip-right">开通会员</view> -->
			</view>
		</view>
		<view class="title">会员套餐</view>

		<!-- 套餐区域 -->
		<view class="healthy">
			<view class="healthy-list" v-for="(item, index) in goodsList" :key="index" @click="goVipGoodsDetailsInfo(item.id)">
				<!-- 左边 -->
				<view class="list-left">
					<image :src="item.images"></image>
				</view>
				<!-- 右边 -->
				<view class="list-right">
					<!-- 头部区域 -->
					<view class="right-title">{{item.vipname}}</view>
					<!-- 次数 -->
				<view class="right-num">
							{{item.remark}}
						</view>
						<!-- 搭配 -->
						<view class="right-num">
							{{item.remarks}}
						</view>
					<!-- 价格以及会员 -->
					<view class="price-member">
						<!-- 价格 -->
						<view class="price-box">
							<!-- 最新价格 -->
							<view class="new-price">
								<!-- 人民币符号 -->
								<text class="rmb">¥</text>
								<!-- 金额 -->
								<text class="price-num">{{item.realPrice}}</text>
							</view>
							<!-- 划去的价格 -->
							<text class="delimit">¥{{item.primaryPrice}}</text>
						</view>
						<view class="list-footer">
							<!-- 赠送会员 -->
							<!-- <view class="give" @click.stop="goVipGive">赠送好友</view> -->
							<!-- 购买 -->
							<view class="purchase" @click.stop="goVipGoodsDetailsInfo(item.id)">购买</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- <view class="green-shop">绿色单品商品</view>
		绿色单品商品区域
		<view class="green-list">
			<view class="list-item" @click="getDetails">
				图片区域
				<image src="/static/images/xiaobaixia.jpg"></image>
				中间内容区域
				<view class="item-content">
					名称以及重量区域
					<view class="name-weight">鲜小白虾500g</view>
					介绍
					<view class="introduce">新鲜有货，口感香甜</view>
					非会员价格
					<view	class="ordinary-price">￥55.90</view>
					会员价以及加号区域
					<view class="member-jiahao">
						<view class="member">
							会员价格
							<view class="member-price">
								￥49.<text>90</text>
							</view>
							会员价字样
							<view class="membership-price">
								<image src="/static/images/6.png"></image>
								<text>会员价</text>
							</view>
						</view>
						加号
						<image @click.stop="plus" src="/static/images/vip-add@2x.png"></image>
					</view>
				</view>
			</view>
		</view>
		查看更多
		<view class="view-more" @click="goDetails">
			查看更多
			<image src="/static/images/green-more-bottom.png"></image>
		</view> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
			// 控制会员与非会员的数据
			isVip: false,
			// 自己写的会员套餐数据
			list: [
				{
					id: 0,
					// 套餐类型
					title: '年卡会员套餐',
					// 介绍
					introduce: '品种多多，尽享优惠',
					// 新价格
					new: 29999,
					// 旧价格
					used: 39999
				},
				{
					id: 1,
					// 套餐类型
					title: '半年卡会员套餐',
					// 介绍
					introduce: '品种多多，尽享优惠',
					// 新价格
					new: 19999,
					// 旧价格
					used: 29999
				},
				{
					id: 2,
					// 套餐类型
					title: '季卡会员套餐',
					// 介绍
					introduce: '品种多多，尽享优惠',
					// 新价格
					new: 9999,
					// 旧价格
					used: 19999
				},
				{
					id: 3,
					// 套餐类型
					title: '月卡会员套餐',
					// 介绍
					introduce: '品种多多，尽享优惠',
					// 新价格
					new: 4999,
					// 旧价格
					used: 9999
				},
				{
					id: 0,
					// 套餐类型
					title: '活动卡会员套餐',
					// 介绍
					introduce: '品种多多，尽享优惠',
					// 新价格
					new: 1999,
					// 旧价格
					used: 3999,
				}
			],
			// 会员套餐数据列表
			goodsList: [],
			user_id: ''
		};
	},
	onLoad() {
		this.user_id = uni.getStorageSync('user_id')
		// 获取首页置顶的商品信息
		this.getMarket(),
		// 查询会员信息接口
		this.getVip(),
		// 获取所有会员套餐信息
		this.getFindList(),
		// 判断用户是否是会员接口
		this.isMember()
	},
  methods: {
		// 判断用户是否是会员接口
		isMember() {
			this.$http.get('/user/isMember', { params: { user_id: this.user_id } }).then(res => {
				console.log(res)
				// 0 是会员
				if (res.data == 0) {
					this.isVip = true
				} else {
					this.isVip = false
				}
			})
		},
		// 获取所有会员套餐信息接口
		getFindList() {
			this.$http.get('/memberPackage/findList', {}).then(res => {
				this.goodsList = res.data
				// console.log(this.goodsList)
				console.log(res)
			})
		},
		// getFindList() {
    //   uni.request({
    //     url: "http://192.168.1.155:8086/WNC/memberPackage/findList",
    //     data: {},
    //     header: {
    //       "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    //     },
    //     succeee(res) {
    //       console.log(res);
    //     }
    //   });
		// },
		// 获取首页置顶的单品商品信息
		getMarket() {
			this.$http.get('/com/getMarket', {}).then(res => console.log(res))
		},
		// getMarket() {
		// 	uni.request({
		// 		url: 'http://192.168.1.155:8086/WNC/com/getMarket',
		// 		data: {},
		// 		header: {
		// 			'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
		// 		},
		// 		succeee(res) {
		// 			console.log(res)
		// 		}
		// 	})
		// },
		// 查询会员信息接口
		getVip() {
			this.$http.get('/memberPackage/getVip', { params: { user_id: this.user_id } }).then(res => console.log(res))
		},
		// getVip() {
		// 	uni.request({
		// 		url: 'http://192.168.1.155:8086/WNC/memberPackage/getVip',
		// 		data: {
		// 			user_id: 1
		// 		},
		// 		header: {
		// 			'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
		// 		},
		// 		succeee(res) {
		// 			console.log(res)
		// 		}
		// 	})
		// },
    //点击会员管理
    toVipManage() {
      uni.navigateTo({
        url: "/pages/vipManage/vipManage"
      });
    },
    // 单品商品详情页接口
    getDetails() {
      uni.navigateTo({
        url: "/pages/goodsDetailsInfo/goodsDetailsInfo"
      });
    },
		// 去会员套餐页面详情
		goVipGoodsDetailsInfo(id) {
			uni.navigateTo({
				url: '/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo?id=' + id
			})
		},
    // 去购物车
    goGreenCart() {
      uni.switchTab({
        url: "/pages/greenCart/greenCart"
      });
    },
    // 去查看更多页面
    goDetails() {
      uni.navigateTo({
        url: "/pages/details/details"
      });
		},
		// 去会员赠礼页面
		goVipGive() {
      uni.navigateTo({
        url: "/pages/vipGive/vipGive"
			});
		},
		// 加入购物车
		plus() {
			console.log('加入购物车')
		}
  }
};
</script>

<style lang="less" scoped>
.green-health {
	padding: 10rpx;
	position: relative;
  // vip 区域
  .health-head {
		background-color: #fff;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
		// vip 的背景图片
		> image {
			width: 730rpx;
			height: 215rpx;
			vertical-align: middle;
		}
		// 背景图片上面的内容 vip 区域
		.head-content {
			display: flex;
			position: absolute;
			top: 65rpx;
			left: 40rpx;
			width: 100%;
			// 左边
			.content-left {
				margin-right: 26rpx;
				// 左边的头部照片
				> image {
					width: 102rpx;
					height: 102rpx;
				}
			}
			// 右边
			.content-right {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-family: PingFang SC;
				font-weight: bold;
				color: #fff;
				width: 70%;
				// 右边的 vip 信息
				.vip-info {
					// 用户昵称
					.user {
						font-size: 32rpx;
					}
					// 年卡会员
					.member {
						width: 120rpx;
						height: 34rpx;
						line-height: 34rpx;
						text-align: center;
						margin: 10rpx 0;
						font-size: 24rpx;
						color: #FEC825;
						border: 2rpx solid rgba(254,200,37,1);
						border-radius: 17rpx;
					}
					// 到期时间
					.timer {
						font-size: 24rpx;
						font-family: Source Han Sans CN;
					}
				}
				// 管理
				.administration {
					width: 126rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color:rgba(255,255,255,1);
					background:rgba(221,178,48,1);
					box-shadow: 0rpx 0rpx 4r0px 0rpx rgba(186,159,77,0.2);
					border-radius: 25rpx;
				}
			}
		}
		// 非 vip 区域
		.no-vip {
			width: 91%;
			justify-content: space-between;
		}
		// 左边
		.no-vip-left {
			font-family: Source Han Sans CN;
			font-weight: bold;
			color:rgba(255,255,255,1);
			.one {
				font-size: 34rpx;
			}
			.two {
				font-size: 24rpx;
				margin-top: 38rpx;
			}
		}
		// 右边
		.no-vip-right {
			margin-top: 56rpx;
			width: 155rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			background:rgba(221,178,48,1);
			box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(186,159,77,0.2);
			border-radius: 30rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color:rgba(255,255,255,1);
		}
	}
	.title {
		font-size: 40rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color:rgba(51,51,51,1);
		margin: 30rpx 0 17rpx 30rpx;
	}
	// 绿色健康数据区域开始
	.healthy {
		text-align: left;
		font-family: Microsoft YaHei;
		font-weight: 400;
		background-color: #fff;
		padding: 0 20rpx;
		.healthy-list {
			display: flex;
			margin-top: 20rpx;
			border-bottom: 1rpx solid #F0F0F0;

			// 左边
			.list-left {
				image {
					width: 200rpx;
					height: 200rpx;
					margin-right: 24rpx;
				}
			}

			// 右边
			.list-right {
				width: 100%;

				// 头部区域
				.right-title {
					font-size: 32rpx;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}

				// 次数
				.right-num {
					width: 476rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-line-clamp: 2;
					overflow:hidden;
					-webkit-box-orient: vertical;
					font-size: 26rpx;
					color: #666;
					margin: 16rpx 0 20rpx 0;

					.number {
						margin-right: 16rpx;
					}
				}

				// 搭配
				.collocation {
					font-size: 26rpx;
					color: #666;
					margin-bottom: 40rpx;
				}

				// 价格以及会员
				.price-member {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 100%;
					height: 48rpx;
					margin-bottom: 30rpx;

					.price-box {
						display: flex;
						align-items: center;

						// 最新价格
						.new-price {
							font-size: 32rpx;
							color: #FF3B39;
							font-weight: bold;
							// 人民币符号
							// 金额
						}

						// 划去的价格
						.delimit {
							text-decoration: line-through;
							font-size: 22rpx;
							color: #666;
							font-weight: bold;
							margin-left: 20rpx;
						}
					}

					.list-footer {
						display: flex;

						// 赠送会员
						.give {
							width: 120rpx;
							height: 48rpx;
							line-height: 48rpx;
							border-radius: 10rpx;
							border: 1rpx solid rgba(39, 149, 36, 1);
							text-align: center;
							font-size: 26rpx;
							color: #279524;
							margin-right: 15rpx;
						}

						// 购买
						.purchase {
							width: 80rpx;
							height: 48rpx;
							line-height: 48rpx;
							text-align: center;
							border-radius: 10rpx;
							background-color: #279524;
							font-size: 26rpx;
							color: #fff;
						}
					}
				}
			}
		}
	}
	// 绿色健康数据区域结束

	.green-shop {
		font-size: 40rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		margin: 30rpx 0 30rpx 27rpx;
		color: #333;
	}
	// 绿色单品商品区域
	.green-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 10rpx;
		:nth-child(2n + 1) {
			margin-right: 10rpx;
		}
		.list-item {
			width: 350rpx;
			height: 430rpx;
			background:rgba(255,255,255,1);
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			// 图片区域
			> image {
				width: 306rpx;
				height: 220rpx;
				border-radius: 10rpx 0 0 0;
			}
			// 中间内容区域
			.item-content {
				padding-left: 22rpx;
				// 名称以及重量区域
				.name-weight {
					height: 30rpx;
					font-size: 28rpx;
					font-family:Microsoft YaHei;
					font-weight:400;
					color: #333;
				}
				// 介绍
				.introduce {
					font-size: 20rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #666;
					margin: 10rpx 0 40rpx 0;
				}
				// 非会员价格
				.ordinary-price {
					font-size: 24rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color:rgba(39,149,36,1);
				}
				// 会员价以及加号区域
				.member-jiahao {
					display: flex;
					position: relative;
					justify-content: space-between;
					.member {
						display: flex;
						// 会员价格
						.member-price {
							font-family: Microsoft YaHei;
							font-weight: bold;
							color:rgba(255,69,67,1);
							margin-right: 0;
							font-size: 32rpx;
							> text {
								font-size: 24rpx;
							}
						}
						// 会员字样
						.membership-price {
							position: relative;
							> image {
								width: 66rpx;
								height: 24rpx;
							}
							> text {
								position: absolute;
								top: 14rpx;
								left: 10rpx;
								font-size: 18rpx;
								font-family: Microsoft YaHei;
								font-weight: bold;
								color:rgba(254,254,254,1);
							}
						}
					}
					// 加号
					> image {
						position: absolute;
						bottom: 10rpx;
						right: 20rpx;
						width: 50rpx;
						height: 50rpx;
						// margin-right: 20rpx;
					}
				}
			}
		}
	}
	// 查看更多
	.view-more {
		font-size: 30rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		text-align: center;
		color: #333;
		// color: #fff;
		margin-bottom: 10rpx;
		> image {
			width: 30rpx;
			height: 30rpx;
			margin-left: 15rpx;
			vertical-align: middle;
		}
	}
}
</style>