<template>
	<div class="product mb-16">
		<PageTop title="产品中心" />
		<div class="al-container md:mt-9">
			<div>
				<ul class="category-ul">
					<li class="mb-2 mr-3" :class="{'active':categoryIndex==index}" v-for="(item,index) in categories" @click="categoryClick(index)" :key="index">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="mt-3 md:mt-10">
				<div class="grid grid-cols-2 md:grid-cols-4 gap-10">
					<div v-for="(item,index) in productList" :key="index">
						<img class="h-44 md:h-64 rounded-lg" :src="item.image" :title="item.title" :alt="item.title">
						<p class="mt-1">{{item.title}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const categoryIndex = ref(0)
	const categories = ref([
		{id:1,name:'全部'},
		{id:2,name:'录音仪'},
		{id:3,name:'录音盒'},
		{id:4,name:'录音卡'},
		{id:4,name:'IP电话'},
		{id:5,name:'手机录音'},
		{id:6,name:'智能工牌'},
	])
	const productList = ref([
		{id:1,title:'先锋产品一box10',image:'http://www.pioneerw.com/html/ipDianHua/3.jpg'},
		{id:1,title:'box10',image:'http://www.pioneerw.com/html/ipDianHua/2.jpg'},
		{id:1,title:'box10',image:'http://www.pioneerw.com/html/ipDianHua/1.jpg'},
		{id:1,title:'智能双模IP录音',image:'http://www.pioneerw.com/html/ipDianHua/4.jpg'},
		{id:1,title:'先锋产品一-测试',image:'http://www.pioneerw.com/html/ipDianHua/1.jpg'},
	])
	const categoryClick = (index)=>{
		categoryIndex.value = index
	}
</script>

<style lang="scss" scoped>
	.category-ul{
		display: flex;
		flex-wrap: wrap;
		li{
			cursor: pointer;
			padding:0.3rem 1rem;
			border-radius: 5px;
		}
		.active{
			background-color: $primary-color;
			color: #fff;
		}
	}
</style>