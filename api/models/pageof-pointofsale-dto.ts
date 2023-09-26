/* tslint:disable */
/* eslint-disable */
import { PointofsaleDto } from '../models/pointofsale-dto';
export interface PageofPointofsaleDto {
  content?: Array<PointofsaleDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
