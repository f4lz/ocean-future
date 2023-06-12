<template>
  <div class="payment-wrapper">
    <div class="payment__close">
      <svg-icon class="close" @click="close" type="mdi" :path="mdiClose"/>
    </div>
    <div class="payment__content">
      <h2>
        Оформление заказа
      </h2>
      <div class="content__inner">
        <div class="inner__info">
          <p>Тип билета</p>
          <select class="connent__inner-select" v-model="type">
            <option v-for="price in priceList.prices" :key="price.id" :value="price.type">{{ price.type }}</option>
          </select>
        </div>
        <div class="inner__info">
          <p>Кол-во билетов</p>
          <svg-icon type="mdi" @click="minusCountOfTickets" :path="mdiMinus"/>
          <input class="inner__info-input" v-model="countOfTickets" type="number" min="1" max="1000">
          <svg-icon type="mdi" @click="plusCountOfTickets" :path="mdiPlus"/>
        </div>
        <div class="inner__info">
          <p>Дата посещения</p>
          <input class="inner__info-input" type="date" v-model="date" @change="info" style="width: 50%">
        </div>
      </div>
      <active-button class="payment__button" @click="showModalApplyPayment">Купить</active-button>
    </div>
  </div>
</template>

<script lang="ts" setup>


import SvgIcon from '@jamescoyle/vue-icon'

import { mdiClose, mdiPlus, mdiMinus } from '@mdi/js'

import { priceListStore } from '@/stores/prices'

import activeButton from '@/components/ui/active-button.vue';

import { watchEffect, ref, defineComponent, defineProps, onMounted } from 'vue'

import type { PropType } from 'vue'
import type { Modal } from '@/types/main'

defineComponent( {
  activeButton
} )

const props = defineProps( {
  modal: {
    type: Object as PropType<Modal>,
    default: () => {},
  }
} )

// Variables

const countOfTickets = ref<number>( 1 )
const date = ref<string>()
const type = ref<string>()

//Store

const priceList = priceListStore()
priceList.changeCountOfTickets( countOfTickets )

// Watchers

watchEffect (  () => {
  if ( countOfTickets.value < 0 ) {
    countOfTickets.value = 1
  }
} )

// Emits

//TODO: Сделать короче, 1 + и - чтобы работали, иконки с айконс, ииии посмотреть в интернете как реализован механизм измененния переменной внутри стора pinia курс кину в тг или сюда
// https://www.youtube.com/watch?v=ok9PE-XwXro 
// https://www.youtube.com/watch?v=bAF5mSnJOzA&list=PL2hgv2vHkQ7DE77DNxPPEqzdk89PA4gkX&index=7


const emit = defineEmits( [ 'close','showModalApplyPayment' ] )

const close = () => {
  emit( 'close', props.modal )
}

const showModalApplyPayment = () => {
  emit( 'showModalApplyPayment', true, type, countOfTickets )
}

// Funtions

const plusCountOfTickets = () => {
  countOfTickets.value++
}

const minusCountOfTickets = () => {
  countOfTickets.value--
}

const info = () => {
  console.log( 'date', date.value )
  console.log( 'type', type.value )
}

onMounted( () => {
  console.log(  'hello' )
} )

</script>

<style lang="scss" scoped>

.close {
  cursor: pointer;
}

.payment-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 25%);
  max-width: 892px;
  width: 100%;
  height: 601px;
  border-radius: 10px;
  background-color: #0f0f0f;
}

.payment__close {
  padding: 10px 10px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.payment__content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
}

.content__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.inner__info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  &-input {
    width: 100px;
  }
}

// .payment__button {
//   position: absolute;
//   top: 95%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   padding: 5px 10px;
// }

.payment__button {
  padding: 10px 25px;
  border-radius: 4px;
  text-transform: uppercase;
}

</style>