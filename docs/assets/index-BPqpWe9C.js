/* empty css              */ import { r as e, a as t, u as a, B as l } from './index-D5nZ1ZGV.js';
import { p as n } from './data-D-1yprxv.js';
import {
  c as o,
  e as i,
  i as r,
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
  o as A,
  k as N,
  l as w,
  q as _,
  v as x,
  g as O,
  x as S,
  y as k,
  z as T,
  A as H,
  w as I,
  t as C,
  C as L,
  D as E,
  E as $,
  F as M,
  G,
  J as V,
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
} from './index-DUkjMFJa.js';
import {
  d as oe,
  r as ie,
  e as re,
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
  i as Ae,
  P as Ne,
  v as we,
  D as _e,
  c as xe,
  a as Oe,
  F as Se,
  z as ke,
  u as Te,
  t as He,
  o as Ie,
  k as Ce,
  _ as Le,
  Q as Ee,
  x as $e,
  m as Me,
} from './index-BonFox_P.js';
import { u as Ge, a as Ve, c as Be, L as Pe, s as Ye, P as Re, b as Ue } from './function-call-C7UndjZ7.js';
import { u as ze } from './use-height-dBpvWD6T.js';
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
    let l, n, o, i, r;
    const u = ie(),
      c = ie(),
      d = ie(0),
      p = ie(0),
      h = Ge(),
      g = () => e.options.length,
      y = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
      b = (a) => {
        let n = qe(e.options, a);
        const o = -n * e.optionHeight,
          i = () => {
            n > g() - 1 && (n = qe(e.options, a));
            const l = e.options[n][e.fields.value];
            l !== e.value && t('change', l);
          };
        (l && o !== d.value ? (r = i) : i(), (d.value = o));
      },
      D = () => e.readonly || !e.options.length,
      A = (t) => s(Math.round(-t / e.optionHeight), 0, g() - 1),
      N = re(() => A(d.value)),
      w = () => {
        ((l = !1), (p.value = 0), r && (r(), (r = null)));
      },
      _ = (e) => {
        if (!D()) {
          if ((h.start(e), l)) {
            const e = (function (e) {
              const { transform: t } = window.getComputedStyle(e),
                a = t.slice(7, t.length - 1).split(', ')[5];
              return Number(a);
            })(c.value);
            d.value = Math.min(0, e - y());
          }
          ((p.value = 0), (n = d.value), (o = Date.now()), (i = n), (r = null));
        }
      },
      x = () => {
        if (D()) return;
        const t = d.value - i,
          a = Date.now() - o;
        if (a < 300 && Math.abs(t) > 15)
          return void ((t, a) => {
            const l = Math.abs(t / a);
            t = d.value + (l / 0.003) * (t < 0 ? -1 : 1);
            const n = A(t);
            ((p.value = +e.swipeDuration), b(n));
          })(t, a);
        const n = A(d.value);
        ((p.value = 200),
          b(n),
          setTimeout(() => {
            l = !1;
          }, 0));
      },
      O = () => {
        const n = { height: `${e.optionHeight}px` };
        return e.options.map((o, i) => {
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
                  l || D() || ((r = null), (p.value = 200), b(a), t('clickOption', e.options[a]));
                })(i),
            },
            m = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: s };
          return ue('li', d, [a.option ? a.option(o, i) : ue('div', m, null)]);
        });
      };
    return (
      m(et),
      Ve({ stopMomentum: w }),
      se(() => {
        const t = l ? Math.floor(-d.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          a = qe(e.options, t),
          n = -a * e.optionHeight;
        (l && a < t && w(), (d.value = n));
      }),
      v(
        'touchmove',
        (a) => {
          if (D()) return;
          (h.move(a), h.isVertical() && ((l = !0), f(a, !0)));
          const r = s(n + h.deltaY.value, -g() * e.optionHeight, e.optionHeight),
            u = A(r);
          (u !== N.value && t('scrollInto', e.options[u]), (d.value = r));
          const c = Date.now();
          c - o > 300 && ((o = c), (i = r));
        },
        { target: u },
      ),
      () =>
        ue('div', { ref: u, class: Qe(), onTouchstartPassive: _, onTouchend: x, onTouchcancel: x }, [
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
              onTransitionend: w,
            },
            [O()],
          ),
        ])
    );
  },
});
const [at] = o('picker-toolbar'),
  lt = { title: String, cancelButtonText: String, confirmButtonText: String },
  nt = ['cancel', 'confirm', 'title', 'toolbar'],
  ot = Object.keys(lt);
