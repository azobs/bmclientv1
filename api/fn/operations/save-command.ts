/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandDto } from '../../models/command-dto';

export interface SaveCommand$Params {
      body?: CommandDto
}

export function saveCommand(http: HttpClient, rootUrl: string, params?: SaveCommand$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandDto>> {
  const rb = new RequestBuilder(rootUrl, saveCommand.PATH, 'post');
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

saveCommand.PATH = '/command/bm/v1/create';
