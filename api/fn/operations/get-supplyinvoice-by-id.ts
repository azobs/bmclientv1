/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplyinvoiceDto } from '../../models/supplyinvoice-dto';

export interface GetSupplyinvoiceById$Params {

/**
 * The id that represent the Supplyinvoice found. It's compulsory if not the operation can't proceed
 */
  id: number;
}

export function getSupplyinvoiceById(http: HttpClient, rootUrl: string, params: GetSupplyinvoiceById$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplyinvoiceDto>> {
  const rb = new RequestBuilder(rootUrl, getSupplyinvoiceById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SupplyinvoiceDto>;
    })
  );
}

getSupplyinvoiceById.PATH = '/supplyinvoice/bm/v1/getby/{id}';
