<template>
	<div class="al-pagination">
		<ul class="al-pagination-ul">
			<li>上一页</li>
			<li :class="{'active':index==page}" v-for="index in 5">
				<nuxt-link @click="page=index" :to="'?page='+index">{{index}}</nuxt-link>
			</li>
			<li>下一页</li>
		</ul>
	</div>
</template>

<script setup>
	const route = useRoute()
	const page = ref(route.query.page || 1)
	const pageSize = ref(20)
</script>

<style lang="scss">
	.al-pagination-ul {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		color: #333;
		li {
			cursor: pointer;
			margin: 1rem 0.5rem;
			background-color: #fff;
			a{
				display: inline-block;
				padding: 0.1rem 1.2rem;
			}
		}
		.active {
			color: #fff;
			background-color: #111;
		}
	}
</style>
