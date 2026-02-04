/* empty css              */ import { r as e, a as t, u as a, B as l } from './index-BRuMn7qF.js';
import { p as n, a as o } from './index-BY-M09XW.js';
import { u as i, a as r, c as s, L as u, s as c, P as d, b as m } from './function-call-BQRAaZYw.js';
import {
  c as v,
  e as f,
  i as p,
  a as h,
  m as g,
  b as y,
  n as b,
  u as D,
  d as A,
  p as N,
  H as _,
  r as w,
  f as x,
  h as O,
  s as S,
  j as k,
  o as I,
  k as C,
  l as E,
  q as H,
  v as T,
  g as L,
  x as $,
  y as M,
  z as Y,
  A as G,
  w as V,
  t as P,
  C as B,
  D as U,
  E as R,
  F as z,
  G as W,
  J as F,
  K as j,
  L as X,
  M as Z,
  N as K,
  O as q,
  P as J,
  Q,
  I as ee,
  R as te,
  S as ae,
  T as le,
  U as ne,
  V as oe,
  W as ie,
  X as re,
  Y as se,
  Z as ue,
  _ as ce,
  $ as de,
  a0 as me,
} from './index-BIrF5EFp.js';
import {
  d as ve,
  r as fe,
  e as pe,
  E as he,
  j as ge,
  G as ye,
  H as be,
  I as De,
  J as Ae,
  L as Ne,
  w as _e,
  h as we,
  f as xe,
  M as Oe,
  N as Se,
  O as ke,
  i as Ie,
  P as Ce,
  v as Ee,
  D as He,
  c as Te,
  a as Le,
  F as $e,
  z as Me,
  u as Ye,
  o as Ge,
  k as Ve,
  t as Pe,
  _ as Be,
  x as Ue,
  Q as Re,
  m as ze,
} from './index-D6N6AXjV.js';
import { u as We } from './use-height-DRVdFhbh.js';
const [Fe, je, Xe] = v('picker'),
  Ze = (e) => e.find((e) => !e.disabled) || e[0];
function Ke(e, t) {
  for (let a = (t = h(t, 0, e.length)); a < e.length; a++) if (!e[a].disabled) return a;
  for (let a = t - 1; a >= 0; a--) if (!e[a].disabled) return a;
  return 0;
}
const qe = (e, t, a) => void 0 !== t && e.some((e) => e[a.value] === t);
function Je(e, t, a) {
  const l = e.findIndex((e) => e[a.value] === t);
  return e[Ke(e, l)];
}
const [Qe, et] = v('picker-column'),
  tt = Symbol(Qe);
var at = ve({
  name: Qe,
  props: {
    value: b,
    fields: g(Object),
    options: y(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: g(Number),
    swipeDuration: g(b),
    visibleOptionNum: g(b),
  },
  emits: ['change', 'clickOption', 'scrollInto'],
  setup(e, { emit: t, slots: a }) {
    let l, n, o, s, u;
    const c = fe(),
      d = fe(),
      m = fe(0),
      v = fe(0),
      f = i(),
      p = () => e.options.length,
      g = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
      y = (a) => {
        let n = Ke(e.options, a);
        const o = -n * e.optionHeight,
          i = () => {
            n > p() - 1 && (n = Ke(e.options, a));
            const l = e.options[n][e.fields.value];
            l !== e.value && t('change', l);
          };
        (l && o !== m.value ? (u = i) : i(), (m.value = o));
      },
      b = () => e.readonly || !e.options.length,
      _ = (t) => h(Math.round(-t / e.optionHeight), 0, p() - 1),
      w = pe(() => _(m.value)),
      x = () => {
        ((l = !1), (v.value = 0), u && (u(), (u = null)));
      },
      O = (e) => {
        if (!b()) {
          if ((f.start(e), l)) {
            const e = (function (e) {
              const { transform: t } = window.getComputedStyle(e),
                a = t.slice(7, t.length - 1).split(', ')[5];
              return Number(a);
            })(d.value);
            m.value = Math.min(0, e - g());
          }
          ((v.value = 0), (n = m.value), (o = Date.now()), (s = n), (u = null));
        }
      },
      S = () => {
        if (b()) return;
        const t = m.value - s,
          a = Date.now() - o;
        if (a < 300 && Math.abs(t) > 15)
          return void ((t, a) => {
            const l = Math.abs(t / a);
            t = m.value + (l / 0.003) * (t < 0 ? -1 : 1);
            const n = _(t);
            ((v.value = +e.swipeDuration), y(n));
          })(t, a);
        const n = _(m.value);
        ((v.value = 200),
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
              class: [et('item', { disabled: s, selected: c === e.value }), o.className],
              onClick: () =>
                ((a) => {
                  l || b() || ((u = null), (v.value = 200), y(a), t('clickOption', e.options[a]));
                })(i),
            },
            m = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: r };
          return ge('li', d, [a.option ? a.option(o, i) : ge('div', m, null)]);
        });
      };
    return (
      D(tt),
      r({ stopMomentum: x }),
      he(() => {
        const t = l ? Math.floor(-m.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          a = Ke(e.options, t),
          n = -a * e.optionHeight;
        (l && a < t && x(), (m.value = n));
      }),
      A(
        'touchmove',
        (a) => {
          if (b()) return;
          (f.move(a), f.isVertical() && ((l = !0), N(a, !0)));
          const i = h(n + f.deltaY.value, -p() * e.optionHeight, e.optionHeight),
            r = _(i);
          (r !== w.value && t('scrollInto', e.options[r]), (m.value = i));
          const u = Date.now();
          u - o > 300 && ((o = u), (s = i));
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
                transform: `translate3d(0, ${m.value + g()}px, 0)`,
                transitionDuration: `${v.value}ms`,
                transitionProperty: v.value ? 'all' : 'none',
              },
              class: et('wrapper'),
              onTransitionend: x,
            },
            [k()],
          ),
        ])
    );
  },
});
const [lt] = v('picker-toolbar'),
  nt = { title: String, cancelButtonText: String, confirmButtonText: String },
  ot = ['cancel', 'confirm', 'title', 'toolbar'],
  it = Object.keys(nt);
