/* tslint:disable */
/* eslint-disable */
import { CashOperationDto } from '../models/cash-operation-dto';
export interface PageofCashOperationDto {
  content?: Array<CashOperationDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
