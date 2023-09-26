/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofSaleDto } from '../../models/pageof-sale-dto';

export interface GetSalePage$Params {
      body?: FilterRequest
}

export function getSalePage(http: HttpClient, rootUrl: string, params?: GetSalePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofSaleDto>> {
  const rb = new RequestBuilder(rootUrl, getSalePage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofSaleDto>;
    })
  );
}

getSalePage.PATH = '/sale/bm/v1/page';
