/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddressDto } from '../../models/address-dto';

export interface UpdateAddress$Params {
      body?: AddressDto
}

export function updateAddress(http: HttpClient, rootUrl: string, params?: UpdateAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
  const rb = new RequestBuilder(rootUrl, updateAddress.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

updateAddress.PATH = '/address/bm/v1/update';
