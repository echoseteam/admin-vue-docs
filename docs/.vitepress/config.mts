import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Screenshots', link: '/screenshots' },
      { text: 'Getting Started', link: '/installation' },
      { text: 'Theme development', link: '/get-start' },
      // { text: 'Components', link: '/component' },
      // { text: 'State_management', link: '/state' },
      // { text: 'Router', link: '/router' },
      // { text: 'Api Integration', link: '/api' },
      // { text: 'Test', link: '/test' },
      // { text: 'Deployment', link: '/deployment' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Screenshots',
        link: '/screenshots'
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Install using command line', link: '/command-line' },
        ]
      },
      {
        text: 'Theme development',
        items: [
          { text: 'Getting started', link: '/get-start' },
          { text: 'Plugin structure', link: '/plugin-structure' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Component', link: '/component' },
        ]
      },
      {
        text: 'State Management',
        items: [
          { text: 'State_management', link: '/state' },
        ]
      },
      {
        text: 'Routing',
        items: [
          { text: 'Router', link: '/router' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Api Integration', link: '/api' },
        ]
      },
      {
        text: 'Testing',
        items: [
          { text: 'Test', link: '/test' },
        ]
      },
      {
        text: 'Deployment',
        items: [
          { text: 'Deployment', link: '/deployment' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'Authentication', link: '/authentication' },
          { text: 'Components', link: '/components' },
          { text: 'Pages', link: '/pages' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
