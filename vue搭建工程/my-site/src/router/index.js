import VueRouter from "vue-router";
import Vue from "vue"
import routes from "./routes"
import setTitle from "@/utils/setTitle"
if (!window.VueRouter) {
  Vue.use(VueRouter); // 使用一个vue插件
}

const router = new VueRouter({
  //配置
  routes,
  mode:"history"
});
router.afterEach((to,from)=>{
  if(to.meta.title){
    setTitle.setRouteTitle(to.meta.title)
  }
})
export default router;