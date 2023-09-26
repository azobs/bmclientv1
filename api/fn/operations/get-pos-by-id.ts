/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PointofsaleDto } from '../../models/pointofsale-dto';

export interface GetPosById$Params {

/**
 * The id that represent the Pointofsale found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getPosById(http: HttpClient, rootUrl: string, params: GetPosById$Params, context?: HttpContext): Observable<StrictHttpResponse<PointofsaleDto>> {
  const rb = new RequestBuilder(rootUrl, getPosById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PointofsaleDto>;
    })
  );
}

getPosById.PATH = '/pos/bm/v1/getby/{id}';
