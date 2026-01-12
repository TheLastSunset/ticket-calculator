import {
  f as n,
  h as e,
  M as t,
  r as o,
  L as r,
  V as a,
  I as s,
  x as i,
  w as c,
  N as u,
  G as l,
  e as d,
  O as f,
  u as p,
  W as v,
  d as g,
  j as m,
  P as h,
} from './index-Bd1BzjNe.js';
function y() {}
const b = Object.assign,
  w = 'undefined' != typeof window,
  x = (n) => null !== n && 'object' == typeof n,
  $ = (n) => null != n,
  O = (n) => 'function' == typeof n,
  S = (n) => x(n) && O(n.then) && O(n.catch),
  C = (n) => '[object Date]' === Object.prototype.toString.call(n) && !Number.isNaN(n.getTime()),
  A = (n) => 'number' == typeof n || /^\d+(\.\d+)?$/.test(n);
function T(n, e) {
  const t = e.split('.');
  let o = n;
  return (
    t.forEach((n) => {
      var e;
      o = x(o) && null != (e = o[n]) ? e : '';
    }),
    o
  );
}
function k(n, e, t) {
  return e.reduce((e, t) => ((e[t] = n[t]), e), {});
}
const E = (n, e) => JSON.stringify(n) === JSON.stringify(e),
  N = (n) => (Array.isArray(n) ? n : [n]),
  j = null,
  P = [Number, String],
  L = { type: Boolean, default: !0 },
  z = (n) => ({ type: n, required: !0 }),
  B = () => ({ type: Array, default: () => [] }),
  M = (n) => ({ type: Number, default: n }),
  D = (n) => ({ type: P, default: n }),
  F = (n) => ({ type: String, default: n });
var I = 'undefined' != typeof window;
function W(n) {
  return I ? requestAnimationFrame(n) : -1;
}
function Y(n) {
  I && cancelAnimationFrame(n);
}
function H(n) {
  W(() => W(n));
}
var R = (n, e) => ({ top: 0, left: 0, right: n, bottom: e, width: n, height: e }),
  q = (n) => {
    const e = p(n);
    if (e === window) {
      const n = e.innerWidth,
        t = e.innerHeight;
      return R(n, t);
    }
    return (null == e ? void 0 : e.getBoundingClientRect) ? e.getBoundingClientRect() : R(0, 0);
  };
function J(n = !1) {
  const e = o(n);
  return [
    e,
    (n = !e.value) => {
      e.value = n;
    },
  ];
}
function Z(n) {
  const e = u(n, null);
  if (e) {
    const n = l(),
      { link: t, unlink: o, internalChildren: r } = e;
    (t(n), a(() => o(n)));
    return { parent: e, index: d(() => r.indexOf(n)) };
  }
  return { parent: null, index: o(-1) };
}
var _,
  G,
  U = (n, e) => {
    const t = n.indexOf(e);
    return -1 === t ? n.findIndex((n) => void 0 !== e.key && null !== e.key && n.type === e.type && n.key === e.key) : t;
  };
function V(n, e, t) {
  const o = (function (n) {
    const e = [],
      t = (n) => {
        Array.isArray(n) &&
          n.forEach((n) => {
            var o;
            v(n) &&
              (e.push(n),
              (null == (o = n.component) ? void 0 : o.subTree) && (e.push(n.component.subTree), t(n.component.subTree.children)),
              n.children && t(n.children));
          });
      };
    return (t(n), e);
  })(n.subTree.children);
  t.sort((n, e) => U(o, n.vnode) - U(o, e.vnode));
  const r = t.map((n) => n.proxy);
  e.sort((n, e) => r.indexOf(n) - r.indexOf(e));
}
function X(n) {
  const e = r([]),
    t = r([]),
    o = l();
  return {
    children: e,
    linkChildren: (r) => {
      f(
        n,
        Object.assign(
          {
            link: (n) => {
              n.proxy && (t.push(n), e.push(n.proxy), V(o, e, t));
            },
            unlink: (n) => {
              const o = t.indexOf(n);
              (e.splice(o, 1), t.splice(o, 1));
            },
            children: e,
            internalChildren: t,
          },
          r,
        ),
      );
    },
  };
}
function K(o) {
  let r;
  (n(() => {
    (o(),
      e(() => {
        r = !0;
      }));
  }),
    t(() => {
      r && o();
    }));
}
function Q(n, e, t = {}) {
  if (!I) return;
  const { target: o = window, passive: r = !1, capture: u = !1 } = t;
  let l,
    d = !1;
  const f = (t) => {
      if (d) return;
      const o = p(t);
      o && !l && (o.addEventListener(n, e, { capture: u, passive: r }), (l = !0));
    },
    v = (t) => {
      if (d) return;
      const o = p(t);
      o && l && (o.removeEventListener(n, e, u), (l = !1));
    };
  let g;
  return (
    a(() => v(o)),
    s(() => v(o)),
    K(() => f(o)),
    i(o) &&
      (g = c(o, (n, e) => {
        (v(e), f(n));
      })),
    () => {
      (null == g || g(), v(o), (d = !0));
    }
  );
}
var nn,
  en = /scroll|auto|overlay/i,
  tn = I ? window : void 0;
