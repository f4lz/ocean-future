<template>
    <div>
        <img    
            src="@/assets/images/logo.svg" 
            alt="logo dolphin and sea" 
            :style="{ width: size + 'px', height: size + 'px' }"
        >
    </div>
</template>
  
  <script lang="ts">
  
  import { defineComponent, defineProps } from 'vue'
  
  const props = defineProps( {
    size: {
        type: Number,
        requaired: true,
        default: () => 100,
    },
  } )

  export default defineComponent( {
    setup () {
    }
  } )
  </script>