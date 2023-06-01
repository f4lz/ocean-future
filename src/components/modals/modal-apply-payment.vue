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

import type { PropType } from 'vue'
import type { Modal } from '@/types/main'

const props = defineProps( {
  modal: {
    type: Object as PropType<Modal>,
    default: () => {},
  }
} )

const emit = defineEmits( [ 'close' ] )

const close = () => {
  emit( 'close', props.modal )
}

const path = mdiClose

</script>

<style lang="scss" scoped>


.close {
  cursor: pointer;
}

.payment-apply__wrapper {
  color: black;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 25%);
  width: 892px;
  height: 601px;
  background-color: #F1ECEC;
}

.payment-apply__close {
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