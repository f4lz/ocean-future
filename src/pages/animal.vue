<template>
  <default-layout>
    <div class="animal__wrapper animal container" v-if="card">
      <div class="animal__info info">
        <h2 class="info__title">
          {{ card.name }}
        </h2>
        <p class="info__description">{{ card.description }}</p>
      </div>
      <img :src="card.src" :alt="card.alt" />
    </div>
  </default-layout>
</template>

<script lang="ts">
import defaultLayout from '@/components/layouts/default.vue'

import { defineComponent, ref, onMounted } from 'vue'

import { useRoute } from 'vue-router'

import type { inhabitantCardType } from '@/types/main'

export default defineComponent( {
  components: {
    defaultLayout
  },

  setup () {
    const route = useRoute()
    const id = Number( route.params.id )

    const cards = ref<inhabitantCardType[]>( [
      {
        id: 1,
        name: 'Электрический угорь',
        description:
          'Электрический угорь – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/ugor.jpg' )
      },
      {
        id: 2,
        name: 'Байкальские непры',
        description:
          'Байкальские непры – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/nerpy.jpg' )
      },
      {
        id: 3,
        name: 'Осьминоги',
        description:
          'осьминоги – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/octopus.jpg' )
      },
      {
        id: 4,
        name: 'Акулы',
        description:
          'акулы – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/shark.jpg' )
      },
      {
        id: 5,
        name: 'Черепахи',
        description:
          'черепахи – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/turtle.jpg' )
      },
      {
        id: 6,
        name: 'Камчатский краб',
        description:
          'камчатские крабы – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/krab.jpg' )
      }
    ] )

    const card = ref<inhabitantCardType>()

    onMounted( () => {
      card.value = cards.value.find( ( card ) => card.id === id )
    } )

    return {
      card
    }
  }
} )
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

.animal {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 68px;

  &__info {
    max-width: 443px;
    font-size: 24px;

    .info__title {
      font-size: v.$fz-title;
      vertical-align: top;
      margin-bottom: 10px;
    }

    .info__description {
      font-size: v.$fz-subheading;
    }
  }
}
</style>
