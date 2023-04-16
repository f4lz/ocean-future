<template>
  <div class="cards__wrapper">
    <inhabitant-card :cards="cards"/>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

import inhabitantCard from '@/components/inhabitant-card.vue'

export default defineComponent( {

  name: 'main-page',

  components: {
    inhabitantCard
  },

  setup () {
    
    const cards = ref( [

    {
      id: 1,
      name: 'Электрический угорь',
      src: require ( '@/assets/ugor.jpg' )
    },
    {
      id: 2,
      name: 'Байкальские непры',
      src: require ( '@/assets/nerpy.jpg' )
    },
    {
      id: 3,
      name: 'Осьминоги',
      src: require ( '@/assets/octopus.jpg' )
    },
    {
      id: 4,
      name: 'Акулы',
      src: require ( '@/assets/shark.jpg' )
    },
    {
      id: 5,
      name: 'Черепахи',
      src: require ( '@/assets/turtle.jpg' )
    },
    {
      id: 6,
      name: 'Камчатский краб',
      src: require ( '@/assets/krab.jpg' )
    }
    ] )

    return {
      cards
    }
  }
} )

</script>

<style lang="scss" scoped>

  .cards__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

</style>
