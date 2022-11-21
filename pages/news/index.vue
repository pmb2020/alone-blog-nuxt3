<template>
	<div class="news">
		<PageTop title="新闻中心" />
		<div class="al-container mx-auto mt-10" style="min-height: 1000px;">
			<div class="text-slate-500">
				您所在的位置：首页 / 新闻中心
			</div>
			<div class="mt-10">
				<ul>
					<li class="flex mb-20" v-for="(newsItem,index) in newsList" :key="index">
						<div class="w-1/4">
							<nuxt-link :to="'/news/'+newsItem.id">
								<img class="rounded-lg w-full h-60" :title="newsItem.title" :src="newsItem.image" >
							</nuxt-link>
						</div>
						<div class="w-3/4 ml-10">
							<h3 class="new-title">
								<nuxt-link :to="'/news/'+newsItem.id">{{newsItem.title}}</nuxt-link>
							</h3>
							<!-- <p class="text-slate-400">日期：{{newsItem.date}}</p> -->
							<p class="text-slate-400">{{newsItem.desc}}</p>
						</div>
					</li>
				</ul>
			</div>
			<AlonePagination />
		</div>
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	const newsList = ref([{
			id:1,
			title: '先锋AI转写一体云录音系统',
			image:'http://www.pioneerw.com/3.0/style/image/4.png',
			desc:'先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统',
			date: '2022-11-14 16:44'
		},
		{
			id:2,
			title: '2022年人工智能领域发展七大趋势',
			image:'http://www.pioneerw.com/3.0/style/image/3.png',
			desc:'先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统',
			date: '2022-11-12 13:12'
		},
		{
			id:3,
			title: '先锋云录音系统助力铁路行业对讲机、售票窗口录音',
			image:'http://www.pioneerw.com/3.0/style/image/2.png',
			desc:'先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统',
			date: '2022-11-12 13:12'
		},
		{
			id:4,
			title: '先锋音讯应邀参加  2019第四届上海国际人工智能展',
			image:'http://www.pioneerw.com/3.0/style/image/1.png',
			desc:'先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统',
			date: '2022-11-12 13:12'
		},
		{
			id:5,
			title: '先锋音讯中标广铁集团 VAA技术融入铁路行业专网',
			image:'http://www.pioneerw.com/3.0/style/image/5.png',
			desc:'先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统先锋AI转写一体云录音系统',
			date: '2022-11-12 13:12'
		},
	])
</script>

<style lang="scss">
	.news-top{
		width: 100%;
		height: $page-top-item-height;
		background-image: url("~/assets/images/bg-top.png");
		background-size: 100% 100%;
		display: flex;
		align-items: center;
	}
</style>