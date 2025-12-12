import {
  E as e,
  d as o,
  e as t,
  j as a,
  r as s,
  R as n,
  P as l,
  w as r,
  T as i,
  $ as c,
  i as u,
  v as d,
  I as v,
  f as p,
  Q as y,
  F as m,
  h as f,
  J as h,
  S as g,
  N as w,
  H as x,
} from './index-CPxQer7B.js';
import {
  j as b,
  R as k,
  e as C,
  n as S,
  a as O,
  c as z,
  S as I,
  l as B,
  w as P,
  t as T,
  u as A,
  T as j,
  K as L,
  U as E,
  r as R,
  o as H,
  g as N,
  i as X,
  H as Y,
  I as M,
  V as $,
  y as D,
  G as U,
  W as V,
  f as F,
} from './index-Bs0ypY5m.js';
function K(o) {
  const t = e();
  t && C(t.proxy, o);
}
let G = 2e3;
const [J, Q] = z('loading'),
  W = Array(12)
    .fill(null)
    .map((e, o) => a('i', { class: Q('line', String(o + 1)) }, null)),
  q = a('svg', { class: Q('circular'), viewBox: '25 25 50 50' }, [a('circle', { cx: '50', cy: '50', r: '20', fill: 'none' }, null)]);
const Z = P(
    o({
      name: J,
      props: { size: S, type: O('circular'), color: String, vertical: Boolean, textSize: S, textColor: String },
      setup(e, { slots: o }) {
        const s = t(() => C({ color: e.color }, I(e.size))),
          n = () => {
            const t = 'spinner' === e.type ? W : q;
            return a('span', { class: Q('spinner', e.type), style: s.value }, [o.icon ? o.icon() : t]);
          },
          l = () => {
            var t;
            if (o.default)
              return a('span', { class: Q('text'), style: { fontSize: B(e.textSize), color: null != (t = e.textColor) ? t : e.color } }, [
                o.default(),
              ]);
          };
        return () => {
          const { type: o, vertical: t } = e;
          return a('div', { class: Q([o, { vertical: t }]), 'aria-live': 'polite', 'aria-busy': !0 }, [n(), l()]);
        };
      },
    }),
  ),
  _ = {
    show: Boolean,
    zIndex: S,
    overlay: T,
    duration: S,
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
let ee = 0;
const oe = 'van-overflow-hidden';
function te(e, o) {
  const t = (function () {
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
          var u, d;
          ((t.value = (c.clientX < 0 ? 0 : c.clientX) - e.value),
            (a.value = c.clientY - o.value),
            (n.value = Math.abs(t.value)),
            (l.value = Math.abs(a.value)),
            (!r.value || (n.value < 10 && l.value < 10)) &&
              (r.value = (u = n.value) > (d = l.value) ? 'horizontal' : d > u ? 'vertical' : ''),
            i.value && (n.value > j || l.value > j) && (i.value = !1));
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
    })(),
    a = (o) => {
      t.move(o);
      const a = t.deltaY.value > 0 ? '10' : '01',
        s = E(o.target, e.value),
        { scrollHeight: n, offsetHeight: l, scrollTop: r } = s;
      let i = '11';
      (0 === r ? (i = l >= n ? '00' : '01') : r + l >= n && (i = '10'),
        '11' === i || !t.isVertical() || parseInt(i, 2) & parseInt(a, 2) || R(o, !0));
    },
    i = () => {
      (document.addEventListener('touchstart', t.start),
        document.addEventListener('touchmove', a, { passive: !1 }),
        ee || document.body.classList.add(oe),
        ee++);
    },
    c = () => {
      ee &&
        (document.removeEventListener('touchstart', t.start),
        document.removeEventListener('touchmove', a),
        ee--,
        ee || document.body.classList.remove(oe));
    },
    u = () => o() && c();
  (L(() => o() && i()),
    n(u),
    l(u),
    r(o, (e) => {
      e ? i() : c();
    }));
}
function ae(e) {
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
const se = () => {
    var o;
    const { scopeId: t } = (null == (o = e()) ? void 0 : o.vnode) || {};
    return t ? { [t]: '' } : null;
  },
  [ne, le] = z('overlay');
const re = P(
    o({
      name: ne,
      inheritAttrs: !1,
      props: {
        show: Boolean,
        zIndex: S,
        duration: S,
        className: A,
        lockScroll: T,
        lazyRender: T,
        customStyle: Object,
        teleport: [String, Object],
      },
      setup(e, { attrs: o, slots: t }) {
        const n = s(),
          l = ae(() => e.show || !e.lazyRender)(() => {
            var s;
            const l = C(N(e.zIndex), e.customStyle);
            return (
              X(e.duration) && (l.animationDuration = `${e.duration}s`),
              u(a('div', v({ ref: n, style: l, class: [le(), e.className] }, o), [null == (s = t.default) ? void 0 : s.call(t)]), [
                [d, e.show],
              ])
            );
          });
        return (
          H(
            'touchmove',
            (o) => {
              e.lockScroll && R(o, !0);
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
  ie = C({}, _, {
    round: Boolean,
    position: O('center'),
    closeIcon: O('cross'),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: O('top-right'),
    destroyOnClose: Boolean,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean,
  }),
  [ce, ue] = z('popup');
const de = P(
  o({
    name: ce,
    inheritAttrs: !1,
    props: ie,
    emits: ['open', 'close', 'opened', 'closed', 'keydown', 'update:show', 'clickOverlay', 'clickCloseIcon'],
    setup(e, { emit: o, attrs: l, slots: g }) {
      let w, x;
      const S = s(),
        O = s(),
        z = ae(() => e.show || !e.lazyRender),
        I = t(() => {
          const o = { zIndex: S.value };
          if (X(e.duration)) {
            o['center' === e.position ? 'animationDuration' : 'transitionDuration'] = `${e.duration}s`;
          }
          return o;
        }),
        B = () => {
          w || ((w = !0), (S.value = void 0 !== e.zIndex ? +e.zIndex : ++G), o('open'));
        },
        P = () => {
          w &&
            (function (e, { args: o = [], done: t, canceled: a, error: s }) {
              if (e) {
                const n = e.apply(null, o);
                b(n)
                  ? n
                      .then((e) => {
                        e ? t() : a && a();
                      })
                      .catch(s || k)
                  : n
                    ? t()
                    : a && a();
              } else t();
            })(e.beforeClose, {
              done() {
                ((w = !1), o('close'), o('update:show', !1));
              },
            });
        },
        T = (t) => {
          (o('clickOverlay', t), e.closeOnClickOverlay && P());
        },
        A = () => {
          if (e.overlay) {
            const o = C(
              {
                show: e.show,
                class: e.overlayClass,
                zIndex: S.value,
                duration: e.duration,
                customStyle: e.overlayStyle,
                role: e.closeOnClickOverlay ? 'button' : void 0,
                tabindex: e.closeOnClickOverlay ? 0 : void 0,
              },
              e.overlayProps,
            );
            return a(re, v(o, se(), { onClick: T }), { default: g['overlay-content'] });
          }
        },
        j = (e) => {
          (o('clickCloseIcon', e), P());
        },
        L = () => {
          if (e.closeable)
            return a(
              M,
              {
                role: 'button',
                tabindex: 0,
                name: e.closeIcon,
                class: [ue('close-icon', e.closeIconPosition), Y],
                classPrefix: e.iconPrefix,
                onClick: j,
              },
              null,
            );
        };
      let E;
      const R = () => {
          (E && clearTimeout(E),
            (E = setTimeout(() => {
              o('opened');
            })));
        },
        N = () => o('closed'),
        D = (e) => o('keydown', e),
        U = z(() => {
          var o;
          const { destroyOnClose: t, round: s, position: n, safeAreaInsetTop: r, safeAreaInsetBottom: i, show: c } = e;
          if (c || !t)
            return u(
              a(
                'div',
                v(
                  {
                    ref: O,
                    style: I.value,
                    role: 'dialog',
                    tabindex: 0,
                    class: [ue({ round: s, [n]: n }), { 'van-safe-area-top': r, 'van-safe-area-bottom': i }],
                    onKeydown: D,
                  },
                  l,
                  se(),
                ),
                [null == (o = g.default) ? void 0 : o.call(g), L()],
              ),
              [[d, c]],
            );
        }),
        V = () => {
          const { position: o, transition: t, transitionAppear: s } = e;
          return a(
            i,
            { name: t || ('center' === o ? 'van-fade' : `van-popup-slide-${o}`), appear: s, onAfterEnter: R, onAfterLeave: N },
            { default: U },
          );
        };
      return (
        r(
          () => e.show,
          (e) => {
            (e &&
              !w &&
              (B(),
              0 === l.tabindex &&
                f(() => {
                  var e;
                  null == (e = O.value) || e.focus();
                })),
              !e && w && ((w = !1), o('close')));
          },
        ),
        K({ popupRef: O }),
        te(O, () => e.show && e.lockScroll),
        H('popstate', () => {
          e.closeOnPopstate && (P(), (x = !1));
        }),
        p(() => {
          e.show && B();
        }),
        y(() => {
          x && (o('update:show', !0), (x = !1));
        }),
        n(() => {
          e.show && e.teleport && (P(), (x = !0));
        }),
        h($, () => e.show),
        () => (e.teleport ? a(c, { to: e.teleport }, { default: () => [A(), V()] }) : a(m, null, [A(), V()]))
      );
    },
  }),
);
let ve = 0;
const [pe, ye] = z('toast'),
  me = ['show', 'overlay', 'teleport', 'transition', 'overlayClass', 'overlayStyle', 'closeOnClickOverlay', 'zIndex'];
var fe = o({
  name: pe,
  props: {
    icon: String,
    show: Boolean,
    type: O('text'),
    overlay: Boolean,
    message: S,
    iconSize: S,
    duration: D(2e3),
    position: O('middle'),
    teleport: [String, Object],
    wordBreak: String,
    className: A,
    iconPrefix: String,
    transition: O('van-fade'),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: A,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: S,
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
            ? (ve || document.body.classList.add('van-toast--unclickable'), ve++)
            : ve && (ve--, ve || document.body.classList.remove('van-toast--unclickable')));
      },
      i = (e) => o('update:show', e),
      c = () => {
        e.closeOnClick && i(!1);
      },
      u = () => clearTimeout(s),
      d = () => {
        const { icon: o, type: t, iconSize: s, iconPrefix: n, loadingType: l } = e;
        return o || 'success' === t || 'fail' === t
          ? a(M, { name: o || t, size: s, class: ye('icon'), classPrefix: n }, null)
          : 'loading' === t
            ? a(Z, { class: ye('loading'), size: s, type: l }, null)
            : void 0;
      },
      y = () => {
        const { type: o, message: s } = e;
        return t.message
          ? a('div', { class: ye('text') }, [t.message()])
          : X(s) && '' !== s
            ? 'html' === o
              ? a('div', { key: 0, class: ye('text'), innerHTML: String(s) }, null)
              : a('div', { class: ye('text') }, [s])
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
          de,
          v(
            {
              class: [ye([e.position, 'normal' === e.wordBreak ? 'break-normal' : e.wordBreak, { [e.type]: !e.icon }]), e.className],
              lockScroll: !1,
              onClick: c,
              onClosed: u,
              'onUpdate:show': i,
            },
            U(e, me),
          ),
          { default: () => [d(), y()] },
        )
    );
  },
});
let he = [],
  ge = C(
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
const we = new Map();
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
          const e = x({ show: !1 }),
            o = (o) => {
              e.show = o;
            },
            t = (t) => {
              (C(e, t, { transitionAppear: !0 }), o(!0));
            },
            a = () => o(!1);
          return (K({ open: t, close: a, toggle: o }), { open: t, close: a, state: e, toggle: o });
        })(),
        c = () => {};
      return (
        r(o, (e) => {
          n.message = e;
        }),
        (e().render = () => a(fe, v(n, { onClosed: c, 'onUpdate:show': i }), null)),
        { open: t, close: l, message: o }
      );
    },
  });
  return o;
}
function be(e = {}) {
  if (!V) return {};
  const o = (function () {
      if (!he.length) {
        const e = xe();
        he.push(e);
      }
      return he[he.length - 1];
    })(),
    t = F((a = e)) ? a : { message: a };
  var a;
  return (o.open(C({}, ge, we.get(t.type || ge.type), t)), o);
}
export { Z as L, de as P, fe as a, be as s, K as u };
