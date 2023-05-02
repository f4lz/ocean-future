<template>
  <button v-bind="$attrs" class="active-button">
    <slot> Обратная связь </slot>
  </button>
</template>

<style lang="scss">
.active-button {
  padding: 10px 18px;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  // background-color: black;
  background: rgb(0, 136, 156);
  background: linear-gradient(
    90deg,
    rgba(0, 136, 156, 1) 4%,
    rgba(0, 140, 161, 1) 10%,
    rgba(0, 149, 170, 1) 16%,
    rgba(0, 153, 175, 1) 22%,
    rgba(0, 159, 180, 1) 29%,
    rgba(0, 164, 186, 1) 36%,
    rgba(0, 166, 190, 1) 43%,
    rgba(0, 171, 195, 1) 50%,
    rgba(0, 166, 190, 1) 57%,
    rgba(0, 164, 186, 1) 64%,
    rgba(0, 159, 180, 1) 71%,
    rgba(0, 153, 175, 1) 78%,
    rgba(0, 149, 170, 1) 84%,
    rgba(0, 140, 161, 1) 90%,
    rgba(0, 136, 156, 1) 95%
  );

  &:hover {
    opacity: 0.7;
    transition: 0.2s;
  }

  &:active {
    opacity: 0.6;
  }
}
</style>
