<template>
  <div class="container mt-2">
    <HeaderPages
      :to="`/two/${marker.id}`"
      :mini-title="marker.name"
      main-title="Добавить значение"
    />

    <div class="row">
      <div class="col-lg-6 col-12">
        <div class="box p-3">
          <div class="mt-0">
            <div class="row">
              <div class="col-12 mb-3">
                <label for="date" class="text-8 d-flex">Дата</label>
                <date-picker
                  id="date"
                  v-model="date"
                  placeholder="Не выбрано"
                  format="DD.MM.YYYY"
                  value-type="DD.MM.YYYY"
                  title-format="DD MMM YYYY"
                  class="w-100"
                />
              </div>
              <div class="col-6 pr-0">
                <div class="mb-3">
                  <b-form-input v-model="value" placeholder="Значение" />
                </div>
              </div>
              <div class="col-6">
                <span class="d-flex text-8"> Ед. измерения </span>
                <div class="form-height">мкмол/л</div>
              </div>
              <div class="col-12 flex-fill mx-1">
                <div class="pb-4">
                  <span class="d-flex text-8"> Референсные значения </span>
                  <ReferenceComponent :value="value" :max="50" :min="0" />
                </div>
              </div>
              <div class="col-12 my-2">
                <b-btn variant="primary" @click="addHistotyMarker">
                  Добавить
                </b-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderPages from '~/components/HeaderPages.vue'

export default {
  components: { HeaderPages },

  layout: 'two',
  data() {
    return {
      date: null,
      value: null,
    }
  },

  computed: {
    ...mapGetters({
      marker: 'markers/marker',
    }),
  },

  async mounted() {
    try {
      const id = this.$route.params.id
      await this.getMarker(id)
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    ...mapActions({
      getMarker: 'markers/getMarker',
      createHistoryMarker: 'markers/createHistoryMarker',
    }),

    async addHistotyMarker() {
      try {
        await this.createHistoryMarker({
          parentId: this.marker.id,
          date: this.$moment(this.date).format('YYYY-MM-DD'),
          value: this.value,
        })

        this.$router.push(`/two/${this.marker.id}`)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style></style>
