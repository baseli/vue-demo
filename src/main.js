import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import App from './App.vue'
import Hello from 'components/Hello.vue'
import RouterComponent from 'components/router.vue'
import Home from 'components/Home.vue'
import Ajax from './ajax.js'

Vue.use(ElementUI)
Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }

// 定义路由
const routes = [
    { path: '/', component: Home },
    { path: '/foo', children: [{
        path: 'test', component: Hello
    }] },
    { path: '/bar', component: Hello }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: function(h) {
        return h(App)
    }
}).$mount('#app')
