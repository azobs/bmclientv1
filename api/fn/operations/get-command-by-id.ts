/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandDto } from '../../models/command-dto';

export interface GetCommandById$Params {

/**
 * The id that represent the Command found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getCommandById(http: HttpClient, rootUrl: string, params: GetCommandById$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandDto>> {
  const rb = new RequestBuilder(rootUrl, getCommandById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommandDto>;
    })
  );
}

getCommandById.PATH = '/command/bm/v1/getby/{id}';
