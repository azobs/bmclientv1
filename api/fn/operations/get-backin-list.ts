/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BackinDto } from '../../models/backin-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetBackinList$Params {
      body?: FilterRequest
}

export function getBackinList(http: HttpClient, rootUrl: string, params?: GetBackinList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BackinDto>>> {
  const rb = new RequestBuilder(rootUrl, getBackinList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<BackinDto>>;
    })
  );
}

getBackinList.PATH = '/backin/bm/v1/list';
