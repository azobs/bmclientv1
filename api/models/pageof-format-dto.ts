/* tslint:disable */
/* eslint-disable */
import { FormatDto } from '../models/format-dto';
export interface PageofFormatDto {
  content?: Array<FormatDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
