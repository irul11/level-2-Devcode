import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloView from "../views/HelloView.vue";
import ContactManagerView from "../views/ContactManagerView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hello",
    name: "hello",
    component: HelloView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactManagerView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
