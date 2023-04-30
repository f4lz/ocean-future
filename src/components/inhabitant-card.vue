<template>
  <div class="card" v-for="card in cards" :key="card.id">
    <router-link class="card__link" :to="`/animal/${card.id}`">
      <img  class="card__img" :src="card.src" :alt="card.name" />
    </router-link>
    <div class="card__title">
        <h2 class="card__title-text">{{ card.name }}</h2>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { inhabitantCardType } from '@/types/main'

export default defineComponent( {

  props: {
    cards: {
      type: Array as PropType<inhabitantCardType[]>,
      default: () => []
    },
  },

} )

</script>

<style lang="scss" scoped>

.card {
  position: relative;
  box-sizing: border-box;
  overflow: hidden; 
  width: 360px;
  height: 449px;

  &__title {  
    position: absolute;
    top: 85%;
    left: 5%;
    color: white;
    opacity: 0;
  }

  &__link {
    display: block;
    position: relative;
    cursor: pointer;
    transition: .7s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0; 
      background: rgba(0,0,0,.2);
      opacity: 0;
    }

    &:hover:after {
      opacity: 1;
    }
    &:hover {
      transform: scale( 1.05 );
      transition: .7s;

    }
    &:hover + .card__title {
      opacity: 1;
    }
  }
  
}

</style>