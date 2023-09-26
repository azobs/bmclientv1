/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BackinDto } from '../../models/backin-dto';

export interface SaveBackin$Params {
      body?: BackinDto
}

export function saveBackin(http: HttpClient, rootUrl: string, params?: SaveBackin$Params, context?: HttpContext): Observable<StrictHttpResponse<BackinDto>> {
  const rb = new RequestBuilder(rootUrl, saveBackin.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BackinDto>;
    })
  );
}

saveBackin.PATH = '/backin/bm/v1/create';
