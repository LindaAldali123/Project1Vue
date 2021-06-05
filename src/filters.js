//import { createApp } from "vue";
//import App from "./App.vue";

//const Vue = createApp(App);
import Vue from "vue";
//Make UpperCase
Vue.filter("uppercase", function (v) {
    return v.toUpperCase();
});
//app.config.globalProperties.$filters = {
//   uppercase(value) {
//       return value.toUpperCase();
//   },
//};
//Make Reverse
Vue.filter("reversing", function (v) {
    return v.split("").reverse().join("");
});
//app.config.globalProperties.$filters = {
//   reversing(value) {
//       return value.split("").reverse().join("");
//  },
//};
//Shorten Text
Vue.filter("shorten", function (value, textlength, suffix) {
    return value.substring(0, textlength) + suffix;
});
