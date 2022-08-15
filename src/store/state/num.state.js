export default {
  namespaced: true, //防止modules模块重名
  state: {
    count: 1,
  },
  getters: {
    countStatus(state) {
      return state.count >= 1
    }
  },
  mutations: {
    setCount(state, num) {
      state.count = num
    }
  },
  //异步
  actions: {
    setCountPromise(context, num) {
      return new Promise((resolve, reject) => {
        if (num > 100) {
          reject('值不能大于100')
        } else {
          context.commit('setCount', num)
          resolve()
        }
      })

    }
  }
}