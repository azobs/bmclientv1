/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { UnitDto } from '../../models/unit-dto';

export interface GetUnitList$Params {
      body?: FilterRequest
}

export function getUnitList(http: HttpClient, rootUrl: string, params?: GetUnitList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UnitDto>>> {
  const rb = new RequestBuilder(rootUrl, getUnitList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UnitDto>>;
    })
  );
}

getUnitList.PATH = '/unit/bm/v1/unit/list';
