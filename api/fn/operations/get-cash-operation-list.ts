/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CashOperationDto } from '../../models/cash-operation-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetCashOperationList$Params {
      body?: FilterRequest
}

export function getCashOperationList(http: HttpClient, rootUrl: string, params?: GetCashOperationList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CashOperationDto>>> {
  const rb = new RequestBuilder(rootUrl, getCashOperationList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CashOperationDto>>;
    })
  );
}

getCashOperationList.PATH = '/account/bm/v1/cashoperation/list';
