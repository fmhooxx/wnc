<template>
	<!-- 会员年卡商品详情页 -->
	<view>
		<view class="base-cates">
			<!-- 左边 -->
			<scroll-view scroll-y class="cates-left">
				<view class="cates-left-box" v-for="item in list" :key="item.id" :class="{bgc: item.id === isActive}">
					<view class="left-text" :class="{active: item.id === isActive}" @click="tabTap(item.id)">{{item.uname}}</view>
				</view>
			</scroll-view>
			<!-- 右边 -->
			<scroll-view scroll-y class="cates-right">
				<block v-for="(item, index) in secondCates" :key="index">
					<view class="right">
						<view class="item-img">
							<image :src="item.url"></image>
						</view>
						<view class="box">
							<view class="title">{{item.title}}<text>{{item.weight}}</text></view>
							<view class="introduce">{{item.introduce}}</view>
							<view class="new">{{item.new}}<text>{{item.novel}}</text></view>
							<view class="item-footer">
								<view class="jiahao">
									<image src="/static/images/vip-add@2x.png"></image>
								</view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<!-- <suspension></suspension> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						id: 0,
						uname: '时令水果',
						children: [{
								pid: 0,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 1,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 2,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 3,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 4,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 5,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 6,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 7,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 8,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 9,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 10,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							},
							{
								pid: 11,
								url: '/static/images/8.png',
								title: '冷冻鸡翅根',
								weight: '500g',
								introduce: '新鲜美味，香嫩可口',
								new: '¥49.',
								novel: '90'
							}
						]
					},
					{
						id: 1,
						uname: '禽类水产',
						children: [{
							pid: 10,
							url: '/static/images/1.png',
							title: '白萝卜',
							weight: '1000g',
							introduce: '新鲜美味，香嫩可口',
							new: '¥9.',
							novel: '90'
						}]
					},
					{
						id: 2,
						uname: '粮油副食',
						children: [{
							pid: 20,
							url: '/static/images/green-orderlistA.png',
							title: '大白菜',
							weight: '500g',
							introduce: '新鲜美味，香嫩可口',
							new: '¥4.',
							novel: '90'
						}]
					},
					{
						id: 3,
						uname: '肉类',
						children: [{
							pid: 30,
							url: '/static/images/green-orderlistB.png',
							title: '蟠桃',
							weight: '500g',
							introduce: '新鲜美味，香嫩可口',
							new: '¥29.',
							novel: '90'
						}]
					},
					{
						id: 4,
						uname: '蔬菜菌菇',
						children: [{
							pid: 40,
							url: '/static/images/vip-goodsC@2x.jpg',
							title: '基围虾',
							weight: '500g',
							introduce: '新鲜美味，香嫩可口',
							new: '¥490.',
							novel: '90'
						}]
					},
					{
						id: 5,
						uname: '调味干货',
						children: [{
							pid: 50,
							url: '/static/images/detail-lunbo.jpg',
							title: '冷冻鸡翅根',
							weight: '500g',
							introduce: '新鲜美味，香嫩可口',
							new: '¥49.',
							novel: '90'
						}]
					},
					{
						id: 6,
						uname: '蛋类',
						children: [{
							pid: 60,
							url: '/static/images/green-cart.png',
							title: '冷冻鸡翅根',
							weight: '500g',
							introduce: '新鲜美味，香嫩可口',
							new: '¥49.',
							novel: '90'
						}]
					}
				],
				// 选中项
				isActive: 0,
				num: 0,
				secondCates: []
			}
		},
		onLoad() {
			// 获取左边的商品类别接口
			this.getClass()
			// 获取分类商品信息数据接口
			this.getMarket1()
		},
		mounted() {
			this.secondCates = this.list[this.num].children
		},
		methods: {
			// 获取商品类别数据接口
			// getClass() {
			// 	uni.request({
			// 		url: 'http://192.168.1.155:8086/WNC/com/getClass',
			// 		data: {},
			// 		header: {
			// 			'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
			// 		},
			// 		succeee(res) {
			// 			console.log(res)
			// 		}
			// 	})
			// },
			getClass() {
				this.$http.get('/com/getClass').then(res => console.log(res))
			},
			// 获取分类商品信息数据接口
			getMarket1() {
				this.$http.get('/com/getMarket1', { params: { id: 1 } }).then(res => console.log(res))
			},
			// getMarket1() {
			// 	uni.request({
			// 		url: 'http://192.168.1.155:8086/WNC/com/getMarket1',
			// 		data: {
			// 			id: 1
			// 		},
			// 		header: {
			// 			'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
			// 		},
			// 		succeee(res) {
			// 			console.log(res)
			// 		}
			// 	})
			// },
			// 点击左边 重新加载数据
			tabTap(id) {
				this.isActive = id
				let result = this.list.findIndex(item => {
					return item.id == id
				})
				this.num = result
				this.secondCates = this.list[this.num].children
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #fff;
	}
</style>

<style lang="less" scoped>
	image {
		width: 100%;
		height: 100%;
	}

	.box {
		width: 100%;
	}

	.base-cates {
		position: fixed;
		height: 100%;
		display: flex;
		font-size: 26rpx;
		color: #666;
		width: 100%;

		.cates-left {
			width: 160rpx;
			background-color: #f7f7f7;

			.cates-left-box {
				position: relative;
				height: 110rpx;
				line-height: 110rpx;
				width: 160rpx;
				box-sizing: border-box;

				.left-text {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					box-sizing: border-box;
					text-align: center;
					height: 64rpx;
					line-height: 64rpx;
					color: #666;
					border-left: 6rpx solid transparent;
				}

				.active {
					background-color: #fff;
					border-left: 6rpx solid #279524;
					color: #333;
				}
			}

			.bgc {
				background-color: #fff;
			}
		}

		.cates-right {
			background-color: #fff;
			margin-left: 20rpx;
			border-top: 1rpx solid #f7f7f7;

			.right {
				display: flex;
				position: relative;
				height: 210rpx;
				border-bottom: 1rpx solid #f7f7f7;

				.item-img {
					width: 244rpx;
					height: 160rpx;
					margin-right: 22rpx;
					margin: 28rpx 22rpx 0 0;
				}

				.title {
					font-size: 28rpx;
					color: #333;
					margin-top: 30rpx;

					>text {
						margin-left: 20rpx;
					}
				}

				.introduce {
					font-size: 24rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
					margin: 10rpx 0 34rpx 0;
				}

				.new {
					color: #ff4543;
					font-size: 32rpx;
					margin-bottom: 15rpx;

					>text {
						font-size: 24rpx;
					}
				}

				.item-footer {
					display: flex;

					.jiahao {
						width: 50rpx;
						height: 50rpx;
						margin-right: 22rpx;
						position: absolute;
						right: 0;
						bottom: 24rpx;
					}
				}
			}
		}
	}
</style>
