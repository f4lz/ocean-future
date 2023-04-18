<template>
  <button v-bind="$attrs">
    <slot>
      Обратная связь
    </slot>
  </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent( {
  setup () {}
} )

</script>
