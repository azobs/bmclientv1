/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientSpecialpriceDto } from '../../models/client-specialprice-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetClientSpecialpriceList$Params {
      body?: FilterRequest
}

export function getClientSpecialpriceList(http: HttpClient, rootUrl: string, params?: GetClientSpecialpriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientSpecialpriceDto>>> {
  const rb = new RequestBuilder(rootUrl, getClientSpecialpriceList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ClientSpecialpriceDto>>;
    })
  );
}

getClientSpecialpriceList.PATH = '/clientspecialprice/bm/v1/list';
