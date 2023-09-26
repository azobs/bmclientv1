/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofFormatDto } from '../../models/pageof-format-dto';

export interface GetFormatPage$Params {
      body?: FilterRequest
}

export function getFormatPage(http: HttpClient, rootUrl: string, params?: GetFormatPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofFormatDto>> {
  const rb = new RequestBuilder(rootUrl, getFormatPage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofFormatDto>;
    })
  );
}

getFormatPage.PATH = '/format/bm/v1/page';
