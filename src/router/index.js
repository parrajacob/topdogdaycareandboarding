import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Root",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "about",
    },
  },
  {
    path: "/services",
    name: "Services",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services.vue"),

    meta: {
      title: "services",
    },
  },
  {
    path: "/services/boarding",
    name: "Services-Boarding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesBoarding.vue"),

      meta: {
        title: "services-boarding",
      },
  },
  {
    path: "/services/daycare",
    name: "Services-Daycare",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesDaycare.vue"),

      meta: {
        title: "services-daycare",
      },
  },
  {
    path: "/services/grooming",
    name: "Services-Grooming",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesGrooming.vue"),

      meta: {
        title: "services-grooming",
      },
  },
  {
    path: "/services/requirements",
    name: "Services-Requirements",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ServicesRequirements.vue"
      ),

      meta: {
        title: "services-requirements",
      },
  },
  {
    path: "/services/walking",
    name: "Services-Walking",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesWalking.vue"),

      meta: {
        title: "services-walking",
      },
  },
  {
    path: "/services/homecare",
    name: "Services-Homecare",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesHomecare.vue"),

      meta: {
        title: "services-homecare",
      },
  },
  {
    path: "/portal",
    name: "Portal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portal.vue"),

      meta: {
        title: "portal",
      },
  },
  {
    path: "/webcam",
    name: "Webcam",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Webcam.vue"),

      meta: {
        title: "webcam",
      },
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),

      meta: {
        title: "contact",
      },
  },
  {
    path: "*",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),

      meta: {
        title: "not found",
      },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
      ? "Top Dog Daycare | " + to.meta.title
      : "Top Dog Daycare";
  });
});
export default router;
