/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplyinvoiceDto } from '../../models/supplyinvoice-dto';

export interface SaveSupplyinvoice$Params {
      body?: SupplyinvoiceDto
}

export function saveSupplyinvoice(http: HttpClient, rootUrl: string, params?: SaveSupplyinvoice$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplyinvoiceDto>> {
  const rb = new RequestBuilder(rootUrl, saveSupplyinvoice.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

saveSupplyinvoice.PATH = '/supplyinvoice/bm/v1/create';
