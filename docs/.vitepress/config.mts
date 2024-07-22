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
      { text: 'Components', link: '/component' },
      // { text: 'State_management', link: '/state' },
      { text: 'Router', link: '/router' },
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
        text: 'Components',
        items: [
          { text: 'Component', link: '/component' },
          { text: 'Table', link: '/component-table' },
          { text: 'Button', link: '/component-button' },
          { text: 'Pagination', link: '/component-pagination' },
          { text: 'Notification', link: '/component-notification' },
          { text: 'Form', link: '/component-form' },
          { text: 'Charts', link: '/component-chart' },
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
        text: 'Usage',
        items: [
          { text: 'Authentication', link: '/authentication' },
          { text: 'Components', link: '/components' },
          { text: 'Pages', link: '/pages' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
