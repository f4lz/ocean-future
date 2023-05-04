<template>
  <img
    src="@/assets/logo.svg"
    alt="logo dolphin and sea"
    :width="size"
    :height="size"
    class="logo"
  />
</template>

<script lang="ts" setup>
defineProps( {
  size: {
    type: Number,
    default: () => 90
  }
} )
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>
