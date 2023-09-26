/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PermissionDto } from '../../models/permission-dto';

export interface GetPermissionById$Params {

/**
 * The id that represent the Permission found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getPermissionById(http: HttpClient, rootUrl: string, params: GetPermissionById$Params, context?: HttpContext): Observable<StrictHttpResponse<PermissionDto>> {
  const rb = new RequestBuilder(rootUrl, getPermissionById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PermissionDto>;
    })
  );
}

getPermissionById.PATH = '/auth/bm/v1/permission/getby/{id}';
