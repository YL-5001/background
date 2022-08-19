import {post,get,put,del} from './service'

export const loginApi = data => {
    return post({
        url:'/login',
        data
    })
}

//获取用户列表
export const userListApi = data => {
    return get({
        url:'/users',
        data
    })
}

//获取新增列表
export const userAddApi = data => {
    return post({
        url:'/users',
        data
    })
}
//用户状态开关
export const userChangeStateApi = data => {
    return put({
        url:`users/${data.id}/state/${data.mg_state}`,
        data
    })
}
//更改用户信息
export const userChangeInfoApi = data => {
    return put({
        url:`users/${data.id}`,
        data
    })
}
//删除用户信息
export const userDeleteApi = data => {
    return del({
        url:`users/${data.id}`
    })
}