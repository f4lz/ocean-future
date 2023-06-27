import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { inhabitantCardType } from '@/types/main'
import axios from 'axios'

export const animalListStore = defineStore( 'animals', () => {
  const animals = ref<inhabitantCardType[]>( [] )

  const getAnimals = function () {
    axios.get( 'https://jsonplaceholder.typicode.com/todos' ).then( ( { data } ) => animals.value = data )
  }

  return {
    animals, getAnimals
   }
} )
