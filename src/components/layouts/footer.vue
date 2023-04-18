<template>
  <footer class="footer__inner">
    <logo :size="300"/>
    <active-button/>
    <p class="footer__text">© All Rights Reserved. Acme Inc.211-323@polytech.com</p>
  </footer>
</template>

<script lang="ts">

  import logo from '@/components/ui/logo.vue';
  import activeButton from '@/components/ui/active-button.vue';
  import { defineComponent } from 'vue'


  export default defineComponent( { 

    components: {
      logo,
      activeButton
    },

    setup () {
    

    }
  } )



</script>

<style lang="scss" scoped>
  .footer__inner{
    display: flex; 
    justify-content: center;
    gap: 60px;
    align-items: center;
    flex-direction: column;
  }
  .footer__text{
    max-width: 250px;
    padding: 0 24px;
    text-align: center;
  }
</style>