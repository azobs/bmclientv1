/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PackagingDto } from '../../models/packaging-dto';

export interface UpdatePackaging$Params {
      body?: PackagingDto
}

export function updatePackaging(http: HttpClient, rootUrl: string, params?: UpdatePackaging$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingDto>> {
  const rb = new RequestBuilder(rootUrl, updatePackaging.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

updatePackaging.PATH = '/packaging/bm/v1/update';
