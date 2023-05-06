<template>
  <nav class="header__nav nav">
    <ul :class="['nav__item-list', { 'nav__item-list--active': activeClass }]">
      <router-link v-for="route in routes" :key="route.name" :to="{ name: route.link }" class="nav__items">
        {{ route.name }}
      </router-link>
      <slot />
    </ul>
  </nav>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type RouteApi from '@/types/main'

defineProps( {
  activeClass: {
    type: Boolean,
    default: () => false
  }
} )

const routes = ref<RouteApi>( [
  {
    link: 'tickets',
    name: 'Билеты'
  },
  {
    link: 'gallery',
    name: 'Фотографии'
  },
  {
    link: 'tickets',
    name: 'Обитатели'
  },
  {
    link: 'show',
    name: 'Шоу'
  },
] )

</script>

<style lang="scss">
.nav__items {
  cursor: pointer;
  transition: 0.2s;
  opacity: 1;

  &:hover {
    opacity: 0.7;
    transition: 0.2s;
  }
}
.nav__item-list--active {
  position: absolute;
  background-color: #171717;
  transition: 0.8s;
  width: 100vh;
  left: -149px;
  height: 100vh;
  top: 90px;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.router-link-active {
  text-decoration: underline;
}
</style>
