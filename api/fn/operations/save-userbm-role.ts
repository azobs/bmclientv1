/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserbmRoleDto } from '../../models/userbm-role-dto';

export interface SaveUserbmRole$Params {
      body?: UserbmRoleDto
}

export function saveUserbmRole(http: HttpClient, rootUrl: string, params?: SaveUserbmRole$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmRoleDto>> {
  const rb = new RequestBuilder(rootUrl, saveUserbmRole.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserbmRoleDto>;
    })
  );
}

saveUserbmRole.PATH = '/userbm_role/bm/v1/create';
