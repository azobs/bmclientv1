/* tslint:disable */
/* eslint-disable */
import { PermissionDto } from '../models/permission-dto';
export interface UserbmRoleDto {
  id?: number;
  permissions?: Array<PermissionDto>;
  required?: any;
  roleId?: number;
  userbmId?: number;
}
