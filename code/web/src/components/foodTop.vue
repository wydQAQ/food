<template>
  <div class="foodtop">
    <div class="logo">
      <img src="../assets/food-logo.jpg" alt>
    </div>
    <div class="top-title">
      <h1 class="text-color">
        在线订餐
        <i>X1.0</i>
      </h1>
    </div>
    <div class="user-list">1</div>
  </div>
</template>

<script>
export default {
  name: "foodtop",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.foodtop {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  width: 100%;
  border-radius: 60px;
  .logo {
    img {
      width: 109px;
      height: 80px;
      margin-left: -107px;
    }
  }
  .top-title {
    .text-color {
      animation: change 1s ease-in infinite;
      font-size: 46px;
      color: #000;
      //   font-weight: bold;
      i {
        font-size: 12px;
      }
    }
  }
}

@keyframes change {
  0% {
    color: red;
    text-shadow: 0 0 4px #f00;
  }
  25% {
    color: orange;
    text-shadow: 0 0 4px rgb(233, 176, 71);
  }
  50% {
    color: green;
    text-shadow: 0 0 40px rgb(112, 226, 112);
  }
  75% {
    color: blue;
    text-shadow: 0 0 40px rgb(64, 64, 204);
  }
  100% {
    color: yellow;
    text-shadow: 0 0 4px rgb(238, 238, 93);
  }
}
</style>
