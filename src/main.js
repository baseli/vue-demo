import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { Button, Select } from 'element-ui'
import App from './App.vue'
import Hello from 'components/Hello.vue'
import RouterComponent from 'components/router.vue'
import Ajax from './ajax.js'

Vue.use(Button)
Vue.use(Select)
Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }

// 定义路由
const routes = [
    { path: '/', component: App },
    { path: '/foo', children: [{
        path: 'test', component: Hello
    }] },
    { path: '/bar', component: Hello }
]

const router = new VueRouter({
    routes
})

// new Vue({
//     router,
//     components: {
//         RouterComponent
//     }
// }).$mount('#app')

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  render (h) { return h(this.ViewComponent) }
})
