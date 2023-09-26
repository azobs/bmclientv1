/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountOperationDto } from '../../models/account-operation-dto';

export interface GetAccountOperationById$Params {

/**
 * The id that represent the AccountOperation found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getAccountOperationById(http: HttpClient, rootUrl: string, params: GetAccountOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountOperationDto>> {
  const rb = new RequestBuilder(rootUrl, getAccountOperationById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccountOperationDto>;
    })
  );
}

getAccountOperationById.PATH = '/account/bm/v1/operation/getby/{id}';
