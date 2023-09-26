/* tslint:disable */
/* eslint-disable */
import { ProductDto } from '../models/product-dto';
export interface PageofProductDto {
  content?: Array<ProductDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
