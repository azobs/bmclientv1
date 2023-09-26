/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SaleDto } from '../../models/sale-dto';

export interface GetSaleById$Params {

/**
 * The id that represent the Sale found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getSaleById(http: HttpClient, rootUrl: string, params: GetSaleById$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleDto>> {
  const rb = new RequestBuilder(rootUrl, getSaleById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SaleDto>;
    })
  );
}

getSaleById.PATH = '/sale/bm/v1/getby/{id}';
