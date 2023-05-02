<template>
  <header class="header">
    <div class="container header__wrapper">
      <nav class="header__nav nav">
        <ul class="nav__item-list">
          <li class="nav__items"><a href="" class="nav__links">Билеты</a></li>
          <li class="nav__items"><a href="/album" class="nav__links">Фотографии</a></li>
          <li class="nav__items"><a href="" class="nav__links">Обитатели</a></li>
          <li class="nav__items"><a href="" class="nav__links">Шоу</a></li>
        </ul>
      </nav>
      <logo class="header__logo" @click="$router.push({name:'main'})"/>
      <active-button class="header__button"/>
    </div>
  </header>
</template>

<script lang="ts">

import logo from '@/components/ui/logo.vue';
import { defineComponent } from 'vue'
import activeButton from '@/components/ui/active-button.vue';

export default defineComponent ( {
  components: {
    activeButton,
    logo
  },
  setup () {}
} )
</script>

<style lang="scss">

  .header{
    background-color: #171717;
    padding: 15px 0;

    &__wrapper {
      display: grid;
      place-items: center;
      grid-auto-flow: column;
      grid-template-columns: minmax(auto, 400px) minmax(auto, 380px) minmax(auto,420px);
    }

    &__nav {
      display: flex;
      justify-content: flex-start;
      grid-column: 1/2;
    }

    &__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column: 2/3;
    }

    &__button {
      background-color: #077EA8;
      text-transform: uppercase;
      border: none;
      border-radius: 4px;
      // font-size: $fz-title;
    }

    .nav__item-list {
      display: flex;
      gap: 20px;
    }
   
  }
</style>