<template>
  <footer class="footer__inner">
    <logo :size="200" />
    <p class="footer__text">© All Rights Reserved. Acme Inc.211-323@polytech.com</p>
  </footer>
</template>

<script lang="ts">
import logo from '@/components/ui/logo.vue'

import { defineComponent } from 'vue'

export default defineComponent( {
  components: {
    logo
  }
} )
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

.footer__inner {
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: center;
  flex-direction: column;
}
.footer__text {
  max-width: 250px;
  padding: 0 24px;
  text-align: center;
  font-size: v.$fz-monospaced;
}
</style>
