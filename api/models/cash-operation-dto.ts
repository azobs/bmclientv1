/* tslint:disable */
/* eslint-disable */

/**
 * A cash account operation in the system it concerns only operation on cash, momo or OM
 */
export interface CashOperationDto {
  amountDestination?: 'CASH_DESK' | 'OM_ACCOUNT' | 'MOMO_ACCOUNT';
  amountSource?: 'CASH_DESK' | 'OM_ACCOUNT' | 'MOMO_ACCOUNT';
  amountinMvt?: number;
  clientConcernedId?: number;
  id?: number;
  operationId?: number;
  posConcernedId?: number;
  providerConcernedId?: number;
}
