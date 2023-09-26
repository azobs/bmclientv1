/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeliverydetailsDto } from '../../models/deliverydetails-dto';

export interface SaveDeliverydetails$Params {
      body?: DeliverydetailsDto
}

export function saveDeliverydetails(http: HttpClient, rootUrl: string, params?: SaveDeliverydetails$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliverydetailsDto>> {
  const rb = new RequestBuilder(rootUrl, saveDeliverydetails.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeliverydetailsDto>;
    })
  );
}

saveDeliverydetails.PATH = '/delivery/bm/v1/details/create';
