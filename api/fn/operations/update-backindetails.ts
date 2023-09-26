/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BackindetailsDto } from '../../models/backindetails-dto';

export interface UpdateBackindetails$Params {
      body?: BackindetailsDto
}

export function updateBackindetails(http: HttpClient, rootUrl: string, params?: UpdateBackindetails$Params, context?: HttpContext): Observable<StrictHttpResponse<BackindetailsDto>> {
  const rb = new RequestBuilder(rootUrl, updateBackindetails.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BackindetailsDto>;
    })
  );
}

updateBackindetails.PATH = '/backin/bm/v1/details/update';
