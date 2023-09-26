/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProviderDto } from '../../models/provider-dto';

export interface UpdateProvider$Params {
      body?: ProviderDto
}

export function updateProvider(http: HttpClient, rootUrl: string, params?: UpdateProvider$Params, context?: HttpContext): Observable<StrictHttpResponse<ProviderDto>> {
  const rb = new RequestBuilder(rootUrl, updateProvider.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProviderDto>;
    })
  );
}

updateProvider.PATH = '/provider/bm/v1/update';
