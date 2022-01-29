<template>
  <div class="d-flex justify-content-between align-items-center mb-4 mt-3">
    <div>
      <div v-if="miniTitle" class="d-flex mb-2">
        <div class="mr-1 text-secondary">{{ miniTitle }}</div>
      </div>
      <div class="d-flex">
        <div v-if="to" class="pointer mr-2">
          <nuxt-link :to="to">
            <svg
              fill="#A9B8C0"
              height="18"
              width="18"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              class="action-icon-blue"
            >
              <path
                d="M4 25C4 25.5654 4.24879 26.0856 4.70113 26.5153L19.7189 41.5105C20.1712 41.9402 20.6462 42.1438 21.189 42.1438C22.2973 42.1438 23.1793 41.3295 23.1793 40.1987C23.1793 39.6559 22.9758 39.1131 22.6139 38.7738L17.5477 33.6171L9.92569 26.6736L15.399 27.0129H44.0097C45.1858 27.0129 46 26.1761 46 25C46 23.8239 45.1858 22.9871 44.0097 22.9871H15.399L9.9483 23.3263L17.5477 16.3829L22.6139 11.2262C22.9758 10.8643 23.1793 10.3441 23.1793 9.80127C23.1793 8.67042 22.2973 7.8562 21.189 7.8562C20.6462 7.8562 20.1712 8.03714 19.6737 8.53471L4.70113 23.4846C4.24879 23.9144 4 24.4346 4 25Z"
              ></path>
            </svg>
          </nuxt-link>
        </div>
        <div v-if="mainTitle" class="d-flex align-items-center">
          <h1 class="h5 mb-0 mr-2">{{ mainTitle }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    miniTitle: {
      type: String,
      default: '',
    },
    mainTitle: {
      type: String,
      default: '',
    },
  },
}
</script>
