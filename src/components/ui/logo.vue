<template>
  <img    
    src="@/assets/logo.svg" 
    alt="logo dolphin and sea" 
    :width="size"
    :height="size"
  >
</template>
  
<script lang="ts" setup>

defineProps( {
  size: {
    type: Number,
      default: () => 100,
  },
} )

</script>