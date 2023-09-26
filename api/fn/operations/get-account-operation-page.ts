/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofAccountOperationDto } from '../../models/pageof-account-operation-dto';

export interface GetAccountOperationPage$Params {
      body?: FilterRequest
}

export function getAccountOperationPage(http: HttpClient, rootUrl: string, params?: GetAccountOperationPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofAccountOperationDto>> {
  const rb = new RequestBuilder(rootUrl, getAccountOperationPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofAccountOperationDto>;
    })
  );
}

getAccountOperationPage.PATH = '/account/bm/v1/operation/page';
