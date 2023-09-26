/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { RoleDto } from '../../models/role-dto';

export interface GetRoleList$Params {
      body?: FilterRequest
}

export function getRoleList(http: HttpClient, rootUrl: string, params?: GetRoleList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
  const rb = new RequestBuilder(rootUrl, getRoleList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RoleDto>>;
    })
  );
}

getRoleList.PATH = '/role/bm/v1/list';
