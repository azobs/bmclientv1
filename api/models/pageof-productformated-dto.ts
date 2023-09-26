/* tslint:disable */
/* eslint-disable */
import { ProductformatedDto } from '../models/productformated-dto';
export interface PageofProductformatedDto {
  content?: Array<ProductformatedDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
