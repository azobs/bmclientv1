/* tslint:disable */
/* eslint-disable */
import { OperationDto } from '../models/operation-dto';
export interface PageofOperationDto {
  content?: Array<OperationDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
