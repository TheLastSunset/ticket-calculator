import {
  c as e,
  o as t,
  a as r,
  n as a,
  b as l,
  d as s,
  e as o,
  g as n,
  F as u,
  D as i,
  t as c,
  R as p,
  N as d,
  r as m,
  j as f,
  k as v,
  m as g,
  u as y,
  z as b,
  A as h,
} from './index-Bd1BzjNe.js';
import { _ as j } from './index-BvjRQLU7.js';
import { u as w } from './user-BYoRhNwZ.js';
import { l as x, a as $, w as O } from './with-install-Ch3FF0uS-D0wSocfQ.js';
import { _, c as k } from './_plugin-vue_export-helper-1tPrXgE0-CG2mDS7F.js';
import { u as z, a as P } from './useParent-D6DiuxZZ-CLQoyoY4.js';
import { p as S } from './pxCheck-DN6FYV6q-8OyS8IyB.js';
import { u as C } from './index-aiGQ-EiA-jKWT_S7W.js';
import './function-call-BQuYWWXV.js';
import './index-CI3-lD27.js';
const N = $('dongdong'),
  B = [
    r(
      'path',
      {
        d: 'M802.595 1018.465h-11.07c-58.12-8.303-119.006-22.14-182.66-47.049l-11.07-5.535h-11.07c-16.606 0-30.444 2.768-47.05 2.768C240.779 968.649 0 750.01 0 484.324S240.778 0 539.676 0s539.675 218.638 539.675 484.324c0 152.217-80.26 298.898-218.637 390.227l-2.768 2.768v88.562c0 27.676-24.908 52.584-55.351 52.584zm-202.033-135.61c5.535 0 13.838 0 19.373 2.767l19.373 8.302c47.049 16.606 94.097 30.444 135.61 38.746v-71.956c0-19.373 11.071-35.979 27.677-47.05 5.535-2.767 11.07-5.534 13.837-8.302 116.238-77.492 179.892-193.73 179.892-321.038 0-221.405-204.8-401.297-456.648-401.297S83.027 262.919 83.027 484.324s204.8 401.298 456.649 401.298c13.838 0 27.675 0 41.513-2.768h19.373zm243.546 0zm-304.432-398.53c77.492 0 138.378-24.909 138.378-55.352s-60.886-41.514-138.378-41.514-138.379 11.07-138.379 41.514 60.887 55.351 138.379 55.351zm-226.94-185.428c19.372 11.07 27.675 35.979 13.837 55.352l-27.676 47.048c-11.07 19.373-35.978 27.676-55.351 13.838-19.373-11.07-27.676-35.978-13.838-55.351l27.676-47.049c11.07-19.373 35.978-27.676 55.351-13.838zm456.648 0c-19.373 11.07-27.676 35.979-13.838 55.352l27.676 47.048c11.07 19.373 35.978 27.676 55.351 13.838 19.373-11.07 27.676-35.978 13.838-55.351l-27.676-47.049c-11.07-19.373-35.978-27.676-55.351-13.838zM539.676 705.73c-138.379 0-268.454-58.12-351.481-157.752-11.07-11.07-8.303-30.443 2.767-38.746 11.07-11.07 30.443-8.302 38.746 2.768 74.724 88.562 188.195 138.378 309.968 138.378 121.773 0 240.778-52.583 312.735-141.146 11.07-11.07 27.675-13.837 38.746-2.767 11.07 11.07 13.838 27.676 2.767 38.746-83.027 99.632-215.87 160.519-354.248 160.519z',
        fill: 'currentColor',
        'fill-opacity': '0.9',
      },
      null,
      -1,
    ),
  ];
