<template>
  <div class="card" v-for="card in cards" :key="card.id">
    <img :src="card.blob" :alt="card.name">
    <div> {{ card.name }} </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { defineComponent, ref } from '@vue/composition-api'

export interface inhabitantCard {
  id?: number,
  name?: string,
  blob?: string
}
export default defineComponent( {
  name: 'inhabitant-card',
  setup () {
    const cards = ref<inhabitantCard[]>( [
      {
        id: 1,
        name: 'Электрический угорь',
        blob: 'https//:',
      },
      {
        id: 2,
        name: 'Байкальский непр',
        blob: 'https//:',
      },
      {
        id: 3,
        name: 'Акулы',
        blob: 'https//:',
      },
      {
        id: 4,
        name: 'Черепахи',
        blob: 'https//:',
      },
      {
        id: 5,
        name: 'Камчатский краб',
        blob: 'https//:',
      },
      {
        id: 6,
        name: 'Медузы',
        blob: 'https//:',
      },
    ] )

    return {
      cards
    }
  },

} )

</script>
