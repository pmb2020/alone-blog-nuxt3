<template>
	<header class="header">
		<div>
			Logo
		</div>
		<nav>
			<ul class="header-ul">
				<li v-for="(navItem,index) in navLists" :key="index">
					<nuxt-link class="nav-a" @click="navClick(index)" :class="{'nav-active':navIndex==index}"
						:to="navItem.link">{{navItem.name}}</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
	<div class="header-white"></div>
</template>

<script setup>
	const navIndex = ref(0)
	const navLists = ref([{
			name: '首页',
			link: '/'
		},
		{
			name: '产品中心',
			link: '/'
		},
		{
			name: '解决方案',
			link: '/'
		},
		{
			name: '用户案例',
			link: '/'
		},
		{
			name: '新闻中心',
			link: '/'
		},
		{
			name: '关于我们',
			link: '/'
		},
	])
	const navClick = (index) => {
		localStorage.setItem('navIndex', index)
		navIndex.value = index
	}
	onMounted(() => {
		navIndex.value = localStorage.getItem('navIndex') || 0
	})
</script>

<style lang="scss">
	.header {
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

	.header-white {
		height: $header-height;
	}

	.header-ul {
		display: flex;
		color: #333;
	}

	.header-ul li {
		padding: 2rem;
	}

	.nav-a {
		padding: 1.7rem 4px;
	}

	.nav-a:hover {
		color: $primary-color;
		border-bottom: 2px solid $primary-color;
	}

	.nav-active {
		color: $primary-color;
		border-bottom: 2px solid $primary-color;
	}
</style>
