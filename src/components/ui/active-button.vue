<template>
  <button v-bind="$attrs" class="button__feedback">
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

<style lang="scss">
  .button__feedback{
    display: flex;
    padding: 10px 18px;
    background-color: #181A1B;
    color: white;
    border: none;
    
    &:hover{
      background-color: #1e2224;
      transition: 0.7s;
    }

    &:active{
      background-color: #4b4c4d;
    }
  } 
</style>