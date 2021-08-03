<template>
  <div class="home">
    <div class="main">

      <div class="header">
        <div class="h1">
          <span style="margin-right:5px">武汉XX点</span>
          <van-icon name="arrow" />
        </div>
        <div class="h2">
          联系电话：123123123
        </div>
      </div>

      <div class="time">
        <div class="t1">取茶时间</div>
        <van-progress :percentage="50" />
        <div class="t2">前面还有15杯，预计20分钟取茶</div>
      </div>

      <div class="info">
        <div class="it">商品详情</div>
        <div class="i1">选购饮品，注意选对冰和甜度</div>
        <div class="con">
          <img src="" alt="" class="img">
          <div class="right">
            <div class="name">
              <div>柠檬水</div>
              <div>￥12</div>
            </div>
            <div class="txt">
              <div>123123123</div>
              <div>X1</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="car">
      <div class="cl">
        <div class="mn">合计￥23</div>
      </div>
      <div class="js">
        结算
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.home {
  background: #f5f5f5;
  height: 100vh;
}
.main {
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  .header {
    margin: 20px auto;
    text-align: left;
    background: #ffffff;
    padding: 10px 5px;

    .h1 {
      display: flex;
      align-items: center;
      font-size: 16px;
      height: 20px;
      font-weight: bolder;
    }
    .h2 {
      margin-top: 10px;
      display: flex;
      align-items: center;
      font-size: 14px;
      height: 20px;
    }
  }
  .time {
    margin: 20px auto;
    background: #ffffff;
    padding: 10px 5px;
    .t1 {
      text-align: left;
      font-size: 16px;
      height: 20px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    .t2 {
      margin-top: 10px;
      text-align: left;
      font-size: 16px;
      height: 20px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
  }
  .info {
    margin: 20px auto;
    overflow: hidden;
    background: #ffffff;
    padding: 10px 5px;
    .it {
      text-align: left;
      font-size: 16px;
      height: 20px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    .i1 {
      text-align: left;
      display: flex;
      align-items: center;
      font-size: 14px;
      height: 20px;
    }
    .con {
      display: flex;
      height: 60px;
      margin-top: 10px;
      .img {
        height: 100%;
        width: 60px;
      }
      .right {

          margin-top: 10px;
        width: 75%;
        .name {
          display: flex;
          justify-content: space-between;
        }

        .txt{
            height: 100%;
            display: flex;
          justify-content: space-between;

        }
      }
    }
  }
}
.car {
  position: fixed;
  bottom: 0px;
  display: flex;
  height: 55px;
  width: 100%;
  background-color: #ffffff;
  align-items: center;
  .cl {
    width: 80%;
    text-align: right;
    .mn {
      text-align: right;
      margin-right: 30px;
      font-size: 19px;
      font-weight: bold;
      color: #343434;
    }
  }
  .js {
    width: 20%;
    background-color: #dba871;
    color: #ffffff;
    line-height: 55px;
  }
}
</style>