var it = oe({
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
      i = () => {
        var t;
        const l = null != (t = e.confirmButtonText) ? t : je('confirm');
        if (a.confirm || l) return ue('button', { type: 'button', class: [We('confirm'), p], onClick: n }, [a.confirm ? a.confirm() : l]);
      };
    return () =>
      ue('div', { class: We('toolbar') }, [
        a.toolbar
          ? a.toolbar()
          : [o(), a.title ? a.title() : e.title ? ue('div', { class: [We('title'), 'van-ellipsis'] }, [e.title]) : void 0, i()],
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
  const e = ce(),
    { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
  return `${t}-${++yt}`;
}
function Dt() {
  const e = ie([]),
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
function At(e, t) {
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
    A(() => {
      e.value && a.observe(e.value);
    }));
}
const [Nt, wt] = o('sticky');
const _t = I(
    oe({
      name: Nt,
      props: { zIndex: d, position: w('top'), container: Object, offsetTop: N(0), offsetBottom: N(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: a }) {
        const l = ie(),
          n = _(l),
          o = fe({ fixed: !1, width: 0, height: 0, transform: 0 }),
          r = ie(!1),
          s = re(() => x('top' === e.position ? e.offsetTop : e.offsetBottom)),
          u = re(() => {
            if (r.value) return;
            const { fixed: e, height: t, width: a } = o;
            return e ? { width: `${a}px`, height: `${t}px` } : void 0;
          }),
          c = re(() => {
            if (!o.fixed || r.value) return;
            const t = i(O(e.zIndex), { width: `${o.width}px`, height: `${o.height}px`, [e.position]: `${s.value}px` });
            return (o.transform && (t.transform = `translate3d(0, ${o.transform}px, 0)`), t);
          }),
          d = () => {
            if (!l.value || S(l)) return;
            const { container: a, position: n } = e,
              i = k(l),
              r = y(window);
            if (((o.width = i.width), (o.height = i.height), 'top' === n))
              if (a) {
                const e = k(a),
                  t = e.bottom - s.value - o.height;
                ((o.fixed = s.value > i.top && e.bottom > 0), (o.transform = t < 0 ? t : 0));
              } else o.fixed = s.value > i.top;
            else {
              const { clientHeight: e } = document.documentElement;
              if (a) {
                const t = k(a),
                  l = e - t.top - s.value - o.height;
                ((o.fixed = e - s.value < i.bottom && e > t.top), (o.transform = l < 0 ? -l : 0));
              } else o.fixed = e - s.value < i.bottom;
            }
            ((e) => {
              t('scroll', { scrollTop: e, isFixed: o.fixed });
            })(r);
          };
        return (
          pe(
            () => o.fixed,
            (e) => t('change', e),
          ),
          v('scroll', d, { target: n, passive: !0 }),
          At(l, d),
          pe([T, H], () => {
            l.value &&
              !S(l) &&
              o.fixed &&
              ((r.value = !0),
              he(() => {
                const e = k(l);
                ((o.width = e.width), (o.height = e.height), (r.value = !1));
              }));
          }),
          () => {
            var e;
            return ue('div', { ref: l, style: u.value }, [
              ue('div', { class: wt({ fixed: o.fixed && !r.value }), style: c.value }, [null == (e = a.default) ? void 0 : e.call(a)]),
            ]);
          }
        );
      },
    }),
  ),
  [xt, Ot] = o('swipe'),
  St = {
    loop: C,
    width: d,
    height: d,
    vertical: Boolean,
    autoplay: N(0),
    duration: N(500),
    touchable: C,
    lazyRender: Boolean,
    initialSwipe: N(0),
    indicatorColor: String,
    showIndicators: C,
    stopPropagation: C,
  },
  kt = Symbol(xt);
const Tt = I(
    oe({
      name: xt,
      props: St,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: a }) {
        const l = ie(),
          n = ie(),
          o = fe({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let i = !1;
        const r = Ge(),
          { children: u, linkChildren: c } = L(kt),
          d = re(() => u.length),
          m = re(() => o[e.vertical ? 'height' : 'width']),
          p = re(() => (e.vertical ? r.deltaY.value : r.deltaX.value)),
          h = re(() => {
            if (o.rect) {
              return (e.vertical ? o.rect.height : o.rect.width) - m.value * d.value;
            }
            return 0;
          }),
          g = re(() => (m.value ? Math.ceil(Math.abs(h.value) / m.value) : d.value)),
          y = re(() => d.value * m.value),
          b = re(() => (o.active + d.value) % d.value),
          D = re(() => {
            const t = e.vertical ? 'vertical' : 'horizontal';
            return r.direction.value === t;
          }),
          A = re(() => {
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
          N = (t, a = 0) => {
            let l = t * m.value;
            e.loop || (l = Math.min(l, -h.value));
            let n = a - l;
            return (e.loop || (n = s(n, h.value, 0)), n);
          },
          w = ({ pace: a = 0, offset: l = 0, emitChange: n }) => {
            if (d.value <= 1) return;
            const { active: i } = o,
              r = ((t) => {
                const { active: a } = o;
                return t ? (e.loop ? s(a + t, -1, d.value) : s(a + t, 0, g.value)) : a;
              })(a),
              c = N(r, l);
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
            ((o.active = r), (o.offset = c), n && r !== i && t('change', b.value));
          },
          _ = () => {
            ((o.swiping = !0), o.active <= -1 ? w({ pace: d.value }) : o.active >= d.value && w({ pace: -d.value }));
          },
          x = () => {
            (_(),
              r.reset(),
              M(() => {
                ((o.swiping = !1), w({ pace: 1, emitChange: !0 }));
              }));
          };
        let O;
        const k = () => clearTimeout(O),
          I = () => {
            (k(),
              +e.autoplay > 0 &&
                d.value > 1 &&
                (O = setTimeout(() => {
                  (x(), I());
                }, +e.autoplay)));
          },
          C = (t = +e.initialSwipe) => {
            if (!l.value) return;
            const a = () => {
              var a, n;
              if (!S(l)) {
                const t = { width: l.value.offsetWidth, height: l.value.offsetHeight };
                ((o.rect = t), (o.width = +(null != (a = e.width) ? a : t.width)), (o.height = +(null != (n = e.height) ? n : t.height)));
              }
              (d.value && -1 === (t = Math.min(d.value - 1, t)) && (t = d.value - 1),
                (o.active = t),
                (o.swiping = !0),
                (o.offset = N(t)),
                u.forEach((e) => {
                  e.setOffset(0);
                }),
                I());
            };
            S(l) ? he().then(a) : a();
          },
          G = () => C(o.active);
        let V;
        const B = (t) => {
            !e.touchable || t.touches.length > 1 || (r.start(t), (i = !1), (V = Date.now()), k(), _());
          },
          P = () => {
            if (!e.touchable || !o.swiping) return;
            const a = Date.now() - V,
              l = p.value / a;
            if ((Math.abs(l) > 0.25 || Math.abs(p.value) > m.value / 2) && D.value) {
              const t = e.vertical ? r.offsetY.value : r.offsetX.value;
              let a = 0;
              ((a = e.loop ? (t > 0 ? (p.value > 0 ? -1 : 1) : 0) : -Math[p.value > 0 ? 'ceil' : 'floor'](p.value / m.value)),
                w({ pace: a, emitChange: !0 }));
            } else p.value && w({ pace: 0 });
            ((i = !1), (o.swiping = !1), t('dragEnd', { index: b.value }), I());
          },
          Y = (t, a) => {
            const l = a === b.value,
              n = l ? { backgroundColor: e.indicatorColor } : void 0;
            return ue('i', { style: n, class: Ot('indicator', { active: l }) }, null);
          };
        return (
          Ve({
            prev: () => {
              (_(),
                r.reset(),
                M(() => {
                  ((o.swiping = !1), w({ pace: -1, emitChange: !0 }));
                }));
            },
            next: x,
            state: o,
            resize: G,
            swipeTo: (t, a = {}) => {
              (_(),
                r.reset(),
                M(() => {
                  let l;
                  ((l = e.loop && t === d.value ? (0 === o.active ? 0 : t) : t % d.value),
                    a.immediate
                      ? M(() => {
                          o.swiping = !1;
                        })
                      : (o.swiping = !1),
                    w({ pace: l - o.active, emitChange: !0 }));
                }));
            },
          }),
          c({ size: m, props: e, count: d, activeIndicator: b }),
          pe(
            () => e.initialSwipe,
            (e) => C(+e),
          ),
          pe(d, () => C(o.active)),
          pe(() => e.autoplay, I),
          pe([T, H, () => e.width, () => e.height], G),
          pe(E(), (e) => {
            'visible' === e ? I() : k();
          }),
          ge(C),
          ye(() => C(o.active)),
          $(() => C(o.active)),
          me(k),
          ve(k),
          v(
            'touchmove',
            (a) => {
              if (e.touchable && o.swiping && (r.move(a), D.value)) {
                (!e.loop && ((0 === o.active && p.value > 0) || (o.active === d.value - 1 && p.value < 0))) ||
                  (f(a, e.stopPropagation), w({ offset: p.value }), i || (t('dragStart', { index: b.value }), (i = !0)));
              }
            },
            { target: n },
          ),
          () => {
            var t;
            return ue('div', { ref: l, class: Ot() }, [
              ue(
                'div',
                {
                  ref: n,
                  style: A.value,
                  class: Ot('track', { vertical: e.vertical }),
                  onTouchstartPassive: B,
                  onTouchend: P,
                  onTouchcancel: P,
                },
                [null == (t = a.default) ? void 0 : t.call(a)],
              ),
              a.indicator
                ? a.indicator({ active: b.value, total: d.value })
                : e.showIndicators && d.value > 1
                  ? ue('div', { class: Ot('indicators', { vertical: e.vertical }) }, [Array(d.value).fill('').map(Y)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [Ht, It] = o('tabs');
var Ct = oe({
  name: Ht,
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
    const l = ie(),
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
      i = (t) => {
        const a = l.value;
        a && a.state.active !== t && a.swipeTo(t, { immediate: !e.inited });
      };
    return (
      pe(() => e.currentIndex, i),
      ge(() => {
        i(e.currentIndex);
      }),
      Ve({ swipeRef: l }),
      () => ue('div', { class: It('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [Lt, Et] = o('tabs'),
  $t = {
    type: w('line'),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: N(0),
    duration: N(0.3),
    animated: Boolean,
    ellipsis: C,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: N(0),
    background: String,
    lazyRender: C,
    showHeader: C,
    lineWidth: d,
    lineHeight: d,
    beforeChange: Function,
    swipeThreshold: N(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Mt = Symbol(Lt);
var Gt = oe({
  name: Lt,
  props: $t,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: a, slots: l }) {
    let n, o, i, s, u;
    const c = ie(),
      d = ie(),
      m = ie(),
      f = ie(),
      p = bt(),
      D = _(c),
      [N, w] = Dt(),
      { children: O, linkChildren: H } = L(Mt),
      I = fe({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      C = re(() => O.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      E = re(() => ({ borderColor: t.color, background: t.background })),
      M = (e, t) => {
        var a;
        return null != (a = e.name) ? a : t;
      },
      Y = re(() => {
        const e = O[I.currentIndex];
        if (e) return M(e, I.currentIndex);
      }),
      R = re(() => x(t.offsetTop)),
      U = re(() => (t.sticky ? R.value + n : 0)),
      z = (e) => {
        const a = d.value,
          l = N.value;
        if (!(C.value && a && l && l[I.currentIndex])) return;
        const n = l[I.currentIndex].$el,
          o = n.offsetLeft - (a.offsetWidth - n.offsetWidth) / 2;
        (s && s(),
          (s = (function (e, t, a) {
            let l,
              n = 0;
            const o = e.scrollLeft,
              i = 0 === a ? 1 : Math.round((1e3 * a) / 16);
            let r = o;
            return (
              (function a() {
                ((r += (t - o) / i), (e.scrollLeft = r), ++n < i && (l = h(a)));
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
          const a = N.value;
          if (!a || !a[I.currentIndex] || 'line' !== t.type || S(c.value)) return;
          const l = a[I.currentIndex].$el,
            { lineWidth: n, lineHeight: o } = t,
            i = l.offsetLeft + l.offsetWidth / 2,
            s = { width: G(n), backgroundColor: t.color, transform: `translateX(${i}px) translateX(-50%)` };
          if ((e && (s.transitionDuration = `${t.duration}s`), r(o))) {
            const e = G(o);
            ((s.height = e), (s.borderRadius = e));
          }
          I.lineStyle = s;
        });
      },
      W = (e, l) => {
        const n = ((e) => {
          const t = e < I.currentIndex ? -1 : 1;
          for (; e >= 0 && e < O.length; ) {
            if (!O[e].disabled) return e;
            e += t;
          }
        })(e);
        if (!r(n)) return;
        const o = O[n],
          s = M(o, n),
          u = null !== I.currentIndex;
        (I.currentIndex !== n && ((I.currentIndex = n), l || z(), F()),
          s !== t.active && (a('update:active', s), u && a('change', s, o.title)),
          i && !t.scrollspy && B(Math.ceil(P(c.value) - R.value)));
      },
      j = (e, t) => {
        const a = O.findIndex((t, a) => M(t, a) === e);
        W(-1 === a ? 0 : a, t);
      },
      X = (e = !1) => {
        if (t.scrollspy) {
          const a = O[I.currentIndex].$el;
          if (a && D.value) {
            const l = P(a, D.value) - U.value;
            ((o = !0),
              u && u(),
              (u = (function (e, t, a, l) {
                let n,
                  o = y(e);
                const i = o < t,
                  r = 0 === a ? 1 : Math.round((1e3 * a) / 16),
                  s = (t - o) / r;
                return (
                  (function a() {
                    ((o += s),
                      ((i && o > t) || (!i && o < t)) && (o = t),
                      b(e, o),
                      (i && o < t) || (!i && o > t) ? (n = h(a)) : l && (n = h(l)));
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
        const { title: i, disabled: r } = O[n],
          s = M(O[n], n);
        (r ||
          (Be(t.beforeChange, {
            args: [s],
            done: () => {
              (W(n), X());
            },
          }),
          e(l)),
          a('clickTab', { name: s, title: i, event: o, disabled: r }));
      },
      Z = (e) => {
        ((i = e.isFixed), a('scroll', e));
      },
      K = () => {
        if ('line' === t.type && O.length) return ue('div', { class: Et('line'), style: I.lineStyle }, null);
      },
      J = () => {
        var e, a, n;
        const { type: o, border: i, sticky: r } = t,
          s = [
            ue('div', { ref: r ? void 0 : m, class: [Et('wrap'), { [V]: 'line' === o && i }] }, [
              ue(
                'div',
                {
                  ref: d,
                  role: 'tablist',
                  class: Et('nav', [o, { shrink: t.shrink, complete: C.value }]),
                  style: E.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = l['nav-left']) ? void 0 : e.call(l),
                  O.map((e) => e.renderTitle(q)),
                  K(),
                  null == (a = l['nav-right']) ? void 0 : a.call(l),
                ],
              ),
            ]),
            null == (n = l['nav-bottom']) ? void 0 : n.call(l),
          ];
        return r ? ue('div', { ref: m }, [s]) : s;
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
        () => O.length,
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
      Ve({
        resize: Q,
        scrollTo: (e) => {
          he(() => {
            (j(e), X(!0));
          });
        },
      }),
      ye(F),
      $(F),
      A(() => {
        (j(t.active, !0),
          he(() => {
            ((I.inited = !0), m.value && (n = k(m.value).height), z(!0));
          }));
      }),
      At(c, F),
      v(
        'scroll',
        () => {
          if (t.scrollspy && !o) {
            const e = (() => {
              for (let e = 0; e < O.length; e++) {
                const { top: t } = k(O[e].$el);
                if (t > U.value) return 0 === e ? 0 : e - 1;
              }
              return O.length - 1;
            })();
            W(e);
          }
        },
        { target: D, passive: !0 },
      ),
      H({
        id: p,
        props: t,
        setLine: F,
        scrollable: C,
        onRendered: (e, t) => a('rendered', e, t),
        currentName: Y,
        setTitleRefs: w,
        scrollIntoView: z,
      }),
      () =>
        ue('div', { ref: c, class: Et([t.type]) }, [
          t.showHeader
            ? t.sticky
              ? ue(_t, { container: c.value, offsetTop: R.value, onScroll: Z }, { default: () => [J()] })
              : J()
            : null,
          ue(
            Ct,
            {
              ref: f,
              count: O.length,
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
const Vt = Symbol(),
  Bt = Symbol(),
  Pt = (e) => {
    const t = be(Bt, null);
    (De(Vt, e),
      De(
        Bt,
        re(() => (null == t || t.value) && e.value),
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
      showZeroBadge: C,
    },
    setup(e, { slots: t }) {
      const a = re(() => {
          const t = {},
            { type: a, color: l, disabled: n, isActive: o, activeColor: i, inactiveColor: r } = e;
          l && 'card' === a && ((t.borderColor = l), n || (o ? (t.backgroundColor = l) : (t.color = l)));
          const s = o ? i : r;
          return (s && (t.color = s), t);
        }),
        l = () => {
          const a = ue('span', { class: Rt('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
          return e.dot || (r(e.badge) && '' !== e.badge)
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
          { parent: n, index: o } = m(kt);
        if (!n) return;
        const i = re(() => {
            const e = {},
              { vertical: t } = n.props;
            return (
              n.size.value && (e[t ? 'height' : 'width'] = `${n.size.value}px`),
              l.offset && (e.transform = `translate${t ? 'Y' : 'X'}(${l.offset}px)`),
              e
            );
          }),
          r = re(() => {
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
          ge(() => {
            he(() => {
              l.mounted = !0;
            });
          }),
          Ve({
            setOffset: (e) => {
              l.offset = e;
            },
          }),
          () => {
            var e;
            return ue('div', { class: Ft(), style: i.value }, [r.value ? (null == (e = t.default) ? void 0 : e.call(t)) : null]);
          }
        );
      },
    }),
  ),
  [jt, Xt] = o('tab');
const qt = I(
    oe({
      name: jt,
      props: i({}, t, {
        dot: Boolean,
        name: d,
        badge: d,
        title: String,
        disabled: Boolean,
        titleClass: R,
        titleStyle: [String, Object],
        showZeroBadge: C,
      }),
      setup(e, { slots: t }) {
        const a = bt(),
          l = ie(!1),
          n = ce(),
          { parent: o, index: i } = m(Mt);
        if (!o) return;
        const r = () => {
            var t;
            return null != (t = e.name) ? t : i.value;
          },
          s = re(() => {
            const t = r() === o.currentName.value;
            return (
              t &&
                !l.value &&
                ((l.value = !0),
                o.props.lazyRender &&
                  he(() => {
                    o.onRendered(r(), e.title);
                  })),
              t
            );
          }),
          u = ie(''),
          c = ie('');
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
        const d = ie(!s.value);
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
          Ve({
            id: a,
            renderTitle: (l) =>
              ue(
                Ut,
                Ne(
                  {
                    key: a,
                    id: `${o.id}-${i.value}`,
                    ref: o.setTitleRefs(i.value),
                    style: c.value,
                    class: u.value,
                    isActive: s.value,
                    controls: a,
                    scrollable: o.scrollable.value,
                    activeColor: o.props.titleActiveColor,
                    inactiveColor: o.props.titleInactiveColor,
                    onClick: (e) => l(n.proxy, i.value, e),
                  },
                  U(o.props, ['type', 'color', 'shrink']),
                  U(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
                ),
                { title: t.title },
              ),
          }),
          () => {
            var e;
            const n = `${o.id}-${i.value}`,
              { animated: r, swipeable: u, scrollspy: c, lazyRender: m } = o.props;
            if (!t.default && !r) return;
            const v = c || s.value;
            if (r || u)
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
            return Ae(
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
              [[we, v]],
            );
          }
        );
      },
    }),
  ),
  Zt = I(Gt),
  [Kt] = o('picker-group'),
  Jt = Symbol(Kt);
i({ tabs: c(), activeTab: N(0), nextStepText: String, showToolbar: C }, lt);
const Qt = i(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: N(44),
    showToolbar: C,
    swipeDuration: N(1e3),
    visibleOptionNum: N(6),
  },
  lt,
);
const ea = I(
    oe({
      name: Fe,
      props: i({}, Qt, { columns: c(), modelValue: c(), toolbarPosition: w('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: a }) {
        const l = ie(),
          n = ie(e.modelValue.slice(0)),
          { parent: o } = m(Jt),
          { children: s, linkChildren: u } = L(et);
        u();
        const c = re(() =>
            (function (e) {
              return i({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          d = re(() => x(e.optionHeight)),
          p = re(() =>
            (function (e, t) {
              const a = e[0];
              if (a) {
                if (Array.isArray(a)) return 'multiple';
                if (t.children in a) return 'cascade';
              }
              return 'default';
            })(e.columns, c.value),
          ),
          h = re(() => {
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
                      i = a.value[o];
                    ((n = r(i) ? Ke(e, i, t) : void 0), !n && e.length && (n = Ke(e, Xe(e)[t.value], t)), o++, l.push(e));
                  }
                  return l;
                })(t, c.value, n);
              default:
                return [t];
            }
          }),
          g = re(() => h.value.some((e) => e.length)),
          y = re(() => h.value.map((e, t) => Ke(e, n.value[t], c.value))),
          b = re(() => h.value.map((e, t) => e.findIndex((e) => e[c.value.value] === n.value[t]))),
          D = (e, t) => {
            if (n.value[e] !== t) {
              const a = n.value.slice(0);
              ((a[e] = t), (n.value = a));
            }
          },
          A = () => ({ selectedValues: n.value.slice(0), selectedOptions: y.value, selectedIndexes: b.value }),
          N = () => {
            s.forEach((e) => e.stopMomentum());
            const e = A();
            return (
              he(() => {
                const e = A();
                t('confirm', e);
              }),
              e
            );
          },
          w = () => t('cancel', A()),
          _ = () =>
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
                          t('change', i({ columnIndex: a }, A()));
                        }));
                    })(e, o),
                  onClickOption: (e) =>
                    ((e, a) => {
                      const l = { columnIndex: a, currentOption: e };
                      (t('clickOption', i(A(), l)), t('scrollInto', l));
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
              return [ue('div', { class: We('mask'), style: a }, null), ue('div', { class: [z, We('frame')], style: t }, null)];
            }
          },
          S = () => {
            const t = d.value * +e.visibleOptionNum,
              n = { height: `${t}px` };
            return e.loading || g.value || !a.empty ? ue('div', { ref: l, class: We('columns'), style: n }, [_(), O(t)]) : a.empty();
          },
          k = () => {
            if (e.showToolbar && !o) return ue(it, Ne(U(e, ot), { onConfirm: N, onCancel: w }), U(a, nt));
          },
          T = (e) => {
            e.forEach((e, t) => {
              e.length && !Ze(e, n.value[t], c.value) && D(t, Xe(e)[c.value.value]);
            });
          };
        let H;
        (pe(h, (e) => T(e), { immediate: !0 }),
          pe(
            () => e.modelValue,
            (t) => {
              (F(t, n.value) || F(t, H) || ((n.value = t.slice(0)), (H = t.slice(0))), 0 === e.modelValue.length && T(h.value));
            },
            { deep: !0 },
          ),
          pe(
            n,
            (a) => {
              F(a, e.modelValue) || ((H = a.slice(0)), t('update:modelValue', H));
            },
            { immediate: !0 },
          ),
          v('touchmove', f, { target: l }));
        return (
          Ve({ confirm: N, getSelectedOptions: () => y.value }),
          () => {
            var t, l;
            return ue('div', { class: We() }, [
              'top' === e.toolbarPosition ? k() : null,
              e.loading ? ue(Pe, { class: We('loading') }, null) : null,
              null == (t = a['columns-top']) ? void 0 : t.call(a),
              S(),
              null == (l = a['columns-bottom']) ? void 0 : l.call(a),
              'bottom' === e.toolbarPosition ? k() : null,
            ]);
          }
        );
      },
    }),
  ),
  [ta, aa] = o('cell'),
  la = {
    tag: w('div'),
    icon: String,
    size: String,
    title: d,
    value: d,
    label: d,
    center: Boolean,
    isLink: Boolean,
    border: C,
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
    props: i({}, la, t),
    setup(e, { slots: t }) {
      const l = a(),
        n = () => {
          if (t.label || r(e.label)) return ue('div', { class: [aa('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var a;
          if (t.title || r(e.title)) {
            const l = null == (a = t.title) ? void 0 : a.call(t);
            if (Array.isArray(l) && 0 === l.length) return;
            return ue('div', { class: [aa('title'), e.titleClass], style: e.titleStyle }, [l || ue('span', null, [e.title]), n()]);
          }
        },
        i = () => {
          const a = t.value || t.default;
          if (a || r(e.value)) return ue('div', { class: [aa('value'), e.valueClass] }, [a ? a() : ue('span', null, [e.value])]);
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
        const { tag: n, size: r, center: u, border: c, isLink: d, required: m } = e,
          v = null != (a = e.clickable) ? a : d,
          f = { center: u, required: !!m, clickable: v, borderless: !c };
        return (
          r && (f[r] = !!r),
          ue(
            n,
            { class: aa(f), role: v ? 'button' : void 0, tabindex: v ? 0 : void 0, onClick: l },
            {
              default: () => {
                var a;
                return [
                  t.icon ? t.icon() : e.icon ? ue(W, { name: e.icon, class: aa('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
                  o(),
                  i(),
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
function ia(e, t) {
  const { message: a } = t;
  return q(a) ? a(e, t) : a || '';
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
    clearIcon: w('clear'),
    modelValue: N(''),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: w('focus'),
    formatTrigger: w('onChange'),
    spellcheck: { type: Boolean, default: null },
    error: { type: Boolean, default: null },
    disabled: { type: Boolean, default: null },
    readonly: { type: Boolean, default: null },
    inputmode: String,
  };
const fa = I(
  oe({
    name: da,
    props: i({}, la, va, {
      rows: d,
      type: w('text'),
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
        o = ie(),
        i = ie(),
        u = ie(),
        { parent: c } = m(J),
        d = () => {
          var t;
          return String(null != (t = e.modelValue) ? t : '');
        },
        p = (t) => (r(e[t]) ? e[t] : c && r(c.props[t]) ? c.props[t] : void 0),
        h = re(() => {
          const t = p('readonly');
          if (e.clearable && !t) {
            const t = '' !== d(),
              a = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && n.focused);
            return t && a;
          }
          return !1;
        }),
        g = re(() => (u.value && a.input ? u.value() : e.modelValue)),
        y = re(() => {
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
                  return ((n.status = 'failed'), void (n.validateMessage = ia(e, t)));
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
                      : !1 === a && ((n.status = 'failed'), (n.validateMessage = ia(e, t)));
                  });
                }
              }),
            Promise.resolve(),
          ),
        D = () => {
          ((n.status = 'unvalidated'), (n.validateMessage = ''));
        },
        A = () => t('endValidate', { status: n.status, message: n.validateMessage }),
        N = (a = e.rules) =>
          new Promise((l) => {
            (D(),
              a
                ? (t('startValidate'),
                  b(a).then(() => {
                    'failed' === n.status ? (l({ name: e.name, message: n.validateMessage }), A()) : ((n.status = 'passed'), l(), A());
                  }))
                : l());
          }),
        w = (t) => {
          if (c && e.rules) {
            const { validateTrigger: a } = c.props,
              l = Q(a).includes(t),
              n = e.rules.filter((e) => (e.trigger ? Q(e.trigger).includes(t) : l));
            n.length && N(n);
          }
        },
        _ = (a, l = 'onChange') => {
          var i, u;
          const c = a;
          a = ((t) => {
            var a;
            const { maxlength: l } = e;
            if (r(l) && ua(t) > +l) {
              const e = d();
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
          const m = c.length - a.length;
          if ('number' === e.type || 'digit' === e.type) {
            const t = 'number' === e.type;
            if (((a = K(a, t, t)), 'onBlur' === l && '' !== a && (void 0 !== e.min || void 0 !== e.max))) {
              const t = s(+a, null != (i = e.min) ? i : -1 / 0, null != (u = e.max) ? u : 1 / 0);
              +a !== t && (a = t.toString());
            }
          }
          let v = 0;
          if (e.formatter && l === e.formatTrigger) {
            const { formatter: t, maxlength: l } = e;
            if (((a = t(a)), r(l) && ua(a) > +l && (a = ca(a, +l)), o.value && n.focused)) {
              const { selectionEnd: e } = o.value,
                a = ca(c, e);
              v = t(a).length - a.length;
            }
          }
          if (o.value && o.value.value !== a)
            if (n.focused) {
              let { selectionStart: e, selectionEnd: t } = o.value;
              if (((o.value.value = a), r(e) && r(t))) {
                const l = a.length;
                (m ? ((e -= m), (t -= m)) : v && ((e += v), (t += v)), o.value.setSelectionRange(Math.min(e, l), Math.min(t, l)));
              }
            } else o.value.value = a;
          a !== e.modelValue && t('update:modelValue', a);
        },
        x = (e) => {
          e.target.composing || _(e.target.value);
        },
        O = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.blur();
        },
        S = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.focus();
        },
        k = () => {
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
          ((n.focused = !0), t('focus', e), he(k), p('readonly') && O());
        },
        H = (e) => {
          ((n.focused = !1), _(d(), 'onBlur'), t('blur', e), p('readonly') || (w('onBlur'), he(k), ee()));
        },
        I = (e) => t('clickInput', e),
        C = (e) => t('clickLeftIcon', e),
        L = (e) => t('clickRightIcon', e),
        E = re(() => ('boolean' == typeof e.error ? e.error : !(!c || !c.props.showError || 'failed' !== n.status) || void 0)),
        $ = re(() => {
          const e = p('labelWidth'),
            t = p('labelAlign');
          if (e && 'top' !== t) return { width: G(e) };
        }),
        M = (a) => {
          if (13 === a.keyCode) {
            ((c && c.props.submitOnEnter) || 'textarea' === e.type || f(a), 'search' === e.type && O());
          }
          t('keypress', a);
        },
        V = () => e.id || `${l}-input`,
        P = () => {
          const t = ma('control', [
            p('inputAlign'),
            { error: E.value, custom: !!a.input, 'min-height': 'textarea' === e.type && !e.autosize },
          ]);
          if (a.input) return ue('div', { class: t, onClick: I }, [a.input()]);
          const n = {
            id: V(),
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
            onBlur: H,
            onFocus: T,
            onInput: x,
            onClick: I,
            onChange: sa,
            onKeypress: M,
            onCompositionend: sa,
            onCompositionstart: ra,
          };
          return 'textarea' === e.type
            ? ue('textarea', Ne(n, { inputmode: e.inputmode }), null)
            : ue(
                'input',
                Ne(
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
        Y = () => {
          const t = a['right-icon'];
          if (e.rightIcon || t)
            return ue('div', { class: ma('right-icon'), onClick: L }, [
              t ? t() : ue(W, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        R = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = ua(d());
            return ue('div', { class: ma('word-limit') }, [ue('span', { class: ma('word-num') }, [t]), _e('/'), e.maxlength]);
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
            h.value && ue(W, { ref: i, name: e.clearIcon, class: ma('clear') }, null),
            Y(),
            a.button && ue('div', { class: ma('button') }, [a.button()]),
          ]),
          R(),
          U(),
        ];
      return (
        Ve({ blur: O, focus: S, validate: N, formValue: g, resetValidation: D, getValidationStatus: () => n.status }),
        De(te, { customValue: u, resetValidation: D, validateWithTrigger: w }),
        pe(
          () => e.modelValue,
          () => {
            (_(d()), D(), w('onChange'), he(k));
          },
        ),
        ge(() => {
          (_(d(), e.formatTrigger), he(k));
        }),
        v(
          'touchstart',
          (e) => {
            (f(e), t('update:modelValue', ''), t('clear', e));
          },
          {
            target: re(() => {
              var e;
              return null == (e = i.value) ? void 0 : e.$el;
            }),
          },
        ),
        () => {
          const t = p('disabled'),
            n = p('labelAlign'),
            o = (() => {
              const t = a['left-icon'];
              if (e.leftIcon || t)
                return ue('div', { class: ma('left-icon'), onClick: C }, [
                  t ? t() : ue(W, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return ue(
            na,
            {
              size: e.size,
              class: ma({ error: E.value, disabled: t, [`label-${n}`]: n }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: $.value,
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
                            for: a.input ? void 0 : V(),
                            'data-allow-mismatch': 'attribute',
                            onClick: (e) => {
                              (f(e), S());
                            },
                            style: 'top' === n && t ? { width: G(t) } : void 0,
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
  Aa = (e) => (Array.isArray(e) ? e.map(Da) : Da(e));
function Na(e, t) {
  const a = Da(e);
  return (a.setDate(a.getDate() + t), a);
}
function wa(e, t) {
  const a = Da(e);
  return (a.setMonth(a.getMonth() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
function _a(e, t) {
  const a = Da(e);
  return (a.setFullYear(a.getFullYear() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
const xa = (e) => Na(e, -1),
  Oa = (e) => Na(e, 1),
  Sa = (e) => wa(e, -1),
  ka = (e) => wa(e, 1),
  Ta = (e) => _a(e, -1),
  Ha = (e) => _a(e, 1),
  Ia = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
i({}, Qt, { modelValue: c(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Ca] = o('calendar-day');
var La = oe({
  name: Ca,
  props: { item: u(Object), color: String, index: Number, offset: ae(0), rowHeight: String },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const l = re(() => {
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
        if (t || a['top-info']) return ue('div', { class: ha('top-info') }, [a['top-info'] ? a['top-info'](e.item) : t]);
      },
      i = () => {
        const { bottomInfo: t } = e.item;
        if (t || a['bottom-info']) return ue('div', { class: ha('bottom-info') }, [a['bottom-info'] ? a['bottom-info'](e.item) : t]);
      },
      r = () => {
        const { item: t, color: l, rowHeight: n } = e,
          { type: r } = t,
          s = [o(), a.text ? a.text(e.item) : e.item.text, i()];
        return 'selected' === r ? ue('div', { class: ha('selected-day'), style: { width: n, height: n, background: l } }, [s]) : s;
      };
    return () => {
      const { type: t, className: a } = e.item;
      return 'placeholder' === t
        ? ue('div', { class: ha('day'), style: l.value }, null)
        : ue('div', { role: 'gridcell', style: l.value, class: [ha('day', t), a], tabindex: 'disabled' === t ? void 0 : -1, onClick: n }, [
            r(),
          ]);
    };
  },
});
const [Ea] = o('calendar-month');
var $a = oe({
  name: Ea,
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
      o = ie(),
      i = ie(),
      r = ze(i),
      s = re(() => {
        return ((t = e.date), ga('monthTitle', t.getFullYear(), t.getMonth() + 1));
        var t;
      }),
      u = re(() => G(e.rowHeight)),
      c = re(() => {
        const t = e.date.getDate(),
          a = (e.date.getDay() - (t % 7) + 8) % 7;
        return e.firstDayOfWeek ? (a + 7 - e.firstDayOfWeek) % 7 : a;
      }),
      d = re(() => {
        return ((t = e.date.getFullYear()), (a = e.date.getMonth() + 1), 32 - new Date(t, a - 1, 32).getDate());
        var t, a;
      }),
      m = re(() => l.value || !e.lazyRender),
      v = (t) => {
        const { type: a, minDate: l, maxDate: n, currentDate: o } = e;
        if ((l && ba(t, l) < 0) || (n && ba(t, n) > 0)) return 'disabled';
        if (null === o) return '';
        if (Array.isArray(o)) {
          if ('multiple' === a)
            return ((t) => {
              const a = (t) => e.currentDate.some((e) => 0 === ba(e, t));
              if (a(t)) {
                const e = xa(t),
                  l = Oa(t),
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
      g = re(() => {
        const e = Math.ceil((d.value + c.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      y = re(() => {
        const t = [],
          a = e.date.getFullYear(),
          l = e.date.getMonth();
        for (let n = 1; n <= d.value; n++) {
          const o = new Date(a, l, n),
            i = v(o);
          let r = { date: o, type: i, text: n, bottomInfo: f(i) };
          (e.formatter && (r = e.formatter(r)), t.push(r));
        }
        return t;
      }),
      D = re(() => y.value.filter((e) => 'disabled' === e.type)),
      A = (l, n) =>
        ue(
          La,
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
      Ve({
        getTitle: () => s.value,
        getHeight: () => r.value,
        setVisible: n,
        scrollToDate: (e, t) => {
          if (o.value) {
            const a = k(o.value),
              l = g.value.length,
              n = ((Math.ceil((t.getDate() + c.value) / 7) - 1) * a.height) / l;
            b(e, a.top + n + e.scrollTop - k(e).top);
          }
        },
        disabledDays: D,
      }),
      () =>
        ue('div', { class: ha('month'), ref: i }, [
          p(),
          ue('div', { ref: o, role: 'grid', class: ha('days') }, [h(), (m.value ? y : g).value.map(A)]),
        ])
    );
  },
});
const [Ma] = o('calendar-header');
var Ga = oe({
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
    switchMode: w('none'),
  },
  emits: ['clickSubtitle', 'panelChange'],
  setup(e, { slots: t, emit: a }) {
    const l = re(() => e.date && e.minDate && ya(Sa(e.date), e.minDate) < 0),
      n = re(() => e.date && e.minDate && ya(Ta(e.date), e.minDate) < 0),
      o = re(() => e.date && e.maxDate && ya(ka(e.date), e.maxDate) > 0),
      i = re(() => e.date && e.maxDate && ya(Ha(e.date), e.maxDate) > 0),
      r = () => {
        if (e.showTitle) {
          const a = e.title || ga('title'),
            l = t.title ? t.title() : a;
          return ue('div', { class: ha('header-title') }, [l]);
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
          h = ue('view', { class: ha('header-action', { disabled: d }), onClick: d ? void 0 : () => u((a ? ka : Sa)(e.date)) }, [
            s ? s({ disabled: d }) : ue(W, { class: { [p]: !d }, name: v }, null),
          ]),
          g =
            r &&
            ue('view', { class: ha('header-action', { disabled: m }), onClick: m ? void 0 : () => u((a ? Ha : Ta)(e.date)) }, [
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
    return () => ue('div', { class: ha('header') }, [r(), d(), m()]);
  },
});
const Va = I(
  oe({
    name: pa,
    props: {
      show: Boolean,
      type: w('single'),
      switchMode: w('none'),
      title: String,
      color: String,
      round: C,
      readonly: Boolean,
      poppable: C,
      maxRange: N(null),
      position: w('bottom'),
      teleport: [String, Object],
      showMark: C,
      showTitle: C,
      formatter: Function,
      rowHeight: d,
      confirmText: String,
      rangePrompt: String,
      lazyRender: C,
      showConfirm: C,
      defaultDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: C,
      closeOnPopstate: C,
      showRangePrompt: C,
      confirmDisabledText: String,
      closeOnClickOverlay: C,
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: C,
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
      const n = re(() => 'none' !== e.switchMode),
        o = re(() => (e.minDate || n.value ? e.minDate : Ia())),
        i = re(() => (e.maxDate || n.value ? e.maxDate : wa(Ia(), 6))),
        r = (e, t = o.value, a = i.value) => (t && -1 === ba(e, t) ? t : a && 1 === ba(e, a) ? a : e),
        s = (t = e.defaultDate) => {
          const { type: a, allowSameDay: l } = e;
          if (null === t) return t;
          const n = Ia();
          if ('range' === a) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === ba(t[0], n) && (t = []));
            const e = o.value,
              a = i.value;
            return [r(t[0] || n, e, a ? (l ? a : xa(a)) : void 0), r(t[1] || (l ? n : Oa(n)), e ? (l ? e : Oa(e)) : void 0)];
          }
          return 'multiple' === a ? (Array.isArray(t) ? t.map((e) => r(e)) : [r(n)]) : ((t && !Array.isArray(t)) || (t = n), r(t));
        };
      let u;
      const c = ie(),
        d = ie(s()),
        m = ie(
          (() => {
            const e = Array.isArray(d.value) ? d.value[0] : d.value;
            return e || r(Ia());
          })(),
        ),
        v = ie(),
        [f, p] = Dt(),
        g = re(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        b = re(() => {
          const e = [];
          if (!o.value || !i.value) return e;
          const t = new Date(o.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== ya(t, i.value));
          return e;
        }),
        D = re(() => {
          if (d.value) {
            if ('range' === e.type) return !d.value[0] || !d.value[1];
            if ('multiple' === e.type) return !d.value.length;
          }
          return !d.value;
        }),
        N = () => {
          const e = y(c.value),
            a = e + u,
            l = b.value.map((e, t) => f.value[t].getHeight());
          if (a > l.reduce((e, t) => e + t, 0) && e > 0) return;
          let n,
            o = 0;
          const i = [-1, -1];
          for (let r = 0; r < b.value.length; r++) {
            const s = f.value[r];
            (o <= a &&
              o + l[r] >= e &&
              ((i[1] = r),
              n || ((n = s), (i[0] = r)),
              f.value[r].showed || ((f.value[r].showed = !0), t('monthShow', { date: s.date, title: s.getTitle() }))),
              (o += l[r]));
          }
          (b.value.forEach((e, t) => {
            const a = t >= i[0] - 1 && t <= i[1] + 1;
            f.value[t].setVisible(a);
          }),
            n && (v.value = n));
        },
        w = (e) => {
          n.value
            ? (m.value = e)
            : h(() => {
                (b.value.some((t, a) => 0 === ya(t, e) && (c.value && f.value[a].scrollToDate(c.value, e), !0)), N());
              });
        },
        _ = () => {
          if (!e.poppable || e.show)
            if (d.value) {
              const t = 'single' === e.type ? d.value : d.value[0];
              ne(t) && w(t);
            } else n.value || h(N);
        },
        x = () => {
          (e.poppable && !e.show) ||
            (n.value ||
              h(() => {
                u = Math.floor(k(c).height);
              }),
            _());
        },
        O = (e = s()) => {
          ((d.value = e), _());
        },
        S = (e) => {
          ((m.value = e), t('panelChange', { date: e }));
        },
        T = () => {
          var e;
          return t('confirm', null != (e = d.value) ? e : Aa(d.value));
        },
        H = (a, l) => {
          const n = (e) => {
            ((d.value = e), t('select', Aa(e)));
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
            if (!l) return void n([a[0], Na(a[0], +e.maxRange - 1)]);
          }
          (n(a), l && !e.showConfirm && T());
        },
        I = re(() =>
          f.value.reduce((e, t) => {
            var a, l;
            return (e.push(...(null != (l = null == (a = t.disabledDays) ? void 0 : a.value) ? l : [])), e);
          }, []),
        ),
        C = (a) => {
          if (e.readonly || !a.date) return;
          const { date: l } = a,
            { type: n } = e;
          if ('range' === n) {
            if (!d.value) return void H([l]);
            const [t, a] = d.value;
            if (t && !a) {
              const a = ba(l, t);
              if (1 === a) {
                const e = ((e, t, a) => {
                  var l;
                  return null == (l = e.find((e) => -1 === ba(t, e.date) && -1 === ba(e.date, a))) ? void 0 : l.date;
                })(I.value, t, l);
                if (e) {
                  const a = xa(e);
                  -1 === ba(t, a) ? H([t, a]) : H([l]);
                } else H([t, l], !0);
              } else -1 === a ? H([l]) : e.allowSameDay && H([l, l], !0);
            } else H([l]);
          } else if ('multiple' === n) {
            if (!d.value) return void H([l]);
            const a = d.value,
              n = a.findIndex((e) => 0 === ba(e, l));
            if (-1 !== n) {
              const [e] = a.splice(n, 1);
              t('unselect', Da(e));
            } else e.maxRange && a.length >= +e.maxRange ? Ue(e.rangePrompt || ga('rangePrompt', e.maxRange)) : H([...a, l]);
          } else H(l, !0);
        },
        L = (e) => t('clickOverlay', e),
        E = (e) => t('update:show', e),
        $ = (l, r) => {
          const s = 0 !== r || !e.showSubtitle;
          return ue(
            $a,
            Ne(
              {
                ref: n.value ? v : p(r),
                date: l,
                currentDate: d.value,
                showMonthTitle: s,
                firstDayOfWeek: g.value,
                lazyRender: !n.value && e.lazyRender,
                maxDate: i.value,
                minDate: o.value,
              },
              U(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: C, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
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
        G = () => {
          var l, r;
          return ue('div', { class: ha() }, [
            ue(
              Ga,
              {
                date: null == (l = v.value) ? void 0 : l.date,
                maxDate: i.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (r = v.value) ? void 0 : r.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: g.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: S,
              },
              U(a, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            ue('div', { ref: c, class: ha('body'), onScroll: n.value ? void 0 : N }, [n.value ? $(m.value, 0) : b.value.map($)]),
            ue('div', { class: [ha('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [M()]),
          ]);
        };
      return (
        pe(() => e.show, x),
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
        Ve({ reset: O, scrollToDate: w, getSelectedDate: () => d.value }),
        A(x),
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
                  onClickOverlay: L,
                  'onUpdate:show': E,
                },
                { default: G },
              )
            : G()
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
          w = function e(t, a, l) {
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
          _ = function (e, t) {
            if (N(e)) return e.clone();
            var a = 'object' == typeof t ? t : {};
            return ((a.date = e), (a.args = arguments), new O(a));
          },
          x = y;
        ((x.l = w),
          (x.i = N),
          (x.w = function (e, t) {
            return _(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
          }));
        var O = (function () {
            function h(e) {
              ((this.$L = w(e.locale, null, !0)), this.parse(e), (this.$x = this.$x || e.x || {}), (this[A] = !0));
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
                var a = _(e);
                return this.startOf(t) <= a && a <= this.endOf(t);
              }),
              (g.isAfter = function (e, t) {
                return _(e) < this.startOf(t);
              }),
              (g.isBefore = function (e, t) {
                return this.endOf(t) < _(e);
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
                    var t = _(v);
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
                  g = _(l),
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
                  l = w(e, t, !0);
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
          (_.prototype = S),
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
          (_.extend = function (e, t) {
            return (e.$i || (e(t, O, _), (e.$i = !0)), _);
          }),
          (_.locale = w),
          (_.isDayjs = N),
          (_.unix = function (e) {
            return _(1e3 * e);
          }),
          (_.en = D[b]),
          (_.Ls = D),
          (_.p = {}),
          _
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
    { name: '2大', quarkFuncConfig: [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT', num: 1 }] },
  ],
  za = [
    { label: '👨 成人', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 0, simpleText: '大', fullText: '一日-成人', visible: !0 },
    { label: '👶 儿童', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 0, simpleText: '小', fullText: '一日-儿童', visible: !0 },
    { label: '👴 老人', category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR', num: 0, simpleText: '老', fullText: '一日-老人', visible: !0 },
    {
      label: '👨&👨 两大',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT',
      num: 0,
      simpleText: '两大',
      fullText: '一日-两大',
      visible: !0,
      details: [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 }],
    },
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
      visible: !1,
      details: [
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR', num: 1 },
        { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
      ],
    },
  ],
  Fa = (e, t) => 5 * Math.ceil(Number.parseFloat(e) / 5) + Number.parseFloat(t + ''),
  Wa = (e, t, a) => `${e[a].num ? e[a].num + t.find((e) => e.category === a).simpleText : ''}`,
  ja = [
    {
      enabled: !0,
      condition: () => !0,
      action: ({ useDate: e, personCounts: t, counts: a, standardSummary: l, earlyBirdSummary: n, diffAmount: o }) => {
        let i = `${e} ${Ra(e).format('dddd')} ${Wa(t, a, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${Wa(t, a, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${Wa(t, a, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
        const r = Fa(l.amount, o.standard),
          s = Ra(e).diff(new Date(), 'd'),
          u = Fa(n.amount, o.earlyBird),
          c = s >= 9 && u < r;
        return (
          c && (i += `\n早鸟票：${u}`),
          (i += `\n标准票：${r}\n临近出游日可能提前售罄，建议提前两天预定`),
          c && (i += '\n\n早鸟价格优惠，不可改签，需提前 10 天预订\n标准可改签一次'),
          i
        );
      },
      orderPriority: 10,
    },
    {
      enabled: !0,
      condition: ({ personCounts: e }) => e.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + e.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 1,
      action: () => '\n\n不升级年卡，您可以自己买官方的半价一小\n工作日 150，节假日 175',
      orderPriority: 100,
    },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  Xa = { class: 'form-group' },
  qa = { class: 'form-group' },
  Za = { class: 'counter-label' },
  Ka = { class: 'counter-controls' },
  Ja = ['onClick'],
  Qa = { class: 'counter-value' },
  el = ['onClick'],
  tl = { class: 'form-group' },
  al = { class: 'counter-group' },
  ll = { class: 'counter-group' },
  nl = { class: 'summary' },
  ol = { class: 'summary-item' },
  il = { class: 'summary-value' },
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
  gl = { class: 'summary' },
  yl = { class: 'summary-item' },
  bl = { class: 'summary-value' },
  Dl = { class: 'summary-item' },
  Al = { class: 'summary-value' },
  Nl = { class: 'summary-item' },
  wl = { class: 'summary-value' },
  _l = { class: 'summary-item' },
  xl = { class: 'summary-value' },
  Ol = { class: 'summary-item' },
  Sl = { class: 'summary-value' },
  kl = { class: 'summary-item' },
  Tl = { class: 'summary-value' },
  Hl = Le(
    oe({
      __name: 'calculator',
      setup(e) {
        const t = be('useDate', ie('')),
          a = ie(za.filter((e) => e.visible)),
          o = () => {
            (a.value.forEach((e) => {
              e.num = 0;
            }),
              (r.value.standard = 0),
              (r.value.earlyBird = 0));
          },
          i = ie({ costPlatform: 0.02 }),
          r = ie({ standard: 0, earlyBird: 0 }),
          s = ie({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' }),
          u = ie({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' });
        pe(
          [t, a, i],
          () => {
            v();
          },
          { deep: !0 },
        );
        const c = (e, t) => {
            (0 === e.num && t < 0) || (e.num += t);
          },
          d = (e, t) => {
            (0 === r.value[e] && t < 0) || (r.value[e] = (100 * r.value[e] + 100 * t) / 100);
          };
        const m = re(() => {
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
            r = 0;
          let c = 0,
            d = 0,
            v = 0,
            f = 0;
          const p = (function () {
            const e = n.data.filter((e) => e.useDate === t.value);
            if (0 == e.length) return void Ue('Product data not found');
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
          (c < e && ((e = c), (l = d)), (r = e * i.value.costPlatform), (o = 0 + r));
          const h = e - o - 0;
          ((u.value.amount = e.toFixed(2)),
            (u.value.originalAmount = l.toFixed(2)),
            (u.value.costPlatform = r.toFixed(2)),
            (u.value.commission = (0).toFixed(2)),
            (u.value.totalCost = o.toFixed(2)),
            (u.value.profit = h.toFixed(2)),
            (f = c * i.value.costPlatform),
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
        const f = () => {
            let e = '';
            const l = {
              useDate: t.value,
              personCounts: m.value,
              counts: a.value,
              standardSummary: s.value,
              earlyBirdSummary: u.value,
              diffAmount: r.value,
            };
            for (const t of ja) t.condition(l) && (e += t.action(l));
            navigator.clipboard.writeText(e);
          },
          p = [
            { name: '一大一小' },
            { name: '2大1小', visible: !1 },
            { name: '2大2小', visible: !1 },
            { name: '2大' },
            { name: '清空', func: o },
            { name: '均价', func: () => {} },
            { name: '出票信息', func: f },
          ];
        return (e, t) => {
          const n = l,
            i = fa;
          return (
            Ie(),
            xe('div', null, [
              Oe('div', Xa, [
                t[6] || (t[6] = Oe('label', null, '快捷操作', -1)),
                (Ie(),
                xe(
                  Se,
                  null,
                  ke(p, (e) =>
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
                                    f();
                                  }));
                              })(e.name),
                        key: e.name,
                      },
                      { default: Ce(() => [_e(He(e.name), 1)]), _: 2 },
                      1032,
                      ['onClick'],
                    ),
                  ),
                  64,
                )),
              ]),
              Oe('div', qa, [
                t[7] || (t[7] = Oe('label', null, '选择人数', -1)),
                (Ie(!0),
                xe(
                  Se,
                  null,
                  ke(
                    Te(a),
                    (e) => (
                      Ie(),
                      xe('div', { class: 'counter-group', key: e.category }, [
                        Oe('span', Za, He(e.label), 1),
                        Oe('div', Ka, [
                          Oe('button', { class: 'counter-btn', onClick: (t) => c(e, -1) }, '−', 8, Ja),
                          Oe('span', Qa, He(e.num), 1),
                          Oe('button', { class: 'counter-btn', onClick: (t) => c(e, 1) }, '+', 8, el),
                        ]),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
              Oe('div', tl, [
                t[8] || (t[8] = Oe('label', null, '差价', -1)),
                Oe('div', al, [
                  Oe('button', { class: 'counter-btn', onClick: t[0] || (t[0] = (e) => d('standard', -5)) }, '−'),
                  ue(
                    i,
                    {
                      modelValue: Te(r).standard,
                      'onUpdate:modelValue': t[1] || (t[1] = (e) => (Te(r).standard = e)),
                      type: 'number',
                      label: '标准',
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                  Oe('button', { class: 'counter-btn', onClick: t[2] || (t[2] = (e) => d('standard', 5)) }, '+'),
                ]),
                Oe('div', ll, [
                  Oe('button', { class: 'counter-btn', onClick: t[3] || (t[3] = (e) => d('earlyBird', -5)) }, '−'),
                  ue(
                    i,
                    {
                      modelValue: Te(r).earlyBird,
                      'onUpdate:modelValue': t[4] || (t[4] = (e) => (Te(r).earlyBird = e)),
                      type: 'number',
                      label: '早鸟',
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                  Oe('button', { class: 'counter-btn', onClick: t[5] || (t[5] = (e) => d('earlyBird', 5)) }, '+'),
                ]),
              ]),
              Oe('div', nl, [
                t[21] || (t[21] = Oe('h2', null, '💰 费用汇总-标准', -1)),
                Oe('div', ol, [
                  t[10] || (t[10] = Oe('span', { class: 'summary-label' }, '总金额', -1)),
                  Oe('span', il, [t[9] || (t[9] = _e(' ¥', -1)), Oe('span', null, He(Te(s).amount), 1)]),
                ]),
                Oe('div', rl, [
                  t[12] || (t[12] = Oe('span', { class: 'summary-label' }, '官方票价', -1)),
                  Oe('span', sl, [t[11] || (t[11] = _e(' ¥', -1)), Oe('span', null, He(Te(s).originalAmount), 1)]),
                ]),
                Oe('div', ul, [
                  t[14] || (t[14] = Oe('span', { class: 'summary-label' }, '总佣金', -1)),
                  Oe('span', cl, [t[13] || (t[13] = _e(' ¥', -1)), Oe('span', null, He(Te(s).commission), 1)]),
                ]),
                Oe('div', dl, [
                  t[16] || (t[16] = Oe('span', { class: 'summary-label' }, '总成本-平台', -1)),
                  Oe('span', ml, [t[15] || (t[15] = _e(' ¥', -1)), Oe('span', null, He(Te(s).costPlatform), 1)]),
                ]),
                Oe('div', vl, [
                  t[18] || (t[18] = Oe('span', { class: 'summary-label' }, '总成本', -1)),
                  Oe('span', fl, [t[17] || (t[17] = _e(' ¥', -1)), Oe('span', null, He(Te(s).totalCost), 1)]),
                ]),
                Oe('div', pl, [
                  t[20] || (t[20] = Oe('span', { class: 'summary-label' }, '总利润', -1)),
                  Oe('span', hl, [t[19] || (t[19] = _e(' ¥', -1)), Oe('span', null, He(Te(s).profit), 1)]),
                ]),
              ]),
              Oe('div', gl, [
                t[34] || (t[34] = Oe('h2', null, '💰 费用汇总-早鸟', -1)),
                Oe('div', yl, [
                  t[23] || (t[23] = Oe('span', { class: 'summary-label' }, '总金额', -1)),
                  Oe('span', bl, [t[22] || (t[22] = _e(' ¥', -1)), Oe('span', null, He(Te(u).amount), 1)]),
                ]),
                Oe('div', Dl, [
                  t[25] || (t[25] = Oe('span', { class: 'summary-label' }, '官方票价', -1)),
                  Oe('span', Al, [t[24] || (t[24] = _e(' ¥', -1)), Oe('span', null, He(Te(u).originalAmount), 1)]),
                ]),
                Oe('div', Nl, [
                  t[27] || (t[27] = Oe('span', { class: 'summary-label' }, '总佣金', -1)),
                  Oe('span', wl, [t[26] || (t[26] = _e(' ¥', -1)), Oe('span', null, He(Te(u).commission), 1)]),
                ]),
                Oe('div', _l, [
                  t[29] || (t[29] = Oe('span', { class: 'summary-label' }, '总成本-平台', -1)),
                  Oe('span', xl, [t[28] || (t[28] = _e(' ¥', -1)), Oe('span', null, He(Te(u).costPlatform), 1)]),
                ]),
                Oe('div', Ol, [
                  t[31] || (t[31] = Oe('span', { class: 'summary-label' }, '总成本', -1)),
                  Oe('span', Sl, [t[30] || (t[30] = _e(' ¥', -1)), Oe('span', null, He(Te(u).totalCost), 1)]),
                ]),
                Oe('div', kl, [
                  t[33] || (t[33] = Oe('span', { class: 'summary-label' }, '总利润', -1)),
                  Oe('span', Tl, [t[32] || (t[32] = _e(' ¥', -1)), Oe('span', null, He(Te(u).profit), 1)]),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [['__scopeId', 'data-v-a4bcb699']],
  ),
  Il = { class: 'content' },
  Cl = { class: 'input-group' },
  Ll = { class: 'input-wrapper' },
  El = { class: 'input-group' },
  $l = oe({
    __name: 'identifyLint',
    setup(e) {
      const t = be('useDate', ie('')),
        a = ie(''),
        n = ie([]),
        o = ie(''),
        i = ie(''),
        r = ie(!1),
        s = ie(!1),
        u = ie([]),
        c = ie([]),
        d = ie(),
        m = {
          CHINA_ID: { fullName: '中国居民身份证', shortName: '身份证' },
          PASSPORT: { fullName: '护照', shortName: '护照' },
          HK_MACAU_PASS: { fullName: '港澳通行证（回乡证）', shortName: '回乡证' },
          TAIWAN_PASS: { fullName: '台湾通行证', shortName: '台湾通行证' },
          FPRID: { fullName: '外国人永久居留身份证', shortName: '永居' },
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
              for (let l = 0; l < 17; l++) a += Number.parseInt(e[l]) * t[l];
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
            (i.value = Object.keys(e)
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
        A = (e) => {
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
        N = ({ selectedValues: e }) => {
          ((d.value.idType = e[0]), _());
        },
        w = ({ selectedValues: e }) => {
          ((d.value.ticketType = e[0]), x());
        },
        _ = () => {
          ((r.value = !1), (d.value = {}));
        },
        x = () => {
          ((s.value = !1), (d.value = {}));
        },
        O = () => {
          let e = '';
          ((e += n.value
            .map((e) => `上海乐高乐园 ${Ra(t.value).format('YYYY-MM-DD')} ${e.ticketType} 金额\n${e.idType} ${e.name} ${e.id}`)
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
          xe('div', Il, [
            Oe('div', Cl, [
              Oe('div', Ll, [
                ue(
                  m,
                  {
                    type: 'textarea',
                    modelValue: Te(a),
                    'onUpdate:modelValue': t[0] || (t[0] = (e) => ($e(a) ? (a.value = e) : null)),
                    rows: '10',
                    onKeyup: Ee(b, ['enter']),
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                Oe('div', null, '票种统计：' + He(Te(o)), 1),
                Oe('div', null, 'ID 统计：' + He(Te(i)), 1),
                ue(
                  v,
                  { onClick: D, type: 'primary', size: 'small' },
                  { default: Ce(() => [...(t[6] || (t[6] = [_e('分割', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  { onClick: b, type: 'primary', size: 'small' },
                  { default: Ce(() => [...(t[7] || (t[7] = [_e('自动识别', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  { onClick: O, type: 'primary', size: 'small' },
                  { default: Ce(() => [...(t[8] || (t[8] = [_e('复制', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  { onClick: A, type: 'primary', size: 'small' },
                  { default: Ce(() => [...(t[9] || (t[9] = [_e('互换', -1)]))]), _: 1 },
                ),
                ue(
                  v,
                  {
                    onClick:
                      t[1] ||
                      (t[1] = (e) => {
                        ((a.value = ''), (n.value = []), (o.value = ''), (i.value = ''));
                      }),
                    type: 'primary',
                    size: 'small',
                  },
                  { default: Ce(() => [...(t[10] || (t[10] = [_e(' 清空 ', -1)]))]), _: 1 },
                ),
              ]),
            ]),
            Oe('div', El, [
              (Ie(!0),
              xe(
                Se,
                null,
                ke(
                  Te(n),
                  (e, a) => (
                    Ie(),
                    xe('div', { key: e.name }, [
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
                            ((r.value = !0), (d.value = e));
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
                        { onClick: (e) => A(a), type: 'primary', size: 'small' },
                        { default: Ce(() => [...(t[11] || (t[11] = [_e('互换', -1)]))]), _: 1 },
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
              { show: Te(r), 'onUpdate:show': t[3] || (t[3] = (e) => ($e(r) ? (r.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ce(() => [
                  ue(
                    h,
                    {
                      columns: f,
                      modelValue: Te(u),
                      'onUpdate:modelValue': t[2] || (t[2] = (e) => ($e(u) ? (u.value = e) : null)),
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
            ue(
              g,
              { show: Te(s), 'onUpdate:show': t[5] || (t[5] = (e) => ($e(s) ? (s.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ce(() => [
                  ue(
                    h,
                    {
                      columns: p,
                      modelValue: Te(c),
                      'onUpdate:modelValue': t[4] || (t[4] = (e) => ($e(c) ? (c.value = e) : null)),
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
  Ml = [
    { simpleText: '询价链接', fullText: '询价链接，具体以日期和人数为准' },
    {
      simpleText: '票务说明',
      fullText: '非团票，不用集合，不用二次预约，不用满人成团\n支持补差升级年卡\n刷身份证或人工通道核对无限次入园\n最终报价，无需补差',
      attraction: 'SHANGHAI_LEGOLAND',
    },
    { simpleText: '半价儿童（简）', fullText: '官方小程序或 APP 领券买', attraction: 'SHANGHAI_LEGOLAND' },
    {
      simpleText: '半价儿童',
      fullText: '#小程序://上海乐高乐园度假区/QZCCh3svOIjR2Vy\n\n复制到地球，发送给任意人后打开领券购买',
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
        '【闲鱼】https://m.tb.cn/h.7gH9xXN?tk=CkwufBGDuu5 CZ009 「我在闲鱼发布了【上海迪士尼门票 一大一小 两大一小 三成人】」\n#小程序://闲鱼/AcqeqAlVrkNMrUc\n点击链接直接打开\n\n您可以问问我朋友',
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
  Gl = [
    { name: '上海乐高乐园度假区', code: 'SHANGHAI_LEGOLAND', simpleName: '乐高', orderPriority: 200 },
    { name: '珠海长隆海洋王国', code: 'CHIMELONG_OCEAN_KINGDOM', simpleName: '长隆海洋', orderPriority: 110 },
    { name: '广州长隆野生动物世界', code: 'CHIMELONG_SAFARI', simpleName: '长隆野动', orderPriority: 110 },
    { name: '上海迪士尼度假区', code: 'SHANGHAI_DISNEY', simpleName: '迪士尼', visible: !0, orderPriority: 100 },
    { name: '北京环球度假区', code: 'BEIJING_UNIVERSAL', simpleName: '环球', visible: !1, orderPriority: 100 },
    { name: '上海动物园', code: 'SHANGHAI_ZOO', simpleName: '上动', visible: !1, orderPriority: 100 },
  ],
  Vl = oe({
    __name: 'term',
    setup(e) {
      const t = ie(''),
        a = ie([]),
        n = Gl.filter((e) => void 0 === e.visible || e.visible);
      (pe([t], () => {
        a.value = Ml.filter((e) => void 0 === e.visible || e.visible).filter((e) => !e.attraction || e.attraction === t.value);
      }),
        ge(() => {
          t.value = 'SHANGHAI_LEGOLAND';
        }));
      return (e, o) => {
        const i = l,
          r = qt,
          s = Zt;
        return (
          Ie(),
          Me(
            s,
            { active: Te(t), 'onUpdate:active': o[0] || (o[0] = (e) => ($e(t) ? (t.value = e) : null)) },
            {
              default: Ce(() => [
                (Ie(!0),
                xe(
                  Se,
                  null,
                  ke(
                    Te(n),
                    (e) => (
                      Ie(),
                      Me(
                        r,
                        { title: e.simpleName, name: e.code, key: e.name },
                        {
                          default: Ce(() => [
                            (Ie(!0),
                            xe(
                              Se,
                              null,
                              ke(
                                Te(a),
                                (e) => (
                                  Ie(),
                                  xe('div', { key: e.fullText }, [
                                    Oe('div', null, [Oe('span', null, He(e.simpleText), 1)]),
                                    Oe('div', null, [
                                      ue(
                                        i,
                                        {
                                          onClick: (t) =>
                                            ((e) => {
                                              e.func
                                                ? navigator.clipboard.writeText(e.func())
                                                : navigator.clipboard.writeText(e.fullText || '');
                                            })(e),
                                        },
                                        { default: Ce(() => [...(o[1] || (o[1] = [_e('复制', -1)]))]), _: 1 },
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
  Bl = oe({
    __name: 'tools',
    setup(e) {
      const t = ie(0),
        a = [
          { label: '成人', num: 0, avgRatio: 0.55, avgAmount: 0 },
          { label: '儿童', num: 0, avgRatio: 0.45, avgAmount: 0 },
          { label: '老人', num: 0, avgRatio: 0.45, avgAmount: 0 },
        ];
      return (e, n) => {
        const o = fa,
          i = l;
        return (
          Ie(),
          xe('div', null, [
            ue(o, { modelValue: Te(t), 'onUpdate:modelValue': n[0] || (n[0] = (e) => ($e(t) ? (t.value = e) : null)) }, null, 8, [
              'modelValue',
            ]),
            (Ie(),
            xe(
              Se,
              null,
              ke(a, (e, t) =>
                ue(o, { modelValue: e.num, 'onUpdate:modelValue': (t) => (e.num = t), key: t, label: e.label }, null, 8, [
                  'modelValue',
                  'onUpdate:modelValue',
                  'label',
                ]),
              ),
              64,
            )),
            (Ie(),
            xe(
              Se,
              null,
              ke(a, (e, t) => Oe('div', { key: t }, He(e.label), 1)),
              64,
            )),
            ue(i, null, { default: Ce(() => [...(n[1] || (n[1] = [_e('复制', -1)]))]), _: 1 }),
          ])
        );
      };
    },
  }),
  Pl = { class: 'container' },
  Yl = { class: 'form-group' },
  Rl = Le(
    oe({
      __name: 'index',
      setup(e) {
        Ra.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = ie('calculator'),
          a = (e) => Ra(e).format('YYYY-MM-DD'),
          l = ie(a(new Date()));
        De('useDate', l);
        const n = ie(!1),
          o = (e) => {
            ((n.value = !1), (l.value = a(e)));
          };
        return (e, a) => {
          const i = na,
            r = Va,
            s = qt,
            u = Zt;
          return (
            Ie(),
            xe('div', Pl, [
              a[3] || (a[3] = Oe('h1', null, '🎫 票务计算器', -1)),
              Oe('div', Yl, [
                ue(i, { title: '选择日期', value: Te(l), onClick: a[0] || (a[0] = (e) => (n.value = !0)) }, null, 8, ['value']),
                ue(r, { show: Te(n), 'onUpdate:show': a[1] || (a[1] = (e) => ($e(n) ? (n.value = e) : null)), onConfirm: o }, null, 8, [
                  'show',
                ]),
              ]),
              ue(
                u,
                { active: Te(t), 'onUpdate:active': a[2] || (a[2] = (e) => ($e(t) ? (t.value = e) : null)) },
                {
                  default: Ce(() => [
                    ue(s, { title: '票务', name: 'calculator', key: 'calculator' }, { default: Ce(() => [ue(Hl)]), _: 1 }),
                    ue(s, { title: '证件', name: 'identifyLint', key: 'identifyLint' }, { default: Ce(() => [ue($l)]), _: 1 }),
                    ue(s, { title: '工具', name: 'tools', key: 'tools' }, { default: Ce(() => [ue(Bl)]), _: 1 }),
                    ue(s, { title: '术语', name: 'term', key: 'term' }, { default: Ce(() => [ue(Vl)]), _: 1 }),
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
export { Rl as default };
