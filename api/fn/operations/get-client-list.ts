/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientDto } from '../../models/client-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetClientList$Params {
      body?: FilterRequest
}

export function getClientList(http: HttpClient, rootUrl: string, params?: GetClientList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientDto>>> {
  const rb = new RequestBuilder(rootUrl, getClientList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ClientDto>>;
    })
  );
}

getClientList.PATH = '/client/bm/v1/list';
