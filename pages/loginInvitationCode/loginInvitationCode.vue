<template>
  <!-- 填写邀请码页面 ming -->
  <view class="login">
    <!-- 登录 -->
    <view class="login-title">请输入邀请码</view>
    <!-- 输入手机号码和密码区域 -->
    <view class="login-content">
      <view class="login-password">
        <input
          placeholder="请输入邀请码"
          v-model="invitationVal"
          placeholder-class="tel-password-class"
        />
      </view>
    </view>
    <!-- 登录按钮 -->
    <view class="login-btn" :class="{ active: isActive }">
      <button class="btn" :class="{ active: isActive }" @click="goIndex">确定</button>
    </view>
		<!-- 跳过区域 -->
		<view class="login-footer">
			<!-- 文字区域 -->
			<view class="footer-text" @click="goIndex">跳过，看好货</view>
			<!-- 图片区域 -->
			<view class="footer-img">
				<image src="/static/images/arrow-right.png"></image>
			</view>
		</view>
    <!-- 底部文字区域 -->
    <view class="login-third">
      <view class="third-footer">
        登录注册即表示你同意《
        <text>蛙农场用户协议</text>》和《
        <text>蛙农场隐私协议</text>》
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 邀请码输入框的内容
      invitationVal: ""
    };
  },
  methods: {
		// 点击确定按钮
		goIndex() {
			uni.switchTab({
				url: "/pages/index/index"
			})
		}
  },
  computed: {
    isActive() {
      if (this.invitationVal === '') {
        return false
      }
      return true
    }
  },
};
</script>

<style>
page {
  background-color: #fff;
}
</style>

<style lang="less" scoped>
image {
  width: 100%;
  height: 100%;
}
.active {
  background-color: #279524 !important;
  opacity: 1 !important;
}
.login {
  padding: 0 56rpx;
  // 登录
  .login-title {
    font-size: 48rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(38, 38, 38, 1);
    margin-bottom: 24rpx;
  }
  // 手机号 密码区域
  .login-content {
    > view {
      height: 80rpx;
      border-bottom: 1rpx solid #ECECEC;
    }
    .login-password {
      margin: 176rpx 0 94rpx 0;
    }
    // 请输入手机号码和密码的 placeholder 样式
    .tel-password-class {
      font-size: 30rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(201, 200, 207, 1);
    }
  }
  // 登录按钮
  .login-btn {
    width: 630rpx;
    height: 90rpx;
    margin-bottom: 33rpx;
    border-radius: 42rpx;
    .btn {
      width: 100%;
      background: rgba(39, 149, 36, 1);
      opacity: 0.5;
      border-radius: 42rpx;
      font-size: 36rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
	}
	// 跳过区域
	.login-footer {
		float: right;
		display: flex;
		align-items: center;
		line-height: 16rpx;
		// 文字区域
		.footer-text {
			font-size: 26rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color:rgba(141,141,141,1);
		}
		// 图片区域
		.footer-img {
			width: 11rpx;
			height: 21rpx;
			margin-left: 12rpx;
		}
	}
  // 底部文字区域
  .login-third {
    position: absolute;
    bottom: 60rpx;
    text-align: center;
  }
  .third-footer {
    font-family: Source Han Sans CN;
    font-size: 22rpx;
    font-weight: 400;
    color: #a8a8a8;
    text {
      color: #4baa58;
    }
  }
}
</style>