import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mohd Abdul Subhan",
  description: "Portfolio of Mohd Abdul Subhan - Full Stack Developer",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Achievements', link: '/achievements' },
      { text: 'Testimonials', link: '/testimonials' },
      { text: 'Blog', link: 'https://dev.to/mohdabdulsubhan' }, // Placeholder
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Portfolio',
        items: [
          { text: 'Projects', link: '/projects/' },
          { text: 'Achievements', link: '/achievements' },
          { text: 'Testimonials', link: '/testimonials' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/itechsubhan' },
      { icon: 'instagram', link: 'https://www.instagram.com/mohd_abdul_subhan/' },
      { icon: 'x', link: 'https://x.com/m_a_subhan' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohdabdulsubhan' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Mohd Abdul Subhan'
    }
  }
})
