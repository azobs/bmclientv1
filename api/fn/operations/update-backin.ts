/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BackinDto } from '../../models/backin-dto';

export interface UpdateBackin$Params {
      body?: BackinDto
}

export function updateBackin(http: HttpClient, rootUrl: string, params?: UpdateBackin$Params, context?: HttpContext): Observable<StrictHttpResponse<BackinDto>> {
  const rb = new RequestBuilder(rootUrl, updateBackin.PATH, 'put');
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

updateBackin.PATH = '/backin/bm/v1/update';
