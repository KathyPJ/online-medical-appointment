import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75f40060 = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _788cb96e = () => interopDefault(import('..\\pages\\patient\\index.vue' /* webpackChunkName: "pages/patient/index" */))
const _4a43203b = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _505e32c9 = () => interopDefault(import('..\\pages\\hosp\\booking.vue' /* webpackChunkName: "pages/hosp/booking" */))
const _db993f52 = () => interopDefault(import('..\\pages\\hosp\\schedule.vue' /* webpackChunkName: "pages/hosp/schedule" */))
const _2ae7525f = () => interopDefault(import('..\\pages\\order\\show.vue' /* webpackChunkName: "pages/order/show" */))
const _8803c150 = () => interopDefault(import('..\\pages\\patient\\add.vue' /* webpackChunkName: "pages/patient/add" */))
const _0845a354 = () => interopDefault(import('..\\pages\\patient\\show.vue' /* webpackChunkName: "pages/patient/show" */))
const _da6c837a = () => interopDefault(import('..\\pages\\weixin\\callback.vue' /* webpackChunkName: "pages/weixin/callback" */))
const _0b01bd6a = () => interopDefault(import('..\\pages\\hosp\\detail\\_hoscode.vue' /* webpackChunkName: "pages/hosp/detail/_hoscode" */))
const _5345b0dc = () => interopDefault(import('..\\pages\\hosp\\notice\\_hoscode.vue' /* webpackChunkName: "pages/hosp/notice/_hoscode" */))
const _10c6718c = () => interopDefault(import('..\\pages\\hosp\\_hoscode.vue' /* webpackChunkName: "pages/hosp/_hoscode" */))
const _4ec01166 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/order",
    component: _75f40060,
    name: "order"
  }, {
    path: "/patient",
    component: _788cb96e,
    name: "patient"
  }, {
    path: "/user",
    component: _4a43203b,
    name: "user"
  }, {
    path: "/hosp/booking",
    component: _505e32c9,
    name: "hosp-booking"
  }, {
    path: "/hosp/schedule",
    component: _db993f52,
    name: "hosp-schedule"
  }, {
    path: "/order/show",
    component: _2ae7525f,
    name: "order-show"
  }, {
    path: "/patient/add",
    component: _8803c150,
    name: "patient-add"
  }, {
    path: "/patient/show",
    component: _0845a354,
    name: "patient-show"
  }, {
    path: "/weixin/callback",
    component: _da6c837a,
    name: "weixin-callback"
  }, {
    path: "/hosp/detail/:hoscode?",
    component: _0b01bd6a,
    name: "hosp-detail-hoscode"
  }, {
    path: "/hosp/notice/:hoscode?",
    component: _5345b0dc,
    name: "hosp-notice-hoscode"
  }, {
    path: "/hosp/:hoscode?",
    component: _10c6718c,
    name: "hosp-hoscode"
  }, {
    path: "/",
    component: _4ec01166,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
