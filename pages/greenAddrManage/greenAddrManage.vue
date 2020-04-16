<template>
	<!--pages/greenAddrManage/greenAddrManage.wxml-->
	<view class="container">
		<view class="addr">
			<radio-group @change="radioChange">
				<label v-for="(item, index) in addressList" :key="index">
					<view class="box">
						<view class="addrInfo" @click.stop="goConfirmOrder(item.id)">
							<view class="addrInfo_details">
								<view class="middle-title">姓名：{{item.name}}</view>
								<view class="middle-title">{{item.phone}}</view>
							</view>
							<view class="middle-title-light">{{item.address}},{{item.nplate}}</view>
						</view>
						<view class="addr_do">
							<view>
								<radio :value="item.id" color="#279524" :checked="item.is_default == address_id" />默认地址
							</view>
							<view class="do">
								<view class="one" @click.stop="goGreenAddrManageAdd(item.id)">
									<image src="../../static/images/addr-editor.png"></image>
									<text class="info-three-title">编辑</text>
								</view>
								<view class="two" @click.stop="del(item.id)">
									<image src="../../static/images/addr-del.png"></image>
									<text class="info-three-title">删除</text>
								</view>
							</view>
						</view>
					</view>
				</label>
			</radio-group>
		</view>

		<view class="bottom">
			<view class="btn-default-longrad btn-text btn" @click="toGreenAddrManageAdd">+ 新建地址</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 所有收货地址列表
				addressList: [],
				address_id: '',
				// 默认选中项
				// current: '',
				user_id: ''
			}
		},
		onLoad(options) {
			this.user_id = uni.getStorageSync('user_id')
			// 查询所有收货地址接口
			this.getAllAddress()
		},
		methods: {
			// 去新建地址页面
			toGreenAddrManageAdd() {
				uni.navigateTo({
					url: '/pages/greenAddrManageAdd/greenAddrManageAdd'
				})
			},
			// 根据 id 删除地址
			del(id) {
				uni.showModal({
						content: '确定删除该地址?',
						success: res => {
							if (res.confirm) {
									this.$http.get('/user/delAddressById', {
										params: {
											id: id
										}
									}).then(res => {
										this.getAllAddress()
									})
							} else if (res.cancel) {
									console.log('用户点击取消');
							}
						}
				});
			},
			// 去确认订单页面
			goConfirmOrder(id) {
				uni.navigateTo({
					url: '/pages/confirmOrder/confirmOrder?id=' + id
				})
			},
			// 去编辑地址页面
			goGreenAddrManageAdd(id) {
				uni.navigateTo({
					url: '/pages/greenAddrManageAdd/greenAddrManageAdd?id=' + id
				})
			},
			// 查询所有收货地址接口
			getAllAddress() {
				this.$http.get('/user/getAllAddress', {
					params: {
						userId: this.user_id
					}
				}).then(res => {
					console.log(res)
					this.addressList = res.data
					// console.log(this.addressList)
				})
			},
			// 当默认地址 radio 框发生变化的时候
			radioChange(e) {
				console.log(e.detail.value)
				this.address_id = e.detail.value
				// this.address_id = e.detail.value
				// this.current = e.detail.value
				this.$http.get('/user/updateDefaultAddress', { params: { user_id: this.user_id, address_id: this.address_id } }).then(res => {
					console.log(e)
				// 	// if (res.data = 'success') {
				// 	// 	uni.showToast({
				// 	// 			title: '更改成功',
				// 	// 			duration: 2000,
				// 	// 			icon: 'none'
				// 	// 	});
				// 	// }
				})
			}
		}
	}
</script>


<style lang="less" scoped>
	.addr {
		// padding: 0 50rpx 0 20rpx;
		box-sizing: border-box;
		margin-top: 26rpx
	}
	.box {
		background-color: #fff;
		margin-bottom: 20rpx;
	}
	.addr_do {
		height: 90rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0 50rpx 0 20rpx;
		// padding: 20rpx 0;
	}

	// .do {}
	.do view {
		display: inline-block;

		>image {
			margin-right: 12rpx;
		}
	}

	.one {
		margin-right: 50rpx;
	}

	radio {
		transform: scale(0.8);
		margin-left: -16rpx;
		color: rgba(102, 102, 102, 1);
	}

	.do image {
		width: 28rpx;
		height: 28rpx;
		vertical-align: middle;
	}

	.addrInfo_details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 0 20rpx 6rpx;
		padding-top: 10rpx;
	}

	.addrInfo {
		height: 120rpx;
		padding-bottom: 10rpx;
		margin: 0 50rpx 0 20rpx;
		border-bottom: 1rpx solid #efefef;
	}

	/* 底部样式开始 */
	.bottom {
		position: fixed;
		bottom: 0;
		left: 50%;
		margin-left: -375rpx;
		height: 130rpx;
		width: 750rpx;
		background: rgba(255, 255, 255, 1);
	}

	.btn {
		position: relative;
		top: 50%;
		left: 50%;
		margin-top: -42rpx;
		margin-left: -330rpx;
	}
</style>
