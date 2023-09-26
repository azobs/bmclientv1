/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyconversionDto } from '../../models/currencyconversion-dto';

export interface GetCurrencyconversionById$Params {

/**
 * The id that represent the Currencyconversion found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getCurrencyconversionById(http: HttpClient, rootUrl: string, params: GetCurrencyconversionById$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyconversionDto>> {
  const rb = new RequestBuilder(rootUrl, getCurrencyconversionById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getCurrencyconversionById.PATH = '/currency/bm/v1/conversion/getby/{id}';
