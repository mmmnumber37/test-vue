<template>
  <div class="row">
    <div class="col-12 col-lg-9">
      <div class="box py-1 px-3">
        <div class="mt-0">
          <div>
            <div>
              <div class="list-header d-flex align-items-center mb-0">
                {{ title }}
              </div>
              <template v-if="radio === 2">
                <ItemMarker
                  v-for="(item, index) in compMarkers"
                  :key="index"
                  :data="item"
                />
              </template>

              <template v-else>
                <ItemMarker
                  v-for="(item, index) in compMarkers"
                  :key="index"
                  :data="item"
                />
              </template>
            </div>
          </div>
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

          <div class="sidebar-divider"></div>

          <template v-if="radio === 1">
            <b-form-group label="Фильтры">
              <c-multiselect
                v-model="select"
                :options="category"
                track-by="category"
                label="name"
              />
            </b-form-group>

            <div class="sidebar-divider"></div>
          </template>

          <div>
            <div>
              <button
                class="btn btn-outline-dark btn-block"
                @click="select = null"
              >
                <div class="d-flex justify-content-center align-items-center">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center">Очистить</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemMarker from '@/components/ItemMarker'
import { groupBy } from 'lodash'

export default {
  components: { ItemMarker },

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

    title() {
      return (
        this.radioList.find((i) => i.value === this.radio)?.text || 'Список'
      )
    },

    compMarkers() {
      if (this.radio === 1 && this.select) {
        return this.markers.filter((i) => i.category === this.select.category)
      } else if (this.radio === 2) {
        return groupBy(this.markers, 'category')
      }

      // TODO: по Анализы не очень понятно что это, толи количество толи
      return this.markers
    },
  },

  async mounted() {
    try {
      await this.getMarkers()
      await this.getCategory()
    } catch (error) {
      console.error('', [error])
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
