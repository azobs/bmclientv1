/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddressDto } from '../../models/address-dto';

export interface GetAddressByEmail$Params {

/**
 * The email that represent the Address found. It's compulsory if not the operation can't proceed
 */
  email: string;
}

export function getAddressByEmail(http: HttpClient, rootUrl: string, params: GetAddressByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
  const rb = new RequestBuilder(rootUrl, getAddressByEmail.PATH, 'get');
  if (params) {
    rb.path('email', params.email, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AddressDto>;
    })
  );
}

getAddressByEmail.PATH = '/address/bm/v1/getby/{email}';
