import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import FrontendLayout from "@/layouts/FrontendLayout.vue"
import Home from "@/views/frontend/Home.vue"

const routes: Array<RouteRecordRaw> = [
  // Frontend Route
  {
    // เรียกตัว Frontend Layout (แม่)
    path: "/",
    name: "Frontend",
    component: FrontendLayout,

    // เรียกตัวลูกมาใส่
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        meta: {
          title: "Home",
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.URL),
  routes,
})

export default router
