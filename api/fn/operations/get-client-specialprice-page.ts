/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofClientSpecialpriceDto } from '../../models/pageof-client-specialprice-dto';

export interface GetClientSpecialpricePage$Params {
      body?: FilterRequest
}

export function getClientSpecialpricePage(http: HttpClient, rootUrl: string, params?: GetClientSpecialpricePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofClientSpecialpriceDto>> {
  const rb = new RequestBuilder(rootUrl, getClientSpecialpricePage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofClientSpecialpriceDto>;
    })
  );
}

getClientSpecialpricePage.PATH = '/clientspecialprice/bm/v1/page';
