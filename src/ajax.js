import Vue from 'vue'
import VueResource from 'vue-resource'
import { Loading, Message } from 'element-ui';

Vue.use(VueResource)
Vue.use(Loading)
// Vue.use(Message)

let urlMap = {
    "login": {"url": "/api/Index/Login"},
};

let handler = {};

for (let index in urlMap) {
    handler[index] = (function(obj) {
        let url = obj.url;
        let type = obj.type || 'post';

        return function(param, success) {
            console.log(success)
            Vue.http[type](url, param).then(function(res) {
                console.log(res.body.json())
                success(res.body.json());
            });
        }
    })(urlMap[index] || '');
};

// loading
Vue.http.interceptors.push((request, next) => {
    let loadingInstance = Loading.service({ fullscreen: true })
    next((response) => {
        if(!response.ok){
            Message({
                'message': '执行失败,请稍后重试!',
                'type': 'error',
                'showClose': true,
                'duration': 0
            })
        }
        loadingInstance.close()
        return response
    })
})


module.exports = handler;
