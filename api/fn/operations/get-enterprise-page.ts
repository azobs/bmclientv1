/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofEnterpriseDto } from '../../models/pageof-enterprise-dto';

export interface GetEnterprisePage$Params {
      body?: FilterRequest
}

export function getEnterprisePage(http: HttpClient, rootUrl: string, params?: GetEnterprisePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofEnterpriseDto>> {
  const rb = new RequestBuilder(rootUrl, getEnterprisePage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofEnterpriseDto>;
    })
  );
}

getEnterprisePage.PATH = '/enterprise/bm/v1/page';
