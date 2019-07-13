;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    258: function(t, n, e) {},
    374: function(t, n, e) {
      'use strict'
      var c = e(258)
      e.n(c).a
    },
    383: function(t, n, e) {
      'use strict'
      e.r(n)
      var c = {
          name: 'Contact',
          computed: {
            contacts: function() {
              return this.$page.frontmatter.contacts
            }
          },
          mounted: function() {},
          methods: {}
        },
        r = (e(374), e(22)),
        a = Object(r.a)(
          c,
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n
            return e(
              'div',
              { staticClass: 'contact-moudle' },
              t._l(t.contacts, function(n) {
                return e(
                  'a',
                  {
                    key: n.type,
                    staticClass: 'link-item',
                    attrs: { href: n.href, target: '_blank', rel: 'noreferrer noopener' }
                  },
                  [t._v('\n    ' + t._s(n.desc) + '\n  ')]
                )
              }),
              0
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      n.default = a.exports
    }
  }
])
