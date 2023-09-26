/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandDto } from '../../models/command-dto';

export interface UpdateCommand$Params {
      body?: CommandDto
}

export function updateCommand(http: HttpClient, rootUrl: string, params?: UpdateCommand$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandDto>> {
  const rb = new RequestBuilder(rootUrl, updateCommand.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

updateCommand.PATH = '/command/bm/v1/update';
