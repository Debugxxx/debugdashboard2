import Vue from "vue";
import VueRouter from "vue-router";

import dashboard from "@/views/dashboard.vue";
import auth_registration from "@/views/auth_registration.vue";
import auth_login from "@/views/auth_login.vue";
import charts from "@/views/charts.vue";
import page_chart from "@/views/page_chart.vue";
import page_element from "@/views/page_element.vue";
import users from "@/views/users.vue";
import forum from "@/views/forum.vue";
import page_gallery from "@/views/page_gallery.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/page_gallery", component: page_gallery },
    { path: "/forum", component: forum },
    { path: "/users", component: users },
    { path: "/page_element", component: page_element },
    { path: "/page_chart", component: page_chart },
    { path: "/charts", component: charts },
    { path: "/auth_login", component: auth_login },
    { path: "/auth_registration", component: auth_registration },
    { path: "/", component: dashboard },

  ]
});
