import {
  G as e,
  d as o,
  e as t,
  j as a,
  r as s,
  I as n,
  J as l,
  w as r,
  T as i,
  a0 as c,
  i as u,
  v as d,
  P as v,
  f as p,
  M as y,
  F as m,
  h as f,
  O as h,
  U as g,
  R as w,
  L as b,
} from './index-BVTDfLT_.js';
import {
  U as x,
  a2 as k,
  e as C,
  n as O,
  l as S,
  c as z,
  a3 as I,
  G as B,
  w as P,
  t as T,
  N as A,
  a4 as L,
  o as j,
  a5 as E,
  p as N,
  d as R,
  g as X,
  i as Y,
  H,
  I as M,
  a6 as U,
  _ as D,
  O as $,
  j as F,
  S as G,
} from './index-DOTaIcLV.js';
function V(e, { args: o = [], done: t, canceled: a, error: s }) {
  if (e) {
    const n = e.apply(null, o);
    x(n)
      ? n
          .then((e) => {
            e ? t() : a && a();
          })
          .catch(s || k)
      : n
        ? t()
        : a && a();
  } else t();
}
function J(o) {
  const t = e();
  t && C(t.proxy, o);
}
let K = 2e3;
const [_, q] = z('loading'),
  Q = Array(12)
    .fill(null)
    .map((e, o) => a('i', { class: q('line', String(o + 1)) }, null)),
  W = a('svg', { class: q('circular'), viewBox: '25 25 50 50' }, [a('circle', { cx: '50', cy: '50', r: '20', fill: 'none' }, null)]);
const Z = P(
    o({
      name: _,
      props: { size: O, type: S('circular'), color: String, vertical: Boolean, textSize: O, textColor: String },
      setup(e, { slots: o }) {
        const s = t(() => C({ color: e.color }, I(e.size))),
          n = () => {
            const t = 'spinner' === e.type ? Q : W;
            return a('span', { class: q('spinner', e.type), style: s.value }, [o.icon ? o.icon() : t]);
          },
          l = () => {
            var t;
            if (o.default)
              return a('span', { class: q('text'), style: { fontSize: B(e.textSize), color: null != (t = e.textColor) ? t : e.color } }, [
                o.default(),
              ]);
          };
        return () => {
          const { type: o, vertical: t } = e;
          return a('div', { class: q([o, { vertical: t }]), 'aria-live': 'polite', 'aria-busy': !0 }, [n(), l()]);
        };
      },
    }),
  ),
  ee = {
    show: Boolean,
    zIndex: O,
    overlay: T,
    duration: O,
    teleport: [String, Object],
    lockScroll: T,
    lazyRender: T,
    beforeClose: Function,
    overlayProps: Object,
    overlayStyle: Object,
    overlayClass: A,
    transitionAppear: Boolean,
    closeOnClickOverlay: T,
  };
function oe() {
  const e = s(0),
    o = s(0),
    t = s(0),
    a = s(0),
    n = s(0),
    l = s(0),
    r = s(''),
    i = s(!0),
    c = () => {
      ((t.value = 0), (a.value = 0), (n.value = 0), (l.value = 0), (r.value = ''), (i.value = !0));
    };
  return {
    move: (s) => {
      const c = s.touches[0];
      ((t.value = (c.clientX < 0 ? 0 : c.clientX) - e.value),
        (a.value = c.clientY - o.value),
        (n.value = Math.abs(t.value)),
        (l.value = Math.abs(a.value)));
      var u, d;
      ((!r.value || (n.value < 10 && l.value < 10)) &&
        (r.value = ((u = n.value), (d = l.value), u > d ? 'horizontal' : d > u ? 'vertical' : '')),
        i.value && (n.value > L || l.value > L) && (i.value = !1));
    },
    start: (t) => {
      (c(), (e.value = t.touches[0].clientX), (o.value = t.touches[0].clientY));
    },
    reset: c,
    startX: e,
    startY: o,
    deltaX: t,
    deltaY: a,
    offsetX: n,
    offsetY: l,
    direction: r,
    isVertical: () => 'vertical' === r.value,
    isHorizontal: () => 'horizontal' === r.value,
    isTap: i,
  };
}
let te = 0;
const ae = 'van-overflow-hidden';
function se(e) {
  const o = s(!1);
  return (
    r(
      e,
      (e) => {
        e && (o.value = e);
      },
      { immediate: !0 },
    ),
    (e) => () => (o.value ? e() : null)
  );
}
const ne = () => {
    var o;
    const { scopeId: t } = (null == (o = e()) ? void 0 : o.vnode) || {};
    return t ? { [t]: '' } : null;
  },
  [le, re] = z('overlay');
