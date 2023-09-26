/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofInventorylineDto } from '../../models/pageof-inventoryline-dto';

export interface GetInventorylinePage$Params {
      body?: FilterRequest
}

export function getInventorylinePage(http: HttpClient, rootUrl: string, params?: GetInventorylinePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofInventorylineDto>> {
  const rb = new RequestBuilder(rootUrl, getInventorylinePage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofInventorylineDto>;
    })
  );
}

getInventorylinePage.PATH = '/inventory/bm/v1/line/page';
