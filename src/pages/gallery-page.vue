<template>
  <default-layout>
    <img class="gallery-main-img" src="@/assets/okeanarium-akula-dev.jpg" alt="большой аквариум с девочкой">
    <div class="gallery__wrapper">
      <gallery/>
    </div>
  </default-layout>
</template>

<script lang="ts">
import defaultLayout from '@/components/layouts/default.vue'
import gallery from '@/components/gallery.vue'

import { defineComponent } from 'vue'

export default defineComponent( {

    components: {
        defaultLayout,
        gallery
    },
} )
</script>

<style>

.gallery-main-img {
    max-width: 1440px;
}

</style>
