/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofCurrencyDto } from '../../models/pageof-currency-dto';

export interface GetCurrencyPage$Params {
      body?: FilterRequest
}

export function getCurrencyPage(http: HttpClient, rootUrl: string, params?: GetCurrencyPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCurrencyDto>> {
  const rb = new RequestBuilder(rootUrl, getCurrencyPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofCurrencyDto>;
    })
  );
}

getCurrencyPage.PATH = '/currency/bm/v1/page';
