import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import { Button, Select, Loading, Table, TableColumn } from "element-ui";
Vue.use(Button);
Vue.use(Select);
Vue.use(Loading);
Vue.use(Table);
Vue.use(TableColumn);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
