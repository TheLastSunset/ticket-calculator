/* empty css              */ import { r as e, a as t, u as n, B as i } from './index-CX40XAFU.js';
import { p as r, a as o } from './index-CjyeFvZ-.js';
import { u as a, a as l, c as s, L as u, s as c, P as d, b as f } from './function-call-LNN5-qQc.js';
import {
  c as m,
  e as v,
  i as p,
  a as h,
  m as g,
  b as y,
  n as b,
  u as w,
  d as N,
  p as D,
  H as A,
  r as _,
  f as x,
  h as O,
  s as E,
  j as S,
  o as k,
  k as I,
  l as L,
  q as T,
  v as C,
  g as H,
  x as M,
  y as $,
  z as Y,
  A as P,
  w as V,
  t as G,
  C as U,
  D as B,
  E as R,
  F,
  G as z,
  J as W,
  K as j,
  L as q,
  M as Z,
  N as X,
  O as K,
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
} from './index-DOTaIcLV.js';
import {
  d as me,
  r as ve,
  e as pe,
  E as he,
  j as ge,
  G as ye,
  H as be,
  I as we,
  J as Ne,
  L as De,
  w as Ae,
  h as _e,
  f as xe,
  M as Oe,
  N as Ee,
  O as Se,
  i as ke,
  P as Ie,
  v as Le,
  D as Te,
  c as Ce,
  a as He,
  F as Me,
  z as $e,
  u as Ye,
  o as Pe,
  m as Ve,
  k as Ge,
  t as Ue,
  _ as Be,
  x as Re,
} from './index-BVTDfLT_.js';
import './index-iLhJhSY-.js';
import { u as Fe } from './use-height-C8uIht7K.js';
const [ze, We, je] = m('picker'),
  qe = (e) => e.find((e) => !e.disabled) || e[0];
function Ze(e, t) {
  for (let n = (t = h(t, 0, e.length)); n < e.length; n++) if (!e[n].disabled) return n;
  for (let n = t - 1; n >= 0; n--) if (!e[n].disabled) return n;
  return 0;
}
const Xe = (e, t, n) => void 0 !== t && e.some((e) => e[n.value] === t);
function Ke(e, t, n) {
  const i = e.findIndex((e) => e[n.value] === t);
  return e[Ze(e, i)];
}
const [Je, Qe] = m('picker-column'),
  et = Symbol(Je);
