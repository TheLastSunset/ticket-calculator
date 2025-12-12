const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-DOinsNk8.js',
      'assets/with-install-Ch3FF0uS-Dfv6CYse.js',
      'assets/with-install-Ch3FF0uS-RvUKwxNH.css',
      'assets/use-height-BFEXCBeY.js',
      'assets/index-Bs0ypY5m.js',
      'assets/useParent-D6DiuxZZ-FdaWZK6K.js',
      'assets/renderIcon-CfE94nuJ-D3NHIIDS.js',
      'assets/index-aiGQ-EiA-BzNSSj7d.js',
      'assets/index-DkImZxpu.css',
      'assets/index-DB55vr4x.css',
      'assets/index-OE65PIBB.js',
      'assets/index-En75s1eM.js',
      'assets/index-iwoWuYwR.css',
      'assets/CellGroup-CLm3VvFN.js',
      'assets/pxCheck-DN6FYV6q-8OyS8IyB.js',
      'assets/index-NVLg1Lg8.css',
      'assets/index-TzhF-lUY.js',
      'assets/index-W9GjcPzW.js',
      'assets/function-call-Clw5XcF1.js',
      'assets/index-CmDgRdbs.css',
      'assets/data-CZ-fE9Kg.js',
      'assets/index-CuthhAH7.js',
      'assets/index-78YyTOvD.css',
      'assets/index-CYfsTKkb.js',
      'assets/user-B7mtDEvk.js',
      'assets/_plugin-vue_export-helper-1tPrXgE0-0u_2sQRJ.js',
      'assets/index-DUNZgshA.css',
      'assets/index-H5CHVQgu.js',
      'assets/util-D1pvnUYu-DEz0HYko.js',
      'assets/index-DOhT1HM9.css',
      'assets/index-COLXcCOb.js',
      'assets/index-1tEfV0Im.css',
      'assets/index-VqSAAfr4.js',
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
  E = e(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  S = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  w = /-\w/g,
  C = S((e) => e.replace(w, (e) => e.slice(1).toUpperCase())),
  O = /\B([A-Z])/g,
  L = S((e) => e.replace(O, '-$1').toLowerCase()),
  T = S((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  A = S((e) => (e ? `on${T(e)}` : '')),
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
class Ee {
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
        Se(t));
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
function Se(e) {
  if ((e.dep.sc++, 4 & e.sub.flags)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let e = t.deps; e; e = e.nextDep) Se(e);
    }
    const n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
const we = new WeakMap(),
  Ce = Symbol(''),
  Oe = Symbol(''),
  Le = Symbol('');
function Te(e, t, n) {
  if (ge && Z) {
    let t = we.get(e);
    t || we.set(e, (t = new Map()));
    let r = t.get(n);
    (r || (t.set(n, (r = new Ee())), (r.map = t), (r.key = n)), r.track());
  }
}
function Ae(e, t, n, r, o, s) {
  const a = we.get(e);
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
  return Et(e, !1);
}
function xt(e) {
  return Et(e, !0);
}
function Et(e, t) {
  return bt(e) ? e : new St(e, t);
}
class St {
  constructor(e, t) {
    ((this.dep = new Ee()),
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
function wt(e) {
  return bt(e) ? e.value : e;
}
const Ct = {
  get: (e, t, n) => ('__v_raw' === t ? e : wt(Reflect.get(e, t, n))),
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
      const n = we.get(e);
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
      (this.dep = new Ee(this)),
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
  let E = b ? new Array(e.length).fill(Nt) : Nt;
  const S = (e) => {
    if (1 & m.flags && (m.dirty || e))
      if (n) {
        const e = m.run();
        if (a || y || (b ? e.some((e, t) => I(e, E[t])) : I(e, E))) {
          _ && _();
          const t = $t;
          $t = m;
          try {
            const t = [e, E === Nt ? void 0 : b && E[0] === Nt ? [] : E, v];
            ((E = e), p ? p(n, 3, t) : n(...t));
          } finally {
            $t = t;
          }
        }
      } else m.run();
  };
  return (
    u && u(S),
    (m = new re(g)),
    (m.scheduler = c ? () => c(S, !1) : S),
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
    n ? (s ? S(!0) : (E = m.run())) : c ? c(S.bind(null, !0), !0) : m.run(),
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
    r._d && Ro(-1);
    const o = on(t);
    let s;
    try {
      s = e(...n);
    } finally {
      (on(o), r._d && Ro(1));
    }
    return s;
  };
  return ((r._n = !0), (r._c = !0), (r._d = !0), r);
}
function an(e, n) {
  if (null === nn) return e;
  const r = hs(nn),
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
function En() {
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
const Sn = [Function, Array],
  wn = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Sn,
    onEnter: Sn,
    onAfterEnter: Sn,
    onEnterCancelled: Sn,
    onBeforeLeave: Sn,
    onLeave: Sn,
    onAfterLeave: Sn,
    onLeaveCancelled: Sn,
    onBeforeAppear: Sn,
    onAppear: Sn,
    onAfterAppear: Sn,
    onAppearCancelled: Sn,
  },
  Cn = (e) => {
    const t = e.subTree;
    return t.component ? Cn(t.component) : t;
  };
function On(e) {
  let t = e[0];
  if (e.length > 1)
    for (const n of e)
      if (n.type !== To) {
        t = n;
        break;
      }
  return t;
}
const Ln = {
  name: 'BaseTransition',
  props: wn,
  setup(e, { slots: t }) {
    const n = rs(),
      r = En();
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
      i.type !== To && Fn(i, c);
      let u = n.subTree && Pn(n.subTree);
      if (u && u.type !== To && !Wo(u, i) && Cn(n).type !== To) {
        let e = An(u, a, r, n);
        if ((Fn(u, e), 'out-in' === l && i.type !== To))
          return (
            (r.isLeaving = !0),
            (e.afterLeave = () => {
              ((r.isLeaving = !1), 8 & n.job.flags || n.update(), delete e.afterLeave, (u = void 0));
            }),
            In(s)
          );
        'in-out' === l && i.type !== To
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
    E = (e, t) => {
      e && Wt(e, r, 9, t);
    },
    S = (e, t) => {
      const n = t[1];
      (E(e, t), f(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n());
    },
    w = {
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
        (o && Wo(e, o) && o.el[kn] && o.el[kn](), E(r, [t]));
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
          a || ((a = !0), E(t ? o : r, [e]), w.delayedLeave && w.delayedLeave(), (e[xn] = void 0));
        });
        t ? S(t, [e, l]) : l();
      },
      leave(t, r) {
        const o = String(e.key);
        if ((t[xn] && t[xn](!0), n.isUnmounting)) return r();
        E(d, [t]);
        let s = !1;
        const a = (t[kn] = (n) => {
          s || ((s = !0), r(), E(n ? g : m, [t]), (t[kn] = void 0), x[o] === e && delete x[o]);
        });
        ((x[o] = e), h ? S(h, [t, a]) : a());
      },
      clone(e) {
        const s = An(e, t, n, r, o);
        return (o && o(s), s);
      },
    };
  return w;
}
function In(e) {
  if (Vn(e)) return (((e = zo(e)).children = null), e);
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
    a.type === Oo
      ? (128 & a.patchFlag && o++, (r = r.concat(Nn(a.children, t, l))))
      : (t || a.type !== To) && r.push(null != l ? zo(a, { key: l }) : a);
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
  const l = 4 & s.shapeFlag ? hs(s.component) : s.el,
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
      const n = rs(),
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
          const r = ms(t.type);
          r && !e(r) && m(n);
        });
      }
      function m(e) {
        const t = o.get(e);
        (!t || (a && Wo(t, a)) ? a && Yn(a) : d(t), o.delete(e), s.delete(e));
      }
      ((r.activate = (e, t, n, r, o) => {
        const s = e.component;
        (c(e, t, n, 0, l),
          i(s.vnode, e, t, n, s, l, r, e.slotScopeIds, o),
          ro(() => {
            ((s.isDeactivated = !1), s.a && P(s.a));
            const t = e.props && e.props.onVnodeMounted;
            t && Qo(t, s.parent, e);
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
              (n && Qo(n, t.parent, e), (t.isDeactivated = !0));
            }, l));
        }),
        po(
          () => [e.include, e.exclude],
          ([e, t]) => {
            (e && h((t) => Bn(e, t)), t && h((e) => !Bn(t, e)));
          },
          { flush: 'post', deep: !0 },
        ));
      let g = null;
      const _ = () => {
        null != g &&
          (Co(n.subTree.type)
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
          if (!(jo(r) && (4 & r.shapeFlag || 128 & r.shapeFlag))) return ((a = null), r);
          let l = Kn(r);
          if (l.type === To) return ((a = null), l);
          const i = l.type,
            c = ms(Wn(l) ? l.type.__asyncResolved || {} : i),
            { include: u, exclude: f, max: p } = e;
          if ((u && (!c || !Bn(u, c))) || (f && c && Bn(f, c))) return ((l.shapeFlag &= -257), (a = l), r);
          const d = null == l.key ? i : l.key,
            h = o.get(d);
          return (
            l.el && ((l = zo(l)), 128 & r.shapeFlag && (r.ssContent = l)),
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
            Co(r.type) ? r : l
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
function zn(e, t, n = ns) {
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
function Jn(e, t, n = ns, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...r) => {
          ve();
          const o = as(n),
            s = Wt(t, n, e, r);
          return (o(), ye(), s);
        });
    return (r ? o.unshift(s) : o.push(s), s);
  }
}
const Zn =
    (e) =>
    (t, n = ns) => {
      (cs && 'sp' !== e) || Jn(e, (...e) => t(...e), n);
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
function lr(e, t = ns) {
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
  const o = nn || ns;
  if (o) {
    const n = o.type;
    if (e === ir) {
      const e = ms(n, !1);
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
    return ('default' !== t && (n.name = t), Fo(), Do(Oo, null, [Ho('slot', n, r && r())], e ? -2 : 64));
  }
  let s = e[t];
  (s && s._c && (s._d = !1), Fo());
  const a = s && vr(s(n)),
    l = n.key || (a && a.key),
    i = Do(Oo, { key: (l && !g(l) ? l : `_${t}`) + (!a && r ? '_fb' : '') }, a || (r ? r() : []), a && 1 === e._ ? 64 : -2);
  return (i.scopeId && (i.slotScopeIds = [i.scopeId + '-s']), s && s._c && (s._d = !0), i);
}
function vr(e) {
  return e.some((e) => !jo(e) || (e.type !== To && !(e.type === Oo && !vr(e.children)))) ? e : null;
}
const yr = (e) => (e ? (is(e) ? hs(e) : yr(e.parent)) : null),
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
    $watch: (e) => mo.bind(e),
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
          wr && (l[n] = 0);
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
function Er() {
  return (function () {
    const e = rs();
    return e.setupContext || (e.setupContext = ds(e));
  })().slots;
}
function Sr(e) {
  return f(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
}
let wr = !0;
function Cr(e) {
  const t = Tr(e),
    n = e.proxy,
    o = e.ctx;
  ((wr = !1), t.beforeCreate && Or(t.beforeCreate, e, 'bc'));
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
    destroyed: E,
    unmounted: S,
    render: w,
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
  if (((wr = !0), a))
    for (const f in a) {
      const e = a[f],
        t = h(e) ? e.bind(n, n) : h(e.get) ? e.get.bind(n, n) : r,
        s = !h(e) && h(e.set) ? e.set.bind(n) : r,
        l = gs({ get: t, set: s });
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
    R(rr, S),
    R(or, T),
    f(A))
  )
    if (A.length) {
      const t = e.exposed || (e.exposed = {});
      A.forEach((e) => {
        Object.defineProperty(t, e, { get: () => n[e], set: (t) => (n[e] = t), enumerable: !0 });
      });
    } else e.exposed || (e.exposed = {});
  (w && e.render === r && (e.render = w), null != I && (e.inheritAttrs = I), P && (e.components = P), F && (e.directives = F), T && $n(e));
}
function Or(e, t, n) {
  Wt(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Lr(e, t, n, r) {
  let o = r.includes('.') ? go(n, r) : () => n[r];
  if (m(e)) {
    const n = t[e];
    h(n) && po(o, n);
  } else if (h(e)) po(o, e.bind(n));
  else if (_(e))
    if (f(e)) e.forEach((e) => Lr(e, t, n, r));
    else {
      const r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
      h(r) && po(o, r, e);
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
  return e ? (f(e) && f(t) ? [...new Set([...e, ...t])] : l(Object.create(null), Sr(e), Sr(null != t ? t : {}))) : t;
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
      version: vs,
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
          const s = i._ceVNode || Ho(t, n);
          return (
            (s.appContext = r),
            !0 === l ? (l = 'svg') : !1 === l && (l = void 0),
            e(s, o, l),
            (a = !0),
            (i._container = o),
            (o.__vue_app__ = i),
            hs(s.component)
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
  if (ns) {
    let n = ns.provides;
    const r = ns.parent && ns.parent.provides;
    (r === n && (n = ns.provides = Object.create(r)), (n[e] = t));
  } else;
}
function Ur(e, t, n = !1) {
  const r = rs();
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
      if (E(t)) continue;
      const c = n[t];
      let f;
      s && u(s, (f = C(t)))
        ? a && a.includes(f)
          ? ((l || (l = {}))[f] = c)
          : (r[f] = c)
        : ko(e.emitsOptions, t) || (t in o && c === o[t]) || ((o[t] = c), (i = !0));
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
          const a = as(o);
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
  return '$' !== e[0] && !E(e);
}
const Zr = (e) => '_' === e || '_ctx' === e || '$stable' === e,
  Xr = (e) => (f(e) ? e.map(Ko) : [Ko(e)]),
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
        (e && !Wo(e, t) && ((r = Q(e)), q(e, o, s, !0), (e = null)), -2 === t.patchFlag && ((i = !1), (t.dynamicChildren = null)));
        const { type: c, ref: u, shapeFlag: f } = t;
        switch (c) {
          case Lo:
            y(e, t, n, r);
            break;
          case To:
            b(e, t, n, r);
            break;
          case Ao:
            null == e && k(t, n, r, a);
            break;
          case Oo:
            M(e, t, n, r, o, s, a, l, i);
            break;
          default:
            1 & f
              ? w(e, t, n, r, o, s, a, l, i)
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
      S = ({ el: e, anchor: t }) => {
        let n;
        for (; e && e !== t; ) ((n = h(e)), s(e), (e = n));
        s(t);
      },
      w = (e, t, n, r, o, s, a, l, i) => {
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
          for (const e in h) 'value' === e || E(e) || a(f, e, null, h[e], i, r);
          ('value' in h && a(f, 'value', null, h.value, i), (d = h.onVnodeBeforeMount) && Qo(d, r, e));
        }
        _ && ln(e, null, r, 'beforeMount');
        const v = (function (e, t) {
          return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
        })(s, g);
        (v && g.beforeEnter(f),
          o(f, t, n),
          ((d = h && h.onVnodeMounted) || v || _) &&
            ro(() => {
              (d && Qo(d, r, e), v && g.enter(f), _ && ln(e, null, r, 'mounted'));
            }, s));
      },
      T = (e, t, n, r, o) => {
        if ((n && m(e, n), r)) for (let s = 0; s < r.length; s++) m(e, r[s]);
        if (o) {
          let n = o.subTree;
          if (t === n || (Co(n.type) && (n.ssContent === t || n.ssFallback === t))) {
            const t = o.vnode;
            T(e, t, t.scopeId, t.slotScopeIds, o.parent);
          }
        }
      },
      A = (e, t, n, r, o, s, a, l, i = 0) => {
        for (let c = i; c < e.length; c++) {
          const i = (e[c] = l ? Jo(e[c]) : Ko(e[c]));
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
          (g = m.onVnodeBeforeUpdate) && Qo(g, r, n, e),
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
            (g && Qo(g, r, n, e), d && ln(n, e, r, 'updated'));
          }, o);
      },
      N = (e, t, n, r, o, s, a) => {
        for (let l = 0; l < t.length; l++) {
          const i = e[l],
            c = t[l],
            u = i.el && (i.type === Oo || !Wo(i, c) || 198 & i.shapeFlag) ? d(i.el) : n;
          _(i, c, u, null, r, o, s, a, !0);
        }
      },
      R = (e, n, r, o, s) => {
        if (n !== r) {
          if (n !== t) for (const t in n) E(t) || t in r || a(e, t, n[t], null, s, o);
          for (const t in r) {
            if (E(t)) continue;
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
            s = (n ? n.appContext : e.appContext) || es,
            a = {
              uid: ts++,
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
              emitsOptions: bo(o, s),
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
          ((a.ctx = { _: a }), (a.root = n ? n.root : a), (a.emit = vo.bind(null, a)), e.ce && e.ce(a));
          return a;
        })(e, o, s));
        if (
          (Vn(e) && (i.ctx.renderer = ne),
          (function (e, t = !1, n = !1) {
            t && ss(t);
            const { props: r, children: o } = e.vnode,
              s = is(e);
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
                    const n = (e.setupContext = r.length > 1 ? ds(e) : null),
                      o = as(e),
                      s = jt(r, e, 0, [e.props, n]),
                      a = v(s);
                    if ((ye(), o(), (!a && !e.sp) || Wn(e) || $n(e), a)) {
                      if ((s.then(ls, ls), t))
                        return s
                          .then((t) => {
                            us(e, t);
                          })
                          .catch((t) => {
                            Vt(t, e, 0);
                          });
                      e.asyncDep = s;
                    } else us(e, s);
                  } else fs(e);
                })(e, t)
              : void 0;
            t && ss(!1);
          })(i, !1, l),
          i.asyncDep)
        ) {
          if ((s && s.registerDep(i, V, l), !e.el)) {
            const t = (i.subTree = Ho(To));
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
            if (!(n && i >= 0)) return !((!o && !l) || (l && l.$stable)) || (r !== a && (r ? !a || wo(r, a, c) : !!a));
            if (1024 & i) return !0;
            if (16 & i) return r ? wo(r, a, c) : !!a;
            if (8 & i) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (a[n] !== r[n] && !ko(c, n)) return !0;
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
              (u = t.props && t.props.onVnodeBeforeUpdate) && Qo(u, i, t, c),
              ao(e, !0));
            const p = xo(e),
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
              (u = t.props && t.props.onVnodeUpdated) && ro(() => Qo(u, i, t, c), o));
          } else {
            let a;
            const { el: l, props: i } = t,
              { bm: c, m: u, parent: f, root: p, type: d } = e,
              h = Wn(t);
            (ao(e, !1), c && P(c), !h && (a = i && i.onVnodeBeforeMount) && Qo(a, f, t), ao(e, !0));
            {
              p.ce && !1 !== p.ce._def.shadowRoot && p.ce._injectChildStyle(d);
              const a = (e.subTree = xo(e));
              (_(null, a, n, r, e, o, s), (t.el = a.el));
            }
            if ((u && ro(u, o), !h && (a = i && i.onVnodeMounted))) {
              const e = t;
              ro(() => Qo(a, f, e), o);
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
                if (ko(e.emitsOptions, a)) continue;
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
          const n = (t[d] = c ? Jo(t[d]) : Ko(t[d]));
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
            o = (t[u] = c ? Jo(t[u]) : Ko(t[u]));
          if (!Wo(n, o)) break;
          (_(n, o, r, null, s, a, l, i, c), u++);
        }
        for (; u <= p && u <= d; ) {
          const n = e[p],
            o = (t[d] = c ? Jo(t[d]) : Ko(t[d]));
          if (!Wo(n, o)) break;
          (_(n, o, r, null, s, a, l, i, c), p--, d--);
        }
        if (u > p) {
          if (u <= d) {
            const e = d + 1,
              n = e < f ? t[e].el : o;
            for (; u <= d; ) (_(null, (t[u] = c ? Jo(t[u]) : Ko(t[u])), r, n, s, a, l, i, c), u++);
          }
        } else if (u > d) for (; u <= p; ) (q(e[u], s, a, !0), u++);
        else {
          const h = u,
            m = u,
            g = new Map();
          for (u = m; u <= d; u++) {
            const e = (t[u] = c ? Jo(t[u]) : Ko(t[u]));
            null != e.key && g.set(e.key, u);
          }
          let v,
            y = 0;
          const b = d - m + 1;
          let k = !1,
            x = 0;
          const E = new Array(b);
          for (u = 0; u < b; u++) E[u] = 0;
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
                if (0 === E[v - m] && Wo(n, t[v])) {
                  o = v;
                  break;
                }
            void 0 === o ? q(n, s, a, !0) : ((E[o - m] = u + 1), o >= x ? (x = o) : (k = !0), _(n, t[o], r, null, s, a, l, i, c), y++);
          }
          const S = k
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
              })(E)
            : n;
          for (v = S.length - 1, u = b - 1; u >= 0; u--) {
            const e = m + u,
              n = t[e],
              p = t[e + 1],
              d = e + 1 < f ? p.el || p.placeholder : o;
            0 === E[u] ? _(null, n, r, d, s, a, l, i, c) : k && (v < 0 || u !== S[v] ? z(n, r, d, 2) : v--);
          }
        }
      },
      z = (e, t, n, r, a = null) => {
        const { el: l, type: i, transition: c, children: u, shapeFlag: f } = e;
        if (6 & f) return void z(e.component.subTree, t, n, r);
        if (128 & f) return void e.suspense.move(t, n, r);
        if (64 & f) return void i.move(e, t, n, ne);
        if (i === Oo) {
          o(l, t, n);
          for (let e = 0; e < u.length; e++) z(u[e], t, n, r);
          return void o(e.anchor, t, n);
        }
        if (i === Ao) return void x(e, t, n);
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
        if ((m && (g = a && a.onVnodeBeforeUnmount) && Qo(g, t, e), 6 & u)) J(e.component, n, r);
        else {
          if (128 & u) return void e.suspense.unmount(n, r);
          (h && ln(e, null, t, 'beforeUnmount'),
            64 & u
              ? e.type.remove(e, t, n, ne, r)
              : c && !c.hasOnce && (s !== Oo || (f > 0 && 64 & f))
                ? Z(c, t, n, !1, !0)
                : ((s === Oo && 384 & f) || (!o && 16 & u)) && Z(i, t, n),
            r && Y(e));
        }
        ((m && (g = a && a.onVnodeUnmounted)) || h) &&
          ro(() => {
            (g && Qo(g, t, e), h && ln(e, null, t, 'unmounted'));
          }, n);
      },
      Y = (e) => {
        const { type: t, el: n, anchor: r, transition: o } = e;
        if (t === Oo) return void K(n, r);
        if (t === Ao) return void S(e);
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
        ((t.patchFlag <= 0 || 32 === t.patchFlag) && ((t = o[s] = Jo(o[s])), (t.el = e.el)), n || -2 === t.patchFlag || lo(e, t)),
        t.type === Lo && -1 !== t.patchFlag && (t.el = e.el),
        t.type !== To || t.el || (t.el = e.el));
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
function po(e, t, n) {
  return ho(e, t, n);
}
function ho(e, n, o = t) {
  const { immediate: s, deep: a, flush: i, once: c } = o,
    u = l({}, o),
    f = (n && s) || (!n && 'post' !== i);
  let p;
  if (cs)
    if ('sync' === i) {
      const e = fo();
      p = e.__watcherHandles || (e.__watcherHandles = []);
    } else if (!f) {
      const e = () => {};
      return ((e.stop = r), (e.resume = r), (e.pause = r), e);
    }
  const d = ns;
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
  return (cs && (p ? p.push(m) : f && m()), m);
}
function mo(e, t, n) {
  const r = this.proxy,
    o = m(e) ? (e.includes('.') ? go(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  h(t) ? (s = t) : ((s = t.handler), (n = t));
  const a = as(this),
    l = ho(o, s.bind(r), n);
  return (a(), l);
}
function go(e, t) {
  const n = t.split('.');
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
const _o = (e, t) =>
  'modelValue' === t || 'model-value' === t ? e.modelModifiers : e[`${t}Modifiers`] || e[`${C(t)}Modifiers`] || e[`${L(t)}Modifiers`];
function vo(e, n, ...r) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || t;
  let s = r;
  const a = n.startsWith('update:'),
    l = a && _o(o, n.slice(7));
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
const yo = new WeakMap();
function bo(e, t, n = !1) {
  const r = n ? yo : t.emitsCache,
    o = r.get(e);
  if (void 0 !== o) return o;
  const s = e.emits;
  let a = {},
    i = !1;
  if (!h(e)) {
    const r = (e) => {
      const n = bo(e, t, !0);
      n && ((i = !0), l(a, n));
    };
    (!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r));
  }
  return s || i ? (f(s) ? s.forEach((e) => (a[e] = null)) : l(a, s), _(e) && r.set(e, a), a) : (_(e) && r.set(e, null), null);
}
function ko(e, t) {
  return !(!e || !s(t)) && ((t = t.slice(2).replace(/Once$/, '')), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, L(t)) || u(e, t));
}
function xo(e) {
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
      ((v = Ko(u.call(t, e, f, p, h, d, m))), (y = i));
    } else {
      const e = t;
      (0, (v = Ko(e.length > 1 ? e(p, { attrs: i, slots: l, emit: c }) : e(p, null))), (y = t.props ? i : Eo(i)));
    }
  } catch (k) {
    ((Io.length = 0), Vt(k, e, 1), (v = Ho(To)));
  }
  let b = v;
  if (y && !1 !== g) {
    const e = Object.keys(y),
      { shapeFlag: t } = b;
    e.length && 7 & t && (s && e.some(a) && (y = So(y, s)), (b = zo(b, y, !1, !0)));
  }
  return (
    n.dirs && ((b = zo(b, null, !1, !0)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
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
function wo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !ko(n, s)) return !0;
  }
  return !1;
}
const Co = (e) => e.__isSuspense;
const Oo = Symbol.for('v-fgt'),
  Lo = Symbol.for('v-txt'),
  To = Symbol.for('v-cmt'),
  Ao = Symbol.for('v-stc'),
  Io = [];
let Po = null;
function Fo(e = !1) {
  Io.push((Po = e ? null : []));
}
let No = 1;
function Ro(e, t = !1) {
  ((No += e), e < 0 && Po && t && (Po.hasOnce = !0));
}
function $o(e) {
  return ((e.dynamicChildren = No > 0 ? Po || n : null), Io.pop(), (Po = Io[Io.length - 1] || null), No > 0 && Po && Po.push(e), e);
}
function Mo(e, t, n, r, o, s) {
  return $o(Bo(e, t, n, r, o, s, !0));
}
function Do(e, t, n, r, o) {
  return $o(Ho(e, t, n, r, o, !0));
}
function jo(e) {
  return !!e && !0 === e.__v_isVNode;
}
function Wo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vo = ({ key: e }) => (null != e ? e : null),
  Uo = ({ ref: e, ref_key: t, ref_for: n }) => (
    'number' == typeof e && (e = '' + e),
    null != e ? (m(e) || bt(e) || h(e) ? { i: nn, r: e, k: t, f: !!n } : e) : null
  );
function Bo(e, t = null, n = null, r = 0, o = null, s = e === Oo ? 0 : 1, a = !1, l = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vo(t),
    ref: t && Uo(t),
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
    l ? (Zo(i, n), 128 & s && e.normalize(i)) : n && (i.shapeFlag |= m(n) ? 8 : 16),
    No > 0 && !a && Po && (i.patchFlag > 0 || 6 & s) && 32 !== i.patchFlag && Po.push(i),
    i
  );
}
const Ho = function (e, t = null, n = null, r = 0, o = null, s = !1) {
  (e && e !== ur) || (e = To);
  if (jo(e)) {
    const r = zo(e, t, !0);
    return (n && Zo(r, n), No > 0 && !s && Po && (6 & r.shapeFlag ? (Po[Po.indexOf(e)] = r) : Po.push(r)), (r.patchFlag = -2), r);
  }
  ((a = e), h(a) && '__vccOpts' in a && (e = e.__vccOpts));
  var a;
  if (t) {
    t = Go(t);
    let { class: e, style: n } = t;
    (e && !m(e) && (t.class = U(e)), _(n) && (mt(n) && !f(n) && (n = l({}, n)), (t.style = M(n))));
  }
  const i = m(e) ? 1 : Co(e) ? 128 : un(e) ? 64 : _(e) ? 4 : h(e) ? 2 : 0;
  return Bo(e, t, n, r, o, i, s, !0);
};
function Go(e) {
  return e ? (mt(e) || Gr(e) ? l({}, e) : e) : null;
}
function zo(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: a, children: l, transition: i } = e,
    c = t ? Xo(o || {}, t) : o,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Vo(c),
      ref: t && t.ref ? (n && s ? (f(s) ? s.concat(Uo(t)) : [s, Uo(t)]) : Uo(t)) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Oo ? (-1 === a ? 16 : 16 | a) : a,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: i,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && zo(e.ssContent),
      ssFallback: e.ssFallback && zo(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (i && r && Fn(u, i.clone(u)), u);
}
function qo(e = ' ', t = 0) {
  return Ho(Lo, null, e, t);
}
function Yo(e = '', t = !1) {
  return t ? (Fo(), Do(To, null, e)) : Ho(To, null, e);
}
function Ko(e) {
  return null == e || 'boolean' == typeof e ? Ho(To) : f(e) ? Ho(Oo, null, e.slice()) : jo(e) ? Jo(e) : Ho(Lo, null, String(e));
}
function Jo(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : zo(e);
}
function Zo(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (null == t) t = null;
  else if (f(t)) n = 16;
  else if ('object' == typeof t) {
    if (65 & r) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), Zo(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const r = t._;
      r || Gr(t) ? 3 === r && nn && (1 === nn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024))) : (t._ctx = nn);
    }
  } else h(t) ? ((t = { default: t, _ctx: nn }), (n = 32)) : ((t = String(t)), 64 & r ? ((n = 16), (t = [qo(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function Xo(...e) {
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
function Qo(e, t, n, r = null) {
  Wt(e, t, 7, [n, r]);
}
const es = Mr();
let ts = 0;
let ns = null;
const rs = () => ns || nn;
let os, ss;
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
  ((os = t('__VUE_INSTANCE_SETTERS__', (e) => (ns = e))), (ss = t('__VUE_SSR_SETTERS__', (e) => (cs = e))));
}
const as = (e) => {
    const t = ns;
    return (
      os(e),
      e.scope.on(),
      () => {
        (e.scope.off(), os(t));
      }
    );
  },
  ls = () => {
    (ns && ns.scope.off(), os(null));
  };
function is(e) {
  return 4 & e.vnode.shapeFlag;
}
let cs = !1;
function us(e, t, n) {
  (h(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : _(t) && (e.setupState = Ot(t)), fs(e));
}
function fs(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || r);
  {
    const t = as(e);
    ve();
    try {
      Cr(e);
    } finally {
      (ye(), t());
    }
  }
}
const ps = { get: (e, t) => (Te(e, 0, ''), e[t]) };
function ds(e) {
  const t = (t) => {
    e.exposed = t || {};
  };
  return { attrs: new Proxy(e.attrs, ps), slots: e.slots, emit: e.emit, expose: t };
}
function hs(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ot(_t(e.exposed)), {
          get: (t, n) => (n in t ? t[n] : n in br ? br[n](e) : void 0),
          has: (e, t) => t in e || t in br,
        }))
    : e.proxy;
}
function ms(e, t = !0) {
  return h(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
const gs = (e, t) => {
  const n = (function (e, t, n = !1) {
    let r, o;
    return (h(e) ? (r = e) : ((r = e.get), (o = e.set)), new Ft(r, o, n));
  })(e, 0, cs);
  return n;
};
function _s(e, t, n) {
  try {
    Ro(-1);
    const r = arguments.length;
    return 2 === r
      ? _(t) && !f(t)
        ? jo(t)
          ? Ho(e, null, [t])
          : Ho(e, t)
        : Ho(e, null, t)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : 3 === r && jo(n) && (n = [n]), Ho(e, t, n));
  } finally {
    Ro(1);
  }
}
const vs = '3.5.22';
/**
 * @vue/runtime-dom v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ys;
const bs = 'undefined' != typeof window && window.trustedTypes;
if (bs)
  try {
    ys = bs.createPolicy('vue', { createHTML: (e) => e });
  } catch (yp) {}
const ks = ys ? (e) => ys.createHTML(e) : (e) => e,
  xs = 'undefined' != typeof document ? document : null,
  Es = xs && xs.createElement('template'),
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
          ? xs.createElementNS('http://www.w3.org/2000/svg', e)
          : 'mathml' === t
            ? xs.createElementNS('http://www.w3.org/1998/Math/MathML', e)
            : n
              ? xs.createElement(e, { is: n })
              : xs.createElement(e);
      return ('select' === e && r && null != r.multiple && o.setAttribute('multiple', r.multiple), o);
    },
    createText: (e) => xs.createTextNode(e),
    createComment: (e) => xs.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => xs.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, o, s) {
      const a = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(!0), n), o !== s && (o = o.nextSibling); );
      else {
        Es.innerHTML = ks('svg' === r ? `<svg>${e}</svg>` : 'mathml' === r ? `<math>${e}</math>` : e);
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
  ws = 'transition',
  Cs = 'animation',
  Os = Symbol('_vtc'),
  Ls = {
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
  Ts = l({}, wn, Ls),
  As = ((e) => ((e.displayName = 'Transition'), (e.props = Ts), e))((e, { slots: t }) => _s(Ln, Fs(e), t)),
  Is = (e, t = []) => {
    f(e) ? e.forEach((e) => e(...t)) : e && e(...t);
  },
  Ps = (e) => !!e && (f(e) ? e.some((e) => e.length > 1) : e.length > 1);
function Fs(e) {
  const t = {};
  for (const l in e) l in Ls || (t[l] = e[l]);
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
      if (_(e)) return [Ns(e.enter), Ns(e.leave)];
      {
        const t = Ns(e);
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
      onLeaveCancelled: E,
      onBeforeAppear: S = y,
      onAppear: w = b,
      onAppearCancelled: C = k,
    } = t,
    O = (e, t, n, r) => {
      ((e._enterCancelled = r), $s(e, t ? f : i), $s(e, t ? u : a), n && n());
    },
    L = (e, t) => {
      ((e._isLeaving = !1), $s(e, p), $s(e, h), $s(e, d), t && t());
    },
    T = (e) => (t, n) => {
      const o = e ? w : b,
        a = () => O(t, e, n);
      (Is(o, [t, a]),
        Ms(() => {
          ($s(t, e ? c : s), Rs(t, e ? f : i), Ps(o) || js(t, r, g, a));
        }));
    };
  return l(t, {
    onBeforeEnter(e) {
      (Is(y, [e]), Rs(e, s), Rs(e, a));
    },
    onBeforeAppear(e) {
      (Is(S, [e]), Rs(e, c), Rs(e, u));
    },
    onEnter: T(!1),
    onAppear: T(!0),
    onLeave(e, t) {
      e._isLeaving = !0;
      const n = () => L(e, t);
      (Rs(e, p),
        e._enterCancelled ? (Rs(e, d), Bs(e)) : (Bs(e), Rs(e, d)),
        Ms(() => {
          e._isLeaving && ($s(e, p), Rs(e, h), Ps(x) || js(e, r, v, n));
        }),
        Is(x, [e, n]));
    },
    onEnterCancelled(e) {
      (O(e, !1, void 0, !0), Is(k, [e]));
    },
    onAppearCancelled(e) {
      (O(e, !0, void 0, !0), Is(C, [e]));
    },
    onLeaveCancelled(e) {
      (L(e), Is(E, [e]));
    },
  });
}
function Ns(e) {
  const t = ((e) => {
    const t = m(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  })(e);
  return t;
}
function Rs(e, t) {
  (t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[Os] || (e[Os] = new Set())).add(t));
}
function $s(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
  const n = e[Os];
  n && (n.delete(t), n.size || (e[Os] = void 0));
}
function Ms(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ds = 0;
function js(e, t, n, r) {
  const o = (e._endId = ++Ds),
    s = () => {
      o === e._endId && r();
    };
  if (null != n) return setTimeout(s, n);
  const { type: a, timeout: l, propCount: i } = Ws(e, t);
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
function Ws(e, t) {
  const n = window.getComputedStyle(e),
    r = (e) => (n[e] || '').split(', '),
    o = r(`${ws}Delay`),
    s = r(`${ws}Duration`),
    a = Vs(o, s),
    l = r(`${Cs}Delay`),
    i = r(`${Cs}Duration`),
    c = Vs(l, i);
  let u = null,
    f = 0,
    p = 0;
  t === ws
    ? a > 0 && ((u = ws), (f = a), (p = s.length))
    : t === Cs
      ? c > 0 && ((u = Cs), (f = c), (p = i.length))
      : ((f = Math.max(a, c)), (u = f > 0 ? (a > c ? ws : Cs) : null), (p = u ? (u === ws ? s.length : i.length) : 0));
  return { type: u, timeout: f, propCount: p, hasTransform: u === ws && /\b(?:transform|all)(?:,|$)/.test(r(`${ws}Property`).toString()) };
}
function Vs(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((t, n) => Us(t) + Us(e[n])));
}
function Us(e) {
  return 'auto' === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(',', '.'));
}
function Bs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
const Hs = Symbol('_vod'),
  Gs = Symbol('_vsh'),
  zs = {
    name: 'show',
    beforeMount(e, { value: t }, { transition: n }) {
      ((e[Hs] = 'none' === e.style.display ? '' : e.style.display), n && t ? n.beforeEnter(e) : qs(e, t));
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), qs(e, !0), r.enter(e))
            : r.leave(e, () => {
                qs(e, !1);
              })
          : qs(e, t));
    },
    beforeUnmount(e, { value: t }) {
      qs(e, t);
    },
  };
function qs(e, t) {
  ((e.style.display = t ? e[Hs] : 'none'), (e[Gs] = !t));
}
const Ys = Symbol(''),
  Ks = /(?:^|;)\s*display\s*:/;
const Js = /\s*!important$/;
function Zs(e, t, n) {
  if (f(n)) n.forEach((n) => Zs(e, t, n));
  else if ((null == n && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = (function (e, t) {
      const n = Qs[t];
      if (n) return n;
      let r = C(t);
      if ('filter' !== r && r in e) return (Qs[t] = r);
      r = T(r);
      for (let o = 0; o < Xs.length; o++) {
        const n = Xs[o] + r;
        if (n in e) return (Qs[t] = n);
      }
      return t;
    })(e, t);
    Js.test(n) ? e.setProperty(L(r), n.replace(Js, ''), 'important') : (e[r] = n);
  }
}
const Xs = ['Webkit', 'Moz', 'ms'],
  Qs = {};
const ea = 'http://www.w3.org/1999/xlink';
function ta(e, t, n, r, o, s = H(t)) {
  r && t.startsWith('xlink:')
    ? null == n
      ? e.removeAttributeNS(ea, t.slice(6, t.length))
      : e.setAttributeNS(ea, t, n)
    : null == n || (s && !G(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? '' : g(n) ? String(n) : n);
}
function na(e, t, n, r, o) {
  if ('innerHTML' === t || 'textContent' === t) return void (null != n && (e[t] = 'innerHTML' === t ? ks(n) : n));
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
  } catch (yp) {}
  a && e.removeAttribute(o || t);
}
function ra(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const oa = Symbol('_vei');
function sa(e, t, n, r, o = null) {
  const s = e[oa] || (e[oa] = {}),
    a = s[t];
  if (r && a) a.value = r;
  else {
    const [n, l] = (function (e) {
      let t;
      if (aa.test(e)) {
        let n;
        for (t = {}; (n = e.match(aa)); ) ((e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0));
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
        return ((n.value = e), (n.attached = ca()), n);
      })(r, o));
      ra(e, n, a, l);
    } else
      a &&
        (!(function (e, t, n, r) {
          e.removeEventListener(t, n, r);
        })(e, n, a, l),
        (s[t] = void 0));
  }
}
const aa = /(?:Once|Passive|Capture)$/;
let la = 0;
const ia = Promise.resolve(),
  ca = () => la || (ia.then(() => (la = 0)), (la = Date.now()));
const ua = (e) => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123;
const fa = new WeakMap(),
  pa = new WeakMap(),
  da = Symbol('_moveCb'),
  ha = Symbol('_enterCb'),
  ma = ((e) => (delete e.props.mode, e))({
    name: 'TransitionGroup',
    props: l({}, Ts, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = rs(),
        r = En();
      let o, s;
      return (
        tr(() => {
          if (!o.length) return;
          const t = e.moveClass || `${e.name || 'v'}-move`;
          if (
            !(function (e, t, n) {
              const r = e.cloneNode(),
                o = e[Os];
              o &&
                o.forEach((e) => {
                  e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
                });
              (n.split(/\s+/).forEach((e) => e && r.classList.add(e)), (r.style.display = 'none'));
              const s = 1 === t.nodeType ? t : t.parentNode;
              s.appendChild(r);
              const { hasTransform: a } = Ws(r);
              return (s.removeChild(r), a);
            })(o[0].el, n.vnode.el, t)
          )
            return void (o = []);
          (o.forEach(ga), o.forEach(_a));
          const r = o.filter(va);
          (Bs(n.vnode.el),
            r.forEach((e) => {
              const n = e.el,
                r = n.style;
              (Rs(n, t), (r.transform = r.webkitTransform = r.transitionDuration = ''));
              const o = (n[da] = (e) => {
                (e && e.target !== n) ||
                  (e && !e.propertyName.endsWith('transform')) ||
                  (n.removeEventListener('transitionend', o), (n[da] = null), $s(n, t));
              });
              n.addEventListener('transitionend', o);
            }),
            (o = []));
        }),
        () => {
          const a = gt(e),
            l = Fs(a);
          let i = a.tag || Oo;
          if (((o = []), s))
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.el && t.el instanceof Element && (o.push(t), Fn(t, An(t, l, r, n)), fa.set(t, t.el.getBoundingClientRect()));
            }
          s = t.default ? Nn(t.default()) : [];
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            null != t.key && Fn(t, An(t, l, r, n));
          }
          return Ho(i, null, s);
        }
      );
    },
  });
function ga(e) {
  const t = e.el;
  (t[da] && t[da](), t[ha] && t[ha]());
}
function _a(e) {
  pa.set(e, e.el.getBoundingClientRect());
}
function va(e) {
  const t = fa.get(e),
    n = pa.get(e),
    r = t.left - n.left,
    o = t.top - n.top;
  if (r || o) {
    const t = e.el.style;
    return ((t.transform = t.webkitTransform = `translate(${r}px,${o}px)`), (t.transitionDuration = '0s'), e);
  }
}
Symbol('_assign');
const ya = ['ctrl', 'shift', 'alt', 'meta'],
  ba = {
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
    exact: (e, t) => ya.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  ka = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join('.');
    return (
      n[r] ||
      (n[r] = (n, ...r) => {
        for (let e = 0; e < t.length; e++) {
          const r = ba[t[e]];
          if (r && r(n, t)) return;
        }
        return e(n, ...r);
      })
    );
  },
  xa = l(
    {
      patchProp: (e, t, n, r, o, l) => {
        const i = 'svg' === o;
        'class' === t
          ? (function (e, t, n) {
              const r = e[Os];
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
                        null == n[t] && Zs(r, t, '');
                      }
                    else for (const e in t) null == n[e] && Zs(r, e, '');
                  for (const e in n) ('display' === e && (s = !0), Zs(r, e, n[e]));
                } else if (o) {
                  if (t !== n) {
                    const e = r[Ys];
                    (e && (n += ';' + e), (r.cssText = n), (s = Ks.test(n)));
                  }
                } else t && e.removeAttribute('style');
                Hs in e && ((e[Hs] = s ? r.display : ''), e[Gs] && (r.display = 'none'));
              })(e, n, r)
            : s(t)
              ? a(t) || sa(e, t, 0, r, l)
              : (
                    '.' === t[0]
                      ? ((t = t.slice(1)), 1)
                      : '^' === t[0]
                        ? ((t = t.slice(1)), 0)
                        : (function (e, t, n, r) {
                            if (r) return 'innerHTML' === t || 'textContent' === t || !!(t in e && ua(t) && h(n));
                            if ('spellcheck' === t || 'draggable' === t || 'translate' === t || 'autocorrect' === t) return !1;
                            if ('form' === t) return !1;
                            if ('list' === t && 'INPUT' === e.tagName) return !1;
                            if ('type' === t && 'TEXTAREA' === e.tagName) return !1;
                            if ('width' === t || 'height' === t) {
                              const t = e.tagName;
                              if ('IMG' === t || 'VIDEO' === t || 'CANVAS' === t || 'SOURCE' === t) return !1;
                            }
                            if (ua(t) && m(n)) return !1;
                            return t in e;
                          })(e, t, r, i)
                  )
                ? (na(e, t, r),
                  e.tagName.includes('-') || ('value' !== t && 'checked' !== t && 'selected' !== t) || ta(e, t, r, i, 0, 'value' !== t))
                : !e._isVueCE || (!/[A-Z]/.test(t) && m(r))
                  ? ('true-value' === t ? (e._trueValue = r) : 'false-value' === t && (e._falseValue = r), ta(e, t, r, i))
                  : na(e, C(t), r, 0, t);
      },
    },
    Ss,
  );
let Ea;
function Sa() {
  return Ea || (Ea = oo(xa));
}
const wa = (...e) => {
    Sa().render(...e);
  },
  Ca = (...e) => {
    const t = Sa().createApp(...e),
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
const Oa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const La = Oa({}, [
    [
      'render',
      function (e, t) {
        const n = cr('router-view');
        return (Fo(), Do(n));
      },
    ],
  ]),
  Ta = Object.freeze(
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
  Aa = Object.freeze(Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: 'Module' })),
  Ia = Object.freeze(
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
function Pa(e, t) {}
const Fa = 'undefined' != typeof window,
  Na = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Ra = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027'),
  $a = (e) => 'number' == typeof e && isFinite(e),
  Ma = (e) => '[object RegExp]' === el(e),
  Da = (e) => tl(e) && 0 === Object.keys(e).length,
  ja = Object.assign,
  Wa = Object.create,
  Va = (e = null) => Wa(e);
let Ua;
const Ba = () =>
  Ua ||
  (Ua =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : Va());
function Ha(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/\//g, '&#x2F;')
    .replace(/=/g, '&#x3D;');
}
function Ga(e) {
  return e
    .replace(/&(?![a-zA-Z0-9#]{2,6};)/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
const za = Object.prototype.hasOwnProperty;
function qa(e, t) {
  return za.call(e, t);
}
const Ya = Array.isArray,
  Ka = (e) => 'function' == typeof e,
  Ja = (e) => 'string' == typeof e,
  Za = (e) => 'boolean' == typeof e,
  Xa = (e) => null !== e && 'object' == typeof e,
  Qa = Object.prototype.toString,
  el = (e) => Qa.call(e),
  tl = (e) => '[object Object]' === el(e);
function nl(e, t = '') {
  return e.reduce((e, n, r) => (0 === r ? e + n : e + t + n), '');
}
const rl = (e) => !Xa(e) || Ya(e);
function ol(e, t) {
  if (rl(e) || rl(t)) throw new Error('Invalid value');
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: e, des: t } = n.pop();
    Object.keys(e).forEach((r) => {
      '__proto__' !== r &&
        (Xa(e[r]) && !Xa(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : Va()),
        rl(t[r]) || rl(e[r]) ? (t[r] = e[r]) : n.push({ src: e[r], des: t[r] }));
    });
  }
}
/*!
 * message-compiler v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */ function sl(e, t, n) {
  return { start: e, end: t };
}
const al = 1,
  ll = 2,
  il = 3,
  cl = 4,
  ul = 5,
  fl = 6,
  pl = 7,
  dl = 8,
  hl = 9,
  ml = 10,
  gl = 11,
  _l = 12,
  vl = 13,
  yl = 14;
function bl(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n,
    a = new SyntaxError(String(e));
  return ((a.code = e), t && (a.location = t), (a.domain = r), a);
}
function kl(e) {
  throw e;
}
const xl = ' ',
  El = '\n',
  Sl = String.fromCharCode(8232),
  wl = String.fromCharCode(8233);
function Cl(e) {
  const t = e;
  let n = 0,
    r = 1,
    o = 1,
    s = 0;
  const a = (e) => '\r' === t[e] && t[e + 1] === El,
    l = (e) => t[e] === wl,
    i = (e) => t[e] === Sl,
    c = (e) => a(e) || ((e) => t[e] === El)(e) || l(e) || i(e),
    u = (e) => (a(e) || l(e) || i(e) ? El : t[e]);
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
const Ol = void 0;
function Ll(e, t = {}) {
  const n = !1 !== t.location,
    r = Cl(e),
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
      const r = bl(e, n ? sl(s.startLoc, t) : null, { domain: 'tokenizer', args: o });
      u(r);
    }
  }
  function p(e, t, r) {
    ((e.endLoc = s()), (e.currentType = t));
    const o = { type: t };
    return (n && (o.loc = sl(e.startLoc, e.endLoc)), null != r && (o.value = r), o);
  }
  const d = (e) => p(e, 13);
  function h(e, t) {
    return e.currentChar() === t ? (e.next(), t) : (f(al, s(), 0, t), '');
  }
  function m(e) {
    let t = '';
    for (; e.currentPeek() === xl || e.currentPeek() === El; ) ((t += e.currentPeek()), e.peek());
    return t;
  }
  function g(e) {
    const t = m(e);
    return (e.skipToPeek(), t);
  }
  function _(e) {
    if (e === Ol) return !1;
    const t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || 95 === t;
  }
  function v(e, t) {
    const { currentType: n } = t;
    if (2 !== n) return !1;
    m(e);
    const r = (function (e) {
      if (e === Ol) return !1;
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
              ? !(r === xl || r === El)
              : o === xl
                ? (e.peek(), n(!0, xl))
                : o !== El || (e.peek(), n(!0, El))
            : t;
      },
      r = n();
    return (t && e.resetPeek(), r);
  }
  function k(e, t) {
    const n = e.currentChar();
    return n === Ol ? Ol : t(n) ? (e.next(), n) : null;
  }
  function x(e) {
    const t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || (t >= 48 && t <= 57) || 95 === t || 36 === t;
  }
  function E(e) {
    return k(e, x);
  }
  function S(e) {
    const t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || (t >= 48 && t <= 57) || 95 === t || 36 === t || 45 === t;
  }
  function w(e) {
    return k(e, S);
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
    return "'" !== e && e !== El;
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
        return (f(cl, s(), 0, t), '');
    }
  }
  function F(e, t, n) {
    h(e, t);
    let r = '';
    for (let o = 0; o < n; o++) {
      const n = T(e);
      if (!n) {
        f(ul, s(), 0, `\\${t}${r}${e.currentChar()}`);
        break;
      }
      r += n;
    }
    return `\\${t}${r}`;
  }
  function N(e) {
    return '{' !== e && '}' !== e && e !== xl && e !== El;
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
        return (t.braceNest >= 1 && f(hl, s(), 0), e.next(), (n = p(t, 2, '{')), g(e), t.braceNest++, n);
      case '}':
        return (
          t.braceNest > 0 && 2 === t.currentType && f(dl, s(), 0),
          e.next(),
          (n = p(t, 3, '}')),
          t.braceNest--,
          t.braceNest > 0 && g(e),
          t.inLinked && 0 === t.braceNest && (t.inLinked = !1),
          n
        );
      case '@':
        return (t.braceNest > 0 && f(pl, s(), 0), (n = D(e, t) || d(t)), (t.braceNest = 0), n);
      default: {
        let r = !0,
          o = !0,
          a = !0;
        if (y(e)) return (t.braceNest > 0 && f(pl, s(), 0), (n = p(t, 1, $(e))), (t.braceNest = 0), (t.inLinked = !1), n);
        if (t.braceNest > 0 && (4 === t.currentType || 5 === t.currentType || 6 === t.currentType))
          return (f(pl, s(), 0), (t.braceNest = 0), j(e, t));
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
                for (; (t = w(e)); ) n += t;
                const r = e.currentChar();
                if (r && '}' !== r && r !== Ol && r !== xl && r !== El && '　' !== r) {
                  const t = R(e);
                  return (f(ll, s(), 0, n + t), n + t);
                }
                return (e.currentChar() === Ol && f(pl, s(), 0), n);
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
                return ('-' === e.currentChar() ? (e.next(), (t += `-${A(e)}`)) : (t += A(e)), e.currentChar() === Ol && f(pl, s(), 0), t);
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
                return r === El || r === Ol ? (f(il, s(), 0), r === El && (e.next(), h(e, "'")), n) : (h(e, "'"), n);
              })(e),
            )),
            g(e),
            n
          );
        if (!r && !o && !a) return ((n = p(t, 12, R(e))), f(ll, s(), 0, n.value), g(e), n);
        break;
      }
    }
    return n;
  }
  function D(e, t) {
    const { currentType: n } = t;
    let r = null;
    const o = e.currentChar();
    switch (((7 !== n && 8 !== n && 11 !== n && 9 !== n) || (o !== El && o !== xl) || f(ml, s(), 0), o)) {
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
                    for (; (t = E(e)); ) n += t;
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
                          : !('@' === t || '|' === t || ':' === t || '.' === t || t === xl || !t) &&
                              (t === El ? (e.peek(), r()) : b(e, !1));
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
                              ? r === xl
                                ? n
                                : ((n += r), e.next(), t(n))
                              : n;
                          };
                          return t('');
                        })(e),
                      ))
                : (7 === n && f(ml, s(), 0), (t.braceNest = 0), (t.inLinked = !1), j(e, t));
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
        return (f(fl, s(), 0), e.next(), p(t, 3, '}'));
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
                if (n === xl || n === El)
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
        r.currentChar() === Ol ? p(i, 13) : j(r, i)
      );
    },
    currentOffset: o,
    currentPosition: s,
    context: c,
  };
}
const Tl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Al(e, t, n) {
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
function Il(e = {}) {
  const t = !1 !== e.location,
    { onError: n } = e;
  function r(e, r, o, s, ...a) {
    const l = e.currentPosition();
    if (((l.offset += s), (l.column += s), n)) {
      const e = bl(r, t ? sl(o, l) : null, { domain: 'parser', args: a });
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
    return ((l.value = t.replace(Tl, Al)), e.nextToken(), s(l, e.currentOffset(), e.currentPosition()), l);
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
          ? (r(e, _l, n.lastStartLoc, 0), (i.value = ''), s(i, a, l), { nextConsumeToken: t, node: i })
          : (null == t.value && r(e, yl, n.lastStartLoc, 0, Pl(t)),
            (i.value = t.value || ''),
            s(i, e.currentOffset(), e.currentPosition()),
            { node: i });
      })(e);
      ((n.modifier = t.node), (a = t.nextConsumeToken || e.nextToken()));
    }
    switch ((9 !== a.type && r(e, yl, t.lastStartLoc, 0, Pl(a)), (a = e.nextToken()), 2 === a.type && (a = e.nextToken()), a.type)) {
      case 10:
        (null == a.value && r(e, yl, t.lastStartLoc, 0, Pl(a)),
          (n.key = (function (e, t) {
            const n = e.context(),
              r = o(7, n.offset, n.startLoc);
            return ((r.value = t), s(r, e.currentOffset(), e.currentPosition()), r);
          })(e, a.value || '')));
        break;
      case 4:
        (null == a.value && r(e, yl, t.lastStartLoc, 0, Pl(a)), (n.key = i(e, a.value || '')));
        break;
      case 5:
        (null == a.value && r(e, yl, t.lastStartLoc, 0, Pl(a)), (n.key = l(e, a.value || '')));
        break;
      case 6:
        (null == a.value && r(e, yl, t.lastStartLoc, 0, Pl(a)), (n.key = c(e, a.value || '')));
        break;
      default: {
        r(e, vl, t.lastStartLoc, 0);
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
          (null == o.value && r(e, yl, t.lastStartLoc, 0, Pl(o)), n.items.push(a(e, o.value || '')));
          break;
        case 5:
          (null == o.value && r(e, yl, t.lastStartLoc, 0, Pl(o)), n.items.push(l(e, o.value || '')));
          break;
        case 4:
          (null == o.value && r(e, yl, t.lastStartLoc, 0, Pl(o)), n.items.push(i(e, o.value || '')));
          break;
        case 6:
          (null == o.value && r(e, yl, t.lastStartLoc, 0, Pl(o)), n.items.push(c(e, o.value || '')));
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
          return (i && r(e, gl, n, 0), s(c, e.currentOffset(), e.currentPosition()), c);
        })(e, n, a, l);
  }
  return {
    parse: function (n) {
      const a = Ll(n, ja({}, e)),
        l = a.context(),
        i = o(0, l.offset, l.startLoc);
      return (
        t && i.loc && (i.loc.source = n),
        (i.body = p(a)),
        e.onCacheKey && (i.cacheKey = e.onCacheKey(n)),
        13 !== l.currentType && r(a, yl, l.lastStartLoc, 0, n[l.offset] || ''),
        s(i, a.currentOffset(), a.currentPosition()),
        i
      );
    },
  };
}
function Pl(e) {
  if (13 === e.type) return 'EOF';
  const t = (e.value || '').replace(/\r?\n/gu, '\\n');
  return t.length > 10 ? t.slice(0, 9) + '…' : t;
}
function Fl(e, t) {
  for (let n = 0; n < e.length; n++) Nl(e[n], t);
}
function Nl(e, t) {
  switch (e.type) {
    case 1:
      (Fl(e.cases, t), t.helper('plural'));
      break;
    case 2:
      Fl(e.items, t);
      break;
    case 6:
      (Nl(e.key, t), t.helper('linked'), t.helper('type'));
      break;
    case 5:
      (t.helper('interpolate'), t.helper('list'));
      break;
    case 4:
      (t.helper('interpolate'), t.helper('named'));
  }
}
function Rl(e, t = {}) {
  const n = (function (e) {
    const t = { ast: e, helpers: new Set() };
    return { context: () => t, helper: (e) => (t.helpers.add(e), e) };
  })(e);
  (n.helper('normalize'), e.body && Nl(e.body, n));
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function $l(e) {
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
      e.static = nl(t);
      for (let t = 0; t < e.items.length; t++) {
        const n = e.items[t];
        (3 !== n.type && 9 !== n.type) || delete n.value;
      }
    }
  }
}
function Ml(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      (Ml(t.body), (t.b = t.body), delete t.body);
      break;
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let e = 0; e < n.length; e++) Ml(n[e]);
      ((t.c = n), delete t.cases);
      break;
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let e = 0; e < n.length; e++) Ml(n[e]);
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
      (Ml(t.key), (t.k = t.key), delete t.key, t.modifier && (Ml(t.modifier), (t.m = t.modifier), delete t.modifier));
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
function Dl(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      !(function (e, t) {
        t.body ? Dl(e, t.body) : e.push('null');
      })(e, t);
      break;
    case 1:
      !(function (e, t) {
        const { helper: n, needIndent: r } = e;
        if (t.cases.length > 1) {
          (e.push(`${n('plural')}([`), e.indent(r()));
          const o = t.cases.length;
          for (let n = 0; n < o && (Dl(e, t.cases[n]), n !== o - 1); n++) e.push(', ');
          (e.deindent(r()), e.push('])'));
        }
      })(e, t);
      break;
    case 2:
      !(function (e, t) {
        const { helper: n, needIndent: r } = e;
        (e.push(`${n('normalize')}([`), e.indent(r()));
        const o = t.items.length;
        for (let s = 0; s < o && (Dl(e, t.items[s]), s !== o - 1); s++) e.push(', ');
        (e.deindent(r()), e.push('])'));
      })(e, t);
      break;
    case 6:
      !(function (e, t) {
        const { helper: n } = e;
        (e.push(`${n('linked')}(`),
          Dl(e, t.key),
          t.modifier ? (e.push(', '), Dl(e, t.modifier), e.push(', _type')) : e.push(', undefined, _type'),
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
function jl(e, t = {}) {
  const n = ja({}, t),
    r = !!n.jit,
    o = !!n.minify,
    s = null == n.optimize || n.optimize,
    a = Il(n).parse(e);
  return r
    ? (s &&
        (function (e) {
          const t = e.body;
          2 === t.type ? $l(t) : t.cases.forEach((e) => $l(e));
        })(a),
      o && Ml(a),
      { ast: a, code: '' })
    : (Rl(a, n),
      ((e, t = {}) => {
        const n = Ja(t.mode) ? t.mode : 'normal',
          r = Ja(t.filename) ? t.filename : 'message.intl';
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
              `const { ${nl(
                a.map((e) => `${e}: _${e}`),
                ', ',
              )} } = ctx`,
            ),
            l.newline()),
          l.push('return '),
          Dl(l, e),
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
 */ function Wl(e) {
  return Xa(e) && 0 === zl(e) && (qa(e, 'b') || qa(e, 'body'));
}
const Vl = ['b', 'body'];
const Ul = ['c', 'cases'];
const Bl = ['s', 'static'];
const Hl = ['i', 'items'];
const Gl = ['t', 'type'];
function zl(e) {
  return Zl(e, Gl);
}
const ql = ['v', 'value'];
function Yl(e, t) {
  const n = Zl(e, ql);
  if (null != n) return n;
  throw Ql(t);
}
const Kl = ['m', 'modifier'];
const Jl = ['k', 'key'];
function Zl(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (qa(e, n) && null != e[n]) return e[n];
  }
  return n;
}
const Xl = [...Vl, ...Ul, ...Bl, ...Hl, ...Jl, ...Kl, ...ql, ...Gl];
function Ql(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ei(e) {
  return (t) =>
    (function (e, t) {
      const n = ((r = t), Zl(r, Vl));
      var r;
      if (null == n) throw Ql(0);
      if (1 === zl(n)) {
        const t = (function (e) {
          return Zl(e, Ul, []);
        })(n);
        return e.plural(t.reduce((t, n) => [...t, ti(e, n)], []));
      }
      return ti(e, n);
    })(t, e);
}
function ti(e, t) {
  const n = (function (e) {
    return Zl(e, Bl);
  })(t);
  if (null != n) return 'text' === e.type ? n : e.normalize([n]);
  {
    const n = (function (e) {
      return Zl(e, Hl, []);
    })(t).reduce((t, n) => [...t, ni(e, n)], []);
    return e.normalize(n);
  }
}
function ni(e, t) {
  const n = zl(t);
  switch (n) {
    case 3:
    case 9:
    case 7:
    case 8:
      return Yl(t, n);
    case 4: {
      const r = t;
      if (qa(r, 'k') && r.k) return e.interpolate(e.named(r.k));
      if (qa(r, 'key') && r.key) return e.interpolate(e.named(r.key));
      throw Ql(n);
    }
    case 5: {
      const r = t;
      if (qa(r, 'i') && $a(r.i)) return e.interpolate(e.list(r.i));
      if (qa(r, 'index') && $a(r.index)) return e.interpolate(e.list(r.index));
      throw Ql(n);
    }
    case 6: {
      const n = t,
        r = (function (e) {
          return Zl(e, Kl);
        })(n),
        o = (function (e) {
          const t = Zl(e, Jl);
          if (t) return t;
          throw Ql(6);
        })(n);
      return e.linked(ni(e, o), r ? ni(e, r) : void 0, e.type);
    }
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ri = (e) => e;
let oi = Va();
let si = null;
const ai = li('function:translate');
function li(e) {
  return (t) => si && si.emit(e, t);
}
const ii = 17,
  ci = 18,
  ui = 19,
  fi = 21,
  pi = 22,
  di = 23;
function hi(e) {
  return bl(e, null, void 0);
}
function mi(e, t) {
  return null != t.locale ? _i(t.locale) : _i(e.locale);
}
let gi;
function _i(e) {
  if (Ja(e)) return e;
  if (Ka(e)) {
    if (e.resolvedOnce && null != gi) return gi;
    if ('Function' === e.constructor.name) {
      const n = e();
      if (Xa((t = n)) && Ka(t.then) && Ka(t.catch)) throw hi(fi);
      return (gi = n);
    }
    throw hi(pi);
  }
  throw hi(di);
  var t;
}
function vi(e, t, n) {
  return [...new Set([n, ...(Ya(t) ? t : Xa(t) ? Object.keys(t) : Ja(t) ? [t] : [n])])];
}
function yi(e, t, n) {
  const r = Ja(n) ? n : Ti,
    o = e;
  o.__localeChainCache || (o.__localeChainCache = new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let e = [n];
    for (; Ya(e); ) e = bi(s, e, t);
    const a = Ya(t) || !tl(t) ? t : t.default ? t.default : null;
    ((e = Ja(a) ? [a] : a), Ya(e) && bi(s, e, !1), o.__localeChainCache.set(r, s));
  }
  return s;
}
function bi(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Za(r); o++) {
    const s = t[o];
    Ja(s) && (r = ki(e, t[o], n));
  }
  return r;
}
function ki(e, t, n) {
  let r;
  const o = t.split('-');
  do {
    ((r = xi(e, o.join('-'), n)), o.splice(-1, 1));
  } while (o.length && !0 === r);
  return r;
}
function xi(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = '!' !== t[t.length - 1];
    const o = t.replace(/!/g, '');
    (e.push(o), (Ya(n) || tl(n)) && n[o] && (r = n[o]));
  }
  return r;
}
const Ei = [];
((Ei[0] = { w: [0], i: [3, 0], '[': [4], o: [7] }),
  (Ei[1] = { w: [1], '.': [2], '[': [4], o: [7] }),
  (Ei[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
  (Ei[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], '.': [2, 1], '[': [4, 1], o: [7, 1] }),
  (Ei[4] = { "'": [5, 0], '"': [6, 0], '[': [4, 2], ']': [1, 3], o: 8, l: [4, 0] }),
  (Ei[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
  (Ei[6] = { '"': [4, 0], o: 8, l: [6, 0] }));
const Si = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function wi(e) {
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
function Ci(e) {
  const t = e.trim();
  return (
    ('0' !== e.charAt(0) || !isNaN(parseInt(e))) &&
    ((n = t),
    Si.test(n)
      ? (function (e) {
          const t = e.charCodeAt(0);
          return t !== e.charCodeAt(e.length - 1) || (34 !== t && 39 !== t) ? e : e.slice(1, -1);
        })(t)
      : '*' + t)
  );
  var n;
}
const Oi = new Map();
function Li(e, t) {
  return Xa(e) ? e[t] : null;
}
const Ti = 'en-US',
  Ai = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
let Ii, Pi, Fi;
let Ni = null;
const Ri = () => Ni;
let $i = null;
const Mi = (e) => {
  $i = e;
};
let Di = 0;
function ji(e = {}) {
  const t = Ka(e.onWarn) ? e.onWarn : Pa,
    n = Ja(e.version) ? e.version : '11.1.12',
    r = Ja(e.locale) || Ka(e.locale) ? e.locale : Ti,
    o = Ka(r) ? Ti : r,
    s = Ya(e.fallbackLocale) || tl(e.fallbackLocale) || Ja(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : o,
    a = tl(e.messages) ? e.messages : Wi(o),
    l = tl(e.datetimeFormats) ? e.datetimeFormats : Wi(o),
    i = tl(e.numberFormats) ? e.numberFormats : Wi(o),
    c = ja(Va(), e.modifiers, {
      upper: (e, t) =>
        'text' === t && Ja(e) ? e.toUpperCase() : 'vnode' === t && Xa(e) && '__v_isVNode' in e ? e.children.toUpperCase() : e,
      lower: (e, t) =>
        'text' === t && Ja(e) ? e.toLowerCase() : 'vnode' === t && Xa(e) && '__v_isVNode' in e ? e.children.toLowerCase() : e,
      capitalize: (e, t) => ('text' === t && Ja(e) ? Ai(e) : 'vnode' === t && Xa(e) && '__v_isVNode' in e ? Ai(e.children) : e),
    }),
    u = e.pluralRules || Va(),
    f = Ka(e.missing) ? e.missing : null,
    p = (!Za(e.missingWarn) && !Ma(e.missingWarn)) || e.missingWarn,
    d = (!Za(e.fallbackWarn) && !Ma(e.fallbackWarn)) || e.fallbackWarn,
    h = !!e.fallbackFormat,
    m = !!e.unresolving,
    g = Ka(e.postTranslation) ? e.postTranslation : null,
    _ = tl(e.processor) ? e.processor : null,
    v = !Za(e.warnHtmlMessage) || e.warnHtmlMessage,
    y = !!e.escapeParameter,
    b = Ka(e.messageCompiler) ? e.messageCompiler : Ii,
    k = Ka(e.messageResolver) ? e.messageResolver : Pi || Li,
    x = Ka(e.localeFallbacker) ? e.localeFallbacker : Fi || vi,
    E = Xa(e.fallbackContext) ? e.fallbackContext : void 0,
    S = e,
    w = Xa(S.__datetimeFormatters) ? S.__datetimeFormatters : new Map(),
    C = Xa(S.__numberFormatters) ? S.__numberFormatters : new Map(),
    O = Xa(S.__meta) ? S.__meta : {};
  Di++;
  const L = {
    version: n,
    cid: Di,
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
    fallbackContext: E,
    onWarn: t,
    __meta: O,
  };
  return (
    (L.datetimeFormats = l),
    (L.numberFormats = i),
    (L.__datetimeFormatters = w),
    (L.__numberFormatters = C),
    __INTLIFY_PROD_DEVTOOLS__ &&
      (function (e, t, n) {
        si && si.emit('i18n:init', { timestamp: Date.now(), i18n: e, version: t, meta: n });
      })(L, n, O),
    L
  );
}
const Wi = (e) => ({ [e]: Va() });
function Vi(e, t, n, r, o) {
  const { missing: s, onWarn: a } = e;
  if (null !== s) {
    const r = s(e, n, t, o);
    return Ja(r) ? r : t;
  }
  return t;
}
function Ui(e, t, n) {
  ((e.__localeChainCache = new Map()), e.localeFallbacker(e, n, t));
}
function Bi(e, t) {
  return e !== t && e.split('-')[0] === t.split('-')[0];
}
function Hi(e, t) {
  const n = t.indexOf(e);
  if (-1 === n) return !1;
  for (let r = n + 1; r < t.length; r++) if (Bi(e, t[r])) return !0;
  return !1;
}
function Gi(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e,
    { __datetimeFormatters: l } = e,
    [i, c, u, f] = qi(...t);
  Za(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Za(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const p = !!u.part,
    d = mi(e, u),
    h = a(e, o, d);
  if (!Ja(i) || '' === i) return new Intl.DateTimeFormat(d, f).format(c);
  let m,
    g = {},
    _ = null;
  for (let b = 0; b < h.length && ((m = h[b]), (g = n[m] || {}), (_ = g[i]), !tl(_)); b++) Vi(e, i, m, 0, 'datetime format');
  if (!tl(_) || !Ja(m)) return r ? -1 : i;
  let v = `${m}__${i}`;
  Da(f) || (v = `${v}__${JSON.stringify(f)}`);
  let y = l.get(v);
  return (y || ((y = new Intl.DateTimeFormat(m, ja({}, _, f))), l.set(v, y)), p ? y.formatToParts(c) : y.format(c));
}
const zi = [
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
function qi(...e) {
  const [t, n, r, o] = e,
    s = Va();
  let a,
    l = Va();
  if (Ja(t)) {
    const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!e) throw hi(ui);
    const n = e[3] ? (e[3].trim().startsWith('T') ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}`) : e[1].trim();
    a = new Date(n);
    try {
      a.toISOString();
    } catch {
      throw hi(ui);
    }
  } else if ('[object Date]' === el(t)) {
    if (isNaN(t.getTime())) throw hi(ci);
    a = t;
  } else {
    if (!$a(t)) throw hi(ii);
    a = t;
  }
  return (
    Ja(n)
      ? (s.key = n)
      : tl(n) &&
        Object.keys(n).forEach((e) => {
          zi.includes(e) ? (l[e] = n[e]) : (s[e] = n[e]);
        }),
    Ja(r) ? (s.locale = r) : tl(r) && (l = r),
    tl(o) && (l = o),
    [s.key || '', a, s, l]
  );
}
function Yi(e, t, n) {
  const r = e;
  for (const o in n) {
    const e = `${t}__${o}`;
    r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e);
  }
}
function Ki(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: a } = e,
    { __numberFormatters: l } = e,
    [i, c, u, f] = Zi(...t);
  Za(u.missingWarn) ? u.missingWarn : e.missingWarn;
  Za(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const p = !!u.part,
    d = mi(e, u),
    h = a(e, o, d);
  if (!Ja(i) || '' === i) return new Intl.NumberFormat(d, f).format(c);
  let m,
    g = {},
    _ = null;
  for (let b = 0; b < h.length && ((m = h[b]), (g = n[m] || {}), (_ = g[i]), !tl(_)); b++) Vi(e, i, m, 0, 'number format');
  if (!tl(_) || !Ja(m)) return r ? -1 : i;
  let v = `${m}__${i}`;
  Da(f) || (v = `${v}__${JSON.stringify(f)}`);
  let y = l.get(v);
  return (y || ((y = new Intl.NumberFormat(m, ja({}, _, f))), l.set(v, y)), p ? y.formatToParts(c) : y.format(c));
}
const Ji = [
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
function Zi(...e) {
  const [t, n, r, o] = e,
    s = Va();
  let a = Va();
  if (!$a(t)) throw hi(ii);
  const l = t;
  return (
    Ja(n)
      ? (s.key = n)
      : tl(n) &&
        Object.keys(n).forEach((e) => {
          Ji.includes(e) ? (a[e] = n[e]) : (s[e] = n[e]);
        }),
    Ja(r) ? (s.locale = r) : tl(r) && (a = r),
    tl(o) && (a = o),
    [s.key || '', l, s, a]
  );
}
function Xi(e, t, n) {
  const r = e;
  for (const o in n) {
    const e = `${t}__${o}`;
    r.__numberFormatters.has(e) && r.__numberFormatters.delete(e);
  }
}
const Qi = (e) => e,
  ec = (e) => '',
  tc = (e) => (0 === e.length ? '' : nl(e)),
  nc = (e) => (null == e ? '' : Ya(e) || (tl(e) && e.toString === Qa) ? JSON.stringify(e, null, 2) : String(e));
function rc(e, t) {
  return ((e = Math.abs(e)), 2 === t ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0);
}
function oc(e = {}) {
  const t = e.locale,
    n = (function (e) {
      const t = $a(e.pluralIndex) ? e.pluralIndex : -1;
      return e.named && ($a(e.named.count) || $a(e.named.n)) ? ($a(e.named.count) ? e.named.count : $a(e.named.n) ? e.named.n : t) : t;
    })(e),
    r = Xa(e.pluralRules) && Ja(t) && Ka(e.pluralRules[t]) ? e.pluralRules[t] : rc,
    o = Xa(e.pluralRules) && Ja(t) && Ka(e.pluralRules[t]) ? rc : void 0,
    s = e.list || [],
    a = e.named || Va();
  $a(e.pluralIndex) &&
    (function (e, t) {
      (t.count || (t.count = e), t.n || (t.n = e));
    })(n, a);
  function l(t, n) {
    const r = Ka(e.messages) ? e.messages(t, !!n) : !!Xa(e.messages) && e.messages[t];
    return r || (e.parent ? e.parent.message(t) : ec);
  }
  const i = tl(e.processor) && Ka(e.processor.normalize) ? e.processor.normalize : tc,
    c = tl(e.processor) && Ka(e.processor.interpolate) ? e.processor.interpolate : nc,
    u = {
      list: (e) => s[e],
      named: (e) => a[e],
      plural: (e) => e[r(n, e.length, o)],
      linked: (t, ...n) => {
        const [r, o] = n;
        let s = 'text',
          a = '';
        1 === n.length
          ? Xa(r)
            ? ((a = r.modifier || a), (s = r.type || s))
            : Ja(r) && (a = r || a)
          : 2 === n.length && (Ja(r) && (a = r || a), Ja(o) && (s = o || s));
        const i = l(t, !0)(u),
          c = 'vnode' === s && Ya(i) && a ? i[0] : i;
        return a ? ((f = a), e.modifiers ? e.modifiers[f] : Qi)(c, s) : c;
        var f;
      },
      message: l,
      type: tl(e.processor) && Ja(e.processor.type) ? e.processor.type : 'text',
      interpolate: c,
      normalize: i,
      values: ja(Va(), s, a),
    };
  return u;
}
const sc = () => '',
  ac = (e) => Ka(e);
function lc(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: a, messages: l } = e,
    [i, c] = uc(...t),
    u = Za(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = Za(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    p = Za(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    d = !!c.resolvedMessage,
    h = Ja(c.default) || Za(c.default) ? (Za(c.default) ? (s ? i : () => i) : c.default) : n ? (s ? i : () => i) : null,
    m = n || (null != h && (Ja(h) || Ka(h))),
    g = mi(e, c);
  p &&
    (function (e) {
      Ya(e.list)
        ? (e.list = e.list.map((e) => (Ja(e) ? Ha(e) : e)))
        : Xa(e.named) &&
          Object.keys(e.named).forEach((t) => {
            Ja(e.named[t]) && (e.named[t] = Ha(e.named[t]));
          });
    })(c);
  let [_, v, y] = d ? [i, g, l[g] || Va()] : ic(e, i, g, a, f, u),
    b = _,
    k = i;
  if ((d || Ja(b) || Wl(b) || ac(b) || (m && ((b = h), (k = b))), !(d || ((Ja(b) || Wl(b) || ac(b)) && Ja(v))))) return o ? -1 : i;
  let x = !1;
  const E = ac(b)
    ? b
    : cc(e, i, v, b, k, () => {
        x = !0;
      });
  if (x) return b;
  const S = (function (e, t, n, r) {
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
            const [, , n] = ic(u || e, r, t, l, i, c);
            s = a(n, r);
          }
          if (Ja(s) || Wl(s)) {
            let n = !1;
            const o = cc(e, r, t, s, r, () => {
              n = !0;
            });
            return n ? sc : o;
          }
          return ac(s) ? s : sc;
        },
        p = { locale: t, modifiers: o, pluralRules: s, messages: f };
      e.processor && (p.processor = e.processor);
      r.list && (p.list = r.list);
      r.named && (p.named = r.named);
      $a(r.plural) && (p.pluralIndex = r.plural);
      return p;
    })(e, v, y, c),
    w = (function (e, t, n) {
      const r = t(n);
      return r;
    })(0, E, oc(S));
  let C = r ? r(w, i) : w;
  var O;
  if (
    (p &&
      Ja(C) &&
      ((O = (O = (O = C).replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${Ga(n)}"`)).replace(
        /(\w+)\s*=\s*'([^']*)'/g,
        (e, t, n) => `${t}='${Ga(n)}'`,
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
      key: Ja(i) ? i : ac(b) ? b.key : '',
      locale: v || (ac(b) ? b.locale : ''),
      format: Ja(b) ? b : ac(b) ? b.source : '',
      message: C,
    };
    ((t.meta = ja({}, e.__meta, Ri() || {})), ai(t));
  }
  return C;
}
function ic(e, t, n, r, o, s) {
  const { messages: a, onWarn: l, messageResolver: i, localeFallbacker: c } = e,
    u = c(e, r, n);
  let f,
    p = Va(),
    d = null;
  for (let h = 0; h < u.length && ((f = u[h]), (p = a[f] || Va()), null === (d = i(p, t)) && (d = p[t]), !(Ja(d) || Wl(d) || ac(d))); h++)
    if (!Hi(f, u)) {
      const n = Vi(e, t, f, 0, 'translate');
      n !== t && (d = n);
    }
  return [d, f, p];
}
function cc(e, t, n, r, o, s) {
  const { messageCompiler: a, warnHtmlMessage: l } = e;
  if (ac(r)) {
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
        onCacheKey: (e) => ((e, t, n) => Ra({ l: e, k: t, s: n }))(t, n, e),
      };
    })(0, n, o, 0, l, s),
  );
  return ((i.locale = n), (i.key = t), (i.source = r), i);
}
function uc(...e) {
  const [t, n, r] = e,
    o = Va();
  if (!(Ja(t) || $a(t) || ac(t) || Wl(t))) throw hi(ii);
  const s = $a(t) ? String(t) : (ac(t), t);
  return (
    $a(n) ? (o.plural = n) : Ja(n) ? (o.default = n) : tl(n) && !Da(n) ? (o.named = n) : Ya(n) && (o.list = n),
    $a(r) ? (o.plural = r) : Ja(r) ? (o.default = r) : tl(r) && ja(o, r),
    [s, o]
  );
}
('boolean' != typeof __INTLIFY_PROD_DEVTOOLS__ && (Ba().__INTLIFY_PROD_DEVTOOLS__ = !1),
  'boolean' != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && (Ba().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1));
const fc = 24,
  pc = 25,
  dc = 26,
  hc = 27,
  mc = 28,
  gc = 29,
  _c = 31,
  vc = 32;
function yc(e, ...t) {
  return bl(e, null, void 0);
}
const bc = Na('__translateVNode'),
  kc = Na('__datetimeParts'),
  xc = Na('__numberParts'),
  Ec = Na('__setPluralRules'),
  Sc = Na('__injectWithOption'),
  wc = Na('__dispose');
function Cc(e) {
  if (!Xa(e)) return e;
  if (Wl(e)) return e;
  for (const t in e)
    if (qa(e, t))
      if (t.includes('.')) {
        const n = t.split('.'),
          r = n.length - 1;
        let o = e,
          s = !1;
        for (let e = 0; e < r; e++) {
          if ('__proto__' === n[e]) throw new Error(`unsafe key: ${n[e]}`);
          if ((n[e] in o || (o[n[e]] = Va()), !Xa(o[n[e]]))) {
            s = !0;
            break;
          }
          o = o[n[e]];
        }
        if ((s || (Wl(o) ? Xl.includes(n[r]) || delete e[t] : ((o[n[r]] = e[t]), delete e[t])), !Wl(o))) {
          const e = o[n[r]];
          Xa(e) && Cc(e);
        }
      } else Xa(e[t]) && Cc(e[t]);
  return e;
}
function Oc(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t,
    a = tl(n) ? n : Ya(r) ? Va() : { [e]: Va() };
  if (
    (Ya(r) &&
      r.forEach((e) => {
        if ('locale' in e && 'resource' in e) {
          const { locale: t, resource: n } = e;
          t ? ((a[t] = a[t] || Va()), ol(n, a[t])) : ol(n, a);
        } else Ja(e) && ol(JSON.parse(e), a);
      }),
    null == o && s)
  )
    for (const l in a) qa(a, l) && Cc(a[l]);
  return a;
}
function Lc(e) {
  return e.type;
}
function Tc(e, t, n) {
  let r = Xa(t.messages) ? t.messages : Va();
  '__i18nGlobal' in n && (r = Oc(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const o = Object.keys(r);
  if (
    (o.length &&
      o.forEach((t) => {
        e.mergeLocaleMessage(t, r[t]);
      }),
    Xa(t.datetimeFormats))
  ) {
    const n = Object.keys(t.datetimeFormats);
    n.length &&
      n.forEach((n) => {
        e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
      });
  }
  if (Xa(t.numberFormats)) {
    const n = Object.keys(t.numberFormats);
    n.length &&
      n.forEach((n) => {
        e.mergeNumberFormat(n, t.numberFormats[n]);
      });
  }
}
function Ac(e) {
  return Ho(Lo, null, e, 0);
}
const Ic = () => [],
  Pc = () => !1;
let Fc = 0;
function Nc(e) {
  return (t, n, r, o) => e(n, r, rs() || void 0, o);
}
function Rc(e = {}) {
  const { __root: t, __injectWithOption: n } = e,
    r = void 0 === t,
    o = e.flatJson,
    s = Fa ? kt : xt;
  let a = !Za(e.inheritLocale) || e.inheritLocale;
  const l = s(t && a ? t.locale.value : Ja(e.locale) ? e.locale : Ti),
    i = s(
      t && a
        ? t.fallbackLocale.value
        : Ja(e.fallbackLocale) || Ya(e.fallbackLocale) || tl(e.fallbackLocale) || !1 === e.fallbackLocale
          ? e.fallbackLocale
          : l.value,
    ),
    c = s(Oc(l.value, e)),
    u = s(tl(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }),
    f = s(tl(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let p = t ? t.missingWarn : (!Za(e.missingWarn) && !Ma(e.missingWarn)) || e.missingWarn,
    d = t ? t.fallbackWarn : (!Za(e.fallbackWarn) && !Ma(e.fallbackWarn)) || e.fallbackWarn,
    h = t ? t.fallbackRoot : !Za(e.fallbackRoot) || e.fallbackRoot,
    m = !!e.fallbackFormat,
    g = Ka(e.missing) ? e.missing : null,
    _ = Ka(e.missing) ? Nc(e.missing) : null,
    v = Ka(e.postTranslation) ? e.postTranslation : null,
    y = t ? t.warnHtmlMessage : !Za(e.warnHtmlMessage) || e.warnHtmlMessage,
    b = !!e.escapeParameter;
  const k = t ? t.modifiers : tl(e.modifiers) ? e.modifiers : {};
  let x,
    E = e.pluralRules || (t && t.pluralRules);
  ((x = (() => {
    r && Mi(null);
    const t = {
      version: '11.1.12',
      locale: l.value,
      fallbackLocale: i.value,
      messages: c.value,
      modifiers: k,
      pluralRules: E,
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
      (t.__datetimeFormatters = tl(x) ? x.__datetimeFormatters : void 0),
      (t.__numberFormatters = tl(x) ? x.__numberFormatters : void 0));
    const n = ji(t);
    return (r && Mi(n), n);
  })()),
    Ui(x, l.value, i.value));
  const S = gs({
      get: () => l.value,
      set: (e) => {
        ((x.locale = e), (l.value = e));
      },
    }),
    w = gs({
      get: () => i.value,
      set: (e) => {
        ((x.fallbackLocale = e), (i.value = e), Ui(x, l.value, e));
      },
    }),
    C = gs(() => c.value),
    O = gs(() => u.value),
    L = gs(() => f.value);
  const T = (e, n, o, s, a, p) => {
    let d;
    (l.value, i.value, c.value, u.value, f.value);
    try {
      (__INTLIFY_PROD_DEVTOOLS__, r || (x.fallbackContext = t ? $i : void 0), (d = e(x)));
    } finally {
      (__INTLIFY_PROD_DEVTOOLS__, r || (x.fallbackContext = void 0));
    }
    if (('translate exists' !== o && $a(d) && -1 === d) || ('translate exists' === o && !d)) {
      const [e, r] = n();
      return t && h ? s(t) : a(e);
    }
    if (p(d)) return d;
    throw yc(fc);
  };
  function A(...e) {
    return T(
      (t) => Reflect.apply(lc, null, [t, ...e]),
      () => uc(...e),
      'translate',
      (t) => Reflect.apply(t.t, t, [...e]),
      (e) => e,
      (e) => Ja(e),
    );
  }
  const I = {
    normalize: function (e) {
      return e.map((e) => (Ja(e) || $a(e) || Za(e) ? Ac(String(e)) : e));
    },
    interpolate: (e) => e,
    type: 'vnode',
  };
  function P(e) {
    return c.value[e] || {};
  }
  (Fc++,
    t &&
      Fa &&
      (po(t.locale, (e) => {
        a && ((l.value = e), (x.locale = e), Ui(x, l.value, i.value));
      }),
      po(t.fallbackLocale, (e) => {
        a && ((i.value = e), (x.fallbackLocale = e), Ui(x, l.value, i.value));
      })));
  const F = {
    id: Fc,
    locale: S,
    fallbackLocale: w,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(e) {
      ((a = e), e && t && ((l.value = t.locale.value), (i.value = t.fallbackLocale.value), Ui(x, l.value, i.value)));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: C,
    get modifiers() {
      return k;
    },
    get pluralRules() {
      return E || {};
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
        for (const e in n) qa(n, e) && Cc(n[e]);
        t = n[e];
      }
      ((c.value[e] = t), (x.messages = c.value));
    },
    mergeLocaleMessage: function (e, t) {
      c.value[e] = c.value[e] || {};
      const n = { [e]: t };
      if (o) for (const r in n) qa(n, r) && Cc(n[r]);
      (ol((t = n[e]), c.value[e]), (x.messages = c.value));
    },
    getPostTranslationHandler: function () {
      return Ka(v) ? v : null;
    },
    setPostTranslationHandler: function (e) {
      ((v = e), (x.postTranslation = e));
    },
    getMissingHandler: function () {
      return g;
    },
    setMissingHandler: function (e) {
      (null !== e && (_ = Nc(e)), (g = e), (x.missing = _));
    },
    [Ec]: function (e) {
      ((E = e), (x.pluralRules = E));
    },
  };
  return (
    (F.datetimeFormats = O),
    (F.numberFormats = L),
    (F.rt = function (...e) {
      const [t, n, r] = e;
      if (r && !Xa(r)) throw yc(pc);
      return A(t, n, ja({ resolvedMessage: !0 }, r || {}));
    }),
    (F.te = function (e, t) {
      return T(
        () => {
          if (!e) return !1;
          const n = P(Ja(t) ? t : l.value),
            r = x.messageResolver(n, e);
          return Wl(r) || ac(r) || Ja(r);
        },
        () => [e],
        'translate exists',
        (n) => Reflect.apply(n.te, n, [e, t]),
        Pc,
        (e) => Za(e),
      );
    }),
    (F.tm = function (e) {
      const n = (function (e) {
        let t = null;
        const n = yi(x, i.value, l.value);
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
        (t) => Reflect.apply(Gi, null, [t, ...e]),
        () => qi(...e),
        'datetime format',
        (t) => Reflect.apply(t.d, t, [...e]),
        () => '',
        (e) => Ja(e) || Ya(e),
      );
    }),
    (F.n = function (...e) {
      return T(
        (t) => Reflect.apply(Ki, null, [t, ...e]),
        () => Zi(...e),
        'number format',
        (t) => Reflect.apply(t.n, t, [...e]),
        () => '',
        (e) => Ja(e) || Ya(e),
      );
    }),
    (F.getDateTimeFormat = function (e) {
      return u.value[e] || {};
    }),
    (F.setDateTimeFormat = function (e, t) {
      ((u.value[e] = t), (x.datetimeFormats = u.value), Yi(x, e, t));
    }),
    (F.mergeDateTimeFormat = function (e, t) {
      ((u.value[e] = ja(u.value[e] || {}, t)), (x.datetimeFormats = u.value), Yi(x, e, t));
    }),
    (F.getNumberFormat = function (e) {
      return f.value[e] || {};
    }),
    (F.setNumberFormat = function (e, t) {
      ((f.value[e] = t), (x.numberFormats = f.value), Xi(x, e, t));
    }),
    (F.mergeNumberFormat = function (e, t) {
      ((f.value[e] = ja(f.value[e] || {}, t)), (x.numberFormats = f.value), Xi(x, e, t));
    }),
    (F[Sc] = n),
    (F[bc] = function (...e) {
      return T(
        (t) => {
          let n;
          const r = t;
          try {
            ((r.processor = I), (n = Reflect.apply(lc, null, [r, ...e])));
          } finally {
            r.processor = null;
          }
          return n;
        },
        () => uc(...e),
        'translate',
        (t) => t[bc](...e),
        (e) => [Ac(e)],
        (e) => Ya(e),
      );
    }),
    (F[kc] = function (...e) {
      return T(
        (t) => Reflect.apply(Gi, null, [t, ...e]),
        () => qi(...e),
        'datetime format',
        (t) => t[kc](...e),
        Ic,
        (e) => Ja(e) || Ya(e),
      );
    }),
    (F[xc] = function (...e) {
      return T(
        (t) => Reflect.apply(Ki, null, [t, ...e]),
        () => Zi(...e),
        'number format',
        (t) => t[xc](...e),
        Ic,
        (e) => Ja(e) || Ya(e),
      );
    }),
    F
  );
}
function $c(e = {}) {
  const t = Rc(
      (function (e) {
        const t = Ja(e.locale) ? e.locale : Ti,
          n = Ja(e.fallbackLocale) || Ya(e.fallbackLocale) || tl(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : t,
          r = Ka(e.missing) ? e.missing : void 0,
          o = (!Za(e.silentTranslationWarn) && !Ma(e.silentTranslationWarn)) || !e.silentTranslationWarn,
          s = (!Za(e.silentFallbackWarn) && !Ma(e.silentFallbackWarn)) || !e.silentFallbackWarn,
          a = !Za(e.fallbackRoot) || e.fallbackRoot,
          l = !!e.formatFallbackMessages,
          i = tl(e.modifiers) ? e.modifiers : {},
          c = e.pluralizationRules,
          u = Ka(e.postTranslation) ? e.postTranslation : void 0,
          f = !Ja(e.warnHtmlInMessage) || 'off' !== e.warnHtmlInMessage,
          p = !!e.escapeParameterHtml,
          d = !Za(e.sync) || e.sync;
        let h = e.messages;
        if (tl(e.sharedMessages)) {
          const t = e.sharedMessages;
          h = Object.keys(t).reduce((e, n) => {
            const r = e[n] || (e[n] = {});
            return (ja(r, t[n]), e);
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
        return Za(t.missingWarn) ? !t.missingWarn : t.missingWarn;
      },
      set silentTranslationWarn(e) {
        t.missingWarn = Za(e) ? !e : e;
      },
      get silentFallbackWarn() {
        return Za(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
      },
      set silentFallbackWarn(e) {
        t.fallbackWarn = Za(e) ? !e : e;
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
function Mc(e, t) {
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
    e.__composer[Ec](t.pluralizationRules || e.pluralizationRules));
  const n = Oc(e.locale, { messages: t.messages, __i18n: t.__i18n });
  return (
    Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])),
    t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])),
    t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])),
    e
  );
}
const Dc = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: { type: String, validator: (e) => 'parent' === e || 'global' === e, default: 'parent' },
  i18n: { type: Object },
};
function jc() {
  return Oo;
}
const Wc = Rn({
  name: 'i18n-t',
  props: ja({ keypath: { type: String, required: !0 }, plural: { type: [Number, String], validator: (e) => $a(e) || !isNaN(e) } }, Dc),
  setup(e, t) {
    const { slots: n, attrs: r } = t,
      o = e.i18n || qc({ useScope: e.scope, __useComponent: !0 });
    return () => {
      const s = Object.keys(n).filter((e) => '_' !== e[0]),
        a = Va();
      (e.locale && (a.locale = e.locale), void 0 !== e.plural && (a.plural = Ja(e.plural) ? +e.plural : e.plural));
      const l = (function ({ slots: e }, t) {
          if (1 === t.length && 'default' === t[0])
            return (e.default ? e.default() : []).reduce((e, t) => [...e, ...(t.type === Oo ? t.children : [t])], []);
          return t.reduce((t, n) => {
            const r = e[n];
            return (r && (t[n] = r()), t);
          }, Va());
        })(t, s),
        i = o[bc](e.keypath, l, a),
        c = ja(Va(), r);
      return _s(Ja(e.tag) || Xa(e.tag) ? e.tag : jc(), c, i);
    };
  },
});
function Vc(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const t = { part: !0 };
    let a = Va();
    (e.locale && (t.locale = e.locale),
      Ja(e.format)
        ? (t.key = e.format)
        : Xa(e.format) &&
          (Ja(e.format.key) && (t.key = e.format.key),
          (a = Object.keys(e.format).reduce((t, r) => (n.includes(r) ? ja(Va(), t, { [r]: e.format[r] }) : t), Va()))));
    const l = r(e.value, t, a);
    let i = [t.key];
    Ya(l)
      ? (i = l.map((e, t) => {
          const n = o[e.type],
            r = n ? n({ [e.type]: e.value, index: t, parts: l }) : [e.value];
          var s;
          return (Ya((s = r)) && !Ja(s[0]) && (r[0].key = `${e.type}-${t}`), r);
        }))
      : Ja(l) && (i = [l]);
    const c = ja(Va(), s);
    return _s(Ja(e.tag) || Xa(e.tag) ? e.tag : jc(), c, i);
  };
}
const Uc = Rn({
  name: 'i18n-n',
  props: ja({ value: { type: Number, required: !0 }, format: { type: [String, Object] } }, Dc),
  setup(e, t) {
    const n = e.i18n || qc({ useScope: e.scope, __useComponent: !0 });
    return Vc(e, t, Ji, (...e) => n[xc](...e));
  },
});
function Bc(e) {
  if (Ja(e)) return { path: e };
  if (tl(e)) {
    if (!('path' in e)) throw yc(mc);
    return e;
  }
  throw yc(gc);
}
function Hc(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e,
    a = {},
    l = r || {};
  return (Ja(n) && (a.locale = n), $a(o) && (a.plural = o), $a(s) && (a.plural = s), [t, l, a]);
}
function Gc(e, t, ...n) {
  const r = tl(n[0]) ? n[0] : {};
  ((!Za(r.globalInstall) || r.globalInstall) &&
    ([Wc.name, 'I18nT'].forEach((t) => e.component(t, Wc)),
    [Uc.name, 'I18nN'].forEach((t) => e.component(t, Uc)),
    [Jc.name, 'I18nD'].forEach((t) => e.component(t, Jc))),
    e.directive(
      't',
      (function (e) {
        const t = (t) => {
          const { instance: n, value: r } = t;
          if (!n || !n.$) throw yc(vc);
          const o = (function (e, t) {
              const n = e;
              if ('composition' === e.mode) return n.__getInstance(t) || e.global;
              {
                const r = n.__getInstance(t);
                return null != r ? r.__composer : e.global.__composer;
              }
            })(e, n.$),
            s = Bc(r);
          return [Reflect.apply(o.t, o, [...Hc(s)]), o];
        };
        return {
          created: (n, r) => {
            const [o, s] = t(r);
            (Fa &&
              e.global === s &&
              (n.__i18nWatcher = po(s.locale, () => {
                r.instance && r.instance.$forceUpdate();
              })),
              (n.__composer = s),
              (n.textContent = o));
          },
          unmounted: (e) => {
            (Fa && e.__i18nWatcher && (e.__i18nWatcher(), (e.__i18nWatcher = void 0), delete e.__i18nWatcher),
              e.__composer && ((e.__composer = void 0), delete e.__composer));
          },
          beforeUpdate: (e, { value: t }) => {
            if (e.__composer) {
              const n = e.__composer,
                r = Bc(t);
              e.textContent = Reflect.apply(n.t, n, [...Hc(r)]);
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
const zc = Na('global-vue-i18n');
function qc(e = {}) {
  const t = rs();
  if (null == t) throw yc(dc);
  if (!t.isCE && null != t.appContext.app && !t.appContext.app.__VUE_I18N_SYMBOL__) throw yc(hc);
  const n = (function (e) {
      const t = Ur(e.isCE ? zc : e.appContext.app.__VUE_I18N_SYMBOL__);
      if (!t) throw yc(e.isCE ? _c : vc);
      return t;
    })(t),
    r = (function (e) {
      return 'composition' === e.mode ? e.global : e.global.__composer;
    })(n),
    o = Lc(t),
    s = (function (e, t) {
      return Da(e) ? ('__i18n' in t ? 'local' : 'global') : e.useScope ? e.useScope : 'local';
    })(e, o);
  if ('global' === s) return (Tc(r, e, o), r);
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
          null != e && ((r = e.__composer), n && r && !r[Sc] && (r = null));
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
    const n = ja({}, e);
    ('__i18n' in o && (n.__i18n = o.__i18n),
      r && (n.__root = r),
      (l = Rc(n)),
      a.__composerExtend && (l[wc] = a.__composerExtend(l)),
      (function (e, t, n) {
        (Qn(() => {}, t),
          rr(() => {
            const r = n;
            e.__deleteInstance(t);
            const o = r[wc];
            o && (o(), delete r[wc]);
          }, t));
      })(a, t, l),
      a.__setInstance(t, l));
  }
  return l;
}
const Yc = ['locale', 'fallbackLocale', 'availableLocales'],
  Kc = ['t', 'rt', 'd', 'n', 'tm', 'te'];
const Jc = Rn({
  name: 'i18n-d',
  props: ja({ value: { type: [Number, Date], required: !0 }, format: { type: [String, Object] } }, Dc),
  setup(e, t) {
    const n = e.i18n || qc({ useScope: e.scope, __useComponent: !0 });
    return Vc(e, t, zi, (...e) => n[kc](...e));
  },
});
var Zc;
if (
  ('boolean' != typeof __VUE_I18N_FULL_INSTALL__ && (Ba().__VUE_I18N_FULL_INSTALL__ = !0),
  'boolean' != typeof __VUE_I18N_LEGACY_API__ && (Ba().__VUE_I18N_LEGACY_API__ = !0),
  'boolean' != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && (Ba().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
  'boolean' != typeof __INTLIFY_PROD_DEVTOOLS__ && (Ba().__INTLIFY_PROD_DEVTOOLS__ = !1),
  (Ii = function (e, t) {
    if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Ja(e)) {
      !Za(t.warnHtmlMessage) || t.warnHtmlMessage;
      const n = (t.onCacheKey || ri)(e),
        r = oi[n];
      if (r) return r;
      const { ast: o, detectError: s } = (function (e, t = {}) {
          let n = !1;
          const r = t.onError || kl;
          return (
            (t.onError = (e) => {
              ((n = !0), r(e));
            }),
            { ...jl(e, t), detectError: n }
          );
        })(e, { ...t, location: !1, jit: !0 }),
        a = ei(o);
      return s ? a : (oi[n] = a);
    }
    {
      const t = e.cacheKey;
      if (t) {
        const n = oi[t];
        return n || (oi[t] = ei(e));
      }
      return ei(e);
    }
  }),
  (Pi = function (e, t) {
    if (!Xa(e)) return null;
    let n = Oi.get(t);
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
                  if (((r = Ci(r)), !1 === r)) return !1;
                  p[1]();
                }
              };
            null !== u;

          )
            if ((c++, (n = e[c]), '\\' !== n || !d())) {
              if (((s = wi(n)), (i = Ei[u]), (a = i[s] || i.l || 8), 8 === a)) return;
              if (((u = a[0]), void 0 !== a[1] && ((l = p[a[1]]), l && ((o = n), !1 === l())))) return;
              if (7 === u) return t;
            }
        })(t)),
        n && Oi.set(t, n)),
      !n)
    )
      return null;
    const r = n.length;
    let o = e,
      s = 0;
    for (; s < r; ) {
      const e = n[s];
      if (Xl.includes(e) && Wl(o)) return null;
      const t = o[e];
      if (void 0 === t) return null;
      if (Ka(o)) return null;
      ((o = t), s++);
    }
    return o;
  }),
  (Fi = yi),
  __INTLIFY_PROD_DEVTOOLS__)
) {
  const e = Ba();
  ((e.__INTLIFY__ = !0), (Zc = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__), (si = Zc));
}
const Xc = (function (e = {}) {
  const t = __VUE_I18N_LEGACY_API__ && Za(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
    n = !Za(e.globalInjection) || e.globalInjection,
    r = new Map(),
    [o, s] = (function (e, t) {
      const n = Q(),
        r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => $c(e)) : n.run(() => Rc(e));
      if (null == r) throw yc(vc);
      return [n, r];
    })(e, t),
    a = Na(''),
    l = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && t ? 'legacy' : 'composition';
      },
      async install(e, ...r) {
        if (((e.__VUE_I18N_SYMBOL__ = a), e.provide(e.__VUE_I18N_SYMBOL__, l), tl(r[0]))) {
          const e = r[0];
          ((l.__composerExtend = e.__composerExtend), (l.__vueI18nExtend = e.__vueI18nExtend));
        }
        let o = null;
        (!t &&
          n &&
          (o = (function (e, t) {
            const n = Object.create(null);
            (Yc.forEach((e) => {
              const r = Object.getOwnPropertyDescriptor(t, e);
              if (!r) throw yc(vc);
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
              Kc.forEach((n) => {
                const r = Object.getOwnPropertyDescriptor(t, n);
                if (!r || !r.value) throw yc(vc);
                Object.defineProperty(e.config.globalProperties, `$${n}`, r);
              }));
            const r = () => {
              (delete e.config.globalProperties.$i18n,
                Kc.forEach((t) => {
                  delete e.config.globalProperties[`$${t}`];
                }));
            };
            return r;
          })(e, l.global)),
          __VUE_I18N_FULL_INSTALL__ && Gc(e, l, ...r),
          __VUE_I18N_LEGACY_API__ &&
            t &&
            e.mixin(
              (function (e, t, n) {
                return {
                  beforeCreate() {
                    const r = rs();
                    if (!r) throw yc(vc);
                    const o = this.$options;
                    if (o.i18n) {
                      const r = o.i18n;
                      if ((o.__i18n && (r.__i18n = o.__i18n), (r.__root = t), this === this.$root)) this.$i18n = Mc(e, r);
                      else {
                        ((r.__injectWithOption = !0), (r.__extender = n.__vueI18nExtend), (this.$i18n = $c(r)));
                        const e = this.$i18n;
                        e.__extender && (e.__disposer = e.__extender(this.$i18n));
                      }
                    } else if (o.__i18n)
                      if (this === this.$root) this.$i18n = Mc(e, o);
                      else {
                        this.$i18n = $c({ __i18n: o.__i18n, __injectWithOption: !0, __extender: n.__vueI18nExtend, __root: t });
                        const e = this.$i18n;
                        e.__extender && (e.__disposer = e.__extender(this.$i18n));
                      }
                    else this.$i18n = e;
                    (o.__i18nGlobal && Tc(t, o, o),
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
                    const e = rs();
                    if (!e) throw yc(vc);
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
    const e = Object.assign({ './lang/en-us.ts': Ta, './lang/lang-base.ts': Aa, './lang/zh-cn.ts': Ia }),
      t = {};
    for (const n in e) {
      t[n.replace(/(\.\/lang\/|\.ts)/g, '')] = e[n].lang;
    }
    return t;
  })(),
});
function Qc(e) {
  (e && localStorage.setItem('lang', e), (Xc.global.locale.value = e || localStorage.getItem('lang') || ''));
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const eu = 'undefined' != typeof document;
function tu(e) {
  return 'object' == typeof e || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
const nu = Object.assign;
function ru(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = su(o) ? o.map(e) : e(o);
  }
  return n;
}
const ou = () => {},
  su = Array.isArray;
function au(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const lu = /#/g,
  iu = /&/g,
  cu = /\//g,
  uu = /=/g,
  fu = /\?/g,
  pu = /\+/g,
  du = /%5B/g,
  hu = /%5D/g,
  mu = /%5E/g,
  gu = /%60/g,
  _u = /%7B/g,
  vu = /%7C/g,
  yu = /%7D/g,
  bu = /%20/g;
function ku(e) {
  return null == e
    ? ''
    : encodeURI('' + e)
        .replace(vu, '|')
        .replace(du, '[')
        .replace(hu, ']');
}
function xu(e) {
  return ku(e)
    .replace(pu, '%2B')
    .replace(bu, '+')
    .replace(lu, '%23')
    .replace(iu, '%26')
    .replace(gu, '`')
    .replace(_u, '{')
    .replace(yu, '}')
    .replace(mu, '^');
}
function Eu(e) {
  return xu(e).replace(uu, '%3D');
}
function Su(e) {
  return (function (e) {
    return ku(e).replace(lu, '%23').replace(fu, '%3F');
  })(e).replace(cu, '%2F');
}
function wu(e) {
  if (null == e) return null;
  try {
    return decodeURIComponent('' + e);
  } catch (t) {}
  return '' + e;
}
const Cu = /\/$/;
function Ou(e, t, n = '/') {
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
    { fullPath: r + s + a, path: r, query: o, hash: wu(a) }
  );
}
function Lu(e, t) {
  return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || '/' : e;
}
function Tu(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Au(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Iu(e[n], t[n])) return !1;
  return !0;
}
function Iu(e, t) {
  return su(e) ? Pu(e, t) : su(t) ? Pu(t, e) : e === t;
}
function Pu(e, t) {
  return su(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : 1 === e.length && e[0] === t;
}
const Fu = { path: '/', name: void 0, params: {}, query: {}, hash: '', fullPath: '/', matched: [], meta: {}, redirectedFrom: void 0 };
let Nu = (function (e) {
    return ((e.pop = 'pop'), (e.push = 'push'), e);
  })({}),
  Ru = (function (e) {
    return ((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''), e);
  })({});
function $u(e) {
  if (!e)
    if (eu) {
      const t = document.querySelector('base');
      e = (e = (t && t.getAttribute('href')) || '/').replace(/^\w+:\/\/[^\/]+/, '');
    } else e = '/';
  return ('/' !== e[0] && '#' !== e[0] && (e = '/' + e), e.replace(Cu, ''));
}
const Mu = /^[^#]+#/;
function Du(e, t) {
  return e.replace(Mu, '#') + t;
}
const ju = () => ({ left: window.scrollX, top: window.scrollY });
function Wu(e) {
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
function Vu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Uu = new Map();
function Bu(e) {
  return 'string' == typeof e || 'symbol' == typeof e;
}
let Hu = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = 'MATCHER_NOT_FOUND'),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = 'NAVIGATION_GUARD_REDIRECT'),
    (e[(e.NAVIGATION_ABORTED = 4)] = 'NAVIGATION_ABORTED'),
    (e[(e.NAVIGATION_CANCELLED = 8)] = 'NAVIGATION_CANCELLED'),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = 'NAVIGATION_DUPLICATED'),
    e
  );
})({});
const Gu = Symbol('');
function zu(e, t) {
  return nu(new Error(), { type: e, [Gu]: !0 }, t);
}
function qu(e, t) {
  return e instanceof Error && Gu in e && (null == t || !!(e.type & t));
}
(Hu.MATCHER_NOT_FOUND, Hu.NAVIGATION_GUARD_REDIRECT, Hu.NAVIGATION_ABORTED, Hu.NAVIGATION_CANCELLED, Hu.NAVIGATION_DUPLICATED);
function Yu(e) {
  const t = {};
  if ('' === e || '?' === e) return t;
  const n = ('?' === e[0] ? e.slice(1) : e).split('&');
  for (let r = 0; r < n.length; ++r) {
    const e = n[r].replace(pu, ' '),
      o = e.indexOf('='),
      s = wu(o < 0 ? e : e.slice(0, o)),
      a = o < 0 ? null : wu(e.slice(o + 1));
    if (s in t) {
      let e = t[s];
      (su(e) || (e = t[s] = [e]), e.push(a));
    } else t[s] = a;
  }
  return t;
}
function Ku(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    ((n = Eu(n)),
      null != r
        ? (su(r) ? r.map((e) => e && xu(e)) : [r && xu(r)]).forEach((e) => {
            void 0 !== e && ((t += (t.length ? '&' : '') + n), null != e && (t += '=' + e));
          })
        : void 0 !== r && (t += (t.length ? '&' : '') + n));
  }
  return t;
}
function Ju(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    void 0 !== r && (t[n] = su(r) ? r.map((e) => (null == e ? null : '' + e)) : null == r ? r : '' + r);
  }
  return t;
}
const Zu = Symbol(''),
  Xu = Symbol(''),
  Qu = Symbol(''),
  ef = Symbol(''),
  tf = Symbol('');
function nf() {
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
function rf(e, t, n, r, o, s = (e) => e()) {
  const a = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((l, i) => {
      const c = (e) => {
          var s;
          !1 === e
            ? i(zu(Hu.NAVIGATION_ABORTED, { from: n, to: t }))
            : e instanceof Error
              ? i(e)
              : 'string' == typeof (s = e) || (s && 'object' == typeof s)
                ? i(zu(Hu.NAVIGATION_GUARD_REDIRECT, { from: t, to: e }))
                : (a && r.enterCallbacks[o] === a && 'function' == typeof e && a.push(e), l());
        },
        u = s(() => e.call(r && r.instances[o], t, n, c));
      let f = Promise.resolve(u);
      (e.length < 3 && (f = f.then(c)), f.catch((e) => i(e)));
    });
}
function of(e, t, n, r, o = (e) => e()) {
  const s = [];
  for (const a of e)
    for (const e in a.components) {
      let l = a.components[e];
      if ('beforeRouteEnter' === t || a.instances[e])
        if (tu(l)) {
          const i = (l.__vccOpts || l)[t];
          i && s.push(rf(i, n, r, a, e, o));
        } else {
          let i = l();
          s.push(() =>
            i.then((s) => {
              if (!s) throw new Error(`Couldn't resolve component "${e}" at "${a.path}"`);
              const l = (i = s).__esModule || 'Module' === i[Symbol.toStringTag] || (i.default && tu(i.default)) ? s.default : s;
              var i;
              ((a.mods[e] = s), (a.components[e] = l));
              const c = (l.__vccOpts || l)[t];
              return c && rf(c, n, r, a, e, o)();
            }),
          );
        }
    }
  return s;
}
function sf(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf('#');
  if (s > -1) {
    let t = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      n = o.slice(t);
    return ('/' !== n[0] && (n = '/' + n), Lu(n, ''));
  }
  return Lu(n, e) + r + o;
}
function af(e, t, n, r = !1, o = !1) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: o ? ju() : null };
}
function lf(e) {
  const { history: t, location: n } = window,
    r = { value: sf(e, n) },
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
        const a = nu({}, o.value, t.state, { forward: e, scroll: ju() });
        (s(a.current, a, !0), s(e, nu({}, af(r.value, e, null), { position: a.position + 1 }, n), !1), (r.value = e));
      },
      replace: function (e, n) {
        (s(e, nu({}, t.state, af(o.value.back, e, o.value.forward, !0), n, { position: o.value.position }), !0), (r.value = e));
      },
    }
  );
}
let cf = (function (e) {
  return ((e[(e.Static = 0)] = 'Static'), (e[(e.Param = 1)] = 'Param'), (e[(e.Group = 2)] = 'Group'), e);
})({});
var uf = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.ParamRegExp = 2)] = 'ParamRegExp'),
    (e[(e.ParamRegExpEnd = 3)] = 'ParamRegExpEnd'),
    (e[(e.EscapeNext = 4)] = 'EscapeNext'),
    e
  );
})(uf || {});
const ff = { type: cf.Static, value: '' },
  pf = /[a-zA-Z0-9_]/;
