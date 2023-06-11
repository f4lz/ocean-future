<template>
  <div v-for="animal of animals" :key="animal.id">
    <h2>
      {{ animal.name }}
    </h2>
  </div>
</template>

<script lang="ts" setup>

  import { ref } from'vue'
  
  //Variables
  const animals = ref( [] )


</script>