<template>
    <div class="icons__box" v-for="icon in icons" :key="icon.id">
      <div class="icons__description">
        <img :src="icon.src" :alt="icon.alt">
        <p class="icons__description-text">{{ icon.text }}</p>
      </div>
      <span v-if="icon.hr" class="icons__line"></span>
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
    },
  },

  setup () {
    
  },
} )

</script>

<style lang="scss" scoped>

.icons{
  &__line{
    display: block;
    width: 2px;
    height: 130px;
    background-color: black;
    margin-left: 150px;
  }
  &__box{
    display: flex;
  }
  &__description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    &-text{
      max-width: 242px;
    }
  }
}


</style>