function on(n) {
  return 'HTML' !== n.tagName && 'BODY' !== n.tagName && 1 === n.nodeType;
}
function rn(n, e = tn) {
  let t = n;
  for (; t && t !== e && on(t); ) {
    const { overflowY: n } = window.getComputedStyle(t);
    if (en.test(n)) return t;
    t = t.parentNode;
  }
  return e;
}
function an(e, t = tn) {
  const r = o();
  return (
    n(() => {
      e.value && (r.value = rn(e.value, t));
    }),
    r
  );
}
function sn() {
  if (!nn && ((nn = o('visible')), I)) {
    const n = () => {
      nn.value = document.hidden ? 'hidden' : 'visible';
    };
    (n(), window.addEventListener('visibilitychange', n));
  }
  return nn;
}
var cn = Symbol('van-field');
function un(n) {
  const e = 'scrollTop' in n ? n.scrollTop : n.pageYOffset;
  return Math.max(e, 0);
}
function ln(n, e) {
  'scrollTop' in n ? (n.scrollTop = e) : n.scrollTo(n.scrollX, e);
}
function dn() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function fn(n) {
  (ln(window, n), ln(document.body, n));
}
function pn(n, e) {
  if (n === window) return 0;
  const t = e ? un(e) : dn();
  return q(n).top + t;
}
const vn = !!w && /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
function gn() {
  vn && fn(dn());
}
function mn(n, e) {
  (('boolean' != typeof n.cancelable || n.cancelable) && n.preventDefault(),
    e &&
      ((n) => {
        n.stopPropagation();
      })(n));
}
function hn(n) {
  const e = p(n);
  if (!e) return !1;
  const t = window.getComputedStyle(e),
    o = 'none' === t.display,
    r = null === e.offsetParent && 'fixed' !== t.position;
  return o || r;
}
const { width: yn, height: bn } = (function () {
  if (!_ && ((_ = o(0)), (G = o(0)), I)) {
    const n = () => {
      ((_.value = window.innerWidth), (G.value = window.innerHeight));
    };
    (n(), window.addEventListener('resize', n, { passive: !0 }), window.addEventListener('orientationchange', n, { passive: !0 }));
  }
  return { width: _, height: G };
})();
function wn(n) {
  if ($(n)) return A(n) ? `${n}px` : String(n);
}
function xn(n) {
  if ($(n)) {
    if (Array.isArray(n)) return { width: wn(n[0]), height: wn(n[1]) };
    const e = wn(n);
    return { width: e, height: e };
  }
}
function $n(n) {
  const e = {};
  return (void 0 !== n && (e.zIndex = +n), e);
}
let On;
function Sn(n) {
  return (
    +(n = n.replace(/rem/g, '')) *
    (function () {
      if (!On) {
        const n = document.documentElement,
          e = n.style.fontSize || window.getComputedStyle(n).fontSize;
        On = parseFloat(e);
      }
      return On;
    })()
  );
}
function Cn(n) {
  if ('number' == typeof n) return n;
  if (w) {
    if (n.includes('rem')) return Sn(n);
    if (n.includes('vw'))
      return (function (n) {
        return (+(n = n.replace(/vw/g, '')) * yn.value) / 100;
      })(n);
    if (n.includes('vh'))
      return (function (n) {
        return (+(n = n.replace(/vh/g, '')) * bn.value) / 100;
      })(n);
  }
  return parseFloat(n);
}
const An = /-(\w)/g,
  Tn = (n) => n.replace(An, (n, e) => e.toUpperCase()),
  kn = (n, e, t) => Math.min(Math.max(n, e), t);
