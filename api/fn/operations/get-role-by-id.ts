/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoleDto } from '../../models/role-dto';

export interface GetRoleById$Params {

/**
 * The id that represent the Role found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getRoleById(http: HttpClient, rootUrl: string, params: GetRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
  const rb = new RequestBuilder(rootUrl, getRoleById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getRoleById.PATH = '/role/bm/v1/getby/{id}';
