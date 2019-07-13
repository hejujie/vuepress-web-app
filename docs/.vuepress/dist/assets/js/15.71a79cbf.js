;(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    278: function(t, i, s) {
      'use strict'
      s.r(i)
      var n = {
          props: ['isLoading'],
          methods: {
            click: function() {
              this.$emit('click')
            }
          }
        },
        c = s(22),
        e = Object(c.a)(
          n,
          function() {
            var t = this.$createElement,
              i = this._self._c || t
            return i(
              'button',
              { staticClass: 'gt-btn', on: { click: this.click } },
              [
                this._t('default'),
                this._v(' '),
                this.isLoading ? i('span', { staticClass: 'gt-btn-loading gt-spinner' }) : this._e()
              ],
              2
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      i.default = e.exports
    }
  }
])
