/* tslint:disable */
/* eslint-disable */
import { CommandDto } from '../models/command-dto';
export interface PageofCommandDto {
  content?: Array<CommandDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
