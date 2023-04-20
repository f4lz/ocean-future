<template>
  <button v-bind="$attrs" class="active-button">
    <slot>
      Обратная связь
    </slot>
  </button>
</template>

<!-- <script lang="ts" setup>

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

</script> -->

<style lang="scss">

  .active-button {
    padding: 10px 18px;
    color: white;
    border: none;
    cursor: pointer;
    transition: .2s;
    background-color: black;
    
    &:hover{
      opacity: 0.7;
      transition: .2s;
    }

    &:active{
      opacity: 0.6;
    }
  } 
  
</style>