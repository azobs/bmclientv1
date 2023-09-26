/* tslint:disable */
/* eslint-disable */

/**
 * A Sale in the system
 */
export interface SaleDto {
  id?: number;
  saleArticleId?: number;
  saleCommandId?: number;
  saleComment?: string;
  saleFinalprice?: number;
  saleQuantity?: number;
  saleType?: 'Details' | 'Permutation' | 'Semiwhole' | 'Whole';
}
