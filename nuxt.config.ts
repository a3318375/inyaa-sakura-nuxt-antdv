import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL
  },
  modules: [
    '@nuxtjs/dayjs',
  ],
  buildModules: [
	'@unocss/nuxt',
  ],
  css: [
    'ant-design-vue/lib/layout/style/index.less',
    'ant-design-vue/lib/menu/style/index.less',
    'ant-design-vue/lib/button/style/index.less',
    'ant-design-vue/lib/modal/style/index.less',
    'ant-design-vue/lib/list/style/index.less',
    'ant-design-vue/lib/comment/style/index.less',
    'ant-design-vue/lib/avatar/style/index.less',
    'ant-design-vue/lib/form/style/index.less',
    'ant-design-vue/lib/input/style/index.less',
    'ant-design-vue/lib/anchor/style/index.less',
    'ant-design-vue/lib/timeline/style/index.less',
    '~/assets/github.css',
    '~/assets/sakura.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "@layout-body-background": "#f0f2f500",
            "@layout-header-background": "#00152900",
            "@menu-bg": "rgba(255,255,255,0.8)",
          },
          javascriptEnabled: true
        }
      },
    },
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
  },
  dayjs: {
    locales: ['zh-cn'],
    defaultLocale: ['zh-cn'],
    plugins: ['relativeTime'],
  },
})
