import {
  r as e,
  c as t,
  o as a,
  a as i,
  g as n,
  l,
  n as o,
  b as r,
  F as u,
  z as s,
  L as c,
  e as v,
  I as d,
  J as h,
  w as p,
  f,
  V as g,
  h as m,
  O as y,
  N as w,
  G as b,
  d as T,
  j as x,
  k as P,
  u as N,
  D as $,
  t as S,
  A as E,
  _ as z,
} from './index-xCY7pMo5.js';
import { p as X } from './index-CWDoB3w-.js';
import { _ as Y, c as V } from './_plugin-vue_export-helper-1tPrXgE0-Og6DlPgN.js';
import { c as M } from './util-D1pvnUYu-DEz0HYko.js';
const _ = window;
const k =
  void 0 !== _
    ? _.requestAnimationFrame ||
      _.webkitRequestAnimationFrame ||
      function (e) {
        _.setTimeout(e, 1e3 / 60);
      }
    : function (e) {
        setTimeout(e, 1e3 / 60);
      };
const D = Symbol('nut-swiper'),
  { create: j, componentName: B } = V('swiper');
const C = Y(
  j({
    props: {
      width: { type: [Number, String] },
      height: { type: [Number, String] },
      direction: { type: String, default: 'horizontal' },
      paginationVisible: { type: Boolean, default: !1 },
      paginationColor: { type: String, default: '#fff' },
      loop: { type: Boolean, default: !0 },
      duration: { type: [Number, String], default: 500 },
      autoPlay: { type: [Number, String], default: 0 },
      initPage: { type: [Number, String], default: 0 },
      touchable: { type: Boolean, default: !0 },
      isPreventDefault: { type: Boolean, default: !0 },
      isStopPropagation: { type: Boolean, default: !0 },
      paginationUnselectedColor: { type: String, default: '#ddd' },
    },
    emits: ['change'],
    setup(t, { emit: a, slots: i, expose: n }) {
      const l = e(),
        o = c({
          active: 0,
          num: 0,
          rect: null,
          width: 0,
          height: 0,
          moving: !1,
          offset: 0,
          touchTime: 0,
          autoplayTimer: null,
          children: [],
          childrenVNode: [],
          style: {},
        }),
        r = (function () {
          const t = e(0),
            a = e(0),
            i = e(0),
            n = e(0),
            l = e(0),
            o = e(0),
            r = e(0),
            u = e(0),
            s = e(''),
            c = () => {
              ((l.value = 0), (o.value = 0), (r.value = 0), (u.value = 0), (s.value = ''));
            };
          return {
            move: (e) => {
              const c = e.touches[0];
              var v, d;
              ((l.value = c.clientX - t.value),
                (o.value = c.clientY - a.value),
                (i.value = c.clientX),
                (n.value = c.clientY),
                (r.value = Math.abs(l.value)),
                (u.value = Math.abs(o.value)),
                s.value || (s.value = (v = r.value) > (d = u.value) && v > 10 ? 'horizontal' : d > v && d > 10 ? 'vertical' : ''));
            },
            start: (e) => {
              (c(), (t.value = e.touches[0].clientX), (a.value = e.touches[0].clientY));
            },
            reset: c,
            startX: t,
            startY: a,
            moveX: i,
            moveY: n,
            deltaX: l,
            deltaY: o,
            offsetX: r,
            offsetY: u,
            direction: s,
            isVertical: () => 'vertical' === s.value,
            isHorizontal: () => 'horizontal' === s.value,
          };
        })(),
        u = v(() => 'vertical' === t.direction),
        s = v(() => {
          const e = B;
          return { [`${e}-inner`]: !0, [`${e}-vertical`]: u.value };
        }),
        w = v(() => {
          const e = B;
          return { [`${e}-pagination`]: !0, [`${e}-pagination-vertical`]: u.value };
        }),
        b = v(() => (u.value ? r.deltaY.value : r.deltaX.value)),
        T = v(() => r.direction.value === t.direction),
        x = v(() => o.children.length),
        P = v(() => o[u.value ? 'height' : 'width']),
        N = v(() => x.value * P.value),
        $ = v(() => {
          if (o.rect) {
            return (u.value ? o.rect.height : o.rect.width) - P.value * x.value;
          }
          return 0;
        }),
        S = v(() => (o.active + x.value) % x.value),
        E = () => {
          let e = 0;
          ((e = o.offset),
            (o.style = {
              transitionDuration: `${o.moving ? 0 : t.duration}ms`,
              transform: `translate${u.value ? 'Y' : 'X'}(${e}px)`,
              [u.value ? 'height' : 'width']: P.value * x.value + 'px',
              [u.value ? 'width' : 'height']: `${u.value ? o.width : o.height}px`,
            }));
        },
        z = (e, a = 0) => {
          let i = e * P.value;
          t.loop || (i = Math.min(i, -$.value));
          let n = a - i;
          return (t.loop || (n = M(n, $.value, 0)), n);
        },
        X = ({ pace: e = 0, offset: i = 0, isEmit: n = !1 }) => {
          if (x.value <= 1) return;
          const { active: l } = o,
            r = ((e) => {
              const { active: a } = o;
              return e ? (t.loop ? M(a + e, -1, x.value) : M(a + e, 0, x.value - 1)) : a;
            })(e),
            u = z(r, i);
          if (t.loop) {
            if (o.children[0] && u !== $.value) {
              const e = u < $.value;
              o.children[0].setOffset(e ? N.value : 0);
            }
            if (o.children[x.value - 1] && 0 !== u) {
              const e = u > 0;
              o.children[x.value - 1].setOffset(e ? -N.value : 0);
            }
          }
          ((o.active = r), (o.offset = u), n && l !== o.active && a('change', S.value), E());
        },
        Y = () => {
          ((o.moving = !0), o.active <= -1 && X({ pace: x.value }), o.active >= x.value && X({ pace: -x.value }));
        },
        V = () => {
          o.autoplayTimer && clearTimeout(o.autoplayTimer);
        },
        _ = (e) => {
          (Y(),
            r.reset(),
            k(() => {
              k(() => {
                ((o.moving = !1), X({ pace: e, isEmit: !0 }));
              });
            }));
        },
        j = () => {
          _(1);
        },
        C = () => {
          +t.autoPlay <= 0 ||
            x.value <= 1 ||
            (V(),
            (o.autoplayTimer = setTimeout(() => {
              (j(), C());
            }, Number(t.autoPlay))));
        },
        A = (e = +t.initPage) => {
          (V(),
            (o.rect = l.value.getBoundingClientRect()),
            (e = Math.min(x.value - 1, e)),
            (o.width = t.width ? +t.width : o.rect.width),
            (o.height = t.height ? +t.height : o.rect.height),
            (o.active = e),
            (o.offset = z(o.active)),
            (o.moving = !0),
            E(),
            C());
        };
      (y(D, {
        props: t,
        size: P,
        relation: (e) => {
          var t;
          let a = [];
          const n = o.childrenVNode.length;
          let l = null == (t = null == i ? void 0 : i.default) ? void 0 : t.call(i);
          if (
            ((l = l.filter((e) => e.children && Array.isArray(e.children))),
            l.forEach((e) => {
              a = a.concat(e.children);
            }),
            n)
          )
            if (n > a.length) o.children = o.children.filter((t) => e.proxy !== t);
            else if (n < a.length) {
              for (let t = 0; t < n; t++)
                if (a[t].key !== o.childrenVNode[t].key) {
                  (e.proxy && o.children.splice(t, 0, e.proxy), e.vnode && o.childrenVNode.splice(t, 0, e.vnode));
                  break;
                }
              n !== a.length && (e.proxy && o.children.push(e.proxy), e.vnode && o.childrenVNode.push(e.vnode));
            } else ((o.childrenVNode = a.slice()), e.proxy && o.children.push(e.proxy));
          else ((o.childrenVNode = a.slice()), e.proxy && o.children.push(e.proxy));
        },
      }),
        n({
          prev: () => {
            _(-1);
          },
          next: j,
          to: (e) => {
            (Y(),
              r.reset(),
              k(() => {
                let a;
                ((o.moving = !1),
                  (a = t.loop && x.value === e ? (0 === o.active ? 0 : e) : e % x.value),
                  X({ pace: a - o.active, isEmit: !0 }));
              }));
          },
        }),
        d(() => {
          V();
        }),
        h(() => {
          V();
        }),
        p(
          () => t.initPage,
          (e) => {
            m(() => {
              A(Number(e));
            });
          },
        ),
        p(
          () => t.height,
          () => {
            m(() => {
              A();
            });
          },
        ),
        p(
          () => o.children.length,
          () => {
            m(() => {
              A();
            });
          },
        ),
        p(
          () => t.autoPlay,
          (e) => {
            +e > 0 ? C() : V();
          },
        ));
      const I = e(window.innerWidth),
        O = e(window.innerHeight),
        F = () => {
          ((I.value = window.innerWidth), (O.value = window.innerHeight));
        };
      return (
        p([I, O], () => {
          m(() => {
            A();
          });
        }),
        f(() => {
          (window.addEventListener('resize', F), F());
        }),
        g(() => {
          window.removeEventListener('resize', F);
        }),
        {
          state: o,
          classesInner: s,
          classesPagination: w,
          container: l,
          activePagination: S,
          onTouchStart: (e) => {
            (t.isPreventDefault && e.preventDefault(),
              t.isStopPropagation && e.stopPropagation(),
              t.touchable && (r.start(e), (o.touchTime = Date.now()), V(), Y()));
          },
          onTouchMove: (e) => {
            t.touchable && o.moving && (r.move(e), T.value && X({ offset: b.value }));
          },
          onTouchEnd: () => {
            if (!t.touchable || !o.moving) return;
            const e = b.value / (Date.now() - o.touchTime);
            if ((Math.abs(e) > 0.3 || Math.abs(b.value) > +(P.value / 2).toFixed(2)) && T.value) {
              let e = 0;
              const a = u.value ? r.offsetY.value : r.offsetX.value;
              ((e = t.loop ? (a > 0 ? (b.value > 0 ? -1 : 1) : 0) : -Math[b.value > 0 ? 'ceil' : 'floor'](b.value / P.value)),
                X({ pace: e, isEmit: !0 }));
            } else b.value && X({ pace: 0 });
            ((o.moving = !1), E(), C());
          },
        }
      );
    },
  }),
  [
    [
      'render',
      function (e, c, v, d, h, p) {
        return (
          a(),
          t(
            'view',
            {
              ref: 'container',
              class: 'nut-swiper',
              onTouchstart: c[0] || (c[0] = (...t) => e.onTouchStart && e.onTouchStart(...t)),
              onTouchmove: c[1] || (c[1] = (...t) => e.onTouchMove && e.onTouchMove(...t)),
              onTouchend: c[2] || (c[2] = (...t) => e.onTouchEnd && e.onTouchEnd(...t)),
              onTouchcancel: c[3] || (c[3] = (...t) => e.onTouchEnd && e.onTouchEnd(...t)),
            },
            [
              i('view', { class: r(e.classesInner), style: o(e.state.style) }, [n(e.$slots, 'default')], 6),
              n(e.$slots, 'page'),
              e.paginationVisible && !e.$slots.page
                ? (a(),
                  t(
                    'view',
                    { key: 0, class: r(e.classesPagination) },
                    [
                      (a(!0),
                      t(
                        u,
                        null,
                        s(
                          e.state.children.length,
                          (i, n) => (
                            a(),
                            t(
                              'i',
                              {
                                key: n,
                                style: o({ backgroundColor: e.activePagination === n ? e.paginationColor : e.paginationUnselectedColor }),
                                class: r({ active: e.activePagination === n }),
                              },
                              null,
                              6,
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    2,
                  ))
                : l('', !0),
            ],
            544,
          )
        );
      },
    ],
  ],
);
const { create: A } = V('swiper-item');
const I = Y(
    A({
      setup() {
        const e = w(D);
        e.relation(b());
        const t = c({ offset: 0 }),
          a = v(() => {
            const a = {},
              i = null == e ? void 0 : e.props.direction;
            return (
              (null == e ? void 0 : e.size.value) &&
                (a['horizontal' === i ? 'width' : 'height'] = `${null == e ? void 0 : e.size.value}px`),
              t.offset && (a.transform = `translate${'horizontal' === i ? 'X' : 'Y'}(${t.offset}px)`),
              a
            );
          });
        return (
          g(() => {
            e.relation(b(), 'unmount');
          }),
          (function (e) {
            const t = b();
            t && Object.assign(t.proxy, e);
          })({
            setOffset: (e) => {
              t.offset = e;
            },
          }),
          { style: a }
        );
      },
    }),
    [
      [
        'render',
        function (e, i, l, r, u, s) {
          return (a(), t('view', { class: 'nut-swiper-item', style: o(e.style) }, [n(e.$slots, 'default')], 4));
        },
      ],
    ],
  ),
  O = ['src'],
  F = { class: 'info' },
  U = { class: 'price' },
  q = z(
    T({
      __name: 'index',
      setup(n) {
        const l = E(),
          o = e(1),
          r = c({ data: {} });
        return (
          p(
            () => l,
            (e) => {
              r.data = X.find((t, a) => a == Number.parseInt(e.currentRoute.value.query.id));
            },
            { deep: !0, immediate: !0 },
          ),
          (e, n) => {
            const l = I,
              s = C;
            return (
              a(),
              t(
                u,
                null,
                [
                  x(
                    s,
                    { 'init-page': N(o), 'pagination-visible': !0, 'pagination-color': '#426543', 'auto-play': '3000' },
                    { default: P(() => [x(l, null, { default: P(() => [i('img', { src: N(r).data.imgUrl }, null, 8, O)]), _: 1 })]), _: 1 },
                    8,
                    ['init-page'],
                  ),
                  i('section', F, [
                    i('div', null, [i('span', U, [n[0] || (n[0] = $(' ￥', -1)), i('em', null, S(N(r).data?.price) + '.00', 1)])]),
                    i('div', null, [i('span', null, S(N(r).data?.title) + '}', 1)]),
                  ]),
                ],
                64,
              )
            );
          }
        );
      },
    }),
    [['__scopeId', 'data-v-b0708def']],
  );
export { q as default };
