<template>
  <div class="foodleft">
    <div class="bottom">结账</div>
  </div>
</template>

<script>
export default {
  name: "foodleft",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.foodleft {
  background-color: #fff;
  width: 25%;
  height: 600px;
  border-radius: 10px;
  position: relative;
  .bottom {
    width: 200px;
    height: 40px;
    background:linear-gradient(#FF7B31, #ff9000);
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
    color: #fff;
    position: absolute;
    top: 545px;
    left: 24px;
  }
}
</style>