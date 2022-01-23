import Vue from 'vue'

export const state = () => ({
  markers: [],
  category: [],
  // count: 0,
})

export const getters = {
  markers: (state) => state.markers,
  category: (state) => state.category,

  // count: (state) => state.count,
}

export const mutations = {
  SET_MARKERS(state, value) {
    Vue.set(state, 'markers', value || [])
  },
  SET_CATEGORY(state, value) {
    Vue.set(state, 'category', value || [])
  },

  // SET_COUNT_POSTS(state, value) {
  //   Vue.set(state, 'count', Number(value) || 0)
  // },
}

export const actions = {
  async getMarkers({ commit }) {
    const result = await this.$axios.get(`/markers`)
    commit('SET_MARKERS', result.data)
    return result
  },
  async getCategory({ commit }) {
    const result = await this.$axios.get(`/category`)
    commit('SET_CATEGORY', result.data)
    return result
  },

  // async setLike({ commit }, data) {
  //   return await this.$axios.$patch(`/posts/${data.id}`, {
  //     isLike: data.isLike,
  //     like: data.like,
  //   })
  // },
  // async createPost({ commit }, data) {
  //   return await this.$axios.$post(`/posts/`, data)
  // },
  // async updatePost({ commit }, { data, id }) {
  //   return await this.$axios.$patch(`/posts/${id}`, data)
  // },
  // async removePost({ commit }, id) {
  //   return await this.$axios.$delete(`/posts/${id}`)
  // },
}
