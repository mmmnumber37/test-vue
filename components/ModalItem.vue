<template>
  <div class="modal-item">
    <b-modal :id="id" :title="title" hide-footer @hide="reset">
      <div class="px-3">
        <b-form-group class="col">
          <b-form-select
            v-model="$v.localItem.tag.$model"
            :options="optionsTags"
            placeholder="Тег"
            :state="state('tag')"
          />
        </b-form-group>
        <b-form-group class="col">
          <b-form-input
            v-model.trim="$v.localItem.image.$model"
            :state="state('image')"
            placeholder="Ссылка на изображение"
            class="col"
          />
        </b-form-group>
        <b-form-group class="col">
          <b-form-input
            v-model.trim="$v.localItem.name.$model"
            :state="state('name')"
            placeholder="Заголовок"
          />
        </b-form-group>
        <b-form-group class="col">
          <b-form-input
            v-model.trim="$v.localItem.description.$model"
            :state="state('description')"
            placeholder="Описание"
          />
        </b-form-group>
        <b-form-group class="col">
          <b-form-datepicker
            v-model="$v.localItem.date.$model"
            :state="state('date')"
          />
        </b-form-group>
        <b-form-group class="col">
          <b-form-checkbox v-model="localItem.isLike"> Лайк </b-form-checkbox>
        </b-form-group>
        <b-form-group class="col">
          <b-form-input
            v-model.trim="$v.localItem.like.$model"
            placeholder="Лайки"
            :state="state('like')"
          />
        </b-form-group>

        <b-overlay
          :show="loading"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-flex justify-content-end col"
        >
          <b-btn :disabled="loading" variant="primary" @click="send">
            Сохранить
          </b-btn>
        </b-overlay>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import { required, numeric } from 'vuelidate/lib/validators'

const DEFAULT_MODEL = {
  tag: null,
  image: null,
  name: null,
  description: null,
  date: null,
  isLike: false,
  like: 0,
}

export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    id: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      localItem: { ...DEFAULT_MODEL },
      optionsTags: [
        { value: null, text: 'Выберите тег' },
        { value: 'компания', text: 'компания' },
      ],
      viewState: false,
    }
  },
  validations: {
    localItem: {
      tag: {
        required,
      },
      image: {
        required,
      },
      name: {
        required,
      },
      description: {
        required,
      },
      date: {
        required,
      },
      like: {
        required,
        numeric,
      },
    },
  },

  computed: {
    title() {
      return Object.keys(this.item).length ? 'Изменение' : 'Создание'
    },

    like() {
      let like = 0

      if (this.item.isLike !== this.localItem.isLike && this.localItem.isLike) {
        like = Number(this.localItem.like) + 1
      } else {
        like =
          Number(this.localItem.like) === 0
            ? 0
            : Number(this.localItem.like) - 1
      }

      return like
    },
  },

  watch: {
    item: {
      handler() {
        Vue.set(
          this,
          'localItem',
          Object.keys(this.item).length ? this.item : { ...DEFAULT_MODEL }
        )
      },
      deep: true,
    },
  },

  methods: {
    send(e) {
      e.preventDefault()
      this.$v.$touch()
      this.viewState = true
      if (!this.$v.$invalid) {
        this.$emit('send', {
          ...this.localItem,
          like: this.like,
        })
      }
    },

    state(name) {
      if (this.viewState) {
        return !this.$v.localItem[name].$error
      }
      return this.localItem[name] !== null
        ? !this.$v.localItem[name].$error
        : null
    },

    reset() {
      this.localItem = { ...DEFAULT_MODEL }
      this.viewState = false
    },
  },
}
</script>
