/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofProductformatedDto } from '../../models/pageof-productformated-dto';

export interface GetProductformatedPage$Params {
      body?: FilterRequest
}

export function getProductformatedPage(http: HttpClient, rootUrl: string, params?: GetProductformatedPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofProductformatedDto>> {
  const rb = new RequestBuilder(rootUrl, getProductformatedPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofProductformatedDto>;
    })
  );
}

getProductformatedPage.PATH = '/pf/bm/v1/page';
