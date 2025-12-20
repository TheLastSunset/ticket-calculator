/* empty css              */ import { r as e, a as t, u as a, B as l } from './index-DOmUyLGe.js';
import { t as n } from './data-CzclRJSf.js';
import {
  d as o,
  r,
  e as i,
  E as s,
  j as u,
  G as c,
  H as d,
  I as v,
  J as m,
  L as f,
  w as p,
  h,
  f as g,
  M as y,
  N as b,
  O as w,
  i as x,
  P as D,
  v as k,
  D as S,
  c as $,
  a as C,
  Q as M,
  u as T,
  x as A,
  k as O,
  F as I,
  z as N,
  o as _,
  t as B,
  _ as H,
} from './index-DTlM0rv7.js';
import {
  c as V,
  e as L,
  i as P,
  a as z,
  m as E,
  b as R,
  n as Y,
  u as F,
  d as W,
  p as U,
  H as j,
  r as G,
  f as Z,
  h as X,
  s as q,
  j as K,
  o as J,
  k as Q,
  l as ee,
  q as te,
  v as ae,
  g as le,
  x as ne,
  y as oe,
  z as re,
  A as ie,
  w as se,
  t as ue,
  C as ce,
  D as de,
  E as ve,
  F as me,
  G as fe,
  J as pe,
  K as he,
  L as ge,
  M as ye,
  N as be,
  O as we,
  P as xe,
  Q as De,
  I as ke,
  R as Se,
  S as $e,
  T as Ce,
  U as Me,
  V as Te,
  W as Ae,
  X as Oe,
  Y as Ie,
  Z as Ne,
  _ as _e,
  $ as Be,
  a0 as He,
} from './index-eFWSJLrZ.js';
import { u as Ve, a as Le, c as Pe, L as ze, s as Ee, P as Re, b as Ye } from './function-call-BkKQLTr8.js';
import { u as Fe } from './use-height-hfuAc1Hx.js';
const [We, Ue, je] = V('picker'),
  Ge = (e) => e.find((e) => !e.disabled) || e[0];
function Ze(e, t) {
  for (let a = (t = z(t, 0, e.length)); a < e.length; a++) if (!e[a].disabled) return a;
  for (let a = t - 1; a >= 0; a--) if (!e[a].disabled) return a;
  return 0;
}
const Xe = (e, t, a) => void 0 !== t && e.some((e) => e[a.value] === t);
function qe(e, t, a) {
  const l = e.findIndex((e) => e[a.value] === t);
  return e[Ze(e, l)];
}
const [Ke, Je] = V('picker-column'),
  Qe = Symbol(Ke);
var et = o({
  name: Ke,
  props: {
    value: Y,
    fields: E(Object),
    options: R(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: E(Number),
    swipeDuration: E(Y),
    visibleOptionNum: E(Y),
  },
  emits: ['change', 'clickOption', 'scrollInto'],
  setup(e, { emit: t, slots: a }) {
    let l, n, o, c, d;
    const v = r(),
      m = r(),
      f = r(0),
      p = r(0),
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
        (l && o !== f.value ? (d = r) : r(), (f.value = o));
      },
      w = () => e.readonly || !e.options.length,
      x = (t) => z(Math.round(-t / e.optionHeight), 0, g() - 1),
      D = i(() => x(f.value)),
      k = () => {
        ((l = !1), (p.value = 0), d && (d(), (d = null)));
      },
      S = (e) => {
        if (!w()) {
          if ((h.start(e), l)) {
            const e = (function (e) {
              const { transform: t } = window.getComputedStyle(e),
                a = t.slice(7, t.length - 1).split(', ')[5];
              return Number(a);
            })(m.value);
            f.value = Math.min(0, e - y());
          }
          ((p.value = 0), (n = f.value), (o = Date.now()), (c = n), (d = null));
        }
      },
      $ = () => {
        if (w()) return;
        const t = f.value - c,
          a = Date.now() - o;
        if (a < 300 && Math.abs(t) > 15)
          return void ((t, a) => {
            const l = Math.abs(t / a);
            t = f.value + (l / 0.003) * (t < 0 ? -1 : 1);
            const n = x(t);
            ((p.value = +e.swipeDuration), b(n));
          })(t, a);
        const n = x(f.value);
        ((p.value = 200),
          b(n),
          setTimeout(() => {
            l = !1;
          }, 0));
      },
      C = () => {
        const n = { height: `${e.optionHeight}px` };
        return e.options.map((o, r) => {
          const i = o[e.fields.text],
            { disabled: s } = o,
            c = o[e.fields.value],
            v = {
              role: 'button',
              style: n,
              tabindex: s ? -1 : 0,
              class: [Je('item', { disabled: s, selected: c === e.value }), o.className],
              onClick: () =>
                ((a) => {
                  l || w() || ((d = null), (p.value = 200), b(a), t('clickOption', e.options[a]));
                })(r),
            },
            m = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: i };
          return u('li', v, [a.option ? a.option(o, r) : u('div', m, null)]);
        });
      };
    return (
      F(Qe),
      Le({ stopMomentum: k }),
      s(() => {
        const t = l ? Math.floor(-f.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          a = Ze(e.options, t),
          n = -a * e.optionHeight;
        (l && a < t && k(), (f.value = n));
      }),
      W(
        'touchmove',
        (a) => {
          if (w()) return;
          (h.move(a), h.isVertical() && ((l = !0), U(a, !0)));
          const r = z(n + h.deltaY.value, -g() * e.optionHeight, e.optionHeight),
            i = x(r);
          (i !== D.value && t('scrollInto', e.options[i]), (f.value = r));
          const s = Date.now();
          s - o > 300 && ((o = s), (c = r));
        },
        { target: v },
      ),
      () =>
        u('div', { ref: v, class: Je(), onTouchstartPassive: S, onTouchend: $, onTouchcancel: $ }, [
          u(
            'ul',
            {
              ref: m,
              style: {
                transform: `translate3d(0, ${f.value + y()}px, 0)`,
                transitionDuration: `${p.value}ms`,
                transitionProperty: p.value ? 'all' : 'none',
              },
              class: Je('wrapper'),
              onTransitionend: k,
            },
            [C()],
          ),
        ])
    );
  },
});
const [tt] = V('picker-toolbar'),
  at = { title: String, cancelButtonText: String, confirmButtonText: String },
  lt = ['cancel', 'confirm', 'title', 'toolbar'],
  nt = Object.keys(at);
