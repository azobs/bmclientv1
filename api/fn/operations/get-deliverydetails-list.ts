/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeliverydetailsDto } from '../../models/deliverydetails-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetDeliverydetailsList$Params {
      body?: FilterRequest
}

export function getDeliverydetailsList(http: HttpClient, rootUrl: string, params?: GetDeliverydetailsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DeliverydetailsDto>>> {
  const rb = new RequestBuilder(rootUrl, getDeliverydetailsList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DeliverydetailsDto>>;
    })
  );
}

getDeliverydetailsList.PATH = '/delivery/bm/v1/details/list';
