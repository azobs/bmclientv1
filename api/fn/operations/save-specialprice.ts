/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SpecialpriceDto } from '../../models/specialprice-dto';

export interface SaveSpecialprice$Params {
      body?: SpecialpriceDto
}

export function saveSpecialprice(http: HttpClient, rootUrl: string, params?: SaveSpecialprice$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialpriceDto>> {
  const rb = new RequestBuilder(rootUrl, saveSpecialprice.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SpecialpriceDto>;
    })
  );
}

saveSpecialprice.PATH = '/sp/bm/v1/create';
