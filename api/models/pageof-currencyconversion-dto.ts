/* tslint:disable */
/* eslint-disable */
import { CurrencyconversionDto } from '../models/currencyconversion-dto';
export interface PageofCurrencyconversionDto {
  content?: Array<CurrencyconversionDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
