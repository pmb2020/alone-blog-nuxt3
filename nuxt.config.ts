// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	tailwindcss: {

	},
	app: {
		head: {
			charset: 'utf-8',
			title: 'nuxt3项目实战之alone-blog',
			meta: [
				{ name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
				{ name: 'description', content: 'nuxt3项目实战之alone-blog：nuxt3+tailwindcss' }
			]
		}
	},
	css: [
		'~/assets/style/base.scss',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/style/variable.scss" as *;'
				}
			}
		}
	}
})
