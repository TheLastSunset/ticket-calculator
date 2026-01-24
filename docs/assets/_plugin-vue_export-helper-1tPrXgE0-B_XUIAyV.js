import { d as n } from './index-B8o9oFSa.js';
function t(t) {
  return {
    componentName: 'nut-' + t,
    create: function (e) {
      return (
        (e.name = 'Nut' + ('-' + t).replace(/-./g, (n) => n[1].toUpperCase())),
        (e.install = (n) => {
          n.component(e.name, e);
        }),
        n(e)
      );
    },
  };
}
const e = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, r] of t) e[o] = r;
  return e;
};
export { e as _, t as c };
