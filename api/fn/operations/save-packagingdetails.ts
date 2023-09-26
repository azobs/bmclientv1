/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PackagingdetailsDto } from '../../models/packagingdetails-dto';

export interface SavePackagingdetails$Params {
      body?: PackagingdetailsDto
}

export function savePackagingdetails(http: HttpClient, rootUrl: string, params?: SavePackagingdetails$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingdetailsDto>> {
  const rb = new RequestBuilder(rootUrl, savePackagingdetails.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

savePackagingdetails.PATH = '/loading/bm/v1/packaging/details/create';
