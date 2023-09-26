/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BackindetailsDto } from '../../models/backindetails-dto';

export interface SaveBackindetails$Params {
      body?: BackindetailsDto
}

export function saveBackindetails(http: HttpClient, rootUrl: string, params?: SaveBackindetails$Params, context?: HttpContext): Observable<StrictHttpResponse<BackindetailsDto>> {
  const rb = new RequestBuilder(rootUrl, saveBackindetails.PATH, 'post');
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

saveBackindetails.PATH = '/backin/bm/v1/details/create';
