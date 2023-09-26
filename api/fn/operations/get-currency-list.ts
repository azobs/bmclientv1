/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyDto } from '../../models/currency-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetCurrencyList$Params {
      body?: FilterRequest
}

export function getCurrencyList(http: HttpClient, rootUrl: string, params?: GetCurrencyList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CurrencyDto>>> {
  const rb = new RequestBuilder(rootUrl, getCurrencyList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CurrencyDto>>;
    })
  );
}

getCurrencyList.PATH = '/currency/bm/v1/list';
