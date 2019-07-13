const themeConfig = require('./themeConfig')
const buildConfig = require('./buildConfig')

module.exports = {
  base: '/',
  // 存放“生成静态的 HTML 文件”路径;
  dest: './docs/dist',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times'
        }
      }
    ],
    [
      'latex' // or 'vuepress-plugin-latex'
    ]
  ],
  ga: 'UA-134712641-1',
  serviceWorker: true,
  updatePopup: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '何巨杰的博客',
      description: 'Time waits for no one.',
      serviceWorker: {
        updatePopup: {
          message: '🎉 发现新内容可用 ✏️',
          buttonText: '刷新'
        }
      }
    },
    '/en/': {
      lang: 'en-US',
      title: 'LOVE JADE HOME',
      description: 'Wherever you go， whatever you do， I will be right here waiting for you.',
      serviceWorker: {
        updatePopup: {
          message: '🎉 New Content Is Available. ✏️',
          buttonText: 'Refresh'
        }
      }
    }
  },
  configureWebpack: buildConfig.configureWebpack,
  themeConfig,
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-task-checkbox'))
    }
  }
}
