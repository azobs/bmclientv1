/* tslint:disable */
/* eslint-disable */
import { PackagingdetailsDto } from '../models/packagingdetails-dto';
export interface PageofPackagingdetailsDto {
  content?: Array<PackagingdetailsDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
