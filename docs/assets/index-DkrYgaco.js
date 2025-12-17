import {
  f as t,
  h as n,
  Q as e,
  M as o,
  E as a,
  S as s,
  e as r,
  r as i,
  R as c,
  x as l,
  w as u,
  u as d,
  H as f,
  d as p,
  j as g,
  I as v,
} from './index-DENwJqLX.js';
function m() {}
const h = Object.assign,
  y = 'undefined' != typeof window,
  w = (t) => null !== t && 'object' == typeof t,
  b = (t) => null != t,
  $ = (t) => 'function' == typeof t,
  x = (t) => w(t) && $(t.then) && $(t.catch),
  C = (t) => '[object Date]' === Object.prototype.toString.call(t) && !Number.isNaN(t.getTime()),
  S = (t) => 'number' == typeof t || /^\d+(\.\d+)?$/.test(t);
function A(t, n) {
  const e = n.split('.');
  let o = t;
  return (
    e.forEach((t) => {
      var n;
      o = w(o) && null != (n = o[t]) ? n : '';
    }),
    o
  );
}
function O(t, n, e) {
  return n.reduce((n, e) => ((n[e] = t[e]), n), {});
}
const E = (t) => (Array.isArray(t) ? t : [t]),
  T = null,
  j = [Number, String],
  N = { type: Boolean, default: !0 },
  P = (t) => ({ type: t, required: !0 }),
  L = () => ({ type: Array, default: () => [] }),
  k = (t) => ({ type: Number, default: t }),
  z = (t) => ({ type: j, default: t }),
  B = (t) => ({ type: String, default: t });
var M = 'undefined' != typeof window;
function D(t) {
  return M ? requestAnimationFrame(t) : -1;
}
var H,
  R,
  I = (t, n) => ({ top: 0, left: 0, right: t, bottom: n, width: t, height: n }),
  W = (t) => {
    const n = d(t);
    if (n === window) {
      const t = n.innerWidth,
        e = n.innerHeight;
      return I(t, e);
    }
    return (null == n ? void 0 : n.getBoundingClientRect) ? n.getBoundingClientRect() : I(0, 0);
  };
function Y(t = !1) {
  const n = i(t);
  return [
    n,
    (t = !n.value) => {
      n.value = t;
    },
  ];
}
function q(t) {
  const n = o(t, null);
  if (n) {
    const t = a(),
      { link: e, unlink: o, internalChildren: i } = n;
    (e(t), s(() => o(t)));
    return { parent: n, index: r(() => i.indexOf(t)) };
  }
  return { parent: null, index: i(-1) };
}
function F(o) {
  let a;
  (t(() => {
    (o(),
      n(() => {
        a = !0;
      }));
  }),
    e(() => {
      a && o();
    }));
}
function Q(t, n, e = {}) {
  if (!M) return;
  const { target: o = window, passive: a = !1, capture: r = !1 } = e;
  let i,
    f = !1;
  const p = (e) => {
      if (f) return;
      const o = d(e);
      o && !i && (o.addEventListener(t, n, { capture: r, passive: a }), (i = !0));
    },
    g = (e) => {
      if (f) return;
      const o = d(e);
      o && i && (o.removeEventListener(t, n, r), (i = !1));
    };
  let v;
  return (
    s(() => g(o)),
    c(() => g(o)),
    F(() => p(o)),
    l(o) &&
      (v = u(o, (t, n) => {
        (g(n), p(t));
      })),
    () => {
      (null == v || v(), g(o), (f = !0));
    }
  );
}
var U = /scroll|auto|overlay/i,
  Z = M ? window : void 0;
