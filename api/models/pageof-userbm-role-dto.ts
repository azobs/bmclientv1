/* tslint:disable */
/* eslint-disable */
import { UserbmRoleDto } from '../models/userbm-role-dto';
export interface PageofUserbmRoleDto {
  content?: Array<UserbmRoleDto>;
  currentPage?: number;
  id?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