const ie = P(
    o({
      name: le,
      inheritAttrs: !1,
      props: {
        show: Boolean,
        zIndex: O,
        duration: O,
        className: A,
        lockScroll: T,
        lazyRender: T,
        customStyle: Object,
        teleport: [String, Object],
      },
      setup(e, { attrs: o, slots: t }) {
        const n = s(),
          l = se(() => e.show || !e.lazyRender)(() => {
            var s;
            const l = C(X(e.zIndex), e.customStyle);
            return (
              Y(e.duration) && (l.animationDuration = `${e.duration}s`),
              u(a('div', v({ ref: n, style: l, class: [re(), e.className] }, o), [null == (s = t.default) ? void 0 : s.call(t)]), [
                [d, e.show],
              ])
            );
          });
        return (
          R(
            'touchmove',
            (o) => {
              e.lockScroll && N(o, !0);
            },
            { target: n },
          ),
          () => {
            const o = a(i, { name: 'van-fade', appear: !0 }, { default: l });
            return e.teleport ? a(c, { to: e.teleport }, { default: () => [o] }) : o;
          }
        );
      },
    }),
  ),
  ce = C({}, ee, {
    round: Boolean,
    position: S('center'),
    closeIcon: S('cross'),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: S('top-right'),
    destroyOnClose: Boolean,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean,
  }),
  [ue, de] = z('popup');
