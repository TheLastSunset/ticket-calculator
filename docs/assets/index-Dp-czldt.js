/* empty css              */ import { r as e, a as t, u as n, B as i } from './index-DjQbAuBB.js';
import { p as r, a as o } from './index-CWDoB3w-.js';
import { u as a, a as l, c as s, L as u, s as c, P as d, b as f } from './function-call-CBOxVWcc.js';
import {
  c as m,
  e as v,
  i as p,
  a as h,
  m as g,
  b,
  n as y,
  u as w,
  d as N,
  p as D,
  H as A,
  r as _,
  f as x,
  h as O,
  s as S,
  j as E,
  o as k,
  k as I,
  l as C,
  q as T,
  v as L,
  g as H,
  x as M,
  y as $,
  z as Y,
  A as P,
  w as V,
  t as G,
  C as B,
  D as U,
  E as R,
  F,
  G as z,
  J as W,
  K as j,
  L as q,
  M as Z,
  N as K,
  O as X,
  P as J,
  Q,
  I as ee,
  R as te,
  S as ne,
  T as ie,
  U as re,
  V as oe,
  W as ae,
  X as le,
  Y as se,
  Z as ue,
  _ as ce,
  $ as de,
  a0 as fe,
} from './index-CC0320ps.js';
import {
  d as me,
  r as ve,
  e as pe,
  E as he,
  j as ge,
  G as be,
  H as ye,
  I as we,
  J as Ne,
  L as De,
  w as Ae,
  h as _e,
  f as xe,
  M as Oe,
  N as Se,
  O as Ee,
  i as ke,
  P as Ie,
  v as Ce,
  D as Te,
  c as Le,
  a as He,
  F as Me,
  z as $e,
  u as Ye,
  o as Pe,
  k as Ve,
  t as Ge,
  _ as Be,
  Q as Ue,
  x as Re,
  m as Fe,
} from './index-xCY7pMo5.js';
import { u as ze } from './use-height-CykuSWtb.js';
const [We, je, qe] = m('picker'),
  Ze = (e) => e.find((e) => !e.disabled) || e[0];
function Ke(e, t) {
  for (let n = (t = h(t, 0, e.length)); n < e.length; n++) if (!e[n].disabled) return n;
  for (let n = t - 1; n >= 0; n--) if (!e[n].disabled) return n;
  return 0;
}
const Xe = (e, t, n) => void 0 !== t && e.some((e) => e[n.value] === t);
function Je(e, t, n) {
  const i = e.findIndex((e) => e[n.value] === t);
  return e[Ke(e, i)];
}
const [Qe, et] = m('picker-column'),
  tt = Symbol(Qe);
