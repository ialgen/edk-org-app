import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e1f5f100 = () => interopDefault(import('../pages/copiepourtrad.vue' /* webpackChunkName: "pages/copiepourtrad" */))
const _5087ad35 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7e5ebaf1 = () => interopDefault(import('../pages/roadmaptest.vue' /* webpackChunkName: "pages/roadmaptest" */))
const _5ba4236c = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/copiepourtrad",
    component: _e1f5f100,
    name: "copiepourtrad___fr"
  }, {
    path: "/en",
    component: _5087ad35,
    name: "index___en"
  }, {
    path: "/roadmaptest",
    component: _7e5ebaf1,
    name: "roadmaptest___fr"
  }, {
    path: "/team",
    component: _5ba4236c,
    name: "team___fr"
  }, {
    path: "/en/copiepourtrad",
    component: _e1f5f100,
    name: "copiepourtrad___en"
  }, {
    path: "/en/roadmaptest",
    component: _7e5ebaf1,
    name: "roadmaptest___en"
  }, {
    path: "/en/team",
    component: _5ba4236c,
    name: "team___en"
  }, {
    path: "/",
    component: _5087ad35,
    name: "index___fr"
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
