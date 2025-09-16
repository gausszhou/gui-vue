import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GUI Vue",
  description: "Build my own UI component library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Components', link: '/components' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Layout', link: '/components/layout' },
          { text: 'Button', link: '/components/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gausszhou/gui-vue' }
    ]
  },
  outDir: '../../../dist/gui-vue',
  base: '/gui-vue/'
})
