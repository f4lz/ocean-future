<template>
    <default-layout>
        <section class="banner-show">
            <div class="banner-show__wrapper container">
                <banner
				headding="НЕВЕРОЯТНОЕ ВОДНОЕ ШОУ"
				description="Не пропустите это грандиозное событие"
				/>
            </div>
        </section>
        <section class="about">
            <div class="about__wrapper container">
                <about
				title="Восхитительные всплески эмоций"
				description="Водное шоу — отличная возможность разнообразить досуг, сменить обстановку и наполнить жизнь новыми впечатлениями! Репертуар Оceanfuture регулярно обновляется и уже насчитывает 6 уникальных шоу. 
				Здесь на одной водной сцене встречаются сотни артистов всевозможных жанров: актёры, певцы, акробаты, фигуристы"
				:src="'./src/assets/show.jpg'"
				alt="Дельфин"
				className="show__img"
				/>
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
    },

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

.about__wrapper {
	margin-bottom: 30px;
}

</style>