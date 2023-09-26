/* tslint:disable */
/* eslint-disable */
import { BackindetailsDto } from '../models/backindetails-dto';
export interface PageofBackindetailsDto {
  content?: Array<BackindetailsDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
