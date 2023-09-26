/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofUserbmDto } from '../../models/pageof-userbm-dto';

export interface GetUserbmPage$Params {
      body?: FilterRequest
}

export function getUserbmPage(http: HttpClient, rootUrl: string, params?: GetUserbmPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofUserbmDto>> {
  const rb = new RequestBuilder(rootUrl, getUserbmPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofUserbmDto>;
    })
  );
}

getUserbmPage.PATH = '/userbm/bm/v1/page';
