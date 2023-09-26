/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofPackagingDto } from '../../models/pageof-packaging-dto';

export interface GetPackagingPage$Params {
      body?: FilterRequest
}

export function getPackagingPage(http: HttpClient, rootUrl: string, params?: GetPackagingPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofPackagingDto>> {
  const rb = new RequestBuilder(rootUrl, getPackagingPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofPackagingDto>;
    })
  );
}

getPackagingPage.PATH = '/packaging/bm/v1/page';
