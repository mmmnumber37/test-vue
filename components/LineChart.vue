<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  watch: {
    chartData: {
      handler() {
        this.renderChart(this.chartData, this.options)
      },
      deep: true,
    },
    options: {
      handler() {
        this.renderChart(this.chartData, this.options)
      },
      deep: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
