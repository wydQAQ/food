<template>
  <div class="foodmenu" v-loading="loading">
    <div v-for="(item) in foods" :key="item._id" @click="initAS(item)" class="menu-item">
      <img :src="item.img" alt>
      <p>{{item.commodity}}</p>
      <p class="money">￥ {{item.price}}</p>
    </div>
  </div>
</template>

<script>
import server from "../lib/server/index";
import eventbus from "../EventBus.js";
import { mapMutations, mapState, mapGetters } from "vuex";
import "element-ui/lib/theme-chalk/index.css";
import { setTimeout } from "timers";
export default {
  name: "foodmenu",
  data() {
    return {
      curCat: "",
      foods: [],
      loading: false
    };
  },
  methods: {
    ...mapMutations(["initFoods"]),
    ...mapMutations(['initAS']),
  },
  computed: {
    ...mapState(["foodslist"]),
    ...mapGetters(["getFoodsCat"])
  },
  watch: {
    curCat: function(newVal, oldVal) {
      this.foods = [];
      this.foodslist.forEach(item => {
        if (item.title == this.curCat || this.curCat == "") {
          this.foods.push(item);
        }
      });
    }
  },
  created() {
    server.getorder().then(res => {
      this.initFoods(res.data);
      this.foods = this.foodslist;
    });

    eventbus.$on("foodmenu_foodright", item => {
      this.curCat = item;
    });
    eventbus.$on("loading", item => {
      this.loading = item;
      if ((this.loading = item)) {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.foodmenu {
  height: 600px;
  width: 55%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: scroll;
  .menu-item {
    margin-top: 10px;
    text-align: center;
    height: 150px;
    width: 150px;
    line-height: 10px;
    cursor: pointer;
    img {
      width: 100px;
      height: 100px;
      border-radius: 4px;
    }
    .money {
      color: palevioletred;
    }
  }
}
</style>
