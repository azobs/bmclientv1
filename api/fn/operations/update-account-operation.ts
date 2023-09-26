/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountOperationDto } from '../../models/account-operation-dto';

export interface UpdateAccountOperation$Params {
      body?: AccountOperationDto
}

export function updateAccountOperation(http: HttpClient, rootUrl: string, params?: UpdateAccountOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountOperationDto>> {
  const rb = new RequestBuilder(rootUrl, updateAccountOperation.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccountOperationDto>;
    })
  );
}

updateAccountOperation.PATH = '/account/bm/v1/operation/update';
