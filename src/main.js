import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "jquery";
import "jquery/dist/jquery.js";
import "jquery/dist/jquery.min.js";
import "jquery/dist/jquery.slim.min.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import store from "./store";

import "popper.js/dist/popper.js";
import "popper.js/dist/popper.min.js";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
//import "aos/src/js/aos.js";
import "aos";
import "./scss/main.scss";
import "normalize.css";
//import "./filters"; //Global filters
//import "mdbvue";
//import "mdbvue/lib/css/mdb.min.css";
//Vue.config.productionTip = false;
//new Vue({ router, store, render: (h) => h(App) }).$amount("#app");
// Make bold Custom Directive
//export const Vu = createApp(App);
//Vu.directive("bold", {
//  bind: function (el) {
//    el.style.fontweight = "bold";
//},
//});
createApp(App).use(store).use(router).mount("#app");
