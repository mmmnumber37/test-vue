<template>
  <div class="row">
    <div class="col-12 col-lg-9">
      <div class="box py-1 px-3">
        <div class="mt-0">
          <BlockMarkers
            v-for="(item, index) in compMarkers"
            :key="index"
            :data="item"
          />
        </div>
      </div>
    </div>
    <div class="d-none d-lg-block col-3 pl-lg-0">
      <div class="box-popup p-1 p-lg-3">
        <div class="mt-0 py-1">
          <b-form-group label="Группировка">
            <b-form-radio-group
              id="radio-group-1"
              v-model="radio"
              :options="radioList"
              name="radio-options"
              stacked
            />
          </b-form-group>

          <template v-if="radio === 1">
            <div class="sidebar-divider"></div>

            <b-form-group label="Фильтры">
              <c-multiselect
                v-model="select"
                :options="category"
                track-by="category"
                label="name"
              />
            </b-form-group>

            <div class="sidebar-divider"></div>

            <b-button
              class="btn-block"
              variant="outline-dark"
              @click="select = null"
            >
              Очистить
            </b-button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BlockMarkers from '@/components/BlockMarkers'

export default {
  components: { BlockMarkers },

  layout: 'two',
  data() {
    return {
      radio: 1,
      radioList: [
        { text: 'Список', value: 1 },
        { text: 'Категория', value: 2 },
        { text: 'Анализы', value: 3 },
      ],
      select: null,
      selectList: [],
    }
  },

  computed: {
    ...mapGetters({
      markers: 'markers/markers',
      category: 'markers/category',
    }),

    compMarkers() {
      switch (this.radio) {
        case 1:
          return [
            {
              title: 'Cписок',
              markers: this.select
                ? this.markers.filter(
                    (i) => i.category === this.select.category
                  )
                : this.markers,
            },
          ]
        case 2:
          return this.category.map((cat) => ({
            title: cat.name,
            markers: this.markers.filter(
              (mark) => cat.category === mark.category
            ),
          }))

        case 3:
          // будем думать что на бек добавляет дату в маркеры
          return Object.values(
            this.markers.reduce((acc, item) => {
              // подругому eslint ругается
              if (!Object.prototype.hasOwnProperty.call(acc, item.date)) {
                acc[item.date] = {
                  title: this.$moment(item.date).format('DD MMM YYYY'),
                  markers: [],
                }
              }
              acc[item.date].markers.push(item)

              return acc
            }, {})
          )
        default:
          return this.markers
      }
    },
  },

  async mounted() {
    try {
      await this.getMarkers()
      await this.getCategory()
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    ...mapActions({
      getMarkers: 'markers/getMarkers',
      getCategory: 'markers/getCategory',
    }),
  },
}
</script>

<style></style>
