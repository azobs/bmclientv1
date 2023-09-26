/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { FormatDto } from '../../models/format-dto';

export interface GetFormatList$Params {
      body?: FilterRequest
}

export function getFormatList(http: HttpClient, rootUrl: string, params?: GetFormatList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FormatDto>>> {
  const rb = new RequestBuilder(rootUrl, getFormatList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FormatDto>>;
    })
  );
}

getFormatList.PATH = '/format/bm/v1/list';
