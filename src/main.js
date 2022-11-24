import Vue from "vue";
import App from "./App.vue";

import LazyTube from "vue-lazytube";

Vue.use(LazyTube);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
