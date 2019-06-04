
//入口文件
import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
// import store from './store'
import './assets/css/common.css'
// import './assets/js/rem'


new Vue({
    el: "#root",
    router,
    // store,
    components: { App },
    template: '<App />'
});
