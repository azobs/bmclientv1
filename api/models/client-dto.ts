/* tslint:disable */
/* eslint-disable */
import { AddressDto } from '../models/address-dto';

/**
 * A client in the system
 */
export interface ClientDto {
  clientAddress?: AddressDto;
  clientBalance?: number;
  clientCni?: string;
  clientName?: string;
  clientOthername?: string;
  clientPosId?: number;
  id?: number;
}
