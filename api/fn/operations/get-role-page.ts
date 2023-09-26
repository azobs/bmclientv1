/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofRoleDto } from '../../models/pageof-role-dto';

export interface GetRolePage$Params {
      body?: FilterRequest
}

export function getRolePage(http: HttpClient, rootUrl: string, params?: GetRolePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofRoleDto>> {
  const rb = new RequestBuilder(rootUrl, getRolePage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofRoleDto>;
    })
  );
}

getRolePage.PATH = '/role/bm/v1/page';
