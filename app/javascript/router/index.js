import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../pages/top";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Top,
  },
];

export default new VueRouter({ mode: "history", routes });
