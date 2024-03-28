import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/Home.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/Hospital.vue"),
      children: [
        {
          path: "register",
          component: () => import("@/pages/hospital/register/Register.vue"),
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/Detail.vue"),
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/Notice.vue"),
        },
        {
          path: "close",
          component: () => import("@/pages/hospital/close/Close.vue"),
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/Search.vue"),
        },
      ],
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});
