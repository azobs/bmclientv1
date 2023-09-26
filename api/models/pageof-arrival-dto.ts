/* tslint:disable */
/* eslint-disable */
import { ArrivalDto } from '../models/arrival-dto';
export interface PageofArrivalDto {
  content?: Array<ArrivalDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
