import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Landing from "@/views/Landing.vue";
import ProjectsList from "@/views/ProjectsList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/projects-list",
    name: "projects-List",
    component: ProjectsList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
