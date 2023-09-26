/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofPermissionDto } from '../../models/pageof-permission-dto';

export interface GetPermissionPage$Params {
      body?: FilterRequest
}

export function getPermissionPage(http: HttpClient, rootUrl: string, params?: GetPermissionPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofPermissionDto>> {
  const rb = new RequestBuilder(rootUrl, getPermissionPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofPermissionDto>;
    })
  );
}

getPermissionPage.PATH = '/auth/bm/v1/permission/page';
