/* empty css              */ import { r as e, a as t, u as a, B as n } from './index-DFLPCvBP.js';
import { p as l } from './data-DcDtQ-o0.js';
import { u as o, a as i, c as r, L as s, s as u, P as c, b as d } from './function-call-D9se1GFy.js';
import {
  c as m,
  e as v,
  i as f,
  a as p,
  m as h,
  b as g,
  n as y,
  u as b,
  d as D,
  p as A,
  H as N,
  r as _,
  f as O,
  h as w,
  s as S,
  j as x,
  o as k,
  k as I,
  l as E,
  q as L,
  v as H,
  g as T,
  x as C,
  y as $,
  z as M,
  A as G,
  w as Y,
  t as P,
  C as V,
  D as B,
  E as U,
  F as R,
  G as z,
  J as W,
  K as F,
  L as j,
  M as X,
  N as Z,
  O as K,
  P as q,
  Q as J,
  I as Q,
  R as ee,
  S as te,
  T as ae,
  U as ne,
  V as le,
  W as oe,
  X as ie,
  Y as re,
  Z as se,
  _ as ue,
  $ as ce,
  a0 as de,
} from './index-MWbG1wd7.js';
import {
  d as me,
  r as ve,
  e as fe,
  E as pe,
  j as he,
  G as ge,
  H as ye,
  I as be,
  J as De,
  L as Ae,
  w as Ne,
  h as _e,
  f as Oe,
  M as we,
  N as Se,
  O as xe,
  i as ke,
  P as Ie,
  v as Ee,
  D as Le,
  c as He,
  a as Te,
  F as Ce,
  z as $e,
  u as Me,
  o as Ge,
  k as Ye,
  t as Pe,
  _ as Ve,
  Q as Be,
  x as Ue,
  m as Re,
} from './index-97xHZmC1.js';
import { u as ze } from './use-height-BEPUHbMK.js';
const [We, Fe, je] = m('picker'),
  Xe = (e) => e.find((e) => !e.disabled) || e[0];
function Ze(e, t) {
  for (let a = (t = p(t, 0, e.length)); a < e.length; a++) if (!e[a].disabled) return a;
  for (let a = t - 1; a >= 0; a--) if (!e[a].disabled) return a;
  return 0;
}
const Ke = (e, t, a) => void 0 !== t && e.some((e) => e[a.value] === t);
function qe(e, t, a) {
  const n = e.findIndex((e) => e[a.value] === t);
  return e[Ze(e, n)];
}
const [Je, Qe] = m('picker-column'),
  et = Symbol(Je);
