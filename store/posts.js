import Vue from 'vue'

export const state = () => ({
  posts: [],
  count: 0,
})

export const getters = {
  posts: (state) => state.posts,
  count: (state) => state.count,
}

export const mutations = {
  SET_POSTS(state, value) {
    Vue.set(state, 'posts', value || [])
  },

  SET_COUNT_POSTS(state, value) {
    Vue.set(state, 'count', Number(value) || 0)
  },
}

export const actions = {
  async getPosts({ commit }, data = {}) {
    let params = {
      _sort: data.sort || 'id',
      _order: data.order || 'desc', // 'asc'
      _page: data.page || 1,
      _limit: data.limit || 4,
    }

    if (data.filters) {
      params = { ...params, ...data.filters }
    }

    const result = await this.$axios.get(`/posts`, { params })
    commit('SET_POSTS', result.data)
    commit('SET_COUNT_POSTS', result.headers['x-total-count'])
    return result
  },

  async setLike({ commit }, data) {
    return await this.$axios.$patch(`/posts/${data.id}`, {
      isLike: data.isLike,
      like: data.like,
    })
  },

  async createPost({ commit }, data) {
    return await this.$axios.$post(`/posts/`, data)
  },

  async updatePost({ commit }, { data, id }) {
    return await this.$axios.$patch(`/posts/${id}`, data)
  },

  async removePost({ commit }, id) {
    return await this.$axios.$delete(`/posts/${id}`)
  },
}
