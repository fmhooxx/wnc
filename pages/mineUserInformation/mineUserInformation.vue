<template>
	<!-- 用户信息页面 ming -->
		<view class="user-info">
			<!-- 更换头像区域 -->
			<view class="info-head" @click="replace">
				<!-- 左边 -->
				<view class="head-left">点击更换头像</view>
				<!-- 右边 -->
				<view class="head-right">
					<!-- 头像图片 -->
					<image class="right-one" :src="url"></image>
					<!-- 右箭头图片 -->
					<image class="right-two" src="../../static/images/arrow-right.png"></image>
				</view>
			</view>
			<!-- 昵称区域 -->
			<view class="info-head" @click="goMineNickname">
				<!-- 左边 -->
				<view class="head-left">昵称</view>
				<!-- 右边 -->
				<view class="head-right">
					<!-- 右边的文字 -->
					<view class="right-text">蛙农场</view>
					<!-- 右箭头图片 -->
					<image class="right-two" src="../../static/images/arrow-right.png"></image>
				</view>
			</view>
			<!-- 性别区域 -->
			<view class="info-head">
				<!-- 左边 -->
				<view class="head-left">性别</view>
				<!-- 右边 -->
				<view class="head-right">
					<radio-group @change="radioChange">
						<label class="choice-box">
								<view class="choice-woman">
									<text class="choice-text">女</text>
									<radio value="2" checked="false" color="#279524" />
								</view>
								<view>
									<text class="choice-text">男</text>
									<radio value="1" checked="true" color="#279524" />
								</view>
						</label>
					</radio-group>
				</view>
			</view>
			<!-- 生日区域 -->
			<view class="info-head">
				<!-- 左边 -->
				<view class="head-left">生日</view>
				<!-- 右边 -->
				<view class="head-right">
					<!-- 日期选择器 -->
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="right-timer">{{date}}</view>
					</picker>
				</view>
			</view>
			<!-- 手机号码区域 -->
			<view class="info-head" @click="goMineVerificationCode">
				<!-- 左边 -->
				<view class="head-left">修改手机号码</view>
				<!-- 右边 -->
				<view class="head-right">
					<!-- 右边的文字 -->
					<view class="right-text">{{phone}}</view>
					<!-- 右箭头图片 -->
					<image class="right-two" src="../../static/images/arrow-right.png"></image>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				url: '../../static/images/mine-head-portrait.png',
				date: currentDate,
				file: [],
				// 存储手机号码
				phone: ''
			};
		},
		methods: {
			onLoad() {
				this.phone = uni.getStorageSync('phone')
			},
			// 当选择的日期发生改变的时候 改变页面的日期
			bindDateChange(e) {
				this.date = e.target.value
				this.$http.get('/user/updateBirthday', { params: { userId: 1, birthday: this.date } }).then(res => {
					console.log(res)
				})
				// uni.request({
				// 	url: "http://192.168.1.143:8086/WNC/user/updateBirthday",
				// 	data: {
				// 		userId: 1,
				// 		birthday: this.date
				// 	},
				// 	header: {
				// 		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
				// 	},
				// 	success: res => {
				// 		console.log(res)
				// 	}
				// });
			},
			// 日期的格式
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 性别单选框发生改变的时候
			radioChange(e) {
				// console.log(e.detail.value)
				this.$http.get('/user/updateGender', { params: { userId: 1, gender: e.detail.value } }).then(res => {
					console.log(res)
				})
				// uni.request({
				// 	url: "http://192.168.1.143:8086/WNC/user/updateGender",
				// 	data: {
				// 		userId: 1,
				// 		gender: e.detail.value
				// 	},
				// 	header: {
				// 		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
				// 	},
				// 	success: res => {
				// 		console.log(res)
				// 	}
				// });
			},
			// 去修改昵称页面
			goMineNickname() {
				uni.navigateTo({
					url: '/pages/mineNickname/mineNickname'
				})
			},
			// 去修改手机号码的验证码页面
			goMineVerificationCode() {
				uni.navigateTo({
					url: '/pages/mineVerificationCode/mineVerificationCode'
				})
			},
			// 点击更换用户头像
			replace() {				
				uni.chooseImage({
					count: 1,
					success: res => {
						console.log(res)
						this.file = res.tempFilePaths
						this.url = res.tempFilePaths[0]
						// var imageSrc = res.tempFilePaths[0]
						uni.uploadFile({
							url: 'http://192.168.1.143:8086/WNC/user/updateimageUrl',
							filePath: this.url,
							name: 'file',
							formData: {
									userId: 1
								},
							success: res => {
								console.log(res)
							}
						})
						// uni.request({
						// 	url: "http://192.168.1.143:8086/WNC/user/updateimageUrl",
						// 	data: {
						// 		file: this.file,
						// 		userId: 1
						// 	},
						// 	header: {
						// 		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
						// 	},
						// 	success: res => {
						// 		console.log(res)
						// 	}
						// });
					}
				})
			}
		},
		computed: {
			// 日期的开始范围
			startDate() {
				return this.getDate('start');
			},
			// 日期的结束范围
			endDate() {
				return this.getDate('end');
			}
		}
	};
</script>

<style lang="less" scoped>
	image {
		width: 100%;
		height: 100%;
	}
	.user-info {
		padding: 0 30rpx;
		width: 690rpx;
		margin: 20rpx auto;
		background-color: #fff;
		height: 100%;
		.info-head {
			// margin: 37rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100rpx;
			border-bottom: 2rpx solid rgba(241,241,241,1);
			// 左边
			.head-left {
				font-size: 30rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}
			// 右边
			.head-right {
				display: flex;
				align-items: center;
				image {
					border-radius: 50%;
					vertical-align: middle;
				}
				// 头像图片
				.right-one {
					width: 60rpx;
					height: 60rpx;
				}
				// 右箭头图片
				.right-two {
					width: 12rpx;
					height: 22rpx;
					margin-left: 17rpx;
				}
				// 右边的文字
				.right-text {
					font-size: 30rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}
				// 单选区域的的样式
				.choice-box {
					display: flex;
					.choice-woman {
						margin-right: 100rpx;
					}
					// 单选框的文字
					.choice-text {
						margin-right: 18rpx;
						font-size: 30rpx;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
					}
				}
				// 日期的文字样式
				.right-timer {
					font-size: 30rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color:rgba(51,51,51,1);
				}
			}
		}
	}
</style>
