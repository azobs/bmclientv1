/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PointofsaleDto } from '../../models/pointofsale-dto';

export interface GetPosList$Params {
      body?: FilterRequest
}

export function getPosList(http: HttpClient, rootUrl: string, params?: GetPosList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PointofsaleDto>>> {
  const rb = new RequestBuilder(rootUrl, getPosList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PointofsaleDto>>;
    })
  );
}

getPosList.PATH = '/pos/bm/v1/list';
