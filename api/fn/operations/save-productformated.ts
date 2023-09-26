/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductformatedDto } from '../../models/productformated-dto';

export interface SaveProductformated$Params {
      body?: ProductformatedDto
}

export function saveProductformated(http: HttpClient, rootUrl: string, params?: SaveProductformated$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductformatedDto>> {
  const rb = new RequestBuilder(rootUrl, saveProductformated.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

saveProductformated.PATH = '/pf/bm/v1/create';
