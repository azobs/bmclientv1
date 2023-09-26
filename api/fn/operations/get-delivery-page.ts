/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofDeliveryDto } from '../../models/pageof-delivery-dto';

export interface GetDeliveryPage$Params {
      body?: FilterRequest
}

export function getDeliveryPage(http: HttpClient, rootUrl: string, params?: GetDeliveryPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofDeliveryDto>> {
  const rb = new RequestBuilder(rootUrl, getDeliveryPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofDeliveryDto>;
    })
  );
}

getDeliveryPage.PATH = '/delivery/bm/v1/page';
