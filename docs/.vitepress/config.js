/** @type {import('vitepress').UserConfig} */
const config = {
  title: 'dock-plus',
  description: 'MinkLink 基于 Vue 3 和 Element Plus 的 UI 业务组件库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: '/dock-plus/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduce' },
      { text: '组件', link: '/component/index' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '介绍', link: '/guide/introduce' },
            { text: '快速上手', link: '/guide/start' },
            { text: '开发指南', link: '/guide/contribute' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            { text: '安装', link: '/component/index' },
            { text: '二维码', link: '/component/qrcode' },
            { text: '链接展示器', link: '/component/LinkViewer' },
            { text: '背景颜色选择器', link: '/component/BgSelector' },
            { text: '标题栏', link: '/component/TitleBar' },
            { text: '文件组', link: '/component/FileGroup' },
            { text: '文件列表', link: '/component/RmFileList' }
          ]
        },
        {
          text: '拓展组件',
          items: [
            { text: 'SKU 商品规格', link: '/component/Sku' },
            { text: '高级查询', link: '/component/AdvancedQuery' },
            { text: '位置选择器', link: '/component/PositionSelector' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/santiago-fan/dock-plus' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present MindLink Co., Ltd. All rights reserved.'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '1DR5PHEA4D',
        apiKey: 'acfda78bab176c4cc8b49d512a6797c6',
        indexName: 'dock-plus',
      },
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['vitepress']
    }
  }
}

module.exports = config