const ve = P(
  o({
    name: ue,
    inheritAttrs: !1,
    props: ce,
    emits: ['open', 'close', 'opened', 'closed', 'keydown', 'update:show', 'clickOverlay', 'clickCloseIcon'],
    setup(e, { emit: o, attrs: g, slots: w }) {
      let b, x;
      const k = s(),
        O = s(),
        S = se(() => e.show || !e.lazyRender),
        z = t(() => {
          const o = { zIndex: k.value };
          if (Y(e.duration)) {
            o['center' === e.position ? 'animationDuration' : 'transitionDuration'] = `${e.duration}s`;
          }
          return o;
        }),
        I = () => {
          b || ((b = !0), (k.value = void 0 !== e.zIndex ? +e.zIndex : ++K), o('open'));
        },
        B = () => {
          b &&
            V(e.beforeClose, {
              done() {
                ((b = !1), o('close'), o('update:show', !1));
              },
            });
        },
        P = (t) => {
          (o('clickOverlay', t), e.closeOnClickOverlay && B());
        },
        T = () => {
          if (e.overlay) {
            const o = C(
              {
                show: e.show,
                class: e.overlayClass,
                zIndex: k.value,
                duration: e.duration,
                customStyle: e.overlayStyle,
                role: e.closeOnClickOverlay ? 'button' : void 0,
                tabindex: e.closeOnClickOverlay ? 0 : void 0,
              },
              e.overlayProps,
            );
            return a(ie, v(o, ne(), { onClick: P }), { default: w['overlay-content'] });
          }
        },
        A = (e) => {
          (o('clickCloseIcon', e), B());
        },
        L = () => {
          if (e.closeable)
            return a(
              M,
              {
                role: 'button',
                tabindex: 0,
                name: e.closeIcon,
                class: [de('close-icon', e.closeIconPosition), H],
                classPrefix: e.iconPrefix,
                onClick: A,
              },
              null,
            );
        };
      let X;
      const D = () => {
          (X && clearTimeout(X),
            (X = setTimeout(() => {
              o('opened');
            })));
        },
        $ = () => o('closed'),
        F = (e) => o('keydown', e),
        G = S(() => {
          var o;
          const { destroyOnClose: t, round: s, position: n, safeAreaInsetTop: l, safeAreaInsetBottom: r, show: i } = e;
          if (i || !t)
            return u(
              a(
                'div',
                v(
                  {
                    ref: O,
                    style: z.value,
                    role: 'dialog',
                    tabindex: 0,
                    class: [de({ round: s, [n]: n }), { 'van-safe-area-top': l, 'van-safe-area-bottom': r }],
                    onKeydown: F,
                  },
                  g,
                  ne(),
                ),
                [null == (o = w.default) ? void 0 : o.call(w), L()],
              ),
              [[d, i]],
            );
        }),
        _ = () => {
          const { position: o, transition: t, transitionAppear: s } = e;
          return a(
            i,
            { name: t || ('center' === o ? 'van-fade' : `van-popup-slide-${o}`), appear: s, onAfterEnter: D, onAfterLeave: $ },
            { default: G },
          );
        };
      return (
        r(
          () => e.show,
          (e) => {
            (e &&
              !b &&
              (I(),
              0 === g.tabindex &&
                f(() => {
                  var e;
                  null == (e = O.value) || e.focus();
                })),
              !e && b && ((b = !1), o('close')));
          },
        ),
        J({ popupRef: O }),
        (function (e, o) {
          const t = oe(),
            a = (o) => {
              t.move(o);
              const a = t.deltaY.value > 0 ? '10' : '01',
                s = E(o.target, e.value),
                { scrollHeight: n, offsetHeight: l, scrollTop: r } = s;
              let i = '11';
              (0 === r ? (i = l >= n ? '00' : '01') : r + l >= n && (i = '10'),
                '11' === i || !t.isVertical() || parseInt(i, 2) & parseInt(a, 2) || N(o, !0));
            },
            s = () => {
              (document.addEventListener('touchstart', t.start),
                document.addEventListener('touchmove', a, { passive: !1 }),
                te || document.body.classList.add(ae),
                te++);
            },
            i = () => {
              te &&
                (document.removeEventListener('touchstart', t.start),
                document.removeEventListener('touchmove', a),
                te--,
                te || document.body.classList.remove(ae));
            },
            c = () => o() && i();
          (j(() => o() && s()),
            n(c),
            l(c),
            r(o, (e) => {
              e ? s() : i();
            }));
        })(O, () => e.show && e.lockScroll),
        R('popstate', () => {
          e.closeOnPopstate && (B(), (x = !1));
        }),
        p(() => {
          e.show && I();
        }),
        y(() => {
          x && (o('update:show', !0), (x = !1));
        }),
        n(() => {
          e.show && e.teleport && (B(), (x = !0));
        }),
        h(U, () => e.show),
        () => (e.teleport ? a(c, { to: e.teleport }, { default: () => [T(), _()] }) : a(m, null, [T(), _()]))
      );
    },
  }),
);
let pe = 0;
const [ye, me] = z('toast'),
  fe = ['show', 'overlay', 'teleport', 'transition', 'overlayClass', 'overlayStyle', 'closeOnClickOverlay', 'zIndex'];
