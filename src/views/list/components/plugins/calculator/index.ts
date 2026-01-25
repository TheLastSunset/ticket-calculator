import type { PersonCount, ProductSummary } from '@/views/list/list';
import { IdentifyLintWorkdayTowAdult } from '@/views/list/components/plugins/clipboard/identifyLint';

export interface CalculatorPlugin {
  enabled: boolean;
  condition: (params: CalculatorPluginParams) => boolean;
  action: (params: CalculatorPluginParams) => string;
  orderPriority: number;
}

export type CalculatorPluginParams = {
  useDate: string;
  personCounts: Record<string, any>;
  counts: PersonCount[];
  summaries: Record<string, ProductSummary>;
  diffAmount: Record<string, any>;
};

export const CalculatorPlugins = [IdentifyLintWorkdayTowAdult]
  .filter((item) => item.enabled)
  .sort((a, b) => a.orderPriority - b.orderPriority);
