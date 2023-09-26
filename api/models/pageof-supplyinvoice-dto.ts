/* tslint:disable */
/* eslint-disable */
import { SupplyinvoiceDto } from '../models/supplyinvoice-dto';
export interface PageofSupplyinvoiceDto {
  content?: Array<SupplyinvoiceDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
