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

import { reactive } from 'vue';
import { defineComponent } from 'vue';

defineComponent( {
  defaultLayout,
  priceList,
  modalPayment,
  activeButton
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.modal-payment {
  margin: 0 auto;
}

</style>