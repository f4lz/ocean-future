<template>
  <img    
    src="@/assets/logo.svg" 
    alt="logo dolphin and sea" 
    :width="size"
    :height="size"
  >
</template>
  
<script lang="ts" setup>

  const props = defineProps( {
    size: {
      type: Number,
        default: () => 100,
    },
  } )


</script>