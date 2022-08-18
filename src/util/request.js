import {post,get} from './service'

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