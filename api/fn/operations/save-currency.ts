/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyDto } from '../../models/currency-dto';

export interface SaveCurrency$Params {
      body?: CurrencyDto
}

export function saveCurrency(http: HttpClient, rootUrl: string, params?: SaveCurrency$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyDto>> {
  const rb = new RequestBuilder(rootUrl, saveCurrency.PATH, 'post');
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

saveCurrency.PATH = '/currency/bm/v1/create';
