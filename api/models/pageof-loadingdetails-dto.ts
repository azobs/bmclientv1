/* tslint:disable */
/* eslint-disable */
import { LoadingdetailsDto } from '../models/loadingdetails-dto';
export interface PageofLoadingdetailsDto {
  content?: Array<LoadingdetailsDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
