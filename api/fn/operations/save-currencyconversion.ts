/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyconversionDto } from '../../models/currencyconversion-dto';

export interface SaveCurrencyconversion$Params {
      body?: CurrencyconversionDto
}

export function saveCurrencyconversion(http: HttpClient, rootUrl: string, params?: SaveCurrencyconversion$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyconversionDto>> {
  const rb = new RequestBuilder(rootUrl, saveCurrencyconversion.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrencyconversionDto>;
    })
  );
}

saveCurrencyconversion.PATH = '/currency/bm/v1/conversion/create';
