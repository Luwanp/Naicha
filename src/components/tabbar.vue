<template>
  <div>
    <div class="tabbar">
      <div class="item" v-for="(item,index) in list" :key="index" @click="cut(index,item.path)">
        <img class="ico" :src="  $route.meta.id== index?item.act:item.ico" alt="">
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "首页",
          ico: require("@/assets/image/tabbar/sy.png"),
          act: require("@/assets/image/tabbar/sya.png"),
          path: "/",
        },
        {
          name: "点单",
          ico: require("@/assets/image/tabbar/dd.png"),
          act: require("@/assets/image/tabbar/dda.png"),
          path: "meal",
        },

        {
          name: "订单",
          ico: require("@/assets/image/tabbar/bh.png"),
          act: require("@/assets/image/tabbar/bha.png"),
          path: "order",
        },
        {
          name: "我的",
          ico: require("@/assets/image/tabbar/my.png"),
          act: require("@/assets/image/tabbar/mya.png"),
          path: "my",
        },
      ],
      act: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    cut(val, p) {
      // this.act = val;
      this.$router.push({
        path: p,
      });
      console.log(val);
    },
  },
};
</script>

<style scoped lang="scss">
.tabbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    .ico {
      margin-bottom: 9px;
      display: block;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
