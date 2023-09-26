/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { ProviderDto } from '../../models/provider-dto';

export interface GetProviderList$Params {
      body?: FilterRequest
}

export function getProviderList(http: HttpClient, rootUrl: string, params?: GetProviderList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProviderDto>>> {
  const rb = new RequestBuilder(rootUrl, getProviderList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProviderDto>>;
    })
  );
}

getProviderList.PATH = '/provider/bm/v1/list';
