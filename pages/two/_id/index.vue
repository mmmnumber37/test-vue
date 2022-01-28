<template>
  <div class="container mt-2">
    <div class="d-flex justify-content-between align-items-center mb-4 mt-3">
      <div>
        <div class="d-flex mb-2">
          <div class="mr-1 text-secondary">Показатели</div>
        </div>
        <div class="d-flex">
          <div class="pointer mr-2">
            <nuxt-link :to="`/two`">
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
          <div class="d-flex align-items-center">
            <h1 class="h5 mb-0 mr-2">{{ marker.name }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-lg-6">
        <div class="box p-3">
          <div class="mt-1">
            <div class="h6 mb-0 d-flex justify-content-between">
              <div>
                <div class="d-flex">Текущее значение</div>
              </div>
              <div class="d-flex align-items-center text-secondary text-8">
                {{ dateLastMarker }}
              </div>
            </div>
            <div class="header-divider"></div>
          </div>
          <div class="mt-3">
            <div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <div class="d-flex align-items-center">
                    <div class="h4 mb-0 mr-3">
                      {{ lastMarker.value }}
                    </div>
                    <div class="d-lg-flex align-items-center">
                      <div>мкмол/л</div>
                    </div>
                  </div>
                </div>
                <div>
                  <b-btn
                    :to="`/two/${marker.id}/create`"
                    variant="outline-primary"
                    class="btn-block"
                  >
                    <div class="d-flex align-items-center">
                      <div class="font-weight-bold">+</div>
                      <div class="ml-1 d-none d-lg-flex">Добавить</div>
                    </div>
                  </b-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3 box p-3">
          <div class="mt-1">
            <div class="h6 mb-0 d-flex justify-content-between">
              <div>
                <div class="d-flex">Референсы</div>
              </div>
              <div
                class="d-flex align-items-center text-secondary text-8"
              ></div>
            </div>
            <div class="header-divider"></div>
          </div>
          <div class="mt-0">
            <div
              class="
                pt-3
                d-flex
                align-items-center
                justify-content-between
                pointer
                border-bottom
                pb-3
              "
            ></div>
            <div class="mt-3">
              <ReferenceComponent
                :value="lastMarker.value"
                :max="50"
                :min="0"
              />
            </div>
            <div class="divider mt-5 mb-3"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mt-3 mt-lg-0">
        <div class="mb-3 box p-3">
          <div class="mt-1">
            <div class="h6 mb-0 d-flex justify-content-between">
              <div>
                <div class="d-flex">График изменений</div>
              </div>
              <div
                class="d-flex align-items-center text-secondary text-8"
              ></div>
            </div>
            <div class="header-divider"></div>
          </div>
          <div class="mt-3">
            <div>
              <LineChart
                :chart-data="lineChartData"
                :options="lineChartOptions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LineChart from '~/components/LineChart.vue'
import ReferenceComponent from '~/components/ReferenceComponent.vue'

export default {
  components: { LineChart, ReferenceComponent },

  layout: 'two',
  data() {
    return {}
  },

  computed: {
    ...mapGetters({
      historyMarker: 'markers/historyMarker',
      marker: 'markers/marker',
    }),

    lineChartData() {
      return {
        labels: this.historyMarker.map((i) =>
          this.$moment(i.date).format('DD MMM')
        ),
        datasets: [
          {
            data: this.historyMarker.map((i) => i.value),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      }
    },

    lineChartOptions() {
      return {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }
    },

    lastMarker() {
      return this.historyMarker?.[0] || {}
    },

    dateLastMarker() {
      // должно быть this.marker?.date || this.historyMarker?.[0]?.date
      return this.$moment(this.lastMarker?.date || this.marker?.date).format(
        'DD.MM.YYYY'
      )
    },
  },

  async mounted() {
    try {
      const id = this.$route.params.id

      await this.getMarker(id)
      await this.getHistoryMarker(id)
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    ...mapActions({
      getMarker: 'markers/getMarker',
      getHistoryMarker: 'markers/getHistoryMarker',
    }),
  },
}
</script>

<style></style>
