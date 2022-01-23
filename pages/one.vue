<template>
  <div>
    <div class="row align-items-center">
      <b-form-group label="Сортировать:" class="col-3">
        <b-form-select
          v-model="selectedSort"
          :options="optionsSort"
          @input="changeSort"
        />
      </b-form-group>

      <b-form-group label="Дата:" class="col-3">
        <b-form-datepicker v-model="selectedDate" @input="changeDate" />
      </b-form-group>

      <div class="col">
        <b-btn variant="primary" @click="resetFilter"> Сбросить фильтр </b-btn>

        <b-btn variant="primary" @click="addItem">Добавить</b-btn>
      </div>
    </div>

    <div class="row align-items-stretch">
      <view-item
        v-for="(item, index) in posts"
        :key="index"
        :item="item"
        class="col-xl-3 p-2"
        @toggle-like="toggleLike"
        @edit-item="editItem(item)"
        @remove-item="removeItem(item)"
      />
    </div>

    <div class="row">
      <pagination
        v-model="currentPage"
        :records="countPosts"
        :per-page="perPage"
        @paginate="changePage"
      />
      <!-- Почемуто не изменяется при вычислении totalRows -->
      <!-- <b-pagination v-model="currentPage" :total-rows="totalRows" /> -->
    </div>

    <modal-item
      id="modal"
      :item="editingItem"
      :loading="loadModal"
      @send="sendItem"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ViewItem from '@/components/ViewItem'
import ModalItem from '@/components/ModalItem'

export default {
  components: {
    ViewItem,
    ModalItem,
  },

  layout: 'one',

  data() {
    return {
      optionsSort: [
        { value: 'id', text: 'Выберите сортировку' },
        { value: 'like', text: 'По полулярности' },
      ],
      selectedSort: 'id',
      selectedDate: null,
      currentPage: 1,
      perPage: 4,
      editingItem: {},
      loadModal: false,
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/posts',
      countPosts: 'posts/count',
    }),

    // totalRows() {
    //   return Math.ceil(this.countPosts / this.perPage)
    // },
  },

  async mounted() {
    try {
      await this.getPosts()
    } catch (error) {
      console.error('getPosts', [error])
    }
  },

  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts',
      setLike: 'posts/setLike',
      createPost: 'posts/createPost',
      updatePost: 'posts/updatePost',
      removePost: 'posts/removePost',
    }),

    async toggleLike(data) {
      try {
        await this.setLike(data)
        await this.getPosts({
          sort: this.selectedSort,
          filters: { date: this.selectedDate },
          page: this.currentPage,
        })
      } catch (error) {
        console.error('toggleLike', [error])
      }
    },

    async changeSort(event) {
      try {
        await this.getPosts({
          sort: event,
          filters: { date: this.selectedDate },
          page: this.currentPage,
        })
      } catch (error) {
        console.error('changeSort', [error])
      }
    },

    async changeDate(event) {
      try {
        await this.getPosts({
          sort: this.selectedSort,
          filters: { date: event },
          page: this.currentPage,
        })
      } catch (error) {
        console.error('changeDate', [error])
      }
    },

    async resetFilter() {
      try {
        await this.getPosts({
          sort: this.selectedSort,
          filters: {},
          page: this.currentPage,
        })

        this.selectedDate = null
      } catch (error) {
        console.error('resetFilter', [error])
      }
    },

    async changePage() {
      try {
        await this.getPosts({
          sort: this.selectedSort,
          filters: { date: this.selectedDate },
          page: this.currentPage,
        })
      } catch (error) {
        console.error('changePage', [error])
      }
    },

    addItem() {
      this.editingItem = {}
      this.$bvModal.show('modal')
    },

    editItem(data) {
      this.editingItem = { ...data }
      this.$bvModal.show('modal')
    },

    async removeItem(data) {
      try {
        await this.removePost(data.id)

        await this.getPosts({
          sort: this.selectedSort,
          filters: { date: this.selectedDate },
          page: this.currentPage,
        })
      } catch (error) {
        console.error('removeItem', [error])
      }
    },

    async sendItem(data) {
      this.loadModal = true
      try {
        if (this.editingItem?.id) {
          await this.updatePost({ data, id: this.editingItem?.id })
        } else {
          await this.createPost(data)
        }

        await this.getPosts({
          sort: this.selectedSort,
          filters: { date: this.selectedDate },
          page: this.currentPage,
        })

        this.$bvModal.hide('modal')
      } catch (error) {
        console.error('sendItem', [error])
      }

      this.loadModal = false
    },
  },
}
</script>

<style></style>
