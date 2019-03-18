import {getUsers,getUsersId,postBlogPosts,postUser} from '../api/blogs'


const PROMISE_DELAY = 0

export const state = {
  users: []
}

export const getters = {
  users: state => state.users,
  hasBlogPosts: state => state.users.length > 0,
  numberOfPosts: state => state.users.length
}

export const mutations = {
  saveUsers(state, users) {
    state.users = users
  },
  postUser(state,user){
    state.users.push(user)
    state.users = state.users.reverse()
  }
  
}

export const actions = {
  getUsers({ commit }) {
    return new Promise((resolve, reject) => {
      getUsers()
        .then(res => {
          setTimeout(() => {
            const users = res.data
            commit('saveUsers', users)
            resolve(users)
          }, PROMISE_DELAY)
        })
        .catch(error => reject(error))
    })
  },
  addUser({commit},data){
    return postUser(data).then(res=>{
      commit('postUser',res.data)
      return res
    })
  }  
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}