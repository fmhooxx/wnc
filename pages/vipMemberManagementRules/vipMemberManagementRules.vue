<template>
  <view class="box">
    <rich-text :nodes="vrules"></rich-text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      vrules: ""
    };
  },
  onLoad() {
    // 获取规则接口
    this.getVip();
  },
  methods: {
    // 获取规则接口
    getVip() {
      this.$http.get("/bank/getBankRules").then(res => {
        console.log(res);
        this.vrules = res.data.data.vrules;
      });
      // this.$http
      //   .get("/memberPackage/getVip", { params: { user_id: 1 } })
      //   .then(res => console.log(res));
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 50rpx;
}
</style>
