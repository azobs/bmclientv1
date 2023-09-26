/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofCurrencyconversionDto } from '../../models/pageof-currencyconversion-dto';

export interface GetCurrencyconversionPage$Params {
      body?: FilterRequest
}

export function getCurrencyconversionPage(http: HttpClient, rootUrl: string, params?: GetCurrencyconversionPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCurrencyconversionDto>> {
  const rb = new RequestBuilder(rootUrl, getCurrencyconversionPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofCurrencyconversionDto>;
    })
  );
}

getCurrencyconversionPage.PATH = '/currency/bm/v1/conversion/page';
