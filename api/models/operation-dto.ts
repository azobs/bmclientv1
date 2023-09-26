/* tslint:disable */
/* eslint-disable */

/**
 * An operation in the system
 */
export interface OperationDto {
  id?: number;
  opDate?: string;
  opDescription?: string;
  opObject?: string;
  opType?: 'Credit' | 'Withdrawal' | 'Change' | 'Others';
}
