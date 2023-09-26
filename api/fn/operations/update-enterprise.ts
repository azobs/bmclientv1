/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EnterpriseDto } from '../../models/enterprise-dto';

export interface UpdateEnterprise$Params {
      body?: EnterpriseDto
}

export function updateEnterprise(http: HttpClient, rootUrl: string, params?: UpdateEnterprise$Params, context?: HttpContext): Observable<StrictHttpResponse<EnterpriseDto>> {
  const rb = new RequestBuilder(rootUrl, updateEnterprise.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EnterpriseDto>;
    })
  );
}

updateEnterprise.PATH = '/enterprise/bm/v1/update';
