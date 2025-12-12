import {
  c as t,
  o as s,
  a as e,
  n as l,
  b as a,
  d as n,
  B as i,
  j as r,
  t as o,
  u,
  k as c,
  F as p,
  C as d,
  z as h,
  D as f,
} from './index-CPxQer7B.js';
import { _ as m } from './index-En75s1eM.js';
import { l as g, a as v } from './with-install-Ch3FF0uS-Dfv6CYse.js';
import { _ as w, a as x } from './CellGroup-CLm3VvFN.js';
import './index-aiGQ-EiA-BzNSSj7d.js';
import './pxCheck-DN6FYV6q-8OyS8IyB.js';
const C = v('Check'),
  _ = [
    e(
      'path',
      {
        d: 'M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086',
        fill: 'currentColor',
        'fill-opacity': '0.9',
      },
      null,
      -1,
    ),
  ];
const j = g(C, [
    [
      'render',
      function (e, n, i, r, o, u) {
        return (
          s(),
          t(
            'svg',
            { class: a(e.classes), style: l(e.style), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024', role: 'presentation' },
            _,
            6,
          )
        );
      },
    ],
  ]),
  y = v('github'),
  k = [
    e(
      'path',
      {
        d: 'M512 12.672c-282.88 0-512 229.248-512 512 0 226.261 146.688 418.133 350.08 485.76 25.6 4.821 34.987-11.008 34.987-24.619 0-12.16-.427-44.373-.64-87.04-142.422 30.891-172.459-68.693-172.459-68.693-23.296-59.093-56.96-74.88-56.96-74.88-46.379-31.744 3.584-31.104 3.584-31.104 51.413 3.584 78.421 52.736 78.421 52.736 45.654 78.293 119.851 55.68 149.12 42.581 4.608-33.109 17.792-55.68 32.427-68.48-113.707-12.8-233.216-56.832-233.216-253.013 0-55.893 19.84-101.547 52.693-137.387-5.76-12.928-23.04-64.981 4.48-135.509 0 0 42.88-13.739 140.8 52.48 40.96-11.392 84.48-17.024 128-17.28 43.52.256 87.04 5.888 128 17.28 97.28-66.219 140.16-52.48 140.16-52.48 27.52 70.528 10.24 122.581 5.12 135.51 32.64 35.84 52.48 81.493 52.48 137.386 0 196.693-119.68 240-233.6 252.587 17.92 15.36 34.56 46.762 34.56 94.72 0 68.522-.64 123.562-.64 140.202 0 13.44 8.96 29.44 35.2 24.32C877.44 942.592 1024 750.592 1024 524.672c0-282.752-229.248-512-512-512',
        fill: 'currentColor',
        'fill-opacity': '0.9',
      },
      null,
      -1,
    ),
  ];
const $ = g(y, [
    [
      'render',
      function (e, n, i, r, o, u) {
        return (
          s(),
          t(
            'svg',
            { class: a(e.classes), style: l(e.style), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024', role: 'presentation' },
            k,
            6,
          )
        );
      },
    ],
  ]),
  b = { class: 'header' },
  z = { class: 'intro-header' },
  F = { href: 'https://github.com/sunniejs/vue-h5-template.git' },
  q = { class: 'btn-wrap' },
  B = n({
    __name: 'index',
    setup(l) {
      const { locale: n } = i(),
        g = ['vue3', 'vite', 'vue-router', 'axios', 'Pinia', 'vue-i18n', 'postcss-px-to-viewport', 'varlet / vant / nutUI', 'eruda'],
        v = (t) => {
          d(t);
        };
      return (l, i) => {
        const d = x,
          C = w,
          _ = m;
        return (
          s(),
          t(
            p,
            null,
            [
              e('header', b, [
                i[2] ||
                  (i[2] = e('img', { src: 'https://cdn.jsdelivr.net/gh/fonghehe/picture/vue-h5-template/logo.png', alt: '' }, null, -1)),
                e('span', null, o(l.$t('title')), 1),
              ]),
              e('div', z, [e('div', null, o(l.$t('introduction')), 1), e('a', F, [r(u($))])]),
              r(
                C,
                { title: l.$t('home.support'), class: 'supportList' },
                {
                  default: c(() => [
                    (s(),
                    t(
                      p,
                      null,
                      h(g, (t, s) => r(d, { key: s, title: t }, { icon: c(() => [r(u(j))]), _: 1 }, 8, ['title'])),
                      64,
                    )),
                  ]),
                  _: 1,
                },
                8,
                ['title'],
              ),
              r(
                C,
                { title: l.$t('home.cssMultiLanguage'), class: 'supportList' },
                {
                  default: c(() => [r(d, null, { default: c(() => [e('div', { class: a(['btn-confirm', u(n)]) }, null, 2)]), _: 1 })]),
                  _: 1,
                },
                8,
                ['title'],
              ),
              e('div', q, [
                r(
                  _,
                  { shape: 'square', size: 'small', type: 'default', onClick: i[0] || (i[0] = (t) => v('zh-cn')) },
                  { default: c(() => [f(o(l.$t('language.zh')), 1)]), _: 1 },
                ),
                r(
                  _,
                  { shape: 'square', size: 'small', type: 'default', onClick: i[1] || (i[1] = (t) => v('en-us')) },
                  { default: c(() => [f(o(l.$t('language.en')), 1)]), _: 1 },
                ),
              ]),
            ],
            64,
          )
        );
      };
    },
  });
export { B as default };
