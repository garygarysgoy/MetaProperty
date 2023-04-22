<template>
	<div id="app">
		<NavBar />
		<RouterView />
	</div>
</template>

<script setup>
import NavBar from '@/components/Layout/NavBar.vue'
</script>

<style>
@import 'bulma/css/bulma.css';

.hero {
	margin-top: 100px;
	background-color: black;
}
body {
	background-color: black;
}
</style>