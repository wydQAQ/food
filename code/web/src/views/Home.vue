<template>
  <div class="home">
    <el-table :data="list" style="width: 100%" v-if="this.list.length > 0">
      <el-table-column prop="subTime" label="下单时间" width="180"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="commodity" label="菜品名称" width="180"></el-table-column>
      <el-table-column prop="price" label="菜品单价" width="180"></el-table-column>
      <el-table-column prop="quantity" label="订餐数量" width="180"></el-table-column>
    </el-table>
    <el-button class="btn" type="primary" @click="back">回到订餐页</el-button>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import server from "../lib/server/index.js";

export default {
  name: "home",
  data() {
    return {
      list: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    server.getfoodlist().then(res => {
      for (let i = 0; i < res.data.length; i++) {
        let t = new Date(Number(res.data[i].subTime));
        let year = t.getFullYear();
        let month = t.getMonth() + 1;
        let day = t.getDate();
        let time = `${year} 年 ${month} 月 ${day} 日`;

        this.list.push({
          subTime: time,
          username: res.data[i].username,
          commodity: res.data[i].commodity,
          price: res.data[i].price,
          quantity: res.data[i].quantity
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 900px;
  margin: 250px auto;
  position: relative;
  .btn {
    position: absolute;
    top: -14%;
    right: 5%;
  }
}
</style>

