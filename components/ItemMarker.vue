<template>
  <nuxt-link
    :to="`/two/${data.id}`"
    class="
      document-item
      d-flex
      px-md-1
      py-2
      align-items-center
      justify-content-between
      border-bottom
      pointer
    "
  >
    <div class="d-flex flex-fill align-items-center justify-content-start">
      <div class="flex-fill ml-1">
        <div class="list-name">{{ data.name }}</div>
        <div class="marker-syn mt-1">{{ data.description }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {},

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {}
  },

  computed: {
    ...mapGetters({}),
  },

  async mounted() {},

  methods: {
    ...mapActions({}),
  },
}
</script>

<style></style>
