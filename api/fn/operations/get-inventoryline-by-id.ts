/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InventorylineDto } from '../../models/inventoryline-dto';

export interface GetInventorylineById$Params {

/**
 * The id that represent the Inventoryline found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getInventorylineById(http: HttpClient, rootUrl: string, params: GetInventorylineById$Params, context?: HttpContext): Observable<StrictHttpResponse<InventorylineDto>> {
  const rb = new RequestBuilder(rootUrl, getInventorylineById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getInventorylineById.PATH = '/inventory/bm/v1/line/getby/{id}';
