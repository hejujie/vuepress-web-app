;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    259: function(t, e, n) {},
    375: function(t, e, n) {
      'use strict'
      var i = n(259)
      n.n(i).a
    },
    412: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = {
          functional: !0,
          props: { type: { type: String, default: 'tip' }, text: String, vertical: { type: String, default: 'top' } },
          render: function(t, e) {
            var n = e.props,
              i = e.slots
            return t('span', { class: ['badge', n.type], style: { verticalAlign: n.vertical } }, n.text || i().default)
          }
        },
        r = (n(375), n(22)),
        a = Object(r.a)(i, void 0, void 0, !1, null, '172fd448', null)
      e.default = a.exports
    }
  }
])
