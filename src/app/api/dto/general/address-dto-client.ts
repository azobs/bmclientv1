/**
 * Address of a user, an enterprise or a shop
 */
export class AddressDtoClient {
  country?: string;
  email?: string;
  id?: number;

  /**
   * The path of the resource or the image that represent the localisatiuon plan
   */
  localisation?: string;
  numtel1?: string;
  numtel2?: string;
  numtel3?: string;
  quarter?: string;
  town?: string;
}
