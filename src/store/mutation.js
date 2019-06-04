
//数据操作模块
//与action一致，mutation对象是操作方法

let mutation = {
    changeMessage: function (state, data) {
        state.message = data;
        return state;
    }
};

export default mutation
