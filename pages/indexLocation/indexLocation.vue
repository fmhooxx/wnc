<template>
  <!-- 首页定位页面 ming -->
  <view class="index-location">
    <map
      style="width: 100%; height: 300px;"
      :latitude="latitude"
      :longitude="longitude"
      :markers="covers"
    ></map>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 中心纬度
      latitude: null,
      // 中心经度
      longitude: null,
      // 标记点
      covers: [
        {
          latitude: null,
          longitude: null,
          iconPath: "/static/images/posi-red.png"
        },
        {
          latitude: 39.9,
          longitude: 116.39,
          iconPath: "/static/images/posi.png"
        }
      ]
    };
  },
  onLoad() {
    this.isGetLocation();
  },
  methods: {
    getAuthorizeInfo(a = "scope.userLocation") {
      //1. uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗
      uni.authorize({
        scope: a,
        success: () => {
          //1.1 允许授权
          this.getLocationInfo();
        },
        fail() {
          //1.2 拒绝授权
          console.log("你拒绝了授权，无法获得周边信息");
        }
      });
    },

    getLocationInfo() {
      //2. 获取地理位置
      uni.getLocation({
        type: "wgs84",
        success: res => {
          // console.log("你当前经纬度是：");
          // console.log(res);
          console.log("当前位置的经度：" + res.longitude);
          console.log("当前位置的纬度：" + res.latitude);
          this.latitude = res.latitude;
          this.longitude = res.longitude;
          this.covers[0].latitude = res.latitude;
          this.covers[0].longitude = res.longitude;
          let latitude, longitude;
          latitude = res.latitude.toString();
          longitude = res.longitude.toString();
          uni.request({
            header: {
              "Content-Type": "application/text"
            },
            url:
              "http://apis.map.qq.com/ws/geocoder/v1/?location=" +
              latitude +
              "," +
              longitude +
              "&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35",
            success(re) {
              console.log("中文位置");
              console.log(re);
              if (re.statusCode === 200) {
                console.log("获取中文街道地理位置成功");
              } else {
                console.log("获取信息失败，请重试！");
              }
            }
          });
        },
        fail: res => {
          console.log(res);
          if (res.errCode == 2) {
            uni.showToast({
              title: "请您打开GPS",
              duration: 3000,
              icon: "none"
            });
          }
        }
      });
    },

    isGetLocation(a = "scope.userLocation") {
      // 3. 检查当前是否已经授权访问scope属性，参考下截图
      uni.getSetting({
        success: res => {
          // console.log(res.authSetting);
          // console.log(res);
          if (!res.authSetting[a]) {
            //3.1 每次进入程序判断当前是否获得授权，如果没有就去获得授权，如果获得授权，就直接获取当前地理位置
            this.getAuthorizeInfo();
          } else {
            this.getLocationInfo();
          }
          // if (res.scope.userInfo) {

          // }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
