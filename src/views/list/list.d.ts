import type { Numeric } from 'vant/es/utils';

export type TicketInfo = {
  name: string;
  id: string;
  idType?: Numeric;
  idValid?: boolean;
  ticketType?: string;
};

export type PersonCount = {
  label: string;
  category: string;
  num: number;
  simpleText: string;
  fullText: string;
  visible: boolean;
  details?: PersonCountDetails[];
};

export type PersonCountDetails = {
  category: string;
  num: number;
};

export type TicketSummary = {
  amount: string;
  originalAmount: string;
  costPlatform: string;
  commission: string;
  totalCost: string;
  profit: string;
};
