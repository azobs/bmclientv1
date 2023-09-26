/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PackagingDto } from '../../models/packaging-dto';

export interface GetPackagingById$Params {

/**
 * The id that represent the Packaging found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getPackagingById(http: HttpClient, rootUrl: string, params: GetPackagingById$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingDto>> {
  const rb = new RequestBuilder(rootUrl, getPackagingById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PackagingDto>;
    })
  );
}

getPackagingById.PATH = '/packaging/bm/v1/getby/{id}';
