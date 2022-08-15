export default {
    state:{
        //接收到的登录信息
        //使用浏览器存储，刷新不会清空userInfo数据
        userInfo:(localStorage.getItem('loginData')&&JSON.parse(localStorage.getItem('loginData')))||{},
    },
    mutations:{
        setUserInfo(state,uInfo){
            state.userInfo = uInfo
        }
    }

}