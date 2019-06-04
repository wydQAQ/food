<template>
  <div class="about">
    <div class="contanier">
      <div class="top">
        <topfood></topfood>
      </div>
      <div class="contanier">
        <div class="about-bd">
          <letfood></letfood>
        <el-button class="findBtn" @click="findFood" type="warning" plain>查询订单</el-button>
          <menufood></menufood>
          <rightfood></rightfood>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topfood from "../components/foodTop";
import letfood from "../components/foodLeft";
import rightfood from "../components/foodright";
import menufood from "../components/foodmenu";
import "element-ui/lib/theme-chalk/index.css";

export default {
  name: "about",
  data() {
    return {};
  },
  components: {
    topfood,
    letfood,
    rightfood,
    menufood
  },
  methods: {
    findFood() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.contanier {
  width: 1100px;
  margin: 0 auto;
  .findBtn {
    position: absolute;
    right: 10%;
    top: 15%;
  }
}
.about {
  position: relative;
  height: 100vh;
  padding-top: 40px;
  background-color: rgba(193, 255, 234, 0.904);
  .about-bd {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
  }
}
</style>

