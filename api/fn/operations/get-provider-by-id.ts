/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProviderDto } from '../../models/provider-dto';

export interface GetProviderById$Params {

/**
 * The id that represent the Provider found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getProviderById(http: HttpClient, rootUrl: string, params: GetProviderById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProviderDto>> {
  const rb = new RequestBuilder(rootUrl, getProviderById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getProviderById.PATH = '/provider/bm/v1/getby/{id}';
