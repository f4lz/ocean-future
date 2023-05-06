<template>
  <default-layout>
    <price-list/>
    <modal-payment/>
  </default-layout>
</template>

<script lang="ts" setup>

import defaultLayout from '@/components/layouts/default.vue';
import priceList from '@/components/price-list.vue';
import modalPayment from '@/components/payment.vue';

import { defineComponent } from 'vue';

defineComponent( {
  defaultLayout,
  priceList,
  modalPayment
} )

</script>
