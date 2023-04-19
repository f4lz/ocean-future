<template>
  <button v-bind="$attrs" class="active-button" :style="`background-color:${backColor}; border:${border}`">
    <slot>
      Обратная связь
    </slot>
  </button>
</template>

<script lang="ts" setup>

defineProps( {
  backColor: {
    type: String,
      default: () => '#181A1B',
  },
  border: {
    type: String,
      default: () => 'none',
  },
} )

</script>

<style lang="scss">

  .active-button {
    padding: 10px 18px;
    color: white;
    transition: 0.7s;
    
    &:hover{
      background-color: #1e2224;
      transition: 0.7s;
    }

    &:active{
      background-color: #4b4c4d;
    }
  } 
  
</style>