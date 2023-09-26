/* tslint:disable */
/* eslint-disable */
import { AccountDto } from '../models/account-dto';
export interface PageofAccountDto {
  content?: Array<AccountDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