var he = o({
  name: ye,
  props: {
    icon: String,
    show: Boolean,
    type: S('text'),
    overlay: Boolean,
    message: O,
    iconSize: O,
    duration: D(2e3),
    position: S('middle'),
    teleport: [String, Object],
    wordBreak: String,
    className: A,
    iconPrefix: String,
    transition: S('van-fade'),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: A,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: O,
  },
  emits: ['update:show'],
  setup(e, { emit: o, slots: t }) {
    let s,
      n = !1;
    const l = () => {
        const o = e.show && e.forbidClick;
        n !== o &&
          ((n = o),
          n
            ? (pe || document.body.classList.add('van-toast--unclickable'), pe++)
            : pe && (pe--, pe || document.body.classList.remove('van-toast--unclickable')));
      },
      i = (e) => o('update:show', e),
      c = () => {
        e.closeOnClick && i(!1);
      },
      u = () => clearTimeout(s),
      d = () => {
        const { icon: o, type: t, iconSize: s, iconPrefix: n, loadingType: l } = e;
        return o || 'success' === t || 'fail' === t
          ? a(M, { name: o || t, size: s, class: me('icon'), classPrefix: n }, null)
          : 'loading' === t
            ? a(Z, { class: me('loading'), size: s, type: l }, null)
            : void 0;
      },
      y = () => {
        const { type: o, message: s } = e;
        return t.message
          ? a('div', { class: me('text') }, [t.message()])
          : Y(s) && '' !== s
            ? 'html' === o
              ? a('div', { key: 0, class: me('text'), innerHTML: String(s) }, null)
              : a('div', { class: me('text') }, [s])
            : void 0;
      };
    return (
      r(() => [e.show, e.forbidClick], l),
      r(
        () => [e.show, e.type, e.message, e.duration],
        () => {
          (u(),
            e.show &&
              e.duration > 0 &&
              (s = setTimeout(() => {
                i(!1);
              }, e.duration)));
        },
      ),
      p(l),
      g(l),
      () =>
        a(
          ve,
          v(
            {
              class: [me([e.position, 'normal' === e.wordBreak ? 'break-normal' : e.wordBreak, { [e.type]: !e.icon }]), e.className],
              lockScroll: !1,
              onClick: c,
              onClosed: u,
              'onUpdate:show': i,
            },
            $(e, fe),
          ),
          { default: () => [d(), y()] },
        )
    );
  },
});
let ge = [],
  we = C(
    {},
    {
      icon: '',
      type: 'text',
      message: '',
      className: '',
      overlay: !1,
      onClose: void 0,
      onOpened: void 0,
      duration: 2e3,
      teleport: 'body',
      iconSize: void 0,
      iconPrefix: void 0,
      position: 'middle',
      transition: 'van-fade',
      forbidClick: !1,
      loadingType: void 0,
      overlayClass: '',
      overlayStyle: void 0,
      closeOnClick: !1,
      closeOnClickOverlay: !1,
    },
  );
const be = new Map();
function xe() {
  const { instance: o } = (function (e) {
    const o = w(e),
      t = document.createElement('div');
    return (
      document.body.appendChild(t),
      {
        instance: o.mount(t),
        unmount() {
          (o.unmount(), document.body.removeChild(t));
        },
      }
    );
  })({
    setup() {
      const o = s(''),
        {
          open: t,
          state: n,
          close: l,
          toggle: i,
        } = (function () {
          const e = b({ show: !1 }),
            o = (o) => {
              e.show = o;
            },
            t = (t) => {
              (C(e, t, { transitionAppear: !0 }), o(!0));
            },
            a = () => o(!1);
          return (J({ open: t, close: a, toggle: o }), { open: t, close: a, state: e, toggle: o });
        })(),
        c = () => {};
      return (
        r(o, (e) => {
          n.message = e;
        }),
        (e().render = () => a(he, v(n, { onClosed: c, 'onUpdate:show': i }), null)),
        { open: t, close: l, message: o }
      );
    },
  });
  return o;
}
function ke(e = {}) {
  if (!F) return {};
  const o = (function () {
      if (!ge.length) {
        const e = xe();
        ge.push(e);
      }
      return ge[ge.length - 1];
    })(),
    t = G((a = e)) ? a : { message: a };
  var a;
  return (o.open(C({}, we, be.get(t.type || we.type), t)), o);
}
export { Z as L, ve as P, J as a, ke as b, V as c, he as s, oe as u };
