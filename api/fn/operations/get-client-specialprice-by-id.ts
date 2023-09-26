/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientSpecialpriceDto } from '../../models/client-specialprice-dto';

export interface GetClientSpecialpriceById$Params {

/**
 * The id that represent the ClientSpecialprice found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getClientSpecialpriceById(http: HttpClient, rootUrl: string, params: GetClientSpecialpriceById$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientSpecialpriceDto>> {
  const rb = new RequestBuilder(rootUrl, getClientSpecialpriceById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getClientSpecialpriceById.PATH = '/clientspecialprice/bm/v1/getby/{id}';
