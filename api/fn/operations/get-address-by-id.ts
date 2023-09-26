/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddressDto } from '../../models/address-dto';

export interface GetAddressById$Params {

/**
 * The id that represent the Address found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getAddressById(http: HttpClient, rootUrl: string, params: GetAddressById$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
  const rb = new RequestBuilder(rootUrl, getAddressById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getAddressById.PATH = '/address/bm/v1/getby/{id}';
