/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserbmDto } from '../../models/userbm-dto';

export interface GetUserbmByLogin$Params {

/**
 * The login that represent the Userbm found. It's compulsory if not the operation can't proceed
 */
  login: string;
}

export function getUserbmByLogin(http: HttpClient, rootUrl: string, params: GetUserbmByLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
  const rb = new RequestBuilder(rootUrl, getUserbmByLogin.PATH, 'get');
  if (params) {
    rb.path('login', params.login, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserbmDto>;
    })
  );
}

getUserbmByLogin.PATH = '/userbm/bm/v1/getby/{login}';
