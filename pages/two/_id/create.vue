<template>
  <div class="container mt-2">
    <div>
      <div class="d-flex justify-content-between align-items-center mb-4 mt-3">
        <div>
          <div class="d-flex mb-2">
            <div class="mr-1 text-secondary">1-Метилгистидин, кровь</div>
          </div>
          <div class="d-flex">
            <div class="pointer mr-2">
              <a
                ><svg
                  fill="#A9B8C0"
                  height="18"
                  width="18"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  class="action-icon-blue"
                >
                  <path
                    d="M4 25C4 25.5654 4.24879 26.0856 4.70113 26.5153L19.7189 41.5105C20.1712 41.9402 20.6462 42.1438 21.189 42.1438C22.2973 42.1438 23.1793 41.3295 23.1793 40.1987C23.1793 39.6559 22.9758 39.1131 22.6139 38.7738L17.5477 33.6171L9.92569 26.6736L15.399 27.0129H44.0097C45.1858 27.0129 46 26.1761 46 25C46 23.8239 45.1858 22.9871 44.0097 22.9871H15.399L9.9483 23.3263L17.5477 16.3829L22.6139 11.2262C22.9758 10.8643 23.1793 10.3441 23.1793 9.80127C23.1793 8.67042 22.2973 7.8562 21.189 7.8562C20.6462 7.8562 20.1712 8.03714 19.6737 8.53471L4.70113 23.4846C4.24879 23.9144 4 24.4346 4 25Z"
                  ></path></svg
              ></a>
            </div>
            <div class="d-flex align-items-center">
              <h1 class="h5 mb-0 mr-2">Добавить значение</h1>
              <!---->
            </div>
          </div>
        </div>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
      </div>
      <span
        ><div class="row">
          <div class="col-lg-6 col-12">
            <div class="box p-3">
              <!---->
              <div class="mt-0">
                <div>
                  <div class="row">
                    <div class="col-12 mb-3">
                      <label for="date" class="text-8 d-flex"> Дата </label>
                      <div class="w-100 text-8 mx-datepicker" id="date">
                        <div class="mx-input-wrapper">
                          <input
                            name="date"
                            type="text"
                            autocomplete="off"
                            placeholder="Не выбрано"
                            class="mx-input"
                          /><i class="mx-icon-clear"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                              width="1em"
                              height="1em"
                            >
                              <path
                                d="M810.005333 274.005333l-237.994667 237.994667 237.994667 237.994667-60.010667 60.010667-237.994667-237.994667-237.994667 237.994667-60.010667-60.010667 237.994667-237.994667-237.994667-237.994667 60.010667-60.010667 237.994667 237.994667 237.994667-237.994667z"
                              ></path></svg></i
                          ><i class="mx-icon-calendar"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                              width="1em"
                              height="1em"
                            >
                              <path
                                d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
                              ></path></svg
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 pr-0">
                      <div class="mb-3">
                        <div>
                          <label
                            for="Value"
                            class="d-flex text-8 justify-content-between"
                          >
                            Значение
                          </label>
                          <div class="input-group">
                            <!---->
                            <!---->
                            <input
                              id="Value"
                              name="Value"
                              type="text"
                              class="form-control"
                            />
                            <!---->
                            <!---->
                            <!---->
                          </div>
                          <!---->
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <label for="units" class="d-flex text-8">
                        Ед. измерения
                      </label>
                      <div class="form-height">
                        мкмол/л
                        <span class="text-secondary pl-2"> µмол/л </span>
                      </div>
                    </div>
                    <div class="col-12 flex-fill mx-1">
                      <div data-v-0b4b6208="" class="pb-4">
                        <label
                          data-v-0b4b6208=""
                          for="reference"
                          class="d-flex text-8"
                        >
                          Референсные значения
                        </label>
                        <div data-v-0b4b6208="" id="reference">
                          <div data-v-0b4b6208="" class="value-line">
                            <!---->
                          </div>
                          <div data-v-0b4b6208="" class="value-line">
                            <!---->
                          </div>
                          <!---->
                          <!---->
                          <div
                            data-v-0b4b6208=""
                            class="
                              ref-from
                              d-flex
                              flex-column
                              align-items-center
                            "
                          >
                            <div data-v-0b4b6208="" class="marker"></div>
                          </div>
                          <div
                            data-v-0b4b6208=""
                            class="ref-to d-flex flex-column align-items-center"
                          >
                            <div data-v-0b4b6208="" class="marker"></div>
                          </div>
                          <div
                            data-v-0b4b6208=""
                            class="
                              ref-from-val
                              d-flex
                              flex-column
                              align-items-center
                            "
                          >
                            <div data-v-0b4b6208="" class="value">0</div>
                          </div>
                          <div
                            data-v-0b4b6208=""
                            class="
                              ref-to-val
                              d-flex
                              flex-column
                              align-items-center
                            "
                          >
                            <div data-v-0b4b6208="" class="value">16</div>
                          </div>
                          <div
                            data-v-0b4b6208=""
                            class="reference-line mt-2 mb-2"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 my-2">
                      <div>
                        <button type="submit" class="btn btn-primary">
                          <div
                            class="
                              d-flex
                              justify-content-center
                              align-items-center
                            "
                          >
                            <!---->
                            <!---->
                            <!---->
                            <div class="d-flex align-items-center">
                              Добавить
                            </div>
                            <!---->
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></span
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import LineChart from '~/components/LineChart.vue'
// import ReferenceComponent from '~/components/ReferenceComponent.vue'

export default {
  components: {},

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
