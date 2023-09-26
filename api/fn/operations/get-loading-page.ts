/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofLoadingDto } from '../../models/pageof-loading-dto';

export interface GetLoadingPage$Params {
      body?: FilterRequest
}

export function getLoadingPage(http: HttpClient, rootUrl: string, params?: GetLoadingPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofLoadingDto>> {
  const rb = new RequestBuilder(rootUrl, getLoadingPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofLoadingDto>;
    })
  );
}

getLoadingPage.PATH = '/loading/bm/v1/page';
