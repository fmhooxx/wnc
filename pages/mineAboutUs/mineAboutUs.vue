<template>
  <!-- 关于我们页面 ming -->
  <view class="about">
    <view class="box">
      <rich-text :nodes="content"></rich-text>
      <!-- <view>蛙农场创立于2019年10月，是全国互联网生鲜电商平台。公司秉承“生鲜行业的变革者”的使命与初心, 致力于社区生鲜新零售，创新采用“线上订线下取，今日订明日取”的互联网新零售经营模式。</view> -->
      <!-- <view class="footer">打造互联网社区生态，为千万中国家庭提供全品类新鲜健康品，让中国消费者不仅能吃得健康，更拥有健康的生活方式。</view> -->
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  onLoad() {
    // 关于我们的接口
    this.getUserAbout();
  },
  methods: {
    getUserAbout() {
      this.$http.get("/user/getUserAbout").then(res => {
        console.log(res);
        this.content = res.data.content;
      });
      // uni.request({
      // 	url: "http://192.168.1.143:8086/WNC/user/getUserAbout",
      // 	data: {},
      // 	header: {
      // 		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      // 	},
      // 	success: res => {
      // 		console.log(res)
      // 	}
      // });
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
.about {
  padding: 0 30rpx 0 37rpx;
  .box {
    margin-top: 38rpx;
    font-size: 30rpx;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(95, 95, 95, 1);
    .footer {
      margin-top: 60rpx;
    }
  }
}
</style>