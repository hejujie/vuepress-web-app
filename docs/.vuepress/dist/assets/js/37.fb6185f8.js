;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    404: function(t, s, a) {
      'use strict'
      a.r(s)
      var n = a(22),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('p', [
                  t._v('查阅'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://nicelinks.site/post/5b5fb5bc615bf842b609105f',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('快应用'), a('OutboundLink')],
                    1
                  ),
                  t._v('开发文档，可以知道官方提供了'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://doc.quickapp.cn/features/system/fetch.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('数据请求'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    '接口；对于如何使用，文档中也给出了简单的说明和代码示例，但很显然，这在实际项目中，不够优雅且更不高效，所以需要对其进行再封装，使得可以大幅提升开发效率，同时也令整个代码优雅，以便于维护。所以在此篇文章的存在，旨在于讨论下'
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://quickapp.lovejade.cn/how-to-elegantly-handle-quickapp-request',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('如何优雅处理「快应用」数据请求'), a('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ]),
                t._v(' '),
                a('p', [
                  a('img', {
                    attrs: {
                      src: 'https://image.nicelinks.site/quickapp-elegantly-fetch.jpeg',
                      alt: '如何优雅处理快应用数据请求'
                    }
                  })
                ]),
                t._v(' '),
                a('blockquote', [
                  a('p', [
                    t._v('备注： 本文最先发布于，基于 '),
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://nicelinks.site/post/5c3f3151a5957e07a40b30ff',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Ghost'), a('OutboundLink')],
                      1
                    ),
                    t._v(' 构建的最新博客: '),
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://quickapp.lovejade.cn/how-to-elegantly-handle-quickapp-request/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('静轩之别苑'), a('OutboundLink')],
                      1
                    ),
                    t._v('。')
                  ])
                ]),
                t._v(' '),
                a('blockquote', [
                  a('p', [
                    t._v('为保证文中的代码，是直接拷贝就可以运行的，特有引用网络开源接口；需要备注说明的是，在'),
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://nicelinks.site/post/5b5fb5bc615bf842b609105f',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('快应用'), a('OutboundLink')],
                      1
                    ),
                    t._v('使用接口，需要在 '),
                    a('code', [t._v('manifest.json')]),
                    t._v(' 中，对所使用的接口进行声明；使用数据请求，就需要注入下面的声明：')
                  ])
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-json extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-json' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token property' } }, [t._v('"name"')]),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"system.fetch"')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('h2', { attrs: { id: '默认的低效率写法' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#默认的低效率写法', 'aria-hidden': 'true' } },
                    [t._v('#')]
                  ),
                  t._v(' 默认的低效率写法')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                      t._v(' $fetch '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@system.fetch'")]),
                      t._v('\n$fetch'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('fetch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'https://api.apiopen.top/singlePoetry'")
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n  responseType'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'text'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('success')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('response')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' result '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' response'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('data\n    console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`success response, code: ')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('result'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                          t._v('code'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v(', data: ')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('result'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                          t._v('data'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('fail')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('data'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' code')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [
                          t._v('`fetch handling fail, code = ')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('code'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n  complete'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('funtion')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('data'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' code')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [
                          t._v('`fetch handling complete, code = ')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('code'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('以上就是官方文档提供的上古 '),
                  a('code', [t._v('jQuery')]),
                  t._v(
                    ' 时代的写法，冗长的代码，古老的回调式操作，以及对请求没有做任何必要的处理，如果这在项目中使用，对代码复用度无疑是零，从长期维护角度看，这样的代码就是导致痛苦的根源。虽然，示例代码这样写道，也无可厚非；但先入为主的模范作用，将对于诸多经验不够充足的开发者，起到错误的误导性引领。'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: '改进后的用法' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#改进后的用法', 'aria-hidden': 'true' } }, [
                    t._v('#')
                  ]),
                  t._v(' '),
                  a('strong', [t._v('改进后的用法')])
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                      t._v(' $fetch '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@system.fetch'")]),
                      t._v('\n$fetch\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('fetch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'https://api.apiopen.top/singlePoetry'")
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n    method'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'GET'")]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('response')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' result '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' response'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('data\n    console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`success response, code: ')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('result'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                          t._v('code'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v(', data: ')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('result'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                          t._v('data'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('catch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('error')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`Something Error: ')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('error'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('其实，'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://nicelinks.site/post/5b5fb5bc615bf842b609105f',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('快应用'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    '对部分接口方法调用，返回了 Promise 优化，其中就包括数据请求接口；所以，使用如上这种方式，至少代码显得不那么冗长而古老。但，数据请求相关代码，却依然没有得到复用，这就需要对其进行封装处理。'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: '优化处理数据请求' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#优化处理数据请求', 'aria-hidden': 'true' } },
                    [t._v('#')]
                  ),
                  t._v(' '),
                  a('strong', [t._v('优化处理数据请求')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '如果每次调用接口，都需要 import，外加指定 url，method 等参数，这无异是变相的浪费生命；大道至简，优秀的开发流程，一定是便于编写和维护！所以有必要将其统一封装，如下面所封装的代码（可放置在 '
                  ),
                  a('code', [t._v('helpera/ajax.js')]),
                  t._v(' 路径下）：')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('requestHandle')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('params')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('Promise')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('resolve'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' reject')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    $fetch\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('fetch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n        method'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('method'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n        data'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('data\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('response')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' result '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' response'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('data\n        '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' content '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('JSON')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('parse')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('result'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('data'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('/* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */')
                      ]),
                      t._v('\n        content'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('code '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('200')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('resolve')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('content'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('result'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('resolve')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('content'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('message'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('catch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('error'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' code')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`🐛 request fail, code = ')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('code'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('reject')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('error'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('/* 此处只是处于示例代码的可运行性，实际项目中，此方法最好予以封装 & 提取 */')
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('queryString')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('url'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' query')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                      t._v(' str '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('for')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                      t._v(' key '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('in')]),
                      t._v(' query'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('typeof')]),
                      t._v(' query'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                      t._v('key'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'object'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n      query'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                      t._v('key'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('JSON')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('stringify')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('query'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                      t._v('key'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n    str'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('push')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('key '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'='")]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                      t._v(' query'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                      t._v('key'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                      t._v(' paramStr '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' str'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('join')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'&'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' paramStr '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('url'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('?')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('paramStr'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')])
                      ]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' url\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('post')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('url'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' params')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('requestHandle')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n      method'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'post'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n      url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n      data'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' params\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('get')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('url'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' params')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('requestHandle')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n      method'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'get'")]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n      url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('queryString')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('这 $fetch.fetch 返回本就是一个 '),
                  a('code', [t._v('Promise')]),
                  t._v(
                    '，这里为何额外要包裹的一层处理呢？这样做的好处不仅在于使其依旧可以链式调用，同时对返回数据统一处理，精简返回内容，使得在获取到最终结果处，可以尽可能简单，更加有利于后期做维护，调用方式就可以成为如下这样（涉及某类模块，可统一在相应模块文件下，如：'
                  ),
                  a('code', [t._v('helper/apis/poetry.js')]),
                  t._v(' ）：')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                      t._v(' $ajax '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./../ajax'")]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' baseUrl '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'https://api.apiopen.top/'")]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('export')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('default')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getSinglePoetry')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('data')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' $ajax'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('get')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('baseUrl'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('singlePoetry`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' data'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getOtherApi')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('data')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// other api ....')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('另外，开发者将接口，按照功能模块规划，分门别类以存放至统一文件夹下，如 '),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/nicejade/nicelinks-quick-app/tree/master/src/helper/apis',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('helper/apis'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    '；如此清晰明了，方便调用，且对于多人协作开发，又不相互响应，减少不必要的冲突。类似善用配置，以表驱动法的编程手法，应该活学活用，贯穿始终。这些理念，早在'
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://www.jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/#%E6%9B%B4%E4%BC%98%E9%9B%85%E7%9A%84%E5%A4%84%E7%90%86-Http-%E8%AF%B7%E6%B1%82',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('更优雅的处理-Http-请求 | 开箱即用的 Vue Webpack 脚手架模版'), a('OutboundLink')],
                    1
                  ),
                  t._v('中就有阐述。')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '至此，就对接口进行了完美封装处理；在业务层便捷调用，也是需要优化；在快应用，最为高效的办法，就是将上面封装暴露给 '
                  ),
                  a('code', [t._v('global')]),
                  t._v('，如此就可以：')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v(' $apis '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'./helper'")]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' hook2global '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' global'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('__proto__ '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('||')]),
                      t._v(' global\nhook2global'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('$apis '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' $apis\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('// 在任何其他页面、组件、js 文件，接可以像如下调用')
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' params '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n$apis'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('poetry\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getSinglePoetry')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('result')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 处理正常逻辑')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('catch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('error')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 处理请求异常逻辑')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('h2', { attrs: { id: '更近一步体验优化' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#更近一步体验优化', 'aria-hidden': 'true' } },
                    [t._v('#')]
                  ),
                  t._v(' '),
                  a('strong', [t._v('更近一步体验优化')])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '在业务逻辑中，发起数据请求时候，都需要添加 Loading，提示用户请求正在进行中，以免响应缓慢给用户带来不必要的疑惑；而，在请求成功或失败情形下，都需要对 Loading 进行消除，如此一来就会有下面的逻辑：'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      t._v('$apis'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('poetry\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getSinglePoetry')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('result')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('isLoading '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 处理正常逻辑')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('catch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('error')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 处理请求异常逻辑')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('isLoading '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    '很明显，像类似不管请求成功或失败，都需要执行的业务逻辑是存在的，如果分别在对应链式后做处理，谈何优雅呢？在 '
                  ),
                  a('code', [t._v('ES2018')]),
                  t._v(' 有引入 '),
                  a('code', [t._v('finally')]),
                  t._v(' 标准，跟'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://nicelinks.site/post/5b5fb5bc615bf842b609105f',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('快应用'), a('OutboundLink')],
                    1
                  ),
                  t._v('中请求后 '),
                  a('code', [t._v('complete')]),
                  t._v(' 回调是一样的作用：不管最后状态如何，都会执行的操作。所以上面的调用，就可以优化成如下代码：')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      t._v('$apis'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('poetry\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('getSinglePoetry')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('result')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 处理正常逻辑')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('catch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('error')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 处理请求异常逻辑')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('finally')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('isLoading '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('当按照预期这样写的时候，你会发现 '),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'http://es6.ruanyifeng.com/#docs/promise#Promise-prototype-finally',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('finally'), a('OutboundLink')],
                    1
                  ),
                  t._v(' 链式并未得到调用。查阅一番，兴许你也会得到一个答案，'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://nicelinks.site/post/5b5fb5bc615bf842b609105f',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('快应用'), a('OutboundLink')],
                    1
                  ),
                  t._v(
                    '规范没有 finally，如此一来，就不得不打补丁 (polyfill) 来予以解决了，可以有的途径不少，下面介绍一种简单无依赖的法子，注入以下代码即可；那么上面关于 '
                  ),
                  a('code', [t._v('ajax.js')]),
                  t._v(' 的封装则可以优化成如下代码：')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-js extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('Promise')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('prototype'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('finally')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('callback')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('P')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('constructor\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('value')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('P')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('resolve')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('callback')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' value'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n    '),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('reason')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('P')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('resolve')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('callback')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('throw')]),
                      t._v(' reason\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n\n'),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('requestHandle')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('params')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('Promise')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('resolve'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' reject')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n    $fetch\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('fetch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('url'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n        method'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('method'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v('\n        data'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' params'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('data\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('then')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('response')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' result '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' response'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('data\n        '),
                      a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                      t._v(' content '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token constant' } }, [t._v('JSON')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('parse')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('result'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('data'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                        t._v('/* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */')
                      ]),
                      t._v('\n        content'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('code '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('200')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('resolve')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('content'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('result'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(':')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('resolve')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('content'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      t._v('message'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('catch')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                        t._v('error'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                        t._v(' code')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`🐛 request fail, code = ')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('code'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('reject')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      t._v('error'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('finally')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                      t._v('\n        console'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('`✔️ request @')]),
                        a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('${')
                          ]),
                          t._v('params'),
                          a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                          t._v('url'),
                          a('span', { pre: !0, attrs: { class: 'token interpolation-punctuation punctuation' } }, [
                            t._v('}')
                          ])
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v(' has been completed.`')])
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n        '),
                      a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('resolve')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n      '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('blockquote', [
                  a('p', [
                    t._v('需要补充说明的是，'),
                    a('code', [t._v('finally')]),
                    t._v(' 方法指定的回调函数，用于指定不管 '),
                    a('strong', [t._v('Promise')]),
                    t._v(
                      ' 对象最后状态如何，都会执行的操作；它是与状态无关的，不依赖于 Promise 的执行结果，所以此处 polyfill 返回跟标准一致，回调函数不接受任何参数。'
                    )
                  ])
                ]),
                t._v(' '),
                a('p', [
                  t._v('关于快应用数据请求的整体代码优化设计，具体可参见 Github 项目：'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/nicejade/quickapp-boilerplate-template',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('quickapp-boilerplate-template'), a('OutboundLink')],
                    1
                  ),
                  t._v(': 🔨 致力于构建更为优雅的「快应用」开发脚手架模板。')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    '至此，对处理「快应用」数据请求，相比开发文档中所写到的示例，是不是优雅很多呢？如果你的项目中，涉及数据请求有超过 3 个的可能，那么你就应该做像着样。当然，这不仅仅限于此接口，其他如数据存储（storage），上传下载（request），你都应该予以封装。这也不仅仅限于'
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://nicelinks.site/post/5b5fb5bc615bf842b609105f',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('快应用'), a('OutboundLink')],
                    1
                  ),
                  t._v('，其他如开发 '),
                  a('code', [t._v('Vue')]),
                  t._v('、'),
                  a('code', [t._v('React')]),
                  t._v(' 等项目，亦是同理。')
                ]),
                t._v(' '),
                a('p', [t._v('@2019-01-17 于深圳.福田 Last Modify：2018-01-19')]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h3', { attrs: { id: '您可能会感兴趣的文章：' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#您可能会感兴趣的文章：', 'aria-hidden': 'true' } },
                    [t._v('#')]
                  ),
                  t._v(' 您可能会感兴趣的文章：')
                ]),
                t._v(' '),
                a('ul', [
                  a('li', [
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://quickapp.lovejade.cn/prettier-quickapp-plugin/?utm_source=nice.lovejade.cn',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Prettier 插件为更漂亮快应用代码'), a('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  a('li', [
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2017/10/09/146-talk-about-nice-links/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('云集优站，尽在「倾城之链」其二'), a('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  a('li', [
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://nice.lovejade.cn/zh/article/develop-quick-app-experience-notes.html',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('快应用之开发体验纪要'), a('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  a('li', [
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2018/12/21/146-awesome-vue-cli3-example/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('快应用开发资源、教程汇聚 '), a('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(' '),
                  a('li', [
                    a(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jeffjade.com/2018/10/13/144-top-100-front-end-awesome-awesome-list/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('TOP 100 大前端超棒精选列表'), a('OutboundLink')],
                      1
                    )
                  ])
                ]),
                t._v(' '),
                a('Advertisement')
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = e.exports
    }
  }
])
