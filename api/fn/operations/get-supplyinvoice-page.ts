/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterRequest } from '../../models/filter-request';
import { PageofSupplyinvoiceDto } from '../../models/pageof-supplyinvoice-dto';

export interface GetSupplyinvoicePage$Params {
      body?: FilterRequest
}

export function getSupplyinvoicePage(http: HttpClient, rootUrl: string, params?: GetSupplyinvoicePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofSupplyinvoiceDto>> {
  const rb = new RequestBuilder(rootUrl, getSupplyinvoicePage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageofSupplyinvoiceDto>;
    })
  );
}

getSupplyinvoicePage.PATH = '/supplyinvoice/bm/v1/page';
