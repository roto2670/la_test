import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/members",
    name: "Members",
    component: () =>
      import("../views/Members.vue"),
  },
  {
    path: "/calander",
    name: "Calender",
    component: () =>
      import("../views/Calander.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import("../views/APITest.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
