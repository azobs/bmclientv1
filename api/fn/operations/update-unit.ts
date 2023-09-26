/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UnitDto } from '../../models/unit-dto';

export interface UpdateUnit$Params {
      body?: UnitDto
}

export function updateUnit(http: HttpClient, rootUrl: string, params?: UpdateUnit$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitDto>> {
  const rb = new RequestBuilder(rootUrl, updateUnit.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

updateUnit.PATH = '/unit/bm/v1/unit/update';
