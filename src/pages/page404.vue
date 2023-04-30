<template>
  <error-layout>
    <h2>
        Увы, такой страницы не существует
    </h2>
  </error-layout>
</template>

<script lang="ts">

import errorLayout from '@/components/layouts/error.vue'

import { defineComponent } from 'vue'

export default defineComponent( {

    components: {
      errorLayout
    },

    setup () {
          
    },
} )
</script>