var nt = me({
  name: Qe,
  props: {
    value: y,
    fields: g(Object),
    options: b(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: g(Number),
    swipeDuration: g(y),
    visibleOptionNum: g(y),
  },
  emits: ['change', 'clickOption', 'scrollInto'],
  setup(e, { emit: t, slots: n }) {
    let i, r, o, s, u;
    const c = ve(),
      d = ve(),
      f = ve(0),
      m = ve(0),
      v = a(),
      p = () => e.options.length,
      g = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
      b = (n) => {
        let r = Ke(e.options, n);
        const o = -r * e.optionHeight,
          a = () => {
            r > p() - 1 && (r = Ke(e.options, n));
            const i = e.options[r][e.fields.value];
            i !== e.value && t('change', i);
          };
        (i && o !== f.value ? (u = a) : a(), (f.value = o));
      },
      y = () => e.readonly || !e.options.length,
      A = (t) => h(Math.round(-t / e.optionHeight), 0, p() - 1),
      _ = pe(() => A(f.value)),
      x = () => {
        ((i = !1), (m.value = 0), u && (u(), (u = null)));
      },
      O = (e) => {
        if (!y()) {
          if ((v.start(e), i)) {
            const e = (function (e) {
              const { transform: t } = window.getComputedStyle(e),
                n = t.slice(7, t.length - 1).split(', ')[5];
              return Number(n);
            })(d.value);
            f.value = Math.min(0, e - g());
          }
          ((m.value = 0), (r = f.value), (o = Date.now()), (s = r), (u = null));
        }
      },
      S = () => {
        if (y()) return;
        const t = f.value - s,
          n = Date.now() - o;
        if (n < 300 && Math.abs(t) > 15)
          return void ((t, n) => {
            const i = Math.abs(t / n);
            t = f.value + (i / 0.003) * (t < 0 ? -1 : 1);
            const r = A(t);
            ((m.value = +e.swipeDuration), b(r));
          })(t, n);
        const r = A(f.value);
        ((m.value = 200),
          b(r),
          setTimeout(() => {
            i = !1;
          }, 0));
      },
      E = () => {
        const r = { height: `${e.optionHeight}px` };
        return e.options.map((o, a) => {
          const l = o[e.fields.text],
            { disabled: s } = o,
            c = o[e.fields.value],
            d = {
              role: 'button',
              style: r,
              tabindex: s ? -1 : 0,
              class: [et('item', { disabled: s, selected: c === e.value }), o.className],
              onClick: () =>
                ((n) => {
                  i || y() || ((u = null), (m.value = 200), b(n), t('clickOption', e.options[n]));
                })(a),
            },
            f = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: l };
          return ge('li', d, [n.option ? n.option(o, a) : ge('div', f, null)]);
        });
      };
    return (
      w(tt),
      l({ stopMomentum: x }),
      he(() => {
        const t = i ? Math.floor(-f.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          n = Ke(e.options, t),
          r = -n * e.optionHeight;
        (i && n < t && x(), (f.value = r));
      }),
      N(
        'touchmove',
        (n) => {
          if (y()) return;
          (v.move(n), v.isVertical() && ((i = !0), D(n, !0)));
          const a = h(r + v.deltaY.value, -p() * e.optionHeight, e.optionHeight),
            l = A(a);
          (l !== _.value && t('scrollInto', e.options[l]), (f.value = a));
          const u = Date.now();
          u - o > 300 && ((o = u), (s = a));
        },
        { target: c },
      ),
      () =>
        ge('div', { ref: c, class: et(), onTouchstartPassive: O, onTouchend: S, onTouchcancel: S }, [
          ge(
            'ul',
            {
              ref: d,
              style: {
                transform: `translate3d(0, ${f.value + g()}px, 0)`,
                transitionDuration: `${m.value}ms`,
                transitionProperty: m.value ? 'all' : 'none',
              },
              class: et('wrapper'),
              onTransitionend: x,
            },
            [E()],
          ),
        ])
    );
  },
});
const [it] = m('picker-toolbar'),
  rt = { title: String, cancelButtonText: String, confirmButtonText: String },
  ot = ['cancel', 'confirm', 'title', 'toolbar'],
  at = Object.keys(rt);
var lt = me({
  name: it,
  props: rt,
  emits: ['confirm', 'cancel'],
  setup(e, { emit: t, slots: n }) {
    const i = () => t('cancel'),
      r = () => t('confirm'),
      o = () => {
        var t;
        const r = null != (t = e.cancelButtonText) ? t : qe('cancel');
        if (n.cancel || r) return ge('button', { type: 'button', class: [je('cancel'), A], onClick: i }, [n.cancel ? n.cancel() : r]);
      },
      a = () => {
        var t;
        const i = null != (t = e.confirmButtonText) ? t : qe('confirm');
        if (n.confirm || i) return ge('button', { type: 'button', class: [je('confirm'), A], onClick: r }, [n.confirm ? n.confirm() : i]);
      };
    return () =>
      ge('div', { class: je('toolbar') }, [
        n.toolbar
          ? n.toolbar()
          : [o(), n.title ? n.title() : e.title ? ge('div', { class: [je('title'), 'van-ellipsis'] }, [e.title]) : void 0, a()],
      ]);
  },
});
/**
 * @vue/shared v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const st = Array.isArray,
  ut = (e) => 'string' == typeof e,
  ct = (e) => null !== e && 'object' == typeof e,
  dt = /\B([A-Z])/g,
  ft = ((e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  })((e) => e.replace(dt, '-$1').toLowerCase());
function mt(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        r = ut(i) ? gt(i) : mt(i);
      if (r) for (const e in r) t[e] = r[e];
    }
    return t;
  }
  if (ut(e) || ct(e)) return e;
}
const vt = /;(?![^(]*\))/g,
  pt = /:([^]+)/,
  ht = /\/\*[^]*?\*\//g;
function gt(e) {
  const t = {};
  return (
    e
      .replace(ht, '')
      .split(vt)
      .forEach((e) => {
        if (e) {
          const n = e.split(pt);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function bt(e) {
  let t = '';
  if (ut(e)) t = e;
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const i = bt(e[n]);
      i && (t += i + ' ');
    }
  else if (ct(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
let yt = 0;
function wt() {
  const e = be(),
    { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
  return `${t}-${++yt}`;
}
function Nt() {
  const e = ve([]),
    t = [];
  ye(() => {
    e.value = [];
  });
  return [
    e,
    (n) => (
      t[n] ||
        (t[n] = (t) => {
          e.value[n] = t;
        }),
      t[n]
    ),
  ];
}
function Dt(e, t) {
  if (!E || !window.IntersectionObserver) return;
  const n = new IntersectionObserver(
      (e) => {
        t(e[0].intersectionRatio > 0);
      },
      { root: document.body },
    ),
    i = () => {
      e.value && n.unobserve(e.value);
    };
  (we(i),
    Ne(i),
    k(() => {
      e.value && n.observe(e.value);
    }));
}
const [At, _t] = m('sticky');
const xt = V(
    me({
      name: At,
      props: { zIndex: y, position: C('top'), container: Object, offsetTop: I(0), offsetBottom: I(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: n }) {
        const i = ve(),
          r = T(i),
          o = De({ fixed: !1, width: 0, height: 0, transform: 0 }),
          a = ve(!1),
          l = pe(() => L('top' === e.position ? e.offsetTop : e.offsetBottom)),
          s = pe(() => {
            if (a.value) return;
            const { fixed: e, height: t, width: n } = o;
            return e ? { width: `${n}px`, height: `${t}px` } : void 0;
          }),
          u = pe(() => {
            if (!o.fixed || a.value) return;
            const t = v(H(e.zIndex), { width: `${o.width}px`, height: `${o.height}px`, [e.position]: `${l.value}px` });
            return (o.transform && (t.transform = `translate3d(0, ${o.transform}px, 0)`), t);
          }),
          c = () => {
            if (!i.value || M(i)) return;
            const { container: n, position: r } = e,
              a = $(i),
              s = O(window);
            if (((o.width = a.width), (o.height = a.height), 'top' === r))
              if (n) {
                const e = $(n),
                  t = e.bottom - l.value - o.height;
                ((o.fixed = l.value > a.top && e.bottom > 0), (o.transform = t < 0 ? t : 0));
              } else o.fixed = l.value > a.top;
            else {
              const { clientHeight: e } = document.documentElement;
              if (n) {
                const t = $(n),
                  i = e - t.top - l.value - o.height;
                ((o.fixed = e - l.value < a.bottom && e > t.top), (o.transform = i < 0 ? -i : 0));
              } else o.fixed = e - l.value < a.bottom;
            }
            ((e) => {
              t('scroll', { scrollTop: e, isFixed: o.fixed });
            })(s);
          };
        return (
          Ae(
            () => o.fixed,
            (e) => t('change', e),
          ),
          N('scroll', c, { target: r, passive: !0 }),
          Dt(i, c),
          Ae([Y, P], () => {
            i.value &&
              !M(i) &&
              o.fixed &&
              ((a.value = !0),
              _e(() => {
                const e = $(i);
                ((o.width = e.width), (o.height = e.height), (a.value = !1));
              }));
          }),
          () => {
            var e;
            return ge('div', { ref: i, style: s.value }, [
              ge('div', { class: _t({ fixed: o.fixed && !a.value }), style: u.value }, [null == (e = n.default) ? void 0 : e.call(n)]),
            ]);
          }
        );
      },
    }),
  ),
  [Ot, St] = m('swipe'),
  Et = {
    loop: G,
    width: y,
    height: y,
    vertical: Boolean,
    autoplay: I(0),
    duration: I(500),
    touchable: G,
    lazyRender: Boolean,
    initialSwipe: I(0),
    indicatorColor: String,
    showIndicators: G,
    stopPropagation: G,
  },
  kt = Symbol(Ot);
const It = V(
    me({
      name: Ot,
      props: Et,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: n }) {
        const i = ve(),
          r = ve(),
          o = De({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let s = !1;
        const u = a(),
          { children: c, linkChildren: d } = B(kt),
          f = pe(() => c.length),
          m = pe(() => o[e.vertical ? 'height' : 'width']),
          v = pe(() => (e.vertical ? u.deltaY.value : u.deltaX.value)),
          p = pe(() => {
            if (o.rect) {
              return (e.vertical ? o.rect.height : o.rect.width) - m.value * f.value;
            }
            return 0;
          }),
          g = pe(() => (m.value ? Math.ceil(Math.abs(p.value) / m.value) : f.value)),
          b = pe(() => f.value * m.value),
          y = pe(() => (o.active + f.value) % f.value),
          w = pe(() => {
            const t = e.vertical ? 'vertical' : 'horizontal';
            return u.direction.value === t;
          }),
          A = pe(() => {
            const t = {
              transitionDuration: `${o.swiping ? 0 : e.duration}ms`,
              transform: `translate${e.vertical ? 'Y' : 'X'}(${+o.offset.toFixed(2)}px)`,
            };
            if (m.value) {
              const n = e.vertical ? 'height' : 'width',
                i = e.vertical ? 'width' : 'height';
              ((t[n] = `${b.value}px`), (t[i] = e[i] ? `${e[i]}px` : ''));
            }
            return t;
          }),
          _ = (t, n = 0) => {
            let i = t * m.value;
            e.loop || (i = Math.min(i, -p.value));
            let r = n - i;
            return (e.loop || (r = h(r, p.value, 0)), r);
          },
          x = ({ pace: n = 0, offset: i = 0, emitChange: r }) => {
            if (f.value <= 1) return;
            const { active: a } = o,
              l = ((t) => {
                const { active: n } = o;
                return t ? (e.loop ? h(n + t, -1, f.value) : h(n + t, 0, g.value)) : n;
              })(n),
              s = _(l, i);
            if (e.loop) {
              if (c[0] && s !== p.value) {
                const e = s < p.value;
                c[0].setOffset(e ? b.value : 0);
              }
              if (c[f.value - 1] && 0 !== s) {
                const e = s > 0;
                c[f.value - 1].setOffset(e ? -b.value : 0);
              }
            }
            ((o.active = l), (o.offset = s), r && l !== a && t('change', y.value));
          },
          O = () => {
            ((o.swiping = !0), o.active <= -1 ? x({ pace: f.value }) : o.active >= f.value && x({ pace: -f.value }));
          },
          S = () => {
            (O(),
              u.reset(),
              F(() => {
                ((o.swiping = !1), x({ pace: 1, emitChange: !0 }));
              }));
          };
        let E;
        const k = () => clearTimeout(E),
          I = () => {
            (k(),
              +e.autoplay > 0 &&
                f.value > 1 &&
                (E = setTimeout(() => {
                  (S(), I());
                }, +e.autoplay)));
          },
          C = (t = +e.initialSwipe) => {
            if (!i.value) return;
            const n = () => {
              var n, r;
              if (!M(i)) {
                const t = { width: i.value.offsetWidth, height: i.value.offsetHeight };
                ((o.rect = t), (o.width = +(null != (n = e.width) ? n : t.width)), (o.height = +(null != (r = e.height) ? r : t.height)));
              }
              (f.value && -1 === (t = Math.min(f.value - 1, t)) && (t = f.value - 1),
                (o.active = t),
                (o.swiping = !0),
                (o.offset = _(t)),
                c.forEach((e) => {
                  e.setOffset(0);
                }),
                I());
            };
            M(i) ? _e().then(n) : n();
          },
          T = () => C(o.active);
        let L;
        const H = (t) => {
            !e.touchable || t.touches.length > 1 || (u.start(t), (s = !1), (L = Date.now()), k(), O());
          },
          $ = () => {
            if (!e.touchable || !o.swiping) return;
            const n = Date.now() - L,
              i = v.value / n;
            if ((Math.abs(i) > 0.25 || Math.abs(v.value) > m.value / 2) && w.value) {
              const t = e.vertical ? u.offsetY.value : u.offsetX.value;
              let n = 0;
              ((n = e.loop ? (t > 0 ? (v.value > 0 ? -1 : 1) : 0) : -Math[v.value > 0 ? 'ceil' : 'floor'](v.value / m.value)),
                x({ pace: n, emitChange: !0 }));
            } else v.value && x({ pace: 0 });
            ((s = !1), (o.swiping = !1), t('dragEnd', { index: y.value }), I());
          },
          V = (t, n) => {
            const i = n === y.value,
              r = i ? { backgroundColor: e.indicatorColor } : void 0;
            return ge('i', { style: r, class: St('indicator', { active: i }) }, null);
          };
        return (
          l({
            prev: () => {
              (O(),
                u.reset(),
                F(() => {
                  ((o.swiping = !1), x({ pace: -1, emitChange: !0 }));
                }));
            },
            next: S,
            state: o,
            resize: T,
            swipeTo: (t, n = {}) => {
              (O(),
                u.reset(),
                F(() => {
                  let i;
                  ((i = e.loop && t === f.value ? (0 === o.active ? 0 : t) : t % f.value),
                    n.immediate
                      ? F(() => {
                          o.swiping = !1;
                        })
                      : (o.swiping = !1),
                    x({ pace: i - o.active, emitChange: !0 }));
                }));
            },
          }),
          d({ size: m, props: e, count: f, activeIndicator: y }),
          Ae(
            () => e.initialSwipe,
            (e) => C(+e),
          ),
          Ae(f, () => C(o.active)),
          Ae(() => e.autoplay, I),
          Ae([Y, P, () => e.width, () => e.height], T),
          Ae(U(), (e) => {
            'visible' === e ? I() : k();
          }),
          xe(C),
          Oe(() => C(o.active)),
          R(() => C(o.active)),
          we(k),
          Ne(k),
          N(
            'touchmove',
            (n) => {
              if (e.touchable && o.swiping && (u.move(n), w.value)) {
                (!e.loop && ((0 === o.active && v.value > 0) || (o.active === f.value - 1 && v.value < 0))) ||
                  (D(n, e.stopPropagation), x({ offset: v.value }), s || (t('dragStart', { index: y.value }), (s = !0)));
              }
            },
            { target: r },
          ),
          () => {
            var t;
            return ge('div', { ref: i, class: St() }, [
              ge(
                'div',
                {
                  ref: r,
                  style: A.value,
                  class: St('track', { vertical: e.vertical }),
                  onTouchstartPassive: H,
                  onTouchend: $,
                  onTouchcancel: $,
                },
                [null == (t = n.default) ? void 0 : t.call(n)],
              ),
              n.indicator
                ? n.indicator({ active: y.value, total: f.value })
                : e.showIndicators && f.value > 1
                  ? ge('div', { class: St('indicators', { vertical: e.vertical }) }, [Array(f.value).fill('').map(V)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [Ct, Tt] = m('tabs');
var Lt = me({
  name: Ct,
  props: {
    count: g(Number),
    inited: Boolean,
    animated: Boolean,
    duration: g(y),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: g(Number),
  },
  emits: ['change'],
  setup(e, { emit: t, slots: n }) {
    const i = ve(),
      r = (e) => t('change', e),
      o = () => {
        var t;
        const o = null == (t = n.default) ? void 0 : t.call(n);
        return e.animated || e.swipeable
          ? ge(
              It,
              {
                ref: i,
                loop: !1,
                class: Tt('track'),
                duration: 1e3 * +e.duration,
                touchable: e.swipeable,
                lazyRender: e.lazyRender,
                showIndicators: !1,
                onChange: r,
              },
              { default: () => [o] },
            )
          : o;
      },
      a = (t) => {
        const n = i.value;
        n && n.state.active !== t && n.swipeTo(t, { immediate: !e.inited });
      };
    return (
      Ae(() => e.currentIndex, a),
      xe(() => {
        a(e.currentIndex);
      }),
      l({ swipeRef: i }),
      () => ge('div', { class: Tt('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [Ht, Mt] = m('tabs'),
  $t = {
    type: C('line'),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: I(0),
    duration: I(0.3),
    animated: Boolean,
    ellipsis: G,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: I(0),
    background: String,
    lazyRender: G,
    showHeader: G,
    lineWidth: y,
    lineHeight: y,
    beforeChange: Function,
    swipeThreshold: I(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Yt = Symbol(Ht);
var Pt = me({
  name: Ht,
  props: $t,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: n, slots: i }) {
    let r, o, a, u, c;
    const d = ve(),
      f = ve(),
      m = ve(),
      v = ve(),
      h = wt(),
      g = T(d),
      [b, y] = Nt(),
      { children: w, linkChildren: D } = B(Yt),
      A = De({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      E = pe(() => w.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      I = pe(() => ({ borderColor: t.color, background: t.background })),
      C = (e, t) => {
        var n;
        return null != (n = e.name) ? n : t;
      },
      H = pe(() => {
        const e = w[A.currentIndex];
        if (e) return C(e, A.currentIndex);
      }),
      P = pe(() => L(t.offsetTop)),
      V = pe(() => (t.sticky ? P.value + r : 0)),
      G = (e) => {
        const n = f.value,
          i = b.value;
        if (!(E.value && n && i && i[A.currentIndex])) return;
        const r = i[A.currentIndex].$el,
          o = r.offsetLeft - (n.offsetWidth - r.offsetWidth) / 2;
        (u && u(),
          (u = (function (e, t, n) {
            let i,
              r = 0;
            const o = e.scrollLeft,
              a = 0 === n ? 1 : Math.round((1e3 * n) / 16);
            let l = o;
            return (
              (function n() {
                ((l += (t - o) / a), (e.scrollLeft = l), ++r < a && (i = _(n)));
              })(),
              function () {
                x(i);
              }
            );
          })(n, o, e ? 0 : +t.duration)));
      },
      U = () => {
        const e = A.inited;
        _e(() => {
          const n = b.value;
          if (!n || !n[A.currentIndex] || 'line' !== t.type || M(d.value)) return;
          const i = n[A.currentIndex].$el,
            { lineWidth: r, lineHeight: o } = t,
            a = i.offsetLeft + i.offsetWidth / 2,
            l = { width: z(r), backgroundColor: t.color, transform: `translateX(${a}px) translateX(-50%)` };
          if ((e && (l.transitionDuration = `${t.duration}s`), p(o))) {
            const e = z(o);
            ((l.height = e), (l.borderRadius = e));
          }
          A.lineStyle = l;
        });
      },
      F = (e, i) => {
        const r = ((e) => {
          const t = e < A.currentIndex ? -1 : 1;
          for (; e >= 0 && e < w.length; ) {
            if (!w[e].disabled) return e;
            e += t;
          }
        })(e);
        if (!p(r)) return;
        const o = w[r],
          l = C(o, r),
          s = null !== A.currentIndex;
        (A.currentIndex !== r && ((A.currentIndex = r), i || G(), U()),
          l !== t.active && (n('update:active', l), s && n('change', l, o.title)),
          a && !t.scrollspy && j(Math.ceil(q(d.value) - P.value)));
      },
      Z = (e, t) => {
        const n = w.findIndex((t, n) => C(t, n) === e);
        F(-1 === n ? 0 : n, t);
      },
      K = (e = !1) => {
        if (t.scrollspy) {
          const n = w[A.currentIndex].$el;
          if (n && g.value) {
            const i = q(n, g.value) - V.value;
            ((o = !0),
              c && c(),
              (c = (function (e, t, n, i) {
                let r,
                  o = O(e);
                const a = o < t,
                  l = 0 === n ? 1 : Math.round((1e3 * n) / 16),
                  s = (t - o) / l;
                return (
                  (function n() {
                    ((o += s),
                      ((a && o > t) || (!a && o < t)) && (o = t),
                      S(e, o),
                      (a && o < t) || (!a && o > t) ? (r = _(n)) : i && (r = _(i)));
                  })(),
                  function () {
                    x(r);
                  }
                );
              })(g.value, i, e ? 0 : +t.duration, () => {
                o = !1;
              })));
          }
        }
      },
      X = (i, r, o) => {
        const { title: a, disabled: l } = w[r],
          u = C(w[r], r);
        (l ||
          (s(t.beforeChange, {
            args: [u],
            done: () => {
              (F(r), K());
            },
          }),
          e(i)),
          n('clickTab', { name: u, title: a, event: o, disabled: l }));
      },
      J = (e) => {
        ((a = e.isFixed), n('scroll', e));
      },
      Q = () => {
        if ('line' === t.type && w.length) return ge('div', { class: Mt('line'), style: A.lineStyle }, null);
      },
      ee = () => {
        var e, n, r;
        const { type: o, border: a, sticky: l } = t,
          s = [
            ge('div', { ref: l ? void 0 : m, class: [Mt('wrap'), { [W]: 'line' === o && a }] }, [
              ge(
                'div',
                {
                  ref: f,
                  role: 'tablist',
                  class: Mt('nav', [o, { shrink: t.shrink, complete: E.value }]),
                  style: I.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = i['nav-left']) ? void 0 : e.call(i),
                  w.map((e) => e.renderTitle(X)),
                  Q(),
                  null == (n = i['nav-right']) ? void 0 : n.call(i),
                ],
              ),
            ]),
            null == (r = i['nav-bottom']) ? void 0 : r.call(i),
          ];
        return l ? ge('div', { ref: m }, [s]) : s;
      },
      te = () => {
        (U(),
          _e(() => {
            var e, t;
            (G(!0), null == (t = null == (e = v.value) ? void 0 : e.swipeRef.value) || t.resize());
          }));
      };
    (Ae(() => [t.color, t.duration, t.lineWidth, t.lineHeight], U),
      Ae(Y, te),
      Ae(
        () => t.active,
        (e) => {
          e !== H.value && Z(e);
        },
      ),
      Ae(
        () => w.length,
        () => {
          A.inited &&
            (Z(t.active),
            U(),
            _e(() => {
              G(!0);
            }));
        },
      ));
    return (
      l({
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
            ((A.inited = !0), m.value && (r = $(m.value).height), G(!0));
          }));
      }),
      Dt(d, U),
      N(
        'scroll',
        () => {
          if (t.scrollspy && !o) {
            const e = (() => {
              for (let e = 0; e < w.length; e++) {
                const { top: t } = $(w[e].$el);
                if (t > V.value) return 0 === e ? 0 : e - 1;
              }
              return w.length - 1;
            })();
            F(e);
          }
        },
        { target: g, passive: !0 },
      ),
      D({
        id: h,
        props: t,
        setLine: U,
        scrollable: E,
        onRendered: (e, t) => n('rendered', e, t),
        currentName: H,
        setTitleRefs: y,
        scrollIntoView: G,
      }),
      () =>
        ge('div', { ref: d, class: Mt([t.type]) }, [
          t.showHeader
            ? t.sticky
              ? ge(xt, { container: d.value, offsetTop: P.value, onScroll: J }, { default: () => [ee()] })
              : ee()
            : null,
          ge(
            Lt,
            {
              ref: v,
              count: w.length,
              inited: A.inited,
              animated: t.animated,
              duration: t.duration,
              swipeable: t.swipeable,
              lazyRender: t.lazyRender,
              currentIndex: A.currentIndex,
              onChange: F,
            },
            {
              default: () => {
                var e;
                return [null == (e = i.default) ? void 0 : e.call(i)];
              },
            },
          ),
        ])
    );
  },
});
const Vt = Symbol(),
  Gt = Symbol(),
  Bt = (e) => {
    const t = Se(Gt, null);
    (Ee(Vt, e),
      Ee(
        Gt,
        pe(() => (null == t || t.value) && e.value),
      ));
  },
  [Ut, Rt] = m('tab'),
  Ft = me({
    name: Ut,
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
      showZeroBadge: G,
    },
    setup(e, { slots: t }) {
      const n = pe(() => {
          const t = {},
            { type: n, color: i, disabled: r, isActive: o, activeColor: a, inactiveColor: l } = e;
          i && 'card' === n && ((t.borderColor = i), r || (o ? (t.backgroundColor = i) : (t.color = i)));
          const s = o ? a : l;
          return (s && (t.color = s), t);
        }),
        i = () => {
          const n = ge('span', { class: Rt('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
          return e.dot || (p(e.badge) && '' !== e.badge)
            ? ge(Z, { dot: e.dot, content: e.badge, showZero: e.showZeroBadge }, { default: () => [n] })
            : n;
        };
      return () =>
        ge(
          'div',
          {
            id: e.id,
            role: 'tab',
            class: [Rt([e.type, { grow: e.scrollable && !e.shrink, shrink: e.shrink, active: e.isActive, disabled: e.disabled }])],
            style: n.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            'aria-selected': e.isActive,
            'aria-disabled': e.disabled || void 0,
            'aria-controls': e.controls,
            'data-allow-mismatch': 'attribute',
          },
          [i()],
        );
    },
  }),
  [zt, Wt] = m('swipe-item');
const jt = V(
    me({
      name: zt,
      setup(e, { slots: t }) {
        let n;
        const i = De({ offset: 0, inited: !1, mounted: !1 }),
          { parent: r, index: o } = w(kt);
        if (!r) return;
        const a = pe(() => {
            const e = {},
              { vertical: t } = r.props;
            return (
              r.size.value && (e[t ? 'height' : 'width'] = `${r.size.value}px`),
              i.offset && (e.transform = `translate${t ? 'Y' : 'X'}(${i.offset}px)`),
              e
            );
          }),
          s = pe(() => {
            const { loop: e, lazyRender: t } = r.props;
            if (!t || n) return !0;
            if (!i.mounted) return !1;
            const a = r.activeIndicator.value,
              l = r.count.value - 1,
              s = 0 === a && e ? l : a - 1,
              u = a === l && e ? 0 : a + 1;
            return ((n = o.value === a || o.value === s || o.value === u), n);
          });
        return (
          xe(() => {
            _e(() => {
              i.mounted = !0;
            });
          }),
          l({
            setOffset: (e) => {
              i.offset = e;
            },
          }),
          () => {
            var e;
            return ge('div', { class: Wt(), style: a.value }, [s.value ? (null == (e = t.default) ? void 0 : e.call(t)) : null]);
          }
        );
      },
    }),
  ),
  [qt, Zt] = m('tab');
const Kt = V(
    me({
      name: qt,
      props: v({}, t, {
        dot: Boolean,
        name: y,
        badge: y,
        title: String,
        disabled: Boolean,
        titleClass: K,
        titleStyle: [String, Object],
        showZeroBadge: G,
      }),
      setup(e, { slots: t }) {
        const n = wt(),
          i = ve(!1),
          r = be(),
          { parent: o, index: a } = w(Yt);
        if (!o) return;
        const s = () => {
            var t;
            return null != (t = e.name) ? t : a.value;
          },
          u = pe(() => {
            const t = s() === o.currentName.value;
            return (
              t &&
                !i.value &&
                ((i.value = !0),
                o.props.lazyRender &&
                  _e(() => {
                    o.onRendered(s(), e.title);
                  })),
              t
            );
          }),
          c = ve(''),
          d = ve('');
        he(() => {
          const { titleClass: t, titleStyle: n } = e;
          ((c.value = t ? bt(t) : ''),
            (d.value =
              n && 'string' != typeof n
                ? (function (e) {
                    if (!e) return '';
                    if (ut(e)) return e;
                    let t = '';
                    for (const n in e) {
                      const i = e[n];
                      (ut(i) || 'number' == typeof i) && (t += `${n.startsWith('--') ? n : ft(n)}:${i};`);
                    }
                    return t;
                  })(mt(n))
                : n));
        });
        const f = ve(!u.value);
        return (
          Ae(u, (e) => {
            e
              ? (f.value = !1)
              : F(() => {
                  f.value = !0;
                });
          }),
          Ae(
            () => e.title,
            () => {
              (o.setLine(), o.scrollIntoView());
            },
          ),
          Bt(u),
          l({
            id: n,
            renderTitle: (i) =>
              ge(
                Ft,
                Ie(
                  {
                    key: n,
                    id: `${o.id}-${a.value}`,
                    ref: o.setTitleRefs(a.value),
                    style: d.value,
                    class: c.value,
                    isActive: u.value,
                    controls: n,
                    scrollable: o.scrollable.value,
                    activeColor: o.props.titleActiveColor,
                    inactiveColor: o.props.titleInactiveColor,
                    onClick: (e) => i(r.proxy, a.value, e),
                  },
                  X(o.props, ['type', 'color', 'shrink']),
                  X(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
                ),
                { title: t.title },
              ),
          }),
          () => {
            var e;
            const r = `${o.id}-${a.value}`,
              { animated: l, swipeable: s, scrollspy: c, lazyRender: d } = o.props;
            if (!t.default && !l) return;
            const m = c || u.value;
            if (l || s)
              return ge(
                jt,
                {
                  id: n,
                  role: 'tabpanel',
                  class: Zt('panel-wrapper', { inactive: f.value }),
                  tabindex: u.value ? 0 : -1,
                  'aria-hidden': !u.value,
                  'aria-labelledby': r,
                  'data-allow-mismatch': 'attribute',
                },
                {
                  default: () => {
                    var e;
                    return [ge('div', { class: Zt('panel') }, [null == (e = t.default) ? void 0 : e.call(t)])];
                  },
                },
              );
            const v = i.value || c || !d ? (null == (e = t.default) ? void 0 : e.call(t)) : null;
            return ke(
              ge(
                'div',
                {
                  id: n,
                  role: 'tabpanel',
                  class: Zt('panel'),
                  tabindex: m ? 0 : -1,
                  'aria-labelledby': r,
                  'data-allow-mismatch': 'attribute',
                },
                [v],
              ),
              [[Ce, m]],
            );
          }
        );
      },
    }),
  ),
  Xt = V(Pt),
  [Jt] = m('picker-group'),
  Qt = Symbol(Jt);
v({ tabs: b(), activeTab: I(0), nextStepText: String, showToolbar: G }, rt);
const en = v(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: I(44),
    showToolbar: G,
    swipeDuration: I(1e3),
    visibleOptionNum: I(6),
  },
  rt,
);
const tn = V(
    me({
      name: We,
      props: v({}, en, { columns: b(), modelValue: b(), toolbarPosition: C('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: n }) {
        const i = ve(),
          r = ve(e.modelValue.slice(0)),
          { parent: o } = w(Qt),
          { children: a, linkChildren: s } = B(tt);
        s();
        const c = pe(() =>
            (function (e) {
              return v({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          d = pe(() => L(e.optionHeight)),
          f = pe(() =>
            (function (e, t) {
              const n = e[0];
              if (n) {
                if (Array.isArray(n)) return 'multiple';
                if (t.children in n) return 'cascade';
              }
              return 'default';
            })(e.columns, c.value),
          ),
          m = pe(() => {
            const { columns: t } = e;
            switch (f.value) {
              case 'multiple':
                return t;
              case 'cascade':
                return (function (e, t, n) {
                  const i = [];
                  let r = { [t.children]: e },
                    o = 0;
                  for (; r && r[t.children]; ) {
                    const e = r[t.children],
                      a = n.value[o];
                    ((r = p(a) ? Je(e, a, t) : void 0), !r && e.length && (r = Je(e, Ze(e)[t.value], t)), o++, i.push(e));
                  }
                  return i;
                })(t, c.value, r);
              default:
                return [t];
            }
          }),
          h = pe(() => m.value.some((e) => e.length)),
          g = pe(() => m.value.map((e, t) => Je(e, r.value[t], c.value))),
          b = pe(() => m.value.map((e, t) => e.findIndex((e) => e[c.value.value] === r.value[t]))),
          y = (e, t) => {
            if (r.value[e] !== t) {
              const n = r.value.slice(0);
              ((n[e] = t), (r.value = n));
            }
          },
          A = () => ({ selectedValues: r.value.slice(0), selectedOptions: g.value, selectedIndexes: b.value }),
          _ = () => {
            a.forEach((e) => e.stopMomentum());
            const e = A();
            return (
              _e(() => {
                const e = A();
                t('confirm', e);
              }),
              e
            );
          },
          x = () => t('cancel', A()),
          O = () =>
            m.value.map((i, o) =>
              ge(
                nt,
                {
                  value: r.value[o],
                  fields: c.value,
                  options: i,
                  readonly: e.readonly,
                  allowHtml: e.allowHtml,
                  optionHeight: d.value,
                  swipeDuration: e.swipeDuration,
                  visibleOptionNum: e.visibleOptionNum,
                  onChange: (e) =>
                    ((e, n) => {
                      (y(n, e),
                        'cascade' === f.value &&
                          r.value.forEach((e, t) => {
                            const n = m.value[t];
                            Xe(n, e, c.value) || y(t, n.length ? n[0][c.value.value] : void 0);
                          }),
                        _e(() => {
                          t('change', v({ columnIndex: n }, A()));
                        }));
                    })(e, o),
                  onClickOption: (e) =>
                    ((e, n) => {
                      const i = { columnIndex: n, currentOption: e };
                      (t('clickOption', v(A(), i)), t('scrollInto', i));
                    })(e, o),
                  onScrollInto: (e) => {
                    t('scrollInto', { currentOption: e, columnIndex: o });
                  },
                },
                { option: n.option },
              ),
            ),
          S = (e) => {
            if (h.value) {
              const t = { height: `${d.value}px` },
                n = { backgroundSize: `100% ${(e - d.value) / 2}px` };
              return [ge('div', { class: je('mask'), style: n }, null), ge('div', { class: [J, je('frame')], style: t }, null)];
            }
          },
          E = () => {
            const t = d.value * +e.visibleOptionNum,
              r = { height: `${t}px` };
            return e.loading || h.value || !n.empty ? ge('div', { ref: i, class: je('columns'), style: r }, [O(), S(t)]) : n.empty();
          },
          k = () => {
            if (e.showToolbar && !o) return ge(lt, Ie(X(e, at), { onConfirm: _, onCancel: x }), X(n, ot));
          },
          I = (e) => {
            e.forEach((e, t) => {
              e.length && !Xe(e, r.value[t], c.value) && y(t, Ze(e)[c.value.value]);
            });
          };
        let C;
        (Ae(m, (e) => I(e), { immediate: !0 }),
          Ae(
            () => e.modelValue,
            (t) => {
              (Q(t, r.value) || Q(t, C) || ((r.value = t.slice(0)), (C = t.slice(0))), 0 === e.modelValue.length && I(m.value));
            },
            { deep: !0 },
          ),
          Ae(
            r,
            (n) => {
              Q(n, e.modelValue) || ((C = n.slice(0)), t('update:modelValue', C));
            },
            { immediate: !0 },
          ),
          N('touchmove', D, { target: i }));
        return (
          l({ confirm: _, getSelectedOptions: () => g.value }),
          () => {
            var t, i;
            return ge('div', { class: je() }, [
              'top' === e.toolbarPosition ? k() : null,
              e.loading ? ge(u, { class: je('loading') }, null) : null,
              null == (t = n['columns-top']) ? void 0 : t.call(n),
              E(),
              null == (i = n['columns-bottom']) ? void 0 : i.call(n),
              'bottom' === e.toolbarPosition ? k() : null,
            ]);
          }
        );
      },
    }),
  ),
  [nn, rn] = m('cell'),
  on = {
    tag: C('div'),
    icon: String,
    size: String,
    title: y,
    value: y,
    label: y,
    center: Boolean,
    isLink: Boolean,
    border: G,
    iconPrefix: String,
    valueClass: K,
    labelClass: K,
    titleClass: K,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const an = V(
  me({
    name: nn,
    props: v({}, on, t),
    setup(e, { slots: t }) {
      const i = n(),
        r = () => {
          if (t.label || p(e.label)) return ge('div', { class: [rn('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var n;
          if (t.title || p(e.title)) {
            const i = null == (n = t.title) ? void 0 : n.call(t);
            if (Array.isArray(i) && 0 === i.length) return;
            return ge('div', { class: [rn('title'), e.titleClass], style: e.titleStyle }, [i || ge('span', null, [e.title]), r()]);
          }
        },
        a = () => {
          const n = t.value || t.default;
          if (n || p(e.value)) return ge('div', { class: [rn('value'), e.valueClass] }, [n ? n() : ge('span', null, [e.value])]);
        },
        l = () => {
          if (t['right-icon']) return t['right-icon']();
          if (e.isLink) {
            const t = e.arrowDirection && 'right' !== e.arrowDirection ? `arrow-${e.arrowDirection}` : 'arrow';
            return ge(ee, { name: t, class: rn('right-icon') }, null);
          }
        };
      return () => {
        var n;
        const { tag: r, size: s, center: u, border: c, isLink: d, required: f } = e,
          m = null != (n = e.clickable) ? n : d,
          v = { center: u, required: !!f, clickable: m, borderless: !c };
        return (
          s && (v[s] = !!s),
          ge(
            r,
            { class: rn(v), role: m ? 'button' : void 0, tabindex: m ? 0 : void 0, onClick: i },
            {
              default: () => {
                var n;
                return [
                  t.icon ? t.icon() : e.icon ? ge(ee, { name: e.icon, class: rn('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
                  o(),
                  a(),
                  l(),
                  null == (n = t.extra) ? void 0 : n.call(t),
                ];
              },
            },
          )
        );
      };
    },
  }),
);
function ln(e) {
  return Array.isArray(e) ? !e.length : 0 !== e && !e;
}
function sn(e, t) {
  const { message: n } = t;
  return ie(n) ? n(e, t) : n || '';
}
function un({ target: e }) {
  e.composing = !0;
}
function cn({ target: e }) {
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function dn(e) {
  return [...e].length;
}
function fn(e, t) {
  return [...e].slice(0, t).join('');
}
const [mn, vn] = m('field'),
  pn = {
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
    clearIcon: C('clear'),
    modelValue: I(''),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: C('focus'),
    formatTrigger: C('onChange'),
    spellcheck: { type: Boolean, default: null },
    error: { type: Boolean, default: null },
    disabled: { type: Boolean, default: null },
    readonly: { type: Boolean, default: null },
    inputmode: String,
  };
const hn = V(
  me({
    name: mn,
    props: v({}, on, pn, {
      rows: y,
      type: C('text'),
      rules: Array,
      autosize: [Boolean, Object],
      labelWidth: y,
      labelClass: K,
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
    setup(e, { emit: t, slots: n }) {
      const i = wt(),
        r = De({ status: 'unvalidated', focused: !1, validateMessage: '' }),
        o = ve(),
        a = ve(),
        s = ve(),
        { parent: u } = w(ae),
        c = () => {
          var t;
          return String(null != (t = e.modelValue) ? t : '');
        },
        d = (t) => (p(e[t]) ? e[t] : u && p(u.props[t]) ? u.props[t] : void 0),
        f = pe(() => {
          const t = d('readonly');
          if (e.clearable && !t) {
            const t = '' !== c(),
              n = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && r.focused);
            return t && n;
          }
          return !1;
        }),
        m = pe(() => (s.value && n.input ? s.value() : e.modelValue)),
        v = pe(() => {
          var t;
          const n = d('required');
          return 'auto' === n ? (null == (t = e.rules) ? void 0 : t.some((e) => e.required)) : n;
        }),
        g = (e) =>
          e.reduce(
            (e, t) =>
              e.then(() => {
                if ('failed' === r.status) return;
                let { value: e } = m;
                if (
                  (t.formatter && (e = t.formatter(e, t)),
                  !(function (e, t) {
                    if (ln(e)) {
                      if (t.required) return !1;
                      if (!1 === t.validateEmpty) return !0;
                    }
                    return !(t.pattern && !t.pattern.test(String(e)));
                  })(e, t))
                )
                  return ((r.status = 'failed'), void (r.validateMessage = sn(e, t)));
                if (t.validator) {
                  if (ln(e) && !1 === t.validateEmpty) return;
                  return (function (e, t) {
                    return new Promise((n) => {
                      const i = t.validator(e, t);
                      re(i) ? i.then(n) : n(i);
                    });
                  })(e, t).then((n) => {
                    n && 'string' == typeof n
                      ? ((r.status = 'failed'), (r.validateMessage = n))
                      : !1 === n && ((r.status = 'failed'), (r.validateMessage = sn(e, t)));
                  });
                }
              }),
            Promise.resolve(),
          ),
        b = () => {
          ((r.status = 'unvalidated'), (r.validateMessage = ''));
        },
        y = () => t('endValidate', { status: r.status, message: r.validateMessage }),
        A = (n = e.rules) =>
          new Promise((i) => {
            (b(),
              n
                ? (t('startValidate'),
                  g(n).then(() => {
                    'failed' === r.status ? (i({ name: e.name, message: r.validateMessage }), y()) : ((r.status = 'passed'), i(), y());
                  }))
                : i());
          }),
        _ = (t) => {
          if (u && e.rules) {
            const { validateTrigger: n } = u.props,
              i = le(n).includes(t),
              r = e.rules.filter((e) => (e.trigger ? le(e.trigger).includes(t) : i));
            r.length && A(r);
          }
        },
        x = (n, i = 'onChange') => {
          var a, l;
          const s = n;
          n = ((t) => {
            var n;
            const { maxlength: i } = e;
            if (p(i) && dn(t) > +i) {
              const e = c();
              if (e && dn(e) === +i) return e;
              const a = null == (n = o.value) ? void 0 : n.selectionEnd;
              if (r.focused && a) {
                const e = [...t],
                  n = e.length - +i;
                return (e.splice(a - n, n), e.join(''));
              }
              return fn(t, +i);
            }
            return t;
          })(n);
          const u = s.length - n.length;
          if ('number' === e.type || 'digit' === e.type) {
            const t = 'number' === e.type;
            if (((n = oe(n, t, t)), 'onBlur' === i && '' !== n && (void 0 !== e.min || void 0 !== e.max))) {
              const t = h(+n, null != (a = e.min) ? a : -1 / 0, null != (l = e.max) ? l : 1 / 0);
              +n !== t && (n = t.toString());
            }
          }
          let d = 0;
          if (e.formatter && i === e.formatTrigger) {
            const { formatter: t, maxlength: i } = e;
            if (((n = t(n)), p(i) && dn(n) > +i && (n = fn(n, +i)), o.value && r.focused)) {
              const { selectionEnd: e } = o.value,
                n = fn(s, e);
              d = t(n).length - n.length;
            }
          }
          if (o.value && o.value.value !== n)
            if (r.focused) {
              let { selectionStart: e, selectionEnd: t } = o.value;
              if (((o.value.value = n), p(e) && p(t))) {
                const i = n.length;
                (u ? ((e -= u), (t -= u)) : d && ((e += d), (t += d)), o.value.setSelectionRange(Math.min(e, i), Math.min(t, i)));
              }
            } else o.value.value = n;
          n !== e.modelValue && t('update:modelValue', n);
        },
        O = (e) => {
          e.target.composing || x(e.target.value);
        },
        S = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.blur();
        },
        E = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.focus();
        },
        k = () => {
          const t = o.value;
          'textarea' === e.type &&
            e.autosize &&
            t &&
            (function (e, t) {
              const n = te();
              e.style.height = 'auto';
              let i = e.scrollHeight;
              if (ne(t)) {
                const { maxHeight: e, minHeight: n } = t;
                (void 0 !== e && (i = Math.min(i, e)), void 0 !== n && (i = Math.max(i, n)));
              }
              i && ((e.style.height = `${i}px`), j(n));
            })(t, e.autosize);
        },
        I = (e) => {
          ((r.focused = !0), t('focus', e), _e(k), d('readonly') && S());
        },
        C = (e) => {
          ((r.focused = !1), x(c(), 'onBlur'), t('blur', e), d('readonly') || (_('onBlur'), _e(k), se()));
        },
        T = (e) => t('clickInput', e),
        L = (e) => t('clickLeftIcon', e),
        H = (e) => t('clickRightIcon', e),
        M = pe(() => ('boolean' == typeof e.error ? e.error : !(!u || !u.props.showError || 'failed' !== r.status) || void 0)),
        $ = pe(() => {
          const e = d('labelWidth'),
            t = d('labelAlign');
          if (e && 'top' !== t) return { width: z(e) };
        }),
        Y = (n) => {
          if (13 === n.keyCode) {
            ((u && u.props.submitOnEnter) || 'textarea' === e.type || D(n), 'search' === e.type && S());
          }
          t('keypress', n);
        },
        P = () => e.id || `${i}-input`,
        V = () => {
          const t = vn('control', [
            d('inputAlign'),
            { error: M.value, custom: !!n.input, 'min-height': 'textarea' === e.type && !e.autosize },
          ]);
          if (n.input) return ge('div', { class: t, onClick: T }, [n.input()]);
          const r = {
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
            'aria-labelledby': e.label ? `${i}-label` : void 0,
            'data-allow-mismatch': 'attribute',
            onBlur: C,
            onFocus: I,
            onInput: O,
            onClick: T,
            onChange: cn,
            onKeypress: Y,
            onCompositionend: cn,
            onCompositionstart: un,
          };
          return 'textarea' === e.type
            ? ge('textarea', Ie(r, { inputmode: e.inputmode }), null)
            : ge(
                'input',
                Ie(
                  ((a = e.type),
                  (l = e.inputmode),
                  'number' === a && ((a = 'text'), null != l || (l = 'decimal')),
                  'digit' === a && ((a = 'tel'), null != l || (l = 'numeric')),
                  { type: a, inputmode: l }),
                  r,
                ),
                null,
              );
          var a, l;
        },
        G = () => {
          const t = n['right-icon'];
          if (e.rightIcon || t)
            return ge('div', { class: vn('right-icon'), onClick: H }, [
              t ? t() : ge(ee, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        B = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = dn(c());
            return ge('div', { class: vn('word-limit') }, [ge('span', { class: vn('word-num') }, [t]), Te('/'), e.maxlength]);
          }
        },
        U = () => {
          if (u && !1 === u.props.showErrorMessage) return;
          const t = e.errorMessage || r.validateMessage;
          if (t) {
            const e = n['error-message'],
              i = d('errorMessageAlign');
            return ge('div', { class: vn('error-message', i) }, [e ? e({ message: t }) : t]);
          }
        },
        R = () => [
          ge('div', { class: vn('body') }, [
            V(),
            f.value && ge(ee, { ref: a, name: e.clearIcon, class: vn('clear') }, null),
            G(),
            n.button && ge('div', { class: vn('button') }, [n.button()]),
          ]),
          B(),
          U(),
        ];
      return (
        l({ blur: S, focus: E, validate: A, formValue: m, resetValidation: b, getValidationStatus: () => r.status }),
        Ee(ue, { customValue: s, resetValidation: b, validateWithTrigger: _ }),
        Ae(
          () => e.modelValue,
          () => {
            (x(c()), b(), _('onChange'), _e(k));
          },
        ),
        xe(() => {
          (x(c(), e.formatTrigger), _e(k));
        }),
        N(
          'touchstart',
          (e) => {
            (D(e), t('update:modelValue', ''), t('clear', e));
          },
          {
            target: pe(() => {
              var e;
              return null == (e = a.value) ? void 0 : e.$el;
            }),
          },
        ),
        () => {
          const t = d('disabled'),
            r = d('labelAlign'),
            o = (() => {
              const t = n['left-icon'];
              if (e.leftIcon || t)
                return ge('div', { class: vn('left-icon'), onClick: L }, [
                  t ? t() : ge(ee, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return ge(
            an,
            {
              size: e.size,
              class: vn({ error: M.value, disabled: t, [`label-${r}`]: r }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: $.value,
              valueClass: vn('value'),
              titleClass: [vn('label', [r, { required: v.value }]), e.labelClass],
              arrowDirection: e.arrowDirection,
            },
            {
              icon: o && 'top' !== r ? () => o : null,
              title: () => {
                const t = (() => {
                  const t = d('labelWidth'),
                    r = d('labelAlign'),
                    o = d('colon') ? ':' : '';
                  return n.label
                    ? [n.label(), o]
                    : e.label
                      ? ge(
                          'label',
                          {
                            id: `${i}-label`,
                            for: n.input ? void 0 : P(),
                            'data-allow-mismatch': 'attribute',
                            onClick: (e) => {
                              (D(e), E());
                            },
                            style: 'top' === r && t ? { width: z(t) } : void 0,
                          },
                          [e.label + o],
                        )
                      : void 0;
                })();
                return 'top' === r ? [o, t].filter(Boolean) : t || [];
              },
              value: R,
              extra: n.extra,
            },
          );
        }
      );
    },
  }),
);
V(c);
const [gn, bn, yn] = m('calendar');
function wn(e, t) {
  const n = e.getFullYear(),
    i = t.getFullYear();
  if (n === i) {
    const n = e.getMonth(),
      i = t.getMonth();
    return n === i ? 0 : n > i ? 1 : -1;
  }
  return n > i ? 1 : -1;
}
function Nn(e, t) {
  const n = wn(e, t);
  if (0 === n) {
    const n = e.getDate(),
      i = t.getDate();
    return n === i ? 0 : n > i ? 1 : -1;
  }
  return n;
}
const Dn = (e) => new Date(e),
  An = (e) => (Array.isArray(e) ? e.map(Dn) : Dn(e));
function _n(e, t) {
  const n = Dn(e);
  return (n.setDate(n.getDate() + t), n);
}
function xn(e, t) {
  const n = Dn(e);
  return (n.setMonth(n.getMonth() + t), n.getDate() !== e.getDate() && n.setDate(0), n);
}
function On(e, t) {
  const n = Dn(e);
  return (n.setFullYear(n.getFullYear() + t), n.getDate() !== e.getDate() && n.setDate(0), n);
}
const Sn = (e) => _n(e, -1),
  En = (e) => _n(e, 1),
  kn = (e) => xn(e, -1),
  In = (e) => xn(e, 1),
  Cn = (e) => On(e, -1),
  Tn = (e) => On(e, 1),
  Ln = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
v({}, en, { modelValue: b(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Hn] = m('calendar-day');
var Mn = me({
  name: Hn,
  props: { item: g(Object), color: String, index: Number, offset: ce(0), rowHeight: String },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: n }) {
    const i = pe(() => {
        const { item: t, index: n, color: i, offset: r, rowHeight: o } = e,
          a = { height: o };
        if ('placeholder' === t.type) return ((a.width = '100%'), a);
        if ((0 === n && (a.marginLeft = (100 * r) / 7 + '%'), i))
          switch (t.type) {
            case 'end':
            case 'start':
            case 'start-end':
            case 'multiple-middle':
            case 'multiple-selected':
              a.background = i;
              break;
            case 'middle':
              a.color = i;
          }
        return (
          t.date &&
            (function (e, t = 0) {
              const n = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                i = t + e.getDate() - 1,
                r = t + n.getDate() - 1;
              return Math.floor(i / 7) === Math.floor(r / 7);
            })(t.date, r) &&
            (a.marginBottom = 0),
          a
        );
      }),
      r = () => {
        'disabled' !== e.item.type ? t('click', e.item) : t('clickDisabledDate', e.item);
      },
      o = () => {
        const { topInfo: t } = e.item;
        if (t || n['top-info']) return ge('div', { class: bn('top-info') }, [n['top-info'] ? n['top-info'](e.item) : t]);
      },
      a = () => {
        const { bottomInfo: t } = e.item;
        if (t || n['bottom-info']) return ge('div', { class: bn('bottom-info') }, [n['bottom-info'] ? n['bottom-info'](e.item) : t]);
      },
      l = () => {
        const { item: t, color: i, rowHeight: r } = e,
          { type: l } = t,
          s = [o(), n.text ? n.text(e.item) : e.item.text, a()];
        return 'selected' === l ? ge('div', { class: bn('selected-day'), style: { width: r, height: r, background: i } }, [s]) : s;
      };
    return () => {
      const { type: t, className: n } = e.item;
      return 'placeholder' === t
        ? ge('div', { class: bn('day'), style: i.value }, null)
        : ge('div', { role: 'gridcell', style: i.value, class: [bn('day', t), n], tabindex: 'disabled' === t ? void 0 : -1, onClick: r }, [
            l(),
          ]);
    };
  },
});
const [$n] = m('calendar-month');
var Yn = me({
  name: $n,
  props: {
    date: g(Date),
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
  setup(e, { emit: t, slots: n }) {
    const [i, r] = de(),
      o = ve(),
      a = ve(),
      s = ze(a),
      u = pe(() => {
        return ((t = e.date), yn('monthTitle', t.getFullYear(), t.getMonth() + 1));
        var t;
      }),
      c = pe(() => z(e.rowHeight)),
      d = pe(() => {
        const t = e.date.getDate(),
          n = (e.date.getDay() - (t % 7) + 8) % 7;
        return e.firstDayOfWeek ? (n + 7 - e.firstDayOfWeek) % 7 : n;
      }),
      f = pe(() => {
        return ((t = e.date.getFullYear()), (n = e.date.getMonth() + 1), 32 - new Date(t, n - 1, 32).getDate());
        var t, n;
      }),
      m = pe(() => i.value || !e.lazyRender),
      v = (t) => {
        const { type: n, minDate: i, maxDate: r, currentDate: o } = e;
        if ((i && Nn(t, i) < 0) || (r && Nn(t, r) > 0)) return 'disabled';
        if (null === o) return '';
        if (Array.isArray(o)) {
          if ('multiple' === n)
            return ((t) => {
              const n = (t) => e.currentDate.some((e) => 0 === Nn(e, t));
              if (n(t)) {
                const e = Sn(t),
                  i = En(t),
                  r = n(e),
                  o = n(i);
                return r && o ? 'multiple-middle' : r ? 'end' : o ? 'start' : 'multiple-selected';
              }
              return '';
            })(t);
          if ('range' === n)
            return ((t) => {
              const [n, i] = e.currentDate;
              if (!n) return '';
              const r = Nn(t, n);
              if (!i) return 0 === r ? 'start' : '';
              const o = Nn(t, i);
              return e.allowSameDay && 0 === r && 0 === o
                ? 'start-end'
                : 0 === r
                  ? 'start'
                  : 0 === o
                    ? 'end'
                    : r > 0 && o < 0
                      ? 'middle'
                      : '';
            })(t);
        } else if ('single' === n) return 0 === Nn(t, o) ? 'selected' : '';
        return '';
      },
      p = (t) => {
        if ('range' === e.type) {
          if ('start' === t || 'end' === t) return yn(t);
          if ('start-end' === t) return `${yn('start')}/${yn('end')}`;
        }
      },
      h = () => {
        if (e.showMonthTitle)
          return ge('div', { class: bn('month-title') }, [n['month-title'] ? n['month-title']({ date: e.date, text: u.value }) : u.value]);
      },
      g = () => {
        if (e.showMark && m.value) return ge('div', { class: bn('month-mark') }, [e.date.getMonth() + 1]);
      },
      b = pe(() => {
        const e = Math.ceil((f.value + d.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      y = pe(() => {
        const t = [],
          n = e.date.getFullYear(),
          i = e.date.getMonth();
        for (let r = 1; r <= f.value; r++) {
          const o = new Date(n, i, r),
            a = v(o);
          let l = { date: o, type: a, text: r, bottomInfo: p(a) };
          (e.formatter && (l = e.formatter(l)), t.push(l));
        }
        return t;
      }),
      w = pe(() => y.value.filter((e) => 'disabled' === e.type)),
      N = (i, r) =>
        ge(
          Mn,
          {
            item: i,
            index: r,
            color: e.color,
            offset: d.value,
            rowHeight: c.value,
            onClick: (e) => t('click', e),
            onClickDisabledDate: (e) => t('clickDisabledDate', e),
          },
          X(n, ['top-info', 'bottom-info', 'text']),
        );
    return (
      l({
        getTitle: () => u.value,
        getHeight: () => s.value,
        setVisible: r,
        scrollToDate: (e, t) => {
          if (o.value) {
            const n = $(o.value),
              i = b.value.length,
              r = ((Math.ceil((t.getDate() + d.value) / 7) - 1) * n.height) / i;
            S(e, n.top + r + e.scrollTop - $(e).top);
          }
        },
        disabledDays: w,
      }),
      () =>
        ge('div', { class: bn('month'), ref: a }, [
          h(),
          ge('div', { ref: o, role: 'grid', class: bn('days') }, [g(), (m.value ? y : b).value.map(N)]),
        ])
    );
  },
});
const [Pn] = m('calendar-header');
var Vn = me({
  name: Pn,
  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    switchMode: C('none'),
  },
  emits: ['clickSubtitle', 'panelChange'],
  setup(e, { slots: t, emit: n }) {
    const i = pe(() => e.date && e.minDate && wn(kn(e.date), e.minDate) < 0),
      r = pe(() => e.date && e.minDate && wn(Cn(e.date), e.minDate) < 0),
      o = pe(() => e.date && e.maxDate && wn(In(e.date), e.maxDate) > 0),
      a = pe(() => e.date && e.maxDate && wn(Tn(e.date), e.maxDate) > 0),
      l = () => {
        if (e.showTitle) {
          const n = e.title || yn('title'),
            i = t.title ? t.title() : n;
          return ge('div', { class: bn('header-title') }, [i]);
        }
      },
      s = (e) => n('clickSubtitle', e),
      u = (e) => n('panelChange', e),
      c = (n) => {
        const l = 'year-month' === e.switchMode,
          s = t[n ? 'next-month' : 'prev-month'],
          c = t[n ? 'next-year' : 'prev-year'],
          d = n ? o.value : i.value,
          f = n ? a.value : r.value,
          m = n ? 'arrow' : 'arrow-left',
          v = n ? 'arrow-double-right' : 'arrow-double-left',
          p = ge('view', { class: bn('header-action', { disabled: d }), onClick: d ? void 0 : () => u((n ? In : kn)(e.date)) }, [
            s ? s({ disabled: d }) : ge(ee, { class: { [A]: !d }, name: m }, null),
          ]),
          h =
            l &&
            ge('view', { class: bn('header-action', { disabled: f }), onClick: f ? void 0 : () => u((n ? Tn : Cn)(e.date)) }, [
              c ? c({ disabled: f }) : ge(ee, { class: { [A]: !f }, name: v }, null),
            ]);
        return n ? [p, h] : [h, p];
      },
      d = () => {
        if (e.showSubtitle) {
          const n = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            i = 'none' !== e.switchMode;
          return ge('div', { class: bn('header-subtitle', { 'with-switch': i }), onClick: s }, [
            i ? [c(), ge('div', { class: bn('header-subtitle-text') }, [n]), c(!0)] : n,
          ]);
        }
      },
      f = () => {
        const { firstDayOfWeek: t } = e,
          n = yn('weekdays'),
          i = [...n.slice(t, 7), ...n.slice(0, t)];
        return ge('div', { class: bn('weekdays') }, [i.map((e) => ge('span', { class: bn('weekday') }, [e]))]);
      };
    return () => ge('div', { class: bn('header') }, [l(), d(), f()]);
  },
});
const Gn = V(
  me({
    name: gn,
    props: {
      show: Boolean,
      type: C('single'),
      switchMode: C('none'),
      title: String,
      color: String,
      round: G,
      readonly: Boolean,
      poppable: G,
      maxRange: I(null),
      position: C('bottom'),
      teleport: [String, Object],
      showMark: G,
      showTitle: G,
      formatter: Function,
      rowHeight: y,
      confirmText: String,
      rangePrompt: String,
      lazyRender: G,
      showConfirm: G,
      defaultDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: G,
      closeOnPopstate: G,
      showRangePrompt: G,
      confirmDisabledText: String,
      closeOnClickOverlay: G,
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: G,
      minDate: { type: Date, validator: fe },
      maxDate: { type: Date, validator: fe },
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
    setup(e, { emit: t, slots: n }) {
      const r = pe(() => 'none' !== e.switchMode),
        o = pe(() => (e.minDate || r.value ? e.minDate : Ln())),
        a = pe(() => (e.maxDate || r.value ? e.maxDate : xn(Ln(), 6))),
        s = (e, t = o.value, n = a.value) => (t && -1 === Nn(e, t) ? t : n && 1 === Nn(e, n) ? n : e),
        u = (t = e.defaultDate) => {
          const { type: n, allowSameDay: i } = e;
          if (null === t) return t;
          const r = Ln();
          if ('range' === n) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === Nn(t[0], r) && (t = []));
            const e = o.value,
              n = a.value;
            return [s(t[0] || r, e, n ? (i ? n : Sn(n)) : void 0), s(t[1] || (i ? r : En(r)), e ? (i ? e : En(e)) : void 0)];
          }
          return 'multiple' === n ? (Array.isArray(t) ? t.map((e) => s(e)) : [s(r)]) : ((t && !Array.isArray(t)) || (t = r), s(t));
        };
      let c;
      const m = ve(),
        v = ve(u()),
        p = ve(
          (() => {
            const e = Array.isArray(v.value) ? v.value[0] : v.value;
            return e || s(Ln());
          })(),
        ),
        h = ve(),
        [g, b] = Nt(),
        y = pe(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        w = pe(() => {
          const e = [];
          if (!o.value || !a.value) return e;
          const t = new Date(o.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== wn(t, a.value));
          return e;
        }),
        N = pe(() => {
          if (v.value) {
            if ('range' === e.type) return !v.value[0] || !v.value[1];
            if ('multiple' === e.type) return !v.value.length;
          }
          return !v.value;
        }),
        D = () => {
          const e = O(m.value),
            n = e + c,
            i = w.value.map((e, t) => g.value[t].getHeight());
          if (n > i.reduce((e, t) => e + t, 0) && e > 0) return;
          let r,
            o = 0;
          const a = [-1, -1];
          for (let l = 0; l < w.value.length; l++) {
            const s = g.value[l];
            (o <= n &&
              o + i[l] >= e &&
              ((a[1] = l),
              r || ((r = s), (a[0] = l)),
              g.value[l].showed || ((g.value[l].showed = !0), t('monthShow', { date: s.date, title: s.getTitle() }))),
              (o += i[l]));
          }
          (w.value.forEach((e, t) => {
            const n = t >= a[0] - 1 && t <= a[1] + 1;
            g.value[t].setVisible(n);
          }),
            r && (h.value = r));
        },
        A = (e) => {
          r.value
            ? (p.value = e)
            : _(() => {
                (w.value.some((t, n) => 0 === wn(t, e) && (m.value && g.value[n].scrollToDate(m.value, e), !0)), D());
              });
        },
        x = () => {
          if (!e.poppable || e.show)
            if (v.value) {
              const t = 'single' === e.type ? v.value : v.value[0];
              fe(t) && A(t);
            } else r.value || _(D);
        },
        S = () => {
          (e.poppable && !e.show) ||
            (r.value ||
              _(() => {
                c = Math.floor($(m).height);
              }),
            x());
        },
        E = (e = u()) => {
          ((v.value = e), x());
        },
        I = (e) => {
          ((p.value = e), t('panelChange', { date: e }));
        },
        C = () => {
          var e;
          return t('confirm', null != (e = v.value) ? e : An(v.value));
        },
        T = (n, i) => {
          const r = (e) => {
            ((v.value = e), t('select', An(e)));
          };
          if (i && 'range' === e.type) {
            const i = ((n) => {
              const { maxRange: i, rangePrompt: r, showRangePrompt: o } = e;
              return !(
                i &&
                (function (e) {
                  const t = e[0].getTime();
                  return (e[1].getTime() - t) / 864e5 + 1;
                })(n) > +i &&
                (o && f(r || yn('rangePrompt', i)), t('overRange'), 1)
              );
            })(n);
            if (!i) return void r([n[0], _n(n[0], +e.maxRange - 1)]);
          }
          (r(n), i && !e.showConfirm && C());
        },
        L = pe(() =>
          g.value.reduce((e, t) => {
            var n, i;
            return (e.push(...(null != (i = null == (n = t.disabledDays) ? void 0 : n.value) ? i : [])), e);
          }, []),
        ),
        H = (n) => {
          if (e.readonly || !n.date) return;
          const { date: i } = n,
            { type: r } = e;
          if ('range' === r) {
            if (!v.value) return void T([i]);
            const [t, n] = v.value;
            if (t && !n) {
              const n = Nn(i, t);
              if (1 === n) {
                const e = ((e, t, n) => {
                  var i;
                  return null == (i = e.find((e) => -1 === Nn(t, e.date) && -1 === Nn(e.date, n))) ? void 0 : i.date;
                })(L.value, t, i);
                if (e) {
                  const n = Sn(e);
                  -1 === Nn(t, n) ? T([t, n]) : T([i]);
                } else T([t, i], !0);
              } else -1 === n ? T([i]) : e.allowSameDay && T([i, i], !0);
            } else T([i]);
          } else if ('multiple' === r) {
            if (!v.value) return void T([i]);
            const n = v.value,
              r = n.findIndex((e) => 0 === Nn(e, i));
            if (-1 !== r) {
              const [e] = n.splice(r, 1);
              t('unselect', Dn(e));
            } else e.maxRange && n.length >= +e.maxRange ? f(e.rangePrompt || yn('rangePrompt', e.maxRange)) : T([...n, i]);
          } else T(i, !0);
        },
        M = (e) => t('clickOverlay', e),
        Y = (e) => t('update:show', e),
        P = (i, l) => {
          const s = 0 !== l || !e.showSubtitle;
          return ge(
            Yn,
            Ie(
              {
                ref: r.value ? h : b(l),
                date: i,
                currentDate: v.value,
                showMonthTitle: s,
                firstDayOfWeek: y.value,
                lazyRender: !r.value && e.lazyRender,
                maxDate: a.value,
                minDate: o.value,
              },
              X(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: H, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            X(n, ['top-info', 'bottom-info', 'month-title', 'text']),
          );
        },
        V = () => {
          if (n.footer) return n.footer();
          if (e.showConfirm) {
            const t = n['confirm-text'],
              r = N.value,
              o = r ? e.confirmDisabledText : e.confirmText;
            return ge(
              i,
              {
                round: !0,
                block: !0,
                type: 'primary',
                color: e.color,
                class: bn('confirm'),
                disabled: r,
                nativeType: 'button',
                onClick: C,
              },
              { default: () => [t ? t({ disabled: r }) : o || yn('confirm')] },
            );
          }
        },
        G = () => {
          var i, l;
          return ge('div', { class: bn() }, [
            ge(
              Vn,
              {
                date: null == (i = h.value) ? void 0 : i.date,
                maxDate: a.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (l = h.value) ? void 0 : l.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: y.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: I,
              },
              X(n, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            ge('div', { ref: m, class: bn('body'), onScroll: r.value ? void 0 : D }, [r.value ? P(p.value, 0) : w.value.map(P)]),
            ge('div', { class: [bn('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [V()]),
          ]);
        };
      return (
        Ae(() => e.show, S),
        Ae(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => E(u(v.value)),
        ),
        Ae(
          () => e.defaultDate,
          (e) => {
            E(e);
          },
        ),
        l({ reset: E, scrollToDate: A, getSelectedDate: () => v.value }),
        k(S),
        () =>
          e.poppable
            ? ge(
                d,
                {
                  show: e.show,
                  class: bn('popup'),
                  round: e.round,
                  position: e.position,
                  closeable: e.showTitle || e.showSubtitle,
                  teleport: e.teleport,
                  closeOnPopstate: e.closeOnPopstate,
                  safeAreaInsetTop: e.safeAreaInsetTop,
                  closeOnClickOverlay: e.closeOnClickOverlay,
                  onClickOverlay: M,
                  'onUpdate:show': Y,
                },
                { default: G },
              )
            : G()
      );
    },
  }),
);
function Bn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Un,
  Rn = { exports: {} };
const Fn = Bn(
  (Un ||
    ((Un = 1),
    (Rn.exports = (function () {
      var e = 1e3,
        t = 6e4,
        n = 36e5,
        i = 'millisecond',
        r = 'second',
        o = 'minute',
        a = 'hour',
        l = 'day',
        s = 'week',
        u = 'month',
        c = 'quarter',
        d = 'year',
        f = 'date',
        m = 'Invalid Date',
        v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        h = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          ordinal: function (e) {
            var t = ['th', 'st', 'nd', 'rd'],
              n = e % 100;
            return '[' + e + (t[(n - 20) % 10] || t[n] || t[0]) + ']';
          },
        },
        g = function (e, t, n) {
          var i = String(e);
          return !i || i.length >= t ? e : '' + Array(t + 1 - i.length).join(n) + e;
        },
        b = {
          s: g,
          z: function (e) {
            var t = -e.utcOffset(),
              n = Math.abs(t),
              i = Math.floor(n / 60),
              r = n % 60;
            return (t <= 0 ? '+' : '-') + g(i, 2, '0') + ':' + g(r, 2, '0');
          },
          m: function e(t, n) {
            if (t.date() < n.date()) return -e(n, t);
            var i = 12 * (n.year() - t.year()) + (n.month() - t.month()),
              r = t.clone().add(i, u),
              o = n - r < 0,
              a = t.clone().add(i + (o ? -1 : 1), u);
            return +(-(i + (n - r) / (o ? r - a : a - r)) || 0);
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          },
          p: function (e) {
            return (
              { M: u, y: d, w: s, d: l, D: f, h: a, m: o, s: r, ms: i, Q: c }[e] ||
              String(e || '')
                .toLowerCase()
                .replace(/s$/, '')
            );
          },
          u: function (e) {
            return void 0 === e;
          },
        },
        y = 'en',
        w = {};
      w[y] = h;
      var N = '$isDayjsObject',
        D = function (e) {
          return e instanceof O || !(!e || !e[N]);
        },
        A = function e(t, n, i) {
          var r;
          if (!t) return y;
          if ('string' == typeof t) {
            var o = t.toLowerCase();
            (w[o] && (r = o), n && ((w[o] = n), (r = o)));
            var a = t.split('-');
            if (!r && a.length > 1) return e(a[0]);
          } else {
            var l = t.name;
            ((w[l] = t), (r = l));
          }
          return (!i && r && (y = r), r || (!i && y));
        },
        _ = function (e, t) {
          if (D(e)) return e.clone();
          var n = 'object' == typeof t ? t : {};
          return ((n.date = e), (n.args = arguments), new O(n));
        },
        x = b;
      ((x.l = A),
        (x.i = D),
        (x.w = function (e, t) {
          return _(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
        }));
      var O = (function () {
          function h(e) {
            ((this.$L = A(e.locale, null, !0)), this.parse(e), (this.$x = this.$x || e.x || {}), (this[N] = !0));
          }
          var g = h.prototype;
          return (
            (g.parse = function (e) {
              ((this.$d = (function (e) {
                var t = e.date,
                  n = e.utc;
                if (null === t) return new Date(NaN);
                if (x.u(t)) return new Date();
                if (t instanceof Date) return new Date(t);
                if ('string' == typeof t && !/Z$/i.test(t)) {
                  var i = t.match(v);
                  if (i) {
                    var r = i[2] - 1 || 0,
                      o = (i[7] || '0').substring(0, 3);
                    return n
                      ? new Date(Date.UTC(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o))
                      : new Date(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o);
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
              return x;
            }),
            (g.isValid = function () {
              return !(this.$d.toString() === m);
            }),
            (g.isSame = function (e, t) {
              var n = _(e);
              return this.startOf(t) <= n && n <= this.endOf(t);
            }),
            (g.isAfter = function (e, t) {
              return _(e) < this.startOf(t);
            }),
            (g.isBefore = function (e, t) {
              return this.endOf(t) < _(e);
            }),
            (g.$g = function (e, t, n) {
              return x.u(e) ? this[t] : this.set(n, e);
            }),
            (g.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (g.valueOf = function () {
              return this.$d.getTime();
            }),
            (g.startOf = function (e, t) {
              var n = this,
                i = !!x.u(t) || t,
                c = x.p(e),
                m = function (e, t) {
                  var r = x.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                  return i ? r : r.endOf(l);
                },
                v = function (e, t) {
                  return x.w(n.toDate()[e].apply(n.toDate('s'), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n);
                },
                p = this.$W,
                h = this.$M,
                g = this.$D,
                b = 'set' + (this.$u ? 'UTC' : '');
              switch (c) {
                case d:
                  return i ? m(1, 0) : m(31, 11);
                case u:
                  return i ? m(1, h) : m(0, h + 1);
                case s:
                  var y = this.$locale().weekStart || 0,
                    w = (p < y ? p + 7 : p) - y;
                  return m(i ? g - w : g + (6 - w), h);
                case l:
                case f:
                  return v(b + 'Hours', 0);
                case a:
                  return v(b + 'Minutes', 1);
                case o:
                  return v(b + 'Seconds', 2);
                case r:
                  return v(b + 'Milliseconds', 3);
                default:
                  return this.clone();
              }
            }),
            (g.endOf = function (e) {
              return this.startOf(e, !1);
            }),
            (g.$set = function (e, t) {
              var n,
                s = x.p(e),
                c = 'set' + (this.$u ? 'UTC' : ''),
                m = ((n = {}),
                (n[l] = c + 'Date'),
                (n[f] = c + 'Date'),
                (n[u] = c + 'Month'),
                (n[d] = c + 'FullYear'),
                (n[a] = c + 'Hours'),
                (n[o] = c + 'Minutes'),
                (n[r] = c + 'Seconds'),
                (n[i] = c + 'Milliseconds'),
                n)[s],
                v = s === l ? this.$D + (t - this.$W) : t;
              if (s === u || s === d) {
                var p = this.clone().set(f, 1);
                (p.$d[m](v), p.init(), (this.$d = p.set(f, Math.min(this.$D, p.daysInMonth())).$d));
              } else m && this.$d[m](v);
              return (this.init(), this);
            }),
            (g.set = function (e, t) {
              return this.clone().$set(e, t);
            }),
            (g.get = function (e) {
              return this[x.p(e)]();
            }),
            (g.add = function (i, c) {
              var f,
                m = this;
              i = Number(i);
              var v = x.p(c),
                p = function (e) {
                  var t = _(m);
                  return x.w(t.date(t.date() + Math.round(e * i)), m);
                };
              if (v === u) return this.set(u, this.$M + i);
              if (v === d) return this.set(d, this.$y + i);
              if (v === l) return p(1);
              if (v === s) return p(7);
              var h = ((f = {}), (f[o] = t), (f[a] = n), (f[r] = e), f)[v] || 1,
                g = this.$d.getTime() + i * h;
              return x.w(g, this);
            }),
            (g.subtract = function (e, t) {
              return this.add(-1 * e, t);
            }),
            (g.format = function (e) {
              var t = this,
                n = this.$locale();
              if (!this.isValid()) return n.invalidDate || m;
              var i = e || 'YYYY-MM-DDTHH:mm:ssZ',
                r = x.z(this),
                o = this.$H,
                a = this.$m,
                l = this.$M,
                s = n.weekdays,
                u = n.months,
                c = n.meridiem,
                d = function (e, n, r, o) {
                  return (e && (e[n] || e(t, i))) || r[n].slice(0, o);
                },
                f = function (e) {
                  return x.s(o % 12 || 12, e, '0');
                },
                v =
                  c ||
                  function (e, t, n) {
                    var i = e < 12 ? 'AM' : 'PM';
                    return n ? i.toLowerCase() : i;
                  };
              return i.replace(p, function (e, i) {
                return (
                  i ||
                  (function (e) {
                    switch (e) {
                      case 'YY':
                        return String(t.$y).slice(-2);
                      case 'YYYY':
                        return x.s(t.$y, 4, '0');
                      case 'M':
                        return l + 1;
                      case 'MM':
                        return x.s(l + 1, 2, '0');
                      case 'MMM':
                        return d(n.monthsShort, l, u, 3);
                      case 'MMMM':
                        return d(u, l);
                      case 'D':
                        return t.$D;
                      case 'DD':
                        return x.s(t.$D, 2, '0');
                      case 'd':
                        return String(t.$W);
                      case 'dd':
                        return d(n.weekdaysMin, t.$W, s, 2);
                      case 'ddd':
                        return d(n.weekdaysShort, t.$W, s, 3);
                      case 'dddd':
                        return s[t.$W];
                      case 'H':
                        return String(o);
                      case 'HH':
                        return x.s(o, 2, '0');
                      case 'h':
                        return f(1);
                      case 'hh':
                        return f(2);
                      case 'a':
                        return v(o, a, !0);
                      case 'A':
                        return v(o, a, !1);
                      case 'm':
                        return String(a);
                      case 'mm':
                        return x.s(a, 2, '0');
                      case 's':
                        return String(t.$s);
                      case 'ss':
                        return x.s(t.$s, 2, '0');
                      case 'SSS':
                        return x.s(t.$ms, 3, '0');
                      case 'Z':
                        return r;
                    }
                    return null;
                  })(e) ||
                  r.replace(':', '')
                );
              });
            }),
            (g.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (g.diff = function (i, f, m) {
              var v,
                p = this,
                h = x.p(f),
                g = _(i),
                b = (g.utcOffset() - this.utcOffset()) * t,
                y = this - g,
                w = function () {
                  return x.m(p, g);
                };
              switch (h) {
                case d:
                  v = w() / 12;
                  break;
                case u:
                  v = w();
                  break;
                case c:
                  v = w() / 3;
                  break;
                case s:
                  v = (y - b) / 6048e5;
                  break;
                case l:
                  v = (y - b) / 864e5;
                  break;
                case a:
                  v = y / n;
                  break;
                case o:
                  v = y / t;
                  break;
                case r:
                  v = y / e;
                  break;
                default:
                  v = y;
              }
              return m ? v : x.a(v);
            }),
            (g.daysInMonth = function () {
              return this.endOf(u).$D;
            }),
            (g.$locale = function () {
              return w[this.$L];
            }),
            (g.locale = function (e, t) {
              if (!e) return this.$L;
              var n = this.clone(),
                i = A(e, t, !0);
              return (i && (n.$L = i), n);
            }),
            (g.clone = function () {
              return x.w(this.$d, this);
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
        S = O.prototype;
      return (
        (_.prototype = S),
        [
          ['$ms', i],
          ['$s', r],
          ['$m', o],
          ['$H', a],
          ['$W', l],
          ['$M', u],
          ['$y', d],
          ['$D', f],
        ].forEach(function (e) {
          S[e[1]] = function (t) {
            return this.$g(t, e[0], e[1]);
          };
        }),
        (_.extend = function (e, t) {
          return (e.$i || (e(t, O, _), (e.$i = !0)), _);
        }),
        (_.locale = A),
        (_.isDayjs = D),
        (_.unix = function (e) {
          return _(1e3 * e);
        }),
        (_.en = w[y]),
        (_.Ls = w),
        (_.p = {}),
        _
      );
    })())),
  Rn.exports),
);
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */ var zn,
  Wn,
  jn = 9e15,
  qn = 1e9,
  Zn = '0123456789abcdef',
  Kn =
    '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
  Xn =
    '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
  Jn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -jn, maxE: jn, crypto: !1 },
  Qn = !0,
  ei = '[DecimalError] ',
  ti = ei + 'Invalid argument: ',
  ni = ei + 'Precision limit exceeded',
  ii = ei + 'crypto unavailable',
  ri = '[object Decimal]',
  oi = Math.floor,
  ai = Math.pow,
  li = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  si = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  ui = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  ci = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  di = 1e7,
  fi = Kn.length - 1,
  mi = Xn.length - 1,
  vi = { toStringTag: ri };
