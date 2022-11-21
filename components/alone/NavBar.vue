<template>
	<nav>
		<ul class="nav">
			<li v-for="(nav,index) in data" :key="index">
				<div class="nav-item">
					<div class="nav-item-title">
						<nuxt-link  @click="navClick(index)" :class="{'active':navIndex==index}" :to="nav.link">{{nav.name}}</nuxt-link>
					</div>
					<!-- 下拉菜单 -->
					<div v-if="nav.children" class="dropdown-content">
						<div class="dropdown-menu">
							<div v-for="(navChildren,navChildrenIndex) in nav.children" class="menuItem" :key="navChildrenIndex">
								<nuxt-link :to="navChildren.link">{{navChildren.name}}</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</nav>
</template>

<script setup>
	const {data} = defineProps(['data'])
	const navIndex = ref(0)
	onMounted(() => {
		navIndex.value = localStorage.getItem('navIndex') || 0
	})
	const navClick = (index) => {
		localStorage.setItem('navIndex', index)
		navIndex.value = index
	}
</script>

<style lang="scss" scoped>
	.nav {
		position: relative;
		display: flex;
		width: 100%;
		height: 80px;
		line-height: 80px;
		.nav-item {
			position: relative;
			margin: 0 20px;
			cursor: pointer;
			// transition: all 0.3s linear;
			a{
				display: block;
			}
			.nav-item-title {
				position: relative;
				display: block;
				height: inherit;
				width: inherit;
				.active{
					color: $primary-color;
					border-bottom: 2px solid $primary-color;
				}
				&::before {
					content: "";
					position: absolute;
					bottom: 0;
					left: -5px;
					right: -5px;
					height: 2px;
					// width: 100%;
					background-color: $primary-color;
					transform: scale(0);
					transition: all 0.4s linear;
				}

				&:hover {
					color: $primary-color;
					&::before {
						transform: scale(1);
					}
				}
			}

			&:hover .dropdown-content {
				height: 300px;
			}
		}

		// 下拉菜单
		.dropdown-content {
			position: absolute;
			top: 80px; // 为导航栏高度
			left: 0; // 设置为0, 不然会直接定位到父元素下方
			// width: 300px;
			height: 0; // 下拉初始高度
			overflow: hidden;
			transition: 0.6s;

			.dropdown-menu {
				padding: 10px 8px 15px;
				color: #fff;
				background-color: #fff;
				border-radius: 4px;

				.menuItem {
					width: 100%;
					height: 42px;
					white-space: nowrap;
					padding: 0 16px;
					font-size: 16px;
					line-height: 42px;
					color: #333;
					cursor: pointer;
					transition: all 0.3s ease-in-out;
					border-radius: 4px;

					&:hover {
						background-color: #ccc;
					}
				}
			}
		}
	}
</style>
