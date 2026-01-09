/** @type {import('vitepress').UserConfig} */
const config = {
  title: 'dock-next',
  description: '基于 Vue 3 和 Element Plus 的 UI 组件库',
  base: '/dock-next/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' }
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
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: '二维码', link: '/components/qrcode' },
            { text: '链接展示器', link: '/components/LinkViewer' },
            { text: '背景颜色选择器', link: '/components/BgSelector' },
            { text: 'svg 图标', link: '/components/SvgIcon' },
            { text: '标题栏', link: '/components/TitleBar' }
          ]
        },
        {
          text: '拓展组件',
          items: [
            { text: 'SKU 商品规格', link: '/components/sku' },
            { text: '高级查询', link: '/components/AdvancedQuery' },
            { text: '位置选择器', link: '/components/PositionSelector' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/santiago-fan/dock-next' }
    ]
  },
  vite: {
    optimizeDeps: {
      exclude: ['vitepress']
    }
  }
}

module.exports = config