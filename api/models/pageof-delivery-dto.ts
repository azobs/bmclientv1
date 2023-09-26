/* tslint:disable */
/* eslint-disable */
import { DeliveryDto } from '../models/delivery-dto';
export interface PageofDeliveryDto {
  content?: Array<DeliveryDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
