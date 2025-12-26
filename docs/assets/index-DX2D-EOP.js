import { G as o, d as n, j as i } from './index-CScC_bmB.js';
import { e as a, c as e, a1 as l, l as t, n as s, I as r, p as c, w as d } from './index-ND7WKwje.js';
import { L as u } from './function-call-B-w-zG-E.js';
const g = { to: [String, Object], url: String, replace: Boolean };
function p({ to: o, url: n, replace: i, $router: a }) {
  o && a ? a[i ? 'replace' : 'push'](o) : n && (i ? location.replace(n) : (location.href = n));
}
function f() {
  const n = o().proxy;
  return () => p(n);
}
const [b, x] = e('button');
const m = d(
  n({
    name: b,
    props: a({}, g, {
      tag: t('button'),
      text: String,
      icon: String,
      type: t('default'),
      size: t('normal'),
      color: String,
      block: Boolean,
      plain: Boolean,
      round: Boolean,
      square: Boolean,
      loading: Boolean,
      hairline: Boolean,
      disabled: Boolean,
      iconPrefix: String,
      nativeType: t('button'),
      loadingSize: s,
      loadingText: String,
      loadingType: String,
      iconPosition: t('left'),
    }),
    emits: ['click'],
    setup(o, { emit: n, slots: a }) {
      const e = f(),
        t = () =>
          o.loading
            ? a.loading
              ? a.loading()
              : i(u, { size: o.loadingSize, type: o.loadingType, class: x('loading') }, null)
            : a.icon
              ? i('div', { class: x('icon') }, [a.icon()])
              : o.icon
                ? i(r, { name: o.icon, class: x('icon'), classPrefix: o.iconPrefix }, null)
                : void 0,
        s = () => {
          let n;
          if (((n = o.loading ? o.loadingText : a.default ? a.default() : o.text), n)) return i('span', { class: x('text') }, [n]);
        },
        d = () => {
          const { color: n, plain: i } = o;
          if (n) {
            const o = { color: i ? n : 'white' };
            return (i || (o.background = n), n.includes('gradient') ? (o.border = 0) : (o.borderColor = n), o);
          }
        },
        g = (i) => {
          o.loading ? c(i) : o.disabled || (n('click', i), e());
        };
      return () => {
        const {
            tag: n,
            type: a,
            size: e,
            block: r,
            round: c,
            plain: u,
            square: p,
            loading: f,
            disabled: b,
            hairline: m,
            nativeType: y,
            iconPosition: S,
          } = o,
          B = [x([a, e, { plain: u, block: r, round: c, square: p, loading: f, disabled: b, hairline: m }]), { [l]: m }];
        return i(
          n,
          { type: y, class: B, style: d(), disabled: b, onClick: g },
          { default: () => [i('div', { class: x('content') }, ['left' === S && t(), s(), 'right' === S && t()])] },
        );
      };
    },
  }),
);
export { m as B, g as a, p as r, f as u };