const df = '[^/]+?',
  hf = { sensitive: !1, strict: !1, start: !0, end: !0 };
var mf = (function (e) {
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
})(mf || {});
const gf = /[.+*?^${}()[\]/\\]/g;
function _f(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? 1 === e.length && e[0] === mf.Static + mf.Segment
      ? -1
      : 1
    : e.length > t.length
      ? 1 === t.length && t[0] === mf.Static + mf.Segment
        ? 1
        : -1
      : 0;
}
function vf(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const e = _f(r[n], o[n]);
    if (e) return e;
    n++;
  }
  if (1 === Math.abs(o.length - r.length)) {
    if (yf(r)) return 1;
    if (yf(o)) return -1;
  }
  return o.length - r.length;
}
function yf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const bf = { strict: !1, end: !0, sensitive: !1 };
function kf(e, t, n) {
  const r = (function (e, t) {
      const n = nu({}, hf, t),
        r = [];
      let o = n.start ? '^' : '';
      const s = [];
      for (const l of e) {
        const e = l.length ? [] : [mf.Root];
        n.strict && !l.length && (o += '/');
        for (let t = 0; t < l.length; t++) {
          const r = l[t];
          let a = mf.Segment + (n.sensitive ? mf.BonusCaseSensitive : 0);
          if (r.type === cf.Static) (t || (o += '/'), (o += r.value.replace(gf, '\\$&')), (a += mf.Static));
          else if (r.type === cf.Param) {
            const { value: e, repeatable: n, optional: i, regexp: c } = r;
            s.push({ name: e, repeatable: n, optional: i });
            const u = c || df;
            u !== df && (a += mf.BonusCustomRegExp);
            let f = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
            (t || (f = i && l.length < 2 ? `(?:/${f})` : '/' + f),
              i && (f += '?'),
              (o += f),
              (a += mf.Dynamic),
              i && (a += mf.BonusOptional),
              n && (a += mf.BonusRepeatable),
              '.*' === u && (a += mf.BonusWildcard));
          }
          e.push(a);
        }
        r.push(e);
      }
      if (n.strict && n.end) {
        const e = r.length - 1;
        r[e][r[e].length - 1] += mf.BonusStrict;
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
              if (e.type === cf.Static) n += e.value;
              else if (e.type === cf.Param) {
                const { value: s, repeatable: a, optional: l } = e,
                  i = s in t ? t[s] : '';
                if (su(i) && !a) throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);
                const c = su(i) ? i.join('/') : i;
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
        if ('/' === e) return [[ff]];
        if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
        function t(e) {
          throw new Error(`ERR (${n})/"${c}": ${e}`);
        }
        let n = uf.Static,
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
            (n === uf.Static
              ? s.push({ type: cf.Static, value: c })
              : n === uf.Param || n === uf.ParamRegExp || n === uf.ParamRegExpEnd
                ? (s.length > 1 && ('*' === l || '+' === l) && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
                  s.push({ type: cf.Param, value: c, regexp: u, repeatable: '*' === l || '+' === l, optional: '*' === l || '?' === l }))
                : t('Invalid state to consume buffer'),
            (c = ''));
        }
        function p() {
          c += l;
        }
        for (; i < e.length; )
          if (((l = e[i++]), '\\' !== l || n === uf.ParamRegExp))
            switch (n) {
              case uf.Static:
                '/' === l ? (c && f(), a()) : ':' === l ? (f(), (n = uf.Param)) : p();
                break;
              case uf.EscapeNext:
                (p(), (n = r));
                break;
              case uf.Param:
                '(' === l ? (n = uf.ParamRegExp) : pf.test(l) ? p() : (f(), (n = uf.Static), '*' !== l && '?' !== l && '+' !== l && i--);
                break;
              case uf.ParamRegExp:
                ')' === l ? ('\\' == u[u.length - 1] ? (u = u.slice(0, -1) + l) : (n = uf.ParamRegExpEnd)) : (u += l);
                break;
              case uf.ParamRegExpEnd:
                (f(), (n = uf.Static), '*' !== l && '?' !== l && '+' !== l && i--, (u = ''));
                break;
              default:
                t('Unknown state');
            }
          else ((r = n), (n = uf.EscapeNext));
        return (n === uf.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`), f(), a(), o);
      })(e.path),
      n,
    ),
    o = nu(r, { record: e, parent: t, children: [], alias: [] });
  return (t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o);
}
function xf(e, t) {
  const n = [],
    r = new Map();
  function o(e, n, r) {
    const l = !r,
      i = Sf(e);
    i.aliasOf = r && r.record;
    const c = au(t, e),
      u = [i];
    if ('alias' in e) {
      const t = 'string' == typeof e.alias ? [e.alias] : e.alias;
      for (const e of t) u.push(Sf(nu({}, i, { components: r ? r.record.components : i.components, path: e, aliasOf: r ? r.record : i })));
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
        ((f = kf(t, n, c)),
        r ? r.alias.push(f) : ((p = p || f), p !== f && p.alias.push(f), l && e.name && !Cf(f) && s(e.name)),
        Lf(f) && a(f),
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
      : ou;
  }
  function s(e) {
    if (Bu(e)) {
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
        vf(e, t[o]) < 0 ? (r = o) : (n = o + 1);
      }
      const o = (function (e) {
        let t = e;
        for (; (t = t.parent); ) if (Lf(t) && 0 === vf(e, t)) return t;
      })(e);
      o && (r = t.lastIndexOf(o, r - 1));
      return r;
    })(e, n);
    (n.splice(t, 0, e), e.record.name && !Cf(e) && r.set(e.record.name, e));
  }
  return (
    (t = au(bf, t)),
    e.forEach((e) => o(e)),
    {
      addRoute: o,
      resolve: function (e, t) {
        let o,
          s,
          a,
          l = {};
        if ('name' in e && e.name) {
          if (((o = r.get(e.name)), !o)) throw zu(Hu.MATCHER_NOT_FOUND, { location: e });
          ((a = o.record.name),
            (l = nu(
              Ef(
                t.params,
                o.keys
                  .filter((e) => !e.optional)
                  .concat(o.parent ? o.parent.keys.filter((e) => e.optional) : [])
                  .map((e) => e.name),
              ),
              e.params &&
                Ef(
                  e.params,
                  o.keys.map((e) => e.name),
                ),
            )),
            (s = o.stringify(l)));
        } else if (null != e.path) ((s = e.path), (o = n.find((e) => e.re.test(s))), o && ((l = o.parse(s)), (a = o.record.name)));
        else {
          if (((o = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path))), !o))
            throw zu(Hu.MATCHER_NOT_FOUND, { location: e, currentLocation: t });
          ((a = o.record.name), (l = nu({}, t.params, e.params)), (s = o.stringify(l)));
        }
        const i = [];
        let c = o;
        for (; c; ) (i.unshift(c.record), (c = c.parent));
        return { name: a, path: s, params: l, matched: i, meta: Of(i) };
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
function Ef(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Sf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: wf(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return (Object.defineProperty(t, 'mods', { value: {} }), t);
}
function wf(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = 'object' == typeof n ? n[r] : n;
  return t;
}
function Cf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Of(e) {
  return e.reduce((e, t) => nu(e, t.meta), {});
}
function Lf({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function Tf(e) {
  const t = Ur(Qu),
    n = Ur(ef),
    r = gs(() => {
      const n = wt(e.to);
      return t.resolve(n);
    }),
    o = gs(() => {
      const { matched: e } = r.value,
        { length: t } = e,
        o = e[t - 1],
        s = n.matched;
      if (!o || !s.length) return -1;
      const a = s.findIndex(Tu.bind(null, o));
      if (a > -1) return a;
      const l = If(e[t - 2]);
      return t > 1 && If(o) === l && s[s.length - 1].path !== l ? s.findIndex(Tu.bind(null, e[t - 2])) : a;
    }),
    s = gs(
      () =>
        o.value > -1 &&
        (function (e, t) {
          for (const n in t) {
            const r = t[n],
              o = e[n];
            if ('string' == typeof r) {
              if (r !== o) return !1;
            } else if (!su(o) || o.length !== r.length || r.some((e, t) => e !== o[t])) return !1;
          }
          return !0;
        })(n.params, r.value.params),
    ),
    a = gs(() => o.value > -1 && o.value === n.matched.length - 1 && Au(n.params, r.value.params));
  return {
    route: r,
    href: gs(() => r.value.href),
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
        const n = t[wt(e.replace) ? 'replace' : 'push'](wt(e.to)).catch(ou);
        return (
          e.viewTransition && 'undefined' != typeof document && 'startViewTransition' in document && document.startViewTransition(() => n),
          n
        );
      }
      return Promise.resolve();
    },
  };
}
const Af = Rn({
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
  useLink: Tf,
  setup(e, { slots: t }) {
    const n = it(Tf(e)),
      { options: r } = Ur(Qu),
      o = gs(() => ({
        [Pf(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
        [Pf(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]: n.isExactActive,
      }));
    return () => {
      const r = t.default && (1 === (s = t.default(n)).length ? s[0] : s);
      var s;
      return e.custom
        ? r
        : _s('a', { 'aria-current': n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: o.value }, r);
    };
  },
});
function If(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Pf = (e, t, n) => (null != e ? e : null != t ? t : n);
function Ff(e, t) {
  if (!e) return null;
  const n = e(t);
  return 1 === n.length ? n[0] : n;
}
const Nf = Rn({
  name: 'RouterView',
  inheritAttrs: !1,
  props: { name: { type: String, default: 'default' }, route: Object },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const r = Ur(tf),
      o = gs(() => e.route || r.value),
      s = Ur(Xu, 0),
      a = gs(() => {
        let e = wt(s);
        const { matched: t } = o.value;
        let n;
        for (; (n = t[e]) && !n.components; ) e++;
        return e;
      }),
      l = gs(() => o.value.matched[a.value]);
    (Vr(
      Xu,
      gs(() => a.value + 1),
    ),
      Vr(Zu, l),
      Vr(tf, o));
    const i = kt();
    return (
      po(
        () => [i.value, l.value, e.name],
        ([e, t, n], [r, o, s]) => {
          (t &&
            ((t.instances[n] = e),
            o &&
              o !== t &&
              e &&
              e === r &&
              (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards), t.updateGuards.size || (t.updateGuards = o.updateGuards))),
            !e || !t || (o && Tu(t, o) && r) || (t.enterCallbacks[n] || []).forEach((t) => t(e)));
        },
        { flush: 'post' },
      ),
      () => {
        const r = o.value,
          s = e.name,
          a = l.value,
          c = a && a.components[s];
        if (!c) return Ff(n.default, { Component: c, route: r });
        const u = a.props[s],
          f = u ? (!0 === u ? r.params : 'function' == typeof u ? u(r) : u) : null,
          p = _s(
            c,
            nu({}, f, t, {
              onVnodeUnmounted: (e) => {
                e.component.isUnmounted && (a.instances[s] = null);
              },
              ref: i,
            }),
          );
        return Ff(n.default, { Component: p, route: r }) || p;
      }
    );
  },
});
function Rf() {
  return Ur(Qu);
}
const $f = {},
  Mf = function (e, t, n) {
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
            })(e)) in $f
          )
            return;
          $f[e] = !0;
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
  Df = [
    {
      path: '/',
      redirect: '/home',
      component: () => Mf(() => import('./index-DOinsNk8.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])),
      children: [
        {
          path: 'home',
          component: () => Mf(() => import('./index-OE65PIBB.js'), __vite__mapDeps([10, 11, 1, 2, 12, 13, 7, 14, 15])),
          meta: { title: 'tabbar.home', keepAlive: !0 },
        },
        {
          path: 'list',
          component: () => Mf(() => import('./index-TzhF-lUY.js'), __vite__mapDeps([16, 17, 4, 18, 19, 20, 21, 3, 22, 9])),
          meta: { title: 'tabbar.list', keepAlive: !0 },
        },
        {
          path: 'member',
          component: () => Mf(() => import('./index-CYfsTKkb.js'), __vite__mapDeps([23, 11, 1, 2, 12, 24, 18, 4, 21, 25, 5, 14, 7, 26])),
          meta: { title: 'tabbar.member', keepAlive: !0 },
        },
        {
          path: 'demo',
          component: () => Mf(() => import('./index-H5CHVQgu.js'), __vite__mapDeps([27, 11, 1, 2, 12, 17, 4, 18, 19, 25, 6, 28, 29, 9])),
          meta: { title: 'tabbar.demo', keepAlive: !0 },
        },
        {
          name: 'listDetails',
          path: '/details',
          component: () => Mf(() => import('./index-COLXcCOb.js'), __vite__mapDeps([30, 20, 25, 28, 31])),
          meta: { title: 'list.details', border: !1 },
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: () => Mf(() => import('./index-VqSAAfr4.js'), __vite__mapDeps([32, 11, 1, 2, 12, 24, 18, 4, 21, 5, 28, 13, 7, 14, 33])),
      meta: { title: '', keepAlive: !0 },
    },
    { path: '/:pathMatch(.*)', redirect: '/Home' },
  ],
  jf = (function (e) {
    const t = xf(e.routes, e),
      n = e.parseQuery || Yu,
      r = e.stringifyQuery || Ku,
      o = e.history,
      s = nf(),
      a = nf(),
      l = nf(),
      i = xt(Fu);
    let c = Fu;
    eu && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual');
    const u = ru.bind(null, (e) => '' + e),
      f = ru.bind(null, Su),
      p = ru.bind(null, wu);
    function d(e, s) {
      if (((s = nu({}, s || i.value)), 'string' == typeof e)) {
        const r = Ou(n, e, s.path),
          a = t.resolve({ path: r.path }, s),
          l = o.createHref(r.fullPath);
        return nu(r, a, { params: p(a.params), hash: wu(r.hash), redirectedFrom: void 0, href: l });
      }
      let a;
      if (null != e.path) a = nu({}, e, { path: Ou(n, e.path, s.path).path });
      else {
        const t = nu({}, e.params);
        for (const e in t) null == t[e] && delete t[e];
        ((a = nu({}, e, { params: f(t) })), (s.params = f(s.params)));
      }
      const l = t.resolve(a, s),
        c = e.hash || '';
      l.params = u(p(l.params));
      const d = (function (e, t) {
        const n = t.query ? e(t.query) : '';
        return t.path + (n && '?') + n + (t.hash || '');
      })(r, nu({}, e, { hash: ((h = c), ku(h).replace(_u, '{').replace(yu, '}').replace(mu, '^')), path: l.path }));
      var h;
      const m = o.createHref(d);
      return nu({ fullPath: d, hash: c, query: r === Ku ? Ju(e.query) : e.query || {} }, l, { redirectedFrom: void 0, href: m });
    }
    function h(e) {
      return 'string' == typeof e ? Ou(n, e, i.value.path) : nu({}, e);
    }
    function m(e, t) {
      if (c !== e) return zu(Hu.NAVIGATION_CANCELLED, { from: t, to: e });
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
          nu({ query: e.query, hash: e.hash, params: null != o.path ? {} : e.params }, o)
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
      if (u) return v(nu(h(u), { state: 'object' == typeof u ? nu({}, s, u.state) : s, force: a, replace: l }), t || n);
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
              Tu(t.matched[r], n.matched[o]) &&
              Au(t.params, n.params) &&
              e(t.query) === e(n.query) &&
              t.hash === n.hash
            );
          })(r, o, n) &&
          ((p = zu(Hu.NAVIGATION_DUPLICATED, { to: f, from: o })), I(o, o, !0, !1)),
        (p ? Promise.resolve(p) : k(f, o))
          .catch((e) => (qu(e) ? (qu(e, Hu.NAVIGATION_GUARD_REDIRECT) ? e : A(e)) : T(e, f, o)))
          .then((e) => {
            if (e) {
              if (qu(e, Hu.NAVIGATION_GUARD_REDIRECT))
                return v(nu({ replace: l }, h(e.to), { state: 'object' == typeof e.to ? nu({}, s, e.to.state) : s, force: a }), t || f);
            } else e = E(f, o, !0, l, s);
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
          s && (e.matched.find((e) => Tu(e, s)) ? r.push(s) : n.push(s));
          const l = e.matched[a];
          l && (t.matched.find((e) => Tu(e, l)) || o.push(l));
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
      n = of(r.reverse(), 'beforeRouteLeave', e, t);
      for (const s of r)
        s.leaveGuards.forEach((r) => {
          n.push(rf(r, e, t));
        });
      const i = y.bind(null, e, t);
      return (
        n.push(i),
        $(n)
          .then(() => {
            n = [];
            for (const r of s.list()) n.push(rf(r, e, t));
            return (n.push(i), $(n));
          })
          .then(() => {
            n = of(o, 'beforeRouteUpdate', e, t);
            for (const r of o)
              r.updateGuards.forEach((r) => {
                n.push(rf(r, e, t));
              });
            return (n.push(i), $(n));
          })
          .then(() => {
            n = [];
            for (const r of l)
              if (r.beforeEnter)
                if (su(r.beforeEnter)) for (const o of r.beforeEnter) n.push(rf(o, e, t));
                else n.push(rf(r.beforeEnter, e, t));
            return (n.push(i), $(n));
          })
          .then(() => (e.matched.forEach((e) => (e.enterCallbacks = {})), (n = of(l, 'beforeRouteEnter', e, t, b)), n.push(i), $(n)))
          .then(() => {
            n = [];
            for (const r of a.list()) n.push(rf(r, e, t));
            return (n.push(i), $(n));
          })
          .catch((e) => (qu(e, Hu.NAVIGATION_CANCELLED) ? e : Promise.reject(e)))
      );
    }
    function x(e, t, n) {
      l.list().forEach((r) => b(() => r(e, t, n)));
    }
    function E(e, t, n, r, s) {
      const a = m(e, t);
      if (a) return a;
      const l = t === Fu,
        c = eu ? history.state : {};
      (n && (r || l ? o.replace(e.fullPath, nu({ scroll: l && c && c.scroll }, s)) : o.push(e.fullPath, s)),
        (i.value = e),
        I(e, t, n, l),
        A());
    }
    let S;
    function w() {
      S ||
        (S = o.listen((e, t, n) => {
          if (!R.listening) return;
          const r = d(e),
            s = _(r, R.currentRoute.value);
          if (s) return void v(nu(s, { replace: !0, force: !0 }), r).catch(ou);
          c = r;
          const a = i.value;
          var l, u;
          (eu && ((l = Vu(a.fullPath, n.delta)), (u = ju()), Uu.set(l, u)),
            k(r, a)
              .catch((e) =>
                qu(e, Hu.NAVIGATION_ABORTED | Hu.NAVIGATION_CANCELLED)
                  ? e
                  : qu(e, Hu.NAVIGATION_GUARD_REDIRECT)
                    ? (v(nu(h(e.to), { force: !0 }), r)
                        .then((e) => {
                          qu(e, Hu.NAVIGATION_ABORTED | Hu.NAVIGATION_DUPLICATED) && !n.delta && n.type === Nu.pop && o.go(-1, !1);
                        })
                        .catch(ou),
                      Promise.reject())
                    : (n.delta && o.go(-n.delta, !1), T(e, r, a)),
              )
              .then((e) => {
                ((e = e || E(r, a, !1)) &&
                  (n.delta && !qu(e, Hu.NAVIGATION_CANCELLED)
                    ? o.go(-n.delta, !1)
                    : n.type === Nu.pop && qu(e, Hu.NAVIGATION_ABORTED | Hu.NAVIGATION_DUPLICATED) && o.go(-1, !1)),
                  x(r, a, e));
              })
              .catch(ou));
        }));
    }
    let C,
      O = nf(),
      L = nf();
    function T(e, t, n) {
      A(e);
      const r = L.list();
      return (r.length && r.forEach((r) => r(e, t, n)), Promise.reject(e));
    }
    function A(e) {
      return (C || ((C = !e), w(), O.list().forEach(([t, n]) => (e ? n(e) : t())), O.reset()), e);
    }
    function I(t, n, r, o) {
      const { scrollBehavior: s } = e;
      if (!eu || !s) return Promise.resolve();
      const a =
        (!r &&
          (function (e) {
            const t = Uu.get(e);
            return (Uu.delete(e), t);
          })(Vu(t.fullPath, 0))) ||
        ((o || !r) && history.state && history.state.scroll) ||
        null;
      return Kt()
        .then(() => s(t, n, a))
        .then((e) => e && Wu(e))
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
          return (Bu(e) ? ((r = t.getRecordMatcher(e)), (o = n)) : (o = e), t.addRoute(o, r));
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
          return g(nu(h(e), { replace: !0 }));
        },
        go: P,
        back: () => P(-1),
        forward: () => P(1),
        beforeEach: s.add,
        beforeResolve: a.add,
        afterEach: l.add,
        onError: L.add,
        isReady: function () {
          return C && i.value !== Fu
            ? Promise.resolve()
            : new Promise((e, t) => {
                O.add([e, t]);
              });
        },
        install(e) {
          (e.component('RouterLink', Af),
            e.component('RouterView', Nf),
            (e.config.globalProperties.$router = R),
            Object.defineProperty(e.config.globalProperties, '$route', { enumerable: !0, get: () => wt(i) }),
            eu && !F && i.value === Fu && ((F = !0), g(o.location).catch((e) => {})));
          const t = {};
          for (const r in Fu) Object.defineProperty(t, r, { get: () => i.value[r], enumerable: !0 });
          (e.provide(Qu, R), e.provide(ef, ct(t)), e.provide(tf, i));
          const n = e.unmount;
          (N.add(e),
            (e.unmount = function () {
              (N.delete(e), N.size < 1 && ((c = Fu), S && S(), (S = null), (i.value = Fu), (F = !1), (C = !1)), n());
            }));
        },
      };
    function $(e) {
      return e.reduce((e, t) => e.then(() => b(t)), Promise.resolve());
    }
    return R;
  })({
    history: (function (e) {
      const t = lf((e = $u(e))),
        n = (function (e, t, n, r) {
          let o = [],
            s = [],
            a = null;
          const l = ({ state: s }) => {
            const l = sf(e, location),
              i = n.value,
              c = t.value;
            let u = 0;
            if (s) {
              if (((n.value = l), (t.value = s), a && a === i)) return void (a = null);
              u = c ? s.position - c.position : 0;
            } else r(l);
            o.forEach((e) => {
              e(n.value, i, { delta: u, type: Nu.pop, direction: u ? (u > 0 ? Ru.forward : Ru.back) : Ru.unknown });
            });
          };
          function i() {
            if ('hidden' === document.visibilityState) {
              const { history: e } = window;
              if (!e.state) return;
              e.replaceState(nu({}, e.state, { scroll: ju() }), '');
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
        })(e, t.state, t.location, t.replace),
        r = nu(
          {
            location: '',
            base: e,
            go: function (e, t = !0) {
              (t || n.pauseListeners(), history.go(e));
            },
            createHref: Du.bind(null, e),
          },
          t,
          n,
        );
      return (
        Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
        Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
        r
      );
    })('/ticket-calculator'),
    routes: Df,
  });
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Wf;
jf.beforeEach(async (e, t, n) => {
  n();
});
const Vf = (e) => (Wf = e),
  Uf = Symbol();
function Bf(e) {
  return e && 'object' == typeof e && '[object Object]' === Object.prototype.toString.call(e) && 'function' != typeof e.toJSON;
}
var Hf, Gf;
(((Gf = Hf || (Hf = {})).direct = 'direct'), (Gf.patchObject = 'patch object'), (Gf.patchFunction = 'patch function'));
const zf = () => {};
function qf(e, t, n, r = zf) {
  e.push(t);
  const o = () => {
    const n = e.indexOf(t);
    n > -1 && (e.splice(n, 1), r());
  };
  return (!n && ee() && te(o), o);
}
function Yf(e, ...t) {
  e.slice().forEach((e) => {
    e(...t);
  });
}
const Kf = (e) => e(),
  Jf = Symbol(),
  Zf = Symbol();
function Xf(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    Bf(o) && Bf(r) && e.hasOwnProperty(n) && !bt(r) && !pt(r) ? (e[n] = Xf(o, r)) : (e[n] = r);
  }
  return e;
}
const Qf = Symbol();
function ep(e) {
  return !Bf(e) || !Object.prototype.hasOwnProperty.call(e, Qf);
}
const { assign: tp } = Object;
function np(e) {
  return !(!bt(e) || !e.effect);
}
function rp(e, t, n = {}, r, o, s) {
  let a;
  const l = tp({ actions: {} }, n),
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
        ? (t(r.state.value[e]), (n = { type: Hf.patchFunction, storeId: e, events: f }))
        : (Xf(r.state.value[e], t), (n = { type: Hf.patchObject, payload: t, storeId: e, events: f })));
    const o = (m = Symbol());
    (Kt().then(() => {
      m === o && (c = !0);
    }),
      (u = !0),
      Yf(p, n, r.state.value[e]));
  }
  (s || h || (r.state.value[e] = {}), kt({}));
  const _ = s
    ? function () {
        const { state: e } = n,
          t = e ? e() : {};
        this.$patch((e) => {
          tp(e, t);
        });
      }
    : zf;
  const v = (t, n = '') => {
      if (Jf in t) return ((t[Zf] = n), t);
      const o = function () {
        Vf(r);
        const n = Array.from(arguments),
          s = [],
          a = [];
        let l;
        Yf(d, {
          args: n,
          name: o[Zf],
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
          throw (Yf(a, i), i);
        }
        return l instanceof Promise ? l.then((e) => (Yf(s, e), e)).catch((e) => (Yf(a, e), Promise.reject(e))) : (Yf(s, l), l);
      };
      return ((o[Jf] = !0), (o[Zf] = n), o);
    },
    y = it({
      _p: r,
      $id: e,
      $onAction: qf.bind(null, d),
      $patch: g,
      $reset: _,
      $subscribe(t, n = {}) {
        const o = qf(p, t, n.detached, () => s()),
          s = a.run(() =>
            po(
              () => r.state.value[e],
              (r) => {
                ('sync' === n.flush ? u : c) && t({ storeId: e, type: Hf.direct, events: f }, r);
              },
              tp({}, i, n),
            ),
          );
        return o;
      },
      $dispose: function () {
        (a.stop(), (p = []), (d = []), r._s.delete(e));
      },
    });
  r._s.set(e, y);
  const b = ((r._a && r._a.runWithContext) || Kf)(() => r._e.run(() => (a = Q()).run(() => t({ action: v }))));
  for (const k in b) {
    const t = b[k];
    if ((bt(t) && !np(t)) || pt(t)) s || (h && ep(t) && (bt(t) ? (t.value = h[k]) : Xf(t, h[k])), (r.state.value[e][k] = t));
    else if ('function' == typeof t) {
      const e = v(t, k);
      ((b[k] = e), (l.actions[k] = t));
    }
  }
  return (
    tp(y, b),
    tp(gt(y), b),
    Object.defineProperty(y, '$state', {
      get: () => r.state.value[e],
      set: (e) => {
        g((t) => {
          tp(t, e);
        });
      },
    }),
    r._p.forEach((e) => {
      tp(
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
/*! #__NO_SIDE_EFFECTS__ */ function op(e, t, n) {
  let r;
  const o = 'function' == typeof t;
  function s(n, s) {
    const a = !(!rs() && !Wr);
    ((n = n || (a ? Ur(Uf, null) : null)) && Vf(n),
      (n = Wf)._s.has(e) ||
        (o
          ? rp(e, t, r, n)
          : (function (e, t, n) {
              const { state: r, actions: o, getters: s } = t,
                a = n.state.value[e];
              let l;
              l = rp(
                e,
                function () {
                  a || (n.state.value[e] = r ? r() : {});
                  const t = Lt(n.state.value[e]);
                  return tp(
                    t,
                    o,
                    Object.keys(s || {}).reduce(
                      (t, r) => (
                        (t[r] = _t(
                          gs(() => {
                            Vf(n);
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
const sp =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  ap =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  lp = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function ip(e, t) {
  if (!('__proto__' === e || ('constructor' === e && t && 'object' == typeof t && 'prototype' in t))) return t;
}
function cp(e, t) {
  if (null == e) return;
  let n = e;
  for (let r = 0; r < t.length; r++) {
    if (null == n || null == n[t[r]]) return;
    n = n[t[r]];
  }
  return n;
}
function up(e, t, n) {
  if (0 === n.length) return t;
  const r = n[0];
  return (
    n.length > 1 &&
      (t = up(
        'object' == typeof e && null !== e && Object.prototype.hasOwnProperty.call(e, r) ? e[r] : Number.isInteger(Number(n[1])) ? [] : {},
        t,
        Array.prototype.slice.call(n, 1),
      )),
    Number.isInteger(Number(r)) && Array.isArray(e) ? e.slice()[r] : Object.assign({}, e, { [r]: t })
  );
}
function fp(e, t) {
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
  return up(e, fp(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function pp(e, t) {
  return t
    .map((e) => e.split('.'))
    .map((t) => [t, cp(e, t)])
    .filter((e) => void 0 !== e[1])
    .reduce((e, t) => up(e, t[1], t[0]), {});
}
function dp(e, t) {
  return t.map((e) => e.split('.')).reduce((e, t) => fp(e, t), e);
}
function hp(e, { storage: t, serializer: n, key: r, debug: o, pick: s, omit: a, beforeHydrate: l, afterHydrate: i }, c, u = !0) {
  try {
    u && l?.(c);
    const o = t.getItem(r);
    if (o) {
      const t = n.deserialize(o),
        r = s ? pp(t, s) : t,
        l = a ? dp(r, a) : r;
      e.$patch(l);
    }
    u && i?.(c);
  } catch (f) {}
}
function mp(e, { storage: t, serializer: n, key: r, debug: o, pick: s, omit: a }) {
  try {
    const o = s ? pp(e, s) : e,
      l = a ? dp(o, a) : o,
      i = n.serialize(l);
    t.setItem(r, i);
  } catch (l) {}
}
var gp = (function (e = {}) {
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
          hp(o, n, e, t);
        });
      }),
        (o.$persist = () => {
          a.forEach((e) => {
            mp(o.$state, e);
          });
        }),
        a.forEach((t) => {
          (hp(o, t, e), o.$subscribe((e, n) => mp(n, t), { detached: !0 }));
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
                if (!lp.test(e)) {
                  if (t.strict) throw new SyntaxError('[destr] Invalid JSON');
                  return e;
                }
                try {
                  if (sp.test(e) || ap.test(e)) {
                    if (t.strict) throw new Error('[destr] Possible prototype pollution');
                    return JSON.parse(e, ip);
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
const _p = (function () {
  const e = Q(!0),
    t = e.run(() => kt({}));
  let n = [],
    r = [];
  const o = _t({
    install(e) {
      (Vf(o), (o._a = e), e.provide(Uf, o), (e.config.globalProperties.$pinia = o), r.forEach((e) => n.push(e)), (r = []));
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
_p.use(gp);
const vp = Ca(La);
(vp.use(jf), vp.use(Xc), vp.use(_p), vp.mount('#app'));
export {
  vn as $,
  Rf as A,
  qc as B,
  Qc as C,
  qo as D,
  rs as E,
  Oo as F,
  er as G,
  it as H,
  Xo as I,
  Vr as J,
  Un as K,
  Lt as L,
  Ur as M,
  Ca as N,
  wa as O,
  nr as P,
  Hn as Q,
  Gn as R,
  rr as S,
  As as T,
  jo as U,
  To as V,
  _s as W,
  Xn as X,
  pr as Y,
  gr as Z,
  Oa as _,
  Bo as a,
  ma as a0,
  It as a1,
  ka as a2,
  jf as a3,
  ee as a4,
  te as a5,
  xt as a6,
  op as a7,
  Er as a8,
  U as b,
  Mo as c,
  Rn as d,
  gs as e,
  Qn as f,
  _r as g,
  Kt as h,
  an as i,
  Ho as j,
  sn as k,
  Yo as l,
  Do as m,
  M as n,
  Fo as o,
  fr as p,
  B as q,
  kt as r,
  Go as s,
  q as t,
  wt as u,
  zs as v,
  po as w,
  bt as x,
  cr as y,
  mr as z,
};
