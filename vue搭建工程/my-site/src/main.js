import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router"
import showMessage from "./utils/showMessage"
import store from "./store";
Vue.prototype.$showMessage = showMessage;
import "./mock"
//注册全局指令
import vLoading from "./components/directives/loading" 
import vlazy from "./components/directives/lazy" 
import "./eventBus"
store.dispatch("setting/fetchSetting");
Vue.directive("loading",vLoading);
Vue.directive("lazy",vlazy);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