const q = x(N, [
    [
      'render',
      function (r, s, o, n, u, i) {
        return (
          t(),
          e(
            'svg',
            { class: l(r.classes), style: a(r.style), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1079 1024', role: 'presentation' },
            B,
            6,
          )
        );
      },
    ],
  ]),
  D = Symbol('grid');
var E = Object.defineProperty,
  F = Object.defineProperties,
  I = Object.getOwnPropertyDescriptors,
  R = Object.getOwnPropertySymbols,
  G = Object.prototype.hasOwnProperty,
  A = Object.prototype.propertyIsEnumerable,
  L = (e, t, r) => (t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
const M = s(
  ((T = ((e, t) => {
    for (var r in t || (t = {})) G.call(t, r) && L(e, r, t[r]);
    if (R) for (var r of R(t)) A.call(t, r) && L(e, r, t[r]);
    return e;
  })({}, { name: 'NutGrid' })),
  (Z = {
    __name: 'grid',
    props: {
      columnNum: { default: 4 },
      border: { type: Boolean, default: !0 },
      gutter: { default: 0 },
      center: { type: Boolean, default: !0 },
      square: { type: Boolean, default: !1 },
      reverse: { type: Boolean, default: !1 },
      direction: {},
      clickable: { type: Boolean, default: !1 },
    },
    setup(r) {
      const s = r,
        { linkChildren: u } = z(D);
      u({ props: s });
      const i = o(() => {
          const e = 'nut-grid';
          return { [e]: !0, [`${e}--border`]: s.border && !s.gutter };
        }),
        c = o(() => {
          const e = {};
          return (s.gutter && (e.paddingLeft = S(s.gutter)), e);
        });
      return (r, s) => (t(), e('view', { class: l(i.value), style: a(c.value) }, [n(r.$slots, 'default')], 6));
    },
  }),
  F(T, I(Z))),
);
var T, Z;
O(M);
var Q = Object.defineProperty,
  U = Object.defineProperties,
  V = Object.getOwnPropertyDescriptors,
  X = Object.getOwnPropertySymbols,
  Y = Object.prototype.hasOwnProperty,
  H = Object.prototype.propertyIsEnumerable,
  J = (e, t, r) => (t in e ? Q(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r));
const K = { class: 'nut-grid-item__text' },
  W = s(
    ((e, t) => U(e, V(t)))(
      ((e, t) => {
        for (var r in t || (t = {})) Y.call(t, r) && J(e, r, t[r]);
        if (X) for (var r of X(t)) H.call(t, r) && J(e, r, t[r]);
        return e;
      })({}, { name: 'NutGridItem' }),
      {
        __name: 'grid-item',
        props: { text: {}, to: {}, url: { default: '' }, replace: { type: Boolean, default: !1 } },
        emits: ['click'],
        setup(s, { emit: p }) {
          const d = s,
            m = p,
            { parent: f, index: v } = P(D),
            g = (null == f ? void 0 : f.props) || {},
            y = o(() => {
              const e = { flexBasis: 100 / +g.columnNum + '%' };
              return (
                g.square
                  ? (e.paddingTop = 100 / +g.columnNum + '%')
                  : g.gutter && ((e.paddingRight = S(g.gutter)), v.value >= +g.columnNum && (e.marginTop = S(g.gutter))),
                e
              );
            }),
            b = o(() => {
              const e = 'nut-grid-item__content';
              return {
                [`${e}`]: !0,
                [`${e}--border`]: g.border,
                [`${e}--surround`]: g.border && g.gutter,
                [`${e}--center`]: g.center,
                [`${e}--square`]: g.square,
                [`${e}--reverse`]: g.reverse,
                [`${e}--${g.direction}`]: !!g.direction,
                [`${e}--clickable`]: g.clickable || d.to || d.url,
              };
            }),
            h = C(),
            j = (e) => {
              (m('click', e),
                d.to && h
                  ? h[d.replace ? 'replace' : 'push'](d.to)
                  : d.url && (d.replace ? location.replace(d.url) : (location.href = d.url)));
            };
          return (s, o) => (
            t(),
            e(
              'view',
              { class: 'nut-grid-item', style: a(y.value), onClick: j },
              [
                r(
                  'view',
                  { class: l(b.value) },
                  [
                    n(s.$slots, 'default'),
                    r('view', K, [s.text ? (t(), e(u, { key: 0 }, [i(c(s.text), 1)], 64)) : n(s.$slots, 'text', { key: 1 })]),
                  ],
                  2,
                ),
              ],
              4,
            )
          );
        },
      },
    ),
  );
O(W);
const ee = Symbol('nut-avatar'),
  { create: te } = k('avatar');
const re = _(
    te({
      props: {
        size: { type: [String, Number], default: 'normal' },
        shape: { type: String, default: 'round' },
        bgColor: { type: String, default: '#eee' },
        color: { type: String, default: '#666' },
      },
      setup(e) {
        const { size: t, shape: r, bgColor: a, color: l } = p(e),
          s = ['large', 'normal', 'small'],
          n = d(ee, null),
          u = m(null);
        return {
          classes: o(() => {
            var e, a;
            const l = 'nut-avatar';
            return {
              [l]: !0,
              [`nut-avatar-${t.value || (null == (e = null == n ? void 0 : n.props) ? void 0 : e.size) || 'normal'}`]: !0,
              [`nut-avatar-${r.value || (null == (a = null == n ? void 0 : n.props) ? void 0 : a.shape) || 'round'}`]: !0,
            };
          }),
          styles: o(() => {
            var e, r;
            return {
              width: t.value in s ? '' : `${t.value}px`,
              height: t.value in s ? '' : `${t.value}px`,
              backgroundColor: `${a.value}`,
              color: `${l.value}`,
              marginLeft: (null == (e = null == n ? void 0 : n.props) ? void 0 : e.span)
                ? `${null == (r = null == n ? void 0 : n.props) ? void 0 : r.span}px`
                : '',
            };
          }),
          avatarRef: u,
        };
      },
    }),
    [
      [
        'render',
        function (r, s, o, u, i, c) {
          return (t(), e('view', { ref: 'avatarRef', style: a(r.styles), class: l(r.classes) }, [n(r.$slots, 'default')], 6));
        },
      ],
    ],
  ),
  ae = { class: 'avatar-wrap' },
  le = { class: 'member-detail' },
  se = { class: 'nickname' },
  oe = { key: 0 },
  ne = s({
    __name: 'index',
    setup(a) {
      const l = h(),
        s = w(),
        n = o(() => {
          const { name: e = '' } = s.getUserInfo || {};
          return e;
        }),
        p = () => {
          l.push('/login');
        };
      return (a, l) => {
        const s = re,
          o = j,
          d = W,
          m = M;
        return (
          t(),
          e(
            u,
            null,
            [
              r('div', ae, [
                f(
                  s,
                  { class: 'avatar', size: 'large' },
                  {
                    default: v(() => [
                      ...(l[0] ||
                        (l[0] = [
                          r(
                            'img',
                            {
                              src: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
                            },
                            null,
                            -1,
                          ),
                        ])),
                    ]),
                    _: 1,
                  },
                ),
                r('div', le, [
                  r('p', se, [
                    y(n)
                      ? (t(), e('span', oe, '用户名:' + c(y(n)), 1))
                      : (t(),
                        g(
                          o,
                          { key: 1, shape: 'square', size: 'small', type: 'default', onClick: p },
                          { default: v(() => [...(l[1] || (l[1] = [i(' 去登录 ', -1)]))]), _: 1 },
                        )),
                  ]),
                  l[2] || (l[2] = r('p', { class: 'info' }, ' 个人其他信息，后续补充.... ', -1)),
                ]),
              ]),
              f(
                m,
                { direction: 'vertical' },
                {
                  default: v(() => [
                    (t(),
                    e(
                      u,
                      null,
                      b(10, (e) => f(d, { key: e, text: '文字' }, { default: v(() => [f(y(q))]), _: 1 })),
                      64,
                    )),
                  ]),
                  _: 1,
                },
              ),
            ],
            64,
          )
        );
      };
    },
  });
export { ne as default };
