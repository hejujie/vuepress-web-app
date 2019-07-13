;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    279: function(t, s, i) {
      'use strict'
      i.r(s)
      var c = {
          props: ['text'],
          methods: {
            click: function() {
              this.$emit('click')
            }
          }
        },
        n = i(22),
        e = Object(n.a)(
          c,
          function() {
            var t = this.$createElement,
              s = this._self._c || t
            return s('a', { staticClass: 'gt-action', on: { click: this.click } }, [
              s('span', { staticClass: 'gt-action-text' }, [this._v(this._s(this.text))])
            ])
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
