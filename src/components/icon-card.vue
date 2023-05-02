<template>
  <div class="icons__box" v-for="icon in icons" :key="icon.id" :class="{ border: icon.hr }">
    <div class="icons__description">
      <img :src="icon.src" :alt="icon.alt" />
      <p class="icons__description-text">{{ icon.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { iconsCard } from '@/types/main'

export default defineComponent( {
  props: {
    icons: {
      type: Array as PropType<iconsCard[]>,
      default: () => []
    }
  },

  setup () {}
} )
</script>

<style lang="scss" scoped>
.icons {
  &__box {
    display: flex;
    align-self: flex-start;
    border-right: 2px transparent;
  }

  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 350px;
    min-height: 130px;
    gap: 20px;
    &-text {
      text-align: center;
      max-width: 200px;
    }
  }
}

.border {
  border-right: 2px black solid;
}
</style>
