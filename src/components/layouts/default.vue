<template>
  <header-side class="header-side" />
  <slot />
  <footer-side class="footer" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// @ts-ignore
import footerSide from '@/components/share/footer.vue'
// @ts-ignore
import headerSide from '@/components/share/header.vue'

export default defineComponent( {
  components: {
    footerSide,
    headerSide
  }
} )
</script>
