/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UnitDto } from '../../models/unit-dto';

export interface GetUnitById$Params {

/**
 * The id that represent the Unit found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getUnitById(http: HttpClient, rootUrl: string, params: GetUnitById$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitDto>> {
  const rb = new RequestBuilder(rootUrl, getUnitById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UnitDto>;
    })
  );
}

getUnitById.PATH = '/unit/bm/v1/unit/getby/{id}';
