const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-Cl1SdWFP.js',
      'assets/with-install-Ch3FF0uS-B5fmcF2Q.js',
      'assets/with-install-Ch3FF0uS-RvUKwxNH.css',
      'assets/use-height-DHsF9iVf.js',
      'assets/index-DhNq9S6k.js',
      'assets/useParent-D6DiuxZZ-VfDKSZB6.js',
      'assets/renderIcon-CfE94nuJ-BFoi3Bt2.js',
      'assets/index-aiGQ-EiA-C8cDmWNj.js',
      'assets/index-DkImZxpu.css',
      'assets/index-DB55vr4x.css',
      'assets/index-DSWj29Fm.js',
      'assets/index-BkXoyx-J.js',
      'assets/index-iwoWuYwR.css',
      'assets/CellGroup-CpwdW5d8.js',
      'assets/pxCheck-DN6FYV6q-8OyS8IyB.js',
      'assets/index-NVLg1Lg8.css',
      'assets/index-BDqch-RA.js',
      'assets/index-C4Amn_uP.js',
      'assets/function-call-CB4TpdGR.js',
      'assets/index-CmDgRdbs.css',
      'assets/data-Cn_ldlG0.js',
      'assets/index-C4CUWgVW.css',
      'assets/index-BOEt_YLm.js',
      'assets/user-B-wIMa72.js',
      'assets/_plugin-vue_export-helper-1tPrXgE0-B_XUIAyV.js',
      'assets/index-DUNZgshA.css',
      'assets/index-BV-wIgBo.js',
      'assets/util-D1pvnUYu-DEz0HYko.js',
      'assets/index-DOhT1HM9.css',
      'assets/index-P9QtMJxA.js',
      'assets/index-BqzlIjr-.css',
      'assets/index-BZkxKjmx.js',
      'assets/index-BoCM8j1c.css',
    ]),
) => i.map((i) => d[i]);
/**
 * @vue/shared v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function e(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (e) => e in t;
}
!(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ('childList' === n.type) for (const e of n.addedNodes) 'LINK' === e.tagName && 'modulepreload' === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        'use-credentials' === e.crossOrigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossOrigin
            ? (t.credentials = 'omit')
            : (t.credentials = 'same-origin'),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const t = {},
  n = [],
  r = () => {},
  o = () => !1,
  s = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  a = (e) => e.startsWith('onUpdate:'),
  l = Object.assign,
  i = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  c = Object.prototype.hasOwnProperty,
  u = (e, t) => c.call(e, t),
  f = Array.isArray,
  p = (e) => '[object Map]' === b(e),
  d = (e) => '[object Set]' === b(e),
  h = (e) => 'function' == typeof e,
  m = (e) => 'string' == typeof e,
  g = (e) => 'symbol' == typeof e,
  _ = (e) => null !== e && 'object' == typeof e,
  v = (e) => (_(e) || h(e)) && h(e.then) && h(e.catch),
  y = Object.prototype.toString,
  b = (e) => y.call(e),
  k = (e) => '[object Object]' === b(e),
  x = (e) => m(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e,
  w = e(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  E = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  S = /-\w/g,
  C = E((e) => e.replace(S, (e) => e.slice(1).toUpperCase())),
  O = /\B([A-Z])/g,
  L = E((e) => e.replace(O, '-$1').toLowerCase()),
  T = E((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  A = E((e) => (e ? `on${T(e)}` : '')),
  I = (e, t) => !Object.is(e, t),
  P = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  F = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n });
  },
  N = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let R;
const $ = () =>
  R ||
  (R =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : {});
function M(e) {
  if (f(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = m(r) ? V(r) : M(r);
      if (o) for (const e in o) t[e] = o[e];
    }
    return t;
  }
  if (m(e) || _(e)) return e;
}
const D = /;(?![^(]*\))/g,
  j = /:([^]+)/,
  W = /\/\*[^]*?\*\//g;
function V(e) {
  const t = {};
  return (
    e
      .replace(W, '')
      .split(D)
      .forEach((e) => {
        if (e) {
          const n = e.split(j);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function U(e) {
  let t = '';
  if (m(e)) t = e;
  else if (f(e))
    for (let n = 0; n < e.length; n++) {
      const r = U(e[n]);
      r && (t += r + ' ');
    }
  else if (_(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
function B(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return (t && !m(t) && (e.class = U(t)), n && (e.style = M(n)), e);
}
const H = e('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly');
function G(e) {
  return !!e || '' === e;
}
const z = (e) => !(!e || !0 !== e.__v_isRef),
  q = (e) =>
    m(e)
      ? e
      : null == e
        ? ''
        : f(e) || (_(e) && (e.toString === y || !h(e.toString)))
          ? z(e)
            ? q(e.value)
            : JSON.stringify(e, Y, 2)
          : String(e),
  Y = (e, t) =>
    z(t)
      ? Y(e, t.value)
      : p(t)
        ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => ((e[K(t, r) + ' =>'] = n), e), {}) }
        : d(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((e) => K(e)) }
          : g(t)
            ? K(t)
            : !_(t) || f(t) || k(t)
              ? t
              : String(t),
  K = (e, t = '') => {
    var n;
    return g(e) ? `Symbol(${null != (n = e.description) ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let J, Z;
class X {
  constructor(e = !1) {
    ((this.detached = e),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = J),
      !e && J && (this.index = (J.scopes || (J.scopes = [])).push(this) - 1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      let e, t;
      if (((this._isPaused = !0), this.scopes)) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      let e, t;
      if (((this._isPaused = !1), this.scopes)) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = J;
      try {
        return ((J = this), e());
      } finally {
        J = t;
      }
    }
  }
  on() {
    1 === ++this._on && ((this.prevScope = J), (J = this));
  }
  off() {
    this._on > 0 && 0 === --this._on && ((J = this.prevScope), (this.prevScope = void 0));
  }
  stop(e) {
    if (this._active) {
      let t, n;
      for (this._active = !1, t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
      for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop();
        e && e !== this && ((this.parent.scopes[this.index] = e), (e.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Q(e) {
  return new X(e);
}
function ee() {
  return J;
}
function te(e, t = !1) {
  J && J.cleanups.push(e);
}
const ne = new WeakSet();
class re {
  constructor(e) {
    ((this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      J && J.active && J.effects.push(this));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && ((this.flags &= -65), ne.has(this) && (ne.delete(this), this.trigger()));
  }
  notify() {
    (2 & this.flags && !(32 & this.flags)) || 8 & this.flags || le(this);
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    ((this.flags |= 2), be(this), ue(this));
    const e = Z,
      t = ge;
    ((Z = this), (ge = !0));
    try {
      return this.fn();
    } finally {
      (fe(this), (Z = e), (ge = t), (this.flags &= -3));
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) he(e);
      ((this.deps = this.depsTail = void 0), be(this), this.onStop && this.onStop(), (this.flags &= -2));
    }
  }
  trigger() {
    64 & this.flags ? ne.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    pe(this) && this.run();
  }
  get dirty() {
    return pe(this);
  }
}
let oe,
  se,
  ae = 0;
function le(e, t = !1) {
  if (((e.flags |= 8), t)) return ((e.next = se), void (se = e));
  ((e.next = oe), (oe = e));
}
function ie() {
  ae++;
}
function ce() {
  if (--ae > 0) return;
  if (se) {
    let e = se;
    for (se = void 0; e; ) {
      const t = e.next;
      ((e.next = void 0), (e.flags &= -9), (e = t));
    }
  }
  let e;
  for (; oe; ) {
    let n = oe;
    for (oe = void 0; n; ) {
      const r = n.next;
      if (((n.next = void 0), (n.flags &= -9), 1 & n.flags))
        try {
          n.trigger();
        } catch (t) {
          e || (e = t);
        }
      n = r;
    }
  }
  if (e) throw e;
}
function ue(e) {
  for (let t = e.deps; t; t = t.nextDep) ((t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t));
}
function fe(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const e = r.prevDep;
    (-1 === r.version ? (r === n && (n = e), he(r), me(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = e));
  }
  ((e.deps = t), (e.depsTail = n));
}
function pe(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || (t.dep.computed && (de(t.dep.computed) || t.dep.version !== t.version))) return !0;
  return !!e._dirty;
}
function de(e) {
  if (4 & e.flags && !(16 & e.flags)) return;
  if (((e.flags &= -17), e.globalVersion === ke)) return;
  if (((e.globalVersion = ke), !e.isSSR && 128 & e.flags && ((!e.deps && !e._dirty) || !pe(e)))) return;
  e.flags |= 2;
  const t = e.dep,
    n = Z,
    r = ge;
  ((Z = e), (ge = !0));
  try {
    ue(e);
    const n = e.fn(e._value);
    (0 === t.version || I(n, e._value)) && ((e.flags |= 128), (e._value = n), t.version++);
  } catch (o) {
    throw (t.version++, o);
  } finally {
    ((Z = n), (ge = r), fe(e), (e.flags &= -3));
  }
}
function he(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (
    (r && ((r.nextSub = o), (e.prevSub = void 0)),
    o && ((o.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let e = n.computed.deps; e; e = e.nextDep) he(e, !0);
  }
  t || --n.sc || !n.map || n.map.delete(n.key);
}
function me(e) {
  const { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let ge = !0;
const _e = [];
function ve() {
  (_e.push(ge), (ge = !1));
}
function ye() {
  const e = _e.pop();
  ge = void 0 === e || e;
}
function be(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const e = Z;
    Z = void 0;
    try {
      t();
    } finally {
      Z = e;
    }
  }
}
let ke = 0;
class xe {
  constructor(e, t) {
    ((this.sub = e),
      (this.dep = t),
      (this.version = t.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0));
  }
}
class we {
  constructor(e) {
    ((this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(e) {
    if (!Z || !ge || Z === this.computed) return;
    let t = this.activeLink;
    if (void 0 === t || t.sub !== Z)
      ((t = this.activeLink = new xe(Z, this)),
        Z.deps ? ((t.prevDep = Z.depsTail), (Z.depsTail.nextDep = t), (Z.depsTail = t)) : (Z.deps = Z.depsTail = t),
        Ee(t));
    else if (-1 === t.version && ((t.version = this.version), t.nextDep)) {
      const e = t.nextDep;
      ((e.prevDep = t.prevDep),
        t.prevDep && (t.prevDep.nextDep = e),
        (t.prevDep = Z.depsTail),
        (t.nextDep = void 0),
        (Z.depsTail.nextDep = t),
        (Z.depsTail = t),
        Z.deps === t && (Z.deps = e));
    }
    return t;
  }
  trigger(e) {
    (this.version++, ke++, this.notify(e));
  }
  notify(e) {
    ie();
    try {
      0;
      for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
    } finally {
      ce();
    }
  }
}
function Ee(e) {
  if ((e.dep.sc++, 4 & e.sub.flags)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let e = t.deps; e; e = e.nextDep) Ee(e);
    }
    const n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
const Se = new WeakMap(),
  Ce = Symbol(''),
  Oe = Symbol(''),
  Le = Symbol('');
function Te(e, t, n) {
  if (ge && Z) {
    let t = Se.get(e);
    t || Se.set(e, (t = new Map()));
    let r = t.get(n);
    (r || (t.set(n, (r = new we())), (r.map = t), (r.key = n)), r.track());
  }
}
function Ae(e, t, n, r, o, s) {
  const a = Se.get(e);
  if (!a) return void ke++;
  const l = (e) => {
    e && e.trigger();
  };
  if ((ie(), 'clear' === t)) a.forEach(l);
  else {
    const o = f(e),
      s = o && x(n);
    if (o && 'length' === n) {
      const e = Number(r);
      a.forEach((t, n) => {
        ('length' === n || n === Le || (!g(n) && n >= e)) && l(t);
      });
    } else
      switch (((void 0 !== n || a.has(void 0)) && l(a.get(n)), s && l(a.get(Le)), t)) {
        case 'add':
          o ? s && l(a.get('length')) : (l(a.get(Ce)), p(e) && l(a.get(Oe)));
          break;
        case 'delete':
          o || (l(a.get(Ce)), p(e) && l(a.get(Oe)));
          break;
        case 'set':
          p(e) && l(a.get(Ce));
      }
  }
  ce();
}
function Ie(e) {
  const t = gt(e);
  return t === e ? t : (Te(t, 0, Le), ht(e) ? t : t.map(vt));
}
function Pe(e) {
  return (Te((e = gt(e)), 0, Le), e);
}
const Fe = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ne(this, Symbol.iterator, vt);
  },
  concat(...e) {
    return Ie(this).concat(...e.map((e) => (f(e) ? Ie(e) : e)));
  },
  entries() {
    return Ne(this, 'entries', (e) => ((e[1] = vt(e[1])), e));
  },
  every(e, t) {
    return $e(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return $e(this, 'filter', e, t, (e) => e.map(vt), arguments);
  },
  find(e, t) {
    return $e(this, 'find', e, t, vt, arguments);
  },
  findIndex(e, t) {
    return $e(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $e(this, 'findLast', e, t, vt, arguments);
  },
  findLastIndex(e, t) {
    return $e(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return $e(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return De(this, 'includes', e);
  },
  indexOf(...e) {
    return De(this, 'indexOf', e);
  },
  join(e) {
    return Ie(this).join(e);
  },
  lastIndexOf(...e) {
    return De(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return $e(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return je(this, 'pop');
  },
  push(...e) {
    return je(this, 'push', e);
  },
  reduce(e, ...t) {
    return Me(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return Me(this, 'reduceRight', e, t);
  },
  shift() {
    return je(this, 'shift');
  },
  some(e, t) {
    return $e(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return je(this, 'splice', e);
  },
  toReversed() {
    return Ie(this).toReversed();
  },
  toSorted(e) {
    return Ie(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ie(this).toSpliced(...e);
  },
  unshift(...e) {
    return je(this, 'unshift', e);
  },
  values() {
    return Ne(this, 'values', vt);
  },
};
function Ne(e, t, n) {
  const r = Pe(e),
    o = r[t]();
  return (
    r === e ||
      ht(e) ||
      ((o._next = o.next),
      (o.next = () => {
        const e = o._next();
        return (e.done || (e.value = n(e.value)), e);
      })),
    o
  );
}
const Re = Array.prototype;
function $e(e, t, n, r, o, s) {
  const a = Pe(e),
    l = a !== e && !ht(e),
    i = a[t];
  if (i !== Re[t]) {
    const t = i.apply(e, s);
    return l ? vt(t) : t;
  }
  let c = n;
  a !== e &&
    (l
      ? (c = function (t, r) {
          return n.call(this, vt(t), r, e);
        })
      : n.length > 2 &&
        (c = function (t, r) {
          return n.call(this, t, r, e);
        }));
  const u = i.call(a, c, r);
  return l && o ? o(u) : u;
}
function Me(e, t, n, r) {
  const o = Pe(e);
  let s = n;
  return (
    o !== e &&
      (ht(e)
        ? n.length > 3 &&
          (s = function (t, r, o) {
            return n.call(this, t, r, o, e);
          })
        : (s = function (t, r, o) {
            return n.call(this, t, vt(r), o, e);
          })),
    o[t](s, ...r)
  );
}
function De(e, t, n) {
  const r = gt(e);
  Te(r, 0, Le);
  const o = r[t](...n);
  return (-1 !== o && !1 !== o) || !mt(n[0]) ? o : ((n[0] = gt(n[0])), r[t](...n));
}
function je(e, t, n = []) {
  (ve(), ie());
  const r = gt(e)[t].apply(e, n);
  return (ce(), ye(), r);
}
const We = e('__proto__,__v_isRef,__isVue'),
  Ve = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => 'arguments' !== e && 'caller' !== e)
      .map((e) => Symbol[e])
      .filter(g),
  );
function Ue(e) {
  g(e) || (e = String(e));
  const t = gt(this);
  return (Te(t, 0, e), t.hasOwnProperty(e));
}
class Be {
  constructor(e = !1, t = !1) {
    ((this._isReadonly = e), (this._isShallow = t));
  }
  get(e, t, n) {
    if ('__v_skip' === t) return e.__v_skip;
    const r = this._isReadonly,
      o = this._isShallow;
    if ('__v_isReactive' === t) return !r;
    if ('__v_isReadonly' === t) return r;
    if ('__v_isShallow' === t) return o;
    if ('__v_raw' === t)
      return n === (r ? (o ? at : st) : o ? ot : rt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const s = f(e);
    if (!r) {
      let e;
      if (s && (e = Fe[t])) return e;
      if ('hasOwnProperty' === t) return Ue;
    }
    const a = Reflect.get(e, t, bt(e) ? e : n);
    if (g(t) ? Ve.has(t) : We(t)) return a;
    if ((r || Te(e, 0, t), o)) return a;
    if (bt(a)) {
      const e = s && x(t) ? a : a.value;
      return r && _(e) ? ut(e) : e;
    }
    return _(a) ? (r ? ut(a) : it(a)) : a;
  }
}
class He extends Be {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, n, r) {
    let o = e[t];
    if (!this._isShallow) {
      const t = dt(o);
      if ((ht(n) || dt(n) || ((o = gt(o)), (n = gt(n))), !f(e) && bt(o) && !bt(n))) return (t || (o.value = n), !0);
    }
    const s = f(e) && x(t) ? Number(t) < e.length : u(e, t),
      a = Reflect.set(e, t, n, bt(e) ? e : r);
    return (e === gt(r) && (s ? I(n, o) && Ae(e, 'set', t, n) : Ae(e, 'add', t, n)), a);
  }
  deleteProperty(e, t) {
    const n = u(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return (r && n && Ae(e, 'delete', t, void 0), r);
  }
  has(e, t) {
    const n = Reflect.has(e, t);
    return ((g(t) && Ve.has(t)) || Te(e, 0, t), n);
  }
  ownKeys(e) {
    return (Te(e, 0, f(e) ? 'length' : Ce), Reflect.ownKeys(e));
  }
}
class Ge extends Be {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return !0;
  }
  deleteProperty(e, t) {
    return !0;
  }
}
const ze = new He(),
  qe = new Ge(),
  Ye = new He(!0),
  Ke = (e) => e,
  Je = (e) => Reflect.getPrototypeOf(e);
function Ze(e) {
  return function (...t) {
    return 'delete' !== e && ('clear' === e ? void 0 : this);
  };
}
function Xe(e, t) {
  const n = {
    get(n) {
      const r = this.__v_raw,
        o = gt(r),
        s = gt(n);
      e || (I(n, s) && Te(o, 0, n), Te(o, 0, s));
      const { has: a } = Je(o),
        l = t ? Ke : e ? yt : vt;
      return a.call(o, n) ? l(r.get(n)) : a.call(o, s) ? l(r.get(s)) : void (r !== o && r.get(n));
    },
    get size() {
      const t = this.__v_raw;
      return (!e && Te(gt(t), 0, Ce), t.size);
    },
    has(t) {
      const n = this.__v_raw,
        r = gt(n),
        o = gt(t);
      return (e || (I(t, o) && Te(r, 0, t), Te(r, 0, o)), t === o ? n.has(t) : n.has(t) || n.has(o));
    },
    forEach(n, r) {
      const o = this,
        s = o.__v_raw,
        a = gt(s),
        l = t ? Ke : e ? yt : vt;
      return (!e && Te(a, 0, Ce), s.forEach((e, t) => n.call(r, l(e), l(t), o)));
    },
  };
  l(
    n,
    e
      ? { add: Ze('add'), set: Ze('set'), delete: Ze('delete'), clear: Ze('clear') }
      : {
          add(e) {
            t || ht(e) || dt(e) || (e = gt(e));
            const n = gt(this);
            return (Je(n).has.call(n, e) || (n.add(e), Ae(n, 'add', e, e)), this);
          },
          set(e, n) {
            t || ht(n) || dt(n) || (n = gt(n));
            const r = gt(this),
              { has: o, get: s } = Je(r);
            let a = o.call(r, e);
            a || ((e = gt(e)), (a = o.call(r, e)));
            const l = s.call(r, e);
            return (r.set(e, n), a ? I(n, l) && Ae(r, 'set', e, n) : Ae(r, 'add', e, n), this);
          },
          delete(e) {
            const t = gt(this),
              { has: n, get: r } = Je(t);
            let o = n.call(t, e);
            (o || ((e = gt(e)), (o = n.call(t, e))), r && r.call(t, e));
            const s = t.delete(e);
            return (o && Ae(t, 'delete', e, void 0), s);
          },
          clear() {
            const e = gt(this),
              t = 0 !== e.size,
              n = e.clear();
            return (t && Ae(e, 'clear', void 0, void 0), n);
          },
        },
  );
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = (function (e, t, n) {
        return function (...r) {
          const o = this.__v_raw,
            s = gt(o),
            a = p(s),
            l = 'entries' === e || (e === Symbol.iterator && a),
            i = 'keys' === e && a,
            c = o[e](...r),
            u = n ? Ke : t ? yt : vt;
          return (
            !t && Te(s, 0, i ? Oe : Ce),
            {
              next() {
                const { value: e, done: t } = c.next();
                return t ? { value: e, done: t } : { value: l ? [u(e[0]), u(e[1])] : u(e), done: t };
              },
              [Symbol.iterator]() {
                return this;
              },
            }
          );
        };
      })(r, e, t);
    }),
    n
  );
}
function Qe(e, t) {
  const n = Xe(e, t);
  return (t, r, o) =>
    '__v_isReactive' === r ? !e : '__v_isReadonly' === r ? e : '__v_raw' === r ? t : Reflect.get(u(n, r) && r in t ? n : t, r, o);
}
const et = { get: Qe(!1, !1) },
  tt = { get: Qe(!1, !0) },
  nt = { get: Qe(!0, !1) },
  rt = new WeakMap(),
  ot = new WeakMap(),
  st = new WeakMap(),
  at = new WeakMap();
function lt(e) {
  return e.__v_skip || !Object.isExtensible(e)
    ? 0
    : (function (e) {
        switch (e) {
          case 'Object':
          case 'Array':
            return 1;
          case 'Map':
          case 'Set':
          case 'WeakMap':
          case 'WeakSet':
            return 2;
          default:
            return 0;
        }
      })(((e) => b(e).slice(8, -1))(e));
}
function it(e) {
  return dt(e) ? e : ft(e, !1, ze, et, rt);
}
function ct(e) {
  return ft(e, !1, Ye, tt, ot);
}
function ut(e) {
  return ft(e, !0, qe, nt, st);
}
function ft(e, t, n, r, o) {
  if (!_(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const s = lt(e);
  if (0 === s) return e;
  const a = o.get(e);
  if (a) return a;
  const l = new Proxy(e, 2 === s ? r : n);
  return (o.set(e, l), l);
}
function pt(e) {
  return dt(e) ? pt(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function dt(e) {
  return !(!e || !e.__v_isReadonly);
}
function ht(e) {
  return !(!e || !e.__v_isShallow);
}
function mt(e) {
  return !!e && !!e.__v_raw;
}
function gt(e) {
  const t = e && e.__v_raw;
  return t ? gt(t) : e;
}
function _t(e) {
  return (!u(e, '__v_skip') && Object.isExtensible(e) && F(e, '__v_skip', !0), e);
}
const vt = (e) => (_(e) ? it(e) : e),
  yt = (e) => (_(e) ? ut(e) : e);
function bt(e) {
  return !!e && !0 === e.__v_isRef;
}
function kt(e) {
  return wt(e, !1);
}
function xt(e) {
  return wt(e, !0);
}
function wt(e, t) {
  return bt(e) ? e : new Et(e, t);
}
class Et {
  constructor(e, t) {
    ((this.dep = new we()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = t ? e : gt(e)),
      (this._value = t ? e : vt(e)),
      (this.__v_isShallow = t));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(e) {
    const t = this._rawValue,
      n = this.__v_isShallow || ht(e) || dt(e);
    ((e = n ? e : gt(e)), I(e, t) && ((this._rawValue = e), (this._value = n ? e : vt(e)), this.dep.trigger()));
  }
}
function St(e) {
  return bt(e) ? e.value : e;
}
const Ct = {
  get: (e, t, n) => ('__v_raw' === t ? e : St(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const o = e[t];
    return bt(o) && !bt(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Ot(e) {
  return pt(e) ? e : new Proxy(e, Ct);
}
function Lt(e) {
  const t = f(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Pt(e, n);
  return t;
}
class Tt {
  constructor(e, t, n) {
    ((this._object = e), (this._key = t), (this._defaultValue = n), (this.__v_isRef = !0), (this._value = void 0));
  }
  get value() {
    const e = this._object[this._key];
    return (this._value = void 0 === e ? this._defaultValue : e);
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return (function (e, t) {
      const n = Se.get(e);
      return n && n.get(t);
    })(gt(this._object), this._key);
  }
}
class At {
  constructor(e) {
    ((this._getter = e), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0));
  }
  get value() {
    return (this._value = this._getter());
  }
}
function It(e, t, n) {
  return bt(e) ? e : h(e) ? new At(e) : _(e) && arguments.length > 1 ? Pt(e, t, n) : kt(e);
}
function Pt(e, t, n) {
  const r = e[t];
  return bt(r) ? r : new Tt(e, t, n);
}
class Ft {
  constructor(e, t, n) {
    ((this.fn = e),
      (this.setter = t),
      (this._value = void 0),
      (this.dep = new we(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ke - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !t),
      (this.isSSR = n));
  }
  notify() {
    if (((this.flags |= 16), !(8 & this.flags) && Z !== this)) return (le(this, !0), !0);
  }
  get value() {
    const e = this.dep.track();
    return (de(this), e && (e.version = this.dep.version), this._value);
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
const Nt = {},
  Rt = new WeakMap();
let $t;
function Mt(e, n, o = t) {
  const { immediate: s, deep: a, once: l, scheduler: c, augmentJob: u, call: p } = o,
    d = (e) => (a ? e : ht(e) || !1 === a || 0 === a ? Dt(e, 1) : Dt(e));
  let m,
    g,
    _,
    v,
    y = !1,
    b = !1;
  if (
    (bt(e)
      ? ((g = () => e.value), (y = ht(e)))
      : pt(e)
        ? ((g = () => d(e)), (y = !0))
        : f(e)
          ? ((b = !0),
            (y = e.some((e) => pt(e) || ht(e))),
            (g = () => e.map((e) => (bt(e) ? e.value : pt(e) ? d(e) : h(e) ? (p ? p(e, 2) : e()) : void 0))))
          : (g = h(e)
              ? n
                ? p
                  ? () => p(e, 2)
                  : e
                : () => {
                    if (_) {
                      ve();
                      try {
                        _();
                      } finally {
                        ye();
                      }
                    }
                    const t = $t;
                    $t = m;
                    try {
                      return p ? p(e, 3, [v]) : e(v);
                    } finally {
                      $t = t;
                    }
                  }
              : r),
    n && a)
  ) {
    const e = g,
      t = !0 === a ? 1 / 0 : a;
    g = () => Dt(e(), t);
  }
  const k = ee(),
    x = () => {
      (m.stop(), k && k.active && i(k.effects, m));
    };
  if (l && n) {
    const e = n;
    n = (...t) => {
      (e(...t), x());
    };
  }
  let w = b ? new Array(e.length).fill(Nt) : Nt;
  const E = (e) => {
    if (1 & m.flags && (m.dirty || e))
      if (n) {
        const e = m.run();
        if (a || y || (b ? e.some((e, t) => I(e, w[t])) : I(e, w))) {
          _ && _();
          const t = $t;
          $t = m;
          try {
            const t = [e, w === Nt ? void 0 : b && w[0] === Nt ? [] : w, v];
            ((w = e), p ? p(n, 3, t) : n(...t));
          } finally {
            $t = t;
          }
        }
      } else m.run();
  };
  return (
    u && u(E),
    (m = new re(g)),
    (m.scheduler = c ? () => c(E, !1) : E),
    (v = (e) =>
      (function (e, t = !1, n = $t) {
        if (n) {
          let t = Rt.get(n);
          (t || Rt.set(n, (t = [])), t.push(e));
        }
      })(e, !1, m)),
    (_ = m.onStop =
      () => {
        const e = Rt.get(m);
        if (e) {
          if (p) p(e, 4);
          else for (const t of e) t();
          Rt.delete(m);
        }
      }),
    n ? (s ? E(!0) : (w = m.run())) : c ? c(E.bind(null, !0), !0) : m.run(),
    (x.pause = m.pause.bind(m)),
    (x.resume = m.resume.bind(m)),
    (x.stop = x),
    x
  );
}
function Dt(e, t = 1 / 0, n) {
  if (t <= 0 || !_(e) || e.__v_skip) return e;
  if (((n = n || new Map()).get(e) || 0) >= t) return e;
  if ((n.set(e, t), t--, bt(e))) Dt(e.value, t, n);
  else if (f(e)) for (let r = 0; r < e.length; r++) Dt(e[r], t, n);
  else if (d(e) || p(e))
    e.forEach((e) => {
      Dt(e, t, n);
    });
  else if (k(e)) {
    for (const r in e) Dt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Dt(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function jt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Vt(o, t, n);
  }
}
function Wt(e, t, n, r) {
  if (h(e)) {
    const o = jt(e, t, n, r);
    return (
      o &&
        v(o) &&
        o.catch((e) => {
          Vt(e, t, n);
        }),
      o
    );
  }
  if (f(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++) o.push(Wt(e[s], t, n, r));
    return o;
  }
}
function Vt(e, n, r, o = !0) {
  n && n.vnode;
  const { errorHandler: s, throwUnhandledErrorInProduction: a } = (n && n.appContext.config) || t;
  if (n) {
    let t = n.parent;
    const o = n.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; t; ) {
      const n = t.ec;
      if (n) for (let t = 0; t < n.length; t++) if (!1 === n[t](e, o, a)) return;
      t = t.parent;
    }
    if (s) return (ve(), jt(s, null, 10, [e, o, a]), void ye());
  }
  !(function (e, t, n, r = !0, o = !1) {
    if (o) throw e;
  })(e, 0, 0, o, a);
}
const Ut = [];
let Bt = -1;
const Ht = [];
let Gt = null,
  zt = 0;
const qt = Promise.resolve();
let Yt = null;
function Kt(e) {
  const t = Yt || qt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jt(e) {
  if (!(1 & e.flags)) {
    const t = en(e),
      n = Ut[Ut.length - 1];
    (!n || (!(2 & e.flags) && t >= en(n))
      ? Ut.push(e)
      : Ut.splice(
          (function (e) {
            let t = Bt + 1,
              n = Ut.length;
            for (; t < n; ) {
              const r = (t + n) >>> 1,
                o = Ut[r],
                s = en(o);
              s < e || (s === e && 2 & o.flags) ? (t = r + 1) : (n = r);
            }
            return t;
          })(t),
          0,
          e,
        ),
      (e.flags |= 1),
      Zt());
  }
}
function Zt() {
  Yt || (Yt = qt.then(tn));
}
function Xt(e, t, n = Bt + 1) {
  for (; n < Ut.length; n++) {
    const t = Ut[n];
    if (t && 2 & t.flags) {
      if (e && t.id !== e.uid) continue;
      (Ut.splice(n, 1), n--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2));
    }
  }
}
function Qt(e) {
  if (Ht.length) {
    const e = [...new Set(Ht)].sort((e, t) => en(e) - en(t));
    if (((Ht.length = 0), Gt)) return void Gt.push(...e);
    for (Gt = e, zt = 0; zt < Gt.length; zt++) {
      const e = Gt[zt];
      (4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), (e.flags &= -2));
    }
    ((Gt = null), (zt = 0));
  }
}
const en = (e) => (null == e.id ? (2 & e.flags ? -1 : 1 / 0) : e.id);
function tn(e) {
  try {
    for (Bt = 0; Bt < Ut.length; Bt++) {
      const e = Ut[Bt];
      !e || 8 & e.flags || (4 & e.flags && (e.flags &= -2), jt(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2));
    }
  } finally {
    for (; Bt < Ut.length; Bt++) {
      const e = Ut[Bt];
      e && (e.flags &= -2);
    }
    ((Bt = -1), (Ut.length = 0), Qt(), (Yt = null), (Ut.length || Ht.length) && tn());
  }
}
let nn = null,
  rn = null;
function on(e) {
  const t = nn;
  return ((nn = e), (rn = (e && e.type.__scopeId) || null), t);
}
function sn(e, t = nn, n) {
  if (!t) return e;
  if (e._n) return e;
  const r = (...n) => {
    r._d && $o(-1);
    const o = on(t);
    let s;
    try {
      s = e(...n);
    } finally {
      (on(o), r._d && $o(1));
    }
    return s;
  };
  return ((r._n = !0), (r._c = !0), (r._d = !0), r);
}
function an(e, n) {
  if (null === nn) return e;
  const r = ms(nn),
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < n.length; s++) {
    let [e, a, l, i = t] = n[s];
    e &&
      (h(e) && (e = { mounted: e, updated: e }),
      e.deep && Dt(a),
      o.push({ dir: e, instance: r, value: a, oldValue: void 0, arg: l, modifiers: i }));
  }
  return e;
}
function ln(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const l = o[a];
    s && (l.oldValue = s[a].value);
    let i = l.dir[r];
    i && (ve(), Wt(i, n, 8, [e.el, l, e, t]), ye());
  }
}
const cn = Symbol('_vte'),
  un = (e) => e.__isTeleport,
  fn = (e) => e && (e.disabled || '' === e.disabled),
  pn = (e) => e && (e.defer || '' === e.defer),
  dn = (e) => 'undefined' != typeof SVGElement && e instanceof SVGElement,
  hn = (e) => 'function' == typeof MathMLElement && e instanceof MathMLElement,
  mn = (e, t) => {
    const n = e && e.to;
    if (m(n)) {
      if (t) {
        return t(n);
      }
      return null;
    }
    return n;
  },
  gn = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, r, o, s, a, l, i, c) {
      const {
          mc: u,
          pc: f,
          pbc: p,
          o: { insert: d, querySelector: h, createText: m, createComment: g },
        } = c,
        _ = fn(t.props);
      let { shapeFlag: v, children: y, dynamicChildren: b } = t;
      if (null == e) {
        const e = (t.el = m('')),
          c = (t.anchor = m(''));
        (d(e, n, r), d(c, n, r));
        const f = (e, t) => {
            16 & v && u(y, e, t, o, s, a, l, i);
          },
          p = () => {
            const e = (t.target = mn(t.props, h)),
              n = bn(e, t, m, d);
            e &&
              ('svg' !== a && dn(e) ? (a = 'svg') : 'mathml' !== a && hn(e) && (a = 'mathml'),
              o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = new Set())).add(e),
              _ || (f(e, n), yn(t, !1)));
          };
        (_ && (f(n, c), yn(t, !0)),
          pn(t.props)
            ? ((t.el.__isMounted = !1),
              ro(() => {
                (p(), delete t.el.__isMounted);
              }, s))
            : p());
      } else {
        if (pn(t.props) && !1 === e.el.__isMounted)
          return void ro(() => {
            gn.process(e, t, n, r, o, s, a, l, i, c);
          }, s);
        ((t.el = e.el), (t.targetStart = e.targetStart));
        const u = (t.anchor = e.anchor),
          d = (t.target = e.target),
          m = (t.targetAnchor = e.targetAnchor),
          g = fn(e.props),
          v = g ? n : d,
          y = g ? u : m;
        if (
          ('svg' === a || dn(d) ? (a = 'svg') : ('mathml' === a || hn(d)) && (a = 'mathml'),
          b ? (p(e.dynamicChildren, b, v, o, s, a, l), lo(e, t, !0)) : i || f(e, t, v, y, o, s, a, l, !1),
          _)
        )
          g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : _n(t, n, u, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const e = (t.target = mn(t.props, h));
          e && _n(t, e, null, c, 0);
        } else g && _n(t, d, m, c, 1);
        yn(t, _);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, s) {
      const { shapeFlag: a, children: l, anchor: i, targetStart: c, targetAnchor: u, target: f, props: p } = e;
      if ((f && (o(c), o(u)), s && o(i), 16 & a)) {
        const e = s || !fn(p);
        for (let o = 0; o < l.length; o++) {
          const s = l[o];
          r(s, t, n, e, !!s.dynamicChildren);
        }
      }
    },
    move: _n,
    hydrate: function (e, t, n, r, o, s, { o: { nextSibling: a, parentNode: l, querySelector: i, insert: c, createText: u } }, f) {
      function p(e, t, i, c) {
        ((t.anchor = f(a(e), t, l(e), n, r, o, s)), (t.targetStart = i), (t.targetAnchor = c));
      }
      const d = (t.target = mn(t.props, i)),
        h = fn(t.props);
      if (d) {
        const l = d._lpa || d.firstChild;
        if (16 & t.shapeFlag)
          if (h) p(e, t, l, l && a(l));
          else {
            t.anchor = a(e);
            let i = l;
            for (; i; ) {
              if (i && 8 === i.nodeType)
                if ('teleport start anchor' === i.data) t.targetStart = i;
                else if ('teleport anchor' === i.data) {
                  ((t.targetAnchor = i), (d._lpa = t.targetAnchor && a(t.targetAnchor)));
                  break;
                }
              i = a(i);
            }
            (t.targetAnchor || bn(d, t, u, c), f(l && a(l), t, d, n, r, o, s));
          }
        yn(t, h);
      } else h && 16 & t.shapeFlag && p(e, t, e, a(e));
      return t.anchor && a(t.anchor);
    },
  };
function _n(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  0 === s && r(e.targetAnchor, t, n);
  const { el: a, anchor: l, shapeFlag: i, children: c, props: u } = e,
    f = 2 === s;
  if ((f && r(a, t, n), (!f || fn(u)) && 16 & i)) for (let p = 0; p < c.length; p++) o(c[p], t, n, 2);
  f && r(l, t, n);
}
const vn = gn;
function yn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? ((r = e.el), (o = e.anchor)) : ((r = e.targetStart), (o = e.targetAnchor)); r && r !== o; )
      (1 === r.nodeType && r.setAttribute('data-v-owner', n.uid), (r = r.nextSibling));
    n.ut();
  }
}
function bn(e, t, n, r) {
  const o = (t.targetStart = n('')),
    s = (t.targetAnchor = n(''));
  return ((o[cn] = s), e && (r(o, e), r(s, e)), s);
}
const kn = Symbol('_leaveCb'),
  xn = Symbol('_enterCb');
function wn() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    Qn(() => {
      e.isMounted = !0;
    }),
    nr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const En = [Function, Array],
  Sn = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: En,
    onEnter: En,
    onAfterEnter: En,
    onEnterCancelled: En,
    onBeforeLeave: En,
    onLeave: En,
    onAfterLeave: En,
    onLeaveCancelled: En,
    onBeforeAppear: En,
    onAppear: En,
    onAfterAppear: En,
    onAppearCancelled: En,
  },
  Cn = (e) => {
    const t = e.subTree;
    return t.component ? Cn(t.component) : t;
  };
function On(e) {
  let t = e[0];
  if (e.length > 1)
    for (const n of e)
      if (n.type !== Ao) {
        t = n;
        break;
      }
  return t;
}
const Ln = {
  name: 'BaseTransition',
  props: Sn,
  setup(e, { slots: t }) {
    const n = os(),
      r = wn();
    return () => {
      const o = t.default && Nn(t.default(), !0);
      if (!o || !o.length) return;
      const s = On(o),
        a = gt(e),
        { mode: l } = a;
      if (r.isLeaving) return In(s);
      const i = Pn(s);
      if (!i) return In(s);
      let c = An(i, a, r, n, (e) => (c = e));
      i.type !== Ao && Fn(i, c);
      let u = n.subTree && Pn(n.subTree);
      if (u && u.type !== Ao && !Vo(u, i) && Cn(n).type !== Ao) {
        let e = An(u, a, r, n);
        if ((Fn(u, e), 'out-in' === l && i.type !== Ao))
          return (
            (r.isLeaving = !0),
            (e.afterLeave = () => {
              ((r.isLeaving = !1), 8 & n.job.flags || n.update(), delete e.afterLeave, (u = void 0));
            }),
            In(s)
          );
        'in-out' === l && i.type !== Ao
          ? (e.delayLeave = (e, t, n) => {
              ((Tn(r, u)[String(u.key)] = u),
                (e[kn] = () => {
                  (t(), (e[kn] = void 0), delete c.delayedLeave, (u = void 0));
                }),
                (c.delayedLeave = () => {
                  (n(), delete c.delayedLeave, (u = void 0));
                }));
            })
          : (u = void 0);
      } else u && (u = void 0);
      return s;
    };
  },
};
function Tn(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return (r || ((r = Object.create(null)), n.set(t.type, r)), r);
}
function An(e, t, n, r, o) {
  const {
      appear: s,
      mode: a,
      persisted: l = !1,
      onBeforeEnter: i,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: p,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: m,
      onLeaveCancelled: g,
      onBeforeAppear: _,
      onAppear: v,
      onAfterAppear: y,
      onAppearCancelled: b,
    } = t,
    k = String(e.key),
    x = Tn(n, e),
    w = (e, t) => {
      e && Wt(e, r, 9, t);
    },
    E = (e, t) => {
      const n = t[1];
      (w(e, t), f(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n());
    },
    S = {
      mode: a,
      persisted: l,
      beforeEnter(t) {
        let r = i;
        if (!n.isMounted) {
          if (!s) return;
          r = _ || i;
        }
        t[kn] && t[kn](!0);
        const o = x[k];
        (o && Vo(e, o) && o.el[kn] && o.el[kn](), w(r, [t]));
      },
      enter(e) {
        let t = c,
          r = u,
          o = p;
        if (!n.isMounted) {
          if (!s) return;
          ((t = v || c), (r = y || u), (o = b || p));
        }
        let a = !1;
        const l = (e[xn] = (t) => {
          a || ((a = !0), w(t ? o : r, [e]), S.delayedLeave && S.delayedLeave(), (e[xn] = void 0));
        });
        t ? E(t, [e, l]) : l();
      },
      leave(t, r) {
        const o = String(e.key);
        if ((t[xn] && t[xn](!0), n.isUnmounting)) return r();
        w(d, [t]);
        let s = !1;
        const a = (t[kn] = (n) => {
          s || ((s = !0), r(), w(n ? g : m, [t]), (t[kn] = void 0), x[o] === e && delete x[o]);
        });
        ((x[o] = e), h ? E(h, [t, a]) : a());
      },
      clone(e) {
        const s = An(e, t, n, r, o);
        return (o && o(s), s);
      },
    };
  return S;
}
function In(e) {
  if (Vn(e)) return (((e = qo(e)).children = null), e);
}
function Pn(e) {
  if (!Vn(e)) return un(e.type) && e.children ? On(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (16 & t) return n[0];
    if (32 & t && h(n.default)) return n.default();
  }
}
function Fn(e, t) {
  6 & e.shapeFlag && e.component
    ? ((e.transition = t), Fn(e.component.subTree, t))
    : 128 & e.shapeFlag
      ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Nn(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const l = null == n ? a.key : String(n) + String(null != a.key ? a.key : s);
    a.type === Lo
      ? (128 & a.patchFlag && o++, (r = r.concat(Nn(a.children, t, l))))
      : (t || a.type !== Ao) && r.push(null != l ? qo(a, { key: l }) : a);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function Rn(e, t) {
  return h(e) ? (() => l({ name: e.name }, t, { setup: e }))() : e;
}
function $n(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
const Mn = new WeakMap();
function Dn(e, n, r, s, a = !1) {
  if (f(e)) return void e.forEach((e, t) => Dn(e, n && (f(n) ? n[t] : n), r, s, a));
  if (Wn(s) && !a)
    return void (512 & s.shapeFlag && s.type.__asyncResolved && s.component.subTree.component && Dn(e, n, r, s.component.subTree));
  const l = 4 & s.shapeFlag ? ms(s.component) : s.el,
    c = a ? null : l,
    { i: p, r: d } = e,
    g = n && n.r,
    _ = p.refs === t ? (p.refs = {}) : p.refs,
    v = p.setupState,
    y = gt(v),
    b = v === t ? o : (e) => u(y, e);
  if (null != g && g !== d)
    if ((jn(n), m(g))) ((_[g] = null), b(g) && (v[g] = null));
    else if (bt(g)) {
      g.value = null;
      const e = n;
      e.k && (_[e.k] = null);
    }
  if (h(d)) jt(d, p, 12, [c, _]);
  else {
    const t = m(d),
      n = bt(d);
    if (t || n) {
      const o = () => {
        if (e.f) {
          const n = t ? (b(d) ? v[d] : _[d]) : d.value;
          if (a) f(n) && i(n, l);
          else if (f(n)) n.includes(l) || n.push(l);
          else if (t) ((_[d] = [l]), b(d) && (v[d] = _[d]));
          else {
            const t = [l];
            ((d.value = t), e.k && (_[e.k] = t));
          }
        } else t ? ((_[d] = c), b(d) && (v[d] = c)) : n && ((d.value = c), e.k && (_[e.k] = c));
      };
      if (c) {
        const t = () => {
          (o(), Mn.delete(e));
        };
        ((t.id = -1), Mn.set(e, t), ro(t, r));
      } else (jn(e), o());
    }
  }
}
function jn(e) {
  const t = Mn.get(e);
  t && ((t.flags |= 8), Mn.delete(e));
}
($().requestIdleCallback, $().cancelIdleCallback);
const Wn = (e) => !!e.type.__asyncLoader,
  Vn = (e) => e.type.__isKeepAlive,
  Un = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] },
    setup(e, { slots: t }) {
      const n = os(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const e = t.default && t.default();
          return e && 1 === e.length ? e[0] : e;
        };
      const o = new Map(),
        s = new Set();
      let a = null;
      const l = n.suspense,
        {
          renderer: {
            p: i,
            m: c,
            um: u,
            o: { createElement: f },
          },
        } = r,
        p = f('div');
      function d(e) {
        (Yn(e), u(e, n, l, !0));
      }
      function h(e) {
        o.forEach((t, n) => {
          const r = gs(t.type);
          r && !e(r) && m(n);
        });
      }
      function m(e) {
        const t = o.get(e);
        (!t || (a && Vo(t, a)) ? a && Yn(a) : d(t), o.delete(e), s.delete(e));
      }
      ((r.activate = (e, t, n, r, o) => {
        const s = e.component;
        (c(e, t, n, 0, l),
          i(s.vnode, e, t, n, s, l, r, e.slotScopeIds, o),
          ro(() => {
            ((s.isDeactivated = !1), s.a && P(s.a));
            const t = e.props && e.props.onVnodeMounted;
            t && es(t, s.parent, e);
          }, l));
      }),
        (r.deactivate = (e) => {
          const t = e.component;
          (co(t.m),
            co(t.a),
            c(e, p, null, 1, l),
            ro(() => {
              t.da && P(t.da);
              const n = e.props && e.props.onVnodeUnmounted;
              (n && es(n, t.parent, e), (t.isDeactivated = !0));
            }, l));
        }),
        ho(
          () => [e.include, e.exclude],
          ([e, t]) => {
            (e && h((t) => Bn(e, t)), t && h((e) => !Bn(t, e)));
          },
          { flush: 'post', deep: !0 },
        ));
      let g = null;
      const _ = () => {
        null != g &&
          (Oo(n.subTree.type)
            ? ro(() => {
                o.set(g, Kn(n.subTree));
              }, n.subTree.suspense)
            : o.set(g, Kn(n.subTree)));
      };
      return (
        Qn(_),
        tr(_),
        nr(() => {
          o.forEach((e) => {
            const { subTree: t, suspense: r } = n,
              o = Kn(t);
            if (e.type === o.type && e.key === o.key) {
              Yn(o);
              const e = o.component.da;
              return void (e && ro(e, r));
            }
            d(e);
          });
        }),
        () => {
          if (((g = null), !t.default)) return (a = null);
          const n = t.default(),
            r = n[0];
          if (n.length > 1) return ((a = null), n);
          if (!(Wo(r) && (4 & r.shapeFlag || 128 & r.shapeFlag))) return ((a = null), r);
          let l = Kn(r);
          if (l.type === Ao) return ((a = null), l);
          const i = l.type,
            c = gs(Wn(l) ? l.type.__asyncResolved || {} : i),
            { include: u, exclude: f, max: p } = e;
          if ((u && (!c || !Bn(u, c))) || (f && c && Bn(f, c))) return ((l.shapeFlag &= -257), (a = l), r);
          const d = null == l.key ? i : l.key,
            h = o.get(d);
          return (
            l.el && ((l = qo(l)), 128 & r.shapeFlag && (r.ssContent = l)),
            (g = d),
            h
              ? ((l.el = h.el),
                (l.component = h.component),
                l.transition && Fn(l, l.transition),
                (l.shapeFlag |= 512),
                s.delete(d),
                s.add(d))
              : (s.add(d), p && s.size > parseInt(p, 10) && m(s.values().next().value)),
            (l.shapeFlag |= 256),
            (a = l),
            Oo(r.type) ? r : l
          );
        }
      );
    },
  };
function Bn(e, t) {
  return f(e) ? e.some((e) => Bn(e, t)) : m(e) ? e.split(',').includes(t) : '[object RegExp]' === b(e) && ((e.lastIndex = 0), e.test(t));
}
function Hn(e, t) {
  zn(e, 'a', t);
}
function Gn(e, t) {
  zn(e, 'da', t);
}
function zn(e, t, n = rs) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n;
      for (; t; ) {
        if (t.isDeactivated) return;
        t = t.parent;
      }
      return e();
    });
  if ((Jn(t, r, n), n)) {
    let e = n.parent;
    for (; e && e.parent; ) (Vn(e.parent.vnode) && qn(r, t, n, e), (e = e.parent));
  }
}
function qn(e, t, n, r) {
  const o = Jn(t, e, r, !0);
  rr(() => {
    i(r[t], o);
  }, n);
}
function Yn(e) {
  ((e.shapeFlag &= -257), (e.shapeFlag &= -513));
}
function Kn(e) {
  return 128 & e.shapeFlag ? e.ssContent : e;
}
function Jn(e, t, n = rs, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...r) => {
          ve();
          const o = ls(n),
            s = Wt(t, n, e, r);
          return (o(), ye(), s);
        });
    return (r ? o.unshift(s) : o.push(s), s);
  }
}
const Zn =
    (e) =>
    (t, n = rs) => {
      (us && 'sp' !== e) || Jn(e, (...e) => t(...e), n);
    },
  Xn = Zn('bm'),
  Qn = Zn('m'),
  er = Zn('bu'),
  tr = Zn('u'),
  nr = Zn('bum'),
  rr = Zn('um'),
  or = Zn('sp'),
  sr = Zn('rtg'),
  ar = Zn('rtc');
function lr(e, t = rs) {
  Jn('ec', e, t);
}
const ir = 'components';
function cr(e, t) {
  return dr(ir, e, !0, t) || e;
}
const ur = Symbol.for('v-ndc');
function fr(e) {
  return m(e) ? dr(ir, e, !1) || e : e || ur;
}
function pr(e) {
  return dr('directives', e);
}
function dr(e, t, n = !0, r = !1) {
  const o = nn || rs;
  if (o) {
    const n = o.type;
    if (e === ir) {
      const e = gs(n, !1);
      if (e && (e === t || e === C(t) || e === T(C(t)))) return n;
    }
    const s = hr(o[e] || n[e], t) || hr(o.appContext[e], t);
    return !s && r ? n : s;
  }
}
function hr(e, t) {
  return e && (e[t] || e[C(t)] || e[T(C(t))]);
}
function mr(e, t, n, r) {
  let o;
  const s = n,
    a = f(e);
  if (a || m(e)) {
    let n = !1,
      r = !1;
    (a && pt(e) && ((n = !ht(e)), (r = dt(e)), (e = Pe(e))), (o = new Array(e.length)));
    for (let a = 0, l = e.length; a < l; a++) o[a] = t(n ? (r ? yt(vt(e[a])) : vt(e[a])) : e[a], a, void 0, s);
  } else if ('number' == typeof e) {
    o = new Array(e);
    for (let n = 0; n < e; n++) o[n] = t(n + 1, n, void 0, s);
  } else if (_(e))
    if (e[Symbol.iterator]) o = Array.from(e, (e, n) => t(e, n, void 0, s));
    else {
      const n = Object.keys(e);
      o = new Array(n.length);
      for (let r = 0, a = n.length; r < a; r++) {
        const a = n[r];
        o[r] = t(e[a], a, r, s);
      }
    }
  else o = [];
  return o;
}
function gr(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (f(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...e) => {
              const t = r.fn(...e);
              return (t && (t.key = r.key), t);
            }
          : r.fn);
  }
  return e;
}
function _r(e, t, n = {}, r, o) {
  if (nn.ce || (nn.parent && Wn(nn.parent) && nn.parent.ce)) {
    const e = Object.keys(n).length > 0;
    return ('default' !== t && (n.name = t), No(), jo(Lo, null, [Go('slot', n, r && r())], e ? -2 : 64));
  }
  let s = e[t];
  (s && s._c && (s._d = !1), No());
  const a = s && vr(s(n)),
    l = n.key || (a && a.key),
    i = jo(Lo, { key: (l && !g(l) ? l : `_${t}`) + (!a && r ? '_fb' : '') }, a || (r ? r() : []), a && 1 === e._ ? 64 : -2);
  return (i.scopeId && (i.slotScopeIds = [i.scopeId + '-s']), s && s._c && (s._d = !0), i);
}
function vr(e) {
  return e.some((e) => !Wo(e) || (e.type !== Ao && !(e.type === Lo && !vr(e.children)))) ? e : null;
}
const yr = (e) => (e ? (cs(e) ? ms(e) : yr(e.parent)) : null),
  br = l(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => yr(e.parent),
    $root: (e) => yr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Jt(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Kt.bind(e.proxy)),
    $watch: (e) => go.bind(e),
  }),
  kr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n),
  xr = {
    get({ _: e }, n) {
      if ('__v_skip' === n) return !0;
      const { ctx: r, setupState: o, data: s, props: a, accessCache: l, type: i, appContext: c } = e;
      let f;
      if ('$' !== n[0]) {
        const i = l[n];
        if (void 0 !== i)
          switch (i) {
            case 1:
              return o[n];
            case 2:
              return s[n];
            case 4:
              return r[n];
            case 3:
              return a[n];
          }
        else {
          if (kr(o, n)) return ((l[n] = 1), o[n]);
          if (s !== t && u(s, n)) return ((l[n] = 2), s[n]);
          if ((f = e.propsOptions[0]) && u(f, n)) return ((l[n] = 3), a[n]);
          if (r !== t && u(r, n)) return ((l[n] = 4), r[n]);
          Sr && (l[n] = 0);
        }
      }
      const p = br[n];
      let d, h;
      return p
        ? ('$attrs' === n && Te(e.attrs, 0, ''), p(e))
        : (d = i.__cssModules) && (d = d[n])
          ? d
          : r !== t && u(r, n)
            ? ((l[n] = 4), r[n])
            : ((h = c.config.globalProperties), u(h, n) ? h[n] : void 0);
    },
    set({ _: e }, n, r) {
      const { data: o, setupState: s, ctx: a } = e;
      return kr(s, n)
        ? ((s[n] = r), !0)
        : o !== t && u(o, n)
          ? ((o[n] = r), !0)
          : !u(e.props, n) && ('$' !== n[0] || !(n.slice(1) in e)) && ((a[n] = r), !0);
    },
    has({ _: { data: e, setupState: n, accessCache: r, ctx: o, appContext: s, propsOptions: a, type: l } }, i) {
      let c, f;
      return !!(
        r[i] ||
        (e !== t && '$' !== i[0] && u(e, i)) ||
        kr(n, i) ||
        ((c = a[0]) && u(c, i)) ||
        u(o, i) ||
        u(br, i) ||
        u(s.config.globalProperties, i) ||
        ((f = l.__cssModules) && f[i])
      );
    },
    defineProperty(e, t, n) {
      return (null != n.get ? (e._.accessCache[t] = 0) : u(n, 'value') && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n));
    },
  };
function wr() {
  return (function () {
    const e = os();
    return e.setupContext || (e.setupContext = hs(e));
  })().slots;
}
function Er(e) {
  return f(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
}
let Sr = !0;
function Cr(e) {
  const t = Tr(e),
    n = e.proxy,
    o = e.ctx;
  ((Sr = !1), t.beforeCreate && Or(t.beforeCreate, e, 'bc'));
  const {
    data: s,
    computed: a,
    methods: l,
    watch: i,
    provide: c,
    inject: u,
    created: p,
    beforeMount: d,
    mounted: m,
    beforeUpdate: g,
    updated: v,
    activated: y,
    deactivated: b,
    beforeDestroy: k,
    beforeUnmount: x,
    destroyed: w,
    unmounted: E,
    render: S,
    renderTracked: C,
    renderTriggered: O,
    errorCaptured: L,
    serverPrefetch: T,
    expose: A,
    inheritAttrs: I,
    components: P,
    directives: F,
    filters: N,
  } = t;
  if (
    (u &&
      (function (e, t) {
        f(e) && (e = Fr(e));
        for (const n in e) {
          const r = e[n];
          let o;
          ((o = _(r) ? ('default' in r ? Ur(r.from || n, r.default, !0) : Ur(r.from || n)) : Ur(r)),
            bt(o)
              ? Object.defineProperty(t, n, { enumerable: !0, configurable: !0, get: () => o.value, set: (e) => (o.value = e) })
              : (t[n] = o));
        }
      })(u, o, null),
    l)
  )
    for (const r in l) {
      const e = l[r];
      h(e) && (o[r] = e.bind(n));
    }
  if (s) {
    const t = s.call(n, n);
    _(t) && (e.data = it(t));
  }
  if (((Sr = !0), a))
    for (const f in a) {
      const e = a[f],
        t = h(e) ? e.bind(n, n) : h(e.get) ? e.get.bind(n, n) : r,
        s = !h(e) && h(e.set) ? e.set.bind(n) : r,
        l = _s({ get: t, set: s });
      Object.defineProperty(o, f, { enumerable: !0, configurable: !0, get: () => l.value, set: (e) => (l.value = e) });
    }
  if (i) for (const r in i) Lr(i[r], o, n, r);
  if (c) {
    const e = h(c) ? c.call(n) : c;
    Reflect.ownKeys(e).forEach((t) => {
      Vr(t, e[t]);
    });
  }
  function R(e, t) {
    f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (p && Or(p, e, 'c'),
    R(Xn, d),
    R(Qn, m),
    R(er, g),
    R(tr, v),
    R(Hn, y),
    R(Gn, b),
    R(lr, L),
    R(ar, C),
    R(sr, O),
    R(nr, x),
    R(rr, E),
    R(or, T),
    f(A))
  )
    if (A.length) {
      const t = e.exposed || (e.exposed = {});
      A.forEach((e) => {
        Object.defineProperty(t, e, { get: () => n[e], set: (t) => (n[e] = t), enumerable: !0 });
      });
    } else e.exposed || (e.exposed = {});
  (S && e.render === r && (e.render = S), null != I && (e.inheritAttrs = I), P && (e.components = P), F && (e.directives = F), T && $n(e));
}
function Or(e, t, n) {
  Wt(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Lr(e, t, n, r) {
  let o = r.includes('.') ? _o(n, r) : () => n[r];
  if (m(e)) {
    const n = t[e];
    h(n) && ho(o, n);
  } else if (h(e)) ho(o, e.bind(n));
  else if (_(e))
    if (f(e)) e.forEach((e) => Lr(e, t, n, r));
    else {
      const r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
      h(r) && ho(o, r, e);
    }
}
function Tr(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    l = s.get(t);
  let i;
  return (
    l ? (i = l) : o.length || n || r ? ((i = {}), o.length && o.forEach((e) => Ar(i, e, a, !0)), Ar(i, t, a)) : (i = t),
    _(t) && s.set(t, i),
    i
  );
}
function Ar(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  (s && Ar(e, s, n, !0), o && o.forEach((t) => Ar(e, t, n, !0)));
  for (const a in t)
    if (r && 'expose' === a);
    else {
      const r = Ir[a] || (n && n[a]);
      e[a] = r ? r(e[a], t[a]) : t[a];
    }
  return e;
}
const Ir = {
  data: Pr,
  props: $r,
  emits: $r,
  methods: Rr,
  computed: Rr,
  beforeCreate: Nr,
  created: Nr,
  beforeMount: Nr,
  mounted: Nr,
  beforeUpdate: Nr,
  updated: Nr,
  beforeDestroy: Nr,
  beforeUnmount: Nr,
  destroyed: Nr,
  unmounted: Nr,
  activated: Nr,
  deactivated: Nr,
  errorCaptured: Nr,
  serverPrefetch: Nr,
  components: Rr,
  directives: Rr,
  watch: function (e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = l(Object.create(null), e);
    for (const r in t) n[r] = Nr(e[r], t[r]);
    return n;
  },
  provide: Pr,
  inject: function (e, t) {
    return Rr(Fr(e), Fr(t));
  },
};
function Pr(e, t) {
  return t
    ? e
      ? function () {
          return l(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function Fr(e) {
  if (f(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Nr(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rr(e, t) {
  return e ? l(Object.create(null), e, t) : t;
}
function $r(e, t) {
  return e ? (f(e) && f(t) ? [...new Set([...e, ...t])] : l(Object.create(null), Er(e), Er(null != t ? t : {}))) : t;
}
function Mr() {
  return {
    app: null,
    config: {
      isNativeTag: o,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Dr = 0;
function jr(e, t) {
  return function (t, n = null) {
    (h(t) || (t = l({}, t)), null == n || _(n) || (n = null));
    const r = Mr(),
      o = new WeakSet(),
      s = [];
    let a = !1;
    const i = (r.app = {
      _uid: Dr++,
      _component: t,
      _props: n,
      _container: null,
      _context: r,
      _instance: null,
      version: ys,
      get config() {
        return r.config;
      },
      set config(e) {},
      use: (e, ...t) => (o.has(e) || (e && h(e.install) ? (o.add(e), e.install(i, ...t)) : h(e) && (o.add(e), e(i, ...t))), i),
      mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), i),
      component: (e, t) => (t ? ((r.components[e] = t), i) : r.components[e]),
      directive: (e, t) => (t ? ((r.directives[e] = t), i) : r.directives[e]),
      mount(o, s, l) {
        if (!a) {
          const s = i._ceVNode || Go(t, n);
          return (
            (s.appContext = r),
            !0 === l ? (l = 'svg') : !1 === l && (l = void 0),
            e(s, o, l),
            (a = !0),
            (i._container = o),
            (o.__vue_app__ = i),
            ms(s.component)
          );
        }
      },
      onUnmount(e) {
        s.push(e);
      },
      unmount() {
        a && (Wt(s, i._instance, 16), e(null, i._container), delete i._container.__vue_app__);
      },
      provide: (e, t) => ((r.provides[e] = t), i),
      runWithContext(e) {
        const t = Wr;
        Wr = i;
        try {
          return e();
        } finally {
          Wr = t;
        }
      },
    });
    return i;
  };
}
let Wr = null;
function Vr(e, t) {
  if (rs) {
    let n = rs.provides;
    const r = rs.parent && rs.parent.provides;
    (r === n && (n = rs.provides = Object.create(r)), (n[e] = t));
  } else;
}
function Ur(e, t, n = !1) {
  const r = os();
  if (r || Wr) {
    let o = Wr
      ? Wr._context.provides
      : r
        ? null == r.parent || r.ce
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
  }
}
const Br = {},
  Hr = () => Object.create(Br),
  Gr = (e) => Object.getPrototypeOf(e) === Br;
function zr(e, n, r, o) {
  const [s, a] = e.propsOptions;
  let l,
    i = !1;
  if (n)
    for (let t in n) {
      if (w(t)) continue;
      const c = n[t];
      let f;
      s && u(s, (f = C(t)))
        ? a && a.includes(f)
          ? ((l || (l = {}))[f] = c)
          : (r[f] = c)
        : xo(e.emitsOptions, t) || (t in o && c === o[t]) || ((o[t] = c), (i = !0));
    }
  if (a) {
    const n = gt(r),
      o = l || t;
    for (let t = 0; t < a.length; t++) {
      const l = a[t];
      r[l] = qr(s, n, l, o[l], e, !u(o, l));
    }
  }
  return i;
}
function qr(e, t, n, r, o, s) {
  const a = e[n];
  if (null != a) {
    const e = u(a, 'default');
    if (e && void 0 === r) {
      const e = a.default;
      if (a.type !== Function && !a.skipFactory && h(e)) {
        const { propsDefaults: s } = o;
        if (n in s) r = s[n];
        else {
          const a = ls(o);
          ((r = s[n] = e.call(null, t)), a());
        }
      } else r = e;
      o.ce && o.ce._setProp(n, r);
    }
    a[0] && (s && !e ? (r = !1) : !a[1] || ('' !== r && r !== L(n)) || (r = !0));
  }
  return r;
}
const Yr = new WeakMap();
function Kr(e, r, o = !1) {
  const s = o ? Yr : r.propsCache,
    a = s.get(e);
  if (a) return a;
  const i = e.props,
    c = {},
    p = [];
  let d = !1;
  if (!h(e)) {
    const t = (e) => {
      d = !0;
      const [t, n] = Kr(e, r, !0);
      (l(c, t), n && p.push(...n));
    };
    (!o && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t));
  }
  if (!i && !d) return (_(e) && s.set(e, n), n);
  if (f(i))
    for (let n = 0; n < i.length; n++) {
      const e = C(i[n]);
      Jr(e) && (c[e] = t);
    }
  else if (i)
    for (const t in i) {
      const e = C(t);
      if (Jr(e)) {
        const n = i[t],
          r = (c[e] = f(n) || h(n) ? { type: n } : l({}, n)),
          o = r.type;
        let s = !1,
          a = !0;
        if (f(o))
          for (let e = 0; e < o.length; ++e) {
            const t = o[e],
              n = h(t) && t.name;
            if ('Boolean' === n) {
              s = !0;
              break;
            }
            'String' === n && (a = !1);
          }
        else s = h(o) && 'Boolean' === o.name;
        ((r[0] = s), (r[1] = a), (s || u(r, 'default')) && p.push(e));
      }
    }
  const m = [c, p];
  return (_(e) && s.set(e, m), m);
}
function Jr(e) {
  return '$' !== e[0] && !w(e);
}
const Zr = (e) => '_' === e || '_ctx' === e || '$stable' === e,
  Xr = (e) => (f(e) ? e.map(Jo) : [Jo(e)]),
  Qr = (e, t, n) => {
    if (t._n) return t;
    const r = sn((...e) => Xr(t(...e)), n);
    return ((r._c = !1), r);
  },
  eo = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Zr(o)) continue;
      const n = e[o];
      if (h(n)) t[o] = Qr(0, n, r);
      else if (null != n) {
        const e = Xr(n);
        t[o] = () => e;
      }
    }
  },
  to = (e, t) => {
    const n = Xr(t);
    e.slots.default = () => n;
  },
  no = (e, t, n) => {
    for (const r in t) (!n && Zr(r)) || (e[r] = t[r]);
  },
  ro = function (e, t) {
    t && t.pendingBranch
      ? f(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : (f((n = e)) ? Ht.push(...n) : Gt && -1 === n.id ? Gt.splice(zt + 1, 0, n) : 1 & n.flags || (Ht.push(n), (n.flags |= 1)), Zt());
    var n;
  };
function oo(e) {
  return (function (e) {
    $().__VUE__ = !0;
    const {
        insert: o,
        remove: s,
        patchProp: a,
        createElement: l,
        createText: i,
        createComment: c,
        setText: f,
        setElementText: p,
        parentNode: d,
        nextSibling: h,
        setScopeId: m = r,
        insertStaticContent: g,
      } = e,
      _ = (e, t, n, r = null, o = null, s = null, a = void 0, l = null, i = !!t.dynamicChildren) => {
        if (e === t) return;
        (e && !Vo(e, t) && ((r = Q(e)), q(e, o, s, !0), (e = null)), -2 === t.patchFlag && ((i = !1), (t.dynamicChildren = null)));
        const { type: c, ref: u, shapeFlag: f } = t;
        switch (c) {
          case To:
            y(e, t, n, r);
            break;
          case Ao:
            b(e, t, n, r);
            break;
          case Io:
            null == e && k(t, n, r, a);
            break;
          case Lo:
            M(e, t, n, r, o, s, a, l, i);
            break;
          default:
            1 & f
              ? S(e, t, n, r, o, s, a, l, i)
              : 6 & f
                ? D(e, t, n, r, o, s, a, l, i)
                : (64 & f || 128 & f) && c.process(e, t, n, r, o, s, a, l, i, ne);
        }
        null != u && o ? Dn(u, e && e.ref, s, t || e, !t) : null == u && e && null != e.ref && Dn(e.ref, null, s, e, !0);
      },
      y = (e, t, n, r) => {
        if (null == e) o((t.el = i(t.children)), n, r);
        else {
          const n = (t.el = e.el);
          t.children !== e.children && f(n, t.children);
        }
      },
      b = (e, t, n, r) => {
        null == e ? o((t.el = c(t.children || '')), n, r) : (t.el = e.el);
      },
      k = (e, t, n, r) => {
        [e.el, e.anchor] = g(e.children, t, n, r, e.el, e.anchor);
      },
      x = ({ el: e, anchor: t }, n, r) => {
        let s;
        for (; e && e !== t; ) ((s = h(e)), o(e, n, r), (e = s));
        o(t, n, r);
      },
      E = ({ el: e, anchor: t }) => {
        let n;
        for (; e && e !== t; ) ((n = h(e)), s(e), (e = n));
        s(t);
      },
      S = (e, t, n, r, o, s, a, l, i) => {
        ('svg' === t.type ? (a = 'svg') : 'math' === t.type && (a = 'mathml'),
          null == e ? O(t, n, r, o, s, a, l, i) : I(e, t, o, s, a, l, i));
      },
      O = (e, t, n, r, s, i, c, u) => {
        let f, d;
        const { props: h, shapeFlag: m, transition: g, dirs: _ } = e;
        if (
          ((f = e.el = l(e.type, i, h && h.is, h)),
          8 & m ? p(f, e.children) : 16 & m && A(e.children, f, null, r, s, so(e, i), c, u),
          _ && ln(e, null, r, 'created'),
          T(f, e, e.scopeId, c, r),
          h)
        ) {
          for (const e in h) 'value' === e || w(e) || a(f, e, null, h[e], i, r);
          ('value' in h && a(f, 'value', null, h.value, i), (d = h.onVnodeBeforeMount) && es(d, r, e));
        }
        _ && ln(e, null, r, 'beforeMount');
        const v = (function (e, t) {
          return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
        })(s, g);
        (v && g.beforeEnter(f),
          o(f, t, n),
          ((d = h && h.onVnodeMounted) || v || _) &&
            ro(() => {
              (d && es(d, r, e), v && g.enter(f), _ && ln(e, null, r, 'mounted'));
            }, s));
      },
      T = (e, t, n, r, o) => {
        if ((n && m(e, n), r)) for (let s = 0; s < r.length; s++) m(e, r[s]);
        if (o) {
          let n = o.subTree;
          if (t === n || (Oo(n.type) && (n.ssContent === t || n.ssFallback === t))) {
            const t = o.vnode;
            T(e, t, t.scopeId, t.slotScopeIds, o.parent);
          }
        }
      },
      A = (e, t, n, r, o, s, a, l, i = 0) => {
        for (let c = i; c < e.length; c++) {
          const i = (e[c] = l ? Zo(e[c]) : Jo(e[c]));
          _(null, i, t, n, r, o, s, a, l);
        }
      },
      I = (e, n, r, o, s, l, i) => {
        const c = (n.el = e.el);
        let { patchFlag: u, dynamicChildren: f, dirs: d } = n;
        u |= 16 & e.patchFlag;
        const h = e.props || t,
          m = n.props || t;
        let g;
        if (
          (r && ao(r, !1),
          (g = m.onVnodeBeforeUpdate) && es(g, r, n, e),
          d && ln(n, e, r, 'beforeUpdate'),
          r && ao(r, !0),
          ((h.innerHTML && null == m.innerHTML) || (h.textContent && null == m.textContent)) && p(c, ''),
          f ? N(e.dynamicChildren, f, c, r, o, so(n, s), l) : i || B(e, n, c, null, r, o, so(n, s), l, !1),
          u > 0)
        ) {
          if (16 & u) R(c, h, m, r, s);
          else if ((2 & u && h.class !== m.class && a(c, 'class', null, m.class, s), 4 & u && a(c, 'style', h.style, m.style, s), 8 & u)) {
            const e = n.dynamicProps;
            for (let t = 0; t < e.length; t++) {
              const n = e[t],
                o = h[n],
                l = m[n];
              (l === o && 'value' !== n) || a(c, n, o, l, s, r);
            }
          }
          1 & u && e.children !== n.children && p(c, n.children);
        } else i || null != f || R(c, h, m, r, s);
        ((g = m.onVnodeUpdated) || d) &&
          ro(() => {
            (g && es(g, r, n, e), d && ln(n, e, r, 'updated'));
          }, o);
      },
      N = (e, t, n, r, o, s, a) => {
        for (let l = 0; l < t.length; l++) {
          const i = e[l],
            c = t[l],
            u = i.el && (i.type === Lo || !Vo(i, c) || 198 & i.shapeFlag) ? d(i.el) : n;
          _(i, c, u, null, r, o, s, a, !0);
        }
      },
      R = (e, n, r, o, s) => {
        if (n !== r) {
          if (n !== t) for (const t in n) w(t) || t in r || a(e, t, n[t], null, s, o);
          for (const t in r) {
            if (w(t)) continue;
            const l = r[t],
              i = n[t];
            l !== i && 'value' !== t && a(e, t, i, l, s, o);
          }
          'value' in r && a(e, 'value', n.value, r.value, s);
        }
      },
      M = (e, t, n, r, s, a, l, c, u) => {
        const f = (t.el = e ? e.el : i('')),
          p = (t.anchor = e ? e.anchor : i(''));
        let { patchFlag: d, dynamicChildren: h, slotScopeIds: m } = t;
        (m && (c = c ? c.concat(m) : m),
          null == e
            ? (o(f, n, r), o(p, n, r), A(t.children || [], n, p, s, a, l, c, u))
            : d > 0 && 64 & d && h && e.dynamicChildren
              ? (N(e.dynamicChildren, h, n, s, a, l, c), (null != t.key || (s && t === s.subTree)) && lo(e, t, !0))
              : B(e, t, n, p, s, a, l, c, u));
      },
      D = (e, t, n, r, o, s, a, l, i) => {
        ((t.slotScopeIds = l), null == e ? (512 & t.shapeFlag ? o.ctx.activate(t, n, r, a, i) : j(t, n, r, o, s, a, i)) : W(e, t, i));
      },
      j = (e, n, r, o, s, a, l) => {
        const i = (e.component = (function (e, n, r) {
          const o = e.type,
            s = (n ? n.appContext : e.appContext) || ts,
            a = {
              uid: ns++,
              vnode: e,
              type: o,
              parent: n,
              appContext: s,
              root: null,
              next: null,
              subTree: null,
              effect: null,
              update: null,
              job: null,
              scope: new X(!0),
              render: null,
              proxy: null,
              exposed: null,
              exposeProxy: null,
              withProxy: null,
              provides: n ? n.provides : Object.create(s.provides),
              ids: n ? n.ids : ['', 0, 0],
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: Kr(o, s),
              emitsOptions: ko(o, s),
              emit: null,
              emitted: null,
              propsDefaults: t,
              inheritAttrs: o.inheritAttrs,
              ctx: t,
              data: t,
              props: t,
              attrs: t,
              slots: t,
              refs: t,
              setupState: t,
              setupContext: null,
              suspense: r,
              suspenseId: r ? r.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              da: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
              sp: null,
            };
          ((a.ctx = { _: a }), (a.root = n ? n.root : a), (a.emit = yo.bind(null, a)), e.ce && e.ce(a));
          return a;
        })(e, o, s));
        if (
          (Vn(e) && (i.ctx.renderer = ne),
          (function (e, t = !1, n = !1) {
            t && as(t);
            const { props: r, children: o } = e.vnode,
              s = cs(e);
            ((function (e, t, n, r = !1) {
              const o = {},
                s = Hr();
              ((e.propsDefaults = Object.create(null)), zr(e, t, o, s));
              for (const a in e.propsOptions[0]) a in o || (o[a] = void 0);
              (n ? (e.props = r ? o : ct(o)) : e.type.props ? (e.props = o) : (e.props = s), (e.attrs = s));
            })(e, r, s, t),
              ((e, t, n) => {
                const r = (e.slots = Hr());
                if (32 & e.vnode.shapeFlag) {
                  const e = t._;
                  e ? (no(r, t, n), n && F(r, '_', e, !0)) : eo(t, r);
                } else t && to(e, t);
              })(e, o, n || t));
            const a = s
              ? (function (e, t) {
                  const n = e.type;
                  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, xr)));
                  const { setup: r } = n;
                  if (r) {
                    ve();
                    const n = (e.setupContext = r.length > 1 ? hs(e) : null),
                      o = ls(e),
                      s = jt(r, e, 0, [e.props, n]),
                      a = v(s);
                    if ((ye(), o(), (!a && !e.sp) || Wn(e) || $n(e), a)) {
                      if ((s.then(is, is), t))
                        return s
                          .then((t) => {
                            fs(e, t);
                          })
                          .catch((t) => {
                            Vt(t, e, 0);
                          });
                      e.asyncDep = s;
                    } else fs(e, s);
                  } else ps(e);
                })(e, t)
              : void 0;
            t && as(!1);
          })(i, !1, l),
          i.asyncDep)
        ) {
          if ((s && s.registerDep(i, V, l), !e.el)) {
            const t = (i.subTree = Go(Ao));
            (b(null, t, n, r), (e.placeholder = t.el));
          }
        } else V(i, e, n, r, s, a, l);
      },
      W = (e, t, n) => {
        const r = (t.component = e.component);
        if (
          (function (e, t, n) {
            const { props: r, children: o, component: s } = e,
              { props: a, children: l, patchFlag: i } = t,
              c = s.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && i >= 0)) return !((!o && !l) || (l && l.$stable)) || (r !== a && (r ? !a || Co(r, a, c) : !!a));
            if (1024 & i) return !0;
            if (16 & i) return r ? Co(r, a, c) : !!a;
            if (8 & i) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (a[n] !== r[n] && !xo(c, n)) return !0;
              }
            }
            return !1;
          })(e, t, n)
        ) {
          if (r.asyncDep && !r.asyncResolved) return void U(r, t, n);
          ((r.next = t), r.update());
        } else ((t.el = e.el), (r.vnode = t));
      },
      V = (e, t, n, r, o, s, a) => {
        const l = () => {
          if (e.isMounted) {
            let { next: t, bu: n, u: r, parent: i, vnode: c } = e;
            {
              const n = io(e);
              if (n)
                return (
                  t && ((t.el = c.el), U(e, t, a)),
                  void n.asyncDep.then(() => {
                    e.isUnmounted || l();
                  })
                );
            }
            let u,
              f = t;
            (ao(e, !1),
              t ? ((t.el = c.el), U(e, t, a)) : (t = c),
              n && P(n),
              (u = t.props && t.props.onVnodeBeforeUpdate) && es(u, i, t, c),
              ao(e, !0));
            const p = wo(e),
              h = e.subTree;
            ((e.subTree = p),
              _(h, p, d(h.el), Q(h), e, o, s),
              (t.el = p.el),
              null === f &&
                (function ({ vnode: e, parent: t }, n) {
                  for (; t; ) {
                    const r = t.subTree;
                    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r !== e)) break;
                    (((e = t.vnode).el = n), (t = t.parent));
                  }
                })(e, p.el),
              r && ro(r, o),
              (u = t.props && t.props.onVnodeUpdated) && ro(() => es(u, i, t, c), o));
          } else {
            let a;
            const { el: l, props: i } = t,
              { bm: c, m: u, parent: f, root: p, type: d } = e,
              h = Wn(t);
            (ao(e, !1), c && P(c), !h && (a = i && i.onVnodeBeforeMount) && es(a, f, t), ao(e, !0));
            {
              p.ce && !1 !== p.ce._def.shadowRoot && p.ce._injectChildStyle(d);
              const a = (e.subTree = wo(e));
              (_(null, a, n, r, e, o, s), (t.el = a.el));
            }
            if ((u && ro(u, o), !h && (a = i && i.onVnodeMounted))) {
              const e = t;
              ro(() => es(a, f, e), o);
            }
            ((256 & t.shapeFlag || (f && Wn(f.vnode) && 256 & f.vnode.shapeFlag)) && e.a && ro(e.a, o),
              (e.isMounted = !0),
              (t = n = r = null));
          }
        };
        e.scope.on();
        const i = (e.effect = new re(l));
        e.scope.off();
        const c = (e.update = i.run.bind(i)),
          u = (e.job = i.runIfDirty.bind(i));
        ((u.i = e), (u.id = e.uid), (i.scheduler = () => Jt(u)), ao(e, !0), c());
      },
      U = (e, n, r) => {
        n.component = e;
        const o = e.vnode.props;
        ((e.vnode = n),
          (e.next = null),
          (function (e, t, n, r) {
            const {
                props: o,
                attrs: s,
                vnode: { patchFlag: a },
              } = e,
              l = gt(o),
              [i] = e.propsOptions;
            let c = !1;
            if (!(r || a > 0) || 16 & a) {
              let r;
              zr(e, t, o, s) && (c = !0);
              for (const s in l)
                (t && (u(t, s) || ((r = L(s)) !== s && u(t, r)))) ||
                  (i ? !n || (void 0 === n[s] && void 0 === n[r]) || (o[s] = qr(i, l, s, void 0, e, !0)) : delete o[s]);
              if (s !== l) for (const e in s) (t && u(t, e)) || (delete s[e], (c = !0));
            } else if (8 & a) {
              const n = e.vnode.dynamicProps;
              for (let r = 0; r < n.length; r++) {
                let a = n[r];
                if (xo(e.emitsOptions, a)) continue;
                const f = t[a];
                if (i)
                  if (u(s, a)) f !== s[a] && ((s[a] = f), (c = !0));
                  else {
                    const t = C(a);
                    o[t] = qr(i, l, t, f, e, !1);
                  }
                else f !== s[a] && ((s[a] = f), (c = !0));
              }
            }
            c && Ae(e.attrs, 'set', '');
          })(e, n.props, o, r),
          ((e, n, r) => {
            const { vnode: o, slots: s } = e;
            let a = !0,
              l = t;
            if (32 & o.shapeFlag) {
              const e = n._;
              (e ? (r && 1 === e ? (a = !1) : no(s, n, r)) : ((a = !n.$stable), eo(n, s)), (l = n));
            } else n && (to(e, n), (l = { default: 1 }));
            if (a) for (const t in s) Zr(t) || null != l[t] || delete s[t];
          })(e, n.children, r),
          ve(),
          Xt(e),
          ye());
      },
      B = (e, t, n, r, o, s, a, l, i = !1) => {
        const c = e && e.children,
          u = e ? e.shapeFlag : 0,
          f = t.children,
          { patchFlag: d, shapeFlag: h } = t;
        if (d > 0) {
          if (128 & d) return void G(c, f, n, r, o, s, a, l, i);
          if (256 & d) return void H(c, f, n, r, o, s, a, l, i);
        }
        8 & h
          ? (16 & u && Z(c, o, s), f !== c && p(n, f))
          : 16 & u
            ? 16 & h
              ? G(c, f, n, r, o, s, a, l, i)
              : Z(c, o, s, !0)
            : (8 & u && p(n, ''), 16 & h && A(f, n, r, o, s, a, l, i));
      },
      H = (e, t, r, o, s, a, l, i, c) => {
        t = t || n;
        const u = (e = e || n).length,
          f = t.length,
          p = Math.min(u, f);
        let d;
        for (d = 0; d < p; d++) {
          const n = (t[d] = c ? Zo(t[d]) : Jo(t[d]));
          _(e[d], n, r, null, s, a, l, i, c);
        }
        u > f ? Z(e, s, a, !0, !1, p) : A(t, r, o, s, a, l, i, c, p);
      },
      G = (e, t, r, o, s, a, l, i, c) => {
        let u = 0;
        const f = t.length;
        let p = e.length - 1,
          d = f - 1;
        for (; u <= p && u <= d; ) {
          const n = e[u],
            o = (t[u] = c ? Zo(t[u]) : Jo(t[u]));
          if (!Vo(n, o)) break;
          (_(n, o, r, null, s, a, l, i, c), u++);
        }
        for (; u <= p && u <= d; ) {
          const n = e[p],
            o = (t[d] = c ? Zo(t[d]) : Jo(t[d]));
          if (!Vo(n, o)) break;
          (_(n, o, r, null, s, a, l, i, c), p--, d--);
        }
        if (u > p) {
          if (u <= d) {
            const e = d + 1,
              n = e < f ? t[e].el : o;
            for (; u <= d; ) (_(null, (t[u] = c ? Zo(t[u]) : Jo(t[u])), r, n, s, a, l, i, c), u++);
          }
        } else if (u > d) for (; u <= p; ) (q(e[u], s, a, !0), u++);
        else {
          const h = u,
            m = u,
            g = new Map();
          for (u = m; u <= d; u++) {
            const e = (t[u] = c ? Zo(t[u]) : Jo(t[u]));
            null != e.key && g.set(e.key, u);
          }
          let v,
            y = 0;
          const b = d - m + 1;
          let k = !1,
            x = 0;
          const w = new Array(b);
          for (u = 0; u < b; u++) w[u] = 0;
          for (u = h; u <= p; u++) {
            const n = e[u];
            if (y >= b) {
              q(n, s, a, !0);
              continue;
            }
            let o;
            if (null != n.key) o = g.get(n.key);
            else
              for (v = m; v <= d; v++)
                if (0 === w[v - m] && Vo(n, t[v])) {
                  o = v;
                  break;
                }
            void 0 === o ? q(n, s, a, !0) : ((w[o - m] = u + 1), o >= x ? (x = o) : (k = !0), _(n, t[o], r, null, s, a, l, i, c), y++);
          }
          const E = k
            ? (function (e) {
                const t = e.slice(),
                  n = [0];
                let r, o, s, a, l;
                const i = e.length;
                for (r = 0; r < i; r++) {
                  const i = e[r];
                  if (0 !== i) {
                    if (((o = n[n.length - 1]), e[o] < i)) {
                      ((t[r] = o), n.push(r));
                      continue;
                    }
                    for (s = 0, a = n.length - 1; s < a; ) ((l = (s + a) >> 1), e[n[l]] < i ? (s = l + 1) : (a = l));
                    i < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
                  }
                }
                ((s = n.length), (a = n[s - 1]));
                for (; s-- > 0; ) ((n[s] = a), (a = t[a]));
                return n;
              })(w)
            : n;
          for (v = E.length - 1, u = b - 1; u >= 0; u--) {
            const e = m + u,
              n = t[e],
              p = t[e + 1],
              d = e + 1 < f ? p.el || p.placeholder : o;
            0 === w[u] ? _(null, n, r, d, s, a, l, i, c) : k && (v < 0 || u !== E[v] ? z(n, r, d, 2) : v--);
          }
        }
      },
      z = (e, t, n, r, a = null) => {
        const { el: l, type: i, transition: c, children: u, shapeFlag: f } = e;
        if (6 & f) return void z(e.component.subTree, t, n, r);
        if (128 & f) return void e.suspense.move(t, n, r);
        if (64 & f) return void i.move(e, t, n, ne);
        if (i === Lo) {
          o(l, t, n);
          for (let e = 0; e < u.length; e++) z(u[e], t, n, r);
          return void o(e.anchor, t, n);
        }
        if (i === Io) return void x(e, t, n);
        if (2 !== r && 1 & f && c)
          if (0 === r) (c.beforeEnter(l), o(l, t, n), ro(() => c.enter(l), a));
          else {
            const { leave: r, delayLeave: a, afterLeave: i } = c,
              u = () => {
                e.ctx.isUnmounted ? s(l) : o(l, t, n);
              },
              f = () => {
                (l._isLeaving && l[kn](!0),
                  r(l, () => {
                    (u(), i && i());
                  }));
              };
            a ? a(l, u, f) : f();
          }
        else o(l, t, n);
      },
      q = (e, t, n, r = !1, o = !1) => {
        const { type: s, props: a, ref: l, children: i, dynamicChildren: c, shapeFlag: u, patchFlag: f, dirs: p, cacheIndex: d } = e;
        if ((-2 === f && (o = !1), null != l && (ve(), Dn(l, null, n, e, !0), ye()), null != d && (t.renderCache[d] = void 0), 256 & u))
          return void t.ctx.deactivate(e);
        const h = 1 & u && p,
          m = !Wn(e);
        let g;
        if ((m && (g = a && a.onVnodeBeforeUnmount) && es(g, t, e), 6 & u)) J(e.component, n, r);
        else {
          if (128 & u) return void e.suspense.unmount(n, r);
          (h && ln(e, null, t, 'beforeUnmount'),
            64 & u
              ? e.type.remove(e, t, n, ne, r)
              : c && !c.hasOnce && (s !== Lo || (f > 0 && 64 & f))
                ? Z(c, t, n, !1, !0)
                : ((s === Lo && 384 & f) || (!o && 16 & u)) && Z(i, t, n),
            r && Y(e));
        }
        ((m && (g = a && a.onVnodeUnmounted)) || h) &&
          ro(() => {
            (g && es(g, t, e), h && ln(e, null, t, 'unmounted'));
          }, n);
      },
      Y = (e) => {
        const { type: t, el: n, anchor: r, transition: o } = e;
        if (t === Lo) return void K(n, r);
        if (t === Io) return void E(e);
        const a = () => {
          (s(n), o && !o.persisted && o.afterLeave && o.afterLeave());
        };
        if (1 & e.shapeFlag && o && !o.persisted) {
          const { leave: t, delayLeave: r } = o,
            s = () => t(n, a);
          r ? r(e.el, a, s) : s();
        } else a();
      },
      K = (e, t) => {
        let n;
        for (; e !== t; ) ((n = h(e)), s(e), (e = n));
        s(t);
      },
      J = (e, t, n) => {
        const { bum: r, scope: o, job: s, subTree: a, um: l, m: i, a: c } = e;
        (co(i),
          co(c),
          r && P(r),
          o.stop(),
          s && ((s.flags |= 8), q(a, e, t, n)),
          l && ro(l, t),
          ro(() => {
            e.isUnmounted = !0;
          }, t));
      },
      Z = (e, t, n, r = !1, o = !1, s = 0) => {
        for (let a = s; a < e.length; a++) q(e[a], t, n, r, o);
      },
      Q = (e) => {
        if (6 & e.shapeFlag) return Q(e.component.subTree);
        if (128 & e.shapeFlag) return e.suspense.next();
        const t = h(e.anchor || e.el),
          n = t && t[cn];
        return n ? h(n) : t;
      };
    let ee = !1;
    const te = (e, t, n) => {
        (null == e ? t._vnode && q(t._vnode, null, null, !0) : _(t._vnode || null, e, t, null, null, null, n),
          (t._vnode = e),
          ee || ((ee = !0), Xt(), Qt(), (ee = !1)));
      },
      ne = { p: _, um: q, m: z, r: Y, mt: j, mc: A, pc: B, pbc: N, n: Q, o: e };
    let oe;
    return { render: te, hydrate: oe, createApp: jr(te) };
  })(e);
}
function so({ type: e, props: t }, n) {
  return ('svg' === n && 'foreignObject' === e) ||
    ('mathml' === n && 'annotation-xml' === e && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function ao({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function lo(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (f(r) && f(o))
    for (let s = 0; s < r.length; s++) {
      const e = r[s];
      let t = o[s];
      (1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) && ((t = o[s] = Zo(o[s])), (t.el = e.el)), n || -2 === t.patchFlag || lo(e, t)),
        t.type === To && -1 !== t.patchFlag && (t.el = e.el),
        t.type !== Ao || t.el || (t.el = e.el));
    }
}
function io(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : io(t);
}
function co(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const uo = Symbol.for('v-scx'),
  fo = () => Ur(uo);
function po(e, t) {
  return mo(e, null, t);
}
function ho(e, t, n) {
  return mo(e, t, n);
}
function mo(e, n, o = t) {
  const { immediate: s, deep: a, flush: i, once: c } = o,
    u = l({}, o),
    f = (n && s) || (!n && 'post' !== i);
  let p;
  if (us)
    if ('sync' === i) {
      const e = fo();
      p = e.__watcherHandles || (e.__watcherHandles = []);
    } else if (!f) {
      const e = () => {};
      return ((e.stop = r), (e.resume = r), (e.pause = r), e);
    }
  const d = rs;
  u.call = (e, t, n) => Wt(e, d, t, n);
  let h = !1;
  ('post' === i
    ? (u.scheduler = (e) => {
        ro(e, d && d.suspense);
      })
    : 'sync' !== i &&
      ((h = !0),
      (u.scheduler = (e, t) => {
        t ? e() : Jt(e);
      })),
    (u.augmentJob = (e) => {
      (n && (e.flags |= 4), h && ((e.flags |= 2), d && ((e.id = d.uid), (e.i = d))));
    }));
  const m = Mt(e, n, u);
  return (us && (p ? p.push(m) : f && m()), m);
}
function go(e, t, n) {
  const r = this.proxy,
    o = m(e) ? (e.includes('.') ? _o(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  h(t) ? (s = t) : ((s = t.handler), (n = t));
  const a = ls(this),
    l = mo(o, s.bind(r), n);
  return (a(), l);
}
function _o(e, t) {
  const n = t.split('.');
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
const vo = (e, t) =>
  'modelValue' === t || 'model-value' === t ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${L(t)}Modifiers`];
function yo(e, n, ...r) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || t;
  let s = r;
  const a = n.startsWith('update:'),
    l = a && vo(o, n.slice(7));
  let i;
  l && (l.trim && (s = r.map((e) => (m(e) ? e.trim() : e))), l.number && (s = r.map(N)));
  let c = o[(i = A(n))] || o[(i = A(C(n)))];
  (!c && a && (c = o[(i = A(L(n)))]), c && Wt(c, e, 6, s));
  const u = o[i + 'Once'];
  if (u) {
    if (e.emitted) {
      if (e.emitted[i]) return;
    } else e.emitted = {};
    ((e.emitted[i] = !0), Wt(u, e, 6, s));
  }
}
const bo = new WeakMap();
function ko(e, t, n = !1) {
  const r = n ? bo : t.emitsCache,
    o = r.get(e);
  if (void 0 !== o) return o;
  const s = e.emits;
  let a = {},
    i = !1;
  if (!h(e)) {
    const r = (e) => {
      const n = ko(e, t, !0);
      n && ((i = !0), l(a, n));
    };
    (!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r));
  }
  return s || i ? (f(s) ? s.forEach((e) => (a[e] = null)) : l(a, s), _(e) && r.set(e, a), a) : (_(e) && r.set(e, null), null);
}
function xo(e, t) {
  return !(!e || !s(t)) && ((t = t.slice(2).replace(/Once$/, '')), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, L(t)) || u(e, t));
}
function wo(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: o,
      propsOptions: [s],
      slots: l,
      attrs: i,
      emit: c,
      render: u,
      renderCache: f,
      props: p,
      data: d,
      setupState: h,
      ctx: m,
      inheritAttrs: g,
    } = e,
    _ = on(e);
  let v, y;
  try {
    if (4 & n.shapeFlag) {
      const e = o || r,
        t = e;
      ((v = Jo(u.call(t, e, f, p, h, d, m))), (y = i));
    } else {
      const e = t;
      (0, (v = Jo(e.length > 1 ? e(p, { attrs: i, slots: l, emit: c }) : e(p, null))), (y = t.props ? i : Eo(i)));
    }
  } catch (k) {
    ((Po.length = 0), Vt(k, e, 1), (v = Go(Ao)));
  }
  let b = v;
  if (y && !1 !== g) {
    const e = Object.keys(y),
      { shapeFlag: t } = b;
    e.length && 7 & t && (s && e.some(a) && (y = So(y, s)), (b = qo(b, y, !1, !0)));
  }
  return (
    n.dirs && ((b = qo(b, null, !1, !0)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Fn(b, n.transition),
    (v = b),
    on(_),
    v
  );
}
const Eo = (e) => {
    let t;
    for (const n in e) ('class' === n || 'style' === n || s(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  So = (e, t) => {
    const n = {};
    for (const r in e) (a(r) && r.slice(9) in t) || (n[r] = e[r]);
    return n;
  };
function Co(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !xo(n, s)) return !0;
  }
  return !1;
}
const Oo = (e) => e.__isSuspense;
const Lo = Symbol.for('v-fgt'),
  To = Symbol.for('v-txt'),
  Ao = Symbol.for('v-cmt'),
  Io = Symbol.for('v-stc'),
  Po = [];
let Fo = null;
function No(e = !1) {
  Po.push((Fo = e ? null : []));
}
let Ro = 1;
function $o(e, t = !1) {
  ((Ro += e), e < 0 && Fo && t && (Fo.hasOnce = !0));
}
function Mo(e) {
  return ((e.dynamicChildren = Ro > 0 ? Fo || n : null), Po.pop(), (Fo = Po[Po.length - 1] || null), Ro > 0 && Fo && Fo.push(e), e);
}
function Do(e, t, n, r, o, s) {
  return Mo(Ho(e, t, n, r, o, s, !0));
}
function jo(e, t, n, r, o) {
  return Mo(Go(e, t, n, r, o, !0));
}
function Wo(e) {
  return !!e && !0 === e.__v_isVNode;
}
function Vo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Uo = ({ key: e }) => (null != e ? e : null),
  Bo = ({ ref: e, ref_key: t, ref_for: n }) => (
    'number' == typeof e && (e = '' + e),
    null != e ? (m(e) || bt(e) || h(e) ? { i: nn, r: e, k: t, f: !!n } : e) : null
  );
function Ho(e, t = null, n = null, r = 0, o = null, s = e === Lo ? 0 : 1, a = !1, l = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Uo(t),
    ref: t && Bo(t),
    scopeId: rn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: nn,
  };
  return (
    l ? (Xo(i, n), 128 & s && e.normalize(i)) : n && (i.shapeFlag |= m(n) ? 8 : 16),
    Ro > 0 && !a && Fo && (i.patchFlag > 0 || 6 & s) && 32 !== i.patchFlag && Fo.push(i),
    i
  );
}
const Go = function (e, t = null, n = null, r = 0, o = null, s = !1) {
  (e && e !== ur) || (e = Ao);
  if (Wo(e)) {
    const r = qo(e, t, !0);
    return (n && Xo(r, n), Ro > 0 && !s && Fo && (6 & r.shapeFlag ? (Fo[Fo.indexOf(e)] = r) : Fo.push(r)), (r.patchFlag = -2), r);
  }
  ((a = e), h(a) && '__vccOpts' in a && (e = e.__vccOpts));
  var a;
  if (t) {
    t = zo(t);
    let { class: e, style: n } = t;
    (e && !m(e) && (t.class = U(e)), _(n) && (mt(n) && !f(n) && (n = l({}, n)), (t.style = M(n))));
  }
  const i = m(e) ? 1 : Oo(e) ? 128 : un(e) ? 64 : _(e) ? 4 : h(e) ? 2 : 0;
  return Ho(e, t, n, r, o, i, s, !0);
};
function zo(e) {
  return e ? (mt(e) || Gr(e) ? l({}, e) : e) : null;
}
function qo(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: a, children: l, transition: i } = e,
    c = t ? Qo(o || {}, t) : o,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Uo(c),
      ref: t && t.ref ? (n && s ? (f(s) ? s.concat(Bo(t)) : [s, Bo(t)]) : Bo(t)) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Lo ? (-1 === a ? 16 : 16 | a) : a,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: i,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && qo(e.ssContent),
      ssFallback: e.ssFallback && qo(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (i && r && Fn(u, i.clone(u)), u);
}
function Yo(e = ' ', t = 0) {
  return Go(To, null, e, t);
}
function Ko(e = '', t = !1) {
  return t ? (No(), jo(Ao, null, e)) : Go(Ao, null, e);
}
function Jo(e) {
  return null == e || 'boolean' == typeof e ? Go(Ao) : f(e) ? Go(Lo, null, e.slice()) : Wo(e) ? Zo(e) : Go(To, null, String(e));
}
function Zo(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : qo(e);
}
function Xo(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (null == t) t = null;
  else if (f(t)) n = 16;
  else if ('object' == typeof t) {
    if (65 & r) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), Xo(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const r = t._;
      r || Gr(t) ? 3 === r && nn && (1 === nn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024))) : (t._ctx = nn);
    }
  } else h(t) ? ((t = { default: t, _ctx: nn }), (n = 32)) : ((t = String(t)), 64 & r ? ((n = 16), (t = [Yo(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function Qo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const e in r)
      if ('class' === e) t.class !== r.class && (t.class = U([t.class, r.class]));
      else if ('style' === e) t.style = M([t.style, r.style]);
      else if (s(e)) {
        const n = t[e],
          o = r[e];
        !o || n === o || (f(n) && n.includes(o)) || (t[e] = n ? [].concat(n, o) : o);
      } else '' !== e && (t[e] = r[e]);
  }
  return t;
}
function es(e, t, n, r = null) {
  Wt(e, t, 7, [n, r]);
}
const ts = Mr();
let ns = 0;
let rs = null;
const os = () => rs || nn;
let ss, as;
{
  const e = $(),
    t = (t, n) => {
      let r;
      return (
        (r = e[t]) || (r = e[t] = []),
        r.push(n),
        (e) => {
          r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
        }
      );
    };
  ((ss = t('__VUE_INSTANCE_SETTERS__', (e) => (rs = e))), (as = t('__VUE_SSR_SETTERS__', (e) => (us = e))));
}
const ls = (e) => {
    const t = rs;
    return (
      ss(e),
      e.scope.on(),
      () => {
        (e.scope.off(), ss(t));
      }
    );
  },
  is = () => {
    (rs && rs.scope.off(), ss(null));
  };
function cs(e) {
  return 4 & e.vnode.shapeFlag;
}
let us = !1;
function fs(e, t, n) {
  (h(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : _(t) && (e.setupState = Ot(t)), ps(e));
}
function ps(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || r);
  {
    const t = ls(e);
    ve();
    try {
      Cr(e);
    } finally {
      (ye(), t());
    }
  }
}
const ds = { get: (e, t) => (Te(e, 0, ''), e[t]) };
function hs(e) {
  const t = (t) => {
    e.exposed = t || {};
  };
  return { attrs: new Proxy(e.attrs, ds), slots: e.slots, emit: e.emit, expose: t };
}
function ms(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ot(_t(e.exposed)), {
          get: (t, n) => (n in t ? t[n] : n in br ? br[n](e) : void 0),
          has: (e, t) => t in e || t in br,
        }))
    : e.proxy;
}
function gs(e, t = !0) {
  return h(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
const _s = (e, t) => {
  const n = (function (e, t, n = !1) {
    let r, o;
    return (h(e) ? (r = e) : ((r = e.get), (o = e.set)), new Ft(r, o, n));
  })(e, 0, us);
  return n;
};
function vs(e, t, n) {
  try {
    $o(-1);
    const r = arguments.length;
    return 2 === r
      ? _(t) && !f(t)
        ? Wo(t)
          ? Go(e, null, [t])
          : Go(e, t)
        : Go(e, null, t)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : 3 === r && Wo(n) && (n = [n]), Go(e, t, n));
  } finally {
    $o(1);
  }
}
const ys = '3.5.22';
/**
 * @vue/runtime-dom v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let bs;
const ks = 'undefined' != typeof window && window.trustedTypes;
if (ks)
  try {
    bs = ks.createPolicy('vue', { createHTML: (e) => e });
  } catch (Ep) {}
const xs = bs ? (e) => bs.createHTML(e) : (e) => e,
  ws = 'undefined' != typeof document ? document : null,
  Es = ws && ws.createElement('template'),
  Ss = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o =
        'svg' === t
          ? ws.createElementNS('http://www.w3.org/2000/svg', e)
          : 'mathml' === t
            ? ws.createElementNS('http://www.w3.org/1998/Math/MathML', e)
            : n
              ? ws.createElement(e, { is: n })
              : ws.createElement(e);
      return ('select' === e && r && null != r.multiple && o.setAttribute('multiple', r.multiple), o);
    },
    createText: (e) => ws.createTextNode(e),
    createComment: (e) => ws.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ws.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, o, s) {
      const a = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(!0), n), o !== s && (o = o.nextSibling); );
      else {
        Es.innerHTML = xs('svg' === r ? `<svg>${e}</svg>` : 'mathml' === r ? `<math>${e}</math>` : e);
        const o = Es.content;
        if ('svg' === r || 'mathml' === r) {
          const e = o.firstChild;
          for (; e.firstChild; ) o.appendChild(e.firstChild);
          o.removeChild(e);
        }
        t.insertBefore(o, n);
      }
      return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  },
  Cs = 'transition',
  Os = 'animation',
  Ls = Symbol('_vtc'),
  Ts = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  As = l({}, Sn, Ts),
  Is = ((e) => ((e.displayName = 'Transition'), (e.props = As), e))((e, { slots: t }) => vs(Ln, Ns(e), t)),
  Ps = (e, t = []) => {
    f(e) ? e.forEach((e) => e(...t)) : e && e(...t);
  },
  Fs = (e) => !!e && (f(e) ? e.some((e) => e.length > 1) : e.length > 1);
function Ns(e) {
  const t = {};
  for (const l in e) l in Ts || (t[l] = e[l]);
  if (!1 === e.css) return t;
  const {
      name: n = 'v',
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: a = `${n}-enter-active`,
      enterToClass: i = `${n}-enter-to`,
      appearFromClass: c = s,
      appearActiveClass: u = a,
      appearToClass: f = i,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`,
    } = e,
    m = (function (e) {
      if (null == e) return null;
      if (_(e)) return [Rs(e.enter), Rs(e.leave)];
      {
        const t = Rs(e);
        return [t, t];
      }
    })(o),
    g = m && m[0],
    v = m && m[1],
    {
      onBeforeEnter: y,
      onEnter: b,
      onEnterCancelled: k,
      onLeave: x,
      onLeaveCancelled: w,
      onBeforeAppear: E = y,
      onAppear: S = b,
      onAppearCancelled: C = k,
    } = t,
    O = (e, t, n, r) => {
      ((e._enterCancelled = r), Ms(e, t ? f : i), Ms(e, t ? u : a), n && n());
    },
    L = (e, t) => {
      ((e._isLeaving = !1), Ms(e, p), Ms(e, h), Ms(e, d), t && t());
    },
    T = (e) => (t, n) => {
      const o = e ? S : b,
        a = () => O(t, e, n);
      (Ps(o, [t, a]),
        Ds(() => {
          (Ms(t, e ? c : s), $s(t, e ? f : i), Fs(o) || Ws(t, r, g, a));
        }));
    };
  return l(t, {
    onBeforeEnter(e) {
      (Ps(y, [e]), $s(e, s), $s(e, a));
    },
    onBeforeAppear(e) {
      (Ps(E, [e]), $s(e, c), $s(e, u));
    },
    onEnter: T(!1),
    onAppear: T(!0),
    onLeave(e, t) {
      e._isLeaving = !0;
      const n = () => L(e, t);
      ($s(e, p),
        e._enterCancelled ? ($s(e, d), Hs(e)) : (Hs(e), $s(e, d)),
        Ds(() => {
          e._isLeaving && (Ms(e, p), $s(e, h), Fs(x) || Ws(e, r, v, n));
        }),
        Ps(x, [e, n]));
    },
    onEnterCancelled(e) {
      (O(e, !1, void 0, !0), Ps(k, [e]));
    },
    onAppearCancelled(e) {
      (O(e, !0, void 0, !0), Ps(C, [e]));
    },
    onLeaveCancelled(e) {
      (L(e), Ps(w, [e]));
    },
  });
}
function Rs(e) {
  const t = ((e) => {
    const t = m(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  })(e);
  return t;
}
function $s(e, t) {
  (t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[Ls] || (e[Ls] = new Set())).add(t));
}
function Ms(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
  const n = e[Ls];
  n && (n.delete(t), n.size || (e[Ls] = void 0));
}
function Ds(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let js = 0;
function Ws(e, t, n, r) {
  const o = (e._endId = ++js),
    s = () => {
      o === e._endId && r();
    };
  if (null != n) return setTimeout(s, n);
  const { type: a, timeout: l, propCount: i } = Vs(e, t);
  if (!a) return r();
  const c = a + 'end';
  let u = 0;
  const f = () => {
      (e.removeEventListener(c, p), s());
    },
    p = (t) => {
      t.target === e && ++u >= i && f();
    };
  (setTimeout(() => {
    u < i && f();
  }, l + 1),
    e.addEventListener(c, p));
}
function Vs(e, t) {
  const n = window.getComputedStyle(e),
    r = (e) => (n[e] || '').split(', '),
    o = r(`${Cs}Delay`),
    s = r(`${Cs}Duration`),
    a = Us(o, s),
    l = r(`${Os}Delay`),
    i = r(`${Os}Duration`),
    c = Us(l, i);
  let u = null,
    f = 0,
    p = 0;
  t === Cs
    ? a > 0 && ((u = Cs), (f = a), (p = s.length))
    : t === Os
      ? c > 0 && ((u = Os), (f = c), (p = i.length))
      : ((f = Math.max(a, c)), (u = f > 0 ? (a > c ? Cs : Os) : null), (p = u ? (u === Cs ? s.length : i.length) : 0));
  return { type: u, timeout: f, propCount: p, hasTransform: u === Cs && /\b(?:transform|all)(?:,|$)/.test(r(`${Cs}Property`).toString()) };
}
function Us(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((t, n) => Bs(t) + Bs(e[n])));
}
function Bs(e) {
  return 'auto' === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(',', '.'));
}
function Hs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
const Gs = Symbol('_vod'),
  zs = Symbol('_vsh'),
  qs = {
    name: 'show',
    beforeMount(e, { value: t }, { transition: n }) {
      ((e[Gs] = 'none' === e.style.display ? '' : e.style.display), n && t ? n.beforeEnter(e) : Ys(e, t));
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Ys(e, !0), r.enter(e))
            : r.leave(e, () => {
                Ys(e, !1);
              })
          : Ys(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Ys(e, t);
    },
  };
function Ys(e, t) {
  ((e.style.display = t ? e[Gs] : 'none'), (e[zs] = !t));
}
const Ks = Symbol(''),
  Js = /(?:^|;)\s*display\s*:/;
const Zs = /\s*!important$/;
function Xs(e, t, n) {
  if (f(n)) n.forEach((n) => Xs(e, t, n));
  else if ((null == n && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = (function (e, t) {
      const n = ea[t];
      if (n) return n;
      let r = C(t);
      if ('filter' !== r && r in e) return (ea[t] = r);
      r = T(r);
      for (let o = 0; o < Qs.length; o++) {
        const n = Qs[o] + r;
        if (n in e) return (ea[t] = n);
      }
      return t;
    })(e, t);
    Zs.test(n) ? e.setProperty(L(r), n.replace(Zs, ''), 'important') : (e[r] = n);
  }
}
const Qs = ['Webkit', 'Moz', 'ms'],
  ea = {};
const ta = 'http://www.w3.org/1999/xlink';
function na(e, t, n, r, o, s = H(t)) {
  r && t.startsWith('xlink:')
    ? null == n
      ? e.removeAttributeNS(ta, t.slice(6, t.length))
      : e.setAttributeNS(ta, t, n)
    : null == n || (s && !G(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? '' : g(n) ? String(n) : n);
}
function ra(e, t, n, r, o) {
  if ('innerHTML' === t || 'textContent' === t) return void (null != n && (e[t] = 'innerHTML' === t ? xs(n) : n));
  const s = e.tagName;
  if ('value' === t && 'PROGRESS' !== s && !s.includes('-')) {
    const r = 'OPTION' === s ? e.getAttribute('value') || '' : e.value,
      o = null == n ? ('checkbox' === e.type ? 'on' : '') : String(n);
    return ((r === o && '_value' in e) || (e.value = o), null == n && e.removeAttribute(t), void (e._value = n));
  }
  let a = !1;
  if ('' === n || null == n) {
    const r = typeof e[t];
    'boolean' === r ? (n = G(n)) : null == n && 'string' === r ? ((n = ''), (a = !0)) : 'number' === r && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch (Ep) {}
  a && e.removeAttribute(o || t);
}
function oa(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const sa = Symbol('_vei');
function aa(e, t, n, r, o = null) {
  const s = e[sa] || (e[sa] = {}),
    a = s[t];
  if (r && a) a.value = r;
  else {
    const [n, l] = (function (e) {
      let t;
      if (la.test(e)) {
        let n;
        for (t = {}; (n = e.match(la)); ) ((e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0));
      }
      const n = ':' === e[2] ? e.slice(3) : L(e.slice(2));
      return [n, t];
    })(t);
    if (r) {
      const a = (s[t] = (function (e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return;
          } else e._vts = Date.now();
          Wt(
            (function (e, t) {
              if (f(t)) {
                const n = e.stopImmediatePropagation;
                return (
                  (e.stopImmediatePropagation = () => {
                    (n.call(e), (e._stopped = !0));
                  }),
                  t.map((e) => (t) => !t._stopped && e && e(t))
                );
              }
              return t;
            })(e, n.value),
            t,
            5,
            [e],
          );
        };
        return ((n.value = e), (n.attached = ua()), n);
      })(r, o));
      oa(e, n, a, l);
    } else
      a &&
        (!(function (e, t, n, r) {
          e.removeEventListener(t, n, r);
        })(e, n, a, l),
        (s[t] = void 0));
  }
}
const la = /(?:Once|Passive|Capture)$/;
let ia = 0;
const ca = Promise.resolve(),
  ua = () => ia || (ca.then(() => (ia = 0)), (ia = Date.now()));
const fa = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123;
const pa = new WeakMap(),
  da = new WeakMap(),
  ha = Symbol('_moveCb'),
  ma = Symbol('_enterCb'),
  ga = ((e) => (delete e.props.mode, e))({
    name: 'TransitionGroup',
    props: l({}, As, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = os(),
        r = wn();
      let o, s;
      return (
        tr(() => {
          if (!o.length) return;
          const t = e.moveClass || `${e.name || 'v'}-move`;
          if (
            !(function (e, t, n) {
              const r = e.cloneNode(),
                o = e[Ls];
              o &&
                o.forEach((e) => {
                  e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
                });
              (n.split(/\s+/).forEach((e) => e && r.classList.add(e)), (r.style.display = 'none'));
              const s = 1 === t.nodeType ? t : t.parentNode;
              s.appendChild(r);
              const { hasTransform: a } = Vs(r);
              return (s.removeChild(r), a);
            })(o[0].el, n.vnode.el, t)
          )
            return void (o = []);
          (o.forEach(_a), o.forEach(va));
          const r = o.filter(ya);
          (Hs(n.vnode.el),
            r.forEach((e) => {
              const n = e.el,
                r = n.style;
              ($s(n, t), (r.transform = r.webkitTransform = r.transitionDuration = ''));
              const o = (n[ha] = (e) => {
                (e && e.target !== n) ||
                  (e && !e.propertyName.endsWith('transform')) ||
                  (n.removeEventListener('transitionend', o), (n[ha] = null), Ms(n, t));
              });
              n.addEventListener('transitionend', o);
            }),
            (o = []));
        }),
        () => {
          const a = gt(e),
            l = Ns(a);
          let i = a.tag || Lo;
          if (((o = []), s))
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.el && t.el instanceof Element && (o.push(t), Fn(t, An(t, l, r, n)), pa.set(t, t.el.getBoundingClientRect()));
            }
          s = t.default ? Nn(t.default()) : [];
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            null != t.key && Fn(t, An(t, l, r, n));
          }
          return Go(i, null, s);
        }
      );
    },
  });
function _a(e) {
  const t = e.el;
  (t[ha] && t[ha](), t[ma] && t[ma]());
}
function va(e) {
  da.set(e, e.el.getBoundingClientRect());
}
function ya(e) {
  const t = pa.get(e),
    n = da.get(e),
    r = t.left - n.left,
    o = t.top - n.top;
  if (r || o) {
    const t = e.el.style;
    return ((t.transform = t.webkitTransform = `translate(${r}px,${o}px)`), (t.transitionDuration = '0s'), e);
  }
}
Symbol('_assign');
const ba = ['ctrl', 'shift', 'alt', 'meta'],
  ka = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && 0 !== e.button,
    middle: (e) => 'button' in e && 1 !== e.button,
    right: (e) => 'button' in e && 2 !== e.button,
    exact: (e, t) => ba.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  xa = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join('.');
    return (
      n[r] ||
      (n[r] = (n, ...r) => {
        for (let e = 0; e < t.length; e++) {
          const r = ka[t[e]];
          if (r && r(n, t)) return;
        }
        return e(n, ...r);
      })
    );
  },
  wa = { esc: 'escape', space: ' ', up: 'arrow-up', left: 'arrow-left', right: 'arrow-right', down: 'arrow-down', delete: 'backspace' },
  Ea = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join('.');
    return (
      n[r] ||
      (n[r] = (n) => {
        if (!('key' in n)) return;
        const r = L(n.key);
        return t.some((e) => e === r || wa[e] === r) ? e(n) : void 0;
      })
    );
  },
  Sa = l(
    {
      patchProp: (e, t, n, r, o, l) => {
        const i = 'svg' === o;
        'class' === t
          ? (function (e, t, n) {
              const r = e[Ls];
              (r && (t = (t ? [t, ...r] : [...r]).join(' ')),
                null == t ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t));
            })(e, r, i)
          : 'style' === t
            ? (function (e, t, n) {
                const r = e.style,
                  o = m(n);
                let s = !1;
                if (n && !o) {
                  if (t)
                    if (m(t))
                      for (const e of t.split(';')) {
                        const t = e.slice(0, e.indexOf(':')).trim();
                        null == n[t] && Xs(r, t, '');
                      }
                    else for (const e in t) null == n[e] && Xs(r, e, '');
                  for (const e in n) ('display' === e && (s = !0), Xs(r, e, n[e]));
                } else if (o) {
                  if (t !== n) {
                    const e = r[Ks];
                    (e && (n += ';' + e), (r.cssText = n), (s = Js.test(n)));
                  }
                } else t && e.removeAttribute('style');
                Gs in e && ((e[Gs] = s ? r.display : ''), e[zs] && (r.display = 'none'));
              })(e, n, r)
            : s(t)
              ? a(t) || aa(e, t, 0, r, l)
              : (
                    '.' === t[0]
                      ? ((t = t.slice(1)), 1)
                      : '^' === t[0]
                        ? ((t = t.slice(1)), 0)
                        : (function (e, t, n, r) {
                            if (r) return 'innerHTML' === t || 'textContent' === t || !!(t in e && fa(t) && h(n));
                            if ('spellcheck' === t || 'draggable' === t || 'translate' === t || 'autocorrect' === t) return !1;
                            if ('form' === t) return !1;
                            if ('list' === t && 'INPUT' === e.tagName) return !1;
                            if ('type' === t && 'TEXTAREA' === e.tagName) return !1;
                            if ('width' === t || 'height' === t) {
                              const t = e.tagName;
                              if ('IMG' === t || 'VIDEO' === t || 'CANVAS' === t || 'SOURCE' === t) return !1;
                            }
                            if (fa(t) && m(n)) return !1;
                            return t in e;
                          })(e, t, r, i)
                  )
                ? (ra(e, t, r),
                  e.tagName.includes('-') || ('value' !== t && 'checked' !== t && 'selected' !== t) || na(e, t, r, i, 0, 'value' !== t))
                : !e._isVueCE || (!/[A-Z]/.test(t) && m(r))
                  ? ('true-value' === t ? (e._trueValue = r) : 'false-value' === t && (e._falseValue = r), na(e, t, r, i))
                  : ra(e, C(t), r, 0, t);
      },
    },
    Ss,
  );
let Ca;
function Oa() {
  return Ca || (Ca = oo(Sa));
}
const La = (...e) => {
    Oa().render(...e);
  },
  Ta = (...e) => {
    const t = Oa().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (e) => {
        const r = (function (e) {
          if (m(e)) {
            return document.querySelector(e);
          }
          return e;
        })(e);
        if (!r) return;
        const o = t._component;
        (h(o) || o.render || o.template || (o.template = r.innerHTML), 1 === r.nodeType && (r.textContent = ''));
        const s = n(
          r,
          !1,
          (function (e) {
            if (e instanceof SVGElement) return 'svg';
            if ('function' == typeof MathMLElement && e instanceof MathMLElement) return 'mathml';
          })(r),
        );
        return (r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), s);
      }),
      t
    );
  };
const Aa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const Ia = Aa({}, [
    [
      'render',
      function (e, t) {
        const n = cr('router-view');
        return (No(), jo(n));
      },
    ],
  ]),
  Pa = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        lang: {
          title: 'VUE H5 development template',
          tabbar: { home: 'Home', list: 'List', member: 'Member', demo: 'demo' },
          language: { en: 'English', zh: 'Chinese' },
          introduction: 'A rapid development vue3 of mobile terminal template',
          home: { support: 'support', cssMultiLanguage: 'CSS picture multi-language' },
          list: { details: 'list details' },
          btn: { confirm: 'confirm', cancel: 'cancel' },
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Fa = Object.freeze(Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: 'Module' })),
  Na = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        lang: {
          title: 'VUE H5开发模板',
          tabbar: { home: '首页', list: '列表', member: '我的', demo: '示例' },
          language: { en: '英文', zh: '中文' },
          introduction: '一个快速开发vue3的移动端模板',
          home: { support: '支持', cssMultiLanguage: 'css图片多语言' },
          list: { details: '列表详情' },
          btn: { confirm: '确认', cancel: '取消' },
        },
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
/*!
 * shared v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Ra(e, t) {}
const $a = 'undefined' != typeof window,
  Ma = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Da = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027'),
  ja = (e) => 'number' == typeof e && isFinite(e),
  Wa = (e) => '[object RegExp]' === rl(e),
  Va = (e) => ol(e) && 0 === Object.keys(e).length,
  Ua = Object.assign,
  Ba = Object.create,
  Ha = (e = null) => Ba(e);
let Ga;
const za = () =>
  Ga ||
  (Ga =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : Ha());
function qa(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/\//g, '&#x2F;')
    .replace(/=/g, '&#x3D;');
}
function Ya(e) {
  return e
    .replace(/&(?![a-zA-Z0-9#]{2,6};)/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
const Ka = Object.prototype.hasOwnProperty;
function Ja(e, t) {
  return Ka.call(e, t);
}
const Za = Array.isArray,
  Xa = (e) => 'function' == typeof e,
  Qa = (e) => 'string' == typeof e,
  el = (e) => 'boolean' == typeof e,
  tl = (e) => null !== e && 'object' == typeof e,
  nl = Object.prototype.toString,
  rl = (e) => nl.call(e),
  ol = (e) => '[object Object]' === rl(e);
function sl(e, t = '') {
  return e.reduce((e, n, r) => (0 === r ? e + n : e + t + n), '');
}
const al = (e) => !tl(e) || Za(e);
function ll(e, t) {
  if (al(e) || al(t)) throw new Error('Invalid value');
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: e, des: t } = n.pop();
    Object.keys(e).forEach((r) => {
      '__proto__' !== r &&
        (tl(e[r]) && !tl(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : Ha()),
        al(t[r]) || al(e[r]) ? (t[r] = e[r]) : n.push({ src: e[r], des: t[r] }));
    });
  }
}
/*!
 * message-compiler v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ function il(e, t, n) {
  return { start: e, end: t };
}
const cl = 1,
  ul = 2,
  fl = 3,
  pl = 4,
  dl = 5,
  hl = 6,
  ml = 7,
  gl = 8,
  _l = 9,
  vl = 10,
  yl = 11,
  bl = 12,
  kl = 13,
  xl = 14;
function wl(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n,
    a = new SyntaxError(String(e));
  return ((a.code = e), t && (a.location = t), (a.domain = r), a);
}
function El(e) {
  throw e;
}
const Sl = ' ',
  Cl = '\n',
  Ol = String.fromCharCode(8232),
  Ll = String.fromCharCode(8233);
function Tl(e) {
  const t = e;
  let n = 0,
    r = 1,
    o = 1,
    s = 0;
  const a = (e) => '\r' === t[e] && t[e + 1] === Cl,
    l = (e) => t[e] === Ll,
    i = (e) => t[e] === Ol,
    c = (e) => a(e) || ((e) => t[e] === Cl)(e) || l(e) || i(e),
    u = (e) => (a(e) || l(e) || i(e) ? Cl : t[e]);
  function f() {
    return ((s = 0), c(n) && (r++, (o = 0)), a(n) && n++, n++, o++, t[n]);
  }
  return {
    index: () => n,
    line: () => r,
    column: () => o,
    peekOffset: () => s,
    charAt: u,
    currentChar: () => u(n),
    currentPeek: () => u(n + s),
    next: f,
    peek: function () {
      return (a(n + s) && s++, s++, t[n + s]);
    },
    reset: function () {
      ((n = 0), (r = 1), (o = 1), (s = 0));
    },
    resetPeek: function (e = 0) {
      s = e;
    },
    skipToPeek: function () {
      const e = n + s;
      for (; e !== n; ) f();
      s = 0;
    },
  };
}
const Al = void 0;
function Il(e, t = {}) {
  const n = !1 !== t.location,
    r = Tl(e),
    o = () => r.index(),
    s = () => {
      return ((e = r.line()), (t = r.column()), (n = r.index()), { line: e, column: t, offset: n });
      var e, t, n;
    },
    a = s(),
    l = o(),
    i = {
      currentType: 13,
      offset: l,
      startLoc: a,
      endLoc: a,
      lastType: 13,
      lastOffset: l,
      lastStartLoc: a,
      lastEndLoc: a,
      braceNest: 0,
      inLinked: !1,
      text: '',
    },
    c = () => i,
    { onError: u } = t;
  function f(e, t, r, ...o) {
    const s = c();
    if (((t.column += r), (t.offset += r), u)) {
      const r = wl(e, n ? il(s.startLoc, t) : null, { domain: 'tokenizer', args: o });
      u(r);
    }
  }
  function p(e, t, r) {
    ((e.endLoc = s()), (e.currentType = t));
    const o = { type: t };
    return (n && (o.loc = il(e.startLoc, e.endLoc)), null != r && (o.value = r), o);
  }
  const d = (e) => p(e, 13);
  function h(e, t) {
    return e.currentChar() === t ? (e.next(), t) : (f(cl, s(), 0, t), '');
  }
  function m(e) {
    let t = '';
    for (; e.currentPeek() === Sl || e.currentPeek() === Cl; ) ((t += e.currentPeek()), e.peek());
    return t;
  }
  function g(e) {
    const t = m(e);
    return (e.skipToPeek(), t);
  }
  function _(e) {
    if (e === Al) return !1;
    const t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || 95 === t;
  }
  function v(e, t) {
    const { currentType: n } = t;
    if (2 !== n) return !1;
    m(e);
    const r = (function (e) {
      if (e === Al) return !1;
      const t = e.charCodeAt(0);
      return t >= 48 && t <= 57;
    })('-' === e.currentPeek() ? e.peek() : e.currentPeek());
    return (e.resetPeek(), r);
  }
  function y(e) {
    m(e);
    const t = '|' === e.currentPeek();
    return (e.resetPeek(), t);
  }
  function b(e, t = !0) {
    const n = (t = !1, r = '') => {
        const o = e.currentPeek();
        return '{' === o
          ? t
          : '@' !== o && o
            ? '|' === o
              ? !(r === Sl || r === Cl)
              : o === Sl
                ? (e.peek(), n(!0, Sl))
                : o !== Cl || (e.peek(), n(!0, Cl))
            : t;
      },
      r = n();
    return (t && e.resetPeek(), r);
  }
  function k(e, t) {
    const n = e.currentChar();
    return n === Al ? Al : t(n) ? (e.next(), n) : null;
  }
  function x(e) {
    const t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || (t >= 48 && t <= 57) || 95 === t || 36 === t;
  }
  function w(e) {
    return k(e, x);
  }
  function E(e) {
    const t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || (t >= 48 && t <= 57) || 95 === t || 36 === t || 45 === t;
  }
  function S(e) {
    return k(e, E);
  }
  function C(e) {
    const t = e.charCodeAt(0);
    return t >= 48 && t <= 57;
  }
  function O(e) {
    return k(e, C);
  }
  function L(e) {
    const t = e.charCodeAt(0);
    return (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102);
  }
  function T(e) {
    return k(e, L);
  }
  function A(e) {
    let t = '',
      n = '';
    for (; (t = O(e)); ) n += t;
    return n;
  }
  function I(e) {
    return "'" !== e && e !== Cl;
  }
  function P(e) {
    const t = e.currentChar();
    switch (t) {
      case '\\':
      case "'":
        return (e.next(), `\\${t}`);
      case 'u':
        return F(e, t, 4);
      case 'U':
        return F(e, t, 6);
      default:
        return (f(pl, s(), 0, t), '');
    }
  }
  function F(e, t, n) {
    h(e, t);
    let r = '';
    for (let o = 0; o < n; o++) {
      const n = T(e);
      if (!n) {
        f(dl, s(), 0, `\\${t}${r}${e.currentChar()}`);
        break;
      }
      r += n;
    }
    return `\\${t}${r}`;
  }
  function N(e) {
    return '{' !== e && '}' !== e && e !== Sl && e !== Cl;
  }
  function R(e) {
    g(e);
    let t = '',
      n = '';
    for (; (t = k(e, N)); ) n += t;
    return n;
  }
  function $(e) {
    g(e);
    const t = h(e, '|');
    return (g(e), t);
  }
  function M(e, t) {
    let n = null;
    switch (e.currentChar()) {
      case '{':
        return (t.braceNest >= 1 && f(_l, s(), 0), e.next(), (n = p(t, 2, '{')), g(e), t.braceNest++, n);
      case '}':
        return (
          t.braceNest > 0 && 2 === t.currentType && f(gl, s(), 0),
          e.next(),
          (n = p(t, 3, '}')),
          t.braceNest--,
          t.braceNest > 0 && g(e),
          t.inLinked && 0 === t.braceNest && (t.inLinked = !1),
          n
        );
      case '@':
        return (t.braceNest > 0 && f(ml, s(), 0), (n = D(e, t) || d(t)), (t.braceNest = 0), n);
      default: {
        let r = !0,
          o = !0,
          a = !0;
        if (y(e)) return (t.braceNest > 0 && f(ml, s(), 0), (n = p(t, 1, $(e))), (t.braceNest = 0), (t.inLinked = !1), n);
        if (t.braceNest > 0 && (4 === t.currentType || 5 === t.currentType || 6 === t.currentType))
          return (f(ml, s(), 0), (t.braceNest = 0), j(e, t));
        if (
          (r = (function (e, t) {
            const { currentType: n } = t;
            if (2 !== n) return !1;
            m(e);
            const r = _(e.currentPeek());
            return (e.resetPeek(), r);
          })(e, t))
        )
          return (
            (n = p(
              t,
              4,
              (function (e) {
                g(e);
                let t = '',
                  n = '';
                for (; (t = S(e)); ) n += t;
                const r = e.currentChar();
                if (r && '}' !== r && r !== Al && r !== Sl && r !== Cl && '　' !== r) {
                  const t = R(e);
                  return (f(ul, s(), 0, n + t), n + t);
                }
                return (e.currentChar() === Al && f(ml, s(), 0), n);
              })(e),
            )),
            g(e),
            n
          );
        if ((o = v(e, t)))
          return (
            (n = p(
              t,
              5,
              (function (e) {
                g(e);
                let t = '';
                return ('-' === e.currentChar() ? (e.next(), (t += `-${A(e)}`)) : (t += A(e)), e.currentChar() === Al && f(ml, s(), 0), t);
              })(e),
            )),
            g(e),
            n
          );
        if (
          (a = (function (e, t) {
            const { currentType: n } = t;
            if (2 !== n) return !1;
            m(e);
            const r = "'" === e.currentPeek();
            return (e.resetPeek(), r);
          })(e, t))
        )
          return (
            (n = p(
              t,
              6,
              (function (e) {
                (g(e), h(e, "'"));
                let t = '',
                  n = '';
                for (; (t = k(e, I)); ) n += '\\' === t ? P(e) : t;
                const r = e.currentChar();
                return r === Cl || r === Al ? (f(fl, s(), 0), r === Cl && (e.next(), h(e, "'")), n) : (h(e, "'"), n);
              })(e),
            )),
            g(e),
            n
          );
        if (!r && !o && !a) return ((n = p(t, 12, R(e))), f(ul, s(), 0, n.value), g(e), n);
        break;
      }
    }
    return n;
  }
  function D(e, t) {
    const { currentType: n } = t;
    let r = null;
    const o = e.currentChar();
    switch (((7 !== n && 8 !== n && 11 !== n && 9 !== n) || (o !== Cl && o !== Sl) || f(vl, s(), 0), o)) {
      case '@':
        return (e.next(), (r = p(t, 7, '@')), (t.inLinked = !0), r);
      case '.':
        return (g(e), e.next(), p(t, 8, '.'));
      case ':':
        return (g(e), e.next(), p(t, 9, ':'));
      default:
        return y(e)
          ? ((r = p(t, 1, $(e))), (t.braceNest = 0), (t.inLinked = !1), r)
          : (function (e, t) {
                const { currentType: n } = t;
                if (7 !== n) return !1;
                m(e);
                const r = '.' === e.currentPeek();
                return (e.resetPeek(), r);
              })(e, t) ||
              (function (e, t) {
                const { currentType: n } = t;
                if (7 !== n && 11 !== n) return !1;
                m(e);
                const r = ':' === e.currentPeek();
                return (e.resetPeek(), r);
              })(e, t)
            ? (g(e), D(e, t))
            : (function (e, t) {
                  const { currentType: n } = t;
                  if (8 !== n) return !1;
                  m(e);
                  const r = _(e.currentPeek());
                  return (e.resetPeek(), r);
                })(e, t)
              ? (g(e),
                p(
                  t,
                  11,
                  (function (e) {
                    let t = '',
                      n = '';
                    for (; (t = w(e)); ) n += t;
                    return n;
                  })(e),
                ))
              : (function (e, t) {
                    const { currentType: n } = t;
                    if (9 !== n) return !1;
                    const r = () => {
                        const t = e.currentPeek();
                        return '{' === t
                          ? _(e.peek())
                          : !('@' === t || '|' === t || ':' === t || '.' === t || t === Sl || !t) &&
                              (t === Cl ? (e.peek(), r()) : b(e, !1));
                      },
                      o = r();
                    return (e.resetPeek(), o);
                  })(e, t)
                ? (g(e),
                  '{' === o
                    ? M(e, t) || r
                    : p(
                        t,
                        10,
                        (function (e) {
                          const t = (n) => {
                            const r = e.currentChar();
                            return '{' !== r && '@' !== r && '|' !== r && '(' !== r && ')' !== r && r
                              ? r === Sl
                                ? n
                                : ((n += r), e.next(), t(n))
                              : n;
                          };
                          return t('');
                        })(e),
                      ))
                : (7 === n && f(vl, s(), 0), (t.braceNest = 0), (t.inLinked = !1), j(e, t));
    }
  }
  function j(e, t) {
    let n = { type: 13 };
    if (t.braceNest > 0) return M(e, t) || d(t);
    if (t.inLinked) return D(e, t) || d(t);
    switch (e.currentChar()) {
      case '{':
        return M(e, t) || d(t);
      case '}':
        return (f(hl, s(), 0), e.next(), p(t, 3, '}'));
      case '@':
        return D(e, t) || d(t);
      default:
        if (y(e)) return ((n = p(t, 1, $(e))), (t.braceNest = 0), (t.inLinked = !1), n);
        if (b(e))
          return p(
            t,
            0,
            (function (e) {
              let t = '';
              for (;;) {
                const n = e.currentChar();
                if ('{' === n || '}' === n || '@' === n || '|' === n || !n) break;
                if (n === Sl || n === Cl)
                  if (b(e)) ((t += n), e.next());
                  else {
                    if (y(e)) break;
                    ((t += n), e.next());
                  }
                else ((t += n), e.next());
              }
              return t;
            })(e),
          );
    }
    return n;
  }
  return {
    nextToken: function () {
      const { currentType: e, offset: t, startLoc: n, endLoc: a } = i;
      return (
        (i.lastType = e),
        (i.lastOffset = t),
        (i.lastStartLoc = n),
        (i.lastEndLoc = a),
        (i.offset = o()),
        (i.startLoc = s()),
        r.currentChar() === Al ? p(i, 13) : j(r, i)
      );
    },
    currentOffset: o,
    currentPosition: s,
    context: c,
  };
}
const Pl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Fl(e, t, n) {
  switch (e) {
    case '\\\\':
      return '\\';
    case "\\'":
      return "'";
    default: {
      const e = parseInt(t || n, 16);
      return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : '�';
    }
  }
}
function Nl(e = {}) {
  const t = !1 !== e.location,
    { onError: n } = e;
  function r(e, r, o, s, ...a) {
    const l = e.currentPosition();
    if (((l.offset += s), (l.column += s), n)) {
      const e = wl(r, t ? il(o, l) : null, { domain: 'parser', args: a });
      n(e);
    }
  }
  function o(e, n, r) {
    const o = { type: e };
    return (t && ((o.start = n), (o.end = n), (o.loc = { start: r, end: r })), o);
  }
  function s(e, n, r, o) {
    t && ((e.end = n), e.loc && (e.loc.end = r));
  }
  function a(e, t) {
    const n = e.context(),
      r = o(3, n.offset, n.startLoc);
    return ((r.value = t), s(r, e.currentOffset(), e.currentPosition()), r);
  }
  function l(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: a } = n,
      l = o(5, r, a);
    return ((l.index = parseInt(t, 10)), e.nextToken(), s(l, e.currentOffset(), e.currentPosition()), l);
  }
  function i(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: a } = n,
      l = o(4, r, a);
    return ((l.key = t), e.nextToken(), s(l, e.currentOffset(), e.currentPosition()), l);
  }
  function c(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: a } = n,
      l = o(9, r, a);
    return ((l.value = t.replace(Pl, Fl)), e.nextToken(), s(l, e.currentOffset(), e.currentPosition()), l);
  }
  function u(e) {
    const t = e.context(),
      n = o(6, t.offset, t.startLoc);
    let a = e.nextToken();
    if (8 === a.type) {
      const t = (function (e) {
        const t = e.nextToken(),
          n = e.context(),
          { lastOffset: a, lastStartLoc: l } = n,
          i = o(8, a, l);
        return 11 !== t.type
          ? (r(e, bl, n.lastStartLoc, 0), (i.value = ''), s(i, a, l), { nextConsumeToken: t, node: i })
          : (null == t.value && r(e, xl, n.lastStartLoc, 0, Rl(t)),
            (i.value = t.value || ''),
            s(i, e.currentOffset(), e.currentPosition()),
            { node: i });
      })(e);
      ((n.modifier = t.node), (a = t.nextConsumeToken || e.nextToken()));
    }
    switch ((9 !== a.type && r(e, xl, t.lastStartLoc, 0, Rl(a)), (a = e.nextToken()), 2 === a.type && (a = e.nextToken()), a.type)) {
      case 10:
        (null == a.value && r(e, xl, t.lastStartLoc, 0, Rl(a)),
          (n.key = (function (e, t) {
            const n = e.context(),
              r = o(7, n.offset, n.startLoc);
            return ((r.value = t), s(r, e.currentOffset(), e.currentPosition()), r);
          })(e, a.value || '')));
        break;
      case 4:
        (null == a.value && r(e, xl, t.lastStartLoc, 0, Rl(a)), (n.key = i(e, a.value || '')));
        break;
      case 5:
        (null == a.value && r(e, xl, t.lastStartLoc, 0, Rl(a)), (n.key = l(e, a.value || '')));
        break;
      case 6:
        (null == a.value && r(e, xl, t.lastStartLoc, 0, Rl(a)), (n.key = c(e, a.value || '')));
        break;
      default: {
        r(e, kl, t.lastStartLoc, 0);
        const l = e.context(),
          i = o(7, l.offset, l.startLoc);
        return ((i.value = ''), s(i, l.offset, l.startLoc), (n.key = i), s(n, l.offset, l.startLoc), { nextConsumeToken: a, node: n });
      }
    }
    return (s(n, e.currentOffset(), e.currentPosition()), { node: n });
  }
  function f(e) {
    const t = e.context(),
      n = o(2, 1 === t.currentType ? e.currentOffset() : t.offset, 1 === t.currentType ? t.endLoc : t.startLoc);
    n.items = [];
    let f = null;
    do {
      const o = f || e.nextToken();
      switch (((f = null), o.type)) {
        case 0:
          (null == o.value && r(e, xl, t.lastStartLoc, 0, Rl(o)), n.items.push(a(e, o.value || '')));
          break;
        case 5:
          (null == o.value && r(e, xl, t.lastStartLoc, 0, Rl(o)), n.items.push(l(e, o.value || '')));
          break;
        case 4:
          (null == o.value && r(e, xl, t.lastStartLoc, 0, Rl(o)), n.items.push(i(e, o.value || '')));
          break;
        case 6:
          (null == o.value && r(e, xl, t.lastStartLoc, 0, Rl(o)), n.items.push(c(e, o.value || '')));
          break;
        case 7: {
          const t = u(e);
          (n.items.push(t.node), (f = t.nextConsumeToken || null));
          break;
        }
      }
    } while (13 !== t.currentType && 1 !== t.currentType);
    return (s(n, 1 === t.currentType ? t.lastOffset : e.currentOffset(), 1 === t.currentType ? t.lastEndLoc : e.currentPosition()), n);
  }
  function p(e) {
    const t = e.context(),
      { offset: n, startLoc: a } = t,
      l = f(e);
    return 13 === t.currentType
      ? l
      : (function (e, t, n, a) {
          const l = e.context();
          let i = 0 === a.items.length;
          const c = o(1, t, n);
          ((c.cases = []), c.cases.push(a));
          do {
            const t = f(e);
            (i || (i = 0 === t.items.length), c.cases.push(t));
          } while (13 !== l.currentType);
          return (i && r(e, yl, n, 0), s(c, e.currentOffset(), e.currentPosition()), c);
        })(e, n, a, l);
  }
  return {
    parse: function (n) {
      const a = Il(n, Ua({}, e)),
        l = a.context(),
        i = o(0, l.offset, l.startLoc);
      return (
        t && i.loc && (i.loc.source = n),
        (i.body = p(a)),
        e.onCacheKey && (i.cacheKey = e.onCacheKey(n)),
        13 !== l.currentType && r(a, xl, l.lastStartLoc, 0, n[l.offset] || ''),
        s(i, a.currentOffset(), a.currentPosition()),
        i
      );
    },
  };
}
function Rl(e) {
  if (13 === e.type) return 'EOF';
  const t = (e.value || '').replace(/\r?\n/gu, '\\n');
  return t.length > 10 ? t.slice(0, 9) + '…' : t;
}
function $l(e, t) {
  for (let n = 0; n < e.length; n++) Ml(e[n], t);
}
function Ml(e, t) {
  switch (e.type) {
    case 1:
      ($l(e.cases, t), t.helper('plural'));
      break;
    case 2:
      $l(e.items, t);
      break;
    case 6:
      (Ml(e.key, t), t.helper('linked'), t.helper('type'));
      break;
    case 5:
      (t.helper('interpolate'), t.helper('list'));
      break;
    case 4:
      (t.helper('interpolate'), t.helper('named'));
  }
}
function Dl(e, t = {}) {
  const n = (function (e) {
    const t = { ast: e, helpers: new Set() };
    return { context: () => t, helper: (e) => (t.helpers.add(e), e) };
  })(e);
  (n.helper('normalize'), e.body && Ml(e.body, n));
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function jl(e) {
  if (1 === e.items.length) {
    const t = e.items[0];
    (3 !== t.type && 9 !== t.type) || ((e.static = t.value), delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (3 !== r.type && 9 !== r.type) break;
      if (null == r.value) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = sl(t);
      for (let t = 0; t < e.items.length; t++) {
        const n = e.items[t];
        (3 !== n.type && 9 !== n.type) || delete n.value;
      }
    }
  }
}
function Wl(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      (Wl(t.body), (t.b = t.body), delete t.body);
      break;
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let e = 0; e < n.length; e++) Wl(n[e]);
      ((t.c = n), delete t.cases);
      break;
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let e = 0; e < n.length; e++) Wl(n[e]);
      ((t.i = n), delete t.items, t.static && ((t.s = t.static), delete t.static));
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && ((t.v = t.value), delete t.value);
      break;
    }
    case 6: {
      const t = e;
      (Wl(t.key), (t.k = t.key), delete t.key, t.modifier && (Wl(t.modifier), (t.m = t.modifier), delete t.modifier));
      break;
    }
    case 5: {
      const t = e;
      ((t.i = t.index), delete t.index);
      break;
    }
    case 4: {
      const t = e;
      ((t.k = t.key), delete t.key);
      break;
    }
  }
  delete e.type;
}
function Vl(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      !(function (e, t) {
        t.body ? Vl(e, t.body) : e.push('null');
      })(e, t);
      break;
    case 1:
      !(function (e, t) {
        const { helper: n, needIndent: r } = e;
        if (t.cases.length > 1) {
          (e.push(`${n('plural')}([`), e.indent(r()));
          const o = t.cases.length;
          for (let n = 0; n < o && (Vl(e, t.cases[n]), n !== o - 1); n++) e.push(', ');
          (e.deindent(r()), e.push('])'));
        }
      })(e, t);
      break;
    case 2:
      !(function (e, t) {
        const { helper: n, needIndent: r } = e;
        (e.push(`${n('normalize')}([`), e.indent(r()));
        const o = t.items.length;
        for (let s = 0; s < o && (Vl(e, t.items[s]), s !== o - 1); s++) e.push(', ');
        (e.deindent(r()), e.push('])'));
      })(e, t);
      break;
    case 6:
      !(function (e, t) {
        const { helper: n } = e;
        (e.push(`${n('linked')}(`),
          Vl(e, t.key),
          t.modifier ? (e.push(', '), Vl(e, t.modifier), e.push(', _type')) : e.push(', undefined, _type'),
          e.push(')'));
      })(e, t);
      break;
    case 8:
    case 7:
    case 9:
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n('interpolate')}(${n('list')}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n('interpolate')}(${n('named')}(${JSON.stringify(t.key)}))`, t);
  }
}
function Ul(e, t = {}) {
  const n = Ua({}, t),
    r = !!n.jit,
    o = !!n.minify,
    s = null == n.optimize || n.optimize,
    a = Nl(n).parse(e);
  return r
    ? (s &&
        (function (e) {
          const t = e.body;
          2 === t.type ? jl(t) : t.cases.forEach((e) => jl(e));
        })(a),
      o && Wl(a),
      { ast: a, code: '' })
    : (Dl(a, n),
      ((e, t = {}) => {
        const n = Qa(t.mode) ? t.mode : 'normal',
          r = Qa(t.filename) ? t.filename : 'message.intl';
        t.sourceMap;
        const o = null != t.breakLineCode ? t.breakLineCode : 'arrow' === n ? ';' : '\n',
          s = t.needIndent ? t.needIndent : 'arrow' !== n,
          a = e.helpers || [],
          l = (function (e, t) {
            const { filename: n, breakLineCode: r, needIndent: o } = t,
              s = !1 !== t.location,
              a = { filename: n, code: '', column: 1, line: 1, offset: 0, map: void 0, breakLineCode: r, needIndent: o, indentLevel: 0 };
            function l(e, t) {
              a.code += e;
            }
            function i(e, t = !0) {
              const n = t ? r : '';
              l(o ? n + '  '.repeat(e) : n);
            }
            return (
              s && e.loc && (a.source = e.loc.source),
              {
                context: () => a,
                push: l,
                indent: function (e = !0) {
                  const t = ++a.indentLevel;
                  e && i(t);
                },
                deindent: function (e = !0) {
                  const t = --a.indentLevel;
                  e && i(t);
                },
                newline: function () {
                  i(a.indentLevel);
                },
                helper: (e) => `_${e}`,
                needIndent: () => a.needIndent,
              }
            );
          })(e, { filename: r, breakLineCode: o, needIndent: s });
        (l.push('normal' === n ? 'function __msg__ (ctx) {' : '(ctx) => {'),
          l.indent(s),
          a.length > 0 &&
            (l.push(
              `const { ${sl(
                a.map((e) => `${e}: _${e}`),
                ', ',
              )} } = ctx`,
            ),
            l.newline()),
          l.push('return '),
          Vl(l, e),
          l.deindent(s),
          l.push('}'),
          delete e.helpers);
        const { code: i, map: c } = l.context();
        return { ast: e, code: i, map: c ? c.toJSON() : void 0 };
      })(a, n));
}
/*!
 * core-base v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ function Bl(e) {
  return tl(e) && 0 === Kl(e) && (Ja(e, 'b') || Ja(e, 'body'));
}
const Hl = ['b', 'body'];
const Gl = ['c', 'cases'];
const zl = ['s', 'static'];
const ql = ['i', 'items'];
const Yl = ['t', 'type'];
function Kl(e) {
  return ei(e, Yl);
}
const Jl = ['v', 'value'];
function Zl(e, t) {
  const n = ei(e, Jl);
  if (null != n) return n;
  throw ni(t);
}
const Xl = ['m', 'modifier'];
const Ql = ['k', 'key'];
function ei(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (Ja(e, n) && null != e[n]) return e[n];
  }
  return n;
}
const ti = [...Hl, ...Gl, ...zl, ...ql, ...Ql, ...Xl, ...Jl, ...Yl];
function ni(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ri(e) {
  return (t) =>
    (function (e, t) {
      const n = ((r = t), ei(r, Hl));
      var r;
      if (null == n) throw ni(0);
      if (1 === Kl(n)) {
        const t = (function (e) {
          return ei(e, Gl, []);
        })(n);
        return e.plural(t.reduce((t, n) => [...t, oi(e, n)], []));
      }
      return oi(e, n);
    })(t, e);
}
function oi(e, t) {
  const n = (function (e) {
    return ei(e, zl);
  })(t);
  if (null != n) return 'text' === e.type ? n : e.normalize([n]);
  {
    const n = (function (e) {
      return ei(e, ql, []);
    })(t).reduce((t, n) => [...t, si(e, n)], []);
    return e.normalize(n);
  }
}
function si(e, t) {
  const n = Kl(t);
  switch (n) {
    case 3:
    case 9:
    case 7:
    case 8:
      return Zl(t, n);
    case 4: {
      const r = t;
      if (Ja(r, 'k') && r.k) return e.interpolate(e.named(r.k));
      if (Ja(r, 'key') && r.key) return e.interpolate(e.named(r.key));
      throw ni(n);
    }
    case 5: {
      const r = t;
      if (Ja(r, 'i') && ja(r.i)) return e.interpolate(e.list(r.i));
      if (Ja(r, 'index') && ja(r.index)) return e.interpolate(e.list(r.index));
      throw ni(n);
    }
    case 6: {
      const n = t,
        r = (function (e) {
          return ei(e, Xl);
        })(n),
        o = (function (e) {
          const t = ei(e, Ql);
          if (t) return t;
          throw ni(6);
        })(n);
      return e.linked(si(e, o), r ? si(e, r) : void 0, e.type);
    }
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ai = (e) => e;
let li = Ha();
let ii = null;
const ci = ui('function:translate');
function ui(e) {
  return (t) => ii && ii.emit(e, t);
}
const fi = 17,
  pi = 18,
  di = 19,
  hi = 21,
  mi = 22,
  gi = 23;
function _i(e) {
  return wl(e, null, void 0);
}
function vi(e, t) {
  return null != t.locale ? bi(t.locale) : bi(e.locale);
}
let yi;
function bi(e) {
  if (Qa(e)) return e;
  if (Xa(e)) {
    if (e.resolvedOnce && null != yi) return yi;
    if ('Function' === e.constructor.name) {
      const n = e();
      if (tl((t = n)) && Xa(t.then) && Xa(t.catch)) throw _i(hi);
      return (yi = n);
    }
    throw _i(mi);
  }
  throw _i(gi);
  var t;
}
function ki(e, t, n) {
  return [...new Set([n, ...(Za(t) ? t : tl(t) ? Object.keys(t) : Qa(t) ? [t] : [n])])];
}
function xi(e, t, n) {
  const r = Qa(n) ? n : Pi,
    o = e;
  o.__localeChainCache || (o.__localeChainCache = new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let e = [n];
    for (; Za(e); ) e = wi(s, e, t);
    const a = Za(t) || !ol(t) ? t : t.default ? t.default : null;
    ((e = Qa(a) ? [a] : a), Za(e) && wi(s, e, !1), o.__localeChainCache.set(r, s));
  }
  return s;
}
function wi(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && el(r); o++) {
    const s = t[o];
    Qa(s) && (r = Ei(e, t[o], n));
  }
  return r;
}
function Ei(e, t, n) {
  let r;
  const o = t.split('-');
  do {
    ((r = Si(e, o.join('-'), n)), o.splice(-1, 1));
  } while (o.length && !0 === r);
  return r;
}
function Si(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = '!' !== t[t.length - 1];
    const o = t.replace(/!/g, '');
    (e.push(o), (Za(n) || ol(n)) && n[o] && (r = n[o]));
  }
  return r;
}
const Ci = [];
((Ci[0] = { w: [0], i: [3, 0], '[': [4], o: [7] }),
  (Ci[1] = { w: [1], '.': [2], '[': [4], o: [7] }),
  (Ci[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
  (Ci[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], '.': [2, 1], '[': [4, 1], o: [7, 1] }),
  (Ci[4] = { "'": [5, 0], '"': [6, 0], '[': [4, 2], ']': [1, 3], o: 8, l: [4, 0] }),
  (Ci[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
  (Ci[6] = { '"': [4, 0], o: 8, l: [6, 0] }));
const Oi = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Li(e) {
  if (null == e) return 'o';
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return 'i';
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return 'w';
  }
  return 'i';
}
function Ti(e) {
  const t = e.trim();
  return (
    ('0' !== e.charAt(0) || !isNaN(parseInt(e))) &&
    ((n = t),
    Oi.test(n)
      ? (function (e) {
          const t = e.charCodeAt(0);
          return t !== e.charCodeAt(e.length - 1) || (34 !== t && 39 !== t) ? e : e.slice(1, -1);
        })(t)
      : '*' + t)
  );
  var n;
}
const Ai = new Map();
function Ii(e, t) {
  return tl(e) ? e[t] : null;
}
const Pi = 'en-US',
  Fi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
let Ni, Ri, $i;
let Mi = null;
const Di = () => Mi;
let ji = null;
const Wi = (e) => {
  ji = e;
};
let Vi = 0;
function Ui(e = {}) {
  const t = Xa(e.onWarn) ? e.onWarn : Ra,
    n = Qa(e.version) ? e.version : '11.1.12',
    r = Qa(e.locale) || Xa(e.locale) ? e.locale : Pi,
    o = Xa(r) ? Pi : r,
    s = Za(e.fallbackLocale) || ol(e.fallbackLocale) || Qa(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : o,
    a = ol(e.messages) ? e.messages : Bi(o),
    l = ol(e.datetimeFormats) ? e.datetimeFormats : Bi(o),
    i = ol(e.numberFormats) ? e.numberFormats : Bi(o),
    c = Ua(Ha(), e.modifiers, {
      upper: (e, t) =>
        'text' === t && Qa(e) ? e.toUpperCase() : 'vnode' === t && tl(e) && '__v_isVNode' in e ? e.children.toUpperCase() : e,
      lower: (e, t) =>
        'text' === t && Qa(e) ? e.toLowerCase() : 'vnode' === t && tl(e) && '__v_isVNode' in e ? e.children.toLowerCase() : e,
      capitalize: (e, t) => ('text' === t && Qa(e) ? Fi(e) : 'vnode' === t && tl(e) && '__v_isVNode' in e ? Fi(e.children) : e),
    }),
    u = e.pluralRules || Ha(),
    f = Xa(e.missing) ? e.missing : null,
    p = (!el(e.missingWarn) && !Wa(e.missingWarn)) || e.missingWarn,
    d = (!el(e.fallbackWarn) && !Wa(e.fallbackWarn)) || e.fallbackWarn,
    h = !!e.fallbackFormat,
    m = !!e.unresolving,
    g = Xa(e.postTranslation) ? e.postTranslation : null,
    _ = ol(e.processor) ? e.processor : null,
    v = !el(e.warnHtmlMessage) || e.warnHtmlMessage,
    y = !!e.escapeParameter,
    b = Xa(e.messageCompiler) ? e.messageCompiler : Ni,
    k = Xa(e.messageResolver) ? e.messageResolver : Ri || Ii,
    x = Xa(e.localeFallbacker) ? e.localeFallbacker : $i || ki,
    w = tl(e.fallbackContext) ? e.fallbackContext : void 0,
    E = e,
    S = tl(E.__datetimeFormatters) ? E.__datetimeFormatters : new Map(),
    C = tl(E.__numberFormatters) ? E.__numberFormatters : new Map(),
    O = tl(E.__meta) ? E.__meta : {};
  Vi++;
  const L = {
    version: n,
    cid: Vi,
    locale: r,
    fallbackLocale: s,
    messages: a,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: p,
    fallbackWarn: d,
    fallbackFormat: h,
    unresolving: m,
    postTranslation: g,
    processor: _,
    warnHtmlMessage: v,
    escapeParameter: y,
    messageCompiler: b,
    messageResolver: k,
    localeFallbacker: x,
    fallbackContext: w,
    onWarn: t,
    __meta: O,
  };
  return (
    (L.datetimeFormats = l),
    (L.numberFormats = i),
    (L.__datetimeFormatters = S),
    (L.__numberFormatters = C),
    __INTLIFY_PROD_DEVTOOLS__ &&
      (function (e, t, n) {
        ii && ii.emit('i18n:init', { timestamp: Date.now(), i18n: e, version: t, meta: n });
      })(L, n, O),
    L
  );
}
const Bi = (e) => ({ [e]: Ha() });
function Hi(e, t, n, r, o) {
  const { missing: s, onWarn: a } = e;
  if (null !== s) {
    const r = s(e, n, t, o);
    return Qa(r) ? r : t;
  }
  return t;
}
function Gi(e, t, n) {
  ((e.__localeChainCache = new Map()), e.localeFallbacker(e, n, t));
}
function zi(e, t) {
  return e !== t && e.split('-')[0] === t.split('-')[0];
}
function qi(e, t) {
  const n = t.indexOf(e);
  if (-1 === n) return !1;
  for (let r = n + 1; r < t.length; r++) if (zi(e, t[r])) return !0;
  return !1;
}
function Yi(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e,
    { __datetimeFormatters: l } = e,
    [i, c, u, f] = Ji(...t);
  el(u.missingWarn) ? u.missingWarn : e.missingWarn;
  el(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const p = !!u.part,
    d = vi(e, u),
    h = a(e, o, d);
  if (!Qa(i) || '' === i) return new Intl.DateTimeFormat(d, f).format(c);
  let m,
    g = {},
    _ = null;
  for (let b = 0; b < h.length && ((m = h[b]), (g = n[m] || {}), (_ = g[i]), !ol(_)); b++) Hi(e, i, m, 0, 'datetime format');
  if (!ol(_) || !Qa(m)) return r ? -1 : i;
  let v = `${m}__${i}`;
  Va(f) || (v = `${v}__${JSON.stringify(f)}`);
  let y = l.get(v);
  return (y || ((y = new Intl.DateTimeFormat(m, Ua({}, _, f))), l.set(v, y)), p ? y.formatToParts(c) : y.format(c));
}
const Ki = [
  'localeMatcher',
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName',
  'formatMatcher',
  'hour12',
  'timeZone',
  'dateStyle',
  'timeStyle',
  'calendar',
  'dayPeriod',
  'numberingSystem',
  'hourCycle',
  'fractionalSecondDigits',
];
function Ji(...e) {
  const [t, n, r, o] = e,
    s = Ha();
  let a,
    l = Ha();
  if (Qa(t)) {
    const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!e) throw _i(di);
    const n = e[3] ? (e[3].trim().startsWith('T') ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}`) : e[1].trim();
    a = new Date(n);
    try {
      a.toISOString();
    } catch {
      throw _i(di);
    }
  } else if ('[object Date]' === rl(t)) {
    if (isNaN(t.getTime())) throw _i(pi);
    a = t;
  } else {
    if (!ja(t)) throw _i(fi);
    a = t;
  }
  return (
    Qa(n)
      ? (s.key = n)
      : ol(n) &&
        Object.keys(n).forEach((e) => {
          Ki.includes(e) ? (l[e] = n[e]) : (s[e] = n[e]);
        }),
    Qa(r) ? (s.locale = r) : ol(r) && (l = r),
    ol(o) && (l = o),
    [s.key || '', a, s, l]
  );
}
function Zi(e, t, n) {
  const r = e;
  for (const o in n) {
    const e = `${t}__${o}`;
    r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e);
  }
}
function Xi(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e,
    { __numberFormatters: l } = e,
    [i, c, u, f] = ec(...t);
  el(u.missingWarn) ? u.missingWarn : e.missingWarn;
  el(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const p = !!u.part,
    d = vi(e, u),
    h = a(e, o, d);
  if (!Qa(i) || '' === i) return new Intl.NumberFormat(d, f).format(c);
  let m,
    g = {},
    _ = null;
  for (let b = 0; b < h.length && ((m = h[b]), (g = n[m] || {}), (_ = g[i]), !ol(_)); b++) Hi(e, i, m, 0, 'number format');
  if (!ol(_) || !Qa(m)) return r ? -1 : i;
  let v = `${m}__${i}`;
  Va(f) || (v = `${v}__${JSON.stringify(f)}`);
  let y = l.get(v);
  return (y || ((y = new Intl.NumberFormat(m, Ua({}, _, f))), l.set(v, y)), p ? y.formatToParts(c) : y.format(c));
}
const Qi = [
  'localeMatcher',
  'style',
  'currency',
  'currencyDisplay',
  'currencySign',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'compactDisplay',
  'notation',
  'signDisplay',
  'unit',
  'unitDisplay',
  'roundingMode',
  'roundingPriority',
  'roundingIncrement',
  'trailingZeroDisplay',
];
function ec(...e) {
  const [t, n, r, o] = e,
    s = Ha();
  let a = Ha();
  if (!ja(t)) throw _i(fi);
  const l = t;
  return (
    Qa(n)
      ? (s.key = n)
      : ol(n) &&
        Object.keys(n).forEach((e) => {
          Qi.includes(e) ? (a[e] = n[e]) : (s[e] = n[e]);
        }),
    Qa(r) ? (s.locale = r) : ol(r) && (a = r),
    ol(o) && (a = o),
    [s.key || '', l, s, a]
  );
}
function tc(e, t, n) {
  const r = e;
  for (const o in n) {
    const e = `${t}__${o}`;
    r.__numberFormatters.has(e) && r.__numberFormatters.delete(e);
  }
}
const nc = (e) => e,
  rc = (e) => '',
  oc = (e) => (0 === e.length ? '' : sl(e)),
  sc = (e) => (null == e ? '' : Za(e) || (ol(e) && e.toString === nl) ? JSON.stringify(e, null, 2) : String(e));
function ac(e, t) {
  return ((e = Math.abs(e)), 2 === t ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0);
}
function lc(e = {}) {
  const t = e.locale,
    n = (function (e) {
      const t = ja(e.pluralIndex) ? e.pluralIndex : -1;
      return e.named && (ja(e.named.count) || ja(e.named.n)) ? (ja(e.named.count) ? e.named.count : ja(e.named.n) ? e.named.n : t) : t;
    })(e),
    r = tl(e.pluralRules) && Qa(t) && Xa(e.pluralRules[t]) ? e.pluralRules[t] : ac,
    o = tl(e.pluralRules) && Qa(t) && Xa(e.pluralRules[t]) ? ac : void 0,
    s = e.list || [],
    a = e.named || Ha();
  ja(e.pluralIndex) &&
    (function (e, t) {
      (t.count || (t.count = e), t.n || (t.n = e));
    })(n, a);
  function l(t, n) {
    const r = Xa(e.messages) ? e.messages(t, !!n) : !!tl(e.messages) && e.messages[t];
    return r || (e.parent ? e.parent.message(t) : rc);
  }
  const i = ol(e.processor) && Xa(e.processor.normalize) ? e.processor.normalize : oc,
    c = ol(e.processor) && Xa(e.processor.interpolate) ? e.processor.interpolate : sc,
    u = {
      list: (e) => s[e],
      named: (e) => a[e],
      plural: (e) => e[r(n, e.length, o)],
      linked: (t, ...n) => {
        const [r, o] = n;
        let s = 'text',
          a = '';
        1 === n.length
          ? tl(r)
            ? ((a = r.modifier || a), (s = r.type || s))
            : Qa(r) && (a = r || a)
          : 2 === n.length && (Qa(r) && (a = r || a), Qa(o) && (s = o || s));
        const i = l(t, !0)(u),
          c = 'vnode' === s && Za(i) && a ? i[0] : i;
        return a ? ((f = a), e.modifiers ? e.modifiers[f] : nc)(c, s) : c;
        var f;
      },
      message: l,
      type: ol(e.processor) && Qa(e.processor.type) ? e.processor.type : 'text',
      interpolate: c,
      normalize: i,
      values: Ua(Ha(), s, a),
    };
  return u;
}
const ic = () => '',
  cc = (e) => Xa(e);
function uc(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: a, messages: l } = e,
    [i, c] = dc(...t),
    u = el(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = el(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    p = el(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    d = !!c.resolvedMessage,
    h = Qa(c.default) || el(c.default) ? (el(c.default) ? (s ? i : () => i) : c.default) : n ? (s ? i : () => i) : null,
    m = n || (null != h && (Qa(h) || Xa(h))),
    g = vi(e, c);
  p &&
    (function (e) {
      Za(e.list)
        ? (e.list = e.list.map((e) => (Qa(e) ? qa(e) : e)))
        : tl(e.named) &&
          Object.keys(e.named).forEach((t) => {
            Qa(e.named[t]) && (e.named[t] = qa(e.named[t]));
          });
    })(c);
  let [_, v, y] = d ? [i, g, l[g] || Ha()] : fc(e, i, g, a, f, u),
    b = _,
    k = i;
  if ((d || Qa(b) || Bl(b) || cc(b) || (m && ((b = h), (k = b))), !(d || ((Qa(b) || Bl(b) || cc(b)) && Qa(v))))) return o ? -1 : i;
  let x = !1;
  const w = cc(b)
    ? b
    : pc(e, i, v, b, k, () => {
        x = !0;
      });
  if (x) return b;
  const E = (function (e, t, n, r) {
      const {
          modifiers: o,
          pluralRules: s,
          messageResolver: a,
          fallbackLocale: l,
          fallbackWarn: i,
          missingWarn: c,
          fallbackContext: u,
        } = e,
        f = (r, o) => {
          let s = a(n, r);
          if (null == s && (u || o)) {
            const [, , n] = fc(u || e, r, t, l, i, c);
            s = a(n, r);
          }
          if (Qa(s) || Bl(s)) {
            let n = !1;
            const o = pc(e, r, t, s, r, () => {
              n = !0;
            });
            return n ? ic : o;
          }
          return cc(s) ? s : ic;
        },
        p = { locale: t, modifiers: o, pluralRules: s, messages: f };
      e.processor && (p.processor = e.processor);
      r.list && (p.list = r.list);
      r.named && (p.named = r.named);
      ja(r.plural) && (p.pluralIndex = r.plural);
      return p;
    })(e, v, y, c),
    S = (function (e, t, n) {
      const r = t(n);
      return r;
    })(0, w, lc(E));
  let C = r ? r(S, i) : S;
  var O;
  if (
    (p &&
      Qa(C) &&
      ((O = (O = (O = C).replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${Ya(n)}"`)).replace(
        /(\w+)\s*=\s*'([^']*)'/g,
        (e, t, n) => `${t}='${Ya(n)}'`,
      )),
      /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(O) && (O = O.replace(/(\s+)(on)(\w+\s*=)/gi, '$1&#111;n$3')),
      [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(
        (e) => {
          O = O.replace(e, '$1javascript&#58;');
        },
      ),
      (C = O)),
    __INTLIFY_PROD_DEVTOOLS__)
  ) {
    const t = {
      timestamp: Date.now(),
      key: Qa(i) ? i : cc(b) ? b.key : '',
      locale: v || (cc(b) ? b.locale : ''),
      format: Qa(b) ? b : cc(b) ? b.source : '',
      message: C,
    };
    ((t.meta = Ua({}, e.__meta, Di() || {})), ci(t));
  }
  return C;
}
function fc(e, t, n, r, o, s) {
  const { messages: a, onWarn: l, messageResolver: i, localeFallbacker: c } = e,
    u = c(e, r, n);
  let f,
    p = Ha(),
    d = null;
  for (let h = 0; h < u.length && ((f = u[h]), (p = a[f] || Ha()), null === (d = i(p, t)) && (d = p[t]), !(Qa(d) || Bl(d) || cc(d))); h++)
    if (!qi(f, u)) {
      const n = Hi(e, t, f, 0, 'translate');
      n !== t && (d = n);
    }
  return [d, f, p];
}
function pc(e, t, n, r, o, s) {
  const { messageCompiler: a, warnHtmlMessage: l } = e;
  if (cc(r)) {
    const e = r;
    return ((e.locale = e.locale || n), (e.key = e.key || t), e);
  }
  if (null == a) {
    const e = () => r;
    return ((e.locale = n), (e.key = t), e);
  }
  const i = a(
    r,
    (function (e, t, n, r, o, s) {
      return {
        locale: t,
        key: n,
        warnHtmlMessage: o,
        onError: (e) => {
          throw (s && s(e), e);
        },
        onCacheKey: (e) => ((e, t, n) => Da({ l: e, k: t, s: n }))(t, n, e),
      };
    })(0, n, o, 0, l, s),
  );
  return ((i.locale = n), (i.key = t), (i.source = r), i);
}
function dc(...e) {
  const [t, n, r] = e,
    o = Ha();
  if (!(Qa(t) || ja(t) || cc(t) || Bl(t))) throw _i(fi);
  const s = ja(t) ? String(t) : (cc(t), t);
  return (
    ja(n) ? (o.plural = n) : Qa(n) ? (o.default = n) : ol(n) && !Va(n) ? (o.named = n) : Za(n) && (o.list = n),
    ja(r) ? (o.plural = r) : Qa(r) ? (o.default = r) : ol(r) && Ua(o, r),
    [s, o]
  );
}
('boolean' != typeof __INTLIFY_PROD_DEVTOOLS__ && (za().__INTLIFY_PROD_DEVTOOLS__ = !1),
  'boolean' != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && (za().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1));
const hc = 24,
  mc = 25,
  gc = 26,
  _c = 27,
  vc = 28,
  yc = 29,
  bc = 31,
  kc = 32;
function xc(e, ...t) {
  return wl(e, null, void 0);
}
const wc = Ma('__translateVNode'),
  Ec = Ma('__datetimeParts'),
  Sc = Ma('__numberParts'),
  Cc = Ma('__setPluralRules'),
  Oc = Ma('__injectWithOption'),
  Lc = Ma('__dispose');
function Tc(e) {
  if (!tl(e)) return e;
  if (Bl(e)) return e;
  for (const t in e)
    if (Ja(e, t))
      if (t.includes('.')) {
        const n = t.split('.'),
          r = n.length - 1;
        let o = e,
          s = !1;
        for (let e = 0; e < r; e++) {
          if ('__proto__' === n[e]) throw new Error(`unsafe key: ${n[e]}`);
          if ((n[e] in o || (o[n[e]] = Ha()), !tl(o[n[e]]))) {
            s = !0;
            break;
          }
          o = o[n[e]];
        }
        if ((s || (Bl(o) ? ti.includes(n[r]) || delete e[t] : ((o[n[r]] = e[t]), delete e[t])), !Bl(o))) {
          const e = o[n[r]];
          tl(e) && Tc(e);
        }
      } else tl(e[t]) && Tc(e[t]);
  return e;
}
function Ac(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t,
    a = ol(n) ? n : Za(r) ? Ha() : { [e]: Ha() };
  if (
    (Za(r) &&
      r.forEach((e) => {
        if ('locale' in e && 'resource' in e) {
          const { locale: t, resource: n } = e;
          t ? ((a[t] = a[t] || Ha()), ll(n, a[t])) : ll(n, a);
        } else Qa(e) && ll(JSON.parse(e), a);
      }),
    null == o && s)
  )
    for (const l in a) Ja(a, l) && Tc(a[l]);
  return a;
}
function Ic(e) {
  return e.type;
}
function Pc(e, t, n) {
  let r = tl(t.messages) ? t.messages : Ha();
  '__i18nGlobal' in n && (r = Ac(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const o = Object.keys(r);
  if (
    (o.length &&
      o.forEach((t) => {
        e.mergeLocaleMessage(t, r[t]);
      }),
    tl(t.datetimeFormats))
  ) {
    const n = Object.keys(t.datetimeFormats);
    n.length &&
      n.forEach((n) => {
        e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
      });
  }
  if (tl(t.numberFormats)) {
    const n = Object.keys(t.numberFormats);
    n.length &&
      n.forEach((n) => {
        e.mergeNumberFormat(n, t.numberFormats[n]);
      });
  }
}
function Fc(e) {
  return Go(To, null, e, 0);
}
const Nc = () => [],
  Rc = () => !1;
let $c = 0;
function Mc(e) {
  return (t, n, r, o) => e(n, r, os() || void 0, o);
}
function Dc(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = void 0 === t,
    o = e.flatJson,
    s = $a ? kt : xt;
  let a = !el(e.inheritLocale) || e.inheritLocale;
  const l = s(t && a ? t.locale.value : Qa(e.locale) ? e.locale : Pi),
    i = s(
      t && a
        ? t.fallbackLocale.value
        : Qa(e.fallbackLocale) || Za(e.fallbackLocale) || ol(e.fallbackLocale) || !1 === e.fallbackLocale
          ? e.fallbackLocale
          : l.value,
    ),
    c = s(Ac(l.value, e)),
    u = s(ol(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }),
    f = s(ol(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let p = t ? t.missingWarn : (!el(e.missingWarn) && !Wa(e.missingWarn)) || e.missingWarn,
    d = t ? t.fallbackWarn : (!el(e.fallbackWarn) && !Wa(e.fallbackWarn)) || e.fallbackWarn,
    h = t ? t.fallbackRoot : !el(e.fallbackRoot) || e.fallbackRoot,
    m = !!e.fallbackFormat,
    g = Xa(e.missing) ? e.missing : null,
    _ = Xa(e.missing) ? Mc(e.missing) : null,
    v = Xa(e.postTranslation) ? e.postTranslation : null,
    y = t ? t.warnHtmlMessage : !el(e.warnHtmlMessage) || e.warnHtmlMessage,
    b = !!e.escapeParameter;
  const k = t ? t.modifiers : ol(e.modifiers) ? e.modifiers : {};
  let x,
    w = e.pluralRules || (t && t.pluralRules);
  ((x = (() => {
    r && Wi(null);
    const t = {
      version: '11.1.12',
      locale: l.value,
      fallbackLocale: i.value,
      messages: c.value,
      modifiers: k,
      pluralRules: w,
      missing: null === _ ? void 0 : _,
      missingWarn: p,
      fallbackWarn: d,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: null === v ? void 0 : v,
      warnHtmlMessage: y,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: 'vue' },
    };
    ((t.datetimeFormats = u.value),
      (t.numberFormats = f.value),
      (t.__datetimeFormatters = ol(x) ? x.__datetimeFormatters : void 0),
      (t.__numberFormatters = ol(x) ? x.__numberFormatters : void 0));
    const n = Ui(t);
    return (r && Wi(n), n);
  })()),
    Gi(x, l.value, i.value));
  const E = _s({
      get: () => l.value,
      set: (e) => {
        ((x.locale = e), (l.value = e));
      },
    }),
    S = _s({
      get: () => i.value,
      set: (e) => {
        ((x.fallbackLocale = e), (i.value = e), Gi(x, l.value, e));
      },
    }),
    C = _s(() => c.value),
    O = _s(() => u.value),
    L = _s(() => f.value);
  const T = (e, n, o, s, a, p) => {
    let d;
    (l.value, i.value, c.value, u.value, f.value);
    try {
      (__INTLIFY_PROD_DEVTOOLS__, r || (x.fallbackContext = t ? ji : void 0), (d = e(x)));
    } finally {
      (__INTLIFY_PROD_DEVTOOLS__, r || (x.fallbackContext = void 0));
    }
    if (('translate exists' !== o && ja(d) && -1 === d) || ('translate exists' === o && !d)) {
      const [e, r] = n();
      return t && h ? s(t) : a(e);
    }
    if (p(d)) return d;
    throw xc(hc);
  };
  function A(...e) {
    return T(
      (t) => Reflect.apply(uc, null, [t, ...e]),
      () => dc(...e),
      'translate',
      (t) => Reflect.apply(t.t, t, [...e]),
      (e) => e,
      (e) => Qa(e),
    );
  }
  const I = {
    normalize: function (e) {
      return e.map((e) => (Qa(e) || ja(e) || el(e) ? Fc(String(e)) : e));
    },
    interpolate: (e) => e,
    type: 'vnode',
  };
  function P(e) {
    return c.value[e] || {};
  }
  ($c++,
    t &&
      $a &&
      (ho(t.locale, (e) => {
        a && ((l.value = e), (x.locale = e), Gi(x, l.value, i.value));
      }),
      ho(t.fallbackLocale, (e) => {
        a && ((i.value = e), (x.fallbackLocale = e), Gi(x, l.value, i.value));
      })));
  const F = {
    id: $c,
    locale: E,
    fallbackLocale: S,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(e) {
      ((a = e), e && t && ((l.value = t.locale.value), (i.value = t.fallbackLocale.value), Gi(x, l.value, i.value)));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: C,
    get modifiers() {
      return k;
    },
    get pluralRules() {
      return w || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(e) {
      ((p = e), (x.missingWarn = p));
    },
    get fallbackWarn() {
      return d;
    },
    set fallbackWarn(e) {
      ((d = e), (x.fallbackWarn = d));
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(e) {
      h = e;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(e) {
      ((m = e), (x.fallbackFormat = m));
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(e) {
      ((y = e), (x.warnHtmlMessage = e));
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(e) {
      ((b = e), (x.escapeParameter = e));
    },
    t: A,
    getLocaleMessage: P,
    setLocaleMessage: function (e, t) {
      if (o) {
        const n = { [e]: t };
        for (const e in n) Ja(n, e) && Tc(n[e]);
        t = n[e];
      }
      ((c.value[e] = t), (x.messages = c.value));
    },
    mergeLocaleMessage: function (e, t) {
      c.value[e] = c.value[e] || {};
      const n = { [e]: t };
      if (o) for (const r in n) Ja(n, r) && Tc(n[r]);
      (ll((t = n[e]), c.value[e]), (x.messages = c.value));
    },
    getPostTranslationHandler: function () {
      return Xa(v) ? v : null;
    },
    setPostTranslationHandler: function (e) {
      ((v = e), (x.postTranslation = e));
    },
    getMissingHandler: function () {
      return g;
    },
    setMissingHandler: function (e) {
      (null !== e && (_ = Mc(e)), (g = e), (x.missing = _));
    },
    [Cc]: function (e) {
      ((w = e), (x.pluralRules = w));
    },
  };
  return (
    (F.datetimeFormats = O),
    (F.numberFormats = L),
    (F.rt = function (...e) {
      const [t, n, r] = e;
      if (r && !tl(r)) throw xc(mc);
      return A(t, n, Ua({ resolvedMessage: !0 }, r || {}));
    }),
    (F.te = function (e, t) {
      return T(
        () => {
          if (!e) return !1;
          const n = P(Qa(t) ? t : l.value),
            r = x.messageResolver(n, e);
          return Bl(r) || cc(r) || Qa(r);
        },
        () => [e],
        'translate exists',
        (n) => Reflect.apply(n.te, n, [e, t]),
        Rc,
        (e) => el(e),
      );
    }),
    (F.tm = function (e) {
      const n = (function (e) {
        let t = null;
        const n = xi(x, i.value, l.value);
        for (let r = 0; r < n.length; r++) {
          const o = c.value[n[r]] || {},
            s = x.messageResolver(o, e);
          if (null != s) {
            t = s;
            break;
          }
        }
        return t;
      })(e);
      return null != n ? n : (t && t.tm(e)) || {};
    }),
    (F.d = function (...e) {
      return T(
        (t) => Reflect.apply(Yi, null, [t, ...e]),
        () => Ji(...e),
        'datetime format',
        (t) => Reflect.apply(t.d, t, [...e]),
        () => '',
        (e) => Qa(e) || Za(e),
      );
    }),
    (F.n = function (...e) {
      return T(
        (t) => Reflect.apply(Xi, null, [t, ...e]),
        () => ec(...e),
        'number format',
        (t) => Reflect.apply(t.n, t, [...e]),
        () => '',
        (e) => Qa(e) || Za(e),
      );
    }),
    (F.getDateTimeFormat = function (e) {
      return u.value[e] || {};
    }),
    (F.setDateTimeFormat = function (e, t) {
      ((u.value[e] = t), (x.datetimeFormats = u.value), Zi(x, e, t));
    }),
    (F.mergeDateTimeFormat = function (e, t) {
      ((u.value[e] = Ua(u.value[e] || {}, t)), (x.datetimeFormats = u.value), Zi(x, e, t));
    }),
    (F.getNumberFormat = function (e) {
      return f.value[e] || {};
    }),
    (F.setNumberFormat = function (e, t) {
      ((f.value[e] = t), (x.numberFormats = f.value), tc(x, e, t));
    }),
    (F.mergeNumberFormat = function (e, t) {
      ((f.value[e] = Ua(f.value[e] || {}, t)), (x.numberFormats = f.value), tc(x, e, t));
    }),
    (F[Oc] = n),
    (F[wc] = function (...e) {
      return T(
        (t) => {
          let n;
          const r = t;
          try {
            ((r.processor = I), (n = Reflect.apply(uc, null, [r, ...e])));
          } finally {
            r.processor = null;
          }
          return n;
        },
        () => dc(...e),
        'translate',
        (t) => t[wc](...e),
        (e) => [Fc(e)],
        (e) => Za(e),
      );
    }),
    (F[Ec] = function (...e) {
      return T(
        (t) => Reflect.apply(Yi, null, [t, ...e]),
        () => Ji(...e),
        'datetime format',
        (t) => t[Ec](...e),
        Nc,
        (e) => Qa(e) || Za(e),
      );
    }),
    (F[Sc] = function (...e) {
      return T(
        (t) => Reflect.apply(Xi, null, [t, ...e]),
        () => ec(...e),
        'number format',
        (t) => t[Sc](...e),
        Nc,
        (e) => Qa(e) || Za(e),
      );
    }),
    F
  );
}
function jc(e = {}) {
  const t = Dc(
      (function (e) {
        const t = Qa(e.locale) ? e.locale : Pi,
          n = Qa(e.fallbackLocale) || Za(e.fallbackLocale) || ol(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : t,
          r = Xa(e.missing) ? e.missing : void 0,
          o = (!el(e.silentTranslationWarn) && !Wa(e.silentTranslationWarn)) || !e.silentTranslationWarn,
          s = (!el(e.silentFallbackWarn) && !Wa(e.silentFallbackWarn)) || !e.silentFallbackWarn,
          a = !el(e.fallbackRoot) || e.fallbackRoot,
          l = !!e.formatFallbackMessages,
          i = ol(e.modifiers) ? e.modifiers : {},
          c = e.pluralizationRules,
          u = Xa(e.postTranslation) ? e.postTranslation : void 0,
          f = !Qa(e.warnHtmlInMessage) || 'off' !== e.warnHtmlInMessage,
          p = !!e.escapeParameterHtml,
          d = !el(e.sync) || e.sync;
        let h = e.messages;
        if (ol(e.sharedMessages)) {
          const t = e.sharedMessages;
          h = Object.keys(t).reduce((e, n) => {
            const r = e[n] || (e[n] = {});
            return (Ua(r, t[n]), e);
          }, h || {});
        }
        const { __i18n: m, __root: g, __injectWithOption: _ } = e,
          v = e.datetimeFormats,
          y = e.numberFormats;
        return {
          locale: t,
          fallbackLocale: n,
          messages: h,
          flatJson: e.flatJson,
          datetimeFormats: v,
          numberFormats: y,
          missing: r,
          missingWarn: o,
          fallbackWarn: s,
          fallbackRoot: a,
          fallbackFormat: l,
          modifiers: i,
          pluralRules: c,
          postTranslation: u,
          warnHtmlMessage: f,
          escapeParameter: p,
          messageResolver: e.messageResolver,
          inheritLocale: d,
          __i18n: m,
          __root: g,
          __injectWithOption: _,
        };
      })(e),
    ),
    { __extender: n } = e,
    r = {
      id: t.id,
      get locale() {
        return t.locale.value;
      },
      set locale(e) {
        t.locale.value = e;
      },
      get fallbackLocale() {
        return t.fallbackLocale.value;
      },
      set fallbackLocale(e) {
        t.fallbackLocale.value = e;
      },
      get messages() {
        return t.messages.value;
      },
      get datetimeFormats() {
        return t.datetimeFormats.value;
      },
      get numberFormats() {
        return t.numberFormats.value;
      },
      get availableLocales() {
        return t.availableLocales;
      },
      get missing() {
        return t.getMissingHandler();
      },
      set missing(e) {
        t.setMissingHandler(e);
      },
      get silentTranslationWarn() {
        return el(t.missingWarn) ? !t.missingWarn : t.missingWarn;
      },
      set silentTranslationWarn(e) {
        t.missingWarn = el(e) ? !e : e;
      },
      get silentFallbackWarn() {
        return el(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
      },
      set silentFallbackWarn(e) {
        t.fallbackWarn = el(e) ? !e : e;
      },
      get modifiers() {
        return t.modifiers;
      },
      get formatFallbackMessages() {
        return t.fallbackFormat;
      },
      set formatFallbackMessages(e) {
        t.fallbackFormat = e;
      },
      get postTranslation() {
        return t.getPostTranslationHandler();
      },
      set postTranslation(e) {
        t.setPostTranslationHandler(e);
      },
      get sync() {
        return t.inheritLocale;
      },
      set sync(e) {
        t.inheritLocale = e;
      },
      get warnHtmlInMessage() {
        return t.warnHtmlMessage ? 'warn' : 'off';
      },
      set warnHtmlInMessage(e) {
        t.warnHtmlMessage = 'off' !== e;
      },
      get escapeParameterHtml() {
        return t.escapeParameter;
      },
      set escapeParameterHtml(e) {
        t.escapeParameter = e;
      },
      get pluralizationRules() {
        return t.pluralRules || {};
      },
      __composer: t,
      t: (...e) => Reflect.apply(t.t, t, [...e]),
      rt: (...e) => Reflect.apply(t.rt, t, [...e]),
      te: (e, n) => t.te(e, n),
      tm: (e) => t.tm(e),
      getLocaleMessage: (e) => t.getLocaleMessage(e),
      setLocaleMessage(e, n) {
        t.setLocaleMessage(e, n);
      },
      mergeLocaleMessage(e, n) {
        t.mergeLocaleMessage(e, n);
      },
      d: (...e) => Reflect.apply(t.d, t, [...e]),
      getDateTimeFormat: (e) => t.getDateTimeFormat(e),
      setDateTimeFormat(e, n) {
        t.setDateTimeFormat(e, n);
      },
      mergeDateTimeFormat(e, n) {
        t.mergeDateTimeFormat(e, n);
      },
      n: (...e) => Reflect.apply(t.n, t, [...e]),
      getNumberFormat: (e) => t.getNumberFormat(e),
      setNumberFormat(e, n) {
        t.setNumberFormat(e, n);
      },
      mergeNumberFormat(e, n) {
        t.mergeNumberFormat(e, n);
      },
    };
  return ((r.__extender = n), r);
}
function Wc(e, t) {
  ((e.locale = t.locale || e.locale),
    (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
    (e.missing = t.missing || e.missing),
    (e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn),
    (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
    (e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages),
    (e.postTranslation = t.postTranslation || e.postTranslation),
    (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
    (e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
    (e.sync = t.sync || e.sync),
    e.__composer[Cc](t.pluralizationRules || e.pluralizationRules));
  const n = Ac(e.locale, { messages: t.messages, __i18n: t.__i18n });
  return (
    Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])),
    t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])),
    t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])),
    e
  );
}
const Vc = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: { type: String, validator: (e) => 'parent' === e || 'global' === e, default: 'parent' },
  i18n: { type: Object },
};
function Uc() {
  return Lo;
}
const Bc = Rn({
  name: 'i18n-t',
  props: Ua({ keypath: { type: String, required: !0 }, plural: { type: [Number, String], validator: (e) => ja(e) || !isNaN(e) } }, Vc),
  setup(e, t) {
    const { slots: n, attrs: r } = t,
      o = e.i18n || Jc({ useScope: e.scope, __useComponent: !0 });
    return () => {
      const s = Object.keys(n).filter((e) => '_' !== e[0]),
        a = Ha();
      (e.locale && (a.locale = e.locale), void 0 !== e.plural && (a.plural = Qa(e.plural) ? +e.plural : e.plural));
      const l = (function ({ slots: e }, t) {
          if (1 === t.length && 'default' === t[0])
            return (e.default ? e.default() : []).reduce((e, t) => [...e, ...(t.type === Lo ? t.children : [t])], []);
          return t.reduce((t, n) => {
            const r = e[n];
            return (r && (t[n] = r()), t);
          }, Ha());
        })(t, s),
        i = o[wc](e.keypath, l, a),
        c = Ua(Ha(), r);
      return vs(Qa(e.tag) || tl(e.tag) ? e.tag : Uc(), c, i);
    };
  },
});
function Hc(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const t = { part: !0 };
    let a = Ha();
    (e.locale && (t.locale = e.locale),
      Qa(e.format)
        ? (t.key = e.format)
        : tl(e.format) &&
          (Qa(e.format.key) && (t.key = e.format.key),
          (a = Object.keys(e.format).reduce((t, r) => (n.includes(r) ? Ua(Ha(), t, { [r]: e.format[r] }) : t), Ha()))));
    const l = r(e.value, t, a);
    let i = [t.key];
    Za(l)
      ? (i = l.map((e, t) => {
          const n = o[e.type],
            r = n ? n({ [e.type]: e.value, index: t, parts: l }) : [e.value];
          var s;
          return (Za((s = r)) && !Qa(s[0]) && (r[0].key = `${e.type}-${t}`), r);
        }))
      : Qa(l) && (i = [l]);
    const c = Ua(Ha(), s);
    return vs(Qa(e.tag) || tl(e.tag) ? e.tag : Uc(), c, i);
  };
}
const Gc = Rn({
  name: 'i18n-n',
  props: Ua({ value: { type: Number, required: !0 }, format: { type: [String, Object] } }, Vc),
  setup(e, t) {
    const n = e.i18n || Jc({ useScope: e.scope, __useComponent: !0 });
    return Hc(e, t, Qi, (...e) => n[Sc](...e));
  },
});
function zc(e) {
  if (Qa(e)) return { path: e };
  if (ol(e)) {
    if (!('path' in e)) throw xc(vc);
    return e;
  }
  throw xc(yc);
}
function qc(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e,
    a = {},
    l = r || {};
  return (Qa(n) && (a.locale = n), ja(o) && (a.plural = o), ja(s) && (a.plural = s), [t, l, a]);
}
function Yc(e, t, ...n) {
  const r = ol(n[0]) ? n[0] : {};
  ((!el(r.globalInstall) || r.globalInstall) &&
    ([Bc.name, 'I18nT'].forEach((t) => e.component(t, Bc)),
    [Gc.name, 'I18nN'].forEach((t) => e.component(t, Gc)),
    [Qc.name, 'I18nD'].forEach((t) => e.component(t, Qc))),
    e.directive(
      't',
      (function (e) {
        const t = (t) => {
          const { instance: n, value: r } = t;
          if (!n || !n.$) throw xc(kc);
          const o = (function (e, t) {
              const n = e;
              if ('composition' === e.mode) return n.__getInstance(t) || e.global;
              {
                const r = n.__getInstance(t);
                return null != r ? r.__composer : e.global.__composer;
              }
            })(e, n.$),
            s = zc(r);
          return [Reflect.apply(o.t, o, [...qc(s)]), o];
        };
        return {
          created: (n, r) => {
            const [o, s] = t(r);
            ($a &&
              e.global === s &&
              (n.__i18nWatcher = ho(s.locale, () => {
                r.instance && r.instance.$forceUpdate();
              })),
              (n.__composer = s),
              (n.textContent = o));
          },
          unmounted: (e) => {
            ($a && e.__i18nWatcher && (e.__i18nWatcher(), (e.__i18nWatcher = void 0), delete e.__i18nWatcher),
              e.__composer && ((e.__composer = void 0), delete e.__composer));
          },
          beforeUpdate: (e, { value: t }) => {
            if (e.__composer) {
              const n = e.__composer,
                r = zc(t);
              e.textContent = Reflect.apply(n.t, n, [...qc(r)]);
            }
          },
          getSSRProps: (e) => {
            const [n] = t(e);
            return { textContent: n };
          },
        };
      })(t),
    ));
}
const Kc = Ma('global-vue-i18n');
function Jc(e = {}) {
  const t = os();
  if (null == t) throw xc(gc);
  if (!t.isCE && null != t.appContext.app && !t.appContext.app.__VUE_I18N_SYMBOL__) throw xc(_c);
  const n = (function (e) {
      const t = Ur(e.isCE ? Kc : e.appContext.app.__VUE_I18N_SYMBOL__);
      if (!t) throw xc(e.isCE ? bc : kc);
      return t;
    })(t),
    r = (function (e) {
      return 'composition' === e.mode ? e.global : e.global.__composer;
    })(n),
    o = Ic(t),
    s = (function (e, t) {
      return Va(e) ? ('__i18n' in t ? 'local' : 'global') : e.useScope ? e.useScope : 'local';
    })(e, o);
  if ('global' === s) return (Pc(r, e, o), r);
  if ('parent' === s) {
    let o = (function (e, t, n = !1) {
      let r = null;
      const o = t.root;
      let s = (function (e, t = !1) {
        if (null == e) return null;
        return (t && e.vnode.ctx) || e.parent;
      })(t, n);
      for (; null != s; ) {
        const t = e;
        if ('composition' === e.mode) r = t.__getInstance(s);
        else if (__VUE_I18N_LEGACY_API__) {
          const e = t.__getInstance(s);
          null != e && ((r = e.__composer), n && r && !r[Oc] && (r = null));
        }
        if (null != r) break;
        if (o === s) break;
        s = s.parent;
      }
      return r;
    })(n, t, e.__useComponent);
    return (null == o && (o = r), o);
  }
  const a = n;
  let l = a.__getInstance(t);
  if (null == l) {
    const n = Ua({}, e);
    ('__i18n' in o && (n.__i18n = o.__i18n),
      r && (n.__root = r),
      (l = Dc(n)),
      a.__composerExtend && (l[Lc] = a.__composerExtend(l)),
      (function (e, t, n) {
        (Qn(() => {}, t),
          rr(() => {
            const r = n;
            e.__deleteInstance(t);
            const o = r[Lc];
            o && (o(), delete r[Lc]);
          }, t));
      })(a, t, l),
      a.__setInstance(t, l));
  }
  return l;
}
const Zc = ['locale', 'fallbackLocale', 'availableLocales'],
  Xc = ['t', 'rt', 'd', 'n', 'tm', 'te'];
const Qc = Rn({
  name: 'i18n-d',
  props: Ua({ value: { type: [Number, Date], required: !0 }, format: { type: [String, Object] } }, Vc),
  setup(e, t) {
    const n = e.i18n || Jc({ useScope: e.scope, __useComponent: !0 });
    return Hc(e, t, Ki, (...e) => n[Ec](...e));
  },
});
var eu;
if (
  ('boolean' != typeof __VUE_I18N_FULL_INSTALL__ && (za().__VUE_I18N_FULL_INSTALL__ = !0),
  'boolean' != typeof __VUE_I18N_LEGACY_API__ && (za().__VUE_I18N_LEGACY_API__ = !0),
  'boolean' != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && (za().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
  'boolean' != typeof __INTLIFY_PROD_DEVTOOLS__ && (za().__INTLIFY_PROD_DEVTOOLS__ = !1),
  (Ni = function (e, t) {
    if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Qa(e)) {
      !el(t.warnHtmlMessage) || t.warnHtmlMessage;
      const n = (t.onCacheKey || ai)(e),
        r = li[n];
      if (r) return r;
      const { ast: o, detectError: s } = (function (e, t = {}) {
          let n = !1;
          const r = t.onError || El;
          return (
            (t.onError = (e) => {
              ((n = !0), r(e));
            }),
            { ...Ul(e, t), detectError: n }
          );
        })(e, { ...t, location: !1, jit: !0 }),
        a = ri(o);
      return s ? a : (li[n] = a);
    }
    {
      const t = e.cacheKey;
      if (t) {
        const n = li[t];
        return n || (li[t] = ri(e));
      }
      return ri(e);
    }
  }),
  (Ri = function (e, t) {
    if (!tl(e)) return null;
    let n = Ai.get(t);
    if (
      (n ||
        ((n = (function (e) {
          const t = [];
          let n,
            r,
            o,
            s,
            a,
            l,
            i,
            c = -1,
            u = 0,
            f = 0;
          const p = [];
          function d() {
            const t = e[c + 1];
            if ((5 === u && "'" === t) || (6 === u && '"' === t)) return (c++, (o = '\\' + t), p[0](), !0);
          }
          for (
            p[0] = () => {
              void 0 === r ? (r = o) : (r += o);
            },
              p[1] = () => {
                void 0 !== r && (t.push(r), (r = void 0));
              },
              p[2] = () => {
                (p[0](), f++);
              },
              p[3] = () => {
                if (f > 0) (f--, (u = 4), p[0]());
                else {
                  if (((f = 0), void 0 === r)) return !1;
                  if (((r = Ti(r)), !1 === r)) return !1;
                  p[1]();
                }
              };
            null !== u;

          )
            if ((c++, (n = e[c]), '\\' !== n || !d())) {
              if (((s = Li(n)), (i = Ci[u]), (a = i[s] || i.l || 8), 8 === a)) return;
              if (((u = a[0]), void 0 !== a[1] && ((l = p[a[1]]), l && ((o = n), !1 === l())))) return;
              if (7 === u) return t;
            }
        })(t)),
        n && Ai.set(t, n)),
      !n)
    )
      return null;
    const r = n.length;
    let o = e,
      s = 0;
    for (; s < r; ) {
      const e = n[s];
      if (ti.includes(e) && Bl(o)) return null;
      const t = o[e];
      if (void 0 === t) return null;
      if (Xa(o)) return null;
      ((o = t), s++);
    }
    return o;
  }),
  ($i = xi),
  __INTLIFY_PROD_DEVTOOLS__)
) {
  const e = za();
  ((e.__INTLIFY__ = !0), (eu = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__), (ii = eu));
}
const tu = (function (e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && el(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
    n = !el(e.globalInjection) || e.globalInjection,
    r = new Map(),
    [o, s] = (function (e, t) {
      const n = Q(),
        r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => jc(e)) : n.run(() => Dc(e));
      if (null == r) throw xc(kc);
      return [n, r];
    })(e, t),
    a = Ma(''),
    l = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && t ? 'legacy' : 'composition';
      },
      async install(e, ...r) {
        if (((e.__VUE_I18N_SYMBOL__ = a), e.provide(e.__VUE_I18N_SYMBOL__, l), ol(r[0]))) {
          const e = r[0];
          ((l.__composerExtend = e.__composerExtend), (l.__vueI18nExtend = e.__vueI18nExtend));
        }
        let o = null;
        (!t &&
          n &&
          (o = (function (e, t) {
            const n = Object.create(null);
            (Zc.forEach((e) => {
              const r = Object.getOwnPropertyDescriptor(t, e);
              if (!r) throw xc(kc);
              const o = bt(r.value)
                ? {
                    get: () => r.value.value,
                    set(e) {
                      r.value.value = e;
                    },
                  }
                : { get: () => r.get && r.get() };
              Object.defineProperty(n, e, o);
            }),
              (e.config.globalProperties.$i18n = n),
              Xc.forEach((n) => {
                const r = Object.getOwnPropertyDescriptor(t, n);
                if (!r || !r.value) throw xc(kc);
                Object.defineProperty(e.config.globalProperties, `$${n}`, r);
              }));
            const r = () => {
              (delete e.config.globalProperties.$i18n,
                Xc.forEach((t) => {
                  delete e.config.globalProperties[`$${t}`];
                }));
            };
            return r;
          })(e, l.global)),
          __VUE_I18N_FULL_INSTALL__ && Yc(e, l, ...r),
          __VUE_I18N_LEGACY_API__ &&
            t &&
            e.mixin(
              (function (e, t, n) {
                return {
                  beforeCreate() {
                    const r = os();
                    if (!r) throw xc(kc);
                    const o = this.$options;
                    if (o.i18n) {
                      const r = o.i18n;
                      if ((o.__i18n && (r.__i18n = o.__i18n), (r.__root = t), this === this.$root)) this.$i18n = Wc(e, r);
                      else {
                        ((r.__injectWithOption = !0), (r.__extender = n.__vueI18nExtend), (this.$i18n = jc(r)));
                        const e = this.$i18n;
                        e.__extender && (e.__disposer = e.__extender(this.$i18n));
                      }
                    } else if (o.__i18n)
                      if (this === this.$root) this.$i18n = Wc(e, o);
                      else {
                        this.$i18n = jc({ __i18n: o.__i18n, __injectWithOption: !0, __extender: n.__vueI18nExtend, __root: t });
                        const e = this.$i18n;
                        e.__extender && (e.__disposer = e.__extender(this.$i18n));
                      }
                    else this.$i18n = e;
                    (o.__i18nGlobal && Pc(t, o, o),
                      (this.$t = (...e) => this.$i18n.t(...e)),
                      (this.$rt = (...e) => this.$i18n.rt(...e)),
                      (this.$te = (e, t) => this.$i18n.te(e, t)),
                      (this.$d = (...e) => this.$i18n.d(...e)),
                      (this.$n = (...e) => this.$i18n.n(...e)),
                      (this.$tm = (e) => this.$i18n.tm(e)),
                      n.__setInstance(r, this.$i18n));
                  },
                  mounted() {},
                  unmounted() {
                    const e = os();
                    if (!e) throw xc(kc);
                    const t = this.$i18n;
                    (delete this.$t,
                      delete this.$rt,
                      delete this.$te,
                      delete this.$d,
                      delete this.$n,
                      delete this.$tm,
                      t.__disposer && (t.__disposer(), delete t.__disposer, delete t.__extender),
                      n.__deleteInstance(e),
                      delete this.$i18n);
                  },
                };
              })(s, s.__composer, l),
            ));
        const i = e.unmount;
        e.unmount = () => {
          (o && o(), l.dispose(), i());
        };
      },
      get global() {
        return s;
      },
      dispose() {
        o.stop();
      },
      __instances: r,
      __getInstance: function (e) {
        return r.get(e) || null;
      },
      __setInstance: function (e, t) {
        r.set(e, t);
      },
      __deleteInstance: function (e) {
        r.delete(e);
      },
    };
  return l;
})({
  legacy: !1,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages: (function () {
    const e = Object.assign({ './lang/en-us.ts': Pa, './lang/lang-base.ts': Fa, './lang/zh-cn.ts': Na }),
      t = {};
    for (const n in e) {
      t[n.replace(/(\.\/lang\/|\.ts)/g, '')] = e[n].lang;
    }
    return t;
  })(),
});
function nu(e) {
  (e && localStorage.setItem('lang', e), (tu.global.locale.value = e || localStorage.getItem('lang') || ''));
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const ru = 'undefined' != typeof document;
function ou(e) {
  return 'object' == typeof e || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
const su = Object.assign;
function au(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = iu(o) ? o.map(e) : e(o);
  }
  return n;
}
const lu = () => {},
  iu = Array.isArray;
function cu(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const uu = /#/g,
  fu = /&/g,
  pu = /\//g,
  du = /=/g,
  hu = /\?/g,
  mu = /\+/g,
  gu = /%5B/g,
  _u = /%5D/g,
  vu = /%5E/g,
  yu = /%60/g,
  bu = /%7B/g,
  ku = /%7C/g,
  xu = /%7D/g,
  wu = /%20/g;
function Eu(e) {
  return null == e
    ? ''
    : encodeURI('' + e)
        .replace(ku, '|')
        .replace(gu, '[')
        .replace(_u, ']');
}
function Su(e) {
  return Eu(e)
    .replace(mu, '%2B')
    .replace(wu, '+')
    .replace(uu, '%23')
    .replace(fu, '%26')
    .replace(yu, '`')
    .replace(bu, '{')
    .replace(xu, '}')
    .replace(vu, '^');
}
function Cu(e) {
  return Su(e).replace(du, '%3D');
}
function Ou(e) {
  return (function (e) {
    return Eu(e).replace(uu, '%23').replace(hu, '%3F');
  })(e).replace(pu, '%2F');
}
function Lu(e) {
  if (null == e) return null;
  try {
    return decodeURIComponent('' + e);
  } catch (t) {}
  return '' + e;
}
const Tu = /\/$/;
function Au(e, t, n = '/') {
  let r,
    o = {},
    s = '',
    a = '';
  const l = t.indexOf('#');
  let i = t.indexOf('?');
  return (
    (i = l >= 0 && i > l ? -1 : i),
    i >= 0 && ((r = t.slice(0, i)), (s = t.slice(i, l > 0 ? l : t.length)), (o = e(s.slice(1)))),
    l >= 0 && ((r = r || t.slice(0, l)), (a = t.slice(l, t.length))),
    (r = (function (e, t) {
      if (e.startsWith('/')) return e;
      if (!e) return t;
      const n = t.split('/'),
        r = e.split('/'),
        o = r[r.length - 1];
      ('..' !== o && '.' !== o) || r.push('');
      let s,
        a,
        l = n.length - 1;
      for (s = 0; s < r.length; s++)
        if (((a = r[s]), '.' !== a)) {
          if ('..' !== a) break;
          l > 1 && l--;
        }
      return n.slice(0, l).join('/') + '/' + r.slice(s).join('/');
    })(null != r ? r : t, n)),
    { fullPath: r + s + a, path: r, query: o, hash: Lu(a) }
  );
}
function Iu(e, t) {
  return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || '/' : e;
}
function Pu(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Fu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Nu(e[n], t[n])) return !1;
  return !0;
}
function Nu(e, t) {
  return iu(e) ? Ru(e, t) : iu(t) ? Ru(t, e) : e === t;
}
function Ru(e, t) {
  return iu(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : 1 === e.length && e[0] === t;
}
const $u = { path: '/', name: void 0, params: {}, query: {}, hash: '', fullPath: '/', matched: [], meta: {}, redirectedFrom: void 0 };
let Mu = (function (e) {
    return ((e.pop = 'pop'), (e.push = 'push'), e);
  })({}),
  Du = (function (e) {
    return ((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''), e);
  })({});
function ju(e) {
  if (!e)
    if (ru) {
      const t = document.querySelector('base');
      e = (e = (t && t.getAttribute('href')) || '/').replace(/^\w+:\/\/[^\/]+/, '');
    } else e = '/';
  return ('/' !== e[0] && '#' !== e[0] && (e = '/' + e), e.replace(Tu, ''));
}
const Wu = /^[^#]+#/;
function Vu(e, t) {
  return e.replace(Wu, '#') + t;
}
const Uu = () => ({ left: window.scrollX, top: window.scrollY });
function Bu(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = 'string' == typeof n && n.startsWith('#'),
      o = 'string' == typeof n ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
    if (!o) return;
    t = (function (e, t) {
      const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
      return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
    })(o, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY);
}
function Hu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Gu = new Map();
function zu(e) {
  return 'string' == typeof e || 'symbol' == typeof e;
}
let qu = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = 'MATCHER_NOT_FOUND'),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = 'NAVIGATION_GUARD_REDIRECT'),
    (e[(e.NAVIGATION_ABORTED = 4)] = 'NAVIGATION_ABORTED'),
    (e[(e.NAVIGATION_CANCELLED = 8)] = 'NAVIGATION_CANCELLED'),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = 'NAVIGATION_DUPLICATED'),
    e
  );
})({});
const Yu = Symbol('');
function Ku(e, t) {
  return su(new Error(), { type: e, [Yu]: !0 }, t);
}
function Ju(e, t) {
  return e instanceof Error && Yu in e && (null == t || !!(e.type & t));
}
(qu.MATCHER_NOT_FOUND, qu.NAVIGATION_GUARD_REDIRECT, qu.NAVIGATION_ABORTED, qu.NAVIGATION_CANCELLED, qu.NAVIGATION_DUPLICATED);
function Zu(e) {
  const t = {};
  if ('' === e || '?' === e) return t;
  const n = ('?' === e[0] ? e.slice(1) : e).split('&');
  for (let r = 0; r < n.length; ++r) {
    const e = n[r].replace(mu, ' '),
      o = e.indexOf('='),
      s = Lu(o < 0 ? e : e.slice(0, o)),
      a = o < 0 ? null : Lu(e.slice(o + 1));
    if (s in t) {
      let e = t[s];
      (iu(e) || (e = t[s] = [e]), e.push(a));
    } else t[s] = a;
  }
  return t;
}
function Xu(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    ((n = Cu(n)),
      null != r
        ? (iu(r) ? r.map((e) => e && Su(e)) : [r && Su(r)]).forEach((e) => {
            void 0 !== e && ((t += (t.length ? '&' : '') + n), null != e && (t += '=' + e));
          })
        : void 0 !== r && (t += (t.length ? '&' : '') + n));
  }
  return t;
}
function Qu(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    void 0 !== r && (t[n] = iu(r) ? r.map((e) => (null == e ? null : '' + e)) : null == r ? r : '' + r);
  }
  return t;
}
const ef = Symbol(''),
  tf = Symbol(''),
  nf = Symbol(''),
  rf = Symbol(''),
  of = Symbol('');
function sf() {
  let e = [];
  return {
    add: function (t) {
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
      );
    },
    list: () => e.slice(),
    reset: function () {
      e = [];
    },
  };
}
function af(e, t, n, r, o, s = (e) => e()) {
  const a = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((l, i) => {
      const c = (e) => {
          var s;
          !1 === e
            ? i(Ku(qu.NAVIGATION_ABORTED, { from: n, to: t }))
            : e instanceof Error
              ? i(e)
              : 'string' == typeof (s = e) || (s && 'object' == typeof s)
                ? i(Ku(qu.NAVIGATION_GUARD_REDIRECT, { from: t, to: e }))
                : (a && r.enterCallbacks[o] === a && 'function' == typeof e && a.push(e), l());
        },
        u = s(() => e.call(r && r.instances[o], t, n, c));
      let f = Promise.resolve(u);
      (e.length < 3 && (f = f.then(c)), f.catch((e) => i(e)));
    });
}
function lf(e, t, n, r, o = (e) => e()) {
  const s = [];
  for (const a of e)
    for (const e in a.components) {
      let l = a.components[e];
      if ('beforeRouteEnter' === t || a.instances[e])
        if (ou(l)) {
          const i = (l.__vccOpts || l)[t];
          i && s.push(af(i, n, r, a, e, o));
        } else {
          let i = l();
          s.push(() =>
            i.then((s) => {
              if (!s) throw new Error(`Couldn't resolve component "${e}" at "${a.path}"`);
              const l = (i = s).__esModule || 'Module' === i[Symbol.toStringTag] || (i.default && ou(i.default)) ? s.default : s;
              var i;
              ((a.mods[e] = s), (a.components[e] = l));
              const c = (l.__vccOpts || l)[t];
              return c && af(c, n, r, a, e, o)();
            }),
          );
        }
    }
  return s;
}
function cf(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf('#');
  if (s > -1) {
    let t = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      n = o.slice(t);
    return ('/' !== n[0] && (n = '/' + n), Iu(n, ''));
  }
  return Iu(n, e) + r + o;
}
function uf(e, t, n, r = !1, o = !1) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: o ? Uu() : null };
}
function ff(e) {
  const { history: t, location: n } = window,
    r = { value: cf(e, n) },
    o = { value: t.state };
  function s(r, s, a) {
    const l = e.indexOf('#'),
      i = l > -1 ? (n.host && document.querySelector('base') ? e : e.slice(l)) + r : location.protocol + '//' + location.host + e + r;
    try {
      (t[a ? 'replaceState' : 'pushState'](s, '', i), (o.value = s));
    } catch (c) {
      n[a ? 'replace' : 'assign'](i);
    }
  }
  return (
    o.value || s(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0),
    {
      location: r,
      state: o,
      push: function (e, n) {
        const a = su({}, o.value, t.state, { forward: e, scroll: Uu() });
        (s(a.current, a, !0), s(e, su({}, uf(r.value, e, null), { position: a.position + 1 }, n), !1), (r.value = e));
      },
      replace: function (e, n) {
        (s(e, su({}, t.state, uf(o.value.back, e, o.value.forward, !0), n, { position: o.value.position }), !0), (r.value = e));
      },
    }
  );
}
function pf(e) {
  const t = ff((e = ju(e))),
    n = (function (e, t, n, r) {
      let o = [],
        s = [],
        a = null;
      const l = ({ state: s }) => {
        const l = cf(e, location),
          i = n.value,
          c = t.value;
        let u = 0;
        if (s) {
          if (((n.value = l), (t.value = s), a && a === i)) return void (a = null);
          u = c ? s.position - c.position : 0;
        } else r(l);
        o.forEach((e) => {
          e(n.value, i, { delta: u, type: Mu.pop, direction: u ? (u > 0 ? Du.forward : Du.back) : Du.unknown });
        });
      };
      function i() {
        if ('hidden' === document.visibilityState) {
          const { history: e } = window;
          if (!e.state) return;
          e.replaceState(su({}, e.state, { scroll: Uu() }), '');
        }
      }
      return (
        window.addEventListener('popstate', l),
        window.addEventListener('pagehide', i),
        document.addEventListener('visibilitychange', i),
        {
          pauseListeners: function () {
            a = n.value;
          },
          listen: function (e) {
            o.push(e);
            const t = () => {
              const t = o.indexOf(e);
              t > -1 && o.splice(t, 1);
            };
            return (s.push(t), t);
          },
          destroy: function () {
            for (const e of s) e();
            ((s = []),
              window.removeEventListener('popstate', l),
              window.removeEventListener('pagehide', i),
              document.removeEventListener('visibilitychange', i));
          },
        }
      );
    })(e, t.state, t.location, t.replace);
  const r = su(
    {
      location: '',
      base: e,
      go: function (e, t = !0) {
        (t || n.pauseListeners(), history.go(e));
      },
      createHref: Vu.bind(null, e),
    },
    t,
    n,
  );
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  );
}
let df = (function (e) {
  return ((e[(e.Static = 0)] = 'Static'), (e[(e.Param = 1)] = 'Param'), (e[(e.Group = 2)] = 'Group'), e);
})({});
var hf = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.ParamRegExp = 2)] = 'ParamRegExp'),
    (e[(e.ParamRegExpEnd = 3)] = 'ParamRegExpEnd'),
    (e[(e.EscapeNext = 4)] = 'EscapeNext'),
    e
  );
})(hf || {});
const mf = { type: df.Static, value: '' },
  gf = /[a-zA-Z0-9_]/;
const _f = '[^/]+?',
  vf = { sensitive: !1, strict: !1, start: !0, end: !0 };
var yf = (function (e) {
  return (
    (e[(e._multiplier = 10)] = '_multiplier'),
    (e[(e.Root = 90)] = 'Root'),
    (e[(e.Segment = 40)] = 'Segment'),
    (e[(e.SubSegment = 30)] = 'SubSegment'),
    (e[(e.Static = 40)] = 'Static'),
    (e[(e.Dynamic = 20)] = 'Dynamic'),
    (e[(e.BonusCustomRegExp = 10)] = 'BonusCustomRegExp'),
    (e[(e.BonusWildcard = -50)] = 'BonusWildcard'),
    (e[(e.BonusRepeatable = -20)] = 'BonusRepeatable'),
    (e[(e.BonusOptional = -8)] = 'BonusOptional'),
    (e[(e.BonusStrict = 0.7000000000000001)] = 'BonusStrict'),
    (e[(e.BonusCaseSensitive = 0.25)] = 'BonusCaseSensitive'),
    e
  );
})(yf || {});
const bf = /[.+*?^${}()[\]/\\]/g;
function kf(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? 1 === e.length && e[0] === yf.Static + yf.Segment
      ? -1
      : 1
    : e.length > t.length
      ? 1 === t.length && t[0] === yf.Static + yf.Segment
        ? 1
        : -1
      : 0;
}
function xf(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const e = kf(r[n], o[n]);
    if (e) return e;
    n++;
  }
  if (1 === Math.abs(o.length - r.length)) {
    if (wf(r)) return 1;
    if (wf(o)) return -1;
  }
  return o.length - r.length;
}
function wf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ef = { strict: !1, end: !0, sensitive: !1 };
function Sf(e, t, n) {
  const r = (function (e, t) {
      const n = su({}, vf, t),
        r = [];
      let o = n.start ? '^' : '';
      const s = [];
      for (const l of e) {
        const e = l.length ? [] : [yf.Root];
        n.strict && !l.length && (o += '/');
        for (let t = 0; t < l.length; t++) {
          const r = l[t];
          let a = yf.Segment + (n.sensitive ? yf.BonusCaseSensitive : 0);
          if (r.type === df.Static) (t || (o += '/'), (o += r.value.replace(bf, '\\$&')), (a += yf.Static));
          else if (r.type === df.Param) {
            const { value: e, repeatable: n, optional: i, regexp: c } = r;
            s.push({ name: e, repeatable: n, optional: i });
            const u = c || _f;
            u !== _f && (a += yf.BonusCustomRegExp);
            let f = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
            (t || (f = i && l.length < 2 ? `(?:/${f})` : '/' + f),
              i && (f += '?'),
              (o += f),
              (a += yf.Dynamic),
              i && (a += yf.BonusOptional),
              n && (a += yf.BonusRepeatable),
              '.*' === u && (a += yf.BonusWildcard));
          }
          e.push(a);
        }
        r.push(e);
      }
      if (n.strict && n.end) {
        const e = r.length - 1;
        r[e][r[e].length - 1] += yf.BonusStrict;
      }
      (n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && !o.endsWith('/') && (o += '(?:/|$)'));
      const a = new RegExp(o, n.sensitive ? '' : 'i');
      return {
        re: a,
        score: r,
        keys: s,
        parse: function (e) {
          const t = e.match(a),
            n = {};
          if (!t) return null;
          for (let r = 1; r < t.length; r++) {
            const e = t[r] || '',
              o = s[r - 1];
            n[o.name] = e && o.repeatable ? e.split('/') : e;
          }
          return n;
        },
        stringify: function (t) {
          let n = '',
            r = !1;
          for (const o of e) {
            ((r && n.endsWith('/')) || (n += '/'), (r = !1));
            for (const e of o)
              if (e.type === df.Static) n += e.value;
              else if (e.type === df.Param) {
                const { value: s, repeatable: a, optional: l } = e,
                  i = s in t ? t[s] : '';
                if (iu(i) && !a) throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);
                const c = iu(i) ? i.join('/') : i;
                if (!c) {
                  if (!l) throw new Error(`Missing required param "${s}"`);
                  o.length < 2 && (n.endsWith('/') ? (n = n.slice(0, -1)) : (r = !0));
                }
                n += c;
              }
          }
          return n || '/';
        },
      };
    })(
      (function (e) {
        if (!e) return [[]];
        if ('/' === e) return [[mf]];
        if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
        function t(e) {
          throw new Error(`ERR (${n})/"${c}": ${e}`);
        }
        let n = hf.Static,
          r = n;
        const o = [];
        let s;
        function a() {
          (s && o.push(s), (s = []));
        }
        let l,
          i = 0,
          c = '',
          u = '';
        function f() {
          c &&
            (n === hf.Static
              ? s.push({ type: df.Static, value: c })
              : n === hf.Param || n === hf.ParamRegExp || n === hf.ParamRegExpEnd
                ? (s.length > 1 && ('*' === l || '+' === l) && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
                  s.push({ type: df.Param, value: c, regexp: u, repeatable: '*' === l || '+' === l, optional: '*' === l || '?' === l }))
                : t('Invalid state to consume buffer'),
            (c = ''));
        }
        function p() {
          c += l;
        }
        for (; i < e.length; )
          if (((l = e[i++]), '\\' !== l || n === hf.ParamRegExp))
            switch (n) {
              case hf.Static:
                '/' === l ? (c && f(), a()) : ':' === l ? (f(), (n = hf.Param)) : p();
                break;
              case hf.EscapeNext:
                (p(), (n = r));
                break;
              case hf.Param:
                '(' === l ? (n = hf.ParamRegExp) : gf.test(l) ? p() : (f(), (n = hf.Static), '*' !== l && '?' !== l && '+' !== l && i--);
                break;
              case hf.ParamRegExp:
                ')' === l ? ('\\' == u[u.length - 1] ? (u = u.slice(0, -1) + l) : (n = hf.ParamRegExpEnd)) : (u += l);
                break;
              case hf.ParamRegExpEnd:
                (f(), (n = hf.Static), '*' !== l && '?' !== l && '+' !== l && i--, (u = ''));
                break;
              default:
                t('Unknown state');
            }
          else ((r = n), (n = hf.EscapeNext));
        return (n === hf.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`), f(), a(), o);
      })(e.path),
      n,
    ),
    o = su(r, { record: e, parent: t, children: [], alias: [] });
  return (t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o);
}
function Cf(e, t) {
  const n = [],
    r = new Map();
  function o(e, n, r) {
    const l = !r,
      i = Lf(e);
    i.aliasOf = r && r.record;
    const c = cu(t, e),
      u = [i];
    if ('alias' in e) {
      const t = 'string' == typeof e.alias ? [e.alias] : e.alias;
      for (const e of t) u.push(Lf(su({}, i, { components: r ? r.record.components : i.components, path: e, aliasOf: r ? r.record : i })));
    }
    let f, p;
    for (const t of u) {
      const { path: u } = t;
      if (n && '/' !== u[0]) {
        const e = n.record.path,
          r = '/' === e[e.length - 1] ? '' : '/';
        t.path = n.record.path + (u && r + u);
      }
      if (
        ((f = Sf(t, n, c)),
        r ? r.alias.push(f) : ((p = p || f), p !== f && p.alias.push(f), l && e.name && !Af(f) && s(e.name)),
        Pf(f) && a(f),
        i.children)
      ) {
        const e = i.children;
        for (let t = 0; t < e.length; t++) o(e[t], f, r && r.children[t]);
      }
      r = r || f;
    }
    return p
      ? () => {
          s(p);
        }
      : lu;
  }
  function s(e) {
    if (zu(e)) {
      const t = r.get(e);
      t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(s), t.alias.forEach(s));
    } else {
      const t = n.indexOf(e);
      t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(s), e.alias.forEach(s));
    }
  }
  function a(e) {
    const t = (function (e, t) {
      let n = 0,
        r = t.length;
      for (; n !== r; ) {
        const o = (n + r) >> 1;
        xf(e, t[o]) < 0 ? (r = o) : (n = o + 1);
      }
      const o = (function (e) {
        let t = e;
        for (; (t = t.parent); ) if (Pf(t) && 0 === xf(e, t)) return t;
      })(e);
      o && (r = t.lastIndexOf(o, r - 1));
      return r;
    })(e, n);
    (n.splice(t, 0, e), e.record.name && !Af(e) && r.set(e.record.name, e));
  }
  return (
    (t = cu(Ef, t)),
    e.forEach((e) => o(e)),
    {
      addRoute: o,
      resolve: function (e, t) {
        let o,
          s,
          a,
          l = {};
        if ('name' in e && e.name) {
          if (((o = r.get(e.name)), !o)) throw Ku(qu.MATCHER_NOT_FOUND, { location: e });
          ((a = o.record.name),
            (l = su(
              Of(
                t.params,
                o.keys
                  .filter((e) => !e.optional)
                  .concat(o.parent ? o.parent.keys.filter((e) => e.optional) : [])
                  .map((e) => e.name),
              ),
              e.params &&
                Of(
                  e.params,
                  o.keys.map((e) => e.name),
                ),
            )),
            (s = o.stringify(l)));
        } else if (null != e.path) ((s = e.path), (o = n.find((e) => e.re.test(s))), o && ((l = o.parse(s)), (a = o.record.name)));
        else {
          if (((o = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path))), !o))
            throw Ku(qu.MATCHER_NOT_FOUND, { location: e, currentLocation: t });
          ((a = o.record.name), (l = su({}, t.params, e.params)), (s = o.stringify(l)));
        }
        const i = [];
        let c = o;
        for (; c; ) (i.unshift(c.record), (c = c.parent));
        return { name: a, path: s, params: l, matched: i, meta: If(i) };
      },
      removeRoute: s,
      clearRoutes: function () {
        ((n.length = 0), r.clear());
      },
      getRoutes: function () {
        return n;
      },
      getRecordMatcher: function (e) {
        return r.get(e);
      },
    }
  );
}
function Of(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Lf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Tf(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return (Object.defineProperty(t, 'mods', { value: {} }), t);
}
function Tf(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = 'object' == typeof n ? n[r] : n;
  return t;
}
function Af(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function If(e) {
  return e.reduce((e, t) => su(e, t.meta), {});
}
function Pf({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function Ff(e) {
  const t = Ur(nf),
    n = Ur(rf),
    r = _s(() => {
      const n = St(e.to);
      return t.resolve(n);
    }),
    o = _s(() => {
      const { matched: e } = r.value,
        { length: t } = e,
        o = e[t - 1],
        s = n.matched;
      if (!o || !s.length) return -1;
      const a = s.findIndex(Pu.bind(null, o));
      if (a > -1) return a;
      const l = Rf(e[t - 2]);
      return t > 1 && Rf(o) === l && s[s.length - 1].path !== l ? s.findIndex(Pu.bind(null, e[t - 2])) : a;
    }),
    s = _s(
      () =>
        o.value > -1 &&
        (function (e, t) {
          for (const n in t) {
            const r = t[n],
              o = e[n];
            if ('string' == typeof r) {
              if (r !== o) return !1;
            } else if (!iu(o) || o.length !== r.length || r.some((e, t) => e !== o[t])) return !1;
          }
          return !0;
        })(n.params, r.value.params),
    ),
    a = _s(() => o.value > -1 && o.value === n.matched.length - 1 && Fu(n.params, r.value.params));
  return {
    route: r,
    href: _s(() => r.value.href),
    isActive: s,
    isExactActive: a,
    navigate: function (n = {}) {
      if (
        (function (e) {
          if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
          if (e.defaultPrevented) return;
          if (void 0 !== e.button && 0 !== e.button) return;
          if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(t)) return;
          }
          e.preventDefault && e.preventDefault();
          return !0;
        })(n)
      ) {
        const n = t[St(e.replace) ? 'replace' : 'push'](St(e.to)).catch(lu);
        return (
          e.viewTransition && 'undefined' != typeof document && 'startViewTransition' in document && document.startViewTransition(() => n),
          n
        );
      }
      return Promise.resolve();
    },
  };
}
const Nf = Rn({
  name: 'RouterLink',
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: 'page' },
    viewTransition: Boolean,
  },
  useLink: Ff,
  setup(e, { slots: t }) {
    const n = it(Ff(e)),
      { options: r } = Ur(nf),
      o = _s(() => ({
        [$f(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
        [$f(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive,
      }));
    return () => {
      const r = t.default && (1 === (s = t.default(n)).length ? s[0] : s);
      var s;
      return e.custom
        ? r
        : vs('a', { 'aria-current': n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: o.value }, r);
    };
  },
});
function Rf(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const $f = (e, t, n) => (null != e ? e : null != t ? t : n);
function Mf(e, t) {
  if (!e) return null;
  const n = e(t);
  return 1 === n.length ? n[0] : n;
}
const Df = Rn({
  name: 'RouterView',
  inheritAttrs: !1,
  props: { name: { type: String, default: 'default' }, route: Object },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const r = Ur(of),
      o = _s(() => e.route || r.value),
      s = Ur(tf, 0),
      a = _s(() => {
        let e = St(s);
        const { matched: t } = o.value;
        let n;
        for (; (n = t[e]) && !n.components; ) e++;
        return e;
      }),
      l = _s(() => o.value.matched[a.value]);
    (Vr(
      tf,
      _s(() => a.value + 1),
    ),
      Vr(ef, l),
      Vr(of, o));
    const i = kt();
    return (
      ho(
        () => [i.value, l.value, e.name],
        ([e, t, n], [r, o, s]) => {
          (t &&
            ((t.instances[n] = e),
            o &&
              o !== t &&
              e &&
              e === r &&
              (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards), t.updateGuards.size || (t.updateGuards = o.updateGuards))),
            !e || !t || (o && Pu(t, o) && r) || (t.enterCallbacks[n] || []).forEach((t) => t(e)));
        },
        { flush: 'post' },
      ),
      () => {
        const r = o.value,
          s = e.name,
          a = l.value,
          c = a && a.components[s];
        if (!c) return Mf(n.default, { Component: c, route: r });
        const u = a.props[s],
          f = u ? (!0 === u ? r.params : 'function' == typeof u ? u(r) : u) : null,
          p = vs(
            c,
            su({}, f, t, {
              onVnodeUnmounted: (e) => {
                e.component.isUnmounted && (a.instances[s] = null);
              },
              ref: i,
            }),
          );
        return Mf(n.default, { Component: p, route: r }) || p;
      }
    );
  },
});
function jf() {
  return Ur(nf);
}
const Wf = {},
  Vf = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = function (e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: 'fulfilled', value: e }),
              (e) => ({ status: 'rejected', reason: e }),
            ),
          ),
        );
      };
      document.getElementsByTagName('link');
      const n = document.querySelector('meta[property=csp-nonce]'),
        o = n?.nonce || n?.getAttribute('nonce');
      r = e(
        t.map((e) => {
          if (
            (e = (function (e) {
              return '/ticket-calculator/' + e;
            })(e)) in Wf
          )
            return;
          Wf[e] = !0;
          const t = e.endsWith('.css'),
            n = t ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${e}"]${n}`)) return;
          const r = document.createElement('link');
          return (
            (r.rel = t ? 'stylesheet' : 'modulepreload'),
            t || (r.as = 'script'),
            (r.crossOrigin = ''),
            (r.href = e),
            o && r.setAttribute('nonce', o),
            document.head.appendChild(r),
            t
              ? new Promise((t, n) => {
                  (r.addEventListener('load', t), r.addEventListener('error', () => n(new Error(`Unable to preload CSS for ${e}`))));
                })
              : void 0
          );
        }),
      );
    }
    function o(e) {
      const t = new Event('vite:preloadError', { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (const e of t || []) 'rejected' === e.status && o(e.reason);
      return e().catch(o);
    });
  },
  Uf = [
    {
      path: '/',
      redirect: '/home',
      component: () => Vf(() => import('./index-Cl1SdWFP.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])),
      children: [
        {
          path: 'home',
          component: () => Vf(() => import('./index-DSWj29Fm.js'), __vite__mapDeps([10, 11, 1, 2, 12, 13, 7, 14, 15])),
          meta: { title: 'tabbar.home', keepAlive: !0 },
        },
        {
          path: 'list',
          component: () => Vf(() => import('./index-BDqch-RA.js'), __vite__mapDeps([16, 17, 4, 18, 19, 20, 3, 21, 9])),
          meta: { title: 'tabbar.list', keepAlive: !0 },
        },
        {
          path: 'member',
          component: () => Vf(() => import('./index-BOEt_YLm.js'), __vite__mapDeps([22, 11, 1, 2, 12, 23, 18, 4, 24, 5, 14, 7, 25])),
          meta: { title: 'tabbar.member', keepAlive: !0 },
        },
        {
          path: 'demo',
          component: () => Vf(() => import('./index-BV-wIgBo.js'), __vite__mapDeps([26, 11, 1, 2, 12, 17, 4, 18, 19, 24, 6, 27, 28, 9])),
          meta: { title: 'tabbar.demo', keepAlive: !0 },
        },
        {
          name: 'listDetails',
          path: '/details',
          component: () => Vf(() => import('./index-P9QtMJxA.js'), __vite__mapDeps([29, 20, 24, 27, 30])),
          meta: { title: 'list.details', border: !1 },
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: () => Vf(() => import('./index-BZkxKjmx.js'), __vite__mapDeps([31, 11, 1, 2, 12, 23, 18, 4, 5, 27, 13, 7, 14, 32])),
      meta: { title: '', keepAlive: !0 },
    },
    { path: '/:pathMatch(.*)', redirect: '/Home' },
  ],
  Bf = (function (e) {
    const t = Cf(e.routes, e),
      n = e.parseQuery || Zu,
      r = e.stringifyQuery || Xu,
      o = e.history,
      s = sf(),
      a = sf(),
      l = sf(),
      i = xt($u);
    let c = $u;
    ru && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual');
    const u = au.bind(null, (e) => '' + e),
      f = au.bind(null, Ou),
      p = au.bind(null, Lu);
    function d(e, s) {
      if (((s = su({}, s || i.value)), 'string' == typeof e)) {
        const r = Au(n, e, s.path),
          a = t.resolve({ path: r.path }, s),
          l = o.createHref(r.fullPath);
        return su(r, a, { params: p(a.params), hash: Lu(r.hash), redirectedFrom: void 0, href: l });
      }
      let a;
      if (null != e.path) a = su({}, e, { path: Au(n, e.path, s.path).path });
      else {
        const t = su({}, e.params);
        for (const e in t) null == t[e] && delete t[e];
        ((a = su({}, e, { params: f(t) })), (s.params = f(s.params)));
      }
      const l = t.resolve(a, s),
        c = e.hash || '';
      l.params = u(p(l.params));
      const d = (function (e, t) {
        const n = t.query ? e(t.query) : '';
        return t.path + (n && '?') + n + (t.hash || '');
      })(r, su({}, e, { hash: ((h = c), Eu(h).replace(bu, '{').replace(xu, '}').replace(vu, '^')), path: l.path }));
      var h;
      const m = o.createHref(d);
      return su({ fullPath: d, hash: c, query: r === Xu ? Qu(e.query) : e.query || {} }, l, { redirectedFrom: void 0, href: m });
    }
    function h(e) {
      return 'string' == typeof e ? Au(n, e, i.value.path) : su({}, e);
    }
    function m(e, t) {
      if (c !== e) return Ku(qu.NAVIGATION_CANCELLED, { from: t, to: e });
    }
    function g(e) {
      return v(e);
    }
    function _(e, t) {
      const n = e.matched[e.matched.length - 1];
      if (n && n.redirect) {
        const { redirect: r } = n;
        let o = 'function' == typeof r ? r(e, t) : r;
        return (
          'string' == typeof o && ((o = o.includes('?') || o.includes('#') ? (o = h(o)) : { path: o }), (o.params = {})),
          su({ query: e.query, hash: e.hash, params: null != o.path ? {} : e.params }, o)
        );
      }
    }
    function v(e, t) {
      const n = (c = d(e)),
        o = i.value,
        s = e.state,
        a = e.force,
        l = !0 === e.replace,
        u = _(n, o);
      if (u) return v(su(h(u), { state: 'object' == typeof u ? su({}, s, u.state) : s, force: a, replace: l }), t || n);
      const f = n;
      let p;
      return (
        (f.redirectedFrom = t),
        !a &&
          (function (e, t, n) {
            const r = t.matched.length - 1,
              o = n.matched.length - 1;
            return (
              r > -1 &&
              r === o &&
              Pu(t.matched[r], n.matched[o]) &&
              Fu(t.params, n.params) &&
              e(t.query) === e(n.query) &&
              t.hash === n.hash
            );
          })(r, o, n) &&
          ((p = Ku(qu.NAVIGATION_DUPLICATED, { to: f, from: o })), I(o, o, !0, !1)),
        (p ? Promise.resolve(p) : k(f, o))
          .catch((e) => (Ju(e) ? (Ju(e, qu.NAVIGATION_GUARD_REDIRECT) ? e : A(e)) : T(e, f, o)))
          .then((e) => {
            if (e) {
              if (Ju(e, qu.NAVIGATION_GUARD_REDIRECT))
                return v(su({ replace: l }, h(e.to), { state: 'object' == typeof e.to ? su({}, s, e.to.state) : s, force: a }), t || f);
            } else e = w(f, o, !0, l, s);
            return (x(f, o, e), e);
          })
      );
    }
    function y(e, t) {
      const n = m(e, t);
      return n ? Promise.reject(n) : Promise.resolve();
    }
    function b(e) {
      const t = N.values().next().value;
      return t && 'function' == typeof t.runWithContext ? t.runWithContext(e) : e();
    }
    function k(e, t) {
      let n;
      const [r, o, l] = (function (e, t) {
        const n = [],
          r = [],
          o = [],
          s = Math.max(t.matched.length, e.matched.length);
        for (let a = 0; a < s; a++) {
          const s = t.matched[a];
          s && (e.matched.find((e) => Pu(e, s)) ? r.push(s) : n.push(s));
          const l = e.matched[a];
          l && (t.matched.find((e) => Pu(e, l)) || o.push(l));
        }
        return [n, r, o];
      })(
        /*!
         * vue-router v4.6.3
         * (c) 2025 Eduardo San Martin Morote
         * @license MIT
         */ e,
        t,
      );
      n = lf(r.reverse(), 'beforeRouteLeave', e, t);
      for (const s of r)
        s.leaveGuards.forEach((r) => {
          n.push(af(r, e, t));
        });
      const i = y.bind(null, e, t);
      return (
        n.push(i),
        $(n)
          .then(() => {
            n = [];
            for (const r of s.list()) n.push(af(r, e, t));
            return (n.push(i), $(n));
          })
          .then(() => {
            n = lf(o, 'beforeRouteUpdate', e, t);
            for (const r of o)
              r.updateGuards.forEach((r) => {
                n.push(af(r, e, t));
              });
            return (n.push(i), $(n));
          })
          .then(() => {
            n = [];
            for (const r of l)
              if (r.beforeEnter)
                if (iu(r.beforeEnter)) for (const o of r.beforeEnter) n.push(af(o, e, t));
                else n.push(af(r.beforeEnter, e, t));
            return (n.push(i), $(n));
          })
          .then(() => (e.matched.forEach((e) => (e.enterCallbacks = {})), (n = lf(l, 'beforeRouteEnter', e, t, b)), n.push(i), $(n)))
          .then(() => {
            n = [];
            for (const r of a.list()) n.push(af(r, e, t));
            return (n.push(i), $(n));
          })
          .catch((e) => (Ju(e, qu.NAVIGATION_CANCELLED) ? e : Promise.reject(e)))
      );
    }
    function x(e, t, n) {
      l.list().forEach((r) => b(() => r(e, t, n)));
    }
    function w(e, t, n, r, s) {
      const a = m(e, t);
      if (a) return a;
      const l = t === $u,
        c = ru ? history.state : {};
      (n && (r || l ? o.replace(e.fullPath, su({ scroll: l && c && c.scroll }, s)) : o.push(e.fullPath, s)),
        (i.value = e),
        I(e, t, n, l),
        A());
    }
    let E;
    function S() {
      E ||
        (E = o.listen((e, t, n) => {
          if (!R.listening) return;
          const r = d(e),
            s = _(r, R.currentRoute.value);
          if (s) return void v(su(s, { replace: !0, force: !0 }), r).catch(lu);
          c = r;
          const a = i.value;
          var l, u;
          (ru && ((l = Hu(a.fullPath, n.delta)), (u = Uu()), Gu.set(l, u)),
            k(r, a)
              .catch((e) =>
                Ju(e, qu.NAVIGATION_ABORTED | qu.NAVIGATION_CANCELLED)
                  ? e
                  : Ju(e, qu.NAVIGATION_GUARD_REDIRECT)
                    ? (v(su(h(e.to), { force: !0 }), r)
                        .then((e) => {
                          Ju(e, qu.NAVIGATION_ABORTED | qu.NAVIGATION_DUPLICATED) && !n.delta && n.type === Mu.pop && o.go(-1, !1);
                        })
                        .catch(lu),
                      Promise.reject())
                    : (n.delta && o.go(-n.delta, !1), T(e, r, a)),
              )
              .then((e) => {
                ((e = e || w(r, a, !1)) &&
                  (n.delta && !Ju(e, qu.NAVIGATION_CANCELLED)
                    ? o.go(-n.delta, !1)
                    : n.type === Mu.pop && Ju(e, qu.NAVIGATION_ABORTED | qu.NAVIGATION_DUPLICATED) && o.go(-1, !1)),
                  x(r, a, e));
              })
              .catch(lu));
        }));
    }
    let C,
      O = sf(),
      L = sf();
    function T(e, t, n) {
      A(e);
      const r = L.list();
      return (r.length && r.forEach((r) => r(e, t, n)), Promise.reject(e));
    }
    function A(e) {
      return (C || ((C = !e), S(), O.list().forEach(([t, n]) => (e ? n(e) : t())), O.reset()), e);
    }
    function I(t, n, r, o) {
      const { scrollBehavior: s } = e;
      if (!ru || !s) return Promise.resolve();
      const a =
        (!r &&
          (function (e) {
            const t = Gu.get(e);
            return (Gu.delete(e), t);
          })(Hu(t.fullPath, 0))) ||
        ((o || !r) && history.state && history.state.scroll) ||
        null;
      return Kt()
        .then(() => s(t, n, a))
        .then((e) => e && Bu(e))
        .catch((e) => T(e, t, n));
    }
    const P = (e) => o.go(e);
    let F;
    const N = new Set(),
      R = {
        currentRoute: i,
        listening: !0,
        addRoute: function (e, n) {
          let r, o;
          return (zu(e) ? ((r = t.getRecordMatcher(e)), (o = n)) : (o = e), t.addRoute(o, r));
        },
        removeRoute: function (e) {
          const n = t.getRecordMatcher(e);
          n && t.removeRoute(n);
        },
        clearRoutes: t.clearRoutes,
        hasRoute: function (e) {
          return !!t.getRecordMatcher(e);
        },
        getRoutes: function () {
          return t.getRoutes().map((e) => e.record);
        },
        resolve: d,
        options: e,
        push: g,
        replace: function (e) {
          return g(su(h(e), { replace: !0 }));
        },
        go: P,
        back: () => P(-1),
        forward: () => P(1),
        beforeEach: s.add,
        beforeResolve: a.add,
        afterEach: l.add,
        onError: L.add,
        isReady: function () {
          return C && i.value !== $u
            ? Promise.resolve()
            : new Promise((e, t) => {
                O.add([e, t]);
              });
        },
        install(e) {
          (e.component('RouterLink', Nf),
            e.component('RouterView', Df),
            (e.config.globalProperties.$router = R),
            Object.defineProperty(e.config.globalProperties, '$route', { enumerable: !0, get: () => St(i) }),
            ru && !F && i.value === $u && ((F = !0), g(o.location).catch((e) => {})));
          const t = {};
          for (const r in $u) Object.defineProperty(t, r, { get: () => i.value[r], enumerable: !0 });
          (e.provide(nf, R), e.provide(rf, ct(t)), e.provide(of, i));
          const n = e.unmount;
          (N.add(e),
            (e.unmount = function () {
              (N.delete(e), N.size < 1 && ((c = $u), E && E(), (E = null), (i.value = $u), (F = !1), (C = !1)), n());
            }));
        },
      };
    function $(e) {
      return e.reduce((e, t) => e.then(() => b(t)), Promise.resolve());
    }
    return R;
  })({
    history:
      ((Hf = '/ticket-calculator'),
      (Hf = location.host ? Hf || location.pathname + location.search : '').includes('#') || (Hf += '#'),
      pf(Hf)),
    routes: Uf,
  });
