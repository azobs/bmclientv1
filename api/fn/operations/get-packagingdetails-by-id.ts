/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PackagingdetailsDto } from '../../models/packagingdetails-dto';

export interface GetPackagingdetailsById$Params {

/**
 * The id that represent the Packagingdetails found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getPackagingdetailsById(http: HttpClient, rootUrl: string, params: GetPackagingdetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingdetailsDto>> {
  const rb = new RequestBuilder(rootUrl, getPackagingdetailsById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PackagingdetailsDto>;
    })
  );
}

getPackagingdetailsById.PATH = '/loading/bm/v1/packaging/details/getby/{id}';
