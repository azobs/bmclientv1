/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventoryDto } from '../../models/inventory-dto';

export interface GetInventoryById$Params {

/**
 * The id that represent the Inventory found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getInventoryById(http: HttpClient, rootUrl: string, params: GetInventoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryDto>> {
  const rb = new RequestBuilder(rootUrl, getInventoryById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InventoryDto>;
    })
  );
}

getInventoryById.PATH = '/inventory/bm/v1/getby/{id}';
