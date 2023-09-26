/* tslint:disable */
/* eslint-disable */
import { CurrencyDto } from '../models/currency-dto';
export interface PageofCurrencyDto {
  content?: Array<CurrencyDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
