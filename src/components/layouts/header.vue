<template>
  <header class="header">
    <nav class="header__nav nav">
      <ul class="nav__item-list">
        <li class="nav__items"><a href="" class="nav__links">Билеты</a></li>
        <li class="nav__items"><a href="" class="nav__links">Фотографии</a></li>
        <li class="nav__items"><a href="" class="nav__links">График работы</a></li>
        <li class="nav__items"><a href="" class="nav__links">Обитатели</a></li>
        <li class="nav__items"><a href="" class="nav__links">Шоу</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
// @ts-ignore
import { defineComponent } from '@vue/composition-api'

export default defineComponent ( {
  setup () {}
} )
</script>

<style>
.header{
  height: 130px;
  background-color: #171717;
  
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav__item-list{
  gap: 21px;
}
.nav__items {
  display: inline;
}
</style>