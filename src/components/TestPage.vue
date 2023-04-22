<script setup>
// import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import NavBar1 from '@/components/Layout/NavBar1.vue'

const counter = useCounterStore()

</script>

<template>
	<NavBar1 />

	<div class="big">
		<div @click="counter.count++">
			{{ counter.count }}
		</div>

	</div>
</template>

<style>
.big {
	margin-top: 100px;
	color: white;
	font-size: 500%;
}
</style>