function _(t) {
  return 'HTML' !== t.tagName && 'BODY' !== t.tagName && 1 === t.nodeType;
}
function G(t, n = Z) {
  let e = t;
  for (; e && e !== n && _(e); ) {
    const { overflowY: t } = window.getComputedStyle(e);
    if (U.test(t)) return e;
    e = e.parentNode;
  }
  return n;
}
var J = Symbol('van-field');
function K(t) {
  const n = 'scrollTop' in t ? t.scrollTop : t.pageYOffset;
  return Math.max(n, 0);
}
function V(t, n) {
  'scrollTop' in t ? (t.scrollTop = n) : t.scrollTo(t.scrollX, n);
}
function X() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function tt(t) {
  (V(window, t), V(document.body, t));
}
const nt = !!y && /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
function et() {
  nt && tt(X());
}
function ot(t, n) {
  (('boolean' != typeof t.cancelable || t.cancelable) && t.preventDefault(),
    n &&
      ((t) => {
        t.stopPropagation();
      })(t));
}
const { width: at, height: st } = (function () {
  if (!H && ((H = i(0)), (R = i(0)), M)) {
    const t = () => {
      ((H.value = window.innerWidth), (R.value = window.innerHeight));
    };
    (t(), window.addEventListener('resize', t, { passive: !0 }), window.addEventListener('orientationchange', t, { passive: !0 }));
  }
  return { width: H, height: R };
})();
function rt(t) {
  if (b(t)) return S(t) ? `${t}px` : String(t);
}
function it(t) {
  if (b(t)) {
    if (Array.isArray(t)) return { width: rt(t[0]), height: rt(t[1]) };
    const n = rt(t);
    return { width: n, height: n };
  }
}
function ct(t) {
  const n = {};
  return (void 0 !== t && (n.zIndex = +t), n);
}
const lt = /-(\w)/g,
  ut = (t) => t.replace(lt, (t, n) => n.toUpperCase()),
  dt = (t, n, e) => Math.min(Math.max(t, n), e);
