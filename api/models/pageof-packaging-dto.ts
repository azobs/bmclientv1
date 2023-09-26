/* tslint:disable */
/* eslint-disable */
import { PackagingDto } from '../models/packaging-dto';
export interface PageofPackagingDto {
  content?: Array<PackagingDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
