/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArrivalDto } from '../../models/arrival-dto';

export interface UpdateArrival$Params {
      body?: ArrivalDto
}

export function updateArrival(http: HttpClient, rootUrl: string, params?: UpdateArrival$Params, context?: HttpContext): Observable<StrictHttpResponse<ArrivalDto>> {
  const rb = new RequestBuilder(rootUrl, updateArrival.PATH, 'put');
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

updateArrival.PATH = '/arrival/bm/v1/update';
