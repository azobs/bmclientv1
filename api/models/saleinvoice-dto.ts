/* tslint:disable */
/* eslint-disable */

/**
 * A Sale invoice in the system
 */
export interface SaleinvoiceDto {
  id?: number;
  siCode?: string;
  siComment?: string;
  siExpectedamount?: number;
  siInvoicingdate?: string;
  siPaidamount?: number;
  siPaymentmethod?: 'Cash' | 'Momo' | 'Om';
  siPosId?: number;
  siTotalcolis?: number;
}
