
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from "../store/index";

Vue.use(VueRouter)

import myRoutes from "../views/index.js";

const routes: Array<RouteConfig> = [
  ...myRoutes,
  {
    path:"/menuManager",
    component:()=>import("../views/menuManager/index.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to)=>{
  if(to.query.menuShow){
    store.commit("home/setMenuShow",to.query.menuShow==="1")
  }
})

export default router