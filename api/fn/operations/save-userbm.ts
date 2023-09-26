/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserbmDto } from '../../models/userbm-dto';

export interface SaveUserbm$Params {
      body?: UserbmDto
}

export function saveUserbm(http: HttpClient, rootUrl: string, params?: SaveUserbm$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
  const rb = new RequestBuilder(rootUrl, saveUserbm.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

saveUserbm.PATH = '/userbm/bm/v1/create';
