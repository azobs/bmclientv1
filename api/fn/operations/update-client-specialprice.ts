/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientSpecialpriceDto } from '../../models/client-specialprice-dto';

export interface UpdateClientSpecialprice$Params {
      body?: ClientSpecialpriceDto
}

export function updateClientSpecialprice(http: HttpClient, rootUrl: string, params?: UpdateClientSpecialprice$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientSpecialpriceDto>> {
  const rb = new RequestBuilder(rootUrl, updateClientSpecialprice.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ClientSpecialpriceDto>;
    })
  );
}

updateClientSpecialprice.PATH = '/clientspecialprice/bm/v1/update';
