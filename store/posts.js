import Vue from 'vue'

export const state = () => ({
  posts: [],
})

export const getters = {
  posts: (state) => state.posts,
}

export const mutations = {
  SET_POSTS(state, value) {
    Vue.set(state, 'posts', value || [])
  },
}

export const actions = {
  async getPosts({ commit }) {
    const result = await this.$axios.$get(`/posts`)
    commit('SET_POSTS', result)
    return result
  },

  async setLike({ commit, dispatch }, data) {
    console.log('asdf - asdf', [data])
    await this.$axios.$patch(`/posts/${data.id}`, {
      isLike: data.isLike,
      like: data.like,
    })
    dispatch('getPosts')
  },
}