var Hf;
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Gf;
Bf.beforeEach(async (e, t, n) => {
  n();
});
const zf = (e) => (Gf = e),
  qf = Symbol();
function Yf(e) {
  return e && 'object' == typeof e && '[object Object]' === Object.prototype.toString.call(e) && 'function' != typeof e.toJSON;
}
var Kf, Jf;
(((Jf = Kf || (Kf = {})).direct = 'direct'), (Jf.patchObject = 'patch object'), (Jf.patchFunction = 'patch function'));
const Zf = () => {};
function Xf(e, t, n, r = Zf) {
  e.push(t);
  const o = () => {
    const n = e.indexOf(t);
    n > -1 && (e.splice(n, 1), r());
  };
  return (!n && ee() && te(o), o);
}
function Qf(e, ...t) {
  e.slice().forEach((e) => {
    e(...t);
  });
}
const ep = (e) => e(),
  tp = Symbol(),
  np = Symbol();
function rp(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    Yf(o) && Yf(r) && e.hasOwnProperty(n) && !bt(r) && !pt(r) ? (e[n] = rp(o, r)) : (e[n] = r);
  }
  return e;
}
const op = Symbol();
function sp(e) {
  return !Yf(e) || !Object.prototype.hasOwnProperty.call(e, op);
}
const { assign: ap } = Object;
function lp(e) {
  return !(!bt(e) || !e.effect);
}
function ip(e, t, n = {}, r, o, s) {
  let a;
  const l = ap({ actions: {} }, n),
    i = { deep: !0 };
  let c,
    u,
    f,
    p = [],
    d = [];
  const h = r.state.value[e];
  let m;
  function g(t) {
    let n;
    ((c = u = !1),
      'function' == typeof t
        ? (t(r.state.value[e]), (n = { type: Kf.patchFunction, storeId: e, events: f }))
        : (rp(r.state.value[e], t), (n = { type: Kf.patchObject, payload: t, storeId: e, events: f })));
    const o = (m = Symbol());
    (Kt().then(() => {
      m === o && (c = !0);
    }),
      (u = !0),
      Qf(p, n, r.state.value[e]));
  }
  (s || h || (r.state.value[e] = {}), kt({}));
  const _ = s
    ? function () {
        const { state: e } = n,
          t = e ? e() : {};
        this.$patch((e) => {
          ap(e, t);
        });
      }
    : Zf;
  const v = (t, n = '') => {
      if (tp in t) return ((t[np] = n), t);
      const o = function () {
        zf(r);
        const n = Array.from(arguments),
          s = [],
          a = [];
        let l;
        Qf(d, {
          args: n,
          name: o[np],
          store: y,
          after: function (e) {
            s.push(e);
          },
          onError: function (e) {
            a.push(e);
          },
        });
        try {
          l = t.apply(this && this.$id === e ? this : y, n);
        } catch (i) {
          throw (Qf(a, i), i);
        }
        return l instanceof Promise ? l.then((e) => (Qf(s, e), e)).catch((e) => (Qf(a, e), Promise.reject(e))) : (Qf(s, l), l);
      };
      return ((o[tp] = !0), (o[np] = n), o);
    },
    y = it({
      _p: r,
      $id: e,
      $onAction: Xf.bind(null, d),
      $patch: g,
      $reset: _,
      $subscribe(t, n = {}) {
        const o = Xf(p, t, n.detached, () => s()),
          s = a.run(() =>
            ho(
              () => r.state.value[e],
              (r) => {
                ('sync' === n.flush ? u : c) && t({ storeId: e, type: Kf.direct, events: f }, r);
              },
              ap({}, i, n),
            ),
          );
        return o;
      },
      $dispose: function () {
        (a.stop(), (p = []), (d = []), r._s.delete(e));
      },
    });
  r._s.set(e, y);
  const b = ((r._a && r._a.runWithContext) || ep)(() => r._e.run(() => (a = Q()).run(() => t({ action: v }))));
  for (const k in b) {
    const t = b[k];
    if ((bt(t) && !lp(t)) || pt(t)) s || (h && sp(t) && (bt(t) ? (t.value = h[k]) : rp(t, h[k])), (r.state.value[e][k] = t));
    else if ('function' == typeof t) {
      const e = v(t, k);
      ((b[k] = e), (l.actions[k] = t));
    }
  }
  return (
    ap(y, b),
    ap(gt(y), b),
    Object.defineProperty(y, '$state', {
      get: () => r.state.value[e],
      set: (e) => {
        g((t) => {
          ap(t, e);
        });
      },
    }),
    r._p.forEach((e) => {
      ap(
        y,
        a.run(() => e({ store: y, app: r._a, pinia: r, options: l })),
      );
    }),
    h && s && n.hydrate && n.hydrate(y.$state, h),
    (c = !0),
    (u = !0),
    y
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function cp(e, t, n) {
  let r;
  const o = 'function' == typeof t;
  function s(n, s) {
    const a = !(!os() && !Wr);
    ((n = n || (a ? Ur(qf, null) : null)) && zf(n),
      (n = Gf)._s.has(e) ||
        (o
          ? ip(e, t, r, n)
          : (function (e, t, n) {
              const { state: r, actions: o, getters: s } = t,
                a = n.state.value[e];
              let l;
              l = ip(
                e,
                function () {
                  a || (n.state.value[e] = r ? r() : {});
                  const t = Lt(n.state.value[e]);
                  return ap(
                    t,
                    o,
                    Object.keys(s || {}).reduce(
                      (t, r) => (
                        (t[r] = _t(
                          _s(() => {
                            zf(n);
                            const t = n._s.get(e);
                            return s[r].call(t, t);
                          }),
                        )),
                        t
                      ),
                      {},
                    ),
                  );
                },
                t,
                n,
                0,
                !0,
              );
            })(e, r, n)));
    return n._s.get(e);
  }
  return ((r = o ? n : t), (s.$id = e), s);
}
const up =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  fp =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  pp = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function dp(e, t) {
  if (!('__proto__' === e || ('constructor' === e && t && 'object' == typeof t && 'prototype' in t))) return t;
}
function hp(e, t) {
  if (null == e) return;
  let n = e;
  for (let r = 0; r < t.length; r++) {
    if (null == n || null == n[t[r]]) return;
    n = n[t[r]];
  }
  return n;
}
function mp(e, t, n) {
  if (0 === n.length) return t;
  const r = n[0];
  return (
    n.length > 1 &&
      (t = mp(
        'object' == typeof e && null !== e && Object.prototype.hasOwnProperty.call(e, r) ? e[r] : Number.isInteger(Number(n[1])) ? [] : {},
        t,
        Array.prototype.slice.call(n, 1),
      )),
    Number.isInteger(Number(r)) && Array.isArray(e) ? e.slice()[r] : Object.assign({}, e, { [r]: t })
  );
}
function gp(e, t) {
  if (null == e || 0 === t.length) return e;
  if (1 === t.length) {
    if (null == e) return e;
    if (Number.isInteger(t[0]) && Array.isArray(e)) return Array.prototype.slice.call(e, 0).splice(t[0], 1);
    const n = {};
    for (const t in e) n[t] = e[t];
    return (delete n[t[0]], n);
  }
  if (null == e[t[0]]) {
    if (Number.isInteger(t[0]) && Array.isArray(e)) return Array.prototype.concat.call([], e);
    const n = {};
    for (const t in e) n[t] = e[t];
    return n;
  }
  return mp(e, gp(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function _p(e, t) {
  return t
    .map((e) => e.split('.'))
    .map((t) => [t, hp(e, t)])
    .filter((e) => void 0 !== e[1])
    .reduce((e, t) => mp(e, t[1], t[0]), {});
}
function vp(e, t) {
  return t.map((e) => e.split('.')).reduce((e, t) => gp(e, t), e);
}
function yp(e, { storage: t, serializer: n, key: r, debug: o, pick: s, omit: a, beforeHydrate: l, afterHydrate: i }, c, u = !0) {
  try {
    u && l?.(c);
    const o = t.getItem(r);
    if (o) {
      const t = n.deserialize(o),
        r = s ? _p(t, s) : t,
        l = a ? vp(r, a) : r;
      e.$patch(l);
    }
    u && i?.(c);
  } catch (f) {}
}
function bp(e, { storage: t, serializer: n, key: r, debug: o, pick: s, omit: a }) {
  try {
    const o = s ? _p(e, s) : e,
      l = a ? vp(o, a) : o,
      i = n.serialize(l);
    t.setItem(r, i);
  } catch (l) {}
}
var kp = (function (e = {}) {
  return function (t) {
    !(function (e, t, n) {
      const {
        pinia: r,
        store: o,
        options: { persist: s = n },
      } = e;
      if (!s) return;
      if (!(o.$id in r.state.value)) {
        const e = r._s.get(o.$id.replace('__hot:', ''));
        return void (e && Promise.resolve().then(() => e.$persist()));
      }
      const a = (Array.isArray(s) ? s : !0 === s ? [{}] : [s]).map(t);
      ((o.$hydrate = ({ runHooks: t = !0 } = {}) => {
        a.forEach((n) => {
          yp(o, n, e, t);
        });
      }),
        (o.$persist = () => {
          a.forEach((e) => {
            bp(o.$state, e);
          });
        }),
        a.forEach((t) => {
          (yp(o, t, e), o.$subscribe((e, n) => bp(n, t), { detached: !0 }));
        }));
    })(
      t,
      (n) => ({
        key: (e.key ? e.key : (e) => e)(n.key ?? t.store.$id),
        debug: n.debug ?? e.debug ?? !1,
        serializer: n.serializer ??
          e.serializer ?? {
            serialize: (e) => JSON.stringify(e),
            deserialize: (e) =>
              (function (e, t = {}) {
                if ('string' != typeof e) return e;
                if ('"' === e[0] && '"' === e[e.length - 1] && -1 === e.indexOf('\\')) return e.slice(1, -1);
                const n = e.trim();
                if (n.length <= 9)
                  switch (n.toLowerCase()) {
                    case 'true':
                      return !0;
                    case 'false':
                      return !1;
                    case 'undefined':
                      return;
                    case 'null':
                      return null;
                    case 'nan':
                      return Number.NaN;
                    case 'infinity':
                      return Number.POSITIVE_INFINITY;
                    case '-infinity':
                      return Number.NEGATIVE_INFINITY;
                  }
                if (!pp.test(e)) {
                  if (t.strict) throw new SyntaxError('[destr] Invalid JSON');
                  return e;
                }
                try {
                  if (up.test(e) || fp.test(e)) {
                    if (t.strict) throw new Error('[destr] Possible prototype pollution');
                    return JSON.parse(e, dp);
                  }
                  return JSON.parse(e);
                } catch (r) {
                  if (t.strict) throw r;
                  return e;
                }
              })(e),
          },
        storage: n.storage ?? e.storage ?? window.localStorage,
        beforeHydrate: n.beforeHydrate,
        afterHydrate: n.afterHydrate,
        pick: n.pick,
        omit: n.omit,
      }),
      e.auto ?? !1,
    );
  };
})();
const xp = (function () {
  const e = Q(!0),
    t = e.run(() => kt({}));
  let n = [],
    r = [];
  const o = _t({
    install(e) {
      (zf(o), (o._a = e), e.provide(qf, o), (e.config.globalProperties.$pinia = o), r.forEach((e) => n.push(e)), (r = []));
    },
    use(e) {
      return (this._a ? n.push(e) : r.push(e), this);
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return o;
})();
xp.use(kp);
const wp = Ta(Ia);
(wp.use(Bf), wp.use(tu), wp.use(xp), wp.mount('#app'));
export {
  pr as $,
  jf as A,
  Jc as B,
  nu as C,
  Yo as D,
  po as E,
  Lo as F,
  os as G,
  er as H,
  Gn as I,
  nr as J,
  Un as K,
  it as L,
  Hn as M,
  Ur as N,
  Vr as O,
  Qo as P,
  Ea as Q,
  Lt as R,
  Ta as S,
  Is as T,
  La as U,
  rr as V,
  Wo as W,
  Ao as X,
  vs as Y,
  Xn as Z,
  Aa as _,
  Ho as a,
  gr as a0,
  vn as a1,
  ga as a2,
  It as a3,
  xa as a4,
  Bf as a5,
  ee as a6,
  te as a7,
  xt as a8,
  cp as a9,
  wr as aa,
  U as b,
  Do as c,
  Rn as d,
  _s as e,
  Qn as f,
  _r as g,
  Kt as h,
  an as i,
  Go as j,
  sn as k,
  Ko as l,
  jo as m,
  M as n,
  No as o,
  fr as p,
  B as q,
  kt as r,
  zo as s,
  q as t,
  St as u,
  qs as v,
  ho as w,
  bt as x,
  cr as y,
  mr as z,
};
