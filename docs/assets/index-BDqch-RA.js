/* empty css              */ import { r as e, a as t, u as a, B as l } from './index-C4Amn_uP.js';
import { p as n } from './data-Cn_ldlG0.js';
import { u as o, a as i, c as r, L as s, s as u, P as c, b as d } from './function-call-CB4TpdGR.js';
import {
  c as v,
  e as m,
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
  f as w,
  h as O,
  s as x,
  j as S,
  o as k,
  k as E,
  l as L,
  q as H,
  v as T,
  g as I,
  x as C,
  y as $,
  z as M,
  A as G,
  w as P,
  t as V,
  C as B,
  D as Y,
  E as R,
  F as U,
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
  U as le,
  V as ne,
  W as oe,
  X as ie,
  Y as re,
  Z as se,
  _ as ue,
  $ as ce,
  a0 as de,
} from './index-DhNq9S6k.js';
import {
  d as ve,
  r as me,
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
  f as we,
  M as Oe,
  N as xe,
  O as Se,
  i as ke,
  P as Ee,
  v as Le,
  D as He,
  c as Te,
  a as Ie,
  F as Ce,
  z as $e,
  u as Me,
  o as Ge,
  k as Pe,
  t as Ve,
  _ as Be,
  Q as Ye,
  x as Re,
  m as Ue,
} from './index-B8o9oFSa.js';
import { u as ze } from './use-height-DHsF9iVf.js';
const [We, Fe, je] = v('picker'),
  Xe = (e) => e.find((e) => !e.disabled) || e[0];
function Ze(e, t) {
  for (let a = (t = p(t, 0, e.length)); a < e.length; a++) if (!e[a].disabled) return a;
  for (let a = t - 1; a >= 0; a--) if (!e[a].disabled) return a;
  return 0;
}
const Ke = (e, t, a) => void 0 !== t && e.some((e) => e[a.value] === t);
function qe(e, t, a) {
  const l = e.findIndex((e) => e[a.value] === t);
  return e[Ze(e, l)];
}
const [Je, Qe] = v('picker-column'),
  et = Symbol(Je);
var tt = ve({
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
    let l, n, r, s, u;
    const c = me(),
      d = me(),
      v = me(0),
      m = me(0),
      f = o(),
      h = () => e.options.length,
      g = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
      y = (a) => {
        let n = Ze(e.options, a);
        const o = -n * e.optionHeight,
          i = () => {
            n > h() - 1 && (n = Ze(e.options, a));
            const l = e.options[n][e.fields.value];
            l !== e.value && t('change', l);
          };
        (l && o !== v.value ? (u = i) : i(), (v.value = o));
      },
      N = () => e.readonly || !e.options.length,
      _ = (t) => p(Math.round(-t / e.optionHeight), 0, h() - 1),
      w = fe(() => _(v.value)),
      O = () => {
        ((l = !1), (m.value = 0), u && (u(), (u = null)));
      },
      x = (e) => {
        if (!N()) {
          if ((f.start(e), l)) {
            const e = (function (e) {
              const { transform: t } = window.getComputedStyle(e),
                a = t.slice(7, t.length - 1).split(', ')[5];
              return Number(a);
            })(d.value);
            v.value = Math.min(0, e - g());
          }
          ((m.value = 0), (n = v.value), (r = Date.now()), (s = n), (u = null));
        }
      },
      S = () => {
        if (N()) return;
        const t = v.value - s,
          a = Date.now() - r;
        if (a < 300 && Math.abs(t) > 15)
          return void ((t, a) => {
            const l = Math.abs(t / a);
            t = v.value + (l / 0.003) * (t < 0 ? -1 : 1);
            const n = _(t);
            ((m.value = +e.swipeDuration), y(n));
          })(t, a);
        const n = _(v.value);
        ((m.value = 200),
          y(n),
          setTimeout(() => {
            l = !1;
          }, 0));
      },
      k = () => {
        const n = { height: `${e.optionHeight}px` };
        return e.options.map((o, i) => {
          const r = o[e.fields.text],
            { disabled: s } = o,
            c = o[e.fields.value],
            d = {
              role: 'button',
              style: n,
              tabindex: s ? -1 : 0,
              class: [Qe('item', { disabled: s, selected: c === e.value }), o.className],
              onClick: () =>
                ((a) => {
                  l || N() || ((u = null), (m.value = 200), y(a), t('clickOption', e.options[a]));
                })(i),
            },
            v = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: r };
          return he('li', d, [a.option ? a.option(o, i) : he('div', v, null)]);
        });
      };
    return (
      b(et),
      i({ stopMomentum: O }),
      pe(() => {
        const t = l ? Math.floor(-v.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          a = Ze(e.options, t),
          n = -a * e.optionHeight;
        (l && a < t && O(), (v.value = n));
      }),
      D(
        'touchmove',
        (a) => {
          if (N()) return;
          (f.move(a), f.isVertical() && ((l = !0), A(a, !0)));
          const o = p(n + f.deltaY.value, -h() * e.optionHeight, e.optionHeight),
            i = _(o);
          (i !== w.value && t('scrollInto', e.options[i]), (v.value = o));
          const u = Date.now();
          u - r > 300 && ((r = u), (s = o));
        },
        { target: c },
      ),
      () =>
        he('div', { ref: c, class: Qe(), onTouchstartPassive: x, onTouchend: S, onTouchcancel: S }, [
          he(
            'ul',
            {
              ref: d,
              style: {
                transform: `translate3d(0, ${v.value + g()}px, 0)`,
                transitionDuration: `${m.value}ms`,
                transitionProperty: m.value ? 'all' : 'none',
              },
              class: Qe('wrapper'),
              onTransitionend: O,
            },
            [k()],
          ),
        ])
    );
  },
});
const [at] = v('picker-toolbar'),
  lt = { title: String, cancelButtonText: String, confirmButtonText: String },
  nt = ['cancel', 'confirm', 'title', 'toolbar'],
  ot = Object.keys(lt);
