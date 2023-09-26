/* tslint:disable */
/* eslint-disable */

/**
 * Different filter used to filter the userbm result list
 */
export interface Filter {
  filterColumn?: string;
  filterOperator?: 'EQUAL' | 'LIKE' | 'GREATER THAN' | 'GREATER OR EQUAL' | 'LOWER THAN' | 'LOWER OR EQUAL' | 'BETWEEN';
  filterValue?: string;
}
