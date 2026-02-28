import type { ClipboardPlugin, IdentifyLintClipboardPluginParams } from '@/views/list/components/plugins/clipboard';
import dayjs from 'dayjs';

const orderRef: Record<string, number> = {
  成人: 1,
  儿童: 2,
  老人: 3,
};
const compareFn = (key1: string, key2: string) => {
  return (orderRef[key1] ?? 0) - (orderRef[key2] ?? 0);
};

export const IdentifyLintOrder: ClipboardPlugin = {
  enabled: true,
  condition: () => true,
  action: (params) => {
    const { order } = params as IdentifyLintClipboardPluginParams;
    return [`订单 XY${order.id} CNY ${order.amount ?? 0}`];
  },
  orderPriority: -1000,
};

export const IdentifyLintStandard: ClipboardPlugin = {
  enabled: true,
  condition: () => true,
  action: (params) => {
    const { useDate, remainPersons } = params as IdentifyLintClipboardPluginParams;
    const playDate = dayjs(useDate).format('YYYY-MM-DD');
    const writeTexts: string[] = [];
    Object.keys(remainPersons)
      .sort(compareFn)
      .forEach((key) => {
        const persons = remainPersons[key] ?? [];
        persons.forEach((item) => {
          writeTexts.push(`上海乐高乐园 ${playDate} ${item.ticketType} 金额 CNY 
${item.idType} ${item.ticketType} ${item.name} ${item.id}`);
        });
      });
    return writeTexts;
  },
  orderPriority: 1000,
};

/**
 * 成人-早鸟
 */
export const IdentifyLintEarlyAdult: ClipboardPlugin = {
  enabled: false,
  condition: ({ useDate }) => {
    return dayjs(useDate).diff(new Date(), 'd') >= 9;
  },
  action: () => {
    const writeTexts: string[] = [];
    return writeTexts;
  },
  orderPriority: 50,
};

/**
 * 超级早鸟
 */
export const IdentifyLintSuperEarly: ClipboardPlugin = {
  enabled: false,
  condition: () => false,
  action: () => {
    const writeTexts: string[] = [];
    return writeTexts;
  },
  orderPriority: 60,
};

/**
 * 两大
 */
// export const IdentifyLintWorkdayTowAdult: ClipboardPlugin = {
//   enabled: false,
//   condition: ({ useDate }) => {
//     return dayjs(useDate).month() == 0 && !isWeekend(useDate);
//   },
//   action: (params) => {
//     const { useDate, remainPersons } = params as IdentifyLintClipboardPluginParams;
//     const writeTexts: string[] = [];
//     const result = Object.groupBy(remainPersons, (item) => item.ticketType as string);
//     if (result['成人'] !== undefined && result['成人'].length >= 2) {
//       const remainPersonNumber = result['成人'].length % 2;
//       const towAdultNumber = (result['成人'].length - remainPersonNumber) / 2;
//       // remainPersons.
//     }
//     return writeTexts;
//   },
//   orderPriority: 100,
// };

export const IdentifyLintClipboardPlugins: ClipboardPlugin[] = [
  IdentifyLintOrder,
  IdentifyLintStandard,
  IdentifyLintEarlyAdult,
  IdentifyLintSuperEarly,
]
  .filter((item) => item.enabled)
  .sort((a, b) => a.orderPriority - b.orderPriority);
