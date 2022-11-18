<template>
	<div>
		<Head>
			<Title>{{title}}</Title>
			<Meta name="description" :content="title" />
			<Style type="text/css" children="body { background-color: green; }" />
		</Head>
		<p class="text-3xl md:text-green-500 m-20">这是nuxt3+tailwindcss3新项目</p>
		<nuxt-link to="/about">关于我们</nuxt-link><br>
		<nuxt-link to="/info/2">进入详情页</nuxt-link>
	</div>
</template>

<script setup>
	const title = ref('alone-admin企业官网')
</script>

<style>
</style>
