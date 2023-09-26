/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofCashOperationDto } from '../../models/pageof-cash-operation-dto';

export interface GetCashOperationPage$Params {
      body?: FilterRequest
}

export function getCashOperationPage(http: HttpClient, rootUrl: string, params?: GetCashOperationPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCashOperationDto>> {
  const rb = new RequestBuilder(rootUrl, getCashOperationPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofCashOperationDto>;
    })
  );
}

getCashOperationPage.PATH = '/account/bm/v1/cashoperation/page';
