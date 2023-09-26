/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofOperationDto } from '../../models/pageof-operation-dto';

export interface GetOperationPage$Params {
      body?: FilterRequest
}

export function getOperationPage(http: HttpClient, rootUrl: string, params?: GetOperationPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofOperationDto>> {
  const rb = new RequestBuilder(rootUrl, getOperationPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofOperationDto>;
    })
  );
}

getOperationPage.PATH = '/operation/bm/v1/page';
