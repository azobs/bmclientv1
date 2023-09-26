/* tslint:disable */
/* eslint-disable */
import { AddressDto } from '../models/address-dto';
import { CurrencyDto } from '../models/currency-dto';

/**
 * A pointofsale object of the system
 */
export interface PointofsaleDto {
  id?: number;
  posAcronym?: string;
  posAddress?: AddressDto;
  posBalance?: number;
  posCurrency?: CurrencyDto;
  posDescription?: string;
  posEnterpriseId?: number;
  posName?: string;
}
