/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleDto } from '../../models/role-dto';

export interface GetRoleByRoletype$Params {

/**
 * The role type that represent the Role found. It's compulsory if not the operation can't proceed
 */
  roletype: string;
}

export function getRoleByRoletype(http: HttpClient, rootUrl: string, params: GetRoleByRoletype$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
  const rb = new RequestBuilder(rootUrl, getRoleByRoletype.PATH, 'get');
  if (params) {
    rb.path('roletype', params.roletype, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RoleDto>;
    })
  );
}

getRoleByRoletype.PATH = '/role/bm/v1/getby/{roletype}';
