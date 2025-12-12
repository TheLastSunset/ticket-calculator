import { E as o, d as n, j as i } from './index-CPxQer7B.js';
import { e as a, c as e, Q as l, a as t, n as r, I as s, r as c, w as d } from './index-Bs0ypY5m.js';
import { L as u } from './function-call-Clw5XcF1.js';
const g = { to: [String, Object], url: String, replace: Boolean };
function p() {
  const n = o().proxy;
  return () =>
    (function ({ to: o, url: n, replace: i, $router: a }) {
      o && a ? a[i ? 'replace' : 'push'](o) : n && (i ? location.replace(n) : (location.href = n));
    })(n);
}
const [f, b] = e('button');
const x = d(
  n({
    name: f,
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
      loadingSize: r,
      loadingText: String,
      loadingType: String,
      iconPosition: t('left'),
    }),
    emits: ['click'],
    setup(o, { emit: n, slots: a }) {
      const e = p(),
        t = () =>
          o.loading
            ? a.loading
              ? a.loading()
              : i(u, { size: o.loadingSize, type: o.loadingType, class: b('loading') }, null)
            : a.icon
              ? i('div', { class: b('icon') }, [a.icon()])
              : o.icon
                ? i(s, { name: o.icon, class: b('icon'), classPrefix: o.iconPrefix }, null)
                : void 0,
        r = () => {
          let n;
          if (((n = o.loading ? o.loadingText : a.default ? a.default() : o.text), n)) return i('span', { class: b('text') }, [n]);
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
            block: s,
            round: c,
            plain: u,
            square: p,
            loading: f,
            disabled: x,
            hairline: m,
            nativeType: y,
            iconPosition: S,
          } = o,
          B = [b([a, e, { plain: u, block: s, round: c, square: p, loading: f, disabled: x, hairline: m }]), { [l]: m }];
        return i(
          n,
          { type: y, class: B, style: d(), disabled: x, onClick: g },
          { default: () => [i('div', { class: b('content') }, ['left' === S && t(), r(), 'right' === S && t()])] },
        );
      };
    },
  }),
);
export { x as B, g as r, p as u };
