import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ddd5a02 = () => interopDefault(import('..\\pages\\layouts\\index.vue' /* webpackChunkName: "" */))
const _44c47496 = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "" */))
const _560a799f = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _5ffb0042 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "" */))
const _49c85d10 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _272047e1 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _787584ab = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5ddd5a02,
    children: [{
      path: "",
      component: _44c47496,
      name: "home"
    }, {
      path: "/login",
      component: _560a799f,
      name: "login"
    }, {
      path: "/register",
      component: _560a799f,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _5ffb0042,
      name: "profile"
    }, {
      path: "/article/:slug",
      component: _49c85d10,
      name: "article"
    }, {
      path: "/settings",
      component: _272047e1,
      name: "settings"
    }, {
      path: "/editor/:slug",
      component: _787584ab,
      name: "editor"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
