import { createRouter, createWebHistory } from "vue-router";
import { comment } from "postcss";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Categories from "../views/Categories.vue";
import Schedule from "../views/Schedule.vue";
import Contact from "../views/Contact.vue";
import Members from "../views/Members.vue";
import ScheduleChild1 from "../views/ScheduleChild1.vue";
import ScheduleChild2 from "../views/ScheduleChild2.vue";
import Clear from "../views/Clear.vue";
import TestJson from "../views/TestJson.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
  },
  {
    path: "/day1-2F",
    name: "Day1-2F",
    component: ScheduleChild1,
  },
  {
    path: "/day1-4F",
    name: "Day1-4F",
    component: ScheduleChild2,
  },
  {
    path: "/clear",
    name: "Clear",
    component: Clear,
  },
  {
    path: "/testjson",
    name: "TestJson",
    component: TestJson,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home"},
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
