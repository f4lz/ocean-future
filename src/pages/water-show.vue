<template>
    <default-layout>

        <section class="banner-show">
            <div class="banner-show__wrapper container">
                <banner></banner>
            </div>
        </section>
        <section class="about">
            <div class="about__wrapper container">
                <about title="dadwaad"></about>
            </div>
        </section>

    </default-layout>
</template>

<script lang="ts">

import banner from '@/components/banner.vue'
import about from '@/components/about-company.vue'
import defaultLayout from '@/components/layouts/default.vue'

import { defineComponent } from 'vue'

export default defineComponent( {
    components: {
        banner,
        about,
        defaultLayout
    }
} )

</script>

<style lang="scss">

.banner-show {
	background-image: url('@/assets/banner-show.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 713px;
	background-attachment: fixed;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #171717;
		filter: opacity(35%);
		top: 0;
		left: 0;
	}
	&__wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: inherit;
	}
}

</style>