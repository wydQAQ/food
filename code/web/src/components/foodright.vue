<template>
  <div class="foodright">
    <a
      @click="getFood(item,index)"
      v-for="(item,index) in getFoodsCat"
      :key="item.index"
      href="#"
      class="food-men"
      :class="{acth:act===index}"
    >{{item}}</a>
  </div>
</template>

<script>
import server from "../lib/server/index";
import eventbus from "../EventBus.js";
// import "babel-polyfill";
import { mapGetters } from "vuex";
export default {
  name: "foodright",
  data() {
    return {
      food: [],
      act: ""
    };
  },
  computed: {
    ...mapGetters(["getFoodsCat"])
  },
  methods: {
    getFood(item, index) {
      eventbus.$emit("foodmenu_foodright", item);
      eventbus.$emit("loading", true);
      this.act = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.foodright {
  background-color: #fff;
  width: 18%;
  height: 560px;
  border-radius: 10px;
  text-align: center;
  padding-top: 40px;
  .food-men {
    display: block;
    width: 145px;
    height: 50px;
    border: 1px solid #ccc;
    margin: 20px auto;
    line-height: 50px;
    border-radius: 25px;
    text-decoration: none;
    color: #000;
    &:hover {
      background-color: orange;
      cursor: pointer;
    }
  }
  .acth {
    background-color: rgb(107, 72, 7);
  }
}
</style>
