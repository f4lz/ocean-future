<template>
  <div class="payment-wrapper">
    <div class="payment__close"><span @click="close">×</span></div>
    <div class="payment__content">kakashka</div>
  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits( [ 'close' ] )

const close = () => {
  emit( 'close' )
}

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