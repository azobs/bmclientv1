/* tslint:disable */
/* eslint-disable */
import { SaleDto } from '../models/sale-dto';
export interface PageofSaleDto {
  content?: Array<SaleDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