function En(n, e, t) {
  const o = n.indexOf(e);
  return -1 === o ? n : '-' === e && 0 !== o ? n.slice(0, o) : n.slice(0, o + 1) + n.slice(o).replace(t, '');
}
function Nn(n, e = !0, t = !0) {
  n = e ? En(n, '.', /\./g) : n.split('.')[0];
  const o = e ? /[^-0-9.]/g : /[^-0-9]/g;
  return (n = t ? En(n, '-', /-/g) : n.replace(/-/, '')).replace(o, '');
}
const { hasOwnProperty: jn } = Object.prototype;
function Pn(n, e) {
  return (
    Object.keys(e).forEach((t) => {
      !(function (n, e, t) {
        const o = e[t];
        $(o) && (jn.call(n, t) && x(o) ? (n[t] = Pn(Object(n[t]), o)) : (n[t] = o));
      })(n, e, t);
    }),
    n
  );
}
const Ln = o('zh-CN'),
  zn = r({
    'zh-CN': {
      name: '姓名',
      tel: '电话',
      save: '保存',
      clear: '清空',
      cancel: '取消',
      confirm: '确认',
      delete: '删除',
      loading: '加载中...',
      noCoupon: '暂无优惠券',
      nameEmpty: '请填写姓名',
      addContact: '添加联系人',
      telInvalid: '请填写正确的电话',
      vanCalendar: {
        end: '结束',
        start: '开始',
        title: '日期选择',
        weekdays: ['日', '一', '二', '三', '四', '五', '六'],
        monthTitle: (n, e) => `${n}年${e}月`,
        rangePrompt: (n) => `最多选择 ${n} 天`,
      },
      vanCascader: { select: '请选择' },
      vanPagination: { prev: '上一页', next: '下一页' },
      vanPullRefresh: { pulling: '下拉即可刷新...', loosing: '释放即可刷新...' },
      vanSubmitBar: { label: '合计:' },
      vanCoupon: { unlimited: '无门槛', discount: (n) => `${n}折`, condition: (n) => `满${n}元可用` },
      vanCouponCell: { title: '优惠券', count: (n) => `${n}张可用` },
      vanCouponList: { exchange: '兑换', close: '不使用', enable: '可用', disabled: '不可用', placeholder: '输入优惠码' },
      vanAddressEdit: {
        area: '地区',
        areaEmpty: '请选择地区',
        addressEmpty: '请填写详细地址',
        addressDetail: '详细地址',
        defaultAddress: '设为默认收货地址',
      },
      vanAddressList: { add: '新增地址' },
    },
  });
var Bn = {
  messages: () => zn[Ln.value],
  use(n, e) {
    ((Ln.value = n), this.add({ [n]: e }));
  },
  add(n = {}) {
    Pn(zn, n);
  },
};
function Mn(n) {
  const e = Tn(n) + '.';
  return (n, ...t) => {
    const o = Bn.messages(),
      r = T(o, e + n) || T(o, n);
    return O(r) ? r(...t) : r;
  };
}
function Dn(n, e) {
  return e
    ? 'string' == typeof e
      ? ` ${n}--${e}`
      : Array.isArray(e)
        ? e.reduce((e, t) => e + Dn(n, t), '')
        : Object.keys(e).reduce((t, o) => t + (e[o] ? Dn(n, o) : ''), '')
    : '';
}
function Fn(n) {
  return (e, t) => (e && 'string' != typeof e && ((t = e), (e = '')), `${(e = e ? `${n}__${e}` : n)}${Dn(e, t)}`);
}
function In(n) {
  const e = `van-${n}`;
  return [e, Fn(e), Mn(e)];
}
const Wn = 'van-hairline',
  Yn = `${Wn}--bottom`,
  Hn = `${Wn}--surround`,
  Rn = `${Wn}--top-bottom`,
  qn = `${Wn}-unset--top-bottom`,
  Jn = 'van-haptics-feedback',
  Zn = Symbol('van-form'),
  _n = 5;
