/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofArrivalDto } from '../../models/pageof-arrival-dto';

export interface GetArrivalPage$Params {
      body?: FilterRequest
}

export function getArrivalPage(http: HttpClient, rootUrl: string, params?: GetArrivalPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofArrivalDto>> {
  const rb = new RequestBuilder(rootUrl, getArrivalPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofArrivalDto>;
    })
  );
}

getArrivalPage.PATH = '/arrival/bm/v1/page';
