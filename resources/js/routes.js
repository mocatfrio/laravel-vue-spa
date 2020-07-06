import VueRouter from "vue-router";

import ExampleComponent from "./components/ExampleComponent";
import Bookables from "./bookables/Bookables";
import Bookable from "./bookable/Bookable";
import Review from "./review/Review";
import Basket from "./basket/Basket";

const routes = [
  {
    path: "/",
    component: Bookables,
    name: "home"
  },
  {
    path: "/bookable/:id",
    component: Bookable,
    name: "bookable"
  },
  {
    path: "/review/:id",
    component: Review,
    name: "review"
  },
  {
    path: "/basket",
    component: Basket,
    name: "basket"
  },
  {
    path: "/auth/login",
    component: require("./auth/login").default,
    name: "login"
  },
  {
    path: "/auth/register",
    component: require("./auth/register").default,
    name: "register"
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router;