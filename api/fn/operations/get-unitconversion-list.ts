/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { UnitconversionDto } from '../../models/unitconversion-dto';

export interface GetUnitconversionList$Params {
      body?: FilterRequest
}

export function getUnitconversionList(http: HttpClient, rootUrl: string, params?: GetUnitconversionList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UnitconversionDto>>> {
  const rb = new RequestBuilder(rootUrl, getUnitconversionList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UnitconversionDto>>;
    })
  );
}

getUnitconversionList.PATH = '/unit/bm/v1/conversion/list';
