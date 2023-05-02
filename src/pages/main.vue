<template>
  <default-layout>
    <div class="cards__wrapper container">
      <inhabitant-card :cards="cards" />
    </div>
    <section class="icons">
      <div class="icons__wrapper container">
        <icon-card :icons="icons" />
      </div>
    </section>
    <div class="price__list">
      <h2>Цена</h2>
      <p>*описание*</p>
      <div>
        <price-list />
      </div>
      <active-button> Купить </active-button>
    </div>
    <section class="gallery container">
      <div class="gallery__wrapper">
        <gallery />
      </div>
    </section>
    <section class="contacts">
      <h2>+7 926 750 57 44 Пушкинская ул., 107/72, Ростов-на-Дону</h2>
      <p>Мы открыты: 10:00 – 22:00, без выходных Почта: support@oceanfut.com</p>
    </section>
  </default-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import inhabitantCard from '@/components/inhabitant-card.vue'
import iconCard from '@/components/icon-card.vue'
import priceList from '@/components/price-list.vue'
import activeButton from '@/components/ui/active-button.vue'
import defaultLayout from '@/components/layouts/default.vue'
import gallery from '@/components/gallery.vue'

import type { inhabitantCardType, iconsCard } from '@/types/main'

export default defineComponent( {
  name: 'main-page',

  components: {
    defaultLayout,
    inhabitantCard,
    iconCard,
    priceList,
    activeButton,
    gallery
  },

  setup () {
    const cards = ref<inhabitantCardType[]>( [
      {
        id: 1,
        name: 'Электрический угорь',
        description:
          'Электрический угорь – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/ugor.jpg' )
      },
      {
        id: 2,
        name: 'Байкальские непры',
        description:
          'Байкальские непры – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/nerpy.jpg' )
      },
      {
        id: 3,
        name: 'Осьминоги',
        description:
          'осьминоги – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/octopus.jpg' )
      },
      {
        id: 4,
        name: 'Акулы',
        description:
          'акулы – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/shark.jpg' )
      },
      {
        id: 5,
        name: 'Черепахи',
        description:
          'черепахи – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/turtle.jpg' )
      },
      {
        id: 6,
        name: 'Камчатский краб',
        description:
          'камчатские крабы – самая опасная из всех электрических рыб. По количеству человеческих жертв этот вид опережает пиранью. Его тело очень длинное, змеевидное, кожа голая, без чешуи, покрыта слизью. ',
        src: require( '@/assets/krab.jpg' )
      }
    ] )

    const icons = ref<iconsCard[]>( [
      {
        id: 1,
        text: 'Пушкинская ул., 107/72, Ростов-на-Дону',
        src: require( '@/assets/map.svg' ),
        alt: 'Карта',
        hr: true
      },
      {
        id: 2,
        text: '10:00 – 22:00,без выходных',
        src: require( '@/assets/time.svg' ),
        alt: 'Время',
        hr: true
      },
      {
        id: 3,
        text: 'Телефон +7 926 750 57 44',
        src: require( '@/assets/telephone.svg' ),
        alt: 'Телефон',
        hr: false
      }
    ] )

    return {
      cards,
      icons
    }
  }
} )
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

.cards__wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.icons {
  padding: 100px 0 80px;
  margin-top: 20px;
  background-color: #181a1b;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.gallery {
  margin-top: 20px;
}
.price__list {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 620px;
  margin: 0 auto;
}

.contacts {
  margin: 50px auto;
  max-width: 626px;
  text-align: center;
  display: flex;
  gap: 20px;
  flex-direction: column;

  & p {
    margin: 0 auto;
    max-width: 236px;
    font-size: v.$fz-monospaced;
  }

  & h2 {
    padding: 0 20px;
  }
}
</style>
