/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArrivalDto } from '../../models/arrival-dto';

export interface SaveArrival$Params {
      body?: ArrivalDto
}

export function saveArrival(http: HttpClient, rootUrl: string, params?: SaveArrival$Params, context?: HttpContext): Observable<StrictHttpResponse<ArrivalDto>> {
  const rb = new RequestBuilder(rootUrl, saveArrival.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

saveArrival.PATH = '/arrival/bm/v1/create';
