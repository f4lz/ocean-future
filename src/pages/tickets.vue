<template>
  <default-layout>
    <div class="container payment">
      <price-list/>
      <active-button @click="showModalPayment">
        Купить
      </active-button>
      <modal-payment class="modal-payment" v-if="modal.display" @close="onclose"/>
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
    onclose()
  }
} )

const modal = reactive( {
  display: false
 } )

 const onclose = () => {
  modal.display = false
 }

 const showModalPayment = () => {
    modal.display = !modal.display
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