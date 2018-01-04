import appService from '../app.service'

const defaultState = {
  posts: [],
  categoryId: 0
}

const inBrowser = typeof window !== 'undefined'
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.postsModule : defaultState

const getters = {
  posts: state => state.posts
}

const actions = {
  updateCategory (context, categoryId) {
    return appService.getPosts(categoryId).then(data => {
      context.commit('updateCategory', { categoryId, posts: data })
    })
  }
}

const mutations = {
  updateCategory (state, { categoryId, posts }) {
    state.categoryId = categoryId
    state.posts = posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
