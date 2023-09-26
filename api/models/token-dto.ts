/* tslint:disable */
/* eslint-disable */

/**
 * A token to open a session on the system
 */
export interface TokenDto {
  expired?: boolean;
  id?: number;
  required?: any;
  revoked?: boolean;
  tokenType?: 'Bearer' | 'Jwt';
  tokenValue?: string;
  userbmId?: number;
}
