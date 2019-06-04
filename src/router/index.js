
//路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件加载
import HelloWorld from '@/pages/HelloWorld'

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',//启用 HTML history 模式
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
