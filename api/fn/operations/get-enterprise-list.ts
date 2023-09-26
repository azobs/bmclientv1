/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EnterpriseDto } from '../../models/enterprise-dto';
import { FilterRequest } from '../../models/filter-request';

export interface GetEnterpriseList$Params {
      body?: FilterRequest
}

export function getEnterpriseList(http: HttpClient, rootUrl: string, params?: GetEnterpriseList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EnterpriseDto>>> {
  const rb = new RequestBuilder(rootUrl, getEnterpriseList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EnterpriseDto>>;
    })
  );
}

getEnterpriseList.PATH = '/enterprise/bm/v1/list';
