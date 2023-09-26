/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BackindetailsDto } from '../../models/backindetails-dto';

export interface GetBackindetailsById$Params {

/**
 * The id that represent the Backindetails found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getBackindetailsById(http: HttpClient, rootUrl: string, params: GetBackindetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<BackindetailsDto>> {
  const rb = new RequestBuilder(rootUrl, getBackindetailsById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getBackindetailsById.PATH = '/backin/bm/v1/details/getby/{id}';
