<template>
  <div class="item">
    <b-card class="item__card p-1">
      <div class="item__panel">
        <div class="item__panel-icon mr-2" @click="editItem">
          <svg
            height="325pt"
            viewBox="0 0 325 325.37515"
            width="325pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0"
            />
          </svg>
        </div>
        <div class="item__panel-icon" @click="removeItem">
          <svg
            height="427pt"
            viewBox="-40 0 427 427.00131"
            width="427pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
            />
            <path
              d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
            />
            <path
              d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"
            />
            <path
              d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
            />
          </svg>
        </div>
      </div>
      <b-card-text class="item__tag">#{{ item.tag }}</b-card-text>
      <b-card-img :src="item.image" height="250" class="item__img mb-3" />
      <b-card-text class="item__title">
        {{ item.name }}
      </b-card-text>
      <b-card-text class="item__description">
        {{ item.description }}
      </b-card-text>

      <div class="d-flex justify-content-between">
        <div class="item__date">
          {{ $moment(item.date).format('DD MMMM YYYY') }}
        </div>
        <div class="item__like">
          <div
            :class="[
              'item__like-heart mr-2',
              { 'item__like-heart_color_red': item.isLike },
            ]"
            @click="toggleLike"
          >
            <svg
              viewBox="0 -28 512.00002 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
              />
            </svg>
          </div>
          <div class="item__like-count">
            {{ item.like }}
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    toggleLike() {
      this.$emit('toggle-like', {
        id: this.item.id,
        isLike: !this.item.isLike,
        like: this.item.isLike
          ? Number(this.item.like) - 1
          : Number(this.item.like) + 1,
      })
    },

    editItem() {
      this.$emit('edit-item')
    },
    removeItem() {
      this.$emit('remove-item')
    },
  },
}
</script>

<style lang="scss">
.item {
  &__panel {
    position: absolute;
    display: flex;
    right: 8px;
    top: 8px;
    background: rgba(255, 255, 255, 0.7);
    padding: 5px 5px 7px;

    &-icon {
      cursor: pointer;
      fill: #343a40;

      svg {
        height: 20px;
        width: 20px;
      }
    }
  }

  &__card {
    border: none;

    .card-body {
      padding: 0.25rem;
    }
  }

  &__tag {
    position: absolute;
    background: rgba(141, 190, 80, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 5px;
    padding: 5px 10px;
    color: #fff;
    font-size: 13px;
    left: 15px;
    top: 220px;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__description {
    font-size: 15px;
    line-height: 20px;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__date {
    font-style: italic;
    font-size: 13px;
    color: #909599;
  }

  &__like {
    display: flex;
    align-items: center;

    &-heart {
      width: 15px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &_color_red {
        fill: red;
      }
    }
    &-count {
      color: #909599;
      font-size: 12px;
      user-select: none;
    }
  }
}
</style>
