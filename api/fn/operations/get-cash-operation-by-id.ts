/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CashOperationDto } from '../../models/cash-operation-dto';

export interface GetCashOperationById$Params {

/**
 * The id that represent the CashOperation found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getCashOperationById(http: HttpClient, rootUrl: string, params: GetCashOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<CashOperationDto>> {
  const rb = new RequestBuilder(rootUrl, getCashOperationById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CashOperationDto>;
    })
  );
}

getCashOperationById.PATH = '/account/bm/v1/cashoperation/getby/{id}';
