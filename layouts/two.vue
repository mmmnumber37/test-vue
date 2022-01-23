<template>
  <div class="two container mt-2">
    <Nuxt />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {},

  data() {
    return {}
  },

  computed: {
    ...mapGetters({}),
  },

  mounted() {},

  methods: {
    ...mapActions({}),
  },
}
</script>

<style lang="scss">
@import '@/assets/sass/two.scss';
</style>
