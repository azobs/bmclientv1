/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EnterpriseDto } from '../../models/enterprise-dto';

export interface GetEnterpriseById$Params {

/**
 * The id that represent the Enterprise found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getEnterpriseById(http: HttpClient, rootUrl: string, params: GetEnterpriseById$Params, context?: HttpContext): Observable<StrictHttpResponse<EnterpriseDto>> {
  const rb = new RequestBuilder(rootUrl, getEnterpriseById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getEnterpriseById.PATH = '/enterprise/bm/v1/getby/{id}';
