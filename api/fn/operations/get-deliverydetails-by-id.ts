/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeliverydetailsDto } from '../../models/deliverydetails-dto';

export interface GetDeliverydetailsById$Params {

/**
 * The id that represent the Deliverydetails found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getDeliverydetailsById(http: HttpClient, rootUrl: string, params: GetDeliverydetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliverydetailsDto>> {
  const rb = new RequestBuilder(rootUrl, getDeliverydetailsById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getDeliverydetailsById.PATH = '/delivery/bm/v1/details/getby/{id}';
