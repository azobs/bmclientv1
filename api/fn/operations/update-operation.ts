/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OperationDto } from '../../models/operation-dto';

export interface UpdateOperation$Params {
      body?: OperationDto
}

export function updateOperation(http: HttpClient, rootUrl: string, params?: UpdateOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<OperationDto>> {
  const rb = new RequestBuilder(rootUrl, updateOperation.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

updateOperation.PATH = '/operation/bm/v1/update';
