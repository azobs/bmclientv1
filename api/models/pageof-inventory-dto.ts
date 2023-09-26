/* tslint:disable */
/* eslint-disable */
import { InventoryDto } from '../models/inventory-dto';
export interface PageofInventoryDto {
  content?: Array<InventoryDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
