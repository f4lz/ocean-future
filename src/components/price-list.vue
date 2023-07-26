<template>
	<div class="prices__box container" v-for="price in priceList.prices" :key="price.id">
		<p class="ticket__type">{{ price.type }}</p>
		<span class="ticket__price">{{ price.price }} ₽</span>
	</div>
</template>

<script lang="ts" setup>

import { priceListStore } from '@/stores/prices'
import { onMounted } from 'vue';

const priceList = priceListStore()

onMounted ( () => { priceList.addPriceList() } )

console.log( priceList )


</script>

<style lang="scss" scoped>
.prices__box {
	display: flex;
	justify-content: space-between;
	max-width: 620px;
	width: 100%;
	align-items: center;
}
.ticket__type {
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	padding: 10px;
}

.ticket__price {
	display: flex;
	justify-content: center;
	align-items: end;
	flex-direction: column;
}
</style>