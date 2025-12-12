const t = (t) => 'function' == typeof t,
  a = (t) => 'string' == typeof t,
  e = (a) => ((t) => null !== t && 'object' == typeof t)(a) && t(a.then) && t(a.catch),
  c = (t, a) => {
    try {
      return a.split('.').reduce((t, a) => t[a], t);
    } catch (e) {
      return '';
    }
  },
  n = (t, a, e) => Math.min(Math.max(t, a), e);
export { t as a, e as b, n as c, c as g, a as i };
