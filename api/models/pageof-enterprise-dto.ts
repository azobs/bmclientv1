/* tslint:disable */
/* eslint-disable */
import { EnterpriseDto } from '../models/enterprise-dto';
export interface PageofEnterpriseDto {
  content?: Array<EnterpriseDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
