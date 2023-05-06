<template>
  <header-side class="header-side" />
  <div class="main">
    <slot />
  </div>
  <footer-side class="footer" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import footerSide from '@/components/share/footer.vue'
import headerSide from '@/components/share/header.vue'

export default defineComponent( {
  components: {
    footerSide,
    headerSide
  }
} )
</script>
