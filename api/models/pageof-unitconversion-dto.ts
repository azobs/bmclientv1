/* tslint:disable */
/* eslint-disable */
import { UnitconversionDto } from '../models/unitconversion-dto';
export interface PageofUnitconversionDto {
  content?: Array<UnitconversionDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
