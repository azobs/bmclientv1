/* tslint:disable */
/* eslint-disable */
import { UnitDto } from '../models/unit-dto';
export interface PageofUnitDto {
  content?: Array<UnitDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
