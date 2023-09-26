/* tslint:disable */
/* eslint-disable */
import { RoleDto } from '../models/role-dto';
export interface PageofRoleDto {
  content?: Array<RoleDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
