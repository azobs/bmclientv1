/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TokenDto } from '../../models/token-dto';

export interface GetTokenById$Params {

/**
 * The id that represent the Token found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getTokenById(http: HttpClient, rootUrl: string, params: GetTokenById$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenDto>> {
  const rb = new RequestBuilder(rootUrl, getTokenById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getTokenById.PATH = '/auth/bm/v1/token/getby/{id}';
