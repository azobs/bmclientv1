/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { SaleDto } from '../../models/sale-dto';

export interface GetSaleList$Params {
      body?: FilterRequest
}

export function getSaleList(http: HttpClient, rootUrl: string, params?: GetSaleList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SaleDto>>> {
  const rb = new RequestBuilder(rootUrl, getSaleList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SaleDto>>;
    })
  );
}

getSaleList.PATH = '/sale/bm/v1/list';
