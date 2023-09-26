/* tslint:disable */
/* eslint-disable */
import { DeliverydetailsDto } from '../models/deliverydetails-dto';
export interface PageofDeliverydetailsDto {
  content?: Array<DeliverydetailsDto>;
  currentPage?: number;
  pageSize?: number;
  totalElements?: number;
  totalPages?: number;
}