var it = ve({
  name: at,
  props: lt,
  emits: ['confirm', 'cancel'],
  setup(e, { emit: t, slots: a }) {
    const l = () => t('cancel'),
      n = () => t('confirm'),
      o = () => {
        var t;
        const n = null != (t = e.cancelButtonText) ? t : je('cancel');
        if (a.cancel || n) return he('button', { type: 'button', class: [Fe('cancel'), N], onClick: l }, [a.cancel ? a.cancel() : n]);
      },
      i = () => {
        var t;
        const l = null != (t = e.confirmButtonText) ? t : je('confirm');
        if (a.confirm || l) return he('button', { type: 'button', class: [Fe('confirm'), N], onClick: n }, [a.confirm ? a.confirm() : l]);
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
function vt(e) {
  if (rt(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const l = e[a],
        n = st(l) ? ht(l) : vt(l);
      if (n) for (const e in n) t[e] = n[e];
    }
    return t;
  }
  if (st(e) || ut(e)) return e;
}
const mt = /;(?![^(]*\))/g,
  ft = /:([^]+)/,
  pt = /\/\*[^]*?\*\//g;
function ht(e) {
  const t = {};
  return (
    e
      .replace(pt, '')
      .split(mt)
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
      const l = gt(e[a]);
      l && (t += l + ' ');
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
  const e = me([]),
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
  if (!S || !window.IntersectionObserver) return;
  const a = new IntersectionObserver(
      (e) => {
        t(e[0].intersectionRatio > 0);
      },
      { root: document.body },
    ),
    l = () => {
      e.value && a.unobserve(e.value);
    };
  (be(l),
    De(l),
    k(() => {
      e.value && a.observe(e.value);
    }));
}
const [Nt, _t] = v('sticky');
const wt = P(
    ve({
      name: Nt,
      props: { zIndex: y, position: L('top'), container: Object, offsetTop: E(0), offsetBottom: E(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: a }) {
        const l = me(),
          n = H(l),
          o = Ae({ fixed: !1, width: 0, height: 0, transform: 0 }),
          i = me(!1),
          r = fe(() => T('top' === e.position ? e.offsetTop : e.offsetBottom)),
          s = fe(() => {
            if (i.value) return;
            const { fixed: e, height: t, width: a } = o;
            return e ? { width: `${a}px`, height: `${t}px` } : void 0;
          }),
          u = fe(() => {
            if (!o.fixed || i.value) return;
            const t = m(I(e.zIndex), { width: `${o.width}px`, height: `${o.height}px`, [e.position]: `${r.value}px` });
            return (o.transform && (t.transform = `translate3d(0, ${o.transform}px, 0)`), t);
          }),
          c = () => {
            if (!l.value || C(l)) return;
            const { container: a, position: n } = e,
              i = $(l),
              s = O(window);
            if (((o.width = i.width), (o.height = i.height), 'top' === n))
              if (a) {
                const e = $(a),
                  t = e.bottom - r.value - o.height;
                ((o.fixed = r.value > i.top && e.bottom > 0), (o.transform = t < 0 ? t : 0));
              } else o.fixed = r.value > i.top;
            else {
              const { clientHeight: e } = document.documentElement;
              if (a) {
                const t = $(a),
                  l = e - t.top - r.value - o.height;
                ((o.fixed = e - r.value < i.bottom && e > t.top), (o.transform = l < 0 ? -l : 0));
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
          D('scroll', c, { target: n, passive: !0 }),
          At(l, c),
          Ne([M, G], () => {
            l.value &&
              !C(l) &&
              o.fixed &&
              ((i.value = !0),
              _e(() => {
                const e = $(l);
                ((o.width = e.width), (o.height = e.height), (i.value = !1));
              }));
          }),
          () => {
            var e;
            return he('div', { ref: l, style: s.value }, [
              he('div', { class: _t({ fixed: o.fixed && !i.value }), style: u.value }, [null == (e = a.default) ? void 0 : e.call(a)]),
            ]);
          }
        );
      },
    }),
  ),
  [Ot, xt] = v('swipe'),
  St = {
    loop: V,
    width: y,
    height: y,
    vertical: Boolean,
    autoplay: E(0),
    duration: E(500),
    touchable: V,
    lazyRender: Boolean,
    initialSwipe: E(0),
    indicatorColor: String,
    showIndicators: V,
    stopPropagation: V,
  },
  kt = Symbol(Ot);
const Et = P(
    ve({
      name: Ot,
      props: St,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: a }) {
        const l = me(),
          n = me(),
          r = Ae({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let s = !1;
        const u = o(),
          { children: c, linkChildren: d } = B(kt),
          v = fe(() => c.length),
          m = fe(() => r[e.vertical ? 'height' : 'width']),
          f = fe(() => (e.vertical ? u.deltaY.value : u.deltaX.value)),
          h = fe(() => {
            if (r.rect) {
              return (e.vertical ? r.rect.height : r.rect.width) - m.value * v.value;
            }
            return 0;
          }),
          g = fe(() => (m.value ? Math.ceil(Math.abs(h.value) / m.value) : v.value)),
          y = fe(() => v.value * m.value),
          b = fe(() => (r.active + v.value) % v.value),
          N = fe(() => {
            const t = e.vertical ? 'vertical' : 'horizontal';
            return u.direction.value === t;
          }),
          _ = fe(() => {
            const t = {
              transitionDuration: `${r.swiping ? 0 : e.duration}ms`,
              transform: `translate${e.vertical ? 'Y' : 'X'}(${+r.offset.toFixed(2)}px)`,
            };
            if (m.value) {
              const a = e.vertical ? 'height' : 'width',
                l = e.vertical ? 'width' : 'height';
              ((t[a] = `${y.value}px`), (t[l] = e[l] ? `${e[l]}px` : ''));
            }
            return t;
          }),
          w = (t, a = 0) => {
            let l = t * m.value;
            e.loop || (l = Math.min(l, -h.value));
            let n = a - l;
            return (e.loop || (n = p(n, h.value, 0)), n);
          },
          O = ({ pace: a = 0, offset: l = 0, emitChange: n }) => {
            if (v.value <= 1) return;
            const { active: o } = r,
              i = ((t) => {
                const { active: a } = r;
                return t ? (e.loop ? p(a + t, -1, v.value) : p(a + t, 0, g.value)) : a;
              })(a),
              s = w(i, l);
            if (e.loop) {
              if (c[0] && s !== h.value) {
                const e = s < h.value;
                c[0].setOffset(e ? y.value : 0);
              }
              if (c[v.value - 1] && 0 !== s) {
                const e = s > 0;
                c[v.value - 1].setOffset(e ? -y.value : 0);
              }
            }
            ((r.active = i), (r.offset = s), n && i !== o && t('change', b.value));
          },
          x = () => {
            ((r.swiping = !0), r.active <= -1 ? O({ pace: v.value }) : r.active >= v.value && O({ pace: -v.value }));
          },
          S = () => {
            (x(),
              u.reset(),
              U(() => {
                ((r.swiping = !1), O({ pace: 1, emitChange: !0 }));
              }));
          };
        let k;
        const E = () => clearTimeout(k),
          L = () => {
            (E(),
              +e.autoplay > 0 &&
                v.value > 1 &&
                (k = setTimeout(() => {
                  (S(), L());
                }, +e.autoplay)));
          },
          H = (t = +e.initialSwipe) => {
            if (!l.value) return;
            const a = () => {
              var a, n;
              if (!C(l)) {
                const t = { width: l.value.offsetWidth, height: l.value.offsetHeight };
                ((r.rect = t), (r.width = +(null != (a = e.width) ? a : t.width)), (r.height = +(null != (n = e.height) ? n : t.height)));
              }
              (v.value && -1 === (t = Math.min(v.value - 1, t)) && (t = v.value - 1),
                (r.active = t),
                (r.swiping = !0),
                (r.offset = w(t)),
                c.forEach((e) => {
                  e.setOffset(0);
                }),
                L());
            };
            C(l) ? _e().then(a) : a();
          },
          T = () => H(r.active);
        let I;
        const $ = (t) => {
            !e.touchable || t.touches.length > 1 || (u.start(t), (s = !1), (I = Date.now()), E(), x());
          },
          P = () => {
            if (!e.touchable || !r.swiping) return;
            const a = Date.now() - I,
              l = f.value / a;
            if ((Math.abs(l) > 0.25 || Math.abs(f.value) > m.value / 2) && N.value) {
              const t = e.vertical ? u.offsetY.value : u.offsetX.value;
              let a = 0;
              ((a = e.loop ? (t > 0 ? (f.value > 0 ? -1 : 1) : 0) : -Math[f.value > 0 ? 'ceil' : 'floor'](f.value / m.value)),
                O({ pace: a, emitChange: !0 }));
            } else f.value && O({ pace: 0 });
            ((s = !1), (r.swiping = !1), t('dragEnd', { index: b.value }), L());
          },
          V = (t, a) => {
            const l = a === b.value,
              n = l ? { backgroundColor: e.indicatorColor } : void 0;
            return he('i', { style: n, class: xt('indicator', { active: l }) }, null);
          };
        return (
          i({
            prev: () => {
              (x(),
                u.reset(),
                U(() => {
                  ((r.swiping = !1), O({ pace: -1, emitChange: !0 }));
                }));
            },
            next: S,
            state: r,
            resize: T,
            swipeTo: (t, a = {}) => {
              (x(),
                u.reset(),
                U(() => {
                  let l;
                  ((l = e.loop && t === v.value ? (0 === r.active ? 0 : t) : t % v.value),
                    a.immediate
                      ? U(() => {
                          r.swiping = !1;
                        })
                      : (r.swiping = !1),
                    O({ pace: l - r.active, emitChange: !0 }));
                }));
            },
          }),
          d({ size: m, props: e, count: v, activeIndicator: b }),
          Ne(
            () => e.initialSwipe,
            (e) => H(+e),
          ),
          Ne(v, () => H(r.active)),
          Ne(() => e.autoplay, L),
          Ne([M, G, () => e.width, () => e.height], T),
          Ne(Y(), (e) => {
            'visible' === e ? L() : E();
          }),
          we(H),
          Oe(() => H(r.active)),
          R(() => H(r.active)),
          be(E),
          De(E),
          D(
            'touchmove',
            (a) => {
              if (e.touchable && r.swiping && (u.move(a), N.value)) {
                (!e.loop && ((0 === r.active && f.value > 0) || (r.active === v.value - 1 && f.value < 0))) ||
                  (A(a, e.stopPropagation), O({ offset: f.value }), s || (t('dragStart', { index: b.value }), (s = !0)));
              }
            },
            { target: n },
          ),
          () => {
            var t;
            return he('div', { ref: l, class: xt() }, [
              he(
                'div',
                {
                  ref: n,
                  style: _.value,
                  class: xt('track', { vertical: e.vertical }),
                  onTouchstartPassive: $,
                  onTouchend: P,
                  onTouchcancel: P,
                },
                [null == (t = a.default) ? void 0 : t.call(a)],
              ),
              a.indicator
                ? a.indicator({ active: b.value, total: v.value })
                : e.showIndicators && v.value > 1
                  ? he('div', { class: xt('indicators', { vertical: e.vertical }) }, [Array(v.value).fill('').map(V)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [Lt, Ht] = v('tabs');
var Tt = ve({
  name: Lt,
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
    const l = me(),
      n = (e) => t('change', e),
      o = () => {
        var t;
        const o = null == (t = a.default) ? void 0 : t.call(a);
        return e.animated || e.swipeable
          ? he(
              Et,
              {
                ref: l,
                loop: !1,
                class: Ht('track'),
                duration: 1e3 * +e.duration,
                touchable: e.swipeable,
                lazyRender: e.lazyRender,
                showIndicators: !1,
                onChange: n,
              },
              { default: () => [o] },
            )
          : o;
      },
      r = (t) => {
        const a = l.value;
        a && a.state.active !== t && a.swipeTo(t, { immediate: !e.inited });
      };
    return (
      Ne(() => e.currentIndex, r),
      we(() => {
        r(e.currentIndex);
      }),
      i({ swipeRef: l }),
      () => he('div', { class: Ht('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [It, Ct] = v('tabs'),
  $t = {
    type: L('line'),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: E(0),
    duration: E(0.3),
    animated: Boolean,
    ellipsis: V,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: E(0),
    background: String,
    lazyRender: V,
    showHeader: V,
    lineWidth: y,
    lineHeight: y,
    beforeChange: Function,
    swipeThreshold: E(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Mt = Symbol(It);
var Gt = ve({
  name: It,
  props: $t,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: a, slots: l }) {
    let n, o, s, u, c;
    const d = me(),
      v = me(),
      m = me(),
      p = me(),
      h = bt(),
      g = H(d),
      [y, b] = Dt(),
      { children: A, linkChildren: N } = B(Mt),
      S = Ae({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      E = fe(() => A.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      L = fe(() => ({ borderColor: t.color, background: t.background })),
      I = (e, t) => {
        var a;
        return null != (a = e.name) ? a : t;
      },
      G = fe(() => {
        const e = A[S.currentIndex];
        if (e) return I(e, S.currentIndex);
      }),
      P = fe(() => T(t.offsetTop)),
      V = fe(() => (t.sticky ? P.value + n : 0)),
      Y = (e) => {
        const a = v.value,
          l = y.value;
        if (!(E.value && a && l && l[S.currentIndex])) return;
        const n = l[S.currentIndex].$el,
          o = n.offsetLeft - (a.offsetWidth - n.offsetWidth) / 2;
        (u && u(),
          (u = (function (e, t, a) {
            let l,
              n = 0;
            const o = e.scrollLeft,
              i = 0 === a ? 1 : Math.round((1e3 * a) / 16);
            let r = o;
            return (
              (function a() {
                ((r += (t - o) / i), (e.scrollLeft = r), ++n < i && (l = _(a)));
              })(),
              function () {
                w(l);
              }
            );
          })(a, o, e ? 0 : +t.duration)));
      },
      U = () => {
        const e = S.inited;
        _e(() => {
          const a = y.value;
          if (!a || !a[S.currentIndex] || 'line' !== t.type || C(d.value)) return;
          const l = a[S.currentIndex].$el,
            { lineWidth: n, lineHeight: o } = t,
            i = l.offsetLeft + l.offsetWidth / 2,
            r = { width: z(n), backgroundColor: t.color, transform: `translateX(${i}px) translateX(-50%)` };
          if ((e && (r.transitionDuration = `${t.duration}s`), f(o))) {
            const e = z(o);
            ((r.height = e), (r.borderRadius = e));
          }
          S.lineStyle = r;
        });
      },
      X = (e, l) => {
        const n = ((e) => {
          const t = e < S.currentIndex ? -1 : 1;
          for (; e >= 0 && e < A.length; ) {
            if (!A[e].disabled) return e;
            e += t;
          }
        })(e);
        if (!f(n)) return;
        const o = A[n],
          i = I(o, n),
          r = null !== S.currentIndex;
        (S.currentIndex !== n && ((S.currentIndex = n), l || Y(), U()),
          i !== t.active && (a('update:active', i), r && a('change', i, o.title)),
          s && !t.scrollspy && F(Math.ceil(j(d.value) - P.value)));
      },
      Z = (e, t) => {
        const a = A.findIndex((t, a) => I(t, a) === e);
        X(-1 === a ? 0 : a, t);
      },
      K = (e = !1) => {
        if (t.scrollspy) {
          const a = A[S.currentIndex].$el;
          if (a && g.value) {
            const l = j(a, g.value) - V.value;
            ((o = !0),
              c && c(),
              (c = (function (e, t, a, l) {
                let n,
                  o = O(e);
                const i = o < t,
                  r = 0 === a ? 1 : Math.round((1e3 * a) / 16),
                  s = (t - o) / r;
                return (
                  (function a() {
                    ((o += s),
                      ((i && o > t) || (!i && o < t)) && (o = t),
                      x(e, o),
                      (i && o < t) || (!i && o > t) ? (n = _(a)) : l && (n = _(l)));
                  })(),
                  function () {
                    w(n);
                  }
                );
              })(g.value, l, e ? 0 : +t.duration, () => {
                o = !1;
              })));
          }
        }
      },
      q = (l, n, o) => {
        const { title: i, disabled: s } = A[n],
          u = I(A[n], n);
        (s ||
          (r(t.beforeChange, {
            args: [u],
            done: () => {
              (X(n), K());
            },
          }),
          e(l)),
          a('clickTab', { name: u, title: i, event: o, disabled: s }));
      },
      J = (e) => {
        ((s = e.isFixed), a('scroll', e));
      },
      Q = () => {
        if ('line' === t.type && A.length) return he('div', { class: Ct('line'), style: S.lineStyle }, null);
      },
      ee = () => {
        var e, a, n;
        const { type: o, border: i, sticky: r } = t,
          s = [
            he('div', { ref: r ? void 0 : m, class: [Ct('wrap'), { [W]: 'line' === o && i }] }, [
              he(
                'div',
                {
                  ref: v,
                  role: 'tablist',
                  class: Ct('nav', [o, { shrink: t.shrink, complete: E.value }]),
                  style: L.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = l['nav-left']) ? void 0 : e.call(l),
                  A.map((e) => e.renderTitle(q)),
                  Q(),
                  null == (a = l['nav-right']) ? void 0 : a.call(l),
                ],
              ),
            ]),
            null == (n = l['nav-bottom']) ? void 0 : n.call(l),
          ];
        return r ? he('div', { ref: m }, [s]) : s;
      },
      te = () => {
        (U(),
          _e(() => {
            var e, t;
            (Y(!0), null == (t = null == (e = p.value) ? void 0 : e.swipeRef.value) || t.resize());
          }));
      };
    (Ne(() => [t.color, t.duration, t.lineWidth, t.lineHeight], U),
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
          S.inited &&
            (Z(t.active),
            U(),
            _e(() => {
              Y(!0);
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
      Oe(U),
      R(U),
      k(() => {
        (Z(t.active, !0),
          _e(() => {
            ((S.inited = !0), m.value && (n = $(m.value).height), Y(!0));
          }));
      }),
      At(d, U),
      D(
        'scroll',
        () => {
          if (t.scrollspy && !o) {
            const e = (() => {
              for (let e = 0; e < A.length; e++) {
                const { top: t } = $(A[e].$el);
                if (t > V.value) return 0 === e ? 0 : e - 1;
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
        setLine: U,
        scrollable: E,
        onRendered: (e, t) => a('rendered', e, t),
        currentName: G,
        setTitleRefs: b,
        scrollIntoView: Y,
      }),
      () =>
        he('div', { ref: d, class: Ct([t.type]) }, [
          t.showHeader
            ? t.sticky
              ? he(wt, { container: d.value, offsetTop: P.value, onScroll: J }, { default: () => [ee()] })
              : ee()
            : null,
          he(
            Tt,
            {
              ref: p,
              count: A.length,
              inited: S.inited,
              animated: t.animated,
              duration: t.duration,
              swipeable: t.swipeable,
              lazyRender: t.lazyRender,
              currentIndex: S.currentIndex,
              onChange: X,
            },
            {
              default: () => {
                var e;
                return [null == (e = l.default) ? void 0 : e.call(l)];
              },
            },
          ),
        ])
    );
  },
});
const Pt = Symbol(),
  Vt = Symbol(),
  Bt = (e) => {
    const t = xe(Vt, null);
    (Se(Pt, e),
      Se(
        Vt,
        fe(() => (null == t || t.value) && e.value),
      ));
  },
  [Yt, Rt] = v('tab'),
  Ut = ve({
    name: Yt,
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
      showZeroBadge: V,
    },
    setup(e, { slots: t }) {
      const a = fe(() => {
          const t = {},
            { type: a, color: l, disabled: n, isActive: o, activeColor: i, inactiveColor: r } = e;
          l && 'card' === a && ((t.borderColor = l), n || (o ? (t.backgroundColor = l) : (t.color = l)));
          const s = o ? i : r;
          return (s && (t.color = s), t);
        }),
        l = () => {
          const a = he('span', { class: Rt('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
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
            class: [Rt([e.type, { grow: e.scrollable && !e.shrink, shrink: e.shrink, active: e.isActive, disabled: e.disabled }])],
            style: a.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            'aria-selected': e.isActive,
            'aria-disabled': e.disabled || void 0,
            'aria-controls': e.controls,
            'data-allow-mismatch': 'attribute',
          },
          [l()],
        );
    },
  }),
  [zt, Wt] = v('swipe-item');
const Ft = P(
    ve({
      name: zt,
      setup(e, { slots: t }) {
        let a;
        const l = Ae({ offset: 0, inited: !1, mounted: !1 }),
          { parent: n, index: o } = b(kt);
        if (!n) return;
        const r = fe(() => {
            const e = {},
              { vertical: t } = n.props;
            return (
              n.size.value && (e[t ? 'height' : 'width'] = `${n.size.value}px`),
              l.offset && (e.transform = `translate${t ? 'Y' : 'X'}(${l.offset}px)`),
              e
            );
          }),
          s = fe(() => {
            const { loop: e, lazyRender: t } = n.props;
            if (!t || a) return !0;
            if (!l.mounted) return !1;
            const i = n.activeIndicator.value,
              r = n.count.value - 1,
              s = 0 === i && e ? r : i - 1,
              u = i === r && e ? 0 : i + 1;
            return ((a = o.value === i || o.value === s || o.value === u), a);
          });
        return (
          we(() => {
            _e(() => {
              l.mounted = !0;
            });
          }),
          i({
            setOffset: (e) => {
              l.offset = e;
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
  [jt, Xt] = v('tab');
const Zt = P(
    ve({
      name: jt,
      props: m({}, t, {
        dot: Boolean,
        name: y,
        badge: y,
        title: String,
        disabled: Boolean,
        titleClass: Z,
        titleStyle: [String, Object],
        showZeroBadge: V,
      }),
      setup(e, { slots: t }) {
        const a = bt(),
          l = me(!1),
          n = ge(),
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
                !l.value &&
                ((l.value = !0),
                o.props.lazyRender &&
                  _e(() => {
                    o.onRendered(s(), e.title);
                  })),
              t
            );
          }),
          c = me(''),
          d = me('');
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
                      const l = e[a];
                      (st(l) || 'number' == typeof l) && (t += `${a.startsWith('--') ? a : dt(a)}:${l};`);
                    }
                    return t;
                  })(vt(a))
                : a));
        });
        const v = me(!u.value);
        return (
          Ne(u, (e) => {
            e
              ? (v.value = !1)
              : U(() => {
                  v.value = !0;
                });
          }),
          Ne(
            () => e.title,
            () => {
              (o.setLine(), o.scrollIntoView());
            },
          ),
          Bt(u),
          i({
            id: a,
            renderTitle: (l) =>
              he(
                Ut,
                Ee(
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
                    onClick: (e) => l(n.proxy, r.value, e),
                  },
                  K(o.props, ['type', 'color', 'shrink']),
                  K(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
                ),
                { title: t.title },
              ),
          }),
          () => {
            var e;
            const n = `${o.id}-${r.value}`,
              { animated: i, swipeable: s, scrollspy: c, lazyRender: d } = o.props;
            if (!t.default && !i) return;
            const m = c || u.value;
            if (i || s)
              return he(
                Ft,
                {
                  id: a,
                  role: 'tabpanel',
                  class: Xt('panel-wrapper', { inactive: v.value }),
                  tabindex: u.value ? 0 : -1,
                  'aria-hidden': !u.value,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                {
                  default: () => {
                    var e;
                    return [he('div', { class: Xt('panel') }, [null == (e = t.default) ? void 0 : e.call(t)])];
                  },
                },
              );
            const f = l.value || c || !d ? (null == (e = t.default) ? void 0 : e.call(t)) : null;
            return ke(
              he(
                'div',
                {
                  id: a,
                  role: 'tabpanel',
                  class: Xt('panel'),
                  tabindex: m ? 0 : -1,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                [f],
              ),
              [[Le, m]],
            );
          }
        );
      },
    }),
  ),
  Kt = P(Gt),
  [qt] = v('picker-group'),
  Jt = Symbol(qt);
m({ tabs: g(), activeTab: E(0), nextStepText: String, showToolbar: V }, lt);
const Qt = m(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: E(44),
    showToolbar: V,
    swipeDuration: E(1e3),
    visibleOptionNum: E(6),
  },
  lt,
);
const ea = P(
    ve({
      name: We,
      props: m({}, Qt, { columns: g(), modelValue: g(), toolbarPosition: L('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: a }) {
        const l = me(),
          n = me(e.modelValue.slice(0)),
          { parent: o } = b(Jt),
          { children: r, linkChildren: u } = B(et);
        u();
        const c = fe(() =>
            (function (e) {
              return m({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          d = fe(() => T(e.optionHeight)),
          v = fe(() =>
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
            switch (v.value) {
              case 'multiple':
                return t;
              case 'cascade':
                return (function (e, t, a) {
                  const l = [];
                  let n = { [t.children]: e },
                    o = 0;
                  for (; n && n[t.children]; ) {
                    const e = n[t.children],
                      i = a.value[o];
                    ((n = f(i) ? qe(e, i, t) : void 0), !n && e.length && (n = qe(e, Xe(e)[t.value], t)), o++, l.push(e));
                  }
                  return l;
                })(t, c.value, n);
              default:
                return [t];
            }
          }),
          h = fe(() => p.value.some((e) => e.length)),
          g = fe(() => p.value.map((e, t) => qe(e, n.value[t], c.value))),
          y = fe(() => p.value.map((e, t) => e.findIndex((e) => e[c.value.value] === n.value[t]))),
          N = (e, t) => {
            if (n.value[e] !== t) {
              const a = n.value.slice(0);
              ((a[e] = t), (n.value = a));
            }
          },
          _ = () => ({ selectedValues: n.value.slice(0), selectedOptions: g.value, selectedIndexes: y.value }),
          w = () => {
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
          O = () => t('cancel', _()),
          x = () =>
            p.value.map((l, o) =>
              he(
                tt,
                {
                  value: n.value[o],
                  fields: c.value,
                  options: l,
                  readonly: e.readonly,
                  allowHtml: e.allowHtml,
                  optionHeight: d.value,
                  swipeDuration: e.swipeDuration,
                  visibleOptionNum: e.visibleOptionNum,
                  onChange: (e) =>
                    ((e, a) => {
                      (N(a, e),
                        'cascade' === v.value &&
                          n.value.forEach((e, t) => {
                            const a = p.value[t];
                            Ke(a, e, c.value) || N(t, a.length ? a[0][c.value.value] : void 0);
                          }),
                        _e(() => {
                          t('change', m({ columnIndex: a }, _()));
                        }));
                    })(e, o),
                  onClickOption: (e) =>
                    ((e, a) => {
                      const l = { columnIndex: a, currentOption: e };
                      (t('clickOption', m(_(), l)), t('scrollInto', l));
                    })(e, o),
                  onScrollInto: (e) => {
                    t('scrollInto', { currentOption: e, columnIndex: o });
                  },
                },
                { option: a.option },
              ),
            ),
          S = (e) => {
            if (h.value) {
              const t = { height: `${d.value}px` },
                a = { backgroundSize: `100% ${(e - d.value) / 2}px` };
              return [he('div', { class: Fe('mask'), style: a }, null), he('div', { class: [q, Fe('frame')], style: t }, null)];
            }
          },
          k = () => {
            const t = d.value * +e.visibleOptionNum,
              n = { height: `${t}px` };
            return e.loading || h.value || !a.empty ? he('div', { ref: l, class: Fe('columns'), style: n }, [x(), S(t)]) : a.empty();
          },
          E = () => {
            if (e.showToolbar && !o) return he(it, Ee(K(e, ot), { onConfirm: w, onCancel: O }), K(a, nt));
          },
          L = (e) => {
            e.forEach((e, t) => {
              e.length && !Ke(e, n.value[t], c.value) && N(t, Xe(e)[c.value.value]);
            });
          };
        let H;
        (Ne(p, (e) => L(e), { immediate: !0 }),
          Ne(
            () => e.modelValue,
            (t) => {
              (J(t, n.value) || J(t, H) || ((n.value = t.slice(0)), (H = t.slice(0))), 0 === e.modelValue.length && L(p.value));
            },
            { deep: !0 },
          ),
          Ne(
            n,
            (a) => {
              J(a, e.modelValue) || ((H = a.slice(0)), t('update:modelValue', H));
            },
            { immediate: !0 },
          ),
          D('touchmove', A, { target: l }));
        return (
          i({ confirm: w, getSelectedOptions: () => g.value }),
          () => {
            var t, l;
            return he('div', { class: Fe() }, [
              'top' === e.toolbarPosition ? E() : null,
              e.loading ? he(s, { class: Fe('loading') }, null) : null,
              null == (t = a['columns-top']) ? void 0 : t.call(a),
              k(),
              null == (l = a['columns-bottom']) ? void 0 : l.call(a),
              'bottom' === e.toolbarPosition ? E() : null,
            ]);
          }
        );
      },
    }),
  ),
  [ta, aa] = v('cell'),
  la = {
    tag: L('div'),
    icon: String,
    size: String,
    title: y,
    value: y,
    label: y,
    center: Boolean,
    isLink: Boolean,
    border: V,
    iconPrefix: String,
    valueClass: Z,
    labelClass: Z,
    titleClass: Z,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const na = P(
  ve({
    name: ta,
    props: m({}, la, t),
    setup(e, { slots: t }) {
      const l = a(),
        n = () => {
          if (t.label || f(e.label)) return he('div', { class: [aa('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var a;
          if (t.title || f(e.title)) {
            const l = null == (a = t.title) ? void 0 : a.call(t);
            if (Array.isArray(l) && 0 === l.length) return;
            return he('div', { class: [aa('title'), e.titleClass], style: e.titleStyle }, [l || he('span', null, [e.title]), n()]);
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
        const { tag: n, size: s, center: u, border: c, isLink: d, required: v } = e,
          m = null != (a = e.clickable) ? a : d,
          f = { center: u, required: !!v, clickable: m, borderless: !c };
        return (
          s && (f[s] = !!s),
          he(
            n,
            { class: aa(f), role: m ? 'button' : void 0, tabindex: m ? 0 : void 0, onClick: l },
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
const [da, va] = v('field'),
  ma = {
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
    clearIcon: L('clear'),
    modelValue: E(''),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: L('focus'),
    formatTrigger: L('onChange'),
    spellcheck: { type: Boolean, default: null },
    error: { type: Boolean, default: null },
    disabled: { type: Boolean, default: null },
    readonly: { type: Boolean, default: null },
    inputmode: String,
  };
const fa = P(
  ve({
    name: da,
    props: m({}, la, ma, {
      rows: y,
      type: L('text'),
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
      const l = bt(),
        n = Ae({ status: 'unvalidated', focused: !1, validateMessage: '' }),
        o = me(),
        r = me(),
        s = me(),
        { parent: u } = b(oe),
        c = () => {
          var t;
          return String(null != (t = e.modelValue) ? t : '');
        },
        d = (t) => (f(e[t]) ? e[t] : u && f(u.props[t]) ? u.props[t] : void 0),
        v = fe(() => {
          const t = d('readonly');
          if (e.clearable && !t) {
            const t = '' !== c(),
              a = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && n.focused);
            return t && a;
          }
          return !1;
        }),
        m = fe(() => (s.value && a.input ? s.value() : e.modelValue)),
        h = fe(() => {
          var t;
          const a = d('required');
          return 'auto' === a ? (null == (t = e.rules) ? void 0 : t.some((e) => e.required)) : a;
        }),
        g = (e) =>
          e.reduce(
            (e, t) =>
              e.then(() => {
                if ('failed' === n.status) return;
                let { value: e } = m;
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
                  return ((n.status = 'failed'), void (n.validateMessage = ia(e, t)));
                if (t.validator) {
                  if (oa(e) && !1 === t.validateEmpty) return;
                  return (function (e, t) {
                    return new Promise((a) => {
                      const l = t.validator(e, t);
                      le(l) ? l.then(a) : a(l);
                    });
                  })(e, t).then((a) => {
                    a && 'string' == typeof a
                      ? ((n.status = 'failed'), (n.validateMessage = a))
                      : !1 === a && ((n.status = 'failed'), (n.validateMessage = ia(e, t)));
                  });
                }
              }),
            Promise.resolve(),
          ),
        y = () => {
          ((n.status = 'unvalidated'), (n.validateMessage = ''));
        },
        N = () => t('endValidate', { status: n.status, message: n.validateMessage }),
        _ = (a = e.rules) =>
          new Promise((l) => {
            (y(),
              a
                ? (t('startValidate'),
                  g(a).then(() => {
                    'failed' === n.status ? (l({ name: e.name, message: n.validateMessage }), N()) : ((n.status = 'passed'), l(), N());
                  }))
                : l());
          }),
        w = (t) => {
          if (u && e.rules) {
            const { validateTrigger: a } = u.props,
              l = ie(a).includes(t),
              n = e.rules.filter((e) => (e.trigger ? ie(e.trigger).includes(t) : l));
            n.length && _(n);
          }
        },
        O = (a, l = 'onChange') => {
          var i, r;
          const s = a;
          a = ((t) => {
            var a;
            const { maxlength: l } = e;
            if (f(l) && ua(t) > +l) {
              const e = c();
              if (e && ua(e) === +l) return e;
              const i = null == (a = o.value) ? void 0 : a.selectionEnd;
              if (n.focused && i) {
                const e = [...t],
                  a = e.length - +l;
                return (e.splice(i - a, a), e.join(''));
              }
              return ca(t, +l);
            }
            return t;
          })(a);
          const u = s.length - a.length;
          if ('number' === e.type || 'digit' === e.type) {
            const t = 'number' === e.type;
            if (((a = ne(a, t, t)), 'onBlur' === l && '' !== a && (void 0 !== e.min || void 0 !== e.max))) {
              const t = p(+a, null != (i = e.min) ? i : -1 / 0, null != (r = e.max) ? r : 1 / 0);
              +a !== t && (a = t.toString());
            }
          }
          let d = 0;
          if (e.formatter && l === e.formatTrigger) {
            const { formatter: t, maxlength: l } = e;
            if (((a = t(a)), f(l) && ua(a) > +l && (a = ca(a, +l)), o.value && n.focused)) {
              const { selectionEnd: e } = o.value,
                a = ca(s, e);
              d = t(a).length - a.length;
            }
          }
          if (o.value && o.value.value !== a)
            if (n.focused) {
              let { selectionStart: e, selectionEnd: t } = o.value;
              if (((o.value.value = a), f(e) && f(t))) {
                const l = a.length;
                (u ? ((e -= u), (t -= u)) : d && ((e += d), (t += d)), o.value.setSelectionRange(Math.min(e, l), Math.min(t, l)));
              }
            } else o.value.value = a;
          a !== e.modelValue && t('update:modelValue', a);
        },
        x = (e) => {
          e.target.composing || O(e.target.value);
        },
        S = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.blur();
        },
        k = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.focus();
        },
        E = () => {
          const t = o.value;
          'textarea' === e.type &&
            e.autosize &&
            t &&
            (function (e, t) {
              const a = ee();
              e.style.height = 'auto';
              let l = e.scrollHeight;
              if (te(t)) {
                const { maxHeight: e, minHeight: a } = t;
                (void 0 !== e && (l = Math.min(l, e)), void 0 !== a && (l = Math.max(l, a)));
              }
              l && ((e.style.height = `${l}px`), F(a));
            })(t, e.autosize);
        },
        L = (e) => {
          ((n.focused = !0), t('focus', e), _e(E), d('readonly') && S());
        },
        H = (e) => {
          ((n.focused = !1), O(c(), 'onBlur'), t('blur', e), d('readonly') || (w('onBlur'), _e(E), re()));
        },
        T = (e) => t('clickInput', e),
        I = (e) => t('clickLeftIcon', e),
        C = (e) => t('clickRightIcon', e),
        $ = fe(() => ('boolean' == typeof e.error ? e.error : !(!u || !u.props.showError || 'failed' !== n.status) || void 0)),
        M = fe(() => {
          const e = d('labelWidth'),
            t = d('labelAlign');
          if (e && 'top' !== t) return { width: z(e) };
        }),
        G = (a) => {
          if (13 === a.keyCode) {
            ((u && u.props.submitOnEnter) || 'textarea' === e.type || A(a), 'search' === e.type && S());
          }
          t('keypress', a);
        },
        P = () => e.id || `${l}-input`,
        V = () => {
          const t = va('control', [
            d('inputAlign'),
            { error: $.value, custom: !!a.input, 'min-height': 'textarea' === e.type && !e.autosize },
          ]);
          if (a.input) return he('div', { class: t, onClick: T }, [a.input()]);
          const n = {
            id: P(),
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
            'aria-labelledby': e.label ? `${l}-label` : void 0,
            'data-allow-mismatch': 'attribute',
            onBlur: H,
            onFocus: L,
            onInput: x,
            onClick: T,
            onChange: sa,
            onKeypress: G,
            onCompositionend: sa,
            onCompositionstart: ra,
          };
          return 'textarea' === e.type
            ? he('textarea', Ee(n, { inputmode: e.inputmode }), null)
            : he(
                'input',
                Ee(
                  ((i = e.type),
                  (r = e.inputmode),
                  'number' === i && ((i = 'text'), null != r || (r = 'decimal')),
                  'digit' === i && ((i = 'tel'), null != r || (r = 'numeric')),
                  { type: i, inputmode: r }),
                  n,
                ),
                null,
              );
          var i, r;
        },
        B = () => {
          const t = a['right-icon'];
          if (e.rightIcon || t)
            return he('div', { class: va('right-icon'), onClick: C }, [
              t ? t() : he(Q, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        Y = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = ua(c());
            return he('div', { class: va('word-limit') }, [he('span', { class: va('word-num') }, [t]), He('/'), e.maxlength]);
          }
        },
        R = () => {
          if (u && !1 === u.props.showErrorMessage) return;
          const t = e.errorMessage || n.validateMessage;
          if (t) {
            const e = a['error-message'],
              l = d('errorMessageAlign');
            return he('div', { class: va('error-message', l) }, [e ? e({ message: t }) : t]);
          }
        },
        U = () => [
          he('div', { class: va('body') }, [
            V(),
            v.value && he(Q, { ref: r, name: e.clearIcon, class: va('clear') }, null),
            B(),
            a.button && he('div', { class: va('button') }, [a.button()]),
          ]),
          Y(),
          R(),
        ];
      return (
        i({ blur: S, focus: k, validate: _, formValue: m, resetValidation: y, getValidationStatus: () => n.status }),
        Se(se, { customValue: s, resetValidation: y, validateWithTrigger: w }),
        Ne(
          () => e.modelValue,
          () => {
            (O(c()), y(), w('onChange'), _e(E));
          },
        ),
        we(() => {
          (O(c(), e.formatTrigger), _e(E));
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
            n = d('labelAlign'),
            o = (() => {
              const t = a['left-icon'];
              if (e.leftIcon || t)
                return he('div', { class: va('left-icon'), onClick: I }, [
                  t ? t() : he(Q, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return he(
            na,
            {
              size: e.size,
              class: va({ error: $.value, disabled: t, [`label-${n}`]: n }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: M.value,
              valueClass: va('value'),
              titleClass: [va('label', [n, { required: h.value }]), e.labelClass],
              arrowDirection: e.arrowDirection,
            },
            {
              icon: o && 'top' !== n ? () => o : null,
              title: () => {
                const t = (() => {
                  const t = d('labelWidth'),
                    n = d('labelAlign'),
                    o = d('colon') ? ':' : '';
                  return a.label
                    ? [a.label(), o]
                    : e.label
                      ? he(
                          'label',
                          {
                            id: `${l}-label`,
                            for: a.input ? void 0 : P(),
                            'data-allow-mismatch': 'attribute',
                            onClick: (e) => {
                              (A(e), k());
                            },
                            style: 'top' === n && t ? { width: z(t) } : void 0,
                          },
                          [e.label + o],
                        )
                      : void 0;
                })();
                return 'top' === n ? [o, t].filter(Boolean) : t || [];
              },
              value: U,
              extra: a.extra,
            },
          );
        }
      );
    },
  }),
);
P(u);
const [pa, ha, ga] = v('calendar');
function ya(e, t) {
  const a = e.getFullYear(),
    l = t.getFullYear();
  if (a === l) {
    const a = e.getMonth(),
      l = t.getMonth();
    return a === l ? 0 : a > l ? 1 : -1;
  }
  return a > l ? 1 : -1;
}
function ba(e, t) {
  const a = ya(e, t);
  if (0 === a) {
    const a = e.getDate(),
      l = t.getDate();
    return a === l ? 0 : a > l ? 1 : -1;
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
function wa(e, t) {
  const a = Da(e);
  return (a.setFullYear(a.getFullYear() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
const Oa = (e) => Na(e, -1),
  xa = (e) => Na(e, 1),
  Sa = (e) => _a(e, -1),
  ka = (e) => _a(e, 1),
  Ea = (e) => wa(e, -1),
  La = (e) => wa(e, 1),
  Ha = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
m({}, Qt, { modelValue: g(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Ta] = v('calendar-day');
var Ia = ve({
  name: Ta,
  props: { item: h(Object), color: String, index: Number, offset: ue(0), rowHeight: String },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const l = fe(() => {
        const { item: t, index: a, color: l, offset: n, rowHeight: o } = e,
          i = { height: o };
        if ('placeholder' === t.type) return ((i.width = '100%'), i);
        if ((0 === a && (i.marginLeft = (100 * n) / 7 + '%'), l))
          switch (t.type) {
            case 'end':
            case 'start':
            case 'start-end':
            case 'multiple-middle':
            case 'multiple-selected':
              i.background = l;
              break;
            case 'middle':
              i.color = l;
          }
        return (
          t.date &&
            (function (e, t = 0) {
              const a = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                l = t + e.getDate() - 1,
                n = t + a.getDate() - 1;
              return Math.floor(l / 7) === Math.floor(n / 7);
            })(t.date, n) &&
            (i.marginBottom = 0),
          i
        );
      }),
      n = () => {
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
        const { item: t, color: l, rowHeight: n } = e,
          { type: r } = t,
          s = [o(), a.text ? a.text(e.item) : e.item.text, i()];
        return 'selected' === r ? he('div', { class: ha('selected-day'), style: { width: n, height: n, background: l } }, [s]) : s;
      };
    return () => {
      const { type: t, className: a } = e.item;
      return 'placeholder' === t
        ? he('div', { class: ha('day'), style: l.value }, null)
        : he('div', { role: 'gridcell', style: l.value, class: [ha('day', t), a], tabindex: 'disabled' === t ? void 0 : -1, onClick: n }, [
            r(),
          ]);
    };
  },
});
const [Ca] = v('calendar-month');
var $a = ve({
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
    const [l, n] = ce(),
      o = me(),
      r = me(),
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
      v = fe(() => {
        return ((t = e.date.getFullYear()), (a = e.date.getMonth() + 1), 32 - new Date(t, a - 1, 32).getDate());
        var t, a;
      }),
      m = fe(() => l.value || !e.lazyRender),
      f = (t) => {
        const { type: a, minDate: l, maxDate: n, currentDate: o } = e;
        if ((l && ba(t, l) < 0) || (n && ba(t, n) > 0)) return 'disabled';
        if (null === o) return '';
        if (Array.isArray(o)) {
          if ('multiple' === a)
            return ((t) => {
              const a = (t) => e.currentDate.some((e) => 0 === ba(e, t));
              if (a(t)) {
                const e = Oa(t),
                  l = xa(t),
                  n = a(e),
                  o = a(l);
                return n && o ? 'multiple-middle' : n ? 'end' : o ? 'start' : 'multiple-selected';
              }
              return '';
            })(t);
          if ('range' === a)
            return ((t) => {
              const [a, l] = e.currentDate;
              if (!a) return '';
              const n = ba(t, a);
              if (!l) return 0 === n ? 'start' : '';
              const o = ba(t, l);
              return e.allowSameDay && 0 === n && 0 === o
                ? 'start-end'
                : 0 === n
                  ? 'start'
                  : 0 === o
                    ? 'end'
                    : n > 0 && o < 0
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
        if (e.showMark && m.value) return he('div', { class: ha('month-mark') }, [e.date.getMonth() + 1]);
      },
      y = fe(() => {
        const e = Math.ceil((v.value + d.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      b = fe(() => {
        const t = [],
          a = e.date.getFullYear(),
          l = e.date.getMonth();
        for (let n = 1; n <= v.value; n++) {
          const o = new Date(a, l, n),
            i = f(o);
          let r = { date: o, type: i, text: n, bottomInfo: p(i) };
          (e.formatter && (r = e.formatter(r)), t.push(r));
        }
        return t;
      }),
      D = fe(() => b.value.filter((e) => 'disabled' === e.type)),
      A = (l, n) =>
        he(
          Ia,
          {
            item: l,
            index: n,
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
        setVisible: n,
        scrollToDate: (e, t) => {
          if (o.value) {
            const a = $(o.value),
              l = y.value.length,
              n = ((Math.ceil((t.getDate() + d.value) / 7) - 1) * a.height) / l;
            x(e, a.top + n + e.scrollTop - $(e).top);
          }
        },
        disabledDays: D,
      }),
      () =>
        he('div', { class: ha('month'), ref: r }, [
          h(),
          he('div', { ref: o, role: 'grid', class: ha('days') }, [g(), (m.value ? b : y).value.map(A)]),
        ])
    );
  },
});
const [Ma] = v('calendar-header');
var Ga = ve({
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
    switchMode: L('none'),
  },
  emits: ['clickSubtitle', 'panelChange'],
  setup(e, { slots: t, emit: a }) {
    const l = fe(() => e.date && e.minDate && ya(Sa(e.date), e.minDate) < 0),
      n = fe(() => e.date && e.minDate && ya(Ea(e.date), e.minDate) < 0),
      o = fe(() => e.date && e.maxDate && ya(ka(e.date), e.maxDate) > 0),
      i = fe(() => e.date && e.maxDate && ya(La(e.date), e.maxDate) > 0),
      r = () => {
        if (e.showTitle) {
          const a = e.title || ga('title'),
            l = t.title ? t.title() : a;
          return he('div', { class: ha('header-title') }, [l]);
        }
      },
      s = (e) => a('clickSubtitle', e),
      u = (e) => a('panelChange', e),
      c = (a) => {
        const r = 'year-month' === e.switchMode,
          s = t[a ? 'next-month' : 'prev-month'],
          c = t[a ? 'next-year' : 'prev-year'],
          d = a ? o.value : l.value,
          v = a ? i.value : n.value,
          m = a ? 'arrow' : 'arrow-left',
          f = a ? 'arrow-double-right' : 'arrow-double-left',
          p = he('view', { class: ha('header-action', { disabled: d }), onClick: d ? void 0 : () => u((a ? ka : Sa)(e.date)) }, [
            s ? s({ disabled: d }) : he(Q, { class: { [N]: !d }, name: m }, null),
          ]),
          h =
            r &&
            he('view', { class: ha('header-action', { disabled: v }), onClick: v ? void 0 : () => u((a ? La : Ea)(e.date)) }, [
              c ? c({ disabled: v }) : he(Q, { class: { [N]: !v }, name: f }, null),
            ]);
        return a ? [p, h] : [h, p];
      },
      d = () => {
        if (e.showSubtitle) {
          const a = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            l = 'none' !== e.switchMode;
          return he('div', { class: ha('header-subtitle', { 'with-switch': l }), onClick: s }, [
            l ? [c(), he('div', { class: ha('header-subtitle-text') }, [a]), c(!0)] : a,
          ]);
        }
      },
      v = () => {
        const { firstDayOfWeek: t } = e,
          a = ga('weekdays'),
          l = [...a.slice(t, 7), ...a.slice(0, t)];
        return he('div', { class: ha('weekdays') }, [l.map((e) => he('span', { class: ha('weekday') }, [e]))]);
      };
    return () => he('div', { class: ha('header') }, [r(), d(), v()]);
  },
});
const Pa = P(
  ve({
    name: pa,
    props: {
      show: Boolean,
      type: L('single'),
      switchMode: L('none'),
      title: String,
      color: String,
      round: V,
      readonly: Boolean,
      poppable: V,
      maxRange: E(null),
      position: L('bottom'),
      teleport: [String, Object],
      showMark: V,
      showTitle: V,
      formatter: Function,
      rowHeight: y,
      confirmText: String,
      rangePrompt: String,
      lazyRender: V,
      showConfirm: V,
      defaultDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: V,
      closeOnPopstate: V,
      showRangePrompt: V,
      confirmDisabledText: String,
      closeOnClickOverlay: V,
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: V,
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
      const n = fe(() => 'none' !== e.switchMode),
        o = fe(() => (e.minDate || n.value ? e.minDate : Ha())),
        r = fe(() => (e.maxDate || n.value ? e.maxDate : _a(Ha(), 6))),
        s = (e, t = o.value, a = r.value) => (t && -1 === ba(e, t) ? t : a && 1 === ba(e, a) ? a : e),
        u = (t = e.defaultDate) => {
          const { type: a, allowSameDay: l } = e;
          if (null === t) return t;
          const n = Ha();
          if ('range' === a) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === ba(t[0], n) && (t = []));
            const e = o.value,
              a = r.value;
            return [s(t[0] || n, e, a ? (l ? a : Oa(a)) : void 0), s(t[1] || (l ? n : xa(n)), e ? (l ? e : xa(e)) : void 0)];
          }
          return 'multiple' === a ? (Array.isArray(t) ? t.map((e) => s(e)) : [s(n)]) : ((t && !Array.isArray(t)) || (t = n), s(t));
        };
      let v;
      const m = me(),
        f = me(u()),
        p = me(
          (() => {
            const e = Array.isArray(f.value) ? f.value[0] : f.value;
            return e || s(Ha());
          })(),
        ),
        h = me(),
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
          const e = O(m.value),
            a = e + v,
            l = D.value.map((e, t) => g.value[t].getHeight());
          if (a > l.reduce((e, t) => e + t, 0) && e > 0) return;
          let n,
            o = 0;
          const i = [-1, -1];
          for (let r = 0; r < D.value.length; r++) {
            const s = g.value[r];
            (o <= a &&
              o + l[r] >= e &&
              ((i[1] = r),
              n || ((n = s), (i[0] = r)),
              g.value[r].showed || ((g.value[r].showed = !0), t('monthShow', { date: s.date, title: s.getTitle() }))),
              (o += l[r]));
          }
          (D.value.forEach((e, t) => {
            const a = t >= i[0] - 1 && t <= i[1] + 1;
            g.value[t].setVisible(a);
          }),
            n && (h.value = n));
        },
        w = (e) => {
          n.value
            ? (p.value = e)
            : _(() => {
                (D.value.some((t, a) => 0 === ya(t, e) && (m.value && g.value[a].scrollToDate(m.value, e), !0)), N());
              });
        },
        x = () => {
          if (!e.poppable || e.show)
            if (f.value) {
              const t = 'single' === e.type ? f.value : f.value[0];
              de(t) && w(t);
            } else n.value || _(N);
        },
        S = () => {
          (e.poppable && !e.show) ||
            (n.value ||
              _(() => {
                v = Math.floor($(m).height);
              }),
            x());
        },
        E = (e = u()) => {
          ((f.value = e), x());
        },
        L = (e) => {
          ((p.value = e), t('panelChange', { date: e }));
        },
        H = () => {
          var e;
          return t('confirm', null != (e = f.value) ? e : Aa(f.value));
        },
        T = (a, l) => {
          const n = (e) => {
            ((f.value = e), t('select', Aa(e)));
          };
          if (l && 'range' === e.type) {
            const l = ((a) => {
              const { maxRange: l, rangePrompt: n, showRangePrompt: o } = e;
              return !(
                l &&
                (function (e) {
                  const t = e[0].getTime();
                  return (e[1].getTime() - t) / 864e5 + 1;
                })(a) > +l &&
                (o && d(n || ga('rangePrompt', l)), t('overRange'), 1)
              );
            })(a);
            if (!l) return void n([a[0], Na(a[0], +e.maxRange - 1)]);
          }
          (n(a), l && !e.showConfirm && H());
        },
        I = fe(() =>
          g.value.reduce((e, t) => {
            var a, l;
            return (e.push(...(null != (l = null == (a = t.disabledDays) ? void 0 : a.value) ? l : [])), e);
          }, []),
        ),
        C = (a) => {
          if (e.readonly || !a.date) return;
          const { date: l } = a,
            { type: n } = e;
          if ('range' === n) {
            if (!f.value) return void T([l]);
            const [t, a] = f.value;
            if (t && !a) {
              const a = ba(l, t);
              if (1 === a) {
                const e = ((e, t, a) => {
                  var l;
                  return null == (l = e.find((e) => -1 === ba(t, e.date) && -1 === ba(e.date, a))) ? void 0 : l.date;
                })(I.value, t, l);
                if (e) {
                  const a = Oa(e);
                  -1 === ba(t, a) ? T([t, a]) : T([l]);
                } else T([t, l], !0);
              } else -1 === a ? T([l]) : e.allowSameDay && T([l, l], !0);
            } else T([l]);
          } else if ('multiple' === n) {
            if (!f.value) return void T([l]);
            const a = f.value,
              n = a.findIndex((e) => 0 === ba(e, l));
            if (-1 !== n) {
              const [e] = a.splice(n, 1);
              t('unselect', Da(e));
            } else e.maxRange && a.length >= +e.maxRange ? d(e.rangePrompt || ga('rangePrompt', e.maxRange)) : T([...a, l]);
          } else T(l, !0);
        },
        M = (e) => t('clickOverlay', e),
        G = (e) => t('update:show', e),
        P = (l, i) => {
          const s = 0 !== i || !e.showSubtitle;
          return he(
            $a,
            Ee(
              {
                ref: n.value ? h : y(i),
                date: l,
                currentDate: f.value,
                showMonthTitle: s,
                firstDayOfWeek: b.value,
                lazyRender: !n.value && e.lazyRender,
                maxDate: r.value,
                minDate: o.value,
              },
              K(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: C, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            K(a, ['top-info', 'bottom-info', 'month-title', 'text']),
          );
        },
        V = () => {
          if (a.footer) return a.footer();
          if (e.showConfirm) {
            const t = a['confirm-text'],
              n = A.value,
              o = n ? e.confirmDisabledText : e.confirmText;
            return he(
              l,
              {
                round: !0,
                block: !0,
                type: 'primary',
                color: e.color,
                class: ha('confirm'),
                disabled: n,
                nativeType: 'button',
                onClick: H,
              },
              { default: () => [t ? t({ disabled: n }) : o || ga('confirm')] },
            );
          }
        },
        B = () => {
          var l, i;
          return he('div', { class: ha() }, [
            he(
              Ga,
              {
                date: null == (l = h.value) ? void 0 : l.date,
                maxDate: r.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (i = h.value) ? void 0 : i.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: b.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: L,
              },
              K(a, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            he('div', { ref: m, class: ha('body'), onScroll: n.value ? void 0 : N }, [n.value ? P(p.value, 0) : D.value.map(P)]),
            he('div', { class: [ha('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [V()]),
          ]);
        };
      return (
        Ne(() => e.show, S),
        Ne(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => E(u(f.value)),
        ),
        Ne(
          () => e.defaultDate,
          (e) => {
            E(e);
          },
        ),
        i({ reset: E, scrollToDate: w, getSelectedDate: () => f.value }),
        k(S),
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
                { default: B },
              )
            : B()
      );
    },
  }),
);
function Va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Ba,
  Ya = { exports: {} };
const Ra = Va(
  (Ba ||
    ((Ba = 1),
    (Ya.exports = (function () {
      var e = 1e3,
        t = 6e4,
        a = 36e5,
        l = 'millisecond',
        n = 'second',
        o = 'minute',
        i = 'hour',
        r = 'day',
        s = 'week',
        u = 'month',
        c = 'quarter',
        d = 'year',
        v = 'date',
        m = 'Invalid Date',
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
          var l = String(e);
          return !l || l.length >= t ? e : '' + Array(t + 1 - l.length).join(a) + e;
        },
        y = {
          s: g,
          z: function (e) {
            var t = -e.utcOffset(),
              a = Math.abs(t),
              l = Math.floor(a / 60),
              n = a % 60;
            return (t <= 0 ? '+' : '-') + g(l, 2, '0') + ':' + g(n, 2, '0');
          },
          m: function e(t, a) {
            if (t.date() < a.date()) return -e(a, t);
            var l = 12 * (a.year() - t.year()) + (a.month() - t.month()),
              n = t.clone().add(l, u),
              o = a - n < 0,
              i = t.clone().add(l + (o ? -1 : 1), u);
            return +(-(l + (a - n) / (o ? n - i : i - n)) || 0);
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          },
          p: function (e) {
            return (
              { M: u, y: d, w: s, d: r, D: v, h: i, m: o, s: n, ms: l, Q: c }[e] ||
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
          return e instanceof x || !(!e || !e[A]);
        },
        _ = function e(t, a, l) {
          var n;
          if (!t) return b;
          if ('string' == typeof t) {
            var o = t.toLowerCase();
            (D[o] && (n = o), a && ((D[o] = a), (n = o)));
            var i = t.split('-');
            if (!n && i.length > 1) return e(i[0]);
          } else {
            var r = t.name;
            ((D[r] = t), (n = r));
          }
          return (!l && n && (b = n), n || (!l && b));
        },
        w = function (e, t) {
          if (N(e)) return e.clone();
          var a = 'object' == typeof t ? t : {};
          return ((a.date = e), (a.args = arguments), new x(a));
        },
        O = y;
      ((O.l = _),
        (O.i = N),
        (O.w = function (e, t) {
          return w(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
        }));
      var x = (function () {
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
                if (O.u(t)) return new Date();
                if (t instanceof Date) return new Date(t);
                if ('string' == typeof t && !/Z$/i.test(t)) {
                  var l = t.match(f);
                  if (l) {
                    var n = l[2] - 1 || 0,
                      o = (l[7] || '0').substring(0, 3);
                    return a
                      ? new Date(Date.UTC(l[1], n, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, o))
                      : new Date(l[1], n, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, o);
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
              return O;
            }),
            (g.isValid = function () {
              return !(this.$d.toString() === m);
            }),
            (g.isSame = function (e, t) {
              var a = w(e);
              return this.startOf(t) <= a && a <= this.endOf(t);
            }),
            (g.isAfter = function (e, t) {
              return w(e) < this.startOf(t);
            }),
            (g.isBefore = function (e, t) {
              return this.endOf(t) < w(e);
            }),
            (g.$g = function (e, t, a) {
              return O.u(e) ? this[t] : this.set(a, e);
            }),
            (g.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (g.valueOf = function () {
              return this.$d.getTime();
            }),
            (g.startOf = function (e, t) {
              var a = this,
                l = !!O.u(t) || t,
                c = O.p(e),
                m = function (e, t) {
                  var n = O.w(a.$u ? Date.UTC(a.$y, t, e) : new Date(a.$y, t, e), a);
                  return l ? n : n.endOf(r);
                },
                f = function (e, t) {
                  return O.w(a.toDate()[e].apply(a.toDate('s'), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), a);
                },
                p = this.$W,
                h = this.$M,
                g = this.$D,
                y = 'set' + (this.$u ? 'UTC' : '');
              switch (c) {
                case d:
                  return l ? m(1, 0) : m(31, 11);
                case u:
                  return l ? m(1, h) : m(0, h + 1);
                case s:
                  var b = this.$locale().weekStart || 0,
                    D = (p < b ? p + 7 : p) - b;
                  return m(l ? g - D : g + (6 - D), h);
                case r:
                case v:
                  return f(y + 'Hours', 0);
                case i:
                  return f(y + 'Minutes', 1);
                case o:
                  return f(y + 'Seconds', 2);
                case n:
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
                s = O.p(e),
                c = 'set' + (this.$u ? 'UTC' : ''),
                m = ((a = {}),
                (a[r] = c + 'Date'),
                (a[v] = c + 'Date'),
                (a[u] = c + 'Month'),
                (a[d] = c + 'FullYear'),
                (a[i] = c + 'Hours'),
                (a[o] = c + 'Minutes'),
                (a[n] = c + 'Seconds'),
                (a[l] = c + 'Milliseconds'),
                a)[s],
                f = s === r ? this.$D + (t - this.$W) : t;
              if (s === u || s === d) {
                var p = this.clone().set(v, 1);
                (p.$d[m](f), p.init(), (this.$d = p.set(v, Math.min(this.$D, p.daysInMonth())).$d));
              } else m && this.$d[m](f);
              return (this.init(), this);
            }),
            (g.set = function (e, t) {
              return this.clone().$set(e, t);
            }),
            (g.get = function (e) {
              return this[O.p(e)]();
            }),
            (g.add = function (l, c) {
              var v,
                m = this;
              l = Number(l);
              var f = O.p(c),
                p = function (e) {
                  var t = w(m);
                  return O.w(t.date(t.date() + Math.round(e * l)), m);
                };
              if (f === u) return this.set(u, this.$M + l);
              if (f === d) return this.set(d, this.$y + l);
              if (f === r) return p(1);
              if (f === s) return p(7);
              var h = ((v = {}), (v[o] = t), (v[i] = a), (v[n] = e), v)[f] || 1,
                g = this.$d.getTime() + l * h;
              return O.w(g, this);
            }),
            (g.subtract = function (e, t) {
              return this.add(-1 * e, t);
            }),
            (g.format = function (e) {
              var t = this,
                a = this.$locale();
              if (!this.isValid()) return a.invalidDate || m;
              var l = e || 'YYYY-MM-DDTHH:mm:ssZ',
                n = O.z(this),
                o = this.$H,
                i = this.$m,
                r = this.$M,
                s = a.weekdays,
                u = a.months,
                c = a.meridiem,
                d = function (e, a, n, o) {
                  return (e && (e[a] || e(t, l))) || n[a].slice(0, o);
                },
                v = function (e) {
                  return O.s(o % 12 || 12, e, '0');
                },
                f =
                  c ||
                  function (e, t, a) {
                    var l = e < 12 ? 'AM' : 'PM';
                    return a ? l.toLowerCase() : l;
                  };
              return l.replace(p, function (e, l) {
                return (
                  l ||
                  (function (e) {
                    switch (e) {
                      case 'YY':
                        return String(t.$y).slice(-2);
                      case 'YYYY':
                        return O.s(t.$y, 4, '0');
                      case 'M':
                        return r + 1;
                      case 'MM':
                        return O.s(r + 1, 2, '0');
                      case 'MMM':
                        return d(a.monthsShort, r, u, 3);
                      case 'MMMM':
                        return d(u, r);
                      case 'D':
                        return t.$D;
                      case 'DD':
                        return O.s(t.$D, 2, '0');
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
                        return O.s(o, 2, '0');
                      case 'h':
                        return v(1);
                      case 'hh':
                        return v(2);
                      case 'a':
                        return f(o, i, !0);
                      case 'A':
                        return f(o, i, !1);
                      case 'm':
                        return String(i);
                      case 'mm':
                        return O.s(i, 2, '0');
                      case 's':
                        return String(t.$s);
                      case 'ss':
                        return O.s(t.$s, 2, '0');
                      case 'SSS':
                        return O.s(t.$ms, 3, '0');
                      case 'Z':
                        return n;
                    }
                    return null;
                  })(e) ||
                  n.replace(':', '')
                );
              });
            }),
            (g.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (g.diff = function (l, v, m) {
              var f,
                p = this,
                h = O.p(v),
                g = w(l),
                y = (g.utcOffset() - this.utcOffset()) * t,
                b = this - g,
                D = function () {
                  return O.m(p, g);
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
                case n:
                  f = b / e;
                  break;
                default:
                  f = b;
              }
              return m ? f : O.a(f);
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
                l = _(e, t, !0);
              return (l && (a.$L = l), a);
            }),
            (g.clone = function () {
              return O.w(this.$d, this);
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
        S = x.prototype;
      return (
        (w.prototype = S),
        [
          ['$ms', l],
          ['$s', n],
          ['$m', o],
          ['$H', i],
          ['$W', r],
          ['$M', u],
          ['$y', d],
          ['$D', v],
        ].forEach(function (e) {
          S[e[1]] = function (t) {
            return this.$g(t, e[0], e[1]);
          };
        }),
        (w.extend = function (e, t) {
          return (e.$i || (e(t, x, w), (e.$i = !0)), w);
        }),
        (w.locale = _),
        (w.isDayjs = N),
        (w.unix = function (e) {
          return w(1e3 * e);
        }),
        (w.en = D[b]),
        (w.Ls = D),
        (w.p = {}),
        w
      );
    })())),
  Ya.exports),
);
function Ua(e) {
  const t = Ra(e).day();
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
        const t = Ra(e);
        return 1 == t.month() && t.date() >= 14 && t.date() <= 24;
      },
      needLink: !0,
      book: { earlyDaysNum: 19, description: '需提前 20 天预定' },
    },
  ],
  Wa = [
    {
      name: '一大一小',
      action: () => [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 1 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
    },
    {
      name: '2大1小',
      action: (e) => {
        const t = [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 }];
        return (
          0 != Ra(e).month() || Ua(e)
            ? t.push({ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 })
            : t.push({ category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT', num: 1 }),
          t
        );
      },
    },
    {
      name: '2大2小',
      action: (e) => {
        const t = [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 2 }];
        return (
          0 != Ra(e).month() || Ua(e)
            ? t.push({ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 })
            : t.push({ category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT', num: 1 }),
          t
        );
      },
    },
    {
      name: '2大',
      action: (e) =>
        0 != Ra(e).month() || Ua(e)
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
      visible: (e) => 0 == Ra(e).month(),
      insteadSolution: { details: [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 }] },
    },
    {
      label: '👨&👶 两大一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD',
      num: 0,
      simpleText: '两大一小',
      fullText: '一日-两大一小',
      visible: (e) => 0 != Ra(e).month(),
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
        const { useDate: t, personCounts: a, counts: l, summaries: n, diffAmount: o } = e,
          i = Ra(t).diff(new Date(), 'd');
        let r = `${t} ${Ra(t).format('dddd')} ${Xa(a, l, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${Xa(a, l, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${Xa(a, l, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
        const s = { price: 99999999, description: '' };
        for (const u in n) {
          const e = n[u],
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
          (Ua(t) && a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 1) ||
          (!Ua(t) && a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 2)
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
  el = ['onClick'],
  tl = { class: 'counter-value' },
  al = ['onClick'],
  ll = { class: 'form-group' },
  nl = ['onClick'],
  ol = ['onClick'],
  il = { class: 'summary-item' },
  rl = { class: 'summary-value' },
  sl = { class: 'summary-item' },
  ul = { class: 'summary-value' },
  cl = { class: 'summary-item' },
  dl = { class: 'summary-value' },
  vl = { class: 'summary-item' },
  ml = { class: 'summary-value' },
  fl = { class: 'summary-item' },
  pl = { class: 'summary-value' },
  hl = { class: 'summary-item' },
  gl = { class: 'summary-value' },
  yl = Be(
    ve({
      __name: 'calculator',
      setup(e) {
        const t = xe('useDate', me('')),
          a = me([]),
          o = () => {
            a.value.forEach((e) => {
              e.num = 0;
            });
            for (const e in r.value) r.value[e] = 0;
          },
          i = me({ costPlatform: 0.02 }),
          r = me({}),
          s = me({}),
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
          v = (e, t) => {
            (0 === r.value[e] && t < 0) || (r.value[e] = (100 * r.value[e] + 100 * t) / 100);
          };
        const m = fe(() => {
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
            const e = n.data.filter((e) => e.useDate === t.value);
            if (0 == e.length) return void d('Product data not found');
            const a = new Map();
            for (const t of e) a.set(t.attractionProductCategoryFullCode, t);
            return a;
          })();
          if (e)
            for (const t in s.value) {
              let l = 0,
                n = 0,
                o = 0,
                u = 0;
              const c = 0,
                d = s.value[t];
              if (d.needLink)
                for (const a in m.value) {
                  const o = m.value[a],
                    i = e.get(o.reference[t]);
                  ((l += o.num * i.preferSaleAmount), (n += o.num * i.price));
                }
              else
                for (const t of a.value) {
                  const a = e.get(t.category);
                  ((l += t.num * a.preferSaleAmount), (n += t.num * a.price));
                }
              ((l += Number.parseFloat(r.value[t] + '')), (u = l * i.value.costPlatform), (o = c + u));
              const v = l - o - c;
              ((d.amount = l.toFixed(2)),
                (d.originalAmount = n.toFixed(2)),
                (d.costPlatform = u.toFixed(2)),
                (d.commission = c.toFixed(2)),
                (d.totalCost = o.toFixed(2)),
                (d.profit = v.toFixed(2)));
            }
        }
        const p = () => {
            let e = '';
            const l = { useDate: t.value, personCounts: m.value, counts: a.value, summaries: s.value, diffAmount: r.value };
            for (const t of Za) t.condition(l) && (e += t.action(l));
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
          we(() => {
            (u(), f());
          }),
          (e, n) => {
            const i = l,
              u = fa;
            return (
              Ge(),
              Te('div', null, [
                Ie('div', Ka, [
                  n[0] || (n[0] = Ie('label', null, '快捷操作', -1)),
                  (Ge(),
                  Te(
                    Ce,
                    null,
                    $e(h, (e) =>
                      he(
                        i,
                        {
                          size: 'small',
                          type: 'primary',
                          onClick: (l) =>
                            e.func
                              ? e.func()
                              : ((e) => {
                                  o();
                                  const l = Wa.find((t) => t.name === e);
                                  (a.value.forEach((e) => {
                                    l?.action(t.value).forEach((t) => {
                                      t.category === e.category && (e.num = t.num);
                                    });
                                  }),
                                    _e(() => {
                                      p();
                                    }));
                                })(e.name),
                          key: e.name,
                        },
                        { default: Pe(() => [He(Ve(e.name), 1)]), _: 2 },
                        1032,
                        ['onClick'],
                      ),
                    ),
                    64,
                  )),
                ]),
                Ie('div', qa, [
                  n[1] || (n[1] = Ie('label', null, '选择人数', -1)),
                  (Ge(!0),
                  Te(
                    Ce,
                    null,
                    $e(
                      Me(a),
                      (e) => (
                        Ge(),
                        Te('div', { class: 'counter-group', key: e.category }, [
                          Ie('span', Ja, Ve(e.label), 1),
                          Ie('div', Qa, [
                            Ie('button', { class: 'counter-btn', onClick: (t) => c(e, -1) }, '−', 8, el),
                            Ie('span', tl, Ve(e.num), 1),
                            Ie('button', { class: 'counter-btn', onClick: (t) => c(e, 1) }, '+', 8, al),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                Ie('div', ll, [
                  n[2] || (n[2] = Ie('label', null, '差价', -1)),
                  (Ge(!0),
                  Te(
                    Ce,
                    null,
                    $e(
                      Me(s),
                      (e, t) => (
                        Ge(),
                        Te('div', { class: 'counter-group', key: t }, [
                          Ie('button', { class: 'counter-btn', onClick: (e) => v(t, -5) }, '−', 8, nl),
                          he(
                            u,
                            { modelValue: Me(r)[t], 'onUpdate:modelValue': (e) => (Me(r)[t] = e), type: 'number', label: e.name },
                            null,
                            8,
                            ['modelValue', 'onUpdate:modelValue', 'label'],
                          ),
                          Ie('button', { class: 'counter-btn', onClick: (e) => v(t, 5) }, '+', 8, ol),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                (Ge(!0),
                Te(
                  Ce,
                  null,
                  $e(
                    Me(s),
                    (e, t) => (
                      Ge(),
                      Te('div', { class: 'summary', key: t }, [
                        Ie('h2', null, '💰 费用汇总-' + Ve(e.name), 1),
                        Ie('div', il, [
                          n[4] || (n[4] = Ie('span', { class: 'summary-label' }, '总金额', -1)),
                          Ie('span', rl, [n[3] || (n[3] = He(' ¥', -1)), Ie('span', null, Ve(e.amount), 1)]),
                        ]),
                        Ie('div', sl, [
                          n[6] || (n[6] = Ie('span', { class: 'summary-label' }, '官方票价', -1)),
                          Ie('span', ul, [n[5] || (n[5] = He(' ¥', -1)), Ie('span', null, Ve(e.originalAmount), 1)]),
                        ]),
                        Ie('div', cl, [
                          n[8] || (n[8] = Ie('span', { class: 'summary-label' }, '总佣金', -1)),
                          Ie('span', dl, [n[7] || (n[7] = He(' ¥', -1)), Ie('span', null, Ve(e.commission), 1)]),
                        ]),
                        Ie('div', vl, [
                          n[10] || (n[10] = Ie('span', { class: 'summary-label' }, '总成本-平台', -1)),
                          Ie('span', ml, [n[9] || (n[9] = He(' ¥', -1)), Ie('span', null, Ve(e.costPlatform), 1)]),
                        ]),
                        Ie('div', fl, [
                          n[12] || (n[12] = Ie('span', { class: 'summary-label' }, '总成本', -1)),
                          Ie('span', pl, [n[11] || (n[11] = He(' ¥', -1)), Ie('span', null, Ve(e.totalCost), 1)]),
                        ]),
                        Ie('div', hl, [
                          n[14] || (n[14] = Ie('span', { class: 'summary-label' }, '总利润', -1)),
                          Ie('span', gl, [n[13] || (n[13] = He(' ¥', -1)), Ie('span', null, Ve(e.profit), 1)]),
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
    [['__scopeId', 'data-v-619a7108']],
  ),
  bl = [
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { useDate: t, remainPersons: a } = e,
          l = [];
        return (
          a.forEach((e) => {
            l.push(`上海乐高乐园 ${Ra(t).format('YYYY-MM-DD')} ${e.ticketType} 金额\n${e.idType} ${e.name} ${e.id}`);
          }),
          l
        );
      },
      orderPriority: 10,
    },
    { enabled: !1, condition: () => !0, action: (e) => [], orderPriority: 50 },
    { enabled: !1, condition: () => !0, action: (e) => [], orderPriority: 50 },
    {
      enabled: !1,
      condition: ({ useDate: e }) => 0 == Ra(e).month() && !Ua(e),
      action: (e) => {
        const { useDate: t, remainPersons: a } = e,
          l = Object.groupBy(a, (e) => e.ticketType);
        if (void 0 !== l['成人'] && l['成人'].length >= 2) {
          l['成人'].length;
          l['成人'].length;
        }
        return [];
      },
      orderPriority: 100,
    },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  Dl = { class: 'content' },
  Al = { class: 'input-group' },
  Nl = { class: 'input-wrapper' },
  _l = { class: 'input-group' },
  wl = ve({
    __name: 'identifyLint',
    setup(e) {
      const t = xe('useDate', me('')),
        a = me(''),
        n = me([]),
        o = me(''),
        i = me(''),
        r = me(!1),
        s = me(!1),
        u = me([]),
        d = me([]),
        v = me(),
        m = {
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
      for (const l in m) p.push({ text: m[l].fullName, value: m[l].shortName });
      for (const l in f) h.push({ text: f[l].fullName, value: f[l].shortName });
      ((u.value = [p[0].value]), (d.value = [h[0].value]));
      const g = (e) => {
          if (18 !== e.length) return null;
          return { birthday: `${e.slice(6, 4)}-${e.slice(10, 2)}-${e.slice(12, 2)}`, ...y(e.slice(6, 14)) };
        },
        y = (e) => {
          const a = Ra(t.value).diff(e, 'y');
          return a < 2
            ? { ticketType: '免票', orderPriority: 0 }
            : a <= 12
              ? { ticketType: '儿童', orderPriority: 2 }
              : a < 60
                ? { ticketType: '成人', orderPriority: 1 }
                : { ticketType: '老人', orderPriority: 3 };
        },
        b = (e) => {
          if (!e) return { type: m.UNKNOWN.shortName, valid: !1, message: '输入不能为空' };
          const t = e.trim();
          if (/^\d{15}$|^\d{17}[\dXx]$/.test(t)) {
            const e = ((e) => {
              if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(e)) return !1;
              const t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
              let a = 0;
              for (let l = 0; l < 17; l++) a += Number.parseInt(e[l]) * t[l];
              return ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'][a % 11] === e[17].toUpperCase();
            })(t);
            return { type: m.CHINA_ID.shortName, valid: e, message: e ? '有效的身份证号码' : '身份证号码校验失败', details: g(t) };
          }
          return /^[CHM]\d{8,10}$/.test(t)
            ? { type: m.HK_MACAU_PASS.shortName }
            : ((e) => /^\d{8,10}$/.test(e))(t)
              ? { type: m.TAIWAN_PASS.shortName, valid: !0, message: '台湾通行证' }
              : ((e) => /^[EG]\d{8}$/.test(e) || /^[A-Z]{1,2}\d{6,9}$/.test(e))(t)
                ? { type: m.PASSPORT.shortName, valid: !0, message: '护照号码' }
                : { type: m.UNKNOWN.shortName, valid: !1, message: '无法识别的输入类型' };
        },
        D = () => {
          (n.value.forEach((e) => {
            const t = b(e.id);
            ((e.idType = t.type),
              (e.ticketType = t.details ? t.details.ticketType : '未知'),
              !0 === t.valid ? (e.idValid = '有效') : !1 === t.valid ? (e.idValid = '无效') : (e.idValid = '未知'),
              (e.orderPriority = t.details ? t.details.orderPriority : 0));
          }),
            n.value.sort((e, t) => e.orderPriority - t.orderPriority));
          let e = Object.groupBy(n.value, ({ ticketType: e }) => e);
          ((o.value = Object.keys(e)
            .map((t) => `${t} ${e[t].length}`)
            .join('，')),
            (e = Object.groupBy(n.value, ({ idValid: e }) => e)),
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
          n.value = t.map((e) => {
            const t = e
              .split(' ')
              .map((e) => e.trim())
              .filter((e) => '' !== e);
            return { name: t[0], id: t[1], orderPriority: 1 };
          });
        },
        N = (e) => {
          if ('number' == typeof e) {
            const t = n.value[e],
              a = t.name;
            ((t.name = t.id), (t.id = a));
          } else
            n.value.forEach((e) => {
              const t = e.name;
              ((e.name = e.id), (e.id = t));
            });
        },
        _ = ({ selectedValues: e }) => {
          ((v.value.idType = e[0]), O());
        },
        w = ({ selectedValues: e }) => {
          ((v.value.ticketType = e[0]), x());
        },
        O = () => {
          ((r.value = !1), (v.value = {}));
        },
        x = () => {
          ((s.value = !1), (v.value = {}));
        },
        S = () => {
          let e = [];
          const a = { useDate: t.value, remainPersons: Array.from(n.value) };
          for (const t of bl) t.condition(a) && (e = e.concat(t.action(a)));
          navigator.clipboard.writeText(e.join('\n'));
        };
      return (e, t) => {
        const m = fa,
          f = l,
          g = ea,
          y = c;
        return (
          Ge(),
          Te('div', Dl, [
            Ie('div', Al, [
              Ie('div', Nl, [
                he(
                  m,
                  {
                    type: 'textarea',
                    modelValue: Me(a),
                    'onUpdate:modelValue': t[0] || (t[0] = (e) => (Re(a) ? (a.value = e) : null)),
                    rows: '10',
                    onKeyup: Ye(D, ['enter']),
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                Ie('div', null, '票种统计：' + Ve(Me(o)), 1),
                Ie('div', null, 'ID 统计：' + Ve(Me(i)), 1),
                he(
                  f,
                  { onClick: A, type: 'primary', size: 'small' },
                  { default: Pe(() => [...(t[6] || (t[6] = [He('分割', -1)]))]), _: 1 },
                ),
                he(
                  f,
                  { onClick: D, type: 'primary', size: 'small' },
                  { default: Pe(() => [...(t[7] || (t[7] = [He('自动识别', -1)]))]), _: 1 },
                ),
                he(
                  f,
                  { onClick: S, type: 'primary', size: 'small' },
                  { default: Pe(() => [...(t[8] || (t[8] = [He('复制', -1)]))]), _: 1 },
                ),
                he(
                  f,
                  { onClick: N, type: 'primary', size: 'small' },
                  { default: Pe(() => [...(t[9] || (t[9] = [He('互换', -1)]))]), _: 1 },
                ),
                he(
                  f,
                  {
                    onClick:
                      t[1] ||
                      (t[1] = (e) => {
                        ((a.value = ''), (n.value = []), (o.value = ''), (i.value = ''));
                      }),
                    type: 'primary',
                    size: 'small',
                  },
                  { default: Pe(() => [...(t[10] || (t[10] = [He(' 清空 ', -1)]))]), _: 1 },
                ),
              ]),
            ]),
            Ie('div', _l, [
              (Ge(!0),
              Te(
                Ce,
                null,
                $e(
                  Me(n),
                  (e, a) => (
                    Ge(),
                    Te('div', { key: e.name }, [
                      he(m, { modelValue: e.name, 'onUpdate:modelValue': (t) => (e.name = t), label: '姓名', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      he(m, { modelValue: e.id, 'onUpdate:modelValue': (t) => (e.id = t), label: 'ID', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      he(
                        m,
                        {
                          modelValue: e.idType,
                          'onUpdate:modelValue': (t) => (e.idType = t),
                          'is-link': '',
                          readonly: '',
                          label: '类型',
                          onClick: (t) => {
                            ((r.value = !0), (v.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      he(m, { modelValue: e.idValid, 'onUpdate:modelValue': (t) => (e.idValid = t), label: 'ID 状态' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      he(
                        m,
                        {
                          modelValue: e.ticketType,
                          'onUpdate:modelValue': (t) => (e.ticketType = t),
                          'is-link': '',
                          readonly: '',
                          label: '票种',
                          onClick: (t) => {
                            ((s.value = !0), (v.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      he(
                        f,
                        { onClick: (e) => N(a), type: 'primary', size: 'small' },
                        { default: Pe(() => [...(t[11] || (t[11] = [He('互换', -1)]))]), _: 1 },
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
              { show: Me(r), 'onUpdate:show': t[3] || (t[3] = (e) => (Re(r) ? (r.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Pe(() => [
                  he(
                    g,
                    {
                      columns: p,
                      modelValue: Me(u),
                      'onUpdate:modelValue': t[2] || (t[2] = (e) => (Re(u) ? (u.value = e) : null)),
                      onCancel: O,
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
              { show: Me(s), 'onUpdate:show': t[5] || (t[5] = (e) => (Re(s) ? (s.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Pe(() => [
                  he(
                    g,
                    {
                      columns: h,
                      modelValue: Me(d),
                      'onUpdate:modelValue': t[4] || (t[4] = (e) => (Re(d) ? (d.value = e) : null)),
                      onCancel: x,
                      onConfirm: w,
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
  Ol = [
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
  xl = [
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
  Sl = ve({
    __name: 'term',
    setup(e) {
      const t = me(''),
        a = me([]),
        n = xl.filter((e) => void 0 === e.visible || e.visible);
      (Ne([t], () => {
        a.value = Ol.filter((e) => void 0 === e.visible || e.visible).filter((e) => !e.attraction || e.attraction === t.value);
      }),
        we(() => {
          t.value = 'SHANGHAI_LEGOLAND';
        }));
      return (e, o) => {
        const i = l,
          r = Zt,
          s = Kt;
        return (
          Ge(),
          Ue(
            s,
            { active: Me(t), 'onUpdate:active': o[0] || (o[0] = (e) => (Re(t) ? (t.value = e) : null)) },
            {
              default: Pe(() => [
                (Ge(!0),
                Te(
                  Ce,
                  null,
                  $e(
                    Me(n),
                    (e) => (
                      Ge(),
                      Ue(
                        r,
                        { title: e.attractionSimpleName, name: e.attractionCode, key: e.attractionCode },
                        {
                          default: Pe(() => [
                            (Ge(!0),
                            Te(
                              Ce,
                              null,
                              $e(
                                Me(a),
                                (e) => (
                                  Ge(),
                                  Te('div', { key: e.fullText }, [
                                    Ie('div', null, [Ie('span', null, Ve(e.simpleText), 1)]),
                                    Ie('div', null, [
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
                                        { default: Pe(() => [...(o[1] || (o[1] = [He('复制', -1)]))]), _: 1 },
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
  kl = ve({
    __name: 'tools',
    setup(e) {
      const t = me(0),
        a = [
          { label: '成人', num: 0, avgRatio: 0.55, avgAmount: 0 },
          { label: '儿童', num: 0, avgRatio: 0.45, avgAmount: 0 },
          { label: '老人', num: 0, avgRatio: 0.45, avgAmount: 0 },
        ];
      return (e, n) => {
        const o = fa,
          i = l;
        return (
          Ge(),
          Te('div', null, [
            he(o, { modelValue: Me(t), 'onUpdate:modelValue': n[0] || (n[0] = (e) => (Re(t) ? (t.value = e) : null)) }, null, 8, [
              'modelValue',
            ]),
            (Ge(),
            Te(
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
            Te(
              Ce,
              null,
              $e(a, (e, t) => Ie('div', { key: t }, Ve(e.label), 1)),
              64,
            )),
            he(i, null, { default: Pe(() => [...(n[1] || (n[1] = [He('复制', -1)]))]), _: 1 }),
          ])
        );
      };
    },
  }),
  El = { class: 'container' },
  Ll = { class: 'form-group' },
  Hl = Be(
    ve({
      __name: 'index',
      setup(e) {
        Ra.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = me('calculator'),
          a = (e) => Ra(e).format('YYYY-MM-DD'),
          l = me(a(new Date()));
        Se('useDate', l);
        const n = me(!1),
          o = (e) => {
            ((n.value = !1), (l.value = a(e)));
          };
        return (e, a) => {
          const i = na,
            r = Pa,
            s = Zt,
            u = Kt;
          return (
            Ge(),
            Te('div', El, [
              a[3] || (a[3] = Ie('h1', null, '🎫 票务计算器', -1)),
              Ie('div', Ll, [
                he(i, { title: '选择日期', value: Me(l), onClick: a[0] || (a[0] = (e) => (n.value = !0)) }, null, 8, ['value']),
                he(r, { show: Me(n), 'onUpdate:show': a[1] || (a[1] = (e) => (Re(n) ? (n.value = e) : null)), onConfirm: o }, null, 8, [
                  'show',
                ]),
              ]),
              he(
                u,
                { active: Me(t), 'onUpdate:active': a[2] || (a[2] = (e) => (Re(t) ? (t.value = e) : null)) },
                {
                  default: Pe(() => [
                    he(s, { title: '票务', name: 'calculator', key: 'calculator' }, { default: Pe(() => [he(yl)]), _: 1 }),
                    he(s, { title: '证件', name: 'identifyLint', key: 'identifyLint' }, { default: Pe(() => [he(wl)]), _: 1 }),
                    he(s, { title: '工具', name: 'tools', key: 'tools' }, { default: Pe(() => [he(kl)]), _: 1 }),
                    he(s, { title: '术语', name: 'term', key: 'term' }, { default: Pe(() => [he(Sl)]), _: 1 }),
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
    [['__scopeId', 'data-v-dcc509ca']],
  );
export { Hl as default };
