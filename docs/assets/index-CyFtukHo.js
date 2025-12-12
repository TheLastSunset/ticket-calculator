/* empty css              */ import { r as e, u as t, B as a } from './index-BSC-nA-j.js';
import { t as n } from './data-CZ-fE9Kg.js';
import {
  c as r,
  e as l,
  m as s,
  t as o,
  a as i,
  b as u,
  u as c,
  n as d,
  i as m,
  I as f,
  w as v,
  d as p,
  f as h,
  s as g,
  h as y,
  j as b,
  k as D,
  l as w,
  o as k,
  p as S,
  q as x,
  r as A,
  F as $,
  v as M,
  x as O,
  C as _,
  y as C,
  z as N,
  A as T,
  D as E,
  E as H,
  G as L,
  H as I,
  J as B,
  K as Y,
  L as F,
  M as P,
} from './index-BM8Ya5-x.js';
import {
  E as V,
  r as R,
  G,
  d as W,
  j,
  H as z,
  e as U,
  w as q,
  f as J,
  h as Z,
  D as K,
  I as Q,
  J as X,
  c as ee,
  a as te,
  u as ae,
  x as ne,
  b as re,
  t as le,
  k as se,
  o as oe,
  _ as ie,
} from './index-BdRzGPWf.js';
import { u as ue, P as ce, s as de } from './function-call-BN7DaF7i.js';
import './index-gICkiANJ.js';
import { u as me } from './use-height-CahSZ63W.js';
r('picker-toolbar');
const fe = { title: String, cancelButtonText: String, confirmButtonText: String };
let ve = 0;
const pe = l(
  {
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: s(44),
    showToolbar: o,
    swipeDuration: s(1e3),
    visibleOptionNum: s(6),
  },
  fe,
);
l({}, pe, { columns: u(), modelValue: u(), toolbarPosition: i('top'), columnsFieldNames: Object });
const [he, ge] = r('cell'),
  ye = {
    tag: i('div'),
    icon: String,
    size: String,
    title: d,
    value: d,
    label: d,
    center: Boolean,
    isLink: Boolean,
    border: o,
    iconPrefix: String,
    valueClass: c,
    labelClass: c,
    titleClass: c,
    titleStyle: null,
    arrowDirection: String,
    required: { type: [Boolean, String], default: null },
    clickable: { type: Boolean, default: null },
  };
