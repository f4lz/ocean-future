<template>
	<div class="about__box">
		<div class="about__text">
			<p class="about__headding">{{ title }}</p>
			<p class="about__description">
				{{ description }}
			</p>
		</div>
		<div class="about__card">
			<img class="about__img" :src="src" :alt="alt" />
		</div>
	</div>
</template>

<script lang="ts" setup>

import { defineProps } from 'vue'


defineProps( {
    title: {
        type: String,
        default: () => 'О компании'
    },
    description: {
        type: String,
        default: () => 'Крупнейший в Европе аквариум, удаленный от морского побережья. В 80 аквариумах обитает более 12 000 морских и пресноводных обитателей.'
    },
    src: {
        type: String,
        default: () => require( '@/assets/arque.jpg' ) 
    },
    alt: {
        type: String,
        default: () => 'Арка'
    }
} )
    


</script>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as v;
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
		font-size: v.$fz-title;
	}

	&__description {
		max-width: 450px;
		font-weight: 400;
		font-size: v.$fz-subheading;
	}

	&__img {
        animation: border-radius 10s infinite linear;
        animation-delay: 0s;
        max-width: 500px;
        max-height: 500px;
	}

    @keyframes border-radius {
        0% {
            border-bottom-left-radius: 50%;
            border-top-left-radius: 60%;
            border-bottom-right-radius: 60%;
            border-top-right-radius: 40%;
        }
        13% {
            border-bottom-left-radius: 60%;
            border-top-left-radius: 60%;
            border-bottom-right-radius: 70%;
            border-top-right-radius: 70%;
        }
        26% {
            border-bottom-left-radius: 60%;
            border-top-left-radius: 50%;
            border-bottom-right-radius: 40%;
            border-top-right-radius: 60%;
        }
        39% {
            border-bottom-left-radius: 70%;
            border-top-left-radius: 60%;
            border-bottom-right-radius: 70%;
            border-top-right-radius: 60%;
        }
        51% {
            border-bottom-left-radius: 40%;
            border-top-left-radius: 60%;
            border-bottom-right-radius: 60%;
            border-top-right-radius: 50%;
        }
        64% {
            border-bottom-left-radius: 70%;
            border-top-left-radius: 70%;
            border-bottom-right-radius: 60%;
            border-top-right-radius: 60%;
        }
        77% {
            border-bottom-left-radius: 60%;
            border-top-left-radius: 40%;
            border-bottom-right-radius: 50%;
            border-top-right-radius: 60%;
        }
        88% {
            border-bottom-left-radius: 60%;
            border-top-left-radius: 70%;
            border-bottom-right-radius: 60%;
            border-top-right-radius: 70%;
        }
        100% {
            border-bottom-left-radius: 50%;
            border-top-left-radius: 60%;
            border-bottom-right-radius: 60%;
            border-top-right-radius: 40%;
        }
    }
}
</style>
