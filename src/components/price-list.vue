<template>
  <div class="prices__box container">
    <p class="ticket__type">Взрослый билет</p>
    <span class="ticket__price"> 800р </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { iconsCard } from '@/types/main'

export default defineComponent( {
  props: {
    prices: {
      type: Array as PropType<iconsCard[]>,
      default: () => []
    }
  },

  setup () {}
} )
</script>

<style lang="scss" scoped>
.prices__box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ticket__type {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}

.ticket__price {
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
}
</style>

<!-- v-for="price in prices" :key="price.id" -->
