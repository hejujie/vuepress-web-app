const helper = require('./../helper/')

module.exports = {
  repo: 'SteiensGate/vuepress-web-app',
  editLinks: false,
  docsDir: './dist',
  algolia: {
    apiKey: 'd27b4f3d5996aaba8b141e383ef6340a',
    indexName: 'prod_JavaBlog',
    inputSelector: '',
    debug: false
  },
  comment: {
    clientID: '404a8bb0a2635bb8351c',
    clientSecret: 'b2360e85d6ad8f69bd64ced134782d7a16b5af88',
    repo: 'vuepress-web-app',
    owner: 'SteiensGate',
    admin: ['SteiensGate'],
    perPage: 5,
    distractionFreeMode: false // Facebook-like distraction free mode
  },
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: 'Blog',
          link: '/blog/'
        },
        {
          text: 'Reinforcement Learning',
          items: [{ text: 'Single Agent', link: '/single-agent/' }, { text: 'Multi Agent', link: '/multi-agent/' }]
        },
        {
          text: 'Supervised Learning',
          link: '/supervised-learning/'
        },
        {
          text: 'Unsupervised Learning',
          link: '/unsupervised-learning/'
        },
        {
          text: '更多',
          items: [
            { text: '设计模式', link: '/design-pattern/' },
            { text: '数据结构', link: '/data-structure/' },
            { text: '网络基础', link: '/network/' },
            { text: 'LeetCode', link: '/leetcode/' }
          ]
        }
      ],
      sidebar: {
        '/blog/': helper.utils.genSidebarConfig('', './docs/blog/', false),
        '/data-structure/': helper.utils.genSidebarConfig('', './docs/data-structure/', false),
        '/reinforcement-learning/': helper.utils.genSidebarConfig('', './docs/reinforcement-learning/', false),
        '/single-agent/': helper.utils.genSidebarConfig('', './docs/single-agent/', false),
        '/multi-agent/': helper.utils.genSidebarConfig('', './docs/multi-agent/', false),
        '/unsupervised-learning/': helper.utils.genSidebarConfig('', './docs/unsupervised-learning/', false),
        '/leetcode/': helper.utils.genSidebarConfig('', './docs/leetcode/', false),
        '/supervised-learning/': helper.utils.genSidebarConfig('', './docs/supervised-learning/', false),
        '/network/': helper.utils.genSidebarConfig('', './docs/network/', false)
      }
    },
    '/en/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'Application',
          link: '/en/application/'
        }
      ]
    }
  }
}
