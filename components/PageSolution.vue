<template>
	<div style="background-color: #eef5ff;padding: 6rem 0 10rem">
		<section class="al-container">
			<!-- <div class="flex justify-between mb-6">
				<div>
					<h2 class="md:text-4xl md:mb-2" style="color: #333;font-weight: 600;">行业解决方案</h2>
					<p class="hidden md:block text-xs md:text-2xl" style="font-style: italic;color: #d6dbe4;">INDUSTRY
						SOLUTIONS</p>
				</div>
				<div class="flex items-center">
					<div class="bar"></div>
					<p class="text-xs md:text-lg text-slate-400">先锋音讯16年品质保证，值得您信赖的伙伴</p>
				</div>
			</div> -->
			<h2 style="text-align: center;font-size: 32px;font-weight: bold;color: #12205B;margin-bottom: 3rem;">行业解决方案</h2>
			<div class="" style="height: 450px;">
				<swiper :slidesPerView="4" :autoplay="{ delay: 5000,}" :loop="true" :navigation="true" :spaceBetween="15" :pagination="{
				      clickable: true,
				    }" :modules="modules" class="mySwiper">
					<swiper-slide v-for="(item,index) in solutionSwiper" :key="index">
						<div class="solution-slide" :style="{'backgroundImage':'url('+item.image+')'}">
							<nuxt-link to="/">
								<h3 class="text-3xl mb-4">{{item.title}}</h3>
								<p class="text-base mb-6">{{item.keyword}}</p>
							</nuxt-link>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</section>
	</div>
</template>

<script setup>
	import {
		Swiper,
		SwiperSlide
	} from "swiper/vue";
	import "swiper/css";
	import "swiper/css/pagination";
	import "swiper/css/navigation";
	import {
		Autoplay,
		Pagination,
		Navigation
	} from "swiper";
	const modules = ref([Autoplay, Pagination, Navigation])
	const {
		data
	} = defineProps(['data'])
	const solutionSwiper = ref([{
			title: '银行',
			keyword: '国有银行、股份制银行、城商行',
			desc: '国有银行、股份制银行、城商行',
			image: 'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220513/a1_img_01.png'
		},
		{
			title: '保险',
			keyword: '人身险、意外险、保险中介、保险代理',
			desc: '人身险、意外险、保险中介、保险代理',
			image: 'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220513/a1_img_02.png'
		},
		{
			title: '房地产',
			keyword: '地产开发商、房产中介',
			desc: '国有银行',
			image: 'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220513/a1_img_03.png'
		},
		{
			title: '证券',
			keyword: '证券咨询公司',
			desc: '证券咨询公司',
			image: 'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220513/a1_img_04.png'
		},
		{
			title: '汽车',
			keyword: '汽车4S店、直营店',
			desc: '国有银行',
			image: 'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220627/car.png'
		},
	])
</script>

<style lang="scss" scoped>
	.solution-slide {
		background-size: 100% 100%;
		height: 100%;
		width: 100%;
		position: relative;
		border-radius: 5px;
		overflow: hidden;
		z-index: 1;
		a{
			display: flex;
			justify-content: flex-end;
			align-items: flex-start;
			flex-direction: column;
			height: 100%;
			width: 100%;
			padding: 1rem;
			color: #fff;
			h3{
				font-weight: bold;
			}
		}
	}

	.solution-slide a::before {
		display: block;
		content: "1111111111";
		width: 100%;
		height: 100%;
		background: rgba(4, 133, 226, 0.51);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 4;
		transition: all .36s;
		opacity: 0;
	}
</style>
