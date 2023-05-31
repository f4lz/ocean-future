<template>
  <error-layout>
    <div class="error__wrapper">
      <h2 class="errpr__text">Увы, такой страницы не существует</h2>
      <router-link class="error-link" :to="{ name: 'main' }">Вернуться на главную</router-link>
    </div>
  </error-layout>
</template>

<script lang="ts">
import errorLayout from '@/components/layouts/error.vue'

import { defineComponent } from 'vue'

export default defineComponent( {
  components: {
    errorLayout
  },

  setup () {}
} )
</script>

<style lang="scss" scoped>
.error-link {
  cursor: pointer;
  color: rgb(74, 74, 185);
}

.error__wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 350px;
}
</style>
