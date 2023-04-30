<template>
  <nav class="header__nav nav">
    <ul :class="['nav__item-list',{ 'nav__item-list--active': activeClass }]">
        <li class="nav__items"><a href="" class="nav__links">Билеты</a></li>
        <li class="nav__items"><a href="" class="nav__links">Фотографии</a></li>
        <li class="nav__items"><a href="" class="nav__links">Обитатели</a></li>
        <li class="nav__items"><a href="" class="nav__links">Шоу</a></li>
        <slot/>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

defineProps( {
  activeClass: {
    type: Boolean,
    default: () => false
  }
} )

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

</style>