function ft(t, n, e) {
  const o = t.indexOf(n);
  return -1 === o ? t : '-' === n && 0 !== o ? t.slice(0, o) : t.slice(0, o + 1) + t.slice(o).replace(e, '');
}
function pt(t, n = !0, e = !0) {
  t = n ? ft(t, '.', /\./g) : t.split('.')[0];
  const o = n ? /[^-0-9.]/g : /[^-0-9]/g;
  return (t = e ? ft(t, '-', /-/g) : t.replace(/-/, '')).replace(o, '');
}
const { hasOwnProperty: gt } = Object.prototype;
function vt(t, n) {
  return (
    Object.keys(n).forEach((e) => {
      !(function (t, n, e) {
        const o = n[e];
        b(o) && (gt.call(t, e) && w(o) ? (t[e] = vt(Object(t[e]), o)) : (t[e] = o));
      })(t, n, e);
    }),
    t
  );
}
const mt = i('zh-CN'),
  ht = f({
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
        monthTitle: (t, n) => `${t}年${n}月`,
        rangePrompt: (t) => `最多选择 ${t} 天`,
      },
      vanCascader: { select: '请选择' },
      vanPagination: { prev: '上一页', next: '下一页' },
      vanPullRefresh: { pulling: '下拉即可刷新...', loosing: '释放即可刷新...' },
      vanSubmitBar: { label: '合计:' },
      vanCoupon: { unlimited: '无门槛', discount: (t) => `${t}折`, condition: (t) => `满${t}元可用` },
      vanCouponCell: { title: '优惠券', count: (t) => `${t}张可用` },
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
var yt = {
  messages: () => ht[mt.value],
  use(t, n) {
    ((mt.value = t), this.add({ [t]: n }));
  },
  add(t = {}) {
    vt(ht, t);
  },
};
function wt(t) {
  const n = ut(t) + '.';
  return (t, ...e) => {
    const o = yt.messages(),
      a = A(o, n + t) || A(o, t);
    return $(a) ? a(...e) : a;
  };
}
function bt(t, n) {
  return n
    ? 'string' == typeof n
      ? ` ${t}--${n}`
      : Array.isArray(n)
        ? n.reduce((n, e) => n + bt(t, e), '')
        : Object.keys(n).reduce((e, o) => e + (n[o] ? bt(t, o) : ''), '')
    : '';
}
function $t(t) {
  return (n, e) => (n && 'string' != typeof n && ((e = n), (n = '')), `${(n = n ? `${t}__${n}` : t)}${bt(n, e)}`);
}
function xt(t) {
  const n = `van-${t}`;
  return [n, $t(n), wt(n)];
}
const Ct = 'van-hairline',
  St = `${Ct}--bottom`,
  At = `${Ct}--surround`,
  Ot = 'van-haptics-feedback',
  Et = Symbol('van-form'),
  Tt = 5;
function jt(t) {
  return (
    (t.install = (n) => {
      const { name: e } = t;
      e && (n.component(e, t), n.component(ut(`-${e}`), t));
    }),
    t
  );
}
const Nt = Symbol();
function Pt(t) {
  const n = o(Nt, null);
  n &&
    u(n, (n) => {
      n && t();
    });
}
const [Lt, kt] = xt('badge');
const zt = jt(
    p({
      name: Lt,
      props: { dot: Boolean, max: j, tag: B('div'), color: String, offset: Array, content: j, showZero: N, position: B('top-right') },
      setup(t, { slots: n }) {
        const e = () => {
            if (n.content) return !0;
            const { content: e, showZero: o } = t;
            return b(e) && '' !== e && (o || (0 !== e && '0' !== e));
          },
          o = () => {
            const { dot: o, max: a, content: s } = t;
            if (!o && e()) return n.content ? n.content() : b(a) && S(s) && +s > +a ? `${a}+` : s;
          },
          a = (t) => (t.startsWith('-') ? t.replace('-', '') : `-${t}`),
          s = r(() => {
            const e = { background: t.color };
            if (t.offset) {
              const [o, s] = t.offset,
                { position: r } = t,
                [i, c] = r.split('-');
              n.default
                ? ((e[i] = 'number' == typeof s ? rt('top' === i ? s : -s) : 'top' === i ? rt(s) : a(s)),
                  (e[c] = 'number' == typeof o ? rt('left' === c ? o : -o) : 'left' === c ? rt(o) : a(o)))
                : ((e.marginTop = rt(s)), (e.marginLeft = rt(o)));
            }
            return e;
          }),
          i = () => {
            if (e() || t.dot) return g('div', { class: kt([t.position, { dot: t.dot, fixed: !!n.default }]), style: s.value }, [o()]);
          };
        return () => {
          if (n.default) {
            const { tag: e } = t;
            return g(e, { class: kt('wrapper') }, { default: () => [n.default(), i()] });
          }
          return i();
        };
      },
    }),
  ),
  [Bt] = xt('config-provider'),
  Mt = Symbol(Bt),
  [Dt, Ht] = xt('icon');
const Rt = jt(
  p({
    name: Dt,
    props: { dot: Boolean, tag: B('i'), name: String, size: j, badge: j, color: String, badgeProps: Object, classPrefix: String },
    setup(t, { slots: n }) {
      const e = o(Mt, null),
        a = r(() => t.classPrefix || (null == e ? void 0 : e.iconPrefix) || Ht());
      return () => {
        const { tag: e, dot: o, name: s, size: r, badge: i, color: c } = t,
          l = ((t) => (null == t ? void 0 : t.includes('/')))(s);
        return g(
          zt,
          v(
            { dot: o, tag: e, class: [a.value, l ? '' : `${a.value}-${s}`], style: { color: c, fontSize: rt(r) }, content: i },
            t.badgeProps,
          ),
          {
            default: () => {
              var t;
              return [null == (t = n.default) ? void 0 : t.call(n), l && g('img', { class: Ht('image'), src: s }, null)];
            },
          },
        );
      };
    },
  }),
);
export {
  Y as A,
  St as B,
  J as C,
  W as D,
  V as E,
  Et as F,
  O as G,
  Ot as H,
  Rt as I,
  C as J,
  F as K,
  K as L,
  D as M,
  Pt as N,
  at as O,
  st as P,
  At as Q,
  m as R,
  it as S,
  Tt as T,
  G as U,
  Nt as V,
  y as W,
  B as a,
  L as b,
  xt as c,
  X as d,
  h as e,
  w as f,
  ct as g,
  $ as h,
  b as i,
  x as j,
  q as k,
  rt as l,
  z as m,
  j as n,
  Q as o,
  pt as p,
  dt as q,
  ot as r,
  tt as s,
  N as t,
  T as u,
  E as v,
  jt as w,
  et as x,
  k as y,
  P as z,
};
