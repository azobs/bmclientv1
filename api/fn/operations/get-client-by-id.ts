/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientDto } from '../../models/client-dto';

export interface GetClientById$Params {

/**
 * The id that represent the Client found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getClientById(http: HttpClient, rootUrl: string, params: GetClientById$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
  const rb = new RequestBuilder(rootUrl, getClientById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ClientDto>;
    })
  );
}

getClientById.PATH = '/client/bm/v1/getby/{id}';
