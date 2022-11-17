<template>
	<div>
		我的id是
		<p>{{ $route.params.id }}</p>
	</div>
</template>

<script setup>
	const route = useRoute()
	console.log('id参数为：'+route.params.id)
</script>

<style>
</style>