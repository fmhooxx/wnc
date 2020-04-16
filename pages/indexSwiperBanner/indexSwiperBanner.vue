<template>
  <view>{{banner}}</view>
</template>

<script>
export default {
  data() {
    return {
      banner: "",
      banner_id: ""
    };
  },
  onLoad(options) {
    this.banner_id = Number(options.id);
    console.log(options);
    // 获取 banner 详情信息接口
    this.getContentById();
  },
  methods: {
    // 获取 banner 详情信息接口
    getContentById() {
      this.$http
        .get("/banner/getContentById", {
          params: { banner_id: this.banner_id }
        })
        .then(res => {
          console.log(res);
          this.banner = res.data.content;
        });
    }
  }
};
</script>

<style>
</style>
