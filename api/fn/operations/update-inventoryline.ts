/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventorylineDto } from '../../models/inventoryline-dto';

export interface UpdateInventoryline$Params {
      body?: InventorylineDto
}

export function updateInventoryline(http: HttpClient, rootUrl: string, params?: UpdateInventoryline$Params, context?: HttpContext): Observable<StrictHttpResponse<InventorylineDto>> {
  const rb = new RequestBuilder(rootUrl, updateInventoryline.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InventorylineDto>;
    })
  );
}

updateInventoryline.PATH = '/inventory/bm/v1/line/update';
