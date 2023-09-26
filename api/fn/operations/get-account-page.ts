/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofAccountDto } from '../../models/pageof-account-dto';

export interface GetAccountPage$Params {
      body?: FilterRequest
}

export function getAccountPage(http: HttpClient, rootUrl: string, params?: GetAccountPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofAccountDto>> {
  const rb = new RequestBuilder(rootUrl, getAccountPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofAccountDto>;
    })
  );
}

getAccountPage.PATH = '/account/bm/v1/page';