var rt = ve({
  name: lt,
  props: nt,
  emits: ['confirm', 'cancel'],
  setup(e, { emit: t, slots: a }) {
    const l = () => t('cancel'),
      n = () => t('confirm'),
      o = () => {
        var t;
        const n = null != (t = e.cancelButtonText) ? t : Xe('cancel');
        if (a.cancel || n) return ge('button', { type: 'button', class: [je('cancel'), _], onClick: l }, [a.cancel ? a.cancel() : n]);
      },
      i = () => {
        var t;
        const l = null != (t = e.confirmButtonText) ? t : Xe('confirm');
        if (a.confirm || l) return ge('button', { type: 'button', class: [je('confirm'), _], onClick: n }, [a.confirm ? a.confirm() : l]);
      };
    return () =>
      ge('div', { class: je('toolbar') }, [
        a.toolbar
          ? a.toolbar()
          : [o(), a.title ? a.title() : e.title ? ge('div', { class: [je('title'), 'van-ellipsis'] }, [e.title]) : void 0, i()],
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
  mt = ((e) => {
    const t = Object.create(null);
    return (a) => t[a] || (t[a] = e(a));
  })((e) => e.replace(dt, '-$1').toLowerCase());
function vt(e) {
  if (st(e)) {
    const t = {};
    for (let a = 0; a < e.length; a++) {
      const l = e[a],
        n = ut(l) ? gt(l) : vt(l);
      if (n) for (const e in n) t[e] = n[e];
    }
    return t;
  }
  if (ut(e) || ct(e)) return e;
}
const ft = /;(?![^(]*\))/g,
  pt = /:([^]+)/,
  ht = /\/\*[^]*?\*\//g;
function gt(e) {
  const t = {};
  return (
    e
      .replace(ht, '')
      .split(ft)
      .forEach((e) => {
        if (e) {
          const a = e.split(pt);
          a.length > 1 && (t[a[0].trim()] = a[1].trim());
        }
      }),
    t
  );
}
function yt(e) {
  let t = '';
  if (ut(e)) t = e;
  else if (st(e))
    for (let a = 0; a < e.length; a++) {
      const l = yt(e[a]);
      l && (t += l + ' ');
    }
  else if (ct(e)) for (const a in e) e[a] && (t += a + ' ');
  return t.trim();
}
let bt = 0;
function Dt() {
  const e = ye(),
    { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
  return `${t}-${++bt}`;
}
function At() {
  const e = fe([]),
    t = [];
  be(() => {
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
function Nt(e, t) {
  if (!k || !window.IntersectionObserver) return;
  const a = new IntersectionObserver(
      (e) => {
        t(e[0].intersectionRatio > 0);
      },
      { root: document.body },
    ),
    l = () => {
      e.value && a.unobserve(e.value);
    };
  (De(l),
    Ae(l),
    I(() => {
      e.value && a.observe(e.value);
    }));
}
const [_t, wt] = v('sticky');
const xt = V(
    ve({
      name: _t,
      props: { zIndex: b, position: E('top'), container: Object, offsetTop: C(0), offsetBottom: C(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: a }) {
        const l = fe(),
          n = H(l),
          o = Ne({ fixed: !1, width: 0, height: 0, transform: 0 }),
          i = fe(!1),
          r = pe(() => T('top' === e.position ? e.offsetTop : e.offsetBottom)),
          s = pe(() => {
            if (i.value) return;
            const { fixed: e, height: t, width: a } = o;
            return e ? { width: `${a}px`, height: `${t}px` } : void 0;
          }),
          u = pe(() => {
            if (!o.fixed || i.value) return;
            const t = f(L(e.zIndex), { width: `${o.width}px`, height: `${o.height}px`, [e.position]: `${r.value}px` });
            return (o.transform && (t.transform = `translate3d(0, ${o.transform}px, 0)`), t);
          }),
          c = () => {
            if (!l.value || $(l)) return;
            const { container: a, position: n } = e,
              i = M(l),
              s = O(window);
            if (((o.width = i.width), (o.height = i.height), 'top' === n))
              if (a) {
                const e = M(a),
                  t = e.bottom - r.value - o.height;
                ((o.fixed = r.value > i.top && e.bottom > 0), (o.transform = t < 0 ? t : 0));
              } else o.fixed = r.value > i.top;
            else {
              const { clientHeight: e } = document.documentElement;
              if (a) {
                const t = M(a),
                  l = e - t.top - r.value - o.height;
                ((o.fixed = e - r.value < i.bottom && e > t.top), (o.transform = l < 0 ? -l : 0));
              } else o.fixed = e - r.value < i.bottom;
            }
            ((e) => {
              t('scroll', { scrollTop: e, isFixed: o.fixed });
            })(s);
          };
        return (
          _e(
            () => o.fixed,
            (e) => t('change', e),
          ),
          A('scroll', c, { target: n, passive: !0 }),
          Nt(l, c),
          _e([Y, G], () => {
            l.value &&
              !$(l) &&
              o.fixed &&
              ((i.value = !0),
              we(() => {
                const e = M(l);
                ((o.width = e.width), (o.height = e.height), (i.value = !1));
              }));
          }),
          () => {
            var e;
            return ge('div', { ref: l, style: s.value }, [
              ge('div', { class: wt({ fixed: o.fixed && !i.value }), style: u.value }, [null == (e = a.default) ? void 0 : e.call(a)]),
            ]);
          }
        );
      },
    }),
  ),
  [Ot, St] = v('swipe'),
  kt = {
    loop: P,
    width: b,
    height: b,
    vertical: Boolean,
    autoplay: C(0),
    duration: C(500),
    touchable: P,
    lazyRender: Boolean,
    initialSwipe: C(0),
    indicatorColor: String,
    showIndicators: P,
    stopPropagation: P,
  },
  It = Symbol(Ot);
const Ct = V(
    ve({
      name: Ot,
      props: kt,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: a }) {
        const l = fe(),
          n = fe(),
          o = Ne({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let s = !1;
        const u = i(),
          { children: c, linkChildren: d } = B(It),
          m = pe(() => c.length),
          v = pe(() => o[e.vertical ? 'height' : 'width']),
          f = pe(() => (e.vertical ? u.deltaY.value : u.deltaX.value)),
          p = pe(() => {
            if (o.rect) {
              return (e.vertical ? o.rect.height : o.rect.width) - v.value * m.value;
            }
            return 0;
          }),
          g = pe(() => (v.value ? Math.ceil(Math.abs(p.value) / v.value) : m.value)),
          y = pe(() => m.value * v.value),
          b = pe(() => (o.active + m.value) % m.value),
          D = pe(() => {
            const t = e.vertical ? 'vertical' : 'horizontal';
            return u.direction.value === t;
          }),
          _ = pe(() => {
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
          w = (t, a = 0) => {
            let l = t * v.value;
            e.loop || (l = Math.min(l, -p.value));
            let n = a - l;
            return (e.loop || (n = h(n, p.value, 0)), n);
          },
          x = ({ pace: a = 0, offset: l = 0, emitChange: n }) => {
            if (m.value <= 1) return;
            const { active: i } = o,
              r = ((t) => {
                const { active: a } = o;
                return t ? (e.loop ? h(a + t, -1, m.value) : h(a + t, 0, g.value)) : a;
              })(a),
              s = w(r, l);
            if (e.loop) {
              if (c[0] && s !== p.value) {
                const e = s < p.value;
                c[0].setOffset(e ? y.value : 0);
              }
              if (c[m.value - 1] && 0 !== s) {
                const e = s > 0;
                c[m.value - 1].setOffset(e ? -y.value : 0);
              }
            }
            ((o.active = r), (o.offset = s), n && r !== i && t('change', b.value));
          },
          O = () => {
            ((o.swiping = !0), o.active <= -1 ? x({ pace: m.value }) : o.active >= m.value && x({ pace: -m.value }));
          },
          S = () => {
            (O(),
              u.reset(),
              z(() => {
                ((o.swiping = !1), x({ pace: 1, emitChange: !0 }));
              }));
          };
        let k;
        const I = () => clearTimeout(k),
          C = () => {
            (I(),
              +e.autoplay > 0 &&
                m.value > 1 &&
                (k = setTimeout(() => {
                  (S(), C());
                }, +e.autoplay)));
          },
          E = (t = +e.initialSwipe) => {
            if (!l.value) return;
            const a = () => {
              var a, n;
              if (!$(l)) {
                const t = { width: l.value.offsetWidth, height: l.value.offsetHeight };
                ((o.rect = t), (o.width = +(null != (a = e.width) ? a : t.width)), (o.height = +(null != (n = e.height) ? n : t.height)));
              }
              (m.value && -1 === (t = Math.min(m.value - 1, t)) && (t = m.value - 1),
                (o.active = t),
                (o.swiping = !0),
                (o.offset = w(t)),
                c.forEach((e) => {
                  e.setOffset(0);
                }),
                C());
            };
            $(l) ? we().then(a) : a();
          },
          H = () => E(o.active);
        let T;
        const L = (t) => {
            !e.touchable || t.touches.length > 1 || (u.start(t), (s = !1), (T = Date.now()), I(), O());
          },
          M = () => {
            if (!e.touchable || !o.swiping) return;
            const a = Date.now() - T,
              l = f.value / a;
            if ((Math.abs(l) > 0.25 || Math.abs(f.value) > v.value / 2) && D.value) {
              const t = e.vertical ? u.offsetY.value : u.offsetX.value;
              let a = 0;
              ((a = e.loop ? (t > 0 ? (f.value > 0 ? -1 : 1) : 0) : -Math[f.value > 0 ? 'ceil' : 'floor'](f.value / v.value)),
                x({ pace: a, emitChange: !0 }));
            } else f.value && x({ pace: 0 });
            ((s = !1), (o.swiping = !1), t('dragEnd', { index: b.value }), C());
          },
          V = (t, a) => {
            const l = a === b.value,
              n = l ? { backgroundColor: e.indicatorColor } : void 0;
            return ge('i', { style: n, class: St('indicator', { active: l }) }, null);
          };
        return (
          r({
            prev: () => {
              (O(),
                u.reset(),
                z(() => {
                  ((o.swiping = !1), x({ pace: -1, emitChange: !0 }));
                }));
            },
            next: S,
            state: o,
            resize: H,
            swipeTo: (t, a = {}) => {
              (O(),
                u.reset(),
                z(() => {
                  let l;
                  ((l = e.loop && t === m.value ? (0 === o.active ? 0 : t) : t % m.value),
                    a.immediate
                      ? z(() => {
                          o.swiping = !1;
                        })
                      : (o.swiping = !1),
                    x({ pace: l - o.active, emitChange: !0 }));
                }));
            },
          }),
          d({ size: v, props: e, count: m, activeIndicator: b }),
          _e(
            () => e.initialSwipe,
            (e) => E(+e),
          ),
          _e(m, () => E(o.active)),
          _e(() => e.autoplay, C),
          _e([Y, G, () => e.width, () => e.height], H),
          _e(U(), (e) => {
            'visible' === e ? C() : I();
          }),
          xe(E),
          Oe(() => E(o.active)),
          R(() => E(o.active)),
          De(I),
          Ae(I),
          A(
            'touchmove',
            (a) => {
              if (e.touchable && o.swiping && (u.move(a), D.value)) {
                (!e.loop && ((0 === o.active && f.value > 0) || (o.active === m.value - 1 && f.value < 0))) ||
                  (N(a, e.stopPropagation), x({ offset: f.value }), s || (t('dragStart', { index: b.value }), (s = !0)));
              }
            },
            { target: n },
          ),
          () => {
            var t;
            return ge('div', { ref: l, class: St() }, [
              ge(
                'div',
                {
                  ref: n,
                  style: _.value,
                  class: St('track', { vertical: e.vertical }),
                  onTouchstartPassive: L,
                  onTouchend: M,
                  onTouchcancel: M,
                },
                [null == (t = a.default) ? void 0 : t.call(a)],
              ),
              a.indicator
                ? a.indicator({ active: b.value, total: m.value })
                : e.showIndicators && m.value > 1
                  ? ge('div', { class: St('indicators', { vertical: e.vertical }) }, [Array(m.value).fill('').map(V)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [Et, Ht] = v('tabs');
var Tt = ve({
  name: Et,
  props: {
    count: g(Number),
    inited: Boolean,
    animated: Boolean,
    duration: g(b),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: g(Number),
  },
  emits: ['change'],
  setup(e, { emit: t, slots: a }) {
    const l = fe(),
      n = (e) => t('change', e),
      o = () => {
        var t;
        const o = null == (t = a.default) ? void 0 : t.call(a);
        return e.animated || e.swipeable
          ? ge(
              Ct,
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
      i = (t) => {
        const a = l.value;
        a && a.state.active !== t && a.swipeTo(t, { immediate: !e.inited });
      };
    return (
      _e(() => e.currentIndex, i),
      xe(() => {
        i(e.currentIndex);
      }),
      r({ swipeRef: l }),
      () => ge('div', { class: Ht('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [Lt, $t] = v('tabs'),
  Mt = {
    type: E('line'),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: C(0),
    duration: C(0.3),
    animated: Boolean,
    ellipsis: P,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: C(0),
    background: String,
    lazyRender: P,
    showHeader: P,
    lineWidth: b,
    lineHeight: b,
    beforeChange: Function,
    swipeThreshold: C(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Yt = Symbol(Lt);
var Gt = ve({
  name: Lt,
  props: Mt,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: a, slots: l }) {
    let n, o, i, u, c;
    const d = fe(),
      m = fe(),
      v = fe(),
      f = fe(),
      h = Dt(),
      g = H(d),
      [y, b] = At(),
      { children: D, linkChildren: N } = B(Yt),
      _ = Ne({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      k = pe(() => D.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      C = pe(() => ({ borderColor: t.color, background: t.background })),
      E = (e, t) => {
        var a;
        return null != (a = e.name) ? a : t;
      },
      L = pe(() => {
        const e = D[_.currentIndex];
        if (e) return E(e, _.currentIndex);
      }),
      G = pe(() => T(t.offsetTop)),
      V = pe(() => (t.sticky ? G.value + n : 0)),
      P = (e) => {
        const a = m.value,
          l = y.value;
        if (!(k.value && a && l && l[_.currentIndex])) return;
        const n = l[_.currentIndex].$el,
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
                ((r += (t - o) / i), (e.scrollLeft = r), ++n < i && (l = w(a)));
              })(),
              function () {
                x(l);
              }
            );
          })(a, o, e ? 0 : +t.duration)));
      },
      U = () => {
        const e = _.inited;
        we(() => {
          const a = y.value;
          if (!a || !a[_.currentIndex] || 'line' !== t.type || $(d.value)) return;
          const l = a[_.currentIndex].$el,
            { lineWidth: n, lineHeight: o } = t,
            i = l.offsetLeft + l.offsetWidth / 2,
            r = { width: W(n), backgroundColor: t.color, transform: `translateX(${i}px) translateX(-50%)` };
          if ((e && (r.transitionDuration = `${t.duration}s`), p(o))) {
            const e = W(o);
            ((r.height = e), (r.borderRadius = e));
          }
          _.lineStyle = r;
        });
      },
      z = (e, l) => {
        const n = ((e) => {
          const t = e < _.currentIndex ? -1 : 1;
          for (; e >= 0 && e < D.length; ) {
            if (!D[e].disabled) return e;
            e += t;
          }
        })(e);
        if (!p(n)) return;
        const o = D[n],
          r = E(o, n),
          s = null !== _.currentIndex;
        (_.currentIndex !== n && ((_.currentIndex = n), l || P(), U()),
          r !== t.active && (a('update:active', r), s && a('change', r, o.title)),
          i && !t.scrollspy && j(Math.ceil(X(d.value) - G.value)));
      },
      Z = (e, t) => {
        const a = D.findIndex((t, a) => E(t, a) === e);
        z(-1 === a ? 0 : a, t);
      },
      K = (e = !1) => {
        if (t.scrollspy) {
          const a = D[_.currentIndex].$el;
          if (a && g.value) {
            const l = X(a, g.value) - V.value;
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
                      S(e, o),
                      (i && o < t) || (!i && o > t) ? (n = w(a)) : l && (n = w(l)));
                  })(),
                  function () {
                    x(n);
                  }
                );
              })(g.value, l, e ? 0 : +t.duration, () => {
                o = !1;
              })));
          }
        }
      },
      q = (l, n, o) => {
        const { title: i, disabled: r } = D[n],
          u = E(D[n], n);
        (r ||
          (s(t.beforeChange, {
            args: [u],
            done: () => {
              (z(n), K());
            },
          }),
          e(l)),
          a('clickTab', { name: u, title: i, event: o, disabled: r }));
      },
      J = (e) => {
        ((i = e.isFixed), a('scroll', e));
      },
      Q = () => {
        if ('line' === t.type && D.length) return ge('div', { class: $t('line'), style: _.lineStyle }, null);
      },
      ee = () => {
        var e, a, n;
        const { type: o, border: i, sticky: r } = t,
          s = [
            ge('div', { ref: r ? void 0 : v, class: [$t('wrap'), { [F]: 'line' === o && i }] }, [
              ge(
                'div',
                {
                  ref: m,
                  role: 'tablist',
                  class: $t('nav', [o, { shrink: t.shrink, complete: k.value }]),
                  style: C.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = l['nav-left']) ? void 0 : e.call(l),
                  D.map((e) => e.renderTitle(q)),
                  Q(),
                  null == (a = l['nav-right']) ? void 0 : a.call(l),
                ],
              ),
            ]),
            null == (n = l['nav-bottom']) ? void 0 : n.call(l),
          ];
        return r ? ge('div', { ref: v }, [s]) : s;
      },
      te = () => {
        (U(),
          we(() => {
            var e, t;
            (P(!0), null == (t = null == (e = f.value) ? void 0 : e.swipeRef.value) || t.resize());
          }));
      };
    (_e(() => [t.color, t.duration, t.lineWidth, t.lineHeight], U),
      _e(Y, te),
      _e(
        () => t.active,
        (e) => {
          e !== L.value && Z(e);
        },
      ),
      _e(
        () => D.length,
        () => {
          _.inited &&
            (Z(t.active),
            U(),
            we(() => {
              P(!0);
            }));
        },
      ));
    return (
      r({
        resize: te,
        scrollTo: (e) => {
          we(() => {
            (Z(e), K(!0));
          });
        },
      }),
      Oe(U),
      R(U),
      I(() => {
        (Z(t.active, !0),
          we(() => {
            ((_.inited = !0), v.value && (n = M(v.value).height), P(!0));
          }));
      }),
      Nt(d, U),
      A(
        'scroll',
        () => {
          if (t.scrollspy && !o) {
            const e = (() => {
              for (let e = 0; e < D.length; e++) {
                const { top: t } = M(D[e].$el);
                if (t > V.value) return 0 === e ? 0 : e - 1;
              }
              return D.length - 1;
            })();
            z(e);
          }
        },
        { target: g, passive: !0 },
      ),
      N({
        id: h,
        props: t,
        setLine: U,
        scrollable: k,
        onRendered: (e, t) => a('rendered', e, t),
        currentName: L,
        setTitleRefs: b,
        scrollIntoView: P,
      }),
      () =>
        ge('div', { ref: d, class: $t([t.type]) }, [
          t.showHeader
            ? t.sticky
              ? ge(xt, { container: d.value, offsetTop: G.value, onScroll: J }, { default: () => [ee()] })
              : ee()
            : null,
          ge(
            Tt,
            {
              ref: f,
              count: D.length,
              inited: _.inited,
              animated: t.animated,
              duration: t.duration,
              swipeable: t.swipeable,
              lazyRender: t.lazyRender,
              currentIndex: _.currentIndex,
              onChange: z,
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
const Vt = Symbol(),
  Pt = Symbol(),
  Bt = (e) => {
    const t = Se(Pt, null);
    (ke(Vt, e),
      ke(
        Pt,
        pe(() => (null == t || t.value) && e.value),
      ));
  },
  [Ut, Rt] = v('tab'),
  zt = ve({
    name: Ut,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: b,
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
      const a = pe(() => {
          const t = {},
            { type: a, color: l, disabled: n, isActive: o, activeColor: i, inactiveColor: r } = e;
          l && 'card' === a && ((t.borderColor = l), n || (o ? (t.backgroundColor = l) : (t.color = l)));
          const s = o ? i : r;
          return (s && (t.color = s), t);
        }),
        l = () => {
          const a = ge('span', { class: Rt('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
          return e.dot || (p(e.badge) && '' !== e.badge)
            ? ge(Z, { dot: e.dot, content: e.badge, showZero: e.showZeroBadge }, { default: () => [a] })
            : a;
        };
      return () =>
        ge(
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
  [Wt, Ft] = v('swipe-item');
const jt = V(
    ve({
      name: Wt,
      setup(e, { slots: t }) {
        let a;
        const l = Ne({ offset: 0, inited: !1, mounted: !1 }),
          { parent: n, index: o } = D(It);
        if (!n) return;
        const i = pe(() => {
            const e = {},
              { vertical: t } = n.props;
            return (
              n.size.value && (e[t ? 'height' : 'width'] = `${n.size.value}px`),
              l.offset && (e.transform = `translate${t ? 'Y' : 'X'}(${l.offset}px)`),
              e
            );
          }),
          s = pe(() => {
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
          xe(() => {
            we(() => {
              l.mounted = !0;
            });
          }),
          r({
            setOffset: (e) => {
              l.offset = e;
            },
          }),
          () => {
            var e;
            return ge('div', { class: Ft(), style: i.value }, [s.value ? (null == (e = t.default) ? void 0 : e.call(t)) : null]);
          }
        );
      },
    }),
  ),
  [Xt, Zt] = v('tab');
const Kt = V(
    ve({
      name: Xt,
      props: f({}, t, {
        dot: Boolean,
        name: b,
        badge: b,
        title: String,
        disabled: Boolean,
        titleClass: K,
        titleStyle: [String, Object],
        showZeroBadge: P,
      }),
      setup(e, { slots: t }) {
        const a = Dt(),
          l = fe(!1),
          n = ye(),
          { parent: o, index: i } = D(Yt);
        if (!o) return;
        const s = () => {
            var t;
            return null != (t = e.name) ? t : i.value;
          },
          u = pe(() => {
            const t = s() === o.currentName.value;
            return (
              t &&
                !l.value &&
                ((l.value = !0),
                o.props.lazyRender &&
                  we(() => {
                    o.onRendered(s(), e.title);
                  })),
              t
            );
          }),
          c = fe(''),
          d = fe('');
        he(() => {
          const { titleClass: t, titleStyle: a } = e;
          ((c.value = t ? yt(t) : ''),
            (d.value =
              a && 'string' != typeof a
                ? (function (e) {
                    if (!e) return '';
                    if (ut(e)) return e;
                    let t = '';
                    for (const a in e) {
                      const l = e[a];
                      (ut(l) || 'number' == typeof l) && (t += `${a.startsWith('--') ? a : mt(a)}:${l};`);
                    }
                    return t;
                  })(vt(a))
                : a));
        });
        const m = fe(!u.value);
        return (
          _e(u, (e) => {
            e
              ? (m.value = !1)
              : z(() => {
                  m.value = !0;
                });
          }),
          _e(
            () => e.title,
            () => {
              (o.setLine(), o.scrollIntoView());
            },
          ),
          Bt(u),
          r({
            id: a,
            renderTitle: (l) =>
              ge(
                zt,
                Ce(
                  {
                    key: a,
                    id: `${o.id}-${i.value}`,
                    ref: o.setTitleRefs(i.value),
                    style: d.value,
                    class: c.value,
                    isActive: u.value,
                    controls: a,
                    scrollable: o.scrollable.value,
                    activeColor: o.props.titleActiveColor,
                    inactiveColor: o.props.titleInactiveColor,
                    onClick: (e) => l(n.proxy, i.value, e),
                  },
                  q(o.props, ['type', 'color', 'shrink']),
                  q(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
                ),
                { title: t.title },
              ),
          }),
          () => {
            var e;
            const n = `${o.id}-${i.value}`,
              { animated: r, swipeable: s, scrollspy: c, lazyRender: d } = o.props;
            if (!t.default && !r) return;
            const v = c || u.value;
            if (r || s)
              return ge(
                jt,
                {
                  id: a,
                  role: 'tabpanel',
                  class: Zt('panel-wrapper', { inactive: m.value }),
                  tabindex: u.value ? 0 : -1,
                  'aria-hidden': !u.value,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                {
                  default: () => {
                    var e;
                    return [ge('div', { class: Zt('panel') }, [null == (e = t.default) ? void 0 : e.call(t)])];
                  },
                },
              );
            const f = l.value || c || !d ? (null == (e = t.default) ? void 0 : e.call(t)) : null;
            return Ie(
              ge(
                'div',
                {
                  id: a,
                  role: 'tabpanel',
                  class: Zt('panel'),
                  tabindex: v ? 0 : -1,
                  'aria-labelledby': n,
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
  qt = V(Gt),
  [Jt] = v('picker-group'),
  Qt = Symbol(Jt);
f({ tabs: y(), activeTab: C(0), nextStepText: String, showToolbar: P }, nt);
const ea = f(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: C(44),
    showToolbar: P,
    swipeDuration: C(1e3),
    visibleOptionNum: C(6),
  },
  nt,
);
const ta = V(
    ve({
      name: Fe,
      props: f({}, ea, { columns: y(), modelValue: y(), toolbarPosition: E('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: a }) {
        const l = fe(),
          n = fe(e.modelValue.slice(0)),
          { parent: o } = D(Qt),
          { children: i, linkChildren: s } = B(tt);
        s();
        const c = pe(() =>
            (function (e) {
              return f({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          d = pe(() => T(e.optionHeight)),
          m = pe(() =>
            (function (e, t) {
              const a = e[0];
              if (a) {
                if (Array.isArray(a)) return 'multiple';
                if (t.children in a) return 'cascade';
              }
              return 'default';
            })(e.columns, c.value),
          ),
          v = pe(() => {
            const { columns: t } = e;
            switch (m.value) {
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
                    ((n = p(i) ? Je(e, i, t) : void 0), !n && e.length && (n = Je(e, Ze(e)[t.value], t)), o++, l.push(e));
                  }
                  return l;
                })(t, c.value, n);
              default:
                return [t];
            }
          }),
          h = pe(() => v.value.some((e) => e.length)),
          g = pe(() => v.value.map((e, t) => Je(e, n.value[t], c.value))),
          y = pe(() => v.value.map((e, t) => e.findIndex((e) => e[c.value.value] === n.value[t]))),
          b = (e, t) => {
            if (n.value[e] !== t) {
              const a = n.value.slice(0);
              ((a[e] = t), (n.value = a));
            }
          },
          _ = () => ({ selectedValues: n.value.slice(0), selectedOptions: g.value, selectedIndexes: y.value }),
          w = () => {
            i.forEach((e) => e.stopMomentum());
            const e = _();
            return (
              we(() => {
                const e = _();
                t('confirm', e);
              }),
              e
            );
          },
          x = () => t('cancel', _()),
          O = () =>
            v.value.map((l, o) =>
              ge(
                at,
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
                      (b(a, e),
                        'cascade' === m.value &&
                          n.value.forEach((e, t) => {
                            const a = v.value[t];
                            qe(a, e, c.value) || b(t, a.length ? a[0][c.value.value] : void 0);
                          }),
                        we(() => {
                          t('change', f({ columnIndex: a }, _()));
                        }));
                    })(e, o),
                  onClickOption: (e) =>
                    ((e, a) => {
                      const l = { columnIndex: a, currentOption: e };
                      (t('clickOption', f(_(), l)), t('scrollInto', l));
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
              return [ge('div', { class: je('mask'), style: a }, null), ge('div', { class: [J, je('frame')], style: t }, null)];
            }
          },
          k = () => {
            const t = d.value * +e.visibleOptionNum,
              n = { height: `${t}px` };
            return e.loading || h.value || !a.empty ? ge('div', { ref: l, class: je('columns'), style: n }, [O(), S(t)]) : a.empty();
          },
          I = () => {
            if (e.showToolbar && !o) return ge(rt, Ce(q(e, it), { onConfirm: w, onCancel: x }), q(a, ot));
          },
          C = (e) => {
            e.forEach((e, t) => {
              e.length && !qe(e, n.value[t], c.value) && b(t, Ze(e)[c.value.value]);
            });
          };
        let E;
        (_e(v, (e) => C(e), { immediate: !0 }),
          _e(
            () => e.modelValue,
            (t) => {
              (Q(t, n.value) || Q(t, E) || ((n.value = t.slice(0)), (E = t.slice(0))), 0 === e.modelValue.length && C(v.value));
            },
            { deep: !0 },
          ),
          _e(
            n,
            (a) => {
              Q(a, e.modelValue) || ((E = a.slice(0)), t('update:modelValue', E));
            },
            { immediate: !0 },
          ),
          A('touchmove', N, { target: l }));
        return (
          r({ confirm: w, getSelectedOptions: () => g.value }),
          () => {
            var t, l;
            return ge('div', { class: je() }, [
              'top' === e.toolbarPosition ? I() : null,
              e.loading ? ge(u, { class: je('loading') }, null) : null,
              null == (t = a['columns-top']) ? void 0 : t.call(a),
              k(),
              null == (l = a['columns-bottom']) ? void 0 : l.call(a),
              'bottom' === e.toolbarPosition ? I() : null,
            ]);
          }
        );
      },
    }),
  ),
  [aa, la] = v('cell'),
  na = {
    tag: E('div'),
    icon: String,
    size: String,
    title: b,
    value: b,
    label: b,
    center: Boolean,
    isLink: Boolean,
    border: P,
    iconPrefix: String,
    valueClass: K,
    labelClass: K,
    titleClass: K,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const oa = V(
  ve({
    name: aa,
    props: f({}, na, t),
    setup(e, { slots: t }) {
      const l = a(),
        n = () => {
          if (t.label || p(e.label)) return ge('div', { class: [la('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var a;
          if (t.title || p(e.title)) {
            const l = null == (a = t.title) ? void 0 : a.call(t);
            if (Array.isArray(l) && 0 === l.length) return;
            return ge('div', { class: [la('title'), e.titleClass], style: e.titleStyle }, [l || ge('span', null, [e.title]), n()]);
          }
        },
        i = () => {
          const a = t.value || t.default;
          if (a || p(e.value)) return ge('div', { class: [la('value'), e.valueClass] }, [a ? a() : ge('span', null, [e.value])]);
        },
        r = () => {
          if (t['right-icon']) return t['right-icon']();
          if (e.isLink) {
            const t = e.arrowDirection && 'right' !== e.arrowDirection ? `arrow-${e.arrowDirection}` : 'arrow';
            return ge(ee, { name: t, class: la('right-icon') }, null);
          }
        };
      return () => {
        var a;
        const { tag: n, size: s, center: u, border: c, isLink: d, required: m } = e,
          v = null != (a = e.clickable) ? a : d,
          f = { center: u, required: !!m, clickable: v, borderless: !c };
        return (
          s && (f[s] = !!s),
          ge(
            n,
            { class: la(f), role: v ? 'button' : void 0, tabindex: v ? 0 : void 0, onClick: l },
            {
              default: () => {
                var a;
                return [
                  t.icon ? t.icon() : e.icon ? ge(ee, { name: e.icon, class: la('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
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
function ia(e) {
  return Array.isArray(e) ? !e.length : 0 !== e && !e;
}
function ra(e, t) {
  const { message: a } = t;
  return le(a) ? a(e, t) : a || '';
}
function sa({ target: e }) {
  e.composing = !0;
}
function ua({ target: e }) {
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function ca(e) {
  return [...e].length;
}
function da(e, t) {
  return [...e].slice(0, t).join('');
}
const [ma, va] = v('field'),
  fa = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: b,
    max: Number,
    min: Number,
    formatter: Function,
    clearIcon: E('clear'),
    modelValue: C(''),
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
const pa = V(
  ve({
    name: ma,
    props: f({}, na, fa, {
      rows: b,
      type: E('text'),
      rules: Array,
      autosize: [Boolean, Object],
      labelWidth: b,
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
    setup(e, { emit: t, slots: a }) {
      const l = Dt(),
        n = Ne({ status: 'unvalidated', focused: !1, validateMessage: '' }),
        o = fe(),
        i = fe(),
        s = fe(),
        { parent: u } = D(ie),
        c = () => {
          var t;
          return String(null != (t = e.modelValue) ? t : '');
        },
        d = (t) => (p(e[t]) ? e[t] : u && p(u.props[t]) ? u.props[t] : void 0),
        m = pe(() => {
          const t = d('readonly');
          if (e.clearable && !t) {
            const t = '' !== c(),
              a = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && n.focused);
            return t && a;
          }
          return !1;
        }),
        v = pe(() => (s.value && a.input ? s.value() : e.modelValue)),
        f = pe(() => {
          var t;
          const a = d('required');
          return 'auto' === a ? (null == (t = e.rules) ? void 0 : t.some((e) => e.required)) : a;
        }),
        g = (e) =>
          e.reduce(
            (e, t) =>
              e.then(() => {
                if ('failed' === n.status) return;
                let { value: e } = v;
                if (
                  (t.formatter && (e = t.formatter(e, t)),
                  !(function (e, t) {
                    if (ia(e)) {
                      if (t.required) return !1;
                      if (!1 === t.validateEmpty) return !0;
                    }
                    return !(t.pattern && !t.pattern.test(String(e)));
                  })(e, t))
                )
                  return ((n.status = 'failed'), void (n.validateMessage = ra(e, t)));
                if (t.validator) {
                  if (ia(e) && !1 === t.validateEmpty) return;
                  return (function (e, t) {
                    return new Promise((a) => {
                      const l = t.validator(e, t);
                      ne(l) ? l.then(a) : a(l);
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
        y = () => {
          ((n.status = 'unvalidated'), (n.validateMessage = ''));
        },
        b = () => t('endValidate', { status: n.status, message: n.validateMessage }),
        _ = (a = e.rules) =>
          new Promise((l) => {
            (y(),
              a
                ? (t('startValidate'),
                  g(a).then(() => {
                    'failed' === n.status ? (l({ name: e.name, message: n.validateMessage }), b()) : ((n.status = 'passed'), l(), b());
                  }))
                : l());
          }),
        w = (t) => {
          if (u && e.rules) {
            const { validateTrigger: a } = u.props,
              l = re(a).includes(t),
              n = e.rules.filter((e) => (e.trigger ? re(e.trigger).includes(t) : l));
            n.length && _(n);
          }
        },
        x = (a, l = 'onChange') => {
          var i, r;
          const s = a;
          a = ((t) => {
            var a;
            const { maxlength: l } = e;
            if (p(l) && ca(t) > +l) {
              const e = c();
              if (e && ca(e) === +l) return e;
              const i = null == (a = o.value) ? void 0 : a.selectionEnd;
              if (n.focused && i) {
                const e = [...t],
                  a = e.length - +l;
                return (e.splice(i - a, a), e.join(''));
              }
              return da(t, +l);
            }
            return t;
          })(a);
          const u = s.length - a.length;
          if ('number' === e.type || 'digit' === e.type) {
            const t = 'number' === e.type;
            if (((a = oe(a, t, t)), 'onBlur' === l && '' !== a && (void 0 !== e.min || void 0 !== e.max))) {
              const t = h(+a, null != (i = e.min) ? i : -1 / 0, null != (r = e.max) ? r : 1 / 0);
              +a !== t && (a = t.toString());
            }
          }
          let d = 0;
          if (e.formatter && l === e.formatTrigger) {
            const { formatter: t, maxlength: l } = e;
            if (((a = t(a)), p(l) && ca(a) > +l && (a = da(a, +l)), o.value && n.focused)) {
              const { selectionEnd: e } = o.value,
                a = da(s, e);
              d = t(a).length - a.length;
            }
          }
          if (o.value && o.value.value !== a)
            if (n.focused) {
              let { selectionStart: e, selectionEnd: t } = o.value;
              if (((o.value.value = a), p(e) && p(t))) {
                const l = a.length;
                (u ? ((e -= u), (t -= u)) : d && ((e += d), (t += d)), o.value.setSelectionRange(Math.min(e, l), Math.min(t, l)));
              }
            } else o.value.value = a;
          a !== e.modelValue && t('update:modelValue', a);
        },
        O = (e) => {
          e.target.composing || x(e.target.value);
        },
        S = () => {
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
              const a = te();
              e.style.height = 'auto';
              let l = e.scrollHeight;
              if (ae(t)) {
                const { maxHeight: e, minHeight: a } = t;
                (void 0 !== e && (l = Math.min(l, e)), void 0 !== a && (l = Math.max(l, a)));
              }
              l && ((e.style.height = `${l}px`), j(a));
            })(t, e.autosize);
        },
        C = (e) => {
          ((n.focused = !0), t('focus', e), we(I), d('readonly') && S());
        },
        E = (e) => {
          ((n.focused = !1), x(c(), 'onBlur'), t('blur', e), d('readonly') || (w('onBlur'), we(I), se()));
        },
        H = (e) => t('clickInput', e),
        T = (e) => t('clickLeftIcon', e),
        L = (e) => t('clickRightIcon', e),
        $ = pe(() => ('boolean' == typeof e.error ? e.error : !(!u || !u.props.showError || 'failed' !== n.status) || void 0)),
        M = pe(() => {
          const e = d('labelWidth'),
            t = d('labelAlign');
          if (e && 'top' !== t) return { width: W(e) };
        }),
        Y = (a) => {
          if (13 === a.keyCode) {
            ((u && u.props.submitOnEnter) || 'textarea' === e.type || N(a), 'search' === e.type && S());
          }
          t('keypress', a);
        },
        G = () => e.id || `${l}-input`,
        V = () => {
          const t = va('control', [
            d('inputAlign'),
            { error: $.value, custom: !!a.input, 'min-height': 'textarea' === e.type && !e.autosize },
          ]);
          if (a.input) return ge('div', { class: t, onClick: H }, [a.input()]);
          const n = {
            id: G(),
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
            onBlur: E,
            onFocus: C,
            onInput: O,
            onClick: H,
            onChange: ua,
            onKeypress: Y,
            onCompositionend: ua,
            onCompositionstart: sa,
          };
          return 'textarea' === e.type
            ? ge('textarea', Ce(n, { inputmode: e.inputmode }), null)
            : ge(
                'input',
                Ce(
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
        P = () => {
          const t = a['right-icon'];
          if (e.rightIcon || t)
            return ge('div', { class: va('right-icon'), onClick: L }, [
              t ? t() : ge(ee, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        B = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = ca(c());
            return ge('div', { class: va('word-limit') }, [ge('span', { class: va('word-num') }, [t]), He('/'), e.maxlength]);
          }
        },
        U = () => {
          if (u && !1 === u.props.showErrorMessage) return;
          const t = e.errorMessage || n.validateMessage;
          if (t) {
            const e = a['error-message'],
              l = d('errorMessageAlign');
            return ge('div', { class: va('error-message', l) }, [e ? e({ message: t }) : t]);
          }
        },
        R = () => [
          ge('div', { class: va('body') }, [
            V(),
            m.value && ge(ee, { ref: i, name: e.clearIcon, class: va('clear') }, null),
            P(),
            a.button && ge('div', { class: va('button') }, [a.button()]),
          ]),
          B(),
          U(),
        ];
      return (
        r({ blur: S, focus: k, validate: _, formValue: v, resetValidation: y, getValidationStatus: () => n.status }),
        ke(ue, { customValue: s, resetValidation: y, validateWithTrigger: w }),
        _e(
          () => e.modelValue,
          () => {
            (x(c()), y(), w('onChange'), we(I));
          },
        ),
        xe(() => {
          (x(c(), e.formatTrigger), we(I));
        }),
        A(
          'touchstart',
          (e) => {
            (N(e), t('update:modelValue', ''), t('clear', e));
          },
          {
            target: pe(() => {
              var e;
              return null == (e = i.value) ? void 0 : e.$el;
            }),
          },
        ),
        () => {
          const t = d('disabled'),
            n = d('labelAlign'),
            o = (() => {
              const t = a['left-icon'];
              if (e.leftIcon || t)
                return ge('div', { class: va('left-icon'), onClick: T }, [
                  t ? t() : ge(ee, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return ge(
            oa,
            {
              size: e.size,
              class: va({ error: $.value, disabled: t, [`label-${n}`]: n }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: M.value,
              valueClass: va('value'),
              titleClass: [va('label', [n, { required: f.value }]), e.labelClass],
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
                      ? ge(
                          'label',
                          {
                            id: `${l}-label`,
                            for: a.input ? void 0 : G(),
                            'data-allow-mismatch': 'attribute',
                            onClick: (e) => {
                              (N(e), k());
                            },
                            style: 'top' === n && t ? { width: W(t) } : void 0,
                          },
                          [e.label + o],
                        )
                      : void 0;
                })();
                return 'top' === n ? [o, t].filter(Boolean) : t || [];
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
V(c);
const [ha, ga, ya] = v('calendar');
function ba(e, t) {
  const a = e.getFullYear(),
    l = t.getFullYear();
  if (a === l) {
    const a = e.getMonth(),
      l = t.getMonth();
    return a === l ? 0 : a > l ? 1 : -1;
  }
  return a > l ? 1 : -1;
}
function Da(e, t) {
  const a = ba(e, t);
  if (0 === a) {
    const a = e.getDate(),
      l = t.getDate();
    return a === l ? 0 : a > l ? 1 : -1;
  }
  return a;
}
const Aa = (e) => new Date(e),
  Na = (e) => (Array.isArray(e) ? e.map(Aa) : Aa(e));
function _a(e, t) {
  const a = Aa(e);
  return (a.setDate(a.getDate() + t), a);
}
function wa(e, t) {
  const a = Aa(e);
  return (a.setMonth(a.getMonth() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
function xa(e, t) {
  const a = Aa(e);
  return (a.setFullYear(a.getFullYear() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
const Oa = (e) => _a(e, -1),
  Sa = (e) => _a(e, 1),
  ka = (e) => wa(e, -1),
  Ia = (e) => wa(e, 1),
  Ca = (e) => xa(e, -1),
  Ea = (e) => xa(e, 1),
  Ha = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
f({}, ea, { modelValue: y(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Ta] = v('calendar-day');
var La = ve({
  name: Ta,
  props: { item: g(Object), color: String, index: Number, offset: ce(0), rowHeight: String },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const l = pe(() => {
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
        if (t || a['top-info']) return ge('div', { class: ga('top-info') }, [a['top-info'] ? a['top-info'](e.item) : t]);
      },
      i = () => {
        const { bottomInfo: t } = e.item;
        if (t || a['bottom-info']) return ge('div', { class: ga('bottom-info') }, [a['bottom-info'] ? a['bottom-info'](e.item) : t]);
      },
      r = () => {
        const { item: t, color: l, rowHeight: n } = e,
          { type: r } = t,
          s = [o(), a.text ? a.text(e.item) : e.item.text, i()];
        return 'selected' === r ? ge('div', { class: ga('selected-day'), style: { width: n, height: n, background: l } }, [s]) : s;
      };
    return () => {
      const { type: t, className: a } = e.item;
      return 'placeholder' === t
        ? ge('div', { class: ga('day'), style: l.value }, null)
        : ge('div', { role: 'gridcell', style: l.value, class: [ga('day', t), a], tabindex: 'disabled' === t ? void 0 : -1, onClick: n }, [
            r(),
          ]);
    };
  },
});
const [$a] = v('calendar-month');
var Ma = ve({
  name: $a,
  props: {
    date: g(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: b,
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
    const [l, n] = de(),
      o = fe(),
      i = fe(),
      s = We(i),
      u = pe(() => {
        return ((t = e.date), ya('monthTitle', t.getFullYear(), t.getMonth() + 1));
        var t;
      }),
      c = pe(() => W(e.rowHeight)),
      d = pe(() => {
        const t = e.date.getDate(),
          a = (e.date.getDay() - (t % 7) + 8) % 7;
        return e.firstDayOfWeek ? (a + 7 - e.firstDayOfWeek) % 7 : a;
      }),
      m = pe(() => {
        return ((t = e.date.getFullYear()), (a = e.date.getMonth() + 1), 32 - new Date(t, a - 1, 32).getDate());
        var t, a;
      }),
      v = pe(() => l.value || !e.lazyRender),
      f = (t) => {
        const { type: a, minDate: l, maxDate: n, currentDate: o } = e;
        if ((l && Da(t, l) < 0) || (n && Da(t, n) > 0)) return 'disabled';
        if (null === o) return '';
        if (Array.isArray(o)) {
          if ('multiple' === a)
            return ((t) => {
              const a = (t) => e.currentDate.some((e) => 0 === Da(e, t));
              if (a(t)) {
                const e = Oa(t),
                  l = Sa(t),
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
              const n = Da(t, a);
              if (!l) return 0 === n ? 'start' : '';
              const o = Da(t, l);
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
        } else if ('single' === a) return 0 === Da(t, o) ? 'selected' : '';
        return '';
      },
      p = (t) => {
        if ('range' === e.type) {
          if ('start' === t || 'end' === t) return ya(t);
          if ('start-end' === t) return `${ya('start')}/${ya('end')}`;
        }
      },
      h = () => {
        if (e.showMonthTitle)
          return ge('div', { class: ga('month-title') }, [a['month-title'] ? a['month-title']({ date: e.date, text: u.value }) : u.value]);
      },
      g = () => {
        if (e.showMark && v.value) return ge('div', { class: ga('month-mark') }, [e.date.getMonth() + 1]);
      },
      y = pe(() => {
        const e = Math.ceil((m.value + d.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      b = pe(() => {
        const t = [],
          a = e.date.getFullYear(),
          l = e.date.getMonth();
        for (let n = 1; n <= m.value; n++) {
          const o = new Date(a, l, n),
            i = f(o);
          let r = { date: o, type: i, text: n, bottomInfo: p(i) };
          (e.formatter && (r = e.formatter(r)), t.push(r));
        }
        return t;
      }),
      D = pe(() => b.value.filter((e) => 'disabled' === e.type)),
      A = (l, n) =>
        ge(
          La,
          {
            item: l,
            index: n,
            color: e.color,
            offset: d.value,
            rowHeight: c.value,
            onClick: (e) => t('click', e),
            onClickDisabledDate: (e) => t('clickDisabledDate', e),
          },
          q(a, ['top-info', 'bottom-info', 'text']),
        );
    return (
      r({
        getTitle: () => u.value,
        getHeight: () => s.value,
        setVisible: n,
        scrollToDate: (e, t) => {
          if (o.value) {
            const a = M(o.value),
              l = y.value.length,
              n = ((Math.ceil((t.getDate() + d.value) / 7) - 1) * a.height) / l;
            S(e, a.top + n + e.scrollTop - M(e).top);
          }
        },
        disabledDays: D,
      }),
      () =>
        ge('div', { class: ga('month'), ref: i }, [
          h(),
          ge('div', { ref: o, role: 'grid', class: ga('days') }, [g(), (v.value ? b : y).value.map(A)]),
        ])
    );
  },
});
const [Ya] = v('calendar-header');
var Ga = ve({
  name: Ya,
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
    const l = pe(() => e.date && e.minDate && ba(ka(e.date), e.minDate) < 0),
      n = pe(() => e.date && e.minDate && ba(Ca(e.date), e.minDate) < 0),
      o = pe(() => e.date && e.maxDate && ba(Ia(e.date), e.maxDate) > 0),
      i = pe(() => e.date && e.maxDate && ba(Ea(e.date), e.maxDate) > 0),
      r = () => {
        if (e.showTitle) {
          const a = e.title || ya('title'),
            l = t.title ? t.title() : a;
          return ge('div', { class: ga('header-title') }, [l]);
        }
      },
      s = (e) => a('clickSubtitle', e),
      u = (e) => a('panelChange', e),
      c = (a) => {
        const r = 'year-month' === e.switchMode,
          s = t[a ? 'next-month' : 'prev-month'],
          c = t[a ? 'next-year' : 'prev-year'],
          d = a ? o.value : l.value,
          m = a ? i.value : n.value,
          v = a ? 'arrow' : 'arrow-left',
          f = a ? 'arrow-double-right' : 'arrow-double-left',
          p = ge('view', { class: ga('header-action', { disabled: d }), onClick: d ? void 0 : () => u((a ? Ia : ka)(e.date)) }, [
            s ? s({ disabled: d }) : ge(ee, { class: { [_]: !d }, name: v }, null),
          ]),
          h =
            r &&
            ge('view', { class: ga('header-action', { disabled: m }), onClick: m ? void 0 : () => u((a ? Ea : Ca)(e.date)) }, [
              c ? c({ disabled: m }) : ge(ee, { class: { [_]: !m }, name: f }, null),
            ]);
        return a ? [p, h] : [h, p];
      },
      d = () => {
        if (e.showSubtitle) {
          const a = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            l = 'none' !== e.switchMode;
          return ge('div', { class: ga('header-subtitle', { 'with-switch': l }), onClick: s }, [
            l ? [c(), ge('div', { class: ga('header-subtitle-text') }, [a]), c(!0)] : a,
          ]);
        }
      },
      m = () => {
        const { firstDayOfWeek: t } = e,
          a = ya('weekdays'),
          l = [...a.slice(t, 7), ...a.slice(0, t)];
        return ge('div', { class: ga('weekdays') }, [l.map((e) => ge('span', { class: ga('weekday') }, [e]))]);
      };
    return () => ge('div', { class: ga('header') }, [r(), d(), m()]);
  },
});
const Va = V(
  ve({
    name: ha,
    props: {
      show: Boolean,
      type: E('single'),
      switchMode: E('none'),
      title: String,
      color: String,
      round: P,
      readonly: Boolean,
      poppable: P,
      maxRange: C(null),
      position: E('bottom'),
      teleport: [String, Object],
      showMark: P,
      showTitle: P,
      formatter: Function,
      rowHeight: b,
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
      minDate: { type: Date, validator: me },
      maxDate: { type: Date, validator: me },
      firstDayOfWeek: { type: b, default: 0, validator: (e) => e >= 0 && e <= 6 },
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
      const n = pe(() => 'none' !== e.switchMode),
        o = pe(() => (e.minDate || n.value ? e.minDate : Ha())),
        i = pe(() => (e.maxDate || n.value ? e.maxDate : wa(Ha(), 6))),
        s = (e, t = o.value, a = i.value) => (t && -1 === Da(e, t) ? t : a && 1 === Da(e, a) ? a : e),
        u = (t = e.defaultDate) => {
          const { type: a, allowSameDay: l } = e;
          if (null === t) return t;
          const n = Ha();
          if ('range' === a) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === Da(t[0], n) && (t = []));
            const e = o.value,
              a = i.value;
            return [s(t[0] || n, e, a ? (l ? a : Oa(a)) : void 0), s(t[1] || (l ? n : Sa(n)), e ? (l ? e : Sa(e)) : void 0)];
          }
          return 'multiple' === a ? (Array.isArray(t) ? t.map((e) => s(e)) : [s(n)]) : ((t && !Array.isArray(t)) || (t = n), s(t));
        };
      let c;
      const v = fe(),
        f = fe(u()),
        p = fe(
          (() => {
            const e = Array.isArray(f.value) ? f.value[0] : f.value;
            return e || s(Ha());
          })(),
        ),
        h = fe(),
        [g, y] = At(),
        b = pe(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        D = pe(() => {
          const e = [];
          if (!o.value || !i.value) return e;
          const t = new Date(o.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== ba(t, i.value));
          return e;
        }),
        A = pe(() => {
          if (f.value) {
            if ('range' === e.type) return !f.value[0] || !f.value[1];
            if ('multiple' === e.type) return !f.value.length;
          }
          return !f.value;
        }),
        N = () => {
          const e = O(v.value),
            a = e + c,
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
        _ = (e) => {
          n.value
            ? (p.value = e)
            : w(() => {
                (D.value.some((t, a) => 0 === ba(t, e) && (v.value && g.value[a].scrollToDate(v.value, e), !0)), N());
              });
        },
        x = () => {
          if (!e.poppable || e.show)
            if (f.value) {
              const t = 'single' === e.type ? f.value : f.value[0];
              me(t) && _(t);
            } else n.value || w(N);
        },
        S = () => {
          (e.poppable && !e.show) ||
            (n.value ||
              w(() => {
                c = Math.floor(M(v).height);
              }),
            x());
        },
        k = (e = u()) => {
          ((f.value = e), x());
        },
        C = (e) => {
          ((p.value = e), t('panelChange', { date: e }));
        },
        E = () => {
          var e;
          return t('confirm', null != (e = f.value) ? e : Na(f.value));
        },
        H = (a, l) => {
          const n = (e) => {
            ((f.value = e), t('select', Na(e)));
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
                (o && m(n || ya('rangePrompt', l)), t('overRange'), 1)
              );
            })(a);
            if (!l) return void n([a[0], _a(a[0], +e.maxRange - 1)]);
          }
          (n(a), l && !e.showConfirm && E());
        },
        T = pe(() =>
          g.value.reduce((e, t) => {
            var a, l;
            return (e.push(...(null != (l = null == (a = t.disabledDays) ? void 0 : a.value) ? l : [])), e);
          }, []),
        ),
        L = (a) => {
          if (e.readonly || !a.date) return;
          const { date: l } = a,
            { type: n } = e;
          if ('range' === n) {
            if (!f.value) return void H([l]);
            const [t, a] = f.value;
            if (t && !a) {
              const a = Da(l, t);
              if (1 === a) {
                const e = ((e, t, a) => {
                  var l;
                  return null == (l = e.find((e) => -1 === Da(t, e.date) && -1 === Da(e.date, a))) ? void 0 : l.date;
                })(T.value, t, l);
                if (e) {
                  const a = Oa(e);
                  -1 === Da(t, a) ? H([t, a]) : H([l]);
                } else H([t, l], !0);
              } else -1 === a ? H([l]) : e.allowSameDay && H([l, l], !0);
            } else H([l]);
          } else if ('multiple' === n) {
            if (!f.value) return void H([l]);
            const a = f.value,
              n = a.findIndex((e) => 0 === Da(e, l));
            if (-1 !== n) {
              const [e] = a.splice(n, 1);
              t('unselect', Aa(e));
            } else e.maxRange && a.length >= +e.maxRange ? m(e.rangePrompt || ya('rangePrompt', e.maxRange)) : H([...a, l]);
          } else H(l, !0);
        },
        $ = (e) => t('clickOverlay', e),
        Y = (e) => t('update:show', e),
        G = (l, r) => {
          const s = 0 !== r || !e.showSubtitle;
          return ge(
            Ma,
            Ce(
              {
                ref: n.value ? h : y(r),
                date: l,
                currentDate: f.value,
                showMonthTitle: s,
                firstDayOfWeek: b.value,
                lazyRender: !n.value && e.lazyRender,
                maxDate: i.value,
                minDate: o.value,
              },
              q(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: L, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            q(a, ['top-info', 'bottom-info', 'month-title', 'text']),
          );
        },
        V = () => {
          if (a.footer) return a.footer();
          if (e.showConfirm) {
            const t = a['confirm-text'],
              n = A.value,
              o = n ? e.confirmDisabledText : e.confirmText;
            return ge(
              l,
              {
                round: !0,
                block: !0,
                type: 'primary',
                color: e.color,
                class: ga('confirm'),
                disabled: n,
                nativeType: 'button',
                onClick: E,
              },
              { default: () => [t ? t({ disabled: n }) : o || ya('confirm')] },
            );
          }
        },
        P = () => {
          var l, r;
          return ge('div', { class: ga() }, [
            ge(
              Ga,
              {
                date: null == (l = h.value) ? void 0 : l.date,
                maxDate: i.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (r = h.value) ? void 0 : r.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: b.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: C,
              },
              q(a, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            ge('div', { ref: v, class: ga('body'), onScroll: n.value ? void 0 : N }, [n.value ? G(p.value, 0) : D.value.map(G)]),
            ge('div', { class: [ga('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [V()]),
          ]);
        };
      return (
        _e(() => e.show, S),
        _e(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => k(u(f.value)),
        ),
        _e(
          () => e.defaultDate,
          (e) => {
            k(e);
          },
        ),
        r({ reset: k, scrollToDate: _, getSelectedDate: () => f.value }),
        I(S),
        () =>
          e.poppable
            ? ge(
                d,
                {
                  show: e.show,
                  class: ga('popup'),
                  round: e.round,
                  position: e.position,
                  closeable: e.showTitle || e.showSubtitle,
                  teleport: e.teleport,
                  closeOnPopstate: e.closeOnPopstate,
                  safeAreaInsetTop: e.safeAreaInsetTop,
                  closeOnClickOverlay: e.closeOnClickOverlay,
                  onClickOverlay: $,
                  'onUpdate:show': Y,
                },
                { default: P },
              )
            : P()
      );
    },
  }),
);
function Pa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Ba,
  Ua = { exports: {} };
const Ra = Pa(
    (Ba ||
      ((Ba = 1),
      (Ua.exports = (function () {
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
                i = t.clone().add(l + (o ? -1 : 1), u);
              return +(-(l + (a - n) / (o ? n - i : i - n)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (e) {
              return (
                { M: u, y: d, w: s, d: r, D: m, h: i, m: o, s: n, ms: l, Q: c }[e] ||
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
            return e instanceof O || !(!e || !e[A]);
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
            return ((a.date = e), (a.args = arguments), new O(a));
          },
          x = y;
        ((x.l = _),
          (x.i = N),
          (x.w = function (e, t) {
            return w(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
          }));
        var O = (function () {
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
                  if (x.u(t)) return new Date();
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
                return x;
              }),
              (g.isValid = function () {
                return !(this.$d.toString() === v);
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
                return x.u(e) ? this[t] : this.set(a, e);
              }),
              (g.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (g.valueOf = function () {
                return this.$d.getTime();
              }),
              (g.startOf = function (e, t) {
                var a = this,
                  l = !!x.u(t) || t,
                  c = x.p(e),
                  v = function (e, t) {
                    var n = x.w(a.$u ? Date.UTC(a.$y, t, e) : new Date(a.$y, t, e), a);
                    return l ? n : n.endOf(r);
                  },
                  f = function (e, t) {
                    return x.w(a.toDate()[e].apply(a.toDate('s'), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), a);
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
                  case r:
                  case m:
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
                  s = x.p(e),
                  c = 'set' + (this.$u ? 'UTC' : ''),
                  v = ((a = {}),
                  (a[r] = c + 'Date'),
                  (a[m] = c + 'Date'),
                  (a[u] = c + 'Month'),
                  (a[d] = c + 'FullYear'),
                  (a[i] = c + 'Hours'),
                  (a[o] = c + 'Minutes'),
                  (a[n] = c + 'Seconds'),
                  (a[l] = c + 'Milliseconds'),
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
                return this[x.p(e)]();
              }),
              (g.add = function (l, c) {
                var m,
                  v = this;
                l = Number(l);
                var f = x.p(c),
                  p = function (e) {
                    var t = w(v);
                    return x.w(t.date(t.date() + Math.round(e * l)), v);
                  };
                if (f === u) return this.set(u, this.$M + l);
                if (f === d) return this.set(d, this.$y + l);
                if (f === r) return p(1);
                if (f === s) return p(7);
                var h = ((m = {}), (m[o] = t), (m[i] = a), (m[n] = e), m)[f] || 1,
                  g = this.$d.getTime() + l * h;
                return x.w(g, this);
              }),
              (g.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (g.format = function (e) {
                var t = this,
                  a = this.$locale();
                if (!this.isValid()) return a.invalidDate || v;
                var l = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  n = x.z(this),
                  o = this.$H,
                  i = this.$m,
                  r = this.$M,
                  s = a.weekdays,
                  u = a.months,
                  c = a.meridiem,
                  d = function (e, a, n, o) {
                    return (e && (e[a] || e(t, l))) || n[a].slice(0, o);
                  },
                  m = function (e) {
                    return x.s(o % 12 || 12, e, '0');
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
                          return x.s(t.$y, 4, '0');
                        case 'M':
                          return r + 1;
                        case 'MM':
                          return x.s(r + 1, 2, '0');
                        case 'MMM':
                          return d(a.monthsShort, r, u, 3);
                        case 'MMMM':
                          return d(u, r);
                        case 'D':
                          return t.$D;
                        case 'DD':
                          return x.s(t.$D, 2, '0');
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
                          return x.s(o, 2, '0');
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
                          return x.s(i, 2, '0');
                        case 's':
                          return String(t.$s);
                        case 'ss':
                          return x.s(t.$s, 2, '0');
                        case 'SSS':
                          return x.s(t.$ms, 3, '0');
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
                  h = x.p(m),
                  g = w(l),
                  y = (g.utcOffset() - this.utcOffset()) * t,
                  b = this - g,
                  D = function () {
                    return x.m(p, g);
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
                return v ? f : x.a(f);
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
          (w.prototype = S),
          [
            ['$ms', l],
            ['$s', n],
            ['$m', o],
            ['$H', i],
            ['$W', r],
            ['$M', u],
            ['$y', d],
            ['$D', m],
          ].forEach(function (e) {
            S[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (w.extend = function (e, t) {
            return (e.$i || (e(t, O, w), (e.$i = !0)), w);
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
    Ua.exports),
  ),
  za = [
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
        const t = Ra(e);
        return 1 == t.month() && t.date() >= 14 && t.date() <= 24;
      },
      needLink: !0,
      book: { earlyDaysNum: 19, description: '需提前 20 天及以上预定' },
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
  ];
function ja(e) {
  const t = Ra(e).day();
  return 0 === t || 6 === t;
}
const Xa = (e, t) => 5 * Math.ceil(Number.parseFloat(e) / 5) + Number.parseFloat(t + ''),
  Za = (e, t, a) => `${e[a].num ? e[a].num + t.find((e) => e.category === a).simpleText : ''}`,
  Ka = [
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { useDate: t, personCounts: a, counts: l, summaries: n, diffAmount: o } = e,
          i = Ra(t).diff(new Date(), 'd');
        let r = `${t} ${Ra(t).format('dddd')} ${Za(a, l, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${Za(a, l, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${Za(a, l, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
        const s = { price: 99999999, description: '' };
        for (const u in n) {
          const e = n[u],
            t = Xa(e.amount, o[u]);
          e.book.earlyDaysNum <= i && s.price > t && ((s.price = t), (s.description = e.book.description));
        }
        return ((r += `\n报价：${s.price}\n${s.description}`), r);
      },
      orderPriority: -1e3,
    },
    {
      enabled: !1,
      condition: (e) => {
        const { useDate: t, personCounts: a } = e;
        return (
          (ja(t) && a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 1) ||
          (!ja(t) && a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + a.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 2)
        );
      },
      action: () => '\n\n不升级年卡，您可以自己买官方的半价一小\n工作日 150，节假日 175',
      orderPriority: 100,
    },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  qa = { class: 'form-group' },
  Ja = { class: 'form-group' },
  Qa = { class: 'counter-label' },
  el = { class: 'counter-controls' },
  tl = ['onClick'],
  al = { class: 'counter-value' },
  ll = ['onClick'],
  nl = { class: 'form-group' },
  ol = ['onClick'],
  il = ['onClick'],
  rl = { class: 'summary-item' },
  sl = { class: 'summary-value' },
  ul = { class: 'summary-item' },
  cl = { class: 'summary-value' },
  dl = { class: 'summary-item' },
  ml = { class: 'summary-value' },
  vl = { class: 'summary-item' },
  fl = { class: 'summary-value' },
  pl = { class: 'summary-item' },
  hl = { class: 'summary-value' },
  gl = { class: 'summary-item' },
  yl = { class: 'summary-value' },
  bl = Be(
    ve({
      __name: 'calculator',
      setup(e) {
        const t = Se('useDate', fe('')),
          a = fe([]),
          o = () => {
            a.value.forEach((e) => {
              e.num = 0;
            });
            for (const e in r.value) r.value[e] = 0;
          },
          i = fe({ costPlatform: 0.02 }),
          r = fe({}),
          s = fe({}),
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
        (_e([t], () => {
          (u(), f());
        }),
          _e(
            [a, i],
            () => {
              f();
            },
            { deep: !0 },
          ));
        const c = (e, t) => {
            (0 === e.num && t < 0) || (e.num += t);
          },
          d = (e, t) => {
            (0 === r.value[e] && t < 0) || (r.value[e] = (100 * r.value[e] + 100 * t) / 100);
          };
        const v = pe(() => {
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
            if (0 == e.length) return void m('Product data not found');
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
                for (const a in v.value) {
                  const o = v.value[a],
                    i = e.get(o.reference[t]);
                  ((l += o.num * i.preferSaleAmount), (n += o.num * i.originalPrice));
                }
              else
                for (const t of a.value) {
                  const a = e.get(t.category);
                  ((l += t.num * a.preferSaleAmount), (n += t.num * a.originalPrice));
                }
              ((l += Number.parseFloat(r.value[t] + '')), (u = l * i.value.costPlatform), (o = c + u));
              const m = l - o - c;
              ((d.amount = l.toFixed(2)),
                (d.originalAmount = n.toFixed(2)),
                (d.costPlatform = u.toFixed(2)),
                (d.commission = c.toFixed(2)),
                (d.totalCost = o.toFixed(2)),
                (d.profit = m.toFixed(2)));
            }
        }
        const p = () => {
            let e = '';
            const l = { useDate: t.value, personCounts: v.value, counts: a.value, summaries: s.value, diffAmount: r.value };
            for (const t of Ka) t.condition(l) && (e += t.action(l));
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
            (u(), f());
          }),
          (e, n) => {
            const i = l,
              u = pa;
            return (
              Ge(),
              Te('div', null, [
                Le('div', qa, [
                  n[0] || (n[0] = Le('label', null, '快捷操作', -1)),
                  (Ge(),
                  Te(
                    $e,
                    null,
                    Me(h, (e) =>
                      ge(
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
                                    we(() => {
                                      p();
                                    }));
                                })(e.name),
                          key: e.name,
                        },
                        { default: Ve(() => [He(Pe(e.name), 1)]), _: 2 },
                        1032,
                        ['onClick'],
                      ),
                    ),
                    64,
                  )),
                ]),
                Le('div', Ja, [
                  n[1] || (n[1] = Le('label', null, '选择人数', -1)),
                  (Ge(!0),
                  Te(
                    $e,
                    null,
                    Me(
                      Ye(a),
                      (e) => (
                        Ge(),
                        Te('div', { class: 'counter-group', key: e.category }, [
                          Le('span', Qa, Pe(e.label), 1),
                          Le('div', el, [
                            Le('button', { class: 'counter-btn', onClick: (t) => c(e, -1) }, '−', 8, tl),
                            Le('span', al, Pe(e.num), 1),
                            Le('button', { class: 'counter-btn', onClick: (t) => c(e, 1) }, '+', 8, ll),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                Le('div', nl, [
                  n[2] || (n[2] = Le('label', null, '差价', -1)),
                  (Ge(!0),
                  Te(
                    $e,
                    null,
                    Me(
                      Ye(s),
                      (e, t) => (
                        Ge(),
                        Te('div', { class: 'counter-group', key: t }, [
                          Le('button', { class: 'counter-btn', onClick: (e) => d(t, -5) }, '−', 8, ol),
                          ge(
                            u,
                            { modelValue: Ye(r)[t], 'onUpdate:modelValue': (e) => (Ye(r)[t] = e), type: 'number', label: e.name },
                            null,
                            8,
                            ['modelValue', 'onUpdate:modelValue', 'label'],
                          ),
                          Le('button', { class: 'counter-btn', onClick: (e) => d(t, 5) }, '+', 8, il),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                (Ge(!0),
                Te(
                  $e,
                  null,
                  Me(
                    Ye(s),
                    (e, t) => (
                      Ge(),
                      Te('div', { class: 'summary', key: t }, [
                        Le('h2', null, '💰 费用汇总-' + Pe(e.name), 1),
                        Le('div', rl, [
                          n[4] || (n[4] = Le('span', { class: 'summary-label' }, '总金额', -1)),
                          Le('span', sl, [n[3] || (n[3] = He(' ¥', -1)), Le('span', null, Pe(e.amount), 1)]),
                        ]),
                        Le('div', ul, [
                          n[6] || (n[6] = Le('span', { class: 'summary-label' }, '官方票价', -1)),
                          Le('span', cl, [n[5] || (n[5] = He(' ¥', -1)), Le('span', null, Pe(e.originalAmount), 1)]),
                        ]),
                        Le('div', dl, [
                          n[8] || (n[8] = Le('span', { class: 'summary-label' }, '总佣金', -1)),
                          Le('span', ml, [n[7] || (n[7] = He(' ¥', -1)), Le('span', null, Pe(e.commission), 1)]),
                        ]),
                        Le('div', vl, [
                          n[10] || (n[10] = Le('span', { class: 'summary-label' }, '总成本-平台', -1)),
                          Le('span', fl, [n[9] || (n[9] = He(' ¥', -1)), Le('span', null, Pe(e.costPlatform), 1)]),
                        ]),
                        Le('div', pl, [
                          n[12] || (n[12] = Le('span', { class: 'summary-label' }, '总成本', -1)),
                          Le('span', hl, [n[11] || (n[11] = He(' ¥', -1)), Le('span', null, Pe(e.totalCost), 1)]),
                        ]),
                        Le('div', gl, [
                          n[14] || (n[14] = Le('span', { class: 'summary-label' }, '总利润', -1)),
                          Le('span', yl, [n[13] || (n[13] = He(' ¥', -1)), Le('span', null, Pe(e.profit), 1)]),
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
    [['__scopeId', 'data-v-6bffcac1']],
  ),
  Dl = [
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { orderId: t } = e;
        return [`订单 ${t} CNY `];
      },
      orderPriority: -1e3,
    },
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
      orderPriority: 1e3,
    },
    { enabled: !1, condition: () => !0, action: () => [], orderPriority: 50 },
    { enabled: !1, condition: () => !1, action: () => [], orderPriority: 60 },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  Al = [',', '，', '（', '）', '：', '；', '。'],
  Nl = { class: 'content' },
  _l = { class: 'input-group' },
  wl = { class: 'input-wrapper' },
  xl = { class: 'input-group' },
  Ol = { class: 'input-wrapper' },
  Sl = { class: 'input-group' },
  kl = ve({
    __name: 'identifyLint',
    setup(e) {
      const t = Se('useDate', fe('')),
        a = fe(''),
        n = fe([]),
        o = fe(''),
        i = fe(''),
        r = fe(!1),
        s = fe(!1),
        u = fe([]),
        c = fe([]),
        v = fe(),
        f = fe(''),
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
        y = [];
      for (const l in p) g.push({ text: p[l].fullName, value: p[l].shortName });
      for (const l in h) y.push({ text: h[l].fullName, value: h[l].shortName });
      ((u.value = [g[0].value]), (c.value = [y[0].value]));
      const b = (e) => {
          if (18 !== e.length) return null;
          return { birthday: `${e.slice(6, 4)}-${e.slice(10, 2)}-${e.slice(12, 2)}`, ...D(e.slice(6, 14)) };
        },
        D = (e) => {
          const a = Ra(t.value).diff(e, 'y');
          return a < 2
            ? { ticketType: '免票', orderPriority: 0 }
            : a <= 12
              ? { ticketType: '儿童', orderPriority: 2 }
              : a < 60
                ? { ticketType: '成人', orderPriority: 1 }
                : { ticketType: '老人', orderPriority: 3 };
        },
        A = (e) => {
          if (!e) return { type: p.UNKNOWN.shortName, valid: !1, message: '输入不能为空' };
          const t = e.trim();
          if (/^\d{15}$|^\d{17}[\dXx]$/.test(t)) {
            const e = ((e) => {
              if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(e)) return !1;
              const t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
              let a = 0;
              for (let l = 0; l < 17; l++) a += Number.parseInt(e[l]) * t[l];
              return ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'][a % 11] === e[17].toUpperCase();
            })(t);
            return { type: p.CHINA_ID.shortName, valid: e, message: e ? '有效的身份证号码' : '身份证号码校验失败', details: b(t) };
          }
          return /^[CHM]\d{8,10}$/.test(t)
            ? { type: p.HK_MACAU_PASS.shortName }
            : ((e) => /^\d{8,10}$/.test(e))(t)
              ? { type: p.TAIWAN_PASS.shortName, valid: !0, message: '台湾通行证' }
              : ((e) => /^[EG]\d{8}$/.test(e) || /^[A-Z]{1,2}\d{6,9}$/.test(e))(t)
                ? { type: p.PASSPORT.shortName, valid: !0, message: '护照号码' }
                : { type: p.UNKNOWN.shortName, valid: !1, message: '无法识别的输入类型' };
        },
        N = () => {
          (n.value.forEach((e) => {
            const t = A(e.id);
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
        _ = () => {
          let e = a.value;
          Al.forEach((t) => {
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
        x = ({ selectedValues: e }) => {
          ((v.value.idType = e[0]), S());
        },
        O = ({ selectedValues: e }) => {
          ((v.value.ticketType = e[0]), k());
        },
        S = () => {
          ((r.value = !1), (v.value = {}));
        },
        k = () => {
          ((s.value = !1), (v.value = {}));
        },
        I = () => {
          if ('' === f.value.trim()) return void m('Order id must not blank');
          let e = [];
          const a = { useDate: t.value, remainPersons: Array.from(n.value), orderId: f.value };
          for (const t of Dl) t.condition(a) && (e = e.concat(t.action(a)));
          navigator.clipboard.writeText(e.join('\n'));
        },
        C = () => {
          ((a.value = ''), (n.value = []), (f.value = ''), (o.value = ''), (i.value = ''));
        };
      return (e, t) => {
        const m = pa,
          p = l,
          h = ta,
          b = d;
        return (
          Ge(),
          Te('div', Nl, [
            Le('div', _l, [
              Le('div', wl, [
                t[6] || (t[6] = Le('div', null, '订单 ID', -1)),
                ge(
                  m,
                  {
                    type: 'text',
                    label: '订单 ID',
                    'label-align': 'top',
                    modelValue: Ye(f),
                    'onUpdate:modelValue': t[0] || (t[0] = (e) => (Ue(f) ? (f.value = e) : null)),
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
              ]),
            ]),
            Le('div', xl, [
              Le('div', Ol, [
                ge(
                  m,
                  {
                    type: 'textarea',
                    label: '身份信息',
                    'label-align': 'top',
                    modelValue: Ye(a),
                    'onUpdate:modelValue': t[1] || (t[1] = (e) => (Ue(a) ? (a.value = e) : null)),
                    rows: '10',
                    onKeyup: Re(N, ['enter']),
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                Le('div', null, '票种统计：' + Pe(Ye(o)), 1),
                Le('div', null, 'ID 统计：' + Pe(Ye(i)), 1),
                ge(
                  p,
                  { onClick: _, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[7] || (t[7] = [He('分割', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: N, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[8] || (t[8] = [He('自动识别', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: I, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[9] || (t[9] = [He('复制', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: w, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[10] || (t[10] = [He('互换', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: C, type: 'primary', size: 'small' },
                  { default: Ve(() => [...(t[11] || (t[11] = [He('清空', -1)]))]), _: 1 },
                ),
              ]),
            ]),
            Le('div', Sl, [
              (Ge(!0),
              Te(
                $e,
                null,
                Me(
                  Ye(n),
                  (e, a) => (
                    Ge(),
                    Te('div', { key: e.name }, [
                      ge(m, { modelValue: e.name, 'onUpdate:modelValue': (t) => (e.name = t), label: '姓名', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ge(m, { modelValue: e.id, 'onUpdate:modelValue': (t) => (e.id = t), label: 'ID', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ge(
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
                      ge(m, { modelValue: e.idValid, 'onUpdate:modelValue': (t) => (e.idValid = t), label: 'ID 状态' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      ge(
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
                      ge(
                        p,
                        { onClick: (e) => w(a), type: 'primary', size: 'small' },
                        { default: Ve(() => [...(t[12] || (t[12] = [He('互换', -1)]))]), _: 1 },
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
              b,
              { show: Ye(r), 'onUpdate:show': t[3] || (t[3] = (e) => (Ue(r) ? (r.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ve(() => [
                  ge(
                    h,
                    {
                      columns: g,
                      modelValue: Ye(u),
                      'onUpdate:modelValue': t[2] || (t[2] = (e) => (Ue(u) ? (u.value = e) : null)),
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
              b,
              { show: Ye(s), 'onUpdate:show': t[5] || (t[5] = (e) => (Ue(s) ? (s.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ve(() => [
                  ge(
                    h,
                    {
                      columns: y,
                      modelValue: Ye(c),
                      'onUpdate:modelValue': t[4] || (t[4] = (e) => (Ue(c) ? (c.value = e) : null)),
                      onCancel: k,
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
  Il = [
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
  Cl = [
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
  El = ve({
    __name: 'term',
    setup(e) {
      const t = fe(''),
        a = fe([]),
        n = Cl.filter((e) => void 0 === e.visible || e.visible);
      (_e([t], () => {
        a.value = Il.filter((e) => void 0 === e.visible || e.visible).filter((e) => !e.attraction || e.attraction === t.value);
      }),
        xe(() => {
          t.value = 'SHANGHAI_LEGOLAND';
        }));
      return (e, o) => {
        const i = l,
          r = Kt,
          s = qt;
        return (
          Ge(),
          ze(
            s,
            { active: Ye(t), 'onUpdate:active': o[0] || (o[0] = (e) => (Ue(t) ? (t.value = e) : null)) },
            {
              default: Ve(() => [
                (Ge(!0),
                Te(
                  $e,
                  null,
                  Me(
                    Ye(n),
                    (e) => (
                      Ge(),
                      ze(
                        r,
                        { title: e.attractionSimpleName, name: e.attractionCode, key: e.attractionCode },
                        {
                          default: Ve(() => [
                            (Ge(!0),
                            Te(
                              $e,
                              null,
                              Me(
                                Ye(a),
                                (e) => (
                                  Ge(),
                                  Te('div', { key: e.fullText }, [
                                    Le('div', null, [Le('span', null, Pe(e.simpleText), 1)]),
                                    Le('div', null, [
                                      ge(
                                        i,
                                        {
                                          onClick: (t) =>
                                            ((e) => {
                                              e.func
                                                ? navigator.clipboard.writeText(e.func())
                                                : navigator.clipboard.writeText(e.fullText || '');
                                            })(e),
                                        },
                                        { default: Ve(() => [...(o[1] || (o[1] = [He('复制', -1)]))]), _: 1 },
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
  Hl = ve({
    __name: 'tools',
    setup(e) {
      const t = fe('calculator'),
        a = fe({ text: '', value: '' }),
        i = fe({ text: '', value: '' }),
        r = fe({}),
        s = fe(!1),
        u = fe([]),
        c = fe([]),
        m = fe([]),
        v = fe(0),
        f = [
          { label: '成人', num: 0, ratio: 0.55, amount: 0 },
          { label: '儿童', num: 0, ratio: 0.45, amount: 0 },
          { label: '老人', num: 0, ratio: 0.45, amount: 0 },
        ];
      let p = (e) => {};
      const h = () => {
          ((s.value = !0),
            (u.value = Cl.map((e) => ({ text: e.attractionSimpleName, value: e.attractionCode }))),
            (p = (e) => {
              ((a.value.value = e[0]),
                (a.value.text = Cl.find((e) => e.attractionCode === a.value.value)?.attractionSimpleName),
                (r.value.attraction = a.value.text));
            }));
        },
        g = () => {
          ((s.value = !0),
            (u.value = m.value.map((e) => ({ text: e.productCategoryName, value: e.productCategoryCode }))),
            (p = (e) => {
              ((i.value.value = e[0]),
                (i.value.text = o.data.find((e) => e.productCategoryCode === i.value.value)?.productCategoryName),
                (r.value.productCategory = i.value.text));
            }));
        },
        y = ({ selectedValues: e }) => {
          (b(), p(e));
        },
        b = () => {
          s.value = !1;
        },
        D = (e) => {
          const t = Ra(e.date),
            l = n.data.find(
              (e) =>
                e.useDate === t.format('YYYY-MM-DD') &&
                e.attractionProductCategoryFullCode.replace(a.value.value + '_', '') === i.value.value,
            );
          return (void 0 !== l && ((e.topInfo = l?.originalPrice + ''), (e.bottomInfo = l?.preferSaleAmount + '')), e);
        };
      return (
        xe(() => {
          m.value = o.data.filter((e) => void 0 === e.visible || e.visible);
        }),
        (e, n) => {
          const o = pa,
            r = Va,
            m = ta,
            p = d,
            A = Kt,
            N = l,
            _ = qt;
          return (
            Ge(),
            Te('div', null, [
              ge(
                _,
                { active: Ye(t), 'onUpdate:active': n[5] || (n[5] = (e) => (Ue(t) ? (t.value = e) : null)) },
                {
                  default: Ve(() => [
                    ge(
                      A,
                      { title: '日历价', name: 'calendarPrice', key: 'calendarPrice' },
                      {
                        default: Ve(() => [
                          ge(
                            o,
                            {
                              modelValue: Ye(a).text,
                              'onUpdate:modelValue': n[0] || (n[0] = (e) => (Ye(a).text = e)),
                              'is-link': '',
                              readonly: '',
                              label: '景区',
                              onClick: h,
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              modelValue: Ye(i).text,
                              'onUpdate:modelValue': n[1] || (n[1] = (e) => (Ye(i).text = e)),
                              'is-link': '',
                              readonly: '',
                              label: '票种',
                              onClick: g,
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(r, { poppable: !1, 'show-confirm': !1, style: { height: '500px' }, formatter: D }),
                          ge(
                            p,
                            {
                              show: Ye(s),
                              'onUpdate:show': n[3] || (n[3] = (e) => (Ue(s) ? (s.value = e) : null)),
                              round: '',
                              position: 'bottom',
                            },
                            {
                              default: Ve(() => [
                                ge(
                                  m,
                                  {
                                    columns: Ye(u),
                                    modelValue: Ye(c),
                                    'onUpdate:modelValue': n[2] || (n[2] = (e) => (Ue(c) ? (c.value = e) : null)),
                                    onCancel: b,
                                    onConfirm: y,
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
                      A,
                      { title: '均价', name: 'avg', key: 'avg' },
                      {
                        default: Ve(() => [
                          ge(
                            o,
                            { modelValue: Ye(v), 'onUpdate:modelValue': n[4] || (n[4] = (e) => (Ue(v) ? (v.value = e) : null)) },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          (Ge(),
                          Te(
                            $e,
                            null,
                            Me(f, (e, t) =>
                              ge(o, { modelValue: e.num, 'onUpdate:modelValue': (t) => (e.num = t), key: t, label: e.label }, null, 8, [
                                'modelValue',
                                'onUpdate:modelValue',
                                'label',
                              ]),
                            ),
                            64,
                          )),
                          (Ge(),
                          Te(
                            $e,
                            null,
                            Me(f, (e, t) => Le('div', { key: t }, Pe(e.label), 1)),
                            64,
                          )),
                          ge(N, null, { default: Ve(() => [...(n[6] || (n[6] = [He('复制', -1)]))]), _: 1 }),
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
  Tl = [
    { condition: () => !1, topInfo: '', bottomInfo: '', className: '' },
    { condition: () => !1, topInfo: '', bottomInfo: '', className: '' },
  ],
  Ll = [
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
    .concat(Tl),
  $l = { class: 'container' },
  Ml = { class: 'form-group' },
  Yl = Be(
    ve({
      __name: 'index',
      setup(e) {
        Ra.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = fe('calculator'),
          a = (e) => Ra(e).format('YYYY-MM-DD'),
          l = fe(a(new Date()));
        ke('useDate', l);
        const n = fe(!1),
          o = (e) => {
            ((n.value = !1), (l.value = a(e)));
          },
          i = (e) => {
            const t = Ra(e.date),
              a = Ll.find((e) => e.condition(t));
            return (void 0 !== a && ((e.topInfo = a?.topInfo), (e.bottomInfo = a?.bottomInfo), (e.className = a?.className)), e);
          };
        return (e, a) => {
          const r = oa,
            s = Va,
            u = Kt,
            c = qt;
          return (
            Ge(),
            Te('div', $l, [
              a[3] || (a[3] = Le('h1', null, '🎫 票务计算器', -1)),
              Le('div', Ml, [
                ge(r, { title: '选择日期', value: Ye(l), onClick: a[0] || (a[0] = (e) => (n.value = !0)) }, null, 8, ['value']),
                ge(
                  s,
                  { show: Ye(n), 'onUpdate:show': a[1] || (a[1] = (e) => (Ue(n) ? (n.value = e) : null)), onConfirm: o, formatter: i },
                  null,
                  8,
                  ['show'],
                ),
              ]),
              ge(
                c,
                { active: Ye(t), 'onUpdate:active': a[2] || (a[2] = (e) => (Ue(t) ? (t.value = e) : null)) },
                {
                  default: Ve(() => [
                    ge(u, { title: '票务', name: 'calculator', key: 'calculator' }, { default: Ve(() => [ge(bl)]), _: 1 }),
                    ge(u, { title: '证件', name: 'identifyLint', key: 'identifyLint' }, { default: Ve(() => [ge(kl)]), _: 1 }),
                    ge(u, { title: '工具', name: 'tools', key: 'tools' }, { default: Ve(() => [ge(Hl)]), _: 1 }),
                    ge(u, { title: '术语', name: 'term', key: 'term' }, { default: Ve(() => [ge(El)]), _: 1 }),
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
export { Yl as default };
