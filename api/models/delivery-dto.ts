/* tslint:disable */
/* eslint-disable */

/**
 * A Delivery in the system which can contain multiple command
 */
export interface DeliveryDto {
  deliveryCode?: string;
  deliveryComment?: string;
  deliveryDate?: string;
  deliveryDeliverId?: number;
  deliveryPosId?: number;
  deliveryState?: 'InEditing' | 'Edited' | 'Delivery';
  id?: number;
}
