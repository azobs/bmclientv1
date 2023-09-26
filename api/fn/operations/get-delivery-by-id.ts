/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeliveryDto } from '../../models/delivery-dto';

export interface GetDeliveryById$Params {

/**
 * The id that represent the Delivery found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getDeliveryById(http: HttpClient, rootUrl: string, params: GetDeliveryById$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliveryDto>> {
  const rb = new RequestBuilder(rootUrl, getDeliveryById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeliveryDto>;
    })
  );
}

getDeliveryById.PATH = '/delivery/bm/v1/getby/{id}';
