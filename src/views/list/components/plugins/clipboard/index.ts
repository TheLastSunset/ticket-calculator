import type { PersonCount, ProductInfo, ProductSummary } from '@/views/list/list';

export interface ClipboardPlugin {
  enabled: boolean;
  condition: (params: CalculatorClipboardPluginParams | IdentifyLintClipboardPluginParams) => boolean;
  action: (params: CalculatorClipboardPluginParams | IdentifyLintClipboardPluginParams) => string | string[];
  orderPriority: number;
}

export type CalculatorClipboardPluginParams = {
  useDate: string;
  personCounts: Record<string, any>;
  counts: PersonCount[];
  summaries: Record<string, ProductSummary>;
  diffAmount: Record<string, any>;
};

export type IdentifyLintClipboardPluginParams = {
  useDate: string;
  remainPersons: ProductInfo[];
};
