<template>
  <header-side/>
  <router-view/>
  <footer-side/>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import footerSide from '@/components/layouts/footer.vue'
import headerSide from '@/components/layouts/header.vue'

export default defineComponent( {
  components: {
    headerSide,
    footerSide,
  }
} )

</script>

<style lang="scss">
  body{
    background-color: #393939;
    color: white;
  }
</style>
