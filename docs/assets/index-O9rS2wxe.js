/* empty css              */ import { r as e, a as t, u as a, B as l } from './index-DX2D-EOP.js';
import { t as n } from './data-B0ZE2-TY.js';
import {
  c as o,
  e as r,
  i,
  a as s,
  m as u,
  b as c,
  n as d,
  u as v,
  d as m,
  p as f,
  H as p,
  r as h,
  f as g,
  h as y,
  s as b,
  j as w,
  o as D,
  k as x,
  l as k,
  q as S,
  v as $,
  g as O,
  x as C,
  y as T,
  z as A,
  A as M,
  w as I,
  t as _,
  C as N,
  D as B,
  E as H,
  F as V,
  G as P,
  J as L,
  K as E,
  L as R,
  M as z,
  N as Y,
  O as F,
  P as W,
  Q as j,
  I as U,
  R as G,
  S as Z,
  T as X,
  U as q,
  V as K,
  W as J,
  X as Q,
  Y as ee,
  Z as te,
  _ as ae,
  $ as le,
  a0 as ne,
} from './index-ND7WKwje.js';
import {
  d as oe,
  r as re,
  e as ie,
  E as se,
  j as ue,
  G as ce,
  H as de,
  I as ve,
  J as me,
  L as fe,
  w as pe,
  h as he,
  f as ge,
  M as ye,
  N as be,
  O as we,
  i as De,
  P as xe,
  v as ke,
  D as Se,
  c as $e,
  a as Oe,
  F as Ce,
  z as Te,
  u as Ae,
  k as Me,
  t as Ie,
  o as _e,
  _ as Ne,
  Q as Be,
  x as He,
} from './index-CScC_bmB.js';
import { u as Ve, a as Pe, c as Le, L as Ee, s as Re, P as ze, b as Ye } from './function-call-B-w-zG-E.js';
import { u as Fe } from './use-height-BtdMhtDL.js';
const [We, je, Ue] = o('picker'),
  Ge = (e) => e.find((e) => !e.disabled) || e[0];
function Ze(e, t) {
  for (let a = (t = s(t, 0, e.length)); a < e.length; a++) if (!e[a].disabled) return a;
  for (let a = t - 1; a >= 0; a--) if (!e[a].disabled) return a;
  return 0;
}
const Xe = (e, t, a) => void 0 !== t && e.some((e) => e[a.value] === t);
function qe(e, t, a) {
  const l = e.findIndex((e) => e[a.value] === t);
  return e[Ze(e, l)];
}
const [Ke, Je] = o('picker-column'),
  Qe = Symbol(Ke);
