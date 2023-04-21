<template>
  <header-side class="header-side"/>
  <router-view class="main"/>
  <footer-side class="footer"/>
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

