<template>
    <div class="about__box">
        <div class="about__text">
            <p class="about__headding">О компании</p>
            <p class="about__description">Крупнейший в Европе аквариум, удаленный от морского побережья. В 80 аквариумах обитает более 12 000 морских и пресноводных обитателей.</p>
        </div>
        <div class="about__card">
            <img class="about__img" src="@/assets/arque.jpg" alt="Арка">
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

.about {
    &__box {
        display: flex;
        justify-content: space-between;
    }

    &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
    }

    &__headding {
        font-size: 1.8rem;
    }

    &__description {
        max-width: 450px;
        font-weight: 400;
        font-size: 1.1rem;
    }

    &__img {
        min-height: 560px;
        min-width: 560px;
    }
}

</style>