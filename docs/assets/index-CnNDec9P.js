/* empty css              */ import { r as e, a as t, u as a, B as l } from './index-COUgIB19.js';
import { t as n } from './data-CqnoJlAc.js';
import {
  c as o,
  e as r,
  i,
  a as s,
  m as u,
  b as c,
  n as d,
  u as m,
  d as v,
  p as f,
  H as p,
  r as h,
  f as g,
  h as y,
  s as b,
  j as D,
  o as w,
  k as A,
  l as N,
  q as x,
  v as _,
  g as k,
  x as O,
  y as S,
  z as T,
  A as C,
  w as I,
  t as H,
  C as $,
  D as L,
  E,
  F as M,
  G as V,
  J as G,
  K as B,
  L as P,
  M as Y,
  N as R,
  O as U,
  P as z,
  Q as F,
  I as W,
  R as j,
  S as X,
  T as q,
  U as Z,
  V as K,
  W as J,
  X as Q,
  Y as ee,
  Z as te,
  _ as ae,
  $ as le,
  a0 as ne,
} from './index-BGs1Pxv_.js';
import {
  d as oe,
  r as re,
  e as ie,
  E as se,
  j as ue,
  G as ce,
  H as de,
  I as me,
  J as ve,
  L as fe,
  w as pe,
  h as he,
  f as ge,
  M as ye,
  N as be,
  O as De,
  i as we,
  P as Ae,
  v as Ne,
  D as xe,
  c as _e,
  a as ke,
  F as Oe,
  z as Se,
  u as Te,
  t as Ce,
  o as Ie,
  k as He,
  _ as $e,
  Q as Le,
  x as Ee,
  m as Me,
} from './index-zEhYY-wm.js';
import { u as Ve, a as Ge, c as Be, L as Pe, s as Ye, P as Re, b as Ue } from './function-call-CU9Q83ub.js';
import { u as ze } from './use-height-DJDS-vZq.js';
const [Fe, We, je] = o('picker'),
  Xe = (e) => e.find((e) => !e.disabled) || e[0];
function qe(e, t) {
  for (let a = (t = s(t, 0, e.length)); a < e.length; a++) if (!e[a].disabled) return a;
  for (let a = t - 1; a >= 0; a--) if (!e[a].disabled) return a;
  return 0;
}
const Ze = (e, t, a) => void 0 !== t && e.some((e) => e[a.value] === t);
function Ke(e, t, a) {
  const l = e.findIndex((e) => e[a.value] === t);
  return e[qe(e, l)];
}
const [Je, Qe] = o('picker-column'),
  et = Symbol(Je);
var tt = oe({
  name: Je,
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
        let n = qe(e.options, a);
        const o = -n * e.optionHeight,
          r = () => {
            n > g() - 1 && (n = qe(e.options, a));
            const l = e.options[n][e.fields.value];
            l !== e.value && t('change', l);
          };
        (l && o !== d.value ? (i = r) : r(), (d.value = o));
      },
      D = () => e.readonly || !e.options.length,
      w = (t) => s(Math.round(-t / e.optionHeight), 0, g() - 1),
      A = ie(() => w(d.value)),
      N = () => {
        ((l = !1), (p.value = 0), i && (i(), (i = null)));
      },
      x = (e) => {
        if (!D()) {
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
      _ = () => {
        if (D()) return;
        const t = d.value - r,
          a = Date.now() - o;
        if (a < 300 && Math.abs(t) > 15)
          return void ((t, a) => {
            const l = Math.abs(t / a);
            t = d.value + (l / 0.003) * (t < 0 ? -1 : 1);
            const n = w(t);
            ((p.value = +e.swipeDuration), b(n));
          })(t, a);
        const n = w(d.value);
        ((p.value = 200),
          b(n),
          setTimeout(() => {
            l = !1;
          }, 0));
      },
      k = () => {
        const n = { height: `${e.optionHeight}px` };
        return e.options.map((o, r) => {
          const s = o[e.fields.text],
            { disabled: u } = o,
            c = o[e.fields.value],
            d = {
              role: 'button',
              style: n,
              tabindex: u ? -1 : 0,
              class: [Qe('item', { disabled: u, selected: c === e.value }), o.className],
              onClick: () =>
                ((a) => {
                  l || D() || ((i = null), (p.value = 200), b(a), t('clickOption', e.options[a]));
                })(r),
            },
            m = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: s };
          return ue('li', d, [a.option ? a.option(o, r) : ue('div', m, null)]);
        });
      };
    return (
      m(et),
      Ge({ stopMomentum: N }),
      se(() => {
        const t = l ? Math.floor(-d.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          a = qe(e.options, t),
          n = -a * e.optionHeight;
        (l && a < t && N(), (d.value = n));
      }),
      v(
        'touchmove',
        (a) => {
          if (D()) return;
          (h.move(a), h.isVertical() && ((l = !0), f(a, !0)));
          const i = s(n + h.deltaY.value, -g() * e.optionHeight, e.optionHeight),
            u = w(i);
          (u !== A.value && t('scrollInto', e.options[u]), (d.value = i));
          const c = Date.now();
          c - o > 300 && ((o = c), (r = i));
        },
        { target: u },
      ),
      () =>
        ue('div', { ref: u, class: Qe(), onTouchstartPassive: x, onTouchend: _, onTouchcancel: _ }, [
          ue(
            'ul',
            {
              ref: c,
              style: {
                transform: `translate3d(0, ${d.value + y()}px, 0)`,
                transitionDuration: `${p.value}ms`,
                transitionProperty: p.value ? 'all' : 'none',
              },
              class: Qe('wrapper'),
              onTransitionend: N,
            },
            [k()],
          ),
        ])
    );
  },
});
const [at] = o('picker-toolbar'),
  lt = { title: String, cancelButtonText: String, confirmButtonText: String },
  nt = ['cancel', 'confirm', 'title', 'toolbar'],
  ot = Object.keys(lt);