var ot = o({
  name: tt,
  props: at,
  emits: ['confirm', 'cancel'],
  setup(e, { emit: t, slots: a }) {
    const l = () => t('cancel'),
      n = () => t('confirm'),
      o = () => {
        var t;
        const n = null != (t = e.cancelButtonText) ? t : je('cancel');
        if (a.cancel || n) return u('button', { type: 'button', class: [Ue('cancel'), j], onClick: l }, [a.cancel ? a.cancel() : n]);
      },
      r = () => {
        var t;
        const l = null != (t = e.confirmButtonText) ? t : je('confirm');
        if (a.confirm || l) return u('button', { type: 'button', class: [Ue('confirm'), j], onClick: n }, [a.confirm ? a.confirm() : l]);
      };
    return () =>
      u('div', { class: Ue('toolbar') }, [
        a.toolbar
          ? a.toolbar()
          : [o(), a.title ? a.title() : e.title ? u('div', { class: [Ue('title'), 'van-ellipsis'] }, [e.title]) : void 0, r()],
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
  const e = c(),
    { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
  return `${t}-${++gt}`;
}
function bt() {
  const e = r([]),
    t = [];
  d(() => {
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
  if (!K || !window.IntersectionObserver) return;
  const a = new IntersectionObserver(
      (e) => {
        t(e[0].intersectionRatio > 0);
      },
      { root: document.body },
    ),
    l = () => {
      e.value && a.unobserve(e.value);
    };
  (v(l),
    m(l),
    J(() => {
      e.value && a.observe(e.value);
    }));
}
const [xt, Dt] = V('sticky');
const kt = se(
    o({
      name: xt,
      props: { zIndex: Y, position: ee('top'), container: Object, offsetTop: Q(0), offsetBottom: Q(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: a }) {
        const l = r(),
          n = te(l),
          o = f({ fixed: !1, width: 0, height: 0, transform: 0 }),
          s = r(!1),
          c = i(() => ae('top' === e.position ? e.offsetTop : e.offsetBottom)),
          d = i(() => {
            if (s.value) return;
            const { fixed: e, height: t, width: a } = o;
            return e ? { width: `${a}px`, height: `${t}px` } : void 0;
          }),
          v = i(() => {
            if (!o.fixed || s.value) return;
            const t = L(le(e.zIndex), { width: `${o.width}px`, height: `${o.height}px`, [e.position]: `${c.value}px` });
            return (o.transform && (t.transform = `translate3d(0, ${o.transform}px, 0)`), t);
          }),
          m = () => {
            if (!l.value || ne(l)) return;
            const { container: a, position: n } = e,
              r = oe(l),
              i = X(window);
            if (((o.width = r.width), (o.height = r.height), 'top' === n))
              if (a) {
                const e = oe(a),
                  t = e.bottom - c.value - o.height;
                ((o.fixed = c.value > r.top && e.bottom > 0), (o.transform = t < 0 ? t : 0));
              } else o.fixed = c.value > r.top;
            else {
              const { clientHeight: e } = document.documentElement;
              if (a) {
                const t = oe(a),
                  l = e - t.top - c.value - o.height;
                ((o.fixed = e - c.value < r.bottom && e > t.top), (o.transform = l < 0 ? -l : 0));
              } else o.fixed = e - c.value < r.bottom;
            }
            ((e) => {
              t('scroll', { scrollTop: e, isFixed: o.fixed });
            })(i);
          };
        return (
          p(
            () => o.fixed,
            (e) => t('change', e),
          ),
          W('scroll', m, { target: n, passive: !0 }),
          wt(l, m),
          p([re, ie], () => {
            l.value &&
              !ne(l) &&
              o.fixed &&
              ((s.value = !0),
              h(() => {
                const e = oe(l);
                ((o.width = e.width), (o.height = e.height), (s.value = !1));
              }));
          }),
          () => {
            var e;
            return u('div', { ref: l, style: d.value }, [
              u('div', { class: Dt({ fixed: o.fixed && !s.value }), style: v.value }, [null == (e = a.default) ? void 0 : e.call(a)]),
            ]);
          }
        );
      },
    }),
  ),
  [St, $t] = V('swipe'),
  Ct = {
    loop: ue,
    width: Y,
    height: Y,
    vertical: Boolean,
    autoplay: Q(0),
    duration: Q(500),
    touchable: ue,
    lazyRender: Boolean,
    initialSwipe: Q(0),
    indicatorColor: String,
    showIndicators: ue,
    stopPropagation: ue,
  },
  Mt = Symbol(St);
const Tt = se(
    o({
      name: St,
      props: Ct,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: a }) {
        const l = r(),
          n = r(),
          o = f({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let s = !1;
        const c = Ve(),
          { children: d, linkChildren: b } = ce(Mt),
          w = i(() => d.length),
          x = i(() => o[e.vertical ? 'height' : 'width']),
          D = i(() => (e.vertical ? c.deltaY.value : c.deltaX.value)),
          k = i(() => {
            if (o.rect) {
              return (e.vertical ? o.rect.height : o.rect.width) - x.value * w.value;
            }
            return 0;
          }),
          S = i(() => (x.value ? Math.ceil(Math.abs(k.value) / x.value) : w.value)),
          $ = i(() => w.value * x.value),
          C = i(() => (o.active + w.value) % w.value),
          M = i(() => {
            const t = e.vertical ? 'vertical' : 'horizontal';
            return c.direction.value === t;
          }),
          T = i(() => {
            const t = {
              transitionDuration: `${o.swiping ? 0 : e.duration}ms`,
              transform: `translate${e.vertical ? 'Y' : 'X'}(${+o.offset.toFixed(2)}px)`,
            };
            if (x.value) {
              const a = e.vertical ? 'height' : 'width',
                l = e.vertical ? 'width' : 'height';
              ((t[a] = `${$.value}px`), (t[l] = e[l] ? `${e[l]}px` : ''));
            }
            return t;
          }),
          A = (t, a = 0) => {
            let l = t * x.value;
            e.loop || (l = Math.min(l, -k.value));
            let n = a - l;
            return (e.loop || (n = z(n, k.value, 0)), n);
          },
          O = ({ pace: a = 0, offset: l = 0, emitChange: n }) => {
            if (w.value <= 1) return;
            const { active: r } = o,
              i = ((t) => {
                const { active: a } = o;
                return t ? (e.loop ? z(a + t, -1, w.value) : z(a + t, 0, S.value)) : a;
              })(a),
              s = A(i, l);
            if (e.loop) {
              if (d[0] && s !== k.value) {
                const e = s < k.value;
                d[0].setOffset(e ? $.value : 0);
              }
              if (d[w.value - 1] && 0 !== s) {
                const e = s > 0;
                d[w.value - 1].setOffset(e ? -$.value : 0);
              }
            }
            ((o.active = i), (o.offset = s), n && i !== r && t('change', C.value));
          },
          I = () => {
            ((o.swiping = !0), o.active <= -1 ? O({ pace: w.value }) : o.active >= w.value && O({ pace: -w.value }));
          },
          N = () => {
            (I(),
              c.reset(),
              me(() => {
                ((o.swiping = !1), O({ pace: 1, emitChange: !0 }));
              }));
          };
        let _;
        const B = () => clearTimeout(_),
          H = () => {
            (B(),
              +e.autoplay > 0 &&
                w.value > 1 &&
                (_ = setTimeout(() => {
                  (N(), H());
                }, +e.autoplay)));
          },
          V = (t = +e.initialSwipe) => {
            if (!l.value) return;
            const a = () => {
              var a, n;
              if (!ne(l)) {
                const t = { width: l.value.offsetWidth, height: l.value.offsetHeight };
                ((o.rect = t), (o.width = +(null != (a = e.width) ? a : t.width)), (o.height = +(null != (n = e.height) ? n : t.height)));
              }
              (w.value && -1 === (t = Math.min(w.value - 1, t)) && (t = w.value - 1),
                (o.active = t),
                (o.swiping = !0),
                (o.offset = A(t)),
                d.forEach((e) => {
                  e.setOffset(0);
                }),
                H());
            };
            ne(l) ? h().then(a) : a();
          },
          L = () => V(o.active);
        let P;
        const E = (t) => {
            !e.touchable || t.touches.length > 1 || (c.start(t), (s = !1), (P = Date.now()), B(), I());
          },
          R = () => {
            if (!e.touchable || !o.swiping) return;
            const a = Date.now() - P,
              l = D.value / a;
            if ((Math.abs(l) > 0.25 || Math.abs(D.value) > x.value / 2) && M.value) {
              const t = e.vertical ? c.offsetY.value : c.offsetX.value;
              let a = 0;
              ((a = e.loop ? (t > 0 ? (D.value > 0 ? -1 : 1) : 0) : -Math[D.value > 0 ? 'ceil' : 'floor'](D.value / x.value)),
                O({ pace: a, emitChange: !0 }));
            } else D.value && O({ pace: 0 });
            ((s = !1), (o.swiping = !1), t('dragEnd', { index: C.value }), H());
          },
          Y = (t, a) => {
            const l = a === C.value,
              n = l ? { backgroundColor: e.indicatorColor } : void 0;
            return u('i', { style: n, class: $t('indicator', { active: l }) }, null);
          };
        return (
          Le({
            prev: () => {
              (I(),
                c.reset(),
                me(() => {
                  ((o.swiping = !1), O({ pace: -1, emitChange: !0 }));
                }));
            },
            next: N,
            state: o,
            resize: L,
            swipeTo: (t, a = {}) => {
              (I(),
                c.reset(),
                me(() => {
                  let l;
                  ((l = e.loop && t === w.value ? (0 === o.active ? 0 : t) : t % w.value),
                    a.immediate
                      ? me(() => {
                          o.swiping = !1;
                        })
                      : (o.swiping = !1),
                    O({ pace: l - o.active, emitChange: !0 }));
                }));
            },
          }),
          b({ size: x, props: e, count: w, activeIndicator: C }),
          p(
            () => e.initialSwipe,
            (e) => V(+e),
          ),
          p(w, () => V(o.active)),
          p(() => e.autoplay, H),
          p([re, ie, () => e.width, () => e.height], L),
          p(de(), (e) => {
            'visible' === e ? H() : B();
          }),
          g(V),
          y(() => V(o.active)),
          ve(() => V(o.active)),
          v(B),
          m(B),
          W(
            'touchmove',
            (a) => {
              if (e.touchable && o.swiping && (c.move(a), M.value)) {
                (!e.loop && ((0 === o.active && D.value > 0) || (o.active === w.value - 1 && D.value < 0))) ||
                  (U(a, e.stopPropagation), O({ offset: D.value }), s || (t('dragStart', { index: C.value }), (s = !0)));
              }
            },
            { target: n },
          ),
          () => {
            var t;
            return u('div', { ref: l, class: $t() }, [
              u(
                'div',
                {
                  ref: n,
                  style: T.value,
                  class: $t('track', { vertical: e.vertical }),
                  onTouchstartPassive: E,
                  onTouchend: R,
                  onTouchcancel: R,
                },
                [null == (t = a.default) ? void 0 : t.call(a)],
              ),
              a.indicator
                ? a.indicator({ active: C.value, total: w.value })
                : e.showIndicators && w.value > 1
                  ? u('div', { class: $t('indicators', { vertical: e.vertical }) }, [Array(w.value).fill('').map(Y)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [At, Ot] = V('tabs');
var It = o({
  name: At,
  props: {
    count: E(Number),
    inited: Boolean,
    animated: Boolean,
    duration: E(Y),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: E(Number),
  },
  emits: ['change'],
  setup(e, { emit: t, slots: a }) {
    const l = r(),
      n = (e) => t('change', e),
      o = () => {
        var t;
        const o = null == (t = a.default) ? void 0 : t.call(a);
        return e.animated || e.swipeable
          ? u(
              Tt,
              {
                ref: l,
                loop: !1,
                class: Ot('track'),
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
      p(() => e.currentIndex, i),
      g(() => {
        i(e.currentIndex);
      }),
      Le({ swipeRef: l }),
      () => u('div', { class: Ot('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [Nt, _t] = V('tabs'),
  Bt = {
    type: ee('line'),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: Q(0),
    duration: Q(0.3),
    animated: Boolean,
    ellipsis: ue,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: Q(0),
    background: String,
    lazyRender: ue,
    showHeader: ue,
    lineWidth: Y,
    lineHeight: Y,
    beforeChange: Function,
    swipeThreshold: Q(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Ht = Symbol(Nt);
var Vt = o({
  name: Nt,
  props: Bt,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: a, slots: l }) {
    let n, o, s, c, d;
    const v = r(),
      m = r(),
      g = r(),
      b = r(),
      w = yt(),
      x = te(v),
      [D, k] = bt(),
      { children: S, linkChildren: $ } = ce(Ht),
      C = f({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      M = i(() => S.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      T = i(() => ({ borderColor: t.color, background: t.background })),
      A = (e, t) => {
        var a;
        return null != (a = e.name) ? a : t;
      },
      O = i(() => {
        const e = S[C.currentIndex];
        if (e) return A(e, C.currentIndex);
      }),
      I = i(() => ae(t.offsetTop)),
      N = i(() => (t.sticky ? I.value + n : 0)),
      _ = (e) => {
        const a = m.value,
          l = D.value;
        if (!(M.value && a && l && l[C.currentIndex])) return;
        const n = l[C.currentIndex].$el,
          o = n.offsetLeft - (a.offsetWidth - n.offsetWidth) / 2;
        (c && c(),
          (c = (function (e, t, a) {
            let l,
              n = 0;
            const o = e.scrollLeft,
              r = 0 === a ? 1 : Math.round((1e3 * a) / 16);
            let i = o;
            return (
              (function a() {
                ((i += (t - o) / r), (e.scrollLeft = i), ++n < r && (l = G(a)));
              })(),
              function () {
                Z(l);
              }
            );
          })(a, o, e ? 0 : +t.duration)));
      },
      B = () => {
        const e = C.inited;
        h(() => {
          const a = D.value;
          if (!a || !a[C.currentIndex] || 'line' !== t.type || ne(v.value)) return;
          const l = a[C.currentIndex].$el,
            { lineWidth: n, lineHeight: o } = t,
            r = l.offsetLeft + l.offsetWidth / 2,
            i = { width: fe(n), backgroundColor: t.color, transform: `translateX(${r}px) translateX(-50%)` };
          if ((e && (i.transitionDuration = `${t.duration}s`), P(o))) {
            const e = fe(o);
            ((i.height = e), (i.borderRadius = e));
          }
          C.lineStyle = i;
        });
      },
      H = (e, l) => {
        const n = ((e) => {
          const t = e < C.currentIndex ? -1 : 1;
          for (; e >= 0 && e < S.length; ) {
            if (!S[e].disabled) return e;
            e += t;
          }
        })(e);
        if (!P(n)) return;
        const o = S[n],
          r = A(o, n),
          i = null !== C.currentIndex;
        (C.currentIndex !== n && ((C.currentIndex = n), l || _(), B()),
          r !== t.active && (a('update:active', r), i && a('change', r, o.title)),
          s && !t.scrollspy && he(Math.ceil(ge(v.value) - I.value)));
      },
      V = (e, t) => {
        const a = S.findIndex((t, a) => A(t, a) === e);
        H(-1 === a ? 0 : a, t);
      },
      L = (e = !1) => {
        if (t.scrollspy) {
          const a = S[C.currentIndex].$el;
          if (a && x.value) {
            const l = ge(a, x.value) - N.value;
            ((o = !0),
              d && d(),
              (d = (function (e, t, a, l) {
                let n,
                  o = X(e);
                const r = o < t,
                  i = 0 === a ? 1 : Math.round((1e3 * a) / 16),
                  s = (t - o) / i;
                return (
                  (function a() {
                    ((o += s),
                      ((r && o > t) || (!r && o < t)) && (o = t),
                      q(e, o),
                      (r && o < t) || (!r && o > t) ? (n = G(a)) : l && (n = G(l)));
                  })(),
                  function () {
                    Z(n);
                  }
                );
              })(x.value, l, e ? 0 : +t.duration, () => {
                o = !1;
              })));
          }
        }
      },
      z = (l, n, o) => {
        const { title: r, disabled: i } = S[n],
          s = A(S[n], n);
        (i ||
          (Pe(t.beforeChange, {
            args: [s],
            done: () => {
              (H(n), L());
            },
          }),
          e(l)),
          a('clickTab', { name: s, title: r, event: o, disabled: i }));
      },
      E = (e) => {
        ((s = e.isFixed), a('scroll', e));
      },
      R = () => {
        if ('line' === t.type && S.length) return u('div', { class: _t('line'), style: C.lineStyle }, null);
      },
      Y = () => {
        var e, a, n;
        const { type: o, border: r, sticky: i } = t,
          s = [
            u('div', { ref: i ? void 0 : g, class: [_t('wrap'), { [pe]: 'line' === o && r }] }, [
              u(
                'div',
                {
                  ref: m,
                  role: 'tablist',
                  class: _t('nav', [o, { shrink: t.shrink, complete: M.value }]),
                  style: T.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = l['nav-left']) ? void 0 : e.call(l),
                  S.map((e) => e.renderTitle(z)),
                  R(),
                  null == (a = l['nav-right']) ? void 0 : a.call(l),
                ],
              ),
            ]),
            null == (n = l['nav-bottom']) ? void 0 : n.call(l),
          ];
        return i ? u('div', { ref: g }, [s]) : s;
      },
      F = () => {
        (B(),
          h(() => {
            var e, t;
            (_(!0), null == (t = null == (e = b.value) ? void 0 : e.swipeRef.value) || t.resize());
          }));
      };
    (p(() => [t.color, t.duration, t.lineWidth, t.lineHeight], B),
      p(re, F),
      p(
        () => t.active,
        (e) => {
          e !== O.value && V(e);
        },
      ),
      p(
        () => S.length,
        () => {
          C.inited &&
            (V(t.active),
            B(),
            h(() => {
              _(!0);
            }));
        },
      ));
    return (
      Le({
        resize: F,
        scrollTo: (e) => {
          h(() => {
            (V(e), L(!0));
          });
        },
      }),
      y(B),
      ve(B),
      J(() => {
        (V(t.active, !0),
          h(() => {
            ((C.inited = !0), g.value && (n = oe(g.value).height), _(!0));
          }));
      }),
      wt(v, B),
      W(
        'scroll',
        () => {
          if (t.scrollspy && !o) {
            const e = (() => {
              for (let e = 0; e < S.length; e++) {
                const { top: t } = oe(S[e].$el);
                if (t > N.value) return 0 === e ? 0 : e - 1;
              }
              return S.length - 1;
            })();
            H(e);
          }
        },
        { target: x, passive: !0 },
      ),
      $({
        id: w,
        props: t,
        setLine: B,
        scrollable: M,
        onRendered: (e, t) => a('rendered', e, t),
        currentName: O,
        setTitleRefs: k,
        scrollIntoView: _,
      }),
      () =>
        u('div', { ref: v, class: _t([t.type]) }, [
          t.showHeader ? (t.sticky ? u(kt, { container: v.value, offsetTop: I.value, onScroll: E }, { default: () => [Y()] }) : Y()) : null,
          u(
            It,
            {
              ref: b,
              count: S.length,
              inited: C.inited,
              animated: t.animated,
              duration: t.duration,
              swipeable: t.swipeable,
              lazyRender: t.lazyRender,
              currentIndex: C.currentIndex,
              onChange: H,
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
const Lt = Symbol(),
  Pt = Symbol(),
  zt = (e) => {
    const t = b(Pt, null);
    (w(Lt, e),
      w(
        Pt,
        i(() => (null == t || t.value) && e.value),
      ));
  },
  [Et, Rt] = V('tab'),
  Yt = o({
    name: Et,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: Y,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: ue,
    },
    setup(e, { slots: t }) {
      const a = i(() => {
          const t = {},
            { type: a, color: l, disabled: n, isActive: o, activeColor: r, inactiveColor: i } = e;
          l && 'card' === a && ((t.borderColor = l), n || (o ? (t.backgroundColor = l) : (t.color = l)));
          const s = o ? r : i;
          return (s && (t.color = s), t);
        }),
        l = () => {
          const a = u('span', { class: Rt('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
          return e.dot || (P(e.badge) && '' !== e.badge)
            ? u(ye, { dot: e.dot, content: e.badge, showZero: e.showZeroBadge }, { default: () => [a] })
            : a;
        };
      return () =>
        u(
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
  [Ft, Wt] = V('swipe-item');
const Ut = se(
    o({
      name: Ft,
      setup(e, { slots: t }) {
        let a;
        const l = f({ offset: 0, inited: !1, mounted: !1 }),
          { parent: n, index: o } = F(Mt);
        if (!n) return;
        const r = i(() => {
            const e = {},
              { vertical: t } = n.props;
            return (
              n.size.value && (e[t ? 'height' : 'width'] = `${n.size.value}px`),
              l.offset && (e.transform = `translate${t ? 'Y' : 'X'}(${l.offset}px)`),
              e
            );
          }),
          s = i(() => {
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
          g(() => {
            h(() => {
              l.mounted = !0;
            });
          }),
          Le({
            setOffset: (e) => {
              l.offset = e;
            },
          }),
          () => {
            var e;
            return u('div', { class: Wt(), style: r.value }, [s.value ? (null == (e = t.default) ? void 0 : e.call(t)) : null]);
          }
        );
      },
    }),
  ),
  [jt, Gt] = V('tab');
const Zt = se(
    o({
      name: jt,
      props: L({}, t, {
        dot: Boolean,
        name: Y,
        badge: Y,
        title: String,
        disabled: Boolean,
        titleClass: be,
        titleStyle: [String, Object],
        showZeroBadge: ue,
      }),
      setup(e, { slots: t }) {
        const a = yt(),
          l = r(!1),
          n = c(),
          { parent: o, index: d } = F(Ht);
        if (!o) return;
        const v = () => {
            var t;
            return null != (t = e.name) ? t : d.value;
          },
          m = i(() => {
            const t = v() === o.currentName.value;
            return (
              t &&
                !l.value &&
                ((l.value = !0),
                o.props.lazyRender &&
                  h(() => {
                    o.onRendered(v(), e.title);
                  })),
              t
            );
          }),
          f = r(''),
          g = r('');
        s(() => {
          const { titleClass: t, titleStyle: a } = e;
          ((f.value = t ? ht(t) : ''),
            (g.value =
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
        const y = r(!m.value);
        return (
          p(m, (e) => {
            e
              ? (y.value = !1)
              : me(() => {
                  y.value = !0;
                });
          }),
          p(
            () => e.title,
            () => {
              (o.setLine(), o.scrollIntoView());
            },
          ),
          zt(m),
          Le({
            id: a,
            renderTitle: (l) =>
              u(
                Yt,
                D(
                  {
                    key: a,
                    id: `${o.id}-${d.value}`,
                    ref: o.setTitleRefs(d.value),
                    style: g.value,
                    class: f.value,
                    isActive: m.value,
                    controls: a,
                    scrollable: o.scrollable.value,
                    activeColor: o.props.titleActiveColor,
                    inactiveColor: o.props.titleInactiveColor,
                    onClick: (e) => l(n.proxy, d.value, e),
                  },
                  we(o.props, ['type', 'color', 'shrink']),
                  we(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
                ),
                { title: t.title },
              ),
          }),
          () => {
            var e;
            const n = `${o.id}-${d.value}`,
              { animated: r, swipeable: i, scrollspy: s, lazyRender: c } = o.props;
            if (!t.default && !r) return;
            const v = s || m.value;
            if (r || i)
              return u(
                Ut,
                {
                  id: a,
                  role: 'tabpanel',
                  class: Gt('panel-wrapper', { inactive: y.value }),
                  tabindex: m.value ? 0 : -1,
                  'aria-hidden': !m.value,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                {
                  default: () => {
                    var e;
                    return [u('div', { class: Gt('panel') }, [null == (e = t.default) ? void 0 : e.call(t)])];
                  },
                },
              );
            const f = l.value || s || !c ? (null == (e = t.default) ? void 0 : e.call(t)) : null;
            return x(
              u(
                'div',
                {
                  id: a,
                  role: 'tabpanel',
                  class: Gt('panel'),
                  tabindex: v ? 0 : -1,
                  'aria-labelledby': n,
                  'data-allow-mismatch': 'attribute',
                },
                [f],
              ),
              [[k, v]],
            );
          }
        );
      },
    }),
  ),
  Xt = se(Vt),
  [qt] = V('picker-group'),
  Kt = Symbol(qt);
L({ tabs: R(), activeTab: Q(0), nextStepText: String, showToolbar: ue }, at);
const Jt = L(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: Q(44),
    showToolbar: ue,
    swipeDuration: Q(1e3),
    visibleOptionNum: Q(6),
  },
  at,
);
const Qt = se(
    o({
      name: We,
      props: L({}, Jt, { columns: R(), modelValue: R(), toolbarPosition: ee('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: a }) {
        const l = r(),
          n = r(e.modelValue.slice(0)),
          { parent: o } = F(Kt),
          { children: s, linkChildren: c } = ce(Qe);
        c();
        const d = i(() =>
            (function (e) {
              return L({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          v = i(() => ae(e.optionHeight)),
          m = i(() =>
            (function (e, t) {
              const a = e[0];
              if (a) {
                if (Array.isArray(a)) return 'multiple';
                if (t.children in a) return 'cascade';
              }
              return 'default';
            })(e.columns, d.value),
          ),
          f = i(() => {
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
                      r = a.value[o];
                    ((n = P(r) ? qe(e, r, t) : void 0), !n && e.length && (n = qe(e, Ge(e)[t.value], t)), o++, l.push(e));
                  }
                  return l;
                })(t, d.value, n);
              default:
                return [t];
            }
          }),
          g = i(() => f.value.some((e) => e.length)),
          y = i(() => f.value.map((e, t) => qe(e, n.value[t], d.value))),
          b = i(() => f.value.map((e, t) => e.findIndex((e) => e[d.value.value] === n.value[t]))),
          w = (e, t) => {
            if (n.value[e] !== t) {
              const a = n.value.slice(0);
              ((a[e] = t), (n.value = a));
            }
          },
          x = () => ({ selectedValues: n.value.slice(0), selectedOptions: y.value, selectedIndexes: b.value }),
          k = () => {
            s.forEach((e) => e.stopMomentum());
            const e = x();
            return (
              h(() => {
                const e = x();
                t('confirm', e);
              }),
              e
            );
          },
          S = () => t('cancel', x()),
          $ = () =>
            f.value.map((l, o) =>
              u(
                et,
                {
                  value: n.value[o],
                  fields: d.value,
                  options: l,
                  readonly: e.readonly,
                  allowHtml: e.allowHtml,
                  optionHeight: v.value,
                  swipeDuration: e.swipeDuration,
                  visibleOptionNum: e.visibleOptionNum,
                  onChange: (e) =>
                    ((e, a) => {
                      (w(a, e),
                        'cascade' === m.value &&
                          n.value.forEach((e, t) => {
                            const a = f.value[t];
                            Xe(a, e, d.value) || w(t, a.length ? a[0][d.value.value] : void 0);
                          }),
                        h(() => {
                          t('change', L({ columnIndex: a }, x()));
                        }));
                    })(e, o),
                  onClickOption: (e) =>
                    ((e, a) => {
                      const l = { columnIndex: a, currentOption: e };
                      (t('clickOption', L(x(), l)), t('scrollInto', l));
                    })(e, o),
                  onScrollInto: (e) => {
                    t('scrollInto', { currentOption: e, columnIndex: o });
                  },
                },
                { option: a.option },
              ),
            ),
          C = (e) => {
            if (g.value) {
              const t = { height: `${v.value}px` },
                a = { backgroundSize: `100% ${(e - v.value) / 2}px` };
              return [u('div', { class: Ue('mask'), style: a }, null), u('div', { class: [xe, Ue('frame')], style: t }, null)];
            }
          },
          M = () => {
            const t = v.value * +e.visibleOptionNum,
              n = { height: `${t}px` };
            return e.loading || g.value || !a.empty ? u('div', { ref: l, class: Ue('columns'), style: n }, [$(), C(t)]) : a.empty();
          },
          T = () => {
            if (e.showToolbar && !o) return u(ot, D(we(e, nt), { onConfirm: k, onCancel: S }), we(a, lt));
          },
          A = (e) => {
            e.forEach((e, t) => {
              e.length && !Xe(e, n.value[t], d.value) && w(t, Ge(e)[d.value.value]);
            });
          };
        let O;
        (p(f, (e) => A(e), { immediate: !0 }),
          p(
            () => e.modelValue,
            (t) => {
              (De(t, n.value) || De(t, O) || ((n.value = t.slice(0)), (O = t.slice(0))), 0 === e.modelValue.length && A(f.value));
            },
            { deep: !0 },
          ),
          p(
            n,
            (a) => {
              De(a, e.modelValue) || ((O = a.slice(0)), t('update:modelValue', O));
            },
            { immediate: !0 },
          ),
          W('touchmove', U, { target: l }));
        return (
          Le({ confirm: k, getSelectedOptions: () => y.value }),
          () => {
            var t, l;
            return u('div', { class: Ue() }, [
              'top' === e.toolbarPosition ? T() : null,
              e.loading ? u(ze, { class: Ue('loading') }, null) : null,
              null == (t = a['columns-top']) ? void 0 : t.call(a),
              M(),
              null == (l = a['columns-bottom']) ? void 0 : l.call(a),
              'bottom' === e.toolbarPosition ? T() : null,
            ]);
          }
        );
      },
    }),
  ),
  [ea, ta] = V('cell'),
  aa = {
    tag: ee('div'),
    icon: String,
    size: String,
    title: Y,
    value: Y,
    label: Y,
    center: Boolean,
    isLink: Boolean,
    border: ue,
    iconPrefix: String,
    valueClass: be,
    labelClass: be,
    titleClass: be,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const la = se(
  o({
    name: ea,
    props: L({}, aa, t),
    setup(e, { slots: t }) {
      const l = a(),
        n = () => {
          if (t.label || P(e.label)) return u('div', { class: [ta('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var a;
          if (t.title || P(e.title)) {
            const l = null == (a = t.title) ? void 0 : a.call(t);
            if (Array.isArray(l) && 0 === l.length) return;
            return u('div', { class: [ta('title'), e.titleClass], style: e.titleStyle }, [l || u('span', null, [e.title]), n()]);
          }
        },
        r = () => {
          const a = t.value || t.default;
          if (a || P(e.value)) return u('div', { class: [ta('value'), e.valueClass] }, [a ? a() : u('span', null, [e.value])]);
        },
        i = () => {
          if (t['right-icon']) return t['right-icon']();
          if (e.isLink) {
            const t = e.arrowDirection && 'right' !== e.arrowDirection ? `arrow-${e.arrowDirection}` : 'arrow';
            return u(ke, { name: t, class: ta('right-icon') }, null);
          }
        };
      return () => {
        var a;
        const { tag: n, size: s, center: c, border: d, isLink: v, required: m } = e,
          f = null != (a = e.clickable) ? a : v,
          p = { center: c, required: !!m, clickable: f, borderless: !d };
        return (
          s && (p[s] = !!s),
          u(
            n,
            { class: ta(p), role: f ? 'button' : void 0, tabindex: f ? 0 : void 0, onClick: l },
            {
              default: () => {
                var a;
                return [
                  t.icon ? t.icon() : e.icon ? u(ke, { name: e.icon, class: ta('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
                  o(),
                  r(),
                  i(),
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
  return Ce(a) ? a(e, t) : a || '';
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
const [ca, da] = V('field'),
  va = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: Y,
    max: Number,
    min: Number,
    formatter: Function,
    clearIcon: ee('clear'),
    modelValue: Q(''),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: ee('focus'),
    formatTrigger: ee('onChange'),
    spellcheck: { type: Boolean, default: null },
    error: { type: Boolean, default: null },
    disabled: { type: Boolean, default: null },
    readonly: { type: Boolean, default: null },
    inputmode: String,
  };
const ma = se(
  o({
    name: ca,
    props: L({}, aa, va, {
      rows: Y,
      type: ee('text'),
      rules: Array,
      autosize: [Boolean, Object],
      labelWidth: Y,
      labelClass: be,
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
        n = f({ status: 'unvalidated', focused: !1, validateMessage: '' }),
        o = r(),
        s = r(),
        c = r(),
        { parent: d } = F(Ae),
        v = () => {
          var t;
          return String(null != (t = e.modelValue) ? t : '');
        },
        m = (t) => (P(e[t]) ? e[t] : d && P(d.props[t]) ? d.props[t] : void 0),
        y = i(() => {
          const t = m('readonly');
          if (e.clearable && !t) {
            const t = '' !== v(),
              a = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && n.focused);
            return t && a;
          }
          return !1;
        }),
        b = i(() => (c.value && a.input ? c.value() : e.modelValue)),
        x = i(() => {
          var t;
          const a = m('required');
          return 'auto' === a ? (null == (t = e.rules) ? void 0 : t.some((e) => e.required)) : a;
        }),
        k = (e) =>
          e.reduce(
            (e, t) =>
              e.then(() => {
                if ('failed' === n.status) return;
                let { value: e } = b;
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
                      Me(l) ? l.then(a) : a(l);
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
        $ = () => {
          ((n.status = 'unvalidated'), (n.validateMessage = ''));
        },
        C = () => t('endValidate', { status: n.status, message: n.validateMessage }),
        M = (a = e.rules) =>
          new Promise((l) => {
            ($(),
              a
                ? (t('startValidate'),
                  k(a).then(() => {
                    'failed' === n.status ? (l({ name: e.name, message: n.validateMessage }), C()) : ((n.status = 'passed'), l(), C());
                  }))
                : l());
          }),
        T = (t) => {
          if (d && e.rules) {
            const { validateTrigger: a } = d.props,
              l = Oe(a).includes(t),
              n = e.rules.filter((e) => (e.trigger ? Oe(e.trigger).includes(t) : l));
            n.length && M(n);
          }
        },
        A = (a, l = 'onChange') => {
          var r, i;
          const s = a;
          a = ((t) => {
            var a;
            const { maxlength: l } = e;
            if (P(l) && sa(t) > +l) {
              const e = v();
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
          const u = s.length - a.length;
          if ('number' === e.type || 'digit' === e.type) {
            const t = 'number' === e.type;
            if (((a = Te(a, t, t)), 'onBlur' === l && '' !== a && (void 0 !== e.min || void 0 !== e.max))) {
              const t = z(+a, null != (r = e.min) ? r : -1 / 0, null != (i = e.max) ? i : 1 / 0);
              +a !== t && (a = t.toString());
            }
          }
          let c = 0;
          if (e.formatter && l === e.formatTrigger) {
            const { formatter: t, maxlength: l } = e;
            if (((a = t(a)), P(l) && sa(a) > +l && (a = ua(a, +l)), o.value && n.focused)) {
              const { selectionEnd: e } = o.value,
                a = ua(s, e);
              c = t(a).length - a.length;
            }
          }
          if (o.value && o.value.value !== a)
            if (n.focused) {
              let { selectionStart: e, selectionEnd: t } = o.value;
              if (((o.value.value = a), P(e) && P(t))) {
                const l = a.length;
                (u ? ((e -= u), (t -= u)) : c && ((e += c), (t += c)), o.value.setSelectionRange(Math.min(e, l), Math.min(t, l)));
              }
            } else o.value.value = a;
          a !== e.modelValue && t('update:modelValue', a);
        },
        O = (e) => {
          e.target.composing || A(e.target.value);
        },
        I = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.blur();
        },
        N = () => {
          var e;
          return null == (e = o.value) ? void 0 : e.focus();
        },
        _ = () => {
          const t = o.value;
          'textarea' === e.type &&
            e.autosize &&
            t &&
            (function (e, t) {
              const a = Se();
              e.style.height = 'auto';
              let l = e.scrollHeight;
              if ($e(t)) {
                const { maxHeight: e, minHeight: a } = t;
                (void 0 !== e && (l = Math.min(l, e)), void 0 !== a && (l = Math.max(l, a)));
              }
              l && ((e.style.height = `${l}px`), he(a));
            })(t, e.autosize);
        },
        B = (e) => {
          ((n.focused = !0), t('focus', e), h(_), m('readonly') && I());
        },
        H = (e) => {
          ((n.focused = !1), A(v(), 'onBlur'), t('blur', e), m('readonly') || (T('onBlur'), h(_), Ie()));
        },
        V = (e) => t('clickInput', e),
        L = (e) => t('clickLeftIcon', e),
        E = (e) => t('clickRightIcon', e),
        R = i(() => ('boolean' == typeof e.error ? e.error : !(!d || !d.props.showError || 'failed' !== n.status) || void 0)),
        Y = i(() => {
          const e = m('labelWidth'),
            t = m('labelAlign');
          if (e && 'top' !== t) return { width: fe(e) };
        }),
        j = (a) => {
          if (13 === a.keyCode) {
            ((d && d.props.submitOnEnter) || 'textarea' === e.type || U(a), 'search' === e.type && I());
          }
          t('keypress', a);
        },
        G = () => e.id || `${l}-input`,
        Z = () => {
          const t = da('control', [
            m('inputAlign'),
            { error: R.value, custom: !!a.input, 'min-height': 'textarea' === e.type && !e.autosize },
          ]);
          if (a.input) return u('div', { class: t, onClick: V }, [a.input()]);
          const n = {
            id: G(),
            ref: o,
            name: e.name,
            rows: void 0 !== e.rows ? +e.rows : void 0,
            class: t,
            disabled: m('disabled'),
            readonly: m('readonly'),
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
            onFocus: B,
            onInput: O,
            onClick: V,
            onChange: ia,
            onKeypress: j,
            onCompositionend: ia,
            onCompositionstart: ra,
          };
          return 'textarea' === e.type
            ? u('textarea', D(n, { inputmode: e.inputmode }), null)
            : u(
                'input',
                D(
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
        X = () => {
          const t = a['right-icon'];
          if (e.rightIcon || t)
            return u('div', { class: da('right-icon'), onClick: E }, [
              t ? t() : u(ke, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        q = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = sa(v());
            return u('div', { class: da('word-limit') }, [u('span', { class: da('word-num') }, [t]), S('/'), e.maxlength]);
          }
        },
        K = () => {
          if (d && !1 === d.props.showErrorMessage) return;
          const t = e.errorMessage || n.validateMessage;
          if (t) {
            const e = a['error-message'],
              l = m('errorMessageAlign');
            return u('div', { class: da('error-message', l) }, [e ? e({ message: t }) : t]);
          }
        },
        J = () => [
          u('div', { class: da('body') }, [
            Z(),
            y.value && u(ke, { ref: s, name: e.clearIcon, class: da('clear') }, null),
            X(),
            a.button && u('div', { class: da('button') }, [a.button()]),
          ]),
          q(),
          K(),
        ];
      return (
        Le({ blur: I, focus: N, validate: M, formValue: b, resetValidation: $, getValidationStatus: () => n.status }),
        w(Ne, { customValue: c, resetValidation: $, validateWithTrigger: T }),
        p(
          () => e.modelValue,
          () => {
            (A(v()), $(), T('onChange'), h(_));
          },
        ),
        g(() => {
          (A(v(), e.formatTrigger), h(_));
        }),
        W(
          'touchstart',
          (e) => {
            (U(e), t('update:modelValue', ''), t('clear', e));
          },
          {
            target: i(() => {
              var e;
              return null == (e = s.value) ? void 0 : e.$el;
            }),
          },
        ),
        () => {
          const t = m('disabled'),
            n = m('labelAlign'),
            o = (() => {
              const t = a['left-icon'];
              if (e.leftIcon || t)
                return u('div', { class: da('left-icon'), onClick: L }, [
                  t ? t() : u(ke, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return u(
            la,
            {
              size: e.size,
              class: da({ error: R.value, disabled: t, [`label-${n}`]: n }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: Y.value,
              valueClass: da('value'),
              titleClass: [da('label', [n, { required: x.value }]), e.labelClass],
              arrowDirection: e.arrowDirection,
            },
            {
              icon: o && 'top' !== n ? () => o : null,
              title: () => {
                const t = (() => {
                  const t = m('labelWidth'),
                    n = m('labelAlign'),
                    o = m('colon') ? ':' : '';
                  return a.label
                    ? [a.label(), o]
                    : e.label
                      ? u(
                          'label',
                          {
                            id: `${l}-label`,
                            for: a.input ? void 0 : G(),
                            'data-allow-mismatch': 'attribute',
                            onClick: (e) => {
                              (U(e), N());
                            },
                            style: 'top' === n && t ? { width: fe(t) } : void 0,
                          },
                          [e.label + o],
                        )
                      : void 0;
                })();
                return 'top' === n ? [o, t].filter(Boolean) : t || [];
              },
              value: J,
              extra: a.extra,
            },
          );
        }
      );
    },
  }),
);
se(Ee);
const [fa, pa, ha] = V('calendar');
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
function xa(e, t) {
  const a = ba(e);
  return (a.setDate(a.getDate() + t), a);
}
function Da(e, t) {
  const a = ba(e);
  return (a.setMonth(a.getMonth() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
function ka(e, t) {
  const a = ba(e);
  return (a.setFullYear(a.getFullYear() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
const Sa = (e) => xa(e, -1),
  $a = (e) => xa(e, 1),
  Ca = (e) => Da(e, -1),
  Ma = (e) => Da(e, 1),
  Ta = (e) => ka(e, -1),
  Aa = (e) => ka(e, 1),
  Oa = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
L({}, Jt, { modelValue: R(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Ia] = V('calendar-day');
var Na = o({
  name: Ia,
  props: { item: E(Object), color: String, index: Number, offset: _e(0), rowHeight: String },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const l = i(() => {
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
        if (t || a['top-info']) return u('div', { class: pa('top-info') }, [a['top-info'] ? a['top-info'](e.item) : t]);
      },
      r = () => {
        const { bottomInfo: t } = e.item;
        if (t || a['bottom-info']) return u('div', { class: pa('bottom-info') }, [a['bottom-info'] ? a['bottom-info'](e.item) : t]);
      },
      s = () => {
        const { item: t, color: l, rowHeight: n } = e,
          { type: i } = t,
          s = [o(), a.text ? a.text(e.item) : e.item.text, r()];
        return 'selected' === i ? u('div', { class: pa('selected-day'), style: { width: n, height: n, background: l } }, [s]) : s;
      };
    return () => {
      const { type: t, className: a } = e.item;
      return 'placeholder' === t
        ? u('div', { class: pa('day'), style: l.value }, null)
        : u('div', { role: 'gridcell', style: l.value, class: [pa('day', t), a], tabindex: 'disabled' === t ? void 0 : -1, onClick: n }, [
            s(),
          ]);
    };
  },
});
const [_a] = V('calendar-month');
var Ba = o({
  name: _a,
  props: {
    date: E(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: Y,
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
    const [l, n] = Be(),
      o = r(),
      s = r(),
      c = Fe(s),
      d = i(() => {
        return ((t = e.date), ha('monthTitle', t.getFullYear(), t.getMonth() + 1));
        var t;
      }),
      v = i(() => fe(e.rowHeight)),
      m = i(() => {
        const t = e.date.getDate(),
          a = (e.date.getDay() - (t % 7) + 8) % 7;
        return e.firstDayOfWeek ? (a + 7 - e.firstDayOfWeek) % 7 : a;
      }),
      f = i(() => {
        return ((t = e.date.getFullYear()), (a = e.date.getMonth() + 1), 32 - new Date(t, a - 1, 32).getDate());
        var t, a;
      }),
      p = i(() => l.value || !e.lazyRender),
      h = (t) => {
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
      g = (t) => {
        if ('range' === e.type) {
          if ('start' === t || 'end' === t) return ha(t);
          if ('start-end' === t) return `${ha('start')}/${ha('end')}`;
        }
      },
      y = () => {
        if (e.showMonthTitle)
          return u('div', { class: pa('month-title') }, [a['month-title'] ? a['month-title']({ date: e.date, text: d.value }) : d.value]);
      },
      b = () => {
        if (e.showMark && p.value) return u('div', { class: pa('month-mark') }, [e.date.getMonth() + 1]);
      },
      w = i(() => {
        const e = Math.ceil((f.value + m.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      x = i(() => {
        const t = [],
          a = e.date.getFullYear(),
          l = e.date.getMonth();
        for (let n = 1; n <= f.value; n++) {
          const o = new Date(a, l, n),
            r = h(o);
          let i = { date: o, type: r, text: n, bottomInfo: g(r) };
          (e.formatter && (i = e.formatter(i)), t.push(i));
        }
        return t;
      }),
      D = i(() => x.value.filter((e) => 'disabled' === e.type)),
      k = (l, n) =>
        u(
          Na,
          {
            item: l,
            index: n,
            color: e.color,
            offset: m.value,
            rowHeight: v.value,
            onClick: (e) => t('click', e),
            onClickDisabledDate: (e) => t('clickDisabledDate', e),
          },
          we(a, ['top-info', 'bottom-info', 'text']),
        );
    return (
      Le({
        getTitle: () => d.value,
        getHeight: () => c.value,
        setVisible: n,
        scrollToDate: (e, t) => {
          if (o.value) {
            const a = oe(o.value),
              l = w.value.length,
              n = ((Math.ceil((t.getDate() + m.value) / 7) - 1) * a.height) / l;
            q(e, a.top + n + e.scrollTop - oe(e).top);
          }
        },
        disabledDays: D,
      }),
      () =>
        u('div', { class: pa('month'), ref: s }, [
          y(),
          u('div', { ref: o, role: 'grid', class: pa('days') }, [b(), (p.value ? x : w).value.map(k)]),
        ])
    );
  },
});
const [Ha] = V('calendar-header');
var Va = o({
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
    switchMode: ee('none'),
  },
  emits: ['clickSubtitle', 'panelChange'],
  setup(e, { slots: t, emit: a }) {
    const l = i(() => e.date && e.minDate && ga(Ca(e.date), e.minDate) < 0),
      n = i(() => e.date && e.minDate && ga(Ta(e.date), e.minDate) < 0),
      o = i(() => e.date && e.maxDate && ga(Ma(e.date), e.maxDate) > 0),
      r = i(() => e.date && e.maxDate && ga(Aa(e.date), e.maxDate) > 0),
      s = () => {
        if (e.showTitle) {
          const a = e.title || ha('title'),
            l = t.title ? t.title() : a;
          return u('div', { class: pa('header-title') }, [l]);
        }
      },
      c = (e) => a('clickSubtitle', e),
      d = (e) => a('panelChange', e),
      v = (a) => {
        const i = 'year-month' === e.switchMode,
          s = t[a ? 'next-month' : 'prev-month'],
          c = t[a ? 'next-year' : 'prev-year'],
          v = a ? o.value : l.value,
          m = a ? r.value : n.value,
          f = a ? 'arrow' : 'arrow-left',
          p = a ? 'arrow-double-right' : 'arrow-double-left',
          h = u('view', { class: pa('header-action', { disabled: v }), onClick: v ? void 0 : () => d((a ? Ma : Ca)(e.date)) }, [
            s ? s({ disabled: v }) : u(ke, { class: { [j]: !v }, name: f }, null),
          ]),
          g =
            i &&
            u('view', { class: pa('header-action', { disabled: m }), onClick: m ? void 0 : () => d((a ? Aa : Ta)(e.date)) }, [
              c ? c({ disabled: m }) : u(ke, { class: { [j]: !m }, name: p }, null),
            ]);
        return a ? [h, g] : [g, h];
      },
      m = () => {
        if (e.showSubtitle) {
          const a = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            l = 'none' !== e.switchMode;
          return u('div', { class: pa('header-subtitle', { 'with-switch': l }), onClick: c }, [
            l ? [v(), u('div', { class: pa('header-subtitle-text') }, [a]), v(!0)] : a,
          ]);
        }
      },
      f = () => {
        const { firstDayOfWeek: t } = e,
          a = ha('weekdays'),
          l = [...a.slice(t, 7), ...a.slice(0, t)];
        return u('div', { class: pa('weekdays') }, [l.map((e) => u('span', { class: pa('weekday') }, [e]))]);
      };
    return () => u('div', { class: pa('header') }, [s(), m(), f()]);
  },
});
const La = se(
  o({
    name: fa,
    props: {
      show: Boolean,
      type: ee('single'),
      switchMode: ee('none'),
      title: String,
      color: String,
      round: ue,
      readonly: Boolean,
      poppable: ue,
      maxRange: Q(null),
      position: ee('bottom'),
      teleport: [String, Object],
      showMark: ue,
      showTitle: ue,
      formatter: Function,
      rowHeight: Y,
      confirmText: String,
      rangePrompt: String,
      lazyRender: ue,
      showConfirm: ue,
      defaultDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: ue,
      closeOnPopstate: ue,
      showRangePrompt: ue,
      confirmDisabledText: String,
      closeOnClickOverlay: ue,
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: ue,
      minDate: { type: Date, validator: He },
      maxDate: { type: Date, validator: He },
      firstDayOfWeek: { type: Y, default: 0, validator: (e) => e >= 0 && e <= 6 },
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
      const n = i(() => 'none' !== e.switchMode),
        o = i(() => (e.minDate || n.value ? e.minDate : Oa())),
        s = i(() => (e.maxDate || n.value ? e.maxDate : Da(Oa(), 6))),
        c = (e, t = o.value, a = s.value) => (t && -1 === ya(e, t) ? t : a && 1 === ya(e, a) ? a : e),
        d = (t = e.defaultDate) => {
          const { type: a, allowSameDay: l } = e;
          if (null === t) return t;
          const n = Oa();
          if ('range' === a) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === ya(t[0], n) && (t = []));
            const e = o.value,
              a = s.value;
            return [c(t[0] || n, e, a ? (l ? a : Sa(a)) : void 0), c(t[1] || (l ? n : $a(n)), e ? (l ? e : $a(e)) : void 0)];
          }
          return 'multiple' === a ? (Array.isArray(t) ? t.map((e) => c(e)) : [c(n)]) : ((t && !Array.isArray(t)) || (t = n), c(t));
        };
      let v;
      const m = r(),
        f = r(d()),
        h = r(
          (() => {
            const e = Array.isArray(f.value) ? f.value[0] : f.value;
            return e || c(Oa());
          })(),
        ),
        g = r(),
        [y, b] = bt(),
        w = i(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        x = i(() => {
          const e = [];
          if (!o.value || !s.value) return e;
          const t = new Date(o.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== ga(t, s.value));
          return e;
        }),
        k = i(() => {
          if (f.value) {
            if ('range' === e.type) return !f.value[0] || !f.value[1];
            if ('multiple' === e.type) return !f.value.length;
          }
          return !f.value;
        }),
        S = () => {
          const e = X(m.value),
            a = e + v,
            l = x.value.map((e, t) => y.value[t].getHeight());
          if (a > l.reduce((e, t) => e + t, 0) && e > 0) return;
          let n,
            o = 0;
          const r = [-1, -1];
          for (let i = 0; i < x.value.length; i++) {
            const s = y.value[i];
            (o <= a &&
              o + l[i] >= e &&
              ((r[1] = i),
              n || ((n = s), (r[0] = i)),
              y.value[i].showed || ((y.value[i].showed = !0), t('monthShow', { date: s.date, title: s.getTitle() }))),
              (o += l[i]));
          }
          (x.value.forEach((e, t) => {
            const a = t >= r[0] - 1 && t <= r[1] + 1;
            y.value[t].setVisible(a);
          }),
            n && (g.value = n));
        },
        $ = (e) => {
          n.value
            ? (h.value = e)
            : G(() => {
                (x.value.some((t, a) => 0 === ga(t, e) && (m.value && y.value[a].scrollToDate(m.value, e), !0)), S());
              });
        },
        C = () => {
          if (!e.poppable || e.show)
            if (f.value) {
              const t = 'single' === e.type ? f.value : f.value[0];
              He(t) && $(t);
            } else n.value || G(S);
        },
        M = () => {
          (e.poppable && !e.show) ||
            (n.value ||
              G(() => {
                v = Math.floor(oe(m).height);
              }),
            C());
        },
        T = (e = d()) => {
          ((f.value = e), C());
        },
        A = (e) => {
          ((h.value = e), t('panelChange', { date: e }));
        },
        O = () => {
          var e;
          return t('confirm', null != (e = f.value) ? e : wa(f.value));
        },
        I = (a, l) => {
          const n = (e) => {
            ((f.value = e), t('select', wa(e)));
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
            if (!l) return void n([a[0], xa(a[0], +e.maxRange - 1)]);
          }
          (n(a), l && !e.showConfirm && O());
        },
        N = i(() =>
          y.value.reduce((e, t) => {
            var a, l;
            return (e.push(...(null != (l = null == (a = t.disabledDays) ? void 0 : a.value) ? l : [])), e);
          }, []),
        ),
        _ = (a) => {
          if (e.readonly || !a.date) return;
          const { date: l } = a,
            { type: n } = e;
          if ('range' === n) {
            if (!f.value) return void I([l]);
            const [t, a] = f.value;
            if (t && !a) {
              const a = ya(l, t);
              if (1 === a) {
                const e = ((e, t, a) => {
                  var l;
                  return null == (l = e.find((e) => -1 === ya(t, e.date) && -1 === ya(e.date, a))) ? void 0 : l.date;
                })(N.value, t, l);
                if (e) {
                  const a = Sa(e);
                  -1 === ya(t, a) ? I([t, a]) : I([l]);
                } else I([t, l], !0);
              } else -1 === a ? I([l]) : e.allowSameDay && I([l, l], !0);
            } else I([l]);
          } else if ('multiple' === n) {
            if (!f.value) return void I([l]);
            const a = f.value,
              n = a.findIndex((e) => 0 === ya(e, l));
            if (-1 !== n) {
              const [e] = a.splice(n, 1);
              t('unselect', ba(e));
            } else e.maxRange && a.length >= +e.maxRange ? Ye(e.rangePrompt || ha('rangePrompt', e.maxRange)) : I([...a, l]);
          } else I(l, !0);
        },
        B = (e) => t('clickOverlay', e),
        H = (e) => t('update:show', e),
        V = (l, r) => {
          const i = 0 !== r || !e.showSubtitle;
          return u(
            Ba,
            D(
              {
                ref: n.value ? g : b(r),
                date: l,
                currentDate: f.value,
                showMonthTitle: i,
                firstDayOfWeek: w.value,
                lazyRender: !n.value && e.lazyRender,
                maxDate: s.value,
                minDate: o.value,
              },
              we(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: _, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            we(a, ['top-info', 'bottom-info', 'month-title', 'text']),
          );
        },
        L = () => {
          if (a.footer) return a.footer();
          if (e.showConfirm) {
            const t = a['confirm-text'],
              n = k.value,
              o = n ? e.confirmDisabledText : e.confirmText;
            return u(
              l,
              {
                round: !0,
                block: !0,
                type: 'primary',
                color: e.color,
                class: pa('confirm'),
                disabled: n,
                nativeType: 'button',
                onClick: O,
              },
              { default: () => [t ? t({ disabled: n }) : o || ha('confirm')] },
            );
          }
        },
        P = () => {
          var l, r;
          return u('div', { class: pa() }, [
            u(
              Va,
              {
                date: null == (l = g.value) ? void 0 : l.date,
                maxDate: s.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (r = g.value) ? void 0 : r.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: w.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: A,
              },
              we(a, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            u('div', { ref: m, class: pa('body'), onScroll: n.value ? void 0 : S }, [n.value ? V(h.value, 0) : x.value.map(V)]),
            u('div', { class: [pa('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [L()]),
          ]);
        };
      return (
        p(() => e.show, M),
        p(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => T(d(f.value)),
        ),
        p(
          () => e.defaultDate,
          (e) => {
            T(e);
          },
        ),
        Le({ reset: T, scrollToDate: $, getSelectedDate: () => f.value }),
        J(M),
        () =>
          e.poppable
            ? u(
                Re,
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
                  onClickOverlay: B,
                  'onUpdate:show': H,
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
var za,
  Ea = { exports: {} };
const Ra = Pa(
    (za ||
      ((za = 1),
      (Ea.exports = (function () {
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
        var x = '$isDayjsObject',
          D = function (e) {
            return e instanceof C || !(!e || !e[x]);
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
            if (D(e)) return e.clone();
            var a = 'object' == typeof t ? t : {};
            return ((a.date = e), (a.args = arguments), new C(a));
          },
          $ = y;
        (($.l = k),
          ($.i = D),
          ($.w = function (e, t) {
            return S(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
          }));
        var C = (function () {
            function h(e) {
              ((this.$L = k(e.locale, null, !0)), this.parse(e), (this.$x = this.$x || e.x || {}), (this[x] = !0));
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
          M = C.prototype;
        return (
          (S.prototype = M),
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
            M[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (S.extend = function (e, t) {
            return (e.$i || (e(t, C, S), (e.$i = !0)), S);
          }),
          (S.locale = k),
          (S.isDayjs = D),
          (S.unix = function (e) {
            return S(1e3 * e);
          }),
          (S.en = w[b]),
          (S.Ls = w),
          (S.p = {}),
          S
        );
      })())),
    Ea.exports),
  ),
  Ya = { class: 'content' },
  Fa = { class: 'input-group' },
  Wa = { class: 'input-wrapper' },
  Ua = { class: 'input-group' },
  ja = o({
    __name: 'identifyLint',
    setup(e) {
      const t = r(''),
        a = r([]),
        n = r(!1),
        o = r([]),
        i = r({}),
        s = {
          CHINA_ID: { fullName: '中国居民身份证', shortName: '身份证' },
          PASSPORT: { fullName: '护照', shortName: '护照' },
          HK_MACAU_PASS: { fullName: '港澳通行证（回乡证）', shortName: '回乡证' },
          TAIWAN_PASS: { fullName: '台湾通行证', shortName: '台湾通行证' },
          UNKNOWN: { fullName: '未知类型', shortName: '未知' },
        },
        c = [];
      for (const l in s) c.push({ text: s[l].fullName, value: s[l].shortName });
      o.value = [c[0].value];
      const d = (e) => {
          if (18 !== e.length) return null;
          return { birthday: `${e.slice(6, 4)}-${e.slice(10, 2)}-${e.slice(12, 2)}`, ticketType: v(e.slice(6, 14)) };
        },
        v = (e) => {
          const t = Ra().diff(e, 'y');
          return t < 2 ? '免票' : t <= 12 ? '儿童' : t < 60 ? '成人' : '老人';
        },
        m = (e) => {
          if (!e) return { type: s.UNKNOWN.shortName, valid: !1, message: '输入不能为空' };
          const t = e.trim();
          if (/^\d{15}$|^\d{17}[\dXx]$/.test(t)) {
            const e = ((e) => {
              if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(e)) return !1;
              const t = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
              let a = 0;
              for (let l = 0; l < 17; l++) a += parseInt(e[l]) * t[l];
              return ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'][a % 11] === e[17].toUpperCase();
            })(t);
            return { type: s.CHINA_ID.shortName, valid: e, message: e ? '有效的身份证号码' : '身份证号码校验失败', details: d(t) };
          }
          return /^[CHM]\d{8,10}$/.test(t)
            ? { type: s.HK_MACAU_PASS.shortName }
            : ((e) => /^\d{8,10}$/.test(e))(t)
              ? { type: s.TAIWAN_PASS.shortName, valid: !0, message: '台湾通行证' }
              : ((e) => /^[EG]\d{8}$/.test(e) || /^[A-Z]{1,2}\d{6,9}$/.test(e))(t)
                ? { type: s.PASSPORT.shortName, valid: !0, message: '护照号码' }
                : { type: s.UNKNOWN.shortName, valid: !1, message: '无法识别的输入类型' };
        },
        f = () => {
          a.value.forEach((e) => {
            const t = m(e.id);
            ((e.idType = t.type), (e.ticketType = t.details ? t.details.ticketType : null));
          });
        },
        p = () => {
          const e = t.value
            .split('\n')
            .map((e) => e.trim())
            .filter((e) => '' !== e);
          a.value = e.map((e) => {
            const t = e
              .split(' ')
              .map((e) => e.trim())
              .filter((e) => '' !== e);
            return { name: t[0], id: t[1] };
          });
        },
        h = ({ selectedValues: e }) => {
          ((i.value.idType = e[0]), g());
        },
        g = () => {
          ((n.value = !1), (i.value = {}));
        },
        y = () => {
          let e = '\n';
          ((e += a.value.map((e) => `${e.name} ${e.id}`).join('\n\n')), navigator.clipboard.writeText(e));
        };
      return (e, r) => {
        const s = ma,
          d = l,
          v = Qt,
          m = Re;
        return (
          _(),
          $('div', Ya, [
            C('div', Fa, [
              C('div', Wa, [
                u(
                  s,
                  {
                    type: 'textarea',
                    modelValue: T(t),
                    'onUpdate:modelValue': r[0] || (r[0] = (e) => (A(t) ? (t.value = e) : null)),
                    rows: '10',
                    onKeyup: M(f, ['enter']),
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                u(d, { onClick: p, type: 'primary', size: 'small' }, { default: O(() => [...(r[3] || (r[3] = [S('分割', -1)]))]), _: 1 }),
                u(
                  d,
                  { onClick: f, type: 'primary', size: 'small' },
                  { default: O(() => [...(r[4] || (r[4] = [S('自动识别', -1)]))]), _: 1 },
                ),
                u(d, { onClick: y, type: 'primary', size: 'small' }, { default: O(() => [...(r[5] || (r[5] = [S('复制', -1)]))]), _: 1 }),
              ]),
            ]),
            C('div', Ua, [
              (_(!0),
              $(
                I,
                null,
                N(
                  T(a),
                  (e, t) => (
                    _(),
                    $('div', { key: e.name }, [
                      u(s, { modelValue: e.name, 'onUpdate:modelValue': (t) => (e.name = t), label: '姓名', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      u(s, { modelValue: e.id, 'onUpdate:modelValue': (t) => (e.id = t), label: 'ID', type: 'text' }, null, 8, [
                        'modelValue',
                        'onUpdate:modelValue',
                      ]),
                      u(
                        s,
                        {
                          modelValue: e.idType,
                          'onUpdate:modelValue': (t) => (e.idType = t),
                          'is-link': '',
                          readonly: '',
                          label: '类型',
                          onClick: (t) => {
                            ((n.value = !0), (i.value = e));
                          },
                        },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue', 'onClick'],
                      ),
                      u(
                        s,
                        { modelValue: e.ticketType, 'onUpdate:modelValue': (t) => (e.ticketType = t), label: '票种', type: 'text' },
                        null,
                        8,
                        ['modelValue', 'onUpdate:modelValue'],
                      ),
                      u(
                        d,
                        {
                          type: 'primary',
                          size: 'small',
                          onClick: (e) =>
                            ((e) => {
                              const t = a.value[e],
                                l = t.name;
                              ((t.name = t.id), (t.id = l));
                            })(t),
                        },
                        { default: O(() => [...(r[6] || (r[6] = [S('互换', -1)]))]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            u(
              m,
              { show: T(n), 'onUpdate:show': r[2] || (r[2] = (e) => (A(n) ? (n.value = e) : null)), round: '', position: 'bottom' },
              {
                default: O(() => [
                  u(
                    v,
                    {
                      columns: c,
                      modelValue: T(o),
                      'onUpdate:modelValue': r[1] || (r[1] = (e) => (A(o) ? (o.value = e) : null)),
                      onCancel: g,
                      onConfirm: h,
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
  Ga = { class: 'container' },
  Za = { class: 'form-group' },
  Xa = { class: 'form-group' },
  qa = { class: 'counter-group' },
  Ka = { class: 'counter-controls' },
  Ja = { class: 'counter-value' },
  Qa = { class: 'counter-group' },
  el = { class: 'counter-controls' },
  tl = { class: 'counter-value' },
  al = { class: 'counter-group' },
  ll = { class: 'counter-controls' },
  nl = { class: 'counter-value' },
  ol = { class: 'form-group' },
  rl = { class: 'counter-group' },
  il = { class: 'counter-group' },
  sl = { class: 'summary' },
  ul = { class: 'summary-item' },
  cl = { class: 'summary-value' },
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
  xl = { class: 'summary' },
  Dl = { class: 'summary-item' },
  kl = { class: 'summary-value' },
  Sl = { class: 'summary-item' },
  $l = { class: 'summary-value' },
  Cl = { class: 'summary-item' },
  Ml = { class: 'summary-value' },
  Tl = { class: 'summary-item' },
  Al = { class: 'summary-value' },
  Ol = { class: 'summary-item' },
  Il = { class: 'summary-value' },
  Nl = { class: 'summary-item' },
  _l = { class: 'summary-value' },
  Bl = H(
    o({
      __name: 'index',
      setup(e) {
        Ra.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = r('calculator'),
          a = r({ adult: { num: 0, simpleText: '大' }, child: { num: 0, simpleText: '小' }, senior: { num: 0, simpleText: '老' } }),
          o = r({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' }),
          i = r({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' }),
          s = r({ standard: 0.95, earlyBird: 0.95, costPlatform: 0.02 }),
          c = r(''),
          d = r(!1),
          v = (e) => Ra(e).format('YYYY-MM-DD'),
          m = (e) => {
            ((d.value = !1), (c.value = v(e)));
          },
          f = (e, t) => {
            (0 === a.value[e].num && t < 0) || (a.value[e].num += t);
          },
          h = (e, t) => {
            (0 === s.value[e] && t < 0) || (s.value[e] = (100 * s.value[e] + 100 * t) / 100);
          };
        function g() {
          let e = 0,
            t = 0,
            l = 0,
            r = 0,
            u = 0,
            d = 0,
            v = 0,
            m = 0,
            f = 0,
            p = 0;
          const h = n.data.filter((e) => e.travelDate === c.value);
          if (0 == h.length) return void Ye('Ticket data not found');
          const g = new Map();
          for (const a of h) {
            const e = a;
            g.set(e.touristResortTicketsCategoryFullCode, e);
          }
          let y = g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT');
          ((e += a.value.adult.num * y.price * s.value.earlyBird), (t += a.value.adult.num * y.price), (u += 0 * a.value.adult.num));
          let b = g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD');
          ((e += a.value.child.num * b.price * s.value.earlyBird), (t += a.value.child.num * b.price), (u += 0 * a.value.child.num));
          let w = g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR');
          ((e += a.value.senior.num * w.price * s.value.earlyBird),
            (t += a.value.senior.num * w.price),
            (u += 0 * a.value.senior.num),
            (r = e * s.value.earlyBird),
            (l = u + r));
          const x = e - l - u;
          ((i.value.amount = e.toFixed(2)),
            (i.value.originalAmount = t.toFixed(2)),
            (i.value.costPlatform = r.toFixed(2)),
            (i.value.profit = x.toFixed(2)),
            (y = g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')),
            (d += a.value.adult.num * y.price * s.value.standard),
            (v += a.value.adult.num * y.price),
            (p += 10 * a.value.adult.num),
            (b = g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')),
            (d += a.value.child.num * b.price * s.value.standard),
            (v += a.value.child.num * b.price),
            (p += 10 * a.value.child.num),
            (w = g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')),
            (d += a.value.senior.num * w.price * s.value.standard),
            (v += a.value.senior.num * w.price),
            (p += 10 * a.value.senior.num),
            (f = d * s.value.costPlatform),
            (m = p + f));
          const D = d - m - p;
          ((o.value.amount = d.toFixed(2)),
            (o.value.originalAmount = v.toFixed(2)),
            (o.value.costPlatform = f.toFixed(2)),
            (o.value.commission = p.toFixed(2)),
            (o.value.totalCost = m.toFixed(2)),
            (o.value.profit = D.toFixed(2)));
        }
        ((c.value = v(new Date())),
          p(
            [c, a, s],
            () => {
              g();
            },
            { deep: !0 },
          ),
          g());
        const y = () => {
          function e(e) {
            return `${a.value[e].num ? a.value[e].num + a.value[e].simpleText : ''}`;
          }
          let t = `${c.value} ${Ra(c.value).format('dddd')} ${e('adult')}${e('child')}${e('senior')}`;
          const l = 5 * Math.ceil(Number.parseFloat(o.value.amount) / 5),
            n = Ra(c.value).diff(new Date(), 'd') >= 9;
          if (n) {
            t += `\n早鸟票：${5 * Math.ceil(Number.parseFloat(i.value.amount) / 5)}`;
          }
          ((t += `\n标准票：${l}`),
            n && (t += '\n\n早鸟价格优惠，不可改签，需提前 10 天预订\n标准可改签一次'),
            navigator.clipboard.writeText(t));
        };
        return (e, n) => {
          const r = la,
            v = La,
            p = ma,
            g = l,
            b = Zt,
            w = Xt;
          return (
            _(),
            $('div', Ga, [
              n[47] || (n[47] = C('h1', null, '🎫 票务计算器', -1)),
              C('div', Za, [
                u(r, { title: '选择日期', value: T(c), onClick: n[0] || (n[0] = (e) => (d.value = !0)) }, null, 8, ['value']),
                u(v, { show: T(d), 'onUpdate:show': n[1] || (n[1] = (e) => (A(d) ? (d.value = e) : null)), onConfirm: m }, null, 8, [
                  'show',
                ]),
              ]),
              u(
                w,
                { active: T(t), 'onUpdate:active': n[14] || (n[14] = (e) => (A(t) ? (t.value = e) : null)) },
                {
                  default: O(() => [
                    u(
                      b,
                      { title: '票务计算', name: 'calculator' },
                      {
                        default: O(() => [
                          C('div', Xa, [
                            n[18] || (n[18] = C('label', null, '选择人数', -1)),
                            C('div', qa, [
                              n[15] || (n[15] = C('span', { class: 'counter-label' }, '👨 成人', -1)),
                              C('div', Ka, [
                                C('button', { class: 'counter-btn', onClick: n[2] || (n[2] = (e) => f('adult', -1)) }, '−'),
                                C('span', Ja, B(T(a).adult.num), 1),
                                C('button', { class: 'counter-btn', onClick: n[3] || (n[3] = (e) => f('adult', 1)) }, '+'),
                              ]),
                            ]),
                            C('div', Qa, [
                              n[16] || (n[16] = C('span', { class: 'counter-label' }, '👶 儿童', -1)),
                              C('div', el, [
                                C('button', { class: 'counter-btn', onClick: n[4] || (n[4] = (e) => f('child', -1)) }, '−'),
                                C('span', tl, B(T(a).child.num), 1),
                                C('button', { class: 'counter-btn', onClick: n[5] || (n[5] = (e) => f('child', 1)) }, '+'),
                              ]),
                            ]),
                            C('div', al, [
                              n[17] || (n[17] = C('span', { class: 'counter-label' }, '👴 老人', -1)),
                              C('div', ll, [
                                C('button', { class: 'counter-btn', onClick: n[6] || (n[6] = (e) => f('senior', -1)) }, '−'),
                                C('span', nl, B(T(a).senior.num), 1),
                                C('button', { class: 'counter-btn', onClick: n[7] || (n[7] = (e) => f('senior', 1)) }, '+'),
                              ]),
                            ]),
                          ]),
                          C('div', ol, [
                            n[19] || (n[19] = C('label', null, '折扣比例', -1)),
                            C('div', rl, [
                              C('button', { class: 'counter-btn', onClick: n[8] || (n[8] = (e) => h('standard', -0.01)) }, '−'),
                              u(
                                p,
                                {
                                  modelValue: T(s).standard,
                                  'onUpdate:modelValue': n[9] || (n[9] = (e) => (T(s).standard = e)),
                                  type: 'number',
                                  label: '标准',
                                },
                                null,
                                8,
                                ['modelValue'],
                              ),
                              C('button', { class: 'counter-btn', onClick: n[10] || (n[10] = (e) => h('standard', 0.01)) }, '+'),
                            ]),
                            C('div', il, [
                              C('button', { class: 'counter-btn', onClick: n[11] || (n[11] = (e) => h('earlyBird', -0.01)) }, '−'),
                              u(
                                p,
                                {
                                  modelValue: T(s).earlyBird,
                                  'onUpdate:modelValue': n[12] || (n[12] = (e) => (T(s).earlyBird = e)),
                                  type: 'number',
                                  label: '早鸟',
                                },
                                null,
                                8,
                                ['modelValue'],
                              ),
                              C('button', { class: 'counter-btn', onClick: n[13] || (n[13] = (e) => h('earlyBird', 0.01)) }, '+'),
                            ]),
                          ]),
                          C('div', null, [
                            u(
                              g,
                              { size: 'small', type: 'primary', onClick: y },
                              { default: O(() => [...(n[20] || (n[20] = [S('复制出票信息', -1)]))]), _: 1 },
                            ),
                          ]),
                          C('div', sl, [
                            n[33] || (n[33] = C('h2', null, '💰 费用汇总-标准', -1)),
                            C('div', ul, [
                              n[22] || (n[22] = C('span', { class: 'summary-label' }, '总金额', -1)),
                              C('span', cl, [n[21] || (n[21] = S(' ¥', -1)), C('span', null, B(T(o).amount), 1)]),
                            ]),
                            C('div', dl, [
                              n[24] || (n[24] = C('span', { class: 'summary-label' }, '官方票价', -1)),
                              C('span', vl, [n[23] || (n[23] = S(' ¥', -1)), C('span', null, B(T(o).originalAmount), 1)]),
                            ]),
                            C('div', ml, [
                              n[26] || (n[26] = C('span', { class: 'summary-label' }, '总佣金', -1)),
                              C('span', fl, [n[25] || (n[25] = S(' ¥', -1)), C('span', null, B(T(o).commission), 1)]),
                            ]),
                            C('div', pl, [
                              n[28] || (n[28] = C('span', { class: 'summary-label' }, '总成本-平台', -1)),
                              C('span', hl, [n[27] || (n[27] = S(' ¥', -1)), C('span', null, B(T(o).costPlatform), 1)]),
                            ]),
                            C('div', gl, [
                              n[30] || (n[30] = C('span', { class: 'summary-label' }, '总成本', -1)),
                              C('span', yl, [n[29] || (n[29] = S(' ¥', -1)), C('span', null, B(T(o).totalCost), 1)]),
                            ]),
                            C('div', bl, [
                              n[32] || (n[32] = C('span', { class: 'summary-label' }, '总利润', -1)),
                              C('span', wl, [n[31] || (n[31] = S(' ¥', -1)), C('span', null, B(T(o).profit), 1)]),
                            ]),
                          ]),
                          C('div', xl, [
                            n[46] || (n[46] = C('h2', null, '💰 费用汇总-早鸟', -1)),
                            C('div', Dl, [
                              n[35] || (n[35] = C('span', { class: 'summary-label' }, '总金额', -1)),
                              C('span', kl, [n[34] || (n[34] = S(' ¥', -1)), C('span', null, B(T(i).amount), 1)]),
                            ]),
                            C('div', Sl, [
                              n[37] || (n[37] = C('span', { class: 'summary-label' }, '官方票价', -1)),
                              C('span', $l, [n[36] || (n[36] = S(' ¥', -1)), C('span', null, B(T(i).originalAmount), 1)]),
                            ]),
                            C('div', Cl, [
                              n[39] || (n[39] = C('span', { class: 'summary-label' }, '总佣金', -1)),
                              C('span', Ml, [n[38] || (n[38] = S(' ¥', -1)), C('span', null, B(T(i).commission), 1)]),
                            ]),
                            C('div', Tl, [
                              n[41] || (n[41] = C('span', { class: 'summary-label' }, '总成本-平台', -1)),
                              C('span', Al, [n[40] || (n[40] = S(' ¥', -1)), C('span', null, B(T(i).costPlatform), 1)]),
                            ]),
                            C('div', Ol, [
                              n[43] || (n[43] = C('span', { class: 'summary-label' }, '总成本', -1)),
                              C('span', Il, [n[42] || (n[42] = S(' ¥', -1)), C('span', null, B(T(i).totalCost), 1)]),
                            ]),
                            C('div', Nl, [
                              n[45] || (n[45] = C('span', { class: 'summary-label' }, '总利润', -1)),
                              C('span', _l, [n[44] || (n[44] = S(' ¥', -1)), C('span', null, B(T(i).profit), 1)]),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      },
                    ),
                    u(b, { title: '证件整理', name: 'identifyLint' }, { default: O(() => [u(ja)]), _: 1 }),
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
    [['__scopeId', 'data-v-188c44b3']],
  );
export { Bl as default };
