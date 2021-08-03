<template>
  <div>
    <div class="card">
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/i1.png" alt="">
        </div>
        <div class="n1">门店自取</div>
        <div class="n2">下单免排队</div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/i2.png" alt="">
        </div>
        <div class="n1">外卖</div>
        <div class="n2">无接触配送，送喜到家</div>
      </div>
    </div>

    <tabbar></tabbar>

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
.card {
  width: 90%;
  height: 300px;
  margin: 20px auto;
  background: #0909;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  .item {
    width: 50%;
    height: 90%;

    background: #fefefe;
    .img{
        width: 100%;
        height: 122px;
    }
    .n1 {
      font-size: 24px;
      font-weight: bolder;
      margin: 20px 0;
    }
    .n2{
        font-size: 14px;
    }
  }
}
</style>
