/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TokenDto } from '../../models/token-dto';

export interface GetPermissionByTokenvalue$Params {

/**
 * The name that represent the Token found. It's compulsory if not the operation can't proceed
 */
  tokenValue: string;
}

export function getPermissionByTokenvalue(http: HttpClient, rootUrl: string, params: GetPermissionByTokenvalue$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenDto>> {
  const rb = new RequestBuilder(rootUrl, getPermissionByTokenvalue.PATH, 'get');
  if (params) {
    rb.path('tokenValue', params.tokenValue, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TokenDto>;
    })
  );
}

getPermissionByTokenvalue.PATH = '/auth/bm/v1/token/getby/{tokenValue}';
