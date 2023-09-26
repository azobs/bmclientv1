/* tslint:disable */
/* eslint-disable */
import { AddressDto } from '../models/address-dto';
export interface UserbmDto {
  id?: number;
  userAddress?: AddressDto;
  userCni?: string;
  userDob?: string;
  userLogin?: string;
  userName?: string;
  userPassword?: string;
  userPicture?: string;
  userRepassword?: string;
  userState?: 'Activated' | 'Deactivated' | 'Connected' | 'Disconnected';
  userSurname?: string;
}
