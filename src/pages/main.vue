<template>
  <div class="cards__wrapper">
    <inhabitant-card :cards="cards"/>
  </div>
  <section class="icons">
    <div class="icons__wrapper">
      <icon-card :icons="icons"/>
    </div> 
  </section>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

import inhabitantCard from '@/components/inhabitant-card.vue'
import iconCard from '@/components/icon-card.vue'

import type { inhabitantCardType, iconsCard } from '@/types/main'

export default defineComponent( {

  name: 'main-page',

  components: {
    inhabitantCard,
    iconCard,
  },

  setup () {
    
    const cards = ref<inhabitantCardType[]>( [

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
    ] );
    
    const icons = ref<iconsCard[]>( [

      {
        id: 1,
        text: 'Пушкинская ул., 107/72, Ростов-на-Дону',
        src: require ( '@/assets/map.svg' ),
        alt: 'Карта',
        hr: true
      },
      {
        id: 2,
        text: '10:00 – 22:00,без выходных',
        src: require ( '@/assets/time.svg' ),
        alt: 'Время',
        hr: true
      },
      {
        id: 3,
        text: 'Телефон+7 926 750 57 44',
        src: require ( '@/assets/telephone.svg' ),
        alt: 'Телефон',
        hr: false
      }
    ] );

    return {
      cards,
      icons
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

  .icons__wrapper{
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .icons{
    padding: 100px 0 80px;
    margin-top: 20px;
    background-color: #181A1B;
  }

  .footer{
    margin-top: 60px;
  }
</style>
