/* tslint:disable */
/* eslint-disable */
import { AccountOperationDto } from '../models/account-operation-dto';
export interface PageofAccountOperationDto {
  content?: Array<AccountOperationDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
