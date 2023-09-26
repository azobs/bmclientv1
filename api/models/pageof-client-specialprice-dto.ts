/* tslint:disable */
/* eslint-disable */
import { ClientSpecialpriceDto } from '../models/client-specialprice-dto';
export interface PageofClientSpecialpriceDto {
  content?: Array<ClientSpecialpriceDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
