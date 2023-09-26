/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArrivalDto } from '../../models/arrival-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetArrivalList$Params {
      body?: FilterRequest
}

export function getArrivalList(http: HttpClient, rootUrl: string, params?: GetArrivalList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArrivalDto>>> {
  const rb = new RequestBuilder(rootUrl, getArrivalList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ArrivalDto>>;
    })
  );
}

getArrivalList.PATH = '/arrival/bm/v1/list';
