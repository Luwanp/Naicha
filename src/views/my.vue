<template>
  <div>

    <div class="card">
      <!-- <div class="no">
        <van-tag type="primary" size="large" @click="log">暂未登录</van-tag>
        <div style="margin:0 10px"></div>
        <van-tag type="success" size="large" @click="register">注册</van-tag>
      </div> -->
      <div>张三</div>
      <van-image round width="100" height="100" fit="contain" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
    </div>

    <van-popup v-model="show" closeable :style="{ height: '45%',width:'80%' }">
      <van-form @submit="onSubmit" class="form">
        <van-field v-model="username" name="手机号" label="手机号" placeholder="手机号"
          :rules="[{ pattern, message: '请输入正确内容' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field v-model="password" type="password" name="确认密码" label="确认密码" placeholder="确认密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </van-popup>

    <van-popup v-model="login" closeable :style="{ height: '39%',width:'80%' }">
      <van-form @submit="onSubmit" class="form">
        <van-field v-model="username" name="手机号" label="手机号" placeholder="手机号"
          :rules="[{ pattern, message: '请输入正确内容' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </van-popup>

    <tabbar></tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false,

      show: false,
      username: "",
      password: "",
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    };
  },
  created() {},
  mounted() {},
  methods: {
    log() {
      this.login = true;
    },
    register() {
      this.show = true;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 90%;
  margin: 200px auto;
  height: 100px;
  background: #caa282;
  display: flex;
  align-items: center;
  border-radius: 20px;
  justify-content: space-around;
  .no {
    // width: 100px;
    display: flex;
  }
}
.form {
  margin-top: 30px;
}
</style>
