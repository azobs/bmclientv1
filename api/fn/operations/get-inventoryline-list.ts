/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { InventorylineDto } from '../../models/inventoryline-dto';

export interface GetInventorylineList$Params {
      body?: FilterRequest
}

export function getInventorylineList(http: HttpClient, rootUrl: string, params?: GetInventorylineList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InventorylineDto>>> {
  const rb = new RequestBuilder(rootUrl, getInventorylineList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<InventorylineDto>>;
    })
  );
}

getInventorylineList.PATH = '/inventory/bm/v1/line/list';
