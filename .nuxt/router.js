import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9d913a34 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _29bc1b9b = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _0dffa02d = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _65bf196d = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _3937b642 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _b52eedae = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _4c895cba = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _9d913a34,
    children: [{
      path: "",
      component: _29bc1b9b,
      name: "home"
    }, {
      path: "/login",
      component: _0dffa02d,
      name: "login"
    }, {
      path: "/register",
      component: _0dffa02d,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _65bf196d,
      name: "profile"
    }, {
      path: "/settings",
      component: _3937b642,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _b52eedae,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4c895cba,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
