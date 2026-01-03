import { d as t, aa as e, Y as n, m as a, o as r, e as s } from './index-DiDUIIfN.js';
const i = t({
  __name: 'IconFont',
  props: {
    name: { type: String, default: '' },
    size: { type: [String, Number], default: '' },
    width: { type: [String, Number], default: '' },
    height: { type: [String, Number], default: '' },
    classPrefix: { type: String, default: 'nut-icon' },
    fontClassName: { type: String, default: 'nutui-iconfont' },
    color: { type: String, default: '' },
    tag: { type: String, default: 'i' },
  },
  setup(t) {
    var s;
    const i = t,
      o = 'nut-icon',
      l = e(),
      u = (t) => {
        if (t) return isNaN(Number(t)) ? String(t) : t + 'px';
      },
      c = !!i.name && -1 !== i.name.indexOf('/');
    let m = n(
      c ? 'img' : i.tag,
      {
        class: c ? `${o}__img` : `${i.fontClassName} ${o} ${i.classPrefix}-${i.name}`,
        style: { color: i.color, fontSize: u(i.size), width: u(i.width || i.size), height: u(i.height || i.size) },
        src: c ? i.name : '',
      },
      null == (s = l.default) ? void 0 : s.call(l),
    );
    const f = () => m;
    return (t, e) => (r(), a(f));
  },
});
var o;
(((o = i).name = 'IconFont'),
  (o.install = (t) => {
    t.component('IconFont', o);
  }));
const l = (e) =>
    t({
      props: {
        class: { type: String, default: '' },
        name: { type: String, default: e },
        color: { type: String, default: '' },
        width: { type: [String, Number], default: '' },
        height: { type: [String, Number], default: '' },
      },
      setup(t) {
        const e = (t) => {
          if (t) return isNaN(Number(t)) ? String(t) : t + 'px';
        };
        return {
          classes: s(() => {
            const e = 'nut-icon';
            return { [t.class]: t.class, [e]: !0, [e + '-' + t.name]: t.name };
          }),
          style: s(() => {
            const n = {};
            return ((n.height = e(t.height)), (n.width = e(t.width)), (n.color = t.color), n);
          }),
        };
      },
    }),
  u = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [a, r] of e) n[a] = r;
    return n;
  },
  c = (t) => {
    const e = t;
    return (
      (e.install = (t) => {
        e.name && t.component(e.name, e);
      }),
      e
    );
  };
export { l as a, u as l, c as w };
