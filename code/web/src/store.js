import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginuser: sessionStorage.getItem("loginuser")
      ? JSON.parse(sessionStorage.getItem("loginuser"))
      : null,
    foodslist: [],
    foodASD: []
  },
  mutations: {
    inituser(state, payload) {
      state.loginuser = payload;
    },
    initFoods(state, payload) {
      state.foodslist = payload;
    },
    initAS(state, payload) {
      let findData = state.foodASD.find(item => {
        console.log(payload);
        return item._id === payload._id;
      });
      if (findData) {
        findData.quantity++;
      } else {
        state.foodASD.push(payload);
      }
    },
    delfoods(state, payload) {
      state.foodASD.splice(payload, 1);
    },
    changecount(state, payload) {
      if (state.foodASD.length > 0) {
        let findData = state.foodASD.find(item => {
          console.log(payload);
          return item._id === payload.id;
        });
        let findIndex = state.foodASD.findIndex(item => {
          return item._id === payload.id;
        });
        if (findData && payload.mark) {
          findData.quantity++;
        } else if (findData && payload.mark === false) {
          findData.quantity--;
          if (findData.quantity < 1) {
            state.foodASD.splice(findIndex, 1);
          }
        }
      }
    },
    clearfood(state) {
      state.foodASD.splice(0);
    }
  },
  actions: {},
  getters: {
    getloginuser(state) {
      return state.loginuser;
    },
    getFoodsCat(state) {
      // let arr = [...res.data];
      let newArr = state.foodslist.map(item => {
        return item.title;
      });

      let foodArr = [];
      function uniq(array) {
        for (var i = 0; i < array.length; i++) {
          if (foodArr.indexOf(array[i]) == -1) {
            foodArr.push(array[i]);
          }
        }
        return foodArr;
      }
      uniq(newArr);
      return foodArr;
    },
    getFoodad(state) {
      let gh = 0;
      state.foodASD.forEach(item => {
        gh += item.price * item.quantity;
      });
      return gh;
    }
    // gteJitem(state){
    //   if (this.num != 10) {
    //     this.num++;
    //     for (let i = 0; i < this.foodASD.length; i++) {
    //       let g = this.foodASD[i].price;
    //       g *= this.num;
    //       console.log(this.num);
    //       console.log(g);
    //     }
    //   }
    // }
  }
});
