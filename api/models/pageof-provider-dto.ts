/* tslint:disable */
/* eslint-disable */
import { ProviderDto } from '../models/provider-dto';
export interface PageofProviderDto {
  content?: Array<ProviderDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
