<template>
	<div class="">
		<PageTop title="用户案例" />
		<div class="al-container">
			<div class="text-slate-500">
				您所在的位置：首页 / 用户案例
			</div>
			<div class="mt-6">
				<div class="mb-10 md:mb-16" v-for="(pItem,pIndex) in data" :key="pIndex">
					<h3 class="example-title" style="text-align: center;">{{pItem.name}}</h3>
					<ul class="grid grid-cols-3 md:grid-cols-6 gap-4">
						<li class="shadow-lg rounded-md mb-4" v-for="(item,index) in pItem.children" :key="index">
							<img v-if="item.logo" class="w-full" :src="item.logo" :title="item.name" :alt="item.name">
							<p v-else>{{item.name}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const data = ref([
		{
			'name':'银行',
			'children':[
				{name:'中国银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'中国人民银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220705/zhaoxingnew.png'},
				{name:'中国工商银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'中国建设银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.4shanghaiyinxing.png'},
				{name:'中国交通银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.5weizhongyinxing.png'},
				{name:'中国招商银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.6renbaocaixian.png'},
				{name:'中国农业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.1taipingrenshou.png'},
				{name:'中国民生银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.1taikangrenshou.png'},
				{name:'中国商业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'光大银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.4daduhuirenshou.png'},
				{name:'中信银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.3zhongxinyinxing.png'},
				{name:'江苏银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220705/wankenew.png'},
				{name:'广东发展银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220928/3.2zhaoshangshekou.png'},
				{name:'长沙农村商业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220929/pastdonghang.png'},
				{name:'韩国国民银行银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220928/5.5niwodai.png'},
			],
		},
		{
			'name':'证券',
			'children':[
				{name:'中国银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'中国人民银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220705/zhaoxingnew.png'},
				{name:'中国工商银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'中国建设银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.4shanghaiyinxing.png'},
				{name:'中国交通银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.5weizhongyinxing.png'},
				{name:'中国招商银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.6renbaocaixian.png'},
				{name:'中国农业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.1taipingrenshou.png'},
				{name:'中国民生银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.1taikangrenshou.png'},
				{name:'中国商业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'光大银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.4daduhuirenshou.png'},
				{name:'中信银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.3zhongxinyinxing.png'},
				{name:'江苏银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220705/wankenew.png'},
				{name:'广东发展银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220928/3.2zhaoshangshekou.png'},
				{name:'长沙农村商业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220929/pastdonghang.png'},
				{name:'韩国国民银行银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220928/5.5niwodai.png'},
			],
		},
		{
			'name':'保险行业',
			'children':[
				{name:'中国银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'中国人民银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220705/zhaoxingnew.png'},
				{name:'中国工商银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'中国建设银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.4shanghaiyinxing.png'},
				{name:'中国交通银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.5weizhongyinxing.png'},
				{name:'中国招商银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.6renbaocaixian.png'},
				{name:'中国农业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.1taipingrenshou.png'},
				{name:'中国民生银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.1taikangrenshou.png'},
				{name:'中国商业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.1gongxing.png'},
				{name:'光大银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/2.4daduhuirenshou.png'},
				{name:'中信银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220706/1.3zhongxinyinxing.png'},
				{name:'江苏银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220705/wankenew.png'},
				{name:'广东发展银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220928/3.2zhaoshangshekou.png'},
				{name:'长沙农村商业银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220929/pastdonghang.png'},
				{name:'韩国国民银行银行',logo:'https://www.rcrai.com/Public/Uploads/uploadfile/images/20220928/5.5niwodai.png'},
			],
		}
	])
</script>

<style lang="scss" scoped>
	.example-ul{
		display: flex;
	}
	.example-title{
		text-align: center;
		font-size: 28px;
		font-weight: bold;
		color: #12205B;
		margin-bottom: 1rem;
	}
</style>