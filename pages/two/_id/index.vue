<template>
  <div class="container mt-2">
    <HeaderPages
      :to="`/two`"
      mini-title="Показатели"
      :main-title="marker.name"
    />
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
import HeaderPages from '~/components/HeaderPages.vue'

export default {
  components: { LineChart, ReferenceComponent, HeaderPages },

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
      const arr = this.historyMarker.slice(0).reverse()
      return {
        labels: arr.map((i) => this.$moment(i.date).format('DD MMM')),
        datasets: [
          {
            data: arr.map((i) => i.value),
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
