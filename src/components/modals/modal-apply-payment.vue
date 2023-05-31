<template>
  <div class="payment-apply__wrapper">
    <div class="payment-apply__close">
      <svg-icon type="mdi" :path="path" @click="close"></svg-icon>
    </div>
    <div class="payment-apply__content">kakashka</div>
  </div>
</template>

<script lang="ts" setup>

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

const emit = defineEmits( [ 'close' ] )

const close = () => {
  emit( 'close' )
}

const path = mdiClose

</script>

<style lang="scss" scoped>


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
}

</style>