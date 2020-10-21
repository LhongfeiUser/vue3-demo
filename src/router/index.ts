import store from "@/store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";
import DefaultLayout from "../layout/default.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      needLogin: true,
    },
    component: DefaultLayout,
    children: [
      {
        path: "/",
        meta: {
          needLogin: true,
        },
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        meta: {
          title: "关于我们",
          needLogin: true,
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/about/index.vue"),
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "vue哈哈哈哈";
  if (to.meta.needLogin && !store.state.token) {
    next({
      path: "/login",
      query: to.query,
    });
  }
  next();
});
export default router;
