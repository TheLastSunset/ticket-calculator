import dayjs from 'dayjs';
import type { CalculatorClipboardPluginParams, ClipboardPlugin } from '@/views/list/components/plugins/clipboard';
import { isWeekend } from '@/utils/common.ts';
import type { ProductSummary } from '@/views/list/types';

const amountCalculate = (amount: string, diffAmount: number) => {
  return Math.ceil(Number.parseFloat(amount) / 5) * 5 + Number.parseFloat(diffAmount + '');
};

const formatSimpleText = (personCounts: Record<string, any>, counts: Record<string, any>, type: string) => {
  return `${
    personCounts[type].num
      ? personCounts[type].num +
        counts.find((item: any) => {
          return item.category === type;
        }).simpleText
      : ''
  }`;
};

export const CalculatorStandard: ClipboardPlugin = {
  enabled: true,
  condition: () => true,
  action: (params) => {
    const { useDate, personCounts, counts, summaries, diffAmount } = params as CalculatorClipboardPluginParams;
    const diffDays = dayjs(useDate).diff(new Date(), 'd');

    let writeText = `${useDate} ${dayjs(useDate).format('dddd')} ${formatSimpleText(personCounts, counts, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT')}${formatSimpleText(personCounts, counts, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_CHILD')}${formatSimpleText(personCounts, counts, 'SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR')}`;
    const plan = {
      price: 99999999,
      description: ``,
    };
    for (const summariesKey in summaries) {
      const summary = summaries[summariesKey] as ProductSummary;

      const finalAmount: number = amountCalculate(summary.amount, diffAmount[summariesKey]);
      if (summary.book.earlyDaysNum <= diffDays && plan.price > finalAmount) {
        plan.price = finalAmount;
        plan.description = summary.book.description;
      }
    }
    writeText += `
报价：${plan.price}
${plan.description}`;
    return writeText;
  },
  orderPriority: -1000,
};

export const CalculatorSingleAdultOrSenior: ClipboardPlugin = {
  enabled: false,
  condition: (params) => {
    const { useDate, personCounts } = params as CalculatorClipboardPluginParams;
    return (
      (isWeekend(useDate) &&
        personCounts.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + personCounts.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 1) ||
      (!isWeekend(useDate) &&
        personCounts.SHANGHAI_LEGOLAND_ONE_DAY_ONE_ADULT.num + personCounts.SHANGHAI_LEGOLAND_ONE_DAY_ONE_SENIOR.num > 2)
    );
  },
  action: () => {
    // 单成人或老人，无儿童
    return `

不升级年卡，您可以自己买官方的半价一小
工作日 150，节假日 175`;
  },
  orderPriority: 100,
};

export const CalculatorClipboardPlugins: ClipboardPlugin[] = [CalculatorStandard, CalculatorSingleAdultOrSenior]
  .filter((item) => item.enabled)
  .sort((a, b) => a.orderPriority - b.orderPriority);
