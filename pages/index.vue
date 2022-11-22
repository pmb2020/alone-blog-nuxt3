<template>
	<div>
		<Head>
			<Title>{{title}}</Title>
			<Meta name="description" :content="title" />
			<!-- <Style type="text/css" children="body { background-color: green; }" /> -->
		</Head>
		<AloneBanner class="h-44 md:h-auto" :data='bannerList' />
		<p class="text-3xl md:text-green-500 m-20">这是nuxt3+tailwindcss3新项目</p>
		<AlonePagination />
		<nuxt-link to="/about">关于我们</nuxt-link><br>
		<nuxt-link to="/info/2">进入详情页</nuxt-link>
	</div>
</template>

<script setup>
	const title = ref('alone-admin企业官网')
	const bannerList = ref([{
			title: '这是一个title',
			image: 'http://www.pioneerw.com/res/images/banner/213525321.jpg'
		},
		{
			title: '这是一个title',
			image: 'http://www.pioneerw.com/res/images/banner/213525321.jpg'
		},
		{
			title: '这是一个title',
			image: 'http://www.pioneerw.com/res/images/banner/213525321.jpg'
		},
	])
</script>

<style>
</style>
