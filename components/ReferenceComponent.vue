<template>
  <div class="reference">
    <div class="ref-point" :style="compStyleMarker"></div>
    <div class="ref-from d-flex flex-column align-items-center">
      <div class="marker"></div>
    </div>
    <div class="ref-to d-flex flex-column align-items-center">
      <div class="marker"></div>
    </div>
    <div class="ref-from-val d-flex flex-column align-items-center">
      <div class="value">{{ min }}</div>
    </div>
    <div class="ref-to-val d-flex flex-column align-items-center">
      <div class="value">{{ max }}</div>
    </div>
    <div class="reference-line mt-2 mb-2"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    compStyleMarker() {
      // 15%, 80%
      return {
        left: this.setPositionPoint(),
        background:
          this.value >= this.min && this.value <= this.max ? 'green' : 'red',
      }
    },
  },

  methods: {
    setPositionPoint() {
      if (this.value < this.min) {
        return '3%'
      } else if (this.value >= this.min && this.value <= this.max) {
        return `${(65 / (this.max + this.min * -1)) * this.value + 15}%`
      } else if (this.value > this.min) {
        return '94%'
      }
    },
  },
}
</script>
