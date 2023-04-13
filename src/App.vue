<template>
  <router-view/>
  <inhabitant-card>

  </inhabitant-card>
</template>

<script lang="ts">

import { defineComponent } from '@vue/composition-api'

import inhabitantCard from '@/components/inhabitant-card.vue';

export default defineComponent( {
  components: inhabitantCard
} )

</script>
