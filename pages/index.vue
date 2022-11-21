<template>
	<div>
		<Head>
			<Title>{{title}}</Title>
			<Meta name="description" :content="title" />
			<Style type="text/css" children="body { background-color: green; }" />
		</Head>
		<AloneBanner :data='bannerList' />
		<!-- 新闻中心 -->
		<div class="p-12" style="background-color: #fff;">
			<section class="al-container">
				<div class="flex justify-between mb-10">
					<div>
						<h2 class="text-4xl mb-2" style="color: #333;font-weight: 600;">新闻中心</h2>
						<p style="font-style: italic;color: #d6dbe4;font-size: 18px;">NEWS CENTER</p>
					</div>
					<div class="flex items-center">
						<div class="bar"></div>
						<p class="text-lg text-slate-400">先锋音讯16年品质保证，值得您信赖的伙伴</p>
					</div>
				</div>
				<div class="flex justify-between">
					<div class="w-1/2">
						<img class="rounded-lg w-full" src="http://www.pioneerw.com/3.0/style/image/4.png" alt="">
					</div>
					<div class="w-1/2 ml-10">
						<ul class="news-list-ul">
							<li class="mb-10" v-for="(newsItem,index) in newsList" :key="index">
								<h3>
									<Nuxt-link class="text-lg" to="/about">
										<span class="" style="background-color: #999;color: #fff;font-weight: normal;padding: 2px 12px;font-size: 1rem;margin-right: 5px;">{{index+1}}</span>
										{{newsItem.title}}
										<span style="color: #999;float: right;font-weight: normal;font-size: 1rem;">{{newsItem.date}}</span>
									</Nuxt-link>
								</h3>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
		<!-- 产品中心 -->
		<section class="al-container mx-auto mt-12">
			<div class="flex justify-between mb-10">
				<div>
					<h2 class="text-4xl mb-2" style="color: #333;font-weight: 600;">产品中心</h2>
					<p style="font-style: italic;color: #d6dbe4;font-size: 18px;">PRODUCT CENTER</p>
				</div>
				<div class="flex items-center">
					<div class="bar"></div>
					<p class="text-lg text-slate-400">先锋音讯16年品质保证，值得您信赖的伙伴</p>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-10">
				<div>
					<img src="http://www.pioneerw.com/html/ipDianHua/3.jpg" alt="">
				</div>
				<div>
					<img src="http://www.pioneerw.com/html/ipDianHua/3.jpg" alt="">
				</div>
				<div>
					<img src="http://www.pioneerw.com/html/ipDianHua/3.jpg" alt="">
				</div>
				<div>
					<img src="http://www.pioneerw.com/html/ipDianHua/3.jpg" alt="">
				</div>
				<div>
					<img src="http://www.pioneerw.com/html/ipDianHua/3.jpg" alt="">
				</div>
				<div>
					<img src="http://www.pioneerw.com/html/ipDianHua/3.jpg" alt="">
				</div>
			</div>
		</section>
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
	const newsList = ref([{
			title: '先锋AI转写一体云录音系统',
			date: '2022-11-14 16:44'
		},
		{
			title: '2022年人工智能领域发展七大趋势',
			date: '2022-11-12 13:12'
		},
		{
			title: '先锋云录音系统助力铁路行业对讲机、售票窗口录音',
			date: '2022-11-12 13:12'
		},
		{
			title: '先锋音讯应邀参加  2019第四届上海国际人工智能展',
			date: '2022-11-12 13:12'
		},
		{
			title: '先锋音讯中标广铁集团 VAA技术融入铁路行业专网',
			date: '2022-11-12 13:12'
		},
	])
</script>

<style>
</style>
