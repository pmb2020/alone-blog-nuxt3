<template>
	<div class="page-top" :style="style">
		<h2>{{props.title}}</h2>
	</div>
</template>

<script setup>
	const props = defineProps({
		title: {
			type:String,
		},
		height:{
			type:String,
			default: '350px'
		}
	})
	const style = ref({
		height:props.height,
	})
</script>

<style scoped>
	.page-top{
		width: 100%;
		height: $page-top-item-height;
		background-image: url("~/assets/images/bg-top.png");
		background-size: 100% 100%;
		display: flex;
		align-items: center;
	}
	.page-top h2{
		color: #fff;
		font-size: 3.5rem;
		margin-left: 10%;
	}
</style>