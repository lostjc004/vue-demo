import { login, axiosGet } from '@/api/user'
import { createNamespacedHelpers } from "vuex"
import constant from '@/store/constant'

const state = {
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {

}

const actions = {

  login ({ commit }, userInfo) {
    const { username, password } = userInfo

    const params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)

    console.log('*user store*')
    return new Promise((resolve, reject) => {
      login(params).then(response => {
        console.log('login start...')
        commit('SET_TOKEN', response.token)
        setToken(response.token)
        resolve()
        console.log('login complete...')
      }).catch(error => {
        reject(error)
      })
    })
  },

  axiosGet ({ commit }, payload) {
    console.log('*axiosGet is Called!', payload)
    const { getAddr } = payload
    const params = new URLSearchParams()
    params.append('getAddr', getAddr)

    return new Promise((resolve, reject) => {
      axiosGet(params).then(response => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(constant.USER.NAMESPACE)
export { mapState, mapGetters, mapActions }

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
