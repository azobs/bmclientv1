/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoadingDto } from '../../models/loading-dto';

export interface UpdateLoading$Params {
      body?: LoadingDto
}

export function updateLoading(http: HttpClient, rootUrl: string, params?: UpdateLoading$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
  const rb = new RequestBuilder(rootUrl, updateLoading.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LoadingDto>;
    })
  );
}

updateLoading.PATH = '/loading/bm/v1/update';
