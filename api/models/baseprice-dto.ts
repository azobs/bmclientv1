/* tslint:disable */
/* eslint-disable */
import { CurrencyDto } from '../models/currency-dto';

/**
 * A product formated in the system
 */
export interface BasepriceDto {
  bpCode?: string;
  bpCurrency?: CurrencyDto;
  bpDetailsprice?: number;
  bpPosId?: number;
  bpPrecompte?: number;
  bpPurchaseprice?: number;
  bpRistourne?: number;
  bpSemiwholeprice?: number;
  bpWholeprice?: number;
  id?: number;
}
