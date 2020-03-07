import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import resource from "vue-resource";
import i18n from "./i18n/i18n";
Vue.config.productionTip = false;
Vue.use(resource);
Vue.use(ViewUI);
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
