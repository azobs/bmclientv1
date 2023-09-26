/* tslint:disable */
/* eslint-disable */
import { SaleinvoiceDto } from '../models/saleinvoice-dto';
export interface PageofSaleinvoiceDto {
  content?: Array<SaleinvoiceDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
