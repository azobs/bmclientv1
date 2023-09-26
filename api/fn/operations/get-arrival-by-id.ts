/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArrivalDto } from '../../models/arrival-dto';

export interface GetArrivalById$Params {

/**
 * The id that represent the Arrival found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getArrivalById(http: HttpClient, rootUrl: string, params: GetArrivalById$Params, context?: HttpContext): Observable<StrictHttpResponse<ArrivalDto>> {
  const rb = new RequestBuilder(rootUrl, getArrivalById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ArrivalDto>;
    })
  );
}

getArrivalById.PATH = '/arrival/bm/v1/getby/{id}';
