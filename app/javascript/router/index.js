import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../pages/top";
import Task from "../pages/task";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Top,
  },
  {
    path: "/tasks",
    component: Task,
  },
];

export default new VueRouter({ mode: "history", routes });
