/* tslint:disable */
/* eslint-disable */
import { InventorylineDto } from '../models/inventoryline-dto';
export interface PageofInventorylineDto {
  content?: Array<InventorylineDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
