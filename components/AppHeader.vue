<template>
	<header class="header">
		<div>
			<img class="h-16" src="http://www.pioneerw.com/img/blogo.jpg" alt="">
		</div>
		<AloneNavBar :data="navList" />
	</header>
	<div class="header-white"></div>
</template>

<script setup>
	const navIndex = ref(0)
	const navList = ref([
		{name:'首页',link:'/'},
		{name:'产品中心',link:'/product',children:[
			{name:'产品1号',link:'/'},
			{name:'产品2号',link:'/'},
			{name:'产品3号',link:'/'},
		]},
		{name:'解决方案',link:'/solution'},
		{name:'用户案例',link:'/example'},
		{name:'新闻中心',link:'/news'},
		{name:'关于我们',link:'/about'},
	])
</script>

<style lang="scss">
	.header {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		z-index: 999;
		padding: 0 10%;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: $header-height;
	}
	.header-white{
		height: $header-height
	}
</style>
