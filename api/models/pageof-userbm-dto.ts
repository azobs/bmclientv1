/* tslint:disable */
/* eslint-disable */
import { UserbmDto } from '../models/userbm-dto';
export interface PageofUserbmDto {
  content?: Array<UserbmDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
