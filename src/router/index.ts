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
