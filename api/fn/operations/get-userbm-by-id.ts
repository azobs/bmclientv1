/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserbmDto } from '../../models/userbm-dto';

export interface GetUserbmById$Params {

/**
 * The id that represent the Userbm found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getUserbmById(http: HttpClient, rootUrl: string, params: GetUserbmById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
  const rb = new RequestBuilder(rootUrl, getUserbmById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getUserbmById.PATH = '/userbm/bm/v1/getby/{id}';