var rt = oe({
  name: at,
  props: lt,
  emits: ['confirm', 'cancel'],
  setup(e, { emit: t, slots: a }) {
    const l = () => t('cancel'),
      n = () => t('confirm'),
      o = () => {
        var t;
        const n = null != (t = e.cancelButtonText) ? t : je('cancel');
        if (a.cancel || n) return ue('button', { type: 'button', class: [We('cancel'), p], onClick: l }, [a.cancel ? a.cancel() : n]);
      },
      r = () => {
        var t;
        const l = null != (t = e.confirmButtonText) ? t : je('confirm');
        if (a.confirm || l) return ue('button', { type: 'button', class: [We('confirm'), p], onClick: n }, [a.confirm ? a.confirm() : l]);
      };
    return () =>
      ue('div', { class: We('toolbar') }, [
        a.toolbar
          ? a.toolbar()
          : [o(), a.title ? a.title() : e.title ? ue('div', { class: [We('title'), 'van-ellipsis'] }, [e.title]) : void 0, r()],
      ]);
  },
});
/**
 * @vue/shared v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const it = Array.isArray,
  st = (e) => 'string' == typeof e,
  ut = (e) => null !== e && 'object' == typeof e,
  ct = /\B([A-Z])/g,
  dt = ((e) => {
    const t = Object.create(null);
    return (a) => t[a] || (t[a] = e(a));
  })((e) => e.replace(ct, '-$1').toLowerCase());
function mt(e) {
  if (it(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const l = e[a],
        n = st(l) ? ht(l) : mt(l);
      if (n) for (const e in n) t[e] = n[e];
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
  else if (it(e))
    for (let a = 0; a < e.length; a++) {
      const l = gt(e[a]);
      l && (t += l + ' ');
    }
  else if (ut(e)) for (const a in e) e[a] && (t += a + ' ');
  return t.trim();
}
let yt = 0;
function bt() {
  const e = ce(),
    { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
  return `${t}-${++yt}`;
}
function Dt() {
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
  if (!D || !window.IntersectionObserver) return;
  const a = new IntersectionObserver(
      (e) => {
        t(e[0].intersectionRatio > 0);
      },
      { root: document.body },
    ),
    l = () => {
      e.value && a.unobserve(e.value);
    };
  (me(l),
    ve(l),
    w(() => {
      e.value && a.observe(e.value);
    }));
}
const [At, Nt] = o('sticky');
const xt = I(
    oe({
      name: At,
      props: { zIndex: d, position: N('top'), container: Object, offsetTop: A(0), offsetBottom: A(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: a }) {
        const l = re(),
          n = x(l),
          o = fe({ fixed: !1, width: 0, height: 0, transform: 0 }),
          i = re(!1),
          s = ie(() => _('top' === e.position ? e.offsetTop : e.offsetBottom)),
          u = ie(() => {
            if (i.value) return;
            const { fixed: e, height: t, width: a } = o;
            return e ? { width: `${a}px`, height: `${t}px` } : void 0;
          }),
          c = ie(() => {
            if (!o.fixed || i.value) return;
            const t = r(k(e.zIndex), { width: `${o.width}px`, height: `${o.height}px`, [e.position]: `${s.value}px` });
            return (o.transform && (t.transform = `translate3d(0, ${o.transform}px, 0)`), t);
          }),
          d = () => {
            if (!l.value || O(l)) return;
            const { container: a, position: n } = e,
              r = S(l),
              i = y(window);
            if (((o.width = r.width), (o.height = r.height), 'top' === n))
              if (a) {
                const e = S(a),
                  t = e.bottom - s.value - o.height;
                ((o.fixed = s.value > r.top && e.bottom > 0), (o.transform = t < 0 ? t : 0));
              } else o.fixed = s.value > r.top;
            else {
              const { clientHeight: e } = document.documentElement;
              if (a) {
                const t = S(a),
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
          v('scroll', d, { target: n, passive: !0 }),
          wt(l, d),
          pe([T, C], () => {
            l.value &&
              !O(l) &&
              o.fixed &&
              ((i.value = !0),
              he(() => {
                const e = S(l);
                ((o.width = e.width), (o.height = e.height), (i.value = !1));
              }));
          }),
          () => {
            var e;
            return ue('div', { ref: l, style: u.value }, [
              ue('div', { class: Nt({ fixed: o.fixed && !i.value }), style: c.value }, [null == (e = a.default) ? void 0 : e.call(a)]),
            ]);
          }
        );
      },
    }),
  ),
  [_t, kt] = o('swipe'),
  Ot = {
    loop: H,
    width: d,
    height: d,
    vertical: Boolean,
    autoplay: A(0),
    duration: A(500),
    touchable: H,
    lazyRender: Boolean,
    initialSwipe: A(0),
    indicatorColor: String,
    showIndicators: H,
    stopPropagation: H,
  },
  St = Symbol(_t);
const Tt = I(
    oe({
      name: _t,
      props: Ot,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: a }) {
        const l = re(),
          n = re(),
          o = fe({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let r = !1;
        const i = Ve(),
          { children: u, linkChildren: c } = $(St),
          d = ie(() => u.length),
          m = ie(() => o[e.vertical ? 'height' : 'width']),
          p = ie(() => (e.vertical ? i.deltaY.value : i.deltaX.value)),
          h = ie(() => {
            if (o.rect) {
              return (e.vertical ? o.rect.height : o.rect.width) - m.value * d.value;
            }
            return 0;
          }),
          g = ie(() => (m.value ? Math.ceil(Math.abs(h.value) / m.value) : d.value)),
          y = ie(() => d.value * m.value),
          b = ie(() => (o.active + d.value) % d.value),
          D = ie(() => {
            const t = e.vertical ? 'vertical' : 'horizontal';
            return i.direction.value === t;
          }),
          w = ie(() => {
            const t = {
              transitionDuration: `${o.swiping ? 0 : e.duration}ms`,
              transform: `translate${e.vertical ? 'Y' : 'X'}(${+o.offset.toFixed(2)}px)`,
            };
            if (m.value) {
              const a = e.vertical ? 'height' : 'width',
                l = e.vertical ? 'width' : 'height';
              ((t[a] = `${y.value}px`), (t[l] = e[l] ? `${e[l]}px` : ''));
            }
            return t;
          }),
          A = (t, a = 0) => {
            let l = t * m.value;
            e.loop || (l = Math.min(l, -h.value));
            let n = a - l;
            return (e.loop || (n = s(n, h.value, 0)), n);
          },
          N = ({ pace: a = 0, offset: l = 0, emitChange: n }) => {
            if (d.value <= 1) return;
            const { active: r } = o,
              i = ((t) => {
                const { active: a } = o;
                return t ? (e.loop ? s(a + t, -1, d.value) : s(a + t, 0, g.value)) : a;
              })(a),
              c = A(i, l);
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
          x = () => {
            ((o.swiping = !0), o.active <= -1 ? N({ pace: d.value }) : o.active >= d.value && N({ pace: -d.value }));
          },
          _ = () => {
            (x(),
              i.reset(),
              M(() => {
                ((o.swiping = !1), N({ pace: 1, emitChange: !0 }));
              }));
          };
        let k;
        const S = () => clearTimeout(k),
          I = () => {
            (S(),
              +e.autoplay > 0 &&
                d.value > 1 &&
                (k = setTimeout(() => {
                  (_(), I());
                }, +e.autoplay)));
          },
          H = (t = +e.initialSwipe) => {
            if (!l.value) return;
            const a = () => {
              var a, n;
              if (!O(l)) {
                const t = { width: l.value.offsetWidth, height: l.value.offsetHeight };
                ((o.rect = t), (o.width = +(null != (a = e.width) ? a : t.width)), (o.height = +(null != (n = e.height) ? n : t.height)));
              }
              (d.value && -1 === (t = Math.min(d.value - 1, t)) && (t = d.value - 1),
                (o.active = t),
                (o.swiping = !0),
                (o.offset = A(t)),
                u.forEach((e) => {
                  e.setOffset(0);
                }),
                I());
            };
            O(l) ? he().then(a) : a();
          },
          V = () => H(o.active);
        let G;
        const B = (t) => {
            !e.touchable || t.touches.length > 1 || (i.start(t), (r = !1), (G = Date.now()), S(), x());
          },
          P = () => {
            if (!e.touchable || !o.swiping) return;
            const a = Date.now() - G,
              l = p.value / a;
            if ((Math.abs(l) > 0.25 || Math.abs(p.value) > m.value / 2) && D.value) {
              const t = e.vertical ? i.offsetY.value : i.offsetX.value;
              let a = 0;
              ((a = e.loop ? (t > 0 ? (p.value > 0 ? -1 : 1) : 0) : -Math[p.value > 0 ? 'ceil' : 'floor'](p.value / m.value)),
                N({ pace: a, emitChange: !0 }));
            } else p.value && N({ pace: 0 });
            ((r = !1), (o.swiping = !1), t('dragEnd', { index: b.value }), I());
          },
          Y = (t, a) => {
            const l = a === b.value,
              n = l ? { backgroundColor: e.indicatorColor } : void 0;
            return ue('i', { style: n, class: kt('indicator', { active: l }) }, null);
          };
        return (
          Ge({
            prev: () => {
              (x(),
                i.reset(),
                M(() => {
                  ((o.swiping = !1), N({ pace: -1, emitChange: !0 }));
                }));
            },
            next: _,
            state: o,
            resize: V,
            swipeTo: (t, a = {}) => {
              (x(),
                i.reset(),
                M(() => {
                  let l;
                  ((l = e.loop && t === d.value ? (0 === o.active ? 0 : t) : t % d.value),
                    a.immediate
                      ? M(() => {
                          o.swiping = !1;
                        })
                      : (o.swiping = !1),
                    N({ pace: l - o.active, emitChange: !0 }));
                }));
            },
          }),
          c({ size: m, props: e, count: d, activeIndicator: b }),
          pe(
            () => e.initialSwipe,
            (e) => H(+e),
          ),
          pe(d, () => H(o.active)),
          pe(() => e.autoplay, I),
          pe([T, C, () => e.width, () => e.height], V),
          pe(L(), (e) => {
            'visible' === e ? I() : S();
          }),
          ge(H),
          ye(() => H(o.active)),
          E(() => H(o.active)),
          me(S),
          ve(S),
          v(
            'touchmove',
            (a) => {
              if (e.touchable && o.swiping && (i.move(a), D.value)) {
                (!e.loop && ((0 === o.active && p.value > 0) || (o.active === d.value - 1 && p.value < 0))) ||
                  (f(a, e.stopPropagation), N({ offset: p.value }), r || (t('dragStart', { index: b.value }), (r = !0)));
              }
            },
            { target: n },
          ),
          () => {
            var t;
            return ue('div', { ref: l, class: kt() }, [
              ue(
                'div',
                {
                  ref: n,
                  style: w.value,
                  class: kt('track', { vertical: e.vertical }),
                  onTouchstartPassive: B,
                  onTouchend: P,
                  onTouchcancel: P,
                },
                [null == (t = a.default) ? void 0 : t.call(a)],
              ),
              a.indicator
                ? a.indicator({ active: b.value, total: d.value })
                : e.showIndicators && d.value > 1
                  ? ue('div', { class: kt('indicators', { vertical: e.vertical }) }, [Array(d.value).fill('').map(Y)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [Ct, It] = o('tabs');
var Ht = oe({
  name: Ct,
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
                class: It('track'),
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
      Ge({ swipeRef: l }),
      () => ue('div', { class: It('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [$t, Lt] = o('tabs'),
  Et = {
    type: N('line'),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: A(0),
    duration: A(0.3),
    animated: Boolean,
    ellipsis: H,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: A(0),
    background: String,
    lazyRender: H,
    showHeader: H,
    lineWidth: d,
    lineHeight: d,
    beforeChange: Function,
    swipeThreshold: A(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Mt = Symbol($t);
var Vt = oe({
  name: $t,
  props: Et,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: a, slots: l }) {
    let n, o, r, s, u;
    const c = re(),
      d = re(),
      m = re(),
      f = re(),
      p = bt(),
      D = x(c),
      [A, N] = Dt(),
      { children: k, linkChildren: C } = $(Mt),
      I = fe({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      H = ie(() => k.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      L = ie(() => ({ borderColor: t.color, background: t.background })),
      M = (e, t) => {
        var a;
        return null != (a = e.name) ? a : t;
      },
      Y = ie(() => {
        const e = k[I.currentIndex];
        if (e) return M(e, I.currentIndex);
      }),
      R = ie(() => _(t.offsetTop)),
      U = ie(() => (t.sticky ? R.value + n : 0)),
      z = (e) => {
        const a = d.value,
          l = A.value;
        if (!(H.value && a && l && l[I.currentIndex])) return;
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
      F = () => {
        const e = I.inited;
        he(() => {
          const a = A.value;
          if (!a || !a[I.currentIndex] || 'line' !== t.type || O(c.value)) return;
          const l = a[I.currentIndex].$el,
            { lineWidth: n, lineHeight: o } = t,
            r = l.offsetLeft + l.offsetWidth / 2,
            s = { width: V(n), backgroundColor: t.color, transform: `translateX(${r}px) translateX(-50%)` };
          if ((e && (s.transitionDuration = `${t.duration}s`), i(o))) {
            const e = V(o);
            ((s.height = e), (s.borderRadius = e));
          }
          I.lineStyle = s;
        });
      },
      W = (e, l) => {
        const n = ((e) => {
          const t = e < I.currentIndex ? -1 : 1;
          for (; e >= 0 && e < k.length; ) {
            if (!k[e].disabled) return e;
            e += t;
          }
        })(e);
        if (!i(n)) return;
        const o = k[n],
          s = M(o, n),
          u = null !== I.currentIndex;
        (I.currentIndex !== n && ((I.currentIndex = n), l || z(), F()),
          s !== t.active && (a('update:active', s), u && a('change', s, o.title)),
          r && !t.scrollspy && B(Math.ceil(P(c.value) - R.value)));
      },
      j = (e, t) => {
        const a = k.findIndex((t, a) => M(t, a) === e);
        W(-1 === a ? 0 : a, t);
      },
      X = (e = !1) => {
        if (t.scrollspy) {
          const a = k[I.currentIndex].$el;
          if (a && D.value) {
            const l = P(a, D.value) - U.value;
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
              })(D.value, l, e ? 0 : +t.duration, () => {
                o = !1;
              })));
          }
        }
      },
      q = (l, n, o) => {
        const { title: r, disabled: i } = k[n],
          s = M(k[n], n);
        (i ||
          (Be(t.beforeChange, {
            args: [s],
            done: () => {
              (W(n), X());
            },
          }),
          e(l)),
          a('clickTab', { name: s, title: r, event: o, disabled: i }));
      },
      Z = (e) => {
        ((r = e.isFixed), a('scroll', e));
      },
      K = () => {
        if ('line' === t.type && k.length) return ue('div', { class: Lt('line'), style: I.lineStyle }, null);
      },
      J = () => {
        var e, a, n;
        const { type: o, border: r, sticky: i } = t,
          s = [
            ue('div', { ref: i ? void 0 : m, class: [Lt('wrap'), { [G]: 'line' === o && r }] }, [
              ue(
                'div',
                {
                  ref: d,
                  role: 'tablist',
                  class: Lt('nav', [o, { shrink: t.shrink, complete: H.value }]),
                  style: L.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = l['nav-left']) ? void 0 : e.call(l),
                  k.map((e) => e.renderTitle(q)),
                  K(),
                  null == (a = l['nav-right']) ? void 0 : a.call(l),
                ],
              ),
            ]),
            null == (n = l['nav-bottom']) ? void 0 : n.call(l),
          ];
        return i ? ue('div', { ref: m }, [s]) : s;
      },
      Q = () => {
        (F(),
          he(() => {
            var e, t;
            (z(!0), null == (t = null == (e = f.value) ? void 0 : e.swipeRef.value) || t.resize());
          }));
      };
    (pe(() => [t.color, t.duration, t.lineWidth, t.lineHeight], F),
      pe(T, Q),
      pe(
        () => t.active,
        (e) => {
          e !== Y.value && j(e);
        },
      ),
      pe(
        () => k.length,
        () => {
          I.inited &&
            (j(t.active),
            F(),
            he(() => {
              z(!0);
            }));
        },
      ));
    return (
      Ge({
        resize: Q,
        scrollTo: (e) => {
          he(() => {
            (j(e), X(!0));
          });
        },
      }),
      ye(F),
      E(F),
      w(() => {
        (j(t.active, !0),
          he(() => {
            ((I.inited = !0), m.value && (n = S(m.value).height), z(!0));
          }));
      }),
      wt(c, F),
      v(
        'scroll',
        () => {
          if (t.scrollspy && !o) {
            const e = (() => {
              for (let e = 0; e < k.length; e++) {
                const { top: t } = S(k[e].$el);
                if (t > U.value) return 0 === e ? 0 : e - 1;
              }
              return k.length - 1;
            })();
            W(e);
          }
        },
        { target: D, passive: !0 },
      ),
      C({
        id: p,
        props: t,
        setLine: F,
        scrollable: H,
        onRendered: (e, t) => a('rendered', e, t),
        currentName: Y,
        setTitleRefs: N,
        scrollIntoView: z,
      }),
      () =>
        ue('div', { ref: c, class: Lt([t.type]) }, [
          t.showHeader
            ? t.sticky
              ? ue(xt, { container: c.value, offsetTop: R.value, onScroll: Z }, { default: () => [J()] })
              : J()
            : null,
          ue(
            Ht,
            {
              ref: f,
              count: k.length,
              inited: I.inited,
              animated: t.animated,
              duration: t.duration,
              swipeable: t.swipeable,
              lazyRender: t.lazyRender,
              currentIndex: I.currentIndex,
              onChange: W,
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
const Gt = Symbol(),
  Bt = Symbol(),
  Pt = (e) => {
    const t = be(Bt, null);
    (De(Gt, e),
      De(
        Bt,
        ie(() => (null == t || t.value) && e.value),
      ));
  },
  [Yt, Rt] = o('tab'),
  Ut = oe({
    name: Yt,
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
      showZeroBadge: H,
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
          const a = ue('span', { class: Rt('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
          return e.dot || (i(e.badge) && '' !== e.badge)
            ? ue(Y, { dot: e.dot, content: e.badge, showZero: e.showZeroBadge }, { default: () => [a] })
            : a;
        };
      return () =>
        ue(
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
  [zt, Ft] = o('swipe-item');
const Wt = I(
    oe({
      name: zt,
      setup(e, { slots: t }) {
        let a;
        const l = fe({ offset: 0, inited: !1, mounted: !1 }),
          { parent: n, index: o } = m(St);
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
          Ge({
            setOffset: (e) => {
              l.offset = e;
            },
          }),
          () => {
            var e;
            return ue('div', { class: Ft(), style: r.value }, [i.value ? (null == (e = t.default) ? void 0 : e.call(t)) : null]);
          }
        );
      },
    }),
  ),
  [jt, Xt] = o('tab');
const qt = I(
    oe({
      name: jt,
      props: r({}, t, {
        dot: Boolean,
        name: d,
        badge: d,
        title: String,
        disabled: Boolean,
        titleClass: R,
        titleStyle: [String, Object],
        showZeroBadge: H,
      }),
      setup(e, { slots: t }) {
        const a = bt(),
          l = re(!1),
          n = ce(),
          { parent: o, index: r } = m(Mt);
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
          ((u.value = t ? gt(t) : ''),
            (c.value =
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
                  })(mt(a))
                : a));
        });
        const d = re(!s.value);
        return (
          pe(s, (e) => {
            e
              ? (d.value = !1)
              : M(() => {
                  d.value = !0;
                });
          }),
          pe(
            () => e.title,
            () => {
              (o.setLine(), o.scrollIntoView());
            },
          ),
          Pt(s),
          Ge({
            id: a,
            renderTitle: (l) =>
              ue(
                Ut,
                Ae(
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
                  U(o.props, ['type', 'color', 'shrink']),
                  U(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
                ),
                { title: t.title },
              ),
          }),
          () => {
            var e;
            const n = `${o.id}-${r.value}`,
              { animated: i, swipeable: u, scrollspy: c, lazyRender: m } = o.props;
            if (!t.default && !i) return;
            const v = c || s.value;
            if (i || u)
              return ue(
                Wt,
                {
                  id: a,
                  role: 'tabpanel',
                  class: Xt('panel-wrapper', { inactive: d.value }),
                  tabindex: s.value ? 0 : -1,
                  'aria-hidden': !s.value,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                {
                  default: () => {
                    var e;
                    return [ue('div', { class: Xt('panel') }, [null == (e = t.default) ? void 0 : e.call(t)])];
                  },
                },
              );
            const f = l.value || c || !m ? (null == (e = t.default) ? void 0 : e.call(t)) : null;
            return we(
              ue(
                'div',
                {
                  id: a,
                  role: 'tabpanel',
                  class: Xt('panel'),
                  tabindex: v ? 0 : -1,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                [f],
              ),
              [[Ne, v]],
            );
          }
        );
      },
    }),
  ),
  Zt = I(Vt),
  [Kt] = o('picker-group'),
  Jt = Symbol(Kt);
r({ tabs: c(), activeTab: A(0), nextStepText: String, showToolbar: H }, lt);
const Qt = r(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: A(44),
    showToolbar: H,
    swipeDuration: A(1e3),
    visibleOptionNum: A(6),
  },
  lt,
);
const ea = I(
    oe({
      name: Fe,
      props: r({}, Qt, { columns: c(), modelValue: c(), toolbarPosition: N('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: a }) {
        const l = re(),
          n = re(e.modelValue.slice(0)),
          { parent: o } = m(Jt),
          { children: s, linkChildren: u } = $(et);
        u();
        const c = ie(() =>
            (function (e) {
              return r({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          d = ie(() => _(e.optionHeight)),
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
                    ((n = i(r) ? Ke(e, r, t) : void 0), !n && e.length && (n = Ke(e, Xe(e)[t.value], t)), o++, l.push(e));
                  }
                  return l;
                })(t, c.value, n);
              default:
                return [t];
            }
          }),
          g = ie(() => h.value.some((e) => e.length)),
          y = ie(() => h.value.map((e, t) => Ke(e, n.value[t], c.value))),
          b = ie(() => h.value.map((e, t) => e.findIndex((e) => e[c.value.value] === n.value[t]))),
          D = (e, t) => {
            if (n.value[e] !== t) {
              const a = n.value.slice(0);
              ((a[e] = t), (n.value = a));
            }
          },
          w = () => ({ selectedValues: n.value.slice(0), selectedOptions: y.value, selectedIndexes: b.value }),
          A = () => {
            s.forEach((e) => e.stopMomentum());
            const e = w();
            return (
              he(() => {
                const e = w();
                t('confirm', e);
              }),
              e
            );
          },
          N = () => t('cancel', w()),
          x = () =>
            h.value.map((l, o) =>
              ue(
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
                      (D(a, e),
                        'cascade' === p.value &&
                          n.value.forEach((e, t) => {
                            const a = h.value[t];
                            Ze(a, e, c.value) || D(t, a.length ? a[0][c.value.value] : void 0);
                          }),
                        he(() => {
                          t('change', r({ columnIndex: a }, w()));
                        }));
                    })(e, o),
                  onClickOption: (e) =>
                    ((e, a) => {
                      const l = { columnIndex: a, currentOption: e };
                      (t('clickOption', r(w(), l)), t('scrollInto', l));
                    })(e, o),
                  onScrollInto: (e) => {
                    t('scrollInto', { currentOption: e, columnIndex: o });
                  },
                },
                { option: a.option },
              ),
            ),
          k = (e) => {
            if (g.value) {
              const t = { height: `${d.value}px` },
                a = { backgroundSize: `100% ${(e - d.value) / 2}px` };
              return [ue('div', { class: We('mask'), style: a }, null), ue('div', { class: [z, We('frame')], style: t }, null)];
            }
          },
          O = () => {
            const t = d.value * +e.visibleOptionNum,
              n = { height: `${t}px` };
            return e.loading || g.value || !a.empty ? ue('div', { ref: l, class: We('columns'), style: n }, [x(), k(t)]) : a.empty();
          },
          S = () => {
            if (e.showToolbar && !o) return ue(rt, Ae(U(e, ot), { onConfirm: A, onCancel: N }), U(a, nt));
          },
          T = (e) => {
            e.forEach((e, t) => {
              e.length && !Ze(e, n.value[t], c.value) && D(t, Xe(e)[c.value.value]);
            });
          };
        let C;
        (pe(h, (e) => T(e), { immediate: !0 }),
          pe(
            () => e.modelValue,
            (t) => {
              (F(t, n.value) || F(t, C) || ((n.value = t.slice(0)), (C = t.slice(0))), 0 === e.modelValue.length && T(h.value));
            },
            { deep: !0 },
          ),
          pe(
            n,
            (a) => {
              F(a, e.modelValue) || ((C = a.slice(0)), t('update:modelValue', C));
            },
            { immediate: !0 },
          ),
          v('touchmove', f, { target: l }));
        return (
          Ge({ confirm: A, getSelectedOptions: () => y.value }),
          () => {
            var t, l;
            return ue('div', { class: We() }, [
              'top' === e.toolbarPosition ? S() : null,
              e.loading ? ue(Pe, { class: We('loading') }, null) : null,
              null == (t = a['columns-top']) ? void 0 : t.call(a),
              O(),
              null == (l = a['columns-bottom']) ? void 0 : l.call(a),
              'bottom' === e.toolbarPosition ? S() : null,
            ]);
          }
        );
      },
    }),
  ),
  [ta, aa] = o('cell'),
  la = {
    tag: N('div'),
    icon: String,
    size: String,
    title: d,
    value: d,
    label: d,
    center: Boolean,
    isLink: Boolean,
    border: H,
    iconPrefix: String,
    valueClass: R,
    labelClass: R,
    titleClass: R,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const na = I(
  oe({
    name: ta,
    props: r({}, la, t),
    setup(e, { slots: t }) {
      const l = a(),
        n = () => {
          if (t.label || i(e.label)) return ue('div', { class: [aa('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var a;
          if (t.title || i(e.title)) {
            const l = null == (a = t.title) ? void 0 : a.call(t);
            if (Array.isArray(l) && 0 === l.length) return;
            return ue('div', { class: [aa('title'), e.titleClass], style: e.titleStyle }, [l || ue('span', null, [e.title]), n()]);
          }
        },
        r = () => {
          const a = t.value || t.default;
          if (a || i(e.value)) return ue('div', { class: [aa('value'), e.valueClass] }, [a ? a() : ue('span', null, [e.value])]);
        },
        s = () => {
          if (t['right-icon']) return t['right-icon']();
          if (e.isLink) {
            const t = e.arrowDirection && 'right' !== e.arrowDirection ? `arrow-${e.arrowDirection}` : 'arrow';
            return ue(W, { name: t, class: aa('right-icon') }, null);
          }
        };
      return () => {
        var a;
        const { tag: n, size: i, center: u, border: c, isLink: d, required: m } = e,
          v = null != (a = e.clickable) ? a : d,
          f = { center: u, required: !!m, clickable: v, borderless: !c };
        return (
          i && (f[i] = !!i),
          ue(
            n,
            { class: aa(f), role: v ? 'button' : void 0, tabindex: v ? 0 : void 0, onClick: l },
            {
              default: () => {
                var a;
                return [
                  t.icon ? t.icon() : e.icon ? ue(W, { name: e.icon, class: aa('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
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
function oa(e) {
  return Array.isArray(e) ? !e.length : 0 !== e && !e;
}
function ra(e, t) {
  const { message: a } = t;
  return q(a) ? a(e, t) : a || '';
}
function ia({ target: e }) {
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
const [da, ma] = o('field'),
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
    clearIcon: N('clear'),
    modelValue: A(''),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: N('focus'),
    formatTrigger: N('onChange'),
    spellcheck: { type: Boolean, default: null },
    error: { type: Boolean, default: null },
    disabled: { type: Boolean, default: null },
    readonly: { type: Boolean, default: null },
    inputmode: String,
  };
const fa = I(
  oe({
    name: da,
    props: r({}, la, va, {
      rows: d,
      type: N('text'),
      rules: Array,
      autosize: [Boolean, Object],
      labelWidth: d,
      labelClass: R,
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
        n = fe({ status: 'unvalidated', focused: !1, validateMessage: '' }),
        o = re(),
        r = re(),
        u = re(),
        { parent: c } = m(J),
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
                    if (oa(e)) {
                      if (t.required) return !1;
                      if (!1 === t.validateEmpty) return !0;
                    }
                    return !(t.pattern && !t.pattern.test(String(e)));
                  })(e, t))
                )
                  return ((n.status = 'failed'), void (n.validateMessage = ra(e, t)));
                if (t.validator) {
                  if (oa(e) && !1 === t.validateEmpty) return;
                  return (function (e, t) {
                    return new Promise((a) => {
                      const l = t.validator(e, t);
                      Z(l) ? l.then(a) : a(l);
                    });
                  })(e, t).then((a) => {
                    a && 'string' == typeof a
                      ? ((n.status = 'failed'), (n.validateMessage = a))
                      : !1 === a && ((n.status = 'failed'), (n.validateMessage = ra(e, t)));
                  });
                }
              }),
            Promise.resolve(),
          ),
        D = () => {
          ((n.status = 'unvalidated'), (n.validateMessage = ''));
        },
        w = () => t('endValidate', { status: n.status, message: n.validateMessage }),
        A = (a = e.rules) =>
          new Promise((l) => {
            (D(),
              a
                ? (t('startValidate'),
                  b(a).then(() => {
                    'failed' === n.status ? (l({ name: e.name, message: n.validateMessage }), w()) : ((n.status = 'passed'), l(), w());
                  }))
                : l());
          }),
        N = (t) => {
          if (c && e.rules) {
            const { validateTrigger: a } = c.props,
              l = Q(a).includes(t),
              n = e.rules.filter((e) => (e.trigger ? Q(e.trigger).includes(t) : l));
            n.length && A(n);
          }
        },
        x = (a, l = 'onChange') => {
          var r, u;
          const c = a;
          a = ((t) => {
            var a;
            const { maxlength: l } = e;
            if (i(l) && ua(t) > +l) {
              const e = d();
              if (e && ua(e) === +l) return e;
              const r = null == (a = o.value) ? void 0 : a.selectionEnd;
              if (n.focused && r) {
                const e = [...t],
                  a = e.length - +l;
                return (e.splice(r - a, a), e.join(''));
              }
              return ca(t, +l);
            }
            return t;
          })(a);
          const m = c.length - a.length;
          if ('number' === e.type || 'digit' === e.type) {
            const t = 'number' === e.type;
            if (((a = K(a, t, t)), 'onBlur' === l && '' !== a && (void 0 !== e.min || void 0 !== e.max))) {
              const t = s(+a, null != (r = e.min) ? r : -1 / 0, null != (u = e.max) ? u : 1 / 0);
              +a !== t && (a = t.toString());
            }
          }
          let v = 0;
          if (e.formatter && l === e.formatTrigger) {
            const { formatter: t, maxlength: l } = e;
            if (((a = t(a)), i(l) && ua(a) > +l && (a = ca(a, +l)), o.value && n.focused)) {
              const { selectionEnd: e } = o.value,
                a = ca(c, e);
              v = t(a).length - a.length;
            }
          }
          if (o.value && o.value.value !== a)
            if (n.focused) {
              let { selectionStart: e, selectionEnd: t } = o.value;
              if (((o.value.value = a), i(e) && i(t))) {
                const l = a.length;
                (m ? ((e -= m), (t -= m)) : v && ((e += v), (t += v)), o.value.setSelectionRange(Math.min(e, l), Math.min(t, l)));
              }
            } else o.value.value = a;
          a !== e.modelValue && t('update:modelValue', a);
        },
        _ = (e) => {
          e.target.composing || x(e.target.value);
        },
        k = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.blur();
        },
        O = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.focus();
        },
        S = () => {
          const t = o.value;
          'textarea' === e.type &&
            e.autosize &&
            t &&
            (function (e, t) {
              const a = j();
              e.style.height = 'auto';
              let l = e.scrollHeight;
              if (X(t)) {
                const { maxHeight: e, minHeight: a } = t;
                (void 0 !== e && (l = Math.min(l, e)), void 0 !== a && (l = Math.max(l, a)));
              }
              l && ((e.style.height = `${l}px`), B(a));
            })(t, e.autosize);
        },
        T = (e) => {
          ((n.focused = !0), t('focus', e), he(S), p('readonly') && k());
        },
        C = (e) => {
          ((n.focused = !1), x(d(), 'onBlur'), t('blur', e), p('readonly') || (N('onBlur'), he(S), ee()));
        },
        I = (e) => t('clickInput', e),
        H = (e) => t('clickLeftIcon', e),
        $ = (e) => t('clickRightIcon', e),
        L = ie(() => ('boolean' == typeof e.error ? e.error : !(!c || !c.props.showError || 'failed' !== n.status) || void 0)),
        E = ie(() => {
          const e = p('labelWidth'),
            t = p('labelAlign');
          if (e && 'top' !== t) return { width: V(e) };
        }),
        M = (a) => {
          if (13 === a.keyCode) {
            ((c && c.props.submitOnEnter) || 'textarea' === e.type || f(a), 'search' === e.type && k());
          }
          t('keypress', a);
        },
        G = () => e.id || `${l}-input`,
        P = () => {
          const t = ma('control', [
            p('inputAlign'),
            { error: L.value, custom: !!a.input, 'min-height': 'textarea' === e.type && !e.autosize },
          ]);
          if (a.input) return ue('div', { class: t, onClick: I }, [a.input()]);
          const n = {
            id: G(),
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
            onBlur: C,
            onFocus: T,
            onInput: _,
            onClick: I,
            onChange: sa,
            onKeypress: M,
            onCompositionend: sa,
            onCompositionstart: ia,
          };
          return 'textarea' === e.type
            ? ue('textarea', Ae(n, { inputmode: e.inputmode }), null)
            : ue(
                'input',
                Ae(
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
        Y = () => {
          const t = a['right-icon'];
          if (e.rightIcon || t)
            return ue('div', { class: ma('right-icon'), onClick: $ }, [
              t ? t() : ue(W, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        R = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = ua(d());
            return ue('div', { class: ma('word-limit') }, [ue('span', { class: ma('word-num') }, [t]), xe('/'), e.maxlength]);
          }
        },
        U = () => {
          if (c && !1 === c.props.showErrorMessage) return;
          const t = e.errorMessage || n.validateMessage;
          if (t) {
            const e = a['error-message'],
              l = p('errorMessageAlign');
            return ue('div', { class: ma('error-message', l) }, [e ? e({ message: t }) : t]);
          }
        },
        z = () => [
          ue('div', { class: ma('body') }, [
            P(),
            h.value && ue(W, { ref: r, name: e.clearIcon, class: ma('clear') }, null),
            Y(),
            a.button && ue('div', { class: ma('button') }, [a.button()]),
          ]),
          R(),
          U(),
        ];
      return (
        Ge({ blur: k, focus: O, validate: A, formValue: g, resetValidation: D, getValidationStatus: () => n.status }),
        De(te, { customValue: u, resetValidation: D, validateWithTrigger: N }),
        pe(
          () => e.modelValue,
          () => {
            (x(d()), D(), N('onChange'), he(S));
          },
        ),
        ge(() => {
          (x(d(), e.formatTrigger), he(S));
        }),
        v(
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
                return ue('div', { class: ma('left-icon'), onClick: H }, [
                  t ? t() : ue(W, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return ue(
            na,
            {
              size: e.size,
              class: ma({ error: L.value, disabled: t, [`label-${n}`]: n }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: E.value,
              valueClass: ma('value'),
              titleClass: [ma('label', [n, { required: y.value }]), e.labelClass],
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
                            for: a.input ? void 0 : G(),
                            'data-allow-mismatch': 'attribute',
                            onClick: (e) => {
                              (f(e), O());
                            },
                            style: 'top' === n && t ? { width: V(t) } : void 0,
                          },
                          [e.label + o],
                        )
                      : void 0;
                })();
                return 'top' === n ? [o, t].filter(Boolean) : t || [];
              },
              value: z,
              extra: a.extra,
            },
          );
        }
      );
    },
  }),
);
I(Ye);
const [pa, ha, ga] = o('calendar');
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
  wa = (e) => (Array.isArray(e) ? e.map(Da) : Da(e));
function Aa(e, t) {
  const a = Da(e);
  return (a.setDate(a.getDate() + t), a);
}
function Na(e, t) {
  const a = Da(e);
  return (a.setMonth(a.getMonth() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
function xa(e, t) {
  const a = Da(e);
  return (a.setFullYear(a.getFullYear() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
const _a = (e) => Aa(e, -1),
  ka = (e) => Aa(e, 1),
  Oa = (e) => Na(e, -1),
  Sa = (e) => Na(e, 1),
  Ta = (e) => xa(e, -1),
  Ca = (e) => xa(e, 1),
  Ia = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
r({}, Qt, { modelValue: c(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Ha] = o('calendar-day');
var $a = oe({
  name: Ha,
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
        if (t || a['top-info']) return ue('div', { class: ha('top-info') }, [a['top-info'] ? a['top-info'](e.item) : t]);
      },
      r = () => {
        const { bottomInfo: t } = e.item;
        if (t || a['bottom-info']) return ue('div', { class: ha('bottom-info') }, [a['bottom-info'] ? a['bottom-info'](e.item) : t]);
      },
      i = () => {
        const { item: t, color: l, rowHeight: n } = e,
          { type: i } = t,
          s = [o(), a.text ? a.text(e.item) : e.item.text, r()];
        return 'selected' === i ? ue('div', { class: ha('selected-day'), style: { width: n, height: n, background: l } }, [s]) : s;
      };
    return () => {
      const { type: t, className: a } = e.item;
      return 'placeholder' === t
        ? ue('div', { class: ha('day'), style: l.value }, null)
        : ue('div', { role: 'gridcell', style: l.value, class: [ha('day', t), a], tabindex: 'disabled' === t ? void 0 : -1, onClick: n }, [
            i(),
          ]);
    };
  },
});
const [La] = o('calendar-month');
var Ea = oe({
  name: La,
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
      i = ze(r),
      s = ie(() => {
        return ((t = e.date), ga('monthTitle', t.getFullYear(), t.getMonth() + 1));
        var t;
      }),
      u = ie(() => V(e.rowHeight)),
      c = ie(() => {
        const t = e.date.getDate(),
          a = (e.date.getDay() - (t % 7) + 8) % 7;
        return e.firstDayOfWeek ? (a + 7 - e.firstDayOfWeek) % 7 : a;
      }),
      d = ie(() => {
        return ((t = e.date.getFullYear()), (a = e.date.getMonth() + 1), 32 - new Date(t, a - 1, 32).getDate());
        var t, a;
      }),
      m = ie(() => l.value || !e.lazyRender),
      v = (t) => {
        const { type: a, minDate: l, maxDate: n, currentDate: o } = e;
        if ((l && ba(t, l) < 0) || (n && ba(t, n) > 0)) return 'disabled';
        if (null === o) return '';
        if (Array.isArray(o)) {
          if ('multiple' === a)
            return ((t) => {
              const a = (t) => e.currentDate.some((e) => 0 === ba(e, t));
              if (a(t)) {
                const e = _a(t),
                  l = ka(t),
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
      f = (t) => {
        if ('range' === e.type) {
          if ('start' === t || 'end' === t) return ga(t);
          if ('start-end' === t) return `${ga('start')}/${ga('end')}`;
        }
      },
      p = () => {
        if (e.showMonthTitle)
          return ue('div', { class: ha('month-title') }, [a['month-title'] ? a['month-title']({ date: e.date, text: s.value }) : s.value]);
      },
      h = () => {
        if (e.showMark && m.value) return ue('div', { class: ha('month-mark') }, [e.date.getMonth() + 1]);
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
            r = v(o);
          let i = { date: o, type: r, text: n, bottomInfo: f(r) };
          (e.formatter && (i = e.formatter(i)), t.push(i));
        }
        return t;
      }),
      D = ie(() => y.value.filter((e) => 'disabled' === e.type)),
      w = (l, n) =>
        ue(
          $a,
          {
            item: l,
            index: n,
            color: e.color,
            offset: c.value,
            rowHeight: u.value,
            onClick: (e) => t('click', e),
            onClickDisabledDate: (e) => t('clickDisabledDate', e),
          },
          U(a, ['top-info', 'bottom-info', 'text']),
        );
    return (
      Ge({
        getTitle: () => s.value,
        getHeight: () => i.value,
        setVisible: n,
        scrollToDate: (e, t) => {
          if (o.value) {
            const a = S(o.value),
              l = g.value.length,
              n = ((Math.ceil((t.getDate() + c.value) / 7) - 1) * a.height) / l;
            b(e, a.top + n + e.scrollTop - S(e).top);
          }
        },
        disabledDays: D,
      }),
      () =>
        ue('div', { class: ha('month'), ref: r }, [
          p(),
          ue('div', { ref: o, role: 'grid', class: ha('days') }, [h(), (m.value ? y : g).value.map(w)]),
        ])
    );
  },
});
const [Ma] = o('calendar-header');
var Va = oe({
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
    switchMode: N('none'),
  },
  emits: ['clickSubtitle', 'panelChange'],
  setup(e, { slots: t, emit: a }) {
    const l = ie(() => e.date && e.minDate && ya(Oa(e.date), e.minDate) < 0),
      n = ie(() => e.date && e.minDate && ya(Ta(e.date), e.minDate) < 0),
      o = ie(() => e.date && e.maxDate && ya(Sa(e.date), e.maxDate) > 0),
      r = ie(() => e.date && e.maxDate && ya(Ca(e.date), e.maxDate) > 0),
      i = () => {
        if (e.showTitle) {
          const a = e.title || ga('title'),
            l = t.title ? t.title() : a;
          return ue('div', { class: ha('header-title') }, [l]);
        }
      },
      s = (e) => a('clickSubtitle', e),
      u = (e) => a('panelChange', e),
      c = (a) => {
        const i = 'year-month' === e.switchMode,
          s = t[a ? 'next-month' : 'prev-month'],
          c = t[a ? 'next-year' : 'prev-year'],
          d = a ? o.value : l.value,
          m = a ? r.value : n.value,
          v = a ? 'arrow' : 'arrow-left',
          f = a ? 'arrow-double-right' : 'arrow-double-left',
          h = ue('view', { class: ha('header-action', { disabled: d }), onClick: d ? void 0 : () => u((a ? Sa : Oa)(e.date)) }, [
            s ? s({ disabled: d }) : ue(W, { class: { [p]: !d }, name: v }, null),
          ]),
          g =
            i &&
            ue('view', { class: ha('header-action', { disabled: m }), onClick: m ? void 0 : () => u((a ? Ca : Ta)(e.date)) }, [
              c ? c({ disabled: m }) : ue(W, { class: { [p]: !m }, name: f }, null),
            ]);
        return a ? [h, g] : [g, h];
      },
      d = () => {
        if (e.showSubtitle) {
          const a = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            l = 'none' !== e.switchMode;
          return ue('div', { class: ha('header-subtitle', { 'with-switch': l }), onClick: s }, [
            l ? [c(), ue('div', { class: ha('header-subtitle-text') }, [a]), c(!0)] : a,
          ]);
        }
      },
      m = () => {
        const { firstDayOfWeek: t } = e,
          a = ga('weekdays'),
          l = [...a.slice(t, 7), ...a.slice(0, t)];
        return ue('div', { class: ha('weekdays') }, [l.map((e) => ue('span', { class: ha('weekday') }, [e]))]);
      };
    return () => ue('div', { class: ha('header') }, [i(), d(), m()]);
  },
});
const Ga = I(
  oe({
    name: pa,
    props: {
      show: Boolean,
      type: N('single'),
      switchMode: N('none'),
      title: String,
      color: String,
      round: H,
      readonly: Boolean,
      poppable: H,
      maxRange: A(null),
      position: N('bottom'),
      teleport: [String, Object],
      showMark: H,
      showTitle: H,
      formatter: Function,
      rowHeight: d,
      confirmText: String,
      rangePrompt: String,
      lazyRender: H,
      showConfirm: H,
      defaultDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: H,
      closeOnPopstate: H,
      showRangePrompt: H,
      confirmDisabledText: String,
      closeOnClickOverlay: H,
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: H,
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
        o = ie(() => (e.minDate || n.value ? e.minDate : Ia())),
        r = ie(() => (e.maxDate || n.value ? e.maxDate : Na(Ia(), 6))),
        i = (e, t = o.value, a = r.value) => (t && -1 === ba(e, t) ? t : a && 1 === ba(e, a) ? a : e),
        s = (t = e.defaultDate) => {
          const { type: a, allowSameDay: l } = e;
          if (null === t) return t;
          const n = Ia();
          if ('range' === a) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === ba(t[0], n) && (t = []));
            const e = o.value,
              a = r.value;
            return [i(t[0] || n, e, a ? (l ? a : _a(a)) : void 0), i(t[1] || (l ? n : ka(n)), e ? (l ? e : ka(e)) : void 0)];
          }
          return 'multiple' === a ? (Array.isArray(t) ? t.map((e) => i(e)) : [i(n)]) : ((t && !Array.isArray(t)) || (t = n), i(t));
        };
      let u;
      const c = re(),
        d = re(s()),
        m = re(
          (() => {
            const e = Array.isArray(d.value) ? d.value[0] : d.value;
            return e || i(Ia());
          })(),
        ),
        v = re(),
        [f, p] = Dt(),
        g = ie(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        b = ie(() => {
          const e = [];
          if (!o.value || !r.value) return e;
          const t = new Date(o.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== ya(t, r.value));
          return e;
        }),
        D = ie(() => {
          if (d.value) {
            if ('range' === e.type) return !d.value[0] || !d.value[1];
            if ('multiple' === e.type) return !d.value.length;
          }
          return !d.value;
        }),
        A = () => {
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
            n && (v.value = n));
        },
        N = (e) => {
          n.value
            ? (m.value = e)
            : h(() => {
                (b.value.some((t, a) => 0 === ya(t, e) && (c.value && f.value[a].scrollToDate(c.value, e), !0)), A());
              });
        },
        x = () => {
          if (!e.poppable || e.show)
            if (d.value) {
              const t = 'single' === e.type ? d.value : d.value[0];
              ne(t) && N(t);
            } else n.value || h(A);
        },
        _ = () => {
          (e.poppable && !e.show) ||
            (n.value ||
              h(() => {
                u = Math.floor(S(c).height);
              }),
            x());
        },
        k = (e = s()) => {
          ((d.value = e), x());
        },
        O = (e) => {
          ((m.value = e), t('panelChange', { date: e }));
        },
        T = () => {
          var e;
          return t('confirm', null != (e = d.value) ? e : wa(d.value));
        },
        C = (a, l) => {
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
                (o && Ue(n || ga('rangePrompt', l)), t('overRange'), 1)
              );
            })(a);
            if (!l) return void n([a[0], Aa(a[0], +e.maxRange - 1)]);
          }
          (n(a), l && !e.showConfirm && T());
        },
        I = ie(() =>
          f.value.reduce((e, t) => {
            var a, l;
            return (e.push(...(null != (l = null == (a = t.disabledDays) ? void 0 : a.value) ? l : [])), e);
          }, []),
        ),
        H = (a) => {
          if (e.readonly || !a.date) return;
          const { date: l } = a,
            { type: n } = e;
          if ('range' === n) {
            if (!d.value) return void C([l]);
            const [t, a] = d.value;
            if (t && !a) {
              const a = ba(l, t);
              if (1 === a) {
                const e = ((e, t, a) => {
                  var l;
                  return null == (l = e.find((e) => -1 === ba(t, e.date) && -1 === ba(e.date, a))) ? void 0 : l.date;
                })(I.value, t, l);
                if (e) {
                  const a = _a(e);
                  -1 === ba(t, a) ? C([t, a]) : C([l]);
                } else C([t, l], !0);
              } else -1 === a ? C([l]) : e.allowSameDay && C([l, l], !0);
            } else C([l]);
          } else if ('multiple' === n) {
            if (!d.value) return void C([l]);
            const a = d.value,
              n = a.findIndex((e) => 0 === ba(e, l));
            if (-1 !== n) {
              const [e] = a.splice(n, 1);
              t('unselect', Da(e));
            } else e.maxRange && a.length >= +e.maxRange ? Ue(e.rangePrompt || ga('rangePrompt', e.maxRange)) : C([...a, l]);
          } else C(l, !0);
        },
        $ = (e) => t('clickOverlay', e),
        L = (e) => t('update:show', e),
        E = (l, i) => {
          const s = 0 !== i || !e.showSubtitle;
          return ue(
            Ea,
            Ae(
              {
                ref: n.value ? v : p(i),
                date: l,
                currentDate: d.value,
                showMonthTitle: s,
                firstDayOfWeek: g.value,
                lazyRender: !n.value && e.lazyRender,
                maxDate: r.value,
                minDate: o.value,
              },
              U(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: H, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            U(a, ['top-info', 'bottom-info', 'month-title', 'text']),
          );
        },
        M = () => {
          if (a.footer) return a.footer();
          if (e.showConfirm) {
            const t = a['confirm-text'],
              n = D.value,
              o = n ? e.confirmDisabledText : e.confirmText;
            return ue(
              l,
              {
                round: !0,
                block: !0,
                type: 'primary',
                color: e.color,
                class: ha('confirm'),
                disabled: n,
                nativeType: 'button',
                onClick: T,
              },
              { default: () => [t ? t({ disabled: n }) : o || ga('confirm')] },
            );
          }
        },
        V = () => {
          var l, i;
          return ue('div', { class: ha() }, [
            ue(
              Va,
              {
                date: null == (l = v.value) ? void 0 : l.date,
                maxDate: r.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (i = v.value) ? void 0 : i.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: g.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: O,
              },
              U(a, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            ue('div', { ref: c, class: ha('body'), onScroll: n.value ? void 0 : A }, [n.value ? E(m.value, 0) : b.value.map(E)]),
            ue('div', { class: [ha('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [M()]),
          ]);
        };
      return (
        pe(() => e.show, _),
        pe(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => k(s(d.value)),
        ),
        pe(
          () => e.defaultDate,
          (e) => {
            k(e);
          },
        ),
        Ge({ reset: k, scrollToDate: N, getSelectedDate: () => d.value }),
        w(_),
        () =>
          e.poppable
            ? ue(
                Re,
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
                  onClickOverlay: $,
                  'onUpdate:show': L,
                },
                { default: V },
              )
            : V()
      );
    },
  }),
);
function Ba(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Pa,
  Ya = { exports: {} };
const Ra = Ba(
    (Pa ||
      ((Pa = 1),
      (Ya.exports = (function () {
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
                { M: u, y: d, w: s, d: i, D: m, h: r, m: o, s: n, ms: l, Q: c }[e] ||
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
        var w = '$isDayjsObject',
          A = function (e) {
            return e instanceof k || !(!e || !e[w]);
          },
          N = function e(t, a, l) {
            var n;
            if (!t) return b;
            if ('string' == typeof t) {
              var o = t.toLowerCase();
              (D[o] && (n = o), a && ((D[o] = a), (n = o)));
              var r = t.split('-');
              if (!n && r.length > 1) return e(r[0]);
            } else {
              var i = t.name;
              ((D[i] = t), (n = i));
            }
            return (!l && n && (b = n), n || (!l && b));
          },
          x = function (e, t) {
            if (A(e)) return e.clone();
            var a = 'object' == typeof t ? t : {};
            return ((a.date = e), (a.args = arguments), new k(a));
          },
          _ = y;
        ((_.l = N),
          (_.i = A),
          (_.w = function (e, t) {
            return x(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
          }));
        var k = (function () {
            function h(e) {
              ((this.$L = N(e.locale, null, !0)), this.parse(e), (this.$x = this.$x || e.x || {}), (this[w] = !0));
            }
            var g = h.prototype;
            return (
              (g.parse = function (e) {
                ((this.$d = (function (e) {
                  var t = e.date,
                    a = e.utc;
                  if (null === t) return new Date(NaN);
                  if (_.u(t)) return new Date();
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
                return _;
              }),
              (g.isValid = function () {
                return !(this.$d.toString() === v);
              }),
              (g.isSame = function (e, t) {
                var a = x(e);
                return this.startOf(t) <= a && a <= this.endOf(t);
              }),
              (g.isAfter = function (e, t) {
                return x(e) < this.startOf(t);
              }),
              (g.isBefore = function (e, t) {
                return this.endOf(t) < x(e);
              }),
              (g.$g = function (e, t, a) {
                return _.u(e) ? this[t] : this.set(a, e);
              }),
              (g.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (g.valueOf = function () {
                return this.$d.getTime();
              }),
              (g.startOf = function (e, t) {
                var a = this,
                  l = !!_.u(t) || t,
                  c = _.p(e),
                  v = function (e, t) {
                    var n = _.w(a.$u ? Date.UTC(a.$y, t, e) : new Date(a.$y, t, e), a);
                    return l ? n : n.endOf(i);
                  },
                  f = function (e, t) {
                    return _.w(a.toDate()[e].apply(a.toDate('s'), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), a);
                  },
                  p = this.$W,
                  h = this.$M,
                  g = this.$D,
                  y = 'set' + (this.$u ? 'UTC' : '');
                switch (c) {
                  case d:
                    return l ? v(1, 0) : v(31, 11);
                  case u:
                    return l ? v(1, h) : v(0, h + 1);
                  case s:
                    var b = this.$locale().weekStart || 0,
                      D = (p < b ? p + 7 : p) - b;
                    return v(l ? g - D : g + (6 - D), h);
                  case i:
                  case m:
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
                  s = _.p(e),
                  c = 'set' + (this.$u ? 'UTC' : ''),
                  v = ((a = {}),
                  (a[i] = c + 'Date'),
                  (a[m] = c + 'Date'),
                  (a[u] = c + 'Month'),
                  (a[d] = c + 'FullYear'),
                  (a[r] = c + 'Hours'),
                  (a[o] = c + 'Minutes'),
                  (a[n] = c + 'Seconds'),
                  (a[l] = c + 'Milliseconds'),
                  a)[s],
                  f = s === i ? this.$D + (t - this.$W) : t;
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
                return this[_.p(e)]();
              }),
              (g.add = function (l, c) {
                var m,
                  v = this;
                l = Number(l);
                var f = _.p(c),
                  p = function (e) {
                    var t = x(v);
                    return _.w(t.date(t.date() + Math.round(e * l)), v);
                  };
                if (f === u) return this.set(u, this.$M + l);
                if (f === d) return this.set(d, this.$y + l);
                if (f === i) return p(1);
                if (f === s) return p(7);
                var h = ((m = {}), (m[o] = t), (m[r] = a), (m[n] = e), m)[f] || 1,
                  g = this.$d.getTime() + l * h;
                return _.w(g, this);
              }),
              (g.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (g.format = function (e) {
                var t = this,
                  a = this.$locale();
                if (!this.isValid()) return a.invalidDate || v;
                var l = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  n = _.z(this),
                  o = this.$H,
                  r = this.$m,
                  i = this.$M,
                  s = a.weekdays,
                  u = a.months,
                  c = a.meridiem,
                  d = function (e, a, n, o) {
                    return (e && (e[a] || e(t, l))) || n[a].slice(0, o);
                  },
                  m = function (e) {
                    return _.s(o % 12 || 12, e, '0');
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
                          return _.s(t.$y, 4, '0');
                        case 'M':
                          return i + 1;
                        case 'MM':
                          return _.s(i + 1, 2, '0');
                        case 'MMM':
                          return d(a.monthsShort, i, u, 3);
                        case 'MMMM':
                          return d(u, i);
                        case 'D':
                          return t.$D;
                        case 'DD':
                          return _.s(t.$D, 2, '0');
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
                          return _.s(o, 2, '0');
                        case 'h':
                          return m(1);
                        case 'hh':
                          return m(2);
                        case 'a':
                          return f(o, r, !0);
                        case 'A':
                          return f(o, r, !1);
                        case 'm':
                          return String(r);
                        case 'mm':
                          return _.s(r, 2, '0');
                        case 's':
                          return String(t.$s);
                        case 'ss':
                          return _.s(t.$s, 2, '0');
                        case 'SSS':
                          return _.s(t.$ms, 3, '0');
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
              (g.diff = function (l, m, v) {
                var f,
                  p = this,
                  h = _.p(m),
                  g = x(l),
                  y = (g.utcOffset() - this.utcOffset()) * t,
                  b = this - g,
                  D = function () {
                    return _.m(p, g);
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
                return v ? f : _.a(f);
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
                  l = N(e, t, !0);
                return (l && (a.$L = l), a);
              }),
              (g.clone = function () {
                return _.w(this.$d, this);
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
          O = k.prototype;
        return (
          (x.prototype = O),
          [
            ['$ms', l],
            ['$s', n],
            ['$m', o],
            ['$H', r],
            ['$W', i],
            ['$M', u],
            ['$y', d],
            ['$D', m],
          ].forEach(function (e) {
            O[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (x.extend = function (e, t) {
            return (e.$i || (e(t, k, x), (e.$i = !0)), x);
          }),
          (x.locale = N),
          (x.isDayjs = A),
          (x.unix = function (e) {
            return x(1e3 * e);
          }),
          (x.en = D[b]),
          (x.Ls = D),
          (x.p = {}),
          x
        );
      })())),
    Ya.exports),
  ),
  Ua = [
    {
      name: '一大一小',
      quarkFuncConfig: [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 1 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
    },
    {
      name: '2大1小',
      quarkFuncConfig: [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
    },
    {
      name: '2大2小',
      quarkFuncConfig: [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 2 },
      ],
    },
    { name: '2大', quarkFuncConfig: [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 }] },
  ],
  za = [
    { label: '👨 成人', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 0, simpleText: '大', fullText: '一日-成人', visible: !0 },
    { label: '👶 儿童', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 0, simpleText: '小', fullText: '一日-儿童', visible: !0 },
    { label: '👴 老人', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR', num: 0, simpleText: '老', fullText: '一日-老人', visible: !0 },
    {
      label: '👨&👶 两大一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_TOW_ADULT_AND_ONE_CHILD',
      num: 0,
      simpleText: '两大一小',
      fullText: '一日-两大一小',
      visible: !1,
      details: [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
      insteadPlans: [],
    },
    {
      label: '👨&👶 一大一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT_AND_ONE_CHILD',
      num: 0,
      simpleText: '一大一小',
      fullText: '一日-一大一小',
      visible: !0,
      details: [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 1 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
    },
    {
      label: '👴&👶 一老一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR_AND_ONE_CHILD',
      num: 0,
      simpleText: '一老一小',
      fullText: '一日-一老一小',
      visible: !0,
      details: [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR', num: 1 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
    },
  ],
  Fa = { class: 'form-group' },
  Wa = { class: 'form-group' },
  ja = { class: 'counter-label' },
  Xa = { class: 'counter-controls' },
  qa = ['onClick'],
  Za = { class: 'counter-value' },
  Ka = ['onClick'],
  Ja = { class: 'form-group' },
  Qa = { class: 'counter-group' },
  el = { class: 'counter-group' },
  tl = { class: 'summary' },
  al = { class: 'summary-item' },
  ll = { class: 'summary-value' },
  nl = { class: 'summary-item' },
  ol = { class: 'summary-value' },
  rl = { class: 'summary-item' },
  il = { class: 'summary-value' },
  sl = { class: 'summary-item' },
  ul = { class: 'summary-value' },
  cl = { class: 'summary-item' },
  dl = { class: 'summary-value' },
  ml = { class: 'summary-item' },
  vl = { class: 'summary-value' },
  fl = { class: 'summary' },
  pl = { class: 'summary-item' },
  hl = { class: 'summary-value' },
  gl = { class: 'summary-item' },
  yl = { class: 'summary-value' },
  bl = { class: 'summary-item' },
  Dl = { class: 'summary-value' },
  wl = { class: 'summary-item' },
  Al = { class: 'summary-value' },
  Nl = { class: 'summary-item' },
  xl = { class: 'summary-value' },
  _l = { class: 'summary-item' },
  kl = { class: 'summary-value' },
  Ol = $e(
    oe({
      __name: 'calculator',
      setup(e) {
        const t = be('useDate', re('')),
          a = re(za.filter((e) => e.visible)),
          o = () => {
            (a.value.forEach((e) => {
              e.num = 0;
            }),
              (i.value.standard = 0),
              (i.value.earlyBird = 0));
          },
          r = re({ costPlatform: 0.02 }),
          i = re({ standard: 0, earlyBird: 0 }),
          s = re({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' }),
          u = re({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' });
        pe(
          [t, a, r],
          () => {
            v();
          },
          { deep: !0 },
        );
        const c = (e, t) => {
            (0 === e.num && t < 0) || (e.num += t);
          },
          d = (e, t) => {
            (0 === i.value[e] && t < 0) || (i.value[e] = (100 * i.value[e] + 100 * t) / 100);
          };
        const m = ie(() => {
          const e = {
            SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT: { num: 0, earlyBirdLink: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT' },
            SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD: { num: 0, earlyBirdLink: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD' },
            SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR: { num: 0, earlyBirdLink: 'SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR' },
          };
          return (
            a.value.forEach((t) => {
              t.details
                ? t.details.forEach((a) => {
                    e[a.category].num += t.num * a.num;
                  })
                : (e[t.category].num += t.num);
            }),
            e
          );
        });
        function v() {
          let e = 0,
            l = 0,
            o = 0,
            i = 0;
          let c = 0,
            d = 0,
            v = 0,
            f = 0;
          const p = (function () {
            const e = n.data.filter((e) => e.useDate === t.value);
            if (0 == e.length) return void Ue('Ticket data not found');
            const a = new Map();
            for (const t of e) {
              const e = t;
              a.set(e.touristResortProductCategoryFullCode, e);
            }
            return a;
          })();
          if (!p) return;
          for (const t in m.value) {
            const a = m.value[t],
              n = p.get(a.earlyBirdLink);
            ((e += a.num * n.preferSaleAmount), (l += a.num * n.price));
          }
          for (const t of a.value) {
            const e = p.get(t.category);
            ((c += t.num * e.preferSaleAmount), (d += t.num * e.price));
          }
          ((i = e * r.value.costPlatform), (o = 0 + i));
          const h = e - o - 0;
          ((u.value.amount = e.toFixed(2)),
            (u.value.originalAmount = l.toFixed(2)),
            (u.value.costPlatform = i.toFixed(2)),
            (u.value.commission = (0).toFixed(2)),
            (u.value.totalCost = o.toFixed(2)),
            (u.value.profit = h.toFixed(2)),
            (f = c * r.value.costPlatform),
            (v = 0 + f));
          const g = c - v - 0;
          ((s.value.amount = c.toFixed(2)),
            (s.value.originalAmount = d.toFixed(2)),
            (s.value.costPlatform = f.toFixed(2)),
            (s.value.commission = (0).toFixed(2)),
            (s.value.totalCost = v.toFixed(2)),
            (s.value.profit = g.toFixed(2)));
        }
        v();
        const f = (e, t) => 5 * Math.ceil(Number.parseFloat(e) / 5) + Number.parseFloat(t + ''),
          p = () => {
            const e = (e) => `${m.value[e].num ? m.value[e].num + a.value.find((t) => t.category === e).simpleText : ''}`;
            let l = `${t.value} ${Ra(t.value).format('dddd')} ${e('SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${e('SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${e('SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
            const n = f(s.value.amount, i.value.standard),
              o = Ra(t.value).diff(new Date(), 'd') >= 9;
            if (o) {
              l += `\n早鸟票：${f(u.value.amount, i.value.earlyBird)}`;
            }
            ((l += `\n标准票：${n}\n临近出游日可能提前售罄，建议提前两天预定`),
              o && (l += '\n\n早鸟价格优惠，不可改签，需提前 10 天预订\n标准可改签一次'),
              navigator.clipboard.writeText(l));
          },
          h = [
            { name: '一大一小' },
            { name: '2大1小' },
            { name: '2大2小' },
            { name: '2大' },
            { name: '清空', func: o },
            { name: '均价', func: () => {} },
            { name: '出票信息', func: p },
          ];
        return (e, t) => {
          const n = l,
            r = fa;
          return (
            Ie(),
            _e('div', null, [
              ke('div', Fa, [
                t[6] || (t[6] = ke('label', null, '快捷操作', -1)),
                (Ie(),
                _e(
                  Oe,
                  null,
                  Se(h, (e) =>
                    ue(
                      n,
                      {
                        size: 'small',
                        type: 'primary',
                        onClick: (t) =>
                          e.func
                            ? e.func()
                            : ((e) => {
                                o();
                                const t = Ua.find((t) => t.name === e);
                                (a.value.forEach((e) => {
                                  t?.quarkFuncConfig.forEach((t) => {
                                    t.category === e.category && (e.num = t.num);
                                  });
                                }),
                                  he(() => {
                                    p();
                                  }));
                              })(e.name),
                        key: e.name,
                      },
                      { default: He(() => [xe(Ce(e.name), 1)]), _: 2 },
                      1032,
                      ['onClick'],
                    ),
                  ),
                  64,
                )),
              ]),
              ke('div', Wa, [
                t[7] || (t[7] = ke('label', null, '选择人数', -1)),
                (Ie(!0),
                _e(
                  Oe,
                  null,
                  Se(
                    Te(a),
                    (e) => (
                      Ie(),
                      _e('div', { class: 'counter-group', key: e.category }, [
                        ke('span', ja, Ce(e.label), 1),
                        ke('div', Xa, [
                          ke('button', { class: 'counter-btn', onClick: (t) => c(e, -1) }, '−', 8, qa),
                          ke('span', Za, Ce(e.num), 1),
                          ke('button', { class: 'counter-btn', onClick: (t) => c(e, 1) }, '+', 8, Ka),
                        ]),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
              ke('div', Ja, [
                t[8] || (t[8] = ke('label', null, '差价', -1)),
                ke('div', Qa, [
                  ke('button', { class: 'counter-btn', onClick: t[0] || (t[0] = (e) => d('standard', -5)) }, '−'),
                  ue(
                    r,
                    {
                      modelValue: Te(i).standard,
                      'onUpdate:modelValue': t[1] || (t[1] = (e) => (Te(i).standard = e)),
                      type: 'number',
                      label: '标准',
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                  ke('button', { class: 'counter-btn', onClick: t[2] || (t[2] = (e) => d('standard', 5)) }, '+'),
                ]),
                ke('div', el, [
                  ke('button', { class: 'counter-btn', onClick: t[3] || (t[3] = (e) => d('earlyBird', -5)) }, '−'),
                  ue(
                    r,
                    {
                      modelValue: Te(i).earlyBird,
                      'onUpdate:modelValue': t[4] || (t[4] = (e) => (Te(i).earlyBird = e)),
                      type: 'number',
                      label: '早鸟',
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                  ke('button', { class: 'counter-btn', onClick: t[5] || (t[5] = (e) => d('earlyBird', 5)) }, '+'),
                ]),
              ]),
              ke('div', tl, [
                t[21] || (t[21] = ke('h2', null, '💰 费用汇总-标准', -1)),
                ke('div', al, [
                  t[10] || (t[10] = ke('span', { class: 'summary-label' }, '总金额', -1)),
                  ke('span', ll, [t[9] || (t[9] = xe(' ¥', -1)), ke('span', null, Ce(Te(s).amount), 1)]),
                ]),
                ke('div', nl, [
                  t[12] || (t[12] = ke('span', { class: 'summary-label' }, '官方票价', -1)),
                  ke('span', ol, [t[11] || (t[11] = xe(' ¥', -1)), ke('span', null, Ce(Te(s).originalAmount), 1)]),
                ]),
                ke('div', rl, [
                  t[14] || (t[14] = ke('span', { class: 'summary-label' }, '总佣金', -1)),
                  ke('span', il, [t[13] || (t[13] = xe(' ¥', -1)), ke('span', null, Ce(Te(s).commission), 1)]),
                ]),
                ke('div', sl, [
                  t[16] || (t[16] = ke('span', { class: 'summary-label' }, '总成本-平台', -1)),
                  ke('span', ul, [t[15] || (t[15] = xe(' ¥', -1)), ke('span', null, Ce(Te(s).costPlatform), 1)]),
                ]),
                ke('div', cl, [
                  t[18] || (t[18] = ke('span', { class: 'summary-label' }, '总成本', -1)),
                  ke('span', dl, [t[17] || (t[17] = xe(' ¥', -1)), ke('span', null, Ce(Te(s).totalCost), 1)]),
                ]),
                ke('div', ml, [
                  t[20] || (t[20] = ke('span', { class: 'summary-label' }, '总利润', -1)),
                  ke('span', vl, [t[19] || (t[19] = xe(' ¥', -1)), ke('span', null, Ce(Te(s).profit), 1)]),
                ]),
              ]),
              ke('div', fl, [
                t[34] || (t[34] = ke('h2', null, '💰 费用汇总-早鸟', -1)),
                ke('div', pl, [
                  t[23] || (t[23] = ke('span', { class: 'summary-label' }, '总金额', -1)),
                  ke('span', hl, [t[22] || (t[22] = xe(' ¥', -1)), ke('span', null, Ce(Te(u).amount), 1)]),
                ]),
                ke('div', gl, [
                  t[25] || (t[25] = ke('span', { class: 'summary-label' }, '官方票价', -1)),
                  ke('span', yl, [t[24] || (t[24] = xe(' ¥', -1)), ke('span', null, Ce(Te(u).originalAmount), 1)]),
                ]),
                ke('div', bl, [
                  t[27] || (t[27] = ke('span', { class: 'summary-label' }, '总佣金', -1)),
                  ke('span', Dl, [t[26] || (t[26] = xe(' ¥', -1)), ke('span', null, Ce(Te(u).commission), 1)]),
                ]),
                ke('div', wl, [
                  t[29] || (t[29] = ke('span', { class: 'summary-label' }, '总成本-平台', -1)),
                  ke('span', Al, [t[28] || (t[28] = xe(' ¥', -1)), ke('span', null, Ce(Te(u).costPlatform), 1)]),
                ]),
                ke('div', Nl, [
                  t[31] || (t[31] = ke('span', { class: 'summary-label' }, '总成本', -1)),
                  ke('span', xl, [t[30] || (t[30] = xe(' ¥', -1)), ke('span', null, Ce(Te(u).totalCost), 1)]),
                ]),
                ke('div', _l, [
                  t[33] || (t[33] = ke('span', { class: 'summary-label' }, '总利润', -1)),
                  ke('span', kl, [t[32] || (t[32] = xe(' ¥', -1)), ke('span', null, Ce(Te(u).profit), 1)]),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [['__scopeId', 'data-v-121d8ef8']],
  ),
  Sl = { class: 'content' },
  Tl = { class: 'input-group' },
  Cl = { class: 'input-wrapper' },
  Il = { class: 'input-group' },
  Hl = oe({
    __name: 'identifyLint',
    setup(e) {
      const t = be('useDate', re('')),
        a = re(''),
        n = re([]),
        o = re(''),
        r = re(''),
        i = re(!1),
        s = re(!1),
        u = re([]),
        c = re([]),
        d = re(),
        m = {
          CHINA_ID: { fullName: '中国居民身份证', shortName: '身份证' },
          PASSPORT: { fullName: '护照', shortName: '护照' },
          HK_MACAU_PASS: { fullName: '港澳通行证（回乡证）', shortName: '回乡证' },
          TAIWAN_PASS: { fullName: '台湾通行证', shortName: '台湾通行证' },
          UNKNOWN: { fullName: '未知类型', shortName: '未知' },
        },
        v = {
          ADULT: { fullName: '成人', shortName: '成人' },
          CHILD: { fullName: '儿童', shortName: '儿童' },
          SENIOR: { fullName: '老人', shortName: '老人' },
          NOT: { fullName: '免票', shortName: '免票' },
          UNKNOWN: { fullName: '未知', shortName: '未知' },
        },
        f = [],
        p = [];
      for (const l in m) f.push({ text: m[l].fullName, value: m[l].shortName });
      for (const l in v) p.push({ text: v[l].fullName, value: v[l].shortName });
      ((u.value = [f[0].value]), (c.value = [p[0].value]));
      const h = (e) => {
          if (18 !== e.length) return null;
          return { birthday: `${e.slice(6, 4)}-${e.slice(10, 2)}-${e.slice(12, 2)}`, ...g(e.slice(6, 14)) };
        },
        g = (e) => {
          const a = Ra(t.value).diff(e, 'y');
          return a < 2
            ? { ticketType: '免票', orderPriority: 0 }
            : a <= 12
              ? { ticketType: '儿童', orderPriority: 2 }
              : a < 60
                ? { ticketType: '成人', orderPriority: 1 }
                : { ticketType: '老人', orderPriority: 3 };
        },
        y = (e) => {
          if (!e) return { type: m.UNKNOWN.shortName, valid: !1, message: '输入不能为空' };
          const t = e.trim();
          if (/^\d{15}$|^\d{17}[\dXx]$/.test(t)) {
            const e = ((e) => {
              if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(e)) return !1;
              const t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
              let a = 0;
              for (let l = 0; l < 17; l++) a += parseInt(e[l]) * t[l];
              return ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'][a % 11] === e[17].toUpperCase();
            })(t);
            return { type: m.CHINA_ID.shortName, valid: e, message: e ? '有效的身份证号码' : '身份证号码校验失败', details: h(t) };
          }
          return /^[CHM]\d{8,10}$/.test(t)
            ? { type: m.HK_MACAU_PASS.shortName }
            : ((e) => /^\d{8,10}$/.test(e))(t)
              ? { type: m.TAIWAN_PASS.shortName, valid: !0, message: '台湾通行证' }
              : ((e) => /^[EG]\d{8}$/.test(e) || /^[A-Z]{1,2}\d{6,9}$/.test(e))(t)
                ? { type: m.PASSPORT.shortName, valid: !0, message: '护照号码' }
                : { type: m.UNKNOWN.shortName, valid: !1, message: '无法识别的输入类型' };
        },
        b = () => {
          (n.value.forEach((e) => {
            const t = y(e.id);
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
        D = () => {
          let e = a.value;
          [',', '，'].forEach((t) => {
            e = e.replace(t, ' ');
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
        w = (e) => {
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
        A = ({ selectedValues: e }) => {
          ((d.value.idType = e[0]), x());
        },
        N = ({ selectedValues: e }) => {
          ((d.value.ticketType = e[0]), _());
        },
        x = () => {
          ((i.value = !1), (d.value = {}));
        },
        _ = () => {
          ((s.value = !1), (d.value = {}));
        },
        k = () => {
          let e = '';
          ((e += n.value
            .map((e) => `上海乐高乐园 ${Ra(t.value).format('YYYY-MM-DD')} ${e.ticketType} ${e.idType} 金额\n${e.name} ${e.id}`)
            .join('\n')),
            navigator.clipboard.writeText(e));
        };
      return (e, t) => {
        const m = fa,
          v = l,
          h = ea,
          g = Re;
        return (
          Ie(),
          _e('div', Sl, [
            ke('div', Tl, [
              ke('div', Cl, [
                ue(
                  m,
                  {
                    type: 'textarea',
                    modelValue: Te(a),
                    'onUpdate:modelValue': t[0] || (t[0] = (e) => (Ee(a) ? (a.value = e) : null)),
                    rows: '10',
                    onKeyup: Le(b, ['enter']),
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                ke('div', null, '票种统计：' + Ce(Te(o)), 1),
                ke('div', null, 'ID 统计：' + Ce(Te(r)), 1),
                ue(
                  v,
                  { onClick: D, type: 'primary', size: 'small' },
                  { default: He(() => [...(t[6] || (t[6] = [xe('分割', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  { onClick: b, type: 'primary', size: 'small' },
                  { default: He(() => [...(t[7] || (t[7] = [xe('自动识别', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  { onClick: k, type: 'primary', size: 'small' },
                  { default: He(() => [...(t[8] || (t[8] = [xe('复制', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  { onClick: w, type: 'primary', size: 'small' },
                  { default: He(() => [...(t[9] || (t[9] = [xe('互换', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  {
                    onClick:
                      t[1] ||
                      (t[1] = (e) => {
                        ((a.value = ''), (n.value = []));
                      }),
                    type: 'primary',
                    size: 'small',
                  },
                  { default: He(() => [...(t[10] || (t[10] = [xe(' 清空 ', -1)]))]), _: 1 },
                ),
              ]),
            ]),
            ke('div', Il, [
              (Ie(!0),
              _e(
                Oe,
                null,
                Se(
                  Te(n),
                  (e, a) => (
                    Ie(),
                    _e('div', { key: e.name }, [
                      ue(m, { modelValue: e.name, 'onUpdate:modelValue': (t) => (e.name = t), label: '姓名', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ue(m, { modelValue: e.id, 'onUpdate:modelValue': (t) => (e.id = t), label: 'ID', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ue(
                        m,
                        {
                          modelValue: e.idType,
                          'onUpdate:modelValue': (t) => (e.idType = t),
                          'is-link': '',
                          readonly: '',
                          label: '类型',
                          onClick: (t) => {
                            ((i.value = !0), (d.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      ue(m, { modelValue: e.idValid, 'onUpdate:modelValue': (t) => (e.idValid = t), label: 'ID 状态' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ue(
                        m,
                        {
                          modelValue: e.ticketType,
                          'onUpdate:modelValue': (t) => (e.ticketType = t),
                          'is-link': '',
                          readonly: '',
                          label: '票种',
                          onClick: (t) => {
                            ((s.value = !0), (d.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      ue(
                        v,
                        { onClick: (e) => w(a), type: 'primary', size: 'small' },
                        { default: He(() => [...(t[11] || (t[11] = [xe('互换', -1)]))]), _: 1 },
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
              g,
              { show: Te(i), 'onUpdate:show': t[3] || (t[3] = (e) => (Ee(i) ? (i.value = e) : null)), round: '', position: 'bottom' },
              {
                default: He(() => [
                  ue(
                    h,
                    {
                      columns: f,
                      modelValue: Te(u),
                      'onUpdate:modelValue': t[2] || (t[2] = (e) => (Ee(u) ? (u.value = e) : null)),
                      onCancel: x,
                      onConfirm: A,
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
            ue(
              g,
              { show: Te(s), 'onUpdate:show': t[5] || (t[5] = (e) => (Ee(s) ? (s.value = e) : null)), round: '', position: 'bottom' },
              {
                default: He(() => [
                  ue(
                    h,
                    {
                      columns: p,
                      modelValue: Te(c),
                      'onUpdate:modelValue': t[4] || (t[4] = (e) => (Ee(c) ? (c.value = e) : null)),
                      onCancel: _,
                      onConfirm: N,
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
  $l = [
    { simpleText: '询价链接', fullText: '询价链接，具体以日期和人数为准' },
    {
      simpleText: '票务说明',
      fullText: '非团票，不用集合，不用二次预约，不用满人成团\n支持补差升级年卡\n刷身份证或人工通道核对无限次入园\n最终报价，无需补差',
    },
    {
      simpleText: '入园',
      fullText:
        '上海乐高乐园入园方式\n1. 刷身份证\n2. 人工通道核对有效证件（可电子版）\n3. APP 【游园-行程】录入人脸，刷人脸（限身份证）\n几种都可以',
      touristResort: 'SHANGHAI_LEGOLAND',
    },
    {
      simpleText: '乐捷通',
      fullText: '乐捷通大小同价\n无限次原价 588，成交价 559\n无限次原价 788，成交价 750\n无限次原价 888，成交价 844',
      touristResort: 'SHANGHAI_LEGOLAND',
      visible: !0,
    },
    {
      simpleText: '年卡',
      fullText: '年卡大小同价\n银卡原价 699，成交价 665\n金卡原价 1399，成交价 1340',
      touristResort: 'SHANGHAI_LEGOLAND',
      visible: !0,
    },
    { simpleText: '已售罄', fullText: '官方已售罄，无法出票，只能订其它日期' },
    { simpleText: '录入信息', fullText: '您先在上海乐高乐园小程序【我的-常用旅客】录入好所有人的信息', touristResort: 'SHANGHAI_LEGOLAND' },
    {
      simpleText: '核对信息',
      fullText:
        '请核对信息是否有误，无误请点击确认，系统才能发货\n确认后发一下所有出游人（含儿童）姓名+身份证号（护照号等，非身份证需标明儿童、成人）',
      touristResort: 'SHANGHAI_LEGOLAND',
    },
    {
      simpleText: '发货',
      fullText:
        '已出票，刷身份证入园\n未带或无身份证，可刷脸或持户口本等有效证件（可电子版）走人工通道\n有问题请及时提出，看到会回复\n\n以下为 APP 绑定流程（可选）\n下载上海乐高乐园 APP，点击我的-立即绑定-查询第三方渠道订单\n\n第一行是证件号，第三行是订单号，绑定需先输入订单号，再输入证件号确认绑定\n部分订单姓名是拼音，无影响，已和官方客服确认\n绑定后，可在【游园-行程】录入人脸，刷脸入园（限身份证）\n入园后可在【游园-园内服务】线上预约创意工坊\n入园当天，可在【游园-行程】补差升级年卡',
      comment: '（可接 95 折升金卡， 95 折无限乐捷通）',
      touristResort: 'SHANGHAI_LEGOLAND',
    },
    {
      simpleText: '营业时间',
      fullText: '上海乐高乐园营业时间\n工作日 10:00-18:00（以实际为准）\n节假日 9:00-19:00（以实际为准）',
      touristResort: 'SHANGHAI_LEGOLAND',
    },
    { simpleText: '加 V', fullText: 'ahui_2005888，您加我吧，一般都在，没回弹我语音就行' },
    {
      simpleText: '长隆外包',
      fullText:
        '【闲鱼】https://m.tb.cn/h.7fwcB1I?tk=KZ5yfyXCOng HU071 「我在闲鱼发布了【珠海长隆海洋王国2大1小】」\n点击链接直接打开\n\n您可以问问我朋友，暂时我这边只能出成人的',
      touristResort: 'CHIMELONG_OCEAN_KINGDOM',
      visible: !1,
    },
    { simpleText: '虚拟 ID', func: () => Date.now() + 'XXXXX' },
  ],
  Ll = [
    { name: '上海乐高乐园度假区', code: 'SHANGHAI_LEGOLAND', simpleName: '乐高', orderPriority: 200 },
    { name: '珠海长隆海洋王国', code: 'CHIMELONG_OCEAN_KINGDOM', simpleName: '长隆海洋', orderPriority: 110 },
    { name: '广州长隆野生动物世界', code: 'CHIMELONG_SAFARI', simpleName: '长隆野动', orderPriority: 110 },
    { name: '上海迪士尼度假区', code: 'SHANGHAI_DISNEY', simpleName: '迪士尼', orderPriority: 100 },
    { name: '北京环球度假区', code: 'BEIJING_UNIVERSAL', simpleName: '环球', orderPriority: 100 },
    { name: '上海动物园', code: 'SHANGHAI_ZOO', simpleName: '上动', orderPriority: 100 },
  ],
  El = oe({
    __name: 'term',
    setup(e) {
      const t = re(''),
        a = re([]);
      (pe([t], () => {
        a.value = $l.filter((e) => !e.touristResort || e.touristResort === t.value);
      }),
        ge(() => {
          t.value = 'SHANGHAI_LEGOLAND';
        }));
      return (e, n) => {
        const o = l,
          r = qt,
          i = Zt;
        return (
          Ie(),
          Me(
            i,
            { active: Te(t), 'onUpdate:active': n[0] || (n[0] = (e) => (Ee(t) ? (t.value = e) : null)) },
            {
              default: He(() => [
                (Ie(!0),
                _e(
                  Oe,
                  null,
                  Se(
                    Te(Ll),
                    (e) => (
                      Ie(),
                      Me(
                        r,
                        { title: e.simpleName, name: e.code, key: e.name },
                        {
                          default: He(() => [
                            (Ie(!0),
                            _e(
                              Oe,
                              null,
                              Se(
                                Te(a),
                                (e) => (
                                  Ie(),
                                  _e('div', { key: e.fullText }, [
                                    ke('div', null, [ke('span', null, Ce(e.simpleText), 1)]),
                                    ke('div', null, [
                                      ue(
                                        o,
                                        {
                                          onClick: (t) =>
                                            ((e) => {
                                              e.func
                                                ? navigator.clipboard.writeText(e.func())
                                                : navigator.clipboard.writeText(e.fullText || '');
                                            })(e),
                                        },
                                        { default: He(() => [...(n[1] || (n[1] = [xe('复制', -1)]))]), _: 1 },
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
  Ml = oe({
    __name: 'tools',
    setup(e) {
      const t = re(0),
        a = [
          { label: '成人', num: 0, avgRatio: 0.55, avgAmount: 0 },
          { label: '儿童', num: 0, avgRatio: 0.45, avgAmount: 0 },
          { label: '老人', num: 0, avgRatio: 0.45, avgAmount: 0 },
        ];
      return (e, n) => {
        const o = fa,
          r = l;
        return (
          Ie(),
          _e('div', null, [
            ue(o, { modelValue: Te(t), 'onUpdate:modelValue': n[0] || (n[0] = (e) => (Ee(t) ? (t.value = e) : null)) }, null, 8, [
              'modelValue',
            ]),
            (Ie(),
            _e(
              Oe,
              null,
              Se(a, (e, t) =>
                ue(o, { modelValue: e.num, 'onUpdate:modelValue': (t) => (e.num = t), key: t, label: e.label }, null, 8, [
                  'modelValue',
                  'onUpdate:modelValue',
                  'label',
                ]),
              ),
              64,
            )),
            (Ie(),
            _e(
              Oe,
              null,
              Se(a, (e, t) => ke('div', { key: t }, Ce(e.label), 1)),
              64,
            )),
            ue(r, null, { default: He(() => [...(n[1] || (n[1] = [xe('复制', -1)]))]), _: 1 }),
          ])
        );
      };
    },
  }),
  Vl = { class: 'container' },
  Gl = { class: 'form-group' },
  Bl = $e(
    oe({
      __name: 'index',
      setup(e) {
        Ra.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = re('calculator'),
          a = (e) => Ra(e).format('YYYY-MM-DD'),
          l = re(a(new Date()));
        De('useDate', l);
        const n = re(!1),
          o = (e) => {
            ((n.value = !1), (l.value = a(e)));
          };
        return (e, a) => {
          const r = na,
            i = Ga,
            s = qt,
            u = Zt;
          return (
            Ie(),
            _e('div', Vl, [
              a[3] || (a[3] = ke('h1', null, '🎫 票务计算器', -1)),
              ke('div', Gl, [
                ue(r, { title: '选择日期', value: Te(l), onClick: a[0] || (a[0] = (e) => (n.value = !0)) }, null, 8, ['value']),
                ue(i, { show: Te(n), 'onUpdate:show': a[1] || (a[1] = (e) => (Ee(n) ? (n.value = e) : null)), onConfirm: o }, null, 8, [
                  'show',
                ]),
              ]),
              ue(
                u,
                { active: Te(t), 'onUpdate:active': a[2] || (a[2] = (e) => (Ee(t) ? (t.value = e) : null)) },
                {
                  default: He(() => [
                    ue(s, { title: '票务', name: 'calculator', key: 'calculator' }, { default: He(() => [ue(Ol)]), _: 1 }),
                    ue(s, { title: '证件', name: 'identifyLint', key: 'identifyLint' }, { default: He(() => [ue(Hl)]), _: 1 }),
                    ue(s, { title: '工具', name: 'tools', key: 'tools' }, { default: He(() => [ue(Ml)]), _: 1 }),
                    ue(s, { title: '术语', name: 'term', key: 'term' }, { default: He(() => [ue(El)]), _: 1 }),
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
export { Bl as default };
