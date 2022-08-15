import { createStore } from 'vuex'
import number from '@/store/state/num.state'
import uInfo from './state/userinfo.state'

export default createStore({
  //分模块
  modules: {
    number,
    uInfo
  }
})
