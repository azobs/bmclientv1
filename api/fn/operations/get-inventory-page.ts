/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofInventoryDto } from '../../models/pageof-inventory-dto';

export interface GetInventoryPage$Params {
      body?: FilterRequest
}

export function getInventoryPage(http: HttpClient, rootUrl: string, params?: GetInventoryPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofInventoryDto>> {
  const rb = new RequestBuilder(rootUrl, getInventoryPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofInventoryDto>;
    })
  );
}

getInventoryPage.PATH = '/inventory/bm/v1/page';
