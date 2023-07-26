<template>
  <default-layout>
    <div v-if="animalsList.animals">
      <div v-for="animal of animalsList.animals" :key="animal.id">
        <h2>
          {{ animal.name }}
        </h2>
      </div>
    </div>
  </default-layout>
</template>

<script lang="ts" setup>

import { onMounted } from'vue'

import defaultLayout from '@/components/layouts/default.vue'

import { defineComponent } from '@vue/composition-api';

import { animalListStore } from '@/stores/animals';

defineComponent( {
  defaultLayout
} )
  
const animalsList = animalListStore()

onMounted ( () => { animalsList.getAnimals() } )

</script>