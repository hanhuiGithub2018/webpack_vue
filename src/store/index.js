//导入基本模块
import Vue from 'vue'
import Vuex from 'vuex'

//导入配置模块
import state from './state'
import actions from './action'
import mutations from './mutation'

// 显示调用vuex

Vue.use(Vuex);

//创建Vuex仓库
//小项目使用以下模式，大项目使用modules模式，具体请参照 https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart/store
let store = new Vuex.Store({
    state,
    actions,
    mutations
});

//对外暴露store模块仓库

export default store
