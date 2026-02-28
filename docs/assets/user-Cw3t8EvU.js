import { h as e } from './index-iLhJhSY-.js';
import { a5 as t, a6 as i, a7 as o, a8 as n } from './index-BVTDfLT_.js';
'undefined' != typeof WorkerGlobalScope && (globalThis, WorkerGlobalScope);
var s,
  r = {};
var a = (function () {
  if (s) return r;
  ((s = 1),
    Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.parse = function (e, t) {
      const i = new a(),
        o = e.length;
      if (o < 2) return i;
      const n = t?.decode || u;
      let s = 0;
      do {
        const t = e.indexOf('=', s);
        if (-1 === t) break;
        const r = e.indexOf(';', s),
          a = -1 === r ? o : r;
        if (t > a) {
          s = e.lastIndexOf(';', t - 1) + 1;
          continue;
        }
        const u = c(e, s, t),
          l = h(e, t, u),
          d = e.slice(u, l);
        if (void 0 === i[d]) {
          let o = c(e, t + 1, a),
            s = h(e, a, o);
          const r = n(e.slice(o, s));
          i[d] = r;
        }
        s = a + 1;
      } while (s < o);
      return i;
    }),
    (r.serialize = function (s, r, a) {
      const c = a?.encode || encodeURIComponent;
      if (!e.test(s)) throw new TypeError(`argument name is invalid: ${s}`);
      const h = c(r);
      if (!t.test(h)) throw new TypeError(`argument val is invalid: ${r}`);
      let u = s + '=' + h;
      if (!a) return u;
      if (void 0 !== a.maxAge) {
        if (!Number.isInteger(a.maxAge)) throw new TypeError(`option maxAge is invalid: ${a.maxAge}`);
        u += '; Max-Age=' + a.maxAge;
      }
      if (a.domain) {
        if (!i.test(a.domain)) throw new TypeError(`option domain is invalid: ${a.domain}`);
        u += '; Domain=' + a.domain;
      }
      if (a.path) {
        if (!o.test(a.path)) throw new TypeError(`option path is invalid: ${a.path}`);
        u += '; Path=' + a.path;
      }
      if (a.expires) {
        if (
          !(function (e) {
            return '[object Date]' === n.call(e);
          })(a.expires) ||
          !Number.isFinite(a.expires.valueOf())
        )
          throw new TypeError(`option expires is invalid: ${a.expires}`);
        u += '; Expires=' + a.expires.toUTCString();
      }
      a.httpOnly && (u += '; HttpOnly');
      a.secure && (u += '; Secure');
      a.partitioned && (u += '; Partitioned');
      if (a.priority) {
        switch ('string' == typeof a.priority ? a.priority.toLowerCase() : void 0) {
          case 'low':
            u += '; Priority=Low';
            break;
          case 'medium':
            u += '; Priority=Medium';
            break;
          case 'high':
            u += '; Priority=High';
            break;
          default:
            throw new TypeError(`option priority is invalid: ${a.priority}`);
        }
      }
      if (a.sameSite) {
        switch ('string' == typeof a.sameSite ? a.sameSite.toLowerCase() : a.sameSite) {
          case !0:
          case 'strict':
            u += '; SameSite=Strict';
            break;
          case 'lax':
            u += '; SameSite=Lax';
            break;
          case 'none':
            u += '; SameSite=None';
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${a.sameSite}`);
        }
      }
      return u;
    }));
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    o = /^[\u0020-\u003A\u003D-\u007E]*$/,
    n = Object.prototype.toString,
    a = (() => {
      const e = function () {};
      return ((e.prototype = Object.create(null)), e);
    })();
  function c(e, t, i) {
    do {
      const i = e.charCodeAt(t);
      if (32 !== i && 9 !== i) return t;
    } while (++t < i);
    return i;
  }
  function h(e, t, i) {
    for (; t > i; ) {
      const i = e.charCodeAt(--t);
      if (32 !== i && 9 !== i) return t + 1;
    }
    return i;
  }
  function u(e) {
    if (-1 === e.indexOf('%')) return e;
    try {
      return decodeURIComponent(e);
    } catch (t) {
      return e;
    }
  }
  return r;
})();
function c(e, t = {}) {
  const i = (function (e) {
    if (e && 'j' === e[0] && ':' === e[1]) return e.substr(2);
    return e;
  })(e);
  if (!t.doNotParse)
    try {
      return JSON.parse(i);
    } catch (o) {}
  return e;
}
class h {
  constructor(e, t = {}) {
    ((this.changeListeners = []),
      (this.HAS_DOCUMENT_COOKIE = !1),
      (this.update = () => {
        if (!this.HAS_DOCUMENT_COOKIE) return;
        const e = this.cookies;
        ((this.cookies = a.parse(document.cookie)), this._checkChanges(e));
      }));
    const i = 'undefined' == typeof document ? '' : document.cookie;
    ((this.cookies = (function (e) {
      return 'string' == typeof e ? a.parse(e) : 'object' == typeof e && null !== e ? e : {};
    })(e || i)),
      (this.defaultSetOptions = t),
      (this.HAS_DOCUMENT_COOKIE = (function () {
        const e = 'undefined' == typeof global ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
        return 'boolean' == typeof e ? e : 'object' == typeof document && 'string' == typeof document.cookie;
      })()));
  }
  _emitChange(e) {
    for (let t = 0; t < this.changeListeners.length; ++t) this.changeListeners[t](e);
  }
  _checkChanges(e) {
    new Set(Object.keys(e).concat(Object.keys(this.cookies))).forEach((t) => {
      e[t] !== this.cookies[t] && this._emitChange({ name: t, value: c(this.cookies[t]) });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(e, t = {}) {
    return (t.doNotUpdate || this.update(), c(this.cookies[e], t));
  }
  getAll(e = {}) {
    e.doNotUpdate || this.update();
    const t = {};
    for (let i in this.cookies) t[i] = c(this.cookies[i], e);
    return t;
  }
  set(e, t, i) {
    i = i ? Object.assign(Object.assign({}, this.defaultSetOptions), i) : this.defaultSetOptions;
    const o = 'string' == typeof t ? t : JSON.stringify(t);
    ((this.cookies = Object.assign(Object.assign({}, this.cookies), { [e]: o })),
      this.HAS_DOCUMENT_COOKIE && (document.cookie = a.serialize(e, o, i)),
      this._emitChange({ name: e, value: t, options: i }));
  }
  remove(e, t) {
    const i = (t = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), t), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    }));
    ((this.cookies = Object.assign({}, this.cookies)),
      delete this.cookies[e],
      this.HAS_DOCUMENT_COOKIE && (document.cookie = a.serialize(e, '', i)),
      this._emitChange({ name: e, value: void 0, options: t }));
  }
  addChangeListener(e) {
    (this.changeListeners.push(e),
      this.HAS_DOCUMENT_COOKIE &&
        1 === this.changeListeners.length &&
        ('object' == typeof window && 'cookieStore' in window
          ? window.cookieStore.addEventListener('change', this.update)
          : this._startPolling()));
  }
  removeChangeListener(e) {
    const t = this.changeListeners.indexOf(e);
    (t >= 0 && this.changeListeners.splice(t, 1),
      this.HAS_DOCUMENT_COOKIE &&
        0 === this.changeListeners.length &&
        ('object' == typeof window && 'cookieStore' in window
          ? window.cookieStore.removeEventListener('change', this.update)
          : this._stopPolling()));
  }
  removeAllChangeListeners() {
    for (; this.changeListeners.length > 0; ) this.removeChangeListener(this.changeListeners[0]);
  }
}
function u(e, { doNotParse: n = !1, autoUpdateDependencies: s = !1 } = {}, r = new h()) {
  const a = s ? [] : e;
  let c = r.getAll({ doNotParse: !0 });
  const u = o(0),
    l = () => {
      const e = r.getAll({ doNotParse: !0 });
      ((function (e, t, i) {
        if (!e) return !0;
        for (const o of e) if (t[o] !== i[o]) return !0;
        return !1;
      })(a || null, e, c) && u.value++,
        (c = e));
    };
  var d;
  return (
    r.addChangeListener(l),
    (d = () => {
      r.removeChangeListener(l);
    }),
    t() && i(d),
    {
      get: (...e) => (s && a && !a.includes(e[0]) && a.push(e[0]), u.value, r.get(e[0], { doNotParse: n, ...e[1] })),
      getAll: (...e) => (u.value, r.getAll({ doNotParse: n, ...e[0] })),
      set: (...e) => r.set(...e),
      remove: (...e) => r.remove(...e),
      addChangeListener: (...e) => r.addChangeListener(...e),
      removeChangeListener: (...e) => r.removeChangeListener(...e),
    }
  );
}
const { VITE_TOKEN_KEY: l } = { VITE_TOKEN_KEY: 'tokenKey' },
  d =
    (u().get(l),
    n('user', {
      state: () => ({ token: 'token', info: {} }),
      getters: {
        getUserInfo() {
          return this.info || {};
        },
      },
      actions: {
        setInfo(e) {
          this.info = e ?? '';
        },
        async login() {
          try {
            const t = await e.post('/mock-api/login', { data: { name: '123' } });
            return (this.setInfo(t), (this.token = t.token), t);
          } catch (t) {
            throw t;
          }
        },
      },
      persist: { pick: ['token'], storage: localStorage },
    }));
export { d as u };
