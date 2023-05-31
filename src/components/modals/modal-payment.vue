<template>
  <div class="payment-wrapper">
    <div class="payment__close">
      <svg-icon class="close" @click="close" type="mdi" :path="path"></svg-icon>
    </div>
    <div class="payment__content">
      <div class="content__inner">
        <div class="inner__info">
          <p>Тип билета</p>
          <select class="connent__inner-select">
            <option v-for="price in priceList.prices" :key="price.id"  :value="price.type">{{ price.type }}</option>
          </select>
        </div>
        <div class="inner__info">
          <p>Кол-во билетов</p>
          <input class="inner__info-input" v-model="countOfTickets" type="number" min="1" max="100">
        </div>
        <div class="inner__info">
          <p>Дата посещения</p>
          <input class="inner__info-input" type="date">
        </div>
      </div>
    </div>
    <active-button class="payment__button" @click="showModalApplyPayment">Купить</active-button>
  </div>
</template>

<script lang="ts" setup>

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'
import { priceListStore } from '@/stores/prices'
import { watchEffect, ref, defineComponent } from 'vue'
import activeButton from '@/components/ui/active-button.vue';
import { defineProps } from 'vue';

defineComponent( {
  activeButton
} )

const emit = defineEmits( [ 'close' ] )

const priceList = priceListStore()

const path = mdiClose

const countOfTickets = ref<number>( 1 )

watchEffect (  () => {
  if ( countOfTickets.value < 0 ) {
    countOfTickets.value = 1
  }
} )

const close = () => {
  emit( 'close' )
}

defineProps( {
  countTickets: {
    type: Number,
    default: () => 0
  }
} )

</script>

<style lang="scss" scoped>

.close {
  cursor: pointer;
}

.payment-wrapper {
  color: black;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 25%);
  width: 892px;
  height: 601px;
  background-color: #F1ECEC;
}

.payment__close {
  padding: 10px 10px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.payment__content {
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

.payment__button {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
}

</style>