<template>
  <div class="album">
    <gallery />
  </div>
</template>

<script lang="ts">
import gallery from '@/components/gallery.vue'

import { defineComponent } from 'vue'

export default defineComponent( {
  name: 'album',

  component: {
    gallery
  }
} )
</script>

<style></style>
