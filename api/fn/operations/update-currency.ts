/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyDto } from '../../models/currency-dto';

export interface UpdateCurrency$Params {
      body?: CurrencyDto
}

export function updateCurrency(http: HttpClient, rootUrl: string, params?: UpdateCurrency$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyDto>> {
  const rb = new RequestBuilder(rootUrl, updateCurrency.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrencyDto>;
    })
  );
}

updateCurrency.PATH = '/currency/bm/v1/update';
