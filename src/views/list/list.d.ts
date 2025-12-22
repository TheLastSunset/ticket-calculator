import type { Numeric } from 'vant/es/utils';

export type TicketInfo = {
  name: string;
  id: string;
  idType?: Numeric;
  idValid?: string;
  ticketType?: string;
};
