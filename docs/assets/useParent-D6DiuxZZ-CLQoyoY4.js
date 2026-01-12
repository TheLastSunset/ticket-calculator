import { L as e, O as n, N as r, G as t, V as i, e as l } from './index-Bd1BzjNe.js';
var o = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  c = (e, n, r) => (n in e ? o(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[n] = r));
const u = (r) => {
    const t = e([]),
      i = e([]);
    return {
      children: t,
      linkChildren: (e) => {
        n(
          r,
          ((e, n) => {
            for (var r in n || (n = {})) s.call(n, r) && c(e, r, n[r]);
            if (a) for (var r of a(n)) p.call(n, r) && c(e, r, n[r]);
            return e;
          })(
            {
              unlink: (e) => {
                if (e.proxy) {
                  const n = i.indexOf(e);
                  n > -1 && i.splice(n, 1);
                  const r = t.indexOf(e.proxy);
                  n > -1 && t.splice(r, 1);
                }
              },
              link: (e) => {
                e.proxy && (i.push(e), t.push(e.proxy));
              },
              children: t,
              internalChildren: i,
            },
            e,
          ),
        );
      },
    };
  },
  d = (e) => {
    const n = r(e, null);
    if (n) {
      const e = t(),
        { link: r, unlink: o, internalChildren: a } = n;
      (r(e),
        i(() => {
          o(e);
        }));
      return { parent: n, index: l(() => a.indexOf(e)) };
    }
    return { parent: n, index: l(() => -1) };
  };
export { d as a, u };
