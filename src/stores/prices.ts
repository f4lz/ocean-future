import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { priceList } from '@/types/main'
import axios from 'axios'

export const priceListStore = defineStore( 'prices', () => {
  const prices = ref<priceList[]>( [] )

  const addPriceList = function () {
    axios.get( 'https://jsonplaceholder.typicode.com/todos' ).then( ( { data } ) => prices.value = data )
  }

  return {
    prices, addPriceList
   }
} )
