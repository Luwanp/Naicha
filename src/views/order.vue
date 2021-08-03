<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab title="当前订单">

        <div class="dq">
          <div class="md">
            门店订单
          </div>
          <div class="item">
            <div class="ia">
              <div>二店</div>
              <div>已完成 ></div>
            </div>
            <div class="ico">
              <img src="" alt="">
              <div>
                <div>￥123</div>
                <div>共2件</div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>

      </van-tab>
      <van-tab title="历史订单">内容 2</van-tab>

    </van-tabs>

    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.home {
}
.dq {
  background: #f6f6f6;
  overflow: hidden;
  .md {
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
    margin-top: 20px;
    color: #dba871;
    background-color: #ffffff;
    margin-bottom: 20px;
  }
  .item {
    background-color: #ffffff;
    height: 415px;
    padding: 20px;
    box-sizing: border-box;
    .ia {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-between;
    }
    .ico {
        margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
          display: flex;
          width: 62px;
          height: 62px;
      }
    }
  }
}
</style>
