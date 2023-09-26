/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofDeliverydetailsDto } from '../../models/pageof-deliverydetails-dto';

export interface GetDeliverydetailsPage$Params {
      body?: FilterRequest
}

export function getDeliverydetailsPage(http: HttpClient, rootUrl: string, params?: GetDeliverydetailsPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofDeliverydetailsDto>> {
  const rb = new RequestBuilder(rootUrl, getDeliverydetailsPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofDeliverydetailsDto>;
    })
  );
}

getDeliverydetailsPage.PATH = '/delivery/bm/v1/details/page';
