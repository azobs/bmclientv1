/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountOperationDto } from '../../models/account-operation-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetAccountOperationList$Params {
      body?: FilterRequest
}

export function getAccountOperationList(http: HttpClient, rootUrl: string, params?: GetAccountOperationList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountOperationDto>>> {
  const rb = new RequestBuilder(rootUrl, getAccountOperationList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AccountOperationDto>>;
    })
  );
}

getAccountOperationList.PATH = '/account/bm/v1/operation/list';
