/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoadingDto } from '../../models/loading-dto';

export interface GetLoadingById$Params {

/**
 * The id that represent the Loading found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getLoadingById(http: HttpClient, rootUrl: string, params: GetLoadingById$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
  const rb = new RequestBuilder(rootUrl, getLoadingById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getLoadingById.PATH = '/loading/bm/v1/getby/{id}';
