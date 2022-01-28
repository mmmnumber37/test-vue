<template>
  <div>
    <div class="list-header d-flex align-items-center mb-0">
      {{ data.title }}
    </div>
    <div v-for="(item, index) in data.markers" :key="index">
      <nuxt-link
        :to="`/two/${item.id}`"
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
            <div class="list-name">{{ item.name }}</div>
            <div class="marker-syn mt-1">{{ item.description }}</div>
            <div class="d-none d-md-flex list-date mt-1">{{ item.date }}</div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
