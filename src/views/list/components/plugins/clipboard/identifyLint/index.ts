import type { ClipboardPlugin, IdentifyLintClipboardPluginParams } from '@/views/list/components/plugins/clipboard';
import dayjs from 'dayjs';

export const IdentifyLintStandard: ClipboardPlugin = {
  enabled: true,
  condition: () => true,
  action: (params) => {
    const { useDate, remainPersons } = params as IdentifyLintClipboardPluginParams;
    const writeTexts: string[] = [];
    remainPersons.forEach((item) => {
      writeTexts.push(`上海乐高乐园 ${dayjs(useDate).format('YYYY-MM-DD')} ${item.ticketType} 金额
${item.idType} ${item.name} ${item.id}`);
    });
    return writeTexts;
  },
  orderPriority: 10,
};

/**
 * 早鸟
 */
export const IdentifyLintEarly: ClipboardPlugin = {
  enabled: false,
  condition: () => true,
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
 * 两成人
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

export const IdentifyLintClipboardPlugins: ClipboardPlugin[] = [IdentifyLintStandard, IdentifyLintEarly, IdentifyLintSuperEarly]
  .filter((item) => item.enabled)
  .sort((a, b) => a.orderPriority - b.orderPriority);
