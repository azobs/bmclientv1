/* tslint:disable */
/* eslint-disable */

/**
 * A Supply invoice in the system
 */
export interface SupplyinvoiceDto {
  id?: number;
  siCode?: string;
  siComment?: string;
  siDeliverydate?: string;
  siExpectedamount?: number;
  siInvoicingdate?: string;
  siPaidamount?: number;
  siPaymentmethod?: 'Cash' | 'Momo' | 'Om';
  siPicture?: string;
  siPosId?: number;
  siProviderId?: number;
  siTotalcolis?: number;
}
