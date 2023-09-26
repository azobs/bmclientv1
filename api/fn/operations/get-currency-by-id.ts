/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyDto } from '../../models/currency-dto';

export interface GetCurrencyById$Params {

/**
 * The id that represent the Currency found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getCurrencyById(http: HttpClient, rootUrl: string, params: GetCurrencyById$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyDto>> {
  const rb = new RequestBuilder(rootUrl, getCurrencyById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getCurrencyById.PATH = '/currency/bm/v1/getby/{id}';
