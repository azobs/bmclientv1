/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoadingDto } from '../../models/loading-dto';

export interface CloseLoadingById$Params {

/**
 * The id that represent the Loading to close. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function closeLoadingById(http: HttpClient, rootUrl: string, params: CloseLoadingById$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
  const rb = new RequestBuilder(rootUrl, closeLoadingById.PATH, 'get');
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

closeLoadingById.PATH = '/loading/bm/v1/close';
