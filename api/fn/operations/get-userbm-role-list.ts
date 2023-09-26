/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { UserbmRoleDto } from '../../models/userbm-role-dto';

export interface GetUserbmRoleList$Params {
      body?: FilterRequest
}

export function getUserbmRoleList(http: HttpClient, rootUrl: string, params?: GetUserbmRoleList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserbmRoleDto>>> {
  const rb = new RequestBuilder(rootUrl, getUserbmRoleList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UserbmRoleDto>>;
    })
  );
}

getUserbmRoleList.PATH = '/userbm_role/bm/v1/list';
