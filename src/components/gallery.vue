<template>
    <div class="gallery__box">
        <img class="gallery__img gallery__img-1" src="@/assets/hands.jpg" alt="Руки">
        <img class="gallery__img gallery__img-2" src="@/assets/album-ocean.jpg" alt="Океан">
        <img class="gallery__img gallery__img-3" src="@/assets/woman.jpg" alt="Девочка">
        <img class="gallery__img gallery__img-4" src="@/assets/scut.jpg" alt="Скат">
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent( {
    setup () {
        
    },
} )
</script>

<style lang="scss" scoped>
    .gallery {

        &__box {
            display: grid;
            grid-template-columns: repeat(auto-fill, 1fr);
            grid-template-rows: repeat(auto-fill, 5fr);
            justify-content: center;
        }   
        &__img{
            height: 100%;
            width: 100%;
            object-fit: cover;

            &-2 {
                grid-column: 2/4;
                grid-row: 1/4;
            }

            &-3 {
                grid-column: 1;
                grid-row: 2/4;
            }

            &-4 {
                grid-row: 4/5;
                grid-column: 1/4;
            }
        }                 
    }
</style>
