<template>
  <footer class="footer__inner">
    <img src="@/assets/footerLogo.svg" alt="Логотип" class="footer__logo">
    <p class="footer__text">© All Rights Reserved. Acme Inc.hello@mysite.com</p>
  </footer>
</template>

<style lang="scss" scoped>
  .footer__inner{
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .footer__text{ 
    margin-top: 60px;
    max-width: 250px;
    text-align: center;
  }
</style>