<template>
	<div class="about">
		<PageTop title="关于我们" />
		<div class="al-container mx-auto mt-12">
			<article class="leading-9">
				<h3 class="text-4xl mb-6 font-semibold">公司简介</h3>
				<p>先锋音讯公司，于2006年8月在北京海淀区中关村高科技园区创立。先锋音讯始终坚持专心、专一、专注于AI技术研发与客户服务；先后荣获“国家高新技术企业”、“北京中关村科技企业家协会副会长单位”等称号，拥有专利及软件著作权证书20余项，获得ISO质量管理体系认证。
				</p>
				<p>公司在语音采集、跨地区集中云管理、语音大数据分析、AI核心算法等领域拥有国内领先的技术方案和专家团队，相关产品在党政机关、公检法司系统、交通、电力、能源、金融、证券、银行、保险、教育、医疗、物流、旅游、餐饮、房地产、互联网、广告媒体等领域得到了广泛应用，客户超过30多万家，产品远销东盟六国，印度、俄罗斯、非洲、台湾、香港等地区。
				</p>
				<p>先锋音讯作为中国语音数据采集、统计、分析领域的开拓者，以人工智能+大数据的方式，通过不断更新和迭代，结合ASR、NLP、机器学习算法等先进技术，打造出适用于企业管理全流程的AI产品矩阵和解决方案，为政府机关和企业提供“办公云语音数据分析平台”、“AI客服质检”等人工智能服务。
				</p>
			</article>
		</div>
	</div>
</template>

<script setup>
	useHead({
		title:'关于我们 - 企业官网',
		meta:[
			{name:'description',content:'关于我们页面'}
		],
		bodyAttrs:{
			class:'aboutkkk'
		},
		script:[
			{children:'console.log(\'关于我们\')'}
		]
	})
</script>

<style lang="scss">
	.about{
		min-height: 1200px;
		article p{
			text-indent: 2em;
			margin-bottom: 15px;
			color: #555;
		}
	}
</style>
