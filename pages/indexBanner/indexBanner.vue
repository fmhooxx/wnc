<template>
  <view>{{content}}</view>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  onLoad() {
    // 获取首页的 banner 数据
    this.getContentById();
  },
  methods: {
    // 获取首页的 banner 数据
    getContentById() {
      this.$http
        .get("/banner/getContentById", { params: { banner_id: 21 } })
        .then(res => {
          this.content = res.data.content;
        });
    }
  }
};
</script>

<style>
</style>
