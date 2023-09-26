/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserbmDto } from '../../models/userbm-dto';

export interface GetUserbmByEmail$Params {

/**
 * The email that represent the Userbm found. It's compulsory if not the operation can't proceed
 */
  email: string;
}

export function getUserbmByEmail(http: HttpClient, rootUrl: string, params: GetUserbmByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
  const rb = new RequestBuilder(rootUrl, getUserbmByEmail.PATH, 'get');
  if (params) {
    rb.path('email', params.email, {});
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

getUserbmByEmail.PATH = '/userbm/bm/v1/getby/{email}';
