/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BasepriceDto } from '../../models/baseprice-dto';

export interface GetBasepriceById$Params {

/**
 * The id that represent the Baseprice found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getBasepriceById(http: HttpClient, rootUrl: string, params: GetBasepriceById$Params, context?: HttpContext): Observable<StrictHttpResponse<BasepriceDto>> {
  const rb = new RequestBuilder(rootUrl, getBasepriceById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getBasepriceById.PATH = '/bp/bm/v1/getby/{id}';