var tt = me({
  name: Je,
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
  setup(e, { emit: t, slots: n }) {
    let i, r, o, s, u;
    const c = ve(),
      d = ve(),
      f = ve(0),
      m = ve(0),
      v = a(),
      p = () => e.options.length,
      g = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
      y = (n) => {
        let r = Ze(e.options, n);
        const o = -r * e.optionHeight,
          a = () => {
            r > p() - 1 && (r = Ze(e.options, n));
            const i = e.options[r][e.fields.value];
            i !== e.value && t('change', i);
          };
        (i && o !== f.value ? (u = a) : a(), (f.value = o));
      },
      b = () => e.readonly || !e.options.length,
      A = (t) => h(Math.round(-t / e.optionHeight), 0, p() - 1),
      _ = pe(() => A(f.value)),
      x = () => {
        ((i = !1), (m.value = 0), u && (u(), (u = null)));
      },
      O = (e) => {
        if (!b()) {
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
      E = () => {
        if (b()) return;
        const t = f.value - s,
          n = Date.now() - o;
        if (n < 300 && Math.abs(t) > 15)
          return void ((t, n) => {
            const i = Math.abs(t / n);
            t = f.value + (i / 0.003) * (t < 0 ? -1 : 1);
            const r = A(t);
            ((m.value = +e.swipeDuration), y(r));
          })(t, n);
        const r = A(f.value);
        ((m.value = 200),
          y(r),
          setTimeout(() => {
            i = !1;
          }, 0));
      },
      S = () => {
        const r = { height: `${e.optionHeight}px` };
        return e.options.map((o, a) => {
          const l = o[e.fields.text],
            { disabled: s } = o,
            c = o[e.fields.value],
            d = {
              role: 'button',
              style: r,
              tabindex: s ? -1 : 0,
              class: [Qe('item', { disabled: s, selected: c === e.value }), o.className],
              onClick: () =>
                ((n) => {
                  i || b() || ((u = null), (m.value = 200), y(n), t('clickOption', e.options[n]));
                })(a),
            },
            f = { class: 'van-ellipsis', [e.allowHtml ? 'innerHTML' : 'textContent']: l };
          return ge('li', d, [n.option ? n.option(o, a) : ge('div', f, null)]);
        });
      };
    return (
      w(et),
      l({ stopMomentum: x }),
      he(() => {
        const t = i ? Math.floor(-f.value / e.optionHeight) : e.options.findIndex((t) => t[e.fields.value] === e.value),
          n = Ze(e.options, t),
          r = -n * e.optionHeight;
        (i && n < t && x(), (f.value = r));
      }),
      N(
        'touchmove',
        (n) => {
          if (b()) return;
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
        ge('div', { ref: c, class: Qe(), onTouchstartPassive: O, onTouchend: E, onTouchcancel: E }, [
          ge(
            'ul',
            {
              ref: d,
              style: {
                transform: `translate3d(0, ${f.value + g()}px, 0)`,
                transitionDuration: `${m.value}ms`,
                transitionProperty: m.value ? 'all' : 'none',
              },
              class: Qe('wrapper'),
              onTransitionend: x,
            },
            [S()],
          ),
        ])
    );
  },
});
const [nt] = m('picker-toolbar'),
  it = { title: String, cancelButtonText: String, confirmButtonText: String },
  rt = ['cancel', 'confirm', 'title', 'toolbar'],
  ot = Object.keys(it);
var at = me({
  name: nt,
  props: it,
  emits: ['confirm', 'cancel'],
  setup(e, { emit: t, slots: n }) {
    const i = () => t('cancel'),
      r = () => t('confirm'),
      o = () => {
        var t;
        const r = null != (t = e.cancelButtonText) ? t : je('cancel');
        if (n.cancel || r) return ge('button', { type: 'button', class: [We('cancel'), A], onClick: i }, [n.cancel ? n.cancel() : r]);
      },
      a = () => {
        var t;
        const i = null != (t = e.confirmButtonText) ? t : je('confirm');
        if (n.confirm || i) return ge('button', { type: 'button', class: [We('confirm'), A], onClick: r }, [n.confirm ? n.confirm() : i]);
      };
    return () =>
      ge('div', { class: We('toolbar') }, [
        n.toolbar
          ? n.toolbar()
          : [o(), n.title ? n.title() : e.title ? ge('div', { class: [We('title'), 'van-ellipsis'] }, [e.title]) : void 0, a()],
      ]);
  },
});
/**
 * @vue/shared v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const lt = Array.isArray,
  st = (e) => 'string' == typeof e,
  ut = (e) => null !== e && 'object' == typeof e,
  ct = /\B([A-Z])/g,
  dt = ((e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  })((e) => e.replace(ct, '-$1').toLowerCase());
function ft(e) {
  if (lt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        r = st(i) ? ht(i) : ft(i);
      if (r) for (const e in r) t[e] = r[e];
    }
    return t;
  }
  if (st(e) || ut(e)) return e;
}
const mt = /;(?![^(]*\))/g,
  vt = /:([^]+)/,
  pt = /\/\*[^]*?\*\//g;
function ht(e) {
  const t = {};
  return (
    e
      .replace(pt, '')
      .split(mt)
      .forEach((e) => {
        if (e) {
          const n = e.split(vt);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function gt(e) {
  let t = '';
  if (st(e)) t = e;
  else if (lt(e))
    for (let n = 0; n < e.length; n++) {
      const i = gt(e[n]);
      i && (t += i + ' ');
    }
  else if (ut(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
let yt = 0;
function bt() {
  const e = ye(),
    { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
  return `${t}-${++yt}`;
}
function wt() {
  const e = ve([]),
    t = [];
  be(() => {
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
function Nt(e, t) {
  if (!S || !window.IntersectionObserver) return;
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
const [Dt, At] = m('sticky');
const _t = V(
    me({
      name: Dt,
      props: { zIndex: b, position: L('top'), container: Object, offsetTop: I(0), offsetBottom: I(0) },
      emits: ['scroll', 'change'],
      setup(e, { emit: t, slots: n }) {
        const i = ve(),
          r = T(i),
          o = De({ fixed: !1, width: 0, height: 0, transform: 0 }),
          a = ve(!1),
          l = pe(() => C('top' === e.position ? e.offsetTop : e.offsetBottom)),
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
          Nt(i, c),
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
              ge('div', { class: At({ fixed: o.fixed && !a.value }), style: u.value }, [null == (e = n.default) ? void 0 : e.call(n)]),
            ]);
          }
        );
      },
    }),
  ),
  [xt, Ot] = m('swipe'),
  Et = {
    loop: G,
    width: b,
    height: b,
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
  St = Symbol(xt);
const kt = V(
    me({
      name: xt,
      props: Et,
      emits: ['change', 'dragStart', 'dragEnd'],
      setup(e, { emit: t, slots: n }) {
        const i = ve(),
          r = ve(),
          o = De({ rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1 });
        let s = !1;
        const u = a(),
          { children: c, linkChildren: d } = U(St),
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
          y = pe(() => f.value * m.value),
          b = pe(() => (o.active + f.value) % f.value),
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
              ((t[n] = `${y.value}px`), (t[i] = e[i] ? `${e[i]}px` : ''));
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
                c[0].setOffset(e ? y.value : 0);
              }
              if (c[f.value - 1] && 0 !== s) {
                const e = s > 0;
                c[f.value - 1].setOffset(e ? -y.value : 0);
              }
            }
            ((o.active = l), (o.offset = s), r && l !== a && t('change', b.value));
          },
          O = () => {
            ((o.swiping = !0), o.active <= -1 ? x({ pace: f.value }) : o.active >= f.value && x({ pace: -f.value }));
          },
          E = () => {
            (O(),
              u.reset(),
              F(() => {
                ((o.swiping = !1), x({ pace: 1, emitChange: !0 }));
              }));
          };
        let S;
        const k = () => clearTimeout(S),
          I = () => {
            (k(),
              +e.autoplay > 0 &&
                f.value > 1 &&
                (S = setTimeout(() => {
                  (E(), I());
                }, +e.autoplay)));
          },
          L = (t = +e.initialSwipe) => {
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
          T = () => L(o.active);
        let C;
        const H = (t) => {
            !e.touchable || t.touches.length > 1 || (u.start(t), (s = !1), (C = Date.now()), k(), O());
          },
          $ = () => {
            if (!e.touchable || !o.swiping) return;
            const n = Date.now() - C,
              i = v.value / n;
            if ((Math.abs(i) > 0.25 || Math.abs(v.value) > m.value / 2) && w.value) {
              const t = e.vertical ? u.offsetY.value : u.offsetX.value;
              let n = 0;
              ((n = e.loop ? (t > 0 ? (v.value > 0 ? -1 : 1) : 0) : -Math[v.value > 0 ? 'ceil' : 'floor'](v.value / m.value)),
                x({ pace: n, emitChange: !0 }));
            } else v.value && x({ pace: 0 });
            ((s = !1), (o.swiping = !1), t('dragEnd', { index: b.value }), I());
          },
          V = (t, n) => {
            const i = n === b.value,
              r = i ? { backgroundColor: e.indicatorColor } : void 0;
            return ge('i', { style: r, class: Ot('indicator', { active: i }) }, null);
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
            next: E,
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
          d({ size: m, props: e, count: f, activeIndicator: b }),
          Ae(
            () => e.initialSwipe,
            (e) => L(+e),
          ),
          Ae(f, () => L(o.active)),
          Ae(() => e.autoplay, I),
          Ae([Y, P, () => e.width, () => e.height], T),
          Ae(B(), (e) => {
            'visible' === e ? I() : k();
          }),
          xe(L),
          Oe(() => L(o.active)),
          R(() => L(o.active)),
          we(k),
          Ne(k),
          N(
            'touchmove',
            (n) => {
              if (e.touchable && o.swiping && (u.move(n), w.value)) {
                (!e.loop && ((0 === o.active && v.value > 0) || (o.active === f.value - 1 && v.value < 0))) ||
                  (D(n, e.stopPropagation), x({ offset: v.value }), s || (t('dragStart', { index: b.value }), (s = !0)));
              }
            },
            { target: r },
          ),
          () => {
            var t;
            return ge('div', { ref: i, class: Ot() }, [
              ge(
                'div',
                {
                  ref: r,
                  style: A.value,
                  class: Ot('track', { vertical: e.vertical }),
                  onTouchstartPassive: H,
                  onTouchend: $,
                  onTouchcancel: $,
                },
                [null == (t = n.default) ? void 0 : t.call(n)],
              ),
              n.indicator
                ? n.indicator({ active: b.value, total: f.value })
                : e.showIndicators && f.value > 1
                  ? ge('div', { class: Ot('indicators', { vertical: e.vertical }) }, [Array(f.value).fill('').map(V)])
                  : void 0,
            ]);
          }
        );
      },
    }),
  ),
  [It, Lt] = m('tabs');
var Tt = me({
  name: It,
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
  setup(e, { emit: t, slots: n }) {
    const i = ve(),
      r = (e) => t('change', e),
      o = () => {
        var t;
        const o = null == (t = n.default) ? void 0 : t.call(n);
        return e.animated || e.swipeable
          ? ge(
              kt,
              {
                ref: i,
                loop: !1,
                class: Lt('track'),
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
      () => ge('div', { class: Lt('content', { animated: e.animated || e.swipeable }) }, [o()])
    );
  },
});
const [Ct, Ht] = m('tabs'),
  Mt = {
    type: L('line'),
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
    lineWidth: b,
    lineHeight: b,
    beforeChange: Function,
    swipeThreshold: I(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  $t = Symbol(Ct);
var Yt = me({
  name: Ct,
  props: Mt,
  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
  setup(t, { emit: n, slots: i }) {
    let r, o, a, u, c;
    const d = ve(),
      f = ve(),
      m = ve(),
      v = ve(),
      h = bt(),
      g = T(d),
      [y, b] = wt(),
      { children: w, linkChildren: D } = U($t),
      A = De({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
      S = pe(() => w.length > +t.swipeThreshold || !t.ellipsis || t.shrink),
      I = pe(() => ({ borderColor: t.color, background: t.background })),
      L = (e, t) => {
        var n;
        return null != (n = e.name) ? n : t;
      },
      H = pe(() => {
        const e = w[A.currentIndex];
        if (e) return L(e, A.currentIndex);
      }),
      P = pe(() => C(t.offsetTop)),
      V = pe(() => (t.sticky ? P.value + r : 0)),
      G = (e) => {
        const n = f.value,
          i = y.value;
        if (!(S.value && n && i && i[A.currentIndex])) return;
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
      B = () => {
        const e = A.inited;
        _e(() => {
          const n = y.value;
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
          l = L(o, r),
          s = null !== A.currentIndex;
        (A.currentIndex !== r && ((A.currentIndex = r), i || G(), B()),
          l !== t.active && (n('update:active', l), s && n('change', l, o.title)),
          a && !t.scrollspy && j(Math.ceil(q(d.value) - P.value)));
      },
      Z = (e, t) => {
        const n = w.findIndex((t, n) => L(t, n) === e);
        F(-1 === n ? 0 : n, t);
      },
      X = (e = !1) => {
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
                      E(e, o),
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
      K = (i, r, o) => {
        const { title: a, disabled: l } = w[r],
          u = L(w[r], r);
        (l ||
          (s(t.beforeChange, {
            args: [u],
            done: () => {
              (F(r), X());
            },
          }),
          e(i)),
          n('clickTab', { name: u, title: a, event: o, disabled: l }));
      },
      J = (e) => {
        ((a = e.isFixed), n('scroll', e));
      },
      Q = () => {
        if ('line' === t.type && w.length) return ge('div', { class: Ht('line'), style: A.lineStyle }, null);
      },
      ee = () => {
        var e, n, r;
        const { type: o, border: a, sticky: l } = t,
          s = [
            ge('div', { ref: l ? void 0 : m, class: [Ht('wrap'), { [W]: 'line' === o && a }] }, [
              ge(
                'div',
                {
                  ref: f,
                  role: 'tablist',
                  class: Ht('nav', [o, { shrink: t.shrink, complete: S.value }]),
                  style: I.value,
                  'aria-orientation': 'horizontal',
                },
                [
                  null == (e = i['nav-left']) ? void 0 : e.call(i),
                  w.map((e) => e.renderTitle(K)),
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
        (B(),
          _e(() => {
            var e, t;
            (G(!0), null == (t = null == (e = v.value) ? void 0 : e.swipeRef.value) || t.resize());
          }));
      };
    (Ae(() => [t.color, t.duration, t.lineWidth, t.lineHeight], B),
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
            B(),
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
            (Z(e), X(!0));
          });
        },
      }),
      Oe(B),
      R(B),
      k(() => {
        (Z(t.active, !0),
          _e(() => {
            ((A.inited = !0), m.value && (r = $(m.value).height), G(!0));
          }));
      }),
      Nt(d, B),
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
        setLine: B,
        scrollable: S,
        onRendered: (e, t) => n('rendered', e, t),
        currentName: H,
        setTitleRefs: b,
        scrollIntoView: G,
      }),
      () =>
        ge('div', { ref: d, class: Ht([t.type]) }, [
          t.showHeader
            ? t.sticky
              ? ge(_t, { container: d.value, offsetTop: P.value, onScroll: J }, { default: () => [ee()] })
              : ee()
            : null,
          ge(
            Tt,
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
const Pt = Symbol(),
  Vt = Symbol(),
  Gt = (e) => {
    const t = Ee(Vt, null);
    (Se(Pt, e),
      Se(
        Vt,
        pe(() => (null == t || t.value) && e.value),
      ));
  },
  [Ut, Bt] = m('tab'),
  Rt = me({
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
          const n = ge('span', { class: Bt('text', { ellipsis: !e.scrollable }) }, [t.title ? t.title() : e.title]);
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
            class: [Bt([e.type, { grow: e.scrollable && !e.shrink, shrink: e.shrink, active: e.isActive, disabled: e.disabled }])],
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
  [Ft, zt] = m('swipe-item');
const Wt = V(
    me({
      name: Ft,
      setup(e, { slots: t }) {
        let n;
        const i = De({ offset: 0, inited: !1, mounted: !1 }),
          { parent: r, index: o } = w(St);
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
            return ge('div', { class: zt(), style: a.value }, [s.value ? (null == (e = t.default) ? void 0 : e.call(t)) : null]);
          }
        );
      },
    }),
  ),
  [jt, qt] = m('tab');
const Zt = V(
    me({
      name: jt,
      props: v({}, t, {
        dot: Boolean,
        name: b,
        badge: b,
        title: String,
        disabled: Boolean,
        titleClass: X,
        titleStyle: [String, Object],
        showZeroBadge: G,
      }),
      setup(e, { slots: t }) {
        const n = bt(),
          i = ve(!1),
          r = ye(),
          { parent: o, index: a } = w($t);
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
          ((c.value = t ? gt(t) : ''),
            (d.value =
              n && 'string' != typeof n
                ? (function (e) {
                    if (!e) return '';
                    if (st(e)) return e;
                    let t = '';
                    for (const n in e) {
                      const i = e[n];
                      (st(i) || 'number' == typeof i) && (t += `${n.startsWith('--') ? n : dt(n)}:${i};`);
                    }
                    return t;
                  })(ft(n))
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
          Gt(u),
          l({
            id: n,
            renderTitle: (i) =>
              ge(
                Rt,
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
                  K(o.props, ['type', 'color', 'shrink']),
                  K(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
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
                Wt,
                {
                  id: n,
                  role: 'tabpanel',
                  class: qt('panel-wrapper', { inactive: f.value }),
                  tabindex: u.value ? 0 : -1,
                  'aria-hidden': !u.value,
                  'aria-labelledby': r,
                  'data-allow-mismatch': 'attribute',
                },
                {
                  default: () => {
                    var e;
                    return [ge('div', { class: qt('panel') }, [null == (e = t.default) ? void 0 : e.call(t)])];
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
                  class: qt('panel'),
                  tabindex: m ? 0 : -1,
                  'aria-labelledby': r,
                  'data-allow-mismatch': 'attribute',
                },
                [v],
              ),
              [[Le, m]],
            );
          }
        );
      },
    }),
  ),
  Xt = V(Yt),
  [Kt] = m('picker-group'),
  Jt = Symbol(Kt);
v({ tabs: y(), activeTab: I(0), nextStepText: String, showToolbar: G }, it);
const Qt = v(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: I(44),
    showToolbar: G,
    swipeDuration: I(1e3),
    visibleOptionNum: I(6),
  },
  it,
);
const en = V(
    me({
      name: ze,
      props: v({}, Qt, { columns: y(), modelValue: y(), toolbarPosition: L('top'), columnsFieldNames: Object }),
      emits: ['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue'],
      setup(e, { emit: t, slots: n }) {
        const i = ve(),
          r = ve(e.modelValue.slice(0)),
          { parent: o } = w(Jt),
          { children: a, linkChildren: s } = U(et);
        s();
        const c = pe(() =>
            (function (e) {
              return v({ text: 'text', value: 'value', children: 'children' }, e);
            })(e.columnsFieldNames),
          ),
          d = pe(() => C(e.optionHeight)),
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
                    ((r = p(a) ? Ke(e, a, t) : void 0), !r && e.length && (r = Ke(e, qe(e)[t.value], t)), o++, i.push(e));
                  }
                  return i;
                })(t, c.value, r);
              default:
                return [t];
            }
          }),
          h = pe(() => m.value.some((e) => e.length)),
          g = pe(() => m.value.map((e, t) => Ke(e, r.value[t], c.value))),
          y = pe(() => m.value.map((e, t) => e.findIndex((e) => e[c.value.value] === r.value[t]))),
          b = (e, t) => {
            if (r.value[e] !== t) {
              const n = r.value.slice(0);
              ((n[e] = t), (r.value = n));
            }
          },
          A = () => ({ selectedValues: r.value.slice(0), selectedOptions: g.value, selectedIndexes: y.value }),
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
                tt,
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
                      (b(n, e),
                        'cascade' === f.value &&
                          r.value.forEach((e, t) => {
                            const n = m.value[t];
                            Xe(n, e, c.value) || b(t, n.length ? n[0][c.value.value] : void 0);
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
          E = (e) => {
            if (h.value) {
              const t = { height: `${d.value}px` },
                n = { backgroundSize: `100% ${(e - d.value) / 2}px` };
              return [ge('div', { class: We('mask'), style: n }, null), ge('div', { class: [J, We('frame')], style: t }, null)];
            }
          },
          S = () => {
            const t = d.value * +e.visibleOptionNum,
              r = { height: `${t}px` };
            return e.loading || h.value || !n.empty ? ge('div', { ref: i, class: We('columns'), style: r }, [O(), E(t)]) : n.empty();
          },
          k = () => {
            if (e.showToolbar && !o) return ge(at, Ie(K(e, ot), { onConfirm: _, onCancel: x }), K(n, rt));
          },
          I = (e) => {
            e.forEach((e, t) => {
              e.length && !Xe(e, r.value[t], c.value) && b(t, qe(e)[c.value.value]);
            });
          };
        let L;
        (Ae(m, (e) => I(e), { immediate: !0 }),
          Ae(
            () => e.modelValue,
            (t) => {
              (Q(t, r.value) || Q(t, L) || ((r.value = t.slice(0)), (L = t.slice(0))), 0 === e.modelValue.length && I(m.value));
            },
            { deep: !0 },
          ),
          Ae(
            r,
            (n) => {
              Q(n, e.modelValue) || ((L = n.slice(0)), t('update:modelValue', L));
            },
            { immediate: !0 },
          ),
          N('touchmove', D, { target: i }));
        return (
          l({ confirm: _, getSelectedOptions: () => g.value }),
          () => {
            var t, i;
            return ge('div', { class: We() }, [
              'top' === e.toolbarPosition ? k() : null,
              e.loading ? ge(u, { class: We('loading') }, null) : null,
              null == (t = n['columns-top']) ? void 0 : t.call(n),
              S(),
              null == (i = n['columns-bottom']) ? void 0 : i.call(n),
              'bottom' === e.toolbarPosition ? k() : null,
            ]);
          }
        );
      },
    }),
  ),
  [tn, nn] = m('cell'),
  rn = {
    tag: L('div'),
    icon: String,
    size: String,
    title: b,
    value: b,
    label: b,
    center: Boolean,
    isLink: Boolean,
    border: G,
    iconPrefix: String,
    valueClass: X,
    labelClass: X,
    titleClass: X,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const on = V(
  me({
    name: tn,
    props: v({}, rn, t),
    setup(e, { slots: t }) {
      const i = n(),
        r = () => {
          if (t.label || p(e.label)) return ge('div', { class: [nn('label'), e.labelClass] }, [t.label ? t.label() : e.label]);
        },
        o = () => {
          var n;
          if (t.title || p(e.title)) {
            const i = null == (n = t.title) ? void 0 : n.call(t);
            if (Array.isArray(i) && 0 === i.length) return;
            return ge('div', { class: [nn('title'), e.titleClass], style: e.titleStyle }, [i || ge('span', null, [e.title]), r()]);
          }
        },
        a = () => {
          const n = t.value || t.default;
          if (n || p(e.value)) return ge('div', { class: [nn('value'), e.valueClass] }, [n ? n() : ge('span', null, [e.value])]);
        },
        l = () => {
          if (t['right-icon']) return t['right-icon']();
          if (e.isLink) {
            const t = e.arrowDirection && 'right' !== e.arrowDirection ? `arrow-${e.arrowDirection}` : 'arrow';
            return ge(ee, { name: t, class: nn('right-icon') }, null);
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
            { class: nn(v), role: m ? 'button' : void 0, tabindex: m ? 0 : void 0, onClick: i },
            {
              default: () => {
                var n;
                return [
                  t.icon ? t.icon() : e.icon ? ge(ee, { name: e.icon, class: nn('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
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
function an(e) {
  return Array.isArray(e) ? !e.length : 0 !== e && !e;
}
function ln(e, t) {
  const { message: n } = t;
  return ie(n) ? n(e, t) : n || '';
}
function sn({ target: e }) {
  e.composing = !0;
}
function un({ target: e }) {
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function cn(e) {
  return [...e].length;
}
function dn(e, t) {
  return [...e].slice(0, t).join('');
}
const [fn, mn] = m('field'),
  vn = {
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
    clearIcon: L('clear'),
    modelValue: I(''),
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
const pn = V(
  me({
    name: fn,
    props: v({}, rn, vn, {
      rows: b,
      type: L('text'),
      rules: Array,
      autosize: [Boolean, Object],
      labelWidth: b,
      labelClass: X,
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
      const i = bt(),
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
                    if (an(e)) {
                      if (t.required) return !1;
                      if (!1 === t.validateEmpty) return !0;
                    }
                    return !(t.pattern && !t.pattern.test(String(e)));
                  })(e, t))
                )
                  return ((r.status = 'failed'), void (r.validateMessage = ln(e, t)));
                if (t.validator) {
                  if (an(e) && !1 === t.validateEmpty) return;
                  return (function (e, t) {
                    return new Promise((n) => {
                      const i = t.validator(e, t);
                      re(i) ? i.then(n) : n(i);
                    });
                  })(e, t).then((n) => {
                    n && 'string' == typeof n
                      ? ((r.status = 'failed'), (r.validateMessage = n))
                      : !1 === n && ((r.status = 'failed'), (r.validateMessage = ln(e, t)));
                  });
                }
              }),
            Promise.resolve(),
          ),
        y = () => {
          ((r.status = 'unvalidated'), (r.validateMessage = ''));
        },
        b = () => t('endValidate', { status: r.status, message: r.validateMessage }),
        A = (n = e.rules) =>
          new Promise((i) => {
            (y(),
              n
                ? (t('startValidate'),
                  g(n).then(() => {
                    'failed' === r.status ? (i({ name: e.name, message: r.validateMessage }), b()) : ((r.status = 'passed'), i(), b());
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
            if (p(i) && cn(t) > +i) {
              const e = c();
              if (e && cn(e) === +i) return e;
              const a = null == (n = o.value) ? void 0 : n.selectionEnd;
              if (r.focused && a) {
                const e = [...t],
                  n = e.length - +i;
                return (e.splice(a - n, n), e.join(''));
              }
              return dn(t, +i);
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
            if (((n = t(n)), p(i) && cn(n) > +i && (n = dn(n, +i)), o.value && r.focused)) {
              const { selectionEnd: e } = o.value,
                n = dn(s, e);
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
        E = () => {
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
          ((r.focused = !0), t('focus', e), _e(k), d('readonly') && E());
        },
        L = (e) => {
          ((r.focused = !1), x(c(), 'onBlur'), t('blur', e), d('readonly') || (_('onBlur'), _e(k), se()));
        },
        T = (e) => t('clickInput', e),
        C = (e) => t('clickLeftIcon', e),
        H = (e) => t('clickRightIcon', e),
        M = pe(() => ('boolean' == typeof e.error ? e.error : !(!u || !u.props.showError || 'failed' !== r.status) || void 0)),
        $ = pe(() => {
          const e = d('labelWidth'),
            t = d('labelAlign');
          if (e && 'top' !== t) return { width: z(e) };
        }),
        Y = (n) => {
          if (13 === n.keyCode) {
            ((u && u.props.submitOnEnter) || 'textarea' === e.type || D(n), 'search' === e.type && E());
          }
          t('keypress', n);
        },
        P = () => e.id || `${i}-input`,
        V = () => {
          const t = mn('control', [
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
            onBlur: L,
            onFocus: I,
            onInput: O,
            onClick: T,
            onChange: un,
            onKeypress: Y,
            onCompositionend: un,
            onCompositionstart: sn,
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
            return ge('div', { class: mn('right-icon'), onClick: H }, [
              t ? t() : ge(ee, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
            ]);
        },
        U = () => {
          if (e.showWordLimit && e.maxlength) {
            const t = cn(c());
            return ge('div', { class: mn('word-limit') }, [ge('span', { class: mn('word-num') }, [t]), Te('/'), e.maxlength]);
          }
        },
        B = () => {
          if (u && !1 === u.props.showErrorMessage) return;
          const t = e.errorMessage || r.validateMessage;
          if (t) {
            const e = n['error-message'],
              i = d('errorMessageAlign');
            return ge('div', { class: mn('error-message', i) }, [e ? e({ message: t }) : t]);
          }
        },
        R = () => [
          ge('div', { class: mn('body') }, [
            V(),
            f.value && ge(ee, { ref: a, name: e.clearIcon, class: mn('clear') }, null),
            G(),
            n.button && ge('div', { class: mn('button') }, [n.button()]),
          ]),
          U(),
          B(),
        ];
      return (
        l({ blur: E, focus: S, validate: A, formValue: m, resetValidation: y, getValidationStatus: () => r.status }),
        Se(ue, { customValue: s, resetValidation: y, validateWithTrigger: _ }),
        Ae(
          () => e.modelValue,
          () => {
            (x(c()), y(), _('onChange'), _e(k));
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
                return ge('div', { class: mn('left-icon'), onClick: C }, [
                  t ? t() : ge(ee, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                ]);
            })();
          return ge(
            on,
            {
              size: e.size,
              class: mn({ error: M.value, disabled: t, [`label-${r}`]: r }),
              center: e.center,
              border: e.border,
              isLink: e.isLink,
              clickable: e.clickable,
              titleStyle: $.value,
              valueClass: mn('value'),
              titleClass: [mn('label', [r, { required: v.value }]), e.labelClass],
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
                              (D(e), S());
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
const [hn, gn, yn] = m('calendar');
function bn(e, t) {
  const n = e.getFullYear(),
    i = t.getFullYear();
  if (n === i) {
    const n = e.getMonth(),
      i = t.getMonth();
    return n === i ? 0 : n > i ? 1 : -1;
  }
  return n > i ? 1 : -1;
}
function wn(e, t) {
  const n = bn(e, t);
  if (0 === n) {
    const n = e.getDate(),
      i = t.getDate();
    return n === i ? 0 : n > i ? 1 : -1;
  }
  return n;
}
const Nn = (e) => new Date(e),
  Dn = (e) => (Array.isArray(e) ? e.map(Nn) : Nn(e));
function An(e, t) {
  const n = Nn(e);
  return (n.setDate(n.getDate() + t), n);
}
function _n(e, t) {
  const n = Nn(e);
  return (n.setMonth(n.getMonth() + t), n.getDate() !== e.getDate() && n.setDate(0), n);
}
function xn(e, t) {
  const n = Nn(e);
  return (n.setFullYear(n.getFullYear() + t), n.getDate() !== e.getDate() && n.setDate(0), n);
}
const On = (e) => An(e, -1),
  En = (e) => An(e, 1),
  Sn = (e) => _n(e, -1),
  kn = (e) => _n(e, 1),
  In = (e) => xn(e, -1),
  Ln = (e) => xn(e, 1),
  Tn = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
v({}, Qt, { modelValue: y(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [Cn] = m('calendar-day');
var Hn = me({
  name: Cn,
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
        if (t || n['top-info']) return ge('div', { class: gn('top-info') }, [n['top-info'] ? n['top-info'](e.item) : t]);
      },
      a = () => {
        const { bottomInfo: t } = e.item;
        if (t || n['bottom-info']) return ge('div', { class: gn('bottom-info') }, [n['bottom-info'] ? n['bottom-info'](e.item) : t]);
      },
      l = () => {
        const { item: t, color: i, rowHeight: r } = e,
          { type: l } = t,
          s = [o(), n.text ? n.text(e.item) : e.item.text, a()];
        return 'selected' === l ? ge('div', { class: gn('selected-day'), style: { width: r, height: r, background: i } }, [s]) : s;
      };
    return () => {
      const { type: t, className: n } = e.item;
      return 'placeholder' === t
        ? ge('div', { class: gn('day'), style: i.value }, null)
        : ge('div', { role: 'gridcell', style: i.value, class: [gn('day', t), n], tabindex: 'disabled' === t ? void 0 : -1, onClick: r }, [
            l(),
          ]);
    };
  },
});
const [Mn] = m('calendar-month');
var $n = me({
  name: Mn,
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
  setup(e, { emit: t, slots: n }) {
    const [i, r] = de(),
      o = ve(),
      a = ve(),
      s = Fe(a),
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
        if ((i && wn(t, i) < 0) || (r && wn(t, r) > 0)) return 'disabled';
        if (null === o) return '';
        if (Array.isArray(o)) {
          if ('multiple' === n)
            return ((t) => {
              const n = (t) => e.currentDate.some((e) => 0 === wn(e, t));
              if (n(t)) {
                const e = On(t),
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
              const r = wn(t, n);
              if (!i) return 0 === r ? 'start' : '';
              const o = wn(t, i);
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
        } else if ('single' === n) return 0 === wn(t, o) ? 'selected' : '';
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
          return ge('div', { class: gn('month-title') }, [n['month-title'] ? n['month-title']({ date: e.date, text: u.value }) : u.value]);
      },
      g = () => {
        if (e.showMark && m.value) return ge('div', { class: gn('month-mark') }, [e.date.getMonth() + 1]);
      },
      y = pe(() => {
        const e = Math.ceil((f.value + d.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      b = pe(() => {
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
      w = pe(() => b.value.filter((e) => 'disabled' === e.type)),
      N = (i, r) =>
        ge(
          Hn,
          {
            item: i,
            index: r,
            color: e.color,
            offset: d.value,
            rowHeight: c.value,
            onClick: (e) => t('click', e),
            onClickDisabledDate: (e) => t('clickDisabledDate', e),
          },
          K(n, ['top-info', 'bottom-info', 'text']),
        );
    return (
      l({
        getTitle: () => u.value,
        getHeight: () => s.value,
        setVisible: r,
        scrollToDate: (e, t) => {
          if (o.value) {
            const n = $(o.value),
              i = y.value.length,
              r = ((Math.ceil((t.getDate() + d.value) / 7) - 1) * n.height) / i;
            E(e, n.top + r + e.scrollTop - $(e).top);
          }
        },
        disabledDays: w,
      }),
      () =>
        ge('div', { class: gn('month'), ref: a }, [
          h(),
          ge('div', { ref: o, role: 'grid', class: gn('days') }, [g(), (m.value ? b : y).value.map(N)]),
        ])
    );
  },
});
const [Yn] = m('calendar-header');
var Pn = me({
  name: Yn,
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
  setup(e, { slots: t, emit: n }) {
    const i = pe(() => e.date && e.minDate && bn(Sn(e.date), e.minDate) < 0),
      r = pe(() => e.date && e.minDate && bn(In(e.date), e.minDate) < 0),
      o = pe(() => e.date && e.maxDate && bn(kn(e.date), e.maxDate) > 0),
      a = pe(() => e.date && e.maxDate && bn(Ln(e.date), e.maxDate) > 0),
      l = () => {
        if (e.showTitle) {
          const n = e.title || yn('title'),
            i = t.title ? t.title() : n;
          return ge('div', { class: gn('header-title') }, [i]);
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
          p = ge('view', { class: gn('header-action', { disabled: d }), onClick: d ? void 0 : () => u((n ? kn : Sn)(e.date)) }, [
            s ? s({ disabled: d }) : ge(ee, { class: { [A]: !d }, name: m }, null),
          ]),
          h =
            l &&
            ge('view', { class: gn('header-action', { disabled: f }), onClick: f ? void 0 : () => u((n ? Ln : In)(e.date)) }, [
              c ? c({ disabled: f }) : ge(ee, { class: { [A]: !f }, name: v }, null),
            ]);
        return n ? [p, h] : [h, p];
      },
      d = () => {
        if (e.showSubtitle) {
          const n = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            i = 'none' !== e.switchMode;
          return ge('div', { class: gn('header-subtitle', { 'with-switch': i }), onClick: s }, [
            i ? [c(), ge('div', { class: gn('header-subtitle-text') }, [n]), c(!0)] : n,
          ]);
        }
      },
      f = () => {
        const { firstDayOfWeek: t } = e,
          n = yn('weekdays'),
          i = [...n.slice(t, 7), ...n.slice(0, t)];
        return ge('div', { class: gn('weekdays') }, [i.map((e) => ge('span', { class: gn('weekday') }, [e]))]);
      };
    return () => ge('div', { class: gn('header') }, [l(), d(), f()]);
  },
});
const Vn = V(
  me({
    name: hn,
    props: {
      show: Boolean,
      type: L('single'),
      switchMode: L('none'),
      title: String,
      color: String,
      round: G,
      readonly: Boolean,
      poppable: G,
      maxRange: I(null),
      position: L('bottom'),
      teleport: [String, Object],
      showMark: G,
      showTitle: G,
      formatter: Function,
      rowHeight: b,
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
    setup(e, { emit: t, slots: n }) {
      const r = pe(() => 'none' !== e.switchMode),
        o = pe(() => (e.minDate || r.value ? e.minDate : Tn())),
        a = pe(() => (e.maxDate || r.value ? e.maxDate : _n(Tn(), 6))),
        s = (e, t = o.value, n = a.value) => (t && -1 === wn(e, t) ? t : n && 1 === wn(e, n) ? n : e),
        u = (t = e.defaultDate) => {
          const { type: n, allowSameDay: i } = e;
          if (null === t) return t;
          const r = Tn();
          if ('range' === n) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === wn(t[0], r) && (t = []));
            const e = o.value,
              n = a.value;
            return [s(t[0] || r, e, n ? (i ? n : On(n)) : void 0), s(t[1] || (i ? r : En(r)), e ? (i ? e : En(e)) : void 0)];
          }
          return 'multiple' === n ? (Array.isArray(t) ? t.map((e) => s(e)) : [s(r)]) : ((t && !Array.isArray(t)) || (t = r), s(t));
        };
      let c;
      const m = ve(),
        v = ve(u()),
        p = ve(
          (() => {
            const e = Array.isArray(v.value) ? v.value[0] : v.value;
            return e || s(Tn());
          })(),
        ),
        h = ve(),
        [g, y] = wt(),
        b = pe(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        w = pe(() => {
          const e = [];
          if (!o.value || !a.value) return e;
          const t = new Date(o.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== bn(t, a.value));
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
                (w.value.some((t, n) => 0 === bn(t, e) && (m.value && g.value[n].scrollToDate(m.value, e), !0)), D());
              });
        },
        x = () => {
          if (!e.poppable || e.show)
            if (v.value) {
              const t = 'single' === e.type ? v.value : v.value[0];
              fe(t) && A(t);
            } else r.value || _(D);
        },
        E = () => {
          (e.poppable && !e.show) ||
            (r.value ||
              _(() => {
                c = Math.floor($(m).height);
              }),
            x());
        },
        S = (e = u()) => {
          ((v.value = e), x());
        },
        I = (e) => {
          ((p.value = e), t('panelChange', { date: e }));
        },
        L = () => {
          var e;
          return t('confirm', null != (e = v.value) ? e : Dn(v.value));
        },
        T = (n, i) => {
          const r = (e) => {
            ((v.value = e), t('select', Dn(e)));
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
            if (!i) return void r([n[0], An(n[0], +e.maxRange - 1)]);
          }
          (r(n), i && !e.showConfirm && L());
        },
        C = pe(() =>
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
              const n = wn(i, t);
              if (1 === n) {
                const e = ((e, t, n) => {
                  var i;
                  return null == (i = e.find((e) => -1 === wn(t, e.date) && -1 === wn(e.date, n))) ? void 0 : i.date;
                })(C.value, t, i);
                if (e) {
                  const n = On(e);
                  -1 === wn(t, n) ? T([t, n]) : T([i]);
                } else T([t, i], !0);
              } else -1 === n ? T([i]) : e.allowSameDay && T([i, i], !0);
            } else T([i]);
          } else if ('multiple' === r) {
            if (!v.value) return void T([i]);
            const n = v.value,
              r = n.findIndex((e) => 0 === wn(e, i));
            if (-1 !== r) {
              const [e] = n.splice(r, 1);
              t('unselect', Nn(e));
            } else e.maxRange && n.length >= +e.maxRange ? f(e.rangePrompt || yn('rangePrompt', e.maxRange)) : T([...n, i]);
          } else T(i, !0);
        },
        M = (e) => t('clickOverlay', e),
        Y = (e) => t('update:show', e),
        P = (i, l) => {
          const s = 0 !== l || !e.showSubtitle;
          return ge(
            $n,
            Ie(
              {
                ref: r.value ? h : y(l),
                date: i,
                currentDate: v.value,
                showMonthTitle: s,
                firstDayOfWeek: b.value,
                lazyRender: !r.value && e.lazyRender,
                maxDate: a.value,
                minDate: o.value,
              },
              K(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: H, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            K(n, ['top-info', 'bottom-info', 'month-title', 'text']),
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
                class: gn('confirm'),
                disabled: r,
                nativeType: 'button',
                onClick: L,
              },
              { default: () => [t ? t({ disabled: r }) : o || yn('confirm')] },
            );
          }
        },
        G = () => {
          var i, l;
          return ge('div', { class: gn() }, [
            ge(
              Pn,
              {
                date: null == (i = h.value) ? void 0 : i.date,
                maxDate: a.value,
                minDate: o.value,
                title: e.title,
                subtitle: null == (l = h.value) ? void 0 : l.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: b.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: I,
              },
              K(n, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            ge('div', { ref: m, class: gn('body'), onScroll: r.value ? void 0 : D }, [r.value ? P(p.value, 0) : w.value.map(P)]),
            ge('div', { class: [gn('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [V()]),
          ]);
        };
      return (
        Ae(() => e.show, E),
        Ae(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => S(u(v.value)),
        ),
        Ae(
          () => e.defaultDate,
          (e) => {
            S(e);
          },
        ),
        l({ reset: S, scrollToDate: A, getSelectedDate: () => v.value }),
        k(E),
        () =>
          e.poppable
            ? ge(
                d,
                {
                  show: e.show,
                  class: gn('popup'),
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
function Gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Un,
  Bn = { exports: {} };
const Rn = Gn(
  (Un ||
    ((Un = 1),
    (Bn.exports = (function () {
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
        y = {
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
        b = 'en',
        w = {};
      w[b] = h;
      var N = '$isDayjsObject',
        D = function (e) {
          return e instanceof O || !(!e || !e[N]);
        },
        A = function e(t, n, i) {
          var r;
          if (!t) return b;
          if ('string' == typeof t) {
            var o = t.toLowerCase();
            (w[o] && (r = o), n && ((w[o] = n), (r = o)));
            var a = t.split('-');
            if (!r && a.length > 1) return e(a[0]);
          } else {
            var l = t.name;
            ((w[l] = t), (r = l));
          }
          return (!i && r && (b = r), r || (!i && b));
        },
        _ = function (e, t) {
          if (D(e)) return e.clone();
          var n = 'object' == typeof t ? t : {};
          return ((n.date = e), (n.args = arguments), new O(n));
        },
        x = y;
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
                y = 'set' + (this.$u ? 'UTC' : '');
              switch (c) {
                case d:
                  return i ? m(1, 0) : m(31, 11);
                case u:
                  return i ? m(1, h) : m(0, h + 1);
                case s:
                  var b = this.$locale().weekStart || 0,
                    w = (p < b ? p + 7 : p) - b;
                  return m(i ? g - w : g + (6 - w), h);
                case l:
                case f:
                  return v(y + 'Hours', 0);
                case a:
                  return v(y + 'Minutes', 1);
                case o:
                  return v(y + 'Seconds', 2);
                case r:
                  return v(y + 'Milliseconds', 3);
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
                y = (g.utcOffset() - this.utcOffset()) * t,
                b = this - g,
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
                  v = (b - y) / 6048e5;
                  break;
                case l:
                  v = (b - y) / 864e5;
                  break;
                case a:
                  v = b / n;
                  break;
                case o:
                  v = b / t;
                  break;
                case r:
                  v = b / e;
                  break;
                default:
                  v = b;
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
        E = O.prototype;
      return (
        (_.prototype = E),
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
          E[e[1]] = function (t) {
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
        (_.en = w[b]),
        (_.Ls = w),
        (_.p = {}),
        _
      );
    })())),
  Bn.exports),
);
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */ var Fn,
  zn,
  Wn = 9e15,
  jn = 1e9,
  qn = '0123456789abcdef',
  Zn =
    '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
  Xn =
    '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
  Kn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Wn, maxE: Wn, crypto: !1 },
  Jn = !0,
  Qn = '[DecimalError] ',
  ei = Qn + 'Invalid argument: ',
  ti = Qn + 'Precision limit exceeded',
  ni = Qn + 'crypto unavailable',
  ii = '[object Decimal]',
  ri = Math.floor,
  oi = Math.pow,
  ai = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  li = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  si = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  ui = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  ci = 1e7,
  di = Zn.length - 1,
  fi = Xn.length - 1,
  mi = { toStringTag: ii };
function vi(e) {
  var t,
    n,
    i,
    r = e.length - 1,
    o = '',
    a = e[0];
  if (r > 0) {
    for (o += a, t = 1; t < r; t++) ((n = 7 - (i = e[t] + '').length) && (o += xi(n)), (o += i));
    (n = 7 - (i = (a = e[t]) + '').length) && (o += xi(n));
  } else if (0 === a) return '0';
  for (; a % 10 == 0; ) a /= 10;
  return o + a;
}
function pi(e, t, n) {
  if (e !== ~~e || e < t || e > n) throw Error(ei + e);
}
function hi(e, t, n, i) {
  var r, o, a, l;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += 7), (r = 0)) : ((r = Math.ceil((t + 1) / 7)), (t %= 7)),
    (o = oi(10, 7 - t)),
    (l = e[r] % o | 0),
    null == i
      ? t < 3
        ? (0 == t ? (l = (l / 100) | 0) : 1 == t && (l = (l / 10) | 0),
          (a = (n < 4 && 99999 == l) || (n > 3 && 49999 == l) || 5e4 == l || 0 == l))
        : (a =
            (((n < 4 && l + 1 == o) || (n > 3 && l + 1 == o / 2)) && ((e[r + 1] / o / 100) | 0) == oi(10, t - 2) - 1) ||
            ((l == o / 2 || 0 == l) && !((e[r + 1] / o / 100) | 0)))
      : t < 4
        ? (0 == t ? (l = (l / 1e3) | 0) : 1 == t ? (l = (l / 100) | 0) : 2 == t && (l = (l / 10) | 0),
          (a = ((i || n < 4) && 9999 == l) || (!i && n > 3 && 4999 == l)))
        : (a = (((i || n < 4) && l + 1 == o) || (!i && n > 3 && l + 1 == o / 2)) && ((e[r + 1] / o / 1e3) | 0) == oi(10, t - 3) - 1),
    a
  );
}
function gi(e, t, n) {
  for (var i, r, o = [0], a = 0, l = e.length; a < l; ) {
    for (r = o.length; r--; ) o[r] *= t;
    for (o[0] += qn.indexOf(e.charAt(a++)), i = 0; i < o.length; i++)
      o[i] > n - 1 && (void 0 === o[i + 1] && (o[i + 1] = 0), (o[i + 1] += (o[i] / n) | 0), (o[i] %= n));
  }
  return o.reverse();
}
((mi.absoluteValue = mi.abs =
  function () {
    var e = new this.constructor(this);
    return (e.s < 0 && (e.s = 1), bi(e));
  }),
  (mi.ceil = function () {
    return bi(new this.constructor(this), this.e + 1, 2);
  }),
  (mi.clampedTo = mi.clamp =
    function (e, t) {
      var n = this,
        i = n.constructor;
      if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
      if (e.gt(t)) throw Error(ei + t);
      return n.cmp(e) < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    }),
  (mi.comparedTo = mi.cmp =
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
  (mi.cosine = mi.cos =
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
                i < 32 ? (r = (1 / Hi(4, (n = Math.ceil(i / 3)))).toString()) : ((n = 16), (r = '2.3283064365386962890625e-10')));
              ((e.precision += n), (t = Ci(e, 1, t.times(r), new e(1))));
              for (var o = n; o--; ) {
                var a = t.times(t);
                t = a.times(a).minus(a).times(8).plus(1);
              }
              return ((e.precision -= n), t);
            })(i, Mi(i, n))),
            (i.precision = e),
            (i.rounding = t),
            bi(2 == zn || 3 == zn ? n.neg() : n, e, t, !0))
          : new i(1)
        : new i(NaN);
    }),
  (mi.cubeRoot = mi.cbrt =
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
        Jn = !1,
          (o = c.s * oi(c.s * c, 1 / 3)) && Math.abs(o) != 1 / 0
            ? (i = new d(o.toString()))
            : ((n = vi(c.d)),
              (o = ((e = c.e) - n.length + 1) % 3) && (n += 1 == o || -2 == o ? '0' : '00'),
              (o = oi(n, 1 / 3)),
              (e = ri((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
              ((i = new d((n = o == 1 / 0 ? '5e' + e : (n = o.toExponential()).slice(0, n.indexOf('e') + 1) + e))).s = c.s)),
          a = (e = d.precision) + 3;
        ;

      )
        if (
          ((u = (s = (l = i).times(l).times(l)).plus(c)),
          (i = yi(u.plus(c).times(l), u.plus(s), a + 2, 1)),
          vi(l.d).slice(0, a) === (n = vi(i.d)).slice(0, a))
        ) {
          if ('9999' != (n = n.slice(a - 3, a + 1)) && (r || '4999' != n)) {
            (+n && (+n.slice(1) || '5' != n.charAt(0))) || (bi(i, e + 1, 1), (t = !i.times(i).times(i).eq(c)));
            break;
          }
          if (!r && (bi(l, e + 1, 0), l.times(l).times(l).eq(c))) {
            i = l;
            break;
          }
          ((a += 4), (r = 1));
        }
      return ((Jn = !0), bi(i, e, d.rounding, t));
    }),
  (mi.decimalPlaces = mi.dp =
    function () {
      var e,
        t = this.d,
        n = NaN;
      if (t) {
        if (((n = 7 * ((e = t.length - 1) - ri(this.e / 7))), (e = t[e]))) for (; e % 10 == 0; e /= 10) n--;
        n < 0 && (n = 0);
      }
      return n;
    }),
  (mi.dividedBy = mi.div =
    function (e) {
      return yi(this, new this.constructor(e));
    }),
  (mi.dividedToIntegerBy = mi.divToInt =
    function (e) {
      var t = this.constructor;
      return bi(yi(this, new t(e), 0, 1, 1), t.precision, t.rounding);
    }),
  (mi.equals = mi.eq =
    function (e) {
      return 0 === this.cmp(e);
    }),
  (mi.floor = function () {
    return bi(new this.constructor(this), this.e + 1, 3);
  }),
  (mi.greaterThan = mi.gt =
    function (e) {
      return this.cmp(e) > 0;
    }),
  (mi.greaterThanOrEqualTo = mi.gte =
    function (e) {
      var t = this.cmp(e);
      return 1 == t || 0 === t;
    }),
  (mi.hyperbolicCosine = mi.cosh =
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
        (r = o.d.length) < 32 ? (t = (1 / Hi(4, (e = Math.ceil(r / 3)))).toString()) : ((e = 16), (t = '2.3283064365386962890625e-10')),
        (o = Ci(a, 1, o.times(t), new a(1), !0)));
      for (var s, u = e, c = new a(8); u--; ) ((s = o.times(o)), (o = l.minus(s.times(c.minus(s.times(c))))));
      return bi(o, (a.precision = n), (a.rounding = i), !0);
    }),
  (mi.hyperbolicSine = mi.sinh =
    function () {
      var e,
        t,
        n,
        i,
        r = this,
        o = r.constructor;
      if (!r.isFinite() || r.isZero()) return new o(r);
      if (((t = o.precision), (n = o.rounding), (o.precision = t + Math.max(r.e, r.sd()) + 4), (o.rounding = 1), (i = r.d.length) < 3))
        r = Ci(o, 2, r, r, !0);
      else {
        ((e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e), (r = Ci(o, 2, (r = r.times(1 / Hi(5, e))), r, !0)));
        for (var a, l = new o(5), s = new o(16), u = new o(20); e--; )
          ((a = r.times(r)), (r = r.times(l.plus(a.times(s.times(a).plus(u))))));
      }
      return ((o.precision = t), (o.rounding = n), bi(r, t, n, !0));
    }),
  (mi.hyperbolicTangent = mi.tanh =
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
  (mi.inverseCosine = mi.acos =
    function () {
      var e = this,
        t = e.constructor,
        n = e.abs().cmp(1),
        i = t.precision,
        r = t.rounding;
      return -1 !== n
        ? 0 === n
          ? e.isNeg()
            ? Ai(t, i, r)
            : new t(0)
          : new t(NaN)
        : e.isZero()
          ? Ai(t, i + 4, r).times(0.5)
          : ((t.precision = i + 6),
            (t.rounding = 1),
            (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
            (t.precision = i),
            (t.rounding = r),
            e.times(2));
    }),
  (mi.inverseHyperbolicCosine = mi.acosh =
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
            (Jn = !1),
            (n = n.times(n).minus(1).sqrt().plus(n)),
            (Jn = !0),
            (i.precision = e),
            (i.rounding = t),
            n.ln())
          : new i(n);
    }),
  (mi.inverseHyperbolicSine = mi.asinh =
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
          (Jn = !1),
          (n = n.times(n).plus(1).sqrt().plus(n)),
          (Jn = !0),
          (i.precision = e),
          (i.rounding = t),
          n.ln());
    }),
  (mi.inverseHyperbolicTangent = mi.atanh =
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
              ? bi(new o(r), e, t, !0)
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
  (mi.inverseSine = mi.asin =
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
              ? (((e = Ai(o, n + 4, i).times(0.5)).s = r.s), e)
              : new o(NaN)
            : ((o.precision = n + 6),
              (o.rounding = 1),
              (r = r.div(new o(1).minus(r.times(r)).sqrt().plus(1)).atan()),
              (o.precision = n),
              (o.rounding = i),
              r.times(2)));
    }),
  (mi.inverseTangent = mi.atan =
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
        if (u.abs().eq(1) && d + 4 <= fi) return (((a = Ai(c, d + 4, f).times(0.25)).s = u.s), a);
      } else {
        if (!u.s) return new c(NaN);
        if (d + 4 <= fi) return (((a = Ai(c, d + 4, f).times(0.5)).s = u.s), a);
      }
      for (c.precision = l = d + 10, c.rounding = 1, e = n = Math.min(28, (l / 7 + 2) | 0); e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (Jn = !1, t = Math.ceil(l / 7), i = 1, s = u.times(u), a = new c(u), r = u; -1 !== e; )
        if (((r = r.times(s)), (o = a.minus(r.div((i += 2)))), (r = r.times(s)), void 0 !== (a = o.plus(r.div((i += 2)))).d[t]))
          for (e = t; a.d[e] === o.d[e] && e--; );
      return (n && (a = a.times(2 << (n - 1))), (Jn = !0), bi(a, (c.precision = d), (c.rounding = f), !0));
    }),
  (mi.isFinite = function () {
    return !!this.d;
  }),
  (mi.isInteger = mi.isInt =
    function () {
      return !!this.d && ri(this.e / 7) > this.d.length - 2;
    }),
  (mi.isNaN = function () {
    return !this.s;
  }),
  (mi.isNegative = mi.isNeg =
    function () {
      return this.s < 0;
    }),
  (mi.isPositive = mi.isPos =
    function () {
      return this.s > 0;
    }),
  (mi.isZero = function () {
    return !!this.d && 0 === this.d[0];
  }),
  (mi.lessThan = mi.lt =
    function (e) {
      return this.cmp(e) < 0;
    }),
  (mi.lessThanOrEqualTo = mi.lte =
    function (e) {
      return this.cmp(e) < 1;
    }),
  (mi.logarithm = mi.log =
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
      if (((Jn = !1), (a = Ii(u, (l = d + 5))), (i = t ? Di(c, l + 10) : Ii(e, l)), hi((s = yi(a, i, l, 1)).d, (r = d), f)))
        do {
          if (((a = Ii(u, (l += 10))), (i = t ? Di(c, l + 10) : Ii(e, l)), (s = yi(a, i, l, 1)), !o)) {
            +vi(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = bi(s, d + 1, 0));
            break;
          }
        } while (hi(s.d, (r += 10), f));
      return ((Jn = !0), bi(s, d, f));
    }),
  (mi.minus = mi.sub =
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
        return Jn ? bi(e, l, s) : e;
      }
      if (((n = ri(e.e / 7)), (c = ri(m.e / 7)), (u = u.slice()), (o = c - n))) {
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
          for (r = i; r && 0 === u[--r]; ) u[r] = ci - 1;
          (--u[r], (u[i] += ci));
        }
        u[i] -= f[i];
      }
      for (; 0 === u[--a]; ) u.pop();
      for (; 0 === u[0]; u.shift()) --n;
      return u[0] ? ((e.d = u), (e.e = Ni(u, n)), Jn ? bi(e, l, s) : e) : new v(3 === s ? -0 : 0);
    }),
  (mi.modulo = mi.mod =
    function (e) {
      var t,
        n = this,
        i = n.constructor;
      return (
        (e = new i(e)),
        !n.d || !e.s || (e.d && !e.d[0])
          ? new i(NaN)
          : !e.d || (n.d && !n.d[0])
            ? bi(new i(n), i.precision, i.rounding)
            : ((Jn = !1),
              9 == i.modulo ? ((t = yi(n, e.abs(), 0, 3, 1)).s *= e.s) : (t = yi(n, e, 0, i.modulo, 1)),
              (t = t.times(e)),
              (Jn = !0),
              n.minus(t))
      );
    }),
  (mi.naturalExponential = mi.exp =
    function () {
      return ki(this);
    }),
  (mi.naturalLogarithm = mi.ln =
    function () {
      return Ii(this);
    }),
  (mi.negated = mi.neg =
    function () {
      var e = new this.constructor(this);
      return ((e.s = -e.s), bi(e));
    }),
  (mi.plus = mi.add =
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
        return (c[0] || (e = new f(d)), Jn ? bi(e, l, s) : e);
      if (((o = ri(d.e / 7)), (i = ri(e.e / 7)), (u = u.slice()), (r = o - i))) {
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
        ((t = ((u[--r] = u[r] + c[r] + t) / ci) | 0), (u[r] %= ci));
      for (t && (u.unshift(t), ++i), a = u.length; 0 == u[--a]; ) u.pop();
      return ((e.d = u), (e.e = Ni(u, i)), Jn ? bi(e, l, s) : e);
    }),
  (mi.precision = mi.sd =
    function (e) {
      var t,
        n = this;
      if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(ei + e);
      return (n.d ? ((t = _i(n.d)), e && n.e + 1 > t && (t = n.e + 1)) : (t = NaN), t);
    }),
  (mi.round = function () {
    var e = this,
      t = e.constructor;
    return bi(new t(e), e.e + 1, t.rounding);
  }),
  (mi.sine = mi.sin =
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
              if (i < 3) return t.isZero() ? t : Ci(e, 2, t, t);
              ((n = (n = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | n), (t = t.times(1 / Hi(5, n))), (t = Ci(e, 2, t, t)));
              for (var r, o = new e(5), a = new e(16), l = new e(20); n--; )
                ((r = t.times(t)), (t = t.times(o.plus(r.times(a.times(r).minus(l))))));
              return t;
            })(i, Mi(i, n))),
            (i.precision = e),
            (i.rounding = t),
            bi(zn > 2 ? n.neg() : n, e, t, !0))
        : new i(NaN);
    }),
  (mi.squareRoot = mi.sqrt =
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
        Jn = !1,
          0 == (u = Math.sqrt(+a)) || u == 1 / 0
            ? (((t = vi(l)).length + s) % 2 == 0 && (t += '0'),
              (u = Math.sqrt(t)),
              (s = ri((s + 1) / 2) - (s < 0 || s % 2)),
              (i = new c((t = u == 1 / 0 ? '5e' + s : (t = u.toExponential()).slice(0, t.indexOf('e') + 1) + s))))
            : (i = new c(u.toString())),
          n = (s = c.precision) + 3;
        ;

      )
        if (((i = (o = i).plus(yi(a, o, n + 2, 1)).times(0.5)), vi(o.d).slice(0, n) === (t = vi(i.d)).slice(0, n))) {
          if ('9999' != (t = t.slice(n - 3, n + 1)) && (r || '4999' != t)) {
            (+t && (+t.slice(1) || '5' != t.charAt(0))) || (bi(i, s + 1, 1), (e = !i.times(i).eq(a)));
            break;
          }
          if (!r && (bi(o, s + 1, 0), o.times(o).eq(a))) {
            i = o;
            break;
          }
          ((n += 4), (r = 1));
        }
      return ((Jn = !0), bi(i, s, c.rounding, e));
    }),
  (mi.tangent = mi.tan =
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
            bi(2 == zn || 4 == zn ? n.neg() : n, e, t, !0))
        : new i(NaN);
    }),
  (mi.times = mi.mul =
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
        n = ri(c.e / 7) + ri(e.e / 7),
          (s = f.length) < (u = m.length) && ((o = f), (f = m), (m = o), (a = s), (s = u), (u = a)),
          o = [],
          i = a = s + u;
        i--;

      )
        o.push(0);
      for (i = u; --i >= 0; ) {
        for (t = 0, r = s + i; r > i; ) ((l = o[r] + m[i] * f[r - i - 1] + t), (o[r--] = l % ci | 0), (t = (l / ci) | 0));
        o[r] = (o[r] + t) % ci | 0;
      }
      for (; !o[--a]; ) o.pop();
      return (t ? ++n : o.shift(), (e.d = o), (e.e = Ni(o, n)), Jn ? bi(e, d.precision, d.rounding) : e);
    }),
  (mi.toBinary = function (e, t) {
    return $i(this, 2, e, t);
  }),
  (mi.toDecimalPlaces = mi.toDP =
    function (e, t) {
      var n = this,
        i = n.constructor;
      return ((n = new i(n)), void 0 === e ? n : (pi(e, 0, jn), void 0 === t ? (t = i.rounding) : pi(t, 0, 8), bi(n, e + n.e + 1, t)));
    }),
  (mi.toExponential = function (e, t) {
    var n,
      i = this,
      r = i.constructor;
    return (
      void 0 === e
        ? (n = wi(i, !0))
        : (pi(e, 0, jn), void 0 === t ? (t = r.rounding) : pi(t, 0, 8), (n = wi((i = bi(new r(i), e + 1, t)), !0, e + 1))),
      i.isNeg() && !i.isZero() ? '-' + n : n
    );
  }),
  (mi.toFixed = function (e, t) {
    var n,
      i,
      r = this,
      o = r.constructor;
    return (
      void 0 === e
        ? (n = wi(r))
        : (pi(e, 0, jn), void 0 === t ? (t = o.rounding) : pi(t, 0, 8), (n = wi((i = bi(new o(r), e + r.e + 1, t)), !1, e + i.e + 1))),
      r.isNeg() && !r.isZero() ? '-' + n : n
    );
  }),
  (mi.toFraction = function (e) {
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
      (a = (o = (t = new p(i)).e = _i(v) - m.e - 1) % 7),
      (t.d[0] = oi(10, a < 0 ? 7 + a : a)),
      null == e)
    )
      e = o > 0 ? t : u;
    else {
      if (!(l = new p(e)).isInt() || l.lt(u)) throw Error(ei + l);
      e = l.gt(t) ? (o > 0 ? t : u) : l;
    }
    for (
      Jn = !1, l = new p(vi(v)), c = p.precision, p.precision = o = 7 * v.length * 2;
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
      (Jn = !0),
      f
    );
  }),
  (mi.toHexadecimal = mi.toHex =
    function (e, t) {
      return $i(this, 16, e, t);
    }),
  (mi.toNearest = function (e, t) {
    var n = this,
      i = n.constructor;
    if (((n = new i(n)), null == e)) {
      if (!n.d) return n;
      ((e = new i(1)), (t = i.rounding));
    } else {
      if (((e = new i(e)), void 0 === t ? (t = i.rounding) : pi(t, 0, 8), !n.d)) return e.s ? n : e;
      if (!e.d) return (e.s && (e.s = n.s), e);
    }
    return (e.d[0] ? ((Jn = !1), (n = yi(n, e, 0, t, 1).times(e)), (Jn = !0), bi(n)) : ((e.s = n.s), (n = e)), n);
  }),
  (mi.toNumber = function () {
    return +this;
  }),
  (mi.toOctal = function (e, t) {
    return $i(this, 8, e, t);
  }),
  (mi.toPower = mi.pow =
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
      if (!(l.d && e.d && l.d[0] && e.d[0])) return new s(oi(+l, u));
      if ((l = new s(l)).eq(1)) return l;
      if (((i = s.precision), (o = s.rounding), e.eq(1))) return bi(l, i, o);
      if ((t = ri(e.e / 7)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= 9007199254740991)
        return ((r = Oi(s, l, n, i)), e.s < 0 ? new s(1).div(r) : bi(r, i, o));
      if ((a = l.s) < 0) {
        if (t < e.d.length - 1) return new s(NaN);
        if ((1 & e.d[t] || (a = 1), 0 == l.e && 1 == l.d[0] && 1 == l.d.length)) return ((l.s = a), l);
      }
      return (t = 0 != (n = oi(+l, u)) && isFinite(n) ? new s(n + '').e : ri(u * (Math.log('0.' + vi(l.d)) / Math.LN10 + l.e + 1))) >
        s.maxE + 1 || t < s.minE - 1
        ? new s(t > 0 ? a / 0 : 0)
        : ((Jn = !1),
          (s.rounding = l.s = 1),
          (n = Math.min(12, (t + '').length)),
          (r = ki(e.times(Ii(l, i + n)), i)).d &&
            hi((r = bi(r, i + 5, 1)).d, i, o) &&
            ((t = i + 10),
            +vi((r = bi(ki(e.times(Ii(l, t + n)), t), t + 5, 1)).d).slice(i + 1, i + 15) + 1 == 1e14 && (r = bi(r, i + 1, 0))),
          (r.s = a),
          (Jn = !0),
          (s.rounding = o),
          bi(r, i, o));
    }),
  (mi.toPrecision = function (e, t) {
    var n,
      i = this,
      r = i.constructor;
    return (
      void 0 === e
        ? (n = wi(i, i.e <= r.toExpNeg || i.e >= r.toExpPos))
        : (pi(e, 1, jn),
          void 0 === t ? (t = r.rounding) : pi(t, 0, 8),
          (n = wi((i = bi(new r(i), e, t)), e <= i.e || i.e <= r.toExpNeg, e))),
      i.isNeg() && !i.isZero() ? '-' + n : n
    );
  }),
  (mi.toSignificantDigits = mi.toSD =
    function (e, t) {
      var n = this.constructor;
      return (
        void 0 === e ? ((e = n.precision), (t = n.rounding)) : (pi(e, 1, jn), void 0 === t ? (t = n.rounding) : pi(t, 0, 8)),
        bi(new n(this), e, t)
      );
    }),
  (mi.toString = function () {
    var e = this,
      t = e.constructor,
      n = wi(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? '-' + n : n;
  }),
  (mi.truncated = mi.trunc =
    function () {
      return bi(new this.constructor(this), this.e + 1, 1);
    }),
  (mi.valueOf = mi.toJSON =
    function () {
      var e = this,
        t = e.constructor,
        n = wi(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
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
      y,
      b,
      w,
      N,
      D,
      A,
      _,
      x,
      O,
      E,
      S,
      k = i.constructor,
      I = i.s == r.s ? 1 : -1,
      L = i.d,
      T = r.d;
    if (!(L && L[0] && T && T[0]))
      return new k(i.s && r.s && (L ? !T || L[0] != T[0] : T) ? ((L && 0 == L[0]) || !T ? 0 * I : I / 0) : NaN);
    for (
      s ? ((m = 1), (c = i.e - r.e)) : ((s = ci), (m = 7), (c = ri(i.e / m) - ri(r.e / m))),
        E = T.length,
        x = L.length,
        y = (g = new k(I)).d = [],
        d = 0;
      T[d] == (L[d] || 0);
      d++
    );
    if ((T[d] > (L[d] || 0) && c--, null == o ? ((D = o = k.precision), (a = k.rounding)) : (D = l ? o + (i.e - r.e) + 1 : o), D < 0))
      (y.push(1), (v = !0));
    else {
      if (((D = (D / m + 2) | 0), (d = 0), 1 == E)) {
        for (f = 0, T = T[0], D++; (d < x || f) && D--; d++) ((A = f * s + (L[d] || 0)), (y[d] = (A / T) | 0), (f = A % T | 0));
        v = f || d < x;
      } else {
        for (
          (f = (s / (T[0] + 1)) | 0) > 1 && ((T = e(T, f, s)), (L = e(L, f, s)), (E = T.length), (x = L.length)),
            _ = E,
            w = (b = L.slice(0, E)).length;
          w < E;

        )
          b[w++] = 0;
        ((S = T.slice()).unshift(0), (O = T[0]), T[1] >= s / 2 && ++O);
        do {
          ((f = 0),
            (u = t(T, b, E, w)) < 0
              ? ((N = b[0]),
                E != w && (N = N * s + (b[1] || 0)),
                (f = (N / O) | 0) > 1
                  ? (f >= s && (f = s - 1),
                    1 == (u = t((p = e(T, f, s)), b, (h = p.length), (w = b.length))) && (f--, n(p, E < h ? S : T, h, s)))
                  : (0 == f && (u = f = 1), (p = T.slice())),
                (h = p.length) < w && p.unshift(0),
                n(b, p, w, s),
                -1 == u && (u = t(T, b, E, (w = b.length))) < 1 && (f++, n(b, E < w ? S : T, w, s)),
                (w = b.length))
              : 0 === u && (f++, (b = [0])),
            (y[d++] = f),
            u && b[0] ? (b[w++] = L[_] || 0) : ((b = [L[_]]), (w = 1)));
        } while ((_++ < x || void 0 !== b[0]) && D--);
        v = void 0 !== b[0];
      }
      y[0] || y.shift();
    }
    if (1 == m) ((g.e = c), (Fn = v));
    else {
      for (d = 1, f = y[0]; f >= 10; f /= 10) d++;
      ((g.e = d + c * m - 1), bi(g, l ? o + g.e + 1 : o, a, v));
    }
    return g;
  };
})();
function bi(e, t, n, i) {
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
    if ((o = t - r) < 0) ((o += 7), (a = t), (s = ((c = d[(f = 0)]) / oi(10, r - a - 1)) % 10 | 0));
    else if ((f = Math.ceil((o + 1) / 7)) >= (l = d.length)) {
      if (!i) break e;
      for (; l++ <= f; ) d.push(0);
      ((c = s = 0), (r = 1), (a = (o %= 7) - 7 + 1));
    } else {
      for (c = l = d[f], r = 1; l >= 10; l /= 10) r++;
      s = (a = (o %= 7) - 7 + r) < 0 ? 0 : (c / oi(10, r - a - 1)) % 10 | 0;
    }
    if (
      ((i = i || t < 0 || void 0 !== d[f + 1] || (a < 0 ? c : c % oi(10, r - a - 1))),
      (u =
        n < 4
          ? (s || i) && (0 == n || n == (e.s < 0 ? 3 : 2))
          : s > 5 ||
            (5 == s &&
              (4 == n || i || (6 == n && (o > 0 ? (a > 0 ? c / oi(10, r - a) : 0) : d[f - 1]) % 10 & 1) || n == (e.s < 0 ? 8 : 7)))),
      t < 1 || !d[0])
    )
      return ((d.length = 0), u ? ((t -= e.e + 1), (d[0] = oi(10, (7 - (t % 7)) % 7)), (e.e = -t || 0)) : (d[0] = e.e = 0), e);
    if (
      (0 == o
        ? ((d.length = f), (l = 1), f--)
        : ((d.length = f + 1), (l = oi(10, 7 - o)), (d[f] = a > 0 ? ((c / oi(10, r - a)) % oi(10, a) | 0) * l : 0)),
      u)
    )
      for (;;) {
        if (0 == f) {
          for (o = 1, a = d[0]; a >= 10; a /= 10) o++;
          for (a = d[0] += l, l = 1; a >= 10; a /= 10) l++;
          o != l && (e.e++, d[0] == ci && (d[0] = 1));
          break;
        }
        if (((d[f] += l), d[f] != ci)) break;
        ((d[f--] = 0), (l = 1));
      }
    for (o = d.length; 0 === d[--o]; ) d.pop();
  }
  return (Jn && (e.e > m.maxE ? ((e.d = null), (e.e = NaN)) : e.e < m.minE && ((e.e = 0), (e.d = [0]))), e);
}
function wi(e, t, n) {
  if (!e.isFinite()) return Li(e);
  var i,
    r = e.e,
    o = vi(e.d),
    a = o.length;
  return (
    t
      ? (n && (i = n - a) > 0 ? (o = o.charAt(0) + '.' + o.slice(1) + xi(i)) : a > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
        (o = o + (e.e < 0 ? 'e' : 'e+') + e.e))
      : r < 0
        ? ((o = '0.' + xi(-r - 1) + o), n && (i = n - a) > 0 && (o += xi(i)))
        : r >= a
          ? ((o += xi(r + 1 - a)), n && (i = n - r - 1) > 0 && (o = o + '.' + xi(i)))
          : ((i = r + 1) < a && (o = o.slice(0, i) + '.' + o.slice(i)), n && (i = n - a) > 0 && (r + 1 === a && (o += '.'), (o += xi(i)))),
    o
  );
}
function Ni(e, t) {
  var n = e[0];
  for (t *= 7; n >= 10; n /= 10) t++;
  return t;
}
function Di(e, t, n) {
  if (t > di) throw ((Jn = !0), n && (e.precision = n), Error(ti));
  return bi(new e(Zn), t, 1, !0);
}
function Ai(e, t, n) {
  if (t > fi) throw Error(ti);
  return bi(new e(Xn), t, n, !0);
}
function _i(e) {
  var t = e.length - 1,
    n = 7 * t + 1;
  if ((t = e[t])) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function xi(e) {
  for (var t = ''; e--; ) t += '0';
  return t;
}
function Oi(e, t, n, i) {
  var r,
    o = new e(1),
    a = Math.ceil(i / 7 + 4);
  for (Jn = !1; ; ) {
    if ((n % 2 && Yi((o = o.times(t)).d, a) && (r = !0), 0 === (n = ri(n / 2)))) {
      ((n = o.d.length - 1), r && 0 === o.d[n] && ++o.d[n]);
      break;
    }
    Yi((t = t.times(t)).d, a);
  }
  return ((Jn = !0), o);
}
function Ei(e) {
  return 1 & e.d[e.d.length - 1];
}
function Si(e, t, n) {
  for (var i, r, o = new e(t[0]), a = 0; ++a < t.length; ) {
    if (!(r = new e(t[a])).s) {
      o = r;
      break;
    }
    ((i = o.cmp(r)) === n || (0 === i && o.s === n)) && (o = r);
  }
  return o;
}
function ki(e, t) {
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
  for (null == t ? ((Jn = !1), (s = v)) : (s = t), l = new f(0.03125); e.e > -2; ) ((e = e.times(l)), (d += 5));
  for (s += i = ((Math.log(oi(2, d)) / Math.LN10) * 2 + 5) | 0, n = o = a = new f(1), f.precision = s; ; ) {
    if (((o = bi(o.times(e), s, 1)), (n = n.times(++c)), vi((l = a.plus(yi(o, n, s, 1))).d).slice(0, s) === vi(a.d).slice(0, s))) {
      for (r = d; r--; ) a = bi(a.times(a), s, 1);
      if (null != t) return ((f.precision = v), a);
      if (!(u < 3 && hi(a.d, s - i, m, u))) return bi(a, (f.precision = v), m, (Jn = !0));
      ((f.precision = s += 10), (n = o = l = new f(1)), (c = 0), u++);
    }
    a = l;
  }
}
function Ii(e, t) {
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
    y = h.precision;
  if (v.s < 0 || !p || !p[0] || (!v.e && 1 == p[0] && 1 == p.length)) return new h(p && !p[0] ? -1 / 0 : 1 != v.s ? NaN : p ? 0 : v);
  if ((null == t ? ((Jn = !1), (c = y)) : (c = t), (h.precision = c += 10), (i = (n = vi(p)).charAt(0)), !(Math.abs((o = v.e)) < 15e14)))
    return (
      (u = Di(h, c + 2, y).times(o + '')),
      (v = Ii(new h(i + '.' + n.slice(1)), c - 10).plus(u)),
      (h.precision = y),
      null == t ? bi(v, y, g, (Jn = !0)) : v
    );
  for (; (i < 7 && 1 != i) || (1 == i && n.charAt(1) > 3); ) ((i = (n = vi((v = v.times(e)).d)).charAt(0)), m++);
  for (
    o = v.e,
      i > 1 ? ((v = new h('0.' + n)), o++) : (v = new h(i + '.' + n.slice(1))),
      d = v,
      s = a = v = yi(v.minus(1), v.plus(1), c, 1),
      f = bi(v.times(v), c, 1),
      r = 3;
    ;

  ) {
    if (((a = bi(a.times(f), c, 1)), vi((u = s.plus(yi(a, new h(r), c, 1))).d).slice(0, c) === vi(s.d).slice(0, c))) {
      if (((s = s.times(2)), 0 !== o && (s = s.plus(Di(h, c + 2, y).times(o + ''))), (s = yi(s, new h(m), c, 1)), null != t))
        return ((h.precision = y), s);
      if (!hi(s.d, c - 10, g, l)) return bi(s, (h.precision = y), g, (Jn = !0));
      ((h.precision = c += 10), (u = a = v = yi(d.minus(1), d.plus(1), c, 1)), (f = bi(v.times(v), c, 1)), (r = l = 1));
    }
    ((s = u), (r += 2));
  }
}
function Li(e) {
  return String((e.s * e.s) / 0);
}
function Ti(e, t) {
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
    (e.d.push(+t), Jn && (e.e > e.constructor.maxE ? ((e.d = null), (e.e = NaN)) : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0]))));
  } else ((e.e = 0), (e.d = [0]));
  return e;
}
function Ci(e, t, n, i, r) {
  var o,
    a,
    l,
    s,
    u = e.precision,
    c = Math.ceil(u / 7);
  for (Jn = !1, s = n.times(n), l = new e(i); ; ) {
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
  return ((Jn = !0), (a.d.length = c + 1), a);
}
function Hi(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function Mi(e, t) {
  var n,
    i = t.s < 0,
    r = Ai(e, e.precision, 1),
    o = r.times(0.5);
  if ((t = t.abs()).lte(o)) return ((zn = i ? 4 : 1), t);
  if ((n = t.divToInt(r)).isZero()) zn = i ? 3 : 2;
  else {
    if ((t = t.minus(n.times(r))).lte(o)) return ((zn = Ei(n) ? (i ? 2 : 3) : i ? 4 : 1), t);
    zn = Ei(n) ? (i ? 1 : 4) : i ? 3 : 2;
  }
  return t.minus(r).abs();
}
function $i(e, t, n, i) {
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
  if ((v ? (pi(n, 1, jn), void 0 === i ? (i = m.rounding) : pi(i, 0, 8)) : ((n = m.precision), (i = m.rounding)), e.isFinite())) {
    for (
      v ? ((r = 2), 16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2)) : (r = t),
        (a = (c = wi(e)).indexOf('.')) >= 0 &&
          ((c = c.replace('.', '')), ((f = new m(1)).e = c.length - a), (f.d = gi(wi(f), 10, r)), (f.e = f.d.length)),
        o = s = (d = gi(c, 10, r)).length;
      0 == d[--s];

    )
      d.pop();
    if (d[0]) {
      if (
        (a < 0 ? o-- : (((e = new m(e)).d = d), (e.e = o), (d = (e = yi(e, f, n, i, 0, r)).d), (o = e.e), (u = Fn)),
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
      for (a = 0, c = ''; a < s; a++) c += qn.charAt(d[a]);
      if (v) {
        if (s > 1)
          if (16 == t || 8 == t) {
            for (a = 16 == t ? 4 : 3, --s; s % a; s++) c += '0';
            for (s = (d = gi(c, r, t)).length; !d[s - 1]; --s);
            for (a = 1, c = '1.'; a < s; a++) c += qn.charAt(d[a]);
          } else c = c.charAt(0) + '.' + c.slice(1);
        c = c + (o < 0 ? 'p' : 'p+') + o;
      } else if (o < 0) {
        for (; ++o; ) c = '0' + c;
        c = '0.' + c;
      } else if (++o > s) for (o -= s; o--; ) c += '0';
      else o < s && (c = c.slice(0, o) + '.' + c.slice(o));
    } else c = v ? '0p+0' : '0';
    c = (16 == t ? '0x' : 2 == t ? '0b' : 8 == t ? '0o' : '') + c;
  } else c = Li(e);
  return e.s < 0 ? '-' + c : c;
}
function Yi(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function Pi(e) {
  return new this(e).abs();
}
function Vi(e) {
  return new this(e).acos();
}
function Gi(e) {
  return new this(e).acosh();
}
function Ui(e, t) {
  return new this(e).plus(t);
}
function Bi(e) {
  return new this(e).asin();
}
function Ri(e) {
  return new this(e).asinh();
}
function Fi(e) {
  return new this(e).atan();
}
function zi(e) {
  return new this(e).atanh();
}
function Wi(e, t) {
  ((e = new this(e)), (t = new this(t)));
  var n,
    i = this.precision,
    r = this.rounding,
    o = i + 4;
  return (
    e.s && t.s
      ? e.d || t.d
        ? !t.d || e.isZero()
          ? ((n = t.s < 0 ? Ai(this, i, r) : new this(0)).s = e.s)
          : !e.d || t.isZero()
            ? ((n = Ai(this, o, 1).times(0.5)).s = e.s)
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (n = this.atan(yi(e, t, o, 1))),
                (t = Ai(this, o, 1)),
                (this.precision = i),
                (this.rounding = r),
                (n = e.s < 0 ? n.minus(t) : n.plus(t)))
              : (n = this.atan(yi(e, t, o, 1)))
        : ((n = Ai(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
      : (n = new this(NaN)),
    n
  );
}
function ji(e) {
  return new this(e).cbrt();
}
function qi(e) {
  return bi((e = new this(e)), e.e + 1, 2);
}
function Zi(e, t, n) {
  return new this(e).clamp(t, n);
}
function Xi(e) {
  if (!e || 'object' != typeof e) throw Error(Qn + 'Object expected');
  var t,
    n,
    i,
    r = !0 === e.defaults,
    o = ['precision', 1, jn, 'rounding', 0, 8, 'toExpNeg', -Wn, 0, 'toExpPos', 0, Wn, 'maxE', 0, Wn, 'minE', -Wn, 0, 'modulo', 0, 9];
  for (t = 0; t < o.length; t += 3)
    if (((n = o[t]), r && (this[n] = Kn[n]), void 0 !== (i = e[n]))) {
      if (!(ri(i) === i && i >= o[t + 1] && i <= o[t + 2])) throw Error(ei + n + ': ' + i);
      this[n] = i;
    }
  if (((n = 'crypto'), r && (this[n] = Kn[n]), void 0 !== (i = e[n]))) {
    if (!0 !== i && !1 !== i && 0 !== i && 1 !== i) throw Error(ei + n + ': ' + i);
    if (i) {
      if ('undefined' == typeof crypto || !crypto || (!crypto.getRandomValues && !crypto.randomBytes)) throw Error(ni);
      this[n] = !0;
    } else this[n] = !1;
  }
  return this;
}
function Ki(e) {
  return new this(e).cos();
}
function Ji(e) {
  return new this(e).cosh();
}
function Qi(e, t) {
  return new this(e).div(t);
}
function er(e) {
  return new this(e).exp();
}
function tr(e) {
  return bi((e = new this(e)), e.e + 1, 3);
}
function nr() {
  var e,
    t,
    n = new this(0);
  for (Jn = !1, e = 0; e < arguments.length; )
    if ((t = new this(arguments[e++])).d) n.d && (n = n.plus(t.times(t)));
    else {
      if (t.s) return ((Jn = !0), new this(1 / 0));
      n = t;
    }
  return ((Jn = !0), n.sqrt());
}
function ir(e) {
  return e instanceof _r || (e && e.toStringTag === ii) || !1;
}
function rr(e) {
  return new this(e).ln();
}
function or(e, t) {
  return new this(e).log(t);
}
function ar(e) {
  return new this(e).log(2);
}
function lr(e) {
  return new this(e).log(10);
}
function sr() {
  return Si(this, arguments, -1);
}
function ur() {
  return Si(this, arguments, 1);
}
function cr(e, t) {
  return new this(e).mod(t);
}
function dr(e, t) {
  return new this(e).mul(t);
}
function fr(e, t) {
  return new this(e).pow(t);
}
function mr(e) {
  var t,
    n,
    i,
    r,
    o = 0,
    a = new this(1),
    l = [];
  if ((void 0 === e ? (e = this.precision) : pi(e, 1, jn), (i = Math.ceil(e / 7)), this.crypto))
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(i)); o < i; )
        (r = t[o]) >= 429e7 ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0]) : (l[o++] = r % 1e7);
    else {
      if (!crypto.randomBytes) throw Error(ni);
      for (t = crypto.randomBytes((i *= 4)); o < i; )
        (r = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((127 & t[o + 3]) << 24)) >= 214e7
          ? crypto.randomBytes(4).copy(t, o)
          : (l.push(r % 1e7), (o += 4));
      o = i / 4;
    }
  else for (; o < i; ) l[o++] = (1e7 * Math.random()) | 0;
  for (e %= 7, (i = l[--o]) && e && ((r = oi(10, 7 - e)), (l[o] = ((i / r) | 0) * r)); 0 === l[o]; o--) l.pop();
  if (o < 0) ((n = 0), (l = [0]));
  else {
    for (n = -1; 0 === l[0]; n -= 7) l.shift();
    for (i = 1, r = l[0]; r >= 10; r /= 10) i++;
    i < 7 && (n -= 7 - i);
  }
  return ((a.e = n), (a.d = l), a);
}
function vr(e) {
  return bi((e = new this(e)), e.e + 1, this.rounding);
}
function pr(e) {
  return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function hr(e) {
  return new this(e).sin();
}
function gr(e) {
  return new this(e).sinh();
}
function yr(e) {
  return new this(e).sqrt();
}
function br(e, t) {
  return new this(e).sub(t);
}
function wr() {
  var e = 0,
    t = arguments,
    n = new this(t[e]);
  for (Jn = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return ((Jn = !0), bi(n, this.precision, this.rounding));
}
function Nr(e) {
  return new this(e).tan();
}
function Dr(e) {
  return new this(e).tanh();
}
function Ar(e) {
  return bi((e = new this(e)), e.e + 1, 1);
}
((mi[Symbol.for('nodejs.util.inspect.custom')] = mi.toString), (mi[Symbol.toStringTag] = 'Decimal'));
var _r = (mi.constructor = (function e(t) {
  var n, i, r;
  function o(e) {
    var t,
      n,
      i,
      r = this;
    if (!(r instanceof o)) return new o(e);
    if (((r.constructor = o), ir(e)))
      return (
        (r.s = e.s),
        void (Jn
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
        return void (Jn
          ? t > o.maxE
            ? ((r.e = NaN), (r.d = null))
            : t < o.minE
              ? ((r.e = 0), (r.d = [0]))
              : ((r.e = t), (r.d = [e]))
          : ((r.e = t), (r.d = [e])));
      }
      return 0 * e != 0 ? (e || (r.s = NaN), (r.e = NaN), void (r.d = null)) : Ti(r, e.toString());
    }
    if ('string' === i)
      return (
        45 === (n = e.charCodeAt(0)) ? ((e = e.slice(1)), (r.s = -1)) : (43 === n && (e = e.slice(1)), (r.s = 1)),
        ui.test(e)
          ? Ti(r, e)
          : (function (e, t) {
              var n, i, r, o, a, l, s, u, c;
              if (t.indexOf('_') > -1) {
                if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), ui.test(t))) return Ti(e, t);
              } else if ('Infinity' === t || 'NaN' === t) return (+t || (e.s = NaN), (e.e = NaN), (e.d = null), e);
              if (li.test(t)) ((n = 16), (t = t.toLowerCase()));
              else if (ai.test(t)) n = 2;
              else {
                if (!si.test(t)) throw Error(ei + t);
                n = 8;
              }
              for (
                (o = t.search(/p/i)) > 0 ? ((s = +t.slice(o + 1)), (t = t.substring(2, o))) : (t = t.slice(2)),
                  a = (o = t.indexOf('.')) >= 0,
                  i = e.constructor,
                  a && ((o = (l = (t = t.replace('.', '')).length) - o), (r = Oi(i, new i(n), o, 2 * o))),
                  o = c = (u = gi(t, n, ci)).length - 1;
                0 === u[o];
                --o
              )
                u.pop();
              return o < 0
                ? new i(0 * e.s)
                : ((e.e = Ni(u, c)),
                  (e.d = u),
                  (Jn = !1),
                  a && (e = yi(e, r, 4 * l)),
                  s && (e = e.times(Math.abs(s) < 54 ? oi(2, s) : _r.pow(2, s))),
                  (Jn = !0),
                  e);
            })(r, e)
      );
    if ('bigint' === i) return (e < 0 ? ((e = -e), (r.s = -1)) : (r.s = 1), Ti(r, e.toString()));
    throw Error(ei + e);
  }
  if (
    ((o.prototype = mi),
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
    (o.isDecimal = ir),
    (o.abs = Pi),
    (o.acos = Vi),
    (o.acosh = Gi),
    (o.add = Ui),
    (o.asin = Bi),
    (o.asinh = Ri),
    (o.atan = Fi),
    (o.atanh = zi),
    (o.atan2 = Wi),
    (o.cbrt = ji),
    (o.ceil = qi),
    (o.clamp = Zi),
    (o.cos = Ki),
    (o.cosh = Ji),
    (o.div = Qi),
    (o.exp = er),
    (o.floor = tr),
    (o.hypot = nr),
    (o.ln = rr),
    (o.log = or),
    (o.log10 = lr),
    (o.log2 = ar),
    (o.max = sr),
    (o.min = ur),
    (o.mod = cr),
    (o.mul = dr),
    (o.pow = fr),
    (o.random = mr),
    (o.round = vr),
    (o.sign = pr),
    (o.sin = hr),
    (o.sinh = gr),
    (o.sqrt = yr),
    (o.sub = br),
    (o.sum = wr),
    (o.tan = Nr),
    (o.tanh = Dr),
    (o.trunc = Ar),
    void 0 === t && (t = {}),
    t && !0 !== t.defaults)
  )
    for (r = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'], n = 0; n < r.length; )
      t.hasOwnProperty((i = r[n++])) || (t[i] = this[i]);
  return (o.config(t), o);
})(Kn));
((Zn = new _r(Zn)), (Xn = new _r(Xn)));
const xr = [
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
        const t = Rn(e);
        return 1 == t.month() && t.date() >= 14 && t.date() <= 24;
      },
      needLink: !0,
      book: { earlyDaysNum: 19, description: '需提前 20 天及以上预定' },
    },
  ],
  Or = [
    {
      name: '1大1小',
      action: (e) =>
        1 === Rn(e).month()
          ? [
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 1 },
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
            ]
          : [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT_AND_ONE_CHILD', num: 1 }],
    },
    {
      name: '1大2小',
      action: (e) =>
        1 === Rn(e).month()
          ? [
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 1 },
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 2 },
            ]
          : [
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT_AND_ONE_CHILD', num: 1 },
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
            ],
    },
    { name: '2大1小', action: () => [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD', num: 1 }] },
    {
      name: '2大2小',
      action: (e) =>
        1 === Rn(e).month()
          ? [
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD', num: 1 },
              { category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD', num: 1 },
            ]
          : [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT_AND_ONE_CHILD', num: 2 }],
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
      visible: (e) => 0 === Rn(e).month(),
      insteadSolution: { details: [{ category: 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT', num: 2 }] },
    },
    {
      label: '👨&👶 两大一小',
      category: 'SHANGHAI_LEGOLAND_ONE_DAY_TWO_ADULT_AND_ONE_CHILD',
      num: 0,
      simpleText: '两大一小',
      fullText: '一日-两大一小',
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
function Sr(e) {
  const t = Rn(e).day();
  return 0 === t || 6 === t;
}
const kr = (e, t) => 5 * Math.ceil(Number.parseFloat(e) / 5) + Number.parseFloat(t + ''),
  Ir = (e, t, n) => `${e[n].num ? e[n].num + t.find((e) => e.category === n).simpleText : ''}`,
  Lr = [
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { useDate: t, personCounts: n, counts: i, summaries: r, diffAmount: o } = e,
          a = Rn(t).diff(new Date(), 'd');
        let l = `${t} ${Rn(t).format('dddd')} ${Ir(n, i, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${Ir(n, i, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${Ir(n, i, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
        const s = { price: 99999999, description: '' };
        for (const u in r) {
          const e = r[u],
            t = kr(e.amount, o[u]);
          e.book.earlyDaysNum <= a && s.price > t && ((s.price = t), (s.description = e.book.description));
        }
        return ((l += `\n报价：${s.price}\n非团票，不用集合，随时不限次入园，入园后确认收货\n${s.description}`), l);
      },
      orderPriority: -1e3,
    },
    {
      enabled: !1,
      condition: (e) => {
        const { useDate: t, personCounts: n } = e;
        return (
          (Sr(t) && n.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + n.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 1) ||
          (!Sr(t) && n.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + n.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 2)
        );
      },
      action: () => '\n\n不升级年卡，您可以自己买官方的半价一小\n工作日 150，节假日 175',
      orderPriority: 100,
    },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  Tr = { class: 'form-group' },
  Cr = { class: 'form-group' },
  Hr = { class: 'counter-label' },
  Mr = { class: 'counter-controls' },
  $r = ['onClick'],
  Yr = { class: 'counter-value' },
  Pr = ['onClick'],
  Vr = { class: 'form-group' },
  Gr = ['onClick'],
  Ur = ['onClick'],
  Br = { class: 'summary-item' },
  Rr = { class: 'summary-value' },
  Fr = { class: 'summary-item' },
  zr = { class: 'summary-value' },
  Wr = { class: 'summary-item' },
  jr = { class: 'summary-value' },
  qr = { class: 'summary-item' },
  Zr = { class: 'summary-value' },
  Xr = { class: 'summary-item' },
  Kr = { class: 'summary-value' },
  Jr = { class: 'summary-item' },
  Qr = { class: 'summary-value' },
  eo = { class: 'summary-item' },
  to = { class: 'summary-value' },
  no = Be(
    me({
      __name: 'calculator',
      setup(e) {
        const t = Ee('useDate', ve('')),
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
              xr
                .filter((e) => e.visible(t.value))
                .forEach((e) => {
                  ((s.value[e.code] = {
                    name: e.name,
                    needLink: e.needLink,
                    amount: '0',
                    originalAmount: '0',
                    costProductPrice: '0',
                    costPlatform: '0',
                    costCommission: '0',
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
            (0 === l.value[e] && t < 0) || (l.value[e] = new _r(l.value[e]).plus(t).toNumber());
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
                u = 0,
                c = 0;
              const d = 0,
                f = s.value[t];
              if (f.needLink)
                for (const n in m.value) {
                  const a = m.value[n],
                    l = e.get(a.reference[t]);
                  ((i += a.num * l.preferSaleAmount), (o += a.num * l.price), (r += a.num * l.originalPrice));
                }
              else
                for (const t of n.value) {
                  const n = e.get(t.category);
                  ((i += t.num * n.preferSaleAmount), (o += t.num * n.price), (r += t.num * n.originalPrice));
                }
              ((i += Number.parseFloat(l.value[t] + '')), (u = i * a.value.costPlatform), (c = d + u + o));
              const v = i - c;
              ((f.amount = i.toFixed(2)),
                (f.originalAmount = r.toFixed(2)),
                (f.costProductPrice = o.toFixed(2)),
                (f.costPlatform = u.toFixed(2)),
                (f.costCommission = d.toFixed(2)),
                (f.totalCost = c.toFixed(2)),
                (f.profit = v.toFixed(2)));
            }
        }
        const p = () => {
            let e = '';
            const i = { useDate: t.value, personCounts: m.value, counts: n.value, summaries: s.value, diffAmount: l.value };
            for (const t of Lr) t.condition(i) && (e += t.action(i));
            navigator.clipboard.writeText(e);
          },
          h = Or.filter((e) => void 0 === e.visible || e.visible)
            .map((e) => ({ name: e.name }))
            .concat([
              { name: '清空', func: o },
              { name: '均价', func: () => {} },
              { name: '出票信息', func: p },
            ]);
        return (
          xe(() => {
            (u(), v());
          }),
          (e, r) => {
            const a = i,
              u = pn;
            return (
              Pe(),
              Ce('div', null, [
                He('div', Tr, [
                  r[0] || (r[0] = He('label', null, '快捷操作', -1)),
                  (Pe(!0),
                  Ce(
                    Me,
                    null,
                    $e(
                      Ye(h),
                      (e) => (
                        Pe(),
                        Ve(
                          a,
                          {
                            size: 'small',
                            type: 'primary',
                            onClick: (i) =>
                              e.func
                                ? e.func()
                                : ((e) => {
                                    o();
                                    const i = Or.find((t) => t.name === e);
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
                          { default: Ge(() => [Te(Ue(e.name), 1)]), _: 2 },
                          1032,
                          ['onClick'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                He('div', Cr, [
                  r[1] || (r[1] = He('label', null, '选择人数', -1)),
                  (Pe(!0),
                  Ce(
                    Me,
                    null,
                    $e(
                      Ye(n),
                      (e) => (
                        Pe(),
                        Ce('div', { class: 'counter-group', key: e.category }, [
                          He('span', Hr, Ue(e.label), 1),
                          He('div', Mr, [
                            He('button', { class: 'counter-btn', onClick: (t) => c(e, -1) }, '−', 8, $r),
                            He('span', Yr, Ue(e.num), 1),
                            He('button', { class: 'counter-btn', onClick: (t) => c(e, 1) }, '+', 8, Pr),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
                He('div', Vr, [
                  r[2] || (r[2] = He('label', null, '差价', -1)),
                  (Pe(!0),
                  Ce(
                    Me,
                    null,
                    $e(
                      Ye(s),
                      (e, t) => (
                        Pe(),
                        Ce('div', { class: 'counter-group', key: t }, [
                          He('button', { class: 'counter-btn', onClick: (e) => d(t, -5) }, '−', 8, Gr),
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
                Ce(
                  Me,
                  null,
                  $e(
                    Ye(s),
                    (e, t) => (
                      Pe(),
                      Ce('div', { class: 'summary', key: t }, [
                        He('h2', null, '💰 费用汇总-' + Ue(e.name), 1),
                        He('div', Br, [
                          r[4] || (r[4] = He('span', { class: 'summary-label' }, '总金额', -1)),
                          He('span', Rr, [r[3] || (r[3] = Te(' ¥', -1)), He('span', null, Ue(e.amount), 1)]),
                        ]),
                        He('div', Fr, [
                          r[6] || (r[6] = He('span', { class: 'summary-label' }, '官方票价', -1)),
                          He('span', zr, [r[5] || (r[5] = Te(' ¥', -1)), He('span', null, Ue(e.originalAmount), 1)]),
                        ]),
                        He('div', Wr, [
                          r[8] || (r[8] = He('span', { class: 'summary-label' }, '成本-产品价格', -1)),
                          He('span', jr, [r[7] || (r[7] = Te(' ¥', -1)), He('span', null, Ue(e.costProductPrice), 1)]),
                        ]),
                        He('div', qr, [
                          r[10] || (r[10] = He('span', { class: 'summary-label' }, '成本-佣金', -1)),
                          He('span', Zr, [r[9] || (r[9] = Te(' ¥', -1)), He('span', null, Ue(e.costCommission), 1)]),
                        ]),
                        He('div', Xr, [
                          r[12] || (r[12] = He('span', { class: 'summary-label' }, '成本-平台', -1)),
                          He('span', Kr, [r[11] || (r[11] = Te(' ¥', -1)), He('span', null, Ue(e.costPlatform), 1)]),
                        ]),
                        He('div', Jr, [
                          r[14] || (r[14] = He('span', { class: 'summary-label' }, '总成本', -1)),
                          He('span', Qr, [r[13] || (r[13] = Te(' ¥', -1)), He('span', null, Ue(e.totalCost), 1)]),
                        ]),
                        He('div', eo, [
                          r[16] || (r[16] = He('span', { class: 'summary-label' }, '总利润', -1)),
                          He('span', to, [r[15] || (r[15] = Te(' ¥', -1)), He('span', null, Ue(e.profit), 1)]),
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
    [['__scopeId', 'data-v-66d8a366']],
  ),
  io = { 成人: 1, 儿童: 2, 老人: 3 },
  ro = (e, t) => (io[e] ?? 0) - (io[t] ?? 0),
  oo = [
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { order: t } = e;
        return [`订单 XY${t.id} CNY ${t.amount ?? 0}`];
      },
      orderPriority: -1e3,
    },
    {
      enabled: !0,
      condition: () => !0,
      action: (e) => {
        const { useDate: t, remainPersons: n } = e,
          i = Rn(t).format('YYYY-MM-DD'),
          r = [];
        return (
          Object.keys(n)
            .sort(ro)
            .forEach((e) => {
              (n[e] ?? []).forEach((e) => {
                r.push(`上海乐高乐园 ${i} ${e.ticketType} 金额 CNY \n${e.idType} ${e.ticketType} ${e.name} ${e.id}`);
              });
            }),
          r
        );
      },
      orderPriority: 1e3,
    },
    { enabled: !1, condition: ({ useDate: e }) => Rn(e).diff(new Date(), 'd') >= 9, action: () => [], orderPriority: 50 },
    { enabled: !1, condition: () => !1, action: () => [], orderPriority: 60 },
  ]
    .filter((e) => e.enabled)
    .sort((e, t) => e.orderPriority - t.orderPriority),
  ao = [',', '，', '（', '）', '(', ')', ':', '：', '；', '。', '.'],
  lo = { class: 'content' },
  so = { class: 'input-group' },
  uo = { class: 'input-wrapper' },
  co = { class: 'input-group' },
  fo = { class: 'input-wrapper' },
  mo = { class: 'input-group' },
  vo = me({
    __name: 'identifyLint',
    setup(e) {
      const t = Ee('useDate', ve('')),
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
        y = [];
      for (const i in p) g.push({ text: p[i].fullName, value: p[i].shortName });
      for (const i in h) y.push({ text: h[i].fullName, value: h[i].shortName });
      ((u.value = [g[0].value]), (c.value = [y[0].value]));
      const b = (e) => {
          if (18 !== e.length) return null;
          return { birthday: `${e.slice(6, 4)}-${e.slice(10, 2)}-${e.slice(12, 2)}`, ...w(e.slice(6, 14)) };
        },
        w = (e) => {
          const n = Rn(t.value).diff(e, 'y');
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
        D = () => {
          (r.value.forEach((e) => {
            const t = N(e.id);
            ((e.idType = t.type),
              (e.ticketType = t.details ? t.details.ticketType : '未知'),
              !0 === t.valid
                ? ((e.idValid = '有效'), '身份证' === e.idType && (e.id = e.id.toUpperCase()))
                : !1 === t.valid
                  ? (e.idValid = '无效')
                  : (e.idValid = '未知'),
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
          ao.forEach((t) => {
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
          ((m.value.idType = e[0]), E());
        },
        O = ({ selectedValues: e }) => {
          ((m.value.ticketType = e[0]), S());
        },
        E = () => {
          ((l.value = !1), (m.value = {}));
        },
        S = () => {
          ((s.value = !1), (m.value = {}));
        },
        k = () => {
          if ('' === v.value.id.trim()) return void f('Order id must not blank');
          let e = [];
          const n = { useDate: t.value, remainPersons: Object.groupBy(r.value, ({ ticketType: e }) => e ?? '未知'), order: v.value };
          for (const t of oo) t.condition(n) && (e = e.concat(t.action(n)));
          navigator.clipboard.writeText(e.join('\n'));
        },
        I = () => {
          ((n.value = ''), (r.value = []), (v.value = { id: '', amount: void 0 }), (o.value = ''), (a.value = ''));
        };
      return (e, t) => {
        const f = pn,
          p = i,
          h = en,
          b = d;
        return (
          Pe(),
          Ce('div', lo, [
            He('div', so, [
              He('div', uo, [
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
            He('div', co, [
              He('div', fo, [
                ge(
                  f,
                  {
                    type: 'textarea',
                    label: '身份信息',
                    'label-align': 'top',
                    modelValue: Ye(n),
                    'onUpdate:modelValue': t[2] || (t[2] = (e) => (Re(n) ? (n.value = e) : null)),
                    rows: '10',
                    placeholder: '例如：张三 110101199001011234',
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                He('div', null, '票种统计：' + Ue(Ye(o)), 1),
                He('div', null, 'ID 统计：' + Ue(Ye(a)), 1),
                ge(
                  p,
                  { onClick: A, type: 'primary', size: 'small' },
                  { default: Ge(() => [...(t[7] || (t[7] = [Te('分割', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: D, type: 'primary', size: 'small' },
                  { default: Ge(() => [...(t[8] || (t[8] = [Te('自动识别', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: k, type: 'primary', size: 'small' },
                  { default: Ge(() => [...(t[9] || (t[9] = [Te('复制', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: _, type: 'primary', size: 'small' },
                  { default: Ge(() => [...(t[10] || (t[10] = [Te('互换', -1)]))]), _: 1 },
                ),
                ge(
                  p,
                  { onClick: I, type: 'primary', size: 'small' },
                  { default: Ge(() => [...(t[11] || (t[11] = [Te('清空', -1)]))]), _: 1 },
                ),
              ]),
            ]),
            He('div', mo, [
              (Pe(!0),
              Ce(
                Me,
                null,
                $e(
                  Ye(r),
                  (e, n) => (
                    Pe(),
                    Ce('div', { key: e.name }, [
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
                        { default: Ge(() => [...(t[12] || (t[12] = [Te('互换', -1)]))]), _: 1 },
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
              { show: Ye(l), 'onUpdate:show': t[4] || (t[4] = (e) => (Re(l) ? (l.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ge(() => [
                  ge(
                    h,
                    {
                      columns: g,
                      modelValue: Ye(u),
                      'onUpdate:modelValue': t[3] || (t[3] = (e) => (Re(u) ? (u.value = e) : null)),
                      onCancel: E,
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
              { show: Ye(s), 'onUpdate:show': t[6] || (t[6] = (e) => (Re(s) ? (s.value = e) : null)), round: '', position: 'bottom' },
              {
                default: Ge(() => [
                  ge(
                    h,
                    {
                      columns: y,
                      modelValue: Ye(c),
                      'onUpdate:modelValue': t[5] || (t[5] = (e) => (Re(c) ? (c.value = e) : null)),
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
  po = [
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
  ho = [
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
  go = me({
    __name: 'term',
    setup(e) {
      const t = ve(''),
        n = ve([]),
        r = ho.filter((e) => void 0 === e.visible || e.visible);
      (Ae([t], () => {
        n.value = po.filter((e) => void 0 === e.visible || e.visible).filter((e) => !e.attraction || e.attraction === t.value);
      }),
        xe(() => {
          t.value = 'SHANGHAI_LEGOLAND';
        }));
      return (e, o) => {
        const a = i,
          l = Zt,
          s = Xt;
        return (
          Pe(),
          Ve(
            s,
            { active: Ye(t), 'onUpdate:active': o[0] || (o[0] = (e) => (Re(t) ? (t.value = e) : null)) },
            {
              default: Ge(() => [
                (Pe(!0),
                Ce(
                  Me,
                  null,
                  $e(
                    Ye(r),
                    (e) => (
                      Pe(),
                      Ve(
                        l,
                        { title: e.attractionSimpleName, name: e.attractionCode, key: e.attractionCode },
                        {
                          default: Ge(() => [
                            (Pe(!0),
                            Ce(
                              Me,
                              null,
                              $e(
                                Ye(n),
                                (e) => (
                                  Pe(),
                                  Ce('div', { key: e.fullText }, [
                                    He('div', null, [He('span', null, Ue(e.simpleText), 1)]),
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
                                        { default: Ge(() => [...(o[1] || (o[1] = [Te('复制', -1)]))]), _: 1 },
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
  yo = me({
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
        m = ve({ originalText: '', formatedText: '' }),
        v = ve({ price: 0, costPlatform: 0, costCommission: 0, costProductPrice: 0, exchangeRate: 1, profit: 0 });
      (Ae(
        [() => v.value.price],
        () => {
          v.value.costPlatform = new _r(v.value.price).mul(0.02).toNumber();
        },
        { deep: !0 },
      ),
        Ae(
          [v],
          () => {
            v.value.profit = new _r(v.value.price)
              .sub(new _r(v.value.costPlatform))
              .sub(v.value.costCommission)
              .sub(new _r(v.value.costProductPrice).mul(v.value.exchangeRate))
              .toNumber();
          },
          { deep: !0 },
        ));
      let p = (e) => {};
      const h = () => {
          ((s.value = !0),
            (u.value = ho.map((e) => ({ text: e.attractionSimpleName, value: e.attractionCode }))),
            (p = (e) => {
              ((n.value.value = e[0]),
                (n.value.text = ho.find((e) => e.attractionCode === n.value.value)?.attractionSimpleName),
                (l.value.attraction = n.value.text));
            }));
        },
        g = () => {
          ((s.value = !0),
            (u.value = f.value.map((e) => ({ text: e.productCategoryName, value: e.productCategoryCode }))),
            (p = (e) => {
              ((a.value.value = e[0]),
                (a.value.text = o.data.find((e) => e.productCategoryCode === a.value.value)?.productCategoryName),
                (l.value.productCategory = a.value.text));
            }));
        },
        y = ({ selectedValues: e }) => {
          (b(), p(e));
        },
        b = () => {
          s.value = !1;
        },
        w = (e) => {
          const t = Rn(e.date),
            i = r.data.find(
              (e) =>
                e.useDate === t.format('YYYY-MM-DD') &&
                e.attractionProductCategoryFullCode.replace(n.value.value + '_', '') === a.value.value,
            );
          return (void 0 !== i && ((e.topInfo = i?.originalPrice + ''), (e.bottomInfo = i?.preferSaleAmount + '')), e);
        },
        N = () => {
          const e = m.value.originalText.split('\n').filter((e) => '' !== e);
          m.value.formatedText = `订单号\n${e[1]?.trim()}\n证件号\n${e[0]?.trim()}`;
        },
        D = () => {
          navigator.clipboard.writeText(m.value.formatedText);
        };
      return (
        xe(() => {
          f.value = o.data.filter((e) => void 0 === e.visible || e.visible);
        }),
        (e, r) => {
          const o = pn,
            l = Vn,
            f = en,
            p = d,
            A = Zt,
            _ = i,
            x = Xt;
          return (
            Pe(),
            Ce('div', null, [
              ge(
                x,
                { active: Ye(t), 'onUpdate:active': r[12] || (r[12] = (e) => (Re(t) ? (t.value = e) : null)) },
                {
                  default: Ge(() => [
                    ge(
                      A,
                      { title: '日历价', name: 'calendarPrice', key: 'calendarPrice' },
                      {
                        default: Ge(() => [
                          ge(
                            o,
                            {
                              modelValue: Ye(n).text,
                              'onUpdate:modelValue': r[0] || (r[0] = (e) => (Ye(n).text = e)),
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
                              modelValue: Ye(a).text,
                              'onUpdate:modelValue': r[1] || (r[1] = (e) => (Ye(a).text = e)),
                              'is-link': '',
                              readonly: '',
                              label: '票种',
                              onClick: g,
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(l, { poppable: !1, 'show-confirm': !1, style: { height: '500px' }, formatter: w }),
                          ge(
                            p,
                            {
                              show: Ye(s),
                              'onUpdate:show': r[3] || (r[3] = (e) => (Re(s) ? (s.value = e) : null)),
                              round: '',
                              position: 'bottom',
                            },
                            {
                              default: Ge(() => [
                                ge(
                                  f,
                                  {
                                    columns: Ye(u),
                                    modelValue: Ye(c),
                                    'onUpdate:modelValue': r[2] || (r[2] = (e) => (Re(c) ? (c.value = e) : null)),
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
                      { title: '成本', name: 'costCalculator', key: 'costCalculator' },
                      {
                        default: Ge(() => [
                          ge(
                            o,
                            { label: '金额', modelValue: Ye(v).price, 'onUpdate:modelValue': r[4] || (r[4] = (e) => (Ye(v).price = e)) },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              label: '成本-平台',
                              modelValue: Ye(v).costPlatform,
                              'onUpdate:modelValue': r[5] || (r[5] = (e) => (Ye(v).costPlatform = e)),
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              label: '成本-佣金',
                              modelValue: Ye(v).costCommission,
                              'onUpdate:modelValue': r[6] || (r[6] = (e) => (Ye(v).costCommission = e)),
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              label: '成本-产品',
                              modelValue: Ye(v).costProductPrice,
                              'onUpdate:modelValue': r[7] || (r[7] = (e) => (Ye(v).costProductPrice = e)),
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              label: '汇率',
                              modelValue: Ye(v).exchangeRate,
                              'onUpdate:modelValue': r[8] || (r[8] = (e) => (Ye(v).exchangeRate = e)),
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            { label: '利润', modelValue: Ye(v).profit, 'onUpdate:modelValue': r[9] || (r[9] = (e) => (Ye(v).profit = e)) },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(_, null, { default: Ge(() => [...(r[13] || (r[13] = [Te('复制', -1)]))]), _: 1 }),
                        ]),
                        _: 1,
                      },
                    ),
                    ge(
                      A,
                      { title: '绑定信息', name: 'bind', key: 'bind' },
                      {
                        default: Ge(() => [
                          ge(
                            o,
                            {
                              type: 'textarea',
                              label: '信息',
                              'label-align': 'top',
                              modelValue: Ye(m).originalText,
                              'onUpdate:modelValue': r[10] || (r[10] = (e) => (Ye(m).originalText = e)),
                              rows: '4',
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            o,
                            {
                              type: 'textarea',
                              label: '格式化',
                              'label-align': 'top',
                              modelValue: Ye(m).formatedText,
                              'onUpdate:modelValue': r[11] || (r[11] = (e) => (Ye(m).formatedText = e)),
                              rows: '4',
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                          ge(
                            _,
                            { onClick: N, type: 'primary', size: 'small' },
                            { default: Ge(() => [...(r[14] || (r[14] = [Te('格式化', -1)]))]), _: 1 },
                          ),
                          ge(
                            _,
                            { onClick: D, type: 'primary', size: 'small' },
                            { default: Ge(() => [...(r[15] || (r[15] = [Te('复制', -1)]))]), _: 1 },
                          ),
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
  bo = [
    { condition: () => !1, topInfo: '', bottomInfo: '', className: '' },
    { condition: () => !1, topInfo: '', bottomInfo: '', className: '' },
  ],
  wo = [
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
    .concat(bo),
  No = { class: 'container' },
  Do = { class: 'form-group' },
  Ao = Be(
    me({
      __name: 'index',
      setup(e) {
        Rn.locale('zh-cn', { weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] });
        const t = ve('calculator'),
          n = (e) => Rn(e).format('YYYY-MM-DD'),
          i = ve(n(new Date()));
        Se('useDate', i);
        const r = ve(!1),
          o = (e) => {
            ((r.value = !1), (i.value = n(e)));
          },
          a = (e) => {
            const t = Rn(e.date),
              n = wo.find((e) => e.condition(t));
            return (void 0 !== n && ((e.topInfo = n?.topInfo), (e.bottomInfo = n?.bottomInfo), (e.className = n?.className)), e);
          };
        return (e, n) => {
          const l = on,
            s = Vn,
            u = Zt,
            c = Xt;
          return (
            Pe(),
            Ce('div', No, [
              n[3] || (n[3] = He('h1', null, '🎫 票务计算器', -1)),
              He('div', Do, [
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
                  default: Ge(() => [
                    ge(u, { title: '票务', name: 'calculator', key: 'calculator' }, { default: Ge(() => [ge(no)]), _: 1 }),
                    ge(u, { title: '证件', name: 'identifyLint', key: 'identifyLint' }, { default: Ge(() => [ge(vo)]), _: 1 }),
                    ge(u, { title: '工具', name: 'tools', key: 'tools' }, { default: Ge(() => [ge(yo)]), _: 1 }),
                    ge(u, { title: '术语', name: 'term', key: 'term' }, { default: Ge(() => [ge(go)]), _: 1 }),
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
export { Ao as default };
