/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormatDto } from '../../models/format-dto';

export interface SaveFormat$Params {
      body?: FormatDto
}

export function saveFormat(http: HttpClient, rootUrl: string, params?: SaveFormat$Params, context?: HttpContext): Observable<StrictHttpResponse<FormatDto>> {
  const rb = new RequestBuilder(rootUrl, saveFormat.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormatDto>;
    })
  );
}

saveFormat.PATH = '/format/bm/v1/create';
