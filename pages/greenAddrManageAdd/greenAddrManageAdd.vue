<template>
  <!--pages/greenAddrManageAdd/greenAddrManageAdd.wxml-->
  <!-- 新建收货地址页面 ming -->
  <view class="address-add">
    <view>
      <!-- 所在地区 -->
      <view class="list">
        <!-- 左边 -->
        <view class="region-left">
          <view>所在地区</view>
        </view>
        <!-- 右边 -->
        <view class="region-right">
          <!-- 详细地址的输入框区域 地址选择 -->
          <view class="choice" v-if="isChoice">
            <picker @change="bindChange" mode="region">
              <view>{{address}}</view>
            </picker>
          </view>
          <view class="choice" v-else>
            <picker @change="bindPickerChange" mode="region">
              <view class="address-list" v-for="(item, index) in addressList" :key="index" >{{addressList[index]}}</view>
            </picker>
          </view>
          <!-- 右边小箭头 -->
          <image src="/static/images/arrow-right.png"></image>
        </view>
      </view>
      <!-- 详细地址 -->
      <view class="list">
        <!-- 左边 -->
        <view class="region-left">
          <view>详细地址</view>
          <!-- 详细地址的输入框区域 -->
          <input placeholder="详细地址" v-model="n_plate" placeholder-class="address-placeholder" />
        </view>
      </view>
      <!-- 收货人 -->
      <view class="list">
        <!-- 左边 -->
        <view class="region-left">
          <view>收货人</view>
          <!-- 详细地址的输入框区域 -->
          <input placeholder="收货人姓名" v-model="uname" placeholder-class="address-placeholder" />
        </view>
      </view>
      <!-- 性别 -->
      <view class="list">
        <!-- 右边 -->
        <radio-group @change="radioChange">
          <label class="choice-box">
            <view class="box-item" v-for="(item, index) in gender" :key="index">
              <radio color="#279524" :value="item.id" :checked="current == item.id" />
              <text class="choice-text" :class="{ active: current == item.value }">{{item.text}}</text>
            </view>
          </label>
        </radio-group>
      </view>
      <!-- 手机号码 -->
      <view class="list">
        <!-- 左边 -->
        <view class="region-left">
          <view>手机号码</view>
          <!-- 详细地址的输入框区域 -->
          <input placeholder="收货人手机号" v-model="phone" placeholder-class="address-placeholder" />
        </view>
      </view>
    </view>
    <!-- 保存按钮 -->
    <view v-if="isBtn" class="btn" @click="addAddress">
      <button>保存</button>
    </view>
    <!-- 修改按钮 -->
    <view v-else class="btn" @click="modifyAddAddress">
      <button>修改</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 性别数据
      gender: [
        {
          id: 1,
          text: "先生",
          value: "0"
        },
        {
          id: 2,
          text: "女士",
          value: "1"
        }
      ],
      // 控制被选中性别的那一项
      current: null,
      // 地址选择
      address: '请选择详细地址',
      // 门牌号
      n_plate: '',
      // 收货人
      uname: '',
      // 手机号码
      phone: '',
      // 地址列表
      addressList: [],
      isChoice: true,
      // 根据上一个页面传过来的 id 来判断是修改还是保存
      id: '',
      // 控制保存和修改按钮之间的显示
      isBtn: true,
      user_id: ''
    };
  },
  onLoad(options) {
    this.user_id = uni.getStorageSync('user_id')
    if (options.id != undefined) {
      this.id = Number(options.id)
      this.isBtn = false
      // 根据 id 查询收货地址
      this.findAddressById()
    } else {
      this.isBtn = true
    }
  },
  methods: {
    // 根据 id 查询收货地址
    findAddressById() {
      this.$http.get('/user/findAddressById', {params: {id:this.id}}).then(res => {
        this.current = res.data.data.gender
        this.address = res.data.data.address
        this.n_plate = res.data.data.n_plate
        this.uname = res.data.data.name
        this.phone = res.data.data.phone
      })
    },
    // 修改地址接口
    modifyAddAddress() {
      this.$http.get('/user/updateAddress', { params: { id:this.id,user_id: this.user_id,address:this.addressList,n_plate:this.n_plate, name: this.uname, phone: this.phone,gender: this.current } }).then(res => {
        // console.log(res)
        if (res.data == 'success') {
          uni.navigateTo({
            url: '/pages/greenAddrManage/greenAddrManage'
          })
        }
      })
    },
    // 添加收货地址接口
    addAddress() {
      this.$http.get('/user/addAddress', { params: { user_id:this.user_id, address: this.addressList, n_plate: this.n_plate, name: this.uname, phone: this.phone,gender: this.current} }).then(res => {
        // console.log(res.ata)
        if (res.data == 'success') {
          uni.navigateTo({
            url: '/pages/greenAddrManage/greenAddrManage'
          })
        }
      })
    },
    // 去确认订单页面
    goConfirmOrder() {
      uni.navigateTo({
        url: "/pages/confirmOrder/confirmOrder"
      });
    },
    // 当选择性别发生改变的时候
    radioChange(e) {
      this.current = e.target.value;
    },
    // 详细地址发生变化的时候
    bindChange(e) {
      if (this.addressList == '') {
        this.addressList = e.target.value
        this.isChoice = false
      }
    },
    // 地址发生变化的时候
    bindPickerChange(e) {
      this.addressList = e.target.value
      this.isChoice = false
    }
  }
};
</script>

<style lang="less" scoped>
.address-add {
  margin-top: 20rpx;
  // padding: 0 30rpx;
  > view {
    background-color: #fff;
  }
  // 所在地区
  .list {
    height: 110rpx;
    // line-height: 110rpx;
    padding: 0 30rpx;
    display: flex;
    align-items: center;
    border-bottom: 1rpx solid #f1f1f1;
    // 左边
    .region-left {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      color: #333;
      font-family: Source Han Sans CN;
      font-weight: 400;
      > view {
        width: 160rpx;
        // margin-right: 30rpx;
      }
      // 请输入详细地址的 placeholder 样式
      .address-placeholder {
        color: #999;
        font-size: 28rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
      }
      // 详细地址的输入框区域
      > input {
        width: 79%;
        margin-top: 4rpx;
        // width: 84%;
      }
    }
    // 右边
    .region-right {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // 详细地址的输入框区域 地址选择
      .choice {
        width: 500rpx;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 28rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999;
        margin-left: -18rpx;
        view {
          display: inline-block;
        }
      }
      // 右边小箭头
      > image {
        width: 13rpx;
        height: 23rpx;
        vertical-align: middle;
      }
    }
    // 性别区域
    .choice-box {
      display: flex;
      font-size: 28rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #999;
      margin-left: 92rpx;
      .box-item {
        margin: 0 45rpx;
        > text {
          margin-left: 8rpx;
        }
      }
    }
    .active {
      color: #333 !important;
    }
  }
  .btn {
    margin: 90rpx auto;
    width: 690rpx;
    height: 80rpx;
    background: rgba(39, 149, 36, 1);
    border-radius: 40rpx;
    > button {
      width: 100%;
      background-color: #279524;
      border-radius: 40rpx;
      font-size: 32rpx;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #fff;
    }
  }
}
</style>