function pi(e) {
  var t,
    n,
    i,
    r = e.length - 1,
    o = '',
    a = e[0];
  if (r > 0) {
    for (o += a, t = 1; t < r; t++) ((n = 7 - (i = e[t] + '').length) && (o += Oi(n)), (o += i));
    (n = 7 - (i = (a = e[t]) + '').length) && (o += Oi(n));
  } else if (0 === a) return '0';
  for (; a % 10 == 0; ) a /= 10;
  return o + a;
}
function hi(e, t, n) {
  if (e !== ~~e || e < t || e > n) throw Error(ti + e);
}
function gi(e, t, n, i) {
  var r, o, a, l;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += 7), (r = 0)) : ((r = Math.ceil((t + 1) / 7)), (t %= 7)),
    (o = ai(10, 7 - t)),
    (l = e[r] % o | 0),
    null == i
      ? t < 3
        ? (0 == t ? (l = (l / 100) | 0) : 1 == t && (l = (l / 10) | 0),
          (a = (n < 4 && 99999 == l) || (n > 3 && 49999 == l) || 5e4 == l || 0 == l))
        : (a =
            (((n < 4 && l + 1 == o) || (n > 3 && l + 1 == o / 2)) && ((e[r + 1] / o / 100) | 0) == ai(10, t - 2) - 1) ||
            ((l == o / 2 || 0 == l) && !((e[r + 1] / o / 100) | 0)))
      : t < 4
        ? (0 == t ? (l = (l / 1e3) | 0) : 1 == t ? (l = (l / 100) | 0) : 2 == t && (l = (l / 10) | 0),
          (a = ((i || n < 4) && 9999 == l) || (!i && n > 3 && 4999 == l)))
        : (a = (((i || n < 4) && l + 1 == o) || (!i && n > 3 && l + 1 == o / 2)) && ((e[r + 1] / o / 1e3) | 0) == ai(10, t - 3) - 1),
    a
  );
}
function bi(e, t, n) {
  for (var i, r, o = [0], a = 0, l = e.length; a < l; ) {
    for (r = o.length; r--; ) o[r] *= t;
    for (o[0] += Zn.indexOf(e.charAt(a++)), i = 0; i < o.length; i++)
      o[i] > n - 1 && (void 0 === o[i + 1] && (o[i + 1] = 0), (o[i + 1] += (o[i] / n) | 0), (o[i] %= n));
  }
  return o.reverse();
}
((vi.absoluteValue = vi.abs =
  function () {
    var e = new this.constructor(this);
    return (e.s < 0 && (e.s = 1), wi(e));
  }),
  (vi.ceil = function () {
    return wi(new this.constructor(this), this.e + 1, 2);
  }),
  (vi.clampedTo = vi.clamp =
    function (e, t) {
      var n = this,
        i = n.constructor;
      if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
      if (e.gt(t)) throw Error(ti + t);
      return n.cmp(e) < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    }),
  (vi.comparedTo = vi.cmp =
    function (e) {
      var t,
        n,
        i,
        r,
        o = this,
        a = o.d,
        l = (e = new o.constructor(e)).d,
        s = o.s,
        u = e.s;
      if (!a || !l) return s && u ? (s !== u ? s : a === l ? 0 : !a ^ (s < 0) ? 1 : -1) : NaN;
      if (!a[0] || !l[0]) return a[0] ? s : l[0] ? -u : 0;
      if (s !== u) return s;
      if (o.e !== e.e) return (o.e > e.e) ^ (s < 0) ? 1 : -1;
      for (t = 0, n = (i = a.length) < (r = l.length) ? i : r; t < n; ++t) if (a[t] !== l[t]) return (a[t] > l[t]) ^ (s < 0) ? 1 : -1;
      return i === r ? 0 : (i > r) ^ (s < 0) ? 1 : -1;
    }),
  (vi.cosine = vi.cos =
    function () {
      var e,
        t,
        n = this,
        i = n.constructor;
      return n.d
        ? n.d[0]
          ? ((e = i.precision),
            (t = i.rounding),
            (i.precision = e + Math.max(n.e, n.sd()) + 7),
            (i.rounding = 1),
            (n = (function (e, t) {
              var n, i, r;
              if (t.isZero()) return t;
              ((i = t.d.length),
                i < 32 ? (r = (1 / Mi(4, (n = Math.ceil(i / 3)))).toString()) : ((n = 16), (r = '2.3283064365386962890625e-10')));
              ((e.precision += n), (t = Hi(e, 1, t.times(r), new e(1))));
              for (var o = n; o--; ) {
                var a = t.times(t);
                t = a.times(a).minus(a).times(8).plus(1);
              }
              return ((e.precision -= n), t);
            })(i, $i(i, n))),
            (i.precision = e),
            (i.rounding = t),
            wi(2 == Wn || 3 == Wn ? n.neg() : n, e, t, !0))
          : new i(1)
        : new i(NaN);
    }),
  (vi.cubeRoot = vi.cbrt =
    function () {
      var e,
        t,
        n,
        i,
        r,
        o,
        a,
        l,
        s,
        u,
        c = this,
        d = c.constructor;
      if (!c.isFinite() || c.isZero()) return new d(c);
      for (
        Qn = !1,
          (o = c.s * ai(c.s * c, 1 / 3)) && Math.abs(o) != 1 / 0
            ? (i = new d(o.toString()))
            : ((n = pi(c.d)),
              (o = ((e = c.e) - n.length + 1) % 3) && (n += 1 == o || -2 == o ? '0' : '00'),
              (o = ai(n, 1 / 3)),
              (e = oi((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
              ((i = new d((n = o == 1 / 0 ? '5e' + e : (n = o.toExponential()).slice(0, n.indexOf('e') + 1) + e))).s = c.s)),
          a = (e = d.precision) + 3;
        ;

      )
        if (
          ((u = (s = (l = i).times(l).times(l)).plus(c)),
          (i = yi(u.plus(c).times(l), u.plus(s), a + 2, 1)),
          pi(l.d).slice(0, a) === (n = pi(i.d)).slice(0, a))
        ) {
          if ('9999' != (n = n.slice(a - 3, a + 1)) && (r || '4999' != n)) {
            (+n && (+n.slice(1) || '5' != n.charAt(0))) || (wi(i, e + 1, 1), (t = !i.times(i).times(i).eq(c)));
            break;
          }
          if (!r && (wi(l, e + 1, 0), l.times(l).times(l).eq(c))) {
            i = l;
            break;
          }
          ((a += 4), (r = 1));
        }
      return ((Qn = !0), wi(i, e, d.rounding, t));
    }),
  (vi.decimalPlaces = vi.dp =
    function () {
      var e,
        t = this.d,
        n = NaN;
      if (t) {
        if (((n = 7 * ((e = t.length - 1) - oi(this.e / 7))), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
        n < 0 && (n = 0);
      }
      return n;
    }),
  (vi.dividedBy = vi.div =
    function (e) {
      return yi(this, new this.constructor(e));
    }),
  (vi.dividedToIntegerBy = vi.divToInt =
    function (e) {
      var t = this.constructor;
      return wi(yi(this, new t(e), 0, 1, 1), t.precision, t.rounding);
    }),
  (vi.equals = vi.eq =
    function (e) {
      return 0 === this.cmp(e);
    }),
  (vi.floor = function () {
    return wi(new this.constructor(this), this.e + 1, 3);
  }),
  (vi.greaterThan = vi.gt =
    function (e) {
      return this.cmp(e) > 0;
    }),
  (vi.greaterThanOrEqualTo = vi.gte =
    function (e) {
      var t = this.cmp(e);
      return 1 == t || 0 === t;
    }),
  (vi.hyperbolicCosine = vi.cosh =
    function () {
      var e,
        t,
        n,
        i,
        r,
        o = this,
        a = o.constructor,
        l = new a(1);
      if (!o.isFinite()) return new a(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return l;
      ((n = a.precision),
        (i = a.rounding),
        (a.precision = n + Math.max(o.e, o.sd()) + 4),
        (a.rounding = 1),
        (r = o.d.length) < 32 ? (t = (1 / Mi(4, (e = Math.ceil(r / 3)))).toString()) : ((e = 16), (t = '2.3283064365386962890625e-10')),
        (o = Hi(a, 1, o.times(t), new a(1), !0)));
      for (var s, u = e, c = new a(8); u--; ) ((s = o.times(o)), (o = l.minus(s.times(c.minus(s.times(c))))));
      return wi(o, (a.precision = n), (a.rounding = i), !0);
    }),
  (vi.hyperbolicSine = vi.sinh =
    function () {
      var e,
        t,
        n,
        i,
        r = this,
        o = r.constructor;
      if (!r.isFinite() || r.isZero()) return new o(r);
      if (((t = o.precision), (n = o.rounding), (o.precision = t + Math.max(r.e, r.sd()) + 4), (o.rounding = 1), (i = r.d.length) < 3))
        r = Hi(o, 2, r, r, !0);
      else {
        ((e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e), (r = Hi(o, 2, (r = r.times(1 / Mi(5, e))), r, !0)));
        for (var a, l = new o(5), s = new o(16), u = new o(20); e--; )
          ((a = r.times(r)), (r = r.times(l.plus(a.times(s.times(a).plus(u))))));
      }
      return ((o.precision = t), (o.rounding = n), wi(r, t, n, !0));
    }),
  (vi.hyperbolicTangent = vi.tanh =
    function () {
      var e,
        t,
        n = this,
        i = n.constructor;
      return n.isFinite()
        ? n.isZero()
          ? new i(n)
          : ((e = i.precision),
            (t = i.rounding),
            (i.precision = e + 7),
            (i.rounding = 1),
            yi(n.sinh(), n.cosh(), (i.precision = e), (i.rounding = t)))
        : new i(n.s);
    }),
  (vi.inverseCosine = vi.acos =
    function () {
      var e = this,
        t = e.constructor,
        n = e.abs().cmp(1),
        i = t.precision,
        r = t.rounding;
      return -1 !== n
        ? 0 === n
          ? e.isNeg()
            ? _i(t, i, r)
            : new t(0)
          : new t(NaN)
        : e.isZero()
          ? _i(t, i + 4, r).times(0.5)
          : ((t.precision = i + 6),
            (t.rounding = 1),
            (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
            (t.precision = i),
            (t.rounding = r),
            e.times(2));
    }),
  (vi.inverseHyperbolicCosine = vi.acosh =
    function () {
      var e,
        t,
        n = this,
        i = n.constructor;
      return n.lte(1)
        ? new i(n.eq(1) ? 0 : NaN)
        : n.isFinite()
          ? ((e = i.precision),
            (t = i.rounding),
            (i.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
            (i.rounding = 1),
            (Qn = !1),
            (n = n.times(n).minus(1).sqrt().plus(n)),
            (Qn = !0),
            (i.precision = e),
            (i.rounding = t),
            n.ln())
          : new i(n);
    }),
  (vi.inverseHyperbolicSine = vi.asinh =
    function () {
      var e,
        t,
        n = this,
        i = n.constructor;
      return !n.isFinite() || n.isZero()
        ? new i(n)
        : ((e = i.precision),
          (t = i.rounding),
          (i.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
          (i.rounding = 1),
          (Qn = !1),
          (n = n.times(n).plus(1).sqrt().plus(n)),
          (Qn = !0),
          (i.precision = e),
          (i.rounding = t),
          n.ln());
    }),
  (vi.inverseHyperbolicTangent = vi.atanh =
    function () {
      var e,
        t,
        n,
        i,
        r = this,
        o = r.constructor;
      return r.isFinite()
        ? r.e >= 0
          ? new o(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN)
          : ((e = o.precision),
            (t = o.rounding),
            (i = r.sd()),
            Math.max(i, e) < 2 * -r.e - 1
              ? wi(new o(r), e, t, !0)
              : ((o.precision = n = i - r.e),
                (r = yi(r.plus(1), new o(1).minus(r), n + e, 1)),
                (o.precision = e + 4),
                (o.rounding = 1),
                (r = r.ln()),
                (o.precision = e),
                (o.rounding = t),
                r.times(0.5)))
        : new o(NaN);
    }),
  (vi.inverseSine = vi.asin =
    function () {
      var e,
        t,
        n,
        i,
        r = this,
        o = r.constructor;
      return r.isZero()
        ? new o(r)
        : ((t = r.abs().cmp(1)),
          (n = o.precision),
          (i = o.rounding),
          -1 !== t
            ? 0 === t
              ? (((e = _i(o, n + 4, i).times(0.5)).s = r.s), e)
              : new o(NaN)
            : ((o.precision = n + 6),
              (o.rounding = 1),
              (r = r.div(new o(1).minus(r.times(r)).sqrt().plus(1)).atan()),
              (o.precision = n),
              (o.rounding = i),
              r.times(2)));
    }),
  (vi.inverseTangent = vi.atan =
    function () {
      var e,
        t,
        n,
        i,
        r,
        o,
        a,
        l,
        s,
        u = this,
        c = u.constructor,
        d = c.precision,
        f = c.rounding;
      if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && d + 4 <= mi) return (((a = _i(c, d + 4, f).times(0.25)).s = u.s), a);
      } else {
        if (!u.s) return new c(NaN);
        if (d + 4 <= mi) return (((a = _i(c, d + 4, f).times(0.5)).s = u.s), a);
      }
      for (c.precision = l = d + 10, c.rounding = 1, e = n = Math.min(28, (l / 7 + 2) | 0); e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (Qn = !1, t = Math.ceil(l / 7), i = 1, s = u.times(u), a = new c(u), r = u; -1 !== e; )
        if (((r = r.times(s)), (o = a.minus(r.div((i += 2)))), (r = r.times(s)), void 0 !== (a = o.plus(r.div((i += 2)))).d[t]))
          for (e = t; a.d[e] === o.d[e] && e--; );
      return (n && (a = a.times(2 << (n - 1))), (Qn = !0), wi(a, (c.precision = d), (c.rounding = f), !0));
    }),
  (vi.isFinite = function () {
    return !!this.d;
  }),
  (vi.isInteger = vi.isInt =
    function () {
      return !!this.d && oi(this.e / 7) > this.d.length - 2;
    }),
  (vi.isNaN = function () {
    return !this.s;
  }),
  (vi.isNegative = vi.isNeg =
    function () {
      return this.s < 0;
    }),
  (vi.isPositive = vi.isPos =
    function () {
      return this.s > 0;
    }),
  (vi.isZero = function () {
    return !!this.d && 0 === this.d[0];
  }),
  (vi.lessThan = vi.lt =
    function (e) {
      return this.cmp(e) < 0;
    }),
  (vi.lessThanOrEqualTo = vi.lte =
    function (e) {
      return this.cmp(e) < 1;
    }),
  (vi.logarithm = vi.log =
    function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        l,
        s,
        u = this,
        c = u.constructor,
        d = c.precision,
        f = c.rounding;
      if (null == e) ((e = new c(10)), (t = !0));
      else {
        if (((n = (e = new c(e)).d), e.s < 0 || !n || !n[0] || e.eq(1))) return new c(NaN);
        t = e.eq(10);
      }
      if (((n = u.d), u.s < 0 || !n || !n[0] || u.eq(1))) return new c(n && !n[0] ? -1 / 0 : 1 != u.s ? NaN : n ? 0 : 1 / 0);
      if (t)
        if (n.length > 1) o = !0;
        else {
          for (r = n[0]; r % 10 == 0; ) r /= 10;
          o = 1 !== r;
        }
      if (((Qn = !1), (a = Ci(u, (l = d + 5))), (i = t ? Ai(c, l + 10) : Ci(e, l)), gi((s = yi(a, i, l, 1)).d, (r = d), f)))
        do {
          if (((a = Ci(u, (l += 10))), (i = t ? Ai(c, l + 10) : Ci(e, l)), (s = yi(a, i, l, 1)), !o)) {
            +pi(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = wi(s, d + 1, 0));
            break;
          }
        } while (gi(s.d, (r += 10), f));
      return ((Qn = !0), wi(s, d, f));
    }),
  (vi.minus = vi.sub =
    function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        l,
        s,
        u,
        c,
        d,
        f,
        m = this,
        v = m.constructor;
      if (((e = new v(e)), !m.d || !e.d))
        return (m.s && e.s ? (m.d ? (e.s = -e.s) : (e = new v(e.d || m.s !== e.s ? m : NaN))) : (e = new v(NaN)), e);
      if (m.s != e.s) return ((e.s = -e.s), m.plus(e));
      if (((u = m.d), (f = e.d), (l = v.precision), (s = v.rounding), !u[0] || !f[0])) {
        if (f[0]) e.s = -e.s;
        else {
          if (!u[0]) return new v(3 === s ? -0 : 0);
          e = new v(m);
        }
        return Qn ? wi(e, l, s) : e;
      }
      if (((n = oi(e.e / 7)), (c = oi(m.e / 7)), (u = u.slice()), (o = c - n))) {
        for (
          (d = o < 0) ? ((t = u), (o = -o), (a = f.length)) : ((t = f), (n = c), (a = u.length)),
            o > (i = Math.max(Math.ceil(l / 7), a) + 2) && ((o = i), (t.length = 1)),
            t.reverse(),
            i = o;
          i--;

        )
          t.push(0);
        t.reverse();
      } else {
        for ((d = (i = u.length) < (a = f.length)) && (a = i), i = 0; i < a; i++)
          if (u[i] != f[i]) {
            d = u[i] < f[i];
            break;
          }
        o = 0;
      }
      for (d && ((t = u), (u = f), (f = t), (e.s = -e.s)), a = u.length, i = f.length - a; i > 0; --i) u[a++] = 0;
      for (i = f.length; i > o; ) {
        if (u[--i] < f[i]) {
          for (r = i; r && 0 === u[--r]; ) u[r] = di - 1;
          (--u[r], (u[i] += di));
        }
        u[i] -= f[i];
      }
      for (; 0 === u[--a]; ) u.pop();
      for (; 0 === u[0]; u.shift()) --n;
      return u[0] ? ((e.d = u), (e.e = Di(u, n)), Qn ? wi(e, l, s) : e) : new v(3 === s ? -0 : 0);
    }),
  (vi.modulo = vi.mod =
    function (e) {
      var t,
        n = this,
        i = n.constructor;
      return (
        (e = new i(e)),
        !n.d || !e.s || (e.d && !e.d[0])
          ? new i(NaN)
          : !e.d || (n.d && !n.d[0])
            ? wi(new i(n), i.precision, i.rounding)
            : ((Qn = !1),
              9 == i.modulo ? ((t = yi(n, e.abs(), 0, 3, 1)).s *= e.s) : (t = yi(n, e, 0, i.modulo, 1)),
              (t = t.times(e)),
              (Qn = !0),
              n.minus(t))
      );
    }),
  (vi.naturalExponential = vi.exp =
    function () {
      return Ii(this);
    }),
  (vi.naturalLogarithm = vi.ln =
    function () {
      return Ci(this);
    }),
  (vi.negated = vi.neg =
    function () {
      var e = new this.constructor(this);
      return ((e.s = -e.s), wi(e));
    }),
  (vi.plus = vi.add =
    function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        l,
        s,
        u,
        c,
        d = this,
        f = d.constructor;
      if (((e = new f(e)), !d.d || !e.d)) return (d.s && e.s ? d.d || (e = new f(e.d || d.s === e.s ? d : NaN)) : (e = new f(NaN)), e);
      if (d.s != e.s) return ((e.s = -e.s), d.minus(e));
      if (((u = d.d), (c = e.d), (l = f.precision), (s = f.rounding), !u[0] || !c[0]))
        return (c[0] || (e = new f(d)), Qn ? wi(e, l, s) : e);
      if (((o = oi(d.e / 7)), (i = oi(e.e / 7)), (u = u.slice()), (r = o - i))) {
        for (
          r < 0 ? ((n = u), (r = -r), (a = c.length)) : ((n = c), (i = o), (a = u.length)),
            r > (a = (o = Math.ceil(l / 7)) > a ? o + 1 : a + 1) && ((r = a), (n.length = 1)),
            n.reverse();
          r--;

        )
          n.push(0);
        n.reverse();
      }
      for ((a = u.length) - (r = c.length) < 0 && ((r = a), (n = c), (c = u), (u = n)), t = 0; r; )
        ((t = ((u[--r] = u[r] + c[r] + t) / di) | 0), (u[r] %= di));
      for (t && (u.unshift(t), ++i), a = u.length; 0 == u[--a]; ) u.pop();
      return ((e.d = u), (e.e = Di(u, i)), Qn ? wi(e, l, s) : e);
    }),
  (vi.precision = vi.sd =
    function (e) {
      var t,
        n = this;
      if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(ti + e);
      return (n.d ? ((t = xi(n.d)), e && n.e + 1 > t && (t = n.e + 1)) : (t = NaN), t);
    }),
  (vi.round = function () {
    var e = this,
      t = e.constructor;
    return wi(new t(e), e.e + 1, t.rounding);
  }),
  (vi.sine = vi.sin =
    function () {
      var e,
        t,
        n = this,
        i = n.constructor;
      return n.isFinite()
        ? n.isZero()
          ? new i(n)
          : ((e = i.precision),
            (t = i.rounding),
            (i.precision = e + Math.max(n.e, n.sd()) + 7),
            (i.rounding = 1),
            (n = (function (e, t) {
              var n,
                i = t.d.length;
              if (i < 3) return t.isZero() ? t : Hi(e, 2, t, t);
              ((n = (n = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | n), (t = t.times(1 / Mi(5, n))), (t = Hi(e, 2, t, t)));
              for (var r, o = new e(5), a = new e(16), l = new e(20); n--; )
                ((r = t.times(t)), (t = t.times(o.plus(r.times(a.times(r).minus(l))))));
              return t;
            })(i, $i(i, n))),
            (i.precision = e),
            (i.rounding = t),
            wi(Wn > 2 ? n.neg() : n, e, t, !0))
        : new i(NaN);
    }),
  (vi.squareRoot = vi.sqrt =
    function () {
      var e,
        t,
        n,
        i,
        r,
        o,
        a = this,
        l = a.d,
        s = a.e,
        u = a.s,
        c = a.constructor;
      if (1 !== u || !l || !l[0]) return new c(!u || (u < 0 && (!l || l[0])) ? NaN : l ? a : 1 / 0);
      for (
        Qn = !1,
          0 == (u = Math.sqrt(+a)) || u == 1 / 0
            ? (((t = pi(l)).length + s) % 2 == 0 && (t += '0'),
              (u = Math.sqrt(t)),
              (s = oi((s + 1) / 2) - (s < 0 || s % 2)),
              (i = new c((t = u == 1 / 0 ? '5e' + s : (t = u.toExponential()).slice(0, t.indexOf('e') + 1) + s))))
            : (i = new c(u.toString())),
          n = (s = c.precision) + 3;
        ;

      )
        if (((i = (o = i).plus(yi(a, o, n + 2, 1)).times(0.5)), pi(o.d).slice(0, n) === (t = pi(i.d)).slice(0, n))) {
          if ('9999' != (t = t.slice(n - 3, n + 1)) && (r || '4999' != t)) {
            (+t && (+t.slice(1) || '5' != t.charAt(0))) || (wi(i, s + 1, 1), (e = !i.times(i).eq(a)));
            break;
          }
          if (!r && (wi(o, s + 1, 0), o.times(o).eq(a))) {
            i = o;
            break;
          }
          ((n += 4), (r = 1));
        }
      return ((Qn = !0), wi(i, s, c.rounding, e));
    }),
  (vi.tangent = vi.tan =
    function () {
      var e,
        t,
        n = this,
        i = n.constructor;
      return n.isFinite()
        ? n.isZero()
          ? new i(n)
          : ((e = i.precision),
            (t = i.rounding),
            (i.precision = e + 10),
            (i.rounding = 1),
            ((n = n.sin()).s = 1),
            (n = yi(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0)),
            (i.precision = e),
            (i.rounding = t),
            wi(2 == Wn || 4 == Wn ? n.neg() : n, e, t, !0))
        : new i(NaN);
    }),
  (vi.times = vi.mul =
    function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        l,
        s,
        u,
        c = this,
        d = c.constructor,
        f = c.d,
        m = (e = new d(e)).d;
      if (((e.s *= c.s), !(f && f[0] && m && m[0])))
        return new d(!e.s || (f && !f[0] && !m) || (m && !m[0] && !f) ? NaN : f && m ? 0 * e.s : e.s / 0);
      for (
        n = oi(c.e / 7) + oi(e.e / 7),
          (s = f.length) < (u = m.length) && ((o = f), (f = m), (m = o), (a = s), (s = u), (u = a)),
          o = [],
          i = a = s + u;
        i--;

      )
        o.push(0);
      for (i = u; --i >= 0; ) {
        for (t = 0, r = s + i; r > i; ) ((l = o[r] + m[i] * f[r - i - 1] + t), (o[r--] = l % di | 0), (t = (l / di) | 0));
        o[r] = (o[r] + t) % di | 0;
      }
      for (; !o[--a]; ) o.pop();
      return (t ? ++n : o.shift(), (e.d = o), (e.e = Di(o, n)), Qn ? wi(e, d.precision, d.rounding) : e);
    }),
  (vi.toBinary = function (e, t) {
    return Yi(this, 2, e, t);
  }),
  (vi.toDecimalPlaces = vi.toDP =
    function (e, t) {
      var n = this,
        i = n.constructor;
      return ((n = new i(n)), void 0 === e ? n : (hi(e, 0, qn), void 0 === t ? (t = i.rounding) : hi(t, 0, 8), wi(n, e + n.e + 1, t)));
    }),
  (vi.toExponential = function (e, t) {
    var n,
      i = this,
      r = i.constructor;
    return (
      void 0 === e
        ? (n = Ni(i, !0))
        : (hi(e, 0, qn), void 0 === t ? (t = r.rounding) : hi(t, 0, 8), (n = Ni((i = wi(new r(i), e + 1, t)), !0, e + 1))),
      i.isNeg() && !i.isZero() ? '-' + n : n
    );
  }),
  (vi.toFixed = function (e, t) {
    var n,
      i,
      r = this,
      o = r.constructor;
    return (
      void 0 === e
        ? (n = Ni(r))
        : (hi(e, 0, qn), void 0 === t ? (t = o.rounding) : hi(t, 0, 8), (n = Ni((i = wi(new o(r), e + r.e + 1, t)), !1, e + i.e + 1))),
      r.isNeg() && !r.isZero() ? '-' + n : n
    );
  }),
  (vi.toFraction = function (e) {
    var t,
      n,
      i,
      r,
      o,
      a,
      l,
      s,
      u,
      c,
      d,
      f,
      m = this,
      v = m.d,
      p = m.constructor;
    if (!v) return new p(m);
    if (
      ((u = n = new p(1)),
      (i = s = new p(0)),
      (a = (o = (t = new p(i)).e = xi(v) - m.e - 1) % 7),
      (t.d[0] = ai(10, a < 0 ? 7 + a : a)),
      null == e)
    )
      e = o > 0 ? t : u;
    else {
      if (!(l = new p(e)).isInt() || l.lt(u)) throw Error(ti + l);
      e = l.gt(t) ? (o > 0 ? t : u) : l;
    }
    for (
      Qn = !1, l = new p(pi(v)), c = p.precision, p.precision = o = 7 * v.length * 2;
      (d = yi(l, t, 0, 1, 1)), 1 != (r = n.plus(d.times(i))).cmp(e);

    )
      ((n = i), (i = r), (r = u), (u = s.plus(d.times(r))), (s = r), (r = t), (t = l.minus(d.times(r))), (l = r));
    return (
      (r = yi(e.minus(n), i, 0, 1, 1)),
      (s = s.plus(r.times(u))),
      (n = n.plus(r.times(i))),
      (s.s = u.s = m.s),
      (f =
        yi(u, i, o, 1)
          .minus(m)
          .abs()
          .cmp(yi(s, n, o, 1).minus(m).abs()) < 1
          ? [u, i]
          : [s, n]),
      (p.precision = c),
      (Qn = !0),
      f
    );
  }),
  (vi.toHexadecimal = vi.toHex =
    function (e, t) {
      return Yi(this, 16, e, t);
    }),
  (vi.toNearest = function (e, t) {
    var n = this,
      i = n.constructor;
    if (((n = new i(n)), null == e)) {
      if (!n.d) return n;
      ((e = new i(1)), (t = i.rounding));
    } else {
      if (((e = new i(e)), void 0 === t ? (t = i.rounding) : hi(t, 0, 8), !n.d)) return e.s ? n : e;
      if (!e.d) return (e.s && (e.s = n.s), e);
    }
    return (e.d[0] ? ((Qn = !1), (n = yi(n, e, 0, t, 1).times(e)), (Qn = !0), wi(n)) : ((e.s = n.s), (n = e)), n);
  }),
  (vi.toNumber = function () {
    return +this;
  }),
  (vi.toOctal = function (e, t) {
    return Yi(this, 8, e, t);
  }),
  (vi.toPower = vi.pow =
    function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        l = this,
        s = l.constructor,
        u = +(e = new s(e));
      if (!(l.d && e.d && l.d[0] && e.d[0])) return new s(ai(+l, u));
      if ((l = new s(l)).eq(1)) return l;
      if (((i = s.precision), (o = s.rounding), e.eq(1))) return wi(l, i, o);
      if ((t = oi(e.e / 7)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= 9007199254740991)
        return ((r = Si(s, l, n, i)), e.s < 0 ? new s(1).div(r) : wi(r, i, o));
      if ((a = l.s) < 0) {
        if (t < e.d.length - 1) return new s(NaN);
        if ((1 & e.d[t] || (a = 1), 0 == l.e && 1 == l.d[0] && 1 == l.d.length)) return ((l.s = a), l);
      }
      return (t = 0 != (n = ai(+l, u)) && isFinite(n) ? new s(n + '').e : oi(u * (Math.log('0.' + pi(l.d)) / Math.LN10 + l.e + 1))) >
        s.maxE + 1 || t < s.minE - 1
        ? new s(t > 0 ? a / 0 : 0)
        : ((Qn = !1),
          (s.rounding = l.s = 1),
          (n = Math.min(12, (t + '').length)),
          (r = Ii(e.times(Ci(l, i + n)), i)).d &&
            gi((r = wi(r, i + 5, 1)).d, i, o) &&
            ((t = i + 10),
            +pi((r = wi(Ii(e.times(Ci(l, t + n)), t), t + 5, 1)).d).slice(i + 1, i + 15) + 1 == 1e14 && (r = wi(r, i + 1, 0))),
          (r.s = a),
          (Qn = !0),
          (s.rounding = o),
          wi(r, i, o));
    }),
  (vi.toPrecision = function (e, t) {
    var n,
      i = this,
      r = i.constructor;
    return (
      void 0 === e
        ? (n = Ni(i, i.e <= r.toExpNeg || i.e >= r.toExpPos))
        : (hi(e, 1, qn),
          void 0 === t ? (t = r.rounding) : hi(t, 0, 8),
          (n = Ni((i = wi(new r(i), e, t)), e <= i.e || i.e <= r.toExpNeg, e))),
      i.isNeg() && !i.isZero() ? '-' + n : n
    );
  }),
  (vi.toSignificantDigits = vi.toSD =
    function (e, t) {
      var n = this.constructor;
      return (
        void 0 === e ? ((e = n.precision), (t = n.rounding)) : (hi(e, 1, qn), void 0 === t ? (t = n.rounding) : hi(t, 0, 8)),
        wi(new n(this), e, t)
      );
    }),
  (vi.toString = function () {
    var e = this,
      t = e.constructor,
      n = Ni(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? '-' + n : n;
  }),
  (vi.truncated = vi.trunc =
    function () {
      return wi(new this.constructor(this), this.e + 1, 1);
    }),
  (vi.valueOf = vi.toJSON =
    function () {
      var e = this,
        t = e.constructor,
        n = Ni(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? '-' + n : n;
    }));
var yi = (function () {
  function e(e, t, n) {
    var i,
      r = 0,
      o = e.length;
    for (e = e.slice(); o--; ) ((i = e[o] * t + r), (e[o] = i % n | 0), (r = (i / n) | 0));
    return (r && e.unshift(r), e);
  }
  function t(e, t, n, i) {
    var r, o;
    if (n != i) o = n > i ? 1 : -1;
    else
      for (r = o = 0; r < n; r++)
        if (e[r] != t[r]) {
          o = e[r] > t[r] ? 1 : -1;
          break;
        }
    return o;
  }
  function n(e, t, n, i) {
    for (var r = 0; n--; ) ((e[n] -= r), (r = e[n] < t[n] ? 1 : 0), (e[n] = r * i + e[n] - t[n]));
    for (; !e[0] && e.length > 1; ) e.shift();
  }
  return function (i, r, o, a, l, s) {
    var u,
      c,
      d,
      f,
      m,
      v,
      p,
      h,
      g,
      b,
      y,
      w,
      N,
      D,
      A,
      _,
      x,
      O,
      S,
      E,
      k = i.constructor,
      I = i.s == r.s ? 1 : -1,
      C = i.d,
      T = r.d;
    if (!(C && C[0] && T && T[0]))
      return new k(i.s && r.s && (C ? !T || C[0] != T[0] : T) ? ((C && 0 == C[0]) || !T ? 0 * I : I / 0) : NaN);
    for (
      s ? ((m = 1), (c = i.e - r.e)) : ((s = di), (m = 7), (c = oi(i.e / m) - oi(r.e / m))),
        S = T.length,
        x = C.length,
        b = (g = new k(I)).d = [],
        d = 0;
      T[d] == (C[d] || 0);
      d++
    );
    if ((T[d] > (C[d] || 0) && c--, null == o ? ((D = o = k.precision), (a = k.rounding)) : (D = l ? o + (i.e - r.e) + 1 : o), D < 0))
      (b.push(1), (v = !0));
    else {
      if (((D = (D / m + 2) | 0), (d = 0), 1 == S)) {
        for (f = 0, T = T[0], D++; (d < x || f) && D--; d++) ((A = f * s + (C[d] || 0)), (b[d] = (A / T) | 0), (f = A % T | 0));
        v = f || d < x;
      } else {
        for (
          (f = (s / (T[0] + 1)) | 0) > 1 && ((T = e(T, f, s)), (C = e(C, f, s)), (S = T.length), (x = C.length)),
            _ = S,
            w = (y = C.slice(0, S)).length;
          w < S;

        )
          y[w++] = 0;
        ((E = T.slice()).unshift(0), (O = T[0]), T[1] >= s / 2 && ++O);
        do {
          ((f = 0),
            (u = t(T, y, S, w)) < 0
              ? ((N = y[0]),
                S != w && (N = N * s + (y[1] || 0)),
                (f = (N / O) | 0) > 1
                  ? (f >= s && (f = s - 1),
                    1 == (u = t((p = e(T, f, s)), y, (h = p.length), (w = y.length))) && (f--, n(p, S < h ? E : T, h, s)))
                  : (0 == f && (u = f = 1), (p = T.slice())),
                (h = p.length) < w && p.unshift(0),
                n(y, p, w, s),
                -1 == u && (u = t(T, y, S, (w = y.length))) < 1 && (f++, n(y, S < w ? E : T, w, s)),
                (w = y.length))
              : 0 === u && (f++, (y = [0])),
            (b[d++] = f),
            u && y[0] ? (y[w++] = C[_] || 0) : ((y = [C[_]]), (w = 1)));
        } while ((_++ < x || void 0 !== y[0]) && D--);
        v = void 0 !== y[0];
      }
      b[0] || b.shift();
    }
    if (1 == m) ((g.e = c), (zn = v));
    else {
      for (d = 1, f = b[0]; f >= 10; f /= 10) d++;
      ((g.e = d + c * m - 1), wi(g, l ? o + g.e + 1 : o, a, v));
    }
    return g;
  };
})();
function wi(e, t, n, i) {
  var r,
    o,
    a,
    l,
    s,
    u,
    c,
    d,
    f,
    m = e.constructor;
  e: if (null != t) {
    if (!(d = e.d)) return e;
    for (r = 1, l = d[0]; l >= 10; l /= 10) r++;
    if ((o = t - r) < 0) ((o += 7), (a = t), (s = ((c = d[(f = 0)]) / ai(10, r - a - 1)) % 10 | 0));
    else if ((f = Math.ceil((o + 1) / 7)) >= (l = d.length)) {
      if (!i) break e;
      for (; l++ <= f; ) d.push(0);
      ((c = s = 0), (r = 1), (a = (o %= 7) - 7 + 1));
    } else {
      for (c = l = d[f], r = 1; l >= 10; l /= 10) r++;
      s = (a = (o %= 7) - 7 + r) < 0 ? 0 : (c / ai(10, r - a - 1)) % 10 | 0;
    }
    if (
      ((i = i || t < 0 || void 0 !== d[f + 1] || (a < 0 ? c : c % ai(10, r - a - 1))),
      (u =
        n < 4
          ? (s || i) && (0 == n || n == (e.s < 0 ? 3 : 2))
          : s > 5 ||
            (5 == s &&
              (4 == n || i || (6 == n && (o > 0 ? (a > 0 ? c / ai(10, r - a) : 0) : d[f - 1]) % 10 & 1) || n == (e.s < 0 ? 8 : 7)))),
      t < 1 || !d[0])
    )
      return ((d.length = 0), u ? ((t -= e.e + 1), (d[0] = ai(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (d[0] = e.e = 0), e);
    if (
      (0 == o
        ? ((d.length = f), (l = 1), f--)
        : ((d.length = f + 1), (l = ai(10, 7 - o)), (d[f] = a > 0 ? ((c / ai(10, r - a)) % ai(10, a) | 0) * l : 0)),
      u)
    )
      for (;;) {
        if (0 == f) {
          for (o = 1, a = d[0]; a >= 10; a /= 10) o++;
          for (a = d[0] += l, l = 1; a >= 10; a /= 10) l++;
          o != l && (e.e++, d[0] == di && (d[0] = 1));
          break;
        }
        if (((d[f] += l), d[f] != di)) break;
        ((d[f--] = 0), (l = 1));
      }
    for (o = d.length; 0 === d[--o]; ) d.pop();
  }
  return (Qn && (e.e > m.maxE ? ((e.d = null), (e.e = NaN)) : e.e < m.minE && ((e.e = 0), (e.d = [0]))), e);
}
function Ni(e, t, n) {
  if (!e.isFinite()) return Ti(e);
  var i,
    r = e.e,
    o = pi(e.d),
    a = o.length;
  return (
    t
      ? (n && (i = n - a) > 0 ? (o = o.charAt(0) + '.' + o.slice(1) + Oi(i)) : a > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
        (o = o + (e.e < 0 ? 'e' : 'e+') + e.e))
      : r < 0
        ? ((o = '0.' + Oi(-r - 1) + o), n && (i = n - a) > 0 && (o += Oi(i)))
        : r >= a
          ? ((o += Oi(r + 1 - a)), n && (i = n - r - 1) > 0 && (o = o + '.' + Oi(i)))
          : ((i = r + 1) < a && (o = o.slice(0, i) + '.' + o.slice(i)), n && (i = n - a) > 0 && (r + 1 === a && (o += '.'), (o += Oi(i)))),
    o
  );
}
function Di(e, t) {
  var n = e[0];
  for (t *= 7; n >= 10; n /= 10) t++;
  return t;
}
function Ai(e, t, n) {
  if (t > fi) throw ((Qn = !0), n && (e.precision = n), Error(ni));
  return wi(new e(Kn), t, 1, !0);
}
function _i(e, t, n) {
  if (t > mi) throw Error(ni);
  return wi(new e(Xn), t, n, !0);
}
function xi(e) {
  var t = e.length - 1,
    n = 7 * t + 1;
  if ((t = e[t])) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function Oi(e) {
  for (var t = ''; e--; ) t += '0';
  return t;
}
function Si(e, t, n, i) {
  var r,
    o = new e(1),
    a = Math.ceil(i / 7 + 4);
  for (Qn = !1; ; ) {
    if ((n % 2 && Pi((o = o.times(t)).d, a) && (r = !0), 0 === (n = oi(n / 2)))) {
      ((n = o.d.length - 1), r && 0 === o.d[n] && ++o.d[n]);
      break;
    }
    Pi((t = t.times(t)).d, a);
  }
  return ((Qn = !0), o);
}
function Ei(e) {
  return 1 & e.d[e.d.length - 1];
}
function ki(e, t, n) {
  for (var i, r, o = new e(t[0]), a = 0; ++a < t.length; ) {
    if (!(r = new e(t[a])).s) {
      o = r;
      break;
    }
    ((i = o.cmp(r)) === n || (0 === i && o.s === n)) && (o = r);
  }
  return o;
}
function Ii(e, t) {
  var n,
    i,
    r,
    o,
    a,
    l,
    s,
    u = 0,
    c = 0,
    d = 0,
    f = e.constructor,
    m = f.rounding,
    v = f.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? (e.d[0] ? (e.s < 0 ? 0 : 1 / 0) : 1) : e.s ? (e.s < 0 ? 0 : e) : NaN);
  for (null == t ? ((Qn = !1), (s = v)) : (s = t), l = new f(0.03125); e.e > -2; ) ((e = e.times(l)), (d += 5));
  for (s += i = ((Math.log(ai(2, d)) / Math.LN10) * 2 + 5) | 0, n = o = a = new f(1), f.precision = s; ; ) {
    if (((o = wi(o.times(e), s, 1)), (n = n.times(++c)), pi((l = a.plus(yi(o, n, s, 1))).d).slice(0, s) === pi(a.d).slice(0, s))) {
      for (r = d; r--; ) a = wi(a.times(a), s, 1);
      if (null != t) return ((f.precision = v), a);
      if (!(u < 3 && gi(a.d, s - i, m, u))) return wi(a, (f.precision = v), m, (Qn = !0));
      ((f.precision = s += 10), (n = o = l = new f(1)), (c = 0), u++);
    }
    a = l;
  }
}
function Ci(e, t) {
  var n,
    i,
    r,
    o,
    a,
    l,
    s,
    u,
    c,
    d,
    f,
    m = 1,
    v = e,
    p = v.d,
    h = v.constructor,
    g = h.rounding,
    b = h.precision;
  if (v.s < 0 || !p || !p[0] || (!v.e && 1 == p[0] && 1 == p.length)) return new h(p && !p[0] ? -1 / 0 : 1 != v.s ? NaN : p ? 0 : v);
  if ((null == t ? ((Qn = !1), (c = b)) : (c = t), (h.precision = c += 10), (i = (n = pi(p)).charAt(0)), !(Math.abs((o = v.e)) < 15e14)))
    return (
      (u = Ai(h, c + 2, b).times(o + '')),
      (v = Ci(new h(i + '.' + n.slice(1)), c - 10).plus(u)),
      (h.precision = b),
      null == t ? wi(v, b, g, (Qn = !0)) : v
    );
  for (; (i < 7 && 1 != i) || (1 == i && n.charAt(1) > 3); ) ((i = (n = pi((v = v.times(e)).d)).charAt(0)), m++);
  for (
    o = v.e,
      i > 1 ? ((v = new h('0.' + n)), o++) : (v = new h(i + '.' + n.slice(1))),
      d = v,
      s = a = v = yi(v.minus(1), v.plus(1), c, 1),
      f = wi(v.times(v), c, 1),
      r = 3;
    ;

  ) {
    if (((a = wi(a.times(f), c, 1)), pi((u = s.plus(yi(a, new h(r), c, 1))).d).slice(0, c) === pi(s.d).slice(0, c))) {
      if (((s = s.times(2)), 0 !== o && (s = s.plus(Ai(h, c + 2, b).times(o + ''))), (s = yi(s, new h(m), c, 1)), null != t))
        return ((h.precision = b), s);
      if (!gi(s.d, c - 10, g, l)) return wi(s, (h.precision = b), g, (Qn = !0));
      ((h.precision = c += 10), (u = a = v = yi(d.minus(1), d.plus(1), c, 1)), (f = wi(v.times(v), c, 1)), (r = l = 1));
    }
    ((s = u), (r += 2));
  }
}
function Ti(e) {
  return String((e.s * e.s) / 0);
}
function Li(e, t) {
  var n, i, r;
  for (
    (n = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
      (i = t.search(/e/i)) > 0 ? (n < 0 && (n = i), (n += +t.slice(i + 1)), (t = t.substring(0, i))) : n < 0 && (n = t.length),
      i = 0;
    48 === t.charCodeAt(i);
    i++
  );
  for (r = t.length; 48 === t.charCodeAt(r - 1); --r);
  if ((t = t.slice(i, r))) {
    if (((r -= i), (e.e = n = n - i - 1), (e.d = []), (i = (n + 1) % 7), n < 0 && (i += 7), i < r)) {
      for (i && e.d.push(+t.slice(0, i)), r -= 7; i < r; ) e.d.push(+t.slice(i, (i += 7)));
      i = 7 - (t = t.slice(i)).length;
    } else i -= r;
    for (; i--; ) t += '0';
    (e.d.push(+t), Qn && (e.e > e.constructor.maxE ? ((e.d = null), (e.e = NaN)) : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0]))));
  } else ((e.e = 0), (e.d = [0]));
  return e;
}
function Hi(e, t, n, i, r) {
  var o,
    a,
    l,
    s,
    u = e.precision,
    c = Math.ceil(u / 7);
  for (Qn = !1, s = n.times(n), l = new e(i); ; ) {
    if (
      ((a = yi(l.times(s), new e(t++ * t++), u, 1)),
      (l = r ? i.plus(a) : i.minus(a)),
      (i = yi(a.times(s), new e(t++ * t++), u, 1)),
      void 0 !== (a = l.plus(i)).d[c])
    ) {
      for (o = c; a.d[o] === l.d[o] && o--; );
      if (-1 == o) break;
    }
    ((o = l), (l = i), (i = a), (a = o));
  }
  return ((Qn = !0), (a.d.length = c + 1), a);
}
function Mi(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function $i(e, t) {
  var n,
    i = t.s < 0,
    r = _i(e, e.precision, 1),
    o = r.times(0.5);
  if ((t = t.abs()).lte(o)) return ((Wn = i ? 4 : 1), t);
  if ((n = t.divToInt(r)).isZero()) Wn = i ? 3 : 2;
  else {
    if ((t = t.minus(n.times(r))).lte(o)) return ((Wn = Ei(n) ? (i ? 2 : 3) : i ? 4 : 1), t);
    Wn = Ei(n) ? (i ? 1 : 4) : i ? 3 : 2;
  }
  return t.minus(r).abs();
}
function Yi(e, t, n, i) {
  var r,
    o,
    a,
    l,
    s,
    u,
    c,
    d,
    f,
    m = e.constructor,
    v = void 0 !== n;
  if ((v ? (hi(n, 1, qn), void 0 === i ? (i = m.rounding) : hi(i, 0, 8)) : ((n = m.precision), (i = m.rounding)), e.isFinite())) {
    for (
      v ? ((r = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (r = t),
        (a = (c = Ni(e)).indexOf('.')) >= 0 &&
          ((c = c.replace('.', '')), ((f = new m(1)).e = c.length - a), (f.d = bi(Ni(f), 10, r)), (f.e = f.d.length)),
        o = s = (d = bi(c, 10, r)).length;
      0 == d[--s];

    )
      d.pop();
    if (d[0]) {
      if (
        (a < 0 ? o-- : (((e = new m(e)).d = d), (e.e = o), (d = (e = yi(e, f, n, i, 0, r)).d), (o = e.e), (u = zn)),
        (a = d[n]),
        (l = r / 2),
        (u = u || void 0 !== d[n + 1]),
        (u =
          i < 4
            ? (void 0 !== a || u) && (0 === i || i === (e.s < 0 ? 3 : 2))
            : a > l || (a === l && (4 === i || u || (6 === i && 1 & d[n - 1]) || i === (e.s < 0 ? 8 : 7)))),
        (d.length = n),
        u)
      )
        for (; ++d[--n] > r - 1; ) ((d[n] = 0), n || (++o, d.unshift(1)));
      for (s = d.length; !d[s - 1]; --s);
      for (a = 0, c = ''; a < s; a++) c += Zn.charAt(d[a]);
      if (v) {
        if (s > 1)
          if (16 == t || 8 == t) {
            for (a = 16 == t ? 4 : 3, --s; s % a; s++) c += '0';
            for (s = (d = bi(c, r, t)).length; !d[s - 1]; --s);
            for (a = 1, c = '1.'; a < s; a++) c += Zn.charAt(d[a]);
          } else c = c.charAt(0) + '.' + c.slice(1);
        c = c + (o < 0 ? 'p' : 'p+') + o;
      } else if (o < 0) {
        for (; ++o; ) c = '0' + c;
        c = '0.' + c;
      } else if (++o > s) for (o -= s; o--; ) c += '0';
      else o < s && (c = c.slice(0, o) + '.' + c.slice(o));
    } else c = v ? '0p+0' : '0';
    c = (16 == t ? '0x' : 2 == t ? '0b' : 8 == t ? '0o' : '') + c;
  } else c = Ti(e);
  return e.s < 0 ? '-' + c : c;
}
function Pi(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function Vi(e) {
  return new this(e).abs();
}
function Gi(e) {
  return new this(e).acos();
}
function Bi(e) {
  return new this(e).acosh();
}
function Ui(e, t) {
  return new this(e).plus(t);
}
function Ri(e) {
  return new this(e).asin();
}
function Fi(e) {
  return new this(e).asinh();
}
function zi(e) {
  return new this(e).atan();
}
function Wi(e) {
  return new this(e).atanh();
}
function ji(e, t) {
  ((e = new this(e)), (t = new this(t)));
  var n,
    i = this.precision,
    r = this.rounding,
    o = i + 4;
  return (
    e.s && t.s
      ? e.d || t.d
        ? !t.d || e.isZero()
          ? ((n = t.s < 0 ? _i(this, i, r) : new this(0)).s = e.s)
          : !e.d || t.isZero()
            ? ((n = _i(this, o, 1).times(0.5)).s = e.s)
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (n = this.atan(yi(e, t, o, 1))),
                (t = _i(this, o, 1)),
                (this.precision = i),
                (this.rounding = r),
                (n = e.s < 0 ? n.minus(t) : n.plus(t)))
              : (n = this.atan(yi(e, t, o, 1)))
        : ((n = _i(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
      : (n = new this(NaN)),
    n
  );
}
function qi(e) {
  return new this(e).cbrt();
}
function Zi(e) {
  return wi((e = new this(e)), e.e + 1, 2);
}
function Ki(e, t, n) {
  return new this(e).clamp(t, n);
}
function Xi(e) {
  if (!e || 'object' != typeof e) throw Error(ei + 'Object expected');
  var t,
    n,
    i,
    r = !0 === e.defaults,
    o = ['precision', 1, qn, 'rounding', 0, 8, 'toExpNeg', -jn, 0, 'toExpPos', 0, jn, 'maxE', 0, jn, 'minE', -jn, 0, 'modulo', 0, 9];
  for (t = 0; t < o.length; t += 3)
    if (((n = o[t]), r && (this[n] = Jn[n]), void 0 !== (i = e[n]))) {
      if (!(oi(i) === i && i >= o[t + 1] && i <= o[t + 2])) throw Error(ti + n + ': ' + i);
      this[n] = i;
    }
  if (((n = 'crypto'), r && (this[n] = Jn[n]), void 0 !== (i = e[n]))) {
    if (!0 !== i && !1 !== i && 0 !== i && 1 !== i) throw Error(ti + n + ': ' + i);
    if (i) {
      if ('undefined' == typeof crypto || !crypto || (!crypto.getRandomValues && !crypto.randomBytes)) throw Error(ii);
      this[n] = !0;
    } else this[n] = !1;
  }
  return this;
}
function Ji(e) {
  return new this(e).cos();
}
function Qi(e) {
  return new this(e).cosh();
}
function er(e, t) {
  return new this(e).div(t);
}
function tr(e) {
  return new this(e).exp();
}
function nr(e) {
  return wi((e = new this(e)), e.e + 1, 3);
}
function ir() {
  var e,
    t,
    n = new this(0);
  for (Qn = !1, e = 0; e < arguments.length; )
    if ((t = new this(arguments[e++])).d) n.d && (n = n.plus(t.times(t)));
    else {
      if (t.s) return ((Qn = !0), new this(1 / 0));
      n = t;
    }
  return ((Qn = !0), n.sqrt());
}
function rr(e) {
  return e instanceof xr || (e && e.toStringTag === ri) || !1;
}
function or(e) {
  return new this(e).ln();
}
function ar(e, t) {
  return new this(e).log(t);
}
function lr(e) {
  return new this(e).log(2);
}
function sr(e) {
  return new this(e).log(10);
}
function ur() {
  return ki(this, arguments, -1);
}
function cr() {
  return ki(this, arguments, 1);
}
function dr(e, t) {
  return new this(e).mod(t);
}
function fr(e, t) {
  return new this(e).mul(t);
}
function mr(e, t) {
  return new this(e).pow(t);
}
function vr(e) {
  var t,
    n,
    i,
    r,
    o = 0,
    a = new this(1),
    l = [];
  if ((void 0 === e ? (e = this.precision) : hi(e, 1, qn), (i = Math.ceil(e / 7)), this.crypto))
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(i)); o < i; )
        (r = t[o]) >= 429e7 ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0]) : (l[o++] = r % 1e7);
    else {
      if (!crypto.randomBytes) throw Error(ii);
      for (t = crypto.randomBytes((i *= 4)); o < i; )
        (r = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((127 & t[o + 3]) << 24)) >= 214e7
          ? crypto.randomBytes(4).copy(t, o)
          : (l.push(r % 1e7), (o += 4));
      o = i / 4;
    }
  else for (; o < i; ) l[o++] = (1e7 * Math.random()) | 0;
  for (e %= 7, (i = l[--o]) && e && ((r = ai(10, 7 - e)), (l[o] = ((i / r) | 0) * r)); 0 === l[o]; o--) l.pop();
  if (o < 0) ((n = 0), (l = [0]));
  else {
    for (n = -1; 0 === l[0]; n -= 7) l.shift();
    for (i = 1, r = l[0]; r >= 10; r /= 10) i++;
    i < 7 && (n -= 7 - i);
  }
  return ((a.e = n), (a.d = l), a);
}
function pr(e) {
  return wi((e = new this(e)), e.e + 1, this.rounding);
}
function hr(e) {
  return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function gr(e) {
  return new this(e).sin();
}
function br(e) {
  return new this(e).sinh();
}
function yr(e) {
  return new this(e).sqrt();
}
function wr(e, t) {
  return new this(e).sub(t);
}
function Nr() {
  var e = 0,
    t = arguments,
    n = new this(t[e]);
  for (Qn = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return ((Qn = !0), wi(n, this.precision, this.rounding));
}
function Dr(e) {
  return new this(e).tan();
}
function Ar(e) {
  return new this(e).tanh();
}
function _r(e) {
  return wi((e = new this(e)), e.e + 1, 1);
}
((vi[Symbol.for('nodejs.util.inspect.custom')] = vi.toString), (vi[Symbol.toStringTag] = 'Decimal'));
var xr = (vi.constructor = (function e(t) {
  var n, i, r;
  function o(e) {
    var t,
      n,
      i,
      r = this;
    if (!(r instanceof o)) return new o(e);
    if (((r.constructor = o), rr(e)))
      return (
        (r.s = e.s),
        void (Qn
          ? !e.d || e.e > o.maxE
            ? ((r.e = NaN), (r.d = null))
            : e.e < o.minE
              ? ((r.e = 0), (r.d = [0]))
              : ((r.e = e.e), (r.d = e.d.slice()))
          : ((r.e = e.e), (r.d = e.d ? e.d.slice() : e.d)))
      );
    if ('number' === (i = typeof e)) {
      if (0 === e) return ((r.s = 1 / e < 0 ? -1 : 1), (r.e = 0), void (r.d = [0]));
      if ((e < 0 ? ((e = -e), (r.s = -1)) : (r.s = 1), e === ~~e && e < 1e7)) {
        for (t = 0, n = e; n >= 10; n /= 10) t++;
        return void (Qn
          ? t > o.maxE
            ? ((r.e = NaN), (r.d = null))
            : t < o.minE
              ? ((r.e = 0), (r.d = [0]))
              : ((r.e = t), (r.d = [e]))
          : ((r.e = t), (r.d = [e])));
      }
      return 0 * e != 0 ? (e || (r.s = NaN), (r.e = NaN), void (r.d = null)) : Li(r, e.toString());
    }
    if ('string' === i)
      return (
        45 === (n = e.charCodeAt(0)) ? ((e = e.slice(1)), (r.s = -1)) : (43 === n && (e = e.slice(1)), (r.s = 1)),
        ci.test(e)
          ? Li(r, e)
          : (function (e, t) {
              var n, i, r, o, a, l, s, u, c;
              if (t.indexOf('_') > -1) {
                if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), ci.test(t))) return Li(e, t);
              } else if ('Infinity' === t || 'NaN' === t) return (+t || (e.s = NaN), (e.e = NaN), (e.d = null), e);
              if (si.test(t)) ((n = 16), (t = t.toLowerCase()));
              else if (li.test(t)) n = 2;
              else {
                if (!ui.test(t)) throw Error(ti + t);
                n = 8;
              }
              for (
                (o = t.search(/p/i)) > 0 ? ((s = +t.slice(o + 1)), (t = t.substring(2, o))) : (t = t.slice(2)),
                  a = (o = t.indexOf('.')) >= 0,
                  i = e.constructor,
                  a && ((o = (l = (t = t.replace('.', '')).length) - o), (r = Si(i, new i(n), o, 2 * o))),
                  o = c = (u = bi(t, n, di)).length - 1;
                0 === u[o];
                --o
              )
                u.pop();
              return o < 0
                ? new i(0 * e.s)
                : ((e.e = Di(u, c)),
                  (e.d = u),
                  (Qn = !1),
                  a && (e = yi(e, r, 4 * l)),
                  s && (e = e.times(Math.abs(s) < 54 ? ai(2, s) : xr.pow(2, s))),
                  (Qn = !0),
                  e);
            })(r, e)
      );
    if ('bigint' === i) return (e < 0 ? ((e = -e), (r.s = -1)) : (r.s = 1), Li(r, e.toString()));
    throw Error(ti + e);
  }
  if (
    ((o.prototype = vi),
    (o.ROUND_UP = 0),
    (o.ROUND_DOWN = 1),
    (o.ROUND_CEIL = 2),
    (o.ROUND_FLOOR = 3),
    (o.ROUND_HALF_UP = 4),
    (o.ROUND_HALF_DOWN = 5),
    (o.ROUND_HALF_EVEN = 6),
    (o.ROUND_HALF_CEIL = 7),
    (o.ROUND_HALF_FLOOR = 8),
    (o.EUCLID = 9),
    (o.config = o.set = Xi),
    (o.clone = e),
    (o.isDecimal = rr),
    (o.abs = Vi),
    (o.acos = Gi),
    (o.acosh = Bi),
    (o.add = Ui),
    (o.asin = Ri),
    (o.asinh = Fi),
    (o.atan = zi),
    (o.atanh = Wi),
    (o.atan2 = ji),
    (o.cbrt = qi),
    (o.ceil = Zi),
    (o.clamp = Ki),
    (o.cos = Ji),
    (o.cosh = Qi),
    (o.div = er),
    (o.exp = tr),
    (o.floor = nr),
    (o.hypot = ir),
    (o.ln = or),
    (o.log = ar),
    (o.log10 = sr),
    (o.log2 = lr),
    (o.max = ur),
    (o.min = cr),
    (o.mod = dr),
    (o.mul = fr),
    (o.pow = mr),
    (o.random = vr),
    (o.round = pr),
    (o.sign = hr),
    (o.sin = gr),
    (o.sinh = br),
    (o.sqrt = yr),
    (o.sub = wr),
    (o.sum = Nr),
    (o.tan = Dr),
    (o.tanh = Ar),
    (o.trunc = _r),
    void 0 === t && (t = {}),
    t && !0 !== t.defaults)
  )
    for (r = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'], n = 0; n < r.length; )
      t.hasOwnProperty((i = r[n++])) || (t[i] = this[i]);
  return (o.config(t), o);
})(Jn));
((Kn = new xr(Kn)), (Xn = new xr(Xn)));
const Or = [
    {
      name: '标准',
      code: 'standard',
      visible: () => !0,
      needLink: !1,
      book: { earlyDaysNum: 0, description: '临近出游日可能提前售罄，建议提前两天预定' },
    },
    { name: '早鸟', code: 'earlyBird', visible: () => !0, needLink: !0, book: { earlyDaysNum: 9, description: '需提前 10 天及以上预定' } },
    {
      name: '超级早鸟',
      code: 'superEarlyBird',
      visible: (e) => {
        const t = Fn(e);
        return 1 == t.month() && t.date() >= 14 && t.date() <= 24;
      },
      needLink: !0,
      book: { earlyDaysNum: 19, description: '需提前 20 天及以上预定' },
    },
  ],
  Sr = [
    {
      name: '一大一小',
      action: () => [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 1 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
    },
    { name: '2大1小', action: () => [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD', num: 1 }] },
    {
      name: '2大2小',
      action: () => [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD', num: 1 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
    },
    { name: '2大', action: () => [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 }] },
  ],
  Er = [
    { label: '👨 成人', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 0, simpleText: '大', fullText: '一日-成人' },
    { label: '👶 儿童', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 0, simpleText: '小', fullText: '一日-儿童' },
    { label: '👴 老人', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR', num: 0, simpleText: '老', fullText: '一日-老人' },
    {
      label: '👨&👨 两大',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT',
      num: 0,
      simpleText: '两大',
      fullText: '一日-两大',
      visible: (e) => 0 == Fn(e).month(),
      insteadSolution: { details: [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 }] },
    },
    {
      label: '👨&👶 两大一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD',
      num: 0,
      simpleText: '两大一小',
      fullText: '一日-两大一小',
      visible: (e) => 0 != Fn(e).month(),
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
  ];
function kr(e) {
  const t = Fn(e).day();
  return 0 === t || 6 === t;
}
const Ir = (e, t) => 5 * Math.ceil(Number.parseFloat(e) / 5) + Number.parseFloat(t + ''),
  Cr = (e, t, n) => `${e[n].num ? e[n].num + t.find((e) => e.category === n).simpleText : ''}`,
  Tr = [
    { enabled: !1, condition: () => !0, action: () => '非团票，不用集合，随时入园，入园后确认收货', orderPriority: 1 },
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { useDate: t, personCounts: n, counts: i, summaries: r, diffAmount: o } = e,
          a = Fn(t).diff(new Date(), 'd');
        let l = `${t} ${Fn(t).format('dddd')} ${Cr(n, i, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${Cr(n, i, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${Cr(n, i, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
        const s = { price: 99999999, description: '' };
        for (const u in r) {
          const e = r[u],
            t = Ir(e.amount, o[u]);
          e.book.earlyDaysNum <= a && s.price > t && ((s.price = t), (s.description = e.book.description));
        }
        return ((l += `\n报价：${s.price}\n${s.description}`), l);
      },
      orderPriority: -1e3,
    },
    {
      enabled: !1,
      condition: (e) => {
        const { useDate: t, personCounts: n } = e;
        return (
          (kr(t) && n.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + n.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 1) ||
          (!kr(t) && n.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + n.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 2)
        );
      },
      action: () => '\n\n不升级年卡，您可以自己买官方的半价一小\n工作日 150，节假日 175',
      orderPriority: 100,
    },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  Lr = { class: 'form-group' },
  Hr = { class: 'form-group' },
  Mr = { class: 'counter-label' },
  $r = { class: 'counter-controls' },
  Yr = ['onClick'],
  Pr = { class: 'counter-value' },
  Vr = ['onClick'],
  Gr = { class: 'form-group' },
  Br = ['onClick'],
  Ur = ['onClick'],
  Rr = { class: 'summary-item' },
  Fr = { class: 'summary-value' },
  zr = { class: 'summary-item' },
  Wr = { class: 'summary-value' },
  jr = { class: 'summary-item' },
  qr = { class: 'summary-value' },
  Zr = { class: 'summary-item' },
  Kr = { class: 'summary-value' },
  Xr = { class: 'summary-item' },
  Jr = { class: 'summary-value' },
  Qr = { class: 'summary-item' },
  eo = { class: 'summary-value' },
  to = Be(
    me({
      __name: 'calculator',
      setup(e) {
        const t = Se('useDate', ve('')),
          n = ve([]),
          o = () => {
            n.value.forEach((e) => {
              e.num = 0;
            });
            for (const e in l.value) l.value[e] = 0;
          },
          a = ve({ costPlatform: 0.02 }),
          l = ve({}),
          s = ve({}),
          u = () => {
            ((n.value = Er.filter((e) => void 0 === e.visible || e.visible(t.value))),
              (s.value = {}),
              (l.value = {}),
              Or.filter((e) => e.visible(t.value)).forEach((e) => {
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
                  (l.value[e.code] = 0));
              }));
          };
        (Ae([t], () => {
          (u(), v());
        }),
          Ae(
            [n, a],
            () => {
              v();
            },
            { deep: !0 },
          ));
        const c = (e, t) => {
            (0 === e.num && t < 0) || (e.num += t);
          },
          d = (e, t) => {
            (0 === l.value[e] && t < 0) || (l.value[e] = new xr(l.value[e]).plus(t).toNumber());
          };
        const m = pe(() => {
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
            n.value.forEach((t) => {
              if (t.insteadSolution) {
                t.insteadSolution.details.forEach((n) => {
                  e[n.category].num += t.num * n.num;
                });
              } else e[t.category].num += t.num;
            }),
            e
          );
        });
        function v() {
          const e = (function () {
            const e = r.data.filter((e) => e.useDate === t.value);
            if (0 == e.length) return void f('Product data not found');
            const n = new Map();
            for (const t of e) n.set(t.attractionProductCategoryFullCode, t);
            return n;
          })();
          if (e)
            for (const t in s.value) {
              let i = 0,
                r = 0,
                o = 0,
                u = 0;
              const c = 0,
                d = s.value[t];
              if (d.needLink)
                for (const n in m.value) {
                  const o = m.value[n],
                    a = e.get(o.reference[t]);
                  ((i += o.num * a.preferSaleAmount), (r += o.num * a.originalPrice));
                }
              else
                for (const t of n.value) {
                  const n = e.get(t.category);
                  ((i += t.num * n.preferSaleAmount), (r += t.num * n.originalPrice));
                }
              ((i += Number.parseFloat(l.value[t] + '')), (u = i * a.value.costPlatform), (o = c + u));
              const f = i - o - c;
              ((d.amount = i.toFixed(2)),
                (d.originalAmount = r.toFixed(2)),
                (d.costPlatform = u.toFixed(2)),
                (d.commission = c.toFixed(2)),
                (d.totalCost = o.toFixed(2)),
                (d.profit = f.toFixed(2)));
            }
        }
        const p = () => {
            let e = '';
            const i = { useDate: t.value, personCounts: m.value, counts: n.value, summaries: s.value, diffAmount: l.value };
            for (const t of Tr) t.condition(i) && (e += t.action(i));
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
          xe(() => {
            (u(), v());
          }),
          (e, r) => {
            const a = i,
              u = hn;
            return (
              Pe(),
              Le('div', null, [
                He('div', Lr, [
                  r[0] || (r[0] = He('label', null, '快捷操作', -1)),
                  (Pe(),
                  Le(
                    Me,
                    null,
                    $e(h, (e) =>
                      ge(
                        a,
                        {
                          size: 'small',
                          type: 'primary',
                          onClick: (i) =>
                            e.func
                              ? e.func()
                              : ((e) => {
                                  o();
                                  const i = Sr.find((t) => t.name === e);
                                  (n.value.forEach((e) => {
                                    i?.action(t.value).forEach((t) => {
                                      t.category === e.category && (e.num = t.num);
                                    });
                                  }),
                                    _e(() => {
                                      p();
                                    }));
                                })(e.name),
                          key: e.name,
                        },
                        { default: Ve(() => [Te(Ge(e.name), 1)]), _: 2 },
                        1032,
                        ['onClick'],
                      ),
                    ),
                    64,
                  )),
                ]),
                He('div', Hr, [
                  r[1] || (r[1] = He('label', null, '选择人数', -1)),
                  (Pe(!0),
                  Le(
                    Me,
                    null,
                    $e(
                      Ye(n),
                      (e) => (
                        Pe(),
                        Le('div', { class: 'counter-group', key: e.category }, [
                          He('span', Mr, Ge(e.label), 1),
                          He('div', $r, [
                            He('button', { class: 'counter-btn', onClick: (t) => c(e, -1) }, '−', 8, Yr),
                            He('span', Pr, Ge(e.num), 1),
                            He('button', { class: 'counter-btn', onClick: (t) => c(e, 1) }, '+', 8, Vr),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                He('div', Gr, [
                  r[2] || (r[2] = He('label', null, '差价', -1)),
                  (Pe(!0),
                  Le(
                    Me,
                    null,
                    $e(
                      Ye(s),
                      (e, t) => (
                        Pe(),
                        Le('div', { class: 'counter-group', key: t }, [
                          He('button', { class: 'counter-btn', onClick: (e) => d(t, -5) }, '−', 8, Br),
                          ge(
                            u,
                            { modelValue: Ye(l)[t], 'onUpdate:modelValue': (e) => (Ye(l)[t] = e), type: 'number', label: e.name },
                            null,
                            8,
                            ['modelValue', 'onUpdate:modelValue', 'label'],
                          ),
                          He('button', { class: 'counter-btn', onClick: (e) => d(t, 5) }, '+', 8, Ur),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                (Pe(!0),
                Le(
                  Me,
                  null,
                  $e(
                    Ye(s),
                    (e, t) => (
                      Pe(),
                      Le('div', { class: 'summary', key: t }, [
                        He('h2', null, '💰 费用汇总-' + Ge(e.name), 1),
                        He('div', Rr, [
                          r[4] || (r[4] = He('span', { class: 'summary-label' }, '总金额', -1)),
                          He('span', Fr, [r[3] || (r[3] = Te(' ¥', -1)), He('span', null, Ge(e.amount), 1)]),
                        ]),
                        He('div', zr, [
                          r[6] || (r[6] = He('span', { class: 'summary-label' }, '官方票价', -1)),
                          He('span', Wr, [r[5] || (r[5] = Te(' ¥', -1)), He('span', null, Ge(e.originalAmount), 1)]),
                        ]),
                        He('div', jr, [
                          r[8] || (r[8] = He('span', { class: 'summary-label' }, '总佣金', -1)),
                          He('span', qr, [r[7] || (r[7] = Te(' ¥', -1)), He('span', null, Ge(e.commission), 1)]),
                        ]),
                        He('div', Zr, [
                          r[10] || (r[10] = He('span', { class: 'summary-label' }, '总成本-平台', -1)),
                          He('span', Kr, [r[9] || (r[9] = Te(' ¥', -1)), He('span', null, Ge(e.costPlatform), 1)]),
                        ]),
                        He('div', Xr, [
                          r[12] || (r[12] = He('span', { class: 'summary-label' }, '总成本', -1)),
                          He('span', Jr, [r[11] || (r[11] = Te(' ¥', -1)), He('span', null, Ge(e.totalCost), 1)]),
                        ]),
                        He('div', Qr, [
                          r[14] || (r[14] = He('span', { class: 'summary-label' }, '总利润', -1)),
                          He('span', eo, [r[13] || (r[13] = Te(' ¥', -1)), He('span', null, Ge(e.profit), 1)]),
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
    [['__scopeId', 'data-v-17d3ff13']],
  ),
  no = [
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { order: t } = e;
        return [`订单 ${t.id} CNY ${t.amount ?? 0}`];
      },
      orderPriority: -1e3,
    },
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { useDate: t, remainPersons: n } = e,
          i = [];
        return (
          n.forEach((e) => {
            i.push(`上海乐高乐园 ${Fn(t).format('YYYY-MM-DD')} ${e.ticketType} 金额 CNY \n${e.idType} ${e.name} ${e.id}`);
          }),
          i
        );
      },
      orderPriority: 1e3,
    },
    { enabled: !1, condition: () => !0, action: () => [], orderPriority: 50 },
    { enabled: !1, condition: () => !1, action: () => [], orderPriority: 60 },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  io = [',', '，', '（', '）', '：', '；', '。'],
  ro = { class: 'content' },
  oo = { class: 'input-group' },
  ao = { class: 'input-wrapper' },
  lo = { class: 'input-group' },
  so = { class: 'input-wrapper' },
  uo = { class: 'input-group' },
  co = me({
    __name: 'identifyLint',
    setup(e) {
      const t = Se('useDate', ve('')),
        n = ve(''),
        r = ve([]),
        o = ve(''),
        a = ve(''),
        l = ve(!1),
        s = ve(!1),
        u = ve([]),
        c = ve([]),
        m = ve(),
        v = ve({ id: '', amount: void 0 }),
        p = {
          CHINA_ID: { fullName: '中国居民身份证', shortName: '身份证' },
          PASSPORT: { fullName: '护照', shortName: '护照' },
          HK_MACAU_PASS: { fullName: '港澳通行证（回乡证）', shortName: '回乡证' },
          TAIWAN_PASS: { fullName: '台湾通行证', shortName: '台湾通行证' },
          FPRID: { fullName: '外国人永久居留身份证', shortName: '永居' },
          UNKNOWN: { fullName: '未知类型', shortName: '未知' },
        },
        h = {
          ADULT: { fullName: '成人', shortName: '成人' },
          CHILD: { fullName: '儿童', shortName: '儿童' },
          SENIOR: { fullName: '老人', shortName: '老人' },
          NOT: { fullName: '免票', shortName: '免票' },
          UNKNOWN: { fullName: '未知', shortName: '未知' },
        },
        g = [],
        b = [];
      for (const i in p) g.push({ text: p[i].fullName, value: p[i].shortName });
      for (const i in h) b.push({ text: h[i].fullName, value: h[i].shortName });
      ((u.value = [g[0].value]), (c.value = [b[0].value]));
      const y = (e) => {
          if (18 !== e.length) return null;
          return { birthday: `${e.slice(6, 4)}-${e.slice(10, 2)}-${e.slice(12, 2)}`, ...w(e.slice(6, 14)) };
        },
        w = (e) => {
          const n = Fn(t.value).diff(e, 'y');
          return n < 2
            ? { ticketType: '免票', orderPriority: 0 }
            : n <= 12
              ? { ticketType: '儿童', orderPriority: 2 }
              : n < 60
                ? { ticketType: '成人', orderPriority: 1 }
                : { ticketType: '老人', orderPriority: 3 };
        },
        N = (e) => {
          if (!e) return { type: p.UNKNOWN.shortName, valid: !1, message: '输入不能为空' };
          const t = e.trim();
          if (/^\d{15}$|^\d{17}[\dXx]$/.test(t)) {
            const e = ((e) => {
              if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(e)) return !1;
              const t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
              let n = 0;
              for (let i = 0; i < 17; i++) n += Number.parseInt(e[i]) * t[i];
              return ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'][n % 11] === e[17].toUpperCase();
            })(t);
            return { type: p.CHINA_ID.shortName, valid: e, message: e ? '有效的身份证号码' : '身份证号码校验失败', details: y(t) };
          }
          return /^[CHM]\d{8,10}$/.test(t)
            ? { type: p.HK_MACAU_PASS.shortName }
            : ((e) => /^\d{8,10}$/.test(e))(t)
              ? { type: p.TAIWAN_PASS.shortName, valid: !0, message: '台湾通行证' }
              : ((e) => /^[EG]\d{8}$/.test(e) || /^[A-Z]{1,2}\d{6,9}$/.test(e))(t)
                ? { type: p.PASSPORT.shortName, valid: !0, message: '护照号码' }
                : { type: p.UNKNOWN.shortName, valid: !1, message: '无法识别的输入类型' };
        },
        D = () => {
          (r.value.forEach((e) => {
            const t = N(e.id);
            ((e.idType = t.type),
              (e.ticketType = t.details ? t.details.ticketType : '未知'),
              !0 === t.valid ? (e.idValid = '有效') : !1 === t.valid ? (e.idValid = '无效') : (e.idValid = '未知'),
              (e.orderPriority = t.details ? t.details.orderPriority : 0));
          }),
            r.value.sort((e, t) => e.orderPriority - t.orderPriority));
          let e = Object.groupBy(r.value, ({ ticketType: e }) => e);
          ((o.value = Object.keys(e)
            .map((t) => `${t} ${e[t].length}`)
            .join('，')),
            (e = Object.groupBy(r.value, ({ idValid: e }) => e)),
            (a.value = Object.keys(e)
              .map((t) => `${t} ${e[t].length}`)
              .join('，')));
        },
        A = () => {
          let e = n.value;
          io.forEach((t) => {
            e = e.replaceAll(t, ' ');
          });
          const t = e
            .split('\n')
            .map((e) => e.trim())
            .filter((e) => '' !== e);
          r.value = t.map((e) => {
            const t = e
              .split(' ')
              .map((e) => e.trim())
              .filter((e) => '' !== e);
            return { name: t[0], id: t[1], orderPriority: 1 };
          });
        },
        _ = (e) => {
          if ('number' == typeof e) {
            const t = r.value[e],
              n = t.name;
            ((t.name = t.id), (t.id = n));
          } else
            r.value.forEach((e) => {
              const t = e.name;
              ((e.name = e.id), (e.id = t));
            });
        },
        x = ({ selectedValues: e }) => {
          ((m.value.idType = e[0]), S());
        },
        O = ({ selectedValues: e }) => {
          ((m.value.ticketType = e[0]), E());
        },
        S = () => {
          ((l.value = !1), (m.value = {}));
        },
        E = () => {
          ((s.value = !1), (m.value = {}));
        },
        k = () => {
          if ('' === v.value.id.trim()) return void f('Order id must not blank');
          let e = [];
          const n = { useDate: t.value, remainPersons: Array.from(r.value), order: v.value };
          for (const t of no) t.condition(n) && (e = e.concat(t.action(n)));
          navigator.clipboard.writeText(e.join('\n'));
        },
        I = () => {
          ((n.value = ''), (r.value = []), (v.value = { id: '', amount: void 0 }), (o.value = ''), (a.value = ''));
        };
      return (e, t) => {
        const f = hn,
          p = i,
          h = tn,
          y = d;
        return (
          Pe(),
          Le('div', ro, [
            He('div', oo, [
              He('div', ao, [
                ge(
                  f,
                  {
                    type: 'text',
                    label: '订单 ID',
                    'label-align': 'top',
                    modelValue: Ye(v).id,
                    'onUpdate:modelValue': t[0] || (t[0] = (e) => (Ye(v).id = e)),
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                ge(
                  f,
                  {
                    type: 'number',
                    label: '金额',
                    'label-align': 'top',
                    modelValue: Ye(v).amount,
                    'onUpdate:modelValue': t[1] || (t[1] = (e) => (Ye(v).amount = e)),
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
              ]),
            ]),
            He('div', lo, [
              He('div', so, [
                ge(
                  f,
                  {
                    type: 'textarea',
                    label: '身份信息',
                    'label-align': 'top',
                    modelValue: Ye(n),
                    'onUpdate:modelValue': t[2] || (t[2] = (e) => (Re(n) ? (n.value = e) : null)),
                    rows: '10',
                    onKeyup: Ue(D, ['enter']),
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                He('div', null, '票种统计：' + Ge(Ye(o)), 1),
                He('div', null, 'ID 统计：' + Ge(Ye(a)), 1),
                ge(
                  p,
                  { onClick: A, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[7] || (t[7] = [Te('分割', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: D, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[8] || (t[8] = [Te('自动识别', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: k, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[9] || (t[9] = [Te('复制', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: _, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[10] || (t[10] = [Te('互换', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: I, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[11] || (t[11] = [Te('清空', -1)]))]), _: 1 },
                ),
              ]),
            ]),
            He('div', uo, [
              (Pe(!0),
              Le(
                Me,
                null,
                $e(
                  Ye(r),
                  (e, n) => (
                    Pe(),
                    Le('div', { key: e.name }, [
                      ge(f, { modelValue: e.name, 'onUpdate:modelValue': (t) => (e.name = t), label: '姓名', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ge(f, { modelValue: e.id, 'onUpdate:modelValue': (t) => (e.id = t), label: 'ID', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ge(
                        f,
                        {
                          modelValue: e.idType,
                          'onUpdate:modelValue': (t) => (e.idType = t),
                          'is-link': '',
                          readonly: '',
                          label: '类型',
                          onClick: (t) => {
                            ((l.value = !0), (m.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      ge(f, { modelValue: e.idValid, 'onUpdate:modelValue': (t) => (e.idValid = t), label: 'ID 状态' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ge(
                        f,
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
                      ge(
                        p,
                        { onClick: (e) => _(n), type: 'primary', size: 'small' },
                        { default: Ve(() => [...(t[12] || (t[12] = [Te('互换', -1)]))]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            ge(
              y,
              { show: Ye(l), 'onUpdate:show': t[4] || (t[4] = (e) => (Re(l) ? (l.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ve(() => [
                  ge(
                    h,
                    {
                      columns: g,
                      modelValue: Ye(u),
                      'onUpdate:modelValue': t[3] || (t[3] = (e) => (Re(u) ? (u.value = e) : null)),
                      onCancel: S,
                      onConfirm: x,
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
            ge(
              y,
              { show: Ye(s), 'onUpdate:show': t[6] || (t[6] = (e) => (Re(s) ? (s.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ve(() => [
                  ge(
                    h,
                    {
                      columns: b,
                      modelValue: Ye(c),
                      'onUpdate:modelValue': t[5] || (t[5] = (e) => (Re(c) ? (c.value = e) : null)),
                      onCancel: E,
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
  fo = [
    { simpleText: '询价链接', fullText: '询价链接，具体以日期和人数为准' },
    {
      simpleText: '票务说明',
      fullText: '非团票，不用集合，不用二次预约，不用满人成团\n支持补差升级年卡\n刷身份证或人工通道核对无限次入园\n最终报价，无需补差',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    { simpleText: '半价儿童（简）', fullText: '官方小程序或 APP 领券买', attraction: 'SHANGHAI_LEGOLAND', visible: !1 },
    {
      simpleText: '半价儿童',
      fullText: '#小程序://上海乐高乐园度假区/QZCCh3svOIjR2Vy\n\n复制到地球，发送给任意人后打开领券及下方链接直接购买',
      attraction: 'SHANGHAI_LEGOLAND',
      visible: !1,
    },
    {
      simpleText: '入园',
      fullText:
        '上海乐高乐园入园方式\n1. 刷身份证\n2. 人工通道核对有效证件（可电子版）\n3. APP 【游园-行程】录入人脸，刷人脸（限身份证）\n任选一种，都可以',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    { simpleText: '下月日历价', fullText: '下个月的官方日历价还没出哈，最晚要等到 20 号左右才出', attraction: 'SHANGHAI_LEGOLAND' },
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
      attraction: 'SHANGHAI_DISNEY',
      visible: !0,
      func: () => {
        const e = [
          '【闲鱼】https://m.tb.cn/h.7GtsCZ6?tk=s2aLU9E6RND MF168 「上海迪士尼票务的闲鱼号，快来关注TA吧～」\n点击链接直接打开\n\n您可以问问我朋友，他专做迪士尼的',
        ];
        return e[((t = 0), (n = e.length - 1), Math.floor(Math.random() * (n - t + 1)) + t)];
        var t, n;
      },
    },
    {
      simpleText: '外包',
      fullText:
        '【闲鱼】https://m.tb.cn/h.7fwcB1I?tk=KZ5yfyXCOng HU071 「我在闲鱼发布了【珠海长隆海洋王国2大1小】」\n点击链接直接打开\n\n您可以问问我朋友',
      attraction: 'CHIMELONG_OCEAN_KINGDOM',
      visible: !1,
    },
    { simpleText: '虚拟 ID', func: () => Date.now() },
  ],
  mo = [
    {
      id: '10000003',
      attractionName: '上海乐高乐园度假区',
      attractionCode: 'SHANGHAI_LEGOLAND',
      attractionSimpleName: '乐高',
      orderPriority: 200,
    },
    {
      id: '',
      attractionName: '珠海长隆海洋王国',
      attractionCode: 'CHIMELONG_OCEAN_KINGDOM',
      attractionSimpleName: '长隆海洋',
      orderPriority: 110,
    },
    {
      id: '',
      attractionName: '广州长隆野生动物世界',
      attractionCode: 'CHIMELONG_SAFARI',
      attractionSimpleName: '长隆野动',
      orderPriority: 110,
    },
    { id: '', attractionName: '上海迪士尼度假区', attractionCode: 'SHANGHAI_DISNEY', attractionSimpleName: '迪士尼', orderPriority: 100 },
    {
      id: '',
      attractionName: '北京环球度假区',
      attractionCode: 'BEIJING_UNIVERSAL',
      attractionSimpleName: '环球',
      orderPriority: 100,
      visible: !1,
    },
    { id: '', attractionName: '上海动物园', attractionCode: 'SHANGHAI_ZOO', attractionSimpleName: '上动', orderPriority: 100, visible: !1 },
  ],
  vo = me({
    __name: 'term',
    setup(e) {
      const t = ve(''),
        n = ve([]),
        r = mo.filter((e) => void 0 === e.visible || e.visible);
      (Ae([t], () => {
        n.value = fo.filter((e) => void 0 === e.visible || e.visible).filter((e) => !e.attraction || e.attraction === t.value);
      }),
        xe(() => {
          t.value = 'SHANGHAI_LEGOLAND';
        }));
      return (e, o) => {
        const a = i,
          l = Kt,
          s = Xt;
        return (
          Pe(),
          Fe(
            s,
            { active: Ye(t), 'onUpdate:active': o[0] || (o[0] = (e) => (Re(t) ? (t.value = e) : null)) },
            {
              default: Ve(() => [
                (Pe(!0),
                Le(
                  Me,
                  null,
                  $e(
                    Ye(r),
                    (e) => (
                      Pe(),
                      Fe(
                        l,
                        { title: e.attractionSimpleName, name: e.attractionCode, key: e.attractionCode },
                        {
                          default: Ve(() => [
                            (Pe(!0),
                            Le(
                              Me,
                              null,
                              $e(
                                Ye(n),
                                (e) => (
                                  Pe(),
                                  Le('div', { key: e.fullText }, [
                                    He('div', null, [He('span', null, Ge(e.simpleText), 1)]),
                                    He('div', null, [
                                      ge(
                                        a,
                                        {
                                          onClick: (t) =>
                                            ((e) => {
                                              e.func
                                                ? navigator.clipboard.writeText(e.func())
                                                : navigator.clipboard.writeText(e.fullText || '');
                                            })(e),
                                        },
                                        { default: Ve(() => [...(o[1] || (o[1] = [Te('复制', -1)]))]), _: 1 },
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
  po = me({
    __name: 'tools',
    setup(e) {
      const t = ve('calculator'),
        n = ve({ text: '', value: '' }),
        a = ve({ text: '', value: '' }),
        l = ve({}),
        s = ve(!1),
        u = ve([]),
        c = ve([]),
        f = ve([]),
        m = ve({ price: 0, costPlatform: 0, costCommission: 0, productPrice: 0, exchangeRate: 1, profit: 0 });
      (Ae(
        [() => m.value.price],
        () => {
          m.value.costPlatform = new xr(m.value.price).mul(0.02).toNumber();
        },
        { deep: !0 },
      ),
        Ae(
          [m],
          () => {
            m.value.profit = new xr(m.value.price)
              .sub(new xr(m.value.costPlatform))
              .sub(m.value.costCommission)
              .sub(new xr(m.value.productPrice).mul(m.value.exchangeRate))
              .toNumber();
          },
          { deep: !0 },
        ));
      let v = (e) => {};
      const p = () => {
          ((s.value = !0),
            (u.value = mo.map((e) => ({ text: e.attractionSimpleName, value: e.attractionCode }))),
            (v = (e) => {
              ((n.value.value = e[0]),
                (n.value.text = mo.find((e) => e.attractionCode === n.value.value)?.attractionSimpleName),
                (l.value.attraction = n.value.text));
            }));
        },
        h = () => {
          ((s.value = !0),
            (u.value = f.value.map((e) => ({ text: e.productCategoryName, value: e.productCategoryCode }))),
            (v = (e) => {
              ((a.value.value = e[0]),
                (a.value.text = o.data.find((e) => e.productCategoryCode === a.value.value)?.productCategoryName),
                (l.value.productCategory = a.value.text));
            }));
        },
        g = ({ selectedValues: e }) => {
          (b(), v(e));
        },
        b = () => {
          s.value = !1;
        },
        y = (e) => {
          const t = Fn(e.date),
            i = r.data.find(
              (e) =>
                e.useDate === t.format('YYYY-MM-DD') &&
                e.attractionProductCategoryFullCode.replace(n.value.value + '_', '') === a.value.value,
            );
          return (void 0 !== i && ((e.topInfo = i?.originalPrice + ''), (e.bottomInfo = i?.preferSaleAmount + '')), e);
        };
      return (
        xe(() => {
          f.value = o.data.filter((e) => void 0 === e.visible || e.visible);
        }),
        (e, r) => {
          const o = hn,
            l = Gn,
            f = tn,
            v = d,
            w = Kt,
            N = i,
            D = Xt;
          return (
            Pe(),
            Le('div', null, [
              ge(
                D,
                { active: Ye(t), 'onUpdate:active': r[10] || (r[10] = (e) => (Re(t) ? (t.value = e) : null)) },
                {
                  default: Ve(() => [
                    ge(
                      w,
                      { title: '日历价', name: 'calendarPrice', key: 'calendarPrice' },
                      {
                        default: Ve(() => [
                          ge(
                            o,
                            {
                              modelValue: Ye(n).text,
                              'onUpdate:modelValue': r[0] || (r[0] = (e) => (Ye(n).text = e)),
                              'is-link': '',
                              readonly: '',
                              label: '景区',
                              onClick: p,
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              modelValue: Ye(a).text,
                              'onUpdate:modelValue': r[1] || (r[1] = (e) => (Ye(a).text = e)),
                              'is-link': '',
                              readonly: '',
                              label: '票种',
                              onClick: h,
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(l, { poppable: !1, 'show-confirm': !1, style: { height: '500px' }, formatter: y }),
                          ge(
                            v,
                            {
                              show: Ye(s),
                              'onUpdate:show': r[3] || (r[3] = (e) => (Re(s) ? (s.value = e) : null)),
                              round: '',
                              position: 'bottom',
                            },
                            {
                              default: Ve(() => [
                                ge(
                                  f,
                                  {
                                    columns: Ye(u),
                                    modelValue: Ye(c),
                                    'onUpdate:modelValue': r[2] || (r[2] = (e) => (Re(c) ? (c.value = e) : null)),
                                    onCancel: b,
                                    onConfirm: g,
                                  },
                                  null,
                                  8,
                                  ['columns', 'modelValue'],
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['show'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    ge(
                      w,
                      { title: '成本', name: 'costCalculator', key: 'costCalculator' },
                      {
                        default: Ve(() => [
                          ge(
                            o,
                            { label: '金额', modelValue: Ye(m).price, 'onUpdate:modelValue': r[4] || (r[4] = (e) => (Ye(m).price = e)) },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              label: '手续费',
                              modelValue: Ye(m).costPlatform,
                              'onUpdate:modelValue': r[5] || (r[5] = (e) => (Ye(m).costPlatform = e)),
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              label: '佣金',
                              modelValue: Ye(m).costCommission,
                              'onUpdate:modelValue': r[6] || (r[6] = (e) => (Ye(m).costCommission = e)),
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              label: '原价',
                              modelValue: Ye(m).productPrice,
                              'onUpdate:modelValue': r[7] || (r[7] = (e) => (Ye(m).productPrice = e)),
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              label: '汇率',
                              modelValue: Ye(m).exchangeRate,
                              'onUpdate:modelValue': r[8] || (r[8] = (e) => (Ye(m).exchangeRate = e)),
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            { label: '利润', modelValue: Ye(m).profit, 'onUpdate:modelValue': r[9] || (r[9] = (e) => (Ye(m).profit = e)) },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(N, null, { default: Ve(() => [...(r[11] || (r[11] = [Te('复制', -1)]))]), _: 1 }),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['active'],
              ),
            ])
          );
        }
      );
    },
  }),
  ho = [
    { condition: () => !1, topInfo: '', bottomInfo: '', className: '' },
    { condition: () => !1, topInfo: '', bottomInfo: '', className: '' },
  ],
  go = [
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
    .concat(ho),
  bo = { class: 'container' },
  yo = { class: 'form-group' },
  wo = Be(
    me({
      __name: 'index',
      setup(e) {
        Fn.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = ve('calculator'),
          n = (e) => Fn(e).format('YYYY-MM-DD'),
          i = ve(n(new Date()));
        Ee('useDate', i);
        const r = ve(!1),
          o = (e) => {
            ((r.value = !1), (i.value = n(e)));
          },
          a = (e) => {
            const t = Fn(e.date),
              n = go.find((e) => e.condition(t));
            return (void 0 !== n && ((e.topInfo = n?.topInfo), (e.bottomInfo = n?.bottomInfo), (e.className = n?.className)), e);
          };
        return (e, n) => {
          const l = an,
            s = Gn,
            u = Kt,
            c = Xt;
          return (
            Pe(),
            Le('div', bo, [
              n[3] || (n[3] = He('h1', null, '🎫 票务计算器', -1)),
              He('div', yo, [
                ge(l, { title: '选择日期', value: Ye(i), onClick: n[0] || (n[0] = (e) => (r.value = !0)) }, null, 8, ['value']),
                ge(
                  s,
                  { show: Ye(r), 'onUpdate:show': n[1] || (n[1] = (e) => (Re(r) ? (r.value = e) : null)), onConfirm: o, formatter: a },
                  null,
                  8,
                  ['show'],
                ),
              ]),
              ge(
                c,
                { active: Ye(t), 'onUpdate:active': n[2] || (n[2] = (e) => (Re(t) ? (t.value = e) : null)) },
                {
                  default: Ve(() => [
                    ge(u, { title: '票务', name: 'calculator', key: 'calculator' }, { default: Ve(() => [ge(to)]), _: 1 }),
                    ge(u, { title: '证件', name: 'identifyLint', key: 'identifyLint' }, { default: Ve(() => [ge(co)]), _: 1 }),
                    ge(u, { title: '工具', name: 'tools', key: 'tools' }, { default: Ve(() => [ge(po)]), _: 1 }),
                    ge(u, { title: '术语', name: 'term', key: 'term' }, { default: Ve(() => [ge(vo)]), _: 1 }),
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
export { wo as default };
