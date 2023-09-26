/* tslint:disable */
/* eslint-disable */
import { ClientDto } from '../models/client-dto';
export interface PageofClientDto {
  content?: Array<ClientDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
