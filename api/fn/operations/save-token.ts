/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TokenDto } from '../../models/token-dto';

export interface SaveToken$Params {
      body?: TokenDto
}

export function saveToken(http: HttpClient, rootUrl: string, params?: SaveToken$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenDto>> {
  const rb = new RequestBuilder(rootUrl, saveToken.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

saveToken.PATH = '/auth/bm/v1/token/create';
