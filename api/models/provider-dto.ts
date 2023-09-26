/* tslint:disable */
/* eslint-disable */
import { AddressDto } from '../models/address-dto';

/**
 * A provider in the system
 */
export interface ProviderDto {
  id?: number;
  providerAcronym?: string;
  providerAddress?: AddressDto;
  providerBalance?: number;
  providerDescription?: string;
  providerName?: string;
  providerPosId?: number;
}
