/* tslint:disable */
/* eslint-disable */

/**
 * An Inventory line in the system
 */
export interface InventorylineDto {
  id?: number;
  inventoryId?: number;
  invlineArticleId?: number;
  invlineComment?: string;
  logicqteinStock?: number;
  realqteinStock?: number;
}
