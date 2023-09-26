/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeliveryDto } from '../../models/delivery-dto';

export interface SaveDelivery$Params {
      body?: DeliveryDto
}

export function saveDelivery(http: HttpClient, rootUrl: string, params?: SaveDelivery$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliveryDto>> {
  const rb = new RequestBuilder(rootUrl, saveDelivery.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

saveDelivery.PATH = '/delivery/bm/v1/create';
