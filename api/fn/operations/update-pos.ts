/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PointofsaleDto } from '../../models/pointofsale-dto';

export interface UpdatePos$Params {
      body?: PointofsaleDto
}

export function updatePos(http: HttpClient, rootUrl: string, params?: UpdatePos$Params, context?: HttpContext): Observable<StrictHttpResponse<PointofsaleDto>> {
  const rb = new RequestBuilder(rootUrl, updatePos.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
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

updatePos.PATH = '/pos/bm/v1/update';
