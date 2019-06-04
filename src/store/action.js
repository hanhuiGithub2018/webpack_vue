
//操作分发action
let action = {
    changeMessage:function (action,data) {
      action.commit('changeMessage',data)
    }
};

//导出模块
export default action
