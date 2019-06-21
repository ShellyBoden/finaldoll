import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main";
import LoginPage from "../pages/LoginPage";
import GoodsPage from "../pages/GoodsPage";
import ShopPage from "../pages/ShopPage";
import CommentPage from "../pages/CommentPage";
import ContactPage from "../pages/ContactPage";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "*", component: Main },
    { path: "/LoginPage", component: LoginPage},
    { path: "/GoodsPage", component: GoodsPage},
    { name:"ShopPage", path: "/ShopPage", component: ShopPage,props: true},
    { path: "/CommentPage", component: CommentPage},
    { path: "/ContactPage", component: ContactPage }
  ]
});
