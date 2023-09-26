/* tslint:disable */
/* eslint-disable */
import { BackinDto } from '../models/backin-dto';
export interface PageofBackinDto {
  content?: Array<BackinDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
