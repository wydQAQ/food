<template>
  <div class="about">
    <div class="contanier">
      <div class="top">
        <topfood></topfood>
      </div>
      <div class="contanier">
        <div class="about-bd">
          <letfood></letfood>
          <menufood></menufood>
          <!-- <rightfood></rightfood> -->
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
  }
};
</script>

<style lang="scss" scoped>
.contanier {
  width: 1000px;
  margin: 0 auto;
}
.about {
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

