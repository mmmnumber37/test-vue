<template>
  <div class="row">
    <view-item
      v-for="(item, index) in posts"
      :key="index"
      :item="item"
      class="col-xl-3 p-2"
      @toggle-like="toggleLike"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ViewItem from '@/components/ViewItem'

export default {
  components: {
    ViewItem,
  },

  computed: {
    ...mapGetters({
      posts: 'posts/posts',
    }),
  },

  async mounted() {
    try {
      await this.getPosts()
    } catch (error) {
      console.error('getPosts', [error])
    }
  },

  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts',
      setLike: 'posts/setLike',
    }),

    async toggleLike(data) {
      try {
        await this.setLike(data)
      } catch (error) {
        console.error('setLike', [error])
      }
    },
  },
}
</script>

<style></style>
