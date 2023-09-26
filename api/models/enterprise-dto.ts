/* tslint:disable */
/* eslint-disable */

/**
 * An enterprise which can contain multiple pointofsale all manage in the system
 */
export interface EnterpriseDto {
  entAcronym?: string;
  entDescription?: string;
  entLogo?: string;
  entName?: string;
  entNiu?: string;
  entRegime?: 'IL' | 'SI' | 'SARL' | 'SA' | 'GRP';
  entSocialreason?: string;
  id?: number;
}
