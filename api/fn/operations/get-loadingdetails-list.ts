/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { LoadingdetailsDto } from '../../models/loadingdetails-dto';

export interface GetLoadingdetailsList$Params {
      body?: FilterRequest
}

export function getLoadingdetailsList(http: HttpClient, rootUrl: string, params?: GetLoadingdetailsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LoadingdetailsDto>>> {
  const rb = new RequestBuilder(rootUrl, getLoadingdetailsList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LoadingdetailsDto>>;
    })
  );
}

getLoadingdetailsList.PATH = '/loading/bm/v1/details/list';
