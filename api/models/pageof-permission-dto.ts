/* tslint:disable */
/* eslint-disable */
import { PermissionDto } from '../models/permission-dto';
export interface PageofPermissionDto {
  content?: Array<PermissionDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
