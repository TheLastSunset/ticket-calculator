import { l as e, a as l, w as o } from './with-install-Ch3FF0uS-Cd4zlhkV.js';
import { c as t, o as a, a as s, n, b as r, d as c, e as i, m as d, l as u, g as p, u as f } from './index-DiDUIIfN.js';
const b = l('loading'),
  y = [
    s(
      'path',
      {
        d: 'M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z',
        fill: 'currentColor',
        'fill-opacity': '0.9',
      },
      null,
      -1,
    ),
  ];
const m = e(b, [
  [
    'render',
    function (e, l, o, s, c, i) {
      return (
        a(),
        t(
          'svg',
          { class: r(e.classes), style: n(e.style), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024', role: 'presentation' },
          y,
          6,
        )
      );
    },
  ],
]);
var g = Object.defineProperty,
  v = Object.defineProperties,
  $ = Object.getOwnPropertyDescriptors,
  w = Object.getOwnPropertySymbols,
  z = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  k = (e, l, o) => (l in e ? g(e, l, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[l] = o));
const O = { class: 'nut-button__wrap' },
  j = c(
    ((C = ((e, l) => {
      for (var o in l || (l = {})) z.call(l, o) && k(e, o, l[o]);
      if (w) for (var o of w(l)) h.call(l, o) && k(e, o, l[o]);
      return e;
    })({}, { name: 'NutButton' })),
    (_ = {
      __name: 'button',
      props: {
        color: { default: '' },
        shape: { default: 'round' },
        plain: { type: Boolean, default: !1 },
        loading: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        type: { default: 'default' },
        size: { default: 'normal' },
        block: { type: Boolean, default: !1 },
      },
      emits: ['click'],
      setup(e, { emit: l }) {
        const o = e,
          c = l,
          b = (e) => {
            o.loading || o.disabled || c('click', e);
          },
          y = i(() => {
            const e = 'nut-button';
            return {
              [e]: !0,
              [`${e}--${o.type}`]: o.type,
              [`${e}--${o.size}`]: o.size,
              [`${e}--${o.shape}`]: o.shape,
              [`${e}--plain`]: o.plain,
              [`${e}--block`]: o.block,
              [`${e}--disabled`]: o.disabled,
              [`${e}--loading`]: o.loading,
            };
          }),
          g = i(() => {
            let e = {};
            return (
              o.color &&
                ((e = { color: o.plain ? o.color : '#fff', background: o.plain ? '#fff' : `border-box ${o.color}` }),
                o.color.includes('gradient') ? (e.borderColor = 'transparent') : (e.borderColor = o.color)),
              e
            );
          });
        return (e, l) => (
          a(),
          t(
            'view',
            { class: r(y.value), style: n(g.value), onClick: b },
            [
              s('view', O, [
                e.loading ? (a(), d(f(m), { key: 0, class: 'nut-icon-loading' })) : u('', !0),
                e.$slots.icon && !e.loading ? p(e.$slots, 'icon', { key: 1 }) : u('', !0),
                e.$slots.default
                  ? (a(), t('view', { key: 2, class: r({ 'nut-button__text': e.$slots.icon || e.loading }) }, [p(e.$slots, 'default')], 2))
                  : u('', !0),
              ]),
            ],
            6,
          )
        );
      },
    }),
    v(C, $(_))),
  );
var C, _;
o(j);
export { j as _, m as u };
