/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductformatedDto } from '../../models/productformated-dto';

export interface GetProductformatedById$Params {

/**
 * The id that represent the Productformated found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getProductformatedById(http: HttpClient, rootUrl: string, params: GetProductformatedById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductformatedDto>> {
  const rb = new RequestBuilder(rootUrl, getProductformatedById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductformatedDto>;
    })
  );
}

getProductformatedById.PATH = '/pf/bm/v1/getby/{id}';
