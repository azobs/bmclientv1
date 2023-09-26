/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
export interface PageofArticleDto {
  content?: Array<ArticleDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
