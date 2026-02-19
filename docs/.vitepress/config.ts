import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ClusterCut",
  description: "Cross-platform clipboard synchronization",
  base: '/',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/docs/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/docs/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/docs/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/docs/site.webmanifest' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is ClusterCut?', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'File Transfers', link: '/file-transfers' },
          { text: 'History', link: '/history' },
          { text: 'Settings', link: '/settings' },
          { text: 'Quick Access', link: '/quick-access' },
          { text: 'Remote Clients', link: '/remote-clients' },
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/keithvassallomt/ClusterCut' }
    ]
  }
})
