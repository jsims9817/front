import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'

import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

//If user is logged in, don't show Login or Register Components
Router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)) {
      if(Vue.auth.isAthenticated()) {
        next({
          path: '/feed'
        })
      } else next()
    }

    else if(to.matched.some(record => record.meta.forAuth)) {
      if(! Vue.auth.isAthenticated()) {
        next({
          path: '/login'
        })
      } else next()
    }

    else next()
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
