<template>
  <router-view/>
</template>

<script lang="ts">
// @ts-ignore
import { defineComponent } from '@vue/composition-api'
import { ref } from 'vue'

export default defineComponent({
  setup() {
    const wotTakRabotautFunccii: any = () => {
      console.log( 'jopa' ) 
    }
    return {
      wotTakRabotautFunccii,
    }
  },
})

</script>
