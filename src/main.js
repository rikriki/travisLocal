//https://github.com/oauthjs/express-oauth-server/tree/master/examples/mongodb
//https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a
//https://vuejs.org/v2/cookbook/debugging-in-vscode.html
//https://vuejs.org/v2/cookbook/debugging-in-vscode.html
//https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script
//https://vuejs.org/v2/guide/render-function.html
//https://medium.com/@mattmazzola/how-to-debug-jest-tests-with-vscode-48f003c7cb41
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import User from './components/User.vue'
import Checklist from './components/Checklist.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter)
Vue.use(BootstrapVue)


// 2. Define route components
// const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Unicode = { template: '<div>unicode</div>' }

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/Users', component: Users },
    { path: '/Users/create', component: User },
    { path: '/Lists', component: Checklist },
    { path: '/bar', component: Bar },
    { path: '/é', component: Unicode }
  ]
})

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
