import {
  c as e,
  o as t,
  a as l,
  n as r,
  b as a,
  e as o,
  d as s,
  a3 as n,
  r as i,
  L as u,
  w as p,
  f as c,
  l as d,
  i as m,
  g as f,
  m as v,
  u as y,
  p as g,
  Y as b,
  D as h,
  t as w,
  v as x,
  j as _,
  P,
  k as O,
  a4 as j,
  O as k,
  N as L,
  a5 as C,
  _ as V,
} from './index-BonFox_P.js';
import { _ as $ } from './index-Ch_HBDKV.js';
import { u as A } from './user-QTK26lVF.js';
import { a as B, u as S } from './useParent-D6DiuxZZ-xCNDmbso.js';
import { g as q, b as E } from './util-D1pvnUYu-DEz0HYko.js';
import { _ as I, a as F } from './CellGroup-BkhyVN5J.js';
import { l as N, a as z, w as D } from './with-install-Ch3FF0uS-Bp7hPFOw.js';
import { p as M } from './pxCheck-DN6FYV6q-8OyS8IyB.js';
import './function-call-C7UndjZ7.js';
import './index-DUkjMFJa.js';
import './index-aiGQ-EiA-Ca09DraK.js';
const T = z('mask-close'),
  W = [
    l(
      'path',
      {
        d: 'M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z',
        fill: 'currentColor',
        'fill-opacity': '0.9',
      },
      null,
      -1,
    ),
  ];
