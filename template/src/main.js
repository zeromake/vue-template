/**
 * Created by Linjianhui on 2017/1/3.
 */
import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routerConfig from './router'

Vue.use(VueRouter)
ElementUi.install(Vue)

// 挂载$http
if (Object.defineProperty) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
} else {
    Vue.prototype.$http = Axios
}

const router = new VueRouter({
    mode: 'history', // 路由的模式
    routes: routerConfig
})
new Vue({
    el: '#root',
    router,
    data: function () {
        return {
            title: '测试'
        }
    },
    render: h => h('div', [h("router-view")])
    // template:'<div><router-view></router-view></div>'
})
