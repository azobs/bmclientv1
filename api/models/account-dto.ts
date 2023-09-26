/* tslint:disable */
/* eslint-disable */

/**
 * An account for pointofsale, provider or a client in the system
 */
export interface AccountDto {
  accountArticleId?: number;
  accountClientId?: number;
  accountPackagingId?: number;
  accountPosId?: number;
  accountProviderId?: number;
  accountType?: 'Client' | 'Pos' | 'Provider';
  coverNumber?: number;
  damageNumber?: number;
  id?: number;
  packageNumber?: number;
}