function Gn(n) {
  return (
    (n.install = (e) => {
      const { name: t } = n;
      t && (e.component(t, n), e.component(Tn(`-${t}`), n));
    }),
    n
  );
}
const Un = Symbol();
function Vn(n) {
  const e = u(Un, null);
  e &&
    c(e, (e) => {
      e && n();
    });
}
const [Xn, Kn] = In('badge');
const Qn = Gn(
    g({
      name: Xn,
      props: { dot: Boolean, max: P, tag: F('div'), color: String, offset: Array, content: P, showZero: L, position: F('top-right') },
      setup(n, { slots: e }) {
        const t = () => {
            if (e.content) return !0;
            const { content: t, showZero: o } = n;
            return $(t) && '' !== t && (o || (0 !== t && '0' !== t));
          },
          o = () => {
            const { dot: o, max: r, content: a } = n;
            if (!o && t()) return e.content ? e.content() : $(r) && A(a) && +a > +r ? `${r}+` : a;
          },
          r = (n) => (n.startsWith('-') ? n.replace('-', '') : `-${n}`),
          a = d(() => {
            const t = { background: n.color };
            if (n.offset) {
              const [o, a] = n.offset,
                { position: s } = n,
                [i, c] = s.split('-');
              e.default
                ? ((t[i] = 'number' == typeof a ? wn('top' === i ? a : -a) : 'top' === i ? wn(a) : r(a)),
                  (t[c] = 'number' == typeof o ? wn('left' === c ? o : -o) : 'left' === c ? wn(o) : r(o)))
                : ((t.marginTop = wn(a)), (t.marginLeft = wn(o)));
            }
            return t;
          }),
          s = () => {
            if (t() || n.dot) return m('div', { class: Kn([n.position, { dot: n.dot, fixed: !!e.default }]), style: a.value }, [o()]);
          };
        return () => {
          if (e.default) {
            const { tag: t } = n;
            return m(t, { class: Kn('wrapper') }, { default: () => [e.default(), s()] });
          }
          return s();
        };
      },
    }),
  ),
  [ne] = In('config-provider'),
  ee = Symbol(ne),
  [te, oe] = In('icon');
const re = Gn(
  g({
    name: te,
    props: { dot: Boolean, tag: F('i'), name: String, size: P, badge: P, color: String, badgeProps: Object, classPrefix: String },
    setup(n, { slots: e }) {
      const t = u(ee, null),
        o = d(() => n.classPrefix || (null == t ? void 0 : t.iconPrefix) || oe());
      return () => {
        const { tag: t, dot: r, name: a, size: s, badge: i, color: c } = n,
          u = ((n) => (null == n ? void 0 : n.includes('/')))(a);
        return m(
          Qn,
          h(
            { dot: r, tag: t, class: [o.value, u ? '' : `${o.value}-${a}`], style: { color: c, fontSize: wn(s) }, content: i },
            n.badgeProps,
          ),
          {
            default: () => {
              var n;
              return [null == (n = e.default) ? void 0 : n.call(e), u && m('img', { class: oe('image'), src: a }, null)];
            },
          },
        );
      };
    },
  }),
);
export {
  J as $,
  bn as A,
  Yn as B,
  X as C,
  sn as D,
  Vn as E,
  H as F,
  wn as G,
  Jn as H,
  re as I,
  Rn as J,
  fn as K,
  pn as L,
  Qn as M,
  j as N,
  k as O,
  qn as P,
  E as Q,
  dn as R,
  x as S,
  O as T,
  S as U,
  Nn as V,
  Zn as W,
  N as X,
  gn as Y,
  cn as Z,
  M as _,
  kn as a,
  C as a0,
  Hn as a1,
  y as a2,
  xn as a3,
  _n as a4,
  rn as a5,
  Un as a6,
  B as b,
  In as c,
  Q as d,
  b as e,
  Y as f,
  $n as g,
  un as h,
  $ as i,
  w as j,
  D as k,
  F as l,
  z as m,
  P as n,
  K as o,
  mn as p,
  an as q,
  W as r,
  ln as s,
  L as t,
  Z as u,
  Cn as v,
  Gn as w,
  hn as x,
  q as y,
  yn as z,
};