var tt = me({
  name: Je,
  props: {
    value: y,
    fields: h(Object),
    options: g(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: h(Number),
    swipeDuration: h(y),
    visibleOptionNum: h(y),
  },
  emits: ['change', 'clickOption', 'scrollInto'],
  setup(e, { emit: t, slots: a }) {
    let n, l, r, s, u;
    const c = ve(),
      d = ve(),
      m = ve(0),
      v = ve(0),
      f = o(),
      h = () => e.options.length,
      g = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
      y = (a) => {
        let l = Ze(e.options, a);
        const o = -l * e.optionHeight,
          i = () => {
            l > h() - 1 && (l = Ze(e.options, a));
            const n = e.options[l][e.fields.value];
            n !== e.value && t('change', n);
          };
        (n && o !== m.value ? (u = i) : i(), (m.value = o));
      },
      N = () => e.readonly || !e.options.length,
      _ = (t) => p(Math.round(-t / e.optionHeight), 0, h() - 1),
      O = fe(() => _(m.value)),
      w = () => {
        ((n = !1), (v.value = 0), u && (u(), (u = null)));
      },
      S = (e) => {
        if (!N()) {
          if ((f.start(e), n)) {
            const e = (function (e) {
              const { transform: t } = window.getComputedStyle(e),
                a = t.slice(7, t.length - 1).split(', ')[5];
              return Number(a);
            })(d.value);
            m.value = Math.min(0, e - g());
          }
          ((v.value = 0), (l = m.value), (r = Date.now()), (s = l), (u = null));
        }
      },
      x = () => {
        if (N()) return;
        const t = m.value - s,
          a = Date.now() - r;
        if (a < 300 && Math.abs(t) > 15)
          return void ((t, a) => {
            const n = Math.abs(t / a);
            t = m.value + (n / 0.003) * (t < 0 ? -1 : 1);
            const l = _(t);
            ((v.value = +e.swipeDuration), y(l));
          })(t, a);
        const l = _(m.value);
        ((v.value = 200),
          y(l),
          setTimeout(() => {
            n = !1;
          }, 0));
      },
      k = () => {
        const l = { height: `${e.optionHeight}px` };
        return e.options.map((o, i) => {
          const r = o[e.fields.text],
            { disabled: s } = o,
            c = o[e.fields.value],
            d = {
              role: 'button',
              style: l,
              tabindex: s ? -1 : 0,
              class: [Qe('item', { disabled: s, selected: c === e.value }), o.className],
              onClick: () =>
                ((a) => {
                  n || N() || ((u = null), (v.value = 200), y(a), t('clickOption', e.options[a]));
                })(i),
            },
            m = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: r };
          return he('li', d, [a.option ? a.option(o, i) : he('div', m, null)]);
        });
      };
    return (
      b(et),
      i({ stopMomentum: w }),
      pe(() => {
        const t = n ? Math.floor(-m.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          a = Ze(e.options, t),
          l = -a * e.optionHeight;
        (n && a < t && w(), (m.value = l));
      }),
      D(
        'touchmove',
        (a) => {
          if (N()) return;
          (f.move(a), f.isVertical() && ((n = !0), A(a, !0)));
          const o = p(l + f.deltaY.value, -h() * e.optionHeight, e.optionHeight),
            i = _(o);
          (i !== O.value && t('scrollInto', e.options[i]), (m.value = o));
          const u = Date.now();
          u - r > 300 && ((r = u), (s = o));
        },
        { target: c },
      ),
      () =>
        he('div', { ref: c, class: Qe(), onTouchstartPassive: S, onTouchend: x, onTouchcancel: x }, [
          he(
            'ul',
            {
              ref: d,
              style: {
                transform: `translate3d(0, ${m.value + g()}px, 0)`,
                transitionDuration: `${v.value}ms`,
                transitionProperty: v.value ? 'all' : 'none',
              },
              class: Qe('wrapper'),
              onTransitionend: w,
            },
            [k()],
          ),
        ])
    );
  },
});
const [at] = m('picker-toolbar'),
  nt = { title: String, cancelButtonText: String, confirmButtonText: String },
  lt = ['cancel', 'confirm', 'title', 'toolbar'],
  ot = Object.keys(nt);
var it = me({
  name: at,
  props: nt,
  emits: ['confirm', 'cancel'],
  setup(e, { emit: t, slots: a }) {
    const n = () => t('cancel'),
      l = () => t('confirm'),
      o = () => {
        var t;
        const l = null != (t = e.cancelButtonText) ? t : je('cancel');
        if (a.cancel || l) return he('button', { type: 'button', class: [Fe('cancel'), N], onClick: n }, [a.cancel ? a.cancel() : l]);
      },
      i = () => {
        var t;
        const n = null != (t = e.confirmButtonText) ? t : je('confirm');
        if (a.confirm || n) return he('button', { type: 'button', class: [Fe('confirm'), N], onClick: l }, [a.confirm ? a.confirm() : n]);
      };
    return () =>
      he('div', { class: Fe('toolbar') }, [
        a.toolbar
          ? a.toolbar()
          : [o(), a.title ? a.title() : e.title ? he('div', { class: [Fe('title'), 'van-ellipsis'] }, [e.title]) : void 0, i()],
      ]);
  },
});
/**
 * @vue/shared v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const rt = Array.isArray,
  st = (e) => 'string' == typeof e,
  ut = (e) => null !== e && 'object' == typeof e,
  ct = /\B([A-Z])/g,
  dt = ((e) => {
    const t = Object.create(null);
    return (a) => t[a] || (t[a] = e(a));
  })((e) => e.replace(ct, '-$1').toLowerCase());
function mt(e) {
  if (rt(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const n = e[a],
        l = st(n) ? ht(n) : mt(n);
      if (l) for (const e in l) t[e] = l[e];
    }
    return t;
  }
  if (st(e) || ut(e)) return e;
}
const vt = /;(?![^(]*\))/g,
  ft = /:([^]+)/,
  pt = /\/\*[^]*?\*\//g;
function ht(e) {
  const t = {};
  return (
    e
      .replace(pt, '')
      .split(vt)
      .forEach((e) => {
        if (e) {
          const a = e.split(ft);
          a.length > 1 && (t[a[0].trim()] = a[1].trim());
        }
      }),
    t
  );
}
function gt(e) {
  let t = '';
  if (st(e)) t = e;
  else if (rt(e))
    for (let a = 0; a < e.length; a++) {
      const n = gt(e[a]);
      n && (t += n + ' ');
    }
  else if (ut(e)) for (const a in e) e[a] && (t += a + ' ');
  return t.trim();
}
let yt = 0;
function bt() {
  const e = ge(),
    { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
  return `${t}-${++yt}`;
}
function Dt() {
  const e = ve([]),
    t = [];
  ye(() => {
    e.value = [];
  });
  return [
    e,
    (a) => (
      t[a] ||
        (t[a] = (t) => {
          e.value[a] = t;
        }),
      t[a]
    ),
  ];
}
function At(e, t) {
  if (!x || !window.IntersectionObserver) return;
  const a = new IntersectionObserver(
      (e) => {
        t(e[0].intersectionRatio > 0);
      },
      { root: document.body },
    ),
    n = () => {
      e.value && a.unobserve(e.value);
    };
  (be(n),
    De(n),
    k(() => {
      e.value && a.observe(e.value);
    }));
}
const [Nt, _t] = m('sticky');
const Ot = Y(
    me({
      name: Nt,
      props: { zIndex: y, position: E('top'), container: Object, offsetTop: I(0), offsetBottom: I(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: a }) {
        const n = ve(),
          l = L(n),
          o = Ae({ fixed: !1, width: 0, height: 0, transform: 0 }),
          i = ve(!1),
          r = fe(() => H('top' === e.position ? e.offsetTop : e.offsetBottom)),
          s = fe(() => {
            if (i.value) return;
            const { fixed: e, height: t, width: a } = o;
            return e ? { width: `${a}px`, height: `${t}px` } : void 0;
          }),
          u = fe(() => {
            if (!o.fixed || i.value) return;
            const t = v(T(e.zIndex), { width: `${o.width}px`, height: `${o.height}px`, [e.position]: `${r.value}px` });
            return (o.transform && (t.transform = `translate3d(0, ${o.transform}px, 0)`), t);
          }),
          c = () => {
            if (!n.value || C(n)) return;
            const { container: a, position: l } = e,
              i = $(n),
              s = w(window);
            if (((o.width = i.width), (o.height = i.height), 'top' === l))
              if (a) {
                const e = $(a),
                  t = e.bottom - r.value - o.height;
                ((o.fixed = r.value > i.top && e.bottom > 0), (o.transform = t < 0 ? t : 0));
              } else o.fixed = r.value > i.top;
            else {
              const { clientHeight: e } = document.documentElement;
              if (a) {
                const t = $(a),
                  n = e - t.top - r.value - o.height;
                ((o.fixed = e - r.value < i.bottom && e > t.top), (o.transform = n < 0 ? -n : 0));
              } else o.fixed = e - r.value < i.bottom;
            }
            ((e) => {
              t('scroll', { scrollTop: e, isFixed: o.fixed });
            })(s);
          };
        return (
          Ne(
            () => o.fixed,
            (e) => t('change', e),
          ),
          D('scroll', c, { target: l, passive: !0 }),
          At(n, c),
          Ne([M, G], () => {
            n.value &&
              !C(n) &&
              o.fixed &&
              ((i.value = !0),
              _e(() => {
                const e = $(n);
                ((o.width = e.width), (o.height = e.height), (i.value = !1));
              }));
          }),
          () => {
            var e;
            return he('div', { ref: n, style: s.value }, [
              he('div', { class: _t({ fixed: o.fixed && !i.value }), style: u.value }, [null == (e = a.default) ? void 0 : e.call(a)]),
            ]);
          }
        );
      },
    }),
  ),
  [wt, St] = m('swipe'),
  xt = {
    loop: P,
    width: y,
    height: y,
    vertical: Boolean,
    autoplay: I(0),
    duration: I(500),
    touchable: P,
    lazyRender: Boolean,
    initialSwipe: I(0),
    indicatorColor: String,
    showIndicators: P,
    stopPropagation: P,
  },
  kt = Symbol(wt);
const It = Y(
    me({
      name: wt,
      props: xt,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: a }) {
        const n = ve(),
          l = ve(),
          r = Ae({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let s = !1;
        const u = o(),
          { children: c, linkChildren: d } = V(kt),
          m = fe(() => c.length),
          v = fe(() => r[e.vertical ? 'height' : 'width']),
          f = fe(() => (e.vertical ? u.deltaY.value : u.deltaX.value)),
          h = fe(() => {
            if (r.rect) {
              return (e.vertical ? r.rect.height : r.rect.width) - v.value * m.value;
            }
            return 0;
          }),
          g = fe(() => (v.value ? Math.ceil(Math.abs(h.value) / v.value) : m.value)),
          y = fe(() => m.value * v.value),
          b = fe(() => (r.active + m.value) % m.value),
          N = fe(() => {
            const t = e.vertical ? 'vertical' : 'horizontal';
            return u.direction.value === t;
          }),
          _ = fe(() => {
            const t = {
              transitionDuration: `${r.swiping ? 0 : e.duration}ms`,
              transform: `translate${e.vertical ? 'Y' : 'X'}(${+r.offset.toFixed(2)}px)`,
            };
            if (v.value) {
              const a = e.vertical ? 'height' : 'width',
                n = e.vertical ? 'width' : 'height';
              ((t[a] = `${y.value}px`), (t[n] = e[n] ? `${e[n]}px` : ''));
            }
            return t;
          }),
          O = (t, a = 0) => {
            let n = t * v.value;
            e.loop || (n = Math.min(n, -h.value));
            let l = a - n;
            return (e.loop || (l = p(l, h.value, 0)), l);
          },
          w = ({ pace: a = 0, offset: n = 0, emitChange: l }) => {
            if (m.value <= 1) return;
            const { active: o } = r,
              i = ((t) => {
                const { active: a } = r;
                return t ? (e.loop ? p(a + t, -1, m.value) : p(a + t, 0, g.value)) : a;
              })(a),
              s = O(i, n);
            if (e.loop) {
              if (c[0] && s !== h.value) {
                const e = s < h.value;
                c[0].setOffset(e ? y.value : 0);
              }
              if (c[m.value - 1] && 0 !== s) {
                const e = s > 0;
                c[m.value - 1].setOffset(e ? -y.value : 0);
              }
            }
            ((r.active = i), (r.offset = s), l && i !== o && t('change', b.value));
          },
          S = () => {
            ((r.swiping = !0), r.active <= -1 ? w({ pace: m.value }) : r.active >= m.value && w({ pace: -m.value }));
          },
          x = () => {
            (S(),
              u.reset(),
              R(() => {
                ((r.swiping = !1), w({ pace: 1, emitChange: !0 }));
              }));
          };
        let k;
        const I = () => clearTimeout(k),
          E = () => {
            (I(),
              +e.autoplay > 0 &&
                m.value > 1 &&
                (k = setTimeout(() => {
                  (x(), E());
                }, +e.autoplay)));
          },
          L = (t = +e.initialSwipe) => {
            if (!n.value) return;
            const a = () => {
              var a, l;
              if (!C(n)) {
                const t = { width: n.value.offsetWidth, height: n.value.offsetHeight };
                ((r.rect = t), (r.width = +(null != (a = e.width) ? a : t.width)), (r.height = +(null != (l = e.height) ? l : t.height)));
              }
              (m.value && -1 === (t = Math.min(m.value - 1, t)) && (t = m.value - 1),
                (r.active = t),
                (r.swiping = !0),
                (r.offset = O(t)),
                c.forEach((e) => {
                  e.setOffset(0);
                }),
                E());
            };
            C(n) ? _e().then(a) : a();
          },
          H = () => L(r.active);
        let T;
        const $ = (t) => {
            !e.touchable || t.touches.length > 1 || (u.start(t), (s = !1), (T = Date.now()), I(), S());
          },
          Y = () => {
            if (!e.touchable || !r.swiping) return;
            const a = Date.now() - T,
              n = f.value / a;
            if ((Math.abs(n) > 0.25 || Math.abs(f.value) > v.value / 2) && N.value) {
              const t = e.vertical ? u.offsetY.value : u.offsetX.value;
              let a = 0;
              ((a = e.loop ? (t > 0 ? (f.value > 0 ? -1 : 1) : 0) : -Math[f.value > 0 ? 'ceil' : 'floor'](f.value / v.value)),
                w({ pace: a, emitChange: !0 }));
            } else f.value && w({ pace: 0 });
            ((s = !1), (r.swiping = !1), t('dragEnd', { index: b.value }), E());
          },
          P = (t, a) => {
            const n = a === b.value,
              l = n ? { backgroundColor: e.indicatorColor } : void 0;
            return he('i', { style: l, class: St('indicator', { active: n }) }, null);
          };
        return (
          i({
            prev: () => {
              (S(),
                u.reset(),
                R(() => {
                  ((r.swiping = !1), w({ pace: -1, emitChange: !0 }));
                }));
            },
            next: x,
            state: r,
            resize: H,
            swipeTo: (t, a = {}) => {
              (S(),
                u.reset(),
                R(() => {
                  let n;
                  ((n = e.loop && t === m.value ? (0 === r.active ? 0 : t) : t % m.value),
                    a.immediate
                      ? R(() => {
                          r.swiping = !1;
                        })
                      : (r.swiping = !1),
                    w({ pace: n - r.active, emitChange: !0 }));
                }));
            },
          }),
          d({ size: v, props: e, count: m, activeIndicator: b }),
          Ne(
            () => e.initialSwipe,
            (e) => L(+e),
          ),
          Ne(m, () => L(r.active)),
          Ne(() => e.autoplay, E),
          Ne([M, G, () => e.width, () => e.height], H),
          Ne(B(), (e) => {
            'visible' === e ? E() : I();
          }),
          Oe(L),
          we(() => L(r.active)),
          U(() => L(r.active)),
          be(I),
          De(I),
          D(
            'touchmove',
            (a) => {
              if (e.touchable && r.swiping && (u.move(a), N.value)) {
                (!e.loop && ((0 === r.active && f.value > 0) || (r.active === m.value - 1 && f.value < 0))) ||
                  (A(a, e.stopPropagation), w({ offset: f.value }), s || (t('dragStart', { index: b.value }), (s = !0)));
              }
            },
            { target: l },
          ),
          () => {
            var t;
            return he('div', { ref: n, class: St() }, [
              he(
                'div',
                {
                  ref: l,
                  style: _.value,
                  class: St('track', { vertical: e.vertical }),
                  onTouchstartPassive: $,
                  onTouchend: Y,
                  onTouchcancel: Y,
                },
                [null == (t = a.default) ? void 0 : t.call(a)],
              ),
              a.indicator
                ? a.indicator({ active: b.value, total: m.value })
                : e.showIndicators && m.value > 1
                  ? he('div', { class: St('indicators', { vertical: e.vertical }) }, [Array(m.value).fill('').map(P)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [Et, Lt] = m('tabs');
var Ht = me({
  name: Et,
  props: {
    count: h(Number),
    inited: Boolean,
    animated: Boolean,
    duration: h(y),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: h(Number),
  },
  emits: ['change'],
  setup(e, { emit: t, slots: a }) {
    const n = ve(),
      l = (e) => t('change', e),
      o = () => {
        var t;
        const o = null == (t = a.default) ? void 0 : t.call(a);
        return e.animated || e.swipeable
          ? he(
              It,
              {
                ref: n,
                loop: !1,
                class: Lt('track'),
                duration: 1e3 * +e.duration,
                touchable: e.swipeable,
                lazyRender: e.lazyRender,
                showIndicators: !1,
                onChange: l,
              },
              { default: () => [o] },
            )
          : o;
      },
      r = (t) => {
        const a = n.value;
        a && a.state.active !== t && a.swipeTo(t, { immediate: !e.inited });
      };
    return (
      Ne(() => e.currentIndex, r),
      Oe(() => {
        r(e.currentIndex);
      }),
      i({ swipeRef: n }),
      () => he('div', { class: Lt('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [Tt, Ct] = m('tabs'),
  $t = {
    type: E('line'),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: I(0),
    duration: I(0.3),
    animated: Boolean,
    ellipsis: P,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: I(0),
    background: String,
    lazyRender: P,
    showHeader: P,
    lineWidth: y,
    lineHeight: y,
    beforeChange: Function,
    swipeThreshold: I(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Mt = Symbol(Tt);
var Gt = me({
  name: Tt,
  props: $t,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: a, slots: n }) {
    let l, o, s, u, c;
    const d = ve(),
      m = ve(),
      v = ve(),
      p = ve(),
      h = bt(),
      g = L(d),
      [y, b] = Dt(),
      { children: A, linkChildren: N } = V(Mt),
      x = Ae({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      I = fe(() => A.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      E = fe(() => ({ borderColor: t.color, background: t.background })),
      T = (e, t) => {
        var a;
        return null != (a = e.name) ? a : t;
      },
      G = fe(() => {
        const e = A[x.currentIndex];
        if (e) return T(e, x.currentIndex);
      }),
      Y = fe(() => H(t.offsetTop)),
      P = fe(() => (t.sticky ? Y.value + l : 0)),
      B = (e) => {
        const a = m.value,
          n = y.value;
        if (!(I.value && a && n && n[x.currentIndex])) return;
        const l = n[x.currentIndex].$el,
          o = l.offsetLeft - (a.offsetWidth - l.offsetWidth) / 2;
        (u && u(),
          (u = (function (e, t, a) {
            let n,
              l = 0;
            const o = e.scrollLeft,
              i = 0 === a ? 1 : Math.round((1e3 * a) / 16);
            let r = o;
            return (
              (function a() {
                ((r += (t - o) / i), (e.scrollLeft = r), ++l < i && (n = _(a)));
              })(),
              function () {
                O(n);
              }
            );
          })(a, o, e ? 0 : +t.duration)));
      },
      R = () => {
        const e = x.inited;
        _e(() => {
          const a = y.value;
          if (!a || !a[x.currentIndex] || 'line' !== t.type || C(d.value)) return;
          const n = a[x.currentIndex].$el,
            { lineWidth: l, lineHeight: o } = t,
            i = n.offsetLeft + n.offsetWidth / 2,
            r = { width: z(l), backgroundColor: t.color, transform: `translateX(${i}px) translateX(-50%)` };
          if ((e && (r.transitionDuration = `${t.duration}s`), f(o))) {
            const e = z(o);
            ((r.height = e), (r.borderRadius = e));
          }
          x.lineStyle = r;
        });
      },
      X = (e, n) => {
        const l = ((e) => {
          const t = e < x.currentIndex ? -1 : 1;
          for (; e >= 0 && e < A.length; ) {
            if (!A[e].disabled) return e;
            e += t;
          }
        })(e);
        if (!f(l)) return;
        const o = A[l],
          i = T(o, l),
          r = null !== x.currentIndex;
        (x.currentIndex !== l && ((x.currentIndex = l), n || B(), R()),
          i !== t.active && (a('update:active', i), r && a('change', i, o.title)),
          s && !t.scrollspy && F(Math.ceil(j(d.value) - Y.value)));
      },
      Z = (e, t) => {
        const a = A.findIndex((t, a) => T(t, a) === e);
        X(-1 === a ? 0 : a, t);
      },
      K = (e = !1) => {
        if (t.scrollspy) {
          const a = A[x.currentIndex].$el;
          if (a && g.value) {
            const n = j(a, g.value) - P.value;
            ((o = !0),
              c && c(),
              (c = (function (e, t, a, n) {
                let l,
                  o = w(e);
                const i = o < t,
                  r = 0 === a ? 1 : Math.round((1e3 * a) / 16),
                  s = (t - o) / r;
                return (
                  (function a() {
                    ((o += s),
                      ((i && o > t) || (!i && o < t)) && (o = t),
                      S(e, o),
                      (i && o < t) || (!i && o > t) ? (l = _(a)) : n && (l = _(n)));
                  })(),
                  function () {
                    O(l);
                  }
                );
              })(g.value, n, e ? 0 : +t.duration, () => {
                o = !1;
              })));
          }
        }
      },
      q = (n, l, o) => {
        const { title: i, disabled: s } = A[l],
          u = T(A[l], l);
        (s ||
          (r(t.beforeChange, {
            args: [u],
            done: () => {
              (X(l), K());
            },
          }),
          e(n)),
          a('clickTab', { name: u, title: i, event: o, disabled: s }));
      },
      J = (e) => {
        ((s = e.isFixed), a('scroll', e));
      },
      Q = () => {
        if ('line' === t.type && A.length) return he('div', { class: Ct('line'), style: x.lineStyle }, null);
      },
      ee = () => {
        var e, a, l;
        const { type: o, border: i, sticky: r } = t,
          s = [
            he('div', { ref: r ? void 0 : v, class: [Ct('wrap'), { [W]: 'line' === o && i }] }, [
              he(
                'div',
                {
                  ref: m,
                  role: 'tablist',
                  class: Ct('nav', [o, { shrink: t.shrink, complete: I.value }]),
                  style: E.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = n['nav-left']) ? void 0 : e.call(n),
                  A.map((e) => e.renderTitle(q)),
                  Q(),
                  null == (a = n['nav-right']) ? void 0 : a.call(n),
                ],
              ),
            ]),
            null == (l = n['nav-bottom']) ? void 0 : l.call(n),
          ];
        return r ? he('div', { ref: v }, [s]) : s;
      },
      te = () => {
        (R(),
          _e(() => {
            var e, t;
            (B(!0), null == (t = null == (e = p.value) ? void 0 : e.swipeRef.value) || t.resize());
          }));
      };
    (Ne(() => [t.color, t.duration, t.lineWidth, t.lineHeight], R),
      Ne(M, te),
      Ne(
        () => t.active,
        (e) => {
          e !== G.value && Z(e);
        },
      ),
      Ne(
        () => A.length,
        () => {
          x.inited &&
            (Z(t.active),
            R(),
            _e(() => {
              B(!0);
            }));
        },
      ));
    return (
      i({
        resize: te,
        scrollTo: (e) => {
          _e(() => {
            (Z(e), K(!0));
          });
        },
      }),
      we(R),
      U(R),
      k(() => {
        (Z(t.active, !0),
          _e(() => {
            ((x.inited = !0), v.value && (l = $(v.value).height), B(!0));
          }));
      }),
      At(d, R),
      D(
        'scroll',
        () => {
          if (t.scrollspy && !o) {
            const e = (() => {
              for (let e = 0; e < A.length; e++) {
                const { top: t } = $(A[e].$el);
                if (t > P.value) return 0 === e ? 0 : e - 1;
              }
              return A.length - 1;
            })();
            X(e);
          }
        },
        { target: g, passive: !0 },
      ),
      N({
        id: h,
        props: t,
        setLine: R,
        scrollable: I,
        onRendered: (e, t) => a('rendered', e, t),
        currentName: G,
        setTitleRefs: b,
        scrollIntoView: B,
      }),
      () =>
        he('div', { ref: d, class: Ct([t.type]) }, [
          t.showHeader
            ? t.sticky
              ? he(Ot, { container: d.value, offsetTop: Y.value, onScroll: J }, { default: () => [ee()] })
              : ee()
            : null,
          he(
            Ht,
            {
              ref: p,
              count: A.length,
              inited: x.inited,
              animated: t.animated,
              duration: t.duration,
              swipeable: t.swipeable,
              lazyRender: t.lazyRender,
              currentIndex: x.currentIndex,
              onChange: X,
            },
            {
              default: () => {
                var e;
                return [null == (e = n.default) ? void 0 : e.call(n)];
              },
            },
          ),
        ])
    );
  },
});
const Yt = Symbol(),
  Pt = Symbol(),
  Vt = (e) => {
    const t = Se(Pt, null);
    (xe(Yt, e),
      xe(
        Pt,
        fe(() => (null == t || t.value) && e.value),
      ));
  },
  [Bt, Ut] = m('tab'),
  Rt = me({
    name: Bt,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: y,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: P,
    },
    setup(e, { slots: t }) {
      const a = fe(() => {
          const t = {},
            { type: a, color: n, disabled: l, isActive: o, activeColor: i, inactiveColor: r } = e;
          n && 'card' === a && ((t.borderColor = n), l || (o ? (t.backgroundColor = n) : (t.color = n)));
          const s = o ? i : r;
          return (s && (t.color = s), t);
        }),
        n = () => {
          const a = he('span', { class: Ut('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
          return e.dot || (f(e.badge) && '' !== e.badge)
            ? he(X, { dot: e.dot, content: e.badge, showZero: e.showZeroBadge }, { default: () => [a] })
            : a;
        };
      return () =>
        he(
          'div',
          {
            id: e.id,
            role: 'tab',
            class: [Ut([e.type, { grow: e.scrollable && !e.shrink, shrink: e.shrink, active: e.isActive, disabled: e.disabled }])],
            style: a.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            'aria-selected': e.isActive,
            'aria-disabled': e.disabled || void 0,
            'aria-controls': e.controls,
            'data-allow-mismatch': 'attribute',
          },
          [n()],
        );
    },
  }),
  [zt, Wt] = m('swipe-item');
const Ft = Y(
    me({
      name: zt,
      setup(e, { slots: t }) {
        let a;
        const n = Ae({ offset: 0, inited: !1, mounted: !1 }),
          { parent: l, index: o } = b(kt);
        if (!l) return;
        const r = fe(() => {
            const e = {},
              { vertical: t } = l.props;
            return (
              l.size.value && (e[t ? 'height' : 'width'] = `${l.size.value}px`),
              n.offset && (e.transform = `translate${t ? 'Y' : 'X'}(${n.offset}px)`),
              e
            );
          }),
          s = fe(() => {
            const { loop: e, lazyRender: t } = l.props;
            if (!t || a) return !0;
            if (!n.mounted) return !1;
            const i = l.activeIndicator.value,
              r = l.count.value - 1,
              s = 0 === i && e ? r : i - 1,
              u = i === r && e ? 0 : i + 1;
            return ((a = o.value === i || o.value === s || o.value === u), a);
          });
        return (
          Oe(() => {
            _e(() => {
              n.mounted = !0;
            });
          }),
          i({
            setOffset: (e) => {
              n.offset = e;
            },
          }),
          () => {
            var e;
            return he('div', { class: Wt(), style: r.value }, [s.value ? (null == (e = t.default) ? void 0 : e.call(t)) : null]);
          }
        );
      },
    }),
  ),
  [jt, Xt] = m('tab');
const Zt = Y(
    me({
      name: jt,
      props: v({}, t, {
        dot: Boolean,
        name: y,
        badge: y,
        title: String,
        disabled: Boolean,
        titleClass: Z,
        titleStyle: [String, Object],
        showZeroBadge: P,
      }),
      setup(e, { slots: t }) {
        const a = bt(),
          n = ve(!1),
          l = ge(),
          { parent: o, index: r } = b(Mt);
        if (!o) return;
        const s = () => {
            var t;
            return null != (t = e.name) ? t : r.value;
          },
          u = fe(() => {
            const t = s() === o.currentName.value;
            return (
              t &&
                !n.value &&
                ((n.value = !0),
                o.props.lazyRender &&
                  _e(() => {
                    o.onRendered(s(), e.title);
                  })),
              t
            );
          }),
          c = ve(''),
          d = ve('');
        pe(() => {
          const { titleClass: t, titleStyle: a } = e;
          ((c.value = t ? gt(t) : ''),
            (d.value =
              a && 'string' != typeof a
                ? (function (e) {
                    if (!e) return '';
                    if (st(e)) return e;
                    let t = '';
                    for (const a in e) {
                      const n = e[a];
                      (st(n) || 'number' == typeof n) && (t += `${a.startsWith('--') ? a : dt(a)}:${n};`);
                    }
                    return t;
                  })(mt(a))
                : a));
        });
        const m = ve(!u.value);
        return (
          Ne(u, (e) => {
            e
              ? (m.value = !1)
              : R(() => {
                  m.value = !0;
                });
          }),
          Ne(
            () => e.title,
            () => {
              (o.setLine(), o.scrollIntoView());
            },
          ),
          Vt(u),
          i({
            id: a,
            renderTitle: (n) =>
              he(
                Rt,
                Ie(
                  {
                    key: a,
                    id: `${o.id}-${r.value}`,
                    ref: o.setTitleRefs(r.value),
                    style: d.value,
                    class: c.value,
                    isActive: u.value,
                    controls: a,
                    scrollable: o.scrollable.value,
                    activeColor: o.props.titleActiveColor,
                    inactiveColor: o.props.titleInactiveColor,
                    onClick: (e) => n(l.proxy, r.value, e),
                  },
                  K(o.props, ['type', 'color', 'shrink']),
                  K(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
                ),
                { title: t.title },
              ),
          }),
          () => {
            var e;
            const l = `${o.id}-${r.value}`,
              { animated: i, swipeable: s, scrollspy: c, lazyRender: d } = o.props;
            if (!t.default && !i) return;
            const v = c || u.value;
            if (i || s)
              return he(
                Ft,
                {
                  id: a,
                  role: 'tabpanel',
                  class: Xt('panel-wrapper', { inactive: m.value }),
                  tabindex: u.value ? 0 : -1,
                  'aria-hidden': !u.value,
                  'aria-labelledby': l,
                  'data-allow-mismatch': 'attribute',
                },
                {
                  default: () => {
                    var e;
                    return [he('div', { class: Xt('panel') }, [null == (e = t.default) ? void 0 : e.call(t)])];
                  },
                },
              );
            const f = n.value || c || !d ? (null == (e = t.default) ? void 0 : e.call(t)) : null;
            return ke(
              he(
                'div',
                {
                  id: a,
                  role: 'tabpanel',
                  class: Xt('panel'),
                  tabindex: v ? 0 : -1,
                  'aria-labelledby': l,
                  'data-allow-mismatch': 'attribute',
                },
                [f],
              ),
              [[Ee, v]],
            );
          }
        );
      },
    }),
  ),
  Kt = Y(Gt),
  [qt] = m('picker-group'),
  Jt = Symbol(qt);
v({ tabs: g(), activeTab: I(0), nextStepText: String, showToolbar: P }, nt);
const Qt = v(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: I(44),
    showToolbar: P,
    swipeDuration: I(1e3),
    visibleOptionNum: I(6),
  },
  nt,
);
const ea = Y(
    me({
      name: We,
      props: v({}, Qt, { columns: g(), modelValue: g(), toolbarPosition: E('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: a }) {
        const n = ve(),
          l = ve(e.modelValue.slice(0)),
          { parent: o } = b(Jt),
          { children: r, linkChildren: u } = V(et);
        u();
        const c = fe(() =>
            (function (e) {
              return v({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          d = fe(() => H(e.optionHeight)),
          m = fe(() =>
            (function (e, t) {
              const a = e[0];
              if (a) {
                if (Array.isArray(a)) return 'multiple';
                if (t.children in a) return 'cascade';
              }
              return 'default';
            })(e.columns, c.value),
          ),
          p = fe(() => {
            const { columns: t } = e;
            switch (m.value) {
              case 'multiple':
                return t;
              case 'cascade':
                return (function (e, t, a) {
                  const n = [];
                  let l = { [t.children]: e },
                    o = 0;
                  for (; l && l[t.children]; ) {
                    const e = l[t.children],
                      i = a.value[o];
                    ((l = f(i) ? qe(e, i, t) : void 0), !l && e.length && (l = qe(e, Xe(e)[t.value], t)), o++, n.push(e));
                  }
                  return n;
                })(t, c.value, l);
              default:
                return [t];
            }
          }),
          h = fe(() => p.value.some((e) => e.length)),
          g = fe(() => p.value.map((e, t) => qe(e, l.value[t], c.value))),
          y = fe(() => p.value.map((e, t) => e.findIndex((e) => e[c.value.value] === l.value[t]))),
          N = (e, t) => {
            if (l.value[e] !== t) {
              const a = l.value.slice(0);
              ((a[e] = t), (l.value = a));
            }
          },
          _ = () => ({ selectedValues: l.value.slice(0), selectedOptions: g.value, selectedIndexes: y.value }),
          O = () => {
            r.forEach((e) => e.stopMomentum());
            const e = _();
            return (
              _e(() => {
                const e = _();
                t('confirm', e);
              }),
              e
            );
          },
          w = () => t('cancel', _()),
          S = () =>
            p.value.map((n, o) =>
              he(
                tt,
                {
                  value: l.value[o],
                  fields: c.value,
                  options: n,
                  readonly: e.readonly,
                  allowHtml: e.allowHtml,
                  optionHeight: d.value,
                  swipeDuration: e.swipeDuration,
                  visibleOptionNum: e.visibleOptionNum,
                  onChange: (e) =>
                    ((e, a) => {
                      (N(a, e),
                        'cascade' === m.value &&
                          l.value.forEach((e, t) => {
                            const a = p.value[t];
                            Ke(a, e, c.value) || N(t, a.length ? a[0][c.value.value] : void 0);
                          }),
                        _e(() => {
                          t('change', v({ columnIndex: a }, _()));
                        }));
                    })(e, o),
                  onClickOption: (e) =>
                    ((e, a) => {
                      const n = { columnIndex: a, currentOption: e };
                      (t('clickOption', v(_(), n)), t('scrollInto', n));
                    })(e, o),
                  onScrollInto: (e) => {
                    t('scrollInto', { currentOption: e, columnIndex: o });
                  },
                },
                { option: a.option },
              ),
            ),
          x = (e) => {
            if (h.value) {
              const t = { height: `${d.value}px` },
                a = { backgroundSize: `100% ${(e - d.value) / 2}px` };
              return [he('div', { class: Fe('mask'), style: a }, null), he('div', { class: [q, Fe('frame')], style: t }, null)];
            }
          },
          k = () => {
            const t = d.value * +e.visibleOptionNum,
              l = { height: `${t}px` };
            return e.loading || h.value || !a.empty ? he('div', { ref: n, class: Fe('columns'), style: l }, [S(), x(t)]) : a.empty();
          },
          I = () => {
            if (e.showToolbar && !o) return he(it, Ie(K(e, ot), { onConfirm: O, onCancel: w }), K(a, lt));
          },
          E = (e) => {
            e.forEach((e, t) => {
              e.length && !Ke(e, l.value[t], c.value) && N(t, Xe(e)[c.value.value]);
            });
          };
        let L;
        (Ne(p, (e) => E(e), { immediate: !0 }),
          Ne(
            () => e.modelValue,
            (t) => {
              (J(t, l.value) || J(t, L) || ((l.value = t.slice(0)), (L = t.slice(0))), 0 === e.modelValue.length && E(p.value));
            },
            { deep: !0 },
          ),
          Ne(
            l,
            (a) => {
              J(a, e.modelValue) || ((L = a.slice(0)), t('update:modelValue', L));
            },
            { immediate: !0 },
          ),
          D('touchmove', A, { target: n }));
        return (
          i({ confirm: O, getSelectedOptions: () => g.value }),
          () => {
            var t, n;
            return he('div', { class: Fe() }, [
              'top' === e.toolbarPosition ? I() : null,
              e.loading ? he(s, { class: Fe('loading') }, null) : null,
              null == (t = a['columns-top']) ? void 0 : t.call(a),
              k(),
              null == (n = a['columns-bottom']) ? void 0 : n.call(a),
              'bottom' === e.toolbarPosition ? I() : null,
            ]);
          }
        );
      },
    }),
  ),
  [ta, aa] = m('cell'),
  na = {
    tag: E('div'),
    icon: String,
    size: String,
    title: y,
    value: y,
    label: y,
    center: Boolean,
    isLink: Boolean,
    border: P,
    iconPrefix: String,
    valueClass: Z,
    labelClass: Z,
    titleClass: Z,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const la = Y(
  me({
    name: ta,
    props: v({}, na, t),
    setup(e, { slots: t }) {
      const n = a(),
        l = () => {
          if (t.label || f(e.label)) return he('div', { class: [aa('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var a;
          if (t.title || f(e.title)) {
            const n = null == (a = t.title) ? void 0 : a.call(t);
            if (Array.isArray(n) && 0 === n.length) return;
            return he('div', { class: [aa('title'), e.titleClass], style: e.titleStyle }, [n || he('span', null, [e.title]), l()]);
          }
        },
        i = () => {
          const a = t.value || t.default;
          if (a || f(e.value)) return he('div', { class: [aa('value'), e.valueClass] }, [a ? a() : he('span', null, [e.value])]);
        },
        r = () => {
          if (t['right-icon']) return t['right-icon']();
          if (e.isLink) {
            const t = e.arrowDirection && 'right' !== e.arrowDirection ? `arrow-${e.arrowDirection}` : 'arrow';
            return he(Q, { name: t, class: aa('right-icon') }, null);
          }
        };
      return () => {
        var a;
        const { tag: l, size: s, center: u, border: c, isLink: d, required: m } = e,
          v = null != (a = e.clickable) ? a : d,
          f = { center: u, required: !!m, clickable: v, borderless: !c };
        return (
          s && (f[s] = !!s),
          he(
            l,
            { class: aa(f), role: v ? 'button' : void 0, tabindex: v ? 0 : void 0, onClick: n },
            {
              default: () => {
                var a;
                return [
                  t.icon ? t.icon() : e.icon ? he(Q, { name: e.icon, class: aa('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
                  o(),
                  i(),
                  r(),
                  null == (a = t.extra) ? void 0 : a.call(t),
                ];
              },
            },
          )
        );
      };
    },
  }),
);
function oa(e) {
  return Array.isArray(e) ? !e.length : 0 !== e && !e;
}
function ia(e, t) {
  const { message: a } = t;
  return ae(a) ? a(e, t) : a || '';
}
function ra({ target: e }) {
  e.composing = !0;
}
function sa({ target: e }) {
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function ua(e) {
  return [...e].length;
}
function ca(e, t) {
  return [...e].slice(0, t).join('');
}
const [da, ma] = m('field'),
  va = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: y,
    max: Number,
    min: Number,
    formatter: Function,
    clearIcon: E('clear'),
    modelValue: I(''),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: E('focus'),
    formatTrigger: E('onChange'),
    spellcheck: { type: Boolean, default: null },
    error: { type: Boolean, default: null },
    disabled: { type: Boolean, default: null },
    readonly: { type: Boolean, default: null },
    inputmode: String,
  };
const fa = Y(
  me({
    name: da,
    props: v({}, na, va, {
      rows: y,
      type: E('text'),
      rules: Array,
      autosize: [Boolean, Object],
      labelWidth: y,
      labelClass: Z,
      labelAlign: String,
      showWordLimit: Boolean,
      errorMessageAlign: String,
      colon: { type: Boolean, default: null },
    }),
    emits: [
      'blur',
      'focus',
      'clear',
      'keypress',
      'clickInput',
      'endValidate',
      'startValidate',
      'clickLeftIcon',
      'clickRightIcon',
      'update:modelValue',
    ],
    setup(e, { emit: t, slots: a }) {
      const n = bt(),
        l = Ae({ status: 'unvalidated', focused: !1, validateMessage: '' }),
        o = ve(),
        r = ve(),
        s = ve(),
        { parent: u } = b(oe),
        c = () => {
          var t;
          return String(null != (t = e.modelValue) ? t : '');
        },
        d = (t) => (f(e[t]) ? e[t] : u && f(u.props[t]) ? u.props[t] : void 0),
        m = fe(() => {
          const t = d('readonly');
          if (e.clearable && !t) {
            const t = '' !== c(),
              a = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && l.focused);
            return t && a;
          }
          return !1;
        }),
        v = fe(() => (s.value && a.input ? s.value() : e.modelValue)),
        h = fe(() => {
          var t;
          const a = d('required');
          return 'auto' === a ? (null == (t = e.rules) ? void 0 : t.some((e) => e.required)) : a;
        }),
        g = (e) =>
          e.reduce(
            (e, t) =>
              e.then(() => {
                if ('failed' === l.status) return;
                let { value: e } = v;
                if (
                  (t.formatter && (e = t.formatter(e, t)),
                  !(function (e, t) {
                    if (oa(e)) {
                      if (t.required) return !1;
                      if (!1 === t.validateEmpty) return !0;
                    }
                    return !(t.pattern && !t.pattern.test(String(e)));
                  })(e, t))
                )
                  return ((l.status = 'failed'), void (l.validateMessage = ia(e, t)));
                if (t.validator) {
                  if (oa(e) && !1 === t.validateEmpty) return;
                  return (function (e, t) {
                    return new Promise((a) => {
                      const n = t.validator(e, t);
                      ne(n) ? n.then(a) : a(n);
                    });
                  })(e, t).then((a) => {
                    a && 'string' == typeof a
                      ? ((l.status = 'failed'), (l.validateMessage = a))
                      : !1 === a && ((l.status = 'failed'), (l.validateMessage = ia(e, t)));
                  });
                }
              }),
            Promise.resolve(),
          ),
        y = () => {
          ((l.status = 'unvalidated'), (l.validateMessage = ''));
        },
        N = () => t('endValidate', { status: l.status, message: l.validateMessage }),
        _ = (a = e.rules) =>
          new Promise((n) => {
            (y(),
              a
                ? (t('startValidate'),
                  g(a).then(() => {
                    'failed' === l.status ? (n({ name: e.name, message: l.validateMessage }), N()) : ((l.status = 'passed'), n(), N());
                  }))
                : n());
          }),
        O = (t) => {
          if (u && e.rules) {
            const { validateTrigger: a } = u.props,
              n = ie(a).includes(t),
              l = e.rules.filter((e) => (e.trigger ? ie(e.trigger).includes(t) : n));
            l.length && _(l);
          }
        },
        w = (a, n = 'onChange') => {
          var i, r;
          const s = a;
          a = ((t) => {
            var a;
            const { maxlength: n } = e;
            if (f(n) && ua(t) > +n) {
              const e = c();
              if (e && ua(e) === +n) return e;
              const i = null == (a = o.value) ? void 0 : a.selectionEnd;
              if (l.focused && i) {
                const e = [...t],
                  a = e.length - +n;
                return (e.splice(i - a, a), e.join(''));
              }
              return ca(t, +n);
            }
            return t;
          })(a);
          const u = s.length - a.length;
          if ('number' === e.type || 'digit' === e.type) {
            const t = 'number' === e.type;
            if (((a = le(a, t, t)), 'onBlur' === n && '' !== a && (void 0 !== e.min || void 0 !== e.max))) {
              const t = p(+a, null != (i = e.min) ? i : -1 / 0, null != (r = e.max) ? r : 1 / 0);
              +a !== t && (a = t.toString());
            }
          }
          let d = 0;
          if (e.formatter && n === e.formatTrigger) {
            const { formatter: t, maxlength: n } = e;
            if (((a = t(a)), f(n) && ua(a) > +n && (a = ca(a, +n)), o.value && l.focused)) {
              const { selectionEnd: e } = o.value,
                a = ca(s, e);
              d = t(a).length - a.length;
            }
          }
          if (o.value && o.value.value !== a)
            if (l.focused) {
              let { selectionStart: e, selectionEnd: t } = o.value;
              if (((o.value.value = a), f(e) && f(t))) {
                const n = a.length;
                (u ? ((e -= u), (t -= u)) : d && ((e += d), (t += d)), o.value.setSelectionRange(Math.min(e, n), Math.min(t, n)));
              }
            } else o.value.value = a;
          a !== e.modelValue && t('update:modelValue', a);
        },
        S = (e) => {
          e.target.composing || w(e.target.value);
        },
        x = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.blur();
        },
        k = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.focus();
        },
        I = () => {
          const t = o.value;
          'textarea' === e.type &&
            e.autosize &&
            t &&
            (function (e, t) {
              const a = ee();
              e.style.height = 'auto';
              let n = e.scrollHeight;
              if (te(t)) {
                const { maxHeight: e, minHeight: a } = t;
                (void 0 !== e && (n = Math.min(n, e)), void 0 !== a && (n = Math.max(n, a)));
              }
              n && ((e.style.height = `${n}px`), F(a));
            })(t, e.autosize);
        },
        E = (e) => {
          ((l.focused = !0), t('focus', e), _e(I), d('readonly') && x());
        },
        L = (e) => {
          ((l.focused = !1), w(c(), 'onBlur'), t('blur', e), d('readonly') || (O('onBlur'), _e(I), re()));
        },
        H = (e) => t('clickInput', e),
        T = (e) => t('clickLeftIcon', e),
        C = (e) => t('clickRightIcon', e),
        $ = fe(() => ('boolean' == typeof e.error ? e.error : !(!u || !u.props.showError || 'failed' !== l.status) || void 0)),
        M = fe(() => {
          const e = d('labelWidth'),
            t = d('labelAlign');
          if (e && 'top' !== t) return { width: z(e) };
        }),
        G = (a) => {
          if (13 === a.keyCode) {
            ((u && u.props.submitOnEnter) || 'textarea' === e.type || A(a), 'search' === e.type && x());
          }
          t('keypress', a);
        },
        Y = () => e.id || `${n}-input`,
        P = () => {
          const t = ma('control', [
            d('inputAlign'),
            { error: $.value, custom: !!a.input, 'min-height': 'textarea' === e.type && !e.autosize },
          ]);
          if (a.input) return he('div', { class: t, onClick: H }, [a.input()]);
          const l = {
            id: Y(),
            ref: o,
            name: e.name,
            rows: void 0 !== e.rows ? +e.rows : void 0,
            class: t,
            disabled: d('disabled'),
            readonly: d('readonly'),
            autofocus: e.autofocus,
            placeholder: e.placeholder,
            autocomplete: e.autocomplete,
            autocapitalize: e.autocapitalize,
            autocorrect: e.autocorrect,
            enterkeyhint: e.enterkeyhint,
            spellcheck: e.spellcheck,
            'aria-labelledby': e.label ? `${n}-label` : void 0,
            'data-allow-mismatch': 'attribute',
            onBlur: L,
            onFocus: E,
            onInput: S,
            onClick: H,
            onChange: sa,
            onKeypress: G,
            onCompositionend: sa,
            onCompositionstart: ra,
          };
          return 'textarea' === e.type
            ? he('textarea', Ie(l, { inputmode: e.inputmode }), null)
            : he(
                'input',
                Ie(
                  ((i = e.type),
                  (r = e.inputmode),
                  'number' === i && ((i = 'text'), null != r || (r = 'decimal')),
                  'digit' === i && ((i = 'tel'), null != r || (r = 'numeric')),
                  { type: i, inputmode: r }),
                  l,
                ),
                null,
              );
          var i, r;
        },
        V = () => {
          const t = a['right-icon'];
          if (e.rightIcon || t)
            return he('div', { class: ma('right-icon'), onClick: C }, [
              t ? t() : he(Q, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        B = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = ua(c());
            return he('div', { class: ma('word-limit') }, [he('span', { class: ma('word-num') }, [t]), Le('/'), e.maxlength]);
          }
        },
        U = () => {
          if (u && !1 === u.props.showErrorMessage) return;
          const t = e.errorMessage || l.validateMessage;
          if (t) {
            const e = a['error-message'],
              n = d('errorMessageAlign');
            return he('div', { class: ma('error-message', n) }, [e ? e({ message: t }) : t]);
          }
        },
        R = () => [
          he('div', { class: ma('body') }, [
            P(),
            m.value && he(Q, { ref: r, name: e.clearIcon, class: ma('clear') }, null),
            V(),
            a.button && he('div', { class: ma('button') }, [a.button()]),
          ]),
          B(),
          U(),
        ];
      return (
        i({ blur: x, focus: k, validate: _, formValue: v, resetValidation: y, getValidationStatus: () => l.status }),
        xe(se, { customValue: s, resetValidation: y, validateWithTrigger: O }),
        Ne(
          () => e.modelValue,
          () => {
            (w(c()), y(), O('onChange'), _e(I));
          },
        ),
        Oe(() => {
          (w(c(), e.formatTrigger), _e(I));
        }),
        D(
          'touchstart',
          (e) => {
            (A(e), t('update:modelValue', ''), t('clear', e));
          },
          {
            target: fe(() => {
              var e;
              return null == (e = r.value) ? void 0 : e.$el;
            }),
          },
        ),
        () => {
          const t = d('disabled'),
            l = d('labelAlign'),
            o = (() => {
              const t = a['left-icon'];
              if (e.leftIcon || t)
                return he('div', { class: ma('left-icon'), onClick: T }, [
                  t ? t() : he(Q, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return he(
            la,
            {
              size: e.size,
              class: ma({ error: $.value, disabled: t, [`label-${l}`]: l }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: M.value,
              valueClass: ma('value'),
              titleClass: [ma('label', [l, { required: h.value }]), e.labelClass],
              arrowDirection: e.arrowDirection,
            },
            {
              icon: o && 'top' !== l ? () => o : null,
              title: () => {
                const t = (() => {
                  const t = d('labelWidth'),
                    l = d('labelAlign'),
                    o = d('colon') ? ':' : '';
                  return a.label
                    ? [a.label(), o]
                    : e.label
                      ? he(
                          'label',
                          {
                            id: `${n}-label`,
                            for: a.input ? void 0 : Y(),
                            'data-allow-mismatch': 'attribute',
                            onClick: (e) => {
                              (A(e), k());
                            },
                            style: 'top' === l && t ? { width: z(t) } : void 0,
                          },
                          [e.label + o],
                        )
                      : void 0;
                })();
                return 'top' === l ? [o, t].filter(Boolean) : t || [];
              },
              value: R,
              extra: a.extra,
            },
          );
        }
      );
    },
  }),
);
Y(u);
const [pa, ha, ga] = m('calendar');
function ya(e, t) {
  const a = e.getFullYear(),
    n = t.getFullYear();
  if (a === n) {
    const a = e.getMonth(),
      n = t.getMonth();
    return a === n ? 0 : a > n ? 1 : -1;
  }
  return a > n ? 1 : -1;
}
function ba(e, t) {
  const a = ya(e, t);
  if (0 === a) {
    const a = e.getDate(),
      n = t.getDate();
    return a === n ? 0 : a > n ? 1 : -1;
  }
  return a;
}
const Da = (e) => new Date(e),
  Aa = (e) => (Array.isArray(e) ? e.map(Da) : Da(e));
function Na(e, t) {
  const a = Da(e);
  return (a.setDate(a.getDate() + t), a);
}
function _a(e, t) {
  const a = Da(e);
  return (a.setMonth(a.getMonth() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
function Oa(e, t) {
  const a = Da(e);
  return (a.setFullYear(a.getFullYear() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
const wa = (e) => Na(e, -1),
  Sa = (e) => Na(e, 1),
  xa = (e) => _a(e, -1),
  ka = (e) => _a(e, 1),
  Ia = (e) => Oa(e, -1),
  Ea = (e) => Oa(e, 1),
  La = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
v({}, Qt, { modelValue: g(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Ha] = m('calendar-day');
var Ta = me({
  name: Ha,
  props: { item: h(Object), color: String, index: Number, offset: ue(0), rowHeight: String },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const n = fe(() => {
        const { item: t, index: a, color: n, offset: l, rowHeight: o } = e,
          i = { height: o };
        if ('placeholder' === t.type) return ((i.width = '100%'), i);
        if ((0 === a && (i.marginLeft = (100 * l) / 7 + '%'), n))
          switch (t.type) {
            case 'end':
            case 'start':
            case 'start-end':
            case 'multiple-middle':
            case 'multiple-selected':
              i.background = n;
              break;
            case 'middle':
              i.color = n;
          }
        return (
          t.date &&
            (function (e, t = 0) {
              const a = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                n = t + e.getDate() - 1,
                l = t + a.getDate() - 1;
              return Math.floor(n / 7) === Math.floor(l / 7);
            })(t.date, l) &&
            (i.marginBottom = 0),
          i
        );
      }),
      l = () => {
        'disabled' !== e.item.type ? t('click', e.item) : t('clickDisabledDate', e.item);
      },
      o = () => {
        const { topInfo: t } = e.item;
        if (t || a['top-info']) return he('div', { class: ha('top-info') }, [a['top-info'] ? a['top-info'](e.item) : t]);
      },
      i = () => {
        const { bottomInfo: t } = e.item;
        if (t || a['bottom-info']) return he('div', { class: ha('bottom-info') }, [a['bottom-info'] ? a['bottom-info'](e.item) : t]);
      },
      r = () => {
        const { item: t, color: n, rowHeight: l } = e,
          { type: r } = t,
          s = [o(), a.text ? a.text(e.item) : e.item.text, i()];
        return 'selected' === r ? he('div', { class: ha('selected-day'), style: { width: l, height: l, background: n } }, [s]) : s;
      };
    return () => {
      const { type: t, className: a } = e.item;
      return 'placeholder' === t
        ? he('div', { class: ha('day'), style: n.value }, null)
        : he('div', { role: 'gridcell', style: n.value, class: [ha('day', t), a], tabindex: 'disabled' === t ? void 0 : -1, onClick: l }, [
            r(),
          ]);
    };
  },
});
const [Ca] = m('calendar-month');
var $a = me({
  name: Ca,
  props: {
    date: h(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: y,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number,
  },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const [n, l] = ce(),
      o = ve(),
      r = ve(),
      s = ze(r),
      u = fe(() => {
        return ((t = e.date), ga('monthTitle', t.getFullYear(), t.getMonth() + 1));
        var t;
      }),
      c = fe(() => z(e.rowHeight)),
      d = fe(() => {
        const t = e.date.getDate(),
          a = (e.date.getDay() - (t % 7) + 8) % 7;
        return e.firstDayOfWeek ? (a + 7 - e.firstDayOfWeek) % 7 : a;
      }),
      m = fe(() => {
        return ((t = e.date.getFullYear()), (a = e.date.getMonth() + 1), 32 - new Date(t, a - 1, 32).getDate());
        var t, a;
      }),
      v = fe(() => n.value || !e.lazyRender),
      f = (t) => {
        const { type: a, minDate: n, maxDate: l, currentDate: o } = e;
        if ((n && ba(t, n) < 0) || (l && ba(t, l) > 0)) return 'disabled';
        if (null === o) return '';
        if (Array.isArray(o)) {
          if ('multiple' === a)
            return ((t) => {
              const a = (t) => e.currentDate.some((e) => 0 === ba(e, t));
              if (a(t)) {
                const e = wa(t),
                  n = Sa(t),
                  l = a(e),
                  o = a(n);
                return l && o ? 'multiple-middle' : l ? 'end' : o ? 'start' : 'multiple-selected';
              }
              return '';
            })(t);
          if ('range' === a)
            return ((t) => {
              const [a, n] = e.currentDate;
              if (!a) return '';
              const l = ba(t, a);
              if (!n) return 0 === l ? 'start' : '';
              const o = ba(t, n);
              return e.allowSameDay && 0 === l && 0 === o
                ? 'start-end'
                : 0 === l
                  ? 'start'
                  : 0 === o
                    ? 'end'
                    : l > 0 && o < 0
                      ? 'middle'
                      : '';
            })(t);
        } else if ('single' === a) return 0 === ba(t, o) ? 'selected' : '';
        return '';
      },
      p = (t) => {
        if ('range' === e.type) {
          if ('start' === t || 'end' === t) return ga(t);
          if ('start-end' === t) return `${ga('start')}/${ga('end')}`;
        }
      },
      h = () => {
        if (e.showMonthTitle)
          return he('div', { class: ha('month-title') }, [a['month-title'] ? a['month-title']({ date: e.date, text: u.value }) : u.value]);
      },
      g = () => {
        if (e.showMark && v.value) return he('div', { class: ha('month-mark') }, [e.date.getMonth() + 1]);
      },
      y = fe(() => {
        const e = Math.ceil((m.value + d.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      b = fe(() => {
        const t = [],
          a = e.date.getFullYear(),
          n = e.date.getMonth();
        for (let l = 1; l <= m.value; l++) {
          const o = new Date(a, n, l),
            i = f(o);
          let r = { date: o, type: i, text: l, bottomInfo: p(i) };
          (e.formatter && (r = e.formatter(r)), t.push(r));
        }
        return t;
      }),
      D = fe(() => b.value.filter((e) => 'disabled' === e.type)),
      A = (n, l) =>
        he(
          Ta,
          {
            item: n,
            index: l,
            color: e.color,
            offset: d.value,
            rowHeight: c.value,
            onClick: (e) => t('click', e),
            onClickDisabledDate: (e) => t('clickDisabledDate', e),
          },
          K(a, ['top-info', 'bottom-info', 'text']),
        );
    return (
      i({
        getTitle: () => u.value,
        getHeight: () => s.value,
        setVisible: l,
        scrollToDate: (e, t) => {
          if (o.value) {
            const a = $(o.value),
              n = y.value.length,
              l = ((Math.ceil((t.getDate() + d.value) / 7) - 1) * a.height) / n;
            S(e, a.top + l + e.scrollTop - $(e).top);
          }
        },
        disabledDays: D,
      }),
      () =>
        he('div', { class: ha('month'), ref: r }, [
          h(),
          he('div', { ref: o, role: 'grid', class: ha('days') }, [g(), (v.value ? b : y).value.map(A)]),
        ])
    );
  },
});
const [Ma] = m('calendar-header');
var Ga = me({
  name: Ma,
  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    switchMode: E('none'),
  },
  emits: ['clickSubtitle', 'panelChange'],
  setup(e, { slots: t, emit: a }) {
    const n = fe(() => e.date && e.minDate && ya(xa(e.date), e.minDate) < 0),
      l = fe(() => e.date && e.minDate && ya(Ia(e.date), e.minDate) < 0),
      o = fe(() => e.date && e.maxDate && ya(ka(e.date), e.maxDate) > 0),
      i = fe(() => e.date && e.maxDate && ya(Ea(e.date), e.maxDate) > 0),
      r = () => {
        if (e.showTitle) {
          const a = e.title || ga('title'),
            n = t.title ? t.title() : a;
          return he('div', { class: ha('header-title') }, [n]);
        }
      },
      s = (e) => a('clickSubtitle', e),
      u = (e) => a('panelChange', e),
      c = (a) => {
        const r = 'year-month' === e.switchMode,
          s = t[a ? 'next-month' : 'prev-month'],
          c = t[a ? 'next-year' : 'prev-year'],
          d = a ? o.value : n.value,
          m = a ? i.value : l.value,
          v = a ? 'arrow' : 'arrow-left',
          f = a ? 'arrow-double-right' : 'arrow-double-left',
          p = he('view', { class: ha('header-action', { disabled: d }), onClick: d ? void 0 : () => u((a ? ka : xa)(e.date)) }, [
            s ? s({ disabled: d }) : he(Q, { class: { [N]: !d }, name: v }, null),
          ]),
          h =
            r &&
            he('view', { class: ha('header-action', { disabled: m }), onClick: m ? void 0 : () => u((a ? Ea : Ia)(e.date)) }, [
              c ? c({ disabled: m }) : he(Q, { class: { [N]: !m }, name: f }, null),
            ]);
        return a ? [p, h] : [h, p];
      },
      d = () => {
        if (e.showSubtitle) {
          const a = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            n = 'none' !== e.switchMode;
          return he('div', { class: ha('header-subtitle', { 'with-switch': n }), onClick: s }, [
            n ? [c(), he('div', { class: ha('header-subtitle-text') }, [a]), c(!0)] : a,
          ]);
        }
      },
      m = () => {
        const { firstDayOfWeek: t } = e,
          a = ga('weekdays'),
          n = [...a.slice(t, 7), ...a.slice(0, t)];
        return he('div', { class: ha('weekdays') }, [n.map((e) => he('span', { class: ha('weekday') }, [e]))]);
      };
    return () => he('div', { class: ha('header') }, [r(), d(), m()]);
  },
});
const Ya = Y(
  me({
    name: pa,
    props: {
      show: Boolean,
      type: E('single'),
      switchMode: E('none'),
      title: String,
      color: String,
      round: P,
      readonly: Boolean,
      poppable: P,
      maxRange: I(null),
      position: E('bottom'),
      teleport: [String, Object],
      showMark: P,
      showTitle: P,
      formatter: Function,
      rowHeight: y,
      confirmText: String,
      rangePrompt: String,
      lazyRender: P,
      showConfirm: P,
      defaultDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: P,
      closeOnPopstate: P,
      showRangePrompt: P,
      confirmDisabledText: String,
      closeOnClickOverlay: P,
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: P,
      minDate: { type: Date, validator: de },
      maxDate: { type: Date, validator: de },
      firstDayOfWeek: { type: y, default: 0, validator: (e) => e >= 0 && e <= 6 },
    },
    emits: [
      'select',
      'confirm',
      'unselect',
      'monthShow',
      'overRange',
      'update:show',
      'clickSubtitle',
      'clickDisabledDate',
      'clickOverlay',
      'panelChange',
    ],
    setup(e, { emit: t, slots: a }) {
      const l = fe(() => 'none' !== e.switchMode),
        o = fe(() => (e.minDate || l.value ? e.minDate : La())),
        r = fe(() => (e.maxDate || l.value ? e.maxDate : _a(La(), 6))),
        s = (e, t = o.value, a = r.value) => (t && -1 === ba(e, t) ? t : a && 1 === ba(e, a) ? a : e),
        u = (t = e.defaultDate) => {
          const { type: a, allowSameDay: n } = e;
          if (null === t) return t;
          const l = La();
          if ('range' === a) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === ba(t[0], l) && (t = []));
            const e = o.value,
              a = r.value;
            return [s(t[0] || l, e, a ? (n ? a : wa(a)) : void 0), s(t[1] || (n ? l : Sa(l)), e ? (n ? e : Sa(e)) : void 0)];
          }
          return 'multiple' === a ? (Array.isArray(t) ? t.map((e) => s(e)) : [s(l)]) : ((t && !Array.isArray(t)) || (t = l), s(t));
        };
      let m;
      const v = ve(),
        f = ve(u()),
        p = ve(
          (() => {
            const e = Array.isArray(f.value) ? f.value[0] : f.value;
            return e || s(La());
          })(),
        ),
        h = ve(),
        [g, y] = Dt(),
        b = fe(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        D = fe(() => {
          const e = [];
          if (!o.value || !r.value) return e;
          const t = new Date(o.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== ya(t, r.value));
          return e;
        }),
        A = fe(() => {
          if (f.value) {
            if ('range' === e.type) return !f.value[0] || !f.value[1];
            if ('multiple' === e.type) return !f.value.length;
          }
          return !f.value;
        }),
        N = () => {
          const e = w(v.value),
            a = e + m,
            n = D.value.map((e, t) => g.value[t].getHeight());
          if (a > n.reduce((e, t) => e + t, 0) && e > 0) return;
          let l,
            o = 0;
          const i = [-1, -1];
          for (let r = 0; r < D.value.length; r++) {
            const s = g.value[r];
            (o <= a &&
              o + n[r] >= e &&
              ((i[1] = r),
              l || ((l = s), (i[0] = r)),
              g.value[r].showed || ((g.value[r].showed = !0), t('monthShow', { date: s.date, title: s.getTitle() }))),
              (o += n[r]));
          }
          (D.value.forEach((e, t) => {
            const a = t >= i[0] - 1 && t <= i[1] + 1;
            g.value[t].setVisible(a);
          }),
            l && (h.value = l));
        },
        O = (e) => {
          l.value
            ? (p.value = e)
            : _(() => {
                (D.value.some((t, a) => 0 === ya(t, e) && (v.value && g.value[a].scrollToDate(v.value, e), !0)), N());
              });
        },
        S = () => {
          if (!e.poppable || e.show)
            if (f.value) {
              const t = 'single' === e.type ? f.value : f.value[0];
              de(t) && O(t);
            } else l.value || _(N);
        },
        x = () => {
          (e.poppable && !e.show) ||
            (l.value ||
              _(() => {
                m = Math.floor($(v).height);
              }),
            S());
        },
        I = (e = u()) => {
          ((f.value = e), S());
        },
        E = (e) => {
          ((p.value = e), t('panelChange', { date: e }));
        },
        L = () => {
          var e;
          return t('confirm', null != (e = f.value) ? e : Aa(f.value));
        },
        H = (a, n) => {
          const l = (e) => {
            ((f.value = e), t('select', Aa(e)));
          };
          if (n && 'range' === e.type) {
            const n = ((a) => {
              const { maxRange: n, rangePrompt: l, showRangePrompt: o } = e;
              return !(
                n &&
                (function (e) {
                  const t = e[0].getTime();
                  return (e[1].getTime() - t) / 864e5 + 1;
                })(a) > +n &&
                (o && d(l || ga('rangePrompt', n)), t('overRange'), 1)
              );
            })(a);
            if (!n) return void l([a[0], Na(a[0], +e.maxRange - 1)]);
          }
          (l(a), n && !e.showConfirm && L());
        },
        T = fe(() =>
          g.value.reduce((e, t) => {
            var a, n;
            return (e.push(...(null != (n = null == (a = t.disabledDays) ? void 0 : a.value) ? n : [])), e);
          }, []),
        ),
        C = (a) => {
          if (e.readonly || !a.date) return;
          const { date: n } = a,
            { type: l } = e;
          if ('range' === l) {
            if (!f.value) return void H([n]);
            const [t, a] = f.value;
            if (t && !a) {
              const a = ba(n, t);
              if (1 === a) {
                const e = ((e, t, a) => {
                  var n;
                  return null == (n = e.find((e) => -1 === ba(t, e.date) && -1 === ba(e.date, a))) ? void 0 : n.date;
                })(T.value, t, n);
                if (e) {
                  const a = wa(e);
                  -1 === ba(t, a) ? H([t, a]) : H([n]);
                } else H([t, n], !0);
              } else -1 === a ? H([n]) : e.allowSameDay && H([n, n], !0);
            } else H([n]);
          } else if ('multiple' === l) {
            if (!f.value) return void H([n]);
            const a = f.value,
              l = a.findIndex((e) => 0 === ba(e, n));
            if (-1 !== l) {
              const [e] = a.splice(l, 1);
              t('unselect', Da(e));
            } else e.maxRange && a.length >= +e.maxRange ? d(e.rangePrompt || ga('rangePrompt', e.maxRange)) : H([...a, n]);
          } else H(n, !0);
        },
        M = (e) => t('clickOverlay', e),
        G = (e) => t('update:show', e),
        Y = (n, i) => {
          const s = 0 !== i || !e.showSubtitle;
          return he(
            $a,
            Ie(
              {
                ref: l.value ? h : y(i),
                date: n,
                currentDate: f.value,
                showMonthTitle: s,
                firstDayOfWeek: b.value,
                lazyRender: !l.value && e.lazyRender,
                maxDate: r.value,
                minDate: o.value,
              },
              K(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: C, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            K(a, ['top-info', 'bottom-info', 'month-title', 'text']),
          );
        },
        P = () => {
          if (a.footer) return a.footer();
          if (e.showConfirm) {
            const t = a['confirm-text'],
              l = A.value,
              o = l ? e.confirmDisabledText : e.confirmText;
            return he(
              n,
              {
                round: !0,
                block: !0,
                type: 'primary',
                color: e.color,
                class: ha('confirm'),
                disabled: l,
                nativeType: 'button',
                onClick: L,
              },
              { default: () => [t ? t({ disabled: l }) : o || ga('confirm')] },
            );
          }
        },
        V = () => {
          var n, i;
          return he('div', { class: ha() }, [
            he(
              Ga,
              {
                date: null == (n = h.value) ? void 0 : n.date,
                maxDate: r.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (i = h.value) ? void 0 : i.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: b.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: E,
              },
              K(a, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            he('div', { ref: v, class: ha('body'), onScroll: l.value ? void 0 : N }, [l.value ? Y(p.value, 0) : D.value.map(Y)]),
            he('div', { class: [ha('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [P()]),
          ]);
        };
      return (
        Ne(() => e.show, x),
        Ne(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => I(u(f.value)),
        ),
        Ne(
          () => e.defaultDate,
          (e) => {
            I(e);
          },
        ),
        i({ reset: I, scrollToDate: O, getSelectedDate: () => f.value }),
        k(x),
        () =>
          e.poppable
            ? he(
                c,
                {
                  show: e.show,
                  class: ha('popup'),
                  round: e.round,
                  position: e.position,
                  closeable: e.showTitle || e.showSubtitle,
                  teleport: e.teleport,
                  closeOnPopstate: e.closeOnPopstate,
                  safeAreaInsetTop: e.safeAreaInsetTop,
                  closeOnClickOverlay: e.closeOnClickOverlay,
                  onClickOverlay: M,
                  'onUpdate:show': G,
                },
                { default: V },
              )
            : V()
      );
    },
  }),
);
function Pa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Va,
  Ba = { exports: {} };
const Ua = Pa(
  (Va ||
    ((Va = 1),
    (Ba.exports = (function () {
      var e = 1e3,
        t = 6e4,
        a = 36e5,
        n = 'millisecond',
        l = 'second',
        o = 'minute',
        i = 'hour',
        r = 'day',
        s = 'week',
        u = 'month',
        c = 'quarter',
        d = 'year',
        m = 'date',
        v = 'Invalid Date',
        f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        h = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          ordinal: function (e) {
            var t = ['th', 'st', 'nd', 'rd'],
              a = e % 100;
            return '[' + e + (t[(a - 20) % 10] || t[a] || t[0]) + ']';
          },
        },
        g = function (e, t, a) {
          var n = String(e);
          return !n || n.length >= t ? e : '' + Array(t + 1 - n.length).join(a) + e;
        },
        y = {
          s: g,
          z: function (e) {
            var t = -e.utcOffset(),
              a = Math.abs(t),
              n = Math.floor(a / 60),
              l = a % 60;
            return (t <= 0 ? '+' : '-') + g(n, 2, '0') + ':' + g(l, 2, '0');
          },
          m: function e(t, a) {
            if (t.date() < a.date()) return -e(a, t);
            var n = 12 * (a.year() - t.year()) + (a.month() - t.month()),
              l = t.clone().add(n, u),
              o = a - l < 0,
              i = t.clone().add(n + (o ? -1 : 1), u);
            return +(-(n + (a - l) / (o ? l - i : i - l)) || 0);
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          },
          p: function (e) {
            return (
              { M: u, y: d, w: s, d: r, D: m, h: i, m: o, s: l, ms: n, Q: c }[e] ||
              String(e || '')
                .toLowerCase()
                .replace(/s$/, '')
            );
          },
          u: function (e) {
            return void 0 === e;
          },
        },
        b = 'en',
        D = {};
      D[b] = h;
      var A = '$isDayjsObject',
        N = function (e) {
          return e instanceof S || !(!e || !e[A]);
        },
        _ = function e(t, a, n) {
          var l;
          if (!t) return b;
          if ('string' == typeof t) {
            var o = t.toLowerCase();
            (D[o] && (l = o), a && ((D[o] = a), (l = o)));
            var i = t.split('-');
            if (!l && i.length > 1) return e(i[0]);
          } else {
            var r = t.name;
            ((D[r] = t), (l = r));
          }
          return (!n && l && (b = l), l || (!n && b));
        },
        O = function (e, t) {
          if (N(e)) return e.clone();
          var a = 'object' == typeof t ? t : {};
          return ((a.date = e), (a.args = arguments), new S(a));
        },
        w = y;
      ((w.l = _),
        (w.i = N),
        (w.w = function (e, t) {
          return O(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
        }));
      var S = (function () {
          function h(e) {
            ((this.$L = _(e.locale, null, !0)), this.parse(e), (this.$x = this.$x || e.x || {}), (this[A] = !0));
          }
          var g = h.prototype;
          return (
            (g.parse = function (e) {
              ((this.$d = (function (e) {
                var t = e.date,
                  a = e.utc;
                if (null === t) return new Date(NaN);
                if (w.u(t)) return new Date();
                if (t instanceof Date) return new Date(t);
                if ('string' == typeof t && !/Z$/i.test(t)) {
                  var n = t.match(f);
                  if (n) {
                    var l = n[2] - 1 || 0,
                      o = (n[7] || '0').substring(0, 3);
                    return a
                      ? new Date(Date.UTC(n[1], l, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o))
                      : new Date(n[1], l, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o);
                  }
                }
                return new Date(t);
              })(e)),
                this.init());
            }),
            (g.init = function () {
              var e = this.$d;
              ((this.$y = e.getFullYear()),
                (this.$M = e.getMonth()),
                (this.$D = e.getDate()),
                (this.$W = e.getDay()),
                (this.$H = e.getHours()),
                (this.$m = e.getMinutes()),
                (this.$s = e.getSeconds()),
                (this.$ms = e.getMilliseconds()));
            }),
            (g.$utils = function () {
              return w;
            }),
            (g.isValid = function () {
              return !(this.$d.toString() === v);
            }),
            (g.isSame = function (e, t) {
              var a = O(e);
              return this.startOf(t) <= a && a <= this.endOf(t);
            }),
            (g.isAfter = function (e, t) {
              return O(e) < this.startOf(t);
            }),
            (g.isBefore = function (e, t) {
              return this.endOf(t) < O(e);
            }),
            (g.$g = function (e, t, a) {
              return w.u(e) ? this[t] : this.set(a, e);
            }),
            (g.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (g.valueOf = function () {
              return this.$d.getTime();
            }),
            (g.startOf = function (e, t) {
              var a = this,
                n = !!w.u(t) || t,
                c = w.p(e),
                v = function (e, t) {
                  var l = w.w(a.$u ? Date.UTC(a.$y, t, e) : new Date(a.$y, t, e), a);
                  return n ? l : l.endOf(r);
                },
                f = function (e, t) {
                  return w.w(a.toDate()[e].apply(a.toDate('s'), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), a);
                },
                p = this.$W,
                h = this.$M,
                g = this.$D,
                y = 'set' + (this.$u ? 'UTC' : '');
              switch (c) {
                case d:
                  return n ? v(1, 0) : v(31, 11);
                case u:
                  return n ? v(1, h) : v(0, h + 1);
                case s:
                  var b = this.$locale().weekStart || 0,
                    D = (p < b ? p + 7 : p) - b;
                  return v(n ? g - D : g + (6 - D), h);
                case r:
                case m:
                  return f(y + 'Hours', 0);
                case i:
                  return f(y + 'Minutes', 1);
                case o:
                  return f(y + 'Seconds', 2);
                case l:
                  return f(y + 'Milliseconds', 3);
                default:
                  return this.clone();
              }
            }),
            (g.endOf = function (e) {
              return this.startOf(e, !1);
            }),
            (g.$set = function (e, t) {
              var a,
                s = w.p(e),
                c = 'set' + (this.$u ? 'UTC' : ''),
                v = ((a = {}),
                (a[r] = c + 'Date'),
                (a[m] = c + 'Date'),
                (a[u] = c + 'Month'),
                (a[d] = c + 'FullYear'),
                (a[i] = c + 'Hours'),
                (a[o] = c + 'Minutes'),
                (a[l] = c + 'Seconds'),
                (a[n] = c + 'Milliseconds'),
                a)[s],
                f = s === r ? this.$D + (t - this.$W) : t;
              if (s === u || s === d) {
                var p = this.clone().set(m, 1);
                (p.$d[v](f), p.init(), (this.$d = p.set(m, Math.min(this.$D, p.daysInMonth())).$d));
              } else v && this.$d[v](f);
              return (this.init(), this);
            }),
            (g.set = function (e, t) {
              return this.clone().$set(e, t);
            }),
            (g.get = function (e) {
              return this[w.p(e)]();
            }),
            (g.add = function (n, c) {
              var m,
                v = this;
              n = Number(n);
              var f = w.p(c),
                p = function (e) {
                  var t = O(v);
                  return w.w(t.date(t.date() + Math.round(e * n)), v);
                };
              if (f === u) return this.set(u, this.$M + n);
              if (f === d) return this.set(d, this.$y + n);
              if (f === r) return p(1);
              if (f === s) return p(7);
              var h = ((m = {}), (m[o] = t), (m[i] = a), (m[l] = e), m)[f] || 1,
                g = this.$d.getTime() + n * h;
              return w.w(g, this);
            }),
            (g.subtract = function (e, t) {
              return this.add(-1 * e, t);
            }),
            (g.format = function (e) {
              var t = this,
                a = this.$locale();
              if (!this.isValid()) return a.invalidDate || v;
              var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                l = w.z(this),
                o = this.$H,
                i = this.$m,
                r = this.$M,
                s = a.weekdays,
                u = a.months,
                c = a.meridiem,
                d = function (e, a, l, o) {
                  return (e && (e[a] || e(t, n))) || l[a].slice(0, o);
                },
                m = function (e) {
                  return w.s(o % 12 || 12, e, '0');
                },
                f =
                  c ||
                  function (e, t, a) {
                    var n = e < 12 ? 'AM' : 'PM';
                    return a ? n.toLowerCase() : n;
                  };
              return n.replace(p, function (e, n) {
                return (
                  n ||
                  (function (e) {
                    switch (e) {
                      case 'YY':
                        return String(t.$y).slice(-2);
                      case 'YYYY':
                        return w.s(t.$y, 4, '0');
                      case 'M':
                        return r + 1;
                      case 'MM':
                        return w.s(r + 1, 2, '0');
                      case 'MMM':
                        return d(a.monthsShort, r, u, 3);
                      case 'MMMM':
                        return d(u, r);
                      case 'D':
                        return t.$D;
                      case 'DD':
                        return w.s(t.$D, 2, '0');
                      case 'd':
                        return String(t.$W);
                      case 'dd':
                        return d(a.weekdaysMin, t.$W, s, 2);
                      case 'ddd':
                        return d(a.weekdaysShort, t.$W, s, 3);
                      case 'dddd':
                        return s[t.$W];
                      case 'H':
                        return String(o);
                      case 'HH':
                        return w.s(o, 2, '0');
                      case 'h':
                        return m(1);
                      case 'hh':
                        return m(2);
                      case 'a':
                        return f(o, i, !0);
                      case 'A':
                        return f(o, i, !1);
                      case 'm':
                        return String(i);
                      case 'mm':
                        return w.s(i, 2, '0');
                      case 's':
                        return String(t.$s);
                      case 'ss':
                        return w.s(t.$s, 2, '0');
                      case 'SSS':
                        return w.s(t.$ms, 3, '0');
                      case 'Z':
                        return l;
                    }
                    return null;
                  })(e) ||
                  l.replace(':', '')
                );
              });
            }),
            (g.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (g.diff = function (n, m, v) {
              var f,
                p = this,
                h = w.p(m),
                g = O(n),
                y = (g.utcOffset() - this.utcOffset()) * t,
                b = this - g,
                D = function () {
                  return w.m(p, g);
                };
              switch (h) {
                case d:
                  f = D() / 12;
                  break;
                case u:
                  f = D();
                  break;
                case c:
                  f = D() / 3;
                  break;
                case s:
                  f = (b - y) / 6048e5;
                  break;
                case r:
                  f = (b - y) / 864e5;
                  break;
                case i:
                  f = b / a;
                  break;
                case o:
                  f = b / t;
                  break;
                case l:
                  f = b / e;
                  break;
                default:
                  f = b;
              }
              return v ? f : w.a(f);
            }),
            (g.daysInMonth = function () {
              return this.endOf(u).$D;
            }),
            (g.$locale = function () {
              return D[this.$L];
            }),
            (g.locale = function (e, t) {
              if (!e) return this.$L;
              var a = this.clone(),
                n = _(e, t, !0);
              return (n && (a.$L = n), a);
            }),
            (g.clone = function () {
              return w.w(this.$d, this);
            }),
            (g.toDate = function () {
              return new Date(this.valueOf());
            }),
            (g.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (g.toISOString = function () {
              return this.$d.toISOString();
            }),
            (g.toString = function () {
              return this.$d.toUTCString();
            }),
            h
          );
        })(),
        x = S.prototype;
      return (
        (O.prototype = x),
        [
          ['$ms', n],
          ['$s', l],
          ['$m', o],
          ['$H', i],
          ['$W', r],
          ['$M', u],
          ['$y', d],
          ['$D', m],
        ].forEach(function (e) {
          x[e[1]] = function (t) {
            return this.$g(t, e[0], e[1]);
          };
        }),
        (O.extend = function (e, t) {
          return (e.$i || (e(t, S, O), (e.$i = !0)), O);
        }),
        (O.locale = _),
        (O.isDayjs = N),
        (O.unix = function (e) {
          return O(1e3 * e);
        }),
        (O.en = D[b]),
        (O.Ls = D),
        (O.p = {}),
        O
      );
    })())),
  Ba.exports),
);
function Ra(e) {
  const t = Ua(e).day();
  return 0 === t || 6 === t;
}
const za = [
    {
      name: '标准',
      code: 'standard',
      visible: () => !0,
      needLink: !1,
      book: { earlyDaysNum: 0, description: '临近出游日可能提前售罄，建议提前两天预定' },
    },
    { name: '早鸟', code: 'earlyBird', visible: () => !0, needLink: !0, book: { earlyDaysNum: 9, description: '需提前 10 天预定' } },
    {
      name: '超级早鸟',
      code: 'superEarlyBird',
      visible: (e) => {
        const t = Ua(e);
        return 1 == t.month() && t.date() >= 14 && t.date() <= 24;
      },
      needLink: !0,
      book: { earlyDaysNum: 19, description: '需提前 20 天预定' },
    },
  ],
  Wa = [
    {
      name: '一大一小',
      action: (e) => {
        const t = Ua(e);
        return 0 == t.month() || t.date() <= 4
          ? [
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 1 },
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
            ]
          : [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT_AND_ONE_CHILD', num: 1 }];
      },
    },
    {
      name: '2大1小',
      action: (e) => {
        if (0 == Ua(e).month()) {
          const t = [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 }];
          return (
            Ra(e)
              ? t.push({ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 })
              : t.push({ category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT', num: 1 }),
            t
          );
        }
        return [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD', num: 1 }];
      },
    },
    {
      name: '2大2小',
      action: (e) => {
        const t = Ua(e);
        return 0 == t.month()
          ? [
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT', num: 1 },
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 2 },
            ]
          : t.date() > 4
            ? [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT_AND_ONE_CHILD', num: 2 }]
            : [
                { category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD', num: 1 },
                { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
              ];
      },
    },
    {
      name: '2大',
      action: (e) =>
        0 != Ua(e).month() || Ra(e)
          ? [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 }]
          : [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT', num: 1 }],
    },
  ],
  Fa = [
    { label: '👨 成人', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 0, simpleText: '大', fullText: '一日-成人' },
    { label: '👶 儿童', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 0, simpleText: '小', fullText: '一日-儿童' },
    { label: '👴 老人', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR', num: 0, simpleText: '老', fullText: '一日-老人' },
    {
      label: '👨&👨 两大',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT',
      num: 0,
      simpleText: '两大',
      fullText: '一日-两大',
      visible: (e) => 0 == Ua(e).month(),
      insteadSolution: { details: [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 }] },
    },
    {
      label: '👨&👶 两大一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD',
      num: 0,
      simpleText: '两大一小',
      fullText: '一日-两大一小',
      visible: (e) => 0 != Ua(e).month(),
      insteadSolution: {
        details: [
          { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 },
          { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
        ],
      },
    },
    {
      label: '👨&👶 一大一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT_AND_ONE_CHILD',
      num: 0,
      simpleText: '一大一小',
      fullText: '一日-一大一小',
      visible: () => !0,
      insteadSolution: {
        details: [
          { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 1 },
          { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
        ],
      },
    },
    {
      label: '👴&👶 一老一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR_AND_ONE_CHILD',
      num: 0,
      simpleText: '一老一小',
      fullText: '一日-一老一小',
      visible: () => !1,
      insteadSolution: {
        details: [
          { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR', num: 1 },
          { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
        ],
      },
    },
  ],
  ja = (e, t) => 5 * Math.ceil(Number.parseFloat(e) / 5) + Number.parseFloat(t + ''),
  Xa = (e, t, a) => `${e[a].num ? e[a].num + t.find((e) => e.category === a).simpleText : ''}`,
  Za = [
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { useDate: t, personCounts: a, counts: n, summaries: l, diffAmount: o } = e,
          i = Ua(t).diff(new Date(), 'd');
        let r = `${t} ${Ua(t).format('dddd')} ${Xa(a, n, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${Xa(a, n, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${Xa(a, n, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
        const s = { price: 99999999, description: '' };
        for (const u in l) {
          const e = l[u],
            t = ja(e.amount, o[u]);
          e.book.earlyDaysNum <= i && s.price > t && ((s.price = t), (s.description = e.book.description));
        }
        return ((r += `\n报价：${s.price}\n${s.description}`), r);
      },
      orderPriority: 10,
    },
    {
      enabled: !1,
      condition: (e) => {
        const { useDate: t, personCounts: a } = e;
        return (
          (Ra(t) && a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 1) ||
          (!Ra(t) && a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 2)
        );
      },
      action: () => '\n\n不升级年卡，您可以自己买官方的半价一小\n工作日 150，节假日 175',
      orderPriority: 100,
    },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  Ka = { class: 'form-group' },
  qa = { class: 'form-group' },
  Ja = { class: 'counter-label' },
  Qa = { class: 'counter-controls' },
  en = ['onClick'],
  tn = { class: 'counter-value' },
  an = ['onClick'],
  nn = { class: 'form-group' },
  ln = ['onClick'],
  on = ['onClick'],
  rn = { class: 'summary-item' },
  sn = { class: 'summary-value' },
  un = { class: 'summary-item' },
  cn = { class: 'summary-value' },
  dn = { class: 'summary-item' },
  mn = { class: 'summary-value' },
  vn = { class: 'summary-item' },
  fn = { class: 'summary-value' },
  pn = { class: 'summary-item' },
  hn = { class: 'summary-value' },
  gn = { class: 'summary-item' },
  yn = { class: 'summary-value' },
  bn = Ve(
    me({
      __name: 'calculator',
      setup(e) {
        const t = Se('useDate', ve('')),
          a = ve([]),
          o = () => {
            a.value.forEach((e) => {
              e.num = 0;
            });
            for (const e in r.value) r.value[e] = 0;
          },
          i = ve({ costPlatform: 0.02 }),
          r = ve({}),
          s = ve({}),
          u = () => {
            ((a.value = Fa.filter((e) => void 0 === e.visible || e.visible(t.value))),
              (s.value = {}),
              (r.value = {}),
              za
                .filter((e) => e.visible(t.value))
                .forEach((e) => {
                  ((s.value[e.code] = {
                    name: e.name,
                    needLink: e.needLink,
                    amount: '0',
                    originalAmount: '0',
                    costPlatform: '0',
                    commission: '0',
                    totalCost: '0',
                    profit: '0',
                    book: e.book,
                  }),
                    (r.value[e.code] = 0));
                }));
          };
        (Ne([t], () => {
          (u(), f());
        }),
          Ne(
            [a, i],
            () => {
              f();
            },
            { deep: !0 },
          ));
        const c = (e, t) => {
            (0 === e.num && t < 0) || (e.num += t);
          },
          m = (e, t) => {
            (0 === r.value[e] && t < 0) || (r.value[e] = (100 * r.value[e] + 100 * t) / 100);
          };
        const v = fe(() => {
          const e = {
            SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT: {
              num: 0,
              reference: {
                earlyBird: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT',
                superEarlyBird: 'SHANGHAI_LEGOLAND_SUPER_EARLY_ONE_DAY_ONE_ADULT',
              },
            },
            SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD: {
              num: 0,
              reference: {
                earlyBird: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD',
                superEarlyBird: 'SHANGHAI_LEGOLAND_SUPER_EARLY_ONE_DAY_ONE_CHILD',
              },
            },
            SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR: {
              num: 0,
              reference: {
                earlyBird: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR',
                superEarlyBird: 'SHANGHAI_LEGOLAND_SUPER_EARLY_ONE_DAY_ONE_SENIOR',
              },
            },
          };
          return (
            a.value.forEach((t) => {
              if (t.insteadSolution) {
                t.insteadSolution.details.forEach((a) => {
                  e[a.category].num += t.num * a.num;
                });
              } else e[t.category].num += t.num;
            }),
            e
          );
        });
        function f() {
          const e = (function () {
            const e = l.data.filter((e) => e.useDate === t.value);
            if (0 == e.length) return void d('Product data not found');
            const a = new Map();
            for (const t of e) a.set(t.attractionProductCategoryFullCode, t);
            return a;
          })();
          if (e)
            for (const t in s.value) {
              let n = 0,
                l = 0,
                o = 0,
                u = 0;
              const c = 0,
                d = s.value[t];
              if (d.needLink)
                for (const a in v.value) {
                  const o = v.value[a],
                    i = e.get(o.reference[t]);
                  ((n += o.num * i.preferSaleAmount), (l += o.num * i.originalPrice));
                }
              else
                for (const t of a.value) {
                  const a = e.get(t.category);
                  ((n += t.num * a.preferSaleAmount), (l += t.num * a.originalPrice));
                }
              ((n += Number.parseFloat(r.value[t] + '')), (u = n * i.value.costPlatform), (o = c + u));
              const m = n - o - c;
              ((d.amount = n.toFixed(2)),
                (d.originalAmount = l.toFixed(2)),
                (d.costPlatform = u.toFixed(2)),
                (d.commission = c.toFixed(2)),
                (d.totalCost = o.toFixed(2)),
                (d.profit = m.toFixed(2)));
            }
        }
        const p = () => {
            let e = '';
            const n = { useDate: t.value, personCounts: v.value, counts: a.value, summaries: s.value, diffAmount: r.value };
            for (const t of Za) t.condition(n) && (e += t.action(n));
            navigator.clipboard.writeText(e);
          },
          h = [
            { name: '一大一小' },
            { name: '2大1小', visible: !1 },
            { name: '2大2小', visible: !1 },
            { name: '2大' },
            { name: '清空', func: o },
            { name: '均价', func: () => {} },
            { name: '出票信息', func: p },
          ];
        return (
          Oe(() => {
            (u(), f());
          }),
          (e, l) => {
            const i = n,
              u = fa;
            return (
              Ge(),
              He('div', null, [
                Te('div', Ka, [
                  l[0] || (l[0] = Te('label', null, '快捷操作', -1)),
                  (Ge(),
                  He(
                    Ce,
                    null,
                    $e(h, (e) =>
                      he(
                        i,
                        {
                          size: 'small',
                          type: 'primary',
                          onClick: (n) =>
                            e.func
                              ? e.func()
                              : ((e) => {
                                  o();
                                  const n = Wa.find((t) => t.name === e);
                                  (a.value.forEach((e) => {
                                    n?.action(t.value).forEach((t) => {
                                      t.category === e.category && (e.num = t.num);
                                    });
                                  }),
                                    _e(() => {
                                      p();
                                    }));
                                })(e.name),
                          key: e.name,
                        },
                        { default: Ye(() => [Le(Pe(e.name), 1)]), _: 2 },
                        1032,
                        ['onClick'],
                      ),
                    ),
                    64,
                  )),
                ]),
                Te('div', qa, [
                  l[1] || (l[1] = Te('label', null, '选择人数', -1)),
                  (Ge(!0),
                  He(
                    Ce,
                    null,
                    $e(
                      Me(a),
                      (e) => (
                        Ge(),
                        He('div', { class: 'counter-group', key: e.category }, [
                          Te('span', Ja, Pe(e.label), 1),
                          Te('div', Qa, [
                            Te('button', { class: 'counter-btn', onClick: (t) => c(e, -1) }, '−', 8, en),
                            Te('span', tn, Pe(e.num), 1),
                            Te('button', { class: 'counter-btn', onClick: (t) => c(e, 1) }, '+', 8, an),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                Te('div', nn, [
                  l[2] || (l[2] = Te('label', null, '差价', -1)),
                  (Ge(!0),
                  He(
                    Ce,
                    null,
                    $e(
                      Me(s),
                      (e, t) => (
                        Ge(),
                        He('div', { class: 'counter-group', key: t }, [
                          Te('button', { class: 'counter-btn', onClick: (e) => m(t, -5) }, '−', 8, ln),
                          he(
                            u,
                            { modelValue: Me(r)[t], 'onUpdate:modelValue': (e) => (Me(r)[t] = e), type: 'number', label: e.name },
                            null,
                            8,
                            ['modelValue', 'onUpdate:modelValue', 'label'],
                          ),
                          Te('button', { class: 'counter-btn', onClick: (e) => m(t, 5) }, '+', 8, on),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                (Ge(!0),
                He(
                  Ce,
                  null,
                  $e(
                    Me(s),
                    (e, t) => (
                      Ge(),
                      He('div', { class: 'summary', key: t }, [
                        Te('h2', null, '💰 费用汇总-' + Pe(e.name), 1),
                        Te('div', rn, [
                          l[4] || (l[4] = Te('span', { class: 'summary-label' }, '总金额', -1)),
                          Te('span', sn, [l[3] || (l[3] = Le(' ¥', -1)), Te('span', null, Pe(e.amount), 1)]),
                        ]),
                        Te('div', un, [
                          l[6] || (l[6] = Te('span', { class: 'summary-label' }, '官方票价', -1)),
                          Te('span', cn, [l[5] || (l[5] = Le(' ¥', -1)), Te('span', null, Pe(e.originalAmount), 1)]),
                        ]),
                        Te('div', dn, [
                          l[8] || (l[8] = Te('span', { class: 'summary-label' }, '总佣金', -1)),
                          Te('span', mn, [l[7] || (l[7] = Le(' ¥', -1)), Te('span', null, Pe(e.commission), 1)]),
                        ]),
                        Te('div', vn, [
                          l[10] || (l[10] = Te('span', { class: 'summary-label' }, '总成本-平台', -1)),
                          Te('span', fn, [l[9] || (l[9] = Le(' ¥', -1)), Te('span', null, Pe(e.costPlatform), 1)]),
                        ]),
                        Te('div', pn, [
                          l[12] || (l[12] = Te('span', { class: 'summary-label' }, '总成本', -1)),
                          Te('span', hn, [l[11] || (l[11] = Le(' ¥', -1)), Te('span', null, Pe(e.totalCost), 1)]),
                        ]),
                        Te('div', gn, [
                          l[14] || (l[14] = Te('span', { class: 'summary-label' }, '总利润', -1)),
                          Te('span', yn, [l[13] || (l[13] = Le(' ¥', -1)), Te('span', null, Pe(e.profit), 1)]),
                        ]),
                      ])
                    ),
                  ),
                  128,
                )),
              ])
            );
          }
        );
      },
    }),
    [['__scopeId', 'data-v-9e093a3f']],
  ),
  Dn = [
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { useDate: t, remainPersons: a } = e,
          n = [];
        return (
          a.forEach((e) => {
            n.push(`上海乐高乐园 ${Ua(t).format('YYYY-MM-DD')} ${e.ticketType} 金额\n${e.idType} ${e.name} ${e.id}`);
          }),
          n
        );
      },
      orderPriority: 10,
    },
    { enabled: !1, condition: () => !0, action: () => [], orderPriority: 50 },
    { enabled: !1, condition: () => !1, action: () => [], orderPriority: 60 },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  An = { class: 'content' },
  Nn = { class: 'input-group' },
  _n = { class: 'input-wrapper' },
  On = { class: 'input-group' },
  wn = me({
    __name: 'identifyLint',
    setup(e) {
      const t = Se('useDate', ve('')),
        a = ve(''),
        l = ve([]),
        o = ve(''),
        i = ve(''),
        r = ve(!1),
        s = ve(!1),
        u = ve([]),
        d = ve([]),
        m = ve(),
        v = {
          CHINA_ID: { fullName: '中国居民身份证', shortName: '身份证' },
          PASSPORT: { fullName: '护照', shortName: '护照' },
          HK_MACAU_PASS: { fullName: '港澳通行证（回乡证）', shortName: '回乡证' },
          TAIWAN_PASS: { fullName: '台湾通行证', shortName: '台湾通行证' },
          FPRID: { fullName: '外国人永久居留身份证', shortName: '永居' },
          UNKNOWN: { fullName: '未知类型', shortName: '未知' },
        },
        f = {
          ADULT: { fullName: '成人', shortName: '成人' },
          CHILD: { fullName: '儿童', shortName: '儿童' },
          SENIOR: { fullName: '老人', shortName: '老人' },
          NOT: { fullName: '免票', shortName: '免票' },
          UNKNOWN: { fullName: '未知', shortName: '未知' },
        },
        p = [],
        h = [];
      for (const n in v) p.push({ text: v[n].fullName, value: v[n].shortName });
      for (const n in f) h.push({ text: f[n].fullName, value: f[n].shortName });
      ((u.value = [p[0].value]), (d.value = [h[0].value]));
      const g = (e) => {
          if (18 !== e.length) return null;
          return { birthday: `${e.slice(6, 4)}-${e.slice(10, 2)}-${e.slice(12, 2)}`, ...y(e.slice(6, 14)) };
        },
        y = (e) => {
          const a = Ua(t.value).diff(e, 'y');
          return a < 2
            ? { ticketType: '免票', orderPriority: 0 }
            : a <= 12
              ? { ticketType: '儿童', orderPriority: 2 }
              : a < 60
                ? { ticketType: '成人', orderPriority: 1 }
                : { ticketType: '老人', orderPriority: 3 };
        },
        b = (e) => {
          if (!e) return { type: v.UNKNOWN.shortName, valid: !1, message: '输入不能为空' };
          const t = e.trim();
          if (/^\d{15}$|^\d{17}[\dXx]$/.test(t)) {
            const e = ((e) => {
              if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(e)) return !1;
              const t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
              let a = 0;
              for (let n = 0; n < 17; n++) a += Number.parseInt(e[n]) * t[n];
              return ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'][a % 11] === e[17].toUpperCase();
            })(t);
            return { type: v.CHINA_ID.shortName, valid: e, message: e ? '有效的身份证号码' : '身份证号码校验失败', details: g(t) };
          }
          return /^[CHM]\d{8,10}$/.test(t)
            ? { type: v.HK_MACAU_PASS.shortName }
            : ((e) => /^\d{8,10}$/.test(e))(t)
              ? { type: v.TAIWAN_PASS.shortName, valid: !0, message: '台湾通行证' }
              : ((e) => /^[EG]\d{8}$/.test(e) || /^[A-Z]{1,2}\d{6,9}$/.test(e))(t)
                ? { type: v.PASSPORT.shortName, valid: !0, message: '护照号码' }
                : { type: v.UNKNOWN.shortName, valid: !1, message: '无法识别的输入类型' };
        },
        D = () => {
          (l.value.forEach((e) => {
            const t = b(e.id);
            ((e.idType = t.type),
              (e.ticketType = t.details ? t.details.ticketType : '未知'),
              !0 === t.valid ? (e.idValid = '有效') : !1 === t.valid ? (e.idValid = '无效') : (e.idValid = '未知'),
              (e.orderPriority = t.details ? t.details.orderPriority : 0));
          }),
            l.value.sort((e, t) => e.orderPriority - t.orderPriority));
          let e = Object.groupBy(l.value, ({ ticketType: e }) => e);
          ((o.value = Object.keys(e)
            .map((t) => `${t} ${e[t].length}`)
            .join('，')),
            (e = Object.groupBy(l.value, ({ idValid: e }) => e)),
            (i.value = Object.keys(e)
              .map((t) => `${t} ${e[t].length}`)
              .join('，')));
        },
        A = () => {
          let e = a.value;
          [',', '，'].forEach((t) => {
            e = e.replaceAll(t, ' ');
          });
          const t = e
            .split('\n')
            .map((e) => e.trim())
            .filter((e) => '' !== e);
          l.value = t.map((e) => {
            const t = e
              .split(' ')
              .map((e) => e.trim())
              .filter((e) => '' !== e);
            return { name: t[0], id: t[1], orderPriority: 1 };
          });
        },
        N = (e) => {
          if ('number' == typeof e) {
            const t = l.value[e],
              a = t.name;
            ((t.name = t.id), (t.id = a));
          } else
            l.value.forEach((e) => {
              const t = e.name;
              ((e.name = e.id), (e.id = t));
            });
        },
        _ = ({ selectedValues: e }) => {
          ((m.value.idType = e[0]), w());
        },
        O = ({ selectedValues: e }) => {
          ((m.value.ticketType = e[0]), S());
        },
        w = () => {
          ((r.value = !1), (m.value = {}));
        },
        S = () => {
          ((s.value = !1), (m.value = {}));
        },
        x = () => {
          let e = [];
          const a = { useDate: t.value, remainPersons: Array.from(l.value) };
          for (const t of Dn) t.condition(a) && (e = e.concat(t.action(a)));
          navigator.clipboard.writeText(e.join('\n'));
        };
      return (e, t) => {
        const v = fa,
          f = n,
          g = ea,
          y = c;
        return (
          Ge(),
          He('div', An, [
            Te('div', Nn, [
              Te('div', _n, [
                he(
                  v,
                  {
                    type: 'textarea',
                    modelValue: Me(a),
                    'onUpdate:modelValue': t[0] || (t[0] = (e) => (Ue(a) ? (a.value = e) : null)),
                    rows: '10',
                    onKeyup: Be(D, ['enter']),
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                Te('div', null, '票种统计：' + Pe(Me(o)), 1),
                Te('div', null, 'ID 统计：' + Pe(Me(i)), 1),
                he(
                  f,
                  { onClick: A, type: 'primary', size: 'small' },
                  { default: Ye(() => [...(t[6] || (t[6] = [Le('分割', -1)]))]), _: 1 },
                ),
                he(
                  f,
                  { onClick: D, type: 'primary', size: 'small' },
                  { default: Ye(() => [...(t[7] || (t[7] = [Le('自动识别', -1)]))]), _: 1 },
                ),
                he(
                  f,
                  { onClick: x, type: 'primary', size: 'small' },
                  { default: Ye(() => [...(t[8] || (t[8] = [Le('复制', -1)]))]), _: 1 },
                ),
                he(
                  f,
                  { onClick: N, type: 'primary', size: 'small' },
                  { default: Ye(() => [...(t[9] || (t[9] = [Le('互换', -1)]))]), _: 1 },
                ),
                he(
                  f,
                  {
                    onClick:
                      t[1] ||
                      (t[1] = (e) => {
                        ((a.value = ''), (l.value = []), (o.value = ''), (i.value = ''));
                      }),
                    type: 'primary',
                    size: 'small',
                  },
                  { default: Ye(() => [...(t[10] || (t[10] = [Le(' 清空 ', -1)]))]), _: 1 },
                ),
              ]),
            ]),
            Te('div', On, [
              (Ge(!0),
              He(
                Ce,
                null,
                $e(
                  Me(l),
                  (e, a) => (
                    Ge(),
                    He('div', { key: e.name }, [
                      he(v, { modelValue: e.name, 'onUpdate:modelValue': (t) => (e.name = t), label: '姓名', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      he(v, { modelValue: e.id, 'onUpdate:modelValue': (t) => (e.id = t), label: 'ID', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      he(
                        v,
                        {
                          modelValue: e.idType,
                          'onUpdate:modelValue': (t) => (e.idType = t),
                          'is-link': '',
                          readonly: '',
                          label: '类型',
                          onClick: (t) => {
                            ((r.value = !0), (m.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      he(v, { modelValue: e.idValid, 'onUpdate:modelValue': (t) => (e.idValid = t), label: 'ID 状态' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      he(
                        v,
                        {
                          modelValue: e.ticketType,
                          'onUpdate:modelValue': (t) => (e.ticketType = t),
                          'is-link': '',
                          readonly: '',
                          label: '票种',
                          onClick: (t) => {
                            ((s.value = !0), (m.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      he(
                        f,
                        { onClick: (e) => N(a), type: 'primary', size: 'small' },
                        { default: Ye(() => [...(t[11] || (t[11] = [Le('互换', -1)]))]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            he(
              y,
              { show: Me(r), 'onUpdate:show': t[3] || (t[3] = (e) => (Ue(r) ? (r.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ye(() => [
                  he(
                    g,
                    {
                      columns: p,
                      modelValue: Me(u),
                      'onUpdate:modelValue': t[2] || (t[2] = (e) => (Ue(u) ? (u.value = e) : null)),
                      onCancel: w,
                      onConfirm: _,
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                ]),
                _: 1,
              },
              8,
              ['show'],
            ),
            he(
              y,
              { show: Me(s), 'onUpdate:show': t[5] || (t[5] = (e) => (Ue(s) ? (s.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ye(() => [
                  he(
                    g,
                    {
                      columns: h,
                      modelValue: Me(d),
                      'onUpdate:modelValue': t[4] || (t[4] = (e) => (Ue(d) ? (d.value = e) : null)),
                      onCancel: S,
                      onConfirm: O,
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                ]),
                _: 1,
              },
              8,
              ['show'],
            ),
          ])
        );
      };
    },
  }),
  Sn = [
    { simpleText: '询价链接', fullText: '询价链接，具体以日期和人数为准' },
    {
      simpleText: '票务说明',
      fullText: '非团票，不用集合，不用二次预约，不用满人成团\n支持补差升级年卡\n刷身份证或人工通道核对无限次入园\n最终报价，无需补差',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    { simpleText: '半价儿童（简）', fullText: '官方小程序或 APP 领券买', attraction: 'SHANGHAI_LEGOLAND' },
    {
      simpleText: '半价儿童',
      fullText: '#小程序://上海乐高乐园度假区/QZCCh3svOIjR2Vy\n\n复制到地球，发送给任意人后打开领券及下方链接直接购买',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    {
      simpleText: '入园',
      fullText:
        '上海乐高乐园入园方式\n1. 刷身份证\n2. 人工通道核对有效证件（可电子版）\n3. APP 【游园-行程】录入人脸，刷人脸（限身份证）\n任选一种，都可以',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    { simpleText: '下月日历价', fullText: '下个月的官方日历价还没出哈，最晚要等到 21 号左右才出', attraction: 'SHANGHAI_LEGOLAND' },
    {
      simpleText: '乐捷通',
      fullText: '乐捷通大小同价\n无限次原价 588，成交价 559\n无限次原价 788，成交价 750\n无限次原价 888，成交价 844',
      attraction: 'SHANGHAI_LEGOLAND',
      visible: !1,
    },
    {
      simpleText: '年卡',
      fullText: '年卡大小同价\n银卡原价 699，成交价 665\n金卡原价 1399，成交价 1340',
      attraction: 'SHANGHAI_LEGOLAND',
      visible: !1,
    },
    { simpleText: '已售罄', fullText: '官方已售罄，无法出票，只能订其它日期' },
    { simpleText: '录入信息', fullText: '您先在上海乐高乐园小程序【我的-常用旅客】录入好所有人的信息', attraction: 'SHANGHAI_LEGOLAND' },
    {
      simpleText: '核对信息',
      fullText:
        '请核对信息是否有误，无误请点击确认，系统才能发货\n确认后发一下所有出游人（含儿童）姓名+身份证号（护照号等，非身份证需标明儿童、成人）',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    {
      simpleText: '发货',
      fullText:
        '已出票，刷身份证入园\n未带或无身份证，可刷脸或持户口本等有效证件（可电子版）走人工通道\n有问题请及时提出，看到会回复\n\n以下为 APP 绑定流程（可选）\n下载上海乐高乐园 APP，点击我的-立即绑定-查询第三方渠道订单-第三方渠道\n\n第一行是证件号，第三行是订单号，绑定需先输入订单号，再输入证件号确认绑定\n部分订单姓名是拼音，无影响，已和官方客服确认\n绑定后，可在【游园-行程】录入人脸，刷脸入园（限身份证）\n入园后可在【游园-园内服务】线上预约创意工坊\n入园当天，可在【游园-行程】补差升级年卡',
      comment: '（可接 95 折升金卡， 95 折无限乐捷通）',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    {
      simpleText: '营业时间',
      fullText: '上海乐高乐园营业时间\n工作日 10:00-18:00（以实际为准）\n节假日 9:00-19:00（以实际为准）',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    { simpleText: '加 V', fullText: 'ahui_2005888，您加我吧，一般都在，没回弹我语音就行' },
    {
      simpleText: '外包',
      fullText:
        '【闲鱼】https://m.tb.cn/h.7gH9xXN?tk=CkwufBGDuu5 CZ009 「我在闲鱼发布了【上海迪士尼门票 一大一小 两大一小 三成人】」\n#小程序://闲鱼/AcqeqAlVrkNMrUc\n点击链接直接打开\n\n您可以问问我朋友，他专做迪士尼的',
      attraction: 'SHANGHAI_DISNEY',
      visible: !0,
    },
    {
      simpleText: '外包',
      fullText:
        '【闲鱼】https://m.tb.cn/h.7fwcB1I?tk=KZ5yfyXCOng HU071 「我在闲鱼发布了【珠海长隆海洋王国2大1小】」\n点击链接直接打开\n\n您可以问问我朋友',
      attraction: 'CHIMELONG_OCEAN_KINGDOM',
      visible: !1,
    },
    { simpleText: '虚拟 ID', func: () => Date.now() + 'XXXXX' },
  ],
  xn = [
    { attractionName: '上海乐高乐园度假区', attractionCode: 'SHANGHAI_LEGOLAND', attractionSimpleName: '乐高', orderPriority: 200 },
    { attractionName: '珠海长隆海洋王国', attractionCode: 'CHIMELONG_OCEAN_KINGDOM', attractionSimpleName: '长隆海洋', orderPriority: 110 },
    { attractionName: '广州长隆野生动物世界', attractionCode: 'CHIMELONG_SAFARI', attractionSimpleName: '长隆野动', orderPriority: 110 },
    { attractionName: '上海迪士尼度假区', attractionCode: 'SHANGHAI_DISNEY', attractionSimpleName: '迪士尼', orderPriority: 100 },
    {
      attractionName: '北京环球度假区',
      attractionCode: 'BEIJING_UNIVERSAL',
      attractionSimpleName: '环球',
      orderPriority: 100,
      visible: !1,
    },
    { attractionName: '上海动物园', attractionCode: 'SHANGHAI_ZOO', attractionSimpleName: '上动', orderPriority: 100, visible: !1 },
  ],
  kn = me({
    __name: 'term',
    setup(e) {
      const t = ve(''),
        a = ve([]),
        l = xn.filter((e) => void 0 === e.visible || e.visible);
      (Ne([t], () => {
        a.value = Sn.filter((e) => void 0 === e.visible || e.visible).filter((e) => !e.attraction || e.attraction === t.value);
      }),
        Oe(() => {
          t.value = 'SHANGHAI_LEGOLAND';
        }));
      return (e, o) => {
        const i = n,
          r = Zt,
          s = Kt;
        return (
          Ge(),
          Re(
            s,
            { active: Me(t), 'onUpdate:active': o[0] || (o[0] = (e) => (Ue(t) ? (t.value = e) : null)) },
            {
              default: Ye(() => [
                (Ge(!0),
                He(
                  Ce,
                  null,
                  $e(
                    Me(l),
                    (e) => (
                      Ge(),
                      Re(
                        r,
                        { title: e.attractionSimpleName, name: e.attractionCode, key: e.attractionCode },
                        {
                          default: Ye(() => [
                            (Ge(!0),
                            He(
                              Ce,
                              null,
                              $e(
                                Me(a),
                                (e) => (
                                  Ge(),
                                  He('div', { key: e.fullText }, [
                                    Te('div', null, [Te('span', null, Pe(e.simpleText), 1)]),
                                    Te('div', null, [
                                      he(
                                        i,
                                        {
                                          onClick: (t) =>
                                            ((e) => {
                                              e.func
                                                ? navigator.clipboard.writeText(e.func())
                                                : navigator.clipboard.writeText(e.fullText || '');
                                            })(e),
                                        },
                                        { default: Ye(() => [...(o[1] || (o[1] = [Le('复制', -1)]))]), _: 1 },
                                        8,
                                        ['onClick'],
                                      ),
                                    ]),
                                  ])
                                ),
                              ),
                              128,
                            )),
                          ]),
                          _: 1,
                        },
                        8,
                        ['title', 'name'],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              _: 1,
            },
            8,
            ['active'],
          )
        );
      };
    },
  }),
  In = me({
    __name: 'tools',
    setup(e) {
      const t = ve(0),
        a = [
          { label: '成人', num: 0, avgRatio: 0.55, avgAmount: 0 },
          { label: '儿童', num: 0, avgRatio: 0.45, avgAmount: 0 },
          { label: '老人', num: 0, avgRatio: 0.45, avgAmount: 0 },
        ];
      return (e, l) => {
        const o = fa,
          i = n;
        return (
          Ge(),
          He('div', null, [
            he(o, { modelValue: Me(t), 'onUpdate:modelValue': l[0] || (l[0] = (e) => (Ue(t) ? (t.value = e) : null)) }, null, 8, [
              'modelValue',
            ]),
            (Ge(),
            He(
              Ce,
              null,
              $e(a, (e, t) =>
                he(o, { modelValue: e.num, 'onUpdate:modelValue': (t) => (e.num = t), key: t, label: e.label }, null, 8, [
                  'modelValue',
                  'onUpdate:modelValue',
                  'label',
                ]),
              ),
              64,
            )),
            (Ge(),
            He(
              Ce,
              null,
              $e(a, (e, t) => Te('div', { key: t }, Pe(e.label), 1)),
              64,
            )),
            he(i, null, { default: Ye(() => [...(l[1] || (l[1] = [Le('复制', -1)]))]), _: 1 }),
          ])
        );
      };
    },
  }),
  En = [
    { condition: () => !1, topInfo: '', bottomInfo: '', className: '' },
    { condition: () => !1, topInfo: '', bottomInfo: '', className: '' },
  ],
  Ln = [
    { condition: (e) => !1, topInfo: '初一', bottomInfo: '', className: '' },
    { condition: (e) => !1, topInfo: '初一', bottomInfo: '', className: '' },
  ]
    .concat([
      { condition: (e) => '2026-02-16' === e.format('YYYY-MM-DD'), topInfo: '除夕' },
      { condition: (e) => '2026-02-17' === e.format('YYYY-MM-DD'), topInfo: '初一' },
      { condition: (e) => '2026-02-18' === e.format('YYYY-MM-DD'), topInfo: '初二' },
      { condition: (e) => '2026-02-19' === e.format('YYYY-MM-DD'), topInfo: '初三' },
      { condition: (e) => '2026-02-20' === e.format('YYYY-MM-DD'), topInfo: '初四' },
      { condition: (e) => '2026-02-21' === e.format('YYYY-MM-DD'), topInfo: '初五' },
      { condition: (e) => '2026-02-22' === e.format('YYYY-MM-DD'), topInfo: '初六' },
      { condition: (e) => '2026-02-23' === e.format('YYYY-MM-DD'), topInfo: '初七' },
      { condition: (e) => '2026-02-24' === e.format('YYYY-MM-DD'), topInfo: '初八' },
      { condition: (e) => '2026-02-25' === e.format('YYYY-MM-DD'), topInfo: '初九' },
    ])
    .concat(En),
  Hn = { class: 'container' },
  Tn = { class: 'form-group' },
  Cn = Ve(
    me({
      __name: 'index',
      setup(e) {
        Ua.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = ve('calculator'),
          a = (e) => Ua(e).format('YYYY-MM-DD'),
          n = ve(a(new Date()));
        xe('useDate', n);
        const l = ve(!1),
          o = (e) => {
            ((l.value = !1), (n.value = a(e)));
          },
          i = (e) => {
            const t = Ua(e.date),
              a = Ln.find((e) => e.condition(t));
            return (void 0 !== a && ((e.topInfo = a?.topInfo), (e.bottomInfo = a?.bottomInfo), (e.className = a?.className)), e);
          };
        return (e, a) => {
          const r = la,
            s = Ya,
            u = Zt,
            c = Kt;
          return (
            Ge(),
            He('div', Hn, [
              a[3] || (a[3] = Te('h1', null, '🎫 票务计算器', -1)),
              Te('div', Tn, [
                he(r, { title: '选择日期', value: Me(n), onClick: a[0] || (a[0] = (e) => (l.value = !0)) }, null, 8, ['value']),
                he(
                  s,
                  { show: Me(l), 'onUpdate:show': a[1] || (a[1] = (e) => (Ue(l) ? (l.value = e) : null)), onConfirm: o, formatter: i },
                  null,
                  8,
                  ['show'],
                ),
              ]),
              he(
                c,
                { active: Me(t), 'onUpdate:active': a[2] || (a[2] = (e) => (Ue(t) ? (t.value = e) : null)) },
                {
                  default: Ye(() => [
                    he(u, { title: '票务', name: 'calculator', key: 'calculator' }, { default: Ye(() => [he(bn)]), _: 1 }),
                    he(u, { title: '证件', name: 'identifyLint', key: 'identifyLint' }, { default: Ye(() => [he(wn)]), _: 1 }),
                    he(u, { title: '工具', name: 'tools', key: 'tools' }, { default: Ye(() => [he(In)]), _: 1 }),
                    he(u, { title: '术语', name: 'term', key: 'term' }, { default: Ye(() => [he(kn)]), _: 1 }),
                  ]),
                  _: 1,
                },
                8,
                ['active'],
              ),
            ])
          );
        };
      },
    }),
    [['__scopeId', 'data-v-5943c3b2']],
  );
export { Cn as default };
