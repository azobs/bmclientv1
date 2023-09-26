/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountDto } from '../../models/account-dto';

export interface UpdateAccount$Params {
      body?: AccountDto
}

export function updateAccount(http: HttpClient, rootUrl: string, params?: UpdateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountDto>> {
  const rb = new RequestBuilder(rootUrl, updateAccount.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccountDto>;
    })
  );
}

updateAccount.PATH = '/account/bm/v1/update';
