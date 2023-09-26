/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TestDto } from '../../models/test-dto';

export interface ApiTestSecurebmv1$Params {
}

export function apiTestSecurebmv1(http: HttpClient, rootUrl: string, params?: ApiTestSecurebmv1$Params, context?: HttpContext): Observable<StrictHttpResponse<TestDto>> {
  const rb = new RequestBuilder(rootUrl, apiTestSecurebmv1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TestDto>;
    })
  );
}

apiTestSecurebmv1.PATH = '/test/bm/v1/securebmv1';
