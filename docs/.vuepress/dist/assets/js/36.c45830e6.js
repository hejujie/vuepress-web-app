;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    403: function(t, e, r) {
      'use strict'
      r.r(e)
      var v = r(22),
        _ = Object(v.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              r('p', [
                t._v('何谓'),
                r(
                  'a',
                  { attrs: { href: 'https://www.quickapp.cn/', target: '_blank', rel: 'noopener noreferrer' } },
                  [t._v('「快应用」'), r('OutboundLink')],
                  1
                ),
                t._v('呢？它是基于手机硬件平台的新型应用形态，标准是由主流手机厂商组成的'),
                r('code', [t._v('快应用联盟')]),
                t._v(
                  '联合制定。其标准的诞生将在研发接口、能力接入、开发者服务等层面建设标准平台，以平台化的生态模式对个人开发者和企业开发者全品类开放。'
                ),
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://nicelinks.site/post/5b5fb5bc615bf842b609105f',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('快应用'), r('OutboundLink')],
                  1
                ),
                t._v('具备传统 APP 完整的应用体验，'),
                r('code', [t._v('无需安装、即点即用')]),
                t._v('；'),
                r('code', [t._v('覆盖 10 亿设备')]),
                t._v('，'),
                r('code', [t._v('与操作系统深度集成，探索新型应用场景')]),
                t._v('。快应用 ──'),
                r('strong', [t._v('复杂生活的简单答案，让生活更顺畅')]),
                t._v(' ── 来自 '),
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://nicelinks.site/post/5b5fb5bc615bf842b609105f',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('快应用官方网站 | 倾城之链'), r('OutboundLink')],
                  1
                ),
                t._v('。')
              ]),
              t._v(' '),
              r('p', [
                r('img', { attrs: { src: 'https://image.nicelinks.site/quickapp.png', alt: '快应用开发体验纪要' } })
              ]),
              t._v(' '),
              r('h3', { attrs: { id: '🎉-本文目录-🎉' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#🎉-本文目录-🎉', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 🎉 本文目录 🎉')
              ]),
              t._v(' '),
              r('p'),
              r('div', { staticClass: 'table-of-contents' }, [
                r('ul', [r('li', [r('a', { attrs: { href: '#🎉-本文目录-🎉' } }, [t._v('🎉 本文目录 🎉')])])])
              ]),
              r('p'),
              t._v(' '),
              r('div', { staticClass: 'tip custom-block' }, [
                r('p', { staticClass: 'custom-block-title' }, [t._v('温馨提示')]),
                t._v(' '),
                r('p', [
                  r('strong', [t._v('备注')]),
                  t._v('：如果你对「快应用」感兴趣，那么在 '),
                  r('code', [t._v('Github')]),
                  t._v(' 维护的这份'),
                  r(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/quickapp-tutorial.md',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('快应用资源汇集'), r('OutboundLink')],
                    1
                  ),
                  t._v('清单，或将是你的最佳参考消息。')
                ])
              ]),
              t._v(' '),
              r('p', [
                r('img', { attrs: { src: 'https://image.nicelinks.site/quickapp-red.svg', alt: '快应用 即点即用' } })
              ]),
              t._v(' '),
              r('h2', { attrs: { id: '快应用特点' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#快应用特点', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 快应用特点')
              ]),
              t._v(' '),
              r('p', [t._v('下面列出些关于「快应用」特点，这将有助于对它有更深刻的理解；')]),
              t._v(' '),
              r('ul', [
                r('li', [t._v('基于手机硬件平台，标准由主流手机厂商组成的快应用联盟制定;')]),
                t._v(' '),
                r('li', [t._v('无需安装、即点即用，且具备传统 APP 完整的应用体验;')]),
                t._v(' '),
                r('li', [t._v('与操作系统深度集成，一键直达;')]),
                t._v(' '),
                r('li', [t._v('更新直接推送，新版本直接更新到后台，用户无感知快应用的技术实现;')]),
                t._v(' '),
                r('li', [t._v('基于前端技术栈开发、可快速迭代;')]),
                t._v(' '),
                r('li', [t._v('通过全新的引擎，将系统原生的渲染机制和接口能力提供给上层应用;')]),
                t._v(' '),
                r('li', [
                  t._v('运行在框架应用进程中，对每个快应用会开一个 '),
                  r('code', [t._v('Launcher')]),
                  t._v(' 进程快应用的开发、发布和使用流程;')
                ]),
                t._v(' '),
                r('li', [t._v('开发者需要在快应用官网注册，上传至快应用官网，测试并通过审核后即可进行分发;')]),
                t._v(' '),
                r('li', [
                  t._v('使用前端技术栈进行开发，经过编译、签名后最终产出 '),
                  r('code', [t._v('rpk')]),
                  t._v(' 文件;')
                ]),
                t._v(' '),
                r('li', [t._v('开发者需登录快应用官网进行上传和发布，发布前会经过审核快应用与小程序的对比;')]),
                t._v(' '),
                r('li', [
                  t._v('快应用使用 '),
                  r('code', [t._v('native')]),
                  t._v(' 渲染，性能体验会比较好，而小程序是使用 '),
                  r('code', [t._v('webview')]),
                  t._v(' 渲染 ;')
                ]),
                t._v(' '),
                r('li', [t._v('快应用的系统级能力更强，能调用更多系统级 API;')])
              ]),
              t._v(' '),
              r('h2', { attrs: { id: '与小程序对比' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#与小程序对比', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 与小程序对比')
              ]),
              t._v(' '),
              r('table', [
                r('thead', [
                  r('tr', [
                    r('th', { staticStyle: { 'text-align': 'center' } }, [t._v('──')]),
                    t._v(' '),
                    r('th', { staticStyle: { 'text-align': 'center' } }, [t._v('开发技术')]),
                    t._v(' '),
                    r('th', { staticStyle: { 'text-align': 'center' } }, [t._v('渲染方式')]),
                    t._v(' '),
                    r('th', { staticStyle: { 'text-align': 'center' } }, [t._v('硬件资源扶持')]),
                    t._v(' '),
                    r('th', { staticStyle: { 'text-align': 'center' } }, [t._v('系统级能力')]),
                    t._v(' '),
                    r('th', { staticStyle: { 'text-align': 'center' } }, [t._v('桌面留存')])
                  ])
                ]),
                t._v(' '),
                r('tbody', [
                  r('tr', [
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('小程序')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('前端技术栈')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [r('code', [t._v('webview')]), t._v(' 渲染')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('有')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('强')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('有')])
                  ]),
                  t._v(' '),
                  r('tr', [
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('快应用')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('前端技术栈')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [r('code', [t._v('native')]), t._v(' 渲染')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('无')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('弱')]),
                    t._v(' '),
                    r('td', { staticStyle: { 'text-align': 'center' } }, [t._v('有')])
                  ])
                ])
              ]),
              t._v(' '),
              r('p', [
                t._v(
                  '以上这些比对，皆是从两者的出生角度而言；可以肯定的是，「快应用」得益于其与生俱来的优势，将在更多应用场景发挥作用，它的崛起，将会给 '
                ),
                r('code', [t._v('Android')]),
                t._v(' 用户带来更多的便捷。同时作为后起之秀，其开发体验上，是明显优于'),
                r('code', [t._v('小程序')]),
                t._v(
                  '的；但目前的小程序，已经有长足的发展，而「快应用」才处于刚起步阶段，在经验累积、应用数量、分发传播、社区建设等方面，两者之间还存在些差距；后续故事将会如何，让我们将拭目以待。'
                )
              ]),
              t._v(' '),
              r('h2', { attrs: { id: '开发-调试' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#开发-调试', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 开发 & 调试')
              ]),
              t._v(' '),
              r('h3', { attrs: { id: '环境搭建' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#环境搭建', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 环境搭建')
              ]),
              t._v(' '),
              r('ul', [
                r('li', [
                  t._v('鉴于'),
                  r('code', [t._v('「快应用」')]),
                  t._v('基于前端技术栈来开发，因此需要安装 '),
                  r(
                    'a',
                    { attrs: { href: 'https://nodejs.org/en/', target: '_blank', rel: 'noopener noreferrer' } },
                    [t._v('Node.js'), r('OutboundLink')],
                    1
                  ),
                  t._v(' (>= 6.0)；'),
                  r(
                    'a',
                    { attrs: { href: 'https://yarnpkg.com/', target: '_blank', rel: 'noopener noreferrer' } },
                    [t._v('yarn'), r('OutboundLink')],
                    1
                  ),
                  t._v(' （推荐使用）。')
                ]),
                t._v(' '),
                r('li', [
                  t._v('安装 '),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.npmjs.com/package/hap-toolkit',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('hap-toolkit'), r('OutboundLink')],
                    1
                  ),
                  t._v(' ；它是针对'),
                  r('code', [t._v('「快应用」')]),
                  t._v('衍生出的开发者工具；')
                ])
              ]),
              t._v(' '),
              r('div', { staticClass: 'language- extra-class' }, [
                r('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  r('code', [t._v('yarn global add hap-toolkit\n// 检测是否成功安装 hap-toolkit\nhap -V\n')])
                ])
              ]),
              r('ul', [
                r('li', [
                  t._v('手机安装'),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://www.quickapp.cn/docCenter/post/69',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('「快应用」调试器'), r('OutboundLink')],
                    1
                  ),
                  t._v(' ── 一个 '),
                  r('code', [t._v('Android')]),
                  t._v(' 应用程序，它可以连接到手机系统内的快应用执行环境，包含'),
                  r('code', [t._v('扫码安装')]),
                  t._v('、'),
                  r('code', [t._v('本地安装')]),
                  t._v('、'),
                  r('code', [t._v('在线更新')]),
                  t._v('、'),
                  r('code', [t._v('开始调试')]),
                  t._v('、等功能；')
                ])
              ]),
              t._v(' '),
              r('blockquote', [
                r('p', [
                  r('strong', [t._v('扫码安装')]),
                  t._v('：配置 HTTP 服务器地址，下载 rpk 包，并唤起平台运行 rpk 包；'),
                  r('br'),
                  t._v(' '),
                  r('strong', [t._v('本地安装')]),
                  t._v('：选择手机文件系统中的 rpk 包，并唤起平台运行 rpk 包；'),
                  r('br'),
                  t._v(' '),
                  r('strong', [t._v('在线更新')]),
                  t._v('：重新发送 HTTP 请求，更新 rpk 包，并唤起平台运行 rpk 包；'),
                  r('br'),
                  t._v(' '),
                  r('strong', [t._v('开始调试')]),
                  t._v('：唤起平台运行 rpk 包，并启动远程调试工具；')
                ])
              ]),
              t._v(' '),
              r('div', { staticClass: 'warning custom-block' }, [
                r('p', { staticClass: 'custom-block-title' }, [t._v('温馨提示')]),
                t._v(' '),
                r('p', [
                  r('strong', [t._v('备注')]),
                  t._v(
                    '：当您的手机系统尚未内置快应用运行平台，或您想在开发过程中体验快应用尚未正式发布的新功能、新特性，您可以安装 '
                  ),
                  r('strong', [
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.quickapp.cn/docCenter/post/69',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('快应用预览版'), r('OutboundLink')],
                      1
                    )
                  ]),
                  t._v(
                    ',这是一个包含了快应用基础功能的 Android 应用程序。下载安装成功后，通过快应用调试器可以选择在快应用预览版运行 '
                  ),
                  r('code', [t._v('rpk')]),
                  t._v('包，开发测试对应平台的 api 和功能。更详细的叙述，请参见'),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://doc.quickapp.cn/tutorial/getting-started/build-environment.html',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('快应用开发文档 | 环境搭建 '), r('OutboundLink')],
                    1
                  ),
                  t._v('。')
                ])
              ]),
              t._v(' '),
              r('h3', { attrs: { id: '开发环境' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#开发环境', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 开发环境')
              ]),
              t._v(' '),
              r('p', [
                t._v('在「快应用」中，对'),
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://doc.quickapp.cn/tutorial/getting-started/code-edit-conf.html',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('代码编辑配置'), r('OutboundLink')],
                  1
                ),
                t._v('做了说明；你可以使用 '),
                r('code', [t._v('VsCode')]),
                t._v('、'),
                r('code', [t._v('Sublime Text')]),
                t._v('、'),
                r('code', [t._v('WebStorm')]),
                t._v(' 等工具来开发。鉴于官方针对 '),
                r('code', [t._v('VsCode')]),
                t._v(' 推出了 '),
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://marketplace.visualstudio.com/items?itemName=hap.Hap',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('Hap Extension'), r('OutboundLink')],
                  1
                ),
                t._v(' 扩展，这里推荐使用 '),
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://code.visualstudio.com/Download',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('VsCode'), r('OutboundLink')],
                  1
                ),
                t._v(' 来编写快应用代码（据悉，专门用于开发「快应用」的编辑器，尚在开发中 18-08-15）。')
              ]),
              t._v(' '),
              r('h3', { attrs: { id: '开发调试' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#开发调试', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 开发调试')
              ]),
              t._v(' '),
              r('p', [
                t._v('在开发文档'),
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://doc.quickapp.cn/tools/debugging-tools.html',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('调试工具'), r('OutboundLink')],
                  1
                ),
                t._v('一节，对此有详细说明；从一般性开发角度总结而言，只需运行以下两个命令: '),
                r('code', [t._v('npm run server')]),
                t._v(' 和 '),
                r('code', [t._v('npm run watch')]),
                t._v('；前者会在终端会输出一个二维码，用手机上启动快应用调试器，点击'),
                r('code', [t._v('扫码安装')]),
                t._v('扫描，即可下载安装 '),
                r('code', [t._v('apk')]),
                t._v(
                  ' 包，并运行之；而后者将会启动文件监视器，每次修改工程文件时，会自动编译并在手机端刷新，速度蛮快；至于日志查看，可利用 devtools 调试界面 console 输出，也可利用 '
                ),
                r('code', [t._v('adb')]),
                t._v(' 工具，在终端进行查看：')
              ]),
              t._v(' '),
              r('div', { staticClass: 'language- extra-class' }, [
                r('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  r('code', [t._v('adb logcat -s JsConsole\n')])
                ])
              ]),
              r('h2', { attrs: { id: '快应用示例' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#快应用示例', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 快应用示例')
              ]),
              t._v(' '),
              r('p', [
                t._v('在安装 '),
                r('code', [t._v('Toolkit')]),
                t._v(' 工具后，可通过全局 '),
                r('code', [t._v('hap')]),
                t._v(' 命令创建一个项目模板，如下所示：')
              ]),
              t._v(' '),
              r('div', { staticClass: 'language- extra-class' }, [
                r('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  r('code', [t._v('hap init <YourProjectName>\n')])
                ])
              ]),
              r('p', [
                t._v(
                  '鉴于其内置的 Demo 项目示例，尚处于入门级项目设定(@18-08)，不便于用户着手开发，且不利于高效编写、维护；因此，有将编写的快应用 '
                ),
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/nicejade/nicelinks-quick-app',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('nicelinks-quick-app'), r('OutboundLink')],
                  1
                ),
                t._v(' 开源，借此以探索新型应用设计；此外，也是在探索如何构建优质'),
                r('code', [t._v('快应用')]),
                t._v('，希望可以在此事儿上提供些参考。其代码组织结构如下：')
              ]),
              t._v(' '),
              r('div', { staticClass: 'language- extra-class' }, [
                r('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  r('code', [
                    t._v(
                      '├── sign                # 存储 rpk 包签名模块;\n│   ├── debug           # 调试环境证书/私钥文件\n│   └── release         # 正式环境证书/私钥文件\n└── src\n│   ├── assets          # 公用的资源(Images/Styles/字体...)\n│   │   ├──images       # 存储 png/jpg/svg 等公共图片资源\n│   │   └──styles       # 存放 less/css/sass 等公共样式资源\n│   ├── helper          # 项目自定义辅助各类工具\n│   │   ├──apis         # 存储与后台请求接口相关(已封装好)\n│   │   ├──ajax.js      # 对系统提供的 fetch api 进行链式封装\n│   │   └──util.js      # 存放项目所需公共工具类方法\n│   ├── pages           # 统一存放项目页面级代码\n│   ├── app.ux          # 应用程序代码的人口文件\n│   └── manifest.json   # 配置应用基本信息\n└── package.json        # 定义项目需要的各种模块及配置信息\n'
                    )
                  ])
                ])
              ]),
              r('p', [
                t._v('有必要谈及的是，此项目秉承在'),
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://nice.lovejade.cn/zh/article/vue-webpack-boilerplate-template.html',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [t._v('高效开发 Web 单页应用解决方案'), r('OutboundLink')],
                  1
                ),
                t._v('中所传递的理念：为'),
                r('strong', [t._v('高效开发')]),
                t._v('而设计；相比于其内置简陋而凌乱的 Demo，这份脚手架做了以下诸多改进：')
              ]),
              t._v(' '),
              r('ul', [
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('对项目结构进行优化')]),
                  t._v(
                    '；如上组织结构所示，将各资源模块，更专业的分门别类，使之可以便捷的去编写、维护、查找，同时也是基于前端开发既定共识去设计，更容易为初接触者所理解 & 上手；'
                  )
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('更优雅的处理数据请求')]),
                  t._v('；采用 '),
                  r('code', [t._v('Promise')]),
                  t._v(' 对系统内置请求 '),
                  r('code', [t._v('@system.fetch')]),
                  t._v(' 进行封装，并抛出至全局，使得可以极简的进行链式调用，同时便捷地处理返回数据；')
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('内置了样式处理方案')]),
                  t._v('；「快应用」支持 '),
                  r('code', [t._v('less')]),
                  t._v(', '),
                  r('code', [t._v('sass')]),
                  t._v(' 的预编译；这里采取 '),
                  r('code', [t._v('less')]),
                  t._v(' 方案，并内置了部分变量，以及常用混合方法，使得可以轻松开启样式编写、复用、修改等；')
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('封装了常用方法')]),
                  t._v('；在 '),
                  r('code', [t._v('helper/utils')]),
                  t._v(' 路径下，有对日期、字符串、系统等常用方法，分别进行封装，统一暴露给 '),
                  r('code', [t._v('global.$utils')]),
                  t._v(
                    '，使得维护方式更加合理且健壮，同时又可以便捷的使用，高效开发；当然，你也可以根据需要自行增删、抑或扩展；'
                  )
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('简化开始开发流程')]),
                  t._v('； 注入 '),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/kimmobrunfeldt/concurrently',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('Concurrently'), r('OutboundLink')],
                    1
                  ),
                  t._v(' 插件，使可以运行 '),
                  r('code', [t._v('yarn start')]),
                  t._v(' 即可开始开发，而无需更多命令，从而简洁开发流程；')
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('优化本地开发端口设定')]),
                  t._v('；「快应用」默认端口为 '),
                  r('code', [t._v('12306')]),
                  t._v('，虽说可自定义端口，但使用体验却不够友好；此处参考 '),
                  r('code', [t._v('creat-react-app')]),
                  t._v(' 设定，对本地开发地址端口使用进行优化：如果 🈯️ 定端口(默认: '),
                  r('code', [t._v('8080')]),
                  t._v(')被占用，则向上递增寻找新的可用端口(如：8081 / 8082 / … )；')
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('浏览器打开调试主页二维码')]),
                  t._v('；运行 '),
                  r('code', [t._v('yarn start')]),
                  t._v('，会启动 HTTP 调试服务器，并将该地址在'),
                  r('strong', [t._v('命令行终端')]),
                  t._v(
                    '显示，手机端用快应用调试器扫码，即可下载并运行 rpk 包；当终端积累的信息流多了，就造成扫码不便；故增设在浏览器打开调试主页二维码；如想不使用此功能，在 '
                  ),
                  r('em', [t._v('command/server.js')]),
                  t._v(' 文件中，将 '),
                  r('strong', [t._v('autoOpenBrowser')]),
                  t._v(' 设置为 '),
                  r('code', [t._v('false')]),
                  t._v(' 即可；')
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('集成轻粒子统计分析')]),
                  t._v('； '),
                  r(
                    'a',
                    {
                      attrs: {
                        href: 'https://nicelinks.site/post/5bdfa8ba9fa22b1b40974f63',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('轻粒子'), r('OutboundLink')],
                    1
                  ),
                  t._v('作为官方推荐统计方案，此脚手架已做接入；使用时只需修改 '),
                  r(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://github.com/nicejade/quickapp-boilerplate-template/blob/master/src/assets/js/statistics.config.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('statistics.config.js'), r('OutboundLink')],
                    1
                  ),
                  t._v(' 中的 '),
                  r('code', [t._v('app_key')]),
                  t._v('，为在'),
                  r(
                    'a',
                    { attrs: { href: 'http://www.qinglizi.cn/', target: '_blank', rel: 'noopener noreferrer' } },
                    [t._v('轻粒子'), r('OutboundLink')],
                    1
                  ),
                  t._v('所申请的快应用 KEY 即可；')
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [t._v('新增快捷命令脚本')]),
                  t._v('；使得可以一键生成新页面，只需运行：'),
                  r('code', [t._v('yarn gen YourPageName')]),
                  t._v(' （命名推荐统一为大驼峰，将会在 '),
                  r('code', [t._v('pages')]),
                  t._v(' 路径下新建该页面文件夹）命令即可，当然，也可以根据需要，自行定定制模板：'),
                  r('em', [t._v('/command/gen/template.ux')]),
                  t._v('；')
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [
                    t._v('集成 '),
                    r(
                      'a',
                      { attrs: { href: 'https://prettier.io/', target: '_blank', rel: 'noopener noreferrer' } },
                      [t._v('Prettier'), r('OutboundLink')],
                      1
                    ),
                    t._v(' & '),
                    r(
                      'a',
                      { attrs: { href: 'https://eslint.org/', target: '_blank', rel: 'noopener noreferrer' } },
                      [t._v('Eslint'), r('OutboundLink')],
                      1
                    )
                  ]),
                  t._v('；在检测代码中潜在问题的同时，统一团队代码规范、风格（'),
                  r('code', [t._v('js')]),
                  t._v('，'),
                  r('code', [t._v('less')]),
                  t._v('，'),
                  r('code', [t._v('scss')]),
                  t._v('等），从而促使写出高质量代码，以提升工作效率(尤其针对团队开发)。')
                ]),
                t._v(' '),
                r('li', [
                  t._v('[x] '),
                  r('strong', [
                    t._v('编写 '),
                    r(
                      'a',
                      {
                        attrs: {
                          href: 'https://github.com/nicejade/prettier-plugin-quickapp',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('prettier-plugin-quickapp'), r('OutboundLink')],
                      1
                    ),
                    t._v(' 插件')
                  ]),
                  t._v('；为快应用编写 '),
                  r('code', [t._v('prettier')]),
                  t._v(' 插件，使其可以针对 '),
                  r('code', [t._v('.ux')]),
                  t._v('/'),
                  r('code', [t._v('.mix')]),
                  t._v(' 文件也能很好地工作，从而进一步完善代码风格及规范。')
                ]),
                t._v(' '),
                r('li', [t._v('[ ] ... ...')])
              ]),
              t._v(' '),
              r('h2', { attrs: { id: '关于快应用の发布' } }, [
                r('a', { staticClass: 'header-anchor', attrs: { href: '#关于快应用の发布', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' 关于快应用の发布')
              ]),
              t._v(' '),
              r('p', [
                t._v(
                  '关于快应用发布，有必要谈下的理由是，其发布流程说简单却也复杂，说快也慢；这是因为涉及多家厂商，且有着不同规则，导致变数横生；倘若经历过之后，这个流程就可以描述为：说复杂也简单，说慢也快；就以个人开发者来聊下相关经验：'
                )
              ]),
              t._v(' '),
              r('ul', [
                r('li', [
                  t._v('首先需要开发一款快应用；务必确认好 '),
                  r('code', [t._v('minPlatformVersion')]),
                  t._v(' 版本，应用命名称也该有所考究，最好都是中文(利推广)；')
                ]),
                t._v(' '),
                r('li', [
                  t._v('快应用官网注册，完善相关资料之后(须手持身份证反面照片，需清晰)，即可创建 & 提交你的'),
                  r('code', [t._v('快应用')]),
                  t._v('（有些资料要填写）；')
                ]),
                t._v(' '),
                r('li', [
                  t._v(
                    '厂商审核；对于华为、OPPO、小米等厂商，必须先绑定其开放者账号才可以（Vivo 无需），所以得先到厂商注册，并绑定账号；'
                  )
                ]),
                t._v(' '),
                r('li', [
                  t._v('绑定账号，应用提交之后，接下来就是坐等；不同平台审核结果许有不同：如华为还需'),
                  r('em', [t._v('上传免责函签名至版权处')]),
                  t._v('等等；')
                ]),
                t._v(' '),
                r('li', [
                  t._v(
                    '修正审核提到的问题，如指出应用提交分类错误(HuaWei)、应用界面单一、功能过于简单(OPPO)等，继续提交，坐等即可(速度还行)；'
                  )
                ])
              ]),
              t._v(' '),
              r(
                'div',
                { staticClass: 'tip custom-block' },
                [
                  r('p', { staticClass: 'custom-block-title' }, [t._v('温馨提示')]),
                  t._v(' '),
                  r('p', [
                    t._v('个人开发的倾城之链-快应用版已于 09-05 日，发布上架；目前在 '),
                    r('code', [t._v('vivo')]),
                    t._v('、'),
                    r('code', [t._v('OPPO')]),
                    t._v('、'),
                    r('code', [t._v('魅族')]),
                    t._v('、'),
                    r('code', [t._v('小米')]),
                    t._v(
                      '等厂商已审核通过，可在支持快应用手机的负一屏、浏览器等搜索倾城之链即可率先体验，之后将持续迭代升级，敬请期待。 :::'
                    )
                  ]),
                  t._v(' '),
                  r('h2', { attrs: { id: '快应用存在的缺陷' } }, [
                    r(
                      'a',
                      { staticClass: 'header-anchor', attrs: { href: '#快应用存在的缺陷', 'aria-hidden': 'true' } },
                      [t._v('#')]
                    ),
                    t._v(' 快应用存在的缺陷')
                  ]),
                  t._v(' '),
                  r('p', [
                    t._v('从上面'),
                    r('a', { attrs: { href: '#%E5%BF%AB%E5%BA%94%E7%94%A8%E7%89%B9%E7%82%B9' } }, [t._v('快应用特点')]),
                    t._v(
                      '，应该对其优点有所感受；接下来不妨‘揣测’下它或将是缺陷的存在（当然，在年与时驰间，随着版本的不断迭代升级，某些现在看来是缺陷，日后兴许就荡然无存，也说不定）。'
                    )
                  ]),
                  t._v(' '),
                  r('ul', [
                    r('li', [
                      t._v('若要运行「快应用」，须要手机出厂时在底层支持；否则就须要先安装'),
                      r('code', [t._v('平台预览版')]),
                      t._v(';')
                    ]),
                    t._v(' '),
                    r('li', [
                      t._v('使用前端技术栈开发，'),
                      r('code', [t._v('native')]),
                      t._v(' 渲染，标签、样式、功能等都需要一一映射处理，目前来看支持不够完善；长期迭代情况将会好转；')
                    ]),
                    t._v(' '),
                    r('li', [
                      t._v('暂不支持使用主流前端框架（Eg: '),
                      r('code', [t._v('vue')]),
                      t._v('、'),
                      r('code', [t._v('react')]),
                      t._v('）进行开发，且很多功能需要填补；长期迭代情况将会好转；')
                    ]),
                    t._v(' '),
                    r('li', [
                      t._v('相比于其他‘竞品’而言，文档、周围生态系统、等都需要亟待完善；长期迭代情况将会好转；')
                    ]),
                    t._v(' '),
                    r('li', [
                      t._v('由国内 '),
                      r('code', [t._v('Android')]),
                      t._v(' 手机厂商联合推出的，不支持 '),
                      r('code', [t._v('IOS')]),
                      t._v(' 操作系统，目测以后也无法给予支持；')
                    ]),
                    t._v(' '),
                    r('li', [
                      t._v(
                        '社交：「快应用」缺乏微信的社交场景能力和传播手段，推广拉新，成本不低；再有上一条先天不足，现在来看，不容乐观。'
                      )
                    ]),
                    t._v(' '),
                    r('li', [t._v('......')])
                  ]),
                  t._v(' '),
                  r('h2', { attrs: { id: '如何看待「快应用」' } }, [
                    r(
                      'a',
                      { staticClass: 'header-anchor', attrs: { href: '#如何看待「快应用」', 'aria-hidden': 'true' } },
                      [t._v('#')]
                    ),
                    t._v(' 如何看待「快应用」?')
                  ]),
                  t._v(' '),
                  r('p', [
                    t._v(
                      '就目前来看，在移动设备市场，充盈各种类型的应用，大有“诸子百家争鸣”之基础；以技术栈来分，有原生型、混合型、Web 型、小程序、「快应用」…… 百花齐放；从类别上看，有支付宝这般丰富的超级 App，亦有许多精品级小众应用；就用户而言，不仅能享受其便捷性，同时也能体验市场的多元化；而各种不同类型应用间良性竞争，对更一步改善用户体验也是大有裨益。如此，看来「快应用」的诞生，从外部环境来看，有其成长的土壤；而具有体量的公司都参与的事情（如闪充、全面屏），便是不错的趋势，至少不会输，受影响的是旧的模式 ── 原生应用。'
                    )
                  ]),
                  t._v(' '),
                  r('p', [
                    t._v(
                      '出于业务需求以及用户拉新等方面诉求，Native VS Web 这个由来已久之争，如今愈发向前端技术栈倾斜，且已占上风；虽然说，技术的发展，同时有给 Native 和 Web 两种模式，都提供了利好（对 Web，硬件提升使得体验越来越好；于 Native，越来越大的存储空间使得用户装 APP 成本下降），但“即点即用”这种快捷模式的横空出世，附带以前端技术栈开发的低成本，将打破固有局面，修改用户原有习惯，从而渐变整个格局。'
                    )
                  ]),
                  t._v(' '),
                  r('p', [
                    t._v(
                      '谈及「快应用」，微信小程序是无法绕过的点；两者肯定存在竞争关系，同时也可算是伙伴：如同两部同时上映的电影，虽有竞争，也会是彼此之助力，共同把盘子做大，吸引更多的用户倾斜，从而变更未来的应用格局。再有，都是基于前端技术栈，如能有互转工具给予铺成，对于开发者而言，即可实现一次编写，多平台运行；将会为这种模式提升更多竞争力。'
                    )
                  ]),
                  t._v(' '),
                  r('p', [
                    t._v('上面已经从出生层面，对「快应用」和小程序做了对比；「快应用」使用 '),
                    r('code', [t._v('Native')]),
                    t._v(' 渲染，而非小程序基于 '),
                    r('code', [t._v('Webview')]),
                    t._v(
                      ' 渲染，再加上硬件资源扶持，体验上则能更上一层楼。况且，对于已经司空见惯的事物，新鲜感在如今看来，也极具诱惑，如'
                    ),
                    r('code', [t._v('子弹短信')]),
                    t._v('的出现；就小程序而言目前火热程度，已有百万应用，渐成'),
                    r('strong', [t._v('垄断')]),
                    t._v(
                      '之势，从过往历史来看，这对于用户来讲，绝不都是好事；而对于开发商来说，也尽是受制于人(腾讯有绝对控制权)，无法主导自己命运，多个渠道，则多份活路；况且，兵无常势，水无常形，在大时代的拉锯之下，微信又岂会是永恒的王者？'
                    ),
                    r('strong', [t._v('独立的才是自己的')]),
                    t._v(
                      '，而小程序并不提供这方面红利；对于个人开发者来讲，加入「快应用」阵营，借助厂商流量扶持，为自己独立平台倒量，不失为更明智的抉择；现在来看「快应用」，机遇与挑战并存，未来它将如何，朋友你怎么看？'
                    )
                  ]),
                  t._v(' '),
                  r('p', [t._v('@2018-08-06 于深圳.福田 Last Modify：2018-09-09')]),
                  t._v(' '),
                  r('hr'),
                  t._v(' '),
                  r('h2', { attrs: { id: '同类型文章' } }, [
                    r('a', { staticClass: 'header-anchor', attrs: { href: '#同类型文章', 'aria-hidden': 'true' } }, [
                      t._v('#')
                    ]),
                    t._v(' 同类型文章')
                  ]),
                  t._v(' '),
                  r('ul', [
                    r('li', [
                      r(
                        'a',
                        {
                          attrs: {
                            href: 'https://www.jeffjade.com/2017/10/09/146-talk-about-nice-links/',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('云集优站，尽在「倾城之链」其二'), r('OutboundLink')],
                        1
                      )
                    ]),
                    t._v(' '),
                    r('li', [
                      r(
                        'a',
                        {
                          attrs: {
                            href: 'https://nice.lovejade.cn/zh/article/awesome-quickapp.html',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('快应用开发资源、教程汇聚'), r('OutboundLink')],
                        1
                      )
                    ]),
                    t._v(' '),
                    r('li', [
                      r(
                        'a',
                        {
                          attrs: {
                            href: 'https://nice.lovejade.cn/zh/article/quickapp-boilerplate-template.html',
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                        },
                        [t._v('快应用脚手架，为优雅而生'), r('OutboundLink')],
                        1
                      )
                    ])
                  ]),
                  t._v(' '),
                  r('Advertisement')
                ],
                1
              )
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = _.exports
    }
  }
])
