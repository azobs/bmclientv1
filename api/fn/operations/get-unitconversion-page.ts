/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofUnitconversionDto } from '../../models/pageof-unitconversion-dto';

export interface GetUnitconversionPage$Params {
      body?: FilterRequest
}

export function getUnitconversionPage(http: HttpClient, rootUrl: string, params?: GetUnitconversionPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofUnitconversionDto>> {
  const rb = new RequestBuilder(rootUrl, getUnitconversionPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofUnitconversionDto>;
    })
  );
}

getUnitconversionPage.PATH = '/unit/bm/v1/conversion/page';
