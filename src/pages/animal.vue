<template>
  <div class="animal__wrapper animal container">
    <div class="animal__info info">
      <h2 class="info__title">
      {{ selectedCard.name }}
    </h2>
    <p class="info__description">{{ selectedCard.description }}</p>
    </div>
    <img :src="selectedCard.src" :alt="selectedCard.alt">
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, onMounted } from 'vue'

import { useRoute } from 'vue-router'

import type { inhabitantCardType } from '@/types/main'

export default defineComponent( {

  setup () {

    const route = useRoute()

    const cards = ref<inhabitantCardType[]>( [

    {
      id: 1,
      name: 'Электрический угорь',
      description: 'Электрический угорь – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
      src: require ( '@/assets/ugor.jpg' )
    },
    {
      id: 2,
      name: 'Байкальские непры',
      description: 'Байкальские непры – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
      src: require ( '@/assets/nerpy.jpg' )
    },
    {
      id: 3,
      name: 'Осьминоги',
      description: 'осьминоги – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
      src: require ( '@/assets/octopus.jpg' )
    },
    {
      id: 4,
      name: 'Акулы',
      description: 'акулы – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
      src: require ( '@/assets/shark.jpg' )
    },
    {
      id: 5,
      name: 'Черепахи',
      description: 'черепахи – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
      src: require ( '@/assets/turtle.jpg' )
    },
    {
      id: 6,
      name: 'Камчатский краб',
      description: 'камчатские крабы – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
      src: require ( '@/assets/krab.jpg' )
    }
    ] );


    const selectedCard = ref<inhabitantCardType | any>( {} )

    function updateSelectedCard ( newValue: object ) {
      selectedCard.value = newValue
    }

    onMounted ( () => { 
      selectedCard.value = cards.value.map( ( card ) => { 
        if ( card.id == Number( route.params.id ) ) {
          return card
        }
        return null
      } ).filter ( ( card ) => card !== null ) 
      updateSelectedCard( selectedCard.value[ 0 ] )
    } )

    return {
      selectedCard
    }
  }
  
} )

</script>

<style lang="scss" scoped>

  .animal {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 68px;

    &__info {
      max-width: 443px;
      font-size: 24px;

      .info__title {
        font-size: 32px;
        vertical-align: top;
        margin-bottom: 10px;
      }

      .info__description {

      }
    }
  }

  img {
  }

</style>