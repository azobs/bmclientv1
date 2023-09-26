/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BasepriceDto } from '../../models/baseprice-dto';

export interface UpdateBaseprice$Params {
      body?: BasepriceDto
}

export function updateBaseprice(http: HttpClient, rootUrl: string, params?: UpdateBaseprice$Params, context?: HttpContext): Observable<StrictHttpResponse<BasepriceDto>> {
  const rb = new RequestBuilder(rootUrl, updateBaseprice.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BasepriceDto>;
    })
  );
}

updateBaseprice.PATH = '/bp/bm/v1/update';
