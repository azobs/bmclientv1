/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoadingDto } from '../../models/loading-dto';

export interface OpenLoadingById$Params {

/**
 * The id that represent the Loading to open. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function openLoadingById(http: HttpClient, rootUrl: string, params: OpenLoadingById$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
  const rb = new RequestBuilder(rootUrl, openLoadingById.PATH, 'get');
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

openLoadingById.PATH = '/loading/bm/v1/open';
