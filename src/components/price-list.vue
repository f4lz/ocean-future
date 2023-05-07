<template>
	<div class="prices__box container" v-for="price in prices" :key="price.id">
		<p class="ticket__type">{{ price.text }}</p>
		<span class="ticket__price">{{ price.price }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import type { PropType } from 'vue'
import type { priceList } from '@/types/main'

export default defineComponent( {
	props: {
		prices: {
			type: Array as PropType<priceList[]>,
			default: () => []
		}
	},

	setup () {}
} )
</script>

<style lang="scss" scoped>
.prices__box {
	display: flex;
	justify-content: space-between;
	width: 620px;
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