<template>
	<div>
		<div class="banner-top">
			<div style="z-index: 1;position: absolute;top: 0;left: 0;width: 100%;">
				<div class="al-container">
					<h2 class="mt-5" style="font-weight: bold;font-size: 30px;color: #fff;">银行解决方案</h2>
					<p style="color: aqua;margin: 3px 0;">VAA先锋音讯录音系统</p>
					<p style="color: aqua;">助力银行提升客户业务办理效率</p>
					<p class="mb-5" style="font-size: 14px;color: #fff;width: 600px;">
						无论营销、服务，还是客户经营，均离不开企业与客户的多渠道沟通互动过程。循环智能为银行提供沟通互动过程的会话分析洞察/客户洞察系统、实时辅助系统等产品和解决方案，为银行业在销售与客户经营环节的数字化转型赋能
					</p>
					<nuxt-link class="yuyue-btn" to="/">预约演示</nuxt-link>
				</div>
			</div>
		</div>
		<div class="al-container">
			<div class="text-slate-500">
				您所在的位置：首页 / 解决方案
			</div>
			<h2 class="section-title mt-28" style="font-size: 1.6rem;">银行客户面临的痛点</h2>
			<div class="grid grid-cols-4 gap-4">
				<div class="td-box">
					<h3 class="title">缺乏个性化营销策略</h3>
					<p>银行机构积累的存量客户非常多，但由于对客户的认知不够，客户分析不够精准，无法制定有效的对客策略进行精准营销，导致客户转化低。</p>
				</div>
				<div class="td-box">
					<h3 class="title">缺乏个性化营销策略</h3>
					<p>银行机构积累的存量客户非常多，但由于对客户的认知不够，客户分析不够精准，无法制定有效的对客策略进行精准营销，导致客户转化低。</p>
				</div>
				<div class="td-box">
					<h3 class="title">缺乏个性化营销策略</h3>
					<p>银行机构积累的存量客户非常多，但由于对客户的认知不够，客户分析不够精准，无法制定有效的对客策略进行精准营销，导致客户转化低。</p>
				</div>
				<div class="td-box">
					<h3 class="title">缺乏个性化营销策略</h3>
					<p>银行机构积累的存量客户非常多，但由于对客户的认知不够，客户分析不够精准，无法制定有效的对客策略进行精准营销，导致客户转化低。</p>
				</div>
			</div>
			<h2 class="section-title mt-28" style="font-size: 1.6rem;">VAA先锋音讯的解决方案</h2>
			<div class="h-100">
				
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.banner-top {
		height: 300px;
		background-image: url('https://cdn.gold404.cn/nuxt/bank-bg.png');
		position: relative;

		&::before {
			z-index: 1;
			content: '';
			width: 100%;
			height: 100%;
			background: linear-gradient(89.96deg, #12205B 25.8%, rgba(18, 32, 91, 0) 95.33%);
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.yuyue-btn {
		background-color: #17e5e0;
		color: #12205B;
		padding: 5px;
		padding: 8px 25px;
		border-radius: 20px;
	}

	.td-box {
		background-color: #fff;
		padding: 1rem;
		box-shadow: 0px 4px 14px 0px #0b28741a;
		overflow: hidden;
		color: #6F748A;
		line-height: 1.75;
		border-radius: 5px;

		.title {
			color: #12205B;
			font-weight: bold;
			font-size: 20px;
			margin: 1rem 0;
		}
	}
</style>
