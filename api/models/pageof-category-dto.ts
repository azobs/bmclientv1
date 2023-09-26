/* tslint:disable */
/* eslint-disable */
import { CategoryDto } from '../models/category-dto';
export interface PageofCategoryDto {
  content?: Array<CategoryDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
