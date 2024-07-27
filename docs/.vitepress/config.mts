import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Echose Admin",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/get-start' },
    ],

    sidebar: [
      {
        text: 'Screenshots',
        link: '/screenshots'
      },
      {
        text: 'Prologue',
        items: [
          { text: 'Release Notes', link: '/releases.html' },
          { text: 'File Structures ', link: '/structures.html' },
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation.html' },
          { text: 'Configuration', link: '/configuration.html' },
        ]
      },
      {
        text: 'Routing',
        items: [
          { text: 'Route', link: '/route.html' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Input', link: '/input.html' },
          { text: 'Table', link: '/table.html' },
          { text: 'File upload', link: '/file-upload.html' },
          { text: 'Alert message', link: '/alert.html' },
          { text: 'Confirm dialog', link: '/confirm.html' },
          { text: 'Notification', link: '/notification.html' },
          { text: 'Icon', link: '/icon.html' },
          { text: 'Card box', link: '/card-box.html' },
          { text: 'Image', link: '/image.html' },
          { text: 'Chart', link: '/chart.html' },
        ]
      },
      {
        text: 'Layout',
        items: [
          { text: 'Profile', link: '/profile.html' },
          { text: 'Login', link: '/login.html' },
          { text: 'Register', link: '/regitser.html' },
          { text: 'Forgot password', link: '/forgot-password' },
          { text: 'Blank page', link: '/blank-page' },
          { text: '404', link: '/404.html' },
          { text: 'Error 500', link: '/500.html' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
