/* tslint:disable */
/* eslint-disable */

/**
 * A Command in the system
 */
export interface CommandDto {
  cmdClientId?: number;
  cmdCode?: string;
  cmdComment?: string;
  cmdDate?: string;
  cmdDeliveryId?: number;
  cmdInvoiceId?: number;
  cmdLoadingId?: number;
  cmdNature?: 'InEditing' | 'Edited' | 'InDelivery' | 'Delivery' | 'Cash' | 'Cover' | 'Damage';
  cmdPosId?: number;
  cmdSalerId?: number;
  cmdState?: 'InEditing' | 'Edited' | 'InDelivery' | 'Delivery' | 'Cash' | 'Cover' | 'Damage';
  id?: number;
}
