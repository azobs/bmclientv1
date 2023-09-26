/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BasepriceDto } from '../../models/baseprice-dto';

export interface SaveBaseprice$Params {
      body?: BasepriceDto
}

export function saveBaseprice(http: HttpClient, rootUrl: string, params?: SaveBaseprice$Params, context?: HttpContext): Observable<StrictHttpResponse<BasepriceDto>> {
  const rb = new RequestBuilder(rootUrl, saveBaseprice.PATH, 'post');
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

saveBaseprice.PATH = '/bp/bm/v1/create';
