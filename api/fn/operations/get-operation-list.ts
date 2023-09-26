/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { OperationDto } from '../../models/operation-dto';

export interface GetOperationList$Params {
      body?: FilterRequest
}

export function getOperationList(http: HttpClient, rootUrl: string, params?: GetOperationList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OperationDto>>> {
  const rb = new RequestBuilder(rootUrl, getOperationList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OperationDto>>;
    })
  );
}

getOperationList.PATH = '/operation/bm/v1/list';
