import {getBlogPosts,getComments,postBlogPosts} from '../api/blogs'


const PROMISE_DELAY = 2000

export const state = {
  blogPosts: []
}

export const getters = {
  blogPosts: state => state.blogPosts.reverse(),
  hasBlogPosts: state => state.blogPosts.length > 0,
  numberOfPosts: state => state.blogPosts.length
}

export const mutations = {
  saveBlogPosts(state, blogPosts) {
    state.blogPosts = blogPosts
  },
  savePost(state, blogPost) {
    state.blogPosts.push(blogPost)
    
    
  }
}
 
export const actions = {
  getBlogPosts({ commit }) {
    return new Promise((resolve, reject) => {
      getBlogPosts()
        .then(res => {
          setTimeout(() => {
            const posts = res.data
            // const posts = []
            commit('saveBlogPosts', posts)
            resolve(posts)
          },1)
        })
        .catch(error => reject(error))
    })
  },
  getComments({ commit }, postId) {
    return new Promise((resolve, reject) => {
      getComments(postId)
        .then(res => {
          setTimeout(() => {
            resolve(res.data)
          }, 1)
        })
        .catch(error => reject(error))
    })
  },
  setBlogPosts({commit},data){
    postBlogPosts(data)
      .then(res=>{
        commit('savePost',res.data)
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