const U = N(T, [
    [
      'render',
      function (l, o, s, n, i, u) {
        return (
          t(),
          e(
            'svg',
            { class: a(l.classes), style: r(l.style), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024', role: 'presentation' },
            W,
            6,
          )
        );
      },
    ],
  ]),
  Y = Symbol('nut-form'),
  G = Symbol('nut-form-disabled'),
  Z = Symbol('nut-form-tip');
var K = Object.defineProperty,
  Q = Object.defineProperties,
  R = Object.getOwnPropertyDescriptors,
  H = Object.getOwnPropertySymbols,
  J = Object.prototype.hasOwnProperty,
  X = Object.prototype.propertyIsEnumerable,
  ee = (e, t, l) => (t in e ? K(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (e[t] = l)),
  te = (e, t) => {
    for (var l in t || (t = {})) J.call(t, l) && ee(e, l, t[l]);
    if (H) for (var l of H(t)) X.call(t, l) && ee(e, l, t[l]);
    return e;
  };
function le(e, t, l) {
  const r = e.indexOf(t);
  return -1 === r ? e : '-' === t && 0 !== r ? e.slice(0, r) : e.slice(0, r + 1) + e.slice(r).replace(l, '');
}
const re = { class: 'nut-input-value' },
  ae = { class: 'nut-input-inner' },
  oe = { key: 0, class: 'nut-input-left-box' },
  se = { class: 'nut-input-box' },
  ne = { key: 0, class: 'nut-input-word-limit' },
  ie = { class: 'nut-input-word-num' },
  ue = { class: 'nut-input-right-box' },
  pe = s(
    ((ce = te({}, { name: 'NutInput' })),
    (de = {
      __name: 'input',
      props: {
        type: { default: 'text' },
        modelValue: { default: '' },
        placeholder: { default: '' },
        inputAlign: { default: 'left' },
        required: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        readonly: { type: Boolean, default: !1 },
        maxLength: { default: '' },
        clearable: { type: Boolean, default: !1 },
        clearSize: { default: '14' },
        border: { type: Boolean, default: !0 },
        formatTrigger: { default: 'onChange' },
        formatter: {},
        showWordLimit: { type: Boolean, default: !1 },
        autofocus: { type: Boolean, default: !1 },
        confirmType: { default: 'done' },
        error: { type: Boolean, default: !1 },
        showClearIcon: { type: Boolean, default: !1 },
      },
      emits: ['update:modelValue', 'blur', 'focus', 'clear', 'keypress', 'click', 'clickInput', 'confirm'],
      setup(s, { expose: O, emit: j }) {
        const k = s,
          L = j,
          C = ((e) => {
            const { parent: t } = B(G);
            return o(() => {
              var l;
              return e.value || (null == (l = null == t ? void 0 : t.props) ? void 0 : l.disabled) || !1;
            });
          })(n(k, 'disabled')),
          V = i(!1),
          $ = i(),
          A = () => {
            var e;
            return String(null != (e = k.modelValue) ? e : '');
          },
          S = u({ focused: !1, validateFailed: !1, validateMessage: '' }),
          q = o(() => {
            const e = 'nut-input';
            return {
              [e]: !0,
              [`${e}--disabled`]: C.value,
              [`${e}--required`]: k.required,
              [`${e}--error`]: k.error,
              [`${e}--border`]: k.border,
            };
          }),
          E = o(() => ({ textAlign: k.inputAlign })),
          I = (e) => {
            if (!e.target.composing) {
              let t = e.target.value;
              (k.maxLength && t.length > Number(k.maxLength) && (t = t.slice(0, Number(k.maxLength))), F(t));
            }
          },
          F = (e, t = 'onChange') => {
            var l;
            if (['number', 'digit'].includes(k.type)) {
              const t = 'number' === k.type;
              e = (function (e, t = !0, l = !0) {
                e = t ? le(e, '.', /\./g) : e.split('.')[0];
                const r = t ? /[^-0-9.]/g : /[^-0-9]/g;
                return (e = l ? le(e, '-', /-/g) : e.replace(/-/, '')).replace(r, '');
              })(e, t, t);
            }
            (k.formatter && t === k.formatTrigger && (e = k.formatter(e)),
              (null == (l = null == $ ? void 0 : $.value) ? void 0 : l.value) !== e && ($.value.value = e),
              e !== k.modelValue && L('update:modelValue', e));
          },
          N = (e) => {
            C.value || k.readonly || ((V.value = !0), L('focus', e));
          },
          z = (e) => {
            if (C.value || k.readonly) return;
            setTimeout(() => {
              V.value = !1;
            }, 200);
            let t = e.target.value;
            (k.maxLength && t.length > Number(k.maxLength) && (t = t.slice(0, Number(k.maxLength))), F(A(), 'onBlur'), L('blur', e));
          },
          D = (e) => {
            (e.stopPropagation(), C.value || (L('update:modelValue', '', e), L('clear', '', e)));
          },
          M = (e) => {
            C.value || L('clickInput', e);
          },
          T = (e) => {
            L('click', e);
          },
          W = ({ target: e }) => {
            e.composing = !0;
          },
          Y = ({ target: e }) => {
            e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
          };
        (p(
          () => k.modelValue,
          () => {
            (F(A()), S.validateFailed && ((S.validateFailed = !1), (S.validateMessage = '')));
          },
        ),
          c(() => {
            F(A(), k.formatTrigger);
          }));
        const Z = (e) => {
          'Enter' === e.key && L('confirm', e);
        };
        return (
          O({
            focus: () => {
              var e;
              null == (e = $.value) || e.focus();
            },
            blur: () => {
              var e;
              null == (e = $.value) || e.blur();
            },
            select: () => {
              var e;
              null == (e = $.value) || e.select();
            },
          }),
          (o, s) => {
            return (
              t(),
              e(
                'view',
                { class: a(q.value), onClick: T },
                [
                  l('view', re, [
                    l('view', ae, [
                      o.$slots.left ? (t(), e('view', oe, [f(o.$slots, 'left')])) : d('', !0),
                      l('view', se, [
                        (t(),
                        v(
                          g(
                            ((n = o.type),
                            b(
                              'input',
                              te(
                                {},
                                (function (e) {
                                  return 'number' === e
                                    ? { type: 'text', inputmode: 'decimal' }
                                    : 'digit' === e
                                      ? { type: 'tel', inputmode: 'numeric' }
                                      : { type: e };
                                })(n),
                              ),
                            )),
                          ),
                          {
                            ref_key: 'inputRef',
                            ref: $,
                            class: 'input-text',
                            style: r(E.value),
                            maxlength: o.maxLength,
                            placeholder: o.placeholder,
                            disabled: y(C),
                            readonly: o.readonly,
                            value: o.modelValue,
                            'format-trigger': o.formatTrigger,
                            autofocus: o.autofocus,
                            enterkeyhint: o.confirmType,
                            onInput: I,
                            onFocus: N,
                            onBlur: z,
                            onClick: M,
                            onChange: Y,
                            onCompositionend: Y,
                            onCompositionstart: W,
                            onKeyup: Z,
                          },
                          null,
                          40,
                          [
                            'style',
                            'maxlength',
                            'placeholder',
                            'disabled',
                            'readonly',
                            'value',
                            'format-trigger',
                            'autofocus',
                            'enterkeyhint',
                          ],
                        )),
                        o.showWordLimit && o.maxLength
                          ? (t(), e('view', ne, [l('span', ie, w(A() ? A().length : 0), 1), h('/' + w(o.maxLength), 1)]))
                          : d('', !0),
                      ]),
                      o.clearable && !o.readonly
                        ? m(
                            (t(),
                            e(
                              'view',
                              { key: 1, class: 'nut-input-clear-box', onClick: D },
                              [
                                f(o.$slots, 'clear', {}, () => [
                                  _(
                                    y(U),
                                    P({ class: 'nut-input-clear' }, o.$attrs, {
                                      size: o.clearSize,
                                      width: o.clearSize,
                                      height: o.clearSize,
                                    }),
                                    null,
                                    16,
                                    ['size', 'width', 'height'],
                                  ),
                                ]),
                              ],
                              512,
                            )),
                            [[x, (V.value || o.showClearIcon) && A().length > 0]],
                          )
                        : d('', !0),
                      l('view', ue, [f(o.$slots, 'right')]),
                    ]),
                  ]),
                ],
                2,
              )
            );
            var n;
          }
        );
      },
    }),
    Q(ce, R(de))),
  );
var ce, de;
D(pe);
var me = Object.defineProperty,
  fe = Object.defineProperties,
  ve = Object.getOwnPropertyDescriptors,
  ye = Object.getOwnPropertySymbols,
  ge = Object.prototype.hasOwnProperty,
  be = Object.prototype.propertyIsEnumerable,
  he = (e, t, l) => (t in e ? me(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (e[t] = l)),
  we = (e, t) => {
    var l = {};
    for (var r in e) ge.call(e, r) && t.indexOf(r) < 0 && (l[r] = e[r]);
    if (null != e && ye) for (var r of ye(e)) t.indexOf(r) < 0 && be.call(e, r) && (l[r] = e[r]);
    return l;
  };
const xe = s(
  ((e, t) => fe(e, ve(t)))(
    ((e, t) => {
      for (var l in t || (t = {})) ge.call(t, l) && he(e, l, t[l]);
      if (ye) for (var l of ye(t)) be.call(t, l) && he(e, l, t[l]);
      return e;
    })({}, { name: 'NutForm' }),
    {
      __name: 'form',
      props: {
        modelValue: { default: () => ({}) },
        rules: { default: () => ({}) },
        disabled: { type: Boolean, default: !1 },
        labelPosition: { default: 'left' },
        starPosition: { default: 'left' },
      },
      emits: ['validate'],
      setup(l, { expose: r, emit: a }) {
        const s = l,
          n = a,
          { children: i, linkChildren: c } = S(Y);
        c({ props: s });
        const { linkChildren: d } = S(G);
        d({ props: s });
        const m = o(() => u({}));
        k(Z, m);
        const v = () => {
          Object.keys(m.value).forEach((e) => {
            m.value[e] = '';
          });
        };
        p(
          () => s.modelValue,
          () => {
            v();
          },
          { immediate: !0 },
        );
        const g = (e) => {
            (e.message && n('validate', e), (m.value[e.prop] = e.message));
          },
          b = (e) => {
            return (
              (t = this),
              (l = null),
              (r = function* () {
                const { rules: t = [], prop: l } = e,
                  r = (e) =>
                    new Promise((t, l) => {
                      try {
                        (g(e), t(e));
                      } catch (r) {
                        l(r);
                      }
                    }),
                  a = q(s.modelValue, l || '');
                g({ prop: l, message: '' });
                const o = s.rules || {},
                  n = [...((null == o ? void 0 : o[l]) || []), ...t];
                for (; n.length; ) {
                  const e = n.shift(),
                    { validator: t } = e,
                    o = we(e, ['validator']),
                    { required: s, regex: u, message: p } = o,
                    c = { prop: l, message: p || '' };
                  if (s && !a && 0 !== a) return r(c);
                  if (u && !u.test(String(a))) return r(c);
                  if (t) {
                    const e = t(a, o);
                    if (E(e))
                      try {
                        if (!1 === (yield e)) return r(c);
                      } catch (i) {
                        return r({ prop: l, message: i });
                      }
                    else if (!e) return r(c);
                  }
                }
                return Promise.resolve(!0);
              }),
              new Promise((e, a) => {
                var o = (e) => {
                    try {
                      n(r.next(e));
                    } catch (t) {
                      a(t);
                    }
                  },
                  s = (e) => {
                    try {
                      n(r.throw(e));
                    } catch (t) {
                      a(t);
                    }
                  },
                  n = (t) => (t.done ? e(t.value) : Promise.resolve(t.value).then(o, s));
                n((r = r.apply(t, l)).next());
              })
            );
            var t, l, r;
          },
          h = (e = '') =>
            new Promise((t, l) => {
              try {
                const l = (() => {
                  const e = [];
                  return (
                    i.forEach((t) => {
                      e.push({ prop: null == t ? void 0 : t.prop, rules: (null == t ? void 0 : t.rules) || [] });
                    }),
                    e
                  );
                })().map((t) => (e && e !== t.prop ? Promise.resolve(!0) : b(t)));
                Promise.all(l).then((e) => {
                  const l = { valid: !0, errors: [] };
                  ((e = e.filter((e) => !0 !== e)).length && ((l.valid = !1), (l.errors = e)), t(l));
                });
              } catch (r) {
                l(r);
              }
            });
        return (
          r({
            submit: () => (h(), !1),
            reset: () => {
              v();
            },
            validate: h,
          }),
          (l, r) => (
            t(),
            e(
              'form',
              { class: 'nut-form', action: '#', onSubmit: j(() => !1, ['prevent']) },
              [_(y(I), null, { default: O(() => [f(l.$slots, 'default')]), _: 3 })],
              32,
            )
          )
        );
      },
    },
  ),
);
D(xe);
var _e = Object.defineProperty,
  Pe = Object.defineProperties,
  Oe = Object.getOwnPropertyDescriptors,
  je = Object.getOwnPropertySymbols,
  ke = Object.prototype.hasOwnProperty,
  Le = Object.prototype.propertyIsEnumerable,
  Ce = (e, t, l) => (t in e ? _e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (e[t] = l));
const Ve = { class: 'nut-cell__value nut-form-item__body' },
  $e = s(
    ((e, t) => Pe(e, Oe(t)))(
      ((e, t) => {
        for (var l in t || (t = {})) ke.call(t, l) && Ce(e, l, t[l]);
        if (je) for (var l of je(t)) Le.call(t, l) && Ce(e, l, t[l]);
        return e;
      })({}, { name: 'NutFormItem', inheritAttrs: !1 }),
      {
        __name: 'form-item',
        props: {
          prop: { default: '' },
          label: { default: '' },
          rules: { default: () => [] },
          required: { type: Boolean, default: !1 },
          showErrorMessage: { type: Boolean, default: !0 },
          showErrorLine: { type: Boolean, default: !0 },
          labelWidth: {},
          labelAlign: {},
          errorMessageAlign: {},
          bodyAlign: {},
          labelPosition: {},
          starPosition: {},
        },
        setup(s) {
          const n = s,
            { parent: i } = B(Y),
            u = o(() => {
              var e;
              const t = null == (e = i.props) ? void 0 : e.rules;
              let l = !1;
              for (const r in t)
                Object.prototype.hasOwnProperty.call(t, r) && r === n.prop && Array.isArray(t[r]) && (l = t[r].some((e) => e.required));
              return n.required || n.rules.some((e) => e.required) || l;
            }),
            p = o(() => {
              const e = i.props.labelPosition,
                t = n.labelPosition ? n.labelPosition : e;
              return 'left' !== t ? `nut-form-item__${t}` : '';
            }),
            c = o(() => {
              const e = i.props.starPosition,
                t = n.starPosition ? n.starPosition : e;
              return 'left' !== t ? `nut-form-item__star-${t}` : '';
            }),
            m = L(Z),
            g = o(() => ({ width: M(n.labelWidth), textAlign: n.labelAlign })),
            b = o(() => ({ textAlign: n.bodyAlign })),
            x = o(() => ({ textAlign: n.errorMessageAlign }));
          return (o, s) => (
            t(),
            v(
              y(F),
              {
                class: a(['nut-form-item', [{ error: y(m)[o.prop], line: o.showErrorLine }, o.$attrs.class, p.value]]),
                style: r(o.$attrs.style),
              },
              {
                default: O(() => [
                  o.label || o.$slots.label
                    ? (t(),
                      e(
                        'view',
                        {
                          key: 0,
                          class: a(['nut-cell__title nut-form-item__label', { required: u.value, [c.value]: c.value }]),
                          style: r(g.value),
                        },
                        [f(o.$slots, 'label', {}, () => [h(w(o.label), 1)])],
                        6,
                      ))
                    : d('', !0),
                  l('view', Ve, [
                    l('view', { class: 'nut-form-item__body__slots', style: r(b.value) }, [f(o.$slots, 'default')], 4),
                    y(m)[o.prop] && o.showErrorMessage
                      ? (t(), e('view', { key: 0, class: 'nut-form-item__body__tips', style: r(x.value) }, w(y(m)[o.prop]), 5))
                      : d('', !0),
                  ]),
                ]),
                _: 3,
              },
              8,
              ['class', 'style'],
            )
          );
        },
      },
    ),
  );
D($e);
const Ae = { class: 'login' },
  Be = V(
    s({
      __name: 'index',
      setup(r) {
        const a = A(),
          o = u({ name: '', pwd: '' }),
          s = i(null),
          n = () => {
            s.value.validate().then(async ({ valid: e, errors: t }) => {
              if (e) {
                (await a.login()) && C.push({ path: '/member' });
              }
            });
          };
        return (r, a) => {
          const i = pe,
            u = $e,
            p = $,
            c = xe;
          return (
            t(),
            e('div', Ae, [
              a[3] || (a[3] = l('h2', null, '登录', -1)),
              _(
                c,
                { ref_key: 'ruleForm', ref: s, 'model-value': o },
                {
                  default: O(() => [
                    _(
                      u,
                      { label: '用户名', required: '', prop: 'name', rules: [{ required: !0, message: '请输入用户名' }] },
                      {
                        default: O(() => [
                          _(
                            i,
                            {
                              modelValue: o.name,
                              'onUpdate:modelValue': a[0] || (a[0] = (e) => (o.name = e)),
                              placeholder: '请输入用户名',
                              type: 'text',
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    _(
                      u,
                      { label: '密码', required: '', prop: 'pwd', rules: [{ required: !0, message: '请输入密码' }] },
                      {
                        default: O(() => [
                          _(
                            i,
                            {
                              modelValue: o.pwd,
                              'onUpdate:modelValue': a[1] || (a[1] = (e) => (o.pwd = e)),
                              placeholder: '请输入密码',
                              type: 'password',
                            },
                            null,
                            8,
                            ['modelValue'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    _(p, { block: '', type: 'info', onClick: n }, { default: O(() => [...(a[2] || (a[2] = [h(' 登录 ', -1)]))]), _: 1 }),
                  ]),
                  _: 1,
                },
                8,
                ['model-value'],
              ),
            ])
          );
        };
      },
    }),
    [['__scopeId', 'data-v-7af2b8de']],
  );
export { Be as default };
