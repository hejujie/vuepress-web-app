;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    208: function(t, e, n) {
      'use strict'
      n.d(e, 'd', function() {
        return i
      }),
        n.d(e, 'a', function() {
          return s
        }),
        n.d(e, 'i', function() {
          return a
        }),
        n.d(e, 'f', function() {
          return u
        }),
        n.d(e, 'g', function() {
          return c
        }),
        n.d(e, 'h', function() {
          return l
        }),
        n.d(e, 'b', function() {
          return h
        }),
        n.d(e, 'e', function() {
          return f
        }),
        n.d(e, 'k', function() {
          return p
        }),
        n.d(e, 'l', function() {
          return d
        }),
        n.d(e, 'c', function() {
          return g
        }),
        n.d(e, 'j', function() {
          return v
        })
      const i = /#.*$/,
        r = /\.(md|html)$/,
        s = /\/$/,
        a = /^(https?:|mailto:|tel:)/
      function o(t) {
        return decodeURI(t)
          .replace(i, '')
          .replace(r, '')
      }
      function u(t) {
        return a.test(t)
      }
      function c(t) {
        return /^mailto:/.test(t)
      }
      function l(t) {
        return /^tel:/.test(t)
      }
      function h(t) {
        if (u(t)) return t
        const e = t.match(i),
          n = e ? e[0] : '',
          r = o(t)
        return s.test(r) ? t : r + '.html' + n
      }
      function f(t, e) {
        const n = t.hash,
          r = (function(t) {
            const e = t.match(i)
            if (e) return e[0]
          })(e)
        return (!r || n === r) && o(t.path) === o(e)
      }
      function p(t, e, n) {
        if (u(e)) return { type: 'external', path: e }
        n &&
          (e = (function(t, e, n) {
            const i = t.charAt(0)
            if ('/' === i) return t
            if ('?' === i || '#' === i) return e + t
            const r = e.split('/')
            ;(n && r[r.length - 1]) || r.pop()
            const s = t.replace(/^\//, '').split('/')
            for (let t = 0; t < s.length; t++) {
              const e = s[t]
              '..' === e ? r.pop() : '.' !== e && r.push(e)
            }
            '' !== r[0] && r.unshift('')
            return r.join('/')
          })(e, n))
        const i = o(e)
        for (let e = 0; e < t.length; e++)
          if (o(t[e].regularPath) === i) return Object.assign({}, t[e], { type: 'page', path: h(t[e].path) })
        return console.error(`[vuepress] No matching page found for sidebar item "${e}"`), {}
      }
      function d(t, e, n, i) {
        const { pages: r, themeConfig: s } = n,
          a = (i && s.locales && s.locales[i]) || s
        if ('auto' === (t.frontmatter.sidebar || a.sidebar || s.sidebar))
          return (function(t) {
            const e = g(t.headers || [])
            return [
              {
                type: 'group',
                collapsable: !1,
                title: t.title,
                path: null,
                children: e.map(e => ({
                  type: 'auto',
                  title: e.title,
                  basePath: t.path,
                  path: t.path + '#' + e.slug,
                  children: e.children || []
                }))
              }
            ]
          })(t)
        const o = a.sidebar || s.sidebar
        if (o) {
          const { base: t, config: n } = (function(t, e) {
            if (Array.isArray(e)) return { base: '/', config: e }
            for (const i in e)
              if (0 === ((n = t), /(\.html|\/)$/.test(n) ? n : n + '/').indexOf(encodeURI(i)))
                return { base: i, config: e[i] }
            var n
            return {}
          })(e, o)
          return n
            ? n.map(e =>
                (function t(e, n, i, r = 1) {
                  if ('string' == typeof e) return p(n, e, i)
                  if (Array.isArray(e)) return Object.assign(p(n, e[0], i), { title: e[1] })
                  {
                    r > 3 && console.error('[vuepress] detected a too deep nested sidebar group.')
                    const s = e.children || []
                    return 0 === s.length && e.path
                      ? Object.assign(p(n, e.path, i), { title: e.title })
                      : {
                          type: 'group',
                          path: e.path,
                          title: e.title,
                          sidebarDepth: e.sidebarDepth,
                          children: s.map(e => t(e, n, i, r + 1)),
                          collapsable: !1 !== e.collapsable
                        }
                  }
                })(e, r, t)
              )
            : []
        }
        return []
      }
      function g(t) {
        let e
        return (
          (t = t.map(t => Object.assign({}, t))).forEach(t => {
            2 === t.level ? (e = t) : e && (e.children || (e.children = [])).push(t)
          }),
          t.filter(t => 2 === t.level)
        )
      }
      function v(t) {
        return Object.assign(t, { type: t.items && t.items.length ? 'links' : 'link' })
      }
    },
    209: function(t, e, n) {
      'use strict'
      var i = n(2),
        r = n(71)(!1),
        s = [].indexOf,
        a = !!s && 1 / [1].indexOf(1, -0) < 0
      i(i.P + i.F * (a || !n(26)(s)), 'Array', {
        indexOf: function(t) {
          return a ? s.apply(this, arguments) || 0 : r(this, t, arguments[1])
        }
      })
    },
    211: function(t, e, n) {
      var i = n(69),
        r = n(11)('toStringTag'),
        s =
          'Arguments' ==
          i(
            (function() {
              return arguments
            })()
          )
      t.exports = function(t) {
        var e, n, a
        return void 0 === t
          ? 'Undefined'
          : null === t
            ? 'Null'
            : 'string' ==
              typeof (n = (function(t, e) {
                try {
                  return t[e]
                } catch (t) {}
              })((e = Object(t)), r))
              ? n
              : s
                ? i(e)
                : 'Object' == (a = i(e)) && 'function' == typeof e.callee
                  ? 'Arguments'
                  : a
      }
    },
    221: function(t, e, n) {
      'use strict'
      var i = n(2),
        r = n(44)(3)
      i(i.P + i.F * !n(26)([].some, !0), 'Array', {
        some: function(t) {
          return r(this, t, arguments[1])
        }
      })
    },
    222: function(t, e, n) {
      'use strict'
      var i = n(43)
      t.exports = function() {
        var t = i(this),
          e = ''
        return (
          t.global && (e += 'g'),
          t.ignoreCase && (e += 'i'),
          t.multiline && (e += 'm'),
          t.unicode && (e += 'u'),
          t.sticky && (e += 'y'),
          e
        )
      }
    },
    223: function(t, e, n) {
      t.exports = n(229)
    },
    224: function(t, e, n) {
      var i = n(211),
        r = n(11)('iterator'),
        s = n(40)
      t.exports = n(18).getIteratorMethod = function(t) {
        if (null != t) return t[r] || t['@@iterator'] || s[i(t)]
      }
    },
    226: function(t, e, n) {},
    227: function(t, e, n) {},
    228: function(t, e, n) {},
    229: function(t, e, n) {
      n(230), (t.exports = n(18).Array.isArray)
    },
    230: function(t, e, n) {
      var i = n(42)
      i(i.S, 'Array', { isArray: n(113) })
    },
    231: function(t, e, n) {
      t.exports = n(232)
    },
    232: function(t, e, n) {
      n(106), n(233), (t.exports = n(18).Array.from)
    },
    233: function(t, e, n) {
      'use strict'
      var i = n(111),
        r = n(42),
        s = n(70),
        a = n(234),
        o = n(235),
        u = n(112),
        c = n(236),
        l = n(224)
      r(
        r.S +
          r.F *
            !n(237)(function(t) {
              Array.from(t)
            }),
        'Array',
        {
          from: function(t) {
            var e,
              n,
              r,
              h,
              f = s(t),
              p = 'function' == typeof this ? this : Array,
              d = arguments.length,
              g = d > 1 ? arguments[1] : void 0,
              v = void 0 !== g,
              m = 0,
              b = l(f)
            if ((v && (g = i(g, d > 2 ? arguments[2] : void 0, 2)), null == b || (p == Array && o(b))))
              for (n = new p((e = u(f.length))); e > m; m++) c(n, m, v ? g(f[m], m) : f[m])
            else
              for (h = b.call(f), n = new p(); !(r = h.next()).done; m++)
                c(n, m, v ? a(h, g, [r.value, m], !0) : r.value)
            return (n.length = m), n
          }
        }
      )
    },
    234: function(t, e, n) {
      var i = n(24)
      t.exports = function(t, e, n, r) {
        try {
          return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
          var s = t.return
          throw (void 0 !== s && i(s.call(t)), e)
        }
      }
    },
    235: function(t, e, n) {
      var i = n(40),
        r = n(11)('iterator'),
        s = Array.prototype
      t.exports = function(t) {
        return void 0 !== t && (i.Array === t || s[r] === t)
      }
    },
    236: function(t, e, n) {
      'use strict'
      var i = n(13),
        r = n(27)
      t.exports = function(t, e, n) {
        e in t ? i.f(t, e, r(0, n)) : (t[e] = n)
      }
    },
    237: function(t, e, n) {
      var i = n(11)('iterator'),
        r = !1
      try {
        var s = [7][i]()
        ;(s.return = function() {
          r = !0
        }),
          Array.from(s, function() {
            throw 2
          })
      } catch (t) {}
      t.exports = function(t, e) {
        if (!e && !r) return !1
        var n = !1
        try {
          var s = [7],
            a = s[i]()
          ;(a.next = function() {
            return { done: (n = !0) }
          }),
            (s[i] = function() {
              return a
            }),
            t(s)
        } catch (t) {}
        return n
      }
    },
    238: function(t, e, n) {
      t.exports = n(239)
    },
    239: function(t, e, n) {
      n(107), n(106), (t.exports = n(240))
    },
    240: function(t, e, n) {
      var i = n(211),
        r = n(11)('iterator'),
        s = n(40)
      t.exports = n(18).isIterable = function(t) {
        var e = Object(t)
        return void 0 !== e[r] || '@@iterator' in e || s.hasOwnProperty(i(e))
      }
    },
    241: function(t, e, n) {},
    242: function(t, e, n) {},
    243: function(t, e, n) {},
    244: function(t, e, n) {},
    245: function(t, e, n) {},
    246: function(t, e, n) {},
    247: function(t, e, n) {},
    248: function(t, e, n) {},
    249: function(t, e, n) {},
    260: function(t, e, n) {
      'use strict'
      var i = n(223),
        r = n.n(i)
      var s = n(231),
        a = n.n(s),
        o = n(238),
        u = n.n(o)
      function c(t) {
        return (
          (function(t) {
            if (r()(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e]
              return n
            }
          })(t) ||
          (function(t) {
            if (u()(Object(t)) || '[object Arguments]' === Object.prototype.toString.call(t)) return a()(t)
          })(t) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance')
          })()
        )
      }
      n.d(e, 'a', function() {
        return c
      })
    },
    261: function(t, e, n) {
      n(108)('match', 1, function(t, e, n) {
        return [
          function(n) {
            'use strict'
            var i = t(this),
              r = null == n ? void 0 : n[e]
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
          },
          n
        ]
      })
    },
    277: function(t, e, n) {
      'use strict'
      n.r(e)
      n(221)
      var i = n(208),
        r = {
          name: 'SidebarGroup',
          props: ['item', 'open', 'collapsable', 'depth'],
          components: { DropdownTransition: n(281).a },
          beforeCreate: function() {
            this.$options.components.SidebarLinks = n(277).default
          },
          methods: { isActive: i.e }
        },
        s = (n(301), n(22)),
        a = Object(s.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'section',
              {
                staticClass: 'sidebar-group',
                class: [{ collapsable: t.collapsable, 'is-sub-group': 0 !== t.depth }, 'depth-' + t.depth]
              },
              [
                t.item.path
                  ? n(
                      'router-link',
                      {
                        staticClass: 'sidebar-heading clickable',
                        class: { open: t.open, active: t.isActive(t.$route, t.item.path) },
                        attrs: { to: t.item.path },
                        nativeOn: {
                          click: function(e) {
                            return t.$emit('toggle')
                          }
                        }
                      },
                      [
                        n('span', [t._v(t._s(t.item.title))]),
                        t._v(' '),
                        t.collapsable ? n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' }) : t._e()
                      ]
                    )
                  : n(
                      'p',
                      {
                        staticClass: 'sidebar-heading',
                        class: { open: t.open },
                        on: {
                          click: function(e) {
                            return t.$emit('toggle')
                          }
                        }
                      },
                      [
                        n('span', [t._v(t._s(t.item.title))]),
                        t._v(' '),
                        t.collapsable ? n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' }) : t._e()
                      ]
                    ),
                t._v(' '),
                n(
                  'DropdownTransition',
                  [
                    t.open || !t.collapsable
                      ? n('SidebarLinks', {
                          staticClass: 'sidebar-group-items',
                          attrs: { items: t.item.children, sidebarDepth: t.item.sidebarDepth, depth: t.depth + 1 }
                        })
                      : t._e()
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports
      n(105)
      function o(t, e, n, i) {
        return t(
          'router-link',
          { props: { to: e, activeClass: '', exactActiveClass: '' }, class: { active: i, 'sidebar-link': !0 } },
          n
        )
      }
      function u(t, e, n, r, s) {
        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1
        return !e || a > s
          ? null
          : t(
              'ul',
              { class: 'sidebar-sub-headers' },
              e.map(function(e) {
                var c = Object(i.e)(r, n + '#' + e.slug)
                return t('li', { class: 'sidebar-sub-header' }, [
                  o(t, n + '#' + e.slug, e.title, c),
                  u(t, e.children, n, r, s, a + 1)
                ])
              })
            )
      }
      var c = {
        functional: !0,
        props: ['item', 'sidebarDepth'],
        render: function(t, e) {
          var n = e.parent,
            r = n.$page,
            s = (n.$site, n.$route),
            a = n.$themeConfig,
            c = n.$themeLocaleConfig,
            l = e.props,
            h = l.item,
            f = l.sidebarDepth,
            p = Object(i.e)(s, h.path),
            d =
              'auto' === h.type
                ? p ||
                  h.children.some(function(t) {
                    return Object(i.e)(s, h.basePath + '#' + t.slug)
                  })
                : p,
            g =
              'external' === h.type
                ? (function(t, e, n) {
                    return t(
                      'a',
                      {
                        attrs: { href: e, target: '_blank', rel: 'noopener noreferrer' },
                        class: { 'sidebar-link': !0 }
                      },
                      [n, t('OutboundLink')]
                    )
                  })(t, h.path, h.title || h.path)
                : o(t, h.path, h.title || h.path, d),
            v = r.frontmatter.sidebarDepth || f || c.sidebarDepth || a.sidebarDepth,
            m = null == v ? 1 : v,
            b = c.displayAllHeaders || a.displayAllHeaders
          return 'auto' === h.type
            ? [g, u(t, h.children, h.basePath, s, m)]
            : (d || b) && h.headers && !i.d.test(h.path)
              ? [g, u(t, Object(i.c)(h.headers), h.path, s, m)]
              : g
        }
      }
      n(302)
      var l = {
          name: 'SidebarLinks',
          components: { SidebarGroup: a, SidebarLink: Object(s.a)(c, void 0, void 0, !1, null, null, null).exports },
          props: ['items', 'depth', 'sidebarDepth'],
          data: function() {
            return { openGroupIndex: 0 }
          },
          created: function() {
            this.refreshIndex()
          },
          watch: {
            $route: function() {
              this.refreshIndex()
            }
          },
          methods: {
            refreshIndex: function() {
              var t = (function(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n]
                  if (
                    'group' === r.type &&
                    r.children.some(function(e) {
                      return 'page' === e.type && Object(i.e)(t, e.path)
                    })
                  )
                    return n
                }
                return -1
              })(this.$route, this.items)
              t > -1 && (this.openGroupIndex = t)
            },
            toggleGroup: function(t) {
              this.openGroupIndex = t === this.openGroupIndex ? -1 : t
            },
            isActive: function(t) {
              return Object(i.e)(this.$route, t.regularPath)
            }
          }
        },
        h = Object(s.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.items.length
              ? n(
                  'ul',
                  { staticClass: 'sidebar-links' },
                  t._l(t.items, function(e, i) {
                    return n(
                      'li',
                      { key: i },
                      [
                        'group' === e.type
                          ? n('SidebarGroup', {
                              attrs: {
                                item: e,
                                open: i === t.openGroupIndex,
                                collapsable: e.collapsable || e.collapsible,
                                depth: t.depth
                              },
                              on: {
                                toggle: function(e) {
                                  return t.toggleGroup(i)
                                }
                              }
                            })
                          : n('SidebarLink', { attrs: { sidebarDepth: t.sidebarDepth, item: e } })
                      ],
                      1
                    )
                  }),
                  0
                )
              : t._e()
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = h.exports
    },
    281: function(t, e, n) {
      'use strict'
      var i = {
          name: 'DropdownTransition',
          methods: {
            setHeight: function(t) {
              t.style.height = t.scrollHeight + 'px'
            },
            unsetHeight: function(t) {
              t.style.height = ''
            }
          }
        },
        r = (n(296), n(22)),
        s = Object(r.a)(
          i,
          function() {
            var t = this.$createElement
            return (this._self._c || t)(
              'transition',
              {
                attrs: { name: 'dropdown' },
                on: { enter: this.setHeight, 'after-enter': this.unsetHeight, 'before-leave': this.setHeight }
              },
              [this._t('default')],
              2
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.a = s.exports
    },
    282: function(t, e, n) {
      'use strict'
      n(283)('link', function(t) {
        return function(e) {
          return t(this, 'a', 'href', e)
        }
      })
    },
    283: function(t, e, n) {
      var i = n(2),
        r = n(12),
        s = n(28),
        a = /"/g,
        o = function(t, e, n, i) {
          var r = String(s(t)),
            o = '<' + e
          return '' !== n && (o += ' ' + n + '="' + String(i).replace(a, '&quot;') + '"'), o + '>' + r + '</' + e + '>'
        }
      t.exports = function(t, e) {
        var n = {}
        ;(n[t] = e(o)),
          i(
            i.P +
              i.F *
                r(function() {
                  var e = ''[t]('"')
                  return e !== e.toLowerCase() || e.split('"').length > 3
                }),
            'String',
            n
          )
      }
    },
    284: function(t, e, n) {
      'use strict'
      var i = n(226)
      n.n(i).a
    },
    285: function(t, e, n) {
      'use strict'
      n(286)('trim', function(t) {
        return function() {
          return t(this, 3)
        }
      })
    },
    286: function(t, e, n) {
      var i = n(2),
        r = n(28),
        s = n(12),
        a = n(287),
        o = '[' + a + ']',
        u = RegExp('^' + o + o + '*'),
        c = RegExp(o + o + '*$'),
        l = function(t, e, n) {
          var r = {},
            o = s(function() {
              return !!a[t]() || '​' != '​'[t]()
            }),
            u = (r[t] = o ? e(h) : a[t])
          n && (r[n] = u), i(i.P + i.F * o, 'String', r)
        },
        h = (l.trim = function(t, e) {
          return (t = String(r(t))), 1 & e && (t = t.replace(u, '')), 2 & e && (t = t.replace(c, '')), t
        })
      t.exports = l
    },
    287: function(t, e) {
      t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff'
    },
    288: function(t, e, n) {
      'use strict'
      var i = n(227)
      n.n(i).a
    },
    289: function(t, e, n) {
      'use strict'
      var i = n(228)
      n.n(i).a
    },
    290: function(t, e, n) {
      var i = n(6),
        r = n(291),
        s = n(41).f,
        a = n(294).f,
        o = n(114),
        u = n(222),
        c = i.RegExp,
        l = c,
        h = c.prototype,
        f = /a/g,
        p = /a/g,
        d = new c(f) !== f
      if (
        n(23) &&
        (!d ||
          n(12)(function() {
            return (p[n(3)('match')] = !1), c(f) != f || c(p) == p || '/a/i' != c(f, 'i')
          }))
      ) {
        c = function(t, e) {
          var n = this instanceof c,
            i = o(t),
            s = void 0 === e
          return !n && i && t.constructor === c && s
            ? t
            : r(
                d ? new l(i && !s ? t.source : t, e) : l((i = t instanceof c) ? t.source : t, i && s ? u.call(t) : e),
                n ? this : h,
                c
              )
        }
        for (
          var g = function(t) {
              ;(t in c) ||
                s(c, t, {
                  configurable: !0,
                  get: function() {
                    return l[t]
                  },
                  set: function(e) {
                    l[t] = e
                  }
                })
            },
            v = a(l),
            m = 0;
          v.length > m;

        )
          g(v[m++])
        ;(h.constructor = c), (c.prototype = h), n(25)(i, 'RegExp', c)
      }
      n(295)('RegExp')
    },
    291: function(t, e, n) {
      var i = n(19),
        r = n(292).set
      t.exports = function(t, e, n) {
        var s,
          a = e.constructor
        return a !== n && 'function' == typeof a && (s = a.prototype) !== n.prototype && i(s) && r && r(t, s), t
      }
    },
    292: function(t, e, n) {
      var i = n(19),
        r = n(43),
        s = function(t, e) {
          if ((r(t), !i(e) && null !== e)) throw TypeError(e + ": can't set as prototype!")
        }
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(t, e, i) {
                try {
                  ;(i = n(73)(Function.call, n(293).f(Object.prototype, '__proto__').set, 2))(t, []),
                    (e = !(t instanceof Array))
                } catch (t) {
                  e = !0
                }
                return function(t, n) {
                  return s(t, n), e ? (t.__proto__ = n) : i(t, n), t
                }
              })({}, !1)
            : void 0),
        check: s
      }
    },
    293: function(t, e, n) {
      var i = n(119),
        r = n(72),
        s = n(30),
        a = n(117),
        o = n(29),
        u = n(116),
        c = Object.getOwnPropertyDescriptor
      e.f = n(23)
        ? c
        : function(t, e) {
            if (((t = s(t)), (e = a(e, !0)), u))
              try {
                return c(t, e)
              } catch (t) {}
            if (o(t, e)) return r(!i.f.call(t, e), t[e])
          }
    },
    294: function(t, e, n) {
      var i = n(118),
        r = n(74).concat('length', 'prototype')
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return i(t, r)
        }
    },
    295: function(t, e, n) {
      'use strict'
      var i = n(6),
        r = n(41),
        s = n(23),
        a = n(3)('species')
      t.exports = function(t) {
        var e = i[t]
        s &&
          e &&
          !e[a] &&
          r.f(e, a, {
            configurable: !0,
            get: function() {
              return this
            }
          })
      }
    },
    296: function(t, e, n) {
      'use strict'
      var i = n(241)
      n.n(i).a
    },
    297: function(t, e, n) {
      'use strict'
      var i = n(242)
      n.n(i).a
    },
    298: function(t, e, n) {
      'use strict'
      var i = n(243)
      n.n(i).a
    },
    299: function(t, e, n) {
      'use strict'
      var i = n(244)
      n.n(i).a
    },
    300: function(t, e, n) {
      'use strict'
      var i = n(245)
      n.n(i).a
    },
    301: function(t, e, n) {
      'use strict'
      var i = n(246)
      n.n(i).a
    },
    302: function(t, e, n) {
      'use strict'
      var i = n(247)
      n.n(i).a
    },
    303: function(t, e, n) {
      'use strict'
      var i = n(248)
      n.n(i).a
    },
    304: function(t, e, n) {
      'use strict'
      var i = n(249)
      n.n(i).a
    },
    378: function(t, e, n) {
      'use strict'
      n.r(e)
      n(110), n(109), n(221), n(282)
      var i = n(208),
        r = {
          props: { item: { required: !0 } },
          computed: {
            link: function() {
              return Object(i.b)(this.item.link)
            },
            exact: function() {
              var t = this
              return this.$site.locales
                ? Object.keys(this.$site.locales).some(function(e) {
                    return e === t.link
                  })
                : '/' === this.link
            }
          },
          methods: { isExternal: i.f, isMailto: i.g, isTel: i.h }
        },
        s = n(22),
        a = Object(s.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.isExternal(t.link)
              ? n(
                  'a',
                  {
                    staticClass: 'nav-link external',
                    attrs: {
                      href: t.link,
                      target: t.isMailto(t.link) || t.isTel(t.link) ? null : '_blank',
                      rel: t.isMailto(t.link) || t.isTel(t.link) ? null : 'noopener noreferrer'
                    }
                  },
                  [t._v('\n  ' + t._s(t.item.text) + '\n  '), n('OutboundLink')],
                  1
                )
              : n('router-link', { staticClass: 'nav-link', attrs: { to: t.link, exact: t.exact } }, [
                  t._v(t._s(t.item.text))
                ])
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        o = {
          components: { NavLink: a },
          computed: {
            data: function() {
              return this.$page.frontmatter
            },
            actionLink: function() {
              return { link: this.data.actionLink, text: this.data.actionText }
            }
          }
        },
        u = (n(284),
        Object(s.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'main',
              { staticClass: 'home', attrs: { 'aria-labelledby': 'main-title' } },
              [
                n('header', { staticClass: 'hero' }, [
                  t.data.heroImage
                    ? n('img', { attrs: { src: t.$withBase(t.data.heroImage), alt: t.data.heroAlt || 'hero' } })
                    : t._e(),
                  t._v(' '),
                  null !== t.data.heroText
                    ? n('h1', { attrs: { id: 'main-title' } }, [t._v(t._s(t.data.heroText || t.$title || 'Hello'))])
                    : t._e(),
                  t._v(' '),
                  n('p', { staticClass: 'description' }, [
                    t._v(
                      '\n      ' + t._s(t.data.tagline || t.$description || 'Welcome to your VuePress site') + '\n    '
                    )
                  ]),
                  t._v(' '),
                  t.data.actionText && t.data.actionLink
                    ? n(
                        'p',
                        { staticClass: 'action' },
                        [n('NavLink', { staticClass: 'action-button', attrs: { item: t.actionLink } })],
                        1
                      )
                    : t._e()
                ]),
                t._v(' '),
                t.data.features && t.data.features.length
                  ? n(
                      'div',
                      { staticClass: 'features' },
                      t._l(t.data.features, function(e, i) {
                        return n('div', { key: i, staticClass: 'feature' }, [
                          n('h2', [t._v(t._s(e.title))]),
                          t._v(' '),
                          n('p', [t._v(t._s(e.details))])
                        ])
                      }),
                      0
                    )
                  : t._e(),
                t._v(' '),
                n('Content', { staticClass: 'theme-default-content custom' }),
                t._v(' '),
                t.data.footer
                  ? n('div', { staticClass: 'footer' }, [t._v('\n    ' + t._s(t.data.footer) + '\n  ')])
                  : t._e()
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
        c = (n(261),
        n(120),
        n(121),
        n(209),
        n(285),
        {
          data: function() {
            return { query: '', focused: !1, focusIndex: 0 }
          },
          computed: {
            showSuggestions: function() {
              return this.focused && this.suggestions && this.suggestions.length
            },
            suggestions: function() {
              var t = this.query.trim().toLowerCase()
              if (t) {
                for (
                  var e = this.$site.pages,
                    n = this.$localePath,
                    i = function(e) {
                      return e.title && e.title.toLowerCase().indexOf(t) > -1
                    },
                    r = [],
                    s = 0;
                  s < e.length && !(r.length >= 5);
                  s++
                ) {
                  var a = e[s]
                  if (this.getPageLocalePath(a) === n && this.isSearchable(a))
                    if (i(a)) r.push(a)
                    else if (a.headers)
                      for (var o = 0; o < a.headers.length && !(r.length >= 5); o++) {
                        var u = a.headers[o]
                        i(u) && r.push(Object.assign({}, a, { path: a.path + '#' + u.slug, header: u }))
                      }
                }
                return r
              }
            },
            alignRight: function() {
              return (this.$site.themeConfig.nav || []).length + (this.$site.repo ? 1 : 0) <= 2
            }
          },
          methods: {
            getPageLocalePath: function(t) {
              for (var e in this.$site.locales || {}) if ('/' !== e && 0 === t.path.indexOf(e)) return e
              return '/'
            },
            isSearchable: function(t) {
              var e = null
              return (
                null === e ||
                (e = Array.isArray(e) ? e : new Array(e)).filter(function(e) {
                  return t.path.match(e)
                }).length > 0
              )
            },
            onUp: function() {
              this.showSuggestions &&
                (this.focusIndex > 0 ? this.focusIndex-- : (this.focusIndex = this.suggestions.length - 1))
            },
            onDown: function() {
              this.showSuggestions &&
                (this.focusIndex < this.suggestions.length - 1 ? this.focusIndex++ : (this.focusIndex = 0))
            },
            go: function(t) {
              this.showSuggestions &&
                (this.$router.push(this.suggestions[t].path), (this.query = ''), (this.focusIndex = 0))
            },
            focus: function(t) {
              this.focusIndex = t
            },
            unfocus: function() {
              this.focusIndex = -1
            }
          }
        }),
        l = (n(288),
        Object(s.a)(
          c,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('div', { staticClass: 'search-box' }, [
              n('input', {
                class: { focused: t.focused },
                attrs: { 'aria-label': 'Search', autocomplete: 'off', spellcheck: 'false' },
                domProps: { value: t.query },
                on: {
                  input: function(e) {
                    t.query = e.target.value
                  },
                  focus: function(e) {
                    t.focused = !0
                  },
                  blur: function(e) {
                    t.focused = !1
                  },
                  keyup: [
                    function(e) {
                      return !e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                        ? null
                        : t.go(t.focusIndex)
                    },
                    function(e) {
                      return !e.type.indexOf('key') && t._k(e.keyCode, 'up', 38, e.key, ['Up', 'ArrowUp'])
                        ? null
                        : t.onUp(e)
                    },
                    function(e) {
                      return !e.type.indexOf('key') && t._k(e.keyCode, 'down', 40, e.key, ['Down', 'ArrowDown'])
                        ? null
                        : t.onDown(e)
                    }
                  ]
                }
              }),
              t._v(' '),
              t.showSuggestions
                ? n(
                    'ul',
                    {
                      staticClass: 'suggestions',
                      class: { 'align-right': t.alignRight },
                      on: { mouseleave: t.unfocus }
                    },
                    t._l(t.suggestions, function(e, i) {
                      return n(
                        'li',
                        {
                          staticClass: 'suggestion',
                          class: { focused: i === t.focusIndex },
                          on: {
                            mousedown: function(e) {
                              return t.go(i)
                            },
                            mouseenter: function(e) {
                              return t.focus(i)
                            }
                          }
                        },
                        [
                          n(
                            'a',
                            {
                              attrs: { href: e.path },
                              on: {
                                click: function(t) {
                                  t.preventDefault()
                                }
                              }
                            },
                            [
                              n('span', { staticClass: 'page-title' }, [t._v(t._s(e.title || e.path))]),
                              t._v(' '),
                              e.header
                                ? n('span', { staticClass: 'header' }, [t._v('> ' + t._s(e.header.title))])
                                : t._e()
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                : t._e()
            ])
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
        h = (n(289),
        Object(s.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {
                staticClass: 'sidebar-button',
                on: {
                  click: function(e) {
                    return t.$emit('toggle-sidebar')
                  }
                }
              },
              [
                n(
                  'svg',
                  {
                    staticClass: 'icon',
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      'aria-hidden': 'true',
                      role: 'img',
                      viewBox: '0 0 448 512'
                    }
                  },
                  [
                    n('path', {
                      attrs: {
                        fill: 'currentColor',
                        d:
                          'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z'
                      }
                    })
                  ]
                )
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
        f = (n(290), n(260)),
        p = (n(115),
        n(105),
        {
          components: { NavLink: a, DropdownTransition: n(281).a },
          data: function() {
            return { open: !1 }
          },
          props: { item: { required: !0 } },
          methods: {
            toggle: function() {
              this.open = !this.open
            }
          }
        }),
        d = (n(297),
        {
          components: {
            NavLink: a,
            DropdownLink: Object(s.a)(
              p,
              function() {
                var t = this,
                  e = t.$createElement,
                  n = t._self._c || e
                return n(
                  'div',
                  { staticClass: 'dropdown-wrapper', class: { open: t.open } },
                  [
                    n('a', { staticClass: 'dropdown-title', on: { click: t.toggle } }, [
                      n('span', { staticClass: 'title' }, [t._v(t._s(t.item.text))]),
                      t._v(' '),
                      n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' })
                    ]),
                    t._v(' '),
                    n('DropdownTransition', [
                      n(
                        'ul',
                        {
                          directives: [{ name: 'show', rawName: 'v-show', value: t.open, expression: 'open' }],
                          staticClass: 'nav-dropdown'
                        },
                        t._l(t.item.items, function(e, i) {
                          return n(
                            'li',
                            { key: e.link || i, staticClass: 'dropdown-item' },
                            [
                              'links' === e.type ? n('h4', [t._v(t._s(e.text))]) : t._e(),
                              t._v(' '),
                              'links' === e.type
                                ? n(
                                    'ul',
                                    { staticClass: 'dropdown-subitem-wrapper' },
                                    t._l(e.items, function(t) {
                                      return n(
                                        'li',
                                        { key: t.link, staticClass: 'dropdown-subitem' },
                                        [n('NavLink', { attrs: { item: t } })],
                                        1
                                      )
                                    }),
                                    0
                                  )
                                : n('NavLink', { attrs: { item: e } })
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ])
                  ],
                  1
                )
              },
              [],
              !1,
              null,
              null,
              null
            ).exports
          },
          computed: {
            userNav: function() {
              return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
            },
            nav: function() {
              var t = this,
                e = this.$site.locales
              if (e && Object.keys(e).length > 1) {
                var n = this.$page.path,
                  i = this.$router.options.routes,
                  r = this.$site.themeConfig.locales || {},
                  s = {
                    text: this.$themeLocaleConfig.selectText || 'Languages',
                    items: Object.keys(e).map(function(s) {
                      var a,
                        o = e[s],
                        u = (r[s] && r[s].label) || o.lang
                      return (
                        o.lang === t.$lang
                          ? (a = n)
                          : ((a = n.replace(t.$localeConfig.path, s)),
                            i.some(function(t) {
                              return t.path === a
                            }) || (a = s)),
                        { text: u, link: a }
                      )
                    })
                  }
                return [].concat(Object(f.a)(this.userNav), [s])
              }
              return this.userNav
            },
            userLinks: function() {
              return (this.nav || []).map(function(t) {
                return Object.assign(Object(i.j)(t), { items: (t.items || []).map(i.j) })
              })
            },
            repoLink: function() {
              var t = this.$site.themeConfig.repo
              if (t) return /^https?:/.test(t) ? t : 'https://github.com/'.concat(t)
            },
            repoLabel: function() {
              if (this.repoLink) {
                if (this.$site.themeConfig.repoLabel) return this.$site.themeConfig.repoLabel
                for (
                  var t = this.repoLink.match(/^https?:\/\/[^\/]+/)[0], e = ['GitHub', 'GitLab', 'Bitbucket'], n = 0;
                  n < e.length;
                  n++
                ) {
                  var i = e[n]
                  if (new RegExp(i, 'i').test(t)) return i
                }
                return 'Source'
              }
            }
          }
        }),
        g = (n(298),
        Object(s.a)(
          d,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.userLinks.length || t.repoLink
              ? n(
                  'nav',
                  { staticClass: 'nav-links' },
                  [
                    t._l(t.userLinks, function(t) {
                      return n(
                        'div',
                        { key: t.link, staticClass: 'nav-item' },
                        [
                          'links' === t.type
                            ? n('DropdownLink', { attrs: { item: t } })
                            : n('NavLink', { attrs: { item: t } })
                        ],
                        1
                      )
                    }),
                    t._v(' '),
                    t.repoLink
                      ? n(
                          'a',
                          {
                            staticClass: 'repo-link',
                            attrs: { href: t.repoLink, target: '_blank', rel: 'noopener noreferrer' }
                          },
                          [t._v('\n    ' + t._s(t.repoLabel) + '\n    '), n('OutboundLink')],
                          1
                        )
                      : t._e()
                  ],
                  2
                )
              : t._e()
          },
          [],
          !1,
          null,
          null,
          null
        ).exports)
      function v(t, e) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)[e]
      }
      var m = {
          components: { SidebarButton: h, NavLinks: g, SearchBox: l, AlgoliaSearchBox: {} },
          data: function() {
            return { linksWrapMaxWidth: null }
          },
          mounted: function() {
            var t = this,
              e = parseInt(v(this.$el, 'paddingLeft')) + parseInt(v(this.$el, 'paddingRight')),
              n = function() {
                document.documentElement.clientWidth < 719
                  ? (t.linksWrapMaxWidth = null)
                  : (t.linksWrapMaxWidth =
                      t.$el.offsetWidth - e - ((t.$refs.siteName && t.$refs.siteName.offsetWidth) || 0))
              }
            n(), window.addEventListener('resize', n, !1)
          },
          computed: {
            algolia: function() {
              return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
            },
            isAlgoliaSearch: function() {
              return this.algolia && this.algolia.apiKey && this.algolia.indexName
            }
          }
        },
        b = (n(299),
        Object(s.a)(
          m,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'header',
              { staticClass: 'navbar' },
              [
                n('SidebarButton', {
                  on: {
                    'toggle-sidebar': function(e) {
                      return t.$emit('toggle-sidebar')
                    }
                  }
                }),
                t._v(' '),
                n('router-link', { staticClass: 'home-link', attrs: { to: t.$localePath } }, [
                  t.$site.themeConfig.logo
                    ? n('img', {
                        staticClass: 'logo',
                        attrs: { src: t.$withBase(t.$site.themeConfig.logo), alt: t.$siteTitle }
                      })
                    : t._e(),
                  t._v(' '),
                  t.$siteTitle
                    ? n(
                        'span',
                        { ref: 'siteName', staticClass: 'site-name', class: { 'can-hide': t.$site.themeConfig.logo } },
                        [t._v(t._s(t.$siteTitle))]
                      )
                    : t._e()
                ]),
                t._v(' '),
                n(
                  'div',
                  {
                    staticClass: 'links',
                    style: t.linksWrapMaxWidth ? { 'max-width': t.linksWrapMaxWidth + 'px' } : {}
                  },
                  [
                    t.isAlgoliaSearch
                      ? n('AlgoliaSearchBox', { attrs: { options: t.algolia } })
                      : !1 !== t.$site.themeConfig.search && !1 !== t.$page.frontmatter.search
                        ? n('SearchBox')
                        : t._e(),
                    t._v(' '),
                    n('NavLinks', { staticClass: 'can-hide' })
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports)
      function _(t, e, n) {
        var i = []
        !(function t(e, n) {
          for (var i = 0, r = e.length; i < r; i++) 'group' === e[i].type ? t(e[i].children || [], n) : n.push(e[i])
        })(e, i)
        for (var r = 0; r < i.length; r++) {
          var s = i[r]
          if ('page' === s.type && s.path === decodeURIComponent(t.path)) return i[r + n]
        }
      }
      var k = {
          props: ['sidebarItems'],
          computed: {
            lastUpdated: function() {
              return this.$page.lastUpdated
            },
            lastUpdatedText: function() {
              return 'string' == typeof this.$themeLocaleConfig.lastUpdated
                ? this.$themeLocaleConfig.lastUpdated
                : 'string' == typeof this.$site.themeConfig.lastUpdated
                  ? this.$site.themeConfig.lastUpdated
                  : 'Last Updated'
            },
            prev: function() {
              var t,
                e,
                n = this.$page.frontmatter.prev
              return !1 === n
                ? void 0
                : n
                  ? Object(i.k)(this.$site.pages, n, this.$route.path)
                  : ((t = this.$page), (e = this.sidebarItems), _(t, e, -1))
            },
            next: function() {
              var t,
                e,
                n = this.$page.frontmatter.next
              return !1 === n
                ? void 0
                : n
                  ? Object(i.k)(this.$site.pages, n, this.$route.path)
                  : ((t = this.$page), (e = this.sidebarItems), _(t, e, 1))
            },
            editLink: function() {
              if (!1 !== this.$page.frontmatter.editLink) {
                var t = this.$site.themeConfig,
                  e = t.repo,
                  n = t.editLinks,
                  i = t.docsDir,
                  r = void 0 === i ? '' : i,
                  s = t.docsBranch,
                  a = void 0 === s ? 'master' : s,
                  o = t.docsRepo,
                  u = void 0 === o ? e : o
                return u && n && this.$page.relativePath
                  ? this.createEditLink(e, u, r, a, this.$page.relativePath)
                  : void 0
              }
            },
            editLinkText: function() {
              return this.$themeLocaleConfig.editLinkText || this.$site.themeConfig.editLinkText || 'Edit this page'
            }
          },
          methods: {
            createEditLink: function(t, e, n, r, s) {
              return /bitbucket.org/.test(t)
                ? (i.i.test(e) ? e : t).replace(i.a, '') +
                    '/src' +
                    '/'.concat(r, '/') +
                    (n ? n.replace(i.a, '') + '/' : '') +
                    s +
                    '?mode=edit&spa=0&at='.concat(r, '&fileviewer=file-view-default')
                : (i.i.test(e) ? e : 'https://github.com/'.concat(e)).replace(i.a, '') +
                    '/edit' +
                    '/'.concat(r, '/') +
                    (n ? n.replace(i.a, '') + '/' : '') +
                    s
            }
          }
        },
        x = (n(300),
        Object(s.a)(
          k,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'main',
              { staticClass: 'page' },
              [
                t._t('top'),
                t._v(' '),
                n('Content', { staticClass: 'theme-default-content' }),
                t._v(' '),
                n('footer', { staticClass: 'page-edit' }, [
                  t.editLink
                    ? n(
                        'div',
                        { staticClass: 'edit-link' },
                        [
                          n('a', { attrs: { href: t.editLink, target: '_blank', rel: 'noopener noreferrer' } }, [
                            t._v(t._s(t.editLinkText))
                          ]),
                          t._v(' '),
                          n('OutboundLink')
                        ],
                        1
                      )
                    : t._e(),
                  t._v(' '),
                  t.lastUpdated
                    ? n('div', { staticClass: 'last-updated' }, [
                        n('span', { staticClass: 'prefix' }, [t._v(t._s(t.lastUpdatedText) + ': ')]),
                        t._v(' '),
                        n('span', { staticClass: 'time' }, [t._v(t._s(t.lastUpdated))])
                      ])
                    : t._e()
                ]),
                t._v(' '),
                t.prev || t.next
                  ? n('div', { staticClass: 'page-nav' }, [
                      n('p', { staticClass: 'inner' }, [
                        t.prev
                          ? n(
                              'span',
                              { staticClass: 'prev' },
                              [
                                t._v('\n        ←\n        '),
                                t.prev
                                  ? n('router-link', { staticClass: 'prev', attrs: { to: t.prev.path } }, [
                                      t._v('\n          ' + t._s(t.prev.title || t.prev.path) + '\n        ')
                                    ])
                                  : t._e()
                              ],
                              1
                            )
                          : t._e(),
                        t._v(' '),
                        t.next
                          ? n(
                              'span',
                              { staticClass: 'next' },
                              [
                                t.next
                                  ? n('router-link', { attrs: { to: t.next.path } }, [
                                      t._v('\n          ' + t._s(t.next.title || t.next.path) + '\n        ')
                                    ])
                                  : t._e(),
                                t._v('\n        →\n      ')
                              ],
                              1
                            )
                          : t._e()
                      ])
                    ])
                  : t._e(),
                t._v(' '),
                t._t('bottom')
              ],
              2
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
        y = { name: 'Sidebar', components: { SidebarLinks: n(277).default, NavLinks: g }, props: ['items'] },
        $ = (n(303),
        {
          components: {
            Home: u,
            Page: x,
            Sidebar: Object(s.a)(
              y,
              function() {
                var t = this.$createElement,
                  e = this._self._c || t
                return e(
                  'aside',
                  { staticClass: 'sidebar' },
                  [
                    e('NavLinks'),
                    this._v(' '),
                    this._t('top'),
                    this._v(' '),
                    e('SidebarLinks', { attrs: { depth: 0, items: this.items } }),
                    this._v(' '),
                    this._t('bottom')
                  ],
                  2
                )
              },
              [],
              !1,
              null,
              null,
              null
            ).exports,
            Navbar: b
          },
          data: function() {
            return { isSidebarOpen: !1 }
          },
          computed: {
            shouldShowNavbar: function() {
              var t = this.$site.themeConfig
              return (
                !1 !== this.$page.frontmatter.navbar &&
                !1 !== t.navbar &&
                (this.$title || t.logo || t.repo || t.nav || this.$themeLocaleConfig.nav)
              )
            },
            shouldShowSidebar: function() {
              var t = this.$page.frontmatter
              return !t.home && !1 !== t.sidebar && this.sidebarItems.length
            },
            sidebarItems: function() {
              return Object(i.l)(this.$page, this.$page.regularPath, this.$site, this.$localePath)
            },
            pageClasses: function() {
              var t = this.$page.frontmatter.pageClass
              return [
                {
                  'no-navbar': !this.shouldShowNavbar,
                  'sidebar-open': this.isSidebarOpen,
                  'no-sidebar': !this.shouldShowSidebar
                },
                t
              ]
            }
          },
          mounted: function() {
            var t = this
            this.$router.afterEach(function() {
              t.isSidebarOpen = !1
            })
          },
          methods: {
            toggleSidebar: function(t) {
              this.isSidebarOpen = 'boolean' == typeof t ? t : !this.isSidebarOpen
            },
            onTouchStart: function(t) {
              this.touchStart = { x: t.changedTouches[0].clientX, y: t.changedTouches[0].clientY }
            },
            onTouchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.touchStart.x,
                n = t.changedTouches[0].clientY - this.touchStart.y
              Math.abs(e) > Math.abs(n) &&
                Math.abs(e) > 40 &&
                (e > 0 && this.touchStart.x <= 80 ? this.toggleSidebar(!0) : this.toggleSidebar(!1))
            }
          }
        }),
        C = (n(304),
        Object(s.a)(
          $,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {
                staticClass: 'theme-container',
                class: t.pageClasses,
                on: { touchstart: t.onTouchStart, touchend: t.onTouchEnd }
              },
              [
                t.shouldShowNavbar ? n('Navbar', { on: { 'toggle-sidebar': t.toggleSidebar } }) : t._e(),
                t._v(' '),
                n('div', {
                  staticClass: 'sidebar-mask',
                  on: {
                    click: function(e) {
                      return t.toggleSidebar(!1)
                    }
                  }
                }),
                t._v(' '),
                n(
                  'Sidebar',
                  { attrs: { items: t.sidebarItems }, on: { 'toggle-sidebar': t.toggleSidebar } },
                  [
                    t._t('sidebar-top', null, { slot: 'top' }),
                    t._v(' '),
                    t._t('sidebar-bottom', null, { slot: 'bottom' })
                  ],
                  2
                ),
                t._v(' '),
                t.$page.frontmatter.home
                  ? n('Home')
                  : n(
                      'Page',
                      { attrs: { 'sidebar-items': t.sidebarItems } },
                      [
                        t._t('page-top', null, { slot: 'top' }),
                        t._v(' '),
                        t._t('page-bottom', null, { slot: 'bottom' })
                      ],
                      2
                    )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ))
      e.default = C.exports
    }
  }
])
