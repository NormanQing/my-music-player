// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './utils/axios'

import VueLazyload from 'vue-lazyload'

import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import '../static/css/reset.css'
import 'vue-swipe/dist/vue-swipe.css'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/img/error.jpg',
  loading: './static/img/loading.png',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.config.productionTip = false

/* http */
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
