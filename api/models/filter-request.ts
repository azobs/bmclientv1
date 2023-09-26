/* tslint:disable */
/* eslint-disable */
import { Filter } from '../models/filter';
import { Orderby } from '../models/orderby';
import { Pagebm } from '../models/pagebm';

/**
 * Model used to precise search criteria and sort criteria
 */
export interface FilterRequest {
  filters?: Array<Filter>;
  logicOperator?: 'AND' | 'OR';
  orderby?: Array<Orderby>;
  page?: Pagebm;
}