var et = oe({
  name: Ke,
  props: {
    value: d,
    fields: u(Object),
    options: c(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: u(Number),
    swipeDuration: u(d),
    visibleOptionNum: u(d),
  },
  emits: ['change', 'clickOption', 'scrollInto'],
  setup(e, { emit: t, slots: a }) {
    let l, n, o, r, i;
    const u = re(),
      c = re(),
      d = re(0),
      p = re(0),
      h = Ve(),
      g = () => e.options.length,
      y = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
      b = (a) => {
        let n = Ze(e.options, a);
        const o = -n * e.optionHeight,
          r = () => {
            n > g() - 1 && (n = Ze(e.options, a));
            const l = e.options[n][e.fields.value];
            l !== e.value && t('change', l);
          };
        (l && o !== d.value ? (i = r) : r(), (d.value = o));
      },
      w = () => e.readonly || !e.options.length,
      D = (t) => s(Math.round(-t / e.optionHeight), 0, g() - 1),
      x = ie(() => D(d.value)),
      k = () => {
        ((l = !1), (p.value = 0), i && (i(), (i = null)));
      },
      S = (e) => {
        if (!w()) {
          if ((h.start(e), l)) {
            const e = (function (e) {
              const { transform: t } = window.getComputedStyle(e),
                a = t.slice(7, t.length - 1).split(', ')[5];
              return Number(a);
            })(c.value);
            d.value = Math.min(0, e - y());
          }
          ((p.value = 0), (n = d.value), (o = Date.now()), (r = n), (i = null));
        }
      },
      $ = () => {
        if (w()) return;
        const t = d.value - r,
          a = Date.now() - o;
        if (a < 300 && Math.abs(t) > 15)
          return void ((t, a) => {
            const l = Math.abs(t / a);
            t = d.value + (l / 0.003) * (t < 0 ? -1 : 1);
            const n = D(t);
            ((p.value = +e.swipeDuration), b(n));
          })(t, a);
        const n = D(d.value);
        ((p.value = 200),
          b(n),
          setTimeout(() => {
            l = !1;
          }, 0));
      },
      O = () => {
        const n = { height: `${e.optionHeight}px` };
        return e.options.map((o, r) => {
          const s = o[e.fields.text],
            { disabled: u } = o,
            c = o[e.fields.value],
            d = {
              role: 'button',
              style: n,
              tabindex: u ? -1 : 0,
              class: [Je('item', { disabled: u, selected: c === e.value }), o.className],
              onClick: () =>
                ((a) => {
                  l || w() || ((i = null), (p.value = 200), b(a), t('clickOption', e.options[a]));
                })(r),
            },
            v = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: s };
          return ue('li', d, [a.option ? a.option(o, r) : ue('div', v, null)]);
        });
      };
    return (
      v(Qe),
      Pe({ stopMomentum: k }),
      se(() => {
        const t = l ? Math.floor(-d.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          a = Ze(e.options, t),
          n = -a * e.optionHeight;
        (l && a < t && k(), (d.value = n));
      }),
      m(
        'touchmove',
        (a) => {
          if (w()) return;
          (h.move(a), h.isVertical() && ((l = !0), f(a, !0)));
          const i = s(n + h.deltaY.value, -g() * e.optionHeight, e.optionHeight),
            u = D(i);
          (u !== x.value && t('scrollInto', e.options[u]), (d.value = i));
          const c = Date.now();
          c - o > 300 && ((o = c), (r = i));
        },
        { target: u },
      ),
      () =>
        ue('div', { ref: u, class: Je(), onTouchstartPassive: S, onTouchend: $, onTouchcancel: $ }, [
          ue(
            'ul',
            {
              ref: c,
              style: {
                transform: `translate3d(0, ${d.value + y()}px, 0)`,
                transitionDuration: `${p.value}ms`,
                transitionProperty: p.value ? 'all' : 'none',
              },
              class: Je('wrapper'),
              onTransitionend: k,
            },
            [O()],
          ),
        ])
    );
  },
});
const [tt] = o('picker-toolbar'),
  at = { title: String, cancelButtonText: String, confirmButtonText: String },
  lt = ['cancel', 'confirm', 'title', 'toolbar'],
  nt = Object.keys(at);
var ot = oe({
  name: tt,
  props: at,
  emits: ['confirm', 'cancel'],
  setup(e, { emit: t, slots: a }) {
    const l = () => t('cancel'),
      n = () => t('confirm'),
      o = () => {
        var t;
        const n = null != (t = e.cancelButtonText) ? t : Ue('cancel');
        if (a.cancel || n) return ue('button', { type: 'button', class: [je('cancel'), p], onClick: l }, [a.cancel ? a.cancel() : n]);
      },
      r = () => {
        var t;
        const l = null != (t = e.confirmButtonText) ? t : Ue('confirm');
        if (a.confirm || l) return ue('button', { type: 'button', class: [je('confirm'), p], onClick: n }, [a.confirm ? a.confirm() : l]);
      };
    return () =>
      ue('div', { class: je('toolbar') }, [
        a.toolbar
          ? a.toolbar()
          : [o(), a.title ? a.title() : e.title ? ue('div', { class: [je('title'), 'van-ellipsis'] }, [e.title]) : void 0, r()],
      ]);
  },
});
/**
 * @vue/shared v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const rt = Array.isArray,
  it = (e) => 'string' == typeof e,
  st = (e) => null !== e && 'object' == typeof e,
  ut = /\B([A-Z])/g,
  ct = ((e) => {
    const t = Object.create(null);
    return (a) => t[a] || (t[a] = e(a));
  })((e) => e.replace(ut, '-$1').toLowerCase());
function dt(e) {
  if (rt(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const l = e[a],
        n = it(l) ? pt(l) : dt(l);
      if (n) for (const e in n) t[e] = n[e];
    }
    return t;
  }
  if (it(e) || st(e)) return e;
}
const vt = /;(?![^(]*\))/g,
  mt = /:([^]+)/,
  ft = /\/\*[^]*?\*\//g;
function pt(e) {
  const t = {};
  return (
    e
      .replace(ft, '')
      .split(vt)
      .forEach((e) => {
        if (e) {
          const a = e.split(mt);
          a.length > 1 && (t[a[0].trim()] = a[1].trim());
        }
      }),
    t
  );
}
function ht(e) {
  let t = '';
  if (it(e)) t = e;
  else if (rt(e))
    for (let a = 0; a < e.length; a++) {
      const l = ht(e[a]);
      l && (t += l + ' ');
    }
  else if (st(e)) for (const a in e) e[a] && (t += a + ' ');
  return t.trim();
}
let gt = 0;
function yt() {
  const e = ce(),
    { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
  return `${t}-${++gt}`;
}
function bt() {
  const e = re([]),
    t = [];
  de(() => {
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
function wt(e, t) {
  if (!w || !window.IntersectionObserver) return;
  const a = new IntersectionObserver(
      (e) => {
        t(e[0].intersectionRatio > 0);
      },
      { root: document.body },
    ),
    l = () => {
      e.value && a.unobserve(e.value);
    };
  (ve(l),
    me(l),
    D(() => {
      e.value && a.observe(e.value);
    }));
}
const [Dt, xt] = o('sticky');
const kt = I(
    oe({
      name: Dt,
      props: { zIndex: d, position: k('top'), container: Object, offsetTop: x(0), offsetBottom: x(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: a }) {
        const l = re(),
          n = S(l),
          o = fe({ fixed: !1, width: 0, height: 0, transform: 0 }),
          i = re(!1),
          s = ie(() => $('top' === e.position ? e.offsetTop : e.offsetBottom)),
          u = ie(() => {
            if (i.value) return;
            const { fixed: e, height: t, width: a } = o;
            return e ? { width: `${a}px`, height: `${t}px` } : void 0;
          }),
          c = ie(() => {
            if (!o.fixed || i.value) return;
            const t = r(O(e.zIndex), { width: `${o.width}px`, height: `${o.height}px`, [e.position]: `${s.value}px` });
            return (o.transform && (t.transform = `translate3d(0, ${o.transform}px, 0)`), t);
          }),
          d = () => {
            if (!l.value || C(l)) return;
            const { container: a, position: n } = e,
              r = T(l),
              i = y(window);
            if (((o.width = r.width), (o.height = r.height), 'top' === n))
              if (a) {
                const e = T(a),
                  t = e.bottom - s.value - o.height;
                ((o.fixed = s.value > r.top && e.bottom > 0), (o.transform = t < 0 ? t : 0));
              } else o.fixed = s.value > r.top;
            else {
              const { clientHeight: e } = document.documentElement;
              if (a) {
                const t = T(a),
                  l = e - t.top - s.value - o.height;
                ((o.fixed = e - s.value < r.bottom && e > t.top), (o.transform = l < 0 ? -l : 0));
              } else o.fixed = e - s.value < r.bottom;
            }
            ((e) => {
              t('scroll', { scrollTop: e, isFixed: o.fixed });
            })(i);
          };
        return (
          pe(
            () => o.fixed,
            (e) => t('change', e),
          ),
          m('scroll', d, { target: n, passive: !0 }),
          wt(l, d),
          pe([A, M], () => {
            l.value &&
              !C(l) &&
              o.fixed &&
              ((i.value = !0),
              he(() => {
                const e = T(l);
                ((o.width = e.width), (o.height = e.height), (i.value = !1));
              }));
          }),
          () => {
            var e;
            return ue('div', { ref: l, style: u.value }, [
              ue('div', { class: xt({ fixed: o.fixed && !i.value }), style: c.value }, [null == (e = a.default) ? void 0 : e.call(a)]),
            ]);
          }
        );
      },
    }),
  ),
  [St, $t] = o('swipe'),
  Ot = {
    loop: _,
    width: d,
    height: d,
    vertical: Boolean,
    autoplay: x(0),
    duration: x(500),
    touchable: _,
    lazyRender: Boolean,
    initialSwipe: x(0),
    indicatorColor: String,
    showIndicators: _,
    stopPropagation: _,
  },
  Ct = Symbol(St);
const Tt = I(
    oe({
      name: St,
      props: Ot,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: a }) {
        const l = re(),
          n = re(),
          o = fe({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let r = !1;
        const i = Ve(),
          { children: u, linkChildren: c } = N(Ct),
          d = ie(() => u.length),
          v = ie(() => o[e.vertical ? 'height' : 'width']),
          p = ie(() => (e.vertical ? i.deltaY.value : i.deltaX.value)),
          h = ie(() => {
            if (o.rect) {
              return (e.vertical ? o.rect.height : o.rect.width) - v.value * d.value;
            }
            return 0;
          }),
          g = ie(() => (v.value ? Math.ceil(Math.abs(h.value) / v.value) : d.value)),
          y = ie(() => d.value * v.value),
          b = ie(() => (o.active + d.value) % d.value),
          w = ie(() => {
            const t = e.vertical ? 'vertical' : 'horizontal';
            return i.direction.value === t;
          }),
          D = ie(() => {
            const t = {
              transitionDuration: `${o.swiping ? 0 : e.duration}ms`,
              transform: `translate${e.vertical ? 'Y' : 'X'}(${+o.offset.toFixed(2)}px)`,
            };
            if (v.value) {
              const a = e.vertical ? 'height' : 'width',
                l = e.vertical ? 'width' : 'height';
              ((t[a] = `${y.value}px`), (t[l] = e[l] ? `${e[l]}px` : ''));
            }
            return t;
          }),
          x = (t, a = 0) => {
            let l = t * v.value;
            e.loop || (l = Math.min(l, -h.value));
            let n = a - l;
            return (e.loop || (n = s(n, h.value, 0)), n);
          },
          k = ({ pace: a = 0, offset: l = 0, emitChange: n }) => {
            if (d.value <= 1) return;
            const { active: r } = o,
              i = ((t) => {
                const { active: a } = o;
                return t ? (e.loop ? s(a + t, -1, d.value) : s(a + t, 0, g.value)) : a;
              })(a),
              c = x(i, l);
            if (e.loop) {
              if (u[0] && c !== h.value) {
                const e = c < h.value;
                u[0].setOffset(e ? y.value : 0);
              }
              if (u[d.value - 1] && 0 !== c) {
                const e = c > 0;
                u[d.value - 1].setOffset(e ? -y.value : 0);
              }
            }
            ((o.active = i), (o.offset = c), n && i !== r && t('change', b.value));
          },
          S = () => {
            ((o.swiping = !0), o.active <= -1 ? k({ pace: d.value }) : o.active >= d.value && k({ pace: -d.value }));
          },
          $ = () => {
            (S(),
              i.reset(),
              V(() => {
                ((o.swiping = !1), k({ pace: 1, emitChange: !0 }));
              }));
          };
        let O;
        const T = () => clearTimeout(O),
          I = () => {
            (T(),
              +e.autoplay > 0 &&
                d.value > 1 &&
                (O = setTimeout(() => {
                  ($(), I());
                }, +e.autoplay)));
          },
          _ = (t = +e.initialSwipe) => {
            if (!l.value) return;
            const a = () => {
              var a, n;
              if (!C(l)) {
                const t = { width: l.value.offsetWidth, height: l.value.offsetHeight };
                ((o.rect = t), (o.width = +(null != (a = e.width) ? a : t.width)), (o.height = +(null != (n = e.height) ? n : t.height)));
              }
              (d.value && -1 === (t = Math.min(d.value - 1, t)) && (t = d.value - 1),
                (o.active = t),
                (o.swiping = !0),
                (o.offset = x(t)),
                u.forEach((e) => {
                  e.setOffset(0);
                }),
                I());
            };
            C(l) ? he().then(a) : a();
          },
          P = () => _(o.active);
        let L;
        const E = (t) => {
            !e.touchable || t.touches.length > 1 || (i.start(t), (r = !1), (L = Date.now()), T(), S());
          },
          R = () => {
            if (!e.touchable || !o.swiping) return;
            const a = Date.now() - L,
              l = p.value / a;
            if ((Math.abs(l) > 0.25 || Math.abs(p.value) > v.value / 2) && w.value) {
              const t = e.vertical ? i.offsetY.value : i.offsetX.value;
              let a = 0;
              ((a = e.loop ? (t > 0 ? (p.value > 0 ? -1 : 1) : 0) : -Math[p.value > 0 ? 'ceil' : 'floor'](p.value / v.value)),
                k({ pace: a, emitChange: !0 }));
            } else p.value && k({ pace: 0 });
            ((r = !1), (o.swiping = !1), t('dragEnd', { index: b.value }), I());
          },
          z = (t, a) => {
            const l = a === b.value,
              n = l ? { backgroundColor: e.indicatorColor } : void 0;
            return ue('i', { style: n, class: $t('indicator', { active: l }) }, null);
          };
        return (
          Pe({
            prev: () => {
              (S(),
                i.reset(),
                V(() => {
                  ((o.swiping = !1), k({ pace: -1, emitChange: !0 }));
                }));
            },
            next: $,
            state: o,
            resize: P,
            swipeTo: (t, a = {}) => {
              (S(),
                i.reset(),
                V(() => {
                  let l;
                  ((l = e.loop && t === d.value ? (0 === o.active ? 0 : t) : t % d.value),
                    a.immediate
                      ? V(() => {
                          o.swiping = !1;
                        })
                      : (o.swiping = !1),
                    k({ pace: l - o.active, emitChange: !0 }));
                }));
            },
          }),
          c({ size: v, props: e, count: d, activeIndicator: b }),
          pe(
            () => e.initialSwipe,
            (e) => _(+e),
          ),
          pe(d, () => _(o.active)),
          pe(() => e.autoplay, I),
          pe([A, M, () => e.width, () => e.height], P),
          pe(B(), (e) => {
            'visible' === e ? I() : T();
          }),
          ge(_),
          ye(() => _(o.active)),
          H(() => _(o.active)),
          ve(T),
          me(T),
          m(
            'touchmove',
            (a) => {
              if (e.touchable && o.swiping && (i.move(a), w.value)) {
                (!e.loop && ((0 === o.active && p.value > 0) || (o.active === d.value - 1 && p.value < 0))) ||
                  (f(a, e.stopPropagation), k({ offset: p.value }), r || (t('dragStart', { index: b.value }), (r = !0)));
              }
            },
            { target: n },
          ),
          () => {
            var t;
            return ue('div', { ref: l, class: $t() }, [
              ue(
                'div',
                {
                  ref: n,
                  style: D.value,
                  class: $t('track', { vertical: e.vertical }),
                  onTouchstartPassive: E,
                  onTouchend: R,
                  onTouchcancel: R,
                },
                [null == (t = a.default) ? void 0 : t.call(a)],
              ),
              a.indicator
                ? a.indicator({ active: b.value, total: d.value })
                : e.showIndicators && d.value > 1
                  ? ue('div', { class: $t('indicators', { vertical: e.vertical }) }, [Array(d.value).fill('').map(z)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [At, Mt] = o('tabs');
var It = oe({
  name: At,
  props: {
    count: u(Number),
    inited: Boolean,
    animated: Boolean,
    duration: u(d),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: u(Number),
  },
  emits: ['change'],
  setup(e, { emit: t, slots: a }) {
    const l = re(),
      n = (e) => t('change', e),
      o = () => {
        var t;
        const o = null == (t = a.default) ? void 0 : t.call(a);
        return e.animated || e.swipeable
          ? ue(
              Tt,
              {
                ref: l,
                loop: !1,
                class: Mt('track'),
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
      pe(() => e.currentIndex, r),
      ge(() => {
        r(e.currentIndex);
      }),
      Pe({ swipeRef: l }),
      () => ue('div', { class: Mt('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [_t, Nt] = o('tabs'),
  Bt = {
    type: k('line'),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: x(0),
    duration: x(0.3),
    animated: Boolean,
    ellipsis: _,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: x(0),
    background: String,
    lazyRender: _,
    showHeader: _,
    lineWidth: d,
    lineHeight: d,
    beforeChange: Function,
    swipeThreshold: x(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Ht = Symbol(_t);
var Vt = oe({
  name: _t,
  props: Bt,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: a, slots: l }) {
    let n, o, r, s, u;
    const c = re(),
      d = re(),
      v = re(),
      f = re(),
      p = yt(),
      w = S(c),
      [x, k] = bt(),
      { children: O, linkChildren: M } = N(Ht),
      I = fe({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      _ = ie(() => O.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      B = ie(() => ({ borderColor: t.color, background: t.background })),
      V = (e, t) => {
        var a;
        return null != (a = e.name) ? a : t;
      },
      z = ie(() => {
        const e = O[I.currentIndex];
        if (e) return V(e, I.currentIndex);
      }),
      Y = ie(() => $(t.offsetTop)),
      F = ie(() => (t.sticky ? Y.value + n : 0)),
      W = (e) => {
        const a = d.value,
          l = x.value;
        if (!(_.value && a && l && l[I.currentIndex])) return;
        const n = l[I.currentIndex].$el,
          o = n.offsetLeft - (a.offsetWidth - n.offsetWidth) / 2;
        (s && s(),
          (s = (function (e, t, a) {
            let l,
              n = 0;
            const o = e.scrollLeft,
              r = 0 === a ? 1 : Math.round((1e3 * a) / 16);
            let i = o;
            return (
              (function a() {
                ((i += (t - o) / r), (e.scrollLeft = i), ++n < r && (l = h(a)));
              })(),
              function () {
                g(l);
              }
            );
          })(a, o, e ? 0 : +t.duration)));
      },
      j = () => {
        const e = I.inited;
        he(() => {
          const a = x.value;
          if (!a || !a[I.currentIndex] || 'line' !== t.type || C(c.value)) return;
          const l = a[I.currentIndex].$el,
            { lineWidth: n, lineHeight: o } = t,
            r = l.offsetLeft + l.offsetWidth / 2,
            s = { width: P(n), backgroundColor: t.color, transform: `translateX(${r}px) translateX(-50%)` };
          if ((e && (s.transitionDuration = `${t.duration}s`), i(o))) {
            const e = P(o);
            ((s.height = e), (s.borderRadius = e));
          }
          I.lineStyle = s;
        });
      },
      U = (e, l) => {
        const n = ((e) => {
          const t = e < I.currentIndex ? -1 : 1;
          for (; e >= 0 && e < O.length; ) {
            if (!O[e].disabled) return e;
            e += t;
          }
        })(e);
        if (!i(n)) return;
        const o = O[n],
          s = V(o, n),
          u = null !== I.currentIndex;
        (I.currentIndex !== n && ((I.currentIndex = n), l || W(), j()),
          s !== t.active && (a('update:active', s), u && a('change', s, o.title)),
          r && !t.scrollspy && E(Math.ceil(R(c.value) - Y.value)));
      },
      G = (e, t) => {
        const a = O.findIndex((t, a) => V(t, a) === e);
        U(-1 === a ? 0 : a, t);
      },
      Z = (e = !1) => {
        if (t.scrollspy) {
          const a = O[I.currentIndex].$el;
          if (a && w.value) {
            const l = R(a, w.value) - F.value;
            ((o = !0),
              u && u(),
              (u = (function (e, t, a, l) {
                let n,
                  o = y(e);
                const r = o < t,
                  i = 0 === a ? 1 : Math.round((1e3 * a) / 16),
                  s = (t - o) / i;
                return (
                  (function a() {
                    ((o += s),
                      ((r && o > t) || (!r && o < t)) && (o = t),
                      b(e, o),
                      (r && o < t) || (!r && o > t) ? (n = h(a)) : l && (n = h(l)));
                  })(),
                  function () {
                    g(n);
                  }
                );
              })(w.value, l, e ? 0 : +t.duration, () => {
                o = !1;
              })));
          }
        }
      },
      X = (l, n, o) => {
        const { title: r, disabled: i } = O[n],
          s = V(O[n], n);
        (i ||
          (Le(t.beforeChange, {
            args: [s],
            done: () => {
              (U(n), Z());
            },
          }),
          e(l)),
          a('clickTab', { name: s, title: r, event: o, disabled: i }));
      },
      q = (e) => {
        ((r = e.isFixed), a('scroll', e));
      },
      K = () => {
        if ('line' === t.type && O.length) return ue('div', { class: Nt('line'), style: I.lineStyle }, null);
      },
      J = () => {
        var e, a, n;
        const { type: o, border: r, sticky: i } = t,
          s = [
            ue('div', { ref: i ? void 0 : v, class: [Nt('wrap'), { [L]: 'line' === o && r }] }, [
              ue(
                'div',
                {
                  ref: d,
                  role: 'tablist',
                  class: Nt('nav', [o, { shrink: t.shrink, complete: _.value }]),
                  style: B.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = l['nav-left']) ? void 0 : e.call(l),
                  O.map((e) => e.renderTitle(X)),
                  K(),
                  null == (a = l['nav-right']) ? void 0 : a.call(l),
                ],
              ),
            ]),
            null == (n = l['nav-bottom']) ? void 0 : n.call(l),
          ];
        return i ? ue('div', { ref: v }, [s]) : s;
      },
      Q = () => {
        (j(),
          he(() => {
            var e, t;
            (W(!0), null == (t = null == (e = f.value) ? void 0 : e.swipeRef.value) || t.resize());
          }));
      };
    (pe(() => [t.color, t.duration, t.lineWidth, t.lineHeight], j),
      pe(A, Q),
      pe(
        () => t.active,
        (e) => {
          e !== z.value && G(e);
        },
      ),
      pe(
        () => O.length,
        () => {
          I.inited &&
            (G(t.active),
            j(),
            he(() => {
              W(!0);
            }));
        },
      ));
    return (
      Pe({
        resize: Q,
        scrollTo: (e) => {
          he(() => {
            (G(e), Z(!0));
          });
        },
      }),
      ye(j),
      H(j),
      D(() => {
        (G(t.active, !0),
          he(() => {
            ((I.inited = !0), v.value && (n = T(v.value).height), W(!0));
          }));
      }),
      wt(c, j),
      m(
        'scroll',
        () => {
          if (t.scrollspy && !o) {
            const e = (() => {
              for (let e = 0; e < O.length; e++) {
                const { top: t } = T(O[e].$el);
                if (t > F.value) return 0 === e ? 0 : e - 1;
              }
              return O.length - 1;
            })();
            U(e);
          }
        },
        { target: w, passive: !0 },
      ),
      M({
        id: p,
        props: t,
        setLine: j,
        scrollable: _,
        onRendered: (e, t) => a('rendered', e, t),
        currentName: z,
        setTitleRefs: k,
        scrollIntoView: W,
      }),
      () =>
        ue('div', { ref: c, class: Nt([t.type]) }, [
          t.showHeader
            ? t.sticky
              ? ue(kt, { container: c.value, offsetTop: Y.value, onScroll: q }, { default: () => [J()] })
              : J()
            : null,
          ue(
            It,
            {
              ref: f,
              count: O.length,
              inited: I.inited,
              animated: t.animated,
              duration: t.duration,
              swipeable: t.swipeable,
              lazyRender: t.lazyRender,
              currentIndex: I.currentIndex,
              onChange: U,
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
  Lt = Symbol(),
  Et = (e) => {
    const t = be(Lt, null);
    (we(Pt, e),
      we(
        Lt,
        ie(() => (null == t || t.value) && e.value),
      ));
  },
  [Rt, zt] = o('tab'),
  Yt = oe({
    name: Rt,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: d,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: _,
    },
    setup(e, { slots: t }) {
      const a = ie(() => {
          const t = {},
            { type: a, color: l, disabled: n, isActive: o, activeColor: r, inactiveColor: i } = e;
          l && 'card' === a && ((t.borderColor = l), n || (o ? (t.backgroundColor = l) : (t.color = l)));
          const s = o ? r : i;
          return (s && (t.color = s), t);
        }),
        l = () => {
          const a = ue('span', { class: zt('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
          return e.dot || (i(e.badge) && '' !== e.badge)
            ? ue(z, { dot: e.dot, content: e.badge, showZero: e.showZeroBadge }, { default: () => [a] })
            : a;
        };
      return () =>
        ue(
          'div',
          {
            id: e.id,
            role: 'tab',
            class: [zt([e.type, { grow: e.scrollable && !e.shrink, shrink: e.shrink, active: e.isActive, disabled: e.disabled }])],
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
  [Ft, Wt] = o('swipe-item');
const jt = I(
    oe({
      name: Ft,
      setup(e, { slots: t }) {
        let a;
        const l = fe({ offset: 0, inited: !1, mounted: !1 }),
          { parent: n, index: o } = v(Ct);
        if (!n) return;
        const r = ie(() => {
            const e = {},
              { vertical: t } = n.props;
            return (
              n.size.value && (e[t ? 'height' : 'width'] = `${n.size.value}px`),
              l.offset && (e.transform = `translate${t ? 'Y' : 'X'}(${l.offset}px)`),
              e
            );
          }),
          i = ie(() => {
            const { loop: e, lazyRender: t } = n.props;
            if (!t || a) return !0;
            if (!l.mounted) return !1;
            const r = n.activeIndicator.value,
              i = n.count.value - 1,
              s = 0 === r && e ? i : r - 1,
              u = r === i && e ? 0 : r + 1;
            return ((a = o.value === r || o.value === s || o.value === u), a);
          });
        return (
          ge(() => {
            he(() => {
              l.mounted = !0;
            });
          }),
          Pe({
            setOffset: (e) => {
              l.offset = e;
            },
          }),
          () => {
            var e;
            return ue('div', { class: Wt(), style: r.value }, [i.value ? (null == (e = t.default) ? void 0 : e.call(t)) : null]);
          }
        );
      },
    }),
  ),
  [Ut, Gt] = o('tab');
const Zt = I(
    oe({
      name: Ut,
      props: r({}, t, {
        dot: Boolean,
        name: d,
        badge: d,
        title: String,
        disabled: Boolean,
        titleClass: Y,
        titleStyle: [String, Object],
        showZeroBadge: _,
      }),
      setup(e, { slots: t }) {
        const a = yt(),
          l = re(!1),
          n = ce(),
          { parent: o, index: r } = v(Ht);
        if (!o) return;
        const i = () => {
            var t;
            return null != (t = e.name) ? t : r.value;
          },
          s = ie(() => {
            const t = i() === o.currentName.value;
            return (
              t &&
                !l.value &&
                ((l.value = !0),
                o.props.lazyRender &&
                  he(() => {
                    o.onRendered(i(), e.title);
                  })),
              t
            );
          }),
          u = re(''),
          c = re('');
        se(() => {
          const { titleClass: t, titleStyle: a } = e;
          ((u.value = t ? ht(t) : ''),
            (c.value =
              a && 'string' != typeof a
                ? (function (e) {
                    if (!e) return '';
                    if (it(e)) return e;
                    let t = '';
                    for (const a in e) {
                      const l = e[a];
                      (it(l) || 'number' == typeof l) && (t += `${a.startsWith('--') ? a : ct(a)}:${l};`);
                    }
                    return t;
                  })(dt(a))
                : a));
        });
        const d = re(!s.value);
        return (
          pe(s, (e) => {
            e
              ? (d.value = !1)
              : V(() => {
                  d.value = !0;
                });
          }),
          pe(
            () => e.title,
            () => {
              (o.setLine(), o.scrollIntoView());
            },
          ),
          Et(s),
          Pe({
            id: a,
            renderTitle: (l) =>
              ue(
                Yt,
                xe(
                  {
                    key: a,
                    id: `${o.id}-${r.value}`,
                    ref: o.setTitleRefs(r.value),
                    style: c.value,
                    class: u.value,
                    isActive: s.value,
                    controls: a,
                    scrollable: o.scrollable.value,
                    activeColor: o.props.titleActiveColor,
                    inactiveColor: o.props.titleInactiveColor,
                    onClick: (e) => l(n.proxy, r.value, e),
                  },
                  F(o.props, ['type', 'color', 'shrink']),
                  F(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
                ),
                { title: t.title },
              ),
          }),
          () => {
            var e;
            const n = `${o.id}-${r.value}`,
              { animated: i, swipeable: u, scrollspy: c, lazyRender: v } = o.props;
            if (!t.default && !i) return;
            const m = c || s.value;
            if (i || u)
              return ue(
                jt,
                {
                  id: a,
                  role: 'tabpanel',
                  class: Gt('panel-wrapper', { inactive: d.value }),
                  tabindex: s.value ? 0 : -1,
                  'aria-hidden': !s.value,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                {
                  default: () => {
                    var e;
                    return [ue('div', { class: Gt('panel') }, [null == (e = t.default) ? void 0 : e.call(t)])];
                  },
                },
              );
            const f = l.value || c || !v ? (null == (e = t.default) ? void 0 : e.call(t)) : null;
            return De(
              ue(
                'div',
                {
                  id: a,
                  role: 'tabpanel',
                  class: Gt('panel'),
                  tabindex: m ? 0 : -1,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                [f],
              ),
              [[ke, m]],
            );
          }
        );
      },
    }),
  ),
  Xt = I(Vt),
  [qt] = o('picker-group'),
  Kt = Symbol(qt);
r({ tabs: c(), activeTab: x(0), nextStepText: String, showToolbar: _ }, at);
const Jt = r(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: x(44),
    showToolbar: _,
    swipeDuration: x(1e3),
    visibleOptionNum: x(6),
  },
  at,
);
const Qt = I(
    oe({
      name: We,
      props: r({}, Jt, { columns: c(), modelValue: c(), toolbarPosition: k('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: a }) {
        const l = re(),
          n = re(e.modelValue.slice(0)),
          { parent: o } = v(Kt),
          { children: s, linkChildren: u } = N(Qe);
        u();
        const c = ie(() =>
            (function (e) {
              return r({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          d = ie(() => $(e.optionHeight)),
          p = ie(() =>
            (function (e, t) {
              const a = e[0];
              if (a) {
                if (Array.isArray(a)) return 'multiple';
                if (t.children in a) return 'cascade';
              }
              return 'default';
            })(e.columns, c.value),
          ),
          h = ie(() => {
            const { columns: t } = e;
            switch (p.value) {
              case 'multiple':
                return t;
              case 'cascade':
                return (function (e, t, a) {
                  const l = [];
                  let n = { [t.children]: e },
                    o = 0;
                  for (; n && n[t.children]; ) {
                    const e = n[t.children],
                      r = a.value[o];
                    ((n = i(r) ? qe(e, r, t) : void 0), !n && e.length && (n = qe(e, Ge(e)[t.value], t)), o++, l.push(e));
                  }
                  return l;
                })(t, c.value, n);
              default:
                return [t];
            }
          }),
          g = ie(() => h.value.some((e) => e.length)),
          y = ie(() => h.value.map((e, t) => qe(e, n.value[t], c.value))),
          b = ie(() => h.value.map((e, t) => e.findIndex((e) => e[c.value.value] === n.value[t]))),
          w = (e, t) => {
            if (n.value[e] !== t) {
              const a = n.value.slice(0);
              ((a[e] = t), (n.value = a));
            }
          },
          D = () => ({ selectedValues: n.value.slice(0), selectedOptions: y.value, selectedIndexes: b.value }),
          x = () => {
            s.forEach((e) => e.stopMomentum());
            const e = D();
            return (
              he(() => {
                const e = D();
                t('confirm', e);
              }),
              e
            );
          },
          k = () => t('cancel', D()),
          S = () =>
            h.value.map((l, o) =>
              ue(
                et,
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
                      (w(a, e),
                        'cascade' === p.value &&
                          n.value.forEach((e, t) => {
                            const a = h.value[t];
                            Xe(a, e, c.value) || w(t, a.length ? a[0][c.value.value] : void 0);
                          }),
                        he(() => {
                          t('change', r({ columnIndex: a }, D()));
                        }));
                    })(e, o),
                  onClickOption: (e) =>
                    ((e, a) => {
                      const l = { columnIndex: a, currentOption: e };
                      (t('clickOption', r(D(), l)), t('scrollInto', l));
                    })(e, o),
                  onScrollInto: (e) => {
                    t('scrollInto', { currentOption: e, columnIndex: o });
                  },
                },
                { option: a.option },
              ),
            ),
          O = (e) => {
            if (g.value) {
              const t = { height: `${d.value}px` },
                a = { backgroundSize: `100% ${(e - d.value) / 2}px` };
              return [ue('div', { class: je('mask'), style: a }, null), ue('div', { class: [W, je('frame')], style: t }, null)];
            }
          },
          C = () => {
            const t = d.value * +e.visibleOptionNum,
              n = { height: `${t}px` };
            return e.loading || g.value || !a.empty ? ue('div', { ref: l, class: je('columns'), style: n }, [S(), O(t)]) : a.empty();
          },
          T = () => {
            if (e.showToolbar && !o) return ue(ot, xe(F(e, nt), { onConfirm: x, onCancel: k }), F(a, lt));
          },
          A = (e) => {
            e.forEach((e, t) => {
              e.length && !Xe(e, n.value[t], c.value) && w(t, Ge(e)[c.value.value]);
            });
          };
        let M;
        (pe(h, (e) => A(e), { immediate: !0 }),
          pe(
            () => e.modelValue,
            (t) => {
              (j(t, n.value) || j(t, M) || ((n.value = t.slice(0)), (M = t.slice(0))), 0 === e.modelValue.length && A(h.value));
            },
            { deep: !0 },
          ),
          pe(
            n,
            (a) => {
              j(a, e.modelValue) || ((M = a.slice(0)), t('update:modelValue', M));
            },
            { immediate: !0 },
          ),
          m('touchmove', f, { target: l }));
        return (
          Pe({ confirm: x, getSelectedOptions: () => y.value }),
          () => {
            var t, l;
            return ue('div', { class: je() }, [
              'top' === e.toolbarPosition ? T() : null,
              e.loading ? ue(Ee, { class: je('loading') }, null) : null,
              null == (t = a['columns-top']) ? void 0 : t.call(a),
              C(),
              null == (l = a['columns-bottom']) ? void 0 : l.call(a),
              'bottom' === e.toolbarPosition ? T() : null,
            ]);
          }
        );
      },
    }),
  ),
  [ea, ta] = o('cell'),
  aa = {
    tag: k('div'),
    icon: String,
    size: String,
    title: d,
    value: d,
    label: d,
    center: Boolean,
    isLink: Boolean,
    border: _,
    iconPrefix: String,
    valueClass: Y,
    labelClass: Y,
    titleClass: Y,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const la = I(
  oe({
    name: ea,
    props: r({}, aa, t),
    setup(e, { slots: t }) {
      const l = a(),
        n = () => {
          if (t.label || i(e.label)) return ue('div', { class: [ta('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var a;
          if (t.title || i(e.title)) {
            const l = null == (a = t.title) ? void 0 : a.call(t);
            if (Array.isArray(l) && 0 === l.length) return;
            return ue('div', { class: [ta('title'), e.titleClass], style: e.titleStyle }, [l || ue('span', null, [e.title]), n()]);
          }
        },
        r = () => {
          const a = t.value || t.default;
          if (a || i(e.value)) return ue('div', { class: [ta('value'), e.valueClass] }, [a ? a() : ue('span', null, [e.value])]);
        },
        s = () => {
          if (t['right-icon']) return t['right-icon']();
          if (e.isLink) {
            const t = e.arrowDirection && 'right' !== e.arrowDirection ? `arrow-${e.arrowDirection}` : 'arrow';
            return ue(U, { name: t, class: ta('right-icon') }, null);
          }
        };
      return () => {
        var a;
        const { tag: n, size: i, center: u, border: c, isLink: d, required: v } = e,
          m = null != (a = e.clickable) ? a : d,
          f = { center: u, required: !!v, clickable: m, borderless: !c };
        return (
          i && (f[i] = !!i),
          ue(
            n,
            { class: ta(f), role: m ? 'button' : void 0, tabindex: m ? 0 : void 0, onClick: l },
            {
              default: () => {
                var a;
                return [
                  t.icon ? t.icon() : e.icon ? ue(U, { name: e.icon, class: ta('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
                  o(),
                  r(),
                  s(),
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
function na(e) {
  return Array.isArray(e) ? !e.length : 0 !== e && !e;
}
function oa(e, t) {
  const { message: a } = t;
  return X(a) ? a(e, t) : a || '';
}
function ra({ target: e }) {
  e.composing = !0;
}
function ia({ target: e }) {
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function sa(e) {
  return [...e].length;
}
function ua(e, t) {
  return [...e].slice(0, t).join('');
}
const [ca, da] = o('field'),
  va = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: d,
    max: Number,
    min: Number,
    formatter: Function,
    clearIcon: k('clear'),
    modelValue: x(''),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: k('focus'),
    formatTrigger: k('onChange'),
    spellcheck: { type: Boolean, default: null },
    error: { type: Boolean, default: null },
    disabled: { type: Boolean, default: null },
    readonly: { type: Boolean, default: null },
    inputmode: String,
  };
const ma = I(
  oe({
    name: ca,
    props: r({}, aa, va, {
      rows: d,
      type: k('text'),
      rules: Array,
      autosize: [Boolean, Object],
      labelWidth: d,
      labelClass: Y,
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
      const l = yt(),
        n = fe({ status: 'unvalidated', focused: !1, validateMessage: '' }),
        o = re(),
        r = re(),
        u = re(),
        { parent: c } = v(J),
        d = () => {
          var t;
          return String(null != (t = e.modelValue) ? t : '');
        },
        p = (t) => (i(e[t]) ? e[t] : c && i(c.props[t]) ? c.props[t] : void 0),
        h = ie(() => {
          const t = p('readonly');
          if (e.clearable && !t) {
            const t = '' !== d(),
              a = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && n.focused);
            return t && a;
          }
          return !1;
        }),
        g = ie(() => (u.value && a.input ? u.value() : e.modelValue)),
        y = ie(() => {
          var t;
          const a = p('required');
          return 'auto' === a ? (null == (t = e.rules) ? void 0 : t.some((e) => e.required)) : a;
        }),
        b = (e) =>
          e.reduce(
            (e, t) =>
              e.then(() => {
                if ('failed' === n.status) return;
                let { value: e } = g;
                if (
                  (t.formatter && (e = t.formatter(e, t)),
                  !(function (e, t) {
                    if (na(e)) {
                      if (t.required) return !1;
                      if (!1 === t.validateEmpty) return !0;
                    }
                    return !(t.pattern && !t.pattern.test(String(e)));
                  })(e, t))
                )
                  return ((n.status = 'failed'), void (n.validateMessage = oa(e, t)));
                if (t.validator) {
                  if (na(e) && !1 === t.validateEmpty) return;
                  return (function (e, t) {
                    return new Promise((a) => {
                      const l = t.validator(e, t);
                      q(l) ? l.then(a) : a(l);
                    });
                  })(e, t).then((a) => {
                    a && 'string' == typeof a
                      ? ((n.status = 'failed'), (n.validateMessage = a))
                      : !1 === a && ((n.status = 'failed'), (n.validateMessage = oa(e, t)));
                  });
                }
              }),
            Promise.resolve(),
          ),
        w = () => {
          ((n.status = 'unvalidated'), (n.validateMessage = ''));
        },
        D = () => t('endValidate', { status: n.status, message: n.validateMessage }),
        x = (a = e.rules) =>
          new Promise((l) => {
            (w(),
              a
                ? (t('startValidate'),
                  b(a).then(() => {
                    'failed' === n.status ? (l({ name: e.name, message: n.validateMessage }), D()) : ((n.status = 'passed'), l(), D());
                  }))
                : l());
          }),
        k = (t) => {
          if (c && e.rules) {
            const { validateTrigger: a } = c.props,
              l = Q(a).includes(t),
              n = e.rules.filter((e) => (e.trigger ? Q(e.trigger).includes(t) : l));
            n.length && x(n);
          }
        },
        S = (a, l = 'onChange') => {
          var r, u;
          const c = a;
          a = ((t) => {
            var a;
            const { maxlength: l } = e;
            if (i(l) && sa(t) > +l) {
              const e = d();
              if (e && sa(e) === +l) return e;
              const r = null == (a = o.value) ? void 0 : a.selectionEnd;
              if (n.focused && r) {
                const e = [...t],
                  a = e.length - +l;
                return (e.splice(r - a, a), e.join(''));
              }
              return ua(t, +l);
            }
            return t;
          })(a);
          const v = c.length - a.length;
          if ('number' === e.type || 'digit' === e.type) {
            const t = 'number' === e.type;
            if (((a = K(a, t, t)), 'onBlur' === l && '' !== a && (void 0 !== e.min || void 0 !== e.max))) {
              const t = s(+a, null != (r = e.min) ? r : -1 / 0, null != (u = e.max) ? u : 1 / 0);
              +a !== t && (a = t.toString());
            }
          }
          let m = 0;
          if (e.formatter && l === e.formatTrigger) {
            const { formatter: t, maxlength: l } = e;
            if (((a = t(a)), i(l) && sa(a) > +l && (a = ua(a, +l)), o.value && n.focused)) {
              const { selectionEnd: e } = o.value,
                a = ua(c, e);
              m = t(a).length - a.length;
            }
          }
          if (o.value && o.value.value !== a)
            if (n.focused) {
              let { selectionStart: e, selectionEnd: t } = o.value;
              if (((o.value.value = a), i(e) && i(t))) {
                const l = a.length;
                (v ? ((e -= v), (t -= v)) : m && ((e += m), (t += m)), o.value.setSelectionRange(Math.min(e, l), Math.min(t, l)));
              }
            } else o.value.value = a;
          a !== e.modelValue && t('update:modelValue', a);
        },
        $ = (e) => {
          e.target.composing || S(e.target.value);
        },
        O = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.blur();
        },
        C = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.focus();
        },
        T = () => {
          const t = o.value;
          'textarea' === e.type &&
            e.autosize &&
            t &&
            (function (e, t) {
              const a = G();
              e.style.height = 'auto';
              let l = e.scrollHeight;
              if (Z(t)) {
                const { maxHeight: e, minHeight: a } = t;
                (void 0 !== e && (l = Math.min(l, e)), void 0 !== a && (l = Math.max(l, a)));
              }
              l && ((e.style.height = `${l}px`), E(a));
            })(t, e.autosize);
        },
        A = (e) => {
          ((n.focused = !0), t('focus', e), he(T), p('readonly') && O());
        },
        M = (e) => {
          ((n.focused = !1), S(d(), 'onBlur'), t('blur', e), p('readonly') || (k('onBlur'), he(T), ee()));
        },
        I = (e) => t('clickInput', e),
        _ = (e) => t('clickLeftIcon', e),
        N = (e) => t('clickRightIcon', e),
        B = ie(() => ('boolean' == typeof e.error ? e.error : !(!c || !c.props.showError || 'failed' !== n.status) || void 0)),
        H = ie(() => {
          const e = p('labelWidth'),
            t = p('labelAlign');
          if (e && 'top' !== t) return { width: P(e) };
        }),
        V = (a) => {
          if (13 === a.keyCode) {
            ((c && c.props.submitOnEnter) || 'textarea' === e.type || f(a), 'search' === e.type && O());
          }
          t('keypress', a);
        },
        L = () => e.id || `${l}-input`,
        R = () => {
          const t = da('control', [
            p('inputAlign'),
            { error: B.value, custom: !!a.input, 'min-height': 'textarea' === e.type && !e.autosize },
          ]);
          if (a.input) return ue('div', { class: t, onClick: I }, [a.input()]);
          const n = {
            id: L(),
            ref: o,
            name: e.name,
            rows: void 0 !== e.rows ? +e.rows : void 0,
            class: t,
            disabled: p('disabled'),
            readonly: p('readonly'),
            autofocus: e.autofocus,
            placeholder: e.placeholder,
            autocomplete: e.autocomplete,
            autocapitalize: e.autocapitalize,
            autocorrect: e.autocorrect,
            enterkeyhint: e.enterkeyhint,
            spellcheck: e.spellcheck,
            'aria-labelledby': e.label ? `${l}-label` : void 0,
            'data-allow-mismatch': 'attribute',
            onBlur: M,
            onFocus: A,
            onInput: $,
            onClick: I,
            onChange: ia,
            onKeypress: V,
            onCompositionend: ia,
            onCompositionstart: ra,
          };
          return 'textarea' === e.type
            ? ue('textarea', xe(n, { inputmode: e.inputmode }), null)
            : ue(
                'input',
                xe(
                  ((r = e.type),
                  (i = e.inputmode),
                  'number' === r && ((r = 'text'), null != i || (i = 'decimal')),
                  'digit' === r && ((r = 'tel'), null != i || (i = 'numeric')),
                  { type: r, inputmode: i }),
                  n,
                ),
                null,
              );
          var r, i;
        },
        z = () => {
          const t = a['right-icon'];
          if (e.rightIcon || t)
            return ue('div', { class: da('right-icon'), onClick: N }, [
              t ? t() : ue(U, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        Y = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = sa(d());
            return ue('div', { class: da('word-limit') }, [ue('span', { class: da('word-num') }, [t]), Se('/'), e.maxlength]);
          }
        },
        F = () => {
          if (c && !1 === c.props.showErrorMessage) return;
          const t = e.errorMessage || n.validateMessage;
          if (t) {
            const e = a['error-message'],
              l = p('errorMessageAlign');
            return ue('div', { class: da('error-message', l) }, [e ? e({ message: t }) : t]);
          }
        },
        W = () => [
          ue('div', { class: da('body') }, [
            R(),
            h.value && ue(U, { ref: r, name: e.clearIcon, class: da('clear') }, null),
            z(),
            a.button && ue('div', { class: da('button') }, [a.button()]),
          ]),
          Y(),
          F(),
        ];
      return (
        Pe({ blur: O, focus: C, validate: x, formValue: g, resetValidation: w, getValidationStatus: () => n.status }),
        we(te, { customValue: u, resetValidation: w, validateWithTrigger: k }),
        pe(
          () => e.modelValue,
          () => {
            (S(d()), w(), k('onChange'), he(T));
          },
        ),
        ge(() => {
          (S(d(), e.formatTrigger), he(T));
        }),
        m(
          'touchstart',
          (e) => {
            (f(e), t('update:modelValue', ''), t('clear', e));
          },
          {
            target: ie(() => {
              var e;
              return null == (e = r.value) ? void 0 : e.$el;
            }),
          },
        ),
        () => {
          const t = p('disabled'),
            n = p('labelAlign'),
            o = (() => {
              const t = a['left-icon'];
              if (e.leftIcon || t)
                return ue('div', { class: da('left-icon'), onClick: _ }, [
                  t ? t() : ue(U, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return ue(
            la,
            {
              size: e.size,
              class: da({ error: B.value, disabled: t, [`label-${n}`]: n }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: H.value,
              valueClass: da('value'),
              titleClass: [da('label', [n, { required: y.value }]), e.labelClass],
              arrowDirection: e.arrowDirection,
            },
            {
              icon: o && 'top' !== n ? () => o : null,
              title: () => {
                const t = (() => {
                  const t = p('labelWidth'),
                    n = p('labelAlign'),
                    o = p('colon') ? ':' : '';
                  return a.label
                    ? [a.label(), o]
                    : e.label
                      ? ue(
                          'label',
                          {
                            id: `${l}-label`,
                            for: a.input ? void 0 : L(),
                            'data-allow-mismatch': 'attribute',
                            onClick: (e) => {
                              (f(e), C());
                            },
                            style: 'top' === n && t ? { width: P(t) } : void 0,
                          },
                          [e.label + o],
                        )
                      : void 0;
                })();
                return 'top' === n ? [o, t].filter(Boolean) : t || [];
              },
              value: W,
              extra: a.extra,
            },
          );
        }
      );
    },
  }),
);
I(Re);
const [fa, pa, ha] = o('calendar');
function ga(e, t) {
  const a = e.getFullYear(),
    l = t.getFullYear();
  if (a === l) {
    const a = e.getMonth(),
      l = t.getMonth();
    return a === l ? 0 : a > l ? 1 : -1;
  }
  return a > l ? 1 : -1;
}
function ya(e, t) {
  const a = ga(e, t);
  if (0 === a) {
    const a = e.getDate(),
      l = t.getDate();
    return a === l ? 0 : a > l ? 1 : -1;
  }
  return a;
}
const ba = (e) => new Date(e),
  wa = (e) => (Array.isArray(e) ? e.map(ba) : ba(e));
function Da(e, t) {
  const a = ba(e);
  return (a.setDate(a.getDate() + t), a);
}
function xa(e, t) {
  const a = ba(e);
  return (a.setMonth(a.getMonth() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
function ka(e, t) {
  const a = ba(e);
  return (a.setFullYear(a.getFullYear() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
const Sa = (e) => Da(e, -1),
  $a = (e) => Da(e, 1),
  Oa = (e) => xa(e, -1),
  Ca = (e) => xa(e, 1),
  Ta = (e) => ka(e, -1),
  Aa = (e) => ka(e, 1),
  Ma = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
r({}, Jt, { modelValue: c(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Ia] = o('calendar-day');
var _a = oe({
  name: Ia,
  props: { item: u(Object), color: String, index: Number, offset: ae(0), rowHeight: String },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const l = ie(() => {
        const { item: t, index: a, color: l, offset: n, rowHeight: o } = e,
          r = { height: o };
        if ('placeholder' === t.type) return ((r.width = '100%'), r);
        if ((0 === a && (r.marginLeft = (100 * n) / 7 + '%'), l))
          switch (t.type) {
            case 'end':
            case 'start':
            case 'start-end':
            case 'multiple-middle':
            case 'multiple-selected':
              r.background = l;
              break;
            case 'middle':
              r.color = l;
          }
        return (
          t.date &&
            (function (e, t = 0) {
              const a = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                l = t + e.getDate() - 1,
                n = t + a.getDate() - 1;
              return Math.floor(l / 7) === Math.floor(n / 7);
            })(t.date, n) &&
            (r.marginBottom = 0),
          r
        );
      }),
      n = () => {
        'disabled' !== e.item.type ? t('click', e.item) : t('clickDisabledDate', e.item);
      },
      o = () => {
        const { topInfo: t } = e.item;
        if (t || a['top-info']) return ue('div', { class: pa('top-info') }, [a['top-info'] ? a['top-info'](e.item) : t]);
      },
      r = () => {
        const { bottomInfo: t } = e.item;
        if (t || a['bottom-info']) return ue('div', { class: pa('bottom-info') }, [a['bottom-info'] ? a['bottom-info'](e.item) : t]);
      },
      i = () => {
        const { item: t, color: l, rowHeight: n } = e,
          { type: i } = t,
          s = [o(), a.text ? a.text(e.item) : e.item.text, r()];
        return 'selected' === i ? ue('div', { class: pa('selected-day'), style: { width: n, height: n, background: l } }, [s]) : s;
      };
    return () => {
      const { type: t, className: a } = e.item;
      return 'placeholder' === t
        ? ue('div', { class: pa('day'), style: l.value }, null)
        : ue('div', { role: 'gridcell', style: l.value, class: [pa('day', t), a], tabindex: 'disabled' === t ? void 0 : -1, onClick: n }, [
            i(),
          ]);
    };
  },
});
const [Na] = o('calendar-month');
var Ba = oe({
  name: Na,
  props: {
    date: u(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: d,
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
    const [l, n] = le(),
      o = re(),
      r = re(),
      i = Fe(r),
      s = ie(() => {
        return ((t = e.date), ha('monthTitle', t.getFullYear(), t.getMonth() + 1));
        var t;
      }),
      u = ie(() => P(e.rowHeight)),
      c = ie(() => {
        const t = e.date.getDate(),
          a = (e.date.getDay() - (t % 7) + 8) % 7;
        return e.firstDayOfWeek ? (a + 7 - e.firstDayOfWeek) % 7 : a;
      }),
      d = ie(() => {
        return ((t = e.date.getFullYear()), (a = e.date.getMonth() + 1), 32 - new Date(t, a - 1, 32).getDate());
        var t, a;
      }),
      v = ie(() => l.value || !e.lazyRender),
      m = (t) => {
        const { type: a, minDate: l, maxDate: n, currentDate: o } = e;
        if ((l && ya(t, l) < 0) || (n && ya(t, n) > 0)) return 'disabled';
        if (null === o) return '';
        if (Array.isArray(o)) {
          if ('multiple' === a)
            return ((t) => {
              const a = (t) => e.currentDate.some((e) => 0 === ya(e, t));
              if (a(t)) {
                const e = Sa(t),
                  l = $a(t),
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
              const n = ya(t, a);
              if (!l) return 0 === n ? 'start' : '';
              const o = ya(t, l);
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
        } else if ('single' === a) return 0 === ya(t, o) ? 'selected' : '';
        return '';
      },
      f = (t) => {
        if ('range' === e.type) {
          if ('start' === t || 'end' === t) return ha(t);
          if ('start-end' === t) return `${ha('start')}/${ha('end')}`;
        }
      },
      p = () => {
        if (e.showMonthTitle)
          return ue('div', { class: pa('month-title') }, [a['month-title'] ? a['month-title']({ date: e.date, text: s.value }) : s.value]);
      },
      h = () => {
        if (e.showMark && v.value) return ue('div', { class: pa('month-mark') }, [e.date.getMonth() + 1]);
      },
      g = ie(() => {
        const e = Math.ceil((d.value + c.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      y = ie(() => {
        const t = [],
          a = e.date.getFullYear(),
          l = e.date.getMonth();
        for (let n = 1; n <= d.value; n++) {
          const o = new Date(a, l, n),
            r = m(o);
          let i = { date: o, type: r, text: n, bottomInfo: f(r) };
          (e.formatter && (i = e.formatter(i)), t.push(i));
        }
        return t;
      }),
      w = ie(() => y.value.filter((e) => 'disabled' === e.type)),
      D = (l, n) =>
        ue(
          _a,
          {
            item: l,
            index: n,
            color: e.color,
            offset: c.value,
            rowHeight: u.value,
            onClick: (e) => t('click', e),
            onClickDisabledDate: (e) => t('clickDisabledDate', e),
          },
          F(a, ['top-info', 'bottom-info', 'text']),
        );
    return (
      Pe({
        getTitle: () => s.value,
        getHeight: () => i.value,
        setVisible: n,
        scrollToDate: (e, t) => {
          if (o.value) {
            const a = T(o.value),
              l = g.value.length,
              n = ((Math.ceil((t.getDate() + c.value) / 7) - 1) * a.height) / l;
            b(e, a.top + n + e.scrollTop - T(e).top);
          }
        },
        disabledDays: w,
      }),
      () =>
        ue('div', { class: pa('month'), ref: r }, [
          p(),
          ue('div', { ref: o, role: 'grid', class: pa('days') }, [h(), (v.value ? y : g).value.map(D)]),
        ])
    );
  },
});
const [Ha] = o('calendar-header');
var Va = oe({
  name: Ha,
  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    switchMode: k('none'),
  },
  emits: ['clickSubtitle', 'panelChange'],
  setup(e, { slots: t, emit: a }) {
    const l = ie(() => e.date && e.minDate && ga(Oa(e.date), e.minDate) < 0),
      n = ie(() => e.date && e.minDate && ga(Ta(e.date), e.minDate) < 0),
      o = ie(() => e.date && e.maxDate && ga(Ca(e.date), e.maxDate) > 0),
      r = ie(() => e.date && e.maxDate && ga(Aa(e.date), e.maxDate) > 0),
      i = () => {
        if (e.showTitle) {
          const a = e.title || ha('title'),
            l = t.title ? t.title() : a;
          return ue('div', { class: pa('header-title') }, [l]);
        }
      },
      s = (e) => a('clickSubtitle', e),
      u = (e) => a('panelChange', e),
      c = (a) => {
        const i = 'year-month' === e.switchMode,
          s = t[a ? 'next-month' : 'prev-month'],
          c = t[a ? 'next-year' : 'prev-year'],
          d = a ? o.value : l.value,
          v = a ? r.value : n.value,
          m = a ? 'arrow' : 'arrow-left',
          f = a ? 'arrow-double-right' : 'arrow-double-left',
          h = ue('view', { class: pa('header-action', { disabled: d }), onClick: d ? void 0 : () => u((a ? Ca : Oa)(e.date)) }, [
            s ? s({ disabled: d }) : ue(U, { class: { [p]: !d }, name: m }, null),
          ]),
          g =
            i &&
            ue('view', { class: pa('header-action', { disabled: v }), onClick: v ? void 0 : () => u((a ? Aa : Ta)(e.date)) }, [
              c ? c({ disabled: v }) : ue(U, { class: { [p]: !v }, name: f }, null),
            ]);
        return a ? [h, g] : [g, h];
      },
      d = () => {
        if (e.showSubtitle) {
          const a = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            l = 'none' !== e.switchMode;
          return ue('div', { class: pa('header-subtitle', { 'with-switch': l }), onClick: s }, [
            l ? [c(), ue('div', { class: pa('header-subtitle-text') }, [a]), c(!0)] : a,
          ]);
        }
      },
      v = () => {
        const { firstDayOfWeek: t } = e,
          a = ha('weekdays'),
          l = [...a.slice(t, 7), ...a.slice(0, t)];
        return ue('div', { class: pa('weekdays') }, [l.map((e) => ue('span', { class: pa('weekday') }, [e]))]);
      };
    return () => ue('div', { class: pa('header') }, [i(), d(), v()]);
  },
});
const Pa = I(
  oe({
    name: fa,
    props: {
      show: Boolean,
      type: k('single'),
      switchMode: k('none'),
      title: String,
      color: String,
      round: _,
      readonly: Boolean,
      poppable: _,
      maxRange: x(null),
      position: k('bottom'),
      teleport: [String, Object],
      showMark: _,
      showTitle: _,
      formatter: Function,
      rowHeight: d,
      confirmText: String,
      rangePrompt: String,
      lazyRender: _,
      showConfirm: _,
      defaultDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: _,
      closeOnPopstate: _,
      showRangePrompt: _,
      confirmDisabledText: String,
      closeOnClickOverlay: _,
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: _,
      minDate: { type: Date, validator: ne },
      maxDate: { type: Date, validator: ne },
      firstDayOfWeek: { type: d, default: 0, validator: (e) => e >= 0 && e <= 6 },
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
      const n = ie(() => 'none' !== e.switchMode),
        o = ie(() => (e.minDate || n.value ? e.minDate : Ma())),
        r = ie(() => (e.maxDate || n.value ? e.maxDate : xa(Ma(), 6))),
        i = (e, t = o.value, a = r.value) => (t && -1 === ya(e, t) ? t : a && 1 === ya(e, a) ? a : e),
        s = (t = e.defaultDate) => {
          const { type: a, allowSameDay: l } = e;
          if (null === t) return t;
          const n = Ma();
          if ('range' === a) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === ya(t[0], n) && (t = []));
            const e = o.value,
              a = r.value;
            return [i(t[0] || n, e, a ? (l ? a : Sa(a)) : void 0), i(t[1] || (l ? n : $a(n)), e ? (l ? e : $a(e)) : void 0)];
          }
          return 'multiple' === a ? (Array.isArray(t) ? t.map((e) => i(e)) : [i(n)]) : ((t && !Array.isArray(t)) || (t = n), i(t));
        };
      let u;
      const c = re(),
        d = re(s()),
        v = re(
          (() => {
            const e = Array.isArray(d.value) ? d.value[0] : d.value;
            return e || i(Ma());
          })(),
        ),
        m = re(),
        [f, p] = bt(),
        g = ie(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        b = ie(() => {
          const e = [];
          if (!o.value || !r.value) return e;
          const t = new Date(o.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== ga(t, r.value));
          return e;
        }),
        w = ie(() => {
          if (d.value) {
            if ('range' === e.type) return !d.value[0] || !d.value[1];
            if ('multiple' === e.type) return !d.value.length;
          }
          return !d.value;
        }),
        x = () => {
          const e = y(c.value),
            a = e + u,
            l = b.value.map((e, t) => f.value[t].getHeight());
          if (a > l.reduce((e, t) => e + t, 0) && e > 0) return;
          let n,
            o = 0;
          const r = [-1, -1];
          for (let i = 0; i < b.value.length; i++) {
            const s = f.value[i];
            (o <= a &&
              o + l[i] >= e &&
              ((r[1] = i),
              n || ((n = s), (r[0] = i)),
              f.value[i].showed || ((f.value[i].showed = !0), t('monthShow', { date: s.date, title: s.getTitle() }))),
              (o += l[i]));
          }
          (b.value.forEach((e, t) => {
            const a = t >= r[0] - 1 && t <= r[1] + 1;
            f.value[t].setVisible(a);
          }),
            n && (m.value = n));
        },
        k = (e) => {
          n.value
            ? (v.value = e)
            : h(() => {
                (b.value.some((t, a) => 0 === ga(t, e) && (c.value && f.value[a].scrollToDate(c.value, e), !0)), x());
              });
        },
        S = () => {
          if (!e.poppable || e.show)
            if (d.value) {
              const t = 'single' === e.type ? d.value : d.value[0];
              ne(t) && k(t);
            } else n.value || h(x);
        },
        $ = () => {
          (e.poppable && !e.show) ||
            (n.value ||
              h(() => {
                u = Math.floor(T(c).height);
              }),
            S());
        },
        O = (e = s()) => {
          ((d.value = e), S());
        },
        C = (e) => {
          ((v.value = e), t('panelChange', { date: e }));
        },
        A = () => {
          var e;
          return t('confirm', null != (e = d.value) ? e : wa(d.value));
        },
        M = (a, l) => {
          const n = (e) => {
            ((d.value = e), t('select', wa(e)));
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
                (o && Ye(n || ha('rangePrompt', l)), t('overRange'), 1)
              );
            })(a);
            if (!l) return void n([a[0], Da(a[0], +e.maxRange - 1)]);
          }
          (n(a), l && !e.showConfirm && A());
        },
        I = ie(() =>
          f.value.reduce((e, t) => {
            var a, l;
            return (e.push(...(null != (l = null == (a = t.disabledDays) ? void 0 : a.value) ? l : [])), e);
          }, []),
        ),
        _ = (a) => {
          if (e.readonly || !a.date) return;
          const { date: l } = a,
            { type: n } = e;
          if ('range' === n) {
            if (!d.value) return void M([l]);
            const [t, a] = d.value;
            if (t && !a) {
              const a = ya(l, t);
              if (1 === a) {
                const e = ((e, t, a) => {
                  var l;
                  return null == (l = e.find((e) => -1 === ya(t, e.date) && -1 === ya(e.date, a))) ? void 0 : l.date;
                })(I.value, t, l);
                if (e) {
                  const a = Sa(e);
                  -1 === ya(t, a) ? M([t, a]) : M([l]);
                } else M([t, l], !0);
              } else -1 === a ? M([l]) : e.allowSameDay && M([l, l], !0);
            } else M([l]);
          } else if ('multiple' === n) {
            if (!d.value) return void M([l]);
            const a = d.value,
              n = a.findIndex((e) => 0 === ya(e, l));
            if (-1 !== n) {
              const [e] = a.splice(n, 1);
              t('unselect', ba(e));
            } else e.maxRange && a.length >= +e.maxRange ? Ye(e.rangePrompt || ha('rangePrompt', e.maxRange)) : M([...a, l]);
          } else M(l, !0);
        },
        N = (e) => t('clickOverlay', e),
        B = (e) => t('update:show', e),
        H = (l, i) => {
          const s = 0 !== i || !e.showSubtitle;
          return ue(
            Ba,
            xe(
              {
                ref: n.value ? m : p(i),
                date: l,
                currentDate: d.value,
                showMonthTitle: s,
                firstDayOfWeek: g.value,
                lazyRender: !n.value && e.lazyRender,
                maxDate: r.value,
                minDate: o.value,
              },
              F(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: _, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            F(a, ['top-info', 'bottom-info', 'month-title', 'text']),
          );
        },
        V = () => {
          if (a.footer) return a.footer();
          if (e.showConfirm) {
            const t = a['confirm-text'],
              n = w.value,
              o = n ? e.confirmDisabledText : e.confirmText;
            return ue(
              l,
              {
                round: !0,
                block: !0,
                type: 'primary',
                color: e.color,
                class: pa('confirm'),
                disabled: n,
                nativeType: 'button',
                onClick: A,
              },
              { default: () => [t ? t({ disabled: n }) : o || ha('confirm')] },
            );
          }
        },
        P = () => {
          var l, i;
          return ue('div', { class: pa() }, [
            ue(
              Va,
              {
                date: null == (l = m.value) ? void 0 : l.date,
                maxDate: r.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (i = m.value) ? void 0 : i.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: g.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: C,
              },
              F(a, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            ue('div', { ref: c, class: pa('body'), onScroll: n.value ? void 0 : x }, [n.value ? H(v.value, 0) : b.value.map(H)]),
            ue('div', { class: [pa('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [V()]),
          ]);
        };
      return (
        pe(() => e.show, $),
        pe(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => O(s(d.value)),
        ),
        pe(
          () => e.defaultDate,
          (e) => {
            O(e);
          },
        ),
        Pe({ reset: O, scrollToDate: k, getSelectedDate: () => d.value }),
        D($),
        () =>
          e.poppable
            ? ue(
                ze,
                {
                  show: e.show,
                  class: pa('popup'),
                  round: e.round,
                  position: e.position,
                  closeable: e.showTitle || e.showSubtitle,
                  teleport: e.teleport,
                  closeOnPopstate: e.closeOnPopstate,
                  safeAreaInsetTop: e.safeAreaInsetTop,
                  closeOnClickOverlay: e.closeOnClickOverlay,
                  onClickOverlay: N,
                  'onUpdate:show': B,
                },
                { default: P },
              )
            : P()
      );
    },
  }),
);
function La(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Ea,
  Ra = { exports: {} };
const za = La(
    (Ea ||
      ((Ea = 1),
      (Ra.exports = (function () {
        var e = 1e3,
          t = 6e4,
          a = 36e5,
          l = 'millisecond',
          n = 'second',
          o = 'minute',
          r = 'hour',
          i = 'day',
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
                r = t.clone().add(l + (o ? -1 : 1), u);
              return +(-(l + (a - n) / (o ? n - r : r - n)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (e) {
              return (
                { M: u, y: d, w: s, d: i, D: v, h: r, m: o, s: n, ms: l, Q: c }[e] ||
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
          w = {};
        w[b] = h;
        var D = '$isDayjsObject',
          x = function (e) {
            return e instanceof O || !(!e || !e[D]);
          },
          k = function e(t, a, l) {
            var n;
            if (!t) return b;
            if ('string' == typeof t) {
              var o = t.toLowerCase();
              (w[o] && (n = o), a && ((w[o] = a), (n = o)));
              var r = t.split('-');
              if (!n && r.length > 1) return e(r[0]);
            } else {
              var i = t.name;
              ((w[i] = t), (n = i));
            }
            return (!l && n && (b = n), n || (!l && b));
          },
          S = function (e, t) {
            if (x(e)) return e.clone();
            var a = 'object' == typeof t ? t : {};
            return ((a.date = e), (a.args = arguments), new O(a));
          },
          $ = y;
        (($.l = k),
          ($.i = x),
          ($.w = function (e, t) {
            return S(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
          }));
        var O = (function () {
            function h(e) {
              ((this.$L = k(e.locale, null, !0)), this.parse(e), (this.$x = this.$x || e.x || {}), (this[D] = !0));
            }
            var g = h.prototype;
            return (
              (g.parse = function (e) {
                ((this.$d = (function (e) {
                  var t = e.date,
                    a = e.utc;
                  if (null === t) return new Date(NaN);
                  if ($.u(t)) return new Date();
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
                return $;
              }),
              (g.isValid = function () {
                return !(this.$d.toString() === m);
              }),
              (g.isSame = function (e, t) {
                var a = S(e);
                return this.startOf(t) <= a && a <= this.endOf(t);
              }),
              (g.isAfter = function (e, t) {
                return S(e) < this.startOf(t);
              }),
              (g.isBefore = function (e, t) {
                return this.endOf(t) < S(e);
              }),
              (g.$g = function (e, t, a) {
                return $.u(e) ? this[t] : this.set(a, e);
              }),
              (g.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (g.valueOf = function () {
                return this.$d.getTime();
              }),
              (g.startOf = function (e, t) {
                var a = this,
                  l = !!$.u(t) || t,
                  c = $.p(e),
                  m = function (e, t) {
                    var n = $.w(a.$u ? Date.UTC(a.$y, t, e) : new Date(a.$y, t, e), a);
                    return l ? n : n.endOf(i);
                  },
                  f = function (e, t) {
                    return $.w(a.toDate()[e].apply(a.toDate('s'), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), a);
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
                      w = (p < b ? p + 7 : p) - b;
                    return m(l ? g - w : g + (6 - w), h);
                  case i:
                  case v:
                    return f(y + 'Hours', 0);
                  case r:
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
                  s = $.p(e),
                  c = 'set' + (this.$u ? 'UTC' : ''),
                  m = ((a = {}),
                  (a[i] = c + 'Date'),
                  (a[v] = c + 'Date'),
                  (a[u] = c + 'Month'),
                  (a[d] = c + 'FullYear'),
                  (a[r] = c + 'Hours'),
                  (a[o] = c + 'Minutes'),
                  (a[n] = c + 'Seconds'),
                  (a[l] = c + 'Milliseconds'),
                  a)[s],
                  f = s === i ? this.$D + (t - this.$W) : t;
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
                return this[$.p(e)]();
              }),
              (g.add = function (l, c) {
                var v,
                  m = this;
                l = Number(l);
                var f = $.p(c),
                  p = function (e) {
                    var t = S(m);
                    return $.w(t.date(t.date() + Math.round(e * l)), m);
                  };
                if (f === u) return this.set(u, this.$M + l);
                if (f === d) return this.set(d, this.$y + l);
                if (f === i) return p(1);
                if (f === s) return p(7);
                var h = ((v = {}), (v[o] = t), (v[r] = a), (v[n] = e), v)[f] || 1,
                  g = this.$d.getTime() + l * h;
                return $.w(g, this);
              }),
              (g.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (g.format = function (e) {
                var t = this,
                  a = this.$locale();
                if (!this.isValid()) return a.invalidDate || m;
                var l = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  n = $.z(this),
                  o = this.$H,
                  r = this.$m,
                  i = this.$M,
                  s = a.weekdays,
                  u = a.months,
                  c = a.meridiem,
                  d = function (e, a, n, o) {
                    return (e && (e[a] || e(t, l))) || n[a].slice(0, o);
                  },
                  v = function (e) {
                    return $.s(o % 12 || 12, e, '0');
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
                          return $.s(t.$y, 4, '0');
                        case 'M':
                          return i + 1;
                        case 'MM':
                          return $.s(i + 1, 2, '0');
                        case 'MMM':
                          return d(a.monthsShort, i, u, 3);
                        case 'MMMM':
                          return d(u, i);
                        case 'D':
                          return t.$D;
                        case 'DD':
                          return $.s(t.$D, 2, '0');
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
                          return $.s(o, 2, '0');
                        case 'h':
                          return v(1);
                        case 'hh':
                          return v(2);
                        case 'a':
                          return f(o, r, !0);
                        case 'A':
                          return f(o, r, !1);
                        case 'm':
                          return String(r);
                        case 'mm':
                          return $.s(r, 2, '0');
                        case 's':
                          return String(t.$s);
                        case 'ss':
                          return $.s(t.$s, 2, '0');
                        case 'SSS':
                          return $.s(t.$ms, 3, '0');
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
                  h = $.p(v),
                  g = S(l),
                  y = (g.utcOffset() - this.utcOffset()) * t,
                  b = this - g,
                  w = function () {
                    return $.m(p, g);
                  };
                switch (h) {
                  case d:
                    f = w() / 12;
                    break;
                  case u:
                    f = w();
                    break;
                  case c:
                    f = w() / 3;
                    break;
                  case s:
                    f = (b - y) / 6048e5;
                    break;
                  case i:
                    f = (b - y) / 864e5;
                    break;
                  case r:
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
                return m ? f : $.a(f);
              }),
              (g.daysInMonth = function () {
                return this.endOf(u).$D;
              }),
              (g.$locale = function () {
                return w[this.$L];
              }),
              (g.locale = function (e, t) {
                if (!e) return this.$L;
                var a = this.clone(),
                  l = k(e, t, !0);
                return (l && (a.$L = l), a);
              }),
              (g.clone = function () {
                return $.w(this.$d, this);
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
          C = O.prototype;
        return (
          (S.prototype = C),
          [
            ['$ms', l],
            ['$s', n],
            ['$m', o],
            ['$H', r],
            ['$W', i],
            ['$M', u],
            ['$y', d],
            ['$D', v],
          ].forEach(function (e) {
            C[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (S.extend = function (e, t) {
            return (e.$i || (e(t, O, S), (e.$i = !0)), S);
          }),
          (S.locale = k),
          (S.isDayjs = x),
          (S.unix = function (e) {
            return S(1e3 * e);
          }),
          (S.en = w[b]),
          (S.Ls = w),
          (S.p = {}),
          S
        );
      })())),
    Ra.exports),
  ),
  Ya = { class: 'form-group' },
  Fa = { class: 'counter-label' },
  Wa = { class: 'counter-controls' },
  ja = ['onClick'],
  Ua = { class: 'counter-value' },
  Ga = ['onClick'],
  Za = { class: 'form-group' },
  Xa = { class: 'counter-group' },
  qa = { class: 'counter-group' },
  Ka = { class: 'summary' },
  Ja = { class: 'summary-item' },
  Qa = { class: 'summary-value' },
  el = { class: 'summary-item' },
  tl = { class: 'summary-value' },
  al = { class: 'summary-item' },
  ll = { class: 'summary-value' },
  nl = { class: 'summary-item' },
  ol = { class: 'summary-value' },
  rl = { class: 'summary-item' },
  il = { class: 'summary-value' },
  sl = { class: 'summary-item' },
  ul = { class: 'summary-value' },
  cl = { class: 'summary' },
  dl = { class: 'summary-item' },
  vl = { class: 'summary-value' },
  ml = { class: 'summary-item' },
  fl = { class: 'summary-value' },
  pl = { class: 'summary-item' },
  hl = { class: 'summary-value' },
  gl = { class: 'summary-item' },
  yl = { class: 'summary-value' },
  bl = { class: 'summary-item' },
  wl = { class: 'summary-value' },
  Dl = { class: 'summary-item' },
  xl = { class: 'summary-value' },
  kl = Ne(
    oe({
      __name: 'calculator',
      setup(e, { expose: t }) {
        const a = be('travelDate', re('')),
          o = re([
            { label: '👨 成人', category: 'oneDayOneAdult', num: 0, simpleText: '大', fullText: '一日-成人', visible: !0 },
            { label: '👶 儿童', category: 'oneDayOneChild', num: 0, simpleText: '小', fullText: '一日-儿童', visible: !0 },
            { label: '👴 老人', category: 'oneDayOneSenior', num: 0, simpleText: '老', fullText: '一日-老人', visible: !0 },
            {
              label: '👨&👶 一大一小',
              category: 'oneDayOneAdultAndOneChild',
              num: 0,
              simpleText: '一大一小',
              fullText: '一日-一大一小',
              visible: !0,
              details: [
                { category: 'oneDayOneAdult', num: 1 },
                { category: 'oneDayOneChild', num: 1 },
              ],
            },
            {
              label: '👴&👶 一老一小',
              category: 'oneDayOneSeniorAndOneChild',
              num: 0,
              simpleText: '一老一小',
              fullText: '一日-一老一小',
              visible: !0,
              details: [
                { category: 'oneDayOneSenior', num: 1 },
                { category: 'oneDayOneChild', num: 1 },
              ],
            },
          ]),
          r = re({ standardDefault: 0.936, standard: -1, earlyBirdDefault: 0.95, earlyBird: -1, costPlatform: 0.02 });
        ((r.value.standard = r.value.standardDefault), (r.value.earlyBird = r.value.earlyBirdDefault));
        const i = re({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' }),
          s = re({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' });
        (pe([a], () => {
          const e = d().get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT');
          (e.standardRatio
            ? ((r.value.standard = e.standardRatio), (r.value.earlyBird = e.earlyBirdRatio))
            : ((r.value.standard = r.value.standardDefault), (r.value.earlyBird = r.value.earlyBirdDefault)),
            m());
        }),
          pe(
            [o, r],
            () => {
              m();
            },
            { deep: !0 },
          ));
        const u = (e, t) => {
            (0 === e.num && t < 0) || (e.num += t);
          },
          c = (e, t) => {
            (0 === r.value[e] && t < 0) || (r.value[e] = (100 * r.value[e] + 100 * t) / 100);
          };
        function d() {
          const e = n.data.filter((e) => e.travelDate === a.value);
          if (0 == e.length) return void Ye('Ticket data not found');
          const t = new Map();
          for (const a of e) {
            const e = a;
            t.set(e.touristResortTicketsCategoryFullCode, e);
          }
          return t;
        }
        const v = ie(() => {
          const e = { oneDayOneAdult: { num: 0 }, oneDayOneChild: { num: 0 }, oneDayOneSenior: { num: 0 } };
          return (
            o.value.forEach((t) => {
              t.details
                ? t.details.forEach((a) => {
                    e[a.category].num += t.num * a.num;
                  })
                : (e[t.category].num += t.num);
            }),
            e
          );
        });
        function m() {
          let e = 0,
            t = 0,
            a = 0,
            l = 0,
            n = 0,
            o = 0,
            u = 0,
            c = 0,
            m = 0,
            f = 0;
          const p = d();
          let h = p.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT');
          ((e += v.value.oneDayOneAdult.num * h.price * r.value.earlyBird),
            (t += v.value.oneDayOneAdult.num * h.price),
            (n += 0 * v.value.oneDayOneAdult.num));
          let g = p.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD');
          ((e += v.value.oneDayOneChild.num * g.price * r.value.earlyBird),
            (t += v.value.oneDayOneChild.num * g.price),
            (n += 0 * v.value.oneDayOneChild.num));
          let y = p.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR');
          ((e += v.value.oneDayOneSenior.num * y.price * r.value.earlyBird),
            (t += v.value.oneDayOneSenior.num * y.price),
            (n += 0 * v.value.oneDayOneSenior.num),
            (l = e * r.value.earlyBird),
            (a = n + l));
          const b = e - a - n;
          ((s.value.amount = e.toFixed(2)),
            (s.value.originalAmount = t.toFixed(2)),
            (s.value.costPlatform = l.toFixed(2)),
            (s.value.profit = b.toFixed(2)),
            (h = p.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')),
            (o += v.value.oneDayOneAdult.num * h.price * r.value.standard),
            (u += v.value.oneDayOneAdult.num * h.price),
            (f += 10 * v.value.oneDayOneAdult.num),
            (g = p.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')),
            (o += v.value.oneDayOneChild.num * g.price * r.value.standard),
            (u += v.value.oneDayOneChild.num * g.price),
            (f += 10 * v.value.oneDayOneChild.num),
            (y = p.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')),
            (o += v.value.oneDayOneSenior.num * y.price * r.value.standard),
            (u += v.value.oneDayOneSenior.num * y.price),
            (f += 10 * v.value.oneDayOneSenior.num),
            (m = o * r.value.costPlatform),
            (c = f + m));
          const w = o - c - f;
          ((i.value.amount = o.toFixed(2)),
            (i.value.originalAmount = u.toFixed(2)),
            (i.value.costPlatform = m.toFixed(2)),
            (i.value.commission = f.toFixed(2)),
            (i.value.totalCost = c.toFixed(2)),
            (i.value.profit = w.toFixed(2)));
        }
        m();
        const f = () => {
          function e(e) {
            return `${v.value[e].num ? v.value[e].num + o.value.find((t) => t.category === e).simpleText : ''}`;
          }
          let t = `${a.value} ${za(a.value).format('dddd')} ${e('oneDayOneAdult')}${e('oneDayOneChild')}${e('oneDayOneSenior')}`;
          const l = 5 * Math.ceil(Math.floor(Number.parseFloat(i.value.amount)) / 5),
            n = za(a.value).diff(new Date(), 'd') >= 9;
          if (n) {
            t += `\n早鸟票：${5 * Math.ceil(Number.parseFloat(s.value.amount) / 5)}`;
          }
          ((t += `\n标准票：${l}`),
            n && (t += '\n\n早鸟价格优惠，不可改签，需提前 10 天预订\n标准可改签一次'),
            navigator.clipboard.writeText(t));
        };
        return (
          t({ ratio: r, getTicketMap: d, calculate: m }),
          (e, t) => {
            const a = ma,
              n = l;
            return (
              _e(),
              $e('div', null, [
                Oe('div', Ya, [
                  t[6] || (t[6] = Oe('label', null, '选择人数', -1)),
                  (_e(!0),
                  $e(
                    Ce,
                    null,
                    Te(
                      Ae(o),
                      (e) => (
                        _e(),
                        $e('div', { class: 'counter-group', key: e.category }, [
                          Oe('span', Fa, Ie(e.label), 1),
                          Oe('div', Wa, [
                            Oe('button', { class: 'counter-btn', onClick: (t) => u(e, -1) }, '−', 8, ja),
                            Oe('span', Ua, Ie(e.num), 1),
                            Oe('button', { class: 'counter-btn', onClick: (t) => u(e, 1) }, '+', 8, Ga),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                Oe('div', Za, [
                  t[7] || (t[7] = Oe('label', null, '折扣比例', -1)),
                  Oe('div', Xa, [
                    Oe('button', { class: 'counter-btn', onClick: t[0] || (t[0] = (e) => c('standard', -0.01)) }, '−'),
                    ue(
                      a,
                      {
                        modelValue: Ae(r).standard,
                        'onUpdate:modelValue': t[1] || (t[1] = (e) => (Ae(r).standard = e)),
                        type: 'number',
                        label: '标准',
                      },
                      null,
                      8,
                      ['modelValue'],
                    ),
                    Oe('button', { class: 'counter-btn', onClick: t[2] || (t[2] = (e) => c('standard', 0.01)) }, '+'),
                  ]),
                  Oe('div', qa, [
                    Oe('button', { class: 'counter-btn', onClick: t[3] || (t[3] = (e) => c('earlyBird', -0.01)) }, '−'),
                    ue(
                      a,
                      {
                        modelValue: Ae(r).earlyBird,
                        'onUpdate:modelValue': t[4] || (t[4] = (e) => (Ae(r).earlyBird = e)),
                        type: 'number',
                        label: '早鸟',
                      },
                      null,
                      8,
                      ['modelValue'],
                    ),
                    Oe('button', { class: 'counter-btn', onClick: t[5] || (t[5] = (e) => c('earlyBird', 0.01)) }, '+'),
                  ]),
                ]),
                Oe('div', null, [
                  ue(
                    n,
                    { size: 'small', type: 'primary', onClick: f },
                    { default: Me(() => [...(t[8] || (t[8] = [Se('复制出票信息', -1)]))]), _: 1 },
                  ),
                ]),
                Oe('div', Ka, [
                  t[21] || (t[21] = Oe('h2', null, '💰 费用汇总-标准', -1)),
                  Oe('div', Ja, [
                    t[10] || (t[10] = Oe('span', { class: 'summary-label' }, '总金额', -1)),
                    Oe('span', Qa, [t[9] || (t[9] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(i).amount), 1)]),
                  ]),
                  Oe('div', el, [
                    t[12] || (t[12] = Oe('span', { class: 'summary-label' }, '官方票价', -1)),
                    Oe('span', tl, [t[11] || (t[11] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(i).originalAmount), 1)]),
                  ]),
                  Oe('div', al, [
                    t[14] || (t[14] = Oe('span', { class: 'summary-label' }, '总佣金', -1)),
                    Oe('span', ll, [t[13] || (t[13] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(i).commission), 1)]),
                  ]),
                  Oe('div', nl, [
                    t[16] || (t[16] = Oe('span', { class: 'summary-label' }, '总成本-平台', -1)),
                    Oe('span', ol, [t[15] || (t[15] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(i).costPlatform), 1)]),
                  ]),
                  Oe('div', rl, [
                    t[18] || (t[18] = Oe('span', { class: 'summary-label' }, '总成本', -1)),
                    Oe('span', il, [t[17] || (t[17] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(i).totalCost), 1)]),
                  ]),
                  Oe('div', sl, [
                    t[20] || (t[20] = Oe('span', { class: 'summary-label' }, '总利润', -1)),
                    Oe('span', ul, [t[19] || (t[19] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(i).profit), 1)]),
                  ]),
                ]),
                Oe('div', cl, [
                  t[34] || (t[34] = Oe('h2', null, '💰 费用汇总-早鸟', -1)),
                  Oe('div', dl, [
                    t[23] || (t[23] = Oe('span', { class: 'summary-label' }, '总金额', -1)),
                    Oe('span', vl, [t[22] || (t[22] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(s).amount), 1)]),
                  ]),
                  Oe('div', ml, [
                    t[25] || (t[25] = Oe('span', { class: 'summary-label' }, '官方票价', -1)),
                    Oe('span', fl, [t[24] || (t[24] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(s).originalAmount), 1)]),
                  ]),
                  Oe('div', pl, [
                    t[27] || (t[27] = Oe('span', { class: 'summary-label' }, '总佣金', -1)),
                    Oe('span', hl, [t[26] || (t[26] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(s).commission), 1)]),
                  ]),
                  Oe('div', gl, [
                    t[29] || (t[29] = Oe('span', { class: 'summary-label' }, '总成本-平台', -1)),
                    Oe('span', yl, [t[28] || (t[28] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(s).costPlatform), 1)]),
                  ]),
                  Oe('div', bl, [
                    t[31] || (t[31] = Oe('span', { class: 'summary-label' }, '总成本', -1)),
                    Oe('span', wl, [t[30] || (t[30] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(s).totalCost), 1)]),
                  ]),
                  Oe('div', Dl, [
                    t[33] || (t[33] = Oe('span', { class: 'summary-label' }, '总利润', -1)),
                    Oe('span', xl, [t[32] || (t[32] = Se(' ¥', -1)), Oe('span', null, Ie(Ae(s).profit), 1)]),
                  ]),
                ]),
              ])
            );
          }
        );
      },
    }),
    [['__scopeId', 'data-v-a4eea306']],
  ),
  Sl = { class: 'content' },
  $l = { class: 'input-group' },
  Ol = { class: 'input-wrapper' },
  Cl = { class: 'input-group' },
  Tl = oe({
    __name: 'identifyLint',
    setup(e) {
      const t = be('travelDate', re('')),
        a = re(''),
        n = re([]),
        o = re(''),
        r = re(''),
        i = re(!1),
        s = re([]),
        u = re(),
        c = {
          CHINA_ID: { fullName: '中国居民身份证', shortName: '身份证' },
          PASSPORT: { fullName: '护照', shortName: '护照' },
          HK_MACAU_PASS: { fullName: '港澳通行证（回乡证）', shortName: '回乡证' },
          TAIWAN_PASS: { fullName: '台湾通行证', shortName: '台湾通行证' },
          UNKNOWN: { fullName: '未知类型', shortName: '未知' },
        },
        d = [];
      for (const l in c) d.push({ text: c[l].fullName, value: c[l].shortName });
      s.value = [d[0].value];
      const v = (e) => {
          if (18 !== e.length) return null;
          return { birthday: `${e.slice(6, 4)}-${e.slice(10, 2)}-${e.slice(12, 2)}`, ...m(e.slice(6, 14)) };
        },
        m = (e) => {
          const a = za(t.value).diff(e, 'y');
          return a < 2
            ? { ticketType: '免票', orderPriority: 0 }
            : a <= 12
              ? { ticketType: '儿童', orderPriority: 2 }
              : a < 60
                ? { ticketType: '成人', orderPriority: 1 }
                : { ticketType: '老人', orderPriority: 3 };
        },
        f = (e) => {
          if (!e) return { type: c.UNKNOWN.shortName, valid: !1, message: '输入不能为空' };
          const t = e.trim();
          if (/^\d{15}$|^\d{17}[\dXx]$/.test(t)) {
            const e = ((e) => {
              if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(e)) return !1;
              const t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
              let a = 0;
              for (let l = 0; l < 17; l++) a += parseInt(e[l]) * t[l];
              return ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'][a % 11] === e[17].toUpperCase();
            })(t);
            return { type: c.CHINA_ID.shortName, valid: e, message: e ? '有效的身份证号码' : '身份证号码校验失败', details: v(t) };
          }
          return /^[CHM]\d{8,10}$/.test(t)
            ? { type: c.HK_MACAU_PASS.shortName }
            : ((e) => /^\d{8,10}$/.test(e))(t)
              ? { type: c.TAIWAN_PASS.shortName, valid: !0, message: '台湾通行证' }
              : ((e) => /^[EG]\d{8}$/.test(e) || /^[A-Z]{1,2}\d{6,9}$/.test(e))(t)
                ? { type: c.PASSPORT.shortName, valid: !0, message: '护照号码' }
                : { type: c.UNKNOWN.shortName, valid: !1, message: '无法识别的输入类型' };
        },
        p = () => {
          (n.value.forEach((e) => {
            const t = f(e.id);
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
            (r.value = Object.keys(e)
              .map((t) => `${t} ${e[t].length}`)
              .join('，')));
        },
        h = () => {
          const e = a.value
            .split('\n')
            .map((e) => e.trim())
            .filter((e) => '' !== e);
          n.value = e.map((e) => {
            const t = e
              .split(' ')
              .map((e) => e.trim())
              .filter((e) => '' !== e);
            return { name: t[0], id: t[1], orderPriority: 1 };
          });
        },
        g = ({ selectedValues: e }) => {
          ((u.value.idType = e[0]), y());
        },
        y = () => {
          ((i.value = !1), (u.value = {}));
        },
        b = () => {
          let e = '';
          ((e += n.value
            .map((e) => `上海乐高乐园 ${za(t.value).format('YYYY-MM-DD')} ${e.ticketType} ${e.idType} 金额\n${e.name} ${e.id}`)
            .join('\n')),
            navigator.clipboard.writeText(e));
        };
      return (e, t) => {
        const c = ma,
          v = l,
          m = Qt,
          f = ze;
        return (
          _e(),
          $e('div', Sl, [
            Oe('div', $l, [
              Oe('div', Ol, [
                ue(
                  c,
                  {
                    type: 'textarea',
                    modelValue: Ae(a),
                    'onUpdate:modelValue': t[0] || (t[0] = (e) => (He(a) ? (a.value = e) : null)),
                    rows: '10',
                    onKeyup: Be(p, ['enter']),
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                Oe('div', null, '票种统计：' + Ie(Ae(o)), 1),
                Oe('div', null, 'ID 统计：' + Ie(Ae(r)), 1),
                ue(
                  v,
                  { onClick: h, type: 'primary', size: 'small' },
                  { default: Me(() => [...(t[3] || (t[3] = [Se('分割', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  { onClick: p, type: 'primary', size: 'small' },
                  { default: Me(() => [...(t[4] || (t[4] = [Se('自动识别', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  { onClick: b, type: 'primary', size: 'small' },
                  { default: Me(() => [...(t[5] || (t[5] = [Se('复制', -1)]))]), _: 1 },
                ),
              ]),
            ]),
            Oe('div', Cl, [
              (_e(!0),
              $e(
                Ce,
                null,
                Te(
                  Ae(n),
                  (e, a) => (
                    _e(),
                    $e('div', { key: e.name }, [
                      ue(c, { modelValue: e.name, 'onUpdate:modelValue': (t) => (e.name = t), label: '姓名', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ue(c, { modelValue: e.id, 'onUpdate:modelValue': (t) => (e.id = t), label: 'ID', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ue(
                        c,
                        {
                          modelValue: e.idType,
                          'onUpdate:modelValue': (t) => (e.idType = t),
                          'is-link': '',
                          readonly: '',
                          label: '类型',
                          onClick: (t) => {
                            ((i.value = !0), (u.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      ue(c, { modelValue: e.idValid, 'onUpdate:modelValue': (t) => (e.idValid = t), label: 'ID 状态' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ue(
                        c,
                        { modelValue: e.ticketType, 'onUpdate:modelValue': (t) => (e.ticketType = t), label: '票种', type: 'text' },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue'],
                      ),
                      ue(
                        v,
                        {
                          type: 'primary',
                          size: 'small',
                          onClick: (e) =>
                            ((e) => {
                              const t = n.value[e],
                                a = t.name;
                              ((t.name = t.id), (t.id = a));
                            })(a),
                        },
                        { default: Me(() => [...(t[6] || (t[6] = [Se('互换', -1)]))]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            ue(
              f,
              { show: Ae(i), 'onUpdate:show': t[2] || (t[2] = (e) => (He(i) ? (i.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Me(() => [
                  ue(
                    m,
                    {
                      columns: d,
                      modelValue: Ae(s),
                      'onUpdate:modelValue': t[1] || (t[1] = (e) => (He(s) ? (s.value = e) : null)),
                      onCancel: y,
                      onConfirm: g,
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
  Al = [
    {
      simpleText: '核对',
      fullText: '麻烦核对信息是否有误，无误请点击确认，系统才能继续出票和发货\n确认后发一下所有出游人（含儿童）姓名+身份证号（护照号等）',
    },
    {
      simpleText: '发货',
      fullText:
        '已出票，刷身份证入园即可\n未带或无身份证，刷脸或持户口本等有效证件（可电子）走人工通道\n有问题请及时提出，看到会回复\n\n以下为 APP 绑定流程（可选）\n下载上海乐高乐园 APP，点击我的-立即绑定-查询第三方渠道订单\n\n第一行是证件号，第三行是订单号，绑定需先输入订单号，再输入证件号确认绑定\n部分订单姓名是拼音，无影响，已和官方客服确认\n绑定后，可在【游园-行程】录入人脸，刷脸入园\n入园后可在【游园-园内服务】线上预约创意工坊\n入园当天，可在【游园-行程】补差升级年卡（可接 95 折升金卡， 95 折无限乐捷通）',
    },
    { simpleText: '加 V', fullText: 'ahui_2005888，您加我吧，一般都在，没回弹我语音就行' },
    {
      simpleText: '长隆外包',
      fullText:
        '【闲鱼】https://m.tb.cn/h.7fwcB1I?tk=KZ5yfyXCOng HU071 「我在闲鱼发布了【珠海长隆海洋王国2大1小】」\n点击链接直接打开\n\n您可以问问我朋友哈，暂时我这边只能出成人的',
    },
  ],
  Ml = oe({
    __name: 'term',
    setup: (e) => (e, t) => {
      const a = l;
      return (
        _e(!0),
        $e(
          Ce,
          null,
          Te(
            Ae(Al),
            (e) => (
              _e(),
              $e('div', { key: e.fullText }, [
                Oe('div', null, [Oe('span', null, Ie(e.simpleText), 1)]),
                Oe('div', null, [
                  ue(
                    a,
                    {
                      onClick: (t) =>
                        ((e) => {
                          navigator.clipboard.writeText(e.fullText);
                        })(e),
                    },
                    { default: Me(() => [...(t[0] || (t[0] = [Se('复制', -1)]))]), _: 1 },
                    8,
                    ['onClick'],
                  ),
                ]),
              ])
            ),
          ),
          128,
        )
      );
    },
  }),
  Il = { class: 'container' },
  _l = { class: 'form-group' },
  Nl = Ne(
    oe({
      __name: 'index',
      setup(e) {
        za.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = re('calculator'),
          a = re(null),
          l = (e) => za(e).format('YYYY-MM-DD'),
          n = re(l(new Date()));
        we('travelDate', n);
        const o = re(!1),
          r = (e) => {
            ((o.value = !1), (n.value = l(e)));
          };
        return (e, l) => {
          const i = la,
            s = Pa,
            u = Zt,
            c = Xt;
          return (
            _e(),
            $e('div', Il, [
              l[3] || (l[3] = Oe('h1', null, '🎫 票务计算器', -1)),
              Oe('div', _l, [
                ue(i, { title: '选择日期', value: Ae(n), onClick: l[0] || (l[0] = (e) => (o.value = !0)) }, null, 8, ['value']),
                ue(s, { show: Ae(o), 'onUpdate:show': l[1] || (l[1] = (e) => (He(o) ? (o.value = e) : null)), onConfirm: r }, null, 8, [
                  'show',
                ]),
              ]),
              ue(
                c,
                { active: Ae(t), 'onUpdate:active': l[2] || (l[2] = (e) => (He(t) ? (t.value = e) : null)) },
                {
                  default: Me(() => [
                    ue(
                      u,
                      { title: '票务计算', name: 'calculator', key: 'calculator' },
                      { default: Me(() => [ue(kl, { ref: Ae(a) }, null, 512)]), _: 1 },
                    ),
                    ue(u, { title: '证件整理', name: 'identifyLint', key: 'identifyLint' }, { default: Me(() => [ue(Tl)]), _: 1 }),
                    ue(u, { title: '术语', name: 'term', key: 'term' }, { default: Me(() => [ue(Ml)]), _: 1 }),
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
    [['__scopeId', 'data-v-47283abf']],
  );
export { Nl as default };
