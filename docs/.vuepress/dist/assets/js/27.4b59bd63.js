;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    394: function(t, a, Q) {
      'use strict'
      Q.r(a)
      var r = Q(22),
        e = Object(r.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              Q = t._self._c || a
            return Q('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              Q('h2', { attrs: { id: 'key-challenges' } }, [
                Q('a', { staticClass: 'header-anchor', attrs: { href: '#key-challenges', 'aria-hidden': 'true' } }, [
                  t._v('#')
                ]),
                t._v(' Key Challenges')
              ]),
              t._v(' '),
              Q('p', [t._v('在Mulit-agent设置下，会存在如下的三个挑战：')]),
              t._v(' '),
              Q('ul', [
                Q('li', [
                  t._v(
                    "Modelling other agents' information： 在multi-agent的设置下，过去常用的independent actor-critic等模型，往往会由于独立训练，导致信息共享不足，从而coordinated效果比较差。"
                  )
                ]),
                t._v(' '),
                Q('li', [
                  t._v(
                    'Multi-agent credit assignment：常规的actor-critic方法由于每个actor训练的reward都是基于全局的reward，所以很难评估每个agent采取的action实际对全局的reward影响有多大，故而导致优化存在困难。'
                  )
                ]),
                t._v(' '),
                Q('li', [
                  t._v(
                    'Curse of dimensionality in aciton：由于系统是mulit-agent，在要求算法有更好效果的情况下，往往需要不同agent采取action的联合概率分布，故而也导致了action space指数上升的问题。'
                  )
                ])
              ]),
              t._v(' '),
              Q('p', [
                t._v(
                  '基于这三个挑战，文章分别提出centralised critic、counterfactual baseline、efficient critic representation去解决这三个问题。'
                )
              ]),
              t._v(' '),
              Q('h2', { attrs: { id: 'centralised-critic' } }, [
                Q(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#centralised-critic', 'aria-hidden': 'true' } },
                  [t._v('#')]
                ),
                t._v(' Centralised critic')
              ]),
              t._v(' '),
              Q('ul', [
                Q('li', [
                  Q('p', [t._v('做法')]),
                  t._v(' '),
                  Q('ul', [
                    Q('li', [
                      t._v(
                        'critic仅仅在learning的时候使用：它可以是基于joint action和所有的state information进行训练。'
                      )
                    ]),
                    t._v(' '),
                    Q('li', [
                      t._v(
                        'agent在learning和execution的时候都需要，训练的时候仅仅使用来自自己的action-observation history。'
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                Q('li', [
                  Q('p', [t._v('训练：')]),
                  t._v(' '),
                  Q('ul', [
                    Q('li', [Q('p', [t._v('如果global state存在，那么直接用它训练。')])]),
                    t._v(' '),
                    Q('li', [
                      Q('p', [t._v('否则使用joint acion-observation进行训练。')]),
                      t._v(' '),
                      Q('p', [
                        Q('img', {
                          attrs: {
                            src: 'http://ipic-ccyy.oss-cn-shenzhen.aliyuncs.com/blog/2019-07-09-140051.png',
                            alt: 'image-20190709220049644'
                          }
                        })
                      ])
                    ])
                  ])
                ])
              ]),
              t._v(' '),
              Q('h2', { attrs: { id: 'counterfactual-baseline' } }, [
                Q(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#counterfactual-baseline', 'aria-hidden': 'true' } },
                  [t._v('#')]
                ),
                t._v(' Counterfactual baseline')
              ]),
              t._v(' '),
              Q('ul', [
                Q('li', [
                  Q('p', [t._v('问题：')]),
                  t._v(' '),
                  Q('ul', [Q('li', [t._v('在训练出centralised critic之后，如何利用它辅助policy gradient进行训练。')])])
                ]),
                t._v(' '),
                Q('li', [
                  Q('p', [t._v('Naive Way：')]),
                  t._v(' '),
                  Q('ul', [
                    Q('li', [
                      Q('p', [
                        t._v(
                          '直接利用它估计TD-error：\n$$\ng=\\nabla_{\\theta^{\\pi}} \\log \\pi\\left(u | \\tau_{t}^{a}\\right)\\left(r+\\gamma V\\left(s_{t+1}\\right)-V\\left(s_{t}\\right)\\right)\n$$'
                        )
                      ])
                    ]),
                    t._v(' '),
                    Q('li', [
                      Q('p', [t._v('Credit Assignment问题：')]),
                      t._v(' '),
                      Q('ul', [
                        Q('li', [t._v('TD-error考虑的是global reward的影响。')]),
                        t._v(' '),
                        Q('li', [t._v('对于每个actor而言，难以显式确认它对于global reward贡献。')])
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                Q('li', [
                  Q('p', [t._v('Difference reward：')]),
                  t._v(' '),
                  Q('ul', [
                    Q('li', [
                      Q('p', [t._v('Per-agent shaped reward：')]),
                      t._v(' '),
                      Q('ul', [
                        Q('li', [
                          Q(
                            'p',
                            [
                              t._v('每个agent都构建一个模型：表征当自己的action替换成一个default的action'),
                              Q('mjx-container', { staticClass: 'MathJax', attrs: { jax: 'SVG' } }, [
                                Q(
                                  'svg',
                                  {
                                    staticStyle: { 'vertical-align': '-0.025ex' },
                                    attrs: {
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      width: '1.939ex',
                                      height: '1.552ex',
                                      viewBox: '0 -674.8 857.1 685.8'
                                    }
                                  },
                                  [
                                    Q(
                                      'g',
                                      {
                                        attrs: {
                                          stroke: 'currentColor',
                                          fill: 'currentColor',
                                          'stroke-width': '0',
                                          transform: 'matrix(1 0 0 -1 0 0)'
                                        }
                                      },
                                      [
                                        Q('g', { attrs: { 'data-mml-node': 'math' } }, [
                                          Q('g', { attrs: { 'data-mml-node': 'msup' } }, [
                                            Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                              Q('path', {
                                                attrs: {
                                                  'data-c': '63',
                                                  d:
                                                    'M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z'
                                                }
                                              })
                                            ]),
                                            Q(
                                              'g',
                                              {
                                                attrs: {
                                                  'data-mml-node': 'TeXAtom',
                                                  transform: 'translate(433, 363) scale(0.707)'
                                                }
                                              },
                                              [
                                                Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                                  Q('path', {
                                                    attrs: {
                                                      'data-c': '61',
                                                      d:
                                                        'M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z'
                                                    }
                                                  })
                                                ])
                                              ]
                                            )
                                          ])
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              t._v(
                                '的时候，对于reward的影响。\n$$\nD^{a}=r(s, \\mathbf{u})-r\\left(s,\\left(\\mathbf{u}^{-a}, c^{a}\\right)\\right)\n$$'
                              )
                            ],
                            1
                          )
                        ]),
                        t._v(' '),
                        Q('li', [
                          Q('p', [
                            t._v(
                              '那么如果agent a选择了一个能够提高D的action，那么这个action也是对global reward是有贡献的。这其实也就部分解决了credit assignment的问题。\n$$\nD^{a}\\left(s,\\left(\\mathbf{u}^{-a}, \\dot{u}^{a}\\right)\\right)>D^{a}(s, \\mathbf{u}) \\Longrightarrow r\\left(s,\\left(\\mathbf{u}^{-a}, \\dot{u}^{a}\\right)\\right)>r\\left(s,\\left(\\mathbf{u}^{-a}, a\\right)\\right)\n$$'
                            )
                          ])
                        ])
                      ])
                    ]),
                    t._v(' '),
                    Q('li', [
                      Q('p', [t._v('局限性：')]),
                      t._v(' '),
                      Q('ul', [
                        Q(
                          'li',
                          [
                            t._v('需要额外对'),
                            Q('mjx-container', { staticClass: 'MathJax', attrs: { jax: 'SVG' } }, [
                              Q(
                                'svg',
                                {
                                  staticStyle: { 'vertical-align': '-0.566ex' },
                                  attrs: {
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '13.203ex',
                                    height: '2.32ex',
                                    viewBox: '0 -775.2 5835.6 1025.2'
                                  }
                                },
                                [
                                  Q(
                                    'g',
                                    {
                                      attrs: {
                                        stroke: 'currentColor',
                                        fill: 'currentColor',
                                        'stroke-width': '0',
                                        transform: 'matrix(1 0 0 -1 0 0)'
                                      }
                                    },
                                    [
                                      Q('g', { attrs: { 'data-mml-node': 'math' } }, [
                                        Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                          Q('path', {
                                            attrs: {
                                              'data-c': '72',
                                              d:
                                                'M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z'
                                            }
                                          })
                                        ]),
                                        Q('g', { attrs: { 'data-mml-node': 'mrow', transform: 'translate(451, 0)' } }, [
                                          Q('g', { attrs: { 'data-mml-node': 'mo' } }, [
                                            Q('path', {
                                              attrs: {
                                                'data-c': '28',
                                                d:
                                                  'M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z'
                                              }
                                            })
                                          ]),
                                          Q('g', { attrs: { 'data-mml-node': 'mi', transform: 'translate(389, 0)' } }, [
                                            Q('path', {
                                              attrs: {
                                                'data-c': '73',
                                                d:
                                                  'M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z'
                                              }
                                            })
                                          ]),
                                          Q('g', { attrs: { 'data-mml-node': 'mo', transform: 'translate(858, 0)' } }, [
                                            Q('path', {
                                              attrs: {
                                                'data-c': '2C',
                                                d:
                                                  'M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z'
                                              }
                                            })
                                          ]),
                                          Q(
                                            'g',
                                            { attrs: { 'data-mml-node': 'mrow', transform: 'translate(1302.7, 0)' } },
                                            [
                                              Q('g', { attrs: { 'data-mml-node': 'mo' } }, [
                                                Q('path', {
                                                  attrs: {
                                                    'data-c': '28',
                                                    d:
                                                      'M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z'
                                                  }
                                                })
                                              ]),
                                              Q(
                                                'g',
                                                { attrs: { 'data-mml-node': 'msup', transform: 'translate(389, 0)' } },
                                                [
                                                  Q('g', { attrs: { 'data-mml-node': 'TeXAtom' } }, [
                                                    Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                                      Q('path', {
                                                        attrs: {
                                                          'data-c': '75',
                                                          d:
                                                            'M40 442L134 446Q228 450 229 450H235V273V165Q235 90 238 74T254 52Q268 46 304 46H319Q352 46 380 67T419 121L420 123Q424 135 425 199Q425 201 425 207Q425 233 425 249V316Q425 354 423 363T410 376Q396 380 369 380H356V442L554 450V267Q554 84 556 79Q561 62 610 62H623V31Q623 0 622 0Q603 0 527 -3T432 -6Q431 -6 431 25V56L420 45Q373 6 332 -1Q313 -6 281 -6Q208 -6 165 14T109 87L107 98L106 230Q106 358 104 366Q96 380 50 380H37V442H40Z'
                                                        }
                                                      })
                                                    ])
                                                  ]),
                                                  Q(
                                                    'g',
                                                    {
                                                      attrs: {
                                                        'data-mml-node': 'TeXAtom',
                                                        transform: 'translate(639, 363) scale(0.707)'
                                                      }
                                                    },
                                                    [
                                                      Q('g', { attrs: { 'data-mml-node': 'mo' } }, [
                                                        Q('path', {
                                                          attrs: {
                                                            'data-c': '2212',
                                                            d:
                                                              'M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z'
                                                          }
                                                        })
                                                      ]),
                                                      Q(
                                                        'g',
                                                        {
                                                          attrs: {
                                                            'data-mml-node': 'mi',
                                                            transform: 'translate(778, 0)'
                                                          }
                                                        },
                                                        [
                                                          Q('path', {
                                                            attrs: {
                                                              'data-c': '61',
                                                              d:
                                                                'M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z'
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              Q(
                                                'g',
                                                { attrs: { 'data-mml-node': 'mo', transform: 'translate(2002.2, 0)' } },
                                                [
                                                  Q('path', {
                                                    attrs: {
                                                      'data-c': '2C',
                                                      d:
                                                        'M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z'
                                                    }
                                                  })
                                                ]
                                              ),
                                              Q(
                                                'g',
                                                {
                                                  attrs: { 'data-mml-node': 'msup', transform: 'translate(2446.9, 0)' }
                                                },
                                                [
                                                  Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                                    Q('path', {
                                                      attrs: {
                                                        'data-c': '63',
                                                        d:
                                                          'M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z'
                                                      }
                                                    })
                                                  ]),
                                                  Q(
                                                    'g',
                                                    {
                                                      attrs: {
                                                        'data-mml-node': 'TeXAtom',
                                                        transform: 'translate(433, 363) scale(0.707)'
                                                      }
                                                    },
                                                    [
                                                      Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                                        Q('path', {
                                                          attrs: {
                                                            'data-c': '61',
                                                            d:
                                                              'M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z'
                                                          }
                                                        })
                                                      ])
                                                    ]
                                                  )
                                                ]
                                              ),
                                              Q(
                                                'g',
                                                { attrs: { 'data-mml-node': 'mo', transform: 'translate(3303.9, 0)' } },
                                                [
                                                  Q('path', {
                                                    attrs: {
                                                      'data-c': '29',
                                                      d:
                                                        'M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z'
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          Q(
                                            'g',
                                            { attrs: { 'data-mml-node': 'mo', transform: 'translate(4995.6, 0)' } },
                                            [
                                              Q('path', {
                                                attrs: {
                                                  'data-c': '29',
                                                  d:
                                                    'M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z'
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ]),
                            t._v(' 进行估计。')
                          ],
                          1
                        ),
                        t._v(' '),
                        Q(
                          'li',
                          [
                            t._v('需要用户指定默认的动作'),
                            Q('mjx-container', { staticClass: 'MathJax', attrs: { jax: 'SVG' } }, [
                              Q(
                                'svg',
                                {
                                  staticStyle: { 'vertical-align': '-0.025ex' },
                                  attrs: {
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '1.939ex',
                                    height: '1.552ex',
                                    viewBox: '0 -674.8 857.1 685.8'
                                  }
                                },
                                [
                                  Q(
                                    'g',
                                    {
                                      attrs: {
                                        stroke: 'currentColor',
                                        fill: 'currentColor',
                                        'stroke-width': '0',
                                        transform: 'matrix(1 0 0 -1 0 0)'
                                      }
                                    },
                                    [
                                      Q('g', { attrs: { 'data-mml-node': 'math' } }, [
                                        Q('g', { attrs: { 'data-mml-node': 'msup' } }, [
                                          Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                            Q('path', {
                                              attrs: {
                                                'data-c': '63',
                                                d:
                                                  'M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z'
                                              }
                                            })
                                          ]),
                                          Q(
                                            'g',
                                            {
                                              attrs: {
                                                'data-mml-node': 'TeXAtom',
                                                transform: 'translate(433, 363) scale(0.707)'
                                              }
                                            },
                                            [
                                              Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                                Q('path', {
                                                  attrs: {
                                                    'data-c': '61',
                                                    d:
                                                      'M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z'
                                                  }
                                                })
                                              ])
                                            ]
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ]),
                            t._v('。')
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                Q('li', [
                  Q('p', [t._v('Counterfactual baseline：')]),
                  t._v(' '),
                  Q('ul', [
                    Q('li', [
                      Q('p', [t._v('估计Q(s, u):')]),
                      t._v(' '),
                      Q('ul', [Q('li', [t._v('基于golbal state和joint action， 估计Q-value。')])])
                    ]),
                    t._v(' '),
                    Q('li', [
                      Q('p', [t._v('Advantage based on counterfactual baseline：')]),
                      t._v(' '),
                      Q('ul', [
                        Q('li', [
                          Q('p', [
                            t._v(
                              '方程中的第一项是当前选择的action的global q-value。方程中的第二项，表征在agent a的所有可能选择状态下能够获得的golbal q-value的期望，也就是常规理解的baselines。'
                            )
                          ])
                        ]),
                        t._v(' '),
                        Q('li', [
                          Q('p', [
                            t._v(
                              '联系到difference reward中，这里用centralised critic替代了原式中的reward。从而直接在数据中进行学习，避免了对reward估计对多余simulations。同时，对于agent a的所有action进行期望，从而避免需要人工设置默认aciton的问题。'
                            )
                          ]),
                          t._v(' '),
                          Q('ul', [
                            Q('li', [
                              t._v(
                                '$$\nA^{a}(s, \\mathbf{u})=Q(s, \\mathbf{u})-\\sum_{u^{\\prime a}} \\pi^{a}\\left(u^{\\prime a} | \\tau^{a}\\right) Q\\left(s,\\left(\\mathbf{u}^{-a}, u^{\\prime a}\\right)\\right)\n$$'
                              )
                            ])
                          ])
                        ])
                      ])
                    ]),
                    t._v(' '),
                    Q('li', [
                      Q('p', [t._v('Self-consistency的问题：baseline。')]),
                      t._v(' '),
                      Q('ul', [
                        Q('li', [
                          t._v(
                            '这个Advantage具有与aristocrat utily相同的结构，但是后者的模式中，policy和unility function是相互依赖的，所以导致了self-consistency的问题。'
                          )
                        ]),
                        t._v(' '),
                        Q('li', [
                          t._v(
                            '在这里，counterfactual baselines的期望是对gradient起作用的，而在policy gradient的相关证明中，它实际上对gradient的期望是0，并不会带来bias。'
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              t._v(' '),
              Q('h2', { attrs: { id: 'efficient-critic-representation' } }, [
                Q(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#efficient-critic-representation', 'aria-hidden': 'true' }
                  },
                  [t._v('#')]
                ),
                t._v(' Efficient critic representation')
              ]),
              t._v(' '),
              Q('ul', [
                Q('li', [
                  Q('p', [t._v('问题：')]),
                  t._v(' '),
                  Q('ul', [
                    Q('li', [
                      t._v(
                        '在上节中引入了counterfactual baseline，它的核心作用之一是通过对对应agent的动作求期望消去了difference设置默认action的需求，求和这也导致了需要多次进行前向对需求；'
                      )
                    ]),
                    t._v(' '),
                    Q(
                      'li',
                      [
                        t._v('另外，如果使用神经网络，假设agent的action数量是'),
                        Q('mjx-container', { staticClass: 'MathJax', attrs: { jax: 'SVG' } }, [
                          Q(
                            'svg',
                            {
                              staticStyle: { 'vertical-align': '-0.05ex' },
                              attrs: {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '1.735ex',
                                height: '1.595ex',
                                viewBox: '0 -683 767 705'
                              }
                            },
                            [
                              Q(
                                'g',
                                {
                                  attrs: {
                                    stroke: 'currentColor',
                                    fill: 'currentColor',
                                    'stroke-width': '0',
                                    transform: 'matrix(1 0 0 -1 0 0)'
                                  }
                                },
                                [
                                  Q('g', { attrs: { 'data-mml-node': 'math' } }, [
                                    Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                      Q('path', {
                                        attrs: {
                                          'data-c': '55',
                                          d:
                                            'M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z'
                                        }
                                      })
                                    ])
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        t._v('， 一共有n个agent，那么就需要 '),
                        Q('mjx-container', { staticClass: 'MathJax', attrs: { jax: 'SVG' } }, [
                          Q(
                            'svg',
                            {
                              staticStyle: { 'vertical-align': '-0.564ex' },
                              attrs: {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '4.066ex',
                                height: '2.26ex',
                                viewBox: '0 -749.5 1797.3 999'
                              }
                            },
                            [
                              Q(
                                'g',
                                {
                                  attrs: {
                                    stroke: 'currentColor',
                                    fill: 'currentColor',
                                    'stroke-width': '0',
                                    transform: 'matrix(1 0 0 -1 0 0)'
                                  }
                                },
                                [
                                  Q('g', { attrs: { 'data-mml-node': 'math' } }, [
                                    Q('g', { attrs: { 'data-mml-node': 'mo' } }, [
                                      Q('path', {
                                        attrs: {
                                          'data-c': '7C',
                                          d:
                                            'M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z'
                                        }
                                      })
                                    ]),
                                    Q('g', { attrs: { 'data-mml-node': 'mi', transform: 'translate(278, 0)' } }, [
                                      Q('path', {
                                        attrs: {
                                          'data-c': '55',
                                          d:
                                            'M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z'
                                        }
                                      })
                                    ]),
                                    Q('g', { attrs: { 'data-mml-node': 'msup', transform: 'translate(1045, 0)' } }, [
                                      Q('g', { attrs: { 'data-mml-node': 'mo' } }, [
                                        Q('path', {
                                          attrs: {
                                            'data-c': '7C',
                                            d:
                                              'M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z'
                                          }
                                        })
                                      ]),
                                      Q(
                                        'g',
                                        {
                                          attrs: {
                                            'data-mml-node': 'TeXAtom',
                                            transform: 'translate(278, 363) scale(0.707)'
                                          }
                                        },
                                        [
                                          Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                            Q('path', {
                                              attrs: {
                                                'data-c': '6E',
                                                d:
                                                  'M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z'
                                              }
                                            })
                                          ])
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        t._v(' 个输出节点。这实际上也是不可接受的。')
                      ],
                      1
                    )
                  ])
                ]),
                t._v(' '),
                Q('li', [
                  Q('p', [t._v('Efficient critic representation：')]),
                  t._v(' '),
                  Q('ul', [
                    Q('li', [
                      Q(
                        'p',
                        [
                          t._v('在这个结构中，将其他agents的actions '),
                          Q('mjx-container', { staticClass: 'MathJax', attrs: { jax: 'SVG' } }, [
                            Q(
                              'svg',
                              {
                                staticStyle: { 'vertical-align': '-0.626ex' },
                                attrs: {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  width: '3.65ex',
                                  height: '2.49ex',
                                  viewBox: '0 -823.8 1613.2 1100.7'
                                }
                              },
                              [
                                Q(
                                  'g',
                                  {
                                    attrs: {
                                      stroke: 'currentColor',
                                      fill: 'currentColor',
                                      'stroke-width': '0',
                                      transform: 'matrix(1 0 0 -1 0 0)'
                                    }
                                  },
                                  [
                                    Q('g', { attrs: { 'data-mml-node': 'math' } }, [
                                      Q('g', { attrs: { 'data-mml-node': 'msubsup' } }, [
                                        Q('g', { attrs: { 'data-mml-node': 'TeXAtom' } }, [
                                          Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                            Q('path', {
                                              attrs: {
                                                'data-c': '75',
                                                d:
                                                  'M40 442L134 446Q228 450 229 450H235V273V165Q235 90 238 74T254 52Q268 46 304 46H319Q352 46 380 67T419 121L420 123Q424 135 425 199Q425 201 425 207Q425 233 425 249V316Q425 354 423 363T410 376Q396 380 369 380H356V442L554 450V267Q554 84 556 79Q561 62 610 62H623V31Q623 0 622 0Q603 0 527 -3T432 -6Q431 -6 431 25V56L420 45Q373 6 332 -1Q313 -6 281 -6Q208 -6 165 14T109 87L107 98L106 230Q106 358 104 366Q96 380 50 380H37V442H40Z'
                                              }
                                            })
                                          ])
                                        ]),
                                        Q(
                                          'g',
                                          {
                                            attrs: {
                                              'data-mml-node': 'TeXAtom',
                                              transform: 'translate(639, 411.6) scale(0.707)'
                                            }
                                          },
                                          [
                                            Q('g', { attrs: { 'data-mml-node': 'mo' } }, [
                                              Q('path', {
                                                attrs: {
                                                  'data-c': '2212',
                                                  d:
                                                    'M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z'
                                                }
                                              })
                                            ]),
                                            Q(
                                              'g',
                                              { attrs: { 'data-mml-node': 'mi', transform: 'translate(778, 0)' } },
                                              [
                                                Q('path', {
                                                  attrs: {
                                                    'data-c': '61',
                                                    d:
                                                      'M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z'
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        Q(
                                          'g',
                                          {
                                            attrs: {
                                              'data-mml-node': 'TeXAtom',
                                              transform: 'translate(639, -269) scale(0.707)'
                                            }
                                          },
                                          [
                                            Q('g', { attrs: { 'data-mml-node': 'mi' } }, [
                                              Q('path', {
                                                attrs: {
                                                  'data-c': '74',
                                                  d:
                                                    'M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z'
                                                }
                                              })
                                            ])
                                          ]
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ]
                            )
                          ]),
                          t._v(', 结合其他历史信息作为输入。')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    Q('li', [
                      Q('p', [
                        t._v(
                          '输出则是condition on其他action的情况下的当前agent的期望。并利用这个信息，取出所有q-value计算baselines，并与当前action的q-value作差得到Advantage funciton，最终用于梯度下降。'
                        )
                      ]),
                      t._v(' '),
                      Q('p', [
                        Q('img', {
                          attrs: {
                            src: 'http://ipic-ccyy.oss-cn-shenzhen.aliyuncs.com/blog/2019-07-09-150342.png',
                            alt: 'image-20190709230341262'
                          }
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      a.default = e.exports
    }
  }
])
