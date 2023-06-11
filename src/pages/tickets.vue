<template>
  <default-layout>
    <div class="container payment">
      <price-list/>
      <active-button class="button__payment" @click="showModalPayment">
        Купить
      </active-button>
      <modal-payment class="modal-payment" v-if="modalPay.display" @close="onclose" @showModalApplyPayment="showModalApplyPayment" :modal="modalPay"/>
      <modal-apply-payment class="modal-payment" v-if="modalApplyPay.display" @close="onclose" :modal="modalApplyPay"/>
    </div>
  </default-layout>
</template>

<script lang="ts" setup>

import defaultLayout from '@/components/layouts/default.vue';
import priceList from '@/components/price-list.vue';
import modalPayment from '@/components/modals/modal-payment.vue';
import activeButton from '@/components/ui/active-button.vue';
import modalApplyPayment from '@/components/modals/modal-apply-payment.vue';

import { reactive } from 'vue';
import { defineComponent } from 'vue';

defineComponent( {
  defaultLayout,
  priceList,
  modalPayment,
  activeButton,
  modalApplyPayment
} )

window.addEventListener( 'keydown', ( event ) => {
  if ( event.keyCode == 27 ) {
    if ( modalPay.display ) {
      onclose( modalPay )
    }
    if ( modalApplyPay.display ) {
      onclose( modalApplyPay )
      modalPay.display = true
    }
  }
} )

// const body = document.querySelector( 'body' )
// body.addEventListener( 'click', ( event ) => {
//   const modalPayDocument = document.querySelector( '.payment__content' )
//   const buttonActive = document.querySelector( '.button__payment' )
//   if ( event.target !== modalPayDocument && event.target !== buttonActive ) {
//     console.log( event.target.className )
//     if ( modalPay.display ) {
//       console.log( 'this.widnwo' )
//       onclose( modalPay )
//     }
//     if ( modalApplyPay.display ) {
//       console.log( '1this.widnwo' )
//       onclose( modalApplyPay )
//       modalPay.display = true
//     }
//   }
//  } )

const modalPay = reactive( {
  display: false
 } )

const modalApplyPay = reactive( {
  display: false
 } )


const showModalApplyPayment = ( showModalApplyPaymentDisplay ) => {
  if ( showModalApplyPaymentDisplay ) {
    onclose( modalPay )
    modalApplyPay.display = true
  }
}

 const onclose = ( modal ) => {
  modal.display = false
 }

 const showModalPayment = () => {
  modalPay.display = modalPay.display = true
 }


</script>

<style scoped>

.main {
  position: relative;
}

.payment {
  height: 70vh;
  display: flex;
  margin-top: 60px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.modal-payment {
  margin: 0 auto;
}

</style>