/* tslint:disable */
/* eslint-disable */

/**
 * An arrival in the system
 */
export interface ArrivalDto {
  arrivalArticleId?: number;
  arrivalDate?: string;
  arrivalInvoiceId?: number;
  arrivalNature?: 'Standard' | 'Divers' | 'Cash' | 'Cover' | 'Damage';
  arrivalType?: 'Standard' | 'Divers' | 'Cash' | 'Cover' | 'Damage';
  arrivalUnitprice?: number;
  deliveryQuantity?: number;
  id?: number;
}
