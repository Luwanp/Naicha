<template>
  <div>
    <div class="header">
      <div>
        武汉店
      </div>
      <div class="group">
        <div class="btn act">自取</div>
        <div class="btn">外卖</div>
      </div>
    </div>
    <div class="con">
      <div>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="甜品" />
          <van-sidebar-item title="冷饮" />
          <van-sidebar-item title="热饮" />
        </van-sidebar>
      </div>

      <div class="rc">
        <div class="box" v-for="item in 6">
          <div class="left">
          </div>
          <div class="right">
            <div class="t1">百香果</div>
            <div class="t2">
              <van-tag type="success" class="tag">新品</van-tag>
              <van-tag type="primary" class="tag">甜</van-tag>
            </div>
            <div class="t3">
              <div class="mon">￥23</div>
              <van-button round type="warning" size="small" @click="change">选规格</van-button>
            </div>
          </div>
        </div>

      </div>

    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '40%',width:'100%' }">

      <van-checkbox-group v-model="result">
        <van-checkbox name="a">
          <div class="item">
            <!-- <div class="a">
              <img src="../assets/image/tabbar/bh.png" alt="">
            </div> -->
            <div class="box">
              <div class="img">
                <img src="" alt="">
              </div>
              <div class="right">
                <div>
                  <div>柠檬水</div>
                  <div>123123123123123</div>
                </div>
                <div class="bt">
                  <div>￥32</div>
                  <van-stepper v-model="value" />
                </div>
              </div>
            </div>
          </div>

        </van-checkbox>
      </van-checkbox-group>
      <div class="car back">
        <div class="cl">
          <van-badge :content="5">
            <div class="ico">
              <img src="../assets/image/tabbar/bh.png" alt="" @click="showPopup">
            </div>
          </van-badge>
          <div class="mn">￥23</div>
        </div>
        <div class="js">
          结算
        </div>
      </div>
    </van-popup>

    <div class="car">
      <div class="cl">
        <van-badge :content="5">
          <div class="ico">
            <img src="../assets/image/tabbar/bh.png" alt="" @click="showPopup">
          </div>
        </van-badge>
        <div class="mn">￥23</div>
      </div>
      <div class="js">
        结算
      </div>
    </div>

    <!-- //商品规模 -->
    <van-popup v-model="goods" :style="{ width: '90%' }">
      <div class="goodInfo">
        <div class="gh">
          <img src="../assets/image/home/menupopup_btn_share_normal.png" alt="" class="ico">
          <img src="../assets/image/home/round_close_btn.png" alt="" class="ico">
        </div>
        <div class="cb">
          <div class="col">
            <div class="ca">甜度</div>
            <div class="cb">
              <div class="cbtn cbact">半糖</div>
              <div class="cbtn">标准</div>
            </div>
          </div>

        </div>

        <div class="cfooter">
          <div class="cl">
            <div>￥23</div>
            <div>
              常规吸管，少冰，少少甜，绿妍(推荐)，芝士(推荐)
            </div>
          </div>
          <div class="cr">
            <van-stepper v-model="value" />

          </div>

        </div>
      </div>
    </van-popup>

    <tabbar></tabbar>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false,
      activeKey: 0,
      value: 0,
      goods: false,
      result: [],
    };
  },
  created() {},
  mounted() {},
  methods: {
    showPopup() {
      this.show = true;
    },
    change() {
      this.goods = true;
    },
  },
};
</script>

<style scoped lang="scss">
.mask {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.buy {
  border-radius: 20px;
  width: 314px;
  height: 463px;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .buyImg {
    position: absolute;
    top: -40px;
    left: 20px;
    display: block;
    width: 96px;
    height: 96px;
  }
  .buyName {
    height: 84px;
    margin-left: 123px;
    width: 60%;
    text {
      line-height: 20px;
    }
    text:nth-child(1) {
      margin-top: 35px;
      color: #3e3e3e;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    image {
      position: absolute;
      right: 5%;
      top: 10%;
      width: 21px;
      height: 21px;
    }
  }
}

.header {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  .group {
    display: flex;
    align-items: center;
    .btn {
      width: 60px;
      background: #f5f5f5;
      height: 30px;
      border-radius: 10px;
      line-height: 30px;
    }
    .act {
      background: #323232;
      color: #ffffff;
    }
  }
}
.con {
  display: flex;
  .lc {
    width: 20%;
  }
  .rc {
    width: 80%;
    height: 80vh;
    overflow: scroll;
    .box {
      margin-left: 10px;
      display: flex;
      align-items: center;

      .left {
        width: 100px;
        height: 100px;
        background: #323232;
      }
      .right {
        .t2 {
          display: flex;
          .tag {
            margin: 10px 10px;
          }
        }
        .t3 {
          display: flex;
          align-items: center;
          .mon {
            margin: 0 10px;
          }
        }
      }
    }
  }
}

.goodInfo {
  padding: 20px;
  .gh {
    display: flex;
    justify-content: flex-end;
    .ico {
      // display: block;
      height: 33px;
      width: 33px;
      margin: 0 10px;
    }
  }
  .cb {
    width: 100%;
    .col {
      .ca,
      .cb {
        text-align: left;
      }
      .cb {
        margin-top: 10px;
        display: flex;
        .cbtn {
          margin-right: 5px;
          background-color: #f5f5f7;
          color: 14px;
          padding: 5px 11px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 11px;
          margin-bottom: 11px;
          border-radius: 6px;
        }
        .cbact {
          background-color: #dba871;
          color: #ffffff;
        }
      }
    }
  }
  .cfooter {
    margin-top: 20px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .cl {
      text-align: left;

      width: 68%;
    }
    .cr {
    }
  }
}
.item {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  position: relative;
  .a {
    left: 0px;
    top: -20px;
    position: absolute;
    width: 60px;
    height: 60px;
    background: #ffffff;
    border-radius: 50%;
    z-index: 9999;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .box {
    width: 100%;
    flex-wrap: wrap;

    display: flex;
    align-items: center;
    .right {
      width: 70%;
      .bt {
        display: flex;
        justify-content: space-around;
      }
    }
    .img {
      width: 80px;
      background: #323232;
      height: 80px;
      display: block;
    }
  }
}

.car {
  position: fixed;
  bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  height: 55px;
  width: 100%;
  background-color: rgb(240, 240, 241);
  align-items: center;
  .cl {
    display: flex;
    align-items: center;
    width: 80%;
    box-sizing: border-box;

    .ico {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: #ffffff;
      border-radius: 50%;
      img {
        display: block;
        width: 40px;
        height: 40px;
      }
    }
    .mn {
      margin-left: 60px;
      width: 40px;
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
.back {
  bottom: 0px;
  margin-bottom: 0;
}
</style>