const be = v(
  W({
    name: he,
    props: l({}, ye, e),
    setup(e, { slots: a }) {
      const n = t(),
        r = () => {
          if (a.label || m(e.label)) return j('div', { class: [ge('label'), e.labelClass] }, [a.label ? a.label() : e.label]);
        },
        l = () => {
          var t;
          if (a.title || m(e.title)) {
            const n = null == (t = a.title) ? void 0 : t.call(a);
            if (Array.isArray(n) && 0 === n.length) return;
            return j('div', { class: [ge('title'), e.titleClass], style: e.titleStyle }, [n || j('span', null, [e.title]), r()]);
          }
        },
        s = () => {
          const t = a.value || a.default;
          if (t || m(e.value)) return j('div', { class: [ge('value'), e.valueClass] }, [t ? t() : j('span', null, [e.value])]);
        },
        o = () => {
          if (a['right-icon']) return a['right-icon']();
          if (e.isLink) {
            const t = e.arrowDirection && 'right' !== e.arrowDirection ? `arrow-${e.arrowDirection}` : 'arrow';
            return j(f, { name: t, class: ge('right-icon') }, null);
          }
        };
      return () => {
        var t;
        const { tag: r, size: i, center: u, border: c, isLink: d, required: m } = e,
          v = null != (t = e.clickable) ? t : d,
          p = { center: u, required: !!m, clickable: v, borderless: !c };
        return (
          i && (p[i] = !!i),
          j(
            r,
            { class: ge(p), role: v ? 'button' : void 0, tabindex: v ? 0 : void 0, onClick: n },
            {
              default: () => {
                var t;
                return [
                  a.icon ? a.icon() : e.icon ? j(f, { name: e.icon, class: ge('left-icon'), classPrefix: e.iconPrefix }, null) : void 0,
                  l(),
                  s(),
                  o(),
                  null == (t = a.extra) ? void 0 : t.call(a),
                ];
              },
            },
          )
        );
      };
    },
  }),
);
function De(e) {
  return Array.isArray(e) ? !e.length : 0 !== e && !e;
}
function we(e, t) {
  const { message: a } = t;
  return y(a) ? a(e, t) : a || '';
}
function ke({ target: e }) {
  e.composing = !0;
}
function Se({ target: e }) {
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function xe(e) {
  return [...e].length;
}
function Ae(e, t) {
  return [...e].slice(0, t).join('');
}
const [$e, Me] = r('field');
const Oe = v(
    W({
      name: $e,
      props: l(
        {},
        ye,
        {
          id: String,
          name: String,
          leftIcon: String,
          rightIcon: String,
          autofocus: Boolean,
          clearable: Boolean,
          maxlength: d,
          max: Number,
          min: Number,
          formatter: Function,
          clearIcon: i('clear'),
          modelValue: s(''),
          inputAlign: String,
          placeholder: String,
          autocomplete: String,
          autocapitalize: String,
          autocorrect: String,
          errorMessage: String,
          enterkeyhint: String,
          clearTrigger: i('focus'),
          formatTrigger: i('onChange'),
          spellcheck: { type: Boolean, default: null },
          error: { type: Boolean, default: null },
          disabled: { type: Boolean, default: null },
          readonly: { type: Boolean, default: null },
          inputmode: String,
        },
        {
          rows: d,
          type: i('text'),
          rules: Array,
          autosize: [Boolean, Object],
          labelWidth: d,
          labelClass: c,
          labelAlign: String,
          showWordLimit: Boolean,
          errorMessageAlign: String,
          colon: { type: Boolean, default: null },
        },
      ),
      emits: [
        'blur',
        'focus',
        'clear',
        'keypress',
        'clickInput',
        'endValidate',
        'startValidate',
        'clickLeftIcon',
        'clickRightIcon',
        'update:modelValue',
      ],
      setup(e, { emit: t, slots: a }) {
        const n = (function () {
            const e = V(),
              { name: t = 'unknown' } = (null == e ? void 0 : e.type) || {};
            return `${t}-${++ve}`;
          })(),
          r = z({ status: 'unvalidated', focused: !1, validateMessage: '' }),
          l = R(),
          s = R(),
          o = R(),
          { parent: i } = D($),
          u = () => {
            var t;
            return String(null != (t = e.modelValue) ? t : '');
          },
          c = (t) => (m(e[t]) ? e[t] : i && m(i.props[t]) ? i.props[t] : void 0),
          d = U(() => {
            const t = c('readonly');
            if (e.clearable && !t) {
              const t = '' !== u(),
                a = 'always' === e.clearTrigger || ('focus' === e.clearTrigger && r.focused);
              return t && a;
            }
            return !1;
          }),
          v = U(() => (o.value && a.input ? o.value() : e.modelValue)),
          y = U(() => {
            var t;
            const a = c('required');
            return 'auto' === a ? (null == (t = e.rules) ? void 0 : t.some((e) => e.required)) : a;
          }),
          C = (e) =>
            e.reduce(
              (e, t) =>
                e.then(() => {
                  if ('failed' === r.status) return;
                  let { value: e } = v;
                  if (
                    (t.formatter && (e = t.formatter(e, t)),
                    !(function (e, t) {
                      if (De(e)) {
                        if (t.required) return !1;
                        if (!1 === t.validateEmpty) return !0;
                      }
                      return !(t.pattern && !t.pattern.test(String(e)));
                    })(e, t))
                  )
                    return ((r.status = 'failed'), void (r.validateMessage = we(e, t)));
                  if (t.validator) {
                    if (De(e) && !1 === t.validateEmpty) return;
                    return (function (e, t) {
                      return new Promise((a) => {
                        const n = t.validator(e, t);
                        b(n) ? n.then(a) : a(n);
                      });
                    })(e, t).then((a) => {
                      a && 'string' == typeof a
                        ? ((r.status = 'failed'), (r.validateMessage = a))
                        : !1 === a && ((r.status = 'failed'), (r.validateMessage = we(e, t)));
                    });
                  }
                }),
              Promise.resolve(),
            ),
          N = () => {
            ((r.status = 'unvalidated'), (r.validateMessage = ''));
          },
          T = () => t('endValidate', { status: r.status, message: r.validateMessage }),
          E = (a = e.rules) =>
            new Promise((n) => {
              (N(),
                a
                  ? (t('startValidate'),
                    C(a).then(() => {
                      'failed' === r.status ? (n({ name: e.name, message: r.validateMessage }), T()) : ((r.status = 'passed'), n(), T());
                    }))
                  : n());
            }),
          H = (t) => {
            if (i && e.rules) {
              const { validateTrigger: a } = i.props,
                n = M(a).includes(t),
                r = e.rules.filter((e) => (e.trigger ? M(e.trigger).includes(t) : n));
              r.length && E(r);
            }
          },
          L = (a, n = 'onChange') => {
            var s, o;
            const i = a;
            a = ((t) => {
              var a;
              const { maxlength: n } = e;
              if (m(n) && xe(t) > +n) {
                const e = u();
                if (e && xe(e) === +n) return e;
                const s = null == (a = l.value) ? void 0 : a.selectionEnd;
                if (r.focused && s) {
                  const e = [...t],
                    a = e.length - +n;
                  return (e.splice(s - a, a), e.join(''));
                }
                return Ae(t, +n);
              }
              return t;
            })(a);
            const c = xe(i) - xe(a);
            if ('number' === e.type || 'digit' === e.type) {
              const t = 'number' === e.type;
              if (((a = S(a, t, t)), 'onBlur' === n && '' !== a && (void 0 !== e.min || void 0 !== e.max))) {
                const t = x(+a, null != (s = e.min) ? s : -1 / 0, null != (o = e.max) ? o : 1 / 0);
                +a !== t && (a = t.toString());
              }
            }
            let d = 0;
            if (e.formatter && n === e.formatTrigger) {
              const { formatter: t, maxlength: n } = e;
              if (((a = t(a)), m(n) && xe(a) > +n && (a = Ae(a, +n)), l.value && r.focused)) {
                const { selectionEnd: e } = l.value,
                  a = Ae(i, e);
                d = xe(t(a)) - xe(a);
              }
            }
            if (l.value && l.value.value !== a)
              if (r.focused) {
                let { selectionStart: e, selectionEnd: t } = l.value;
                if (((l.value.value = a), m(e) && m(t))) {
                  const n = xe(a);
                  (c ? ((e -= c), (t -= c)) : d && ((e += d), (t += d)), l.value.setSelectionRange(Math.min(e, n), Math.min(t, n)));
                }
              } else l.value.value = a;
            a !== e.modelValue && t('update:modelValue', a);
          },
          I = (e) => {
            e.target.composing || L(e.target.value);
          },
          B = () => {
            var e;
            return null == (e = l.value) ? void 0 : e.blur();
          },
          Y = () => {
            var e;
            return null == (e = l.value) ? void 0 : e.focus();
          },
          F = () => {
            const t = l.value;
            'textarea' === e.type &&
              e.autosize &&
              t &&
              (function (e, t) {
                const a = p();
                e.style.height = 'auto';
                let n = e.scrollHeight;
                if (h(t)) {
                  const { maxHeight: e, minHeight: a } = t;
                  (void 0 !== e && (n = Math.min(n, e)), void 0 !== a && (n = Math.max(n, a)));
                }
                n && ((e.style.height = `${n}px`), g(a));
              })(t, e.autosize);
          },
          P = (e) => {
            ((r.focused = !0), t('focus', e), Z(F), c('readonly') && B());
          },
          G = (e) => {
            ((r.focused = !1), L(u(), 'onBlur'), t('blur', e), c('readonly') || (H('onBlur'), Z(F), O()));
          },
          W = (e) => t('clickInput', e),
          ee = (e) => t('clickLeftIcon', e),
          te = (e) => t('clickRightIcon', e),
          ae = U(() => ('boolean' == typeof e.error ? e.error : !(!i || !i.props.showError || 'failed' !== r.status) || void 0)),
          ne = U(() => {
            const e = c('labelWidth'),
              t = c('labelAlign');
            if (e && 'top' !== t) return { width: w(e) };
          }),
          re = (a) => {
            if (13 === a.keyCode) {
              ((i && i.props.submitOnEnter) || 'textarea' === e.type || A(a), 'search' === e.type && B());
            }
            t('keypress', a);
          },
          le = () => e.id || `${n}-input`,
          se = () => {
            const t = Me('control', [
              c('inputAlign'),
              { error: ae.value, custom: !!a.input, 'min-height': 'textarea' === e.type && !e.autosize },
            ]);
            if (a.input) return j('div', { class: t, onClick: W }, [a.input()]);
            const r = {
              id: le(),
              ref: l,
              name: e.name,
              rows: void 0 !== e.rows ? +e.rows : void 0,
              class: t,
              disabled: c('disabled'),
              readonly: c('readonly'),
              autofocus: e.autofocus,
              placeholder: e.placeholder,
              autocomplete: e.autocomplete,
              autocapitalize: e.autocapitalize,
              autocorrect: e.autocorrect,
              enterkeyhint: e.enterkeyhint,
              spellcheck: e.spellcheck,
              'aria-labelledby': e.label ? `${n}-label` : void 0,
              'data-allow-mismatch': 'attribute',
              onBlur: G,
              onFocus: P,
              onInput: I,
              onClick: W,
              onChange: Se,
              onKeypress: re,
              onCompositionend: Se,
              onCompositionstart: ke,
            };
            return 'textarea' === e.type
              ? j('textarea', Q(r, { inputmode: e.inputmode }), null)
              : j(
                  'input',
                  Q(
                    ((s = e.type),
                    (o = e.inputmode),
                    'number' === s && ((s = 'text'), null != o || (o = 'decimal')),
                    'digit' === s && ((s = 'tel'), null != o || (o = 'numeric')),
                    { type: s, inputmode: o }),
                    r,
                  ),
                  null,
                );
            var s, o;
          },
          oe = () => {
            const t = a['right-icon'];
            if (e.rightIcon || t)
              return j('div', { class: Me('right-icon'), onClick: te }, [
                t ? t() : j(f, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
              ]);
          },
          ie = () => {
            if (e.showWordLimit && e.maxlength) {
              const t = xe(u());
              return j('div', { class: Me('word-limit') }, [j('span', { class: Me('word-num') }, [t]), K('/'), e.maxlength]);
            }
          },
          ce = () => {
            if (i && !1 === i.props.showErrorMessage) return;
            const t = e.errorMessage || r.validateMessage;
            if (t) {
              const e = a['error-message'],
                n = c('errorMessageAlign');
              return j('div', { class: Me('error-message', n) }, [e ? e({ message: t }) : t]);
            }
          },
          de = () => [
            j('div', { class: Me('body') }, [
              se(),
              d.value && j(f, { ref: s, name: e.clearIcon, class: Me('clear') }, null),
              oe(),
              a.button && j('div', { class: Me('button') }, [a.button()]),
            ]),
            ie(),
            ce(),
          ];
        return (
          ue({ blur: B, focus: Y, validate: E, formValue: v, resetValidation: N, getValidationStatus: () => r.status }),
          X(_, { customValue: o, resetValidation: N, validateWithTrigger: H }),
          q(
            () => e.modelValue,
            () => {
              (L(u()), N(), H('onChange'), Z(F));
            },
          ),
          J(() => {
            (L(u(), e.formatTrigger), Z(F));
          }),
          k(
            'touchstart',
            (e) => {
              (A(e), t('update:modelValue', ''), t('clear', e));
            },
            {
              target: U(() => {
                var e;
                return null == (e = s.value) ? void 0 : e.$el;
              }),
            },
          ),
          () => {
            const t = c('disabled'),
              r = c('labelAlign'),
              l = (() => {
                const t = a['left-icon'];
                if (e.leftIcon || t)
                  return j('div', { class: Me('left-icon'), onClick: ee }, [
                    t ? t() : j(f, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
                  ]);
              })();
            return j(
              be,
              {
                size: e.size,
                class: Me({ error: ae.value, disabled: t, [`label-${r}`]: r }),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: ne.value,
                valueClass: Me('value'),
                titleClass: [Me('label', [r, { required: y.value }]), e.labelClass],
                arrowDirection: e.arrowDirection,
              },
              {
                icon: l && 'top' !== r ? () => l : null,
                title: () => {
                  const t = (() => {
                    const t = c('labelWidth'),
                      r = c('labelAlign'),
                      l = c('colon') ? ':' : '';
                    return a.label
                      ? [a.label(), l]
                      : e.label
                        ? j(
                            'label',
                            {
                              id: `${n}-label`,
                              for: a.input ? void 0 : le(),
                              'data-allow-mismatch': 'attribute',
                              onClick: (e) => {
                                (A(e), Y());
                              },
                              style: 'top' === r && t ? { width: w(t) } : void 0,
                            },
                            [e.label + l],
                          )
                        : void 0;
                  })();
                  return 'top' === r ? [l, t].filter(Boolean) : t || [];
                },
                value: de,
                extra: a.extra,
              },
            );
          }
        );
      },
    }),
  ),
  [_e, Ce, Ne] = r('calendar');
function Te(e, t) {
  const a = e.getFullYear(),
    n = t.getFullYear();
  if (a === n) {
    const a = e.getMonth(),
      n = t.getMonth();
    return a === n ? 0 : a > n ? 1 : -1;
  }
  return a > n ? 1 : -1;
}
function Ee(e, t) {
  const a = Te(e, t);
  if (0 === a) {
    const a = e.getDate(),
      n = t.getDate();
    return a === n ? 0 : a > n ? 1 : -1;
  }
  return a;
}
const He = (e) => new Date(e),
  Le = (e) => (Array.isArray(e) ? e.map(He) : He(e));
function Ie(e, t) {
  const a = He(e);
  return (a.setDate(a.getDate() + t), a);
}
function Be(e, t) {
  const a = He(e);
  return (a.setMonth(a.getMonth() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
function Ye(e, t) {
  const a = He(e);
  return (a.setFullYear(a.getFullYear() + t), a.getDate() !== e.getDate() && a.setDate(0), a);
}
const Fe = (e) => Ie(e, -1),
  Pe = (e) => Ie(e, 1),
  Ve = (e) => Be(e, -1),
  Re = (e) => Be(e, 1),
  Ge = (e) => Ye(e, -1),
  We = (e) => Ye(e, 1),
  je = () => {
    const e = new Date();
    return (e.setHours(0, 0, 0, 0), e);
  };
l({}, pe, { modelValue: u(), filter: Function, formatter: { type: Function, default: (e, t) => t } });
const [ze] = r('calendar-day');
var Ue = W({
  name: ze,
  props: { item: N(Object), color: String, index: Number, offset: C(0), rowHeight: String },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const n = U(() => {
        const { item: t, index: a, color: n, offset: r, rowHeight: l } = e,
          s = { height: l };
        if ('placeholder' === t.type) return ((s.width = '100%'), s);
        if ((0 === a && (s.marginLeft = (100 * r) / 7 + '%'), n))
          switch (t.type) {
            case 'end':
            case 'start':
            case 'start-end':
            case 'multiple-middle':
            case 'multiple-selected':
              s.background = n;
              break;
            case 'middle':
              s.color = n;
          }
        return (
          t.date &&
            (function (e, t = 0) {
              const a = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                n = t + e.getDate() - 1,
                r = t + a.getDate() - 1;
              return Math.floor(n / 7) === Math.floor(r / 7);
            })(t.date, r) &&
            (s.marginBottom = 0),
          s
        );
      }),
      r = () => {
        'disabled' !== e.item.type ? t('click', e.item) : t('clickDisabledDate', e.item);
      },
      l = () => {
        const { topInfo: t } = e.item;
        if (t || a['top-info']) return j('div', { class: Ce('top-info') }, [a['top-info'] ? a['top-info'](e.item) : t]);
      },
      s = () => {
        const { bottomInfo: t } = e.item;
        if (t || a['bottom-info']) return j('div', { class: Ce('bottom-info') }, [a['bottom-info'] ? a['bottom-info'](e.item) : t]);
      },
      o = () => {
        const { item: t, color: n, rowHeight: r } = e,
          { type: o } = t,
          i = [l(), a.text ? a.text(e.item) : e.item.text, s()];
        return 'selected' === o ? j('div', { class: Ce('selected-day'), style: { width: r, height: r, background: n } }, [i]) : i;
      };
    return () => {
      const { type: t, className: a } = e.item;
      return 'placeholder' === t
        ? j('div', { class: Ce('day'), style: n.value }, null)
        : j('div', { role: 'gridcell', style: n.value, class: [Ce('day', t), a], tabindex: 'disabled' === t ? void 0 : -1, onClick: r }, [
            o(),
          ]);
    };
  },
});
const [qe] = r('calendar-month');
var Je = W({
  name: qe,
  props: {
    date: N(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: d,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number,
  },
  emits: ['click', 'clickDisabledDate'],
  setup(e, { emit: t, slots: a }) {
    const [n, r] = T(),
      l = R(),
      s = R(),
      o = me(s),
      i = U(() => {
        return ((t = e.date), Ne('monthTitle', t.getFullYear(), t.getMonth() + 1));
        var t;
      }),
      u = U(() => w(e.rowHeight)),
      c = U(() => {
        const t = e.date.getDate(),
          a = (e.date.getDay() - (t % 7) + 8) % 7;
        return e.firstDayOfWeek ? (a + 7 - e.firstDayOfWeek) % 7 : a;
      }),
      d = U(() => {
        return ((t = e.date.getFullYear()), (a = e.date.getMonth() + 1), 32 - new Date(t, a - 1, 32).getDate());
        var t, a;
      }),
      m = U(() => n.value || !e.lazyRender),
      f = (t) => {
        const { type: a, minDate: n, maxDate: r, currentDate: l } = e;
        if ((n && Ee(t, n) < 0) || (r && Ee(t, r) > 0)) return 'disabled';
        if (null === l) return '';
        if (Array.isArray(l)) {
          if ('multiple' === a)
            return ((t) => {
              const a = (t) => e.currentDate.some((e) => 0 === Ee(e, t));
              if (a(t)) {
                const e = Fe(t),
                  n = Pe(t),
                  r = a(e),
                  l = a(n);
                return r && l ? 'multiple-middle' : r ? 'end' : l ? 'start' : 'multiple-selected';
              }
              return '';
            })(t);
          if ('range' === a)
            return ((t) => {
              const [a, n] = e.currentDate;
              if (!a) return '';
              const r = Ee(t, a);
              if (!n) return 0 === r ? 'start' : '';
              const l = Ee(t, n);
              return e.allowSameDay && 0 === r && 0 === l
                ? 'start-end'
                : 0 === r
                  ? 'start'
                  : 0 === l
                    ? 'end'
                    : r > 0 && l < 0
                      ? 'middle'
                      : '';
            })(t);
        } else if ('single' === a) return 0 === Ee(t, l) ? 'selected' : '';
        return '';
      },
      v = (t) => {
        if ('range' === e.type) {
          if ('start' === t || 'end' === t) return Ne(t);
          if ('start-end' === t) return `${Ne('start')}/${Ne('end')}`;
        }
      },
      p = () => {
        if (e.showMonthTitle)
          return j('div', { class: Ce('month-title') }, [a['month-title'] ? a['month-title']({ date: e.date, text: i.value }) : i.value]);
      },
      h = () => {
        if (e.showMark && m.value) return j('div', { class: Ce('month-mark') }, [e.date.getMonth() + 1]);
      },
      g = U(() => {
        const e = Math.ceil((d.value + c.value) / 7);
        return Array(e).fill({ type: 'placeholder' });
      }),
      y = U(() => {
        const t = [],
          a = e.date.getFullYear(),
          n = e.date.getMonth();
        for (let r = 1; r <= d.value; r++) {
          const l = new Date(a, n, r),
            s = f(l);
          let o = { date: l, type: s, text: r, bottomInfo: v(s) };
          (e.formatter && (o = e.formatter(o)), t.push(o));
        }
        return t;
      }),
      b = U(() => y.value.filter((e) => 'disabled' === e.type)),
      D = (n, r) =>
        j(
          Ue,
          {
            item: n,
            index: r,
            color: e.color,
            offset: c.value,
            rowHeight: u.value,
            onClick: (e) => t('click', e),
            onClickDisabledDate: (e) => t('clickDisabledDate', e),
          },
          L(a, ['top-info', 'bottom-info', 'text']),
        );
    return (
      ue({
        getTitle: () => i.value,
        getHeight: () => o.value,
        setVisible: r,
        scrollToDate: (e, t) => {
          if (l.value) {
            const a = E(l.value),
              n = g.value.length,
              r = ((Math.ceil((t.getDate() + c.value) / 7) - 1) * a.height) / n;
            H(e, a.top + r + e.scrollTop - E(e).top);
          }
        },
        disabledDays: b,
      }),
      () =>
        j('div', { class: Ce('month'), ref: s }, [
          p(),
          j('div', { ref: l, role: 'grid', class: Ce('days') }, [h(), (m.value ? y : g).value.map(D)]),
        ])
    );
  },
});
const [Ze] = r('calendar-header');
var Ke = W({
  name: Ze,
  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    switchMode: i('none'),
  },
  emits: ['clickSubtitle', 'panelChange'],
  setup(e, { slots: t, emit: a }) {
    const n = U(() => e.date && e.minDate && Te(Ve(e.date), e.minDate) < 0),
      r = U(() => e.date && e.minDate && Te(Ge(e.date), e.minDate) < 0),
      l = U(() => e.date && e.maxDate && Te(Re(e.date), e.maxDate) > 0),
      s = U(() => e.date && e.maxDate && Te(We(e.date), e.maxDate) > 0),
      o = () => {
        if (e.showTitle) {
          const a = e.title || Ne('title'),
            n = t.title ? t.title() : a;
          return j('div', { class: Ce('header-title') }, [n]);
        }
      },
      i = (e) => a('clickSubtitle', e),
      u = (e) => a('panelChange', e),
      c = (a) => {
        const o = 'year-month' === e.switchMode,
          i = t[a ? 'next-month' : 'prev-month'],
          c = t[a ? 'next-year' : 'prev-year'],
          d = a ? l.value : n.value,
          m = a ? s.value : r.value,
          v = a ? 'arrow' : 'arrow-left',
          p = a ? 'arrow-double-right' : 'arrow-double-left',
          h = j('view', { class: Ce('header-action', { disabled: d }), onClick: d ? void 0 : () => u((a ? Re : Ve)(e.date)) }, [
            i ? i({ disabled: d }) : j(f, { class: { [I]: !d }, name: v }, null),
          ]),
          g =
            o &&
            j('view', { class: Ce('header-action', { disabled: m }), onClick: m ? void 0 : () => u((a ? We : Ge)(e.date)) }, [
              c ? c({ disabled: m }) : j(f, { class: { [I]: !m }, name: p }, null),
            ]);
        return a ? [h, g] : [g, h];
      },
      d = () => {
        if (e.showSubtitle) {
          const a = t.subtitle ? t.subtitle({ date: e.date, text: e.subtitle }) : e.subtitle,
            n = 'none' !== e.switchMode;
          return j('div', { class: Ce('header-subtitle', { 'with-switch': n }), onClick: i }, [
            n ? [c(), j('div', { class: Ce('header-subtitle-text') }, [a]), c(!0)] : a,
          ]);
        }
      },
      m = () => {
        const { firstDayOfWeek: t } = e,
          a = Ne('weekdays'),
          n = [...a.slice(t, 7), ...a.slice(0, t)];
        return j('div', { class: Ce('weekdays') }, [n.map((e) => j('span', { class: Ce('weekday') }, [e]))]);
      };
    return () => j('div', { class: Ce('header') }, [o(), d(), m()]);
  },
});
const Qe = v(
  W({
    name: _e,
    props: {
      show: Boolean,
      type: i('single'),
      switchMode: i('none'),
      title: String,
      color: String,
      round: o,
      readonly: Boolean,
      poppable: o,
      maxRange: s(null),
      position: i('bottom'),
      teleport: [String, Object],
      showMark: o,
      showTitle: o,
      formatter: Function,
      rowHeight: d,
      confirmText: String,
      rangePrompt: String,
      lazyRender: o,
      showConfirm: o,
      defaultDate: [Date, Array],
      allowSameDay: Boolean,
      showSubtitle: o,
      closeOnPopstate: o,
      showRangePrompt: o,
      confirmDisabledText: String,
      closeOnClickOverlay: o,
      safeAreaInsetTop: Boolean,
      safeAreaInsetBottom: o,
      minDate: { type: Date, validator: B },
      maxDate: { type: Date, validator: B },
      firstDayOfWeek: { type: d, default: 0, validator: (e) => e >= 0 && e <= 6 },
    },
    emits: [
      'select',
      'confirm',
      'unselect',
      'monthShow',
      'overRange',
      'update:show',
      'clickSubtitle',
      'clickDisabledDate',
      'clickOverlay',
      'panelChange',
    ],
    setup(e, { emit: t, slots: n }) {
      const r = U(() => 'none' !== e.switchMode),
        l = U(() => (e.minDate || r.value ? e.minDate : je())),
        s = U(() => (e.maxDate || r.value ? e.maxDate : Be(je(), 6))),
        o = (e, t = l.value, a = s.value) => (t && -1 === Ee(e, t) ? t : a && 1 === Ee(e, a) ? a : e),
        i = (t = e.defaultDate) => {
          const { type: a, allowSameDay: n } = e;
          if (null === t) return t;
          const r = je();
          if ('range' === a) {
            (Array.isArray(t) || (t = []), 1 === t.length && 1 === Ee(t[0], r) && (t = []));
            const e = l.value,
              a = s.value;
            return [o(t[0] || r, e, a ? (n ? a : Fe(a)) : void 0), o(t[1] || (n ? r : Pe(r)), e ? (n ? e : Pe(e)) : void 0)];
          }
          return 'multiple' === a ? (Array.isArray(t) ? t.map((e) => o(e)) : [o(r)]) : ((t && !Array.isArray(t)) || (t = r), o(t));
        };
      let u;
      const c = R(),
        d = R(i()),
        m = R(
          (() => {
            const e = Array.isArray(d.value) ? d.value[0] : d.value;
            return e || o(je());
          })(),
        ),
        f = R(),
        [v, p] = (function () {
          const e = R([]),
            t = [];
          return (
            G(() => {
              e.value = [];
            }),
            [
              e,
              (a) => (
                t[a] ||
                  (t[a] = (t) => {
                    e.value[a] = t;
                  }),
                t[a]
              ),
            ]
          );
        })(),
        h = U(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
        g = U(() => {
          const e = [];
          if (!l.value || !s.value) return e;
          const t = new Date(l.value);
          t.setDate(1);
          do {
            (e.push(new Date(t)), t.setMonth(t.getMonth() + 1));
          } while (1 !== Te(t, s.value));
          return e;
        }),
        y = U(() => {
          if (d.value) {
            if ('range' === e.type) return !d.value[0] || !d.value[1];
            if ('multiple' === e.type) return !d.value.length;
          }
          return !d.value;
        }),
        b = () => {
          const e = F(c.value),
            a = e + u,
            n = g.value.map((e, t) => v.value[t].getHeight());
          if (a > n.reduce((e, t) => e + t, 0) && e > 0) return;
          let r,
            l = 0;
          const s = [-1, -1];
          for (let o = 0; o < g.value.length; o++) {
            const i = v.value[o];
            (l <= a &&
              l + n[o] >= e &&
              ((s[1] = o),
              r || ((r = i), (s[0] = o)),
              v.value[o].showed || ((v.value[o].showed = !0), t('monthShow', { date: i.date, title: i.getTitle() }))),
              (l += n[o]));
          }
          (g.value.forEach((e, t) => {
            const a = t >= s[0] - 1 && t <= s[1] + 1;
            v.value[t].setVisible(a);
          }),
            r && (f.value = r));
        },
        D = (e) => {
          r.value
            ? (m.value = e)
            : P(() => {
                (g.value.some((t, a) => 0 === Te(t, e) && (c.value && v.value[a].scrollToDate(c.value, e), !0)), b());
              });
        },
        w = () => {
          if (!e.poppable || e.show)
            if (d.value) {
              const t = 'single' === e.type ? d.value : d.value[0];
              B(t) && D(t);
            } else r.value || P(b);
        },
        k = () => {
          (e.poppable && !e.show) ||
            (r.value ||
              P(() => {
                u = Math.floor(E(c).height);
              }),
            w());
        },
        S = (e = i()) => {
          ((d.value = e), w());
        },
        x = (e) => {
          ((m.value = e), t('panelChange', { date: e }));
        },
        A = () => {
          var e;
          return t('confirm', null != (e = d.value) ? e : Le(d.value));
        },
        $ = (a, n) => {
          const r = (e) => {
            ((d.value = e), t('select', Le(e)));
          };
          if (n && 'range' === e.type) {
            const n = ((a) => {
              const { maxRange: n, rangePrompt: r, showRangePrompt: l } = e;
              return !(
                n &&
                (function (e) {
                  const t = e[0].getTime();
                  return (e[1].getTime() - t) / 864e5 + 1;
                })(a) > +n &&
                (l && de(r || Ne('rangePrompt', n)), t('overRange'), 1)
              );
            })(a);
            if (!n) return void r([a[0], Ie(a[0], +e.maxRange - 1)]);
          }
          (r(a), n && !e.showConfirm && A());
        },
        M = U(() =>
          v.value.reduce((e, t) => {
            var a, n;
            return (e.push(...(null != (n = null == (a = t.disabledDays) ? void 0 : a.value) ? n : [])), e);
          }, []),
        ),
        O = (a) => {
          if (e.readonly || !a.date) return;
          const { date: n } = a,
            { type: r } = e;
          if ('range' === r) {
            if (!d.value) return void $([n]);
            const [t, a] = d.value;
            if (t && !a) {
              const a = Ee(n, t);
              if (1 === a) {
                const e = ((e, t, a) => {
                  var n;
                  return null == (n = e.find((e) => -1 === Ee(t, e.date) && -1 === Ee(e.date, a))) ? void 0 : n.date;
                })(M.value, t, n);
                if (e) {
                  const a = Fe(e);
                  -1 === Ee(t, a) ? $([t, a]) : $([n]);
                } else $([t, n], !0);
              } else -1 === a ? $([n]) : e.allowSameDay && $([n, n], !0);
            } else $([n]);
          } else if ('multiple' === r) {
            if (!d.value) return void $([n]);
            const a = d.value,
              r = a.findIndex((e) => 0 === Ee(e, n));
            if (-1 !== r) {
              const [e] = a.splice(r, 1);
              t('unselect', He(e));
            } else e.maxRange && a.length >= +e.maxRange ? de(e.rangePrompt || Ne('rangePrompt', e.maxRange)) : $([...a, n]);
          } else $(n, !0);
        },
        _ = (e) => t('clickOverlay', e),
        C = (e) => t('update:show', e),
        N = (a, o) => {
          const i = 0 !== o || !e.showSubtitle;
          return j(
            Je,
            Q(
              {
                ref: r.value ? f : p(o),
                date: a,
                currentDate: d.value,
                showMonthTitle: i,
                firstDayOfWeek: h.value,
                lazyRender: !r.value && e.lazyRender,
                maxDate: s.value,
                minDate: l.value,
              },
              L(e, ['type', 'color', 'showMark', 'formatter', 'rowHeight', 'showSubtitle', 'allowSameDay']),
              { onClick: O, onClickDisabledDate: (e) => t('clickDisabledDate', e) },
            ),
            L(n, ['top-info', 'bottom-info', 'month-title', 'text']),
          );
        },
        T = () => {
          if (n.footer) return n.footer();
          if (e.showConfirm) {
            const t = n['confirm-text'],
              r = y.value,
              l = r ? e.confirmDisabledText : e.confirmText;
            return j(
              a,
              {
                round: !0,
                block: !0,
                type: 'primary',
                color: e.color,
                class: Ce('confirm'),
                disabled: r,
                nativeType: 'button',
                onClick: A,
              },
              { default: () => [t ? t({ disabled: r }) : l || Ne('confirm')] },
            );
          }
        },
        H = () => {
          var a, o;
          return j('div', { class: Ce() }, [
            j(
              Ke,
              {
                date: null == (a = f.value) ? void 0 : a.date,
                maxDate: s.value,
                minDate: l.value,
                title: e.title,
                subtitle: null == (o = f.value) ? void 0 : o.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: h.value,
                onClickSubtitle: (e) => t('clickSubtitle', e),
                onPanelChange: x,
              },
              L(n, ['title', 'subtitle', 'prev-month', 'prev-year', 'next-month', 'next-year']),
            ),
            j('div', { ref: c, class: Ce('body'), onScroll: r.value ? void 0 : b }, [r.value ? N(m.value, 0) : g.value.map(N)]),
            j('div', { class: [Ce('footer'), { 'van-safe-area-bottom': e.safeAreaInsetBottom }] }, [T()]),
          ]);
        };
      return (
        q(() => e.show, k),
        q(
          () => [e.type, e.minDate, e.maxDate, e.switchMode],
          () => S(i(d.value)),
        ),
        q(
          () => e.defaultDate,
          (e) => {
            S(e);
          },
        ),
        ue({ reset: S, scrollToDate: D, getSelectedDate: () => d.value }),
        Y(k),
        () =>
          e.poppable
            ? j(
                ce,
                {
                  show: e.show,
                  class: Ce('popup'),
                  round: e.round,
                  position: e.position,
                  closeable: e.showTitle || e.showSubtitle,
                  teleport: e.teleport,
                  closeOnPopstate: e.closeOnPopstate,
                  safeAreaInsetTop: e.safeAreaInsetTop,
                  closeOnClickOverlay: e.closeOnClickOverlay,
                  onClickOverlay: _,
                  'onUpdate:show': C,
                },
                { default: H },
              )
            : H()
      );
    },
  }),
);
function Xe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var et,
  tt = { exports: {} };
const at = Xe(
    (et ||
      ((et = 1),
      (tt.exports = (function () {
        var e = 1e3,
          t = 6e4,
          a = 36e5,
          n = 'millisecond',
          r = 'second',
          l = 'minute',
          s = 'hour',
          o = 'day',
          i = 'week',
          u = 'month',
          c = 'quarter',
          d = 'year',
          m = 'date',
          f = 'Invalid Date',
          v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          h = {
            name: 'en',
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            ordinal: function (e) {
              var t = ['th', 'st', 'nd', 'rd'],
                a = e % 100;
              return '[' + e + (t[(a - 20) % 10] || t[a] || t[0]) + ']';
            },
          },
          g = function (e, t, a) {
            var n = String(e);
            return !n || n.length >= t ? e : '' + Array(t + 1 - n.length).join(a) + e;
          },
          y = {
            s: g,
            z: function (e) {
              var t = -e.utcOffset(),
                a = Math.abs(t),
                n = Math.floor(a / 60),
                r = a % 60;
              return (t <= 0 ? '+' : '-') + g(n, 2, '0') + ':' + g(r, 2, '0');
            },
            m: function e(t, a) {
              if (t.date() < a.date()) return -e(a, t);
              var n = 12 * (a.year() - t.year()) + (a.month() - t.month()),
                r = t.clone().add(n, u),
                l = a - r < 0,
                s = t.clone().add(n + (l ? -1 : 1), u);
              return +(-(n + (a - r) / (l ? r - s : s - r)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (e) {
              return (
                { M: u, y: d, w: i, d: o, D: m, h: s, m: l, s: r, ms: n, Q: c }[e] ||
                String(e || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          },
          b = 'en',
          D = {};
        D[b] = h;
        var w = '$isDayjsObject',
          k = function (e) {
            return e instanceof $ || !(!e || !e[w]);
          },
          S = function e(t, a, n) {
            var r;
            if (!t) return b;
            if ('string' == typeof t) {
              var l = t.toLowerCase();
              (D[l] && (r = l), a && ((D[l] = a), (r = l)));
              var s = t.split('-');
              if (!r && s.length > 1) return e(s[0]);
            } else {
              var o = t.name;
              ((D[o] = t), (r = o));
            }
            return (!n && r && (b = r), r || (!n && b));
          },
          x = function (e, t) {
            if (k(e)) return e.clone();
            var a = 'object' == typeof t ? t : {};
            return ((a.date = e), (a.args = arguments), new $(a));
          },
          A = y;
        ((A.l = S),
          (A.i = k),
          (A.w = function (e, t) {
            return x(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
          }));
        var $ = (function () {
            function h(e) {
              ((this.$L = S(e.locale, null, !0)), this.parse(e), (this.$x = this.$x || e.x || {}), (this[w] = !0));
            }
            var g = h.prototype;
            return (
              (g.parse = function (e) {
                ((this.$d = (function (e) {
                  var t = e.date,
                    a = e.utc;
                  if (null === t) return new Date(NaN);
                  if (A.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ('string' == typeof t && !/Z$/i.test(t)) {
                    var n = t.match(v);
                    if (n) {
                      var r = n[2] - 1 || 0,
                        l = (n[7] || '0').substring(0, 3);
                      return a
                        ? new Date(Date.UTC(n[1], r, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, l))
                        : new Date(n[1], r, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, l);
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init());
              }),
              (g.init = function () {
                var e = this.$d;
                ((this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds()));
              }),
              (g.$utils = function () {
                return A;
              }),
              (g.isValid = function () {
                return !(this.$d.toString() === f);
              }),
              (g.isSame = function (e, t) {
                var a = x(e);
                return this.startOf(t) <= a && a <= this.endOf(t);
              }),
              (g.isAfter = function (e, t) {
                return x(e) < this.startOf(t);
              }),
              (g.isBefore = function (e, t) {
                return this.endOf(t) < x(e);
              }),
              (g.$g = function (e, t, a) {
                return A.u(e) ? this[t] : this.set(a, e);
              }),
              (g.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (g.valueOf = function () {
                return this.$d.getTime();
              }),
              (g.startOf = function (e, t) {
                var a = this,
                  n = !!A.u(t) || t,
                  c = A.p(e),
                  f = function (e, t) {
                    var r = A.w(a.$u ? Date.UTC(a.$y, t, e) : new Date(a.$y, t, e), a);
                    return n ? r : r.endOf(o);
                  },
                  v = function (e, t) {
                    return A.w(a.toDate()[e].apply(a.toDate('s'), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), a);
                  },
                  p = this.$W,
                  h = this.$M,
                  g = this.$D,
                  y = 'set' + (this.$u ? 'UTC' : '');
                switch (c) {
                  case d:
                    return n ? f(1, 0) : f(31, 11);
                  case u:
                    return n ? f(1, h) : f(0, h + 1);
                  case i:
                    var b = this.$locale().weekStart || 0,
                      D = (p < b ? p + 7 : p) - b;
                    return f(n ? g - D : g + (6 - D), h);
                  case o:
                  case m:
                    return v(y + 'Hours', 0);
                  case s:
                    return v(y + 'Minutes', 1);
                  case l:
                    return v(y + 'Seconds', 2);
                  case r:
                    return v(y + 'Milliseconds', 3);
                  default:
                    return this.clone();
                }
              }),
              (g.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (g.$set = function (e, t) {
                var a,
                  i = A.p(e),
                  c = 'set' + (this.$u ? 'UTC' : ''),
                  f = ((a = {}),
                  (a[o] = c + 'Date'),
                  (a[m] = c + 'Date'),
                  (a[u] = c + 'Month'),
                  (a[d] = c + 'FullYear'),
                  (a[s] = c + 'Hours'),
                  (a[l] = c + 'Minutes'),
                  (a[r] = c + 'Seconds'),
                  (a[n] = c + 'Milliseconds'),
                  a)[i],
                  v = i === o ? this.$D + (t - this.$W) : t;
                if (i === u || i === d) {
                  var p = this.clone().set(m, 1);
                  (p.$d[f](v), p.init(), (this.$d = p.set(m, Math.min(this.$D, p.daysInMonth())).$d));
                } else f && this.$d[f](v);
                return (this.init(), this);
              }),
              (g.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (g.get = function (e) {
                return this[A.p(e)]();
              }),
              (g.add = function (n, c) {
                var m,
                  f = this;
                n = Number(n);
                var v = A.p(c),
                  p = function (e) {
                    var t = x(f);
                    return A.w(t.date(t.date() + Math.round(e * n)), f);
                  };
                if (v === u) return this.set(u, this.$M + n);
                if (v === d) return this.set(d, this.$y + n);
                if (v === o) return p(1);
                if (v === i) return p(7);
                var h = ((m = {}), (m[l] = t), (m[s] = a), (m[r] = e), m)[v] || 1,
                  g = this.$d.getTime() + n * h;
                return A.w(g, this);
              }),
              (g.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (g.format = function (e) {
                var t = this,
                  a = this.$locale();
                if (!this.isValid()) return a.invalidDate || f;
                var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  r = A.z(this),
                  l = this.$H,
                  s = this.$m,
                  o = this.$M,
                  i = a.weekdays,
                  u = a.months,
                  c = a.meridiem,
                  d = function (e, a, r, l) {
                    return (e && (e[a] || e(t, n))) || r[a].slice(0, l);
                  },
                  m = function (e) {
                    return A.s(l % 12 || 12, e, '0');
                  },
                  v =
                    c ||
                    function (e, t, a) {
                      var n = e < 12 ? 'AM' : 'PM';
                      return a ? n.toLowerCase() : n;
                    };
                return n.replace(p, function (e, n) {
                  return (
                    n ||
                    (function (e) {
                      switch (e) {
                        case 'YY':
                          return String(t.$y).slice(-2);
                        case 'YYYY':
                          return A.s(t.$y, 4, '0');
                        case 'M':
                          return o + 1;
                        case 'MM':
                          return A.s(o + 1, 2, '0');
                        case 'MMM':
                          return d(a.monthsShort, o, u, 3);
                        case 'MMMM':
                          return d(u, o);
                        case 'D':
                          return t.$D;
                        case 'DD':
                          return A.s(t.$D, 2, '0');
                        case 'd':
                          return String(t.$W);
                        case 'dd':
                          return d(a.weekdaysMin, t.$W, i, 2);
                        case 'ddd':
                          return d(a.weekdaysShort, t.$W, i, 3);
                        case 'dddd':
                          return i[t.$W];
                        case 'H':
                          return String(l);
                        case 'HH':
                          return A.s(l, 2, '0');
                        case 'h':
                          return m(1);
                        case 'hh':
                          return m(2);
                        case 'a':
                          return v(l, s, !0);
                        case 'A':
                          return v(l, s, !1);
                        case 'm':
                          return String(s);
                        case 'mm':
                          return A.s(s, 2, '0');
                        case 's':
                          return String(t.$s);
                        case 'ss':
                          return A.s(t.$s, 2, '0');
                        case 'SSS':
                          return A.s(t.$ms, 3, '0');
                        case 'Z':
                          return r;
                      }
                      return null;
                    })(e) ||
                    r.replace(':', '')
                  );
                });
              }),
              (g.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (g.diff = function (n, m, f) {
                var v,
                  p = this,
                  h = A.p(m),
                  g = x(n),
                  y = (g.utcOffset() - this.utcOffset()) * t,
                  b = this - g,
                  D = function () {
                    return A.m(p, g);
                  };
                switch (h) {
                  case d:
                    v = D() / 12;
                    break;
                  case u:
                    v = D();
                    break;
                  case c:
                    v = D() / 3;
                    break;
                  case i:
                    v = (b - y) / 6048e5;
                    break;
                  case o:
                    v = (b - y) / 864e5;
                    break;
                  case s:
                    v = b / a;
                    break;
                  case l:
                    v = b / t;
                    break;
                  case r:
                    v = b / e;
                    break;
                  default:
                    v = b;
                }
                return f ? v : A.a(v);
              }),
              (g.daysInMonth = function () {
                return this.endOf(u).$D;
              }),
              (g.$locale = function () {
                return D[this.$L];
              }),
              (g.locale = function (e, t) {
                if (!e) return this.$L;
                var a = this.clone(),
                  n = S(e, t, !0);
                return (n && (a.$L = n), a);
              }),
              (g.clone = function () {
                return A.w(this.$d, this);
              }),
              (g.toDate = function () {
                return new Date(this.valueOf());
              }),
              (g.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (g.toISOString = function () {
                return this.$d.toISOString();
              }),
              (g.toString = function () {
                return this.$d.toUTCString();
              }),
              h
            );
          })(),
          M = $.prototype;
        return (
          (x.prototype = M),
          [
            ['$ms', n],
            ['$s', r],
            ['$m', l],
            ['$H', s],
            ['$W', o],
            ['$M', u],
            ['$y', d],
            ['$D', m],
          ].forEach(function (e) {
            M[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (x.extend = function (e, t) {
            return (e.$i || (e(t, $, x), (e.$i = !0)), x);
          }),
          (x.locale = S),
          (x.isDayjs = k),
          (x.unix = function (e) {
            return x(1e3 * e);
          }),
          (x.en = D[b]),
          (x.Ls = D),
          (x.p = {}),
          x
        );
      })())),
    tt.exports),
  ),
  nt = { class: 'container' },
  rt = { class: 'form-group' },
  lt = { id: 'dayType' },
  st = { class: 'form-group' },
  ot = { class: 'counter-group' },
  it = { class: 'counter-controls' },
  ut = { class: 'counter-value' },
  ct = { class: 'counter-group' },
  dt = { class: 'counter-controls' },
  mt = { class: 'counter-value' },
  ft = { class: 'counter-group' },
  vt = { class: 'counter-controls' },
  pt = { class: 'counter-value' },
  ht = { class: 'form-group' },
  gt = { class: 'counter-group' },
  yt = { class: 'counter-group' },
  bt = { class: 'summary' },
  Dt = { class: 'summary-item' },
  wt = { class: 'summary-value' },
  kt = { class: 'summary-item' },
  St = { class: 'summary-value' },
  xt = { class: 'summary-item' },
  At = { class: 'summary-value' },
  $t = { class: 'summary-item' },
  Mt = { class: 'summary-value' },
  Ot = { class: 'summary-item' },
  _t = { class: 'summary-value' },
  Ct = { class: 'summary-item' },
  Nt = { class: 'summary-value' },
  Tt = { class: 'summary' },
  Et = { class: 'summary-item' },
  Ht = { class: 'summary-value' },
  Lt = { class: 'summary-item' },
  It = { class: 'summary-value' },
  Bt = { class: 'summary-item' },
  Yt = { class: 'summary-value' },
  Ft = { class: 'summary-item' },
  Pt = { class: 'summary-value' },
  Vt = { class: 'summary-item' },
  Rt = { class: 'summary-value' },
  Gt = { class: 'summary-item' },
  Wt = { class: 'summary-value' },
  jt = ie(
    W({
      __name: 'index',
      setup(e) {
        const t = R({ adult: { num: 0, simpleText: '大' }, child: { num: 0, simpleText: '小' }, senior: { num: 0, simpleText: '老' } }),
          r = R('workday'),
          l = R({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' }),
          s = R({ amount: '0', originalAmount: '0', costPlatform: '0', commission: '0', totalCost: '0', profit: '0' }),
          o = R({ standard: 0.926, earlyBird: 0.95, costPlatform: 0.02 }),
          i = R(''),
          u = R(!1),
          c = (e) => at(e).format('YYYY-MM-DD'),
          d = (e) => {
            ((u.value = !1), (i.value = c(e)));
          },
          m = (e, a) => {
            (0 === t.value[e].num && a < 0) || (t.value[e].num += a);
          },
          f = (e, t) => {
            (0 === o.value[e] && t < 0) || (o.value[e] = (100 * o.value[e] + 100 * t) / 100);
          };
        function v() {
          const e = at(i.value).day();
          r.value = 0 === e || 6 === e ? 'weekend' : 'workday';
        }
        function p() {
          let e = 0,
            a = 0,
            r = 0,
            u = 0,
            c = 0,
            d = 0,
            m = 0,
            f = 0,
            v = 0,
            p = 0;
          const h = n.data.filter((e) => e.travelDate === i.value),
            g = new Map();
          for (const t of h) {
            const e = t;
            g.set(e.touristResortTicketsCategoryFullCode, e);
          }
          ((e += t.value.adult.num * g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT').price * o.value.earlyBird),
            (a += t.value.adult.num * g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_ADULT').price),
            (c += 0 * t.value.adult.num),
            (e += t.value.child.num * g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD').price * o.value.earlyBird),
            (a += t.value.child.num * g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_CHILD').price),
            (c += 0 * t.value.child.num),
            (e += t.value.senior.num * g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR').price * o.value.earlyBird),
            (a += t.value.senior.num * g.get('SHANGHAI_LEGOLAND_EARLY_ONE_DAY_ONE_SENIOR').price),
            (c += 0 * t.value.senior.num),
            (u = e * o.value.earlyBird),
            (r = c + u));
          const y = e - r - c;
          ((s.value.amount = e.toFixed(2)),
            (s.value.originalAmount = a.toFixed(2)),
            (s.value.costPlatform = u.toFixed(2)),
            (s.value.profit = y.toFixed(2)),
            (d += t.value.adult.num * g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT').price * o.value.standard),
            (m += t.value.adult.num * g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT').price),
            (p += 10 * t.value.adult.num),
            (d += t.value.child.num * g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD').price * o.value.standard),
            (m += t.value.child.num * g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD').price),
            (p += 10 * t.value.child.num),
            (d += t.value.senior.num * g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR').price * o.value.standard),
            (m += t.value.senior.num * g.get('SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR').price),
            (p += 10 * t.value.senior.num),
            (v = d * o.value.costPlatform),
            (f = p + v));
          const b = d - f - p;
          ((l.value.amount = d.toFixed(2)),
            (l.value.originalAmount = m.toFixed(2)),
            (l.value.costPlatform = v.toFixed(2)),
            (l.value.commission = p.toFixed(2)),
            (l.value.totalCost = f.toFixed(2)),
            (l.value.profit = b.toFixed(2)));
        }
        ((i.value = c(new Date())),
          v(),
          q(
            [i, t, o],
            () => {
              (v(), p());
            },
            { deep: !0 },
          ),
          p());
        const h = () => {
          function e(e) {
            return `${t.value[e].num ? t.value[e].num + t.value[e].simpleText : ''}`;
          }
          let a = `${i.value} ${e('adult')}${e('child')}${e('senior')}`;
          const n = 5 * Math.ceil(Number.parseFloat(l.value.amount) / 5),
            r = at(i.value).diff(new Date(), 'd') >= 9;
          if (r) {
            a += `\n早鸟票：${5 * Math.ceil(Number.parseFloat(s.value.amount) / 5)}`;
          }
          ((a += `\n标准票：${n}`),
            r && (a += '\n早鸟价格优惠，不可改签，需提前 10 天预订\n标准可改签一次'),
            navigator.clipboard.writeText(a));
        };
        return (e, n) => {
          const c = be,
            v = Qe,
            p = Oe,
            g = a;
          return (
            oe(),
            ee('div', nt, [
              n[46] || (n[46] = te('h1', null, '🎫 票务计算器', -1)),
              te('div', rt, [
                j(c, { title: '选择日期', value: ae(i), onClick: n[0] || (n[0] = (e) => (u.value = !0)) }, null, 8, ['value']),
                j(v, { show: ae(u), 'onUpdate:show': n[1] || (n[1] = (e) => (ne(u) ? (u.value = e) : null)), onConfirm: d }, null, 8, [
                  'show',
                ]),
                te('div', lt, [
                  te(
                    'span',
                    { class: re(['day-type', 'weekend' === ae(r) ? 'weekend' : 'workday']) },
                    le('weekend' === ae(r) ? '周末 - 节假日价格' : '工作日 - 标准价格'),
                    3,
                  ),
                ]),
              ]),
              te('div', st, [
                n[17] || (n[17] = te('label', null, '选择人数', -1)),
                te('div', ot, [
                  n[14] || (n[14] = te('span', { class: 'counter-label' }, '👨 成人', -1)),
                  te('div', it, [
                    te('button', { class: 'counter-btn', onClick: n[2] || (n[2] = (e) => m('adult', -1)) }, '−'),
                    te('span', ut, le(ae(t).adult.num), 1),
                    te('button', { class: 'counter-btn', onClick: n[3] || (n[3] = (e) => m('adult', 1)) }, '+'),
                  ]),
                ]),
                te('div', ct, [
                  n[15] || (n[15] = te('span', { class: 'counter-label' }, '👶 儿童', -1)),
                  te('div', dt, [
                    te('button', { class: 'counter-btn', onClick: n[4] || (n[4] = (e) => m('child', -1)) }, '−'),
                    te('span', mt, le(ae(t).child.num), 1),
                    te('button', { class: 'counter-btn', onClick: n[5] || (n[5] = (e) => m('child', 1)) }, '+'),
                  ]),
                ]),
                te('div', ft, [
                  n[16] || (n[16] = te('span', { class: 'counter-label' }, '👴 老人', -1)),
                  te('div', vt, [
                    te('button', { class: 'counter-btn', onClick: n[6] || (n[6] = (e) => m('senior', -1)) }, '−'),
                    te('span', pt, le(ae(t).senior.num), 1),
                    te('button', { class: 'counter-btn', onClick: n[7] || (n[7] = (e) => m('senior', 1)) }, '+'),
                  ]),
                ]),
              ]),
              te('div', ht, [
                n[18] || (n[18] = te('label', null, '折扣比例', -1)),
                te('div', gt, [
                  te('button', { class: 'counter-btn', onClick: n[8] || (n[8] = (e) => f('standard', -0.01)) }, '−'),
                  j(
                    p,
                    {
                      modelValue: ae(o).standard,
                      'onUpdate:modelValue': n[9] || (n[9] = (e) => (ae(o).standard = e)),
                      type: 'number',
                      label: '标准',
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                  te('button', { class: 'counter-btn', onClick: n[10] || (n[10] = (e) => f('standard', 0.01)) }, '+'),
                ]),
                te('div', yt, [
                  te('button', { class: 'counter-btn', onClick: n[11] || (n[11] = (e) => f('earlyBird', -0.01)) }, '−'),
                  j(
                    p,
                    {
                      modelValue: ae(o).earlyBird,
                      'onUpdate:modelValue': n[12] || (n[12] = (e) => (ae(o).earlyBird = e)),
                      type: 'number',
                      label: '早鸟',
                    },
                    null,
                    8,
                    ['modelValue'],
                  ),
                  te('button', { class: 'counter-btn', onClick: n[13] || (n[13] = (e) => f('earlyBird', 0.01)) }, '+'),
                ]),
              ]),
              te('div', null, [
                j(
                  g,
                  { size: 'small', type: 'primary', onClick: h },
                  { default: se(() => [...(n[19] || (n[19] = [K('复制出票信息', -1)]))]), _: 1 },
                ),
              ]),
              te('div', bt, [
                n[32] || (n[32] = te('h2', null, '💰 费用汇总-标准', -1)),
                te('div', Dt, [
                  n[21] || (n[21] = te('span', { class: 'summary-label' }, '总金额', -1)),
                  te('span', wt, [n[20] || (n[20] = K(' ¥', -1)), te('span', null, le(ae(l).amount), 1)]),
                ]),
                te('div', kt, [
                  n[23] || (n[23] = te('span', { class: 'summary-label' }, '官方票价', -1)),
                  te('span', St, [n[22] || (n[22] = K(' ¥', -1)), te('span', null, le(ae(l).originalAmount), 1)]),
                ]),
                te('div', xt, [
                  n[25] || (n[25] = te('span', { class: 'summary-label' }, '总佣金', -1)),
                  te('span', At, [n[24] || (n[24] = K(' ¥', -1)), te('span', null, le(ae(l).commission), 1)]),
                ]),
                te('div', $t, [
                  n[27] || (n[27] = te('span', { class: 'summary-label' }, '总成本-平台', -1)),
                  te('span', Mt, [n[26] || (n[26] = K(' ¥', -1)), te('span', null, le(ae(l).costPlatform), 1)]),
                ]),
                te('div', Ot, [
                  n[29] || (n[29] = te('span', { class: 'summary-label' }, '总成本', -1)),
                  te('span', _t, [n[28] || (n[28] = K(' ¥', -1)), te('span', null, le(ae(l).totalCost), 1)]),
                ]),
                te('div', Ct, [
                  n[31] || (n[31] = te('span', { class: 'summary-label' }, '总利润', -1)),
                  te('span', Nt, [n[30] || (n[30] = K(' ¥', -1)), te('span', null, le(ae(l).profit), 1)]),
                ]),
              ]),
              te('div', Tt, [
                n[45] || (n[45] = te('h2', null, '💰 费用汇总-早鸟', -1)),
                te('div', Et, [
                  n[34] || (n[34] = te('span', { class: 'summary-label' }, '总金额', -1)),
                  te('span', Ht, [n[33] || (n[33] = K(' ¥', -1)), te('span', null, le(ae(s).amount), 1)]),
                ]),
                te('div', Lt, [
                  n[36] || (n[36] = te('span', { class: 'summary-label' }, '官方票价', -1)),
                  te('span', It, [n[35] || (n[35] = K(' ¥', -1)), te('span', null, le(ae(s).originalAmount), 1)]),
                ]),
                te('div', Bt, [
                  n[38] || (n[38] = te('span', { class: 'summary-label' }, '总佣金', -1)),
                  te('span', Yt, [n[37] || (n[37] = K(' ¥', -1)), te('span', null, le(ae(s).commission), 1)]),
                ]),
                te('div', Ft, [
                  n[40] || (n[40] = te('span', { class: 'summary-label' }, '总成本-平台', -1)),
                  te('span', Pt, [n[39] || (n[39] = K(' ¥', -1)), te('span', null, le(ae(s).costPlatform), 1)]),
                ]),
                te('div', Vt, [
                  n[42] || (n[42] = te('span', { class: 'summary-label' }, '总成本', -1)),
                  te('span', Rt, [n[41] || (n[41] = K(' ¥', -1)), te('span', null, le(ae(s).totalCost), 1)]),
                ]),
                te('div', Gt, [
                  n[44] || (n[44] = te('span', { class: 'summary-label' }, '总利润', -1)),
                  te('span', Wt, [n[43] || (n[43] = K(' ¥', -1)), te('span', null, le(ae(s).profit), 1)]),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [['__scopeId', 'data-v-148ff489']],
  );
export { jt as default };
