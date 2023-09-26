/* tslint:disable */
/* eslint-disable */
import { LoadingDto } from '../models/loading-dto';
export interface PageofLoadingDto {
  content?: Array<LoadingDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
