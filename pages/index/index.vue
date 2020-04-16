<template>
	<view class="container">
		<!-- 轮播图开始 -->
		<view class="banner">
			<image src="../../static/images/banner.jpg" class="slide-image" mode="widthFix" bindtap="toPath" :data-id="item.id" />
			<!-- <swiper :indicator-dots="indicatorDots" indicator-active-color="#48BC5B" :indicator-color="indicatorColor" :autoplay="autoplay"
			 :interval="interval" :duration="duration" :circular="circular">
				<block v-for="(item, index) in indexSwiperList" :key="index">
					<swiper-item @click="goindexSwiperBanner(item.id)"> -->
						<!-- <view>{{item.url}}</view> -->
						<!-- <image :src="item.url" class="slide-image" mode="widthFix" bindtap="toPath" :data-id="item.id" /> -->
					<!-- </swiper-item>
				</block>
			</swiper> -->
		</view>
		<!-- 轮播图结束 -->

		<!-- 消息以及定位开始 -->
		<view class="news">
			<!-- 定位 -->
			<!-- <view class="location" @click="goIndexLocation"> -->
				<!-- 定位图片 -->
				<!-- <image class="location-img" src="/static/images/posi.png"></image> -->
				<!-- 地区内容 -->
				<!-- <view class="location-box">
					<view>合肥市</view>
				</view> -->
				<!-- 下拉小箭头 -->
				<!-- <image class="drop-down-img" src="/static/images/down-arrow.png"></image>
			</view> -->
			<!-- 信息 -->
			<view class="location-info" @click="goIndexNews">
				<image src="/static/images/dialog.png"></image>
			</view>
		</view>
		<!-- 消息以及定位结束 -->

		<!-- 导航栏开始 -->
		<view class="class">
			<view @click="goGreenHealth">
				<image src="/static/images/lv.png" />
				<text>绿色健康</text>
			</view>
			<view @click="goExpect">
				<image src="/static/images/chao.png" />
				<text>超市便利</text>
			</view>
			<view @click="goExpect">
				<image src="/static/images/zhu.png" />
				<text>电商助农</text>
			</view>
			<view @click="goExpect">
				<image src="/static/images/xiang.png" />
				<text>乐享周末</text>
			</view>
		</view>
		<!-- 导航栏结束 -->

		<!-- 健康专区开始 -->
		<view class="block">
			<view class="title">
				<image class="title-img" src="/static/images/health.png" />
				<view class="shop-text green-healthy">绿色健康推荐</view>
			</view>

			<!-- 健康专区数据区域 -->
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
							<!-- {{item.remarks}} -->
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

			<view class="footer-end" @click="goGreenHealth">
				<text>查看更多</text>
				<image src="/static/images/arrow-right.png" class="more" />
			</view>
		</view>
		<!-- 健康专区结束 -->

		<!-- banner 区域开始 -->
		<view class="index-banner" @click="goIndexBanner">
			<!-- <image :src="bannerImg"></image> -->
			<image src="../../static/images/index-banner.png"></image>
		</view>
		<!-- banner 区域结束 -->

		<!-- 超市便利开始 -->
		<!-- <view class="block shop">
			<view class="title">
				<image src="/static/images/shop.png" />
				<view class="shop-text">超市便利</view>
			</view> -->
			<!-- 超市信息开始 -->
			<!-- <view class="index">
				<view class="footer"> -->
					<!-- 左边 -->
					<!-- <view class="left">
						<image src="/static/images/ds.png" mode="aspectFit">
					</view> -->
					<!-- 右边 -->
					<!-- <view class="right">
						<view class="titles">大商超市</view>
						<view class="center">合肥市庐阳区长江中路与北含山路交叉口向...</view>
						<view class="parity">平价菜场</view>
						<view class="full-reduction">
							<text class="full">满</text>
							<text>满40减10, 满70减20, 满100减30, 满...</text>
						</view>
						<view class="discount">
							<text class="fracture">折</text>
							<text>部分商品6折, 满500元享受9折</text>
						</view>
						<view class="info">
							<scroll-view scroll-x class="scroll-content">
								<block v-for="(item, index) in list" :key="index">
									<view class="info-box">
										<view class="info-img">
											<image :src="item.url" mode=""></image>
										</view>
										<view class="weight">{{item.weight}}</view>
										<view class="num">{{item.num}}</view>
										<view class="price">
											<text class="new">{{item.new}}</text>
											<text class="once">{{item.once}}</text>
										</view>
									</view>
								</block>
							</scroll-view>
						</view>
					</view> -->
				<!-- </view>
			</view>
		</view> -->
		<!-- 超市便利结束 -->
		<!-- 获取位置授权区域 -->
		<!-- <BasePopup ref="popup">
			<view class="popup-box">
				<view class="popup-title">获取您的位置</view>
				<view class="popup">
					<view>取消</view>
					<button open-type="openSetting" @click="handle">确定</button>
				</view>
			</view>
		</BasePopup> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrls: ["/static/images/banner.jpg", "/static/images/banner.jpg", "/static/images/banner.jpg"],
				// 控制指示点
				indicatorDots: true,
				// 是否自动轮播
				autoplay: true,
				// 自动切换的时间
				interval: 3000,
				// 是否衔接滑动
				circular: true,
				// 滑动动画时长
				duration: 2000,
				// 指示点的颜色
				indicatorColor: '#ffffff',
				bannerData: null,
				// index: 0,
				// 需要渲染的省市区
				// array: ['合肥市'],
				// 控制默认渲染的城市的选择与隐藏
				isFlag: true,
				// 用户中心纬度
				latitude: null,
				// 用户中心经度,
				longitude: null,
				list: [{
						id: 1,
						url: '../../static/images/green-orderlistA.png',
						weight: '红水蜜桃3个...',
						num: '3个装...',
						new: '¥29.9',
						once: '¥39.9'
					},
					{
						id: 2,
						url: '../../static/images/green-orderlistB.png',
						weight: '红水蜜桃3个...',
						num: '3个装...',
						new: '¥29.9',
						once: '¥39.9'
					},
					{
						id: 3,
						url: '../../static/images/1.png',
						weight: '红水蜜桃3个...',
						num: '3个装...',
						new: '¥29.9',
						once: '¥39.9'
					},
					{
						id: 4,
						url: '../../static/images/green-orderlistB.png',
						weight: '红水蜜桃3个...',
						num: '3个装...',
						new: '¥29.9',
						once: '¥39.9'
					}
				],
				// 首页会员套餐列表数据
				goodsList: [],
				// 首页轮播图数据列表
				indexSwiperList: [],
				// 首页其他 banner 的id
				banner_id: '',
				bannerImg: ''
			};
		},
		onLoad() {
			// 获取所有会员套餐信息接口
			this.getFindList()
			// 获取首页轮播图数据接口
			this.getHeadBanner(),
			// 获取首页其他banner数据接口
			this.getCenterBanner(),
			// 获取用户位置
			this.isGetLocation()
		},
		methods: {
			// 去首页banner的详情
			goIndexBanner() {
				uni.navigateTo({
					url: '/pages/indexBanner/indexBanner?banner_id=' + this.banner_id
				})
			},
			// 去首页轮播图的详情
			goindexSwiperBanner(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/indexSwiperBanner/indexSwiperBanner?id=' + id
				})
			},
			// 获取所有会员套餐信息接口
			getFindList() {
				this.$http.get('/memberPackage/findList', {}).then(res => {
					this.goodsList = res.data
					console.log(this.goodsList)
				})
				// uni.request({
				// 		url: 'https://www.tailongshoudian.com/WNC/memberPackage/findList', //仅为示例，并非真实接口地址。
				// 		data: {},
				// 		header: {
				// 				'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
				// 		},
				// 		success: (res) => {
				// 				console.log(res.data);
				// 		}
				// });
			},
			// 获取首页轮播图数据接口
			getHeadBanner() {
				this.$http.get('/banner/getHeadBanner', {}).then(res => {
					console.log(res)
					this.indexSwiperList = res.data
				})
			},
			// 获取首页其他banner数据接口
			getCenterBanner() {
				this.$http.get('/banner/getCenterBanner', {}).then(res => {
					console.log(res)
					this.banner_id = res.data.id
					this.bannerImg = res.data.url
				})
				// uni.request({
				// 	url: "http://192.168.1.143:8086/WNC/banner/getCenterBanner",
				// 	data: {},
				// 	header: {
				// 		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
				// 	},
				// 	succeee(res) {
				// 		console.log(res);
				// 	}
				// });
			},
			getAuthorizeInfo(a = "scope.userLocation") {
				//1. uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗
				uni.authorize({
					scope: a,
					success: () => {
						//1.1 允许授权
						this.getLocationInfo();
					},
					fail: () => {
						//1.2 拒绝授权
						// console.log("你拒绝了授权，无法获得周边信息");
						uni.showToast({
							title: "你拒绝了授权，无法获得周边信息",
							duration: 3000,
							icon: "none"
						});
						uni.getSetting({
							success: res => {
								console.log(res)
							}
						})
					}
				});
			},

			getLocationInfo() {
				//2. 获取地理位置
				uni.getLocation({
					type: "wgs84",
					success: res => {
						console.log("当前位置的经度：" + res.longitude);
						console.log("当前位置的纬度：" + res.latitude);
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						console.log(this.latitude)
						console.log(this.longitude)
						// let latitude, longitude;
						// latitude = res.latitude.toString();
						// longitude = res.longitude.toString();
						// uni.request({
						//   header: {
						//     "Content-Type": "application/text"
						//   },
						//   url:
						//     "http://apis.map.qq.com/ws/geocoder/v1/?location=" +
						//     latitude +
						//     "," +
						//     longitude +
						//     "&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35",
						//   success(re) {
						//     console.log("中文位置");
						//     console.log(re);
						//     if (re.statusCode === 200) {
						//       console.log("获取中文街道地理位置成功");
						//     } else {
						//       console.log("获取信息失败，请重试！");
						//     }
						//   }
						// });
					},
					fail: res => {
						console.log(res);
						if (res.errCode == 2) {
							uni.showToast({
								title: "请您打开GPS",
								duration: 3000,
								icon: "none"
							});
							// this.getLocationInfo()
						}
					}
				});
			},

			isGetLocation(a = "scope.userLocation") {
				// 3. 检查当前是否已经授权访问scope属性，参考下截图
				uni.getSetting({
					success: res => {
						if (!res.authSetting[a]) {
							//3.1 每次进入程序判断当前是否获得授权，如果没有就去获得授权，如果获得授权，就直接获取当前地理位置
							this.getAuthorizeInfo();
						} else {
							this.getLocationInfo();
						}
					}
				});
			},
			// 去绿色健康页面
			goGreenHealth() {
				uni.navigateTo({
					url: '/pages/greenHealth/greenHealth'
				})
			},
			// 去定位页面
			goIndexLocation() {
				uni.navigateTo({
					url: '/pages/indexLocation/indexLocation'
				})
			},
			// 去消息页面
			goIndexNews() {
				uni.navigateTo({
					url: '/pages/indexNews/indexNews'
				})
			},
			// 去正在开发页面
			goExpect() {
				uni.navigateTo({
					url: '/pages/expect/expect'
				})
			},
			// 去会员套餐页面详情
			goVipGoodsDetailsInfo(id) {
				uni.navigateTo({
					url: '/pages/vipGoodsDetailsInfo/vipGoodsDetailsInfo?id=' + id
				})
			},
			// 去会员赠送页面
			goVipGive() {
				uni.navigateTo({
					url: '/pages/vipGive/vipGive'
				})
			}
		}
	};
