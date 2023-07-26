<template>
    <div class="banner__box">
        <h1 class="banner__headding">{{ headding }}</h1>
        <h2 class="banner__teg">{{ description }}</h2>
    </div>
</template>

<script lang="ts" setup>

import { defineProps } from 'vue'


defineProps( {
    headding: {
        type: String,
        default: () => 'Океанариум'
    },
    description: {
        type: String,
        default: () => '#окунись в океан'
    }
} )
    


</script>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as v;

.banner {
    &__box {
        margin-bottom: 15%;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 20px;
        z-index: 10;
    }

    &__headding {
        font-size: v.$fz-title * 2;
        font-weight: 600;
        text-transform: uppercase;
    }

    &__teg {
        font-size: v.$fz-subheading;
    }
}

</style>