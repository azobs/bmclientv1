import {AddressDtoClient} from "../general/address-dto-client";


export class UserbmDtoClient {
  id?: number;
  userAddress?: AddressDtoClient;
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
