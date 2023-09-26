/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormatDto } from '../../models/format-dto';

export interface GetFormatById$Params {

/**
 * The id that represent the Format found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getFormatById(http: HttpClient, rootUrl: string, params: GetFormatById$Params, context?: HttpContext): Observable<StrictHttpResponse<FormatDto>> {
  const rb = new RequestBuilder(rootUrl, getFormatById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormatDto>;
    })
  );
}

getFormatById.PATH = '/format/bm/v1/getby/{id}';
