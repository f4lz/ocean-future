import { ref } from 'vue'
import { defineStore } from 'pinia'

export const animalListStore = defineStore( 'animals', () => {
  const animals = ref<priceList>( [] )

  const getAnimals = () => {
    console.log( 'info' )
  }

  return {
    animals, getAnimals
   }
} )
