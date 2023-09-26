/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OperationDto } from '../../models/operation-dto';

export interface GetOperationById$Params {

/**
 * The id that represent the Operation found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getOperationById(http: HttpClient, rootUrl: string, params: GetOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<OperationDto>> {
  const rb = new RequestBuilder(rootUrl, getOperationById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OperationDto>;
    })
  );
}

getOperationById.PATH = '/operation/bm/v1/getby/{id}';
