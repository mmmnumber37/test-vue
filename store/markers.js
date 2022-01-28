import Vue from 'vue'
import { sortBy } from 'lodash'

export const state = () => ({
  markers: [],
  category: [],
  historyMarker: [],
  marker: {},
  // count: 0,
})

export const getters = {
  markers: (state) => state.markers,
  category: (state) => state.category,
  historyMarker: (state) => {
    // в теории это желательно делать на беке
    return sortBy(state.historyMarker, (i) => i.date).reverse()
  },
  marker: (state) => state.marker,

  // count: (state) => state.count,
}

export const mutations = {
  SET_MARKERS(state, value) {
    Vue.set(state, 'markers', value || [])
  },
  SET_CATEGORY(state, value) {
    Vue.set(state, 'category', value || [])
  },
  SET_HISTORY_MARKER(state, value) {
    Vue.set(state, 'historyMarker', value || [])
  },
  SET_MARKER(state, value) {
    Vue.set(state, 'marker', value || {})
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
  async getHistoryMarker({ commit }, idMarker) {
    const result = await this.$axios.get(`/historyMarker`, {
      params: { parentId: idMarker },
    })
    commit('SET_HISTORY_MARKER', result.data)
    return result
  },
  async getMarker({ commit }, idMarker) {
    const result = await this.$axios.get(`/markers`, {
      params: { id: idMarker },
    })
    commit('SET_MARKER', result.data?.[0])
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
