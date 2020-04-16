<script>
export default {
  onLaunch: function() {
    // console.log("App Launch");
    // this.login();
  },
  onShow: function() {
    // console.log("App Show");
  },
  onHide: function() {
    // console.log("App Hide");
  },
  methods: {
    // login: function() {
    //   var that = this;
    //   uni.login({
    //     //向后台发送第三方平台code和appId数据
    //     success(res) {
    //       that.data.appId = uni.getAccountInfoSync().miniProgram.appId;
    //       var appId = uni.getAccountInfoSync().miniProgram.appId;
    //       uni.setStorage({
    //         key: "appId",
    //         data: appId
    //       });
    //       // console.log(that.data.appId)
    //       console.log(res);
    //       if (res.code) {
    //         //发起网络请求
    //         uni.request({
    //           url: "https://www.ludankeji.com/ludanxinxi/api/login",
    //           method: "GET",
    //           header: {
    //             "Content-Type":
    //               "application/x-www-form-urlencoded; charset=utf-8"
    //           },
    //           data: {
    //             code: res.code,
    //             appId: that.data.appId
    //           },
    //           dateType: "json",
    //           success: function(res) {
    //             console.log(res.statusCode);
    //             if (res.statusCode == 200) {
    //               //把获取的openid存储在全局中
    //               var openid = res.data.data.openid;
    //               var sessionKey = res.data.data.sessionKey;
    //               uni.setStorage({
    //                 key: "openid",
    //                 data: openid
    //               });
    //               uni.setStorage({
    //                 key: "sessionKey",
    //                 data: sessionKey
    //               });
    //               uni.getUserInfo({
    //                 withCredentials: true,
    //                 success: function(res) {
    //                   //此处为获取微信信息后的业务方法
    //                   // console.log(res)
    //                   uni.request({
    //                     url:
    //                       "https://www.ludankeji.com/ludanxinxi/api/loadWxappUserinfo",
    //                     // url: 'http://192.168.1.120:8188/ludanxinxi-web/api/loadWxappUserinfo',
    //                     data: {
    //                       encryptedData: res.encryptedData,
    //                       iv: res.iv,
    //                       rawData: res.rawData,
    //                       signature: res.signature,
    //                       appId: that.data.appId,
    //                       sessionKey: uni.getStorageSync("sessionKey")
    //                     },
    //                     success: function(res) {
    //                       // console.log(res)
    //                       var isLogin = true;
    //                       uni.setStorage({
    //                         key: "isLogin",
    //                         data: isLogin
    //                       });
    //                     }
    //                   });
    //                   // console.log(that.data.iv)
    //                 },
    //                 fail: function() {
    //                   //获取用户信息失败
    //                   uni.showModal({
    //                     title: "警告",
    //                     content: "尚未进行授权，请点击授权获取更多信息。",
    //                     success: function(res) {}
    //                   });
    //                 }
    //               });
    //             }
    //           },
    //           fail: function() {
    //             uni.showToast({
    //               title: "网络连接超时",
    //               image: "/pages/imgs/icon/error.png",
    //               mask: true,
    //               duration: 3000
    //             });
    //           }
    //         });
    //       } else {
    //         console.log("登录失败！" + res.errMsg);
    //       }
    //     }
    //   });
    // }
  }
};
</script>

<style>
/* #ifdef APP-PLUS ||MP-WEIXIN */
checkbox .wx-checkbox-input {
  border-radius: 50% !important;
  color: #48bc5b !important;
  width: 35upx;
  /* 背景的宽 */
  height: 35upx;
}
/* #endif */
/*每个页面公共css */
page {
  /* background-color: #000; */
  background-color: #f1f1f1;
}
.container {
  font-family: PingFang SC;
}

.big-title {
  font-size: 36rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 42rpx;
}
.middle-title {
  font-size: 32rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.middle-title-light {
  font-size: 32rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(90, 90, 90, 1);
}

.info-title {
  /* 信息标题 */
  font-size: 30rpx;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.info-subtitle {
  font-size: 26rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

/* 小标题 */
.info-small-title {
  font-size: 30rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.info-small-titlebol {
  font-size: 30rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.info-small-title-light {
  font-size: 30rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}

/* 小标题副标题 */
.info-small-title-sub {
  font-size: 26rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

/* 二级标题 */
.info-two-title {
  font-size: 28rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

/* 三级标题 */
.info-three-titledel {
  font-size: 24rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  text-decoration: line-through;
  color: rgba(102, 102, 102, 1);
}

.info-three-title {
  font-size: 24rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.info-three-titlestro {
  font-size: 24rpx;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
/* 小内容 */
.little-text {
  font-size: 22rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 23rpx;
}

/* 白色标题 */
.order-title {
  font-size: 40rpx;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(247, 247, 247, 1);
}

/* 按钮文字 */
.btn-text {
  font-size: 36rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 254, 254, 1);
}

/* 布局 */

/* 浮动布局 */
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* 居中 */
.vertical-center {
  align-self: center;
}
.level-center {
  margin: 0 auto;
  text-align: center;
}
.position-center {
  width: 600px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -200px; /* 高度的一半 */
  margin-left: -300px;
}
.position-vercenter {
  width: 750rpx;
  height: 50rpx;
  position: relative;
  top: 50%;
  margin-top: -25rpx;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
}

/* 盒子 */

/* 按钮样式 */
.btn-default {
  width: 150rpx;
  height: 56rpx;
  font-size: 26rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  background: rgba(255, 255, 255, 1);
  border: 2rpx solid rgba(229, 229, 229, 1);
  border-radius: 28rpx;
  text-align: center;
  line-height: 56rpx;
}
.btn-confirm {
  font-size: 26rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  width: 150rpx;
  height: 56rpx;
  background: rgba(255, 255, 255, 1);
  border: 2rpx solid rgba(90, 195, 107, 1);
  border-radius: 28rpx;
  text-align: center;
  line-height: 56rpx;
  color: #5ac36b;
}
.btn-important {
  width: 150rpx;
  height: 56rpx;
  font-size: 26rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  border-radius: 28rpx;
  text-align: center;
  line-height: 56rpx;
  background: rgba(253, 72, 77, 1);
  color: white;
}

.btn-default-long {
  width: 690rpx;
  height: 84rpx;
  background: rgba(39, 149, 36, 1);
  margin: 0 auto;
  text-align: center;
  line-height: 84rpx;
  color: white;
}
.btn-default-longrad {
  width: 660rpx;
  height: 84rpx;
  background: rgba(39, 149, 36, 1);
  border-radius: 40rpx;
  margin: 0 auto;
  text-align: center;
  line-height: 84rpx;
}
</style>
