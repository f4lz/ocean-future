<template>
  <header class="header">
    <div class="container header__wrapper">
      <navigation class="header__nav" />
      <div id="burger-menu" class="header__burger" ref="burger" @click="changeBurger">
        <span :class="['header__burger-lines', { 'header__burger--active': isActive }]" />
        <navigation
          :class="['header__burger-nav', { 'header__burger-nav--active': isActive }]"
          :activeClass="isActive"
        >
          <active-button />
        </navigation>
      </div>
      <logo class="header__logo" @click="$router.push({ name: 'main' })" />
      <active-button class="header__button" />
    </div>
    <!-- <div ref="shadow unscroll" :class="{shadow: isActive}"/> -->
  </header>
</template>

<script lang="ts">
import logo from '@/components/ui/logo.vue'
import navigation from '@/components/navigation.vue'
import activeButton from '@/components/ui/active-button.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent( {
  components: {
    navigation,
    activeButton,
    logo
  },

  setup () {
    const isActive = ref<Boolean>( false )

    function changeBurger () {
      isActive.value = isActive.value ? false : true
    }

    // const shadow = aref<HTMLDivElement>()

    // function unscroll () {
    //   if ( isActive.value === true ) {
    //     const body = document.querySelector( 'body' )
    //     console.log( body )
    //     body?.classList.add( 'unscroll' )

    //   }
    // }

    return {
      changeBurger,
      isActive
    }
  }
} )
</script>
