<template>
  <div class="foodleft">
    <template v-if="foodASD.length >0">
      <div
        class="money-item"
        v-for="(item,index) in foodASD"
        :key="item._id"
        @dblclick="delfoods(index)"
      >
        <div class="item-r">
          <h3>{{item.commodity}}</h3>
          <p>￥ {{item.price}}</p>
        </div>
        <div class="item-l">
          <i class="iconfont icon-jian" @click="changecount({id:item._id,mark:false})"></i>
          <span>{{item.quantity}}</span>
          <i class="iconfont icon-jjia-" @click="changecount({id:item._id,mark:true})"></i>
        </div>
      </div>
    </template>
    <p v-if="foodASD.length >0" class="foodnum">价格合计 ￥{{getFoodad}}</p>
    <div @click="submitFood" class="bottom">结账</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import server from "../lib/server/index.js";
import { Message } from "element-ui";


export default {
  name: "foodleft",
  data() {
    return {
      henum: 0,
      arr: []
    };
  },
  computed: {
    ...mapState(["foodASD"]),
    ...mapGetters(["getFoodad"]),
    ...mapState(["inituser"]),
    ...mapState(["loginuser"])
  },
  methods: {
    ...mapMutations(["delfoods"]),
    ...mapMutations(["changecount"]),
    submitFood() {
      // let arr = []
      this.arr = [];
      if (this.foodASD.length > 0) {
        for (let i = 0; i < this.foodASD.length; i++) {
          this.arr.push({
            username: this.loginuser.username,
            commodity: this.foodASD[i].commodity,
            price: this.foodASD[i].price,
            quantity: this.foodASD[i].quantity
          });
        }
        console.log(this.arr);
        server
          .subFood({
            arr: JSON.stringify(this.arr)
          })
          .then(res => {
            this.$store.commit("clearfood");
            Message.success('订单提交成功')
          }).catch(e=>{
            Message.error('订单提交失败')
          })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.foodleft {
  background-color: #fff;
  width: 22%;
  height: 600px;
  border-radius: 10px;
  position: relative;
  overflow: auto;
  .money-item {
    width: 100% -15px;
    height: 50px;
    // background-color: #ff9000;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
    p {
      line-height: 5px;
    }
    span {
      display: inline-block;
      padding: 0 8px;
    }
    i {
      cursor: pointer;
    }
  }
  .bottom {
    width: 200px;
    height: 40px;
    background: linear-gradient(#ff7b31, #ff9000);
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
    color: #fff;
    position: absolute;
    top: 545px;
    left: 21px;
    cursor: pointer;
  }
  .foodnum {
    position: absolute;
    bottom: 10%;
    right: 8%;
  }
}
</style>