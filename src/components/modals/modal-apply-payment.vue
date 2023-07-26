<template>
  <div class="payment-apply__wrapper">
    <div class="payment-apply__close">
      <svg-icon type="mdi" :path="mdiClose" @click="close"/>
    </div>
    <div class="payment-apply__content">
      <h2>
        Оформление заказа
      </h2>
      <div class="payment-apply__content__inner">
        <div class="payment-apply__content__ways-get">
          <h3>
            Способ получения
          </h3>
            <form class="payment-apply__content__ways-get__checkboxes">
              <label for="courier">
                <input type="checkbox" name="courier">
                Курьером
              </label>
              <label for="mail">
                <input type="checkbox" name="mail">
                Электронный билет
              </label>
            </form>
        </div>
        <div class="payment-apply__content__order">
          <h3>
            Ваш заказ
          </h3>
          <div class="payment-apply__content__order__inner">
            <p>
              {{ type }}
            </p>
            <p>
              Взрослый
            </p>
          </div>
        </div>
        <div class="payment-apply__content__apply">
          <h3>
            Кол-во билетов {{ ticketsCount }}
          </h3>
          <h3>
            Итого {{ ticketsCount }}
          </h3>
          <active-button class="payment__button">ПОДТВЕРДИТЬ ЗАКАЗ</active-button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

import { defineComponent, type PropType } from 'vue'
import type { Modal } from '@/types/main'

import activeButton from '@/components/ui/active-button.vue';

defineComponent( {
  activeButton
} )

const props = defineProps( {
  modal: {
    type: Object as PropType<Modal>,
    default: () => {},
  },
  ticketsCount: {
    type: Number,
    default: () => 0,
  },
  type: {
    type: String,
    default: () => ''
  }

} )

const emit = defineEmits( [ 'close' ] )

const close = () => {
  emit( 'close', props.modal )
}

</script>

<style lang="scss" scoped>


.close {
  cursor: pointer;
}

.payment-apply__wrapper {
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

.payment-apply__close {
  padding: 10px 10px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.payment-apply__content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  flex-direction: column;

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
  }
  .payment-apply__content__ways-get {
    &__checkboxes {
      background-color: #393939;
      padding: 20px 10px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      justify-content: flex-start;
    }
  }
  .payment-apply__content__order {
    &__inner {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      padding: 20px 10px;
      background-color: #393939;
    }
  }
  .payment-apply__content__apply {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #393939;
    padding: 0 10px;
    grid-column-start: 2;
    grid-row-start: 2;
  }
}

// .payment-apply__content {
//   height: 85%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }

// .content__inner {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// }
// .inner__info {
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   gap: 10px;
//   &-input {
//     width: 100px;
//   }
// }

.payment__button {
  padding: 5px 10px;
}

</style>