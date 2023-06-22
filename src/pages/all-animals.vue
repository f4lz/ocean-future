<template>
  <default-layout>
    <div v-for="animal of animals" :key="animal.id">
      <h2>
        {{ animal.name }}
      </h2>
    </div>
  </default-layout>
</template>

<script lang="ts" setup>

import { ref } from'vue'

import defaultLayout from '@/components/layouts/default.vue'

import { defineComponent } from '@vue/composition-api';

defineComponent( {
  defaultLayout
} )
  
//Variables

const animals = ref( [ {
  id: 2,
  name: 'animal'
} ] )


</script>