</script>

<style>
	page {
		background-color: #fff;
	}
</style>

<style lang="less" scoped>
	// 消息以及定位开始
	.news {
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		position: absolute;
		top: 0;
		background-color: transparent;
		display: flex;
		justify-content: space-between;
		align-items: center;

		// 定位
		.location {
			margin-left: 20rpx;
			display: flex;
			align-items: center;
			width: 23%;
			height: 60rpx;
			background-color: rgba(0, 0, 0, .3);
			border-radius: 44rpx;

			// 定位图片
			.location-img {
				margin-left: 8rpx;
				margin-right: 10rpx;
				width: 24rpx;
				height: 28rpx;
				vertical-align: middle;
			}

			// 地区内容
			.location-box {
				// width: 100%;
				min-width: 100rpx;
				font-size: 32rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #fff;

				// 首先显示在页面上的地区信息
				.array-text {
					margin-right: 8rpx;
				}

				// 需要渲染的真正的省市区区域
				.box-list {
					display: flex;

					>view {
						margin-right: 8rpx;
					}
				}
			}

			// 下拉小箭头
			.drop-down-img {
				width: 18rpx;
				height: 10rpx;
			}
		}

		// 信息
		.location-info {
			margin-right: 30rpx;
			position: absolute;
			right: 0;

			image {
				width: 44rpx;
				height: 44rpx;
				vertical-align: middle;
			}
		}
	}

	// 消息以及定位结束

	// 绿色健康数据区域开始
	.healthy {
		text-align: left;
		font-family: Microsoft YaHei;
		font-weight: 400;

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
					.common {
						width: 476rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 2;
						overflow:hidden;
						-webkit-box-orient: vertical;
						display: inline-block;
					}
					.number {
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 2;
						overflow:hidden;
						-webkit-box-orient: vertical;
						display: inline-block;
						width: 100%;
						margin-right: 16rpx;
					}
				}

				// 搭配
				.collocation {
					width: 476rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					overflow:hidden;
					-webkit-box-orient: vertical;
					font-size: 26rpx;
					color: #666;
					margin-bottom: 40rpx;
				}

				// 价格以及会员
				.price-member {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					height: 48rpx;
					width: 100%;
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

	// index-banner 区域开始
	.index-banner {
		margin: 30rpx 0;

		image {
			height: 180rpx;
			width: 100%;
		}
	}

	// index-banner 区域结束
	// 查看更多
	.footer-end {
		height: 50rpx;
		line-height: 50rpx;
		font-size: 26rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		border-bottom: 1rpx solid #F0F0F0;

		// margin-bottom: 44rpx;
		image {
			width: 14rpx;
			height: 24rpx;
			vertical-align: middle;
			margin-left: 74rpx;
		}
	}

	.top {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
	}

	.position {
		margin-top: 30rpx;
		margin-left: 30rpx;
	}

	.position image {
		width: 24rpx;
		height: 28rpx;
		vertical-align: middle;
		margin-right: 2rpx;
	}

	.position text {
		font-size: 32rpx;
		color: #fff;
	}

	.top .search {
		background: transparent !important;
	}

	.van-search__content {
		background: #fff !important;
		border-radius: 28rpx !important;
		display: initial !important;
	}

	.search-box {
		background: #fff;
	}

	.dialog image {
		width: 48rpx;
		margin-top: 30rpx;
		margin-left: 20rpx;
		height: 48rpx;
	}

	.banner image {
		width: 100%;
	}

	.banner swiper {
		height: 528rpx;
	}

	.class {
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		margin: 26rpx 0 43rpx 0;
	}

	.class view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.class image {
		width: 85rpx;
		height: 85rpx;
	}

	.class view:nth-child(4) image {
		width: 100rpx;
		height: 95rpx;
	}

	.class view:nth-child(2) image {
		width: 85rpx;
		height: 110rpx;
	}

	.class view:nth-child(1) image {
		width: 85rpx;
		height: 100rpx;
	}

	.class text {
		white-space: nowrap;
		font-size: 24rpx;
		color: #555;
		margin-top: 23rpx;
	}

	.block {
		padding: 0 25rpx;
		text-align: center;
	}

	.block .title {
		text-align: center;
		position: relative;
		margin-top: 30rpx;
	}

	.green-healthy {
		left: 288rpx !important;
	}

	.title-img {
		width: 324rpx !important;
		height: 120rpx !important;
	}

	.shop-text {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		position: absolute;
		top: 44rpx;
		left: 304rpx;
	}

	.block .title image {
		width: 263rpx;
		height: 121rpx;
	}

	.more {
		width: 32rpx;
		height: 18rpx;
	}

	.shop {
		text-align: left;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.index {
		.banner {
			height: 180rpx;
			width: 100%;
		}

		.business {
			margin: 34rpx 0 34rpx 38rpx;
			font-size: 40rpx;
			font-weight: 500;
		}

		.footer {
			display: flex;
			margin-top: 40rpx;

			.left {
				margin: 0 22rpx;

				image {
					height: 170rpx;
					width: 180rpx;
				}
			}

			.right {
				width: 70%;
				font-size: 24rpx;
				color: #666;

				.titles {
					color: #333;
					font-size: 32rpx;
					font-weight: 600;
				}

				.center {
					margin: 14rpx 0;
				}

				.parity {
					width: 120rpx;
					height: 36rpx;
					line-height: 36rpx;
					text-align: center;
					border: 2rpx solid rgba(239, 239, 239, 1);
					border-radius: 19rpx 18rpx 18rpx 0rpx;
				}

				.full-reduction {
					margin: 18rpx 0;

					.full {
						display: inline-block;
						width: 24rpx;
						height: 24rpx;
						line-height: 24rpx;
						text-align: center;
						font-size: 20rpx;
						font-weight: 400;
						color: #ffffff;
						background-color: #fc4f4b;
						border-radius: 2rpx;
						margin-right: 10rpx;
					}
				}

				.discount {
					.fracture {
						display: inline-block;
						width: 24rpx;
						height: 24rpx;
						line-height: 24rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #ffffff;
						background-color: #ff9118;
						border-radius: 2rpx;
						margin-right: 11rpx;
					}
				}
			}
		}

		.info {
			.scroll-content {
				display: flex;
				white-space: nowrap;

				.info-box {
					margin-right: 16rpx;
					padding: 0 10rpx;
					box-sizing: border-box;
					width: 200rpx;
					height: 330rpx;
					margin-top: 30rpx;
					border: 1rpx solid rgba(241, 241, 241, .6);
					display: inline-block;
					background: rgba(255, 255, 255, 1);
					border-radius: 10rpx;

					.info-img {
						width: 180rpx;
						height: 180rpx;
					}

					.weight {
						font-size: 26rpx;
						color: #555;
						margin-bottom: 16rpx;
					}

					.num {
						color: #999;
						font-size: 20rpx;
						margin-bottom: 19rpx;
					}

					.price {
						.new {
							font-size: 24rpx;
							color: #fc4f4b;
							margin-right: 13rpx;
						}

						.once {
							color: #999;
							font-size: 20rpx;
						}
					}
				}
			}
		}
	}
// 获取位置授权区域
.popup {
	width: 690rpx;
	